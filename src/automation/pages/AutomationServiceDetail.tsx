import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronDown, 
  PhoneCall, Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code,
  FileText, GitBranch, Network, Zap, Activity, UserCheck, Database, Target,
  Globe, Palette, Mic, Volume2, PhoneForwarded, CalendarCheck, FileSpreadsheet,
  BookOpen, Users, Package, DollarSign, FileCheck, Shield,
  ArrowLeftRight, History, Receipt, PieChart, Send, Award, Sliders, ShieldAlert,
  Terminal, Server, FileCode, Layers, AlertTriangle
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { AUTOMATION_SERVICES } from "../data/automationData";

const ICON_MAP: Record<string, any> = {
  Cpu, BarChart3, Bot, Phone, Workflow, RefreshCcw, Mail, Code,
  FileText, GitBranch, Network, Zap, ShieldCheck, Activity, Database,
  UserCheck, Target, Globe, Palette, Mic, Volume2, PhoneForwarded,
  CalendarCheck, FileSpreadsheet, BookOpen, Users, Package, DollarSign,
  FileCheck, Shield, Sparkles, ArrowLeftRight, History,
  Receipt, PieChart, Send, Award, Sliders, ShieldAlert, Terminal,
  Server, FileCode, Layers, AlertTriangle
};

export default function AutomationServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = AUTOMATION_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/automation/services" replace />;
  }

  const IconComp = ICON_MAP[service.iconName] || Cpu;

  // Custom schema for Service page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Sheun Automation",
      "url": "https://sheun.online/automation"
    },
    "description": service.shortDescription,
    "areaServed": "Worldwide",
    "serviceType": service.badge,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "name": service.title
    }
  };

  return (
    <AutomationPageWrapper
      title={`${service.title} | Sheun Automation`}
      description={service.shortDescription}
      canonical={`/automation/services/${service.slug}`}
      schema={serviceSchema}
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden border-b border-slate-800">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 max-w-4xl mx-auto text-center">
            
            {/* Breadcrumb / Back Link */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-2">
              <Link to="/automation" className="hover:text-cyan-400">Automation</Link>
              <span>/</span>
              <Link to="/automation/services" className="hover:text-cyan-400">Services</Link>
              <span>/</span>
              <span className="text-cyan-400">{service.title}</span>
            </div>

            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono">
              <IconComp className="w-4 h-4 text-cyan-400" />
              <span>{service.badge}</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              {service.heroHeadline}
            </h1>

            {/* Hero Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              {service.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/automation/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform active:scale-95"
              >
                <PhoneCall className="w-5 h-5 text-cyan-200" />
                <span>Book Strategy Call for {service.title}</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OVERVIEW & DETAILED CONTENT (800-1200 WORDS DEPTH) ================= */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Executive Overview Box */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Executive Overview
            </h2>
            <p className="text-slate-200 text-base leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Deep-Dive Content Sections */}
          {service.detailedContent.map((sec, idx) => (
            <div key={idx} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {sec.sectionTitle}
              </h2>
              {sec.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-slate-300 text-base leading-relaxed">
                  {para}
                </p>
              ))}

              {sec.keyTakeaways && sec.keyTakeaways.length > 0 && (
                <div className="mt-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Key Operational Outcomes
                  </div>
                  <ul className="space-y-2">
                    {sec.keyTakeaways.map((item, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-2 text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Key Benefits Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Quantifiable Business Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.benefits.map((b, bIdx) => (
                <div key={bIdx} className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
                  {b.metric && (
                    <div className="text-xs font-mono font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/80 inline-block">
                      {b.metric}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white">{b.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Features */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Technical Features &amp; Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feat, fIdx) => {
                const FeatureIcon = ICON_MAP[feat.icon] || Cpu;
                return (
                  <div key={fIdx} className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-cyan-400 flex items-center justify-center border border-blue-500/20 shrink-0">
                      <FeatureIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{feat.title}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ideal Clients & Use Cases */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ideal Clients &amp; Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.idealClients.map((client, cIdx) => (
                <div key={cIdx} className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl">
                  <div className="text-sm font-bold text-cyan-300 mb-1">{client.category}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{client.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Implementation Process
            </h2>
            <div className="space-y-4">
              {service.process.map((step) => (
                <div key={step.step} className="p-6 bg-slate-900/80 border border-slate-800 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-mono font-bold flex items-center justify-center shrink-0">
                    0{step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Supported Technologies &amp; API Integrations
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Service FAQs */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                    className="w-full px-6 py-4 text-left font-bold text-base text-white flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform ${openFaq === fIdx ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === fIdx && (
                    <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Implement {service.title}?
          </h2>
          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Book a free strategy session with our automation engineers to discuss your exact requirements and get a custom implementation quote.
          </p>
          <div>
            <Link
              to="/automation/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Schedule Strategy Call</span>
            </Link>
          </div>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
