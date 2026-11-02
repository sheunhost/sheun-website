import { motion } from "framer-motion";
import { Search, Clock, Calendar, ArrowRight, User, ShieldCheck } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Shopify Tips", "Dropshipping", "Store Migration", "SEO", "eCommerce Growth"];

const posts = [
  {
    id: 1,
    title: "10 Shopify Settings Most Store Owners Miss (And Why They Cost You Sales)",
    category: "Shopify Tips",
    excerpt: "Hidden configuration errors in your Shopify admin can stifle your growth. In this technical audit, we reveal the high-impact settings from tax calculation triggers to checkout script optimization that are often overlooked by even seasoned merchants.",
    date: "April 12, 2026",
    readTime: "8 min read",
    image: "/blog/blog-1.webp",
    featured: true,
  },
  {
    id: 2,
    title: "How to Speed Up Your Shopify Store in 2026 (Step by Step)",
    category: "Shopify Tips",
    excerpt: "Mobile conversion rates are directly proportional to page load speeds. Our 2026 performance framework covers server-side Liquid logic, the transition to AVIF image formats, and advanced script management via GTM to achieve sub-1.5s load times.",
    date: "April 10, 2026",
    readTime: "12 min read",
    image: "/blog/blog-2.webp",
  },
  {
    id: 3,
    title: "The Best Shopify Apps for Dropshipping Stores in 2026",
    category: "Dropshipping",
    excerpt: "Efficiency is the only path to profit in a competitive ad market. We analyze the technical Core Four ecosystem: Zendrop for supply chain integrity, Loox for visual trust, ReConvert for post-purchase AOV expansion, and Klaviyo for lifecycle retention.",
    date: "April 8, 2026",
    readTime: "10 min read",
    image: "/blog/blog-3.webp",
  },
  {
    id: 4,
    title: "How to Build a Profitable Fashion Dropshipping Store on Shopify",
    category: "Dropshipping",
    excerpt: "Fashion requires a different architectural DNA. From multi-variant image handling to architecting an influencer-ready storefront, we break down the strategic blueprint for building a high-growth fashion brand that commands premium margins.",
    date: "April 5, 2026",
    readTime: "15 min read",
    image: "/blog/blog-4.webp",
  },
  {
    id: 5,
    title: "How to Migrate from WooCommerce to Shopify Without Losing SEO",
    category: "Store Migration",
    excerpt: "Migrating platforms shouldn't mean sacrificing your organic traffic. This technical manual details our zero-loss migration protocol, including URL regex matching, historical metadata structural synchronization, and critical SEO canonical management.",
    date: "April 2, 2026",
    readTime: "20 min read",
    image: "/blog/blog-5.webp",
  },
  {
    id: 6,
    title: "Shopify SEO in 2026: The Beginner's Complete Guide",
    category: "SEO",
    excerpt: "Break free from the paid ad cycle. This comprehensive primer introduces you to the world of technical and on-page SEO specifically for the Shopify platform, helping you build a compounding asset that drives organic sales on autopilot.",
    date: "March 30, 2026",
    readTime: "25 min read",
    image: "/blog/blog-6.webp",
  },
  {
    id: 7,
    title: "Leveraging Shopify Markets for International Sales",
    category: "eCommerce Growth",
    excerpt: "Unlock global revenue with Shopify Markets. A comprehensive guide on currency conversion, language localization, and international shipping strategies.",
    date: "May 1, 2026",
    readTime: "10 min read",
    image: "/blog/blog-7.webp",
  },
  {
    id: 8,
    title: "Shopify Store Not Converting? The 5 Common Killers (and the Fixes)",
    category: "eCommerce Growth",
    excerpt: "Is your Shopify store getting traffic but no sales? Discover the 5 most common conversion killers from weak hero copy to slow mobile performance and how to fix them today.",
    date: "May 15, 2026",
    readTime: "12 min read",
    image: "/blog/blog-8.webp",
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

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
    const email = emailInput?.value;
    if (!email) return;
    try {
      await fetch("/api/connect/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      alert("Successfully subscribed to Shopify Tips!");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Subscription error. Please try again.");
    }
  };

  return (
    <PageWrapper 
      title="Shopify Development, Migration & SEO Blog | Sheun Hub"
      description="Step-by-step guides, e-commerce migration checklists, speed optimization strategies, and professional Shopify SEO tips trusted by brands worldwide."
      keywords="Shopify Blog, Shopify SEO tutorial, WooCommerce to Shopify migration checklist, Shopify Speed Optimization guide"
      canonical="/blog"
      schema={{
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Shopify eCommerce Blog by Sheun Hub",
        "description": "Read the Sheun Hub blog for the latest strategies on Shopify SEO, store migrations, custom liquid developments, and dropshipping.",
        "url": "https://sheun.online/blog"
      }}
    >
      {/* Blog Hero */}
      <section className="page-hero-padding pb-16 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-green/5 -skew-x-12 translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-6 text-center space-y-12 relative z-10">
          <div className="space-y-6">
            <p className="text-green text-[10px] font-bold uppercase tracking-[0.5em]">
              The Sheun Hub Blog
            </p>
            <h1 className="page-h1 font-bold text-white tracking-tighter">
              <span className="block">Shopify Blog</span>
              <span className="italic font-serif font-light text-white/40 block">Expert Insights</span>
              <span className="text-green block text-2xl md:text-3xl mt-4">by Sheun Hub</span>
            </h1>
          </div>
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-serif italic">
            Shopify tips, <span className="whitespace-nowrap">E-Commerce</span> growth strategies, dropshipping guides, and store-building tutorials from a practitioner, not a theorist.
          </p>
          
          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-green transition-colors" size={24} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-6 pl-16 pr-8 text-white focus:border-green outline-none transition-all shadow-2xl placeholder:text-white/20"
            />
          </div>
        </div>
      </section>

      {/* 2 Sub-banners Section */}
      <section className="py-24 bg-navy relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 p-12 rounded-3xl space-y-8 flex flex-col justify-between">
              <h3 className="section-h3 font-bold text-white tracking-tight">Growth <br /><span className="text-green">Strategy.</span></h3>
              <p className="text-white/40 text-lg font-serif italic">In-depth guides on scaling brands from $0 to $10k+ using proven technical frameworks.</p>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-green" />)}
              </div>
            </div>
            <div className="bg-green text-navy p-12 rounded-3xl space-y-8 flex flex-col justify-between">
              <h3 className="section-h3 font-bold tracking-tight">Technical <br />Mastery.</h3>
              <p className="text-navy/60 text-lg font-serif italic">Advanced Shopify Liquid tutorials and app integration secrets for power users.</p>
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-navy/20" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - The Intel */}
      <section className="py-32 bg-white dark:bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <div className="space-y-6">
              <h2 className="section-h2 font-bold text-navy dark:text-white tracking-tight">
                Open Source <br />
                <span className="text-green italic font-serif font-light">Insights.</span>
              </h2>
              <div className="w-16 h-1 bg-green mx-auto" />
            </div>
            
            <div className="space-y-8 text-xl md:text-2xl text-navy/70 dark:text-white/70 font-serif italic leading-relaxed">
              <p>
                The Sheun Hub blog is built on the philosophy that a rising tide lifts all boats. In an industry often guarded by "proprietary secrets," I choose to document my technical findings, platform experiments, and growth strategies openly.
              </p>
              <p>
                Whether you are a fellow developer looking to master custom Liquid sections or a store owner trying to untangle Shopify's SEO complexities, these articles are designed to be actionable, technical, and grounded in real-world project data. Knowledge sharing isn't just a courtesy; it's how we collectively push the boundaries of what is possible on the Shopify platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="py-24 bg-white dark:bg-navy">
          <div className="container mx-auto px-6">
            <div className="bg-light dark:bg-white/5 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center group cursor-pointer shadow-2xl border border-navy/5 dark:border-white/10">
              <div className="aspect-[16/10] lg:aspect-[4/3] overflow-hidden relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width="800"
                  height="600"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>
              <div className="p-8 md:p-16 lg:p-20 space-y-8">
                <span className="bg-green text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2.5 rounded-full shadow-lg inline-block">
                  Featured Article
                </span>
                <h2 className="section-h2 font-bold text-navy dark:text-white tracking-tight group-hover:text-green transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-navy/60 dark:text-white/70 text-lg md:text-xl leading-relaxed font-serif italic">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-navy/5 dark:border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl shrink-0">
                      <img src="https://ui-avatars.com/api/?name=Sheun+Hub&background=10b981&color=fff" alt="Sheun Hub" loading="lazy" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-navy dark:text-white">Sheun Hub</p>
                      <p className="text-xs text-navy/40 dark:text-white/50 font-serif italic">{featuredPost.date} · {featuredPost.readTime}</p>
                    </div>
                  </div>
                  <Link to="/blog/1" className="w-full sm:w-auto bg-navy dark:bg-white/15 text-white px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 group-hover:bg-green group-hover:text-navy transition-all duration-300 shadow-xl min-h-[48px]">
                    Read Article <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Tabs */}
      <section className="py-12 bg-white dark:bg-navy sticky top-20 z-40 border-b border-navy/5 dark:border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all relative ${
                  activeCategory === cat ? "text-navy dark:text-white" : "text-muted dark:text-white/60 hover:text-navy dark:hover:text-white"
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
      <section className="py-32 bg-white dark:bg-navy min-h-screen">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredPosts.filter(p => !p.featured || activeCategory !== "All").map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer space-y-8 block bg-light dark:bg-white/5 rounded-3xl overflow-hidden border border-navy/5 dark:border-white/10 p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="aspect-[16/9] rounded-2xl overflow-hidden relative shadow-md">
                    <img
                      src={post.image}
                      alt={post.title}
                      width="400"
                      height="225"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 dark:bg-navy/90 backdrop-blur-xl text-navy dark:text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-6">
                    <h3 className="section-h3 font-bold text-navy dark:text-white group-hover:text-green transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-navy/60 dark:text-white/70 text-base leading-relaxed line-clamp-2 font-serif italic">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-navy/5 dark:border-white/10">
                      <div className="flex items-center gap-2 text-xs text-navy/50 dark:text-white/60 font-bold uppercase tracking-widest">
                        <Clock size={14} className="text-green" /> {post.readTime}
                      </div>
                      <span className="text-green font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        Read Story <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-32 space-y-8">
              <p className="text-4xl font-bold text-navy dark:text-white tracking-tighter">No articles found matching your search.</p>
              <button onClick={() => {setSearchQuery(""); setActiveCategory("All")}} className="text-green font-bold text-xl underline underline-offset-8">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-light dark:bg-navy">
        <div className="container mx-auto px-6">
          <div className="bg-navy-gradient rounded-3xl p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative overflow-hidden shadow-2xl min-w-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
            <div className="lg:col-span-7 space-y-8 relative z-10 min-w-0">
              <h2 className="section-h2 font-bold text-white tracking-tight">
                Get Shopify Tips <br />
                <span className="text-green italic font-serif font-light lowercase">in Your Inbox.</span>
              </h2>
              <p className="text-white/60 text-lg sm:text-xl font-serif italic max-w-xl">
                100% Privacy Guaranteed. I respect your inbox.
              </p>
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-full w-fit">
                <ShieldCheck size={16} className="text-green shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Verified Industry Expert</span>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6 relative z-10 min-w-0">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row lg:flex-col gap-4 min-w-0">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full min-w-0 bg-white/5 border border-white/10 rounded-full py-5 px-8 text-white outline-none focus:border-green transition-all text-base sm:text-lg placeholder:text-white/30"
                />
                <button type="submit" className="w-full sm:w-auto lg:w-full bg-green text-navy px-8 py-5 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all duration-500 shadow-xl green-glow flex items-center justify-center text-center shrink-0">
                  Subscribe
                </button>
              </form>
              <p className="text-white/50 text-xs sm:text-sm font-serif italic">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
