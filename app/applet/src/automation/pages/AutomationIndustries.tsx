import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers, ArrowRight, Building2, Briefcase, GraduationCap, Utensils, HardHat, ShoppingCart } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_INDUSTRIES } from "../data/automationData";

const ICON_MAP: Record<string, any> = {
  Building2, Briefcase, GraduationCap, Utensils, HardHat, ShoppingCart
};

export default function AutomationIndustries() {
  return (
    <AutomationPageWrapper
      title="Industry Solutions | Sheun Automation"
      description="Tailored AI infrastructure for specific industry workflows."
    >
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-purple-400 mb-6 mx-auto shadow-2xl">
              <Layers className="w-8 h-8" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Engineered for your vertical.
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              We don't build generic solutions. Every AI pipeline and CRM architecture is mapped to the exact operational realities of your industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AUTOMATION_INDUSTRIES.map((industry, idx) => {
              const IconComp = ICON_MAP[industry.icon] || Building2;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{industry.description}</p>
                  
                  <div className="space-y-2">
                    {industry.useCases.slice(0, 3).map((uc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {uc}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl font-bold text-white">Don't see your industry?</h2>
          <p className="text-slate-400">Our middleware architects can analyze your custom business logic and design a specific implementation plan.</p>
          <Link
            to="/automation/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-950 bg-white hover:scale-105 transition-all duration-300"
          >
            <span>Request Custom Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
