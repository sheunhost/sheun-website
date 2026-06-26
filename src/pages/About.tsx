import { motion } from "framer-motion";
import { CheckCircle2, Award, GraduationCap, Star, MapPin, Globe, ArrowRight, Code2, Rocket, Zap, Layout, MessageSquare, Mail  } from "lucide-react";
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

const tags = ["Shopify", "Liquid", "Theme Customization", "Dropshipping", "SEO", "Migration", "Metafields", "Shopify Apps", "Speed Optimization", "Store Audit", "Startup Transfers", "eCommerce Strategy"];

export default function About() {
  const navigate = useNavigate();
  return (
    <PageWrapper 
      title="About Sheun | Certified Shopify Partner & Developer (UK, US, CA, AU, FR, DE)" 
      description="Meet Sheun, a certified Shopify Partner, developer, and SEO expert. Helping merchants across the UK, US, Canada, Australia, France, and Germany build high-performance Shopify stores, migrations, and SEO sprints."
      keywords="shopify developer UK, freelance shopify developer, shopify developer Australia, shopify expert Canada, United States Shopify Expert, shopify expert France, shopify developer Germany, About Sheun, Shopify Partner, custom liquid themes, WooCommerce to Shopify migration"
      canonical="/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Sheun - Certified Shopify Partner & SEO Consultant",
        "description": "Learn more about Sheun, a certified Shopify Partner and remote e-commerce developer helping brands in the UK, US, Canada, Australia, France, and Germany scale with speed, migrations, and SEO sprints.",
        "url": "https://sheun.online/about",
        "mainEntity": {
          "@type": "Person",
          "name": "Sheun",
          "jobTitle": "Certified Shopify Partner",
          "knowsAbout": ["Shopify API", "Liquid Programming", "WooCommerce Migrations", "Shopify SEO Sprints", "Conversion Rate Optimization (CRO)", "UI/UX Design"],
          "url": "https://sheun.online/about"
        }
      }}
    >
      {/* About Hero - Editorial Style */}
      <ScrollReveal>
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
                  The Specialist Behind Sheun.online
                </motion.p>
                <motion.h1 
                  className="text-6xl md:text-[101px] font-bold text-navy tracking-tighter leading-[0.8]"
                >
                  <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="block">Shopify Expert</motion.span>
                  <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="italic font-serif font-light text-navy/40 block">Sheun</motion.span>
                  <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-green block text-4xl mt-4">Freelance Developer</motion.span>
                </motion.h1>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-10 text-navy/60 text-2xl leading-relaxed max-w-2xl font-serif italic"
              >
                <p>
                  I am Sheun, a certified Shopify Partner and the technical architect behind Sheun.online. With a <strong>Business Management degree</strong> and a obsession for clean Liquid code, I bridge the gap between technical engineering and commercial strategy.
                </p>
                <p>
                  I operate as a solo specialist, which means you get 5-star, direct access to the person actually writing your code. I don't hide behind project managers; I personally ensure every pixel and every script is optimized for revenue.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-4 bg-light px-8 py-4 rounded-full border border-navy/5 shadow-sm text-sm font-bold text-navy uppercase tracking-widest">
                    <MapPin size={20} className="text-green" /> Remote Specialist
                  </div>
                  <div className="flex items-center gap-4 bg-light px-8 py-4 rounded-full border border-navy/5 shadow-sm text-sm font-bold text-navy uppercase tracking-widest">
                    <Globe size={20} className="text-green" /> Working Globally
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="flex gap-4 pt-8 border-t border-navy/5 mt-8 w-fit">
                  <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-green hover:text-navy rounded-full transition-all flex items-center justify-center overflow-hidden" title="LinkedIn">
                    <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                  </a>
                  <a href="https://www.upwork.com/freelancers/~017eb19011cd354946" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-green hover:text-navy rounded-full transition-all flex items-center justify-center overflow-hidden" title="Upwork">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upwork-icon.png" alt="Upwork" className="w-5 h-5 object-contain" />
                  </a>
                  <a href="https://wa.me/2348084315743" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-green hover:text-navy rounded-full transition-all flex items-center justify-center overflow-hidden" title="WhatsApp">
                    <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="mailto:sheunhost@gmail.com" className="p-3 bg-navy text-white hover:bg-green hover:text-navy rounded-full transition-all flex items-center justify-center overflow-hidden" title="Email">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="https://www.fiverr.com/sheun_h" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-green hover:text-navy rounded-full transition-all flex items-center justify-center overflow-hidden" title="Fiverr">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zeK0uAVJfpeE1Zx1b3vDoihQGglG3BW2IjvgFTmksQ&s" alt="Fiverr" className="w-6 h-6 object-contain" />
                  </a>
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
                className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden border-[24px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] bg-navy/5"
              >
                <img 
                  src="https://plain-enam-prod-public.komododecks.com/202605/19/vZvg4Ag3WuFmylr2Sh6R/image.jpg" 
                  alt="Sheun - Shopify Expert UK and Global Developer" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-12 bg-green text-navy p-12 rounded-3xl shadow-2xl z-20 space-y-3 border-8 border-white"
              >
                <Award size={64} className="mb-6" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Certified</p>
                <p className="text-3xl font-bold leading-none tracking-tighter">Shopify <br />Partner</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
      {/* Hidden for SEO */}
      <div className="sr-only">
        <h2>Who I Work With</h2>
        <p>I provide high-end Shopify development for ambitious brands across four primary markets: United Kingdom (Shopify Expert UK), United States (E-commerce Scaling), Canada (Shopify Expert Canada), and Australia (Shopify Developer Australia).</p>
      </div>

      {/* Global Credibility Section */}
      <ScrollReveal>
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-4xl font-bold text-navy mb-8">Global Credibility</h2>
                <p className="text-lg text-navy/60 mb-6 leading-relaxed">
                  I have successfully executed <strong>10+ high-impact Shopify projects</strong> for clients worldwide. My experience spans diverse niches, ensuring I understand the specific conversion requirements of your industry.
                </p>
                <ul className="space-y-4">
                  {[
                    "Fashion & Apparel (Conversion-led UX)",
                    "Beauty & Skincare (Trust-driven design)",
                    "Pet Supplies (Subscription & bundling)",
                    "Gadgets & Tech (Spec-heavy optimization)"
                  ].map((niche, i) => (
                    <li key={i} className="flex items-center gap-3 text-navy font-medium">
                      <CheckCircle2 size={20} className="text-green" />
                      {niche}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-3xl overflow-hidden bg-navy/5 border border-navy/10 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80" alt="Fashion Niche" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden bg-navy/5 border border-navy/10 shadow-sm mt-8">
                  <img src="https://images.unsplash.com/photo-1596462502278-27bf87a931be?w=400&q=80" alt="Beauty Niche" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden bg-navy/5 border border-navy/10 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=400&q=80" alt="Pet Niche" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden bg-navy/5 border border-navy/10 shadow-sm mt-8">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80" alt="Tech Niche" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Timezone Friendly Message */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm text-navy/40 font-medium tracking-wide">
            🌍 Timezone-friendly communication for clients in the <strong>UK, Canada, and Australia</strong>. I work while you work.
          </p>
        </div>
      </section>

      {/* Skills & Credentials - Bento Grid */}
      <ScrollReveal>
        <section className="py-32 bg-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Skills Card */}
            <div className="md:col-span-8 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-8 md:space-y-12">
              <div className="space-y-2">
                <p className="text-green text-[10px] font-bold uppercase tracking-[0.3em]">Technical</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Core Skills</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
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
            <div className="md:col-span-4 bg-green p-8 md:p-12 rounded-2xl space-y-6 md:space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <Star size={40} className="text-navy md:w-[48px] md:h-[48px]" />
                <h3 className="text-3xl md:text-4xl font-bold text-navy leading-tight tracking-tighter">5-Star <br />Specialist</h3>
                <p className="text-navy/60 font-medium text-sm md:text-base">Consistent Top Rated performance with 100% client satisfaction.</p>
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
            <div className="md:col-span-12 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="flex flex-wrap gap-3 md:gap-4">
                {tags.map((tag, i) => (
                   <span key={i} className="px-5 py-2.5 md:px-6 md:py-3 bg-white/5 rounded-full text-[10px] md:text-xs font-bold text-white/40 border border-white/10 hover:border-green hover:text-green transition-all cursor-default text-center">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* How I Work - Visible Grid */}
      <ScrollReveal>
        <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.3em]">Process</p>
            <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tight">How I <span className="italic font-serif font-light text-navy/40">Work</span>.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-navy/5">
            {[
              { title: "Direct Contact", desc: "You work directly with me. No project managers, no communication delays.", icon: MessageSquare },
              { title: "Surgical Precision", desc: "I focus on high-impact fixes that actually move your revenue needle.", icon: Zap },
              { title: "Business Strategy", desc: "My Business Management degree informs every technical decision I make.", icon: Layout },
              { title: "Global Specialist", desc: "I understand the specific requirements of UK, US, CA, and AU markets.", icon: Star },
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
    </ScrollReveal>

      {/* About CTA - Recipe 2 */}
      <ScrollReveal>
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
              Ready to <span className="text-green italic font-serif font-light lowercase">Apply?</span>
            </h2>
            <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic">
              I am currently accepting new projects for brands based in the UK, US, Canada, and Australia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <Link 
                to="/apply" 
                className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 shadow-2xl green-glow flex items-center justify-center text-center"
              >
                Apply to Work with Sheun
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto text-white font-bold text-2xl flex items-center justify-center gap-6 group text-center">
                View Recent Work <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-green transition-all duration-500" />
              </Link>
            </div>
            
            <div className="pt-12 flex items-center justify-center gap-4">
              <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden" title="LinkedIn">
                <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://www.upwork.com/freelancers/~017eb19011cd354946" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden" title="Upwork">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upwork-icon.png" alt="Upwork" className="w-6 h-6 object-contain" />
              </a>
              <a href="mailto:sheunhost@gmail.com" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden" title="Email">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
    </PageWrapper>
  );
}
