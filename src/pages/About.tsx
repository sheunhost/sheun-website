import { motion } from "framer-motion";
import { CheckCircle2, Award, GraduationCap, Star, MapPin, Globe, ArrowRight, Code2, Rocket, Zap, Layout, MessageSquare } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

const timeline = [
  { year: "2023", title: "Graduated, OAU", desc: "B.Sc. Business Management from Obafemi Awolowo University." },
  { year: "2023", title: "Certified Shopify Partner", desc: "Officially recognized as a Shopify Partner." },
  { year: "2024", title: "Launched Sheun Hub", desc: "Started on Upwork, received first 5-star review." },
  { year: "2024", title: "Top Rated Freelancer", desc: "Achieved Top Rated status on Upwork with consistent quality." },
  { year: "Present", title: "Global Impact", desc: "Building stores for clients worldwide, primarily in the USA." },
];

const skills = [
  { name: "Shopify Development", level: 95, icon: Code2 },
  { name: "Dropshipping", level: 92, icon: Zap },
  { name: "SEO Optimization", level: 85, icon: Rocket },
  { name: "UI/UX Design", level: 90, icon: Layout },
];

const tags = ["Shopify", "Liquid", "Theme Customization", "Dropshipping", "SEO", "Migration", "Metafields", "Shopify Apps", "Speed Optimization", "Store Audit", "Startup Transfers", "eCommerce Strategy"];

export default function About() {
  return (
    <PageWrapper 
      title="About" 
      description="Learn more about Sheun, a dedicated Shopify Expert and eCommerce Developer committed to building high-performance online stores."
      canonical="/about"
    >
      {/* About Hero - Editorial Style */}
      <section className="pt-48 pb-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-light -skew-x-12 translate-x-1/2" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <div className="space-y-8">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green text-xs font-bold uppercase tracking-[0.5em]"
                >
                  The Person Behind Sheun Hub
                </motion.p>
                <motion.h1 
                  className="text-6xl md:text-[101px] font-bold text-navy tracking-tighter leading-[0.8]"
                >
                  <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="block">Shopify Expert</motion.span>
                  <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="italic font-serif font-light text-navy/40 block">Sheun Hub</motion.span>
                  <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-green block text-4xl mt-4">Growth Partner</motion.span>
                </motion.h1>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-10 text-navy/60 text-2xl leading-relaxed max-w-2xl font-serif italic"
              >
                <p>
                  I'm Sheun — a certified Shopify Partner and Top Rated Upwork freelancer. I combine business strategy with technical Liquid expertise to build stores that don't just look great — they convert.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-4 bg-light px-8 py-4 rounded-full border border-navy/5 shadow-sm text-sm font-bold text-navy uppercase tracking-widest">
                    <MapPin size={20} className="text-green" /> Based in Nigeria
                  </div>
                  <div className="flex items-center gap-4 bg-light px-8 py-4 rounded-full border border-navy/5 shadow-sm text-sm font-bold text-navy uppercase tracking-widest">
                    <Globe size={20} className="text-green" /> Working Globally
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              {/* Vertical Rail Text */}
              <div className="absolute -left-20 top-0 bottom-0 flex items-center justify-center pointer-events-none hidden xl:flex">
                <span className="text-[10px] font-bold uppercase tracking-[1.2em] text-navy/10 -rotate-90 whitespace-nowrap">
                  ESTABLISHED 2023 — SHOPIFY EXPERT
                </span>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 aspect-[4/5] rounded-[80px] overflow-hidden border-[24px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]"
              >
                <img 
                  src="https://ik.imagekit.io/pedgmrihq/image.png?updatedAt=1776339493353" 
                  alt="Sheun" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-12 bg-green text-navy p-12 rounded-[60px] shadow-2xl z-20 space-y-3 border-8 border-white"
              >
                <Award size={64} className="mb-6" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Certified</p>
                <p className="text-3xl font-bold leading-none tracking-tighter">Shopify <br />Partner</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Sub-banners Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-navy/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-light p-12 rounded-[60px] space-y-8 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold text-navy tracking-tight">Technical Mastery.</h3>
              <p className="text-navy/40 text-lg font-serif italic">Pushing the boundaries of what's possible with Shopify Liquid and specialized API integrations.</p>
              <div className="w-12 h-1 bg-green" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-navy text-white p-12 rounded-[60px] space-y-8 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold tracking-tight">Strategic Scaling.</h3>
              <p className="text-white/40 text-lg font-serif italic">Every technical decision is rooted in a deep understanding of multi-region eCommerce growth.</p>
              <div className="w-12 h-1 bg-green" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section - The Standard */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                The Philosophy of <br />
                <span className="text-green italic font-serif font-light">Uncompromising Quality.</span>
              </h2>
              <div className="w-16 h-1 bg-green" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-xl md:text-2xl text-white/60 font-serif italic leading-relaxed"
            >
              <p>
                Founded on the belief that "good enough" is the enemy of enterprise-grade commerce, Sheun Hub was established to give emerging brands the technical advantage typically reserved for the Fortune 500. 
              </p>
              <p>
                My background in Business Management allows me to see past the syntax of code and into the logic of your P&L sheet. I view every client engagement as a deep partnership, where my success is inextricably linked to the performance of the systems I deploy. This isn't just about building a website; it's about engineering a sustainable competitive advantage in an increasingly crowded digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline - Visible Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="space-y-4">
              <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.3em]">The Journey</p>
              <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tight leading-none">
                Evolution of <br />
                <span className="italic font-serif font-light text-navy/40">Expertise</span>.
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t border-l border-navy/5">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="p-12 border-r border-b border-navy/5 group hover:bg-light transition-colors"
              >
                <span className="text-green font-bold text-xs mb-8 block tracking-widest">{item.year}</span>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-navy group-hover:text-green transition-colors line-clamp-1">{item.title}</h3>
                  <p className="text-navy/40 text-sm leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Credentials - Bento Grid */}
      <section className="py-32 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Skills Card */}
            <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-[40px] p-12 space-y-12">
              <div className="space-y-2">
                <p className="text-green text-[10px] font-bold uppercase tracking-[0.3em]">Technical</p>
                <h3 className="text-4xl font-bold text-white">Core Skills</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {skills.map((skill, i) => (
                  <div key={i} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-green">
                        <skill.icon size={20} />
                      </div>
                      <span className="text-white font-bold">{skill.name}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        className="h-full bg-green"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials Card */}
            <div className="md:col-span-4 bg-green p-12 rounded-[40px] space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <Star size={48} className="text-navy" />
                <h3 className="text-4xl font-bold text-navy leading-none">Top Rated <br />Freelancer</h3>
                <p className="text-navy/60 font-medium">Top-rated performance on Upwork with 100% client satisfaction.</p>
              </div>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-green bg-navy/10 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/review${i}/100/100`} 
                      alt="Reviewer" 
                      referrerPolicy="no-referrer"
                      loading="lazy" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Card */}
            <div className="md:col-span-12 bg-white/5 border border-white/10 rounded-[40px] p-12">
              <div className="flex flex-wrap gap-4">
                {tags.map((tag, i) => (
                  <span key={i} className="px-6 py-3 bg-white/5 rounded-full text-xs font-bold text-white/40 border border-white/10 hover:border-green hover:text-green transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work - Visible Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.3em]">Process</p>
            <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tight">How I <span className="italic font-serif font-light text-navy/40">Work</span>.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-navy/5">
            {[
              { title: "Client-First", desc: "Your success is my metric. I don't close a project until you're happy.", icon: MessageSquare },
              { title: "Fast Delivery", desc: "I respect deadlines and communicate every step of the way.", icon: Zap },
              { title: "Detail-Oriented", desc: "Every pixel, every setting, every SEO tag — nothing is overlooked.", icon: Layout },
              { title: "Long-Term Partner", desc: "I build relationships, not just stores. Most of my clients come back.", icon: Star },
            ].map((card, i) => (
              <div key={i} className="p-12 border-r border-b border-navy/5 space-y-8 group hover:bg-light transition-colors">
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy group-hover:bg-green transition-colors">
                  <card.icon size={24} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-navy line-clamp-1">{card.title}</h3>
                  <p className="text-navy/40 text-sm leading-relaxed line-clamp-2">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA - Recipe 2 */}
      <section className="py-48 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-green/5 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto space-y-16"
          >
            <h2 className="text-7xl md:text-[140px] font-bold text-white leading-[0.8] tracking-[-0.06em] uppercase">
              Let's <span className="text-green italic font-serif font-light lowercase">Build.</span>
            </h2>
            <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic">
              Ready to work with someone who genuinely cares about your store's success?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <Link to="/contact" className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 shadow-2xl green-glow flex items-center justify-center text-center">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto text-white font-bold text-2xl flex items-center justify-center gap-6 group text-center">
                View My Work <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-green transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
