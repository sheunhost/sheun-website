import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  CheckCircle2, 
  Settings, 
  DollarSign, 
  Sliders, 
  Globe, 
  Lock, 
  Truck, 
  Users, 
  Zap, 
  Code2, 
  Mail, 
  Search,
  MessageSquare,
  Send
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import BlogArticleHeader from "../components/BlogArticleHeader";
import SocialShare from "../components/SocialShare";
import { PullQuote, CalloutBox } from "../components/BlogDeepDive";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { blogPostsData } from "../data/blogPostsData";

const shopifySettings = [
  {
    number: "01",
    title: "Multi-Currency Price Rounding (Shopify Markets)",
    killer: "Leaving currency conversion unrounded leads to odd prices like €43.17 or £29.83, signaling an unlocalized, amateur store.",
    fix: "Enable automatic rounding rules in Shopify Markets to display clean aesthetic prices like €45.00 or £30.00.",
    example: "Go to Settings > Markets > Preferences and enable 'Price Rounding'. This immediately reduces international bounce rates.",
    icon: DollarSign
  },
  {
    number: "02",
    title: "Dynamic Checkout Buttons Overload",
    killer: "Showing 'Buy with PayPal' or 'Shop Pay' directly on product pages can confuse multi-item buyers and bypass critical bundle apps.",
    fix: "Audit your product template settings. For stores with high Average Order Value (AOV) and bundle offers, route users through an optimized cart drawer instead.",
    example: "Customize Theme > Product Page > Buy Buttons > Toggle 'Show dynamic checkout buttons' based on your specific AOV funnel strategy.",
    icon: Sliders
  },
  {
    number: "03",
    title: "International Duties & Import Tax Inclusion",
    killer: "Surprise customs fees upon delivery cause customer complaints, chargebacks, and refused packages.",
    fix: "Enable Delivered Duty Paid (DDP) calculation directly in Shopify Markets settings.",
    example: "Settings > Taxes and duties > Enable 'Collect duties and import taxes at checkout' to establish transparent cross-border checkout.",
    icon: Globe
  },
  {
    number: "04",
    title: "Payment Authorization Capture Timing",
    killer: "Default settings automatically capture funds immediately. For custom-made or dropshipped items with lead times, this complicates cancellations and refunds.",
    fix: "Set payment capture to manual if your fulfillment window exceeds 48 hours to avoid merchant processing penalties.",
    example: "Settings > Payments > Payment capture method > Select 'Manually capture payment for orders'.",
    icon: Lock
  },
  {
    number: "05",
    title: "Backup & Tiered Shipping Profiles",
    killer: "If a carrier API suffers downtime or an order exceeds standard weight brackets, checkout throws a 'Cannot ship to this address' error.",
    fix: "Always configure fallback standard rates in your general and custom shipping profiles.",
    example: "Settings > Shipping and delivery > General shipping rates > Add backup flat rates for all primary operational zones.",
    icon: Truck
  },
  {
    number: "06",
    title: "New Customer Accounts vs. Legacy Login",
    killer: "Legacy passwords create login friction and forgotten password drop-offs.",
    fix: "Switch to Shopify's New Customer Accounts for one-time passcode login via email, speeding up access and re-orders.",
    example: "Settings > Customer accounts > Choose 'New customer accounts' to remove password friction.",
    icon: Users
  },
  {
    number: "07",
    title: "Shopify Web Pixels API vs. Header Script Bloat",
    killer: "Pasting raw tracking scripts into theme.liquid or checkout additional scripts blocks rendering and slows mobile Core Web Vitals.",
    fix: "Migrate tracking tags (Meta Pixel, Google Tag, TikTok) to the native Shopify Customer Events / Web Pixels sandbox.",
    example: "Settings > Customer events > Add custom pixel. This runs analytics scripts asynchronously without degrading your page load time.",
    icon: Zap
  },
  {
    number: "08",
    title: "Metafields & Metaobjects for Product Specifications",
    killer: "Hardcoding size guides, materials, and care instructions in the product description creates messy styling and inconsistent mobile UX.",
    fix: "Use native Shopify Metafields mapped dynamically to Theme 2.0 collapsible row sections.",
    example: "Settings > Custom data > Products > Add Metafield definition (e.g., 'Fabric Composition', 'Care Instructions').",
    icon: Code2
  },
  {
    number: "09",
    title: "Abandoned Checkout Recovery Timing",
    killer: "Default Shopify abandoned checkout notification is sent after 10 hours, when buyer interest has cooled down.",
    fix: "Adjust recovery delivery to send within 1 to 2 hours for maximum conversion retrieval, or migrate to Klaviyo automated flows.",
    example: "Settings > Checkout > Abandoned checkouts > Send after 1 hour.",
    icon: Mail
  },
  {
    number: "10",
    title: "Homepage SEO Title & Meta Description in Preferences",
    killer: "Leaving Online Store > Preferences blank causes search engines to display generic fallback text like 'Home - My Store'.",
    fix: "Write a high-intent homepage title and meta description incorporating your primary brand keyword and value proposition.",
    example: "Online Store > Preferences > Title and meta description > Fill in explicit brand and service keywords.",
    icon: Search
  }
];

export default function ShopifySettingsGuide({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [comments, setComments] = useState<{name: string, text: string}[]>(() => {
    const saved = localStorage.getItem('comments_ShopifySettings');
    if (saved) return JSON.parse(saved);
    return [
      { name: "Sarah K.", text: "The tip on Web Pixels API instead of header scripts cut our mobile load time by over 1.2 seconds. Excellent breakdown!" },
      { name: "David M.", text: "Fixing our Shopify Markets price rounding immediately increased our UK and EU checkout completion rates." }
    ];
  });

  useEffect(() => {
    localStorage.setItem('comments_ShopifySettings', JSON.stringify(comments));
  }, [comments]);

  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && commentName.trim()) {
      setComments([...comments, { name: commentName, text: newComment }]);
      setNewComment("");
      setCommentName("");
    }
  };

  const articleBody = (
    <div className="container mx-auto px-6 max-w-4xl py-12">
      <div className="prose prose-lg max-w-none text-navy/80 dark:text-white/80 leading-relaxed font-serif italic mb-10">
        <p className="text-xl md:text-2xl text-navy/90 dark:text-white/90">
          Building a successful Shopify store isn't just about selecting a modern theme and driving ad traffic. Behind the scenes, subtle configuration oversights in your Shopify admin settings silently leak conversions, increase checkout drop-offs, and hinder international revenue.
        </p>
      </div>

      <div className="space-y-6 my-12">
        {shopifySettings.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#8B5CF6]/30 transition-all shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center shrink-0">
                  <Icon size={24} />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#8B5CF6] uppercase tracking-wider">Setting {item.number}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy dark:text-white font-sans">{item.title}</h3>
                  
                  <div className="space-y-2 pt-1 text-sm">
                    <div className="flex items-start gap-2.5 text-red-600 dark:text-red-400 font-medium">
                      <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                      <p><strong>The Mistake:</strong> {item.killer}</p>
                    </div>
                    <div className="flex items-start gap-2.5 text-emerald-600 dark:text-emerald-400 font-medium">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                      <p><strong>The Fix:</strong> {item.fix}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-navy/50 border border-navy/5 dark:border-white/5 text-xs sm:text-sm text-navy/70 dark:text-white/70">
                    <strong>How to configure:</strong> {item.example}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <PullQuote>
        "The best Shopify stores aren't the ones with the most apps—they're the ones where every native setting is dialed in for frictionless buyer experience."
      </PullQuote>

      <CalloutBox title="Need a Full Storefront & Settings Audit?">
        If you want an experienced Shopify developer to audit your backend configuration, verify your tracking pixels, and eliminate speed bottlenecks, check out our <Link to="/shopify-store-audit" className="font-bold underline text-[#8B5CF6]">48-Hour Shopify Store Audit</Link> or get in touch for custom setup support.
      </CalloutBox>

      {/* Discussion / Comments */}
      <div className="mt-16 pt-12 border-t border-navy/10 dark:border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="w-6 h-6 text-[#8B5CF6]" />
          <h3 className="text-2xl font-bold text-navy dark:text-white">Discussion & Comments ({comments.length})</h3>
        </div>
        
        <div className="space-y-6 mb-12">
          {comments.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-light dark:bg-white/5 border border-navy/5 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] font-bold flex items-center justify-center text-xs">
                  {c.name.charAt(0)}
                </div>
                <span className="font-bold text-navy dark:text-white text-sm">{c.name}</span>
              </div>
              <p className="text-navy/70 dark:text-white/70 text-sm leading-relaxed pl-11">{c.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddComment} className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy/60 border border-navy/10 dark:border-white/10 space-y-4">
          <h4 className="font-bold text-navy dark:text-white text-lg mb-2">Leave a Comment</h4>
          <div>
            <label className="text-xs font-bold text-navy/50 dark:text-white/50 uppercase tracking-wider block mb-1">Name *</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              className="w-full p-3 rounded-xl bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 text-navy dark:text-white text-sm focus:outline-none focus:border-[#8B5CF6]"
              required
            />
          </div>
          <div>
            <label className="text-xs font-bold text-navy/50 dark:text-white/50 uppercase tracking-wider block mb-1">Your Comment *</label>
            <textarea 
              rows={4}
              placeholder="Share your thoughts or questions about Shopify settings..." 
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-3 rounded-xl bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 text-navy dark:text-white text-sm focus:outline-none focus:border-[#8B5CF6] resize-none"
              required
            />
          </div>
          <button 
            type="submit"
            className="px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold rounded-xl text-sm transition-all shadow-md inline-flex items-center gap-2"
          >
            Post Comment <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );

  if (isEmbedded) {
    return articleBody;
  }

  const postData = blogPostsData["1"];

  return (
    <PageWrapper
      title="10 Shopify Settings Most Store Owners Miss | Sheun Hub"
      description="Audit hidden Shopify admin settings to boost conversion rates, optimize checkout pipelines, and streamline global delivery for international brands."
      keywords="Shopify Settings Guide, Shopify Backend Settings, Shopify checkout audit, Shopify international markets setup, Shopify configuration tips"
      canonical="/shopify-settings-guide"
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&auto=format&fit=crop&q=80"
      type="article"
      articlePublishedTime="2026-04-12T08:00:00Z"
      articleModifiedTime="2026-09-21T08:00:00Z"
      articleAuthor="Emmanuel Adedayo (Sheun)"
      articleSection="Shopify Tips"
    >
      <BlogArticleHeader post={postData} />
      <main className="bg-white dark:bg-navy">
        {articleBody}
      </main>
      <div className="container mx-auto px-6 max-w-4xl">
        <SocialShare
          url="https://www.sheun.online/shopify-settings-guide"
          title={postData.heading}
          description={postData.description}
          image={postData.image}
          category={postData.category}
        />
      </div>
    </PageWrapper>
  );
}
