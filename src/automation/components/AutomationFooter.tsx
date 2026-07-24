import { Link } from "react-router-dom";
import { Cpu, ArrowUpRight, ShieldCheck, Mail, PhoneCall, Sparkles } from "lucide-react";
import { AUTOMATION_SERVICES } from "../data/automationData";

export default function AutomationFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Gradient Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Division Switcher Bar */}
        <div className="mb-12 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Looking for Shopify Development & E-Commerce Growth?</h4>
              <p className="text-slate-400 text-sm mt-0.5">Sheun operates two specialized divisions for maximum domain focus.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/services"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              Shopify Services <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
            <Link
              to="/automation/about"
              className="px-4 py-2.5 rounded-xl bg-blue-600/20 text-cyan-300 text-xs font-semibold hover:bg-blue-600/30 transition-colors border border-blue-500/30"
            >
              About Our Divisions
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/automation" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold text-white">Sheun</span>
                <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Automation
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-200">Automate Smarter. Scale Faster.</strong><br />
              We engineer intelligent AI workflows, GoHighLevel CRMs, AI chatbots, voice agents, and custom middleware integrations that save operational hours and eliminate administrative drag.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SOC2 Compliant Data Privacy Practices</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Direct Contact: hello@sheun.online</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h5 className="text-white text-sm font-semibold tracking-wider uppercase font-mono">Navigation</h5>
            <ul className="space-y-2 text-sm">
              <li><Link to="/automation" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/automation/services" className="hover:text-cyan-400 transition-colors">All Services</Link></li>
              <li><Link to="/automation/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link></li>
              <li><Link to="/automation/industries" className="hover:text-cyan-400 transition-colors">Industries</Link></li>
              <li><Link to="/automation/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/automation/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/automation/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link to="/automation/contact" className="hover:text-cyan-400 transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Services Column 1 */}
          <div className="space-y-3">
            <h5 className="text-white text-sm font-semibold tracking-wider uppercase font-mono">AI Services</h5>
            <ul className="space-y-2 text-sm">
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
          <div className="space-y-3">
            <h5 className="text-white text-sm font-semibold tracking-wider uppercase font-mono">Integrations</h5>
            <ul className="space-y-2 text-sm">
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {currentYear} Sheun Automation (A Division of Sheun.online). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/automation/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/automation/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/services" className="hover:text-cyan-400 transition-colors text-slate-400">Shopify Division</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
