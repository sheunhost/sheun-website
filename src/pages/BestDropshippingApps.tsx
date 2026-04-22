import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, MessageCircle, ShoppingBag, Star, Mail, Zap, Layout, Phone, Send, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BestDropshippingApps() {
  const [comments, setComments] = useState<{name: string, text: string}[]>([
    { name: "John D.", text: "Zendrop changed my business. Faster shipping than AliExpress!" }
  ]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("The Best Shopify Apps for Dropshipping Stores in 2026");

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
    const text = encodeURIComponent("Hi Sheun, I need help setting up the best apps for my dropshipping store!");
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
            <span className="bg-white/10 px-4 py-2 rounded-full text-white">Dropshipping</span>
            <div className="flex items-center gap-2"><Calendar size={16} /> April 8, 2026</div>
            <div className="flex items-center gap-2 text-green"><Clock size={16} /> 10 min read</div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight text-balance">
            The Best Shopify Apps for Dropshipping Stores in 2026
          </h1>

          <p className="text-xl text-white/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
            Stop guessing. This is the curated tech stack I recommend for every high-growth dropshipping store this year.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-16 border border-navy/5 space-y-12">
          
          <div className="aspect-video bg-light w-full rounded-3xl overflow-hidden shadow-inner mb-12 relative flex items-center justify-center group">
            <ShoppingBag className="absolute text-navy opacity-10 group-hover:scale-110 transition-transform duration-700" size={160} />
            <img src="https://picsum.photos/seed/blog3/1200/600" alt="Best Shopify Apps" className="w-full h-full object-cover rounded-3xl z-10 opacity-90" />
          </div>

            <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy prose-p:text-navy/80 prose-p:leading-relaxed font-sans">
            <p className="text-2xl leading-relaxed text-navy/90 mb-12">
              Success in dropshipping is no longer determined by who has the "trendiest" product, but by who has the most sophisticated operational systems. In 2026, the cost of customer acquisition (CAC) has reached an all-time high, making efficiency the only path to sustainable profit. To win, your Shopify "Tech Stack" needs to do three things beyond basic functionality: it must automate your supply chain, hyper-optimize your Average Order Value (AOV), and architect a level of trust that rivals traditional retail brands.
            </p>
            <p>
              I have audited and built hundreds of Shopify stores in my career. The most successful brands I work with don't have the *most* apps—they have the *right* apps. In this long-form guide, I am going to reveal the curated technical ecosystem I recommend for every high-growth dropshipping project this year.
            </p>
            
            <div className="flex items-start gap-4 bg-light p-8 rounded-xl border-l-8 border-green my-12">
              <ShieldCheck className="text-green shrink-0 mt-1" size={32} />
              <p className="text-lg font-sans font-medium text-navy m-0 italic">
                <strong>Budget Strategy:</strong> A common amateur mistake is installing 20+ apps hoping for a "miracle fix." Each app adds script weight to your theme. You must start with the "Core Four" pillars: Sourcing, Social Proof, Upsells, and Retention. Scale your stack only once you hit your first $10k month.
              </p>
            </div>

            <h2 className="text-4xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight border-b pb-4 border-navy/5">
              1. Sourcing & Supply Chain Automation: Zendrop
            </h2>
            <p>
              The era of 3-week shipping from AliExpress is dead. In a world dominated by Amazon Prime, if your shipping times exceed 10 days, your business is effectively a house of cards waiting for a payment processor ban. Fulfillment is the backbone of your brand reputation. 
            </p>
            <p>
              This is why <strong>Zendrop</strong> is my top recommendation for 2026. They have effectively bridged the gap between the low margins of dropshipping and the reliability of traditional warehousing. With localized fulfillment centers in the US and Europe, Zendrop allows you to offer shipping speeds that customers actually appreciate.
            </p>
            <h3 className="text-2xl font-bold text-navy mt-8 mb-4">Why Zendrop Wins the "Operational" War:</h3>
            <ul className="list-disc space-y-4 pl-6 text-navy/80 mb-8">
              <li><strong>Custom Branding:</strong> They allow you to include custom "thank you" cards and branded packaging, turning a generic dropshipping order into a branded unboxing experience.</li>
              <li><strong>Simplified Fulfillment:</strong> One-click fulfillment means you spend hours scaling your ads instead of hours managing orders.</li>
              <li><strong>Inventory Protection:</strong> They offer real-time inventory tracking, ensuring you never "over-sell" a product that is out of stock—a major cause of Shopify account suspensions.</li>
            </ul>

            <h2 className="text-4xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight border-b pb-4 border-navy/5">
              2. Trust Architecture & Social Proof: Loox
            </h2>
            <p>
              Trust is the currency of the internet. For a dropshipping store, you are asking a stranger to give you money for a product they have never touched. <strong>Loox</strong> is the most powerful tool I have used to bridge this gap. Standard text reviews are easy to fake and users know it. Loox focuses on <strong>Photo and Video Reviews</strong>—visual evidence that a real person received your product and liked it.
            </p>
            <p>
              When a visitor sees a "Review Highlights" slider on your homepage featuring real people in real environments, their psychological friction drops instantly. In 2026, I recommend using the "Video Review" incentive feature, where customers get a 15% discount code automatically emailed to them in exchange for a short 10-second video of the product in action. This doesn't just build trust; it generates the exact "User Generated Content" (UGC) you need for your TikTok ads.
            </p>

            <h2 className="text-4xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight border-b pb-4 border-navy/5">
              3. The "Silent Profit" of Post-Purchase Upsells: ReConvert
            </h2>
            <p>
              Most dropshippers go broke because they focus entirely on the "Front End" sale. If it costs you $20 to acquire a customer and they buy a $30 product with $10 in COGS (Cost of Goods Sold), you are at breakeven. You only make profit on the <strong>Upsell</strong>.
            </p>
            <p>
              <strong>ReConvert</strong> allows you to turn your "Thank You" page—the most visited page on your store after the home page—into a secondary storefront. By offering a "one-click" discount on a related item immediately after they have entered their credit card details, you increase your Average Order Value (AOV) without increasing your ad spend. This is literally free money that goes straight to your bottom line.
            </p>

            <div className="bg-navy p-12 rounded-3xl text-white my-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] font-sans">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-green/20 rounded-2xl flex items-center justify-center">
                  <Layout className="text-green" size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold m-0 text-white">Build Your Elite Tech Stack</h3>
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold mt-1">Full-Scale App Integration & Optimization</p>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Apps are only half the battle. If your theme code is a mess, high-end apps will just slow you down. I help my clients build a lean, lightning-fast foundation first, then integrate these high-conversion tools to maximize every visitor.
              </p>
              <button onClick={handleWhatsAppContact} className="bg-green text-navy font-bold px-10 py-5 rounded-full flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
                <MessageCircle size={24} /> Build My Dropshipping Stack
              </button>
            </div>

            <h2 className="text-4xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight border-b pb-4 border-navy/5">
              4. Lifecycle Marketing & Retention: Klaviyo
            </h2>
            <p>
              "The fortune is in the follow-up." If you aren't capturing emails and phone numbers, you are building your business on rented land. <strong>Klaviyo</strong> is the industry standard for a reason. Its deep integration with Shopify data allows you to send "Behavior-Based" messages.
            </p>
            <p>
              In 2026, your "Flow Architecture" should include:
            </p>
            <ul className="list-disc space-y-4 pl-6 text-navy/80 mb-8">
              <li><strong>The Advanced Abandoned Cart:</strong> Don't just send one email. Send a three-part series over 48 hours, moving from a gentle reminder to a limited-time incentive.</li>
              <li><strong>The "Win-Back" Series:</strong> Automatically target customers who haven't purchased in 60 days with a "We miss you" offer designed to reignite their interest.</li>
              <li><strong>Custom Segmentation:</strong> Send different messages to your "High Spenders" versus your "Discount Hunters." </li>
            </ul>

            <h2 className="text-4xl font-bold text-navy mt-16 mb-8 font-sans tracking-tight border-b pb-4 border-navy/5">
              5. Speed & Technical SEO Governance: SEO Booster
            </h2>
            <p>
              While paid ads are great for "lighting the fire," SEO is what keeps the warmth for years. Most dropshipping stores have terrible SEO because they use manufacturer-provided product descriptions and unoptimized image names. 
            </p>
            <p>
              <strong>SEO Booster</strong> automates the technical "heavy lifting." It optimizes your Alt-tags (crucial for appearing in Google Image search), fixes broken 404 links that frustrate users and spiders alike, and ensures your JSON-LD data is correctly structured so your star ratings appear directly in the search results.
            </p>

            <hr className="my-12 border-navy/10" />

            <h3 className="text-2xl font-bold text-navy mb-4 font-sans tracking-tight">Executive Summary</h3>
            <p>
              Your app strategy should be a scalpel, not a sledgehammer. In 2026, the brands that thrive are the ones that use technology to <strong>reduce friction</strong> for the customer and <strong>increase efficiency</strong> for the owner. Start with these five pillars, monitor your speed score constantly, and remember: an app is only as good as the strategy behind it.
            </p>
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
            
            <div className="w-full md:w-auto text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40 mb-4">Share Article</p>
              <div className="flex items-center justify-end gap-3 flex-wrap">
                <button onClick={handleTwitterShare} className="w-10 h-10 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-navy hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </button>
                <button onClick={handleLinkedinShare} className="w-10 h-10 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors">
                  <Linkedin size={18} />
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
          <Link to="/blog/4" className="group space-y-6 block">
            <div className="aspect-[16/10] rounded-xl overflow-hidden relative shadow-xl">
              <img src="https://picsum.photos/seed/fashion-blog/800/600" alt="Related Post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-xl text-navy text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-xl">Dropshipping</span>
              </div>
            </div>
            <div className="space-y-4 px-4">
              <h4 className="text-2xl font-bold text-navy group-hover:text-green transition-colors leading-tight tracking-tight">Fashion Dropshipping Store Guide</h4>
              <div className="flex items-center gap-3 text-xs text-navy/40 font-bold uppercase tracking-widest">
                <Clock size={16} className="text-green" /> 15 min read
              </div>
            </div>
          </Link>

          <Link to="/blog/2" className="group space-y-6 block">
            <div className="aspect-[16/10] rounded-xl overflow-hidden relative shadow-xl">
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
