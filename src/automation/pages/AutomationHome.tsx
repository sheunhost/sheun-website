import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Zap, 
  Clock, AlertTriangle, Layers,
  Building2, Briefcase, ShoppingCart, Activity,
  Cpu, Bot, Workflow, ChevronRight, Sparkles, Calendar,
  Check, ArrowDown, Send, CheckCircle, Lock, PhoneCall
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import AutomationWorkflowHeroVisual from "../components/AutomationWorkflowHeroVisual";
import { 
  AUTOMATION_CASE_STUDIES, 
  AUTOMATION_FAQS 
} from "../data/automationData";
import { openCalendlyPopup } from "../../lib/utils";

export default function AutomationHome() {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [activeIndustry, setActiveIndustry] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [auditTab, setAuditTab] = useState<"book" | "form">("book");

  // Web3Forms & CRM Lead Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    automationFocus: "AI Voice Agents & Calling",
    currentStack: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const pillars = [
    {
      id: "voice-ai",
      title: "AI Voice & Inbound Call Agents",
      badge: "Sub-600ms Response",
      accent: "from-cyan-500 to-[#6D28D9]",
      icon: Bot,
      summary: "Human-sounding AI voice bots that handle inbound calls, pre-qualify leads, and book meetings directly into your calendar 24/7.",
      outcomes: [
        "Under 600ms latency for fluid, natural dialogue",
        "Direct Google Calendar & Outlook scheduling",
        "Automatic CRM contact logging & call transcripts",
        "Custom tone configured to your brand identity"
      ],
      techStack: ["Retell AI", "Vapi", "Gemini 1.5 Flash", "Twilio", "Webhooks"],
      link: "/automation/services/ai-voice-agents"
    },
    {
      id: "workflow-middleware",
      title: "API & Workflow Middleware",
      badge: "Zero-Data-Loss Pipelines",
      accent: "from-[#FF6B4A] to-cyan-500",
      icon: Workflow,
      summary: "Resilient backend pipelines built with n8n, Make, and Python that eliminate manual copy-pasting across isolated software tools.",
      outcomes: [
        "Eliminates hours of manual typing between tools",
        "Custom webhook handlers & JSON formatters",
        "Automated PDF document generation & e-signing",
        "Instant fallback error alerts to Slack & Teams"
      ],
      techStack: ["n8n", "Make.com", "Python", "REST APIs", "Webhooks"],
      link: "/automation/services/ai-workflow-automation"
    },
    {
      id: "ghl-crm",
      title: "GoHighLevel CRM Architecture",
      badge: "Automated Sales Engine",
      accent: "from-[#6D28D9] to-cyan-500",
      icon: Layers,
      summary: "Tailored GoHighLevel configurations featuring automated SMS/email follow-ups, pipeline triggers, and missed-call textback.",
      outcomes: [
        "Sub-60-second speed-to-lead response automation",
        "Automated multi-channel SMS & email sequences",
        "Visual drag-and-drop pipeline stage triggers",
        "Call recording, attribution & review generation"
      ],
      techStack: ["GoHighLevel", "Zapier", "Stripe", "Twilio", "Mailgun"],
      link: "/automation/services/gohighlevel-crm"
    },
    {
      id: "data-ecommerce",
      title: "E-Commerce & Data Synchronization",
      badge: "Seamless Operations",
      accent: "from-cyan-500 to-emerald-500",
      icon: ShoppingCart,
      summary: "Real-time inventory synchronization, order dispatch routing, and ERP links that keep operations running smoothly without manual friction.",
      outcomes: [
        "Real-time inventory sync across multiple channels",
        "Automated fulfillment routing & tracking updates",
        "WooCommerce to Shopify catalog migration",
        "QuickBooks & Xero automated accounting reconciliation"
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
      manualState: "Inbound buyer inquiries sit unanswered for hours while agents host property tours.",
      automatedState: "AI Voice Agent calls back in 30 seconds, pre-qualifies budget, and books property tours directly on Google Calendar.",
      metrics: "88% faster response • 3.2x tour bookings"
    },
    {
      name: "Legal & Professional Services",
      icon: Briefcase,
      tagline: "Automated Client Intake & Retainers",
      manualState: "Paralegals manually collect client details, draft agreements, and copy files across folders.",
      automatedState: "Form submission triggers automated intake, generates customized agreement PDFs, and routes for e-signature.",
      metrics: "90% admin time saved • 100% data accuracy"
    },
    {
      name: "Healthcare & Clinics",
      icon: Activity,
      tagline: "Patient Recalls & Appointment Reminders",
      manualState: "Front desk staff spends 3 hours daily making phone calls for basic confirmations.",
      automatedState: "Automated SMS/Voice confirmation flows handle 95% of recalls and fill cancelled slots from a waitlist.",
      metrics: "75% drop in no-shows • 15+ staff hrs saved/wk"
    },
    {
      name: "E-Commerce & Retail",
      icon: ShoppingCart,
      tagline: "Omnichannel Sync & Order Processing",
      manualState: "Orders keyed manually into shipping software, creating stock discrepancies and delayed dispatches.",
      automatedState: "Instant API triggers sync warehouse inventory, print shipping labels, and notify customers automatically.",
      metrics: "Zero inventory overselling • 4x faster fulfillment"
    }
  ];

  const implementationSteps = [
    {
      phase: "01",
      title: "Process Audit & Mapping",
      desc: "We analyze your existing software tools and daily tasks to identify high-ROI automation bottlenecks.",
      days: "Days 1–3"
    },
    {
      phase: "02",
      title: "Architecture & Blueprint",
      desc: "We engineer custom JSON schemas, webhook triggers, AI prompt chains, and CRM pipelines before building.",
      days: "Days 4–7"
    },
    {
      phase: "03",
      title: "Staging Build & Stress Testing",
      desc: "We deploy the system in a secure staging environment, testing edge cases to ensure 100% data fidelity.",
      days: "Days 8–11"
    },
    {
      phase: "04",
      title: "Live Cutover & Video SOPs",
      desc: "Smooth go-live with zero downtime, real-time error logging, and comprehensive video training for your team.",
      days: "Days 12–14"
    }
  ];

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const data = new FormData();
    data.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    data.append("from_name", "Sheun Hub Automation Division");
    data.append("subject", `New Automation Audit Request: ${formData.fullName} (${formData.companyName})`);
    data.append("name", formData.fullName);
    data.append("email", formData.email);
    data.append("company", formData.companyName);
    data.append("phone", formData.phone);
    data.append("focus_area", formData.automationFocus);
    data.append("current_stack", formData.currentStack);
    data.append("message", formData.message);

    try {
      // 1. Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });
      const result = await response.json();

      if (result.success) {
        // 2. Submit to Mailchimp/CRM backend hub
        const nameParts = formData.fullName.trim().split(" ");
        fetch("/api/connect/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            firstName: nameParts[0] || "",
            lastName: nameParts.slice(1).join(" ") || ""
          })
        }).catch(err => console.error("CRM Sync Error:", err));

        // 3. Google Ads Conversion Tracking
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'conversion', {'send_to': 'AW-18133653660/tyjNCN6l37IcEJyx5sZD'});
        }

        setIsSuccess(true);
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again or book a call directly.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please book directly through our calendar or email hello@sheun.online.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AutomationPageWrapper
      title="B2B Systems & AI Automation Architecture | Sheun Hub"
      description="We design custom AI voice agents, GoHighLevel CRM architectures, and automated API pipelines that eliminate manual tasks and scale business operations."
    >
      {/* ================= SECTION 1: HERO & VALUE PROPOSITION ================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FFFFFF] dark:bg-navy overflow-hidden border-b border-[#E2E8F0] dark:border-white/10">
        
        {/* Subtle Ambient Background Lighting with Brand Palette */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#6D28D9]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF6B4A]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Department Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200/80 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold tracking-wide shadow-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span>Sheun Hub Automation Division • B2B AI Systems</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.12]">
                Autonomous Systems That Eliminate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-cyan-500 to-[#6D28D9]">
                  Operational Drag
                </span>
              </h1>

              {/* Punchy Condensed Subheadline */}
              <p className="text-base sm:text-lg text-[#334155] dark:text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We engineer custom API workflows, intelligent AI voice agents, and GoHighLevel CRM infrastructure that handle your repetitive tasks—accelerating response times, eliminating manual errors, and scaling operations without added payroll.
              </p>

              {/* Call to Actions with Calendly Integration */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={openCalendlyPopup}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-[#6D28D9] hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-cyan-100 group-hover:rotate-12 transition-transform" />
                  <span>Schedule 30-Min Strategy Call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#system-audit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-base text-[#0F172A] dark:text-white bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-[#CBD5E1] dark:border-white/10 transition-all"
                >
                  <span>Request Written Audit</span>
                </a>
              </div>

              {/* Strategic Metrics Proof Ribbon */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-[#E2E8F0] dark:border-white/10 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-white font-mono">&lt;60s</div>
                  <div className="text-xs text-slate-500 dark:text-white/50 mt-0.5 font-medium">Speed to Lead</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-600 font-mono">100%</div>
                  <div className="text-xs text-slate-500 dark:text-white/50 mt-0.5 font-medium">Data Fidelity</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#6D28D9] font-mono">14 Days</div>
                  <div className="text-xs text-slate-500 dark:text-white/50 mt-0.5 font-medium">Live Production</div>
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

      {/* ================= SECTION 2: MANUAL VS AUTONOMOUS ================= */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] dark:bg-navy/90 relative border-b border-[#E2E8F0] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-slate-600 dark:text-white/80 text-xs font-mono font-semibold shadow-xs">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              <span>The Operational Gap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Stop Losing Hours to Repetitive Manual Work
            </h2>
            <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
              When software tools run in disconnected silos, your team loses up to 30% of their workday copy-pasting data, chasing leads, and fixing human entry errors.
            </p>
          </div>

          {/* Comparison Split: Legacy Manual vs. Autonomous System */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Left: The Legacy Manual Workflow */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 space-y-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2 text-rose-600 text-sm font-bold font-mono">
                  <Clock className="w-4 h-4" />
                  <span>Manual Operations</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/40 font-mono font-bold">
                  High Overhead
                </span>
              </div>

              <ul className="space-y-4 text-sm text-slate-600 dark:text-white/70">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">✕</span>
                  <span>Inbound leads wait 2–6 hours for initial outreach while sales reps are busy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">✕</span>
                  <span>Manual typing across spreadsheets, CRMs, and email tools creates costly keying errors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">✕</span>
                  <span>Follow-up emails and reminders slip through the cracks when team members get overwhelmed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">✕</span>
                  <span>Scaling requires hiring more administrative staff, rapidly inflating payroll expenses.</span>
                </li>
              </ul>
            </div>

            {/* Right: The Autonomous Architecture */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-white/5 border-2 border-cyan-400/80 dark:border-cyan-500/50 space-y-6 relative shadow-xl overflow-hidden">
              {/* Top Gradient Rim */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cyan-500 via-cyan-400 to-[#6D28D9]" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 text-sm font-bold font-mono">
                  <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Sheun Hub Autonomous Architecture</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 font-mono font-bold">
                  100% Automated
                </span>
              </div>

              <ul className="space-y-4 text-sm text-[#0F172A] dark:text-white font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>AI Voice Agent initiates callbacks in under 60 seconds and books meetings instantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>API webhooks synchronize customer data across CRM, billing, and project tools in real time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Automated multi-channel SMS/Email nurture campaigns trigger based on real prospect actions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>Handles 10x lead and order volume with zero added headcount or payroll inflation.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 3: THE FOUR SYSTEM PILLARS ================= */}
      <section id="pillars" className="py-20 md:py-24 bg-[#FFFFFF] dark:bg-navy relative border-b border-[#E2E8F0] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Our Four Engineering Pillars
            </h2>
            <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
              Modular, enterprise-grade automation capabilities designed for rapid deployment and bulletproof reliability.
            </p>
          </div>

          {/* Interactive Pillars Navigation Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isActive = activePillar === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-white dark:bg-white/10 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-2 ring-cyan-400/20"
                      : "bg-slate-50 dark:bg-white/5 border-[#E2E8F0] dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-slate-300 text-slate-600 dark:text-white/70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <IconComp className={`w-5 h-5 ${isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-400 dark:text-white/40"}`} />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-white/70 font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className={`text-sm font-bold line-clamp-1 ${isActive ? "text-[#0F172A] dark:text-white" : "text-slate-700 dark:text-white/80"}`}>
                    {pillar.title}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-white/50 mt-1 line-clamp-1 font-mono">
                    {pillar.badge}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail Card */}
          {(() => {
            const currentPillar = pillars[activePillar];
            const IconComponent = currentPillar.icon;
            return (
              <div className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden">
                {/* Top rim accent */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cyan-500 via-[#6D28D9] to-[#FF6B4A]" />

                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-sm border border-cyan-200 dark:border-cyan-500/30">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-800 dark:text-cyan-300 font-bold px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30">
                        {currentPillar.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-1">{currentPillar.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
                    {currentPillar.summary}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono text-slate-500 dark:text-white/50 uppercase tracking-wider font-bold">Key Functional Outcomes</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentPillar.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-[#0F172A] dark:text-white">
                          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-500 dark:text-white/50 font-semibold">Tech Stack:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentPillar.techStack.map((tech, t) => (
                          <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white/80 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={currentPillar.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-[#6D28D9] text-white text-xs font-bold hover:opacity-95 transition-all shadow-sm shrink-0"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Architecture Blueprint Card */}
                <div className="lg:col-span-5 bg-slate-900 text-white p-7 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
                  <div className="text-xs font-mono text-slate-400 flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="font-bold text-slate-300">SYSTEM DATAFLOW SPEC</span>
                    <span className="text-emerald-400 font-bold">VERIFIED</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-slate-200">
                      <span>01. Inbound Webhook Trigger</span>
                      <span className="text-cyan-400 font-bold">JSON Payload</span>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-cyan-500/40 flex items-center justify-between text-white">
                      <span>02. {currentPillar.title.split(' ')[0]} Processing</span>
                      <span className="text-emerald-400 font-bold">Sub-600ms</span>
                    </div>
                    <div className="flex justify-center text-slate-500">↓</div>
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-slate-200">
                      <span>03. Database / CRM Pipeline Sync</span>
                      <span className="text-purple-300 font-bold">Instant Sync</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}

        </div>
      </section>

      {/* ================= SECTION 4: REAL-WORLD INDUSTRY BLUEPRINTS ================= */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] dark:bg-navy/90 relative border-b border-[#E2E8F0] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold shadow-xs">
              <Building2 className="w-3.5 h-3.5" />
              <span>Industry Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Tailored Blueprints for High-Growth Sectors
            </h2>
            <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
              See how our automation systems produce measurable ROI across high-volume industries.
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
                  className={`px-5 py-3 rounded-xl border text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    activeIndustry === i
                      ? "bg-white dark:bg-white/10 border-cyan-500 text-cyan-800 dark:text-cyan-300 shadow-md ring-2 ring-cyan-400/20"
                      : "bg-white/80 dark:bg-white/5 border-[#E2E8F0] dark:border-white/10 text-slate-600 dark:text-white/70 hover:text-[#0F172A] dark:hover:text-white hover:bg-white dark:hover:bg-white/10"
                  }`}
                >
                  <IconComp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{ind.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Industry Card */}
          {(() => {
            const ind = industries[activeIndustry];
            return (
              <div className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto space-y-6 shadow-xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/10">
                  <div>
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider">{ind.tagline}</span>
                    <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mt-1">{ind.name} Blueprint</h3>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold shrink-0">
                    {ind.metrics}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 space-y-2">
                    <div className="text-xs font-mono text-rose-700 dark:text-rose-400 font-bold uppercase">Manual Bottleneck</div>
                    <p className="text-sm text-slate-700 dark:text-white/70 leading-relaxed">{ind.manualState}</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-500/30 space-y-2">
                    <div className="text-xs font-mono text-cyan-800 dark:text-cyan-300 font-bold uppercase">Automated System</div>
                    <p className="text-sm text-[#0F172A] dark:text-white leading-relaxed font-medium">{ind.automatedState}</p>
                  </div>
                </div>

                <div className="text-right pt-2">
                  <Link
                    to="/automation/industries"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>View All Industry Architectures</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ================= SECTION 5: 14-DAY DELIVERY METHODOLOGY ================= */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] dark:bg-navy relative border-b border-[#E2E8F0] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold">
              <Workflow className="w-3.5 h-3.5" />
              <span>Disciplined Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Live Production in Exactly 14 Days
            </h2>
            <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
              Our engineering-first roadmap eliminates disruption and ensures your workflows launch flawlessly.
            </p>
          </div>

          {/* 4 Clean Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 p-7 rounded-2xl space-y-3 relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2">
                    Phase {step.phase}
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed">{step.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 text-[11px] font-mono text-slate-500 dark:text-white/50 font-semibold">
                  Timeline: {step.days}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: CLIENT CASE STUDIES ================= */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] dark:bg-navy/90 relative border-b border-[#E2E8F0] dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Measurable Client Outcomes
            </h2>
            <p className="text-slate-600 dark:text-white/70 text-base leading-relaxed">
              Real business metrics unlocked through custom AI automation systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {AUTOMATION_CASE_STUDIES.slice(0, 2).map((cs) => (
              <div 
                key={cs.id}
                className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 font-bold">
                      {cs.industry}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-white/50">{cs.clientName}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white mb-4">{cs.title}</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    {cs.results.map((r, i) => (
                      <div key={i} className="text-center">
                        <div className="text-base font-bold text-cyan-700 dark:text-cyan-400 font-mono">{r.metric}</div>
                        <div className="text-[10px] text-slate-600 dark:text-white/60 mt-0.5 line-clamp-2">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-white/70 italic leading-relaxed bg-slate-50/80 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                    &quot;{cs.testimonial.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#0F172A] dark:text-white">{cs.testimonial.author}</div>
                    <div className="text-[10px] text-slate-500 dark:text-white/50">{cs.testimonial.role}, {cs.testimonial.company}</div>
                  </div>
                  <Link
                    to="/automation/case-studies"
                    className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 flex items-center gap-1"
                  >
                    Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 7: CALL SCHEDULING & SYSTEM AUDIT FORM ================= */}
      <section id="system-audit" className="py-24 bg-[#FFFFFF] dark:bg-navy relative overflow-hidden">
        {/* Top Rim Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-[#6D28D9] to-[#FF6B4A]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Direct Engineering Audit</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Audit Your Software &amp; Workflow Stack
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 max-w-2xl mx-auto">
              Choose how you want to connect: book an instant 30-minute calendar strategy call, or submit your software stack for a tailored written architecture blueprint.
            </p>

            {/* Audit Mode Switcher Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 gap-2 mt-4">
              <button
                type="button"
                onClick={() => setAuditTab("book")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  auditTab === "book"
                    ? "bg-white dark:bg-white/15 text-cyan-800 dark:text-cyan-300 shadow-sm border border-slate-200 dark:border-white/10"
                    : "text-slate-600 dark:text-white/60 hover:text-[#0F172A] dark:hover:text-white"
                }`}
              >
                <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Instant Calendar Booking</span>
              </button>
              <button
                type="button"
                onClick={() => setAuditTab("form")}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  auditTab === "form"
                    ? "bg-white dark:bg-white/15 text-cyan-800 dark:text-cyan-300 shadow-sm border border-slate-200 dark:border-white/10"
                    : "text-slate-600 dark:text-white/60 hover:text-[#0F172A] dark:hover:text-white"
                }`}
              >
                <Send className="w-4 h-4 text-[#6D28D9] dark:text-purple-400" />
                <span>Request Written Audit Form</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Instant Calendar Booking Card */}
          {auditTab === "book" && (
            <div className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-8 relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-sm border border-cyan-200 dark:border-cyan-500/30">
                <Calendar className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-xl mx-auto">
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">Book Your 30-Minute AI Systems Call</h3>
                <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
                  Our live calendar is synced directly with our engineering team. Pick a time that fits your schedule for an immediate 1-on-1 technical review.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left py-2">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#0F172A] dark:text-white">1. Workflow Review</div>
                  <p className="text-[11px] text-slate-500 dark:text-white/60">We inspect your repetitive daily tasks & manual typing bottlenecks.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#0F172A] dark:text-white">2. Tech Architecture</div>
                  <p className="text-[11px] text-slate-500 dark:text-white/60">We recommend exact API hooks, AI models, and CRM configurations.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1">
                  <div className="text-xs font-bold text-[#0F172A] dark:text-white">3. Fixed Timeline & Cost</div>
                  <p className="text-[11px] text-slate-500 dark:text-white/60">We map out your 14-day production roadmap with clear ROI metrics.</p>
                </div>
              </div>

              <div>
                <button
                  onClick={openCalendlyPopup}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-[#6D28D9] hover:opacity-95 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Open Calendar &amp; Pick a Time</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-500 dark:text-white/50 font-mono">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Free 30-Min Call</span>
                <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Strict NDA Included</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#6D28D9] dark:text-purple-400" /> Zero Sales Fluff</span>
              </div>
            </div>
          )}

          {/* TAB 2: Web3Forms & CRM Integrated Lead Capture Form */}
          {auditTab === "form" && (
            <div className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {isSuccess ? (
                <div className="text-center py-10 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">Audit Request Received!</h3>
                  <p className="text-sm text-slate-600 dark:text-white/70 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Our lead automation architect is reviewing your software stack and will deliver your custom blueprint to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        companyName: "",
                        phone: "",
                        automationFocus: "AI Voice Agents & Calling",
                        currentStack: "",
                        message: ""
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white text-xs font-bold hover:bg-slate-200 dark:hover:bg-white/20"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-400 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-white/80 uppercase mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-cyan-500 focus:bg-white dark:focus:bg-white/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-white/80 uppercase mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@company.com"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-cyan-500 focus:bg-white dark:focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-white/80 uppercase mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Apex Logistics"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-cyan-500 focus:bg-white dark:focus:bg-white/10"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-white/80 uppercase mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-cyan-500 focus:bg-white dark:focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-white/80 uppercase mb-1.5">
                        Primary Automation Focus
                      </label>
                      <select
                        value={formData.automationFocus}
                        onChange={(e) => setFormData({ ...formData, automationFocus: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-cyan-500 focus:bg-white dark:focus:bg-white/10"
                      >
                        <option value="AI Voice Agents & Calling" className="dark:bg-navy dark:text-white">AI Voice Agents &amp; Inbound Calling</option>
                        <option value="API & Workflow Middleware" className="dark:bg-navy dark:text-white">API &amp; Middleware (n8n / Make / Python)</option>
                        <option value="GoHighLevel CRM Setup" className="dark:bg-navy dark:text-white">GoHighLevel CRM Architecture</option>
                        <option value="E-Commerce & Data Sync" className="dark:bg-navy dark:text-white">E-Commerce &amp; Data Sync (Shopify / ERP)</option>
                        <option value="Complete Systems Overhaul" className="dark:bg-navy dark:text-white">Complete Systems Overhaul</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-white/80 uppercase mb-1.5">
                        Current Software Stack
                      </label>
                      <input
                        type="text"
                        value={formData.currentStack}
                        onChange={(e) => setFormData({ ...formData, currentStack: e.target.value })}
                        placeholder="e.g. HubSpot, Shopify, Google Sheets, Slack"
                        className="w-full bg-slate-50 dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-cyan-500 focus:bg-white dark:focus:bg-white/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-white/80 uppercase mb-1.5">
                      What is your biggest manual bottleneck right now?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what repetitive task or disconnect takes up your team's time..."
                      className="w-full bg-slate-50 dark:bg-white/5 border border-[#CBD5E1] dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white focus:outline-none focus:border-cyan-500 focus:bg-white dark:focus:bg-white/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-[#6D28D9] text-white font-extrabold text-base hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting Audit Request..." : "Request Written Blueprint (Direct to Inbox)"}</span>
                  </button>

                  <p className="text-center text-[11px] text-slate-500 dark:text-white/50 font-mono">
                    Direct integration via Web3Forms &amp; CRM • 100% Confidential • Response within 24 hours
                  </p>
                </form>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ================= SECTION 8: FAQS ================= */}
      <section className="py-20 md:py-24 bg-[#F8FAFC] dark:bg-navy/90 relative border-b border-[#E2E8F0] dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-white/70 text-base">
              Clear answers regarding security, timelines, and software tool compatibility.
            </p>
          </div>

          <div className="space-y-4">
            {AUTOMATION_FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-2xl overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left font-bold text-base text-[#0F172A] dark:text-white flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-cyan-600 dark:text-cyan-400 transition-transform duration-200 shrink-0 ${openFaq === idx ? "rotate-90" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 dark:text-white/70 leading-relaxed border-t border-slate-100 dark:border-white/10 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </AutomationPageWrapper>
  );
}
