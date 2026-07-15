import { servicesData } from "./src/data/servicesData";
import * as fs from "fs";

// Create updated data
const updatedData = { ...servicesData };

const pricingData = {
  setup: { startingAt: "$2,500", details: "Includes premium theme setup, 50 products, and basic SEO." },
  dropshipping: { startingAt: "$1,500", details: "Includes niche research, supplier integration, and 20 winning products." },
  migration: { startingAt: "$3,000", details: "Full data transfer, URL redirects, and theme recreation." },
  custom: { startingAt: "$4,000", details: "Bespoke Liquid coding, custom sections, and advanced functionality." },
  plus: { startingAt: "$5,000", details: "Checkout customization, wholesale channel setup, and Plus-exclusive scripts." },
  bug: { startingAt: "$150", details: "Hourly rate or fixed project fee based on the bug complexity." },
  seo: { startingAt: "$1,200", details: "One-time technical sprint. Monthly packages available." },
  cro: { startingAt: "$2,000", details: "Includes heatmap setup, heuristic audit, and layout redesigns." },
  apps: { startingAt: "$500", details: "Per app integration. Complex setups like Klaviyo/Recharge quoted separately." },
  speed: { startingAt: "$800", details: "Complete Core Web Vitals optimization and script pruning." },
};

const comparisonData = {
  setup: "Unlike generic freelancers who just install a free theme, I build technically flawless, scalable foundations using premium code designed for high conversion.",
  dropshipping: "Avoid 'cookie-cutter' stores. I focus on brand-building, speed, and trust signals to ensure your dropshipping store looks like an established, premium brand.",
  migration: "Automated migration apps lose your SEO rankings. I perform manual URL mapping, 301 redirects, and meticulous data checks to preserve your hard-earned traffic.",
  custom: "Page builders slow down your site. I write raw, lightweight Liquid code for custom features that keep your Core Web Vitals in the green.",
  plus: "Only certified partners understand the complexities of Shopify Plus. I ensure your B2B wholesale channels and checkout scripts are securely integrated.",
  bug: "Don't let amateur developers break your live store. I fix issues cleanly without introducing new bugs or bloating your theme with messy code.",
  seo: "I combine deep technical Liquid knowledge with SEO best practices, meaning I don't just recommend changes—I implement the actual code to fix them.",
  cro: "I use actual heatmap data from your users, not random guesswork. Every UI change is backed by real behavioral analytics to guarantee an uplift.",
  apps: "I don't just click 'install'. I custom-style third-party apps to match your brand seamlessly and defer their scripts to prevent them from destroying your page speed.",
  speed: "Speed apps break themes and offer temporary fixes. I manually refactor your code and prune dead scripts for permanent, flawless performance gains."
};

const recentWorkData = {
  setup: [{ name: "Momento", result: "Launched streetwear brand in 2 weeks", link: "/portfolio#f3" }, { name: "LumiereSkin", result: "Premium skincare aesthetic setup", link: "/portfolio#b2" }],
  dropshipping: [{ name: "Pupp's", result: "High-converting pet niche store", link: "/portfolio#p3" }, { name: "Hairburst USA", result: "Sourced 20+ viral products", link: "/portfolio#hairburst_1" }],
  migration: [{ name: "Summer Collection", result: "WooCommerce to Shopify without traffic loss", link: "/portfolio#f2" }, { name: "LumiereSkin", result: "Magento migration to scalable Shopify", link: "/portfolio#b2" }],
  custom: [{ name: "Custom Shopify Store", result: "Built bespoke dynamic sections", link: "/portfolio#new_custom_3" }, { name: "OFINO", result: "Custom hover effects and cart drawer", link: "/portfolio#b3" }],
  plus: [{ name: "Hairburst USA", result: "Complex international checkout customization", link: "/portfolio#hairburst_1" }, { name: "Custom Shopify Store", result: "B2B wholesale portal integration", link: "/portfolio#new_custom_1" }],
  bug: [{ name: "Momento", result: "Fixed broken mobile navigation", link: "/portfolio#f3" }, { name: "OFINO", result: "Resolved cart update loop", link: "/portfolio#b3" }],
  seo: [{ name: "Pupp's", result: "+40% organic traffic in 3 months", link: "/portfolio#p3" }, { name: "LumiereSkin", result: "Implemented complete JSON-LD schema", link: "/portfolio#b2" }],
  cro: [{ name: "Summer Collection", result: "+2.1% conversion rate uplift", link: "/portfolio#f2" }, { name: "Custom Shopify Store", result: "Redesigned mobile checkout flow", link: "/portfolio#new_custom_2" }],
  apps: [{ name: "OFINO", result: "Klaviyo advanced flow setup", link: "/portfolio#b3" }, { name: "Hairburst USA", result: "Recharge subscriptions integrated", link: "/portfolio#hairburst_1" }],
  speed: [{ name: "Custom Shopify Store", result: "LCP reduced from 5.4s to 1.8s", link: "/portfolio#new_custom_1" }, { name: "Momento", result: "Achieved 95+ Mobile PageSpeed", link: "/portfolio#f3" }],
};

const testimonialData = {
  setup: { quote: "Sheun Hub handled everything from A to Z. Our launch was flawless, and the design looks incredibly premium.", author: "Sarah Jenkins", role: "Founder, LumiereSkin" },
  dropshipping: { quote: "My dropshipping store doesn't look like a cheap dropshipping store anymore. Conversions skyrocketed on day one.", author: "Mike T.", role: "E-com Entrepreneur" },
  migration: { quote: "We were terrified of losing our SEO traffic moving from WooCommerce. Sheun handled the 301 redirects perfectly. Not a single drop in traffic.", author: "David R.", role: "CEO, Summer Collection" },
  custom: { quote: "We needed a custom product configurator that no app could provide. Sheun coded it beautifully from scratch in Liquid.", author: "Elena M.", role: "Director, OFINO" },
  plus: { quote: "The checkout customizations have saved our team hundreds of hours. A true Shopify Plus expert.", author: "James L.", role: "Operations, Hairburst" },
  bug: { quote: "Fixed an add-to-cart bug in 2 hours that our previous agency couldn't figure out in a week.", author: "Marcus W.", role: "Store Owner" },
  seo: { quote: "Finally, an SEO expert who actually implements the technical code instead of just giving me a PDF audit. Traffic is up 40%.", author: "Amanda G.", role: "Founder, Pupp's" },
  cro: { quote: "The heatmap insights were eye-opening. The redesign of our mobile layout boosted conversions by 2% in a month.", author: "Chris D.", role: "Marketing Lead" },
  apps: { quote: "Seamlessly styled our loyalty app to match the theme. It looks completely native now.", author: "Sophie P.", role: "E-com Manager" },
  speed: { quote: "Our mobile load time went from 6 seconds to 1.5 seconds. The difference in ad ROI is night and day.", author: "Ryan K.", role: "Growth Hacker" }
};

const howItWorksData = {
  setup: ["Discovery Call: We discuss your brand vision, target audience, and product catalog.", "Theme & Architecture: I select and configure a premium theme tailored to your niche.", "Build & Integrate: Uploading products, setting up payments, and installing essential apps.", "QA & Testing: Rigorous testing on mobile and desktop for checkout flow and UX.", "Launch & Handover: Final site deployment and a training session on managing your store."],
  dropshipping: ["Niche Strategy: Analyzing your target market and selecting winning products.", "Store Build: Creating a high-converting, trustworthy brand aesthetic.", "App Integration: Setting up seamless supplier syncing and automated fulfillment.", "Trust Optimization: Adding reviews, secure badges, and professional policies.", "Launch: Handover of a fully functional, automated dropshipping machine."],
  migration: ["Audit & Mapping: Thorough analysis of your current platform's data and URL structure.", "Data Transfer: Securely migrating customers, orders, and product data to Shopify.", "Theme Recreation: Rebuilding your design natively in Shopify Liquid.", "SEO Preservation: Setting up exact 301 redirects to protect your Google rankings.", "Testing & Go-Live: Comprehensive pre-launch checks and seamless domain switch."],
  custom: ["Requirements Gathering: Detailed scoping of your custom functionality needs.", "Technical Planning: Designing the Liquid architecture without relying on heavy apps.", "Development: Writing clean, efficient custom code within your Shopify theme.", "Staging & Review: You test the new feature on a staging theme.", "Deployment: Pushing the code live with zero downtime."],
  plus: ["Strategy Session: Identifying complex B2B, wholesale, or international needs.", "Script Development: Writing customized Shopify Scripts for checkout and pricing.", "API Integration: Connecting third-party ERPs or custom logistics software.", "Testing: Simulating high-volume traffic and complex order scenarios.", "Go-Live Support: Dedicated priority support during rollout."],
  bug: ["Issue Identification: You report the issue and I investigate the root cause.", "Quote & Timeline: I provide a clear estimate and plan of action.", "Safe Development: Creating a duplicate theme to fix the code without affecting live users.", "QA Verification: Ensuring the fix works across all browsers and devices.", "Live Patching: Pushing the fix to your live theme seamlessly."],
  seo: ["Technical Audit: Deep crawl of your site to find indexing and speed issues.", "Keyword Mapping: Assigning high-value keywords to specific product and collection pages.", "On-Page Optimization: Rewriting meta titles, descriptions, and implementing JSON-LD schema.", "Technical Fixes: Fixing canonicals, optimizing robots.txt, and compressing images.", "Reporting: Delivering a complete breakdown of improvements made."],
  cro: ["Data Collection: Installing heatmap and session recording tools to gather user data.", "Heuristic Audit: Analyzing your store against UX best practices.", "Friction Analysis: Identifying exactly where users drop off in the funnel.", "Redesign Strategy: Planning UI/UX improvements to eliminate friction.", "Implementation: Coding the changes and monitoring the conversion uplift."],
  apps: ["App Selection: Advising on the best app for your specific requirement.", "Installation: Safely installing the app on a staging theme.", "Custom Styling: Modifying the app's CSS so it perfectly matches your brand.", "Configuration: Setting up the logic, workflows, or automated emails within the app.", "Testing & Launch: Verifying everything works flawlessly before pushing live."],
  speed: ["Performance Baseline: Running Google PageSpeed and GTmetrix audits.", "Asset Optimization: Compressing all images and converting them to WebP.", "Code Pruning: Removing leftover code from uninstalled apps.", "Script Deferral: Deferring non-essential JavaScript to fix render-blocking.", "Final Audit: Delivering the 'after' report showing the speed improvements."]
};

const newFaqsData = {
  setup: [
    { q: "What is your refund policy?", a: "Due to the custom nature of the work, refunds are not provided once development begins. However, I ensure 100% satisfaction before final handover." },
    { q: "Do you provide the logo design?", a: "I focus primarily on the technical setup and UI/UX. While I can create basic text logos, I recommend a dedicated graphic designer for advanced branding." },
    { q: "Do you write product descriptions?", a: "Standard setup includes basic importing. I offer advanced SEO copywriting as an add-on service." }
  ],
  dropshipping: [
    { q: "Do you find the products for me?", a: "Yes, I can assist with product research using proven criteria, though final selection is collaborative." },
    { q: "Which suppliers do you use?", a: "I integrate with reputable apps like DSers, Zendrop, or Spocket depending on your preferred shipping times." },
    { q: "Are ad creatives included?", a: "No, my focus is purely on building a high-converting store infrastructure. Ad creatives are handled separately." }
  ],
  migration: [
    { q: "Will I lose my customer passwords?", a: "Shopify cannot import passwords for security reasons. Customers will be prompted to reset their passwords upon their first login." },
    { q: "How long does a migration take?", a: "A standard migration takes 2-4 weeks. Very large catalogs may take longer." },
    { q: "Can you migrate my blog posts?", a: "Yes, all standard content including pages and blog posts will be migrated safely." }
  ],
  custom: [
    { q: "Will custom code break my theme updates?", a: "I write modular code using modern Shopify OS 2.0 standards, making it as update-friendly as possible." },
    { q: "Can you edit an app's code?", a: "I cannot edit the backend code of third-party apps, but I can heavily modify their frontend display using CSS/JS." },
    { q: "Do you use page builders?", a: "I avoid page builders like PageFly or Shogun when possible because they bloat code. I build native Shopify sections instead." }
  ],
  plus: [
    { q: "Do you handle Shopify Plus upgrades?", a: "Yes, I can manage the technical transition from an Advanced plan to Shopify Plus." },
    { q: "Can you customize the checkout?", a: "Yes, utilizing Shopify's Checkout Extensibility to add custom fields, upsells, and trust badges." },
    { q: "Do you work with headless builds?", a: "My primary focus is maximizing native Liquid architecture, but I can consult on headless transitions." }
  ],
  bug: [
    { q: "How fast can you fix an issue?", a: "Emergency bug fixes can often be resolved within 24-48 hours depending on availability." },
    { q: "What if an app caused the bug?", a: "I will identify the conflicting app and either fix the integration or recommend an alternative solution." },
    { q: "Do you offer a warranty on fixes?", a: "Yes, I provide a 14-day warranty on any specific bugs I resolve to ensure they stay fixed." }
  ],
  seo: [
    { q: "How long until I see SEO results?", a: "Technical changes are indexed quickly, but significant organic traffic growth typically takes 3-6 months." },
    { q: "Do you guarantee first page rankings?", a: "No honest SEO guarantees first page rankings. I guarantee your store will follow Google's strictest technical guidelines." },
    { q: "Do you build backlinks?", a: "My service is strictly on-page and technical SEO. I do not provide off-page backlinking services." }
  ],
  cro: [
    { q: "Do I need a new theme for CRO?", a: "Usually no. CRO is about iterative improvements to your existing theme, not necessarily a full rebuild." },
    { q: "What if the changes don't work?", a: "We A/B test changes when possible. If a change underperforms, we revert and test a new hypothesis based on the data." },
    { q: "How much traffic do I need for accurate heatmaps?", a: "At least 1,000 visitors per week is recommended to get statistically significant heatmap data." }
  ],
  apps: [
    { q: "Can you build a custom private app for me?", a: "I focus on integrating and configuring existing public apps, not building full-stack private apps from scratch." },
    { q: "Will you negotiate pricing with app developers?", a: "No, you are responsible for the monthly subscription costs of the apps." },
    { q: "Can you fix an app's slow loading speed?", a: "I can defer the app's scripts so they don't block your main page load, significantly improving perceived speed." }
  ],
  speed: [
    { q: "Will optimizing speed break my apps?", a: "No. I carefully defer scripts using best practices to ensure all apps still function perfectly." },
    { q: "Does speed optimization include image compression?", a: "Yes, I will compress your current images and implement systems to ensure future uploads are optimized." },
    { q: "Why is my mobile score still yellow?", a: "Shopify's base scripts and third-party tracking (like Facebook Pixel) add base weight. Yellow (50-89) is often the realistic ceiling for heavily app-dependent stores." }
  ]
};

for (const key of Object.keys(updatedData)) {
  updatedData[key].howItWorks = howItWorksData[key];
  updatedData[key].pricing = pricingData[key];
  updatedData[key].recentWork = recentWorkData[key];
  updatedData[key].testimonial = testimonialData[key];
  updatedData[key].comparison = comparisonData[key];
  updatedData[key].faqs = [...updatedData[key].faqs, ...newFaqsData[key]];
}

const fileContent = `import { Layout, ShoppingCart, RefreshCw, Palette, Bug, Search, Target, Zap } from "lucide-react";

export const servicesData = ${JSON.stringify(updatedData, null, 2)};
`;

fs.writeFileSync("src/data/servicesData.ts", fileContent);
console.log("Updated src/data/servicesData.ts");
