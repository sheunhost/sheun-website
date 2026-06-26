import { motion } from "framer-motion";
import { Clock, Calendar, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, AlertTriangle, Settings, Mail, Target, Phone, User, Send, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";

export default function ShopifySettingsGuide() {
  const [comments, setComments] = useState<{name: string, text: string}[]>(() => {
    const saved = localStorage.getItem('comments_ShopifySettings');
    if (saved) return JSON.parse(saved);
    return [
      { name: "Alex R.", text: "This is super helpful. I didn't even realize my checkout was missing phone numbers!" },
      { name: "Sarah J.", text: "Great tips! The image compression one saved my site speed immensely." }
    ];
  });

  useEffect(() => {
    localStorage.setItem('comments_ShopifySettings', JSON.stringify(comments));
  }, [comments]);
  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent("10 Shopify Settings Most Store Owners Miss");

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
    const text = encodeURIComponent("Hi Sheun, I read your article about Shopify settings and I'd like an audit for my store.");
    window.open(`https://wa.me/2348084315743?text=${text}`, "_blank");
  };

  return (
    <PageWrapper
      className="pt-32 pb-24 bg-white relative"
      title="Shopify Backend Settings Optimization Guide (UK, US, CA, AU, FR, DE)"
      description="Hidden Shopify settings to boost conversion rates, optimize checkout checkout pipelines, and streamline global delivery. Expert setup audit tips for international merchants."
      keywords="Shopify Settings Guide, Shopify Backend Settings, Shopify checkout audit, Shopify international markets setup, Shopify expert UK, Shopify developer Canada, Shopify consultant Germany"
      canonical="/blog/shopify-settings-guide"
      schema={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Ultimate Guide to Shopify Backend Settings in 2026",
        "author": {
          "@type": "Person",
          "name": "Sheun"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sheun Hub",
          "logo": {
            "@type": "ImageObject",
            "url": "https://i.postimg.cc/wxQgVCcf/1000031270-removebg-preview.png"
          }
        },
        "description": "Hidden Shopify settings to increase sales and streamline operations. Master the Shopify backend to scale your eCommerce business."
      }}
    >
        {/* Header Section */}
        <section className="bg-navy-gradient pt-16 pb-32 px-6 rounded-b-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,255,157,0.1)_0%,_transparent_70%)]" />
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
            <nav className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
              <Link to="/" className="hover:text-green transition-colors flex items-center gap-2"><ArrowLeft size={14} /> Home</Link>
              <span className="opacity-30">/</span>
              <Link to="/blog" className="hover:text-green transition-colors">Blog</Link>
              <span className="opacity-30">/</span>
              <span className="text-white">Article</span>
            </nav>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
              <span className="bg-white/10 px-4 py-2 rounded-full text-white">Shopify Tips</span>
              <div className="flex items-center gap-2"><Calendar size={16} /> April 12, 2026</div>
              <div className="flex items-center gap-2 text-green"><Clock size={16} /> 8 min read</div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight text-balance">
              10 Shopify Settings Most Store Owners Miss <span className="italic font-serif font-light text-white/60">(And Why They Cost You Sales)</span>
            </h1>

            <p className="text-xl text-white/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
              Discover the hidden settings in your Shopify admin that can make or break your store's conversion rate. Don't leave money on the table due to simple oversights.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-6 -mt-16 relative z-20">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-16 border border-navy/5 space-y-12">
            
            <div className="aspect-video bg-light w-full rounded-3xl overflow-hidden shadow-inner mb-12 relative flex items-center justify-center group">
              <Settings className="absolute text-navy opacity-10 group-hover:scale-110 transition-transform duration-700" size={160} />
              <img src="https://picsum.photos/seed/blog1/1200/600" alt="Shopify settings" className="w-full h-full object-cover rounded-3xl z-10 opacity-90" />
            </div>

            <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy prose-p:text-navy/80 prose-p:leading-relaxed font-sans">
              <p>
                You’ve spent weeks perfecting your theme, sourcing products, and running ads. Traffic is flowing, but conversions are stagnant. Sound familiar? 
              </p>
              <p>
                As a Shopify developer who has audited over 150+ stores, I’ve noticed a pattern. The issue isn't always the product or the design. More often than not, the culprit lies deep within the Shopify Admin settings—toggles and checkboxes that are easily overlooked but have a massive impact on the user's checkout experience.
              </p>
              
              <div className="flex items-start gap-4 bg-light p-6 rounded-2xl border-l-4 border-green my-8">
                <ShieldCheck className="text-green shrink-0 mt-1" size={28} />
                <p className="text-sm md:text-base font-sans font-medium text-navy m-0 italic">
                  <strong>Pro Tip:</strong> Before changing core settings, always test your checkout flow in an incognito window to see exactly what your customers see.
                </p>
              </div>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">1</span> 
                Customer Contact Method
              </h2>
              <p>
                By default, Shopify allows customers to check out using either their phone number or email address. While offering choices seems good, checking out with a phone number alone means you cannot send them email marketing campaigns or proper cart abandonment flows via Klaviyo.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-green shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> Go to Settings &gt; Checkout. Under "Customer contact method", select "Email". Rest assured, you can still collect phone numbers for SMS marketing later in the flow.</li>
              </ul>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">2</span> 
                Preselecting the Email Sign-Up
              </h2>
              <p>
                Building a mailing list is arguably one of the highest ROI activities for an eCommerce brand. Many store owners forget to check the box that pre-selects the "Sign up for email marketing" option at checkout.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><Target className="text-green shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> In Settings &gt; Checkout, scroll to "Consent for marketing" and check "Preselect the sign-up option". Watch your subscriber list grow seamlessly.</li>
              </ul>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">3</span> 
                Shipping Address Phone Number
              </h2>
              <p>
                Couriers often require a phone number for successful delivery. If a package bounces because the driver couldn't call the customer, it costs you time, money, and ruins the customer experience.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> In Settings &gt; Checkout &gt; "Customer information", change "Shipping address phone number" from Optional to Required.</li>
              </ul>

              <div className="bg-navy p-8 rounded-3xl text-white my-12 shadow-2xl font-sans">
                <div className="flex items-center gap-4 mb-4">
                  <TrendingUp className="text-green" size={32} />
                  <h3 className="text-2xl font-bold m-0 text-white">Need a Second Pair of Eyes?</h3>
                </div>
                <p className="text-white/70 mb-6">If these basic settings are misconfigured, imagine what technical SEO or conversion blockers might exist on your product pages.</p>
                <Link to="/apply#apply-form" className="bg-green text-navy font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-xl w-fit">
                  Get a Free Store Audit <ArrowRight size={20} />
                </Link>
              </div>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">4</span> 
                Manual Order Fulfillment
              </h2>
              <p>
                Unless you are selling pre-orders or utilizing a highly specific dropshipping app that requires manual review, setting order fulfillment to manual will drastically slow down your shipping times.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-green shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> Settings &gt; Checkout &gt; "Order processing". Select "Automatically fulfill the order's line items."</li>
              </ul>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">5</span> 
                Image Compression Settings (Theme Specific)
              </h2>
              <p>
                While not purely in the settings dashboard, your theme settings hold the key to your site speed. Uploading 4MB images will destroy your Lighthouse score. Always ensure you are checking the "lazy load" boxes in your theme customizer and running your images through an auto-compressor app or tool.
              </p>
              
              <hr className="my-12 border-navy/10" />

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">6</span> 
                Abandoned Checkout Automations
              </h2>
              <p>
                Shopify has a built-in abandoned checkout recovery system, but by default, it waits 10 hours to send a generic, plain-text email. That's way too late for most impulse buyers.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><CheckCircle2 className="text-green shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> Go to Settings &gt; Checkout &gt; Abandoned Checkouts. Change the send time to 1 Hour and customize the email template to include a clear CTA and perhaps a small discount code.</li>
              </ul>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">7</span> 
                Shop Pay & Accelerated Checkouts
              </h2>
              <p>
                Friction is the enemy of conversion. Making a customer manually type out their credit card details and address on a mobile device is a guaranteed way to lose sales.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><Target className="text-green shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> In Settings &gt; Payments, ensure accelerated checkouts like Shop Pay, Apple Pay, and Google Pay are activated. Shop Pay alone can boost conversion rates by up to 18%.</li>
              </ul>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">8</span> 
                Brand Customization on Checkout
              </h2>
              <p>
                Many store owners spend thousands on a beautiful theme but leave the Shopify checkout completely default. A generic checkout breaks trust right at the most sensitive moment: entering credit card info.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><AlertTriangle className="text-amber-500 shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> Go to Settings &gt; Checkout &gt; Customize. Add your logo, match the button colors to your brand, and use your brand's primary font for consistency.</li>
              </ul>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">9</span> 
                Store Policies & Legal Pages
              </h2>
              <p>
                Without clear refund policies, Terms of Service, and Shipping info linked directly in your checkout footer, you will trigger trust issues for skeptical buyers.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><ShieldCheck className="text-green shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> Navigate to Settings &gt; Policies. Generate from templates if you have to, but ensure they exist and are assigned to your footer navigation.</li>
              </ul>

              <h2 className="flex items-center gap-4 text-3xl font-bold text-navy mt-12 mb-6 font-sans tracking-tight">
                <span className="w-10 h-10 bg-navy text-white flex items-center justify-center rounded-xl text-lg">10</span> 
                Multiple Markets Localization
              </h2>
              <p>
                If you ship internationally, you are leaving massive money on the table if customers are forced to view prices in your local currency.
              </p>
              <ul className="list-none space-y-3 font-sans text-base pl-0">
                <li className="flex gap-3 items-start"><TrendingUp className="text-green shrink-0 mt-1" size={20} /> <strong>The Fix:</strong> Go to Settings &gt; Markets. Enable international markets so customers can shop in their local currency and language automatically over Shopify Markets.</li>
              </ul>

              <hr className="my-12 border-navy/10" />

              <h3 className="text-2xl font-bold text-navy mb-4 font-sans tracking-tight">The Bottom Line</h3>
              <p>
                Shopify is powerful out of the box, but it is built to cater to millions of different business types. By tweaking these 10 core settings, you tailor the platform to prioritize high-converting eCommerce best practices. Focus on reducing friction, and the sales will follow.
              </p>
            </div>

            {/* Author / Social / CTA */}
            <div className="pt-16 mt-16 border-t border-navy/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              <Link to="/portfolio" className="flex items-center gap-6 group hover:bg-light p-4 rounded-3xl transition-all -ml-4 pr-8 border border-transparent hover:border-navy/5">
                <div className="relative">
                  <div className="absolute inset-0 bg-green/20 rounded-full blur-xl group-hover:bg-green/40 transition-colors" />
                  <img src="https://ui-avatars.com/api/?name=Sheun+Hub&background=10b981&color=fff" alt="Sheun" className="w-20 h-20 rounded-full shadow-lg object-cover relative z-10 border-2 border-white" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-navy text-xl group-hover:text-green transition-colors leading-tight">By Sheun Hub</p>
                  <p className="text-sm text-navy/50 uppercase tracking-widest font-bold mb-1">Shopify Expert & Developer</p>
                  <span className="text-navy font-bold text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform">View Portfolio & Contact <ArrowRight size={14} /></span>
                </div>
              </Link>
              
              <div className="w-full md:w-auto">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40 mb-4 md:text-right">Share Article</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <button onClick={handleLinkedinShare} className="w-12 h-12 flex items-center justify-center bg-light border border-navy/10 text-navy rounded-full hover:bg-green hover:text-navy transition-colors shadow-sm focus:outline-none focus:ring-4 focus:ring-green/20 overflow-hidden" title="Share on LinkedIn">
                    <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
                  </button>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="pt-16 mt-16 border-t border-navy/5">
              <div className="flex items-center gap-4 mb-10">
                <MessageSquare className="w-7 h-7 text-green" />
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
                    <input 
                      type="text" 
                      required 
                      value={commentName} 
                      onChange={(e) => setCommentName(e.target.value)} 
                      className="w-full bg-light border-b-2 border-navy/5 hover:border-navy/20 hover:bg-white rounded-3xl py-4 px-6 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20" 
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold text-navy/50 uppercase tracking-[0.2em] ml-4">Your Context / Comment *</label>
                    <textarea 
                      required 
                      value={newComment} 
                      onChange={(e) => setNewComment(e.target.value)} 
                      rows={4} 
                      className="w-full bg-light border-b-2 border-navy/5 hover:border-navy/20 hover:bg-white rounded-3xl py-4 px-6 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20 resize-none" 
                      placeholder="Share your thoughts..."
                    />
                  </div>
                </div>
                <button type="submit" className="bg-navy text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-green hover:text-navy transition-all duration-300 shadow-xl">
                  Post Comment <Send size={16} />
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* Read Next Section */}
        <section className="container mx-auto px-6 mt-32">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-4xl font-bold text-navy tracking-tight">Related Posts</h3>
            <p className="text-navy/40 font-serif italic text-lg">More insights on Shopify Tips and eCommerce growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
      </PageWrapper>
  );
}
