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
  col: string;
  height: string;
  label?: string;
  isRealProject?: boolean;
  services?: string[];
  url?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "b2",
    name: "LumiereSkin",
    tag: "💄 Beauty — Luxury Skincare",
    category: "💄 Beauty & Skincare",
    desc: "Designed with a clean visual hierarchy and user-focused layout, LumiereSkin presents its skincare collection through soft, elegant sections and immersive visuals. The website highlights key elements like product benefits, natural ingredients, and daily skincare essentials in a structured and easy-to-follow flow. Balanced spacing and minimal distractions create a calm browsing experience, making the interface feel modern, refined, and effortlessly soothing to explore. ✨🧴🌿",
    image: "https://cdn.dribbble.com/userupload/47314439/file/c6086620d425f60ad8dac40f74cfe1b4.png?resize=752x3909&vertical=center",
    col: "md:col-span-8",
    height: "h-[500px]",
    label: "🎨 Design Concept by Sheun Hub"
  },
  {
    id: "f2",
    name: "Summer Collection",
    tag: "👗 Fashion — Streetwear",
    category: "👗 Fashion",
    desc: "Hi There,\n\nThis is a Website concept for a Trendy Fashion E-commerce Website.\n\nHope you guys will like it.\n\nLet me know your thought's on that. Your feedback and appreciation is always welcome 🙂\n\nI'm available for new projects",
    image: "https://cdn.dribbble.com/userupload/37390836/file/original-13c3c213f022ab00791a6abaa9447322.png?resize=850x638&vertical=center",
    col: "md:col-span-12",
    height: "h-[500px]",
    label: "🎨 Design Concept by Sheun Hub"
  },
  {
    id: "f3",
    name: "Momento",
    tag: "👗 Fashion — Unisex Streetwear",
    category: "👗 Fashion",
    desc: "A bold, gender-neutral fashion concept designed for the modern era. Featuring high-contrast layouts, versatile product displays for both male and female collections, and a seamless shopping experience.",
    image: "https://cdn.dribbble.com/userupload/36920984/file/original-ff98dfbecece4eba4c0ef25160306302.png?resize=752x&vertical=center",
    col: "md:col-span-12",
    height: "h-[500px]",
    label: "🎨 Design Concept by Sheun Hub"
  },
  {
    id: "b3",
    name: "OFINO",
    tag: "💄 Beauty — Luxury Skincare",
    category: "💄 Beauty & Skincare",
    desc: "A clean and modern skincare website design concept focused on elegance and simplicity. The layout highlights product collections, beauty treatments, and customer-focused experiences with a minimal yet luxurious aesthetic. Designed to enhance user experience while keeping the brand’s natural and glowing identity at the core.",
    image: "https://cdn.dribbble.com/userupload/44540941/file/e348fef4b20fc2fa3b6d93da41e73932.jpg?resize=1024x768&vertical=center",
    col: "md:col-span-12",
    height: "h-[500px]",
    label: "🎨 Design Concept by Sheun Hub"
  },
  {
    id: "p3",
    name: "Pupp's",
    tag: "🐾 Pets — Premium Care",
    category: "🐾 Pets",
    desc: "Expert Pet Care with Love & Trust! Grooming, Health, Nutrition & More, Because Your Furry Friend Deserves the Best!",
    image: "https://cdn.dribbble.com/userupload/37449048/file/original-6a6b4e4e7ebfed9f6502c61669a61580.png?resize=1024x3374&vertical=center",
    col: "md:col-span-12",
    height: "h-[500px]",
    label: "🎨 Design Concept by Sheun Hub"
  },
  {
    id: "g1",
    name: "TechFlow",
    tag: "📱 Gadgets — High-Tech Store",
    category: "📱 Gadgets",
    desc: "A futuristic and highly optimized Shopify store design for tech brands. This concept focuses on massive clear visuals, dynamic specification badges, and a streamlined frictionless checkout process designed for high-conversion electronic sales. 🚀🔋💻",
    image: "https://ik.imagekit.io/pedgmrihq/image.png?updatedAt=1778026886292",
    col: "md:col-span-8",
    height: "h-[500px]",
    label: "🎨 Design Concept by Sheun Hub"
  },
  {
    id: "g2",
    name: "TechHub",
    tag: "📱 Gadgets — Premium Electronics",
    category: "📱 Gadgets",
    desc: "A sleek, high-conversion Shopify storefront designed for cutting-edge gadget brands. Featuring immersive hero sections, detailed tech specifications, and a performance-first mobile layout built to convert tech-savvy shoppers at scale. ⚡🔭📱",
    image: "https://ik.imagekit.io/pedgmrihq/image.png?updatedAt=1778028050705",
    col: "md:col-span-8",
    height: "h-[500px]",
    label: "🎨 Design Concept by Sheun Hub"
  },
  {
    id: "g3",
    name: "TechSpace",
    tag: "📱 Gadgets — Ultimate Tech Experience",
    category: "📱 Gadgets",
    desc: "A powerhouse Shopify theme concept designed for high-end electronics and gadget retailers. Emphasis on feature-rich product pages, integrated customer reviews, and a high-performance grid layout that showcases product innovation. Perfect for scaling brands looking for an elite digital presence. 🔋🎮⚡",
    image: "https://ik.imagekit.io/pedgmrihq/image.png?updatedAt=1778030704885",
    col: "md:col-span-8",
    height: "h-[500px]",
    label: "🎨 Design Concept by Sheun Hub"
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
      title="Shopify Portfolio | Custom Store Builds" 
      description="Explore our showcase of high-converting Shopify stores, dropshipping concepts, and eCommerce custom designs for fashion, beauty, pets, and gadgets."
      keywords="Shopify Portfolio, E-commerce Case Studies, Dropshipping Examples, Shopify Custom Designs, hire someone to build shopify store, build shopify store for me, shopify web designer, shopify developers, shopify website designer, shopify agency, shopify designers, shopify website design company, shopify developers for hire, shopify website experts, hire someone to set up shopify store, web designer for shopify, freelance shopify designer, shopify store expert, freelance shopify website designer, hire someone to build my shopify store, shopify web agency, best shopify website designers, shopify setup experts, shopify store setup experts, expert shopify designers, freelance shopify web designers, shopify web design experts"
      canonical="/portfolio"
      schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Shopify Portfolio - Sheun Hub",
        "description": "Explore our showcase of high-converting Shopify stores, dropshipping concepts, and eCommerce custom designs.",
        "url": "https://sheun.online/portfolio",
        "about": {
          "@type": "Thing",
          "name": "Shopify and E-Commerce Portfolio"
        }
      }}
    >
      {/* Top Section Label */}
      <div className="bg-green text-navy py-4 px-6 text-center text-[10px] font-bold uppercase tracking-[0.3em]">
        <p>Original store concepts designed by Sheun Hub — Browse the styles below and let's build your vision.</p>
      </div>

      {/* Portfolio Hero */}
      <ScrollReveal>
        <section className="pt-48 pb-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" 
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-16">
            <div className="space-y-8">
              <motion.h1 
                className="text-5xl md:text-[118px] font-bold text-white tracking-tighter leading-[0.8]"
              >
                <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="block">Shopify Portfolio</motion.span>
                <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="italic font-serif font-light text-white/40 block">Design Gallery</motion.span>
                <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="text-green block text-3xl md:text-5xl mt-8">by Sheun Hub</motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/60 text-2xl max-w-3xl font-serif italic"
              >
                Browse 8 original Shopify store concepts across fashion, beauty, pets & gadgets. See a style you love? Let's build it.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl w-fit"
            >
              <div className="flex items-center gap-4 text-white font-bold">
                <span className="text-2xl">🛍️</span>
                <span className="text-xs uppercase tracking-[0.2em]">8 Concepts</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-4 text-white font-bold">
                <span className="text-2xl">👗</span>
                <span className="text-xs uppercase tracking-[0.2em]">4 Niches</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-4 text-white font-bold">
                <span className="text-2xl">⭐</span>
                <span className="text-xs uppercase tracking-[0.2em]">5-Star Builder</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-4 text-white font-bold">
                <span className="text-2xl">🏅</span>
                <span className="text-xs uppercase tracking-[0.2em]">Shopify Partner</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Portfolio Gallery */}
    <ScrollReveal>
      <section className="py-24 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.image && p.image.trim() !== "").map((project, i) => (
              <div 
                key={`gallery-${i}`} 
                className="relative rounded-2xl overflow-hidden cursor-pointer group hover:shadow-2xl transition-all border border-navy/5"
                onClick={() => {
                  setFullScreenIndex(i);
                }}
              >
                <img 
                  src={project.image} 
                  alt="Sheun Hub Portfolio Design" 
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover object-top bg-light group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                  <span className="text-white font-bold text-sm bg-white/20 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                    View Full Screen
                  </span>
                </div>
              </div>
            ))}
          </div>



          <div className="mt-24 bg-navy-gradient rounded-3xl p-8 md:p-24 text-center space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(103,255,193,0.15)_0%,_transparent_70%)]" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                Ready to build <br />
                <span className="italic font-serif font-light text-white/50">your vision?</span>
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
                <Link to="/apply#apply-form" className="bg-green text-navy px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-colors w-full sm:w-auto shadow-xl">
                  Start a Project
                </Link>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="https://wa.me/2348084315743" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  </a>
                  <a href="mailto:sheunhost@gmail.com" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-6 h-6 object-contain" />
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
              Welcome to my portfolio, a curated gallery of high-performing e-commerce stores designed, developed, and optimized entirely by Sheun Hub. As a seasoned Shopify Partner, my focus isn’t just on making websites that look pretty—I build custom Shopify stores engineered specifically to convert traffic into loyal, paying customers.
            </p>
            <h3 className="text-2xl font-bold font-sans not-italic mt-12 mb-4 tracking-tight">Diverse E-commerce Case Studies</h3>
            <p className="mb-4">
              Every business has a unique target audience and functional requirement. Browse through my design concepts and real-world client builds across several highly competitive niches. Whether it’s a minimalist layout for a <strong>Luxury Beauty & Skincare</strong> brand, a bold and dynamic interface for an <strong>Apparel Fashion</strong> store, or a highly trustworthy and engaging design for <strong>Pet Care Supplies & Gadgets</strong>, these examples demonstrate versatility and technical mastery.
            </p>
            <p className="mb-4">
              By leveraging custom Liquid coding, I break free from the constraints of standardized templates to create highly immersive buying experiences tailored specifically to your audience. This bespoke approach is exactly what top-tier dropshipping stores and scaling local businesses use to establish brand authority and outpace their competitors online.
            </p>
            <h3 className="text-2xl font-bold font-sans not-italic mt-12 mb-4 tracking-tight">Optimized for E-commerce Growth</h3>
            <p className="mb-4">
              A visually stunning store is obsolete if it takes too long to load. Each of these custom Shopify store builds is backed by rigorous <strong>Speed Optimization</strong> and <strong>Technical SEO</strong>. Fast loading times mean a lower bounce rate and a higher ranking on Google. I implement clean site architecture, strategic internal linking, and optimized asset delivery so your storefront scales smoothly without breaking under high-traffic events, like Black Friday drops or viral social media marketing bursts.
            </p>
            <p className="mb-4">
              For dropshipping business owners, conversion is everything. That’s why these portfolio pieces feature strategically placed trust badges, seamless checkout workflows, upsell integrations, and compelling product spotlight sections. My UI/UX design philosophy is heavily influenced by deep <strong>Conversion Rate Optimization (CRO)</strong> principles. Every button, every color contrast, and every layout decision is made precisely to guide the customer closer to purchase. Review the portfolio, gather inspiration, and let’s discuss building your brand's vision.
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl w-full shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-light rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors z-20"
              >
                <X size={20} />
              </button>
              
              <div className="space-y-8 relative z-10">
                <div 
                  className="aspect-video rounded-2xl overflow-hidden relative cursor-zoom-in group/img"
                  onClick={() => {
                    const idx = projects.findIndex(p => p.id === selectedProject.id);
                    setFullScreenIndex(idx !== -1 ? idx : null);
                  }}
                >
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold text-sm border border-white/20">
                      Click to view full design
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full w-fit ${selectedProject.isRealProject ? 'bg-yellow-400 text-navy' : 'bg-navy text-white'}`}>
                      {selectedProject.tag}
                    </span>
                    <span className="text-navy/40 text-[10px] font-bold uppercase tracking-widest">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-navy">{selectedProject.name}</h3>
                  
                  {selectedProject.services && (
                    <p className="text-green font-bold uppercase tracking-widest text-xs">
                      {selectedProject.services.join(" · ")}
                    </p>
                  )}
                  
                  <p className="text-navy/70 leading-relaxed text-lg">
                    {selectedProject.desc}
                  </p>
                </div>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  {selectedProject.isRealProject ? (
                    <a
                      href={`https://${selectedProject.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center flex-grow gap-3 bg-yellow-400 text-navy px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
                    >
                      Visit Live Store <ExternalLink size={20} />
                    </a>
                  ) : (
                    <Link 
                      to={`/contact?concept=${encodeURIComponent(selectedProject.name)}#contact-form`} 
                      className="inline-flex items-center justify-center flex-grow gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green hover:text-navy transition-colors"
                    >
                      Get Custom Project Roadmap <ArrowRight size={20} />
                    </Link>
                  )}
                  
                  <button
                    onClick={() => {
                      const idx = projects.findIndex(p => p.id === selectedProject.id);
                      setFullScreenIndex(idx !== -1 ? idx : null);
                    }}
                    className="inline-flex items-center justify-center flex-grow gap-3 bg-light text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-navy hover:text-white transition-all"
                  >
                    View Full Design <Globe size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {fullScreenIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex flex-col"
          >
            {/* Close Button Only */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
              <button
                onClick={() => setFullScreenIndex(null)}
                className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green hover:text-navy transition-all shadow-2xl backdrop-blur-md"
              >
                <X size={32} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center px-4 md:px-10 z-40 pointer-events-none">
              <button
                onClick={handlePrev}
                className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green hover:text-navy transition-all shadow-2xl backdrop-blur-md pointer-events-auto group"
              >
                <ArrowRight size={40} className="rotate-180 group-active:scale-90 transition-transform" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-10 z-40 pointer-events-none">
              <button
                onClick={handleNext}
                className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green hover:text-navy transition-all shadow-2xl backdrop-blur-md pointer-events-auto group"
              >
                <ArrowRight size={40} className="group-active:scale-90 transition-transform" />
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-grow overflow-y-auto p-4 md:p-10 custom-scrollbar relative">
              <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl my-auto min-h-full flex flex-col">
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
