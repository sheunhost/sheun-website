import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Sparkles, PhoneCall } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_FAQS } from "../data/automationData";

export default function AutomationFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <AutomationPageWrapper
      title="Automation Frequently Asked Questions | Sheun Automation"
      description="Answers to common questions regarding AI workflow automation, GoHighLevel CRM setup, AI chatbots, voice agents, data security, and implementation timelines."
    >
      <section className="relative pt-32 pb-16 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about implementing AI and operational automation in your business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {AUTOMATION_FAQS.map((faq, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left font-bold text-base text-white flex items-center justify-between gap-4 focus:outline-none"
              >
                <div>
                  <span className="text-xs font-mono text-cyan-400 block mb-1">{faq.category}</span>
                  <span>{faq.question}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform shrink-0 ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-900/40 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Have a Unique Question for Your Stack?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book a 1-on-1 consultation with our engineering team to review your exact software architecture.
          </p>
          <Link
            to="/automation/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl shadow-cyan-500/20"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book Consultation Call</span>
          </Link>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
