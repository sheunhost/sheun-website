import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationPrivacyPolicy() {
  return (
    <AutomationPageWrapper
      title="Privacy Policy | Sheun Automation"
      description="Sheun Automation Privacy Policy outlining our data encryption, SOC2 API compliance, and strict commitment to client data protection."
    >
      <section className="pt-32 pb-16 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Data Protection</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: January 2026 | Sheun Automation Division (Sheun.online)
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">1. Commitment to Client Confidentiality &amp; Zero AI Retraining</h2>
            <p>
              At Sheun Automation, we treat customer data with enterprise-grade security protocols. We utilize SOC2-compliant API endpoints where data transmitted through our automated workflows, AI chatbots, and voice systems is strictly excluded from public AI model training datasets.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              We collect information provided directly by clients when requesting consultation or implementing custom automation pipelines, including work emails, company phone numbers, API credentials, and workflow specifications. API secrets and authentication tokens are stored in encrypted vaults using AES-256 standards.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">3. How Information Is Used</h2>
            <p>
              Information is strictly used to design, execute, monitor, and maintain custom automation systems and CRM integrations on behalf of our clients. We do not sell, license, or distribute client contact details or database records to third parties under any circumstances.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">4. Data Encryption &amp; Storage</h2>
            <p>
              All webhook transmissions use TLS 1.3 encryption in flight. Database records processed through our self-hosted n8n instances or GoHighLevel CRM workflows adhere to industry standard security guidelines.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-slate-800">
            <Link to="/automation" className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Return to Automation Home
            </Link>
            <span className="text-xs text-slate-500 font-mono">Contact: hello@sheun.online</span>
          </div>

        </div>
      </section>
    </AutomationPageWrapper>
  );
}
