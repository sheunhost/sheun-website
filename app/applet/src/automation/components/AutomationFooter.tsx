import { Link } from "react-router-dom";
import { Cpu, ArrowUpRight, Sparkles } from "lucide-react";
import { AUTOMATION_SERVICES } from "../data/automationData";

export default function AutomationFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Division Toggle */}
        <div className="mb-16 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Need E-Commerce Engineering?</h4>
              <p className="text-slate-400 text-xs mt-1">Visit our dedicated Shopify development division.</p>
            </div>
          </div>
          <Link
            to="/"
            className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 transition-colors border border-white/5"
          >
            <span>Switch to Shopify Engineering</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link to="/automation" className="flex items-center gap-2 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Sheun <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest ml-1 bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/20">Systems</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Enterprise AI workflow automation, CRM architecture, and deterministic voice agent engineering for scaling organizations.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Architecture</h4>
            <ul className="space-y-3">
              {AUTOMATION_SERVICES.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link to={`/automation/services/${service.slug}`} className="text-sm hover:text-cyan-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/automation/services" className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
                  View all systems &rarr;
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Solutions', 'Industries', 'Case Studies'].map(item => (
                <li key={item}>
                  <Link to={`/automation/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-cyan-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-3">
              {['Contact', 'FAQ', 'Privacy Policy', 'Terms'].map(item => (
                <li key={item}>
                  <Link to={`/automation/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-cyan-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {currentYear} Sheun Automation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
