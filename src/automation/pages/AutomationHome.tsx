import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap, ChevronDown, 
  Clock, AlertTriangle, MessageSquare, Layers, FileCheck, PhoneCall,
  Activity, Building2, Briefcase, Target, ShoppingCart, GraduationCap, DollarSign, HardHat, Utensils,
  Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import AutomationWorkflowHeroVisual from "../components/AutomationWorkflowHeroVisual";
import { 
  AUTOMATION_SERVICES, 
  AUTOMATION_INDUSTRIES, 
  AUTOMATION_CASE_STUDIES, 
  AUTOMATION_FAQS 
} from "../data/automationData";

const ICON_MAP: Record<string, any> = {
  Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code,
  Activity, Building2, Briefcase, Target, ShoppingCart, GraduationCap, DollarSign, HardHat, Utensils
};

export default function AutomationHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const problemsList = [
    {
      title: "Manual Repetitive Work",
      desc: "Hours squandered daily copying data between spreadsheets, email threads, and invoicing software.",
      icon: Clock,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Missed Sales Leads",
      desc: "High-value inquiries going cold because your sales team is busy or out of office.",
      icon: AlertTriangle,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20"
    },
    {
      title: "Slow Follow-Up Times",
      desc: "Taking hours or days to respond to lead forms, allowing competitors to win the deal first.",
      icon: MessageSquare,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Disconnected Software Silos",
      desc: "CRM, accounting, project management, and email tools running in isolated silos with duplicate records.",
      icon: Layers,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Costly Human Errors",
      desc: "Miskeyed invoices, missing client attachments, and inaccurate data entry creating client friction.",
      icon: FileCheck,
      color: "text-orange-400 bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Poor Customer Care Response",
      desc: "Inbound phone calls going to voicemail and support tickets piling up unaddressed.",
      icon: PhoneCall,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "Administrative Overload",
      desc: "Key personnel burned out by endless paperwork instead of focusing on strategic growth.",
      icon: Zap,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "Scaling Bottlenecks",
      desc: "Inability to take on 2x order volume without inflating payroll and hiring temporary staff.",
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  const whyChooseUs = [
    { title: "Custom-Built Solutions", desc: "No generic templates. We build bespoke automation pipelines engineered specifically for your software stack and operational rules." },
    { title: "Business-First Approach", desc: "We map workflows based on revenue ROI and staff hours saved, ensuring technology serves business goals." },
    { title: "AI-Powered Systems", desc: "Embed state-of-the-art LLMs (GPT-4o, Gemini, Claude 3.5) into operational loops for context-aware decision making." },
    { title: "Scalable Architecture", desc: "Built with enterprise-grade error handling, queue management, and state recovery to process millions of payloads smoothly." },
    { title: "Secure Integrations", desc: "SOC2 compliant API practices, AES-256 data encryption, and zero retraining of AI models on your private company data." },
    { title: "Fast Implementation", desc: "From operational audit to live production deployment in as little as 7 to 14 business days." },
    { title: "Reliable Support", desc: "24/7 proactive state monitoring, SLA guarantees, and direct developer communication channels." },
    { title: "Transparent Communication", desc: "Clear milestone roadmaps, fixed project pricing, and full video training for your internal staff." }
  ];

  const workflowSteps = [
    { step: "01", title: "Discovery", desc: "Deep audit of your daily manual processes, software stack, and operational bottlenecks." },
    { step: "02", title: "Strategy", desc: "Blueprint the automation architecture, data flows, and calculate projected ROI & payroll savings." },
    { step: "03", title: "System Design", desc: "Design custom JSON schemas, agent prompt chains, API endpoints, and error fallback rules." },
    { step: "04", title: "Development", desc: "Build the automated pipelines in Make, n8n, Python, or custom REST APIs." },
    { step: "05", title: "Testing", desc: "Execute rigorous sandbox stress-testing with edge-case scenarios to guarantee 100% data fidelity." },
    { step: "06", title: "Deployment", desc: "Production cutover with zero downtime and real-time monitoring dashboard integration." },
    { step: "07", title: "Training", desc: "Live video training sessions with your staff and comprehensive visual SOP documentation." },
    { step: "08", title: "Support", desc: "Ongoing SLA maintenance, API updates, performance optimization, and proactive monitoring." }
  ];

  return (
    <AutomationPageWrapper
      title="AI Automation That Works While You Sleep | Sheun Automation"
      description="We design intelligent AI automation systems, GoHighLevel CRMs, AI chatbots, voice agents, and custom workflows that eliminate manual work and help businesses scale."
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Radial Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-cyan-400 text-xs font-mono tracking-wide shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Next-Gen Enterprise AI &amp; Workflow Division</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                AI Automation That Works <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                  While You Sleep
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We design intelligent automation systems that eliminate repetitive tasks, improve customer experiences, streamline operations, and help businesses scale without increasing manual work.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/automation/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform active:scale-95 group"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5 text-cyan-200 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/automation/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-300"
                >
                  <span>Explore Services</span>
                </Link>
              </div>

              {/* Metrics Bar */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl font-extrabold text-white font-mono">90%+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Admin Time Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono">&lt;60s</div>
                  <div className="text-xs text-slate-400 mt-0.5">Speed to Lead</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-emerald-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Data Accuracy</div>
                </div>
              </div>

            </div>

            {/* Right Hero Visual Column */}
            <div className="lg:col-span-5">
              <AutomationWorkflowHeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ================= TRUSTED BY LOGO SECTION ================= */}
      <section className="py-10 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Trusted by Forward-Thinking Enterprise Teams &amp; Growth Businesses Worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500 text-slate-400 font-mono text-sm font-semibold text-center">
            <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60">Apex Dental</div>
            <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60">Sterling Legal</div>
            <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60">Vanguard Realty</div>
            <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60">ScaleUp Media</div>
            <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60">Luxe Apparel</div>
            <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/60">ProCraft Roofing</div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEMS WE SOLVE ================= */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Operational Bottlenecks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Operational Problems We Permanently Solve
            </h2>
            <p className="text-slate-400 text-base">
              Businesses lose up to 30% of revenue to repetitive manual processes, missed leads, and software disconnects. Our AI automation architectures eliminate these friction points completely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemsList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Automated Resolution</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="py-24 bg-slate-900/50 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Specialized AI &amp; Workflow Services
              </h2>
              <p className="text-slate-400 text-base">
                Eight core AI automation solutions built with enterprise-grade reliability, SOC2 data privacy, and direct CRM integrations.
              </p>
            </div>
            <Link
              to="/automation/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors border border-slate-700 shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          {/* 8 Premium Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUTOMATION_SERVICES.map((service) => {
              const IconComponent = ICON_MAP[service.iconName] || Cpu;
              return (
                <div 
                  key={service.id}
                  className="bg-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">Custom Pipeline</span>
                    <Link
                      to={`/automation/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 hover:underline"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE SHEUN AUTOMATION ================= */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Engineering Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose Sheun Automation
            </h2>
            <p className="text-slate-400 text-base">
              We bridge the gap between high-level business goals and technical code execution. Here is how we deliver enterprise results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl hover:bg-slate-900 transition-colors shadow-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-cyan-400 flex items-center justify-center mb-4 border border-blue-500/30 text-xs font-mono font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES WE SERVE ================= */}
      <section className="py-24 bg-slate-900/40 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <Building2 className="w-3.5 h-3.5" />
                <span>Tailored Industry Blueprints</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Industries We Transform
              </h2>
              <p className="text-slate-400 text-base">
                Custom workflow frameworks designed for the unique operational requirements of your industry sector.
              </p>
            </div>
            <Link
              to="/automation/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors border border-slate-700 shrink-0"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUTOMATION_INDUSTRIES.map((ind) => {
              const IconComp = ICON_MAP[ind.icon] || Building2;
              return (
                <div 
                  key={ind.id}
                  className="bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 p-6 rounded-2xl transition-all shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-cyan-400 flex items-center justify-center border border-blue-500/20">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {ind.title}
                      </h3>
                    </div>

                    <p className="text-xs text-cyan-400 font-mono mb-2">{ind.tagline}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-emerald-400">
                    <span>{ind.caseStudyHighlight.result.split(' ')[0]} Impact</span>
                    <Link to="/automation/industries" className="text-slate-300 hover:text-white flex items-center gap-1 font-sans">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
              <Workflow className="w-3.5 h-3.5" />
              <span>Proven 8-Step Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How We Engineer Your Automation Systems
            </h2>
            <p className="text-slate-400 text-base">
              A disciplined, engineering-first methodology that guarantees zero operational disruption and maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-2xl relative shadow-lg"
              >
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 font-mono mb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS & CASE STUDIES ================= */}
      <section className="py-24 bg-slate-900/60 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verifiable Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Client Case Studies &amp; Impact
            </h2>
            <p className="text-slate-400 text-base">
              Real business metrics achieved through bespoke AI workflow implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {AUTOMATION_CASE_STUDIES.map((cs) => (
              <div 
                key={cs.id}
                className="bg-slate-950/90 border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-600/20 text-cyan-300 border border-blue-500/30">
                      {cs.industry}
                    </span>
                    <span className="text-sm font-bold text-white">{cs.clientName}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{cs.title}</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                    {cs.results.map((r, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-extrabold text-cyan-400 font-mono">{r.metric}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-2">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-slate-300 italic mb-6 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/50">
                    &quot;{cs.testimonial.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{cs.testimonial.author}</div>
                    <div className="text-[10px] text-slate-400">{cs.testimonial.role}, {cs.testimonial.company}</div>
                  </div>
                  <Link
                    to="/automation/case-studies"
                    className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-base">
              Got questions about implementing AI automation in your business? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {AUTOMATION_FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left font-bold text-base text-white flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-200 shrink-0 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Ready to Eliminate Operational Friction?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Automate Your Business?
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute AI &amp; Automation Strategy Call. We will analyze your current software stack, identify immediate automation opportunities, and project your exact ROI.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/automation/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 transform active:scale-95"
            >
              <PhoneCall className="w-5 h-5 text-cyan-200" />
              <span>Book Free Strategy Call</span>
            </Link>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            No obligation • 30-minute video audit • Custom architecture blueprint provided
          </p>

        </div>
      </section>
    </AutomationPageWrapper>
  );
}
