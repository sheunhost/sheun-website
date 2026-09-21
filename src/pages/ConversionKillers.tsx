import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  MousePointer2, 
  ShoppingBag, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  MessageSquare, 
  Send 
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import BlogArticleHeader from "../components/BlogArticleHeader";
import SocialShare from "../components/SocialShare";
import { generateContentBlocks, faqsData } from "../data/blogExpandedData";
import { PullQuote, CalloutBox, FAQSection } from "../components/BlogDeepDive";
import { blogPostsData } from "../data/blogPostsData";

const conversionKillers = [
  {
    title: "Weak Hero Copy (The 'Welcome' Trap)",
    killer: "Vague headlines like 'Welcome to our store' or 'Quality products for you.'",
    fix: "Use a benefit-driven headline that answers 'What is in it for me?' within 3 seconds.",
    example: "Instead of 'Best Eco-Friendly Shop', use 'The Last Reusable Water Bottle You'll Ever Buy: Guaranteed for Life.'",
    icon: MessageSquare
  },
  {
    title: "Missing Trust Signals",
    killer: "No reviews, no physical address, or generic 'Secure Checkout' badges that look like clip-art.",
    fix: "Real customer photos, specific industry certifications, and a clear 'About Us' that shows real humans.",
    example: "A beauty brand increased sales by 22% just by adding 'Dermatologist Tested' and 500+ verified customer reviews above the fold.",
    icon: ShieldCheck
  },
  {
    title: "Low-Fidelity Product Images",
    killer: "Low-res photos, inconsistent lighting, or no lifestyle shots showing the product in practical use.",
    fix: "High-resolution studio shots on neutral backgrounds paired with 2-3 lifestyle images.",
    example: "An apparel store replaced flat-lay phone photos with professional model shots, cutting their 'Add to Cart' bounce rate by nearly half.",
    icon: ShoppingBag
  },
  {
    title: "Confusing Navigation Hierarchy",
    killer: "Mega-menus with 50+ links or vague categories like 'Stuff' and 'Collection 1'.",
    fix: "Simplify to 4-6 primary categories based on how customers actually search.",
    example: "One tech accessory store consolidated a 12-item header into 4 clear categories (iPhone, Samsung, Mac, Sale), lifting browsing depth by 15%.",
    icon: MousePointer2
  },
  {
    title: "The Mobile Speed Wall",
    killer: "Large unoptimized images and 20+ apps fighting for control, leading to a 5+ second mobile load time.",
    fix: "Remove unused apps and use Shopify's native liquid optimization for responsive image loading.",
    example: "A kitchenware store improved their mobile PageSpeed score from 32 to 85, directly lifting mobile conversion rates by 30%.",
    icon: Smartphone
  }
];

export default function ConversionKillers({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [comments, setComments] = useState<{name: string, text: string}[]>(() => {
    const saved = localStorage.getItem('comments_ConversionKillers');
    if (saved) return JSON.parse(saved);
    return [
      { name: "Marcus L.", text: "Simplifying our navigation from 11 links down to 4 categories increased our average time on site and lifted sales immediately." }
    ];
  });

  useEffect(() => {
    localStorage.setItem('comments_ConversionKillers', JSON.stringify(comments));
  }, [comments]);

  const [newComment, setNewComment] = useState("");
  const [commentName, setCommentName] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if(newComment.trim() && commentName.trim()) {
      setComments([...comments, { name: commentName, text: newComment }]);
      setNewComment("");
      setCommentName("");
    }
  };

  const articleBody = (
    <div className="container mx-auto px-6 max-w-4xl py-12">
      <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy dark:text-white prose-p:text-navy/80 dark:text-white/80 prose-p:leading-relaxed font-sans">
        <p className="text-xl md:text-2xl leading-relaxed text-navy/90 dark:text-white/90 mb-10 font-serif italic">
          You are running ads, posting on social channels, and watching real-time visitor counts in Shopify's Live View. But if your total sales remain stagnant, you don't have a traffic problem—you have a trust and friction problem.
        </p>

        <div className="bg-light dark:bg-white/5 p-8 rounded-2xl border border-navy/5 dark:border-white/5 my-10 hidden md:block">
          <h4 className="text-xs font-bold text-navy dark:text-white uppercase tracking-[0.2em] mb-6">Table of Contents</h4>
          <ul className="space-y-3 m-0 p-0 list-none text-sm text-navy/70 dark:text-white/70">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green" /> 1. Weak Hero Copy & Value Proposition</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> 2. Missing Trust Signals & Verified Reviews</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FF6B4A]" /> 3. Low-Fidelity Product Images</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500" /> 4. Cluttered Navigation & Menus</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" /> 5. The Mobile Speed Wall</li>
          </ul>
        </div>

        <div className="space-y-6 my-10">
          {conversionKillers.map((item, i) => (
            <div key={i} className="bg-light dark:bg-white/5 p-6 sm:p-8 rounded-2xl border border-navy/10 dark:border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center shrink-0">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy dark:text-white m-0 font-sans">{item.title}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2.5 text-red-600 dark:text-red-400 font-medium">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                  <p className="m-0"><strong>The Mistake:</strong> {item.killer}</p>
                </div>
                <div className="flex items-start gap-2.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                  <p className="m-0"><strong>The Fix:</strong> {item.fix}</p>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-navy/50 border border-navy/5 dark:border-white/5 text-xs sm:text-sm text-navy/70 dark:text-white/70">
                <strong>Real Example:</strong> {item.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        {generateContentBlocks(2900, 11).map((block, i) => {
          if (block.type === 'pullquote') return <PullQuote key={i}>{block.content}</PullQuote>;
          if (block.type === 'callout') return <CalloutBox key={i} title={block.title}>{block.content}</CalloutBox>;
          return <p key={i} className="mb-6 text-navy/80 dark:text-white/80 leading-relaxed text-base sm:text-lg">{block.content}</p>;
        })}
        <FAQSection faqs={faqsData} />
      </div>
      
      {/* Discussion & Comments */}
      <div className="pt-12 mt-12 border-t border-navy/10 dark:border-white/10">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare className="w-6 h-6 text-green" />
          <h3 className="text-2xl font-bold text-navy dark:text-white tracking-tight">Discussion ({comments.length})</h3>
        </div>

        <div className="space-y-6 mb-12">
          {comments.map((comment, i) => (
            <div key={i} className="bg-light dark:bg-white/5 p-6 rounded-2xl border border-navy/5 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green/20 text-green rounded-full flex items-center justify-center font-bold text-xs">{comment.name.charAt(0)}</div>
                <span className="font-bold text-navy dark:text-white text-base">{comment.name}</span>
              </div>
              <p className="text-navy/70 dark:text-white/70 leading-relaxed text-sm pl-11">{comment.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddComment} className="bg-white dark:bg-navy/60 p-6 sm:p-8 rounded-2xl border border-navy/10 dark:border-white/10 space-y-4">
          <h4 className="text-lg font-bold text-navy dark:text-white mb-2">Leave a Comment</h4>
          <div>
            <label className="text-xs font-bold text-navy/50 dark:text-white/50 uppercase tracking-wider block mb-1">Name *</label>
            <input type="text" required value={commentName} onChange={(e) => setCommentName(e.target.value)} className="w-full bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 rounded-xl py-3 px-4 focus:border-green outline-none transition-all font-medium text-navy dark:text-white placeholder:text-navy/30 dark:text-white/30 text-sm" placeholder="Your Name" />
          </div>
          <div>
            <label className="text-xs font-bold text-navy/50 dark:text-white/50 uppercase tracking-wider block mb-1">Your Context / Comment *</label>
            <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 rounded-xl py-3 px-4 focus:border-green outline-none transition-all font-medium text-navy dark:text-white placeholder:text-navy/30 dark:text-white/30 resize-none text-sm" placeholder="Share your conversion optimization questions or lessons..." />
          </div>
          <button type="submit" className="bg-navy dark:bg-white dark:text-navy text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wider uppercase inline-flex items-center gap-2 hover:bg-green hover:text-navy transition-all shadow-md">
            Post Comment <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );

  if (isEmbedded) {
    return articleBody;
  }

  const postData = blogPostsData["8"];

  return (
    <PageWrapper
      title="Why Your Shopify Store Isn't Converting (5 Killers) | Sheun Hub"
      description="Discover why your Shopify traffic isn't converting into sales. Learn how to fix weak hero copy, missing trust signals, poor product images, confusing navigation, and mobile speed."
      keywords="Shopify Conversion Rate Optimization, Shopify Store CRO, eCommerce conversion killers, Shopify bounce rate fix, improve Shopify sales, Sheun Hub conversion"
      canonical="/conversion-killers"
      image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=630&auto=format&fit=crop&q=80"
      type="article"
      articlePublishedTime="2026-05-02T08:00:00Z"
      articleModifiedTime="2026-09-21T08:00:00Z"
      articleAuthor="Emmanuel Adedayo (Sheun)"
      articleSection="CRO & Strategy"
    >
      <BlogArticleHeader post={postData} />
      <main className="bg-white dark:bg-navy">
        {articleBody}
      </main>
      <div className="container mx-auto px-6 max-w-4xl">
        <SocialShare
          url="https://www.sheun.online/conversion-killers"
          title={postData.heading}
          description={postData.description}
          image={postData.image}
          category={postData.category}
        />
      </div>
    </PageWrapper>
  );
}
