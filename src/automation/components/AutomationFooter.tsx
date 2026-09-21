import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Mail, CheckCircle2, Send } from "lucide-react";
import { AUTOMATION_SERVICES } from "../data/automationData";

export default function AutomationFooter() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      // 1. Submit to Web3Forms for email record
      const formData = new FormData();
      formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
      formData.append("from_name", "Sheun Hub Automation Newsletter");
      formData.append("subject", "New Automation Newsletter Subscriber");
      formData.append("email", email);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).catch(err => console.error("Web3Forms error:", err));

      // 2. Submit to Mailchimp/CRM Hub
      await fetch("/api/connect/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      setIsSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      // Still show success since Web3Forms fired
      setIsSubscribed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Top Wall 3-Color Gradient Separator (Orange/Coral -> Cyan -> Deep Purple) */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B4A] via-cyan-400 to-[#6D28D9] z-20" />

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Division Switcher Bar */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-slate-800/80 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Sheun Hub" 
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover shadow-sm border border-cyan-400/40 shrink-0"
            />
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">Need Shopify Store Development or SEO?</h4>
              <p className="text-slate-400 text-sm mt-0.5">Sheun Hub operates dedicated divisions for Shopify eCommerce and Enterprise Automation.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B4A] to-[#D946EF] text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-95 transition-all shadow-sm"
            >
              Shopify eCommerce Hub <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/about"
              className="px-4 py-2.5 rounded-xl bg-slate-700/60 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors border border-slate-600"
            >
              About Sheun Hub
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/automation" className="inline-block group" aria-label="Sheun Hub">
              <img 
                src="/logo.png" 
                alt="Sheun Hub" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover shadow-sm border border-cyan-400/40"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              We engineer intelligent AI workflows, GoHighLevel CRM architectures, AI voice agents, and custom middleware pipelines that eliminate manual tasks and scale your business operations.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2 max-w-sm space-y-2">
              <span className="text-xs font-bold text-white font-mono uppercase tracking-wider block">
                Automation Insights & Blueprints
              </span>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800 p-3 rounded-xl font-mono">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! You&apos;re connected to our central updates hub.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 flex-1"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{isSubmitting ? "..." : "Join"}</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>

            <div className="pt-2 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise SOC2 &amp; GDPR Compliant Practices</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email: hello@sheun.online</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="text-white text-xs font-bold tracking-widest uppercase font-mono">Navigation</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/automation" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/automation/services" className="hover:text-cyan-400 transition-colors">All Capabilities</Link></li>
              <li><Link to="/automation/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link></li>
              <li><Link to="/automation/industries" className="hover:text-cyan-400 transition-colors">Industry Blueprints</Link></li>
              <li><Link to="/automation/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/automation/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/automation/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link to="/automation/contact" className="hover:text-cyan-400 transition-colors">Contact &amp; Audit</Link></li>
            </ul>
          </div>

          {/* Services Column 1 */}
          <div className="space-y-4">
            <h5 className="text-white text-xs font-bold tracking-widest uppercase font-mono">AI Systems</h5>
            <ul className="space-y-2.5 text-sm">
              {AUTOMATION_SERVICES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/automation/services/${service.slug}`} 
                    className="hover:text-cyan-400 transition-colors text-slate-400 text-xs block truncate"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="space-y-4">
            <h5 className="text-white text-xs font-bold tracking-widest uppercase font-mono">Integrations</h5>
            <ul className="space-y-2.5 text-sm">
              {AUTOMATION_SERVICES.slice(4, 8).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/automation/services/${service.slug}`} 
                    className="hover:text-cyan-400 transition-colors text-slate-400 text-xs block truncate"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {currentYear} Sheun Hub Automation (A Division of Sheun Hub). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/automation/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/automation/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-cyan-400 transition-colors text-slate-300 font-bold">Shopify Division →</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
