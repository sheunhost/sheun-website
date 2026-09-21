import { motion } from "framer-motion";
import { Clock, Calendar, CheckCircle2, ShieldCheck, Heart, MessageSquare, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import BlogArticleHeader from "../components/BlogArticleHeader";
import SocialShare from "../components/SocialShare";
import { generateContentBlocks, faqsData } from "../data/blogExpandedData";
import { PullQuote, CalloutBox, FAQSection } from "../components/BlogDeepDive";
import { blogPostsData } from "../data/blogPostsData";

export default function FashionDropshippingGuide({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [comments, setComments] = useState<{name: string, text: string}[]>(() => {
    const saved = localStorage.getItem('comments_FashionDropshipping');
    if (saved) return JSON.parse(saved);
    return [
      { name: "Sonia P.", text: "The advice on sub-niches was eye-opening. I was trying to sell general apparel and getting nowhere. Niching into athleisure made all the difference!" }
    ];
  });

  useEffect(() => {
    localStorage.setItem('comments_FashionDropshipping', JSON.stringify(comments));
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
          Fashion dropshipping is often called "the hardest niche" in eCommerce, yet it remains the most lucrative for those who understand consumer psychology. In 2026, the global fashion market continues to expand, but the competitive edge has shifted from simply finding an aesthetic item to building a distinct brand identity.
        </p>

        <div className="bg-light dark:bg-white/5 p-8 rounded-2xl border border-navy/5 dark:border-white/5 my-10 hidden md:block">
          <h4 className="text-xs font-bold text-navy dark:text-white uppercase tracking-[0.2em] mb-6">Table of Contents</h4>
          <ul className="space-y-3 m-0 p-0 list-none text-sm text-navy/70 dark:text-white/70">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green" /> 1. Identifying Your Tribal Niche</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> 2. Quality Control & Supplier Vetting</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FF6B4A]" /> 3. Solving Sizing Friction with Custom Charts</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500" /> 4. TikTok Organic & UGC Paid Marketing</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" /> 5. Frequently Asked Questions</li>
          </ul>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">1. Identifying Your Tribal Niche</h2>
        <p>
          The biggest mistake most aspiring apparel merchants make is launching a generic fashion store. In 2026, you cannot compete with fast-fashion giants on price or inventory scale. You win by becoming the undisputed authority for a specific aesthetic or lifestyle community.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">2. Solving Sizing Friction & Return Rates</h2>
        <p>
          Returns are the biggest profit killer in fashion dropshipping. Incorporating dynamic sizing calculators and explicit measurement charts directly on product pages cuts return inquiries by up to 40%.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">3. User-Generated Content (UGC) & TikTok Search</h2>
        <p>
          Modern buyers buy clothes when they see real people styling them in dynamic lighting. Whitelisting creator UGC and using TikTok search-optimized descriptions generates higher conversion rates than static studio photography alone.
        </p>
      </div>

      <div className="mt-12">
        {generateContentBlocks(3300, 9).map((block, i) => {
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
            <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 rounded-xl py-3 px-4 focus:border-green outline-none transition-all font-medium text-navy dark:text-white placeholder:text-navy/30 dark:text-white/30 resize-none text-sm" placeholder="Share your fashion dropshipping insights..." />
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

  const postData = blogPostsData["4"];

  return (
    <PageWrapper
      title="How to Build a Profitable Fashion Dropshipping Store on Shopify | Sheun Hub"
      description="Learn how to launch and scale a profitable fashion dropshipping brand on Shopify. Master niche selection, supplier vetting, custom sizing charts, and viral TikTok UGC marketing."
      keywords="Fashion Dropshipping Shopify, Apparel Dropshipping Guide, Clothing Brand Shopify, High Margin Dropshipping, Shopify Fashion Store Setup, Sheun Hub Fashion"
      canonical="/fashion-dropshipping-guide"
      image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=630&auto=format&fit=crop&q=80"
      type="article"
      articlePublishedTime="2026-04-20T08:00:00Z"
      articleModifiedTime="2026-09-21T08:00:00Z"
      articleAuthor="Emmanuel Adedayo (Sheun)"
      articleSection="Dropshipping"
    >
      <BlogArticleHeader post={postData} />
      <main className="bg-white dark:bg-navy">
        {articleBody}
      </main>
      <div className="container mx-auto px-6 max-w-4xl">
        <SocialShare
          url="https://www.sheun.online/fashion-dropshipping-guide"
          title={postData.heading}
          description={postData.description}
          image={postData.image}
          category={postData.category}
        />
      </div>
    </PageWrapper>
  );
}
