import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronDown, 
  PhoneCall, Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code,
  Activity, Database, Target, FileCheck, Layers, ArrowLeftRight, Server, Terminal, Zap
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_SERVICES } from "../data/automationData";

const ICON_MAP: Record<string, any> = {
  Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code,
  Activity, Database, Target, FileCheck, Layers, ArrowLeftRight, Server, Terminal, Zap, Sparkles
};

export default function AutomationServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = AUTOMATION_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/automation/services" replace />;
  }

  const IconComp = ICON_MAP[service.iconName] || Cpu;

  return (
    <AutomationPageWrapper
      title={`${service.title} | Sheun Automation`}
      description={service.shortDesc}
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 mb-6 mx-auto shadow-2xl">
              <IconComp className="w-8 h-8" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              {service.title}
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              {service.shortDesc}
            </p>
            
            <div className="pt-8">
              <Link
                to="/automation/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-950 bg-white hover:scale-105 transition-all duration-300"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CORE FEATURES (Bento Grid) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">System Capabilities</h2>
            <p className="text-slate-400">Deterministic functions executed reliably at scale.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => {
              const FIcon = ICON_MAP[feature.icon] || Cpu;
              return (
                <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                    <FIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE METRICS */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8">
                <div className="text-4xl lg:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                  {benefit.metric}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEPLOYMENT PROCESS (Visual Flow) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Deployment Pipeline</h2>
            <p className="text-slate-400">A rigorous engineering process from concept to production.</p>
          </div>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
            
            <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
              {[
                { title: "Architecture Design", desc: "Mapping API endpoints and strict data schemas." },
                { title: "Logic Engineering", desc: "Building the core deterministic workflows." },
                { title: "Sandbox Testing", desc: "Rigorous QA in isolated staging environments." },
                { title: "Production Cutover", desc: "Zero-downtime deployment and live monitoring." }
              ].map((step, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0 md:text-center">
                  <div className="absolute left-[-5px] top-0 md:relative md:left-auto md:mx-auto w-10 h-10 bg-slate-950 border-2 border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-bold mb-6">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 bg-slate-900 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Technical FAQ</h2>
            </div>
            
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-950 border border-white/10 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 text-left font-bold text-white flex items-center justify-between gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
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
      )}

      {/* 6. CTA */}
      <section className="py-32 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl font-bold text-white">Ready to implement this system?</h2>
          <p className="text-slate-400">Get a fixed-price proposal and architecture blueprint for your business within 48 hours.</p>
          <Link
            to="/automation/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-950 bg-white hover:scale-105 transition-all duration-300"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Schedule Strategy Session</span>
          </Link>
        </div>
      </section>

    </AutomationPageWrapper>
  );
}
