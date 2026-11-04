import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Sparkles, Trash2, Bot, User, ArrowRight } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const STARTER_PROMPTS = [
  "How can I speed up my Shopify store to sub-1.5s?",
  "What is included in the 48-Hour Technical SEO Sprint?",
  "How does WooCommerce to Shopify migration preserve SEO?",
  "What are the top conversion rate optimization (CRO) fixes?"
];

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content: "Hello! I am Sheun Hub's AI Growth Assistant. How can I help you scale your Shopify store today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputPrompt.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    if (!textToSend) setInputPrompt("");
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          prompt: query
        })
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to receive response from AI model.");
      }

      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I am analyzing your store query. Feel free to ask more details!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error("[Chatbot] Error calling /api/gemini/chat:", err);
      setErrorMessage(err.message || "Failed to connect to AI server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: "assistant",
        content: "Chat history cleared. How else can I assist with your Shopify store?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setErrorMessage(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 bg-navy/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          className="relative w-full sm:max-w-md h-[90vh] sm:h-[620px] bg-white dark:bg-navy border border-navy/10 dark:border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Top Header */}
          <div className="p-4 sm:p-5 bg-navy text-white flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-green via-emerald-400 to-teal-500 flex items-center justify-center text-navy font-bold shadow-md">
                <Bot size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white tracking-tight">Sheun Hub AI Assistant</h3>
                  <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                </div>
                <p className="text-[10px] text-white/60 font-sans">Powered by Gemini 3.8 Flash</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                title="Clear chat history"
              >
                <Trash2 size={16} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close chatbot"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 font-sans text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-xl bg-green/20 text-green flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={14} />
                  </div>
                )}

                <div
                  className={`max-w-[80%] p-3.5 rounded-2xl space-y-1 ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] text-white rounded-tr-none shadow-md"
                      : "bg-navy/5 dark:bg-white/10 text-navy dark:text-white rounded-tl-none border border-navy/5 dark:border-white/5"
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  <span className={`block text-[9px] text-right font-mono ${msg.role === "user" ? "text-white/60" : "text-navy/40 dark:text-white/40"}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-xl bg-navy/10 dark:bg-white/10 text-navy dark:text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-7 h-7 rounded-xl bg-green/20 text-green flex items-center justify-center shrink-0">
                  <Bot size={14} />
                </div>
                <div className="bg-navy/5 dark:bg-white/10 p-3.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-green animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-green animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl text-center">
                {errorMessage}
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Starter Quick Prompts */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-4 py-2 border-t border-navy/5 dark:border-white/5 bg-navy/5 dark:bg-white/5 flex gap-2 overflow-x-auto [scrollbar-width:none] shrink-0">
              {STARTER_PROMPTS.map((promptText, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(promptText)}
                  className="px-3 py-1.5 rounded-full bg-white dark:bg-navy border border-navy/10 dark:border-white/10 text-[11px] text-navy/70 dark:text-white/70 hover:text-green hover:border-green transition-all whitespace-nowrap shrink-0 flex items-center gap-1"
                >
                  <span>{promptText}</span>
                  <ArrowRight size={10} />
                </button>
              ))}
            </div>
          )}

          {/* Form Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3.5 border-t border-navy/10 dark:border-white/10 bg-white dark:bg-navy flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask Sheun Hub AI..."
              className="flex-grow bg-navy/5 dark:bg-white/10 border border-navy/10 dark:border-white/15 rounded-full px-4 py-3 text-xs text-navy dark:text-white placeholder:text-navy/40 dark:placeholder:text-white/40 focus:outline-none focus:border-green transition-all"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="p-3 rounded-full bg-green text-navy hover:scale-105 disabled:opacity-40 disabled:hover:scale-100 transition-all shrink-0 shadow-md"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
