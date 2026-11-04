import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, PhoneOff, Volume2, Sparkles, X, MessageSquare, AlertCircle } from "lucide-react";

interface VoiceConversationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VoiceConversation({ isOpen, onClose }: VoiceConversationProps) {
  const [status, setStatus] = useState<"disconnected" | "connecting" | "listening" | "speaking" | "error">("disconnected");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [userTranscript, setUserTranscript] = useState<string>("");
  const [aiTranscript, setAiTranscript] = useState<string>("");
  const [volumeLevel, setVolumeLevel] = useState(0);

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
        setStatus("listening");
      }
    };
  };

  const startSession = async () => {
    setErrorMessage(null);
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
            if (isMutedRef.current || ws.readyState !== WebSocket.OPEN) return;

            const inputData = e.inputBuffer.getChannelData(0);
            let sum = 0;
            for (let i = 0; i < inputData.length; i++) {
              sum += inputData[i] * inputData[i];
            }
            const rms = Math.sqrt(sum / inputData.length);
            setVolumeLevel(Math.min(1, rms * 5));

            const base64PCM = floatTo16BitPCMBase64(inputData);
            ws.send(JSON.stringify({ audio: base64PCM }));
          };

          setStatus("listening");
        } catch (err: any) {
          console.error("[Client] Microphone access error:", err);
          setErrorMessage("Microphone access denied or unreadable. Please check permissions.");
          setStatus("error");
        }
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.error) {
            setErrorMessage(data.error);
            setStatus("error");
          }

          if (data.inputTranscript) {
            setUserTranscript((prev) => prev + " " + data.inputTranscript);
          }

          if (data.outputTranscript) {
            setAiTranscript((prev) => prev + " " + data.outputTranscript);
          }

          if (data.audio) {
            playAudioChunk(data.audio);
          }

          if (data.interrupted) {
            stopAllAudioSources();
            setStatus("listening");
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
          className="relative w-full max-w-lg bg-white dark:bg-navy border border-navy/10 dark:border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden flex flex-col items-center text-center space-y-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-navy/5 dark:bg-white/10 text-navy dark:text-white hover:bg-green hover:text-navy transition-all"
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
              Sheun Hub AI Voice Assistant
            </h3>
            <p className="text-xs text-navy/50 dark:text-white/60 font-serif italic">
              Real-time voice consultation for Shopify development, migrations & speed optimization.
            </p>
          </div>

          {/* Glowing Animated Orbs Visualizer */}
          <div className="relative my-4 w-36 h-36 flex items-center justify-center">
            {/* Outer pulses */}
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
              className={`relative w-28 h-28 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-500 ${
                status === "speaking"
                  ? "bg-gradient-to-tr from-green to-emerald-400 text-navy"
                  : status === "listening"
                  ? "bg-navy dark:bg-white/10 border-2 border-green text-green"
                  : status === "connecting"
                  ? "bg-white/10 text-white animate-pulse"
                  : "bg-red-500/20 text-red-500 border border-red-500/30"
              }`}
            >
              {status === "speaking" ? (
                <Volume2 size={40} className="animate-bounce" />
              ) : status === "listening" ? (
                <Mic size={40} className={isMuted ? "opacity-30" : "animate-pulse"} />
              ) : status === "connecting" ? (
                <Sparkles size={40} className="animate-spin" />
              ) : (
                <AlertCircle size={40} />
              )}
            </motion.div>
          </div>

          {/* Status Label */}
          <div className="text-xs font-bold uppercase tracking-widest text-navy/60 dark:text-white/70">
            {status === "connecting" && <span className="text-amber-400">Connecting to Gemini 3.8 Live...</span>}
            {status === "listening" && <span className="text-green">Listening... (Speak naturally)</span>}
            {status === "speaking" && <span className="text-green">AI Assistant Speaking...</span>}
            {status === "error" && <span className="text-red-400">Connection Error</span>}
          </div>

          {/* Error Banner if any */}
          {errorMessage && (
            <div className="w-full p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-sans">
              {errorMessage}
            </div>
          )}

          {/* Real-time Transcripts */}
          {(userTranscript || aiTranscript) && (
            <div className="w-full max-h-28 overflow-y-auto space-y-2 p-3 bg-navy/5 dark:bg-white/5 rounded-2xl text-left text-xs font-sans text-navy/80 dark:text-white/80">
              {userTranscript && (
                <p>
                  <strong className="text-green">You:</strong> {userTranscript.slice(-120)}
                </p>
              )}
              {aiTranscript && (
                <p>
                  <strong className="text-emerald-400">AI:</strong> {aiTranscript.slice(-120)}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2 w-full justify-center">
            <button
              onClick={() => setIsMuted(!isMuted)}
              disabled={status === "connecting" || status === "error"}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md ${
                isMuted
                  ? "bg-red-500 text-white"
                  : "bg-navy/10 dark:bg-white/10 text-navy dark:text-white hover:bg-green hover:text-navy"
              }`}
            >
              {isMuted ? <MicOff size={16} /> : <Mic size={16} />}
              {isMuted ? "Unmute Mic" : "Mute Mic"}
            </button>

            <button
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <PhoneOff size={16} /> End Call
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
