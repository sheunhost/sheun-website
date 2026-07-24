import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_CASE_STUDIES } from "../data/automationData";

export default function AutomationCaseStudies() {
  return (
    <AutomationPageWrapper
      title="Case Studies & ROI | Sheun Automation"
      description="Real-world data and ROI from our enterprise AI automation deployments."
    >
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-emerald-400 mb-6 mx-auto shadow-2xl">
              <BarChart3 className="w-8 h-8" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Metrics that matter.
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              We measure success by hours saved, latency reduced, and revenue recovered. Review the telemetry from our recent deployments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {AUTOMATION_CASE_STUDIES.map((study, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white font-bold font-mono">
                    {study.client.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{study.client}</h3>
                    <p className="text-sm text-slate-400">{study.industry}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-4">{study.challenge}</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">{study.solution}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                      <div className="text-2xl font-mono font-bold text-emerald-400 mb-1">{metric.value}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl font-bold text-white">Generate your own ROI.</h2>
          <p className="text-slate-400">Schedule a technical audit to calculate the exact hours and capital you can recover through automation.</p>
          <Link
            to="/automation/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-slate-950 bg-white hover:scale-105 transition-all duration-300"
          >
            <span>Book Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
