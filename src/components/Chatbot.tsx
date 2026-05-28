import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Loader2, Phone, PhoneOff, Mic, MicOff } from "lucide-react";
import { cn } from "../lib/utils";

interface Message {
  role: "user" | "model";
  text: string;
}

// ── Audio helpers ─────────────────────────────────────────────────────────────

// Encode Float32 PCM → base64 PCM16
function float32ToBase64Pcm16(float32Array: Float32Array): string {
  const int16 = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    const s = Math.max(-1, Math.min(1, float32Array[i]));
    int16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  const bytes = new Uint8Array(int16.buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

// Decode base64 PCM16 24 kHz → Float32 for Web Audio
function base64Pcm16ToFloat32(b64: string, sampleRate = 24000): AudioBuffer | null {
  try {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    const int16 = new Int16Array(bytes.buffer);
    const ctx = getAudioContext(sampleRate);
    const buffer = ctx.createBuffer(1, int16.length, sampleRate);
    const float32 = buffer.getChannelData(0);
    for (let i = 0; i < int16.length; i++) {
      float32[i] = int16[i] / (int16[i] < 0 ? 0x8000 : 0x7fff);
    }
    return buffer;
  } catch {
    return null;
  }
}

let _audioCtx: AudioContext | null = null;
function getAudioContext(sampleRate = 24000): AudioContext {
  if (!_audioCtx || _audioCtx.state === "closed") {
    _audioCtx = new AudioContext({ sampleRate });
  }
  return _audioCtx;
}

// ── Component ─────────────────────────────────────────────────────────────────

type CallStatus = "idle" | "connecting" | "active" | "error";

export default function Chatbot() {
  // ── Chat state ──
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "call">("chat");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hey! 👋 I'm the Sheun Hub AI assistant. Are you working on a Shopify store right now?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ── Call state ──
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [callTranscript, setCallTranscript] = useState<Message[]>([]);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);
  const [callError, setCallError] = useState("");
  const [leadCaptured, setLeadCaptured] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioQueueRef = useRef<AudioBuffer[]>([]);
  const isPlayingRef = useRef(false);
  const nextPlayTimeRef = useRef(0);
  const mutedRef = useRef(false);

  useEffect(() => { mutedRef.current = isMuted; }, [isMuted]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, callTranscript]);

  // ── Audio playback queue ──
  const playNextInQueue = useCallback(() => {
    if (audioQueueRef.current.length === 0) {
      isPlayingRef.current = false;
      setIsAgentSpeaking(false);
      return;
    }
    isPlayingRef.current = true;
    setIsAgentSpeaking(true);
    const ctx = getAudioContext(24000);
    const buf = audioQueueRef.current.shift()!;
    const source = ctx.createBufferSource();
    source.buffer = buf;
    source.connect(ctx.destination);
    const startAt = Math.max(ctx.currentTime, nextPlayTimeRef.current);
    source.start(startAt);
    nextPlayTimeRef.current = startAt + buf.duration;
    source.onended = playNextInQueue;
  }, []);

  const enqueueAudio = useCallback((b64: string) => {
    const buf = base64Pcm16ToFloat32(b64, 24000);
    if (!buf) return;
    audioQueueRef.current.push(buf);
    if (!isPlayingRef.current) playNextInQueue();
  }, [playNextInQueue]);

  // ── Start call ──
  const startCall = useCallback(async () => {
    setCallStatus("connecting");
    setCallError("");
    setCallTranscript([]);
    setLeadCaptured(false);
    audioQueueRef.current = [];
    isPlayingRef.current = false;
    nextPlayTimeRef.current = 0;

    // Open WebSocket to our relay
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/live`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("[Call] WS connected, waiting for Gemini...");
    };

    ws.onmessage = async (event) => {
      try {
        const msg = JSON.parse(event.data);

        if (msg.type === "connected") {
          setCallStatus("active");
          startMicrophone(ws);
        }

        if (msg.type === "audio") {
          enqueueAudio(msg.data);
        }

        if (msg.type === "transcript" && msg.role === "model") {
          setCallTranscript(prev => {
            const last = prev[prev.length - 1];
            if (last?.role === "model") {
              return [...prev.slice(0, -1), { role: "model", text: last.text + msg.text }];
            }
            return [...prev, { role: "model", text: msg.text }];
          });
        }

        if (msg.type === "leadCaptured") {
          setLeadCaptured(true);
        }

        if (msg.type === "error") {
          setCallError(msg.message || "Connection error");
          setCallStatus("error");
          stopCall();
        }

        if (msg.type === "ended") {
          setCallStatus("idle");
          stopMicrophone();
        }
      } catch (e) {
        console.error("[Call] Message error:", e);
      }
    };

    ws.onerror = () => {
      setCallError("Connection error. Please check your internet and try again.");
      setCallStatus("error");
      stopMicrophone();
    };

    ws.onclose = () => {
      if (callStatus === "active" || callStatus === "connecting") {
        setCallStatus("idle");
      }
      stopMicrophone();
    };
  }, [enqueueAudio]);

  // ── Microphone capture ──
  const startMicrophone = async (ws: WebSocket) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: {
        sampleRate: 16000, channelCount: 1, echoCancellation: true, noiseSuppression: true
      }});
      streamRef.current = stream;

      const ctx = new AudioContext({ sampleRate: 16000 });
      audioCtxRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      const processor = ctx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      processor.onaudioprocess = (e) => {
        if (ws.readyState !== WebSocket.OPEN || mutedRef.current) return;
        const pcm = float32ToBase64Pcm16(e.inputBuffer.getChannelData(0));
        ws.send(JSON.stringify({ type: "audio", data: pcm }));
      };

      source.connect(processor);
      processor.connect(ctx.destination);
    } catch (err: any) {
      setCallError("Microphone access denied. Please allow microphone access.");
      setCallStatus("error");
      wsRef.current?.close();
    }
  };

  const stopMicrophone = () => {
    processorRef.current?.disconnect();
    processorRef.current = null;
    audioCtxRef.current?.close().catch(() => {});
    audioCtxRef.current = null;
    streamRef.current?.getTracks().forEach(t => t.stop());
    streamRef.current = null;
  };

  // ── End call ──
  const stopCall = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: "end" }));
      wsRef.current.close();
    }
    wsRef.current = null;
    stopMicrophone();
    audioQueueRef.current = [];
    isPlayingRef.current = false;
    setIsAgentSpeaking(false);
    setCallStatus("idle");
  }, []);

  // Cleanup on unmount
  useEffect(() => () => { stopCall(); }, [stopCall]);

  // ── Text chat ──
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = { role: "user" as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages
        .filter((_, i) => i > 0)
        .map(m => ({ role: m.role, parts: [{ text: m.text }] }));

      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: chatHistory, message: input }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to fetch response");

      if (data.clientEvent === "sendLeadEmail") {
        setMessages(prev => [...prev, { role: "model", text: "Sending your details to Sheun securely..." }]);
        setMessages(prev => [...prev, { role: "model", text: "Done! Your details have been delivered successfully." }]);
      }

      setMessages(prev => [...prev, { role: "model", text: data.text }]);
    } catch (error: any) {
      const msg = error.message?.includes("API key")
        ? "The Gemini API Key is missing. Please make sure to provide it in the published app settings."
        : "Sorry, I'm having trouble connecting right now. Please try again later!";
      setMessages(prev => [...prev, { role: "model", text: msg }]);
    } finally {
      setIsLoading(false);
    }
  };

  // ── Render ──
  const agentAvatar = (
    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
        alt="Assistant"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="fixed bottom-6 right-24 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[450px] h-[600px] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-navy/5 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy-gradient p-6 flex items-center justify-between text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy shadow-xl rotate-3 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                    alt="Assistant"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-base tracking-tight">Assistant</p>
                  <p className="text-[10px] text-green font-bold uppercase tracking-[0.3em]">Sheun Hub</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-3 rounded-2xl transition-all relative z-10">
                <X size={22} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-navy/5 bg-white">
              <button
                onClick={() => setActiveTab("chat")}
                className={cn(
                  "flex-1 py-3 text-sm font-bold transition-all flex items-center justify-center gap-2",
                  activeTab === "chat" ? "text-navy border-b-2 border-green" : "text-navy/40 hover:text-navy/70"
                )}
              >
                <MessageSquare size={15} /> Chat
              </button>
              <button
                onClick={() => setActiveTab("call")}
                className={cn(
                  "flex-1 py-3 text-sm font-bold transition-all flex items-center justify-center gap-2",
                  activeTab === "call" ? "text-navy border-b-2 border-green" : "text-navy/40 hover:text-navy/70"
                )}
              >
                <Phone size={15} /> Voice Call
              </button>
            </div>

            {/* ── CHAT TAB ── */}
            {activeTab === "chat" && (
              <>
                <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-light/30">
                  {messages.map((m, i) => (
                    <div key={i} className={cn("flex items-end gap-3 max-w-[85%]", m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto")}>
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg overflow-hidden", m.role === "user" ? "bg-navy text-white" : "bg-white")}>
                        {m.role === "user" ? <User size={18} /> : (
                          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Assistant" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className={cn("p-4 rounded-[20px] text-sm leading-relaxed shadow-sm", m.role === "user" ? "bg-navy text-white rounded-br-none" : "bg-white text-navy border border-navy/5 rounded-bl-none")}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex items-end gap-3 mr-auto">
                      {agentAvatar}
                      <div className="bg-white p-4 rounded-[20px] rounded-bl-none border border-navy/5 shadow-sm">
                        <Loader2 size={18} className="animate-spin text-green" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 bg-white border-t border-navy/5">
                  <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything..."
                      className="flex-grow bg-light border-2 border-transparent rounded-full py-3 px-6 text-sm focus:border-green outline-none transition-all font-medium"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="w-12 h-12 bg-green text-navy rounded-full flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-all duration-300 shrink-0 shadow-lg"
                    >
                      <Send size={20} />
                    </button>
                  </form>
                </div>
              </>
            )}

            {/* ── CALL TAB ── */}
            {activeTab === "call" && (
              <div className="flex-grow flex flex-col">
                {/* Transcript area */}
                <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-light/30">
                  {callStatus === "idle" && callTranscript.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-4">
                      <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center">
                        <Phone size={32} className="text-navy/30" />
                      </div>
                      <div>
                        <p className="font-bold text-navy text-base">Talk to AI Assistant</p>
                        <p className="text-navy/50 text-sm mt-1">Speak naturally — ask about store builds, migrations, pricing, or anything Shopify.</p>
                      </div>
                    </div>
                  )}

                  {callStatus === "connecting" && (
                    <div className="flex flex-col items-center justify-center h-full gap-3">
                      <Loader2 size={32} className="animate-spin text-green" />
                      <p className="text-navy/60 text-sm font-medium">Connecting to voice AI...</p>
                    </div>
                  )}

                  {callStatus === "error" && (
                    <div className="flex flex-col items-center justify-center h-full gap-3 px-4 text-center">
                      <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                        <PhoneOff size={24} className="text-red-400" />
                      </div>
                      <p className="text-red-500 text-sm font-medium">{callError}</p>
                      <button onClick={() => { setCallStatus("idle"); setCallError(""); }} className="text-xs text-navy/50 underline">Try again</button>
                    </div>
                  )}

                  {callStatus === "active" && callTranscript.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-4">
                      <div className={cn("w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-300", isAgentSpeaking ? "border-green shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "border-navy/10")}>
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Assistant" className="w-full h-full object-cover" />
                      </div>
                      <p className="text-sm font-medium text-navy/60">
                        {isAgentSpeaking ? "Assistant is speaking..." : "Listening..."}
                      </p>
                    </div>
                  )}

                  {callTranscript.map((m, i) => (
                    <div key={i} className={cn("flex items-end gap-3 max-w-[85%]", m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto")}>
                      <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0 overflow-hidden", m.role === "user" ? "bg-navy text-white" : "bg-white shadow-sm")}>
                        {m.role === "user" ? <User size={16} /> : (
                          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Assistant" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className={cn("p-3 rounded-[16px] text-xs leading-relaxed shadow-sm", m.role === "user" ? "bg-navy text-white rounded-br-none" : "bg-white text-navy border border-navy/5 rounded-bl-none")}>
                        {m.text}
                      </div>
                    </div>
                  ))}

                  {leadCaptured && (
                    <div className="mx-auto bg-green/10 border border-green/20 rounded-2xl p-4 text-center text-xs text-green font-medium">
                      ✓ Details sent to Sheun — he'll follow up shortly!
                    </div>
                  )}
                </div>

                {/* Call controls */}
                <div className="p-5 bg-white border-t border-navy/5 flex items-center justify-center gap-6">
                  {callStatus === "idle" || callStatus === "error" ? (
                    <button
                      onClick={startCall}
                      className="w-16 h-16 bg-green text-navy rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <Phone size={26} />
                    </button>
                  ) : (
                    <>
                      {/* Mute toggle */}
                      <button
                        onClick={() => setIsMuted(m => !m)}
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center transition-all border-2",
                          isMuted ? "bg-red-50 border-red-200 text-red-400" : "bg-light border-navy/10 text-navy/60 hover:border-navy/20"
                        )}
                      >
                        {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
                      </button>

                      {/* Speaking indicator */}
                      <div className={cn("w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300", isAgentSpeaking ? "border-green shadow-[0_0_20px_rgba(16,185,129,0.4)]" : "border-navy/10")}>
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Assistant" className="w-full h-full object-cover" />
                      </div>

                      {/* End call */}
                      <button
                        onClick={stopCall}
                        className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <PhoneOff size={20} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-2xl relative"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </motion.button>
    </div>
  );
}
