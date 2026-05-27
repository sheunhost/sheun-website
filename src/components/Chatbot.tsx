import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Hey! 👋 I'm the Sheun Hub AI assistant. Are you working on a Shopify store right now?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendWeb3Form = async (data: any) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c0573f7d-6191-4374-bc31-ee70ee9fa226",
          subject: "New Lead from AI Chatbot",
          name: data.name,
          email: data.email,
          message: data.requirements,
        }),
      });
      if (response.ok) {
        console.log("Lead submitted via Web3Forms successfully");
      } else {
        console.error("Failed to submit lead via Web3Forms");
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages
        .filter((_, i) => i > 0)
        .map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }));

      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: chatHistory, message: input }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch response");
      }
      
      if (data.clientEvent === "sendLeadEmail") {
        await sendWeb3Form(data.args);
      }

      setMessages(prev => [...prev, { role: "model", text: data.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "model", text: `Sorry, I'm having trouble connecting right now. Please try again later!` }]);
    } finally {
      setIsLoading(false);
    }
  };

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
            <div className="bg-navy-gradient p-8 flex items-center justify-between text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-navy shadow-xl rotate-3 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                    alt="Sheun"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg tracking-tight">Assistant</p>
                  <p className="text-[10px] text-green font-bold uppercase tracking-[0.3em]">Sheun Hub</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-3 rounded-2xl transition-all relative z-10">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-6 bg-light/30">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-end gap-3 max-w-[85%]",
                    m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg overflow-hidden",
                    m.role === "user" ? "bg-navy text-white" : "bg-white"
                  )}>
                    {m.role === "user" ? <User size={20} /> : (
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                        alt="Sheun"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className={cn(
                    "p-5 rounded-[24px] text-sm leading-relaxed shadow-sm",
                    m.role === "user" 
                      ? "bg-navy text-white rounded-br-none" 
                      : "bg-white text-navy border border-navy/5 rounded-bl-none"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-3 mr-auto">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                      alt="Sheun"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-5 rounded-[24px] rounded-bl-none border border-navy/5 shadow-sm mt-4">
                    <Loader2 size={20} className="animate-spin text-green" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-8 bg-white border-t border-navy/5">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-4"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-grow bg-light border-2 border-transparent rounded-full py-4 px-8 text-sm focus:border-green outline-none transition-all font-medium"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-14 h-14 bg-green text-navy rounded-full flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-all duration-500 shrink-0 shadow-xl green-glow"
                >
                  <Send size={24} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center shadow-2xl relative"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
