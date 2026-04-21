import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, MessageCircle, ShoppingBag, Star, Mail, Zap, Layout, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BlogPost3() {
  const [comments, setComments] = useState<{name: string, text: string, date: string}[]>([
    { name: "John D.", text: "Zendrop changed my business. Faster shipping than AliExpress!", date: "April 9, 2026" }
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("The Best Shopify Apps for Dropshipping Stores in 2025");

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
    const text = encodeURIComponent("Hi Sheun, I need help setting up the best apps for my dropshipping store!");
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
            <span className="bg-white/10 px-4 py-2 rounded-full text-white">Dropshipping</span>
            <div className="flex items-center gap-2"><Calendar size={16} /> April 8, 2026</div>
            <div className="flex items-center gap-2 text-green"><Clock size={16} /> 10 min read</div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight text-balance">
            The Best Shopify Apps for Dropshipping Stores in 2025
          </h1>

          <p className="text-xl text-white/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
            Stop guessing. This is the curated tech stack I recommend for every high-growth dropshipping store this year.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-navy/5 space-y-12">
          
          <div className="aspect-video bg-light w-full rounded-3xl overflow-hidden shadow-inner mb-12 relative flex items-center justify-center group">
            <ShoppingBag className="absolute text-navy opacity-10 group-hover:scale-110 transition-transform duration-700" size={160} />
            <img src="https://picsum.photos/seed/blog3/1200/600" alt="Best Shopify Apps" className="w-full h-full object-cover rounded-3xl z-10 opacity-90" />
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy prose-p:text-navy/80 prose-p:leading-loose font-serif">
            <p>
              Success in dropshipping in 2025 isn't about having the coolest product—it's about having the most efficient systems. With the rising cost of ads and increased competition, your "Tech Stack" needs to do three things: Automate your fulfillment, Increase your Average Order Value (AOV), and Build Trust.
            </p>
            <p>
              I've built and scaled dozens of stores, and these are the absolute must-have apps that I install on every single one of my client's projects.
            </p>
            
            <div className="flex items-start gap-4 bg-light p-6 rounded-2xl border-l-4 border-green my-8">
              <ShieldCheck className="text-green shrink-0 mt-1" size={28} />
              <p className="text-sm md:text-base font-sans font-medium text-navy m-0 italic">
                <strong>Budget Tip:</strong> Don't install 20 apps at once. Start with the core 3 (Sourcing, Reviews, and Email) to keep your monthly overhead low while you test.
              </p>
            </div>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">1</span> 
              Sourcing & Fulfillment: Zendrop
            </h2>
            <p>
              Forget AliExpress. The long shipping times will kill your business in 2025. Zendrop provides faster shipping, US-based suppliers, and a much cleaner interface for connecting your store to reliable products.
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><Zap className="text-green shrink-0 mt-1" size={20} /> <strong>Why it wins:</strong> Custom branding options, one-click fulfillment, and auto-thank you notes for your customers.</li>
            </ul>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">2</span> 
              Social Proof: Loox Reviews
            </h2>
            <p>
              In dropshipping, trust is everything. Loox allows you to collect photo and video reviews, which are 5x more effective than text reviews. 
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><Star className="text-green shrink-0 mt-1" size={20} /> <strong>The Power Move:</strong> Reward customers with a discount code for uploading a video review. It builds trust and generates repeat sales.</li>
            </ul>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">3</span> 
              Post-Purchase Upsells: ReConvert
            </h2>
            <p>
              Your most profitable customer is the one who just bought from you. ReConvert allows you to customize the "Thank You" page with upsells, cross-sells, and surveys.
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><TrendingUp className="text-green shrink-0 mt-1" size={20} /> <strong>Result:</strong> Increase your AOV by 15-20% immediately without spending an extra cent on marketing.</li>
            </ul>

            <div className="bg-navy p-8 rounded-3xl text-white my-12 shadow-2xl font-sans">
              <div className="flex items-center gap-4 mb-4">
                <Layout className="text-green" size={32} />
                <h3 className="text-2xl font-bold m-0 text-white">Scale Your Infrastructure</h3>
              </div>
              <p className="text-white/70 mb-6">Apps are great, but they only work if your store's foundation is built for speed and conversion. I help brands integrate these tools seamlessly.</p>
              <button onClick={handleWhatsAppContact} className="bg-green text-navy font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-xl">
                <MessageCircle size={20} /> Build My Dropshipping Stack
              </button>
            </div>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">4</span> 
              Marketing Automation: Klaviyo
            </h2>
            <p>
              If you aren't doing email marketing, you're leaving 30% of your revenue on the table. Klaviyo is the industry standard for Shopify.
            </p>
            <ul className="list-none space-y-3 font-sans text-base pl-0">
              <li className="flex gap-3 items-start"><Mail className="text-green shrink-0 mt-1" size={20} /> <strong>Must-Have Flows:</strong> Abandoned Cart, Welcome Series, and Post-Purchase Upsells.</li>
            </ul>

            <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
              <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">5</span> 
              SEO & Speed: SEO Booster
            </h2>
            <p>
              Ads bring traffic, but SEO brings longevity. This app automates your alt-tags, meta titles, and helps fix broken links that cost you rankings.
            </p>
            
            <hr className="my-12 border-navy/10" />

            <h3 className="text-2xl font-bold text-navy mb-4 font-sans tracking-tight">Final Thoughts</h3>
            <p>
              The right apps can make your life as a dropshipper 10x easier, but remember: the product and the offer always come first. Use these tools to augment your business, not to fix a fundamentally broken product choice.
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

          <Link to="/blog/2" className="group space-y-6 block">
            <div className="aspect-[16/10] rounded-[32px] overflow-hidden relative shadow-xl">
              <img src="https://picsum.photos/seed/blog2/800/600" alt="Related Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-xl text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">Shopify Tips</span>
              </div>
            </div>
            <div className="space-y-4 px-4">
              <h4 className="text-2xl font-bold text-navy group-hover:text-green transition-colors leading-tight tracking-tight">How to Speed Up Your Shopify Store in 2025</h4>
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
