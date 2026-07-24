import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Sparkles, Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code,
  Layers, Database, ShieldCheck, Zap, Activity
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_SERVICES } from "../data/automationData";

const ICON_MAP: Record<string, any> = {
  Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code, Activity, Database, ShieldCheck, Zap
};

export default function AutomationServices() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Architecture" },
    { id: "ai", label: "AI Agents" },
    { id: "infrastructure", label: "Infrastructure" }
  ];

  const filteredServices = AUTOMATION_SERVICES.filter(s => {
    if (activeTab === "all") return true;
    if (activeTab === "ai") return s.id.includes("ai") || s.id.includes("voice") || s.id.includes("chatbot");
    if (activeTab === "infrastructure") return s.id.includes("crm") || s.id.includes("gohighlevel") || s.id.includes("api") || s.id.includes("process");
    return true;
  });

  return (
    <AutomationPageWrapper
      title="Engineering Capabilities | Sheun Automation"
      description="Enterprise-grade AI workflows, voice agents, and CRM infrastructure for scaling operations."
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium tracking-wide mx-auto">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Infrastructure</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              System Architecture & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AI Engineering
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              We design, build, and deploy deterministic AI systems and high-performance middleware that scale your operations without scaling your headcount.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES BENTO GRID */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filtering Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-white/5 border border-white/10 rounded-xl">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    activeTab === tab.id 
                      ? "bg-slate-800 text-white shadow-lg" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredServices.map((service, idx) => {
                const IconComp = ICON_MAP[service.iconName] || Cpu;
                const isLarge = idx === 0 || idx === 3;

                return (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={isLarge ? 'md:col-span-2' : ''}
                  >
                    <Link
                      to={`/automation/services/${service.slug}`}
                      className="group block h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-8">
                          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transform translate-x-4 group-hover:translate-x-0 transition-all" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                          {service.shortDesc}
                        </p>
                        
                        <div className="mt-auto flex flex-wrap gap-2">
                          {service.deliverables.slice(0, 2).map((del, i) => (
                            <span key={i} className="px-2.5 py-1 text-[10px] font-mono font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full">
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. PLATFORM INTEGRATION WALL */}
      <section className="py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-12">Seamless Integration With Your Stack</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {['GoHighLevel', 'Salesforce', 'HubSpot', 'Stripe', 'OpenAI', 'Anthropic', 'Make.com', 'n8n', 'Shopify'].map((logo, i) => (
              <div key={i} className="text-xl font-bold text-slate-300 font-mono">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl font-bold text-white">Need a custom architecture?</h2>
          <p className="text-slate-400">Speak with an engineer to design a bespoke automation pipeline for your exact business requirements.</p>
          <Link
            to="/automation/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-950 bg-white hover:scale-105 transition-all duration-300"
          >
            <span>Book Engineering Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
