import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, MessageCircle, Database, RefreshCw, Link as LinkIcon, Search, ListChecks, ArrowDownToLine, Terminal, Smartphone, Send, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function WooCommerceToShopifyMigration() {
  const [comments, setComments] = useState<{name: string, text: string}[]>([
    { name: "David K.", text: "This checklist is a lifesaver. I was terrified of losing my rankings during the move." }
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("How to Migrate from WooCommerce to Shopify Without Losing SEO");

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${title} - ${url}`, "_blank");
  };

  const handleTwitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, "_blank");
  };

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
  };

  const handleLinkedinShare = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if(newComment.trim() && commentName.trim()) {
      setComments([...comments, { name: commentName, text: newComment }]);
      setNewComment("");
      setCommentName("");
    }
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent("Hi Sheun, I need professional help with my WooCommerce to Shopify migration SEO to preserve my rankings!");
    window.open(`https://wa.me/2348084315743?text=${text}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 bg-light relative min-h-screen">
      {/* Dynamic Progress Header */}
      <div className="fixed top-20 left-0 right-0 h-1 bg-navy/5 z-[60]">
        <motion.div 
          className="h-full bg-green origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <section className="container mx-auto px-6 pt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar - Sticky Info */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-40 space-y-12">
              <div className="space-y-6">
                <nav className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-navy/50 mb-4">
                  <Link to="/" className="hover:text-green transition-colors flex items-center gap-2"><ArrowLeft size={14} /> Home</Link>
                  <span className="opacity-30">/</span>
                  <Link to="/blog" className="hover:text-green transition-colors">Blog</Link>
                  <span className="opacity-30">/</span>
                  <span className="text-navy">Article</span>
                </nav>
                <div className="space-y-4">
                  <span className="bg-green/10 text-green px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Master Class</span>
                  <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tighter leading-tight">
                    WooCommerce to <br />
                    <span className="text-green italic">Shopify Migration SEO</span>.
                  </h1>
                </div>
                <div className="flex items-center gap-6 text-navy/40 text-xs font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2"><Calendar size={14} /> April 21, 2026</div>
                  <div className="flex items-center gap-2"><Clock size={14} /> 25 min read</div>
                </div>
              </div>

              <div className="bg-navy p-8 rounded-2xl shadow-2xl text-white space-y-6">
                <div className="flex items-center gap-3 text-green">
                  <ShieldCheck size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Authoritative Guide</span>
                </div>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  "If you migrate WooCommerce to Shopify without losing rankings, you must treat your URL structure as sacred. Every broken link is a lost dollar."
                </p>
                <Link to="/portfolio" className="flex items-center gap-4 pt-4 border-t border-white/10 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green/20 rounded-full blur-lg group-hover:bg-green/40 transition-colors" />
                    <img src="https://ik.imagekit.io/pedgmrihq/image.png" className="w-12 h-12 rounded-full border-2 border-green relative z-10" alt="Sheun" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold group-hover:text-green transition-colors">Sheun</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Migration Architect</p>
                  </div>
                </Link>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40">Spread the Knowledge</p>
                <div className="flex gap-4">
                  <button onClick={handleTwitterShare} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all shadow-sm border border-navy/5"><ArrowRight className="-rotate-45" size={20} /></button>
                  <button onClick={handleLinkedinShare} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all shadow-sm border border-navy/5"><Linkedin size={20} /></button>
                  <button onClick={handleWhatsAppShare} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy hover:bg-green hover:text-navy transition-all shadow-sm border border-navy/5"><MessageCircle size={20} /></button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-16 pb-32">
            <div className="prose prose-lg md:prose-xl max-w-none prose-p:text-navy/70 prose-p:leading-relaxed font-sans">
              <p className="text-2xl font-serif italic text-navy mb-12">
                Migrating from WooCommerce to Shopify is a strategic move that can skyrocket your revenue, but without a documented <span className="text-green font-bold">Shopify SEO migration guide</span>, your organic traffic could plummet. The transition requires more than just mapping products; it requires mapping authority.
              </p>

              <h2 className="text-3xl font-bold text-navy tracking-tight mt-16 mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-navy text-sm">1</span>
                The URL Structural Conflict
              </h2>
              <p>
                WooCommerce uses a highly flexible permalink structure, often resulting in URLs like <code className="bg-light px-2 py-1 rounded">/product-category/accessories/</code>. Shopify, however, is rigid. Your collections will always live at <code className="bg-light px-2 py-1 rounded">/collections/</code> and products at <code className="bg-light px-2 py-1 rounded">/products/</code>.
              </p>
              <p>
                <strong>The risk:</strong> When Google crawls your new site and finds 404 errors for your old top-ranking pages, it strips your rankings. To <span className="font-bold">migrate WooCommerce to Shopify without losing rankings</span>, you MUST implement a 1-to-1 redirect strategy.
              </p>

              <div className="bg-navy p-10 rounded-2xl text-white my-12 space-y-6">
                <h4 className="text-green font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={18} /> Pro Tip: Regex Mapping
                </h4>
                <p className="text-white/60 text-sm font-mono leading-relaxed">
                  Instead of manual redirects, use regex in your <code>redirects.csv</code> for bulk mapping:
                </p>
                <div className="bg-black/30 p-6 rounded-2xl border border-white/5 font-mono text-xs overflow-x-auto">
                  <p className="text-green/60 items-center flex gap-2 mb-2"><TrendingUp size={12} /> Goal: Map all product categories to collections</p>
                  <p className="text-white">/product-category/(.*)  =&gt;  /collections/$1</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-navy tracking-tight mt-16 mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-navy text-sm">2</span>
                Metadata & Content Parity
              </h2>
              <p>
                Google ranks you based on specific keywords found in your Meta Titles, Descriptions, and H1 tags. When you export from WooCommerce, ensure you are pulling data from the <strong>Yoast SEO</strong> or <strong>RankMath</strong> tables, not just the standard WordPress post table.
              </p>
              <ul className="space-y-4 my-8">
                <li className="flex gap-4">
                  <CheckCircle2 className="text-green shrink-0 mt-1" size={20} />
                  <span><strong>Preserve H1 Tags:</strong> Your Shopify product titles must exactly match your WooCommerce H1s to maintain keyword relevance.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-green shrink-0 mt-1" size={20} />
                  <span><strong>Image Alt Text:</strong> Often forgotten in migrations, missing alt text on products can tank your "Google Images" traffic.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-green shrink-0 mt-1" size={20} />
                  <span><strong>Internal Link Logic:</strong> If your product descriptions link to other pages, these links will be broken if they use absolute WooCommerce URLs.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-navy tracking-tight mt-16 mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-navy text-sm">3</span>
                Technical Step-by-Step Walkthrough
              </h2>
              <div className="space-y-6">
                <div className="p-8 bg-light rounded-xl border-l-4 border-green">
                  <h4 className="font-bold text-navy mb-2">Step 1: The Clean Export</h4>
                  <p className="text-sm">Use the <strong>WP All Export</strong> plugin. Create a custom XML or CSV template that includes SEO Meta Title, SEO Meta Description, and Slug. Do not rely on generic "Export All".</p>
                </div>
                <div className="p-8 bg-light rounded-xl border-l-4 border-green">
                  <h4 className="font-bold text-navy mb-2">Step 2: Data Normalization via Matrixify</h4>
                  <p className="text-sm">Importing directly into Shopify often results in lost metadata. I recommend the <strong>Matrixify</strong> app. It allows you to map WordPress "Post Meta" fields directly to Shopify "Metafields".</p>
                </div>
                <div className="p-8 bg-light rounded-xl border-l-4 border-green">
                  <h4 className="font-bold text-navy mb-2">Step 3: Post-Migration 301 Audit</h4>
                  <p className="text-sm">After launch, run a tool like <strong>Ahrefs</strong> or <strong>Screaming Frog</strong> against your old sitemap. If a URL returns a 404, you haven't implemented your redirect correctly.</p>
                </div>
              </div>

              <div className="mt-16 bg-white p-12 rounded-3xl shadow-2xl border border-navy/5 space-y-8">
                <div className="w-16 h-16 bg-green/10 rounded-2xl flex items-center justify-center text-green">
                  <AlertTriangle size={32} />
                </div>
                <h3 className="text-3xl font-bold text-navy tracking-tight font-sans">The 404 Trap</h3>
                <p className="font-serif italic text-lg leading-relaxed">
                  "One of the biggest leaks I see during <strong>WooCommerce to Shopify migration SEO</strong> audits is the failure to redirect the blog. WordPress sites are often blog-heavy. If your blog URLs change from <code>/blog/%postname%/</code> to <code>/blogs/news/%postname%/</code>, you could lose thousands of information-intent visitors overnight."
                </p>
                <div className="space-y-4 pt-8 border-t border-navy/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-navy/40">The Solution:</p>
                  <p className="text-sm">Use a Shopify app like <span className="font-bold">SC Easy Redirects</span> to monitor 404 hits in real-time for the first 7 days after migration. Fix them immediately as they appear.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-navy tracking-tight mt-16 mb-8 flex items-center gap-4 text-balance">
                Summary: Your Shopify SEO Migration Guide Checklist
              </h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li><strong>Crawl Old Site:</strong> Download every URL using Screaming Frog.</li>
                <li><strong>Map Redirects:</strong> Create a CSV with "Old URL" and "New URL" columns.</li>
                <li><strong>Preserve Content:</strong> Copy HTML code for descriptions to maintain internal formatting.</li>
                <li><strong>Update Internal Links:</strong> Use a find/replace tool on your descriptions CSV.</li>
                <li><strong>Verify canonicals:</strong> Ensure Shopify is not creating duplicate content loops.</li>
                <li><strong>Submit Sitemap:</strong> Force a re-crawl in Google Search Console immediately after DNS switch.</li>
              </ol>
            </div>

            {/* Migration Tool CTA */}
            <div className="bg-green p-12 md:p-16 rounded-3xl flex flex-col md:flex-row items-center gap-12 text-navy overflow-hidden relative group">
              <Terminal className="absolute -bottom-10 -right-10 text-navy/10 group-hover:scale-110 transition-transform duration-700" size={240} />
              <div className="relative z-10 space-y-8 flex-grow">
                <h3 className="text-4xl font-bold tracking-tight leading-none uppercase italic">Migration <br />Emergency?</h3>
                <p className="text-lg font-serif italic max-w-md">I personally manage the technical SEO mapping for 7 and 8-figure brands moving to Shopify.</p>
                <button onClick={handleWhatsAppContact} className="bg-navy text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl">
                  Get a Free Strategy Call <ArrowRight size={20} />
                </button>
              </div>
              <div className="w-48 h-48 bg-navy/5 rounded-full flex items-center justify-center shrink-0 border border-navy/10 relative z-10">
                <RefreshCw size={64} className="animate-spin-slow" />
              </div>
            </div>

            {/* Discussion Section */}
            <div className="pt-24 mt-24 border-t border-navy/5">
              <div className="flex items-center gap-4 mb-12">
                <MessageCircle className="text-green" size={28} />
                <h3 className="text-3xl font-bold text-navy tracking-tight uppercase italic">Community Discussion</h3>
              </div>

              <div className="space-y-8 mb-16">
                {comments.map((comment, i) => (
                  <div key={i} className="bg-white p-10 rounded-2xl shadow-xl border border-navy/5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center text-navy font-bold">{comment.name.charAt(0)}</div>
                        <span className="font-bold text-navy text-xl tracking-tight">{comment.name}</span>
                      </div>
                    </div>
                    <p className="text-navy/60 leading-relaxed text-lg font-serif italic">{comment.text}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddComment} className="bg-white p-10 rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-navy/5 space-y-8">
                <h4 className="text-2xl font-bold text-navy italic uppercase tracking-tight">Have a question?</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.3em] ml-6">Your Identity</label>
                    <input type="text" required value={commentName} onChange={(e) => setCommentName(e.target.value)} className="w-full bg-light border-0 rounded-xl py-6 px-10 focus:ring-4 focus:ring-green/20 outline-none transition-all font-medium text-navy placeholder:text-navy/20" placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.3em] ml-6">Your Question / Context</label>
                    <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light border-0 rounded-2xl py-8 px-10 focus:ring-4 focus:ring-green/20 outline-none transition-all font-medium text-navy placeholder:text-navy/20 resize-none" placeholder="Is it possible to migrate product reviews too?" />
                  </div>
                </div>
                <button type="submit" className="w-full md:w-auto bg-navy text-white px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-4 hover:bg-green hover:text-navy transition-all duration-500 shadow-2xl">
                  Post Question <Send size={16} />
                </button>
              </form>
            </div>
          </main>
        </div>
      </section>

      {/* Recommended Next Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h3 className="text-4xl font-bold text-navy tracking-tighter uppercase italic">Recommended Reading</h3>
            <Link to="/blog" className="text-green font-bold text-xs uppercase tracking-[0.3em] hover:text-navy transition-colors">See All Articles</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Link to="/blog/6" className="group flex gap-8 items-center bg-light p-8 rounded-3xl hover:bg-navy transition-colors duration-500">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 shadow-lg">
                <img src="https://picsum.photos/seed/blog6/300/300" alt="SEO Guide" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-green uppercase tracking-widest">Up Next</span>
                <h4 className="text-xl font-bold text-navy group-hover:text-white transition-colors leading-tight">Shopify SEO in 2026: Complete Guide</h4>
              </div>
            </Link>

            <Link to="/blog/2" className="group flex gap-8 items-center bg-light p-8 rounded-3xl hover:bg-navy transition-colors duration-500">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 shadow-lg">
                <img src="https://picsum.photos/seed/blog2/300/300" alt="Speed Guide" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-green uppercase tracking-widest">Performance</span>
                <h4 className="text-xl font-bold text-navy group-hover:text-white transition-colors leading-tight">Speed Up Your Shopify Store in 2026</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
