import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, MessageCircle, Search, ListChecks, Smartphone, Send, Zap, BarChart3, Globe, Zap as Sparkles, Target, Zap as Fast } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ShopifySEOGuide() {
  const [comments, setComments] = useState<{name: string, text: string}[]>([
    { name: "Michael T.", text: "This is the most balanced guide on Shopify SEO I've found. Usually, people just talk about meta tags, but the emphasis on speed and technical sitemap management is key." }
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("Shopify SEO in 2026: The Beginner's Complete Guide");

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${title} - ${url}`, "_blank");
  };

  const handleTwitterShare = () => {
    window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, "_blank");
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
    const text = encodeURIComponent("Hi Sheun, I read your Shopify SEO guide and I'm interested in working with you to grow my organic traffic!");
    window.open(`https://wa.me/2348084315743?text=${text}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 bg-light relative min-h-screen">
      {/* Progress Bar */}
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
          
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-40 space-y-12">
              <div className="space-y-6">
                <Link to="/blog" className="inline-flex items-center gap-2 text-navy/40 font-bold text-sm uppercase tracking-widest hover:text-green transition-colors">
                  <ArrowLeft size={16} /> Back to Blog
                </Link>
                <div className="space-y-4">
                  <span className="bg-green/10 text-green px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Compounding Growth</span>
                  <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tighter leading-tight">
                    Shopify SEO <br />
                    <span className="text-green italic">The 2026 Blueprint</span>.
                  </h1>
                </div>
                <div className="flex items-center gap-6 text-navy/40 text-xs font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2"><Calendar size={14} /> April 21, 2026</div>
                  <div className="flex items-center gap-2"><Clock size={14} /> 25 min read</div>
                </div>
              </div>

              <div className="bg-navy p-8 rounded-[40px] shadow-2xl text-white space-y-6">
                <div className="flex items-center gap-3 text-green">
                  <BarChart3 size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Organic Dominance</span>
                </div>
                <p className="text-white/70 font-serif italic text-lg leading-relaxed">
                  "Paid ads are a drug. SEO is the remedy. Build a store that stops asking for budget and starts generating its own demand."
                </p>
                <Link to="/about" className="flex items-center gap-4 pt-4 border-t border-white/10 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green/20 rounded-full blur-lg group-hover:bg-green/40 transition-colors" />
                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/bed47882db24771238091456bc69a699-1765207538189/19e070ae-9c29-498b-ac69-01114e131e68.png" className="w-12 h-12 rounded-full border-2 border-green relative z-10" alt="Sheun" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold group-hover:text-green transition-colors">Sheun</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Shopify Performance Expert</p>
                  </div>
                </Link>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40">Share the Blueprint</p>
                <div className="flex gap-4">
                  <button onClick={handleTwitterShare} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all shadow-sm border border-navy/5"><ArrowRight className="-rotate-45" size={20} /></button>
                  <button onClick={handleWhatsAppShare} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy hover:bg-green hover:text-navy transition-all shadow-sm border border-navy/5"><MessageCircle size={20} /></button>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-16 pb-32">
            <div className="prose prose-lg md:prose-xl max-w-none prose-p:text-navy/70 prose-p:leading-relaxed font-sans">
              <p className="text-2xl font-serif italic text-navy mb-12">
                In 2026, relying solely on TikTok and Meta ads is a dangerous game. Customer Acquisition Cost (CAC) is rising, and margins are thinning. The only way to survive long-term is to build a <span className="text-green font-bold">compounding organic asset</span>. This guide is your primer on technical and on-page Shopify SEO.
              </p>

              <h2 className="text-3xl font-bold text-navy tracking-tight mt-16 mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-navy text-sm">1</span>
                The Foundation: Technical SEO
              </h2>
              <p>
                Shopify handles a lot of the technical heavy lifting out of the box, but it's not perfect. To truly compete, you need to look under the hood. Technical SEO is about making your site easy for Google to crawl and index.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-white p-8 rounded-3xl border border-navy/5 shadow-xl space-y-4">
                  <div className="w-10 h-10 bg-green/10 rounded-xl flex items-center justify-center text-green">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-bold text-navy">Sitemap Optimization</h4>
                  <p className="text-sm text-navy/50">Shopify auto-generates your <code>sitemap.xml</code>. Your job is to ensure you aren't indexing junk pages like "Tag" pages or search result pages that dilute your authority.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-navy/5 shadow-xl space-y-4">
                  <div className="w-10 h-10 bg-green/10 rounded-xl flex items-center justify-center text-green">
                    <Fast size={20} />
                  </div>
                  <h4 className="font-bold text-navy">Core Web Vitals</h4>
                  <p className="text-sm text-navy/50">Speed is a ranking factor. In 2026, Google prioritizes 'Interaction to Next Paint' (INP). If your theme is bloated with unused apps, you're losing rankings.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-navy tracking-tight mt-16 mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-navy text-sm">2</span>
                On-Page Optimization: Keywords to Conversion
              </h2>
              <p>
                On-page SEO is about telling Google exactly what your product is and why it's better than the competition. The goal is to match "Buyer Intent" with your content.
              </p>
              
              <ul className="space-y-4 my-8">
                <li className="flex gap-4">
                  <CheckCircle2 className="text-green shrink-0 mt-1" size={20} />
                  <span><strong>Descriptive H1s:</strong> Don't just name your product "Blue Shirt". Name it "Men's Premium Organic Cotton Blue Shirt — Slim Fit".</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-green shrink-0 mt-1" size={20} />
                  <span><strong>Alt Text Excellence:</strong> Every image should describe the product visually for search engines and accessibility.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-green shrink-0 mt-1" size={20} />
                  <span><strong>Unique Descriptions:</strong> Never use the manufacturer's description. Google penalizes "Thin Content". Write 400+ words of unique, benefit-driven copy.</span>
                </li>
              </ul>

              <div className="bg-light p-10 rounded-[40px] my-12 space-y-6">
                <h4 className="text-navy font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Search size={18} /> Deep Dive: Semantic SEO
                </h4>
                <p className="text-navy/60 text-sm leading-relaxed italic">
                  "Google no longer just looks for exact keyword matches. It looks for 'Topics'. If you sell coffee, your page should also mention 'Organic Beans', 'Brewing Temperature', 'Roast Level', and 'Single Origin'. This is built-in authority."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-navy tracking-tight mt-16 mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-navy text-sm">3</span>
                Collection Page Power
              </h2>
              <p>
                On Shopify, your collection pages are often your hardest hitters for broad category keywords. Most merchants leave them as simple grids. You should treat them as mini-landing pages.
              </p>
              <div className="p-8 bg-navy text-white rounded-[32px] border-l-4 border-green space-y-4">
                <h4 className="font-bold text-green">The "Footer Content" Hack</h4>
                <p className="text-sm opacity-70">Add 500 words of educational content below the product grid on your collections. Use metafields or theme customization to place this content without pushing the products down or hurting the user experience.</p>
              </div>

              <h2 className="text-3xl font-bold text-navy tracking-tight mt-16 mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-navy text-sm">4</span>
                The 2026 SEO Content Framework
              </h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li><strong>Analyze Intent:</strong> Is the customer looking for information (How-to) or to buy (Transactions)?</li>
                <li><strong>Keyword Research:</strong> Use tools like Ahrefs or Semrush to find low-difficulty, high-volume terms.</li>
                <li><strong>Build Backlinks:</strong> Content is king, but the queen is authority. You need other reputable sites linking to you.</li>
                <li><strong>Mobile First:</strong> 80%+ of your traffic is mobile. If your SEO content doesn't look great on a phone, it doesn't matter how high you rank.</li>
                <li><strong>Monitor & Iterate:</strong> Use Google Search Console to see what terms are driving impressions but not clicks. Optimize titles for higher CTR.</li>
              </ol>

              <div className="mt-16 bg-white p-12 rounded-[60px] shadow-2xl border border-navy/5 space-y-8">
                <div className="w-16 h-16 bg-green/10 rounded-2xl flex items-center justify-center text-green">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold text-navy tracking-tight font-sans">The Outcome</h3>
                <p className="font-serif italic text-lg leading-relaxed">
                  "When you master Shopify SEO, your store stops being a 'daily grind' of campaign management and starts being an engine. You wake up to sales from customers you didn't pay to find. That's true eCommerce freedom."
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-green p-12 md:p-16 rounded-[60px] flex flex-col md:flex-row items-center gap-12 text-navy overflow-hidden relative group">
              <Sparkles className="absolute -bottom-10 -right-10 text-navy/10 group-hover:scale-110 transition-transform duration-700" size={240} />
              <div className="relative z-10 space-y-8 flex-grow">
                <h3 className="text-4xl font-bold tracking-tight leading-none uppercase italic">Scale Your <br />Organic Traffic.</h3>
                <p className="text-lg font-serif italic max-w-md">I help ambitious Shopify brands outrank the giants using data-driven technical SEO strategies.</p>
                <button onClick={handleWhatsAppContact} className="bg-navy text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl">
                  Work with Me <ArrowRight size={20} />
                </button>
              </div>
              <div className="w-48 h-48 bg-navy/5 rounded-full flex items-center justify-center shrink-0 border border-navy/10 relative z-10">
                <Globe size={64} className="text-navy group-hover:rotate-12 transition-transform duration-500" />
              </div>
            </div>

            {/* Discussion */}
            <div className="pt-24 mt-24 border-t border-navy/5">
              <div className="flex items-center gap-4 mb-12">
                <MessageCircle className="text-green" size={28} />
                <h3 className="text-3xl font-bold text-navy tracking-tight uppercase italic">What's your growth goal?</h3>
              </div>

              <div className="space-y-8 mb-16">
                {comments.map((comment, i) => (
                  <div key={i} className="bg-white p-10 rounded-[40px] shadow-xl border border-navy/5 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center text-navy font-bold">{comment.name.charAt(0)}</div>
                      <span className="font-bold text-navy text-xl tracking-tight">{comment.name}</span>
                    </div>
                    <p className="text-navy/60 leading-relaxed text-lg font-serif italic">{comment.text}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleAddComment} className="bg-white p-10 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-navy/5 space-y-8">
                <h4 className="text-2xl font-bold text-navy italic uppercase tracking-tight">Ask a technical SEO question</h4>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.3em] ml-6">Your Name</label>
                    <input type="text" required value={commentName} onChange={(e) => setCommentName(e.target.value)} className="w-full bg-light border-0 rounded-[32px] py-6 px-10 focus:ring-4 focus:ring-green/20 outline-none transition-all font-medium text-navy placeholder:text-navy/20" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.3em] ml-6">Your Context / Store URL</label>
                    <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light border-0 rounded-[40px] py-8 px-10 focus:ring-4 focus:ring-green/20 outline-none transition-all font-medium text-navy placeholder:text-navy/20 resize-none" placeholder="How do I handle double H1 issues in my theme?" />
                  </div>
                </div>
                <button type="submit" className="w-full md:w-auto bg-navy text-white px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-4 hover:bg-green hover:text-navy transition-all duration-500 shadow-2xl">
                  Join Discussion <Send size={16} />
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
            <h3 className="text-4xl font-bold text-navy tracking-tighter uppercase italic">Strategic Frameworks</h3>
            <Link to="/blog" className="text-green font-bold text-xs uppercase tracking-[0.3em] hover:text-navy transition-colors">All Insights</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Link to="/blog/5" className="group flex gap-8 items-center bg-light p-8 rounded-[48px] hover:bg-navy transition-colors duration-500">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 shadow-lg">
                <img src="https://picsum.photos/seed/blog5/300/300" alt="Migration Guide" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-green uppercase tracking-widest">Store Migration</span>
                <h4 className="text-xl font-bold text-navy group-hover:text-white transition-colors leading-tight">WooCommerce to Shopify: Zero Loss SEO</h4>
              </div>
            </Link>

            <Link to="/blog/1" className="group flex gap-8 items-center bg-light p-8 rounded-[48px] hover:bg-navy transition-colors duration-500">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0 shadow-lg">
                <img src="https://picsum.photos/seed/blog1/300/300" alt="Settings Guide" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-green uppercase tracking-widest">Admin Secrets</span>
                <h4 className="text-xl font-bold text-navy group-hover:text-white transition-colors leading-tight">10 Settings Store Owners Miss</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
