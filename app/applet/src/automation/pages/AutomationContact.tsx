import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PhoneCall, Mail, ShieldCheck, Clock, Send, CheckCircle2, Cpu, AlertCircle, Building2
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    budget: "$2,500 - $5,000",
    message: ""
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    
    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    
    if (!formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const submitData = new FormData(formElement);
    submitData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    submitData.append("subject", "New Automation Engineering Consultation Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Submit to Mailchimp (Background)
        fetch("/api/connect/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            firstName: formData.fullName.split(" ")[0],
            lastName: formData.fullName.split(" ").slice(1).join(" ")
          })
        }).catch(err => console.error("Mailchimp background sync failed", err));

        setIsSubmitting(false);
        setIsSuccess(true);
      } else {
        setErrorMsg("Failed to send your request. Please try again later.");
        setIsSubmitting(false);
      }
    } catch (err) {
      setErrorMsg("A network error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AutomationPageWrapper
      title="Book Engineering Call | Sheun Automation"
      description="Book a free 30-minute AI Strategy Session with our engineering team."
    >
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden min-h-screen border-b border-slate-900">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium tracking-wide">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Engineering Consultation</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Let's engineer your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">infrastructure.</span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Discuss your current operational friction points, software stack, and automation goals directly with our lead architects.
            </p>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fast Response</h4>
                  <p className="text-sm text-slate-400">Within 2 business hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Strict NDA</h4>
                  <p className="text-sm text-slate-400">Complete confidentiality</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative"
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Request Received</h3>
                  <p className="text-slate-400 leading-relaxed max-w-md mx-auto">
                    Thank you. Our engineering team is reviewing your requirements and will contact you shortly to schedule your strategy session.
                  </p>
                  <div className="pt-8">
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-3 rounded-full text-sm font-bold text-slate-950 bg-white hover:bg-slate-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Project Requirements</h2>
                  
                  {errorMsg && (
                    <div className="flex items-center gap-2 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Full Name <span className="text-rose-400">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Work Email <span className="text-rose-400">*</span></label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Current Setup / Goals <span className="text-rose-400">*</span></label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                      placeholder="Briefly describe your current software stack and what you want to automate..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-slate-950 bg-white hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Cpu className="w-5 h-5 animate-spin text-cyan-600" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-500 font-mono">Your data is secured with AES-256 encryption.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </AutomationPageWrapper>
  );
}
