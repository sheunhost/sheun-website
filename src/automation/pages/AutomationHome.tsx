import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Zap, 
  Clock, AlertTriangle, MessageSquare, Layers,
  Building2, Briefcase, ShoppingCart, Activity,
  Cpu, Bot, Workflow, ChevronRight, Sparkles, PhoneCall,
  Check, ArrowDown
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import AutomationWorkflowHeroVisual from "../components/AutomationWorkflowHeroVisual";
import { 
  AUTOMATION_CASE_STUDIES, 
  AUTOMATION_FAQS 
} from "../data/automationData";

export default function AutomationHome() {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeIndustry, setActiveIndustry] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pillars = [
    {
      id: "voice-ai",
      title: "AI Voice & Conversational Agents",
      badge: "Sub-600ms Latency",
      icon: Bot,
      summary: "Human-sounding AI voice bots that handle inbound inquiries, pre-qualify leads, and book appointments into your calendar 24/7.",
      outcomes: [
        "Sub-600ms latency for natural human conversations",
        "Direct Google Calendar & Outlook scheduling",
        "CRM contact creation & call transcript summaries",
        "Custom voice tone matched to your brand identity"
      ],
      techStack: ["Retell AI", "Vapi", "Gemini 1.5 Flash", "Twilio", "Webhooks"],
      link: "/automation/services/ai-voice-agents"
    },
    {
      id: "workflow-middleware",
      title: "Workflow & API Orchestration",
      badge: "Zero-Data-Loss Middleware",
      icon: Workflow,
      summary: "Custom API pipelines built with n8n, Make, and Python that link your isolated software tools together with enterprise error handling.",
      outcomes: [
        "Eliminates manual data entry across spreadsheets & CRMs",
        "Custom webhook listeners & JSON payload formatters",
        "Automated PDF document generation & e-signature routing",
        "Real-time error fallback alerts to Slack/Teams"
      ],
      techStack: ["n8n", "Make.com", "Python", "REST APIs", "Webhooks"],
      link: "/automation/services/ai-workflow-automation"
    },
    {
      id: "ghl-crm",
      title: "GoHighLevel CRM & Pipeline Architecture",
      badge: "End-to-End Sales Engine",
      icon: Layers,
      summary: "Custom GoHighLevel CRM builds with automated multi-channel follow-up sequences, pipeline stage triggers, and review generation.",
      outcomes: [
        "Automated SMS & Email nurture campaigns",
        "Speed-to-lead execution under 60 seconds",
        "Pipeline drag-and-drop stage triggers",
        "Inbound call tracking & missed-call textback"
      ],
      techStack: ["GoHighLevel", "Zapier", "Stripe", "Twilio", "Mailgun"],
      link: "/automation/services/gohighlevel-crm"
    },
    {
      id: "data-ecommerce",
      title: "Data Sync & E-Commerce Automation",
      badge: "Seamless Operations",
      icon: ShoppingCart,
      summary: "Bi-directional inventory sync, order routing, and ERP integration that keep your e-commerce backend running without human friction.",
      outcomes: [
        "Real-time inventory level reconciliation across channels",
        "Automated order dispatch & tracking updates to customers",
        "WooCommerce to Shopify automated catalog migration",
        "Custom ERP & accounting reconciliation loops"
      ],
      techStack: ["Shopify GraphQL", "WooCommerce API", "QuickBooks", "Airtable"],
      link: "/automation/services/process-automation"
    }
  ];

  const industries = [
    {
      name: "Real Estate & Property",
      icon: Building2,
      tagline: "Instant Lead Screening & Tour Booking",
      manualState: "Inquiries sit in email inboxes for hours while agents are on property tours.",
      automatedState: "AI Voice Agent calls back within 30 seconds, pre-qualifies budget & timeframe, and books a tour directly on the agent's Google Calendar.",
      metrics: "88% faster response time • 3.2x tour bookings"
    },
    {
      name: "Legal & Professional Services",
      icon: Briefcase,
      tagline: "Automated Client Intake & Retainers",
      manualState: "Paralegals manually collect client details, draft retainer agreements, and copy files to Dropbox.",
      automatedState: "Form submission triggers automated AI intake, generates customized agreement PDFs, and sends for e-signature with zero manual typing.",
      metrics: "90% admin time saved • 100% data accuracy"
    },
    {
      name: "Healthcare & Dental",
      icon: Activity,
      tagline: "Patient Recalls & Appointment Reminders",
      manualState: "Front desk staff spends 3 hours daily making phone calls for appointment confirmations.",
      automatedState: "Automated SMS/Voice confirmation flows handle 95% of recalls, automatically filling cancelled slots from a waitlist.",
      metrics: "75% drop in no-shows • 15+ staff hours saved/week"
    },
    {
      name: "E-Commerce & Retail",
      icon: ShoppingCart,
      tagline: "Omnichannel Sync & Order Processing",
      manualState: "Orders entered manually into shipping software, causing stock discrepancies and shipping delays.",
      automatedState: "Instant API event triggers sync warehouse inventory, generate shipping labels, and notify customers automatically.",
      metrics: "Zero inventory overselling • 4x faster fulfillment"
    }
  ];

  const implementationSteps = [
    {
      phase: "01",
      title: "Process Audit & Mapping",
      desc: "We analyze your daily operations, software stack, and employee touchpoints to identify high-ROI automation targets."
    },
    {
      phase: "02",
      title: "Architecture & API Blueprint",
      desc: "We design custom JSON schemas, webhook triggers, AI prompt chains, and CRM pipelines before writing production code."
    },
    {
      phase: "03",
      title: "Sandbox Build & Stress Testing",
      desc: "We build the system in a isolated staging environment, running edge-case scenarios to guarantee 100% data fidelity."
    },
    {
      phase: "04",
      title: "Production Cutover & Managed Care",
      desc: "Seamless go-live with zero downtime, real-time error monitoring, and thorough video SOP training for your team."
    }
  ];

  return (
    <AutomationPageWrapper
      title="B2B Systems & AI Automation Architecture | Sheun Automation"
      description="We design custom AI voice agents, GoHighLevel CRM builds, and automated API workflow pipelines that eliminate manual work and scale business operations."
    >
      {/* ================= SECTION 1: HERO & VALUE PROPOSITION ================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Clean Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono tracking-wide">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Enterprise B2B Systems &amp; AI Architecture</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Autonomous Business Systems That Eliminate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Operational Friction
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We architect custom API workflows, intelligent AI voice agents, and GoHighLevel CRM infrastructure that handle your repetitive operations—speeding up response times, reducing manual errors, and unlocking scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/automation/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20 group"
                >
                  <PhoneCall className="w-4 h-4 text-slate-950" />
                  <span>Schedule System Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/automation/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </div>

              {/* Strategic Metrics Ribbon */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">&lt;60s</div>
                  <div className="text-xs text-slate-400 mt-0.5">Speed to Lead</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Data Accuracy</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">14 Days</div>
                  <div className="text-xs text-slate-400 mt-0.5">Deployment Time</div>
                </div>
              </div>

            </div>

            {/* Right Hero Live System Visual */}
            <div className="lg:col-span-5">
              <AutomationWorkflowHeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ================= NARRATIVE TRANSITION BAND ================= */}
      <div className="bg-slate-900/60 border-b border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
          <span>01. OPERATIONAL FRICTION</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          <span>02. SYSTEM PILLARS</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          <span>03. INDUSTRY BLUEPRINTS</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          <span>04. IMPLEMENTATION</span>
        </div>
      </div>

      {/* ================= SECTION 2: THE OPERATIONAL GAP (MANUAL VS AUTOMATED) ================= */}
      <section className="py-24 bg-slate-950 relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Section 1 • The Operational Friction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Traditional Operations Slow Down as Businesses Grow
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              When software tools run in isolated silos, team members waste up to 30% of their working hours manually copy-pasting data, chasing cold leads, and correcting miskeyed records.
            </p>
          </div>

          {/* Comparison Split: Legacy Manual vs. Autonomous System */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Left: The Legacy Manual Workflow */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 text-sm font-bold font-mono">
                  <Clock className="w-4 h-4" />
                  <span>The Legacy Manual Workflow</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-mono">
                  High Overhead
                </span>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">✕</span>
                  <span>Inbound leads wait 2–6 hours for initial response while sales reps are busy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">✕</span>
                  <span>Manual typing between email, spreadsheets, and invoicing tools creates keying errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">✕</span>
                  <span>Follow-up emails and SMS reminders depend on employee memory and manual calendars.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">✕</span>
                  <span>Scaling requires hiring more administrative staff, inflating payroll overhead.</span>
                </li>
              </ul>
            </div>

            {/* Right: The Autonomous System Architecture */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 space-y-6 relative shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold font-mono">
                  <Zap className="w-4 h-4" />
                  <span>Our Autonomous Architecture</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  100% Autonomous
                </span>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>AI Voice Agent initiates callback under 60 seconds and pre-qualifies budget automatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>API webhooks synchronize data instantly across CRM, accounting, and project tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Automated multi-channel SMS/Email nurture sequences trigger based on real lead actions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Handles 10x lead volume without adding headcount or increasing operational costs.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="#pillars"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("pillars")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span>Explore how we bridge this gap with our 4 System Pillars</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </Link>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: THE FOUR SYSTEM PILLARS (SERVICES) ================= */}
      <section id="pillars" className="py-24 bg-slate-950 relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>Section 2 • System Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Four Core Engineering Pillars
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We group our technical automation capabilities into four modular system pillars designed for seamless deployment and enterprise reliability.
            </p>
          </div>

          {/* Interactive Pillars Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isActive = activePillar === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? "bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10 text-white"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <IconComp className={`w-5 h-5 ${isActive ? "text-cyan-400" : "text-slate-500"}`} />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white line-clamp-1">{pillar.title}</div>
                  <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{pillar.badge}</div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail Card */}
          {(() => {
            const currentPillar = pillars[activePillar];
            const IconComponent = currentPillar.icon;
            return (
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-950 border border-cyan-800">
                        {currentPillar.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">{currentPillar.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {currentPillar.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Functional Outcomes</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentPillar.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-200">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">Tech Stack:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentPillar.techStack.map((tech, t) => (
                          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={currentPillar.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shrink-0"
                    >
                      <span>Explore {currentPillar.title.split(' ')[0]} Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Visual Architecture Card */}
                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="text-xs font-mono text-slate-400 flex items-center justify-between pb-3 border-b border-slate-800">
                    <span>LIVE PIPELINE ARCHITECTURE</span>
                    <span className="text-emerald-400">READY</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span>Inbound Event Trigger</span>
                      <span className="text-cyan-400">Webhook JSON</span>
                    </div>
                    <div className="flex justify-center text-slate-600">↓</div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-between text-slate-200">
                      <span>{currentPillar.title} Engine</span>
                      <span className="text-emerald-400">Execution</span>
                    </div>
                    <div className="flex justify-center text-slate-600">↓</div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-slate-300">
                      <span>Database / CRM Pipeline Sync</span>
                      <span className="text-purple-400">Updated</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* ================= SECTION 4: REAL-WORLD INDUSTRY BLUEPRINTS ================= */}
      <section className="py-24 bg-slate-950 relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono">
              <Building2 className="w-3.5 h-3.5" />
              <span>Section 3 • Industry Blueprints</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tailored Blueprints for High-Velocity Sectors
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Discover how our four pillars translate into industry-specific automation workflows that drive measurable revenue.
            </p>
          </div>

          {/* Industry Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndustry(i)}
                  className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeIndustry === i
                      ? "bg-slate-900 border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/10"
                      : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Industry Card */}
          {(() => {
            const ind = industries[activeIndustry];
            return (
              <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 max-w-4xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-mono text-emerald-400">{ind.tagline}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{ind.name} Architecture</h3>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold shrink-0">
                    {ind.metrics}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="text-xs font-mono text-rose-400 uppercase">Without Automation</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{ind.manualState}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-2">
                    <div className="text-xs font-mono text-emerald-400 uppercase">With Sheun Automation</div>
                    <p className="text-sm text-slate-200 leading-relaxed">{ind.automatedState}</p>
                  </div>
                </div>

                <div className="text-right pt-2">
                  <Link
                    to="/automation/industries"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:underline"
                  >
                    <span>View All Industry Case Blueprints</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ================= SECTION 5: 4-PHASE IMPLEMENTATION FRAMEWORK ================= */}
      <section className="py-24 bg-slate-950 relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono">
              <Workflow className="w-3.5 h-3.5" />
              <span>Section 4 • Implementation Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Operational Audit to Live Production in 14 Days
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Our disciplined, engineering-first delivery methodology guarantees zero data loss and seamless adoption for your team.
            </p>
          </div>

          {/* 4 Connected Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3 relative shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-extrabold text-cyan-400 mb-2">
                    Phase {step.phase}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800/60 text-[10px] font-mono text-slate-500">
                  Timeline: {idx === 0 ? "Days 1–3" : idx === 1 ? "Days 4–7" : idx === 2 ? "Days 8–11" : "Days 12–14"}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: VERIFIED CASE STUDIES ================= */}
      <section className="py-24 bg-slate-950 relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Section 5 • Production Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Measurable Client Impact
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Real business metrics achieved through bespoke AI workflow implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {AUTOMATION_CASE_STUDIES.slice(0, 2).map((cs) => (
              <div 
                key={cs.id}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-bold text-slate-300">{cs.clientName}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{cs.title}</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    {cs.results.map((r, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-bold text-emerald-400 font-mono">{r.metric}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-2">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    &quot;{cs.testimonial.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{cs.testimonial.author}</div>
                    <div className="text-[10px] text-slate-400">{cs.testimonial.role}, {cs.testimonial.company}</div>
                  </div>
                  <Link
                    to="/automation/case-studies"
                    className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
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
      <section className="py-24 bg-slate-950 relative border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-base">
              Clear answers regarding system security, deployment timelines, and software compatibility.
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
                  <ChevronRight className={`w-5 h-5 text-cyan-400 transition-transform duration-200 shrink-0 ${openFaq === idx ? "rotate-90" : ""}`} />
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

      {/* ================= SECTION 7: FINAL SYSTEM AUDIT CTA ================= */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Section 6 • Direct Technical Audit</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Audit Your Current Workflow Stack?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a 30-minute technical workflow audit. We will analyze your existing software tools, pinpoint high-ROI automation opportunities, and map out your custom 14-day architecture blueprint.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/automation/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Schedule 30-Min Technical Audit</span>
            </Link>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            No obligation • 30-minute architecture review • Custom blueprint provided
          </p>

        </div>
      </section>
    </AutomationPageWrapper>
  );
}
