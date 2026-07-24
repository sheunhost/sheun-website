import { motion } from "framer-motion";
import { Cpu, MessageSquare, Database, Bot, Zap, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function AutomationWorkflowHeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Glow Backdrop */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-2xl opacity-30 animate-pulse" />

      {/* Main Glassmorphic Container */}
      <div className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Top Header Controls */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-400 ml-2">sheun-ai-engine.v2.active</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Live Execution Mode
          </div>
        </div>

        {/* Workflow Nodes Grid */}
        <div className="grid grid-cols-3 gap-4 relative">
          
          {/* Animated Connecting SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 80 50 L 190 120"
              stroke="url(#blue-cyan-grad)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.path
              d="M 300 50 L 190 120"
              stroke="url(#blue-cyan-grad)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
            <motion.path
              d="M 190 120 L 80 190"
              stroke="url(#cyan-emerald-grad)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <motion.path
              d="M 190 120 L 300 190"
              stroke="url(#cyan-emerald-grad)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 20 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            <defs>
              <linearGradient id="blue-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="cyan-emerald-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Node 1: Inbound Trigger */}
          <div className="relative z-10 p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-2 border border-blue-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white">Inbound Lead</span>
            <span className="text-[10px] text-slate-400 font-mono mt-0.5">Webhook/SMS</span>
          </div>

          {/* Empty Center Top */}
          <div className="flex items-center justify-center">
            <div className="px-3 py-1 bg-slate-800/80 border border-slate-700/80 rounded-full text-[10px] text-cyan-300 font-mono">
              &lt;50ms Latency&gt;
            </div>
          </div>

          {/* Node 2: CRM & Database */}
          <div className="relative z-10 p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-2 border border-purple-500/30">
              <Database className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white">GoHighLevel</span>
            <span className="text-[10px] text-slate-400 font-mono mt-0.5">CRM Pipeline</span>
          </div>

          {/* CENTER NODE: AI Engine Hub */}
          <div className="col-span-3 my-2 relative z-10 flex justify-center">
            <div className="p-4 bg-gradient-to-r from-blue-900/40 via-cyan-900/40 to-indigo-900/40 rounded-2xl border border-cyan-500/40 flex items-center gap-4 shadow-xl max-w-sm w-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-cyan-400 animate-spin-slow" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1">
                    AI Decision Core <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800">
                    LLM RAG
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Parsing intent, qualifying budget &amp; triggering voice callback
                </div>
              </div>
            </div>
          </div>

          {/* Node 3: AI Voice Agent */}
          <div className="relative z-10 p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center mb-2 border border-cyan-500/30">
              <Bot className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white">AI Voice Agent</span>
            <span className="text-[10px] text-slate-400 font-mono mt-0.5">Instant Call</span>
          </div>

          {/* Empty Center Bottom */}
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
              <Zap className="w-4 h-4" />
            </div>
          </div>

          {/* Node 4: Calendar & Deal Outcome */}
          <div className="relative z-10 p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-2 border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-white">Booked Meeting</span>
            <span className="text-[10px] text-emerald-400 font-mono mt-0.5">320% ROI</span>
          </div>

        </div>

        {/* Live System Log Activity */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 bg-slate-950/60 rounded-xl p-3 font-mono text-[11px] text-slate-400 space-y-1.5">
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-cyan-400">[00:01] Webhook received:</span>
            <span className="text-slate-400">Inbound Lead: &quot;Real Estate Inquiry&quot;</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-blue-400">[00:02] AI Processing:</span>
            <span className="text-slate-400">Score 98/100 -&gt; Instant Call Initiated</span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="text-emerald-400">[00:05] Calendar Sync:</span>
            <span className="text-emerald-300 font-semibold flex items-center gap-1">
              Confirmed slot on Google Calendar <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
