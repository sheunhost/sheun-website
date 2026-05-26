import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { initAuth, googleSignIn, getAccessToken } from "../lib/auth";

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
  const [needsAuth, setNeedsAuth] = useState(false);
  const [pendingLeadData, setPendingLeadData] = useState<any>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initAuth(
      () => setNeedsAuth(false),
      () => setNeedsAuth(true)
    );
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, needsAuth]);

  const sendGmail = async (data: any, token: string) => {
    const rawEmail = `To: sheunhost@gmail.com\r\nSubject: New Lead from AI Chatbot\r\n\r\nLead Details:\n\nName: ${data.name}\nEmail: ${data.email}\nRequirements: ${data.requirements}`;
    const encodedEmail = btoa(unescape(encodeURIComponent(rawEmail))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    
    await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: encodedEmail,
      }),
    });
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result && pendingLeadData) {
        setNeedsAuth(false);
        const confirmed = window.confirm(`Are you sure you want to send this message to Sheun from your Gmail account?\n\nName: ${pendingLeadData.name}\nRequirements: ${pendingLeadData.requirements}`);
        if (confirmed) {
           await sendGmail(pendingLeadData, result.accessToken);
           setPendingLeadData(null);
        }
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoggingIn(false);
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
        setPendingLeadData(data.args);
        
        try {
          const token = await getAccessToken();
          if (token) {
            const confirmed = window.confirm(`Are you sure you want to send this message to Sheun from your Gmail account?\n\nName: ${data.args.name}\nRequirements: ${data.args.requirements}`);
            if (confirmed) {
               await sendGmail(data.args, token);
               setPendingLeadData(null);
            }
          } else {
            setNeedsAuth(true);
          }
        } catch (err) {
          console.error("Gmail fetch error:", err);
        }
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
              {needsAuth && pendingLeadData && (
                <div className="bg-green/10 border border-green p-4 rounded-xl text-center mb-4">
                  <p className="text-sm text-navy mb-3">Sign in to send your message to Sheun.</p>
                  <button 
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                    className="gsi-material-button bg-white text-gray-700 px-4 py-2 rounded shadow flex items-center justify-center gap-2 w-full hover:bg-gray-50 transition-colors border border-gray-300 disabled:opacity-50"
                  >
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    </svg>
                    <span className="font-medium text-sm">Sign in with Google</span>
                  </button>
                </div>
              )}
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
