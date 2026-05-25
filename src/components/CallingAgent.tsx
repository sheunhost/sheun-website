import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, Mic, MicOff, Loader2, X, Activity } from "lucide-react";
import { cn } from "../lib/utils";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [callError, setCallError] = useState<string | null>(null);
  
  const wsRef = useRef<WebSocket | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const nextStartTime = useRef(0);
  const processorRef = useRef<ScriptProcessorNode | null>(null);

  useEffect(() => {
    return () => {
      endCall();
    };
  }, []);

  const pcmToBase64 = (pcmData: Float32Array) => {
    // Convert Float32Array to Int16Array
    const buffer = new ArrayBuffer(pcmData.length * 2);
    const view = new DataView(buffer);
    for (let i = 0; i < pcmData.length; i++) {
      let s = Math.max(-1, Math.min(1, pcmData[i]));
      view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
    // Base64 encode
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const playAudioChunk = (audioCtx: AudioContext, base64Audio: string) => {
    const binaryStr = atob(base64Audio);
    const len = binaryStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
    }
    const int16Array = new Int16Array(bytes.buffer);
    const float32Array = new Float32Array(int16Array.length);
    for (let i = 0; i < int16Array.length; i++) {
        float32Array[i] = int16Array[i] / 0x8000;
    }
    
    // Gemini Live audio output is 24kHz PCM
    const audioBuffer = audioCtx.createBuffer(1, float32Array.length, 24000); 
    audioBuffer.getChannelData(0).set(float32Array);
    
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);
    
    const currentTime = audioCtx.currentTime;
    if (nextStartTime.current < currentTime) {
        nextStartTime.current = currentTime + 0.1; // Add small buffer
    }
    source.start(nextStartTime.current);
    nextStartTime.current += audioBuffer.duration;
  };

  const startCall = async () => {
    try {
      setCallError(null);
      setIsCalling(true);
      const audioCtx = new AudioContext({ sampleRate: 16000 });
      audioCtxRef.current = audioCtx;
      nextStartTime.current = 0;

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const source = audioCtx.createMediaStreamSource(stream);
      // Deprecated but widely supported. Use 4096 buffer.
      const processor = audioCtx.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;
      
      const wsProtocol = location.protocol === "https:" ? "wss:" : "ws:";
      const wsUrl = `${wsProtocol}//${location.host}/live`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;
      
      ws.onopen = () => {
        setIsConnected(true);
        source.connect(processor);
        processor.connect(audioCtx.destination);
        
        processor.onaudioprocess = (e) => {
          if (!isMuted && ws.readyState === WebSocket.OPEN) {
            const base64 = pcmToBase64(e.inputBuffer.getChannelData(0));
            ws.send(JSON.stringify({ audio: base64 }));
          }
        };
      };
      
      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.audio && audioCtxRef.current) {
          playAudioChunk(audioCtxRef.current, msg.audio);
        }
        if (msg.interrupted && audioCtxRef.current) {
          nextStartTime.current = audioCtxRef.current.currentTime;
        }
        if (msg.error) {
          console.error("Live API Error:", msg.error);
          endCall();
        }
      };
      
      ws.onclose = () => {
        endCall();
      };
      
    } catch (e: any) {
      console.error("Call failed", e);
      if (e.name === "NotAllowedError" || e.name === "PermissionDeniedError") {
        setCallError("Microphone permission denied. Please allow microphone access to call.");
      } else {
        setCallError("Could not start call. " + (e.message || ""));
      }
      endCall();
    }
  };

  const endCall = () => {
    setIsCalling(false);
    setIsConnected(false);
    setIsMuted(false);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close().catch(console.error);
      audioCtxRef.current = null;
    }
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-24 right-0 w-[320px] bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-navy/5 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 pb-8 relative overflow-hidden bg-navy-gradient text-white text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
              <button 
                onClick={() => {
                  endCall();
                  setIsOpen(false);
                }} 
                className="absolute top-4 right-4 hover:bg-white/10 p-2 rounded-full transition-all z-10"
              >
                <X size={20} />
              </button>
              
              <div className="relative z-10 flex flex-col items-center mt-4">
                <div className="relative mb-6">
                  {isCalling && isConnected && (
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-green/40 rounded-full blur-xl" 
                    />
                  )}
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-navy shadow-2xl overflow-hidden border-4 border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                      alt="Sheun"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="font-bold text-2xl tracking-tight mb-1">Assistant</h3>
                <p className="text-sm text-green font-medium uppercase tracking-widest mb-4">Sheun Hub</p>
                
                {isCalling ? (
                  <div className="flex items-center gap-2 text-white/80 font-medium">
                    {!isConnected ? (
                      <><Loader2 size={16} className="animate-spin" /> Connecting...</>
                    ) : (
                      <><Activity size={16} className="text-green animate-pulse" /> Call in Progress</>
                    )}
                  </div>
                ) : (
                  <p className="text-white/60 text-sm max-w-[200px] leading-relaxed">
                    Have questions? Start a free live call right now.
                  </p>
                )}
                {callError && (
                  <p className="mt-4 text-red-300 text-xs text-center border border-red-400/30 bg-red-400/10 p-2 rounded-lg max-w-[220px]">
                    {callError}
                  </p>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="p-8 bg-white flex justify-center gap-6">
              {!isCalling ? (
                <button
                  onClick={startCall}
                  className="w-16 h-16 bg-green text-navy rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all green-glow"
                >
                  <Phone size={28} />
                </button>
              ) : (
                <>
                  <button
                    onClick={toggleMute}
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all",
                      isMuted ? "bg-navy/10 text-navy" : "bg-navy text-white hover:scale-105"
                    )}
                  >
                    {isMuted ? <MicOff size={28} /> : <Mic size={28} />}
                  </button>
                  <button
                    onClick={endCall}
                    className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all shadow-red-500/20"
                  >
                    <PhoneOff size={28} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green text-navy rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white green-glow z-50 relative"
      >
        <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
            alt="Sheun"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/20" />
        <Phone size={24} className="relative z-10 text-white drop-shadow-md" />
      </motion.button>
    </div>
  );
}

