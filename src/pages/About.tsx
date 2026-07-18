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
      title="About Sheun Hub | Certified Shopify Partner & Developer (UK, US, CA, AU, FR, DE)" 
      description="Meet Sheun Hub, a certified Shopify Partner, developer, and SEO expert. Helping merchants across the UK, US, Canada, Australia, France, and Germany build high-performance Shopify stores, migrations, and SEO sprints."
      keywords="shopify developer UK, freelance shopify developer, shopify developer Australia, shopify expert Canada, United States Shopify Expert, shopify expert France, shopify developer Germany, About Sheun Hub, Shopify Partner, custom liquid themes, WooCommerce to Shopify migration"
      canonical="/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Sheun Hub - Certified Shopify Partner & SEO Consultant",
        "description": "Learn more about Sheun Hub, a certified Shopify Partner and remote e-commerce developer helping brands in the UK, US, Canada, Australia, France, and Germany scale with speed, migrations, and SEO sprints.",
        "url": "https://sheun.online/about",
        "mainEntity": {
          "@type": "Person",
          "name": "Sheun Hub",
          "jobTitle": "Certified Shopify Partner",
          "knowsAbout": ["Shopify API", "Liquid Programming", "WooCommerce Migrations", "Shopify SEO Sprints", "Conversion Rate Optimization (CRO)", "UI/UX Design"],
          "url": "https://sheun.online/about"
        }
      }}
    >
      {/* About Hero - Premium High-Impact Grid */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FFFFFF] overflow-hidden border-b border-[#E2E8F0] dark:border-white/10">
          {/* Subtle Background Gradients & Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10b981]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F015_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
              
              {/* Left Column: Bio & Social Contacts */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] dark:bg-white/10 border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
                  <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-ping"></span>
                  The Specialist Behind Sheun Hub.online
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] dark:text-white tracking-tight leading-[1.08] font-sans">
                  Certified Shopify <span className="text-[#10b981] underline decoration-[#10b981]/20 underline-offset-8">Expert & Developer</span> Sheun Hub.
                </h1>

                <div className="space-y-6 text-[#475569] text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
                  <p>
                    I am Sheun Hub, a certified Shopify Partner and the technical architect behind sheun.online. With a <strong className="text-[#0F172A] dark:text-white">B.Sc. in Business Management</strong> and an absolute obsession for clean Liquid code, I bridge the gap between technical engineering and commercial strategy.
                  </p>
                  <p>
                    I operate as a solo specialist, which means you get direct, responsive access to the person actually writing your code. I don't hide behind project managers or outsource your work to juniors; I personally guarantee every line of code is optimized for revenue and lightning-fast speeds.
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-3 bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 px-5 py-3 rounded-2xl text-xs font-bold text-[#0F172A] dark:text-white uppercase tracking-wider shadow-sm">
                    <MapPin size={18} className="text-[#10b981]" /> Remote Specialist
                  </div>
                  <div className="flex items-center gap-3 bg-[#F8FAFC] dark:bg-white/5 border border-[#E2E8F0] dark:border-white/10 px-5 py-3 rounded-2xl text-xs font-bold text-[#0F172A] dark:text-white uppercase tracking-wider shadow-sm">
                    <Globe size={18} className="text-[#10b981]" /> Working Globally
                  </div>
                </div>

                {/* Social Profile Grid */}
                <div className="pt-6 border-t border-[#E2E8F0] dark:border-white/10 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#71717a] dark:text-white/70 block">Direct Connection Channels</span>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "LinkedIn", url: "https://www.linkedin.com/in/sheun-hub-26b876321", logo: "https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" },
                      { name: "Upwork", url: "https://www.upwork.com/freelancers/~017eb19011cd354946", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upwork-icon.png" },
                      { name: "WhatsApp", url: "https://wa.me/2348084315743", logo: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png" },
                      { name: "Gmail", url: "mailto:sheunhost@gmail.com", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" },
                      { name: "Fiverr", url: "https://www.fiverr.com/sheun_h", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zeK0uAVJfpeE1Zx1b3vDoihQGglG3BW2IjvgFTmksQ&s" }
                    ].map((item, idx) => (
                      <motion.a
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-navy border border-[#E2E8F0] dark:border-white/10 text-xs font-bold text-[#0F172A] dark:text-white hover:border-[#10b981] hover:shadow-md transition-all"
                        title={item.name}
                      >
                        <img src={item.logo} alt={item.name} width="20" height="20" decoding="async" className="w-5 h-5 object-contain" />
                        <span>{item.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Premium Frame Profile Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-sm lg:max-w-none">
                  {/* Decorative Glowing Rings */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#10b981]/30 to-[#2563EB]/10 rounded-[40px] blur-xl opacity-50 -z-10"></div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 aspect-[4/5] rounded-[36px] overflow-hidden border-[16px] border-white shadow-2xl bg-[#F8FAFC] dark:bg-white/5"
                  >
                    <img 
                      src="https://plain-enam-prod-public.komododecks.com/202605/19/vZvg4Ag3WuFmylr2Sh6R/image.jpg" 
                      alt="Sheun Hub - Certified Shopify Partner" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Floating Badge (Similar to Sprint Page parallax) */}
                  <motion.div 
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-8 -right-4 sm:-right-8 bg-white dark:bg-navy p-6 rounded-3xl shadow-2xl border border-[#E2E8F0] dark:border-white/10 z-20 flex flex-col items-center gap-2 max-w-[170px]"
                  >
                    <div className="w-12 h-12 bg-[#10b981]/10 rounded-2xl flex items-center justify-center text-[#10b981]">
                      <Award size={26} />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#71717a] dark:text-white/70">Official</p>
                      <p className="text-base font-extrabold text-[#0F172A] dark:text-white leading-tight">Shopify Partner</p>
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>

      {/* Hidden for SEO */}
      <div className="sr-only">
        <h2>Who I Work With</h2>
        <p>I provide high-end Shopify development for ambitious brands worldwide, with dedicated focus on primary markets: United Kingdom (Shopify Expert UK), United States (E-commerce Scaling), Canada (Shopify Expert Canada), and Australia (Shopify Developer Australia).</p>
      </div>

      {/* Global Credibility - Premium Modern Section */}
      <ScrollReveal>
        <section className="py-32 bg-[#F8FAFC] dark:bg-white/5 relative overflow-hidden border-b border-[#E2E8F0] dark:border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] dark:bg-white/10 border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white">
                  Enterprise Authority
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] dark:text-white tracking-tight">Global Credibility & Brand Experience</h2>
                <p className="text-lg text-[#475569] leading-relaxed">
                  I have successfully executed <strong className="text-[#0F172A] dark:text-white">dozens of high-impact Shopify projects</strong> for international clients. My specialized e-commerce development spans highly competitive retail verticals, ensuring I understand the exact conversion constraints, compliance guidelines, and buyer triggers of your specific industry.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Fashion & Apparel (Conversion-led UX)",
                    "Beauty & Skincare (Trust-driven design)",
                    "Pet Supplies (Subscription & bundling)",
                    "Gadgets & Tech (Spec-heavy optimization)"
                  ].map((niche, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-navy border border-[#E2E8F0] dark:border-white/10 rounded-2xl shadow-sm">
                      <div className="w-8 h-8 rounded-xl bg-[#10b981]/10 flex items-center justify-center text-[#10b981] shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-sm font-bold text-[#334155]">{niche}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid of niche representation images */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Apparel Stores", src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80" },
                    { title: "Beauty & Spa", src: "https://images.unsplash.com/photo-1596462502278-27bf87a931be?w=400&q=80" },
                    { title: "Pet Nutrition", src: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=400&q=80" },
                    { title: "Smart Devices", src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80" }
                  ].map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`relative aspect-square rounded-3xl overflow-hidden border border-[#E2E8F0] dark:border-white/10 shadow-md group ${idx % 2 === 1 ? 'mt-8' : ''}`}
                    >
                      <img src={img.src} alt={img.title} width="400" height="400" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent flex items-end p-5">
                        <span className="text-white text-xs font-bold tracking-wider uppercase">{img.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Timezone Friendly Message banner */}
      <section className="py-8 bg-white dark:bg-navy border-b border-[#E2E8F0] dark:border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <p className="text-xs sm:text-sm text-[#475569] font-medium tracking-wide flex items-center justify-center gap-2">
            <span>🌍</span>
            <span>Timezone-flexible real-time communications for merchants in the <strong>UK, US, Canada, Australia, France, and Germany</strong>. I work while you work.</span>
          </p>
        </div>
      </section>

      {/* Skills & Credentials - Premium Bento Grid */}
      <ScrollReveal>
        <section className="py-32 bg-[#0F172A] relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#10b981]/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Technical Skills Card */}
              <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[32px] p-8 sm:p-12 space-y-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green/10 rounded-full blur-[80px]"></div>
                
                <div className="space-y-2 relative z-10">
                  <span className="text-green text-xs font-bold uppercase tracking-wider">Expertise Blueprint</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Core Technical Stack</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                  {skills.map((skill, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#10b981]">
                            <skill.icon size={20} />
                          </div>
                          <span className="text-white font-bold text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs font-bold font-mono text-[#10b981]">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-white/5 border border-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-[#10b981] to-[#047857]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews rating bento card */}
              <div className="lg:col-span-4 bg-[#10b981] p-8 sm:p-12 rounded-[32px] space-y-6 flex flex-col justify-between text-[#0F172A] dark:text-white relative overflow-hidden shadow-xl border border-[#10b981]">
                {/* Dotted mesh decor */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.15)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

                <div className="space-y-4 relative z-10">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-[#0F172A] dark:text-white">
                    <Star size={28} className="fill-[#0F172A]" />
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight leading-tight">5.0 Star Rated<br />Specialist</h3>
                  <p className="text-[#0F172A] dark:text-white/80 font-medium text-sm leading-relaxed">
                    Consistent Top Rated performance on global remote networks with 100% job success and happy merchants.
                  </p>
                </div>

                <div className="relative z-10 flex -space-x-3 pt-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-11 h-11 rounded-full border-4 border-[#10b981] bg-white dark:bg-navy overflow-hidden shadow-sm">
                      <img 
                        src={`https://picsum.photos/seed/review${i}/100/100`} 
                        alt="Brand Reviewer" 
                        referrerPolicy="no-referrer"
                        loading="lazy" 
                        width="44"
                        height="44"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Cloud bento block */}
              <div className="lg:col-span-12 bg-white/5 border border-white/10 rounded-[28px] p-8 relative overflow-hidden">
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-white/5 rounded-full text-xs font-bold text-white/70 border border-white/10 hover:border-[#10b981] hover:text-[#10b981] hover:bg-white/5 transition-all cursor-default"
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

      {/* How I Work - Premium Modern Grid */}
      <ScrollReveal>
        <section className="py-32 bg-white dark:bg-navy relative overflow-hidden">
          {/* Decorative background grid and glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] dark:bg-white/10 border border-[#E2E8F0] dark:border-white/10 text-xs font-semibold uppercase tracking-wider text-[#0F172A] dark:text-white mb-2">
                Our Work Method
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-navy dark:text-white tracking-tight">How I <span className="text-[#10b981] italic font-serif font-light">Work</span>.</h2>
              <p className="text-[#71717a] dark:text-white/70 text-lg font-serif italic max-w-2xl mx-auto">
                No agency layers, no delays. I combine business strategy with high-end development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Direct Contact", desc: "You work directly with me. No project managers, no communication gaps, just pure momentum.", icon: MessageSquare },
                { title: "Surgical Precision", desc: "I focus on high-impact optimizations that move your store's revenue needle instantly.", icon: Zap },
                { title: "Business Strategy", desc: "My Business Management degree ensures every technical decision is tied to commercial outcomes.", icon: Layout },
                { title: "Global Specialist", desc: "I understand the local buyer behaviors of the UK, US, CA, AU, France, and German markets.", icon: Star },
              ].map((card, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -4 }}
                  className="p-8 sm:p-10 bg-white dark:bg-navy border border-[#E2E8F0] dark:border-white/10 rounded-3xl space-y-8 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-15px_rgba(9,9,11,0.06)] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 bg-[#10b981]/10 rounded-2xl flex items-center justify-center text-[#10b981]">
                      <card.icon size={26} className={card.icon === Star ? "fill-current" : ""} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white tracking-tight">{card.title}</h3>
                      <p className="text-[#71717a] dark:text-white/70 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0] dark:border-white/10 flex items-center gap-2 text-[10px] font-bold text-green uppercase tracking-widest">
                    <span>Phase 0{i+1}</span>
                    <div className="h-px bg-[#E2E8F0] flex-grow"></div>
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
                I am currently accepting new projects for ambitious merchants based in the UK, US, Canada, Australia, and worldwide. Let's build a store that crushes metrics.
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
