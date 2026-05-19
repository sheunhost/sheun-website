import { motion } from "framer-motion";
import { CheckCircle2, Award, GraduationCap, Star, MapPin, Globe, ArrowRight, Code2, Rocket, Zap, Layout, MessageSquare, Mail  } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";


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
  const navigate = useNavigate();
  return (
    <PageWrapper 
      title="About Sheun - The Shopify Engineer" 
      description="Learn more about Sheun, a dedicated Shopify Expert and eCommerce Developer committed to building high-performance online stores and driving sales."
      keywords="About Sheun, Shopify Expert Profile, UI/UX Designer, E-commerce Specialist, Shopify Engineer, Freelance Shopify Developer, dedicated shopify developers, ecommerce shopify expert, expert shopify designers, expert shopify plus, freelance shopify web designers, hire expert shopify developer, hire shopify freelancer, shopify growth experts, shopify it specialist, shopify plus consultant, shopify plus design experts, shopify seo expert freelance, shopify store design freelance, shopify freelance web designer"
      canonical="/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Sheun - The Shopify Engineer",
        "description": "Learn more about Sheun, a dedicated Shopify Expert and eCommerce Developer committed to building high-performance online stores and driving sales.",
        "url": "https://sheun.online/about",
        "mainEntity": {
          "@type": "Person",
          "name": "Sheun",
          "jobTitle": "Shopify Engineer & Designer",
          "knowsAbout": ["Shopify API", "Liquid", "Conversion Rate Optimization (CRO)", "UI/UX Design"],
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
                  Meet Sheun, the technical architect behind Sheun Hub and a dedicated Shopify Growth Expert. While many agencies rely on off-the-shelf templates, Sheun specializes in Custom Shopify Development to give emerging brands the technical advantage they need to scale.
                </p>
                <p>
                  Working with Sheun means partnering with a specialist focused strictly on tangible E-commerce Scaling. Beyond writing clean Liquid code, Sheun provides comprehensive Store Optimization—merging rapid site speed with strategic conversion rate improvements to turn casual browsers into loyal customers.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-4 bg-light px-8 py-4 rounded-full border border-navy/5 shadow-sm text-sm font-bold text-navy uppercase tracking-widest">
                    <MapPin size={20} className="text-green" /> Based in Nigeria
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
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.41,6.58A6.36,6.36,0,0,0,13.15,8.8c-1.39,1.79-2.18,4.28-2.61,6.1l-1.42-3.88H6.55V6.63H4.07v4.39a3.15,3.15,0,0,1-3.15,3.15v2.48a5.63,5.63,0,0,0,5.63-5.63V6.63h2.48v4.61l2,5.55L9.66,22h2.57l1.1-3.48h0a10.82,10.82,0,0,0,4.08,1.48v-2.3a8.68,8.68,0,0,1-3.16-1l1.1-2.92a6.47,6.47,0,0,0,2.06.35,3.87,3.87,0,0,0,4-3.89A3.88,3.88,0,0,0,17.41,6.58Zm0,5.77a1.86,1.86,0,1,1,1.86-1.86A1.86,1.86,0,0,1,17.41,12.35Z"/></svg>
                  </a>
                  <a href="https://wa.me/2348084315743" target="_blank" rel="noopener noreferrer" className="p-3 bg-navy text-white hover:bg-green hover:text-navy rounded-full transition-all flex items-center justify-center overflow-hidden" title="WhatsApp">
                    <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="mailto:sheunhost@gmail.com" className="p-3 bg-navy text-white hover:bg-green hover:text-navy rounded-full transition-all flex items-center justify-center overflow-hidden" title="Email">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-6 h-6 object-contain" />
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
                  alt="Sheun - Shopify Development and Growth Expert" 
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

      {/* 2 Sub-banners Section */}
      <ScrollReveal>
        <section className="py-24 bg-white relative overflow-hidden border-t border-navy/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-light p-12 rounded-3xl space-y-8 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold text-navy tracking-tight">Technical Mastery.</h3>
              <p className="text-navy/40 text-lg font-serif italic">Pushing the boundaries of what's possible with Shopify Liquid and specialized API integrations.</p>
              <div className="w-12 h-1 bg-green" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-navy text-white p-12 rounded-3xl space-y-8 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold tracking-tight">Strategic Scaling.</h3>
              <p className="text-white/40 text-lg font-serif italic">Every technical decision is rooted in a deep understanding of multi-region eCommerce growth.</p>
              <div className="w-12 h-1 bg-green" />
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>

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
                <h3 className="text-3xl md:text-4xl font-bold text-navy leading-tight tracking-tighter">Top Rated <br />Freelancer</h3>
                <p className="text-navy/60 font-medium text-sm md:text-base">Elite performance on Upwork with 100% client satisfaction.</p>
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
    </ScrollReveal>

      {/* Comprehensive E-commerce SEO Content */}
      <ScrollReveal>
        <section className="py-24 bg-light border-t border-navy/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-navy prose-a:text-green text-navy/70 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold font-sans not-italic mb-6 tracking-tight">Meet Sheun: Freelance Shopify Developer & E-commerce Growth Expert</h2>
              <p className="mb-6 font-serif italic text-xl">
                I am Sheun, a dedicated freelance Shopify developer operating out of Nigeria but proudly serving a diverse roster of clients globally. Unlike massive design agencies where you are passed between project managers, working with me means direct access to a dedicated e-commerce architect who is fully invested in your brand’s revenue growth.
              </p>
              <h3 className="text-2xl font-bold font-sans not-italic mt-12 mb-4 tracking-tight">Scalable E-commerce Solutions</h3>
              <p className="mb-4">
                Global e-commerce requires a nuanced understanding of digital buyer behavior. By bridging the gap between superior technical engineering and commercial design strategy, I develop highly scalable custom Shopify stores tailored for dropshipping businesses and global private-label brands. My hands-on experience means I understand exactly what consumers expect when clicking "Add to Cart" versus a local shopper interactively browsing your storefront.
              </p>
              <p className="mb-4">
                For local business owners wanting to transition from brick-and-mortar setups into the robust digital marketplace, I provide comprehensive E-commerce Platform Integration. You no longer need to be held back by complex local digital bottlenecks; my setup services streamline Shopify for your explicit geographic market while leaving the door wide open for future global expansion.
              </p>
              <h3 className="text-2xl font-bold font-sans not-italic mt-12 mb-4 tracking-tight">A Deep Dedication to Code Quality & Conversion</h3>
              <p className="mb-4">
                Having earned my B.Sc. in Business Management from Obafemi Awolowo University (OAU), my approach to web development is unique. I do not just write Liquid code or design UX layouts; I approach every technical decision from a strict business perspective: <strong>Will this increase the store's Conversion Rate?</strong>
              </p>
              <p className="mb-4">
                My status as a Top Rated Freelancer on Upwork and a Certified Shopify Partner is built on this foundation of uncompromising code quality. Clunky, poorly coded themes severely impact Shopify Speed Optimization, destroying both your user experience and your Google search rankings. By strictly implementing custom, lightweight Liquid markup, I guarantee ultra-fast page load speeds and technically sound Shopify SEO for my clients. Your website is more than an online brochure; it is the revenue engine of your business. Let’s collaborate to build an automated tool that actively scales your brand.
              </p>
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
              Let's <span className="text-green italic font-serif font-light lowercase">Build.</span>
            </h2>
            <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic">
              Ready to work with someone who genuinely cares about your store's success?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <button 
                onClick={() => navigate("/apply#apply-form")} 
                className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 shadow-2xl green-glow flex items-center justify-center text-center"
              >
                Get Started
              </button>
              <Link to="/portfolio" className="w-full sm:w-auto text-white font-bold text-2xl flex items-center justify-center gap-6 group text-center">
                View My Work <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-green transition-all duration-500" />
              </Link>
            </div>
            
            <div className="pt-12 flex items-center justify-center gap-4">
              <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
              <a href="https://www.upwork.com/freelancers/~017eb19011cd354946" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.41,6.58A6.36,6.36,0,0,0,13.15,8.8c-1.39,1.79-2.18,4.28-2.61,6.1l-1.42-3.88H6.55V6.63H4.07v4.39a3.15,3.15,0,0,1-3.15,3.15v2.48a5.63,5.63,0,0,0,5.63-5.63V6.63h2.48v4.61l2,5.55L9.66,22h2.57l1.1-3.48h0a10.82,10.82,0,0,0,4.08,1.48v-2.3a8.68,8.68,0,0,1-3.16-1l1.1-2.92a6.47,6.47,0,0,0,2.06.35,3.87,3.87,0,0,0,4-3.89A3.88,3.88,0,0,0,17.41,6.58Zm0,5.77a1.86,1.86,0,1,1,1.86-1.86A1.86,1.86,0,0,1,17.41,12.35Z"/></svg>
              </a>
              <a href="https://wa.me/2348084315743" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
              </a>
              <a href="mailto:sheunhost@gmail.com" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
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
