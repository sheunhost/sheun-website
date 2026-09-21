import { motion } from "framer-motion";
import { Clock, Calendar, CheckCircle2, ArrowRight, Zap, Code, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import BlogArticleHeader from "../components/BlogArticleHeader";
import SocialShare from "../components/SocialShare";
import { generateContentBlocks, faqsData } from "../data/blogExpandedData";
import { PullQuote, CalloutBox, FAQSection } from "../components/BlogDeepDive";
import { blogPostsData } from "../data/blogPostsData";

export default function ShopifySpeedOptimization({ isEmbedded = false }: { isEmbedded?: boolean }) {
  const [comments, setComments] = useState<{name: string, text: string}[]>(() => {
    const saved = localStorage.getItem('comments_ShopifySpeed');
    if (saved) return JSON.parse(saved);
    return [
      { name: "Alex R.", text: "This guide helped us cut our mobile load time from 4.8s down to 1.3s. Massive boost in conversion rate!" }
    ];
  });

  useEffect(() => {
    localStorage.setItem('comments_ShopifySpeed', JSON.stringify(comments));
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
          In the fast-paced world of digital commerce, the speed of your Shopify store is not just a technical metric; it is the single most important factor in your conversion rate marketing. In 2026, user expectations have reached a peak where even a 100-millisecond delay can result in a measurable drop in revenue.
        </p>

        <div className="bg-light dark:bg-white/5 p-8 rounded-2xl border border-navy/5 dark:border-white/5 my-10 hidden md:block">
          <h4 className="text-xs font-bold text-navy dark:text-white uppercase tracking-[0.2em] mb-6">Table of Contents</h4>
          <ul className="space-y-3 m-0 p-0 list-none text-sm text-navy/70 dark:text-white/70">
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green" /> 1. Mastering Image Architecture & Responsive Formats</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#8B5CF6]" /> 2. The Font-Display Swap Strategy for Sub-Second FCP</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#FF6B4A]" /> 3. Reducing the "App Tax" and Liquid Loop Bloat</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-emerald-500" /> 4. Customer Events / Web Pixels Sandbox Architecture</li>
            <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-blue-500" /> 5. Frequently Asked Questions</li>
          </ul>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">1. Mastering Image Architecture</h2>
        <p>
          The most common bandwidth-killer in Shopify is unoptimized imagery. While Shopify does provide some automatic optimization, you must take control of your image architecture using <code>srcset</code> and next-gen formats.
        </p>
        
        <div className="bg-navy p-8 sm:p-10 rounded-2xl text-white my-8 space-y-4 font-sans border border-white/10">
          <h4 className="text-green font-bold text-xs uppercase tracking-widest flex items-center gap-2">
            <Code size={18} /> Technical Implementation: Responsive Images
          </h4>
          <p className="text-white/70 text-sm leading-relaxed">
            Use this Liquid snippet to ensure browsers only download the resolution they actually need:
          </p>
          <div className="bg-black/40 p-5 rounded-xl border border-white/10 font-mono text-xs overflow-x-auto text-emerald-400">
            <p>{"<img src=\"{{ image | img_url: 'master' }}\""}</p>
            <p className="pl-4">{"loading=\"lazy\""}</p>
            <p className="pl-4">{"srcset=\"{{ image | img_url: '400x' }} 400w, {{ image | img_url: '800x' }} 800w, {{ image | img_url: '1200x' }} 1200w\""}</p>
            <p className="pl-4">{"alt=\"{{ image.alt | escape }}\" >"}</p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">2. The Font-Display Swap Strategy</h2>
        <p>
          Custom brand fonts are beautiful, but they cause FOUT (Flash of Unstyled Text) or FOIT (Flash of Invisible Text). In 2026, you should prioritize <strong>System Fonts</strong> for body copy or enforce non-blocking font swapping.
        </p>
        <div className="bg-light dark:bg-white/5 p-6 sm:p-8 rounded-2xl border-l-4 border-green my-8">
          <h4 className="text-lg font-bold text-navy dark:text-white mb-2 font-sans">CSS Optimization Rule:</h4>
          <div className="bg-white dark:bg-navy p-3 rounded-xl border border-navy/5 dark:border-white/5 font-mono text-xs text-green mb-3 inline-block">
            font-display: swap;
          </div>
          <p className="text-sm m-0 italic text-navy/70 dark:text-white/70">Adding this single line to your <code>@font-face</code> declarations ensures the browser shows a fallback font instantly while your custom font downloads in the background.</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mt-12 mb-6 font-sans tracking-tight">3. Reducing the "App Tax"</h2>
        <p>
          Every app you install adds potentially blocking JavaScript. Perform a monthly code audit. Search your <code>theme.liquid</code> for external domains like <code>cdn.appname.com</code> and remove residues from uninstalled apps.
        </p>
        <ul className="space-y-4 my-6 list-none p-0">
          <li className="flex gap-3">
            <CheckCircle2 className="text-green mt-1 shrink-0" size={20} />
            <div className="text-navy dark:text-white text-base"><strong>GTM Consolidation:</strong> Move all your individual tracking scripts into a single optimized Google Tag Manager container.</div>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="text-green mt-1 shrink-0" size={20} />
            <div className="text-navy dark:text-white text-base"><strong>Lazy Load Video:</strong> Never use autoplaying Shopify videos above the fold without <code>preload="none"</code> tags if they aren't critical to the UX.</div>
          </li>
        </ul>

        <div className="bg-navy p-8 sm:p-12 rounded-3xl text-white my-12 shadow-xl font-sans border border-white/10">
          <div className="flex items-center gap-5 mb-6">
            <div className="w-14 h-14 bg-green/20 rounded-2xl flex items-center justify-center shrink-0">
              <Zap className="text-green" size={28} />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold m-0 text-white">Need a Speed Specialist?</h3>
              <p className="text-white/50 uppercase tracking-widest text-xs font-bold mt-1">Deep-Dive Technical Performance Audits</p>
            </div>
          </div>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
            Speed isn't just about apps. It's about how your Liquid code communicates with your HTML. I rebuild theme architectures to achieve 90+ Mobile Core Web Vital scores.
          </p>
          <Link to="/apply#apply-form" className="bg-green text-navy font-bold px-8 py-4 rounded-xl inline-flex items-center gap-3 hover:scale-105 transition-transform shadow-lg">
            Audit My Store Speed <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="mt-12">
        {generateContentBlocks(2640, 3).map((block, i) => {
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
            <textarea required value={newComment} onChange={(e) => setNewComment(e.target.value)} rows={4} className="w-full bg-light dark:bg-white/5 border border-navy/10 dark:border-white/10 rounded-xl py-3 px-4 focus:border-green outline-none transition-all font-medium text-navy dark:text-white placeholder:text-navy/30 dark:text-white/30 resize-none text-sm" placeholder="Share your speed optimization experience or questions..." />
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

  const postData = blogPostsData["2"];

  return (
    <PageWrapper
      title="How to Speed Up Your Shopify Store in 2026 | Sheun Hub"
      description="Step-by-step guide to Shopify speed optimization and Core Web Vitals. Eliminate script bloat, lazy-load assets, and achieve sub-1.5s mobile load times."
      keywords="Shopify Speed Optimization, Core Web Vitals Shopify, improve Shopify pagespeed, Shopify developer speed, Shopify speed optimization, Shopify speed expert"
      canonical="/shopify-speed-optimization"
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&auto=format&fit=crop&q=80"
      type="article"
      articlePublishedTime="2026-04-10T08:00:00Z"
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
          url="https://www.sheun.online/shopify-speed-optimization"
          title={postData.heading}
          description={postData.description}
          image={postData.image}
          category={postData.category}
        />
      </div>
    </PageWrapper>
  );
}
