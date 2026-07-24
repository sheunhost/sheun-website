import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Zap, CheckCircle2, ShieldCheck, Clock, Users, Database } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationSolutions() {
  const solutions = [
    {
      title: "Speed-to-Lead Lead Qualification Engine",
      tag: "Conversion System",
      desc: "Contact inbound form leads within 30 seconds across SMS, AI Voice Call, and Email before competitors even open the lead notification.",
      outcomes: ["390% Higher Contact Rate", "< 30s Speed to Contact", "Automated Calendar Booking"],
      link: "/automation/services/gohighlevel-crm"
    },
    {
      title: "24/7 Omnichannel Customer Care Bot",
      tag: "Support AI",
      desc: "Deploy custom RAG AI chatbots trained on your documentation to resolve 70% of inbound tickets across Website, WhatsApp, and Slack.",
      outcomes: ["70% Reduction in Tickets", "Sub-2s Answer Latency", "50+ Languages Supported"],
      link: "/automation/services/ai-chatbots"
    },
    {
      title: "Inbound AI Phone Dispatcher & Call Center",
      tag: "Voice Intelligence",
      desc: "Replace expensive call centers with human-sounding AI Voice Agents that answer phone lines, qualify budget, and transfer warm leads.",
      outcomes: ["100% Inbound Answer Rate", "Sub-600ms Response Speed", "80% Savings vs Call Centers"],
      link: "/automation/services/ai-voice-agents"
    },
    {
      title: "Document Parsing & Contract Auto-Generation",
      tag: "Operations BPA",
      desc: "Extract structured data from PDFs, invoices, and signed contracts into your CRM, accounting tools, and cloud file vaults.",
      outcomes: ["Zero Manual Data Entry", "100% Compliance Accuracy", "Instant Client Onboarding"],
      link: "/automation/services/ai-workflow-automation"
    },
    {
      title: "Zero-Downtime CRM Migration & Synchronization",
      tag: "Data Infrastructure",
      desc: "Consolidate customer databases from legacy platforms into HubSpot or GoHighLevel with 100% field mapping precision and zero data loss.",
      outcomes: ["100% Historical Data Intact", "Zero Business Interruption", "Clean De-duplicated Contact Vault"],
      link: "/automation/services/crm-integration"
    },
    {
      title: "Custom Middleware & Self-Hosted n8n Servers",
      tag: "Custom Engineering",
      desc: "Eliminate expensive Zapier task tiers with private, self-hosted n8n workflow servers handling millions of monthly webhooks.",
      outcomes: ["Save $1,000+/mo on Task Fees", "Unlimited Task Executions", "SOC2 Private Firewall Security"],
      link: "/automation/services/custom-api-n8n-zapier"
    }
  ];

  return (
    <AutomationPageWrapper
      title="Turnkey AI Automation Solutions | Sheun Automation"
      description="Pre-architected AI workflow solutions engineered for instant deployment across sales, customer care, operations, and data infrastructure."
    >
      <section className="relative pt-32 pb-16 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>Turnkey Business Engines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI &amp; Automation Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Solve specific operational challenges with our battle-tested automation frameworks designed for high ROI and immediate deployment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/40 transition-all shadow-xl flex flex-col justify-between group">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-cyan-300 text-xs font-mono font-semibold mb-4 border border-blue-500/30">
                    {sol.tag}
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{sol.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{sol.desc}</p>
                  
                  <div className="space-y-2 mb-6">
                    {sol.outcomes.map((o, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <Link to={sol.link} className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
                    Explore Implementation <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
