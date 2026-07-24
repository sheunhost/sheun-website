import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationTerms() {
  return (
    <AutomationPageWrapper
      title="Terms of Service | Sheun Automation"
      description="Sheun Automation Terms of Service governing AI workflow development, CRM custom deployments, SLA support terms, and client intellectual property."
    >
      <section className="pt-32 pb-16 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Service Framework</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: January 2026 | Sheun Automation Division (Sheun.online)
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">1. Scope of Automation Engineering Services</h2>
            <p>
              Sheun Automation delivers custom AI workflow pipelines, GoHighLevel CRM builds, AI chatbot integrations, AI voice agents, and custom middleware solutions. All project deliverables, timelines, and milestone payments are specified in formal client proposals.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">2. Intellectual Property &amp; Code Ownership</h2>
            <p>
              Upon complete payment of project milestones, clients receive full ownership rights to bespoke custom workflows, prompts, scripts, and database configurations authored specifically for their enterprise. Sheun Automation retains the right to utilize non-proprietary underlying frameworks and middleware patterns.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">3. Third-Party Platform Terms &amp; API Dependencies</h2>
            <p>
              Our automations interact with third-party software applications (OpenAI, Gemini, GoHighLevel, Twilio, Make.com, n8n, Stripe). Clients are responsible for maintaining active, compliant accounts and API licenses with these respective providers.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">4. Service Level Agreements (SLA) &amp; Maintenance</h2>
            <p>
              Ongoing workflow monitoring, API endpoint updates, and priority bug patching are delivered in accordance with agreed SLA maintenance tiers.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800">
            <Link to="/automation" className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Return to Automation Home
            </Link>
            <span className="text-xs text-slate-500 font-mono">Questions: hello@sheun.online</span>
          </div>

        </div>
      </section>
    </AutomationPageWrapper>
  );
}
