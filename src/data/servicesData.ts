import { Layout, ShoppingCart, RefreshCw, Palette, Bug, Search, Target, Zap } from "lucide-react";

export const servicesData = {
  "setup": {
    title: "Shopify Store Setup",
    heading: "Launch Your Shopify Store The Right Way",
    description: "Complete Shopify store setup from scratch — theme, products, payments, and launch-ready configuration.",
    icon: "Layout",
    problem: "Starting an e-commerce business is overwhelming. Choosing the right theme, configuring shipping zones, setting up payment gateways, and ensuring proper legal pages can take weeks if you don't know the platform. A poorly setup store not only looks unprofessional but causes technical issues that block sales on launch day.",
    scope: "I deliver a fully functional, launch-ready Shopify store. This includes premium theme installation and branding customization, uploading your initial products with optimized layouts, setting up secure payment gateways (Shopify Payments, PayPal, etc.), configuring accurate shipping rates, adding necessary legal/policy pages, and integrating essential apps for marketing and analytics.",
    deliverables: [
      "Premium Theme Installation & Styling",
      "Product & Collection Setup",
      "Payment & Shipping Configuration",
      "Essential App Integration",
      "Mobile-Responsive Design Tweaks",
      "SEO-Friendly URL Structure"
    ],
    faqs: [
      { q: "How long does a full store setup take?", a: "Typically 1 to 2 weeks, depending on the number of products and the complexity of the design." },
      { q: "Do I need to buy a premium theme?", a: "While free themes work, I highly recommend a premium theme for better conversion features and unique branding. I can help you choose the best one." },
      { q: "Will my store be mobile-friendly?", a: "Absolutely. Over 70% of traffic comes from mobile devices, so every store I build is rigorously tested on mobile." },
      { q: "Can I manage the store myself after launch?", a: "Yes. Shopify is user-friendly, and I will show you how to manage inventory, fulfill orders, and update products." },
      { q: "Are domain setup and email included?", a: "Yes, I will properly connect your custom domain to Shopify and can advise on setting up professional business email." }
    ],
    keywords: "Shopify Store Setup, Launch Shopify, Hire Shopify Expert, New Shopify Store, E-commerce Setup"
  },
  "dropshipping": {
    title: "Dropshipping Build",
    heading: "High-Converting Dropshipping Stores",
    description: "Full dropshipping store for fashion, beauty, pets, or gadgets — supplier integration and conversion-optimized design.",
    icon: "ShoppingCart",
    problem: "Most dropshipping stores fail because they look like cheap templates. Customers don't trust them, and the user experience is filled with friction. Furthermore, manually fulfilling orders and managing inventory from AliExpress or other suppliers is a nightmare that prevents you from scaling.",
    scope: "I build trust-optimized, automated dropshipping stores. I integrate reliable supplier apps (like DSers or Zendrop), import high-quality products, write converting sales copy for key items, and design a layout that builds instant credibility. The store will be set up for 1-click order fulfillment, allowing you to focus purely on marketing and advertising.",
    deliverables: [
      "Automated Supplier App Integration",
      "Trust Badges & Social Proof Setup",
      "Winning Product Imports & Formatting",
      "Conversion Rate Optimized Layout",
      "Automated Order Fulfillment System",
      "Email Marketing Integration"
    ],
    faqs: [
      { q: "Which supplier apps do you work with?", a: "I work with DSers, Zendrop, CJ Dropshipping, Spocket, and private agent integrations." },
      { q: "Will the store look like a generic dropshipping site?", a: "No. My primary goal is to build a brand. We use custom branding, edited images, and trustworthy layouts to hide the 'dropship' feel." },
      { q: "Is shipping calculated automatically?", a: "Yes, I will configure shipping rates based on your supplier's ePacket or express shipping costs." },
      { q: "Can we integrate AliExpress reviews?", a: "Absolutely. I integrate apps like Loox or AliReviews to import real photo reviews for social proof." },
      { q: "Do you help with Facebook or TikTok ads?", a: "I focus strictly on the website development and conversion optimization, giving you the best possible foundation for your ads to succeed." }
    ],
    keywords: "Shopify Dropshipping Store, Custom Dropshipping Build, Zendrop Setup, eCommerce Dropshipping Expert"
  },
  "migration": {
    title: "Store Migration",
    heading: "Seamless eCommerce Platform Migration",
    description: "Seamlessly migrate your store from any platform to Shopify without losing data, SEO rankings, or sales momentum.",
    icon: "RefreshCw",
    problem: "Moving from WooCommerce, Wix, or BigCommerce to Shopify is risky. Do it wrong, and you'll lose your customer accounts, mess up your inventory, break product links, and destroy your Google SEO rankings built over years.",
    scope: "I provide a 100% secure, zero-data-loss migration to Shopify. I transfer your entire product catalog, customer database, order history, and blog posts. Most importantly, I implement vital 301 redirects to ensure your organic Google traffic is perfectly preserved. Afterward, I match your old design or build a fresh, upgraded UI on Shopify.",
    deliverables: [
      "Complete Data Migration (Products, Customers, Orders)",
      "Strict SEO 301 Redirect Mapping",
      "Domain Transfer & DNS Configuration",
      "Matching UI/UX Design on Shopify",
      "Post-Migration Link Testing",
      "Zero Downtime Transition"
    ],
    faqs: [
      { q: "Will I lose my SEO rankings?", a: "With my strict 301 redirect mapping, your SEO rankings are preserved. Google will seamlessly recognize the new URLs." },
      { q: "Will my website go offline during the move?", a: "No. Your old site remains live while I build the Shopify store on a temporary domain. We only switch over when everything is perfect." },
      { q: "Can you migrate my customer passwords?", a: "For security reasons, passwords cannot be migrated. I will set up an automated email asking customers to reset their passwords on the new site." },
      { q: "How long does a migration take?", a: "Usually 2 to 3 weeks, heavily depending on the size of your catalog and custom design requirements." },
      { q: "Can my old apps be transferred?", a: "Apps cannot be directly transferred. I will find and configure the best Shopify equivalents for your existing apps." }
    ],
    keywords: "Shopify Migration, WooCommerce to Shopify, eCommerce Platform Transfer, Wix to Shopify, Safe Store Migration"
  },
  "custom": {
    title: "Custom Liquid Dev",
    heading: "Bespoke Shopify Themes & Custom Coding",
    description: "Bespoke Shopify store using premium themes — fully tailored to your brand identity with custom Liquid code.",
    icon: "Palette",
    problem: "Standard Shopify themes can be restrictive. When your brand outgrows the basic settings, you need unique product pages, complex custom logic, or specialized interactive elements that simply don't exist out of the box.",
    scope: "I write clean, efficient, and upgrade-safe Liquid, HTML, CSS, and vanilla JavaScript to create entirely custom sections and functionalities. Whether you need a bespoke 'Build a Box' feature, a unique mega-menu, or a highly tailored product page template, I engineer solutions that align perfectly with your complex business needs.",
    deliverables: [
      "Custom Homepage & Product Page Sections",
      "Advanced Liquid Logic & Calculations",
      "Custom Mega Menus & Navigation",
      "API Integrations & Custom Forms",
      "Performance-Optimized JavaScript",
      "Theme Update-Safe Coding"
    ],
    faqs: [
      { q: "Will your custom code slow down my site?", a: "No. I write lightweight, optimized code without relying on heavy jQuery frameworks, ensuring fast load times." },
      { q: "Can I still update my theme later?", a: "I design custom sections to be as modular as possible. However, major theme updates may require minor code adjustments." },
      { q: "Can I edit the custom sections myself?", a: "Yes, I build custom sections with fully integrated Shopify Theme Editor blocks so you can change text, images, and colors without coding." },
      { q: "How do you price custom development?", a: "Pricing is based on the complexity and scope of the specific feature. Contact me for an accurate quote." },
      { q: "Do you modify checkout pages?", a: "Checkout modifications are strictly limited by Shopify unless you are on Shopify Plus. I can customize what is permitted." }
    ],
    keywords: "Custom Shopify Liquid, Hire Liquid Developer, Custom Shopify Theme, Shopify Coding, Freelance Liquid Expert"
  },
  "bug": {
    title: "Bug Fixing",
    heading: "Emergency Shopify Bug Fixes & Support",
    description: "Fast resolution of any Shopify errors, broken layouts, app conflicts, or checkout issues.",
    icon: "Bug",
    problem: "A broken add-to-cart button, a distorted layout on mobile, or a conflicting app script can instantly drain your revenue. When your live store breaks, waiting days for support is not an option.",
    scope: "I provide rapid, priority bug fixing for Shopify stores. I will diagnose the issue—whether it's a CSS layout break, a broken Liquid tag, or a JavaScript app conflict—and deploy a safe fix without interrupting your live traffic. From urgent checkout bugs to minor visual tweaks, your store will operate flawlessly.",
    deliverables: [
      "Rapid Issue Diagnosis & Troubleshooting",
      "Safe Duplicate-Theme Testing",
      "CSS Layout & Mobile Responsiveness Fixes",
      "JavaScript App Conflict Resolution",
      "Theme Code Clean-up",
      "Post-Fix Warranty"
    ],
    faqs: [
      { q: "How fast can you fix my issue?", a: "Depending on my current workload, emergency bugs are usually addressed within 24-48 hours." },
      { q: "Do you need access to my live store?", a: "Yes, you will need to grant me a collaborator account with access to Themes and Apps to diagnose the issue." },
      { q: "Will the fix break anything else?", a: "I always test my fixes on an unpublished duplicate theme first to ensure 100% safety before making it live." },
      { q: "Can you fix apps made by third parties?", a: "I can fix conflicts between the app and your theme. If the app's internal server code is broken, we will need to contact the app developer." },
      { q: "How is pricing determined for bugs?", a: "I provide a fixed quote after a preliminary review of the issue, so there are no surprise hourly fees." }
    ],
    keywords: "Shopify Bug Fix, Fix Shopify Error, Broken Shopify Theme, Shopify Tech Support, Emergency Shopify Help"
  },
  "seo": {
    title: "SEO Optimization",
    heading: "Technical Shopify SEO to Dominate Google Search",
    description: "Shopify-specific SEO setup to improve your Google rankings and drive organic traffic.",
    icon: "Search",
    problem: "You have a beautiful store, but no one can find it without paid ads. Relying solely on Facebook or TikTok ads destroys your profit margins. If your technical SEO is messy, Google won't index your products properly.",
    scope: "I perform a comprehensive technical SEO overhaul specific to Shopify's ecosystem. I fix your site's architecture, optimize meta titles and descriptions, implement crucial Schema Markup (JSON-LD) for rich snippets, fix broken links, and ensure correct canonical tags. This builds a foundation for long-term, free organic traffic that actually translates to sales.",
    deliverables: [
      "In-Depth Site Architecture Audit",
      "Meta Tag & Alt Text Optimization",
      "Product & Article Schema Markup",
      "Canonical Tag & Pagination Fixes",
      "Google Search Console Setup & Sitemap Submission",
      "Page Speed & Core Web Vitals Tuning"
    ],
    faqs: [
      { q: "When will I see results from SEO?", a: "SEO is a long-term strategy. Technical fixes give an immediate boost to crawlability, but ranking improvements typically take 3 to 6 months." },
      { q: "Is this a one-time service or monthly?", a: "My Technical SEO setup is a one-time service that builds the foundation. I also offer monthly packages for ongoing content optimization." },
      { q: "Will I rank #1 on Google?", a: "No honest developer can guarantee a #1 ranking. I guarantee your site will perfectly adhere to Google's best practices, giving you the highest possible chance to rank." },
      { q: "What is Schema Markup?", a: "Schema is code that helps Google understand your products (price, reviews, availability) so they can show 'Rich Snippets' in search results." },
      { q: "Does page speed affect SEO?", a: "Yes, massively. Google penalizes slow sites. My SEO service includes basic speed optimizations for better Core Web Vitals." }
    ],
    keywords: "Shopify SEO Expert, Shopify Search Engine Optimization, Technical SEO Shopify, Shopify Organic Traffic, Boost Shopify Sales"
  },
  "cro": {
    title: "Conversion Rate Optimization (CRO)",
    heading: "Turn Browsers into Buyers with Data-Driven CRO",
    description: "A deep, data-driven analysis of your store's user behavior, providing a strategic roadmap of UI/UX improvements to increase your sales without increasing traffic.",
    icon: "Target",
    problem: "You are spending thousands on ads, getting thousands of visitors, but your conversion rate is stuck below 1%. People are adding to cart but abandoning at checkout. You don't know why they are leaving, so you guess and change colors randomly.",
    scope: "I use data, not guesswork. I will install heatmap tracking (like Microsoft Clarity or Hotjar) to record real user behavior. I conduct a comprehensive heuristic UX audit of your layout, identify exactly where the friction is, and redesign those elements. We will implement trust signals, streamline checkout flows, and clarify product messaging to drastically improve your Conversion Rate.",
    deliverables: [
      "Heatmap & Session Recording Setup",
      "Comprehensive UI/UX Heuristic Audit",
      "Friction Point Identification Report",
      "Trust & Credibility Enhancements",
      "Mobile Checkout Flow Optimization",
      "Implementation of High-Converting UI Changes"
    ],
    faqs: [
      { q: "What is a good conversion rate for Shopify?", a: "The industry average is around 1.5% - 2%. My goal is to push high-performing stores toward 3% - 5%." },
      { q: "Do I need traffic for a CRO audit to work?", a: "Yes. CRO relies on data. You need a steady stream of traffic (at least a few thousand visitors a month) to gather meaningful heatmap data." },
      { q: "How long does a CRO audit take?", a: "I usually collect data for 1-2 weeks, then take a week to compile the audit and implement the structural changes." },
      { q: "What kind of changes will you make?", a: "Changes may include repositioning 'Add to Cart' buttons, simplifying navigation, adding trust badges, reformatting descriptions, and improving mobile layouts." },
      { q: "Will this guarantee more sales?", a: "CRO maximizes the value of your existing traffic. If your product and offer are solid, CRO will almost always yield a measurable uplift in sales." }
    ],
    keywords: "Shopify CRO Expert, Conversion Rate Optimization Shopify, Improve Shopify Sales, Shopify UX Audit, Reduce Cart Abandonment"
  },
  "apps": {
    title: "App Configuration",
    heading: "Expert Third-Party App Setup & Integration",
    description: "Integration and configuration of complex Shopify apps (Klaviyo, Recharge, Yotpo, etc.) ensuring they work flawlessly together.",
    icon: "Layout",
    problem: "Installing apps is easy; configuring them correctly is hard. Poorly configured apps conflict with each other, break your theme's styling, and confuse customers. Subscriptions, advanced email marketing, and complex loyalty programs require expert technical setup.",
    scope: "I handle the complex configuration of advanced Shopify apps. Whether you are setting up recurring subscriptions with Recharge, advanced email flows with Klaviyo, or a multi-tiered loyalty program with Yotpo, I integrate them seamlessly into your theme. I ensure the CSS matches your branding perfectly and no app scripts conflict with your store's core functions.",
    deliverables: [
      "Complex App Installation & Verification",
      "Custom CSS Styling to Match Theme",
      "Conflict Resolution with Existing Apps",
      "Workflow & Automation Configuration",
      "Performance Testing & Script Deferral",
      "Staff Training on App Usage"
    ],
    faqs: [
      { q: "Can you make an app look like my theme?", a: "Yes, I override the default app CSS to ensure its widgets seamlessly match your site’s fonts, colors, and styling." },
      { q: "Are you an app developer?", a: "I do not build private apps from scratch. I specialize in integrating, configuring, and styling existing high-tier public apps." },
      { q: "Will installing too many apps slow down my store?", a: "Yes, 'app bloat' is a major issue. I ensure we only install what is strictly necessary and defer their scripts to protect page speed." },
      { q: "Can you migrate my data between apps?", a: "Yes, such as moving reviews from Loox to Judge.me, or subscribers from Mailchimp to Klaviyo." },
      { q: "What happens if an app breaks my store?", a: "I always take a theme backup before installing complex apps. If something breaks, I can instantly revert and troubleshoot safely." }
    ],
    keywords: "Shopify App Setup, Klaviyo Integration, Recharge Subscriptions Setup, Shopify App Configuration"
  },
  "speed": {
    title: "Speed Optimization",
    heading: "Lightning-Fast Shopify Speed Optimization",
    description: "Deep technical site speed optimization to improve Core Web Vitals, reduce bounce rates, and boost conversions.",
    icon: "Zap",
    problem: "Every second of delay reduces your conversion rate by 7%. Customers on mobile will not wait 6 seconds for your massive banner images and 20 marketing apps to load. Slow speeds kill your Google rankings and destroy your ROI on paid ads.",
    scope: "I perform a ruthless technical speed optimization on your Shopify theme. I compress images, implement lazy-loading, defer non-essential JavaScript, preload critical CSS/fonts, and prune leftover code from deleted apps. Your store will achieve significantly higher Google PageSpeed scores and, more importantly, feel instantly responsive to actual users.",
    deliverables: [
      "Complete Core Web Vitals Audit",
      "Image Compression & WebP Conversion",
      "JavaScript & App Script Deferral",
      "CSS Minification & Preloading",
      "Removal of Dead Code (App Leftovers)",
      "Before & After Performance Report"
    ],
    faqs: [
      { q: "What score will I get on Google PageSpeed Insights?", a: "While I aim for 80+ on Mobile and 90+ on Desktop, real-world load time (under 2.5s) is heavily reliant on the apps you require for your business." },
      { q: "Will optimization change how my site looks?", a: "No. Speed optimization happens 'under the hood'. Your website will look exactly the same, but load much faster." },
      { q: "Do you use an app to do this?", a: "No. Speed apps often break themes. I optimize the code manually for permanent, safe results." },
      { q: "Why is my mobile score so much lower than desktop?", a: "Google simulates a mid-tier mobile device on a slow 3G/4G network. It's much harder to score high on mobile, which is why manual code optimization is critical." },
      { q: "Will speed increase my sales?", a: "Yes. By drastically reducing bounce rates, more customers reach your product pages, directly increasing your opportunity to convert." }
    ],
    keywords: "Shopify Speed Optimization, Improve Shopify Speed, Core Web Vitals Shopify, Increase Page Speed, Make Shopify Faster"
  }
};
