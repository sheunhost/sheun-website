import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Sparkles, Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code,
  CheckCircle2, ShieldCheck, Zap
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_SERVICES } from "../data/automationData";

const ICON_MAP: Record<string, any> = {
  Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code
};

export default function AutomationServices() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "ai", label: "AI & Voice Intelligence" },
    { id: "crm", label: "CRM & Marketing Automation" },
    { id: "api", label: "Custom API & Middleware" }
  ];

  const filteredServices = AUTOMATION_SERVICES.filter(service => {
    if (activeCategory === "all") return true;
    if (activeCategory === "ai" && (service.id.includes("ai") || service.id.includes("voice") || service.id.includes("chatbot"))) return true;
    if (activeCategory === "crm" && (service.id.includes("crm") || service.id.includes("gohighlevel") || service.id.includes("email"))) return true;
    if (activeCategory === "api" && (service.id.includes("process") || service.id.includes("api") || service.id.includes("n8n"))) return true;
    return true;
  });

  return (
    <AutomationPageWrapper
      title="AI Automation Services & Systems | Sheun Automation"
      description="Explore our 8 specialized AI automation services: AI Workflow Automation, GoHighLevel CRM, AI Chatbots, Voice Agents, Process Automation, CRM Migrations, Email Sequences, and Custom APIs."
    >
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 bg-slate-950 overflow-hidden border-b border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise AI Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Automation Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From autonomous AI workflow pipelines to sub-600ms AI voice agents and GoHighLevel CRM architectures, we build scalable systems engineered for high-velocity operations.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {filteredServices.map((service, idx) => {
            const IconComponent = ICON_MAP[service.iconName] || Cpu;
            return (
              <div
                key={service.id}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Left Description */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                        {service.badge}
                      </span>
                      <h2 className="text-2xl font-bold text-white mt-1">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.overview}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white">{b.title}: </span>
                          <span className="text-slate-400">{b.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/automation/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                    >
                      <span>Read Complete Service Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Feature Highlight Box */}
                <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Technical Features
                  </h3>
                  <div className="space-y-3">
                    {service.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <div className="text-xs font-bold text-cyan-300">{f.title}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{f.description}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Tech Stack:</span>
                    <span className="text-cyan-400 truncate max-w-[200px]">{service.techStack.slice(0, 3).join(", ")}</span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-extrabold text-white">
            Custom Engineering vs Off-The-Shelf Alternatives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-rose-400 font-bold text-sm">Offshore Virtual Assistants</div>
              <p className="text-xs text-slate-400">High turnover, manual error rates, human lag, and high recurring monthly overhead.</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="text-amber-400 font-bold text-sm">Generic Zapier Templates</div>
              <p className="text-xs text-slate-400">Rigid 'If-This-Then-That' rules that break on unexpected inputs with expensive task fees.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-cyan-500/40 space-y-3 relative">
              <div className="text-cyan-400 font-bold text-sm flex items-center gap-1">
                Sheun AI Custom Engineering <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <p className="text-xs text-slate-300">Self-healing LLM pipelines, sub-second execution, SOC2 security, and unlimited task scalability.</p>
            </div>
          </div>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
