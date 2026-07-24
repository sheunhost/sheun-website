import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Sparkles, Building2, PhoneCall } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_CASE_STUDIES } from "../data/automationData";

export default function AutomationCaseStudies() {
  return (
    <AutomationPageWrapper
      title="Automation Case Studies & Verified Results | Sheun Automation"
      description="Explore real case studies showing how AI workflow automation, GoHighLevel setups, and AI voice agents drove measurable revenue and time savings."
    >
      <section className="relative pt-32 pb-16 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Proven Client Outcomes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Case Studies &amp; Verified Results
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Detailed breakdowns of how our custom AI automation systems transformed operational bottlenecks for clinics, law firms, marketing agencies, and e-commerce brands.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {AUTOMATION_CASE_STUDIES.map((cs) => (
            <div key={cs.id} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all shadow-2xl space-y-8">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-cyan-300 text-xs font-mono font-semibold mb-2 border border-blue-500/30">
                    {cs.industry}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{cs.clientName}: {cs.title}</h2>
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-950/80 border border-slate-800">
                {cs.results.map((r, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-extrabold text-cyan-400 font-mono">{r.metric}</div>
                    <div className="text-xs text-slate-400 mt-1">{r.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold">The Challenge</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">The Solution Engineered</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Workflow Pipeline Steps */}
              <div className="p-6 bg-slate-950/60 rounded-2xl border border-slate-800/80 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Deployed Automation Pipeline
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {cs.workflowDiagram.map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                        {step}
                      </span>
                      {i < cs.workflowDiagram.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Quote */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-start gap-4">
                <div className="text-4xl text-cyan-400 font-serif leading-none">&ldquo;</div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-200 italic leading-relaxed">{cs.testimonial.quote}</p>
                  <div className="text-xs font-bold text-white">
                    — {cs.testimonial.author}, <span className="text-slate-400">{cs.testimonial.role} at {cs.testimonial.company}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-900/40 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Want Similar Operational Results?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Book a 30-minute consultation call with our lead automation engineer to map your custom workflow requirements.
          </p>
          <Link
            to="/automation/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl shadow-cyan-500/20"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule Strategy Session</span>
          </Link>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
