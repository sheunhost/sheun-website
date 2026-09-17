import { motion } from "framer-motion";
import { Cpu, MessageSquare, Database, Bot, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function AutomationWorkflowHeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Sleek Subdued Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-50" />

      {/* Main Glassmorphic Container */}
      <div className="relative bg-slate-900/95 border border-slate-800/90 rounded-3xl p-6 sm:p-7 shadow-2xl overflow-hidden backdrop-blur-2xl">
        
        {/* Top Header Controls */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="text-xs font-mono text-slate-400 ml-2">system.workflow.engine</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Active Pipeline
          </div>
        </div>

        {/* Workflow Nodes Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 relative">
          
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 80 45 L 180 115"
              stroke="#06B6D4"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.path
              d="M 280 45 L 180 115"
              stroke="#06B6D4"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.path
              d="M 180 115 L 80 185"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <motion.path
              d="M 180 115 L 280 185"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </svg>

          {/* Node 1: Inbound Lead */}
          <div className="relative z-10 p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2 border border-blue-500/20">
              <MessageSquare className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200">Inbound Lead</span>
            <span className="text-[10px] text-slate-400 font-mono mt-0.5">Webhook/Form</span>
          </div>

          {/* Center Latency Pill */}
          <div className="flex items-center justify-center">
            <div className="px-2.5 py-1 bg-slate-800/60 border border-slate-700/60 rounded-full text-[10px] text-slate-300 font-mono">
              &lt;45ms API Latency
            </div>
          </div>

          {/* Node 2: CRM Sync */}
          <div className="relative z-10 p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2 border border-purple-500/20">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200">GoHighLevel</span>
            <span className="text-[10px] text-slate-400 font-mono mt-0.5">CRM Pipeline</span>
          </div>

          {/* CENTER NODE: AI Decision Core */}
          <div className="col-span-3 my-1 relative z-10 flex justify-center">
            <div className="p-3.5 bg-slate-950/90 rounded-2xl border border-cyan-500/30 flex items-center gap-3.5 shadow-xl max-w-sm w-full">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">
                    AI Decision Core
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800/80">
                    LLM Engine
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Parse intent → Score lead → Trigger instant voice call
                </div>
              </div>
            </div>
          </div>

          {/* Node 3: AI Voice Agent */}
          <div className="relative z-10 p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2 border border-cyan-500/20">
              <Bot className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200">AI Voice Call</span>
            <span className="text-[10px] text-slate-400 font-mono mt-0.5">Sub-600ms AI</span>
          </div>

          {/* Center Icon */}
          <div className="flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Zap className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Node 4: Calendar Sync */}
          <div className="relative z-10 p-3 bg-slate-950/90 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2 border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-slate-200">Booked Meeting</span>
            <span className="text-[10px] text-emerald-400 font-mono mt-0.5">Google Cal</span>
          </div>

        </div>

        {/* Live System Log Activity */}
        <div className="mt-5 pt-3.5 border-t border-slate-800/80 bg-slate-950/70 rounded-xl p-3 font-mono text-[11px] text-slate-400 space-y-1.5">
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-cyan-400">[10:42:01] Webhook Event:</span>
            <span className="text-slate-400">Inbound Lead Qualification</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-blue-400">[10:42:02] AI Agent:</span>
            <span className="text-slate-400">Score 94/100 → Voice Dispatch</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-emerald-400">[10:42:06] Calendar Sync:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              Slot booked on Calendar <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
