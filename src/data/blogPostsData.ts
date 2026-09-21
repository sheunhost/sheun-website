export interface RelevantService {
  title: string;
  path: string;
  tag: string;
  description: string;
}

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  heading: string;
  description: string;
  keywords: string;
  category: string;
  date: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  relevantServices: RelevantService[];
}

export const blogPostsData: Record<string, BlogPostData> = {
  "1": {
    id: "1",
    slug: "shopify-settings-guide",
    title: "10 Shopify Settings Most Store Owners Miss | Sheun Hub",
    heading: "10 Shopify Settings Most Store Owners Miss (And Why They Cost You Sales)",
    description: "Audit hidden Shopify admin settings to boost conversion rates, optimize checkout pipelines, and streamline global delivery for international brands.",
    keywords: "Shopify Settings Guide, Shopify Backend Settings, Shopify checkout audit, Shopify international markets setup, Shopify configuration tips",
    category: "Shopify Tips",
    date: "April 12, 2026",
    datePublished: "2026-04-12T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Hidden configuration errors in your Shopify admin can stifle your growth. In this technical audit, we reveal the high-impact settings from tax calculation triggers to checkout script optimization.",
    featured: true,
    relevantServices: [
      {
        title: "Shopify Store Setup & Redesign",
        path: "/services/setup",
        tag: "Store Setup",
        description: "Get your store professionally configured from ground up with clean Liquid architecture and frictionless checkout."
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        path: "/services/cro",
        tag: "CRO Audit",
        description: "Eliminate conversion leaks and streamline checkout friction to turn current traffic into paying customers."
      }
    ]
  },
  "2": {
    id: "2",
    slug: "shopify-speed-optimization",
    title: "How to Speed Up Your Shopify Store in 2026 | Sheun Hub",
    heading: "How to Speed Up Your Shopify Store in 2026 (Step by Step)",
    description: "Step-by-step guide to Shopify speed optimization and Core Web Vitals. Eliminate script bloat, lazy-load assets, and achieve sub-1.5s mobile load times.",
    keywords: "Shopify Speed Optimization, Core Web Vitals Shopify, improve Shopify pagespeed, Shopify developer speed, Shopify speed optimization, Shopify speed expert",
    category: "Shopify Tips",
    date: "April 10, 2026",
    datePublished: "2026-04-10T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Mobile conversion rates are directly proportional to page load speeds. Our performance framework covers server-side Liquid logic, AVIF image formats, and script pruning for <1.5s load times.",
    relevantServices: [
      {
        title: "Shopify Speed & Core Web Vitals Optimization",
        path: "/services/speed",
        tag: "Speed Sprint",
        description: "Sub-1.5s mobile loading speeds, 90+ Google Lighthouse scores, and zero app script bloat."
      },
      {
        title: "Custom Shopify Liquid Development",
        path: "/services/custom",
        tag: "Custom Liquid",
        description: "Replace heavy app scripts with clean, native, performant Liquid code and bespoke custom sections."
      }
    ]
  },
  "3": {
    id: "3",
    slug: "best-dropshipping-apps",
    title: "The Best Shopify Apps for Dropshipping Stores in 2026 | Sheun Hub",
    heading: "The Best Shopify Apps for Dropshipping Stores in 2026",
    description: "Discover the top Shopify dropshipping apps in 2026. Compare sourcing platforms, inventory sync tools, custom packaging solutions, and automated order fulfillment.",
    keywords: "Shopify Dropshipping Apps, best sourcing tools, dropshipping builder, Shopify store setup, e-commerce automation, Shopify integration",
    category: "Dropshipping",
    date: "April 8, 2026",
    datePublished: "2026-04-08T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Efficiency is the path to profit in a competitive ad market. We analyze the technical Core Four ecosystem: Zendrop, Loox, ReConvert, and Klaviyo for lifecycle retention.",
    relevantServices: [
      {
        title: "Shopify Dropshipping Store Builds",
        path: "/services/dropshipping",
        tag: "Dropshipping",
        description: "Automated, high-converting dropshipping stores integrated with reliable global supplier feeds and custom branding."
      },
      {
        title: "Shopify Email & SMS Marketing",
        path: "/services/email-marketing",
        tag: "Retention Funnels",
        description: "Automate Klaviyo cart recovery, welcome discounts, and post-purchase upsells to maximize customer lifetime value."
      },
      {
        title: "Custom Shopify App Integration",
        path: "/services/apps",
        tag: "App Integration",
        description: "Seamless third-party app installations and custom API connections without theme bloat."
      }
    ]
  },
  "4": {
    id: "4",
    slug: "fashion-dropshipping-guide",
    title: "Fashion Dropshipping Shopify Store Design & Strategy | Sheun Hub",
    heading: "How to Build a Profitable Fashion Dropshipping Store on Shopify",
    description: "Complete blueprint for building a high-converting fashion dropshipping store on Shopify. Supplier strategies, custom Liquid theme design, and social proof tactics.",
    keywords: "Fashion Dropshipping Shopify, Shopify dropshipping builder, custom clothing store, fashion e-commerce expert, fashion Shopify developer",
    category: "Dropshipping",
    date: "April 5, 2026",
    datePublished: "2026-04-05T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Fashion requires a different architectural DNA. From multi-variant image handling to architecting an influencer-ready storefront, we break down the strategic blueprint.",
    relevantServices: [
      {
        title: "Shopify Dropshipping Stores",
        path: "/services/dropshipping",
        tag: "Dropshipping",
        description: "Bespoke fashion boutique layouts with size chart popups, color swatches, and fast fulfillment integrations."
      },
      {
        title: "Influencer & Affiliate Marketing",
        path: "/services/influencer-affiliate",
        tag: "Influencer Seeding",
        description: "Set up automated creator seeding, UGC pipelines, and affiliate commission programs to drive organic viral growth."
      },
      {
        title: "Custom Shopify Liquid Development",
        path: "/services/custom",
        tag: "Custom Styling",
        description: "Custom lookbooks, interactive product variant drawers, and tailored apparel shopping experiences."
      }
    ]
  },
  "5": {
    id: "5",
    slug: "woocommerce-to-shopify-migration",
    title: "WooCommerce to Shopify Migration SEO Checklist 2026 | Sheun Hub",
    heading: "How to Migrate from WooCommerce to Shopify Without Losing SEO",
    description: "Migrate from WooCommerce to Shopify with zero SEO ranking loss. Step-by-step 301 redirect mapping, metadata preservation, and expert migration protocols.",
    keywords: "migrate WooCommerce to Shopify, WooCommerce to Shopify migration, Shopify migration expert, WooCommerce to Shopify SEO checklist, ecommerce migration services, WooCommerce to Shopify migration agency, Shopify partner migration",
    category: "Store Migration",
    date: "April 2, 2026",
    datePublished: "2026-04-02T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    readTime: "20 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Migrating platforms shouldn't mean sacrificing your organic traffic. This technical manual details our zero-loss migration protocol, including URL regex matching and metadata synchronization.",
    relevantServices: [
      {
        title: "Shopify Data & Platform Migration",
        path: "/services/migration",
        tag: "Zero-Downtime Migration",
        description: "Flawless migration of products, customer orders, blogs, reviews, and 1:1 301 redirect maps to Shopify."
      },
      {
        title: "48-Hour Technical Shopify SEO Sprint",
        path: "/services/seo",
        tag: "SEO Preservation",
        description: "Pre-migration and post-migration technical SEO audits to protect and accelerate your search rankings."
      }
    ]
  },
  "6": {
    id: "6",
    slug: "shopify-seo-guide",
    title: "Shopify SEO in 2026: The Complete Technical Guide | Sheun Hub",
    heading: "Shopify SEO in 2026: The Beginner's Complete Guide",
    description: "Master Shopify technical and on-page SEO. Learn collection optimization, schema markup injection, canonical tag management, and organic traffic growth.",
    keywords: "Shopify SEO Guide, Shopify SEO expert, Shopify SEO specialist, technical Shopify SEO, rank Shopify store, Shopify SEO consultant, Shopify optimization",
    category: "SEO",
    date: "March 30, 2026",
    datePublished: "2026-03-30T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    readTime: "25 min read",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Break free from the paid ad cycle. This comprehensive primer introduces you to technical and on-page SEO for Shopify, helping you build compounding organic sales.",
    relevantServices: [
      {
        title: "48-Hour Shopify SEO Sprint",
        path: "/services/seo",
        tag: "SEO Sprint",
        description: "Rapid technical audit, JSON-LD rich schema injection, collection metadata overrides, and canonical tag fixes."
      },
      {
        title: "Dedicated Shopify SEO Sprint Page",
        path: "/shopify-seo-sprint",
        tag: "Fixed-Price Sprint",
        description: "View deliverables and book your flat-fee 48-hour technical Shopify SEO sprint directly."
      }
    ]
  },
  "7": {
    id: "7",
    slug: "leveraging-shopify-markets",
    title: "Leveraging Shopify Markets for International Sales | Sheun Hub",
    heading: "Leveraging Shopify Markets for International Sales",
    description: "Scale your Shopify store globally with Shopify Markets. Configure multi-currency pricing, localized domains, automated duties calculation, and regional SEO.",
    keywords: "Shopify Markets guide, international Shopify setup, Shopify multi-currency, Shopify expert, Shopify partner, Shopify developer",
    category: "eCommerce Growth",
    date: "May 1, 2026",
    datePublished: "2026-05-01T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Unlock global revenue with Shopify Markets. A comprehensive guide on currency conversion, language localization, and international shipping strategies.",
    relevantServices: [
      {
        title: "Shopify Plus Enterprise Customization",
        path: "/services/plus",
        tag: "Shopify Plus",
        description: "Enterprise multi-store architecture, custom checkout extensions, and automated international compliance."
      },
      {
        title: "Shopify Store Setup & Global Configuration",
        path: "/services/setup",
        tag: "Global Setup",
        description: "Configure international payment gateways, dynamic exchange rates, and regional tax settings."
      }
    ]
  },
  "8": {
    id: "8",
    slug: "shopify-not-converting",
    title: "Shopify Store Not Converting? 5 Conversion Killers | Sheun Hub",
    heading: "Shopify Store Not Converting? The 5 Common Killers (and the Fixes)",
    description: "Is your Shopify store getting traffic but no sales? Fix low conversion rates, mobile friction, checkout drop-offs, and trust leaks with expert CRO strategies.",
    keywords: "Shopify store not converting, Shopify conversion optimization, e-commerce CRO audit, fix checkout drop-off, Shopify checkout audit, Shopify CRO expert",
    category: "eCommerce Growth",
    date: "May 15, 2026",
    datePublished: "2026-05-15T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Is your Shopify store getting traffic but no sales? Discover the 5 most common conversion killers from weak hero copy to slow mobile performance.",
    relevantServices: [
      {
        title: "Conversion Rate Optimization (CRO)",
        path: "/services/cro",
        tag: "CRO Sprint",
        description: "Surgical conversion audits, checkout optimization, and trust badge integration to multiply your revenue per visitor."
      },
      {
        title: "Professional Shopify Store Audit",
        path: "/shopify-store-audit",
        tag: "48-Hour Audit",
        description: "Receive a comprehensive video teardown and action checklist identifying every leak in your sales funnel."
      },
      {
        title: "Shopify Speed Optimization",
        path: "/services/speed",
        tag: "Speed Boost",
        description: "Eliminate mobile loading lag so shoppers never abandon their cart waiting for slow pages."
      }
    ]
  }
};

/**
 * Generate a short, readable, SEO-friendly URL slug based on a blog title or main topic.
 * Rules:
 * - Lowercase letters
 * - Hyphen delimited
 * - Strips stop words and special characters
 * - Short & descriptive
 */
export function generateBlogSlug(title: string): string {
  const stopWords = new Set([
    "a", "an", "the", "and", "or", "but", "for", "nor", "with", "at", 
    "from", "by", "on", "in", "to", "into", "of", "about", "your", "why", 
    "how", "is", "are", "and", "the", "in", "on", "you"
  ]);

  const clean = title
    .toLowerCase()
    .replace(/\|\s*sheun\s*hub/gi, "")
    .replace(/[^\w\s-]/g, "")
    .trim();

  const words = clean.split(/\s+/).filter(w => w.length > 0);
  const filtered = words.filter(w => !stopWords.has(w));
  const finalWords = filtered.length >= 3 ? filtered : words;

  return finalWords.slice(0, 6).join("-");
}

/**
 * Find a blog post by ID or Slug.
 */
export function getBlogPost(idOrSlug: string | undefined): BlogPostData | undefined {
  if (!idOrSlug) return undefined;
  
  // Direct ID match
  if (blogPostsData[idOrSlug]) {
    return blogPostsData[idOrSlug];
  }
  
  // Lookup by slug or legacy ID
  const cleanKey = idOrSlug.toLowerCase().trim();
  return Object.values(blogPostsData).find(
    post => post.slug === cleanKey || post.id === cleanKey
  );
}

/**
 * Get all blog posts as an array
 */
export function getAllBlogPosts(): BlogPostData[] {
  return Object.values(blogPostsData);
}

/**
 * Get full canonical URL for a blog post
 */
export function getBlogCanonicalUrl(post: BlogPostData, preferredMode: 'slug' | 'id' = 'id'): string {
  const path = preferredMode === 'slug' ? `/blog/${post.slug}` : `/blog/${post.id}`;
  return `https://www.sheun.online${path}`;
}

/**
 * Generate complete BlogPosting Article JSON-LD Structured Data
 */
export function generateBlogSchema(post: BlogPostData, canonicalUrl?: string) {
  const fullUrl = canonicalUrl || `https://www.sheun.online/blog/${post.id}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${fullUrl}#article`,
    "headline": post.heading,
    "name": post.title,
    "description": post.description,
    "image": [
      post.image,
      post.image.includes("?") ? `${post.image}&w=1200&h=630` : `${post.image}?w=1200&h=630`
    ],
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "url": fullUrl,
    "author": {
      "@type": "Person",
      "name": "Emmanuel Adedayo (Sheun)",
      "jobTitle": "Founder & Lead Developer",
      "url": "https://www.sheun.online/about",
      "sameAs": [
        "https://github.com/sheunhost",
        "https://twitter.com/sheunhub",
        "https://www.linkedin.com/in/sheun-hub-26b876321"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sheun Hub",
      "url": "https://www.sheun.online",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sheun.online/logo.png"
      }
    },
    "articleSection": post.category,
    "keywords": post.keywords
  };
}
