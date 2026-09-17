import { motion } from "framer-motion";
import { CheckCircle2, Award, GraduationCap, Star, MapPin, Globe, ArrowRight, Code2, Rocket, Zap, Layout, MessageSquare, Mail, Users, Cpu, Sparkles, Bot, ShieldCheck } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const timeline = [
  { year: "2023", title: "Graduated, OAU", desc: "B.Sc. Business Management from Obafemi Awolowo University." },
  { year: "2023", title: "Certified Shopify Partner", desc: "Officially recognized as a Shopify Partner." },
  { year: "2024", title: "Started Freelancing", desc: "Started on Upwork, received first 5-star review." },
  { year: "2024", title: "Top Rated Specialist", desc: "Achieved Top Rated status on Upwork with consistent quality." },
  { year: "Present", title: "Global Impact", desc: "Building stores for clients worldwide, primarily in the USA." },
];

const skills = [
  { name: "Shopify Development", level: 95, icon: Code2 },
  { name: "Dropshipping", level: 92, icon: Zap },
  { name: "SEO Optimization", level: 85, icon: Rocket },
  { name: "UI/UX Design", level: 90, icon: Layout },
];

const tags = [
  "Shopify", "Liquid", "Theme Customization", "Dropshipping", "SEO", "Migration", 
  "Metafields", "Shopify Apps", "Speed Optimization", "Store Audit", "Startup Transfers", "eCommerce Strategy"
];

export default function About() {
  const navigate = useNavigate();

  return (
    <PageWrapper 
      title="About Sheun Hub | Certified Shopify Partner & Developer" 
      description="Meet Sheun Hub, a certified Shopify Partner, developer, and SEO expert. Helping merchants worldwide build high-performance Shopify stores, migrations, and SEO sprints."
      keywords="shopify developer, freelance shopify developer, About Sheun Hub, Shopify Partner, custom liquid themes, WooCommerce to Shopify migration"
      canonical="/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Sheun Hub - Certified Shopify Partner & SEO Consultant",
        "description": "Learn more about Sheun Hub, a certified Shopify Partner and remote e-commerce developer helping brands worldwide scale with speed, migrations, and SEO sprints.",
        "url": "https://sheun.online/about",
        "mainEntity": {
          "@type": "Person",
          "name": "Emmanuel Adedayo (Sheun)",
          "jobTitle": "Founder & Certified Shopify Developer",
          "image": "https://www.sheun.online/about/sheun-founder.webp",
          "knowsAbout": ["Shopify API", "Liquid Programming", "WooCommerce Migrations", "Shopify SEO Sprints", "Conversion Rate Optimization (CRO)", "UI/UX Design"],
          "url": "https://sheun.online/about",
          "sameAs": [
            "https://github.com/sheunhost",
            "https://twitter.com/sheunhub",
            "https://www.linkedin.com/in/sheun-hub-26b876321"
          ]
        }
      }}
    >
      {/* About Hero - Premium High-Impact Grid */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FFFFFF] dark:bg-navy overflow-hidden border-b border-[#E2E8F0] dark:border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-xs font-semibold uppercase tracking-wider text-[#10b981]">
                <Star size={14} className="fill-current" />
                <span>Certified Shopify Partner & Developer</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.1]">
                Ecommerce Engineering & <br />
                <span className="text-[#10b981] italic font-serif font-light">Strategy.</span>
              </h1>
              
              <p className="text-[#475569] dark:text-white/70 text-lg sm:text-xl font-serif italic max-w-xl leading-relaxed">
                B.Sc. Business Management graduate from Obafemi Awolowo University (OAU), Certified Shopify Partner, Top-Rated specialist, and dedicated e-commerce technical developer.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] dark:text-white bg-[#F4F4F5] dark:bg-white/5 py-3 px-4 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm">
                  <GraduationCap size={18} className="text-[#10b981] shrink-0" />
                  <span>B.Sc. Business Mgmt, OAU</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] dark:text-white bg-[#F4F4F5] dark:bg-white/5 py-3 px-4 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm">
                  <CheckCircle2 size={18} className="text-[#10b981] shrink-0" />
                  <span>Certified Shopify Partner</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] dark:text-white bg-[#F4F4F5] dark:bg-white/5 py-3 px-4 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm">
                  <Award size={18} className="text-[#10b981] shrink-0" />
                  <span>Top Rated Specialist</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] dark:text-white bg-[#F4F4F5] dark:bg-white/5 py-3 px-4 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm">
                  <Globe size={18} className="text-[#10b981] shrink-0" />
                  <span>Global Client Base</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative flex justify-center"
            >
              <div className="w-full max-w-[500px] aspect-square rounded-[32px] overflow-hidden bg-[#F4F4F5] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 shadow-2xl relative group">
                <picture>
                  <source srcSet="/about/sheun-founder.webp" type="image/webp" />
                  <source srcSet="/about/sheun-founder.jpg" type="image/jpeg" />
                  <img 
                    src="/about/sheun-founder.webp" 
                    alt="Emmanuel Adedayo (Sheun), founder of Sheun Hub, working at his desk" 
                    width={900}
                    height={900}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" 
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                    <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center text-[#09090b] shrink-0 shadow-md">
                      <Globe size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg">Emmanuel Adedayo</h4>
                      <p className="text-white/80 text-xs sm:text-sm">Founder & Lead Developer at Sheun Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE OVERVIEW SECTION (~200 WORDS) */}
      <ScrollReveal>
        <section className="py-24 bg-[#F8FAFC] dark:bg-navy/90 relative overflow-hidden border-b border-[#E2E8F0] dark:border-white/10">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-xs font-semibold uppercase tracking-wider text-[#10b981]">
                <Sparkles size={14} />
                <span>Who We Are & What We Do</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
                Architecting Modern <span className="text-[#10b981] italic font-serif font-light">Commerce & Systems</span>.
              </h2>
            </div>

            {/* 200-Word Core Narrative Card */}
            <div className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-[32px] p-8 sm:p-12 shadow-xl relative overflow-hidden mb-12">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-12 space-y-6">
                  <div className="space-y-4 text-[#334155] dark:text-white/80 text-base sm:text-lg leading-relaxed font-sans">
                    <p>
                      I am Sheun Hub—a B.Sc. Business Management graduate from Obafemi Awolowo University (OAU), a Certified Shopify Partner, and a Top-Rated Specialist. My mission is to bridge high-level commercial strategy with hands-on software engineering. On the e-commerce development front, I simplify technical complexities for ambitious merchants worldwide. Whether crafting bespoke Liquid themes, executing lightning-fast WooCommerce-to-Shopify migrations, or conducting technical SEO sprints, I build store environments designed strictly for rapid loading speeds and frictionless conversion.
                    </p>
                    <p>
                      Beyond e-commerce engineering, I architect intelligent B2B automation systems that eliminate manual overhead. From custom n8n and Zapier API workflows to AI voice agents, smart chatbots, and full GoHighLevel CRM infrastructure, my solutions turn chaotic business processes into autonomous revenue engines. I don't work in isolation—I lead a curated collective of specialized UI/UX designers, backend developers, and CRM systems architects. Together, our team ensures every project receives dedicated expertise, enterprise-grade precision, and continuous post-launch support.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#E2E8F0] dark:border-white/10">
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#10b981] mb-1">Founder</div>
                      <div className="font-bold text-[#0F172A] dark:text-white text-sm">Sheun Hub</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#10b981] mb-1">E-Commerce</div>
                      <div className="font-bold text-[#0F172A] dark:text-white text-sm">Simplified Liquid & Migration</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-1">Automation</div>
                      <div className="font-bold text-[#0F172A] dark:text-white text-sm">AI Agents & CRM Workflows</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#10b981] mb-1">Our Team</div>
                      <div className="font-bold text-[#0F172A] dark:text-white text-sm">Engineers & Designers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DEDICATED AUTOMATION LINK PORTAL ELEMENT */}
      <ScrollReveal>
        <section className="py-16 bg-[#09090b] text-white relative overflow-hidden border-b border-[#10b981]/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="p-8 md:p-12 rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-400">
                  <Cpu size={14} />
                  <span>SPECIALIZED AUTOMATION DIVISION</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Looking for AI Voice Agents, Chatbots & GoHighLevel CRM?
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Visit our dedicated B2B systems portal to explore automated pipelines, customer support AI agents, and workflow integrations built to scale your business hands-free.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <Link
                  to="/automation"
                  className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-lg transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-3 group"
                >
                  <span>Launch Sheun Automation Portal</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* MY JOURNEY / TIMELINE */}
      <ScrollReveal>
        <section className="py-24 bg-[#FFFFFF] dark:bg-navy relative overflow-hidden border-b border-[#E2E8F0] dark:border-white/10">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#10b981]">The Journey</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
                Growth & Milestone <span className="text-[#10b981] italic font-serif font-light">Timeline</span>.
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:h-full before:w-0.5 before:bg-[#E2E8F0] dark:before:bg-white/10">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-navy border-2 border-[#10b981] text-[#10b981] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <Star size={14} className="fill-current" />
                  </div>
                  <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] bg-[#F8FAFC] dark:bg-white/5 p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm space-y-2">
                    <div className="flex items-center justify-between space-x-2">
                      <h3 className="font-bold text-[#0F172A] dark:text-white">{item.title}</h3>
                      <time className="font-serif italic text-xs font-bold text-[#10b981]">{item.year}</time>
                    </div>
                    <p className="text-xs text-[#475569] dark:text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SKILLS & TAGS BENTO GRID */}
      <ScrollReveal>
        <section className="py-24 bg-[#F8FAFC] dark:bg-navy/80 relative overflow-hidden border-b border-[#E2E8F0] dark:border-white/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#10b981]">Technical Expertise</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] dark:text-white tracking-tight">
                Skills & Core <span className="text-[#10b981] italic font-serif font-light">Stack</span>.
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Skills Progress */}
              <div className="lg:col-span-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                  <div key={i} className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-[#10b981]/10 rounded-xl flex items-center justify-center text-[#10b981]">
                        <skill.icon size={20} />
                      </div>
                      <span className="text-sm font-bold text-[#0F172A] dark:text-white">{skill.level}%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] dark:text-white text-sm mb-2">{skill.name}</h4>
                      <div className="w-full h-2 bg-[#E2E8F0] dark:bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#10b981] rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags Cloud bento block */}
              <div className="lg:col-span-12 bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-[28px] p-8 shadow-sm">
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-[#F4F4F5] dark:bg-white/5 rounded-full text-xs font-bold text-[#0F172A] dark:text-white/80 border border-[#E2E8F0] dark:border-white/10 hover:border-[#10b981] hover:text-[#10b981] transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HOW I WORK */}
      <ScrollReveal>
        <section className="py-24 bg-[#FFFFFF] dark:bg-navy relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] dark:bg-white/10 border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
                Our Work Method
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] dark:text-white tracking-tight">
                How I <span className="text-[#10b981] italic font-serif font-light">Work</span>.
              </h2>
              <p className="text-[#475569] dark:text-white/70 text-base sm:text-lg font-serif italic max-w-2xl mx-auto">
                No agency layers, no delays. I combine business strategy with high-end development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Direct Contact", desc: "You work directly with me. No project managers, no communication gaps, just pure momentum.", icon: MessageSquare },
                { title: "Surgical Precision", desc: "I focus on high-impact optimizations that move your store's revenue needle instantly.", icon: Zap },
                { title: "Business Strategy", desc: "My Business Management degree ensures every technical decision is tied to commercial outcomes.", icon: Layout },
                { title: "Global Specialist", desc: "I understand the local buyer behaviors and conversion trends of international markets.", icon: Star },
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -4 }}
                  className="p-8 bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 rounded-3xl space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#10b981]/10 rounded-2xl flex items-center justify-center text-[#10b981]">
                      <card.icon size={24} className={card.icon === Star ? "fill-current" : ""} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#0F172A] dark:text-white tracking-tight">{card.title}</h3>
                      <p className="text-[#475569] dark:text-white/70 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0] dark:border-white/10 flex items-center gap-2 text-[10px] font-bold text-[#10b981] uppercase tracking-widest">
                    <span>Phase 0{i+1}</span>
                    <div className="h-px bg-[#E2E8F0] dark:bg-white/10 flex-grow"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Premium CTA Section */}
      <ScrollReveal>
        <section className="py-32 bg-[#09090b] text-white relative overflow-hidden border-t border-[#10b981]/10">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.15)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          
          <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#10b981]">Let's Work Together</span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                Ready to build <br />
                <span className="text-[#10b981] underline decoration-[#10b981]/20 underline-offset-8 italic font-serif font-light">your vision?</span>
              </h2>
              <p className="text-[#a1a1aa] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                I am currently accepting new projects for ambitious merchants worldwide. Let's build a store that crushes metrics.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link 
                  to="/apply" 
                  className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#10b981] text-[#09090b] font-bold text-lg hover:bg-[#059669] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Apply to Work with Sheun Hub
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-lg transition-all flex items-center justify-center"
                >
                  View Recent Projects
                </Link>
              </div>

              <div className="pt-8 flex justify-center gap-4">
                {[
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/sheun-hub-26b876321", logo: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" },
                  { name: "Upwork", url: "https://www.upwork.com/freelancers/~017eb19011cd354946", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upwork-icon.png" },
                  { name: "Gmail", url: "mailto:sheunhost@gmail.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 bg-white/5 hover:bg-[#10b981] hover:text-[#09090b] text-white rounded-2xl border border-white/10 flex items-center justify-center transition-all overflow-hidden" 
                    title={item.name}
                  >
                    <img src={item.logo} alt={item.name} width="20" height="20" decoding="async" className="w-5 h-5 object-contain" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  );
}
