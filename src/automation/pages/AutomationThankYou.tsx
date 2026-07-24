import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationThankYou() {
  return (
    <AutomationPageWrapper
      title="Consultation Request Confirmed | Sheun Automation"
      description="Thank you for booking an AI Automation Strategy Session with Sheun Automation. Our engineering team is reviewing your details."
    >
      <section className="min-h-[80vh] pt-32 pb-20 flex items-center justify-center bg-slate-950 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Received</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Strategy Session Confirmed
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Thank you for requesting an AI &amp; Automation Strategy Session with Sheun Automation. Our lead engineering team is analyzing your project details and current software stack.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-left space-y-3 font-mono text-xs text-slate-300">
            <div className="text-cyan-400 font-bold uppercase tracking-wider">What to expect next:</div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span>You will receive an email confirmation with calendar details within 15 minutes.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span>Our engineers will prepare a preliminary workflow audit prior to our call.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-400">•</span>
              <span>Direct inquiries can be sent to <strong>hello@sheun.online</strong>.</span>
            </div>
          </div>

          <div>
            <Link
              to="/automation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
            >
              <span>Return to Automation Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </AutomationPageWrapper>
  );
}
