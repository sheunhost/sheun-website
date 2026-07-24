import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown, ArrowRight } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_FAQS } from "../data/automationData";

export default function AutomationFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <AutomationPageWrapper
      title="FAQ | Sheun Automation"
      description="Frequently asked questions about our AI engineering, deployment timelines, and data security."
    >
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 mb-6 mx-auto shadow-2xl">
              <MessageCircle className="w-8 h-8" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Technical FAQ
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              Clear answers regarding our system architecture, data privacy, compliance, and deployment pipelines.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {AUTOMATION_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left font-bold text-white flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === idx ? "rotate-180 text-cyan-400" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl font-bold text-white">Still have questions?</h2>
          <p className="text-slate-400">Speak directly with an engineer about your specific use case.</p>
          <Link
            to="/automation/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-950 bg-white hover:scale-105 transition-all duration-300"
          >
            <span>Contact Engineering</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
