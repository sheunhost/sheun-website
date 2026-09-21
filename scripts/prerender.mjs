import fs from 'fs';
import path from 'path';

const distPath = path.resolve(process.cwd(), 'dist');

const blogPosts = {
  "1": {
    id: "1",
    slug: "shopify-settings-guide",
    title: "10 Shopify Settings Most Store Owners Miss | Sheun Hub",
    heading: "10 Shopify Settings Most Store Owners Miss (And Why They Cost You Sales)",
    description: "Audit hidden Shopify admin settings to boost conversion rates, optimize checkout pipelines, and streamline global delivery for international brands.",
    keywords: "Shopify Settings Guide, Shopify Backend Settings, Shopify checkout audit, Shopify international markets setup, Shopify configuration tips",
    category: "Shopify Tips",
    datePublished: "2026-04-12T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Hidden configuration errors in your Shopify admin can stifle your growth. In this technical audit, we reveal the high-impact settings from tax calculation triggers to checkout script optimization.",
    contentHtml: `
      <article>
        <h1>10 Shopify Settings Most Store Owners Miss (And Why They Cost You Sales)</h1>
        <p>By Emmanuel Adedayo (Sheun) | Published on April 12, 2026 | Category: Shopify Tips</p>
        <p>Building a successful Shopify store isn't just about selecting a modern theme and driving ad traffic. Behind the scenes, subtle configuration oversights in your Shopify admin settings silently leak conversions, increase checkout drop-offs, and hinder international revenue.</p>
        <h2>Key Shopify Settings Covered</h2>
        <ol>
          <li><strong>Multi-Currency Price Rounding:</strong> Clean aesthetic prices in Shopify Markets without ugly decimals.</li>
          <li><strong>Dynamic Checkout Buttons:</strong> Routing buyers efficiently based on average order value.</li>
          <li><strong>International Duties and Taxes:</strong> Displaying Delivered Duty Paid (DDP) to prevent customs rejections.</li>
          <li><strong>Payment Authorization Capture:</strong> Manual vs automated capture timing for fulfillment safety.</li>
          <li><strong>Backup Shipping Rates:</strong> Fallback shipping profiles to avoid cart abandonment.</li>
          <li><strong>New Customer Accounts:</strong> Passwordless login via email code to reduce friction.</li>
          <li><strong>Web Pixels API:</strong> Async event tracking without liquid script bloat.</li>
          <li><strong>Metafields and Metaobjects:</strong> Custom data architecture without third-party app bloat.</li>
          <li><strong>Abandoned Checkout Timing:</strong> Triggering recovery emails within 1-2 hours.</li>
          <li><strong>Homepage SEO Preferences:</strong> Optimized title and meta tags in Online Store Preferences.</li>
        </ol>
      </article>
    `
  },
  "2": {
    id: "2",
    slug: "shopify-speed-optimization",
    title: "How to Speed Up Your Shopify Store in 2026 | Sheun Hub",
    heading: "How to Speed Up Your Shopify Store in 2026 (Step by Step)",
    description: "Step-by-step guide to Shopify speed optimization and Core Web Vitals. Eliminate script bloat, lazy-load assets, and achieve sub-1.5s mobile load times.",
    keywords: "Shopify Speed Optimization, Core Web Vitals Shopify, improve Shopify pagespeed, Shopify developer speed, Shopify speed optimization, Shopify speed expert",
    category: "Shopify Tips",
    datePublished: "2026-04-10T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Mobile conversion rates are directly proportional to page load speeds. Our performance framework covers server-side Liquid logic, AVIF image formats, and script pruning for <1.5s load times.",
    contentHtml: `
      <article>
        <h1>How to Speed Up Your Shopify Store in 2026 (Step by Step)</h1>
        <p>By Emmanuel Adedayo (Sheun) | Published on April 10, 2026 | Category: Shopify Tips</p>
        <p>Slow Shopify stores lose customers before they even see your products. Every 1-second delay in page load time decreases conversion rates by up to 20%. In this comprehensive guide, we show you how to optimize Shopify Core Web Vitals, prune tracking script bloat, and achieve sub-1.5 second loading times on mobile devices.</p>
        <h2>Actionable Steps for Shopify Speed</h2>
        <ul>
          <li><strong>Audit App Scripts:</strong> Remove orphan JavaScript from uninstalled apps lingering in theme.liquid.</li>
          <li><strong>Native Image Optimization:</strong> Use Shopify Liquid <code>image_tag</code> with srcset, sizes, and native loading="lazy".</li>
          <li><strong>Font Display Swap:</strong> Prevent layout shift (CLS) with preloaded web fonts and font-display: swap.</li>
          <li><strong>Web Pixels API Migration:</strong> Move third-party tracking scripts into Shopify sandboxed Web Pixels.</li>
        </ul>
      </article>
    `
  },
  "3": {
    id: "3",
    slug: "best-dropshipping-apps",
    title: "The Best Shopify Apps for Dropshipping Stores in 2026 | Sheun Hub",
    heading: "The Best Shopify Apps for Dropshipping Stores in 2026",
    description: "Discover the top Shopify dropshipping apps in 2026. Compare sourcing platforms, inventory sync tools, custom packaging solutions, and automated order fulfillment.",
    keywords: "Shopify Dropshipping Apps, best sourcing tools, dropshipping builder, Shopify store setup, e-commerce automation, Shopify integration",
    category: "Dropshipping",
    datePublished: "2026-04-08T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    image: "https://images.unsplash.com/photo-1556742049-0a67e55722c3?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Efficiency is the path to profit in a competitive ad market. We analyze the technical Core Four ecosystem: Zendrop, Loox, ReConvert, and Klaviyo for lifecycle retention.",
    contentHtml: `
      <article>
        <h1>The Best Shopify Apps for Dropshipping Stores in 2026</h1>
        <p>By Emmanuel Adedayo (Sheun) | Published on April 8, 2026 | Category: Dropshipping</p>
        <p>Discover the definitive collection of vetted Shopify dropshipping apps for product sourcing, automated order fulfillment, high-converting social proof, and post-purchase customer retention.</p>
        <h2>Top Recommended Dropshipping Stack</h2>
        <ul>
          <li><strong>Zendrop & AutoDS:</strong> Fast US/EU product sourcing and automated tracking synchronization.</li>
          <li><strong>Loox & Judge.me:</strong> Photo reviews with Google Rich Snippets schema integration.</li>
          <li><strong>ReConvert:</strong> Post-purchase thank you page upsells with one-click checkout.</li>
          <li><strong>Klaviyo:</strong> Automated email flows for abandoned checkouts, browse abandonment, and VIP retention.</li>
        </ul>
      </article>
    `
  },
  "4": {
    id: "4",
    slug: "fashion-dropshipping-guide",
    title: "Fashion Dropshipping Shopify Store Design & Strategy | Sheun Hub",
    heading: "How to Build a Profitable Fashion Dropshipping Store on Shopify",
    description: "Complete blueprint for building a high-converting fashion dropshipping store on Shopify. Supplier strategies, custom Liquid theme design, and social proof tactics.",
    keywords: "Fashion Dropshipping Shopify, Shopify dropshipping builder, custom clothing store, fashion e-commerce expert, fashion Shopify developer",
    category: "Dropshipping",
    datePublished: "2026-04-05T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Fashion requires a different architectural DNA. From multi-variant image handling to architecting an influencer-ready storefront, we break down the strategic blueprint.",
    contentHtml: `
      <article>
        <h1>How to Build a Profitable Fashion Dropshipping Store on Shopify</h1>
        <p>By Emmanuel Adedayo (Sheun) | Published on April 5, 2026 | Category: Dropshipping</p>
        <p>The fashion e-commerce vertical demands elevated aesthetics, mobile-first product galleries, size chart precision, and strategic influencer seeding funnels to succeed in today's landscape.</p>
        <h2>Key Strategic Pillars for Fashion Stores</h2>
        <ul>
          <li><strong>Aesthetic Theme Architecture:</strong> Editorial typography, high-res lifestyle galleries, and sticky Add to Cart bars.</li>
          <li><strong>Accurate Size Chart Drawers:</strong> Eliminate the #1 reason for apparel returns with custom modal size guides.</li>
          <li><strong>Variant Swatches:</strong> Custom Liquid color and fabric swatches that update product imagery seamlessly.</li>
          <li><strong>Influencer & UGC Funnels:</strong> Integrating TikTok shop feeds and Instagram creator lookbooks on product pages.</li>
        </ul>
      </article>
    `
  },
  "5": {
    id: "5",
    slug: "woocommerce-to-shopify-migration",
    title: "WooCommerce to Shopify Migration SEO Checklist 2026 | Sheun Hub",
    heading: "How to Migrate from WooCommerce to Shopify Without Losing SEO",
    description: "Migrate WooCommerce to Shopify without losing Google search rankings. Complete step-by-step SEO checklist, URL 301 mapping, and expert migration services.",
    keywords: "migrate WooCommerce to Shopify, WooCommerce to Shopify migration, Shopify migration expert, WooCommerce to Shopify SEO checklist, ecommerce migration services",
    category: "Shopify Tips",
    datePublished: "2026-03-28T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Migrating platforms should accelerate your sales, not destroy your hard-earned search rankings. Follow our battle-tested URL mapping and SEO preservation protocol.",
    contentHtml: `
      <article>
        <h1>How to Migrate from WooCommerce to Shopify Without Losing SEO</h1>
        <p>By Emmanuel Adedayo (Sheun) | Published on March 28, 2026 | Category: Shopify Tips</p>
        <p>A step-by-step checklist to safely migrate products, customer histories, blog archives, and SEO rankings from WordPress / WooCommerce to Shopify with zero downtime.</p>
        <h2>The 5-Phase Migration Protocol</h2>
        <ol>
          <li><strong>Pre-Migration URL Crawl:</strong> Export all existing WooCommerce URLs, meta titles, descriptions, and canonicals.</li>
          <li><strong>301 Redirect Mapping:</strong> Map /product/item-name to /products/item-name and category archives cleanly.</li>
          <li><strong>Data Cleansing & Import:</strong> Import customer records, product variant matrices, and order history via CSV / Matrixify.</li>
          <li><strong>Tracking & Pixels Reconnection:</strong> Verify GA4, Google Search Console, and Meta Pixel events in Shopify.</li>
          <li><strong>Post-Launch Audit:</strong> Monitor Google Search Console 404 reports and resolve crawl errors within 24 hours.</li>
        </ol>
      </article>
    `
  },
  "6": {
    id: "6",
    slug: "shopify-seo-guide",
    title: "Shopify SEO in 2026: The Beginner's Complete Guide | Sheun Hub",
    heading: "Shopify SEO in 2026: The Beginner's Complete Guide",
    description: "Step-by-step technical and on-page Shopify SEO checklist. Learn to optimize collections, override metadata, configure rich schemas, and drive organic traffic.",
    keywords: "Shopify SEO Guide, Shopify SEO expert, Shopify SEO specialist, technical Shopify SEO, rank Shopify store, Shopify SEO consultant, Shopify optimization",
    category: "SEO",
    datePublished: "2026-03-25T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Organic search traffic converts at a much higher rate than cold ad traffic. Learn how to rank your collection pages, optimize product schemas, and earn top Google rankings.",
    contentHtml: `
      <article>
        <h1>Shopify SEO in 2026: The Beginner's Complete Guide</h1>
        <p>By Emmanuel Adedayo (Sheun) | Published on March 25, 2026 | Category: SEO</p>
        <p>Master the fundamentals of on-page, technical, and architectural SEO on Shopify to generate high-intent organic traffic that converts into paying customers.</p>
        <h2>Core Focus Areas</h2>
        <ul>
          <li><strong>Collection Architecture:</strong> Keyword-targeted collection URLs, custom description copy, and internal linking.</li>
          <li><strong>Product Schema Markup:</strong> Injecting valid Schema.org Product, Offer, AggregateRating, and Brand schemas.</li>
          <li><strong>URL Canonicalization:</strong> Fixing Shopify duplicate URL issue (/collections/name/products/item vs /products/item).</li>
          <li><strong>Speed & Mobile Optimization:</strong> Achieving top Lighthouse performance for Google mobile-first indexing.</li>
        </ul>
      </article>
    `
  },
  "7": {
    id: "7",
    slug: "leveraging-shopify-markets",
    title: "How to Leverage Shopify Markets for International Sales | Sheun Hub",
    heading: "Leveraging Shopify Markets for International Sales",
    description: "Scale your store globally with Shopify Markets. Configure custom pricing, duties calculation, localized SEO, and multi-currency checkouts for international sales.",
    keywords: "Shopify Markets guide, international Shopify setup, Shopify multi-currency, Shopify expert, Shopify partner, Shopify developer",
    category: "Shopify Tips",
    datePublished: "2026-03-20T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "Expanding into international markets is the fastest route to scale. Master currency conversion rules, country-specific pricing, and localized checkout experiences.",
    contentHtml: `
      <article>
        <h1>Leveraging Shopify Markets for International Sales</h1>
        <p>By Emmanuel Adedayo (Sheun) | Published on March 20, 2026 | Category: Shopify Tips</p>
        <p>Unlock global revenue by mastering currency conversion, language localization, and seamless international shipping strategies perfectly integrated into Shopify.</p>
        <h2>Key International Configurations</h2>
        <ul>
          <li><strong>Localized Pricing & Rounding:</strong> Set specific currency multipliers and clean price endings for global markets.</li>
          <li><strong>Duties & Tax Calculation (DDP):</strong> Prevent customs delays and unexpected fees at the customer's doorstep.</li>
          <li><strong>Subfolder vs Subdomain Routing:</strong> Optimize hreflang tags and international SEO architecture.</li>
          <li><strong>Local Payment Methods:</strong> Enable iDEAL, Bancontact, Klarna, and Sofort in key European countries.</li>
        </ul>
      </article>
    `
  },
  "8": {
    id: "8",
    slug: "shopify-not-converting",
    title: "Why Your Shopify Store Isn't Selling: 8 Conversion Killers | Sheun Hub",
    heading: "Why Your Shopify Store Isn't Selling (And How to Fix It)",
    description: "Is your Shopify storefront getting traffic but no sales? Fix low Shopify conversion rates, checkout drop-offs, and trust leaks with our conversion blueprint.",
    keywords: "Shopify store not converting, Shopify conversion optimization, e-commerce CRO audit, fix checkout drop-off, Shopify checkout audit, Shopify CRO expert",
    category: "CRO",
    datePublished: "2026-03-15T08:00:00Z",
    dateModified: "2026-09-21T08:00:00Z",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=630&auto=format&fit=crop&q=80",
    excerpt: "You're driving traffic, but visitors leave without buying. Identify the 8 silent friction points causing cart abandonment and learn how to fix them for maximum conversions.",
    contentHtml: `
      <article>
        <h1>Why Your Shopify Store Isn't Selling (And How to Fix It)</h1>
        <p>By Emmanuel Adedayo (Sheun) | Published on March 15, 2026 | Category: CRO</p>
        <p>A deep-dive investigation into the 8 conversion killers that cause visitors to bounce before completing their checkout, with concrete fixes for store owners.</p>
        <h2>The 8 Critical Conversion Killers</h2>
        <ol>
          <li><strong>Weak Value Proposition:</strong> Unclear hero copy that fails to communicate benefits in 3 seconds.</li>
          <li><strong>Missing Trust Signals:</strong> No verified reviews, lack of physical address, or generic badges.</li>
          <li><strong>Poor Product Imagery:</strong> Low-res images without lifestyle context or zoom capability.</li>
          <li><strong>Confusing Navigation:</strong> Cluttered menus that hide core product collections.</li>
          <li><strong>Mobile Speed Wall:</strong> 4+ second load times caused by uncompressed images and app script bloat.</li>
          <li><strong>Hidden Shipping Fees:</strong> Unexpected shipping costs revealed late on the final checkout screen.</li>
          <li><strong>Lack of Social Proof:</strong> Absence of real customer feedback, photos, and UGC videos.</li>
          <li><strong>Friction in Checkout:</strong> Mandatory account creation or redundant address form fields.</li>
        </ol>
      </article>
    `
  }
};

const servicePages = {
  "setup": {
    title: "Shopify Store Setup & Redesign Services | Sheun Hub",
    heading: "Shopify Store Setup & Complete Store Redesign",
    description: "Professional Shopify store setup, modern redesigns, and custom theme development tailored for conversions and high-volume sales.",
    keywords: "Shopify Store Setup, Shopify redesign, Shopify theme customization, professional Shopify developer",
    path: "/services/setup"
  },
  "dropshipping": {
    title: "Shopify Dropshipping Store Builds & Sourcing Setup | Sheun Hub",
    heading: "High-Converting Shopify Dropshipping Store Builds",
    description: "Automated dropshipping stores engineered for high conversion rates, fast US/EU suppliers, custom branding, and streamlined order fulfillment.",
    keywords: "Shopify Dropshipping Store, dropshipping setup, automated Shopify store, Zendrop integration",
    path: "/services/dropshipping"
  },
  "migration": {
    title: "WooCommerce to Shopify Migration Services | Sheun Hub",
    heading: "WooCommerce to Shopify Migration with Zero SEO Loss",
    description: "Seamless e-commerce migration from WooCommerce, Magento, or BigCommerce to Shopify with preserved SEO rankings, 301 redirects, and customer data integrity.",
    keywords: "WooCommerce to Shopify migration, migrate to Shopify, Shopify migration expert, 301 redirect mapping",
    path: "/services/migration"
  },
  "custom": {
    title: "Custom Shopify Liquid Development & Sections | Sheun Hub",
    heading: "Custom Shopify Liquid Theme Development",
    description: "Bespoke Shopify Liquid development, custom Theme 2.0 sections, Metaobjects, and tailored storefront features without heavy app dependencies.",
    keywords: "custom Shopify development, Shopify Liquid developer, bespoke Shopify theme sections, custom Shopify code",
    path: "/services/custom"
  },
  "plus": {
    title: "Shopify Plus & Enterprise Engineering | Sheun Hub",
    heading: "Shopify Plus & Enterprise E-Commerce Engineering",
    description: "Enterprise-grade Shopify Plus solutions, Checkout Extensibility customizations, custom API integrations, and scalable B2B architecture.",
    keywords: "Shopify Plus developer, Shopify Plus agency, Checkout Extensibility, Shopify enterprise engineering",
    path: "/services/plus"
  },
  "bug": {
    title: "Shopify Bug Fixing & Liquid Troubleshooting | Sheun Hub",
    heading: "Shopify Bug Fixing & Rapid Technical Troubleshooting",
    description: "Fast, reliable Shopify bug fixes, broken Liquid code repairs, checkout troubleshooting, and layout conflict resolution within 24 hours.",
    keywords: "Shopify bug fix, fix Shopify code, Shopify developer emergency, Liquid bug fixing",
    path: "/services/bug"
  },
  "seo": {
    title: "Technical Shopify SEO Services & Organic Growth | Sheun Hub",
    heading: "Technical Shopify SEO & Search Engine Optimization",
    description: "Comprehensive Shopify SEO audits, schema structured data implementation, collection page optimization, and organic traffic growth strategies.",
    keywords: "Shopify SEO services, Shopify SEO expert, technical ecommerce SEO, rank Shopify store",
    path: "/services/seo"
  },
  "cro": {
    title: "Shopify CRO & Conversion Rate Optimization | Sheun Hub",
    heading: "Shopify Conversion Rate Optimization (CRO)",
    description: "Data-driven Shopify CRO audits, A/B testing, checkout funnel optimization, and mobile UX refinements to turn traffic into paying customers.",
    keywords: "Shopify CRO, Shopify conversion optimization, ecommerce CRO audit, checkout optimization",
    path: "/services/cro"
  },
  "apps": {
    title: "Custom Shopify App Integration & API Middleware | Sheun Hub",
    heading: "Custom Shopify App Integration & API Middleware",
    description: "Seamless third-party app installations, API middleware development, ERP/CRM synchronization, and custom webhooks without theme bloat.",
    keywords: "Shopify app integration, Shopify API developer, custom Shopify webhooks, Shopify private apps",
    path: "/services/apps"
  },
  "speed": {
    title: "Shopify Speed Optimization & Core Web Vitals | Sheun Hub",
    heading: "Shopify Speed Optimization & Core Web Vitals",
    description: "Achieve sub-1.5s mobile loading times and 90+ Google Lighthouse scores with expert Shopify performance optimization and script pruning.",
    keywords: "Shopify Speed Optimization, Core Web Vitals Shopify, improve Shopify speed, Shopify pagespeed expert",
    path: "/services/speed"
  },
  "email-marketing": {
    title: "Shopify Retention Marketing (Email & SMS) | Sheun Hub",
    heading: "Shopify Email & SMS Marketing Automation",
    description: "High-converting Klaviyo email marketing flows, abandoned checkout recovery sequences, and SMS retention funnels to increase customer lifetime value.",
    keywords: "Shopify email marketing, Klaviyo flows, Shopify SMS marketing, ecommerce retention funnels",
    path: "/services/email-marketing"
  },
  "paid-ads": {
    title: "Shopify Paid Ads & Social Funnels | Sheun Hub",
    heading: "Shopify Paid Ads & Social Acquisition Funnels",
    description: "High-ROAS Meta Ads, TikTok campaigns, and Google Shopping feed optimization designed specifically for direct-to-consumer Shopify brands.",
    keywords: "Shopify paid ads, Meta ads for Shopify, TikTok ads ecommerce, Google Shopping Shopify",
    path: "/services/paid-ads"
  },
  "influencer-affiliate": {
    title: "Shopify Influencer & Affiliate Marketing Systems | Sheun Hub",
    heading: "Influencer Seeding & Affiliate Marketing Systems",
    description: "Automated creator seeding pipelines, user-generated content (UGC) workflows, and multi-tier affiliate tracking systems for Shopify stores.",
    keywords: "Shopify influencer marketing, affiliate tracking Shopify, UGC creator pipeline, ecommerce influencer seeding",
    path: "/services/influencer-affiliate"
  }
};

const mainPages = {
  "/": {
    title: "Shopify Developer & E-Commerce Expert | Sheun Hub",
    heading: "Shopify Development & E-Commerce Growth by Sheun Hub",
    description: "Scale your e-commerce brand with Sheun Hub, specialists in high-converting Shopify development, theme customization, and strategic growth.",
    keywords: "Shopify Developer, Shopify Expert, Shopify Partner, custom Shopify theme, e-commerce development",
    type: "website"
  },
  "/about": {
    title: "About Sheun Hub | Shopify Partner & E-Commerce Engineer",
    heading: "About Sheun Hub and Our E-Commerce Mission",
    description: "Learn about Sheun Hub, our technical engineering standards, and Emmanuel Adedayo (Sheun), lead Shopify developer and growth engineer.",
    keywords: "About Sheun Hub, Shopify Partner, Emmanuel Adedayo, Shopify Developer London, ecommerce engineer",
    type: "website"
  },
  "/services": {
    title: "Shopify Development & E-Commerce Services | Sheun Hub",
    heading: "Shopify Development and E-Commerce Services",
    description: "Explore full-service Shopify store builds, migrations, speed optimization, CRO audits, and retention marketing by Sheun Hub.",
    keywords: "Shopify services, Shopify store setup, Shopify speed optimization, WooCommerce to Shopify migration",
    type: "website"
  },
  "/portfolio": {
    title: "Shopify Store Portfolio & Case Studies | Sheun Hub",
    heading: "Shopify Development Portfolio and Proven Results",
    description: "Case studies and proven store development results delivered for global e-commerce brands by Sheun Hub.",
    keywords: "Shopify portfolio, Shopify case studies, ecommerce store examples, Shopify developer work",
    type: "website"
  },
  "/calculator": {
    title: "Shopify Store ROI & Pricing Calculator | Sheun Hub",
    heading: "Shopify Project Pricing and Revenue Calculator",
    description: "Estimate your project investment, revenue projections, and ROI for custom Shopify development with Sheun Hub.",
    keywords: "Shopify cost calculator, Shopify development price, ecommerce ROI calculator",
    type: "website"
  },
  "/apply": {
    title: "Apply for a Project | Sheun Hub",
    heading: "Apply to Work with Sheun Hub on Your Shopify Store",
    description: "Submit your Shopify project specifications and get a tailored proposal from Sheun Hub within 24 hours.",
    keywords: "hire Shopify developer, apply for Shopify project, Shopify agency quote",
    type: "website"
  },
  "/blog": {
    title: "Shopify Tips, Guides & E-Commerce Insights | Sheun Hub",
    heading: "Shopify Tips, Technical Guides, and E-Commerce Insights",
    description: "In-depth guides on Shopify speed optimization, dropshipping apps, technical SEO, and conversion optimization from Sheun Hub.",
    keywords: "Shopify blog, Shopify tips, ecommerce guides, Shopify speed guide, dropshipping apps",
    type: "blog"
  },
  "/contact": {
    title: "Contact Sheun Hub | Hire a Shopify Expert",
    heading: "Get in Touch with Sheun Hub",
    description: "Get in touch with Sheun Hub for Shopify development, technical store audits, and growth consultation.",
    keywords: "contact Shopify developer, hire Shopify expert, Sheun Hub contact",
    type: "website"
  },
  "/privacy-policy": {
    title: "Privacy Policy | Sheun Hub",
    heading: "Privacy Policy for Sheun Hub",
    description: "Privacy policy and data handling practices for Sheun Hub.",
    keywords: "privacy policy Sheun Hub",
    type: "website"
  },
  "/terms-of-service": {
    title: "Terms of Service | Sheun Hub",
    heading: "Terms of Service for Sheun Hub",
    description: "Terms of service and engagement agreements for Sheun Hub clients and visitors.",
    keywords: "terms of service Sheun Hub",
    type: "website"
  },
  "/shopify-seo-sprint": {
    title: "48-Hour Shopify SEO Sprint | Rapid Ranking Growth | Sheun Hub",
    heading: "48-Hour Shopify SEO Sprint for High-Intent Organic Traffic",
    description: "Fix indexing issues, metadata errors, and technical bottlenecks in 48 hours with our specialized Shopify SEO Sprint.",
    keywords: "Shopify SEO Sprint, 48 hour SEO, Shopify technical SEO fix, rapid Shopify ranking",
    type: "website"
  },
  "/shopify-store-audit": {
    title: "48-Hour Shopify Store Audit | CRO & Technical Health | Sheun Hub",
    heading: "48-Hour Shopify Store Audit and CRO Health Check",
    description: "Comprehensive 48-hour Shopify audit uncovering conversion leaks, speed bottlenecks, and configuration oversights.",
    keywords: "Shopify store audit, ecommerce audit, Shopify CRO audit, 48 hour audit",
    type: "website"
  },
  "/shopify-not-converting": {
    title: "Why Your Shopify Store Isn't Selling: 8 Conversion Killers | Sheun Hub",
    heading: "Why Your Shopify Store Isn't Selling (And How to Fix It)",
    description: "Is your Shopify storefront getting traffic but no sales? Fix low Shopify conversion rates, checkout drop-offs, and trust leaks with our conversion blueprint.",
    keywords: "Shopify store not converting, Shopify conversion optimization, e-commerce CRO audit",
    type: "article",
    blogId: "8"
  },
  "/shopify-seo-guide": {
    title: "Shopify SEO in 2026: The Beginner's Complete Guide | Sheun Hub",
    heading: "Shopify SEO in 2026: The Beginner's Complete Guide",
    description: "Step-by-step technical and on-page Shopify SEO checklist. Learn to optimize collections, override metadata, configure rich schemas, and drive organic traffic.",
    keywords: "Shopify SEO Guide, Shopify SEO expert, Shopify SEO specialist, technical Shopify SEO",
    type: "article",
    blogId: "6"
  },
  "/shopify-settings-guide": {
    title: "10 Shopify Settings Most Store Owners Miss | Sheun Hub",
    heading: "10 Shopify Settings Most Store Owners Miss (And Why They Cost You Sales)",
    description: "Audit hidden Shopify admin settings to boost conversion rates, optimize checkout pipelines, and streamline global delivery for international brands.",
    keywords: "Shopify Settings Guide, Shopify Backend Settings, Shopify checkout audit",
    type: "article",
    blogId: "1"
  },
  "/shopify-speed-optimization": {
    title: "How to Speed Up Your Shopify Store in 2026 | Sheun Hub",
    heading: "How to Speed Up Your Shopify Store in 2026 (Step by Step)",
    description: "Step-by-step guide to Shopify speed optimization and Core Web Vitals. Eliminate script bloat, lazy-load assets, and achieve sub-1.5s mobile load times.",
    keywords: "Shopify Speed Optimization, Core Web Vitals Shopify, improve Shopify pagespeed",
    type: "article",
    blogId: "2"
  },
  "/woocommerce-to-shopify-migration": {
    title: "WooCommerce to Shopify Migration SEO Checklist 2026 | Sheun Hub",
    heading: "How to Migrate from WooCommerce to Shopify Without Losing SEO",
    description: "Migrate WooCommerce to Shopify without losing Google search rankings. Complete step-by-step SEO checklist, URL 301 mapping, and expert migration services.",
    keywords: "migrate WooCommerce to Shopify, WooCommerce to Shopify migration, Shopify migration expert",
    type: "article",
    blogId: "5"
  },
  "/best-dropshipping-apps": {
    title: "The Best Shopify Apps for Dropshipping Stores in 2026 | Sheun Hub",
    heading: "The Best Shopify Apps for Dropshipping Stores in 2026",
    description: "Discover the top Shopify dropshipping apps in 2026. Compare sourcing platforms, inventory sync tools, custom packaging solutions, and automated order fulfillment.",
    keywords: "Shopify Dropshipping Apps, best sourcing tools, dropshipping builder",
    type: "article",
    blogId: "3"
  },
  "/fashion-dropshipping-guide": {
    title: "Fashion Dropshipping Shopify Store Design & Strategy | Sheun Hub",
    heading: "How to Build a Profitable Fashion Dropshipping Store on Shopify",
    description: "Complete blueprint for building a high-converting fashion dropshipping store on Shopify. Supplier strategies, custom Liquid theme design, and social proof tactics.",
    keywords: "Fashion Dropshipping Shopify, Shopify dropshipping builder, custom clothing store",
    type: "article",
    blogId: "4"
  },
  "/leveraging-shopify-markets": {
    title: "How to Leverage Shopify Markets for International Sales | Sheun Hub",
    heading: "Leveraging Shopify Markets for International Sales",
    description: "Scale your store globally with Shopify Markets. Configure custom pricing, duties calculation, localized SEO, and multi-currency checkouts for international sales.",
    keywords: "Shopify Markets guide, international Shopify setup, Shopify multi-currency",
    type: "article",
    blogId: "7"
  }
};

function generateSchemaForRoute(route, pageInfo, blogPost) {
  const canonicalUrl = `https://www.sheun.online${route === '/' ? '' : route}`;
  
  if (blogPost) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      "headline": blogPost.heading,
      "name": blogPost.title,
      "description": blogPost.description,
      "image": [
        blogPost.image,
        blogPost.image.includes("?") ? `${blogPost.image}&w=1200&h=630` : `${blogPost.image}?w=1200&h=630`
      ],
      "datePublished": blogPost.datePublished,
      "dateModified": blogPost.dateModified,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "url": canonicalUrl,
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
      "articleSection": blogPost.category,
      "keywords": blogPost.keywords
    };
  }

  if (route === '/' || route === '/about') {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://www.sheun.online/#organization",
          "name": "Sheun Hub",
          "url": "https://www.sheun.online",
          "logo": "https://www.sheun.online/logo.png",
          "image": "https://www.sheun.online/og-image.jpg",
          "description": "High-converting Shopify development, custom Liquid theme engineering, store migrations, and technical SEO sprints.",
          "founder": {
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
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "GB"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.sheun.online/#website",
          "url": "https://www.sheun.online",
          "name": "Sheun Hub",
          "publisher": {
            "@id": "https://www.sheun.online/#organization"
          }
        }
      ]
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": pageInfo.title,
    "description": pageInfo.description,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Sheun Hub",
      "url": "https://www.sheun.online"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.sheun.online"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": pageInfo.heading || pageInfo.title,
          "item": canonicalUrl
        }
      ]
    }
  };
}

function buildPrerenderedHtml(baseHtmlTemplate, route, pageInfo, blogPost) {
  const canonicalUrl = `https://www.sheun.online${route === '/' ? '' : route}`;
  const title = pageInfo.title;
  const description = pageInfo.description;
  const keywords = pageInfo.keywords || "Shopify Developer, Shopify Expert, Sheun Hub";
  const type = blogPost ? "article" : (pageInfo.type || "website");
  const ogImage = blogPost ? blogPost.image : "https://www.sheun.online/og-image.jpg";
  const schema = generateSchemaForRoute(route, pageInfo, blogPost);
  const jsonLdString = JSON.stringify(schema, null, 2);

  // Replace title & existing head tags
  let html = baseHtmlTemplate;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/gi, `<title>${title}</title>`);

  // Build complete meta block to inject into <head>
  const metaTags = `
    <!-- Primary Meta Tags -->
    <meta name="title" content="${title}" />
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta name="author" content="Emmanuel Adedayo (Sheun)" />
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph / Facebook / LinkedIn -->
    <meta property="og:type" content="${type}" />
    <meta property="og:site_name" content="Sheun Hub" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:secure_url" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${title}" />
    ${blogPost ? `<meta property="article:published_time" content="${blogPost.datePublished}" />
    <meta property="article:modified_time" content="${blogPost.dateModified}" />
    <meta property="article:author" content="Emmanuel Adedayo (Sheun)" />
    <meta property="article:section" content="${blogPost.category}" />` : ''}

    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@sheunhub" />
    <meta name="twitter:creator" content="@sheunhub" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:image:alt" content="${title}" />

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
${jsonLdString}
    </script>
  `;

  // Inject metaTags before </head>
  // Clean up any default placeholders in template first
  html = html.replace(/<meta name="description".*?\/>/gi, '');
  html = html.replace(/<meta property="og:.*?\/>/gi, '');
  html = html.replace(/<meta name="twitter:.*?\/>/gi, '');
  html = html.replace(/<link rel="canonical".*?\/>/gi, '');

  html = html.replace('</head>', `${metaTags}\n  </head>`);

  // Body content fallback for non-JS crawlers
  const bodyContent = blogPost ? blogPost.contentHtml : `
    <main>
      <h1>${pageInfo.heading || pageInfo.title}</h1>
      <p>${pageInfo.description}</p>
      <nav>
        <a href="/">Home</a> | 
        <a href="/about">About</a> | 
        <a href="/services">Services</a> | 
        <a href="/portfolio">Portfolio</a> | 
        <a href="/blog">Blog</a> | 
        <a href="/contact">Contact</a>
      </nav>
    </main>
  `;

  // Inject into #root
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">\n      <noscript>\n${bodyContent}\n      </noscript>\n    </div>`
  );

  return html;
}

async function runPrerender() {
  console.log('Starting build-time static HTML & metadata prerendering...');
  const templatePath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Make sure vite build ran first!');
    process.exit(1);
  }

  const baseHtmlTemplate = fs.readFileSync(templatePath, 'utf8');

  // Build list of all targets
  const allTargets = [];

  // 1. Main Pages
  for (const [route, pageInfo] of Object.entries(mainPages)) {
    const blogPost = pageInfo.blogId ? blogPosts[pageInfo.blogId] : undefined;
    allTargets.push({ route, pageInfo, blogPost });
  }

  // 2. Services
  for (const [serviceKey, serviceInfo] of Object.entries(servicePages)) {
    allTargets.push({
      route: `/services/${serviceKey}`,
      pageInfo: serviceInfo,
      blogPost: undefined
    });
  }

  // 3. Blog Numeric URLs (/blog/1 to /blog/8)
  for (const [id, post] of Object.entries(blogPosts)) {
    allTargets.push({
      route: `/blog/${id}`,
      pageInfo: {
        title: post.title,
        heading: post.heading,
        description: post.description,
        keywords: post.keywords,
        type: "article"
      },
      blogPost: post
    });
  }

  // 4. Blog Slug URLs (/blog/shopify-speed-optimization, etc.)
  for (const [id, post] of Object.entries(blogPosts)) {
    allTargets.push({
      route: `/blog/${post.slug}`,
      pageInfo: {
        title: post.title,
        heading: post.heading,
        description: post.description,
        keywords: post.keywords,
        type: "article"
      },
      blogPost: post
    });
  }

  console.log(`Processing ${allTargets.length} static routes...`);

  let count = 0;
  for (const target of allTargets) {
    const { route, pageInfo, blogPost } = target;
    const prerenderedHtml = buildPrerenderedHtml(baseHtmlTemplate, route, pageInfo, blogPost);

    if (route === '/') {
      fs.writeFileSync(path.join(distPath, 'index.html'), prerenderedHtml);
    } else {
      const routeDir = path.join(distPath, route.startsWith('/') ? route.slice(1) : route);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.join(routeDir, 'index.html'), prerenderedHtml);
    }
    count++;
  }

  console.log(`Successfully generated ${count} route-specific static HTML files with dedicated Open Graph, Twitter cards, canonicals, and Schema.org metadata!`);
}

runPrerender().catch(err => {
  console.error('Prerender error:', err);
  process.exit(1);
});
