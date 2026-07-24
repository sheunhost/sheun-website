import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap, ChevronDown, 
  Clock, AlertTriangle, MessageSquare, Layers, FileCheck, PhoneCall,
  Activity, Building2, Briefcase, Target, ShoppingCart, GraduationCap, DollarSign, HardHat, Utensils,
  Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import AutomationWorkflowHeroVisual from "../components/AutomationWorkflowHeroVisual";
import { 
  AUTOMATION_SERVICES, 
  AUTOMATION_INDUSTRIES, 
  AUTOMATION_CASE_STUDIES, 
  AUTOMATION_FAQS 
} from "../data/automationData";

const ICON_MAP: Record<string, any> = {
  Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code,
  Activity, Building2, Briefcase, Target, ShoppingCart, GraduationCap, DollarSign, HardHat, Utensils
};

export default function AutomationHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  return (
    <AutomationPageWrapper
      title="Sheun Automation | Premium AI Workflow & Systems Engineering"
      description="Enterprise-grade AI workflow automation, GoHighLevel CRM setup, AI chatbots, and voice agents for scaling businesses."
    >
      {/* 1. HERO SECTION (SaaS Style) */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Enterprise Automation</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Automate Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Scale Faster.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              We engineer intelligent AI workflows, autonomous voice agents, and high-performance CRMs that eliminate operational drag and multiply your workforce capacity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/automation/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-white hover:bg-slate-100 transition-colors"
              >
                Book Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/automation/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </div>
            
            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-slate-400" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-slate-400">
                Trusted by <span className="text-white">50+</span> innovative companies
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <AutomationWorkflowHeroVisual />
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM (Visual Dashboard Metaphor) */}
      <section className="py-24 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Operations are breaking at scale.</h2>
            <p className="text-slate-400">Your software stack should accelerate growth, not create manual data entry and disjointed communication silos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Manual Data Entry</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hours wasted copying information between spreadsheets, CRMs, and invoicing software.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Slow Response Times</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                High-intent leads go cold because your team cannot reply to inquiries within 5 minutes.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Disconnected Systems</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Using dozens of SaaS tools that do not communicate, causing blind spots in reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID SERVICES PREVIEW */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Enterprise Engineering capabilities.</h2>
              <p className="text-slate-400">Everything required to build a highly autonomous business engine.</p>
            </div>
            <Link to="/automation/services" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300">
              View full architecture <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTOMATION_SERVICES.slice(0, 5).map((service, idx) => {
              const IconComp = ICON_MAP[service.iconName] || Cpu;
              const isLarge = idx === 0 || idx === 3;
              
              return (
                <Link 
                  key={idx}
                  to={`/automation/services/${service.slug}`}
                  className={`group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden ${isLarge ? 'md:col-span-2' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                      {service.shortDesc}
                    </p>
                    
                    <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      Explore Blueprint <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
            
            <Link 
              to="/automation/services"
              className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">View All Systems</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. METRICS / WHY CHOOSE US */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white tracking-tight mb-6">Engineered for performance.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We build resilient, enterprise-grade AI automation architectures with built-in error handling and zero silent failures.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Zero Downtime Deployments", desc: "Sandbox staging environments before zero-downtime production cutovers.", icon: Zap },
                  { title: "SOC2 Compliant Architecture", desc: "AES-256 encrypted vaults. Zero AI model retraining on your private data.", icon: ShieldCheck },
                  { title: "Deterministic Output", desc: "Strict system guardrails ensuring AI models follow exact business logic.", icon: Cpu }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-8 rounded-3xl border border-white/10">
                <div className="text-4xl font-mono font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-sm text-slate-400">System Uptime</div>
              </div>
              <div className="bg-slate-950 p-8 rounded-3xl border border-white/10 translate-y-8">
                <div className="text-4xl font-mono font-bold text-blue-400 mb-2">&lt;600ms</div>
                <div className="text-sm text-slate-400">Voice AI Latency</div>
              </div>
              <div className="bg-slate-950 p-8 rounded-3xl border border-white/10">
                <div className="text-4xl font-mono font-bold text-emerald-400 mb-2">10x</div>
                <div className="text-sm text-slate-400">Faster Lead Response</div>
              </div>
              <div className="bg-slate-950 p-8 rounded-3xl border border-white/10 translate-y-8">
                <div className="text-4xl font-mono font-bold text-purple-400 mb-2">SOC2</div>
                <div className="text-sm text-slate-400">Compliance Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE FAQ */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Common Questions</h2>
            <p className="text-slate-400">Clear answers regarding data security, timelines, and integration.</p>
          </div>
          
          <div className="space-y-4">
            {AUTOMATION_FAQS.slice(0, 5).map((faq, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
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

      {/* 6. MODERN CTA */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h2 className="text-5xl font-extrabold text-white tracking-tight">
            Ready to upgrade your infrastructure?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Book a consultation to map your workflow architecture and discover exactly where AI automation will drive ROI.
          </p>
          
          <div className="flex justify-center pt-8">
            <Link
              to="/automation/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-950 bg-white hover:scale-105 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Schedule Strategy Session</span>
            </Link>
          </div>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
