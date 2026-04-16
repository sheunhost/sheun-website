import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ShoppingBag, Globe, Trophy, ArrowRight, Info, X } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "👗 Fashion", "💄 Beauty & Skincare", "🐾 Pets", "📱 Gadgets"];

const projects = [
  {
    id: "rooibru",
    name: "Rooibru",
    url: "rooibru.com",
    tag: "✅ Real Client Project",
    category: "Real Project",
    desc: "Full Shopify store built from scratch — custom design, product setup, SEO, and full ownership transferred to client.",
    services: ["Store Build", "Theme Customization", "SEO"],
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
    featured: true,
    col: "md:col-span-12",
    height: "h-[600px]",
    isRealProject: true,
  },
  {
    id: "f1",
    name: "Aris",
    tag: "👗 Fashion — High-End Aris",
    category: "👗 Fashion",
    desc: "Sophisticated, high-end fashion concept featuring clean minimalist layouts, premium typography, and immersive lifestyle imagery. Designed for luxury brands seeking a polished, editorial presence.",
    image: "https://ik.imagekit.io/pedgmrihq/image.png?updatedAt=1776269079485",
    col: "md:col-span-8",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
  },
  {
    id: "f2",
    name: "Summer Collection",
    tag: "👗 Fashion — Streetwear",
    category: "👗 Fashion",
    desc: "Hi There,\n\nThis is a Website concept for a Trendy Fashion E-commerce Website.\n\nHope you guys will like it.\n\nLet me know your thought's on that. Your feedback and appreciation is always welcome 🙂\n\nI'm available for new projects",
    image: "https://cdn.dribbble.com/userupload/37390836/file/original-13c3c213f022ab00791a6abaa9447322.png?resize=850x638&vertical=center",
    col: "md:col-span-4",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
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
    label: "🎨 Design Concept by sheun_hub"
  },
  {
    id: "b1",
    name: "Lumé",
    tag: "💄 Beauty — Luxury Skincare",
    category: "💄 Beauty & Skincare",
    desc: "Premium clean beauty, clinical-meets-natural. White hero with floating product imagery and ingredient callouts. 'Skin Type Quiz' CTA prominently above the fold.",
    image: "https://picsum.photos/seed/lume/800/800",
    col: "md:col-span-4",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
  },
  {
    id: "b2",
    name: "LumiereSkin",
    tag: "💄 Beauty — Luxury Skincare",
    category: "💄 Beauty & Skincare",
    desc: "Designed with a clean visual hierarchy and user-focused layout, LumiereSkin presents its skincare collection through soft, elegant sections and immersive visuals. The website highlights key elements like product benefits, natural ingredients, and daily skincare essentials in a structured and easy-to-follow flow. Balanced spacing and minimal distractions create a calm browsing experience, making the interface feel modern, refined, and effortlessly soothing to explore. ✨🧴🌿",
    image: "https://cdn.dribbble.com/userupload/47314439/file/c6086620d425f60ad8dac40f74cfe1b4.png?resize=752x3909&vertical=center",
    col: "md:col-span-8",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
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
    label: "🎨 Design Concept by sheun_hub"
  },
  {
    id: "p1",
    name: "Pawlux",
    tag: "🐾 Pets — Premium Accessories",
    category: "🐾 Pets",
    desc: "Clean, modern, premium pet lifestyle. Hero with happy pet lifestyle photography + owner. 'Shop by Pet' tab navigation.",
    image: "https://picsum.photos/seed/pawlux/1200/800",
    col: "md:col-span-8",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
  },
  {
    id: "p2",
    name: "FurrFriend",
    tag: "🐾 Pets — Dropshipping Store",
    category: "🐾 Pets",
    desc: "Friendly, fun, approachable — wide product range. Colorful hero with playful illustration of dog and cat. Flash deals section with countdown timers.",
    image: "https://picsum.photos/seed/furrfriend/800/800",
    col: "md:col-span-4",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
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
    label: "🎨 Design Concept by sheun_hub"
  },
  {
    id: "g1",
    name: "TechVault",
    tag: "📱 Gadgets — General Tech",
    category: "📱 Gadgets",
    desc: "Dark, sleek, tech-forward. Dark hero with glowing product spotlight lighting effect. 'Deal of the Day' section with countdown timer.",
    image: "https://picsum.photos/seed/techvault/800/800",
    col: "md:col-span-4",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
  },
  {
    id: "g2",
    name: "CaseCraze",
    tag: "📱 Gadgets — Phone Accessories",
    category: "📱 Gadgets",
    desc: "Clean, fast, product-filter-heavy. Hero with phone mockup builder — 'Choose your phone model' filter.",
    image: "https://picsum.photos/seed/casecraze/1200/800",
    col: "md:col-span-8",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
  },
  {
    id: "g3",
    name: "WearIQ",
    tag: "📱 Gadgets — Smart Wearables",
    category: "📱 Gadgets",
    desc: "Premium, futuristic, health-tech inspired. Full-screen animated hero with smartwatch product highlight. Feature comparison grid.",
    image: "https://picsum.photos/seed/weariq/1200/800",
    col: "md:col-span-12",
    height: "h-[500px]",
    label: "🎨 Design Concept by sheun_hub"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const filteredProjects = projects.filter(p => 
    p.isRealProject || activeCategory === "All" || p.category === activeCategory
  );

  return (
    <PageWrapper 
      title="Portfolio" 
      description="Explore a showcase of high-converting Shopify stores and eCommerce design concepts across fashion, beauty, pets, and gadgets."
      canonical="/portfolio"
    >
      {/* Top Section Label */}
      <div className="bg-green text-navy py-4 px-6 text-center text-[10px] font-bold uppercase tracking-[0.3em]">
        <p>Original store concepts designed by sheun_hub — Browse the styles below and let's build your vision.</p>
      </div>

      {/* Portfolio Hero */}
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-[118px] font-bold text-white tracking-tighter leading-[0.8]"
              >
                Shopify Portfolio <br />
                <span className="italic font-serif font-light text-white/40">by Sheun Hub</span>.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/60 text-2xl max-w-3xl font-serif italic"
              >
                Browse 12 original Shopify store concepts across fashion, beauty, pets & gadgets. See a style you love? Let's build it.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-12 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] w-fit"
            >
              <div className="flex items-center gap-4 text-white font-bold">
                <span className="text-2xl">🛍️</span>
                <span className="text-xs uppercase tracking-[0.2em]">12 Concepts</span>
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

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b border-navy/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all relative ${
                  activeCategory === cat ? "text-navy" : "text-navy/40 hover:text-navy"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-4 right-4 h-1 bg-green rounded-t-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-32 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-12 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className={`${project.col} ${project.height} relative rounded-[60px] overflow-hidden group cursor-pointer shadow-2xl hover:shadow-green/20 transition-all duration-700 border border-navy/5`}
                >
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                      <Globe size={32} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Section */}
          <div className="mt-48 space-y-24">
            <div className="flex items-start gap-6 bg-light p-10 rounded-[40px] max-w-4xl mx-auto border border-navy/5">
              <Info className="text-navy/40 shrink-0 mt-1" size={32} />
              <p className="text-navy/60 text-lg leading-relaxed font-serif italic">
                <strong className="text-navy font-sans not-italic font-bold uppercase tracking-widest text-xs block mb-2">Disclaimer</strong>
                All store concepts above are original designs created by sheun_hub for demonstration purposes only. None are real brands. Your store will be uniquely designed to match your vision and niche.
              </p>
            </div>

            <div className="bg-navy-gradient rounded-[80px] p-20 md:p-32 text-center space-y-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
              <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                  See a style you love? <br />
                  <span className="italic font-serif font-light text-white/40">Let's bring it to life.</span>
                </h2>
                <p className="text-white/60 text-2xl font-serif italic max-w-2xl mx-auto">
                  Pick a concept direction, share your niche, and I'll build a custom Shopify store just for you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                  <Link to="/contact" className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 shadow-2xl green-glow flex items-center justify-center text-center">
                    Get A Quote
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white px-16 py-8 rounded-full font-bold text-2xl hover:bg-white/10 transition-all duration-500 border border-white/10 flex items-center justify-center text-center">
                    Free Store Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              className="bg-white rounded-[40px] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
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
                  onClick={() => setFullScreenImage(selectedProject.image)}
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
                      to={`/contact?concept=${encodeURIComponent(selectedProject.name)}`} 
                      className="inline-flex items-center justify-center flex-grow gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green hover:text-navy transition-colors"
                    >
                      Get A Quote <ArrowRight size={20} />
                    </Link>
                  )}
                  
                  <button
                    onClick={() => setFullScreenImage(selectedProject.image)}
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

      {/* Full Screen Lightbox */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 md:p-10 relative z-10">
              <div className="space-y-1">
                <h4 className="text-white font-bold text-2xl tracking-tight">Full Design View</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">Scroll to view entire page</p>
              </div>
              <button
                onClick={() => setFullScreenImage(null)}
                className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-green hover:text-navy transition-all"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 md:p-10 custom-scrollbar">
              <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={fullScreenImage} 
                  alt="Full Design" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block" 
                />
              </div>
            </div>
            
            <div className="p-10 text-center">
              <button
                onClick={() => setFullScreenImage(null)}
                className="bg-green text-navy px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl"
              >
                Close Full View
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
