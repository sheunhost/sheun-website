import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, PhoneOff, Volume2, Sparkles, X, Send, AlertCircle, RefreshCw } from "lucide-react";

interface VoiceConversationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoiceConversation({ isOpen, onClose }: VoiceConversationProps) {
  const [status, setStatus] = useState<"disconnected" | "connecting" | "listening" | "speaking" | "text-only" | "error">("disconnected");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [micError, setMicError] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [userTranscript, setUserTranscript] = useState<string>("");
  const [aiTranscript, setAiTranscript] = useState<string>("");
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [textInput, setTextInput] = useState("");

  const wsRef = useRef<WebSocket | null>(null);
  const inputAudioCtxRef = useRef<AudioContext | null>(null);
  const outputAudioCtxRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const activeSourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const nextStartTimeRef = useRef<number>(0);
  const isMutedRef = useRef(isMuted);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  const floatTo16BitPCMBase64 = (float32Array: Float32Array): string => {
    const buffer = new ArrayBuffer(float32Array.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < float32Array.length; i++) {
      const s = Math.max(-1, Math.min(1, float32Array[i]));
      view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const base64ToFloat32 = (base64: string): Float32Array => {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const int16Array = new Int16Array(bytes.buffer);
    const float32Array = new Float32Array(int16Array.length);
    for (let i = 0; i < int16Array.length; i++) {
      float32Array[i] = int16Array[i] / (int16Array[i] < 0 ? 32768 : 32767);
    }
    return float32Array;
  };

  const stopAllAudioSources = () => {
    activeSourcesRef.current.forEach((source) => {
      try {
        source.stop();
        source.disconnect();
      } catch (_) {}
    });
    activeSourcesRef.current = [];
    nextStartTimeRef.current = 0;
  };

  const playAudioChunk = (base64Data: string) => {
    try {
      if (!outputAudioCtxRef.current) {
        outputAudioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
          sampleRate: 24000,
        });
      }

      const audioCtx = outputAudioCtxRef.current;
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      const float32Array = base64ToFloat32(base64Data);
      const buffer = audioCtx.createBuffer(1, float32Array.length, 24000);
      buffer.getChannelData(0).set(float32Array);

      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);

      const now = audioCtx.currentTime;
      const startTime = Math.max(now, nextStartTimeRef.current);
      source.start(startTime);
      nextStartTimeRef.current = startTime + buffer.duration;

      activeSourcesRef.current.push(source);
      setStatus("speaking");

      source.onended = () => {
        activeSourcesRef.current = activeSourcesRef.current.filter((s) => s !== source);
        if (activeSourcesRef.current.length === 0) {
          setStatus(micError ? "text-only" : "listening");
        }
      };
    } catch (e) {
      console.error("[Client] Error playing audio chunk:", e);
    }
  };

  const initMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      const inputAudioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 16000,
      });
      inputAudioCtxRef.current = inputAudioCtx;

      const source = inputAudioCtx.createMediaStreamSource(stream);
      const processor = inputAudioCtx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;

      source.connect(processor);
      processor.connect(inputAudioCtx.destination);

      processor.onaudioprocess = (e) => {
        if (isMutedRef.current || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

        const inputData = e.inputBuffer.getChannelData(0);
        let sum = 0;
        for (let i = 0; i < inputData.length; i++) {
          sum += inputData[i] * inputData[i];
        }
        const rms = Math.sqrt(sum / inputData.length);
        setVolumeLevel(Math.min(1, rms * 5));

        const base64PCM = floatTo16BitPCMBase64(inputData);
        wsRef.current.send(JSON.stringify({ audio: base64PCM }));
      };

      setMicError(false);
      setErrorMessage(null);
      setStatus("listening");
      console.log("[Client] Microphone connected successfully");
    } catch (err: any) {
      console.warn("[Client] Microphone access blocked or unavailable:", err.message);
      setMicError(true);
      setErrorMessage("Microphone access is disabled in browser permissions. You can chat via text below or allow microphone access.");
      setStatus("text-only");
    }
  };

  const startSession = async () => {
    setErrorMessage(null);
    setMicError(false);
    setStatus("connecting");
    setUserTranscript("");
    setAiTranscript("");

    try {
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const wsUrl = `${protocol}//${window.location.host}/api/live`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = async () => {
        console.log("[Client] WebSocket connected to /api/live");
        await initMicrophone();
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.error) {
            setErrorMessage(data.error);
          }

          if (data.inputTranscript) {
            setUserTranscript((prev) => (prev ? `${prev} ${data.inputTranscript}` : data.inputTranscript));
          }

          if (data.outputTranscript) {
            setAiTranscript((prev) => (prev ? `${prev} ${data.outputTranscript}` : data.outputTranscript));
          }

          if (data.audio) {
            playAudioChunk(data.audio);
          }

          if (data.interrupted) {
            stopAllAudioSources();
            setStatus(micError ? "text-only" : "listening");
          }
        } catch (err) {
          console.error("[Client] Failed to parse WebSocket message:", err);
        }
      };

      ws.onerror = (err) => {
        console.error("[Client] WebSocket error:", err);
        setErrorMessage("Connection to live voice session failed.");
        setStatus("error");
      };

      ws.onclose = () => {
        console.log("[Client] WebSocket closed");
        cleanupSession();
      };
    } catch (err: any) {
      console.error("[Client] Live session setup failed:", err);
      setErrorMessage(err.message || "Failed to start live session");
      setStatus("error");
    }
  };

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim() || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

    const message = textInput.trim();
    setUserTranscript((prev) => (prev ? `${prev}\nUser: ${message}` : `User: ${message}`));
    wsRef.current.send(JSON.stringify({ text: message }));
    setTextInput("");
    setStatus("speaking");
  };

  const cleanupSession = () => {
    stopAllAudioSources();

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    if (inputAudioCtxRef.current) {
      inputAudioCtxRef.current.close().catch(() => {});
      inputAudioCtxRef.current = null;
    }

    if (outputAudioCtxRef.current) {
      outputAudioCtxRef.current.close().catch(() => {});
      outputAudioCtxRef.current = null;
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.close();
      wsRef.current = null;
    }

    setStatus("disconnected");
    setVolumeLevel(0);
  };

  useEffect(() => {
    if (isOpen) {
      startSession();
    } else {
      cleanupSession();
    }
    return () => {
      cleanupSession();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-white dark:bg-navy border border-navy/10 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col items-center text-center space-y-5"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-navy/5 dark:bg-white/10 text-navy dark:text-white hover:bg-green hover:text-navy transition-all"
            aria-label="Close voice conversation"
          >
            <X size={20} />
          </button>

          {/* Header Title */}
          <div className="space-y-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green/10 text-green text-[10px] font-bold uppercase tracking-widest border border-green/20">
              <Sparkles size={12} /> Gemini 3.8 Live API
            </span>
            <h3 className="text-2xl font-bold text-navy dark:text-white tracking-tight">
              Sheun Hub AI Assistant
            </h3>
            <p className="text-xs text-navy/50 dark:text-white/60 font-serif italic">
              Real-time consultation for Shopify development, migrations & speed optimization.
            </p>
          </div>

          {/* Glowing Animated Orbs Visualizer */}
          <div className="relative my-2 w-32 h-32 flex items-center justify-center">
            <motion.div
              animate={{
                scale: status === "speaking" ? [1, 1.3, 1] : status === "listening" ? [1, 1 + volumeLevel * 0.4, 1] : 1,
                opacity: status === "speaking" ? [0.4, 0.8, 0.4] : 0.3,
              }}
              transition={{ repeat: Infinity, duration: status === "speaking" ? 1.2 : 0.8 }}
              className="absolute inset-0 rounded-full bg-green/20 blur-xl"
            />

            <motion.div
              animate={{
                scale: status === "speaking" ? [1, 1.15, 1] : 1 + volumeLevel * 0.2,
              }}
              className={`relative w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-500 ${
                status === "speaking"
                  ? "bg-gradient-to-tr from-green to-emerald-400 text-navy"
                  : status === "listening"
                  ? "bg-navy dark:bg-white/10 border-2 border-green text-green"
                  : status === "text-only"
                  ? "bg-emerald-500/20 text-green border border-green/40"
                  : status === "connecting"
                  ? "bg-white/10 text-white animate-pulse"
                  : "bg-red-500/20 text-red-500 border border-red-500/30"
              }`}
            >
              {status === "speaking" ? (
                <Volume2 size={36} className="animate-bounce" />
              ) : status === "listening" ? (
                <Mic size={36} className={isMuted ? "opacity-30" : "animate-pulse"} />
              ) : status === "text-only" ? (
                <Sparkles size={36} className="text-green" />
              ) : status === "connecting" ? (
                <Sparkles size={36} className="animate-spin" />
              ) : (
                <AlertCircle size={36} />
              )}
            </motion.div>
          </div>

          {/* Status Label */}
          <div className="text-xs font-bold uppercase tracking-widest text-navy/60 dark:text-white/70">
            {status === "connecting" && <span className="text-amber-400">Connecting to Gemini 3.8 Live...</span>}
            {status === "listening" && <span className="text-green">Listening... (Speak naturally)</span>}
            {status === "speaking" && <span className="text-green">AI Assistant Speaking...</span>}
            {status === "text-only" && <span className="text-emerald-400">Interactive Live Chat Mode</span>}
            {status === "error" && <span className="text-red-400">Connection Error</span>}
          </div>

          {/* Microphone Permission Warning / Retry Option */}
          {micError && (
            <div className="w-full p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs text-center font-sans space-y-2">
              <p>Microphone access is blocked by your browser settings. You can chat via text below, or allow microphone access and click retry.</p>
              <button
                type="button"
                onClick={initMicrophone}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-[11px] font-bold uppercase tracking-wider transition-colors"
              >
                <RefreshCw size={12} /> Retry Microphone Permission
              </button>
            </div>
          )}

          {/* Other Error Banner if any */}
          {errorMessage && !micError && (
            <div className="w-full p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-sans">
              {errorMessage}
            </div>
          )}

          {/* Real-time Transcripts / Chat Messages */}
          {(userTranscript || aiTranscript) && (
            <div className="w-full max-h-32 overflow-y-auto space-y-2 p-3.5 bg-navy/5 dark:bg-white/5 rounded-2xl text-left text-xs font-sans text-navy/80 dark:text-white/80">
              {userTranscript && (
                <p className="whitespace-pre-wrap">
                  <strong className="text-green">You:</strong> {userTranscript.slice(-160)}
                </p>
              )}
              {aiTranscript && (
                <p className="whitespace-pre-wrap">
                  <strong className="text-emerald-400">AI:</strong> {aiTranscript.slice(-160)}
                </p>
              )}
            </div>
          )}

          {/* Real-time Text Input Form */}
          <form onSubmit={handleSendText} className="w-full flex items-center gap-2">
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="Ask anything about Shopify, speed, or migrations..."
              className="flex-grow bg-navy/5 dark:bg-white/10 border border-navy/10 dark:border-white/15 rounded-full px-5 py-3 text-xs text-navy dark:text-white placeholder:text-navy/40 dark:placeholder:text-white/40 focus:outline-none focus:border-green transition-all"
            />
            <button
              type="submit"
              disabled={!textInput.trim() || status === "connecting" || status === "error"}
              className="p-3 rounded-full bg-green text-navy hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 transition-all shrink-0"
              aria-label="Send message to Gemini AI"
            >
              <Send size={16} />
            </button>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-1 w-full justify-center">
            {!micError && (
              <button
                onClick={() => setIsMuted(!isMuted)}
                disabled={status === "connecting" || status === "error"}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md ${
                  isMuted
                    ? "bg-red-500 text-white"
                    : "bg-navy/10 dark:bg-white/10 text-navy dark:text-white hover:bg-green hover:text-navy"
                }`}
              >
                {isMuted ? <MicOff size={15} /> : <Mic size={15} />}
                {isMuted ? "Unmute Mic" : "Mute Mic"}
              </button>
            )}

            <button
              onClick={onClose}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <PhoneOff size={15} /> End Call
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
