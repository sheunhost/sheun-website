import React, { useState } from "react";
import { 
  Share2, 
  Check, 
  Copy, 
  MessageCircle, 
  Linkedin,
  Facebook
} from "lucide-react";

export interface SocialShareProps {
  url?: string;
  title: string;
  description?: string;
  image?: string;
  category?: string;
  className?: string;
}

export default function SocialShare({
  url,
  title,
  description = "",
  image = "",
  category = "Shopify",
  className = ""
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  // Compute canonical URL dynamically
  const shareUrl = url 
    ? (url.startsWith("http") ? url : `https://www.sheun.online${url.startsWith("/") ? url : `/${url}`}`)
    : (typeof window !== "undefined" ? window.location.href : "https://www.sheun.online");

  const cleanTitle = title.replace(/\|\s*Sheun\s*Hub/gi, "").trim();
  const hashtags = category 
    ? `Shopify,Ecommerce,${category.replace(/\s+/g, "")},SheunHub`
    : "Shopify,Ecommerce,SheunHub";

  // Share action handlers
  const handleFacebookShare = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(fbUrl, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const handleLinkedInShare = () => {
    const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(liUrl, "_blank", "noopener,noreferrer,width=600,height=600");
  };

  const handleXShare = () => {
    const text = `${cleanTitle} via @sheunhub`;
    const xUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags)}`;
    window.open(xUrl, "_blank", "noopener,noreferrer,width=600,height=450");
  };

  const handleWhatsAppShare = () => {
    const waText = `${cleanTitle}\n\n${description ? `${description.slice(0, 120)}...\n\n` : ""}${shareUrl}`;
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: cleanTitle,
          text: description || cleanTitle,
          url: shareUrl
        });
      } catch (err) {
        // User cancellation ignored
      }
    } else {
      handleCopyLink();
    }
  };

  const hasNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  return (
    <section 
      aria-label="Social Sharing"
      className={`my-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy/60 border border-[#E2E8F0] dark:border-white/10 shadow-sm ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        
        {/* Label */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center">
            <Share2 size={16} />
          </div>
          <span className="text-sm sm:text-base font-bold text-[#0F172A] dark:text-white tracking-tight">
            Share this article:
          </span>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Facebook */}
          <button
            type="button"
            onClick={handleFacebookShare}
            title="Share on Facebook"
            aria-label="Share on Facebook"
            className="h-11 px-4 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/20 hover:border-[#1877F2] flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
          >
            <Facebook size={16} className="shrink-0" />
            <span>Facebook</span>
          </button>

          {/* LinkedIn */}
          <button
            type="button"
            onClick={handleLinkedInShare}
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
            className="h-11 px-4 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/20 hover:border-[#0A66C2] flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
          >
            <Linkedin size={16} className="shrink-0" />
            <span>LinkedIn</span>
          </button>

          {/* X / Twitter */}
          <button
            type="button"
            onClick={handleXShare}
            title="Share on X (Twitter)"
            aria-label="Share on X"
            className="h-11 px-4 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-navy dark:text-white hover:text-white dark:hover:text-black border border-navy/10 dark:border-white/15 hover:border-black dark:hover:border-white flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
          >
            <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X</span>
          </button>

          {/* WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            title="Share on WhatsApp"
            aria-label="Share on WhatsApp"
            className="h-11 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/20 hover:border-[#25D366] flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
          >
            <MessageCircle size={16} className="shrink-0" />
            <span>WhatsApp</span>
          </button>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            title={copied ? "Link Copied to Clipboard!" : "Copy Article Link"}
            aria-label="Copy Article Link"
            className={`h-11 px-4 rounded-xl border flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer shadow-xs ${
              copied
                ? "bg-green-600 text-white border-green-600 shadow-sm"
                : "bg-navy/5 dark:bg-white/10 hover:bg-[#6D28D9] text-navy dark:text-white hover:text-white border-navy/10 dark:border-white/10 hover:border-[#6D28D9]"
            }`}
          >
            {copied ? (
              <>
                <Check size={16} className="text-white shrink-0" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="shrink-0" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          {/* Native Share (More) */}
          {hasNativeShare && (
            <button
              type="button"
              onClick={handleNativeShare}
              title="More Sharing Options"
              aria-label="More Sharing Options"
              className="h-11 px-4 rounded-xl bg-[#8B5CF6]/10 hover:bg-[#8B5CF6] text-[#8B5CF6] hover:text-white border border-[#8B5CF6]/20 hover:border-[#8B5CF6] flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
            >
              <Share2 size={16} className="shrink-0" />
              <span>More</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
