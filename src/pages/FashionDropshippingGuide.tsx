import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, MessageCircle, ShoppingBag, Star, Mail, Zap, Layout, Phone, Send, Heart, Target, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FashionDropshippingGuide() {
  const [comments, setComments] = useState<{name: string, text: string}[]>([
    { name: "Sonia P.", text: "The advice on sub-niches was eye-opening. I was trying to sell everything and getting nowhere!" }
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("How to Build a Profitable Fashion Dropshipping Store on Shopify");

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
    const text = encodeURIComponent("Hi Sheun, I'm starting a fashion dropshipping store and need expert theme customization!");
    window.open(`https://wa.me/2348084315743?text=${text}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 bg-white relative">
      {/* Editorial Hero */}
      <section className="bg-navy-gradient pt-16 pb-32 px-6 rounded-b-[60px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-green font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
            <span className="bg-white/10 px-4 py-2 rounded-full text-white">Dropshipping</span>
            <div className="flex items-center gap-2"><Calendar size={16} /> April 20, 2026</div>
            <div className="flex items-center gap-2 text-green"><Clock size={16} /> 15 min read</div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight text-balance">
            How to Build a Profitable Fashion Dropshipping Store on Shopify
          </h1>

          <p className="text-xl text-white/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
            The fashion industry is crowded, but it's also where the biggest wins are. Learn how to differentiate, source, and scale in 2026.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-navy/5 space-y-12">
          
          <div className="aspect-video bg-light w-full rounded-3xl overflow-hidden shadow-inner mb-12 relative flex items-center justify-center group">
            <Heart className="absolute text-pink-500 opacity-10 group-hover:scale-110 transition-transform duration-700" size={160} />
            <img src="https://picsum.photos/seed/fashion-blog/1200/600" alt="Fashion Dropshipping" className="w-full h-full object-cover rounded-3xl z-10 opacity-90" />
          </div>

            <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy prose-p:text-navy/80 prose-p:leading-relaxed font-sans">
              <p className="text-2xl leading-relaxed text-navy/90 mb-12">
                Fashion dropshipping is often called "the hardest niche" in eCommerce, yet it remains the most lucrative for those who understand the psychology of the modern consumer. In 2026, the global fashion market continues to expand, but the "barrier to entry" has shifted from simply finding a product to building a resonant brand identity. People don't just buy clothes; they buy identities, lifestyles, and aesthetic alignments.
              </p>

              <h2 className="text-3xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight">1. Identifying Your Tribal Niche</h2>
              <p>
                The biggest mistake most aspiring entrepreneurs make is starting a "General Fashion Store." In 2026, the middle ground is a graveyard. You cannot compete with the logistics of Zara or the pricing of Shein. You win by being the <strong>absolute authority</strong> for a very specific tribe.
              </p>
              <div className="bg-light p-8 rounded-[32px] my-8 space-y-4">
                <p className="font-sans font-bold text-navy uppercase text-xs tracking-widest">Recommended Sub-Niches for 2026:</p>
                <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4 pl-0">
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-navy/5 shadow-sm">
                    <CheckCircle2 className="text-green" size={18} /> <span className="text-sm font-medium">Gorpcore (Functional Outdoor)</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-navy/5 shadow-sm">
                    <CheckCircle2 className="text-green" size={18} /> <span className="text-sm font-medium">Sustainable Resort Wear</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-navy/5 shadow-sm">
                    <CheckCircle2 className="text-green" size={18} /> <span className="text-sm font-medium">Techwear / Streetwear Fusion</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-navy/5 shadow-sm">
                    <CheckCircle2 className="text-green" size={18} /> <span className="text-sm font-medium">Cyber-Minimalism</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight">2. The High-Conversion Architecture</h2>
              <p>
                In fashion, your store design must be invisible. It should highlight the photography, not compete with it. Most beginners clutter their store with "trust badges" and timers that scream "dropshipping." Instead, focus on these technical foundations:
              </p>
              
              <div className="bg-navy p-10 rounded-[40px] text-white my-12 space-y-6">
                <h4 className="text-green font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Layers size={18} /> Theme Customization Tip: Liquid Sizing Labels
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Reduce returns by adding custom Liquid logic to your `product.json` to show dynamic sizing recommendations based on specific supplier measurements:
                </p>
                <div className="bg-black/30 p-6 rounded-2xl border border-white/5 font-mono text-xs overflow-x-auto">
                  <p className="text-white">{"{% if product.tags contains 'EU-Sizing' %}"}</p>
                  <p className="text-green pl-4">{"<p>Note: These fit small. We recommend sizing up.</p>"}</p>
                  <p className="text-white">{"{% endif %}"}</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight">3. Sourcing Strategy: The SRE Framework</h2>
              <p>
                To maintain high profit margins, you need a <strong>Sourcing, Reliability, and Ethics (SRE)</strong> framework. Stop using AliExpress directly. Instead, move to agents who can provide:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li><strong>Gifting Sampling:</strong> Always order the product to your own house first. If you wouldn't gift it to a friend, don't sell it.</li>
                <li><strong>Custom Packing:</strong> Use a sourcing agent that can add your logo to the shipping bags (Brand Recall).</li>
                <li><strong>Quality Inspection:</strong> Use agents like <strong>Zendrop</strong> or <strong>CJ</strong> who inspect items before they leave the warehouse to prevent "Transparent Fabric" complaints.</li>
              </ol>

              <h2 className="text-3xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight">4. SEO Cluster Strategy for Fashion</h2>
              <p>
                Ranking for "blue shirts" is impossible. Ranking for "Blue organic cotton oversized men's shirts for minimalist wardrobe" is where the money is.
              </p>
              <div className="flex items-start gap-4 bg-light p-8 rounded-[32px] border-l-8 border-green my-12 font-sans italic">
                <Zap className="text-green shrink-0 mt-1" size={32} />
                <p className="text-lg font-medium text-navy m-0">
                  <strong>The "Style Guide" Hack:</strong> Create blog posts titled "5 Ways to Style Our [Product Name]". Link directly to the product. Google sees this as deep topical relevance, and it helps you rank for "How to wear" queries which have high buyer intent.
                </p>
              </div>

              <div className="bg-navy p-12 rounded-[48px] text-white my-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] font-sans">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-green/20 rounded-2xl flex items-center justify-center">
                    <ShoppingBag className="text-green" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold m-0 text-white leading-tight">Build or Scale?</h3>
                    <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold mt-1">Custom Brand Strategy & Shopify Development</p>
                  </div>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-10">
                  Building a fashion brand is about more than just a logo. I specialize in the bridge between high-quality design and high-conversion technical architecture.
                </p>
                <button onClick={handleWhatsAppContact} className="bg-green text-navy font-bold px-10 py-5 rounded-full flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
                  <MessageCircle size={24} /> Launch My Boutique Now
                </button>
              </div>

              <h2 className="text-3xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight">5. Marketing: The Content Flywheel</h2>
              <p>
                Fashion is a performance art. You cannot scale on static photos alone.
              </p>
              <ul className="space-y-4 my-8 list-none pl-0">
                <li className="flex gap-4 p-6 bg-light rounded-2xl border border-navy/5">
                  <div className="w-8 h-8 bg-navy text-white rounded-lg flex items-center justify-center shrink-0 text-xs font-bold">A</div>
                  <span><strong>TikTok Search Optimization:</strong> Treat TikTok like a search engine. Use keywords in your captions and text-on-screen so you appear in the "Search" bar for your niche.</span>
                </li>
                <li className="flex gap-4 p-6 bg-light rounded-2xl border border-navy/5">
                  <div className="w-8 h-8 bg-navy text-white rounded-lg flex items-center justify-center shrink-0 text-xs font-bold">B</div>
                  <span><strong>UGC Whitelisting:</strong> Take videos from your customers (with permission) and run them as "Spark Ads" on TikTok. These outperform professional ads by 300%.</span>
                </li>
              </ul>
            </div>

          {/* Author & Share */}
          <div className="pt-16 mt-16 border-t border-navy/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <Link to="/portfolio" className="flex items-center gap-6 group hover:bg-light p-4 rounded-3xl transition-all -ml-4 pr-8 border border-transparent hover:border-navy/5">
              <div className="relative">
                <div className="absolute inset-0 bg-green/20 rounded-full blur-xl group-hover:bg-green/40 transition-colors" />
                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/bed47882db24771238091456bc69a699-1765207538189/19e070ae-9c29-498b-ac69-01114e131e68.png" alt="Sheun" className="w-20 h-20 rounded-full shadow-lg object-cover relative z-10 border-2 border-white" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-navy text-xl group-hover:text-green transition-colors leading-tight">By Sheun</p>
                <p className="text-sm text-navy/50 uppercase tracking-widest font-bold mb-1">Shopify Expert & Developer</p>
                <span className="text-navy font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">View Portfolio & Contact <ArrowRight size={14} /></span>
              </div>
            </Link>
            
            <div className="w-full md:w-auto text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40 mb-4">Share Article</p>
              <div className="flex items-center justify-end gap-3 flex-wrap">
                <button onClick={handleTwitterShare} className="w-10 h-10 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-navy hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </button>
                <button onClick={handleWhatsAppShare} className="w-10 h-10 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-green hover:text-navy transition-colors">
                  <Phone size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="pt-16 mt-16 border-t border-navy/5">
            <div className="flex items-center gap-4 mb-10">
              <MessageCircle className="text-green" size={28} />
              <h3 className="text-3xl font-bold text-navy tracking-tight">Discussion ({comments.length})</h3>
            </div>

            <div className="space-y-8 mb-16">
              {comments.map((comment, i) => (
                <div key={i} className="bg-light p-8 rounded-[32px] border border-navy/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold">{comment.name.charAt(0)}</div>
                      <span className="font-bold text-navy text-lg">{comment.name}</span>
                    </div>
                  </div>
                  <p className="text-navy/70 leading-relaxed">{comment.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-navy/5 space-y-6">
              <h4 className="text-xl font-bold text-navy mb-2">Join the Conversation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-navy/50 uppercase tracking-[0.2em] ml-4">Name *</label>
                  <input type="text" required value={commentName} onChange={(e) => setCommentName(e.target.value)} className="w-full bg-light border-b-2 border-navy/5 hover:border-navy/20 hover:bg-white rounded-3xl py-4 px-6 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20" placeholder="Your Name" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-navy/50 uppercase tracking-[0.2em] ml-4">Comment *</label>
                  <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light border-b-2 border-navy/5 hover:border-navy/20 hover:bg-white rounded-3xl py-4 px-6 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20 resize-none" placeholder="Share your experience with fashion stores..." />
                </div>
              </div>
              <button type="submit" className="bg-navy text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-green hover:text-navy transition-all duration-300 shadow-xl">
                Post Comment <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Related Posts */}
      <section className="container mx-auto px-6 mt-32">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-4xl font-bold text-navy tracking-tight">Expand Your Knowledge</h3>
          <p className="text-navy/40 font-serif italic text-lg">More strategies and insights for Shopify growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Link to="/blog/3" className="group space-y-6 block">
            <div className="aspect-[16/10] rounded-[32px] overflow-hidden relative shadow-xl">
              <img src="https://picsum.photos/seed/blog3/800/600" alt="Related Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-xl text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">Dropshipping</span>
              </div>
            </div>
            <div className="space-y-4 px-4">
              <h4 className="text-2xl font-bold text-navy group-hover:text-green transition-colors leading-tight tracking-tight">The Best Shopify Apps for Dropshipping Stores</h4>
              <div className="flex items-center gap-3 text-xs text-navy/40 font-bold uppercase tracking-widest">
                <Clock size={16} className="text-green" /> 10 min read
              </div>
            </div>
          </Link>

          <Link to="/blog/2" className="group space-y-6 block">
            <div className="aspect-[16/10] rounded-[32px] overflow-hidden relative shadow-xl">
              <img src="https://picsum.photos/seed/blog2/800/600" alt="Related Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-xl text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">Shopify Tips</span>
              </div>
            </div>
            <div className="space-y-4 px-4">
              <h4 className="text-2xl font-bold text-navy group-hover:text-green transition-colors leading-tight tracking-tight">How to Speed Up Your Shopify Store in 2026</h4>
              <div className="flex items-center gap-3 text-xs text-navy/40 font-bold uppercase tracking-widest">
                <Clock size={16} className="text-green" /> 12 min read
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
