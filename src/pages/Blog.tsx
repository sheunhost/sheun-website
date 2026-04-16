import { motion } from "framer-motion";
import { Search, Clock, Calendar, ArrowRight, User, ShieldCheck } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState } from "react";

const categories = ["All", "Shopify Tips", "Dropshipping", "Store Migration", "SEO", "eCommerce Growth"];

const posts = [
  {
    id: 1,
    title: "10 Shopify Settings Most Store Owners Miss (And Why They Cost You Sales)",
    category: "Shopify Tips",
    excerpt: "Discover the hidden settings in your Shopify admin that can make or break your store's conversion rate.",
    date: "April 12, 2026",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/blog1/800/600",
    featured: true,
  },
  {
    id: 2,
    title: "How to Speed Up Your Shopify Store in 2025 — Step by Step",
    category: "Shopify Tips",
    excerpt: "A comprehensive guide to optimizing your store's performance for better user experience and SEO.",
    date: "April 10, 2026",
    readTime: "12 min read",
    image: "https://picsum.photos/seed/blog2/800/600",
  },
  {
    id: 3,
    title: "The Best Shopify Apps for Dropshipping Stores in 2025",
    category: "Dropshipping",
    excerpt: "My handpicked list of essential apps to automate your dropshipping business and increase AOV.",
    date: "April 8, 2026",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/blog3/800/600",
  },
  {
    id: 4,
    title: "How to Build a Profitable Fashion Dropshipping Store on Shopify",
    category: "Dropshipping",
    excerpt: "Learn the secrets to success in the highly competitive fashion niche, from sourcing to marketing.",
    date: "April 5, 2026",
    readTime: "15 min read",
    image: "https://picsum.photos/seed/blog4/800/600",
  },
  {
    id: 5,
    title: "How to Migrate from WooCommerce to Shopify Without Losing SEO",
    category: "Store Migration",
    excerpt: "A technical walkthrough of migrating your store while preserving your hard-earned Google rankings.",
    date: "April 2, 2026",
    readTime: "20 min read",
    image: "https://picsum.photos/seed/blog5/800/600",
  },
  {
    id: 6,
    title: "Shopify SEO in 2025: The Beginner's Complete Guide",
    category: "SEO",
    excerpt: "Master the basics of Shopify SEO and start driving consistent organic traffic to your storefront.",
    date: "March 30, 2026",
    readTime: "25 min read",
    image: "https://picsum.photos/seed/blog6/800/600",
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
    <PageWrapper>
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
              The sheun_hub Blog
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[118px] font-bold text-white tracking-tighter leading-[0.8]"
            >
              Shopify Blog <br />
              <span className="italic font-serif font-light text-white/40">by Sheun Hub</span>.
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

      {/* Featured Post */}
      {featuredPost && activeCategory === "All" && !searchQuery && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-light rounded-[80px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center group cursor-pointer shadow-2xl border border-navy/5"
            >
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]"
                  loading="lazy"
                />
              </div>
              <div className="p-16 md:p-24 space-y-10">
                <span className="bg-green text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-8 py-3 rounded-full shadow-lg">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tighter leading-[0.9] group-hover:text-green transition-colors duration-500 line-clamp-2">
                  {featuredPost.title}
                </h2>
                <p className="text-navy/60 text-xl leading-relaxed font-serif italic line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-10 border-t border-navy/5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl">
                      <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/bed47882db24771238091456bc69a699-1765207538189/19e070ae-9c29-498b-ac69-01114e131e68.png" alt="Sheun" loading="lazy" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-navy">Sheun</p>
                      <p className="text-sm text-navy/40 font-serif italic">{featuredPost.date} · {featuredPost.readTime}</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto bg-navy text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-4 group-hover:bg-green group-hover:text-navy transition-all duration-500 shadow-xl">
                    Read Article <ArrowRight size={20} />
                  </button>
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
                className="group cursor-pointer space-y-8"
              >
                <div className="aspect-[16/10] rounded-[48px] overflow-hidden relative shadow-2xl">
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
                
                <div className="space-y-6 px-4">
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
                    <button className="text-navy font-bold text-sm uppercase tracking-widest flex items-center gap-3 group/btn">
                      Read More <div className="w-8 h-px bg-navy/10 group-hover/btn:w-12 group-hover/btn:bg-green transition-all duration-500" />
                    </button>
                  </div>
                </div>
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
          <div className="bg-navy-gradient rounded-[80px] p-16 md:p-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative overflow-hidden shadow-2xl">
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
