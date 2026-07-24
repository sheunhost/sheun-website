const fs = require('fs');

const content = `import { motion } from "framer-motion";
import { CheckCircle2, Award, GraduationCap, Star, MapPin, Globe, ArrowRight, Code2, Rocket, Zap, Layout, MessageSquare, Mail, Users, Target, Activity, Lightbulb, Eye, Handshake, TrendingUp, Linkedin, Twitter } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const skills = [
  { name: "Shopify Development", level: 95, icon: Code2 },
  { name: "Dropshipping", level: 92, icon: Zap },
  { name: "SEO Optimization", level: 85, icon: Rocket },
  { name: "UI/UX Design", level: 90, icon: Layout },
];

const tags = ["Shopify", "Liquid", "Theme Customization", "Dropshipping", "SEO", "Migration", "Metafields", "Shopify Apps", "Speed Optimization", "Store Audit", "Startup Transfers", "eCommerce Strategy"];

export default function About() {
  const navigate = useNavigate();

  return (
    <PageWrapper 
      title="About Us | Certified Shopify Partner & Automation Experts" 
      description="Meet the team at Sheun Hub & Sheun Automation. We are a boutique team of specialists helping brands worldwide scale with custom Shopify development and intelligent business workflows."
      keywords="shopify developer, boutique automation team, About Sheun Hub, Shopify Partner, custom liquid themes, WooCommerce to Shopify migration"
      canonical="/about"
    >
      {/* About Hero - Premium High-Impact Grid */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FFFFFF] overflow-hidden border-b border-[#E2E8F0] dark:bg-navy dark:border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-xs font-semibold uppercase tracking-wider text-[#10b981]">
                <Star size={14} className="fill-current" />
                <span>Boutique Engineering Team</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.1]">
                Scale Faster with <br />
                <span className="text-[#10b981] italic font-serif font-light">Specialists.</span>
              </h1>
              
              <p className="text-[#475569] dark:text-white/70 text-lg sm:text-xl font-serif italic max-w-xl leading-relaxed">
                We are a focused, tight-knit team of e-commerce and automation engineers dedicated to understanding your business inside and out. 
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A] dark:text-white bg-[#F4F4F5] dark:bg-white/5 py-2 px-4 rounded-full border border-[#E2E8F0] dark:border-white/10 shadow-sm">
                  <CheckCircle2 size={16} className="text-[#10b981]" />
                  <span>Certified Shopify Partners</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F172A] dark:text-white bg-[#F4F4F5] dark:bg-white/5 py-2 px-4 rounded-full border border-[#E2E8F0] dark:border-white/10 shadow-sm">
                  <Award size={16} className="text-[#10b981]" />
                  <span>Top Rated Agency</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden bg-[#F4F4F5] dark:bg-navy border border-[#E2E8F0] dark:border-white/10 shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Team" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                    <div className="w-12 h-12 bg-[#10b981] rounded-xl flex items-center justify-center text-[#09090b]">
                      <Globe size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Global Impact</h4>
                      <p className="text-white/70 text-sm">Working with ambitious brands worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <ScrollReveal>
        <section className="py-32 bg-slate-900 border-y border-white/5 dark:bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Meet the Team</h2>
              <p className="text-slate-400 text-lg font-serif italic">
                The specialists behind our enterprise-grade automation systems and Shopify storefronts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#10b981]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-slate-800 mb-6 overflow-hidden border-4 border-slate-700 group-hover:border-[#10b981]/50 transition-colors shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                      alt="Alex Mercer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Alex Mercer</h3>
                  <p className="text-[#10b981] text-sm font-bold uppercase tracking-wider mb-4">Founder & Automation Strategist</p>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-[250px]">
                    Leads business strategy, AI solutions, workflow architecture, and client consulting.
                  </p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#10b981] hover:text-navy transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#10b981] hover:text-navy transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#10b981]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-slate-800 mb-6 overflow-hidden border-4 border-slate-700 group-hover:border-[#10b981]/50 transition-colors shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" 
                      alt="Jordan Lee"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Jordan Lee</h3>
                  <p className="text-[#10b981] text-sm font-bold uppercase tracking-wider mb-4">Automation Engineer</p>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-[250px]">
                    Builds AI workflows, integrations, CRM automations, APIs, and backend systems.
                  </p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#10b981] hover:text-navy transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#10b981] hover:text-navy transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group relative overflow-hidden backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#10b981]/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-slate-800 mb-6 overflow-hidden border-4 border-slate-700 group-hover:border-[#10b981]/50 transition-colors shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" 
                      alt="Taylor Reed"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Taylor Reed</h3>
                  <p className="text-[#10b981] text-sm font-bold uppercase tracking-wider mb-4">Customer Success Specialist</p>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-[250px]">
                    Handles client onboarding, project coordination, testing, documentation, and ongoing support.
                  </p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#10b981] hover:text-navy transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#10b981] hover:text-navy transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* TEAM VALUES */}
      <ScrollReveal>
        <section className="py-32 bg-[#FFFFFF] dark:bg-navy relative overflow-hidden border-b border-[#E2E8F0] dark:border-white/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white tracking-tight">Our Values</h2>
              <p className="text-[#475569] dark:text-white/70 text-lg font-serif italic">
                The core principles that drive our engineering and partnerships.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Lightbulb, title: "Innovation", desc: "We constantly explore the edge of AI and automation to bring modern solutions." },
                { icon: CheckCircle2, title: "Reliability", desc: "Our systems are built deterministic and resilient. If we deploy it, it works." },
                { icon: Eye, title: "Transparency", desc: "Clear communication, documented processes, and zero black-box magic." },
                { icon: Cpu, title: "Automation-First", desc: "If a process can be optimized and handed to a system, it should be." },
                { icon: Handshake, title: "Long-Term Partnerships", desc: "We don't just hand off code; we align with your growth trajectory over years." },
                { icon: TrendingUp, title: "Continuous Improvement", desc: "We actively monitor, refactor, and enhance systems as new technology emerges." }
              ].map((value, i) => (
                <div key={i} className="p-10 rounded-[32px] bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-[#475569] dark:text-white/70 leading-relaxed font-medium">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* COMPANY CULTURE */}
      <ScrollReveal>
        <section className="py-32 bg-[#F8FAFC] dark:bg-navy relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="bg-white dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden text-center space-y-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white tracking-tight">Our Culture</h2>
                <p className="text-[#475569] dark:text-white/70 text-xl leading-relaxed max-w-3xl mx-auto font-serif italic">
                  We are a focused team of automation specialists who work closely with businesses to simplify operations, improve efficiency, and implement scalable AI-powered systems. We don't believe in massive agency layers—we believe in direct partnership, surgical execution, and delivering measurable ROI.
                </p>
              </div>
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
                We are currently accepting new projects for ambitious merchants worldwide. Let's build a system that crushes metrics.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link 
                  to="/apply" 
                  className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#10b981] text-[#09090b] font-bold text-lg hover:bg-[#059669] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Apply to Work with Us
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-lg transition-all flex items-center justify-center"
                >
                  View Recent Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  );
}
`;

fs.writeFileSync('/app/applet/src/pages/About.tsx', content);
