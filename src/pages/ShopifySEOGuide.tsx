import { motion } from "framer-motion";
import { Clock, Calendar, CheckCircle2, ShieldCheck, BarChart3, Globe, Search, MessageSquare, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import BlogArticleHeader from "../components/BlogArticleHeader";
import SocialShare from "../components/SocialShare";
import { generateContentBlocks, faqsData } from "../data/blogExpandedData";
import { PullQuote, CalloutBox, FAQSection } from "../components/BlogDeepDive";
import { blogPostsData } from "../data/blogPostsData";

export default function ShopifySEOGuide({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [comments, setComments] = useState<{name: string, text: string}[]>(() => {
    const saved = localStorage.getItem('comments_ShopifySEO');
    if (saved) return JSON.parse(saved);
    return [
      { name: "Michael T.", text: "This is the most balanced guide on Shopify SEO I've found. The emphasis on collection schema and sitemap cleanup made an immediate difference for our store rankings." }
    ];
  });

  useEffect(() => {
    localStorage.setItem('comments_ShopifySEO', JSON.stringify(comments));
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
          In 2026, relying solely on paid ads is a fragile strategy. Customer Acquisition Cost (CAC) continues to climb across digital platforms. The sustainable path to long-term profitability is building a compounding organic asset through technical and on-page Shopify SEO.
        </p>

        <div className="bg-light dark:bg-white/5 p-8 rounded-2xl border border-navy/5 dark:border-white/5 my-10 hidden md:block">
          <h4 className="text-xs font-bold text-navy dark:text-white uppercase tracking-[0.2em] mb-6">Table of Contents</h4>
          <ul className="space-y-3 m-0 p-0 list-none text-sm text-navy/70 dark:text-white/70">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green" /> 1. Technical SEO & Liquid Code Architecture</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> 2. Collection Page Keyword Architecture</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FF6B4A]" /> 3. Structured Data, JSON-LD & Rich Snippets</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500" /> 4. Internal Linking & Crawl Depth Optimization</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" /> 5. Frequently Asked Questions</li>
          </ul>
        </div>

        <div className="flex items-start gap-4 bg-light dark:bg-white/5 p-6 sm:p-8 rounded-2xl border-l-4 border-green my-8">
          <ShieldCheck className="text-green shrink-0 mt-1" size={28} />
          <p className="text-base sm:text-lg font-sans font-medium text-navy dark:text-white m-0 italic">
            "Paid ads are fuel, but SEO is the engine. Build an eCommerce store that generates compounding demand on autopilot."
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">
          1. Technical SEO & Crawl Budget Optimization
        </h2>
        <p>
          Shopify provides robust out-of-the-box hosting, but duplicate collection URLs (e.g., <code>/collections/hoodies/products/black-hoodie</code> versus <code>/products/black-hoodie</code>) can dilute canonical link equity. Enforce standard product link paths in your theme liquid files.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">
          2. Collection Page Keyword Hierarchy
        </h2>
        <p>
          In eCommerce, 70% of high-intent search traffic lands on collection category pages rather than individual product pages. Optimize collection descriptions with FAQ accordion rich text, relevant H2 tags, and breadcrumb markup.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">
          3. Rich Snippets & Product Schema
        </h2>
        <p>
          Structured JSON-LD schema feeds Google's shopping graph with direct price, availability, and review metrics, boosting Click-Through Rate (CTR) in search results.
        </p>
      </div>

      <div className="mt-12">
        {generateContentBlocks(3600, 15).map((block, i) => {
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
            <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 rounded-xl py-3 px-4 focus:border-green outline-none transition-all font-medium text-navy dark:text-white placeholder:text-navy/30 dark:text-white/30 resize-none text-sm" placeholder="Share your SEO questions or results..." />
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

  const postData = blogPostsData["6"];

  return (
    <PageWrapper
      title="Shopify SEO in 2026: The Complete Guide | Sheun Hub"
      description="The definitive blueprint for technical and on-page Shopify SEO. Master keyword research, collection architecture, speed optimization, and structured data schemas."
      keywords="Shopify SEO Guide, Shopify SEO 2026, eCommerce SEO Strategy, Shopify Product Schema, Technical Shopify SEO, Sheun Hub SEO"
      canonical="/shopify-seo-guide"
      image="https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?w=1200&h=630&auto=format&fit=crop&q=80"
      type="article"
      articlePublishedTime="2026-04-21T08:00:00Z"
      articleModifiedTime="2026-09-21T08:00:00Z"
      articleAuthor="Emmanuel Adedayo (Sheun)"
      articleSection="SEO"
    >
      <BlogArticleHeader post={postData} />
      <main className="bg-white dark:bg-navy">
        {articleBody}
      </main>
      <div className="container mx-auto px-6 max-w-4xl">
        <SocialShare
          url="https://www.sheun.online/shopify-seo-guide"
          title={postData.heading}
          description={postData.description}
          image={postData.image}
          category={postData.category}
        />
      </div>
    </PageWrapper>
  );
}
