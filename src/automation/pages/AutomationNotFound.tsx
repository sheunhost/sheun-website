import { Link } from "react-router-dom";
import { Cpu, ArrowLeft, PhoneCall } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationNotFound() {
  return (
    <AutomationPageWrapper
      title="404 Page Not Found | Sheun Automation"
      description="The requested page could not be located on Sheun Automation."
    >
      <section className="min-h-[80vh] pt-32 pb-20 flex items-center justify-center bg-slate-950 text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="w-20 h-20 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center mx-auto">
            <Cpu className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-2">
            <div className="text-4xl font-extrabold text-cyan-400 font-mono">404</div>
            <h1 className="text-3xl font-bold text-white">Automation Route Not Found</h1>
            <p className="text-sm text-slate-400">
              The workflow endpoint or page you requested could not be found or has moved.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              to="/automation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Automation Home</span>
            </Link>

            <Link
              to="/automation/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 bg-slate-900 border border-slate-800"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Engineers</span>
            </Link>
          </div>

        </div>
      </section>
    </AutomationPageWrapper>
  );
}
