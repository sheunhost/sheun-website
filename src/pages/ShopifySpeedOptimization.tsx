import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, MessageCircle, Settings, Mail, Target, Phone, Twitter, Facebook, Linkedin, User, Send, Zap, Image as ImageIcon, Code, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ShopifySpeedOptimization() {
  const [comments, setComments] = useState<{name: string, text: string}[]>([
    { name: "Michael T.", text: "I installed a lazy loading app and my mobile speed improved immediately. Thanks for the tip!" }
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("How to Speed Up Your Shopify Store in 2026");

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
    const text = encodeURIComponent("Hi Sheun, my Shopify store is slow and I need your help speeding it up!");
    window.open(`https://wa.me/2348084315743?text=${text}`, "_blank");
  };

  return (
    <div className="pt-32 pb-24 bg-white relative">
      <section className="bg-navy-gradient pt-16 pb-32 px-6 rounded-b-3xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
          <nav className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
            <Link to="/" className="hover:text-green transition-colors flex items-center gap-2"><ArrowLeft size={14} /> Home</Link>
            <span className="opacity-30">/</span>
            <Link to="/blog" className="hover:text-green transition-colors">Blog</Link>
            <span className="opacity-30">/</span>
            <span className="text-white">Article</span>
          </nav>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
            <span className="bg-white/10 px-4 py-2 rounded-full text-white">Shopify Tips</span>
            <div className="flex items-center gap-2"><Calendar size={16} /> April 10, 2026</div>
            <div className="flex items-center gap-2 text-green"><Clock size={16} /> 12 min read</div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight text-balance">
            How to Speed Up Your Shopify Store in 2026 <span className="italic font-serif font-light text-white/60">(Step by Step)</span>
          </h1>

          <p className="text-xl text-white/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
            A comprehensive guide to optimizing your store's performance for better user experience, higher conversion rates, and improved technical SEO.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-16 border border-navy/5 space-y-12">
          
          <div className="aspect-video bg-light w-full rounded-3xl overflow-hidden shadow-inner mb-12 relative flex items-center justify-center group">
            <Zap className="absolute text-navy opacity-10 group-hover:scale-110 transition-transform duration-700" size={160} />
            <img src="https://picsum.photos/seed/blog2/1200/600" alt="Shopify speed optimization" className="w-full h-full object-cover rounded-3xl z-10 opacity-90" />
          </div>

            <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy prose-p:text-navy/80 prose-p:leading-relaxed font-sans">
              <p className="text-2xl leading-relaxed text-navy/90 mb-12">
                In the fast-paced world of digital commerce, the speed of your Shopify store is not just a technical metric—it is the single most important factor in your conversion rate marketing. In 2026, user expectations have reached a peak where even a 100-millisecond delay can result in a measurable drop in revenue.
              </p>

              <h2 className="text-3xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight">1. Mastering Image Architecture</h2>
              <p>
                The most common bandwidth-killer in Shopify is unoptimized imagery. While Shopify does provide some automatic optimization, you must take control of your image architecture using <code>srcset</code> and next-gen formats.
              </p>
              
              <div className="bg-navy p-10 rounded-2xl text-white my-12 space-y-6 font-sans">
                <h4 className="text-green font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                  <Code size={18} /> Technical Implementation: Responsive Images
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Use this Liquid snippet to ensure browsers only download the resolution they actually need:
                </p>
                <div className="bg-black/30 p-6 rounded-2xl border border-white/5 font-mono text-xs overflow-x-auto">
                  <p className="text-white">{"<img src=\"{{ image | img_url: 'master' }}\""}</p>
                  <p className="text-white pl-4">{"loading=\"lazy\""}</p>
                  <p className="text-white pl-4">{"srcset=\"{{ image | img_url: '400x' }} 400w, {{ image | img_url: '800x' }} 800w, {{ image | img_url: '1200x' }} 1200w\""}</p>
                  <p className="text-white pl-4">{"alt=\"{{ image.alt | escape }}\" >"}</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight">2. The Font-Display Swap Strategy</h2>
              <p>
                Custom brand fonts are beautiful, but they cause FOUT (Flash of Unstyled Text) or FOIT (Flash of Invisible Text). In 2026, you should prioritize <strong>System Fonts</strong> for body copy.
              </p>
              <div className="bg-light p-8 rounded-xl border-l-8 border-green my-12">
                <h4 className="text-xl font-bold text-navy mb-2 font-sans">CSS Optimization Hack:</h4>
                <div className="bg-white p-4 rounded-xl border border-navy/5 font-mono text-xs mb-4">
                  <p className="text-navy">font-display: swap;</p>
                </div>
                <p className="text-sm m-0 italic">Adding this single line to your <code>@font-face</code> declarations ensures the browser shows a fallback font instantly while your custom font downloads in the background.</p>
              </div>

              <h2 className="text-3xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight">3. Reducing the "App Tax"</h2>
              <p>
                Every app you install adds potentially blocking JavaScript. Perform a "Code Audit" monthly. Search your <code>theme.liquid</code> for external domains like <code>cdn.appname.com</code> and remove residues from uninstalled apps.
              </p>
              <ul className="space-y-4 my-8">
                <li className="flex gap-4">
                  <CheckCircle2 className="text-green mt-1 shrink-0" size={20} />
                  <span><strong>GTM Consolidation:</strong> Move all your individual tracking scripts (Facebook, TikTok, Pinterest) into a single optimized Google Tag Manager container.</span>
                </li>
                <li className="flex gap-4">
                  <CheckCircle2 className="text-green mt-1 shrink-0" size={20} />
                  <span><strong>Lazy Load Video:</strong> Never use autoplaying Shopify videos above the fold without <code>preload="none"</code> tags if they aren't critical to the UX.</span>
                </li>
              </ul>

              <div className="bg-navy p-12 rounded-3xl text-white my-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] font-sans">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-green/20 rounded-2xl flex items-center justify-center">
                    <Zap className="text-green" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold m-0 text-white">Need a Speed Specialist?</h3>
                    <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold mt-1">Deep-Dive Technical Performance Audits</p>
                  </div>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-10">
                  Speed isn't just about apps. It's about how your Liquid code communicates with your HTML. I rebuild theme architectures to achieve 90+ Mobile Core Web Vital scores.
                </p>
                <button onClick={handleWhatsAppContact} className="bg-green text-navy font-bold px-10 py-5 rounded-full flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
                  <MessageCircle size={24} /> Audit My Store Speed
                </button>
              </div>
            </div>

          <div className="pt-16 mt-16 border-t border-navy/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <Link to="/portfolio" className="flex items-center gap-6 group hover:bg-light p-4 rounded-3xl transition-all -ml-4 pr-8 border border-transparent hover:border-navy/5">
              <div className="relative">
                <div className="absolute inset-0 bg-green/20 rounded-full blur-xl group-hover:bg-green/40 transition-colors" />
                <img src="https://ik.imagekit.io/pedgmrihq/image.png" alt="Sheun" className="w-20 h-20 rounded-full shadow-lg object-cover relative z-10 border-2 border-white" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-navy text-xl group-hover:text-green transition-colors leading-tight">By Sheun</p>
                <p className="text-sm text-navy/50 uppercase tracking-widest font-bold mb-1">Shopify Expert & Developer</p>
                <span className="text-navy font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">View Portfolio & Contact <ArrowRight size={14} /></span>
              </div>
            </Link>
            
            <div className="w-full md:w-auto">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40 mb-4 md:text-right">Share Article</p>
              <div className="flex items-center gap-3 flex-wrap">
                <button onClick={handleTwitterShare} className="w-12 h-12 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-colors shadow-sm">
                  <Twitter size={20} />
                </button>
                <button onClick={handleFacebookShare} className="w-12 h-12 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-[#4267B2] hover:text-white hover:border-[#4267B2] transition-colors shadow-sm">
                  <Facebook size={20} />
                </button>
                <button onClick={handleLinkedinShare} className="w-12 h-12 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors shadow-sm">
                  <Linkedin size={20} />
                </button>
                <button onClick={handleWhatsAppShare} className="w-12 h-12 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors shadow-sm">
                  <Phone size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-16 mt-16 border-t border-navy/5">
            <div className="flex items-center gap-4 mb-10">
              <MessageCircle className="text-green" size={28} />
              <h3 className="text-3xl font-bold text-navy tracking-tight">Discussion ({comments.length})</h3>
            </div>

            <div className="space-y-8 mb-16">
              {comments.map((comment, i) => (
                <div key={i} className="bg-light p-8 rounded-xl border border-navy/5 space-y-4">
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

            <form onSubmit={handleAddComment} className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-navy/5 space-y-6">
              <h4 className="text-xl font-bold text-navy mb-2">Leave a Comment</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-navy/50 uppercase tracking-[0.2em] ml-4">Name *</label>
                  <input type="text" required value={commentName} onChange={(e) => setCommentName(e.target.value)} className="w-full bg-light border-b-2 border-navy/5 hover:border-navy/20 hover:bg-white rounded-3xl py-4 px-6 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-navy/50 uppercase tracking-[0.2em] ml-4">Your Context / Comment *</label>
                  <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light border-b-2 border-navy/5 hover:border-navy/20 hover:bg-white rounded-3xl py-4 px-6 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20 resize-none" placeholder="Share your thoughts..." />
                </div>
              </div>
              <button type="submit" className="bg-navy text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-green hover:text-navy transition-all duration-300 shadow-xl">
                Post Comment <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>

      <section className="container mx-auto px-6 mt-32">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-4xl font-bold text-navy tracking-tight">Related Posts</h3>
          <p className="text-navy/40 font-serif italic text-lg">More insights on Shopify Tips and eCommerce growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Link to="/blog/1" className="group space-y-6 block">
            <div className="aspect-[16/10] rounded-xl overflow-hidden relative shadow-xl">
              <img src="https://picsum.photos/seed/blog1/800/600" alt="Related Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-xl text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">Shopify Tips</span>
              </div>
            </div>
            <div className="space-y-4 px-4">
              <h4 className="text-2xl font-bold text-navy group-hover:text-green transition-colors leading-tight tracking-tight">10 Shopify Settings Most Store Owners Miss</h4>
              <div className="flex items-center gap-3 text-xs text-navy/40 font-bold uppercase tracking-widest">
                <Clock size={16} className="text-green" /> 8 min read
              </div>
            </div>
          </Link>

          <Link to="/blog/3" className="group space-y-6 block">
            <div className="aspect-[16/10] rounded-xl overflow-hidden relative shadow-xl">
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
        </div>
      </section>
    </div>
  );
}
