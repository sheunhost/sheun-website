import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, MessageCircle, Settings, Mail, Target, Phone, Twitter, Facebook, Linkedin, User, Send, Zap, Image as ImageIcon, Code, Package } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BlogPost2() {
  const [comments, setComments] = useState<{name: string, text: string, date: string}[]>([
    { name: "Michael T.", text: "I installed a lazy loading app and my mobile speed improved immediately. Thanks for the tip!", date: "April 11, 2026" }
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("How to Speed Up Your Shopify Store in 2025");

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
      setComments([...comments, { name: commentName, text: newComment, date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }]);
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
      <section className="bg-navy-gradient pt-16 pb-32 px-6 rounded-b-[60px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-green font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
            <span className="bg-white/10 px-4 py-2 rounded-full text-white">Shopify Tips</span>
            <div className="flex items-center gap-2"><Calendar size={16} /> April 10, 2026</div>
            <div className="flex items-center gap-2 text-green"><Clock size={16} /> 12 min read</div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight text-balance">
            How to Speed Up Your Shopify Store in 2025 <span className="italic font-serif font-light text-white/60">(Step by Step)</span>
          </h1>

          <p className="text-xl text-white/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
            A comprehensive guide to optimizing your store's performance for better user experience, higher conversion rates, and improved technical SEO.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-navy/5 space-y-12">
          
          <div className="aspect-video bg-light w-full rounded-3xl overflow-hidden shadow-inner mb-12 relative flex items-center justify-center group">
            <Zap className="absolute text-navy opacity-10 group-hover:scale-110 transition-transform duration-700" size={160} />
            <img src="https://picsum.photos/seed/blog2/1200/600" alt="Shopify speed optimization" className="w-full h-full object-cover rounded-3xl z-10 opacity-90" />
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy prose-p:text-navy/80 prose-p:leading-loose font-serif">
            <p>
              In 2025, a fast eCommerce store isn't just a luxury—it's a hard requirement. If your Shopify store takes more than three seconds to load, you are losing up to 50% of your potential customers before they even see your products.
            </p>
            <p>
              Beyond user patience, load time heavily impacts your Google rankings (Core Web Vitals) and your advertising ROI. Let's break down the most effective, actionable ways to drastically improve your Shopify speed score safely and efficiently.
            </p>
            
            <div className="flex items-start gap-4 bg-light p-6 rounded-2xl border-l-4 border-green my-8">
              <ShieldCheck className="text-green shrink-0 mt-1" size={28} />
              <p className="text-sm md:text-base font-sans font-medium text-navy m-0 italic">
                <strong>Important:</strong> Always duplicate your live theme before making any major code edits or un-installing several applications.
              </p>
            </div>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">1</span> 
              Compress and Optimize Your Images
            </h2>
            <p>
              Giant, uncompressed images are the number one cause of slow Shopify stores. You do not need a 4000x4000 pixel image that weighs 5MB for a simple product shot.
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><ImageIcon className="text-green shrink-0 mt-1" size={20} /> <strong>Convert to WebP:</strong> Use modern formats like WebP rather than heavy PNGs.</li>
              <li className="flex gap-3 items-start"><CheckCircle2 className="text-green shrink-0 mt-1" size={20} /> <strong>Lazy Loading:</strong> Make sure images "below the fold" are lazy-loaded (only loaded when the user scrolls to them). Modern Shopify OS 2.0 themes usually have this built-in.</li>
            </ul>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">2</span> 
              Remove Redundant Shopify Apps
            </h2>
            <p>
              Every time you install a Shopify app, it often injects JavaScript code directly into your `theme.liquid` file. Even if you don't use the app, that code might still be loading for every single visitor.
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} /> <strong>The Purge:</strong> Go through your app list and blindly uninstall anything you haven't used in 30 days.</li>
              <li className="flex gap-3 items-start"><Code className="text-green shrink-0 mt-1" size={20} /> <strong>Clean the Code:</strong> Check your `theme.liquid` for leftover snippets. Many deleted apps leave ghost code behind that requires manual removal.</li>
            </ul>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">3</span> 
              Minimize App Embeds & Block Injections
            </h2>
            <p>
              Shopify Theme Architecture 2.0 uses App Embeds instead of hardcoded liquid scripts. This is vastly superior for speed.
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><Target className="text-green shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> Go to Theme Customizer &gt; App Embeds. Toggle OFF any embed you don't actively need running on the storefront.</li>
            </ul>

            <div className="bg-navy p-8 rounded-3xl text-white my-12 shadow-2xl font-sans">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="text-green" size={32} />
                <h3 className="text-2xl font-bold m-0 text-white">Want a Lightning Fast Theme?</h3>
              </div>
              <p className="text-white/70 mb-6">If your theme is deeply bloated with years of broken app code, sometimes it's cheaper and more effective to start fresh or have a developer rebuild it properly.</p>
              <button onClick={handleWhatsAppContact} className="bg-green text-navy font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-xl">
                <MessageCircle size={20} /> Chat with Me About a Theme Rebuild
              </button>
            </div>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">4</span> 
              System Fonts vs Custom Fonts
            </h2>
            <p>
              Custom web fonts (like downloading heavy files from Google Fonts or Adobe Fonts) cause "Flash of Unstyled Text" (FOUT) and significantly delay text rendering.
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><CheckCircle2 className="text-green shrink-0 mt-1" size={20} /> <strong>The Solution:</strong> Switch to System Fonts (like Inter, San Francisco, or Roboto) in your Shopify typography settings. They load instantly because they are already installed on your customer's device.</li>
            </ul>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">5</span> 
              Limit Third-Party Tracking Scripts
            </h2>
            <p>
              Having Facebook Pixel, TikTok Pixel, Google Analytics, Hotjar, and Klaviyo all firing simultaneously on page load will cripple any website's speed.
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><Package className="text-green shrink-0 mt-1" size={20} /> <strong>Google Tag Manager:</strong> Consolidate your tracking scripts into Google Tag Manager (GTM) and set non-essential tags to load asynchronously or delay slightly after page load.</li>
            </ul>
            
            <hr className="my-12 border-navy/10" />

            <h3 className="text-2xl font-bold text-navy mb-4 font-sans tracking-tight">Conclusion</h3>
            <p>
              Speed optimization is an ongoing process. Run your site through Google PageSpeed Insights before and after applying these fixes. Focus heavily on image sizes and app bloat, as those two factors account for 90% of sluggish Shopify experiences.
            </p>
          </div>

          <div className="pt-16 mt-16 border-t border-navy/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <Link to="/portfolio" className="flex items-center gap-6 group hover:bg-light p-4 rounded-3xl transition-colors -ml-4 pr-8">
              <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/bed47882db24771238091456bc69a699-1765207538189/19e070ae-9c29-498b-ac69-01114e131e68.png" alt="Sheun" className="w-20 h-20 rounded-full shadow-lg object-cover" />
              <div>
                <p className="font-bold text-navy text-xl group-hover:text-green transition-colors">By Sheun</p>
                <p className="text-sm text-navy/50 uppercase tracking-widest font-bold mb-1">Shopify Expert & Developer</p>
                <span className="text-navy font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">View Portfolio <ArrowRight size={14} /></span>
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
                <div key={i} className="bg-light p-8 rounded-[32px] border border-navy/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center text-navy font-bold">{comment.name.charAt(0)}</div>
                      <span className="font-bold text-navy text-lg">{comment.name}</span>
                    </div>
                    <span className="text-sm text-navy/40 font-serif italic">{comment.date}</span>
                  </div>
                  <p className="text-navy/70 leading-relaxed">{comment.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddComment} className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-navy/5 space-y-6">
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
            <div className="aspect-[16/10] rounded-[32px] overflow-hidden relative shadow-xl">
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
        </div>
      </section>
    </div>
  );
}
