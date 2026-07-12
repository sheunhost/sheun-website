import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ShoppingBag, Globe, Trophy, ArrowRight, X, Mail  } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";


const categories = ["All", "👗 Fashion", "💄 Beauty & Skincare", "🐾 Pets", "📱 Gadgets"];

type Project = {
  id: string;
  name: string;
  tag: string;
  category: string;
  desc: string;
  image: string;
  label?: string;
  isRealProject?: boolean;
  services?: string[];
  url?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "new_custom_3",
    name: "Custom Shopify Store",
    tag: "🏆 Featured Design",
    category: "👗 Fashion",
    desc: "A custom high-converting Shopify store design focused on modern aesthetics and streamlined user experience.",
    image: "https://plain-weur-prod-public.komododecks.com/202605/08/mORKcj6Dvv23Z1UjwufJ/image.png",
    label: "🎨 Past Project design by Sheun Hub"
  },
  {
    id: "new_custom_2",
    name: "Custom Shopify Store",
    tag: "🏆 Featured Design",
    category: "👗 Fashion",
    desc: "A custom high-converting Shopify store design focused on modern aesthetics and streamlined user experience.",
    image: "https://plain-weur-prod-public.komododecks.com/202605/08/chrM0xrj9IVak4lT2pwY/image.png",
    label: "🎨 Past Project design by Sheun Hub"
  },
  {
    id: "new_custom_1",
    name: "Custom Shopify Store",
    tag: "🏆 Featured Design",
    category: "👗 Fashion",
    desc: "A custom high-converting Shopify store design focused on modern aesthetics and streamlined user experience.",
    image: "https://plain-weur-prod-public.komododecks.com/202605/08/ZGtAaDfh0M9sZiKPK2CX/image.png",
    label: "🎨 Past Project design by Sheun Hub"
  },
  {
    id: "hairburst_1",
    name: "Hairburst USA",
    tag: "💄 Beauty — Hair Care",
    category: "💄 Beauty & Skincare",
    desc: "A custom high-converting Shopify store design focused on modern aesthetics and streamlined user experience for hair vitamins.",
    image: "https://i.ibb.co/yBKMgy3Q/Hair-Growth-Vitamins-Cosmetics-Hairburst-USA-05-08-2026-03-16-AM.png",
    label: "🎨 Past Project design by Sheun Hub"
  },
  {
    id: "b2",
    name: "LumiereSkin",
    tag: "💄 Beauty — Luxury Skincare",
    category: "💄 Beauty & Skincare",
    desc: "Designed with a clean visual hierarchy and user-focused layout, LumiereSkin presents its skincare collection through soft, elegant sections and immersive visuals. The website highlights key elements like product benefits, natural ingredients, and daily skincare essentials in a structured and easy-to-follow flow. Balanced spacing and minimal distractions create a calm browsing experience, making the interface feel modern, refined, and effortlessly soothing to explore. ✨🧴🌿",
    image: "https://cdn.dribbble.com/userupload/47314439/file/c6086620d425f60ad8dac40f74cfe1b4.png?resize=752x3909&vertical=center",
    label: "🎨 Past Project design by Sheun Hub"
  },
  {
    id: "f2",
    name: "Summer Collection",
    tag: "👗 Fashion — Streetwear",
    category: "👗 Fashion",
    desc: "Hi There,\n\nThis is a Website concept for a Trendy Fashion E-commerce Website.\n\nHope you guys will like it.\n\nLet me know your thoughts on that. Your feedback and appreciation is always welcome 🙂\n\nI'm available for new projects",
    image: "https://cdn.dribbble.com/userupload/37390836/file/original-13c3c213f022ab00791a6abaa9447322.png?resize=850x638&vertical=center",
    label: "🎨 Past Project design by Sheun Hub"
  },
  {
    id: "f3",
    name: "Momento",
    tag: "👗 Fashion — Unisex Streetwear",
    category: "👗 Fashion",
    desc: "A bold, gender-neutral fashion concept designed for the modern era. Featuring high-contrast layouts, versatile product displays for both male and female collections, and a seamless shopping experience.",
    image: "https://cdn.dribbble.com/userupload/36920984/file/original-ff98dfbecece4eba4c0ef25160306302.png?resize=752x&vertical=center",
    label: "🎨 Past Project design by Sheun Hub"
  },
  {
    id: "b3",
    name: "OFINO",
    tag: "💄 Beauty — Luxury Skincare",
    category: "💄 Beauty & Skincare",
    desc: "A clean and modern skincare website design concept focused on elegance and simplicity. The layout highlights product collections, beauty treatments, and customer-focused experiences with a minimal yet luxurious aesthetic. Designed to enhance user experience while keeping the brand’s natural and glowing identity at the core.",
    image: "https://cdn.dribbble.com/userupload/44540941/file/e348fef4b20fc2fa3b6d93da41e73932.jpg?resize=1024x768&vertical=center",
    label: "🎨 Past Project design by Sheun Hub"
  },
  {
    id: "p3",
    name: "Pupp's",
    tag: "🐾 Pets — Premium Care",
    category: "🐾 Pets",
    desc: "Expert Pet Care with Love & Trust! Grooming, Health, Nutrition & More, Because Your Furry Friend Deserves the Best!",
    image: "https://cdn.dribbble.com/userupload/37449048/file/original-6a6b4e4e7ebfed9f6502c61669a61580.png?resize=1024x3374&vertical=center",
    label: "🎨 Past Project design by Sheun Hub"
  }
];

export default function Portfolio() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);

  const filteredProjects = projects.filter(p => 
    p.isRealProject || activeCategory === "All" || p.category === activeCategory
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullScreenIndex !== null) {
      setFullScreenIndex((prev) => (prev !== null ? (prev - 1 + projects.length) % projects.length : null));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fullScreenIndex !== null) {
      setFullScreenIndex((prev) => (prev !== null ? (prev + 1) % projects.length : null));
    }
  };

  return (
    <PageWrapper 
      title="Shopify Developer Portfolio & Case Studies (UK, US, CA, AU, FR, DE)" 
      description="Explore premium custom Shopify builds, WooCommerce migrations, speed enhancements, and SEO case studies. Proven Shopify partner results for merchants in the UK, US, Canada, Australia, France, and Germany."
      keywords="Shopify Portfolio, E-commerce Case Studies, WooCommerce to Shopify migration portfolio, Shopify SEO case studies UK, Shopify Developer portfolio Canada, Shopify expert Australia, Shopify custom Liquid France, Shopify designer Germany, custom Liquid development examples"
      canonical="/portfolio"
      schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Shopify Portfolio - Sheun Hub",
        "description": "Explore my showcase of high-converting Shopify stores, dropshipping concepts, and eCommerce custom designs.",
        "url": "https://sheun.online/portfolio",
        "about": {
          "@type": "Thing",
          "name": "Shopify and E-Commerce Portfolio"
        }
      }}
    >
      {/* Portfolio Hero - Premium High-Impact Grid */}
      <ScrollReveal>
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FFFFFF] overflow-hidden border-b border-[#E2E8F0]">
          {/* Subtle Background Gradients & Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10b981]/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F015_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0F172A]">
                <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-ping"></span>
                Certified Shopify Partner & Proof of Work
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-[#0F172A] tracking-tight leading-[1.05] font-sans">
                Proven E-Commerce <span className="text-[#10b981] underline decoration-[#10b981]/20 underline-offset-8">Designs</span> & Builds.
              </h1>

              <p className="text-[#475569] text-lg sm:text-xl leading-relaxed max-w-2xl font-sans">
                Explore custom Shopify theme designs, WooCommerce migration layouts, custom page template solutions, and high-performance product displays crafted by Sheun Hub.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-3xl w-fit shadow-sm">
                <div className="flex items-center gap-3 text-[#0F172A] font-bold">
                  <span className="text-xl">🛍️</span>
                  <span className="text-xs uppercase tracking-wider">10+ Projects</span>
                </div>
                <div className="w-px h-8 bg-[#E2E8F0] hidden sm:block" />
                <div className="flex items-center gap-3 text-[#0F172A] font-bold">
                  <span className="text-xl">👗</span>
                  <span className="text-xs uppercase tracking-wider">4 Niches</span>
                </div>
                <div className="w-px h-8 bg-[#E2E8F0] hidden sm:block" />
                <div className="flex items-center gap-3 text-[#0F172A] font-bold">
                  <span className="text-xl">⭐</span>
                  <span className="text-xs uppercase tracking-wider">5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    {/* Portfolio Gallery */}
    <ScrollReveal>
      <section className="py-24 bg-[#F8FAFC] min-h-screen border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border shadow-sm ${
                  activeCategory === cat
                    ? "bg-[#10b981] text-[#0F172A] border-[#10b981]"
                    : "bg-white text-[#71717a] border-[#E2E8F0] hover:bg-[#F4F4F5] hover:text-[#0F172A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(p => p.image && p.image.trim() !== "").map((project, i) => (
              <div 
                key={`gallery-${i}`} 
                className="relative rounded-3xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all border border-[#E2E8F0] bg-white p-4"
                onClick={() => {
                  setFullScreenIndex(projects.findIndex(p => p.id === project.id));
                }}
              >
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4F4F5] border border-[#E2E8F0]">
                  <img 
                    src={project.image} 
                    alt="Sheun Hub Portfolio Design" 
                    referrerPolicy="no-referrer"
                    width="400"
                    height="500"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xs">
                    <span className="text-white font-bold text-xs bg-white/20 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                      View Full Screen
                    </span>
                  </div>
                </div>

                {/* Info block under card */}
                <div className="pt-5 pb-2 px-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#10b981]">
                      {project.tag}
                    </span>
                    <span className="text-xs font-bold text-[#71717a]">
                      {project.category.replace(/[^\w\s&]/g, "").trim()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#10b981] transition-colors">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 bg-[#09090b] text-white rounded-[40px] p-8 md:p-16 text-center space-y-10 relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(16,185,129,0.15)_0%,_transparent_70%)]" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
                Ready to build <br />
                <span className="text-[#10b981] underline decoration-[#10b981]/20 underline-offset-8 italic font-serif font-light">your vision?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
                <Link to="/apply#apply-form" className="w-full sm:w-auto bg-[#10b981] text-[#09090b] px-12 py-5 rounded-2xl font-bold text-lg hover:bg-[#059669] transition-all duration-300 shadow-lg">
                  Start a Project
                </Link>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-[#10b981] hover:text-[#09090b] text-white rounded-2xl transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVs_aW1hZ2VzL3dlYnNpdGVV_Y29udGVudC9sci92OTgyLWQxLTEwLnBuZw.png" alt="LinkedIn" width="20" height="20" decoding="async" className="w-5 h-5 object-contain" />
                  </a>
                  <a href="mailto:sheunhost@gmail.com" className="p-4 bg-white/5 hover:bg-[#10b981] hover:text-[#09090b] text-white rounded-2xl transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" width="20" height="20" decoding="async" className="w-5 h-5 object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Portfolio SEO Content */}
    <ScrollReveal>
      <section className="py-24 bg-light border-t border-navy/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-navy prose-a:text-green text-navy/70 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold font-sans not-italic mb-6 tracking-tight">Showcase of High-Converting Custom Shopify Stores</h2>
            <p className="mb-6 font-serif italic text-xl">
              Welcome to our portfolio, a curated gallery of high-performing e-commerce stores designed, developed, and optimized entirely by Sheun Hub. As a seasoned Shopify Partner, our focus isn’t just on making websites that look pretty—we build custom Shopify stores engineered specifically to convert traffic into loyal, paying customers.
            </p>
            <h3 className="text-2xl font-bold font-sans not-italic mt-12 mb-4 tracking-tight">Diverse E-commerce Case Studies</h3>
            <p className="mb-4">
              Every business has a unique target audience and functional requirement. Browse through our design concepts and real-world client builds across several highly competitive niches. Whether it’s a minimalist layout for a <strong>Luxury Beauty & Skincare</strong> brand, a bold and dynamic interface for an <strong>Apparel Fashion</strong> store, or a highly trustworthy and engaging design for <strong>Pet Care Supplies & Gadgets</strong>, these examples demonstrate versatility and technical mastery.
            </p>
            <p className="mb-4">
              By leveraging custom Liquid coding, we break free from the constraints of standardized templates to create highly immersive buying experiences tailored specifically to your audience. This bespoke approach is exactly what top-tier dropshipping stores and scaling local businesses use to establish brand authority and outpace their competitors online.
            </p>
            <h3 className="text-2xl font-bold font-sans not-italic mt-12 mb-4 tracking-tight">Optimized for E-commerce Growth</h3>
            <p className="mb-4">
              A visually stunning store is obsolete if it takes too long to load. Each of these custom Shopify store builds is backed by rigorous <strong>Speed Optimization</strong> and <strong>Technical SEO</strong>. Fast loading times mean a lower bounce rate and a higher ranking on GoogleWe implement clean site architecture, strategic internal linking, and optimized asset delivery so your storefront scales smoothly without breaking under high-traffic events, like Black Friday drops or viral social media marketing bursts.
            </p>
            <p className="mb-4">
              For dropshipping business owners, conversion is everything. That’s why these portfolio pieces feature strategically placed trust badges, seamless checkout workflows, upsell integrations, and compelling product spotlight sections. Our UI/UX design philosophy is heavily influenced by deep <strong>Conversion Rate Optimization (CRO)</strong> principles. Every button, every color contrast, and every layout decision is made precisely to guide the customer closer to purchase. Review the portfolio, gather inspiration, and let’s discuss building your brand's vision.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090b]/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[32px] p-6 md:p-10 max-w-2xl w-full border border-[#E2E8F0] shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-[#F4F4F5] hover:bg-[#E2E8F0] rounded-full flex items-center justify-center text-[#0F172A] transition-colors z-20"
              >
                <X size={18} />
              </button>
              
              <div className="space-y-6 relative z-10">
                <div 
                  className="aspect-video rounded-2xl overflow-hidden relative cursor-zoom-in group/img border border-[#E2E8F0]"
                  onClick={() => {
                    const idx = projects.findIndex(p => p.id === selectedProject.id);
                    setFullScreenIndex(idx !== -1 ? idx : null);
                  }}
                >
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/img:scale-103 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white font-bold text-xs border border-white/20">
                      Click to view full design
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit bg-[#10b981]/10 text-[#049669]">
                      {selectedProject.tag}
                    </span>
                    <span className="text-[#71717a] text-[10px] font-bold uppercase tracking-widest">
                      {selectedProject.category.replace(/[^\w\s&]/g, "").trim()}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#0F172A] tracking-tight">{selectedProject.name}</h3>
                  
                  {selectedProject.services && (
                    <p className="text-[#10b981] font-bold uppercase tracking-wider text-xs">
                      {selectedProject.services.join(" · ")}
                    </p>
                  )}
                  
                  <p className="text-[#475569] leading-relaxed text-base">
                    {selectedProject.desc}
                  </p>
                </div>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  {selectedProject.isRealProject ? (
                    <a
                      href={`https://${selectedProject.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center flex-grow gap-2 bg-[#10b981] text-[#09090b] px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#059669] transition-colors"
                    >
                      Visit Live Store <ExternalLink size={16} />
                    </a>
                  ) : (
                    <Link 
                      to={`/contact?concept=${encodeURIComponent(selectedProject.name)}#contact-form`} 
                      className="inline-flex items-center justify-center flex-grow gap-2 bg-[#09090b] text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#10b981] hover:text-[#09090b] transition-colors"
                    >
                      Get Custom Project Roadmap <ArrowRight size={16} />
                    </Link>
                  )}
                  
                  <button
                    onClick={() => {
                      const idx = projects.findIndex(p => p.id === selectedProject.id);
                      setFullScreenIndex(idx !== -1 ? idx : null);
                    }}
                    className="inline-flex items-center justify-center flex-grow gap-2 bg-[#F4F4F5] text-[#0F172A] px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#E2E8F0] transition-colors"
                  >
                    View Full Design <Globe size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {fullScreenIndex !== null && projects[fullScreenIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#09090b]/95 backdrop-blur-xl flex flex-col"
          >
            {/* Close Button Only */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
              <button
                onClick={() => setFullScreenIndex(null)}
                className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#10b981] hover:text-[#09090b] transition-all shadow-2xl backdrop-blur-md"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center px-4 md:px-10 z-40 pointer-events-none">
              <button
                onClick={handlePrev}
                className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#10b981] hover:text-[#09090b] transition-all shadow-2xl backdrop-blur-md pointer-events-auto group"
              >
                <ArrowRight size={24} className="rotate-180 group-active:scale-90 transition-transform" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-10 z-40 pointer-events-none">
              <button
                onClick={handleNext}
                className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#10b981] hover:text-[#09090b] transition-all shadow-2xl backdrop-blur-md pointer-events-auto group"
              >
                <ArrowRight size={24} className="group-active:scale-90 transition-transform" />
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-grow overflow-y-auto p-4 md:p-10 custom-scrollbar relative">
              <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl min-h-full flex flex-col">
                <img 
                  src={projects[fullScreenIndex].image} 
                  alt="Full Design" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block" 
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
