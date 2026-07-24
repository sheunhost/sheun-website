import { Link } from "react-router-dom";
import { Building2, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Activity, Briefcase, Target, ShoppingCart, GraduationCap, DollarSign, HardHat, Utensils } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_INDUSTRIES } from "../data/automationData";

const ICON_MAP: Record<string, any> = {
  Activity, Building2, Briefcase, Target, ShoppingCart, GraduationCap, DollarSign, HardHat, Utensils
};

export default function AutomationIndustries() {
  return (
    <AutomationPageWrapper
      title="Industry-Specific AI Automation Solutions | Sheun Automation"
      description="Tailored AI workflow blueprints for Healthcare, Real Estate, Legal, Marketing Agencies, E-commerce, Finance, Construction, and Hospitality."
    >
      <section className="relative pt-32 pb-16 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Building2 className="w-3.5 h-3.5" />
            <span>Vertical AI Blueprints</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Every industry faces distinct operational bottlenecks. We engineer custom automation workflows matched to your compliance and software standards.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {AUTOMATION_INDUSTRIES.map((ind) => {
            const IconComp = ICON_MAP[ind.icon] || Building2;
            return (
              <div key={ind.id} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all shadow-2xl space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{ind.title}</h2>
                      <p className="text-xs font-mono text-cyan-400 mt-0.5">{ind.tagline}</p>
                    </div>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shrink-0">
                    {ind.caseStudyHighlight.headline}
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{ind.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Bottlenecks */}
                  <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold">
                      Common Industry Bottlenecks
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-400">
                      {ind.commonBottlenecks.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-400 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Automated Workflows */}
                  <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800/80 space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      Automated Solution Blueprints
                    </h3>
                    <div className="space-y-2">
                      {ind.automatedWorkflows.map((wf, i) => (
                        <div key={i} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-bold text-white">{wf.name}: </span>
                            <span className="text-slate-400">{wf.detail}</span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 shrink-0 ml-2">
                            {wf.impact}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Link
                    to="/automation/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    <span>Request Industry Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
