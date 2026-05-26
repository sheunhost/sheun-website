import { motion } from "framer-motion";
import { Search, Clock, Calendar, ArrowRight, User, ShieldCheck  } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Shopify Tips", "Dropshipping", "Store Migration", "SEO", "eCommerce Growth"];

const posts = [
  {
    id: 1,
    title: "10 Shopify Settings Most Store Owners Miss (And Why They Cost You Sales)",
    category: "Shopify Tips",
    excerpt: "Hidden configuration errors in your Shopify admin can stifle your growth. In this technical audit, we reveal the high-impact settings—from tax calculation triggers to checkout script optimization—that are often overlooked by even seasoned merchants.",
    date: "April 12, 2026",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/blog1/800/600",
    featured: true,
  },
  {
    id: 2,
    title: "How to Speed Up Your Shopify Store in 2026 — Step by Step",
    category: "Shopify Tips",
    excerpt: "Mobile conversion rates are directly proportional to page load speeds. Our 2026 performance framework covers server-side Liquid logic, the transition to AVIF image formats, and advanced script management via GTM to achieve <1.5s load times.",
    date: "April 10, 2026",
    readTime: "12 min read",
    image: "https://picsum.photos/seed/blog2/800/600",
  },
  {
    id: 3,
    title: "The Best Shopify Apps for Dropshipping Stores in 2026",
    category: "Dropshipping",
    excerpt: "Efficiency is the only path to profit in a competitive ad market. We analyze the technical 'Core Four' ecosystem: Zendrop for supply chain integrity, Loox for visual trust, ReConvert for post-purchase AOV expansion, and Klaviyo for lifecycle retention.",
    date: "April 8, 2026",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/blog3/800/600",
  },
  {
    id: 4,
    title: "How to Build a Profitable Fashion Dropshipping Store on Shopify",
    category: "Dropshipping",
    excerpt: "Fashion requires a different architectural DNA. From multi-variant image handling to architecting an influencer-ready storefront, we break down the strategic blueprint for building a high-growth fashion brand that commands premium margins.",
    date: "April 5, 2026",
    readTime: "15 min read",
    image: "https://picsum.photos/seed/blog4/800/600",
  },
  {
    id: 5,
    title: "How to Migrate from WooCommerce to Shopify Without Losing SEO",
    category: "Store Migration",
    excerpt: "Migrating platforms shouldn't mean sacrificing your organic traffic. This technical manual details our zero-loss migration protocol, including URL regex matching, historical metadata structural synchronization, and critical SEO canonical management.",
    date: "April 2, 2026",
    readTime: "20 min read",
    image: "https://picsum.photos/seed/blog5/800/600",
  },
  {
    id: 6,
    title: "Shopify SEO in 2026: The Beginner's Complete Guide",
    category: "SEO",
    excerpt: "Break free from the 'paid ad' cycle. This comprehensive primer introduces you to the world of technical and on-page SEO specifically for the Shopify platform, helping you build a compounding asset that drives organic sales on autopilot.",
    date: "March 30, 2026",
    readTime: "25 min read",
    image: "https://picsum.photos/seed/blog6/800/600",
  },
  {
    id: 7,
    title: "Leveraging Shopify Markets for International Sales",
    category: "eCommerce Growth",
    excerpt: "Unlock global revenue with Shopify Markets. A comprehensive guide on currency conversion, language localization, and international shipping strategies.",
    date: "May 1, 2026",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/blog7/800/600",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(p => 
    (activeCategory === "All" || p.category === activeCategory) &&
    (p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const featuredPost = posts.find(p => p.featured);

  return (
    <PageWrapper 
      title="Shopify E-commerce Blog | Sheun Hub"
      description="Read our latest guides and strategies for growing your Shopify store. Learn about SEO, speed optimization, conversions, and more. Read the blog now!"
      keywords="Shopify Blog, Shopify Development Tutorials, Dropshipping Guides, Shopify SEO Tips, migrate from wordpress to shopify, migrate from wix to shopify, magento to shopify migration, woocommerce to shopify migration, bigcommerce to shopify migration, transfer volusion to shopify, shopify seo expert, shopify ecommerce consultant, shopify marketing experts, hire shopify seo expert"
      canonical="/blog"
      schema={{
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Shopify eCommerce Blog by Sheun",
        "description": "Read the Sheun Hub blog for the latest strategies on Shopify SEO, store migrations, custom liquid developments, and dropshipping.",
        "url": "https://sheun.online/blog"
      }}
    >
      {/* Blog Hero */}
      <section className="pt-48 pb-16 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-green/5 -skew-x-12 translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-6 text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green text-[10px] font-bold uppercase tracking-[0.5em]"
            >
              The Sheun Hub Blog
            </motion.p>
            <motion.h1 
              className="text-6xl md:text-[118px] font-bold text-white tracking-tighter leading-[0.8]"
            >
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="block">Shopify Blog</motion.span>
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="italic font-serif font-light text-white/40 block">Expert Insights</motion.span>
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="text-green block text-3xl md:text-5xl mt-8">by Sheun Hub</motion.span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-2xl max-w-3xl mx-auto font-serif italic"
          >
            Shopify tips, eCommerce growth strategies, dropshipping guides, and store-building tutorials — from a practitioner, not a theorist.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative group"
          >
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-green transition-colors" size={24} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-6 pl-16 pr-8 text-white focus:border-green outline-none transition-all shadow-2xl placeholder:text-white/20"
            />
          </motion.div>
        </div>
      </section>

      {/* 2 Sub-banners Section */}
      <section className="py-24 bg-navy relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 p-12 rounded-3xl space-y-8 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold text-white tracking-tight leading-none">Growth <br /><span className="text-green">Strategy.</span></h3>
              <p className="text-white/40 text-lg font-serif italic">In-depth guides on scaling brands from $0 to $10k+ using proven technical frameworks.</p>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-green" />)}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-green text-navy p-12 rounded-3xl space-y-8 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold tracking-tight leading-none">Technical <br />Mastery.</h3>
              <p className="text-navy/60 text-lg font-serif italic">Advanced Shopify Liquid tutorials and app integration secrets for power users.</p>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-navy/20" />)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section - The Intel */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-none">
                Open Source <br />
                <span className="text-green italic font-serif font-light">Insights.</span>
              </h2>
              <div className="w-16 h-1 bg-green mx-auto" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-xl md:text-2xl text-navy/70 font-serif italic leading-relaxed"
            >
              <p>
                The Sheun Hub blog is built on the philosophy that a rising tide lifts all boats. In an industry often guarded by "proprietary secrets," I choose to document my technical findings, platform experiments, and growth strategies openly.
              </p>
              <p>
                Whether you are a fellow developer looking to master custom Liquid sections or a store owner trying to untangle Shopify's SEO complexities, these articles are designed to be actionable, technical, and grounded in real-world project data. Knowledge sharing isn't just a courtesy—it's how we collectively push the boundaries of what is possible on the Shopify platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-light rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center group cursor-pointer shadow-2xl border border-navy/5"
            >
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-16 lg:p-24 space-y-8 md:space-y-10">
                <span className="bg-green text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-6 md:px-8 py-2 md:py-3 rounded-full shadow-lg">
                  Featured Article
                </span>
                <h2 className="text-2xl md:text-5xl font-bold text-navy tracking-tighter leading-[0.95] group-hover:text-green transition-colors duration-500 line-clamp-3 md:line-clamp-2">
                  {featuredPost.title}
                </h2>
                <p className="text-navy/60 text-lg md:text-xl leading-relaxed font-serif italic line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 md:pt-10 border-t border-navy/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-xl shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Sheun+Hub&background=10b981&color=fff" alt="Sheun" loading="lazy" />
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-bold text-navy">Sheun</p>
                      <p className="text-xs md:text-sm text-navy/40 font-serif italic">{featuredPost.date} · {featuredPost.readTime}</p>
                    </div>
                  </div>
                  <Link to="/blog/1" className="w-full sm:w-auto bg-navy text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-3 md:gap-4 group-hover:bg-green group-hover:text-navy transition-all duration-500 shadow-xl">
                    Read Article <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Tabs */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-navy/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative ${
                  activeCategory === cat ? "text-navy" : "text-muted hover:text-navy"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeBlogTab"
                    className="absolute inset-0 bg-green/20 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredPosts.filter(p => !p.featured || activeCategory !== "All").map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer space-y-8 block"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden relative shadow-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]"
                      loading="lazy"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-xl text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6 px-4 mt-8">
                    <h3 className="text-2xl font-bold text-navy group-hover:text-green transition-colors duration-500 leading-tight tracking-tight line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-navy/40 text-lg leading-relaxed line-clamp-2 font-serif italic">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-navy/5">
                      <div className="flex items-center gap-3 text-xs text-navy/40 font-bold uppercase tracking-widest">
                        <Clock size={16} className="text-green" /> {post.readTime}
                      </div>
                      <span className="bg-navy text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:bg-green group-hover:text-navy transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-105 transform">
                        Read Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-32 space-y-8">
              <p className="text-4xl font-bold text-navy tracking-tighter">No articles found matching your search.</p>
              <button onClick={() => {setSearchQuery(""); setActiveCategory("All")}} className="text-green font-bold text-xl underline underline-offset-8">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-light">
        <div className="container mx-auto px-6">
          <div className="bg-navy-gradient rounded-xl p-16 md:p-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
            <div className="space-y-10 relative z-10">
              <h2 className="text-6xl md:text-8xl font-bold text-white leading-[0.8] tracking-tighter">
                Get Shopify Tips <br />
                <span className="text-green italic font-serif font-light lowercase">in Your Inbox.</span>
              </h2>
              <p className="text-white/60 text-2xl font-serif italic max-w-xl">
                100% Privacy Guaranteed. I respect your inbox.
              </p>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full w-fit">
                <ShieldCheck size={16} className="text-green" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Verified Industry Expert</span>
              </div>
            </div>
            <div className="space-y-8 relative z-10">
              <div className="flex flex-col sm:flex-row gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-white/5 border border-white/10 rounded-full py-8 px-12 text-white outline-none focus:border-green transition-all text-xl placeholder:text-white/20"
                />
                <button className="bg-green text-navy px-16 py-8 rounded-full font-bold text-xl hover:scale-105 transition-all duration-500 shadow-2xl green-glow flex items-center justify-center text-center">
                  Subscribe
                </button>
              </div>
              <p className="text-white/20 text-sm text-center sm:text-left font-serif italic">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
