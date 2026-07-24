import { Link } from "react-router-dom";
import { Cpu, ShieldCheck, Sparkles, ArrowRight, CheckCircle2, PhoneCall, Zap, Building2, Code, Target, Activity, Users, Lightbulb, Eye, Handshake, TrendingUp, Linkedin, Twitter } from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationAbout() {
  return (
    <AutomationPageWrapper
      title="About | Sheun Automation"
      description="We are a boutique team of automation specialists building deterministic systems for scaling enterprises."
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 bg-slate-950 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-medium tracking-wide mx-auto">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Boutique Engineering Team</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Automate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Smarter.</span><br />
              Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Faster.</span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              We are a focused team of automation specialists who work closely with businesses to simplify operations, improve efficiency, and implement scalable AI-powered systems.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPANY CULTURE & VISION BENTO */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="w-32 h-32 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Our Culture</h3>
              <p className="text-slate-400 leading-relaxed relative z-10 text-lg max-w-2xl">
                We are not a massive, disconnected agency. We are a boutique, tight-knit team of specialists dedicated to understanding your business inside and out. We believe in replacing fragile manual processes with resilient, deterministic software architecture.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-cyan-900/40 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Activity className="w-24 h-24 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed relative z-10">
                A business landscape where human talent is decoupled from repetitive data entry, focusing exclusively on creative strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE TEAM */}
      <section className="py-24 bg-slate-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-slate-400">The specialists behind our enterprise-grade automation systems.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-slate-800 mb-6 overflow-hidden border-2 border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                    <Users className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Alex Mercer</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">Founder & Automation Strategist</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Leads business strategy, AI solutions, workflow architecture, and client consulting.
                </p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-slate-800 mb-6 overflow-hidden border-2 border-slate-700 group-hover:border-indigo-500/50 transition-colors">
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                    <Users className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Jordan Lee</h3>
                <p className="text-indigo-400 text-sm font-medium mb-4">Automation Engineer</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Builds AI workflows, integrations, CRM automations, APIs, and backend systems.
                </p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-slate-800 mb-6 overflow-hidden border-2 border-slate-700 group-hover:border-emerald-500/50 transition-colors">
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                    <Users className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Taylor Reed</h3>
                <p className="text-emerald-400 text-sm font-medium mb-4">Customer Success Specialist</p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Handles client onboarding, project coordination, testing, documentation, and ongoing support.
                </p>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM VALUES */}
      <section className="py-24 bg-slate-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-slate-400">The core principles that drive our engineering and partnerships.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "We constantly explore the edge of AI and automation to bring modern solutions." },
              { icon: CheckCircle2, title: "Reliability", desc: "Our systems are built deterministic and resilient. If we deploy it, it works." },
              { icon: Eye, title: "Transparency", desc: "Clear communication, documented processes, and zero black-box magic." },
              { icon: Cpu, title: "Automation-First", desc: "If a process can be optimized and handed to a system, it should be." },
              { icon: Handshake, title: "Long-Term Partnerships", desc: "We don't just hand off code; we align with your growth trajectory over years." },
              { icon: TrendingUp, title: "Continuous Improvement", desc: "We actively monitor, refactor, and enhance systems as new technology emerges." }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-32 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl font-bold text-white">Partner with our specialists.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              to="/automation/contact"
              className="px-8 py-4 rounded-full font-bold text-slate-950 bg-white hover:scale-105 transition-all duration-300"
            >
              Book an Automation Audit
            </Link>
            <Link
              to="/automation/services"
              className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Explore Our Architecture
            </Link>
          </div>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
