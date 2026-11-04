import React, { useState } from "react";
import { MessageSquare, Sparkles } from "lucide-react";
import Chatbot from "./Chatbot";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-24 right-6 z-40 flex items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 px-5 py-3.5 rounded-full bg-gradient-to-r from-green via-emerald-400 to-teal-500 text-navy font-bold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20 green-glow"
          aria-label="Open Sheun Hub AI Chatbot"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-navy"></span>
          </span>
          <MessageSquare size={16} className="text-navy group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline-block">Ask AI</span>
          <Sparkles size={12} className="text-navy/70" />
        </button>
      </div>

      {/* AI Chatbot Drawer Modal */}
      <Chatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
