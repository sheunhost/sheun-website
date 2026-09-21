import { motion } from "framer-motion";
import { Clock, Calendar, CheckCircle2, ShieldCheck, Globe, DollarSign, MessageSquare, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import BlogArticleHeader from "../components/BlogArticleHeader";
import SocialShare from "../components/SocialShare";
import { generateContentBlocks, faqsData } from "../data/blogExpandedData";
import { PullQuote, CalloutBox, FAQSection } from "../components/BlogDeepDive";
import { blogPostsData } from "../data/blogPostsData";

export default function LeveragingShopifyMarkets({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [comments, setComments] = useState<{name: string, text: string}[]>(() => {
    const saved = localStorage.getItem('comments_ShopifyMarkets');
    if (saved) return JSON.parse(saved);
    return [
      { name: "Elena R.", text: "Enabling localized price rounding and DDP duties at checkout doubled our European conversion rate in 30 days." }
    ];
  });

  useEffect(() => {
    localStorage.setItem('comments_ShopifyMarkets', JSON.stringify(comments));
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
          If your eCommerce business is only selling domestically, you are capping your potential revenue. With Shopify Markets, expanding into global territories no longer requires managing separate stores or fractured inventory systems.
        </p>

        <div className="bg-light dark:bg-white/5 p-8 rounded-2xl border border-navy/5 dark:border-white/5 my-10 hidden md:block">
          <h4 className="text-xs font-bold text-navy dark:text-white uppercase tracking-[0.2em] mb-6">Table of Contents</h4>
          <ul className="space-y-3 m-0 p-0 list-none text-sm text-navy/70 dark:text-white/70">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green" /> 1. Currency Conversion & Local Price Rounding</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> 2. Language Translation & Hreflang Subfolders</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FF6B4A]" /> 3. Duties & Delivered Duty Paid (DDP) Checkout</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500" /> 4. Market-Specific Catalog & Inventory Rules</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" /> 5. Frequently Asked Questions</li>
          </ul>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">
          1. Multi-Currency Conversion with Clean Price Rounding
        </h2>
        <p>
          Trust is paramount in international commerce. International shoppers expect clean, localized prices (e.g., €45.00 or £30.00 rather than fluctuating odd amounts like €43.17). Enable Shopify Markets automated price rounding rules to display familiar numbers.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">
          2. Language Localization & Hreflang Subfolders
        </h2>
        <p>
          Leverage native Shopify Translate & Adapt to offer localized content per territory. Ensure subfolders like <code>/fr/</code> or <code>/de/</code> are properly mapped with <code>hreflang</code> metadata for international search visibility.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">
          3. Eliminating Customs Surprises with DDP
        </h2>
        <p>
          Unexpected customs fees upon delivery cause customer dissatisfaction and chargebacks. Collecting duties and import taxes directly at checkout (Delivered Duty Paid) ensures a smooth delivery experience.
        </p>
      </div>

      <div className="mt-12">
        {generateContentBlocks(3100, 7).map((block, i) => {
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
            <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 rounded-xl py-3 px-4 focus:border-green outline-none transition-all font-medium text-navy dark:text-white placeholder:text-navy/30 dark:text-white/30 resize-none text-sm" placeholder="Share your international expansion questions..." />
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

  const postData = blogPostsData["7"];

  return (
    <PageWrapper
      title="Leveraging Shopify Markets for International Sales | Sheun Hub"
      description="Unlock global eCommerce revenue with Shopify Markets. Master localized currency conversion, multi-language catalogs, customs duty computation, and international shipping."
      keywords="Shopify Markets, International eCommerce Shopify, Shopify Multi Currency, Shopify Localization, Cross Border eCommerce, Sheun Hub Markets"
      canonical="/leveraging-shopify-markets"
      image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&auto=format&fit=crop&q=80"
      type="article"
      articlePublishedTime="2026-05-01T08:00:00Z"
      articleModifiedTime="2026-09-21T08:00:00Z"
      articleAuthor="Emmanuel Adedayo (Sheun)"
      articleSection="eCommerce Growth"
    >
      <BlogArticleHeader post={postData} />
      <main className="bg-white dark:bg-navy">
        {articleBody}
      </main>
      <div className="container mx-auto px-6 max-w-4xl">
        <SocialShare
          url="https://www.sheun.online/leveraging-shopify-markets"
          title={postData.heading}
          description={postData.description}
          image={postData.image}
          category={postData.category}
        />
      </div>
    </PageWrapper>
  );
}
