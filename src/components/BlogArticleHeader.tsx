import React from "react";
import { Calendar, Clock, User, ShieldCheck } from "lucide-react";
import { BlogPostData } from "../data/blogPostsData";

interface BlogArticleHeaderProps {
  post: BlogPostData;
}

export default function BlogArticleHeader({ post }: BlogArticleHeaderProps) {
  return (
    <header className="w-full pt-32 pb-12 bg-navy-gradient text-white relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6D28D9]/20 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#8B5CF6_1px,_transparent_1px)] bg-[size:40px_40px] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 space-y-8 text-center md:text-left">
        {/* Category Badge */}
        <div className="flex items-center justify-center md:justify-start">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse" />
            {post.category}
          </span>
        </div>

        {/* Dynamic Blog Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] text-balance font-sans">
          {post.heading}
        </h1>

        {/* Short Subtitle / Excerpt */}
        {post.excerpt && (
          <p className="text-lg md:text-xl text-white/80 font-serif italic max-w-3xl leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Meta Details: Author, Date, Reading Time */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-4 gap-x-6 pt-6 border-t border-white/10 text-xs md:text-sm text-white/70">
          {/* Author */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF6B4A] to-[#8B5CF6] p-0.5 shadow-sm">
              <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white font-bold text-xs">
                EA
              </div>
            </div>
            <div className="text-left">
              <span className="font-semibold text-white block leading-none">Emmanuel Adedayo (Sheun)</span>
              <span className="text-[11px] text-white/50 block mt-0.5">Shopify Growth Specialist</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-6 bg-white/15" />

          {/* Published Date */}
          <div className="flex items-center gap-2">
            <Calendar size={15} className="text-[#8B5CF6]" />
            <span>{post.date}</span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-white/15" />

          {/* Reading Time */}
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-[#FF6B4A]" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image in Responsive Framed Container */}
        {post.image && (
          <div className="pt-4">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-navy/50 group">
              <img
                src={post.image}
                alt={post.heading}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
