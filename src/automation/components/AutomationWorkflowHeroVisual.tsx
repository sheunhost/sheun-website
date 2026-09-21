import { motion } from "framer-motion";
import { Cpu, MessageSquare, Database, Bot, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function AutomationWorkflowHeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Subtle Background Glow with Signature 3-Color Mix */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-[#6D28D9]/15 to-[#FF6B4A]/15 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

      {/* Main Light Component Container */}
      <div className="relative bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
        
        {/* Top Rim Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-[#6D28D9] to-[#FF6B4A]" />

        {/* Top Header Controls */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] dark:border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
            <span className="text-xs font-mono text-slate-500 dark:text-white/60 ml-2 font-semibold">system.workflow.engine</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Pipeline Active
          </div>
        </div>

        {/* Workflow Nodes Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 relative">
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 80 45 L 180 115"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.path
              d="M 280 45 L 180 115"
              stroke="#6D28D9"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.path
              d="M 180 115 L 80 185"
              stroke="#FF6B4A"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <motion.path
              d="M 180 115 L 280 185"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </svg>

          {/* Node 1: Inbound Lead */}
          <div className="relative z-10 p-3.5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200/90 dark:border-white/10 flex flex-col items-center text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-cyan-100/70 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 flex items-center justify-center mb-2 border border-cyan-200 dark:border-cyan-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#0F172A] dark:text-white">Inbound Lead</span>
            <span className="text-[10px] text-slate-500 dark:text-white/60 font-mono mt-0.5">Webhook/Form</span>
          </div>

          {/* Center Latency Pill */}
          <div className="flex items-center justify-center">
            <div className="px-2.5 py-1 bg-white dark:bg-white/10 border border-cyan-200 dark:border-cyan-500/30 rounded-full text-[10px] text-cyan-800 dark:text-cyan-300 font-mono font-bold shadow-xs">
              &lt;45ms Latency
            </div>
          </div>

          {/* Node 2: CRM Sync */}
          <div className="relative z-10 p-3.5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200/90 dark:border-white/10 flex flex-col items-center text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-100/70 dark:bg-purple-950/60 text-[#6D28D9] dark:text-purple-400 flex items-center justify-center mb-2 border border-purple-200 dark:border-purple-500/30">
              <Database className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#0F172A] dark:text-white">GoHighLevel</span>
            <span className="text-[10px] text-slate-500 dark:text-white/60 font-mono mt-0.5">CRM Pipeline</span>
          </div>

          {/* CENTER NODE: AI Decision Core */}
          <div className="col-span-3 my-1 relative z-10 flex justify-center">
            <div className="p-4 bg-gradient-to-r from-cyan-50 via-white to-purple-50 dark:from-cyan-950/40 dark:via-white/5 dark:to-purple-950/40 rounded-2xl border border-cyan-300 dark:border-cyan-500/30 flex items-center gap-3.5 shadow-md max-w-sm w-full">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-[#6D28D9] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A] dark:text-white">
                    AI Decision Core
                  </span>
                  <span className="text-[9px] font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded-full font-bold border border-cyan-200 dark:border-cyan-500/30">
                    Sub-600ms AI
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-white/70 mt-0.5">
                  Parse intent → Score lead → Trigger instant voice call
                </div>
              </div>
            </div>
          </div>

          {/* Node 3: AI Voice Agent */}
          <div className="relative z-10 p-3.5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200/90 dark:border-white/10 flex flex-col items-center text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-orange-100/70 dark:bg-orange-950/60 text-[#FF6B4A] dark:text-orange-400 flex items-center justify-center mb-2 border border-orange-200 dark:border-orange-500/30">
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#0F172A] dark:text-white">AI Voice Call</span>
            <span className="text-[10px] text-slate-500 dark:text-white/60 font-mono mt-0.5">Auto-Dialer</span>
          </div>

          {/* Center Icon */}
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-300 dark:border-emerald-500/30">
              <Zap className="w-4 h-4" />
            </div>
          </div>

          {/* Node 4: Calendar Sync */}
          <div className="relative z-10 p-3.5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200/90 dark:border-white/10 flex flex-col items-center text-center shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-2 border border-emerald-200 dark:border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#0F172A] dark:text-white">Booked Meeting</span>
            <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono mt-0.5 font-bold">Google Cal</span>
          </div>

        </div>

        {/* Live System Log Activity */}
        <div className="mt-5 pt-3.5 border-t border-[#E2E8F0] dark:border-white/10 bg-slate-900 rounded-2xl p-3.5 font-mono text-[11px] text-slate-300 space-y-1.5 shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-cyan-400">[10:42:01] Webhook Inbound:</span>
            <span className="text-slate-400">Lead qualification triggered</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-purple-300">[10:42:02] AI Decision:</span>
            <span className="text-slate-400">Score 95/100 → Voice agent outbound</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-emerald-400 font-bold">[10:42:06] Confirmed:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              Slot booked on Calendar <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
