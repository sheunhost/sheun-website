import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Target, Zap, LayoutGrid, Clock, Users } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationSolutions() {
  return (
    <AutomationPageWrapper
      title="Solutions | Sheun Automation"
      description="Pre-architected automation frameworks for common enterprise bottlenecks."
    >
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-blue-400 mb-6 mx-auto shadow-2xl">
              <LayoutGrid className="w-8 h-8" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Engineered Solutions
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              We deploy pre-architected automation frameworks that solve common business friction points, customized to your specific operational logic.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Speed-to-Lead Architecture</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Reduce inbound response times from hours to milliseconds. When a lead enters your system, our AI engine instantly qualifies them, routes to the correct database, and triggers an automated SMS or AI Voice call within 600ms.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> &lt;600ms Latency Response
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Automated Qualification Routing
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Direct Calendar Booking
                </li>
              </ul>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-indigo-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Client Onboarding Automation</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Eliminate manual contract generation and folder creation. Trigger an automated cascade that generates PDF agreements via Stripe/DocuSign, provisions client folders in Google Drive, and alerts your Slack channel.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Zero Manual Data Entry
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> API-Driven Contract Generation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Instant Internal Notifications
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl font-bold text-white">Need a different solution?</h2>
          <p className="text-slate-400">Our engineering team can build a custom architecture tailored to your unique friction points.</p>
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
