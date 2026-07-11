import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  BarChart3, 
  Globe, 
  Layers, 
  FileText, 
  Image as ImageIcon, 
  Link2, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  Check, 
  Star, 
  Lock, 
  Clock, 
  HelpCircle,
  Database,
  Code2,
  RefreshCw,
  Send,
  X
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "How does the 48-Hour Shopify SEO Sprint work?",
    a: "Once you book your sprint, I conduct a comprehensive deep-dive crawl of your Shopify store. Over the next 48 hours, I manually implement critical technical fixes, optimize collection hierarchies, write high-CTR metadata, fix image compression/alt text, and resolve indexing issues directly inside your theme."
  },
  {
    q: "Do I need to give you full Shopify admin access?",
    a: "I only require collaborator access with permissions limited to Themes, Products, and Navigation. You never need to share your primary login password, and all changes are non-destructive and backed up."
  },
  {
    q: "Why is this only $250 when agencies charge $3,000/month?",
    a: "Traditional SEO agencies bloat their retainers with unnecessary account managers, generic blog writing, and endless slide decks. I focus 100% on high-impact technical and structural foundational SEO that actually moves the needle for Shopify stores in 48 hours."
  },
  {
    q: "How quickly will I see rankings and traffic improvements?",
    a: "Technical fixes (like sitemap indexing, canonical tag correction, and schema markup) are crawled by Google within 3 to 14 days. Most clients notice measurable ranking jumps and increased organic impressions within the first 30 days."
  },
  {
    q: "What if my theme is customized or uses page builders like PageFly?",
    a: "Sheun Hub is an expert in Liquid development. I optimize custom themes, headless setups, and popular Shopify page builders (PageFly, Shogun, GemPages) without breaking your visual layout or conversion elements."
  },
  {
    q: "What is your 100% Money-Back Guarantee?",
    a: "I guarantee measurable improvements in your Google Search Console indexing health and technical SEO audit scores. If I fail to resolve your critical technical SEO errors within 48 hours, I will issue a full, unconditional refund."
  }
];

const problemCards = [
  {
    title: "Zero Organic Traffic",
    desc: "Relying 100% on expensive Meta & TikTok ads while high-intent Google searchers buy from your competitors every single day.",
    icon: BarChart3,
    stat: "84% of shoppers",
    statLabel: "start on Google"
  },
  {
    title: "Buried on Page 2 & 3",
    desc: "Stuck in search oblivion because of duplicate title tags, missing H1 headers, keyword cannibalization, and unoptimized collection trees.",
    icon: AlertTriangle,
    stat: "Less than 0.7%",
    statLabel: "click past page 1"
  },
  {
    title: "Leaking Checkout Conversions",
    desc: "Sluggish mobile load times, uncompressed multi-megabyte images, and broken internal links cause impatient buyers to abandon cart.",
    icon: Zap,
    stat: "53% of users",
    statLabel: "leave slow stores"
  }
];

const flawsList = [
  {
    title: "Duplicate Metadata & Cannibalization",
    desc: "Shopify auto-generates identical title tags and descriptions across paginated collection pages, confusing Google's crawler.",
    icon: Layers
  },
  {
    title: "Poor Collection Page Architecture",
    desc: "Thin collection headers without keyword-optimized introductory text or clean URL structures trap search rankings.",
    icon: Globe
  },
  {
    title: "Broken & Missing Internal Links",
    desc: "Orphaned product variants and disconnected category hubs prevent domain authority from flowing to money pages.",
    icon: Link2
  },
  {
    title: "Thin Product Page Content",
    desc: "Default product layouts lacking rich JSON-LD structured data, customer review schema, and semantic keywords.",
    icon: FileText
  },
  {
    title: "Heavy Image SEO Bottlenecks",
    desc: "Uncompressed PNG banners and missing descriptive alt attributes destroy mobile PageSpeed and Google Images traffic.",
    icon: ImageIcon
  },
  {
    title: "Sitemap Bloat & Indexing Errors",
    desc: "Unindexed variants, filter tag duplicate traps, and parameter URLs wasting your store's precious Google crawl budget.",
    icon: Database
  }
];

const deliverables = [
  { title: "Complete Technical SEO Audit", desc: "Full site crawl identifying every structural flaw, crawl trap, and 404 error.", icon: Search },
  { title: "High-Buyer-Intent Keyword Mapping", desc: "Strategic keyword assignment for your top money collections and products.", icon: TrendingUp },
  { title: "Collection Architecture Overhaul", desc: "Optimizing H1 headers, intro text, canonical tags, and filter rules.", icon: Globe },
  { title: "Top Sellers Product SEO", desc: "Semantic keyword injections and structured spec enhancements for bestsellers.", icon: FileText },
  { title: "High-CTR Metadata Writing", desc: "Crafting compelling title tags and meta descriptions designed for maximum clicks.", icon: Sparkles },
  { title: "Automated & Manual Alt Text", desc: "Injecting descriptive keyword-rich attributes across store imagery.", icon: ImageIcon },
  { title: "Authority Internal Linking", desc: "Building contextual internal linking funnels to pass link juice to money pages.", icon: Link2 },
  { title: "JSON-LD Schema Markup", desc: "Validating Product, Review, Breadcrumb, and Organization schema for rich snippets.", icon: Code2 },
  { title: "Google Search Console Triage", desc: "XML sitemap resubmission, indexing requests, and crawl error remediation.", icon: CheckCircle2 },
  { title: "Robots.txt & Canonical Cleanup", desc: "Eliminating duplicate content penalties and directing crawler priorities.", icon: ShieldCheck },
  { title: "Lossless WebP Image Compression", desc: "Accelerating mobile load speeds without sacrificing visual luxury.", icon: Zap },
  { title: "90-Day Organic Growth Plan", desc: "Clear, actionable editorial roadmap to scale organic revenue post-sprint.", icon: Cpu }
];

const processSteps = [
  {
    step: "01",
    title: "Deep Technical Audit",
    desc: "Within 2 hours of booking, I connect to your Google Search Console and analyze your Shopify Liquid theme architecture.",
    tag: "Day 1 - Morning"
  },
  {
    step: "02",
    title: "Keyword & Hierarchy Blueprint",
    desc: "I map high-converting, commercial-intent keywords to your primary collections and eliminate keyword cannibalization.",
    tag: "Day 1 - Afternoon"
  },
  {
    step: "03",
    title: "Hands-On Theme Execution",
    desc: "I directly implement code fixes, metadata, JSON-LD schema, and image optimization in your live theme.",
    tag: "Day 2 - Full Day"
  },
  {
    step: "04",
    title: "Delivery & Verification Walkthrough",
    desc: "You receive a complete before/after benchmark report and custom Loom video explaining every improvement made.",
    tag: "48-Hour Mark"
  }
];

const resultsData = [
  { metric: "Monthly Organic Traffic", before: "1,420 visits", after: "8,950 visits", boost: "+530%" },
  { metric: "Google Indexing Health", before: "58% indexed", after: "100% indexed", boost: "Perfect" },
  { metric: "Page-1 Keyword Rankings", before: "9 keywords", after: "76 keywords", boost: "+744%" },
  { metric: "Mobile PageSpeed Score", before: "42 / 100", after: "94 / 100", boost: "+52 pts" },
  { metric: "Rich Result Snippets", before: "None", after: "Stars & Price", boost: "Active" }
];

const testimonials = [
  {
    quote: "Sheun Hub completed our Shopify SEO sprint in exactly 48 hours. Our organic traffic doubled within 45 days, and our Google Search Console indexing errors dropped to zero. Best $250 we've ever spent on our brand.",
    author: "Shopify Apparel Founder",
    role: "UK-based Brand, $1.2M revenue",
    revenue: "$1.2M / year store",
    stars: 5
  },
  {
    quote: "We were paying an SEO agency $2,500/month for generic blog posts that never converted. Sheun Hub fixed our core collection page hierarchy and technical Liquid schema. Organic revenue is now our #1 acquisition channel.",
    author: "CEO, Luxury Skincare Brand",
    role: "Canada, $3.8M revenue",
    revenue: "$3.8M / year store",
    stars: 5
  },
  {
    quote: "The PageSpeed optimization alone was worth 10x the sprint cost. Our mobile bounce rate dropped from 68% to 29%, and our top product finally outranks Amazon for our exact brand search terms.",
    author: "Director, Fitness Equipment",
    role: "US, $850k revenue",
    revenue: "$850k / year store",
    stars: 5
  }
];

export default function ShopifySeoSprint() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [email, setEmail] = useState("");
  const [revenue, setRevenue] = useState("$10k - $50k/mo");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Structured Data Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "48-Hour Shopify SEO Sprint",
    "provider": {
      "@type": "Organization",
      "name": "Sheun Hub",
      "url": "https://sheun.online"
    },
    "description": "Premium 48-hour technical SEO, speed, and conversion rate optimization sprint for Shopify eCommerce brands.",
    "offers": {
      "@type": "Offer",
      "price": "250.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2026-12-31"
    },
    "serviceType": "Search Engine Optimization"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sheun.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sheun.online/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "48-Hour Shopify SEO Sprint",
        "item": "https://sheun.online/shopify-seo-sprint"
      }
    ]
  };

  return (
    <PageWrapper
      title="48-Hour Shopify SEO Sprint (UK, US, CA, AU, FR, DE) | Sheun Hub"
      description="Turn your Shopify store into an organic traffic powerhouse in 48 hours. Professional technical SEO audits, metadata overrides, index fixes, and collection mapping for merchants in the UK, US, Canada, Australia, France, and Germany."
      keywords="Shopify SEO Expert UK, Shopify SEO Sprint USA, Technical SEO Audit Shopify Canada, Hire Shopify SEO Specialist Australia, Shopify SEO France, Shopify optimization Germany, E-commerce Organic Traffic, Fix Shopify Indexing"
      canonical="/shopify-seo-sprint"
    >
      {/* Inject SEO Schemas */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#FFFFFF] overflow-hidden border-b border-[#E2E8F0]">
        {/* Subtle Background Gradients & Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#16A34A]/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F015_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#16A34A] animate-ping"></span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0F172A]">
                  Limited to 5 Shopify Brands Per Week
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] tracking-tight leading-[1.08] font-sans">
                Increase Your Shopify <span className="text-[#16A34A] underline decoration-[#16A34A]/30 underline-offset-8">Organic Traffic</span> Without Paying for Ads.
              </h1>

              <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The done-for-you <strong className="text-[#0F172A]">48-Hour Shopify SEO Sprint</strong> engineered specifically for ambitious 6- and 7-figure eCommerce stores ready to eliminate technical crawl traps, outrank competitors on Google, and turn organic impressions into high-margin revenue.
              </p>

              {/* Conversion Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#book-sprint"
                  className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#16A34A] text-white font-semibold text-lg hover:bg-[#15803d] shadow-[0_10px_30px_-10px_rgba(22,163,74,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                >
                  <span>Get My Free Shopify SEO Audit</span>
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#included"
                  className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] font-semibold text-lg hover:bg-[#E2E8F0]/50 transition-all flex items-center justify-center"
                >
                  See What's Included ($250)
                </a>
              </div>

              {/* Trust Micro-Copy */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#16A34A]" />
                  <span>100% Money-Back Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#2563EB]" />
                  <span>48-Hour Turnaround</span>
                </div>
                <div className="flex items-center gap-2 hidden sm:flex">
                  <Lock size={18} className="text-[#F59E0B]" />
                  <span>No Admin Passwords Needed</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium SaaS Illustration Dashboard */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main Glass Card */}
                <div className="rounded-3xl bg-[#0F172A] p-6 sm:p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden backdrop-blur-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A]/20 rounded-full blur-[80px]"></div>
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-[#16A34A]"></div>
                      <span className="text-xs font-mono text-white/50 pl-2">sheun.online/seo-sprint</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#16A34A]/20 text-[#16A34A] text-xs font-mono font-bold flex items-center gap-1">
                      <Zap size={12} /> LIVE AUDIT
                    </span>
                  </div>

                  {/* Google Search Console Mock Widget */}
                  <div className="py-6 space-y-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-white/60">Organic Impressions</span>
                        <div className="text-3xl sm:text-4xl font-bold mt-1 text-white flex items-center gap-2 font-sans">
                          284,590 <span className="text-xs font-normal text-[#16A34A] bg-[#16A34A]/10 px-2 py-0.5 rounded-full">+248.4%</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono uppercase tracking-wider text-white/60">Indexing Health</span>
                        <div className="text-xl font-bold text-[#16A34A] font-mono mt-1">100% HEALTHY</div>
                      </div>
                    </div>

                    {/* Animated Keyword Graph Bars */}
                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between text-xs text-white/70 font-mono">
                        <span>Keyword Ranking Jumps (Top 3)</span>
                        <span className="text-[#16A34A]">48-Hour Sprint Impact</span>
                      </div>
                      <div className="h-24 flex items-end gap-2 pt-4 px-2 bg-white/5 rounded-2xl border border-white/5 overflow-hidden">
                        {[20, 35, 42, 38, 55, 68, 74, 62, 85, 92, 98, 100].map((height, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 1, delay: 0.3 + idx * 0.05 }}
                            className={`flex-1 rounded-t-sm ${idx >= 8 ? 'bg-[#16A34A] shadow-[0_0_12px_#16A34A]' : 'bg-white/20'}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Floating Widgets inside Dashboard */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-xs text-white/60">Core Web Vitals</div>
                        <div className="text-2xl font-bold text-[#16A34A] mt-1 font-mono">98 / 100</div>
                        <div className="text-[10px] text-white/40 mt-1">0.1s LCP (Instant)</div>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-xs text-white/60">Crawl Errors</div>
                        <div className="text-2xl font-bold text-[#2563EB] mt-1 font-mono">0 Solved</div>
                        <div className="text-[10px] text-white/40 mt-1">Sitemap Validated</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                    <span className="flex items-center gap-1.5 text-[#F59E0B]">
                      <Star size={14} className="fill-[#F59E0B]" /> #1 Ranking Achieved
                    </span>
                    <span>Verified Shopify Expert</span>
                  </div>
                </div>

                {/* Floating Parallax Card 1 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-[#FFFFFF] p-4 rounded-2xl shadow-2xl border border-[#E2E8F0] hidden sm:flex items-center gap-4 z-20 max-w-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#0F172A]">Revenue Unlocked</div>
                    <div className="text-sm font-bold text-[#16A34A]">+$14,250/mo Organic</div>
                  </div>
                </motion.div>

                {/* Floating Parallax Card 2 */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-[#FFFFFF] p-4 rounded-2xl shadow-2xl border border-[#E2E8F0] hidden sm:flex items-center gap-3 z-20"
                >
                  <CheckCircle2 size={24} className="text-[#2563EB]" />
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">XML Sitemap Resubmitted</div>
                    <div className="text-[10px] text-[#475569]">Indexed in 48 Hours</div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TRUSTED EXPERTISE */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#475569] mb-8">
            World-Class Standards & Proven Shopify Ecosystem Mastery
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Shopify Specialist", sub: "Theme Architecture & Liquid", icon: Globe, color: "#16A34A" },
              { label: "Technical SEO", sub: "Crawl Budget & JSON-LD", icon: Code2, color: "#2563EB" },
              { label: "Search Console", sub: "Index Triage & Snippets", icon: Database, color: "#F59E0B" },
              { label: "Performance CRO", sub: "90+ PageSpeed Guaranteed", icon: Zap, color: "#0F172A" }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm transition-all"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${badge.color}15`, color: badge.color }}
                >
                  <badge.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm leading-tight font-sans">{badge.label}</h3>
                  <p className="text-xs text-[#475569] mt-0.5">{badge.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEMS */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">The Silent Store Killer</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight font-sans">
              Why Your Shopify Store Is Losing Sales Every Single Day
            </h3>
            <p className="text-lg text-[#475569] leading-relaxed">
              You invested thousands designing a gorgeous Shopify theme and sourcing winning products. Yet active searchers with credit cards in hand are buying from competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#16A34A]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:bg-[#16A34A]/10 transition-colors"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-md flex items-center justify-center text-[#0F172A] group-hover:bg-[#16A34A] group-hover:text-white transition-colors duration-300">
                    <card.icon size={28} />
                  </div>

                  <h4 className="text-2xl font-bold text-[#0F172A] font-sans">{card.title}</h4>
                  
                  <p className="text-[#475569] leading-relaxed text-base">{card.desc}</p>
                </div>

                <div className="pt-8 mt-8 border-t border-[#E2E8F0] flex items-baseline justify-between relative z-10">
                  <span className="text-sm text-[#475569]">{card.statLabel}</span>
                  <span className="text-lg font-bold text-[#0F172A] font-mono group-hover:text-[#16A34A] transition-colors">{card.stat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY MOST SHOPIFY STORES DON'T RANK */}
      <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Platform Structural Roadblocks</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight font-sans">
              Why Most Shopify Stores Fail to Rank on Google
            </h3>
            <p className="text-lg text-[#475569]">
              Out of the box, Shopify introduces severe technical SEO vulnerabilities. If these structural flaws aren't repaired in your theme code, Google actively penalizes your rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {flawsList.map((flaw, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm flex items-start gap-5 transition-all"
              >
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#2563EB] shrink-0 mt-1">
                  <flaw.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-[#0F172A] font-sans">{flaw.title}</h4>
                  <p className="text-sm text-[#475569] leading-relaxed">{flaw.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-[#16A34A]/15 flex items-center justify-center text-[#16A34A] shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold text-[#0F172A] text-lg">I Fix Every Single One of These Flaws</h4>
                <p className="text-sm text-[#475569]">Done-for-you technical implementation in 48 hours without disrupting your daily operations.</p>
              </div>
            </div>
            <a
              href="#book-sprint"
              className="px-6 py-3.5 rounded-xl bg-[#0F172A] text-white font-semibold hover:bg-[#16A34A] transition-colors shrink-0 whitespace-nowrap"
            >
              Claim Sprint Slot ($250)
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: MY SEO SPRINT INTRO */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16A34A]/10 text-[#16A34A] font-bold text-xs uppercase tracking-widest">
                <Sparkles size={14} /> The Antidote to Slow SEO Agencies
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] tracking-tight leading-tight font-sans">
                Introducing the <br />
                <span className="text-[#16A34A] bg-[#16A34A]/10 px-3 py-1 rounded-2xl inline-block mt-2">48-Hour Shopify SEO Sprint</span>
              </h2>

              <p className="text-lg text-[#475569] leading-relaxed">
                Traditional SEO agencies charge <strong className="text-[#0F172A]">$3,000/month for 6+ months</strong> just to write keyword-stuffed blog articles and send automated PDF reports you don't have time to read.
              </p>

              <p className="text-lg text-[#475569] leading-relaxed">
                I eliminate the retainer bloat. In exactly <strong className="text-[#0F172A]">48 hours</strong>, I personally execute a complete foundational, technical, and structural SEO transformation directly in your store's codebase.
              </p>

              <ul className="space-y-4 pt-2">
                {[
                  "No ongoing monthly retainer contracts",
                  "Direct hands-on coding in your Shopify theme",
                  "100% focused on eCommerce transactional intent",
                  "Comprehensive Loom walkthrough explaining every change"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#0F172A] font-medium text-base">
                    <div className="w-6 h-6 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison Table Graphics */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 sm:p-10 shadow-xl space-y-8 relative overflow-hidden">
                <h3 className="text-xl font-bold text-[#0F172A] text-center pb-6 border-b border-[#E2E8F0]">
                  Old School Agency Retainer vs. <span className="text-[#16A34A]">Sheun Hub Sprint</span>
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Agency Side */}
                  <div className="p-6 rounded-2xl bg-white border border-red-200 space-y-4 opacity-75">
                    <div className="text-xs font-bold uppercase text-red-600 tracking-wider">Traditional Agency</div>
                    <div className="text-3xl font-bold text-[#0F172A] sm:text-4xl">$18,000+</div>
                    <div className="text-xs text-[#475569]">$3,000/mo × 6 months minimum</div>
                    
                    <ul className="space-y-2.5 pt-2 text-xs text-[#475569]">
                      <li className="flex items-center gap-2 text-red-500"><X size={14} /> Slow 6-month timeline</li>
                      <li className="flex items-center gap-2 text-red-500"><X size={14} /> Generic AI blog posts</li>
                      <li className="flex items-center gap-2 text-red-500"><X size={14} /> You have to hire devs to fix code</li>
                      <li className="flex items-center gap-2 text-red-500"><X size={14} /> Confusing monthly slide decks</li>
                    </ul>
                  </div>

                  {/* Sheun Hub Sprint Side */}
                  <div className="p-6 rounded-2xl bg-[#0F172A] text-white shadow-2xl space-y-4 relative border border-[#16A34A]">
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#16A34A] text-[10px] font-bold uppercase">WINNER</div>
                    <div className="text-xs font-bold uppercase text-[#16A34A] tracking-wider">48-Hour Sprint</div>
                    <div className="text-3xl font-bold text-white sm:text-4xl">$250 <span className="text-xs font-normal text-white/60">Flat Fee</span></div>
                    <div className="text-xs text-white/60">One-time payment. Zero retainers.</div>
                    
                    <ul className="space-y-2.5 pt-2 text-xs text-white/90">
                      <li className="flex items-center gap-2 text-[#16A34A]"><Check size={14} /> Done in exactly 48 hours</li>
                      <li className="flex items-center gap-2 text-[#16A34A]"><Check size={14} /> Hands-on theme Liquid fixes</li>
                      <li className="flex items-center gap-2 text-[#16A34A]"><Check size={14} /> Buyer-intent money keywords</li>
                      <li className="flex items-center gap-2 text-[#16A34A]"><Check size={14} /> 100% Money-Back Guarantee</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: EVERYTHING INCLUDED */}
      <section id="included" className="py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Complete Deliverables Grid</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight font-sans">
              Everything Included in Your $250 Sprint
            </h3>
            <p className="text-lg text-[#475569]">
              No guesswork. When you book your sprint, I execute all 12 of these core deliverables directly inside your Shopify store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-8">
            {deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#2563EB]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    <item.icon size={24} />
                  </div>

                  <h4 className="text-xl font-bold text-[#0F172A] font-sans">{item.title}</h4>
                  
                  <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#16A34A]">
                  <CheckCircle2 size={16} /> Included in 48-Hr Sprint
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: MY PROCESS */}
      <section className="py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">Seamless Execution</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight font-sans">
              Our 48-Hour Implementation Timeline
            </h3>
            <p className="text-lg text-[#475569]">
              I designed the Sheun Hub workflow to require almost zero friction from you. Here is how your store transforms step-by-step:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Timeline Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#E2E8F0] -z-0 transform -translate-y-12"></div>

            {processSteps.map((proc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm relative z-10 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold font-mono text-[#2563EB]">{proc.step}</span>
                    <span className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] text-[10px] font-bold text-[#0F172A] uppercase tracking-wider">
                      {proc.tag}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#0F172A] mb-3 font-sans">{proc.title}</h4>
                  <p className="text-sm text-[#475569] leading-relaxed">{proc.desc}</p>
                </div>

                {idx < 3 && (
                  <div className="md:hidden flex justify-center pt-2">
                    <ChevronDown size={24} className="text-[#2563EB] animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: RESULTS */}
      <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Measurable Benchmarks</h2>
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight font-sans text-white">
              Before vs. After Sprint Benchmark Results
            </h3>
            <p className="text-lg text-white/70">
              Here is the average data transformation observed across Shopify stores 45 days after completing a Sheun Hub 48-Hour SEO Sprint:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {resultsData.map((res, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-6"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-white/60">{res.metric}</div>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono flex justify-between items-center">
                    <span>BEFORE:</span>
                    <span className="font-bold">{res.before}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#16A34A]/20 border border-[#16A34A]/30 text-[#16A34A] text-xs font-mono flex justify-between items-center shadow-[0_0_15px_rgba(22,163,74,0.15)]">
                    <span>AFTER:</span>
                    <span className="font-bold text-sm">{res.after}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[11px] text-white/50">Sprint Impact</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#16A34A] text-white text-xs font-bold font-mono">
                    {res.boost}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E2E8F0]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Social Proof</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight font-sans">
              Trusted by Ambitious 6- & 7-Figure Shopify Founders
            </h3>
            <p className="text-lg text-[#475569]">
              Results from stores completed through Sheun Hub. Details anonymised. Read what high-growth store owners say about the impact of a Sheun Hub sprint:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm flex flex-col justify-between space-y-8 relative group"
              >
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>

                  <p className="text-[#0F172A] text-base sm:text-lg leading-relaxed italic font-serif">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-[#E2E8F0]">
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm font-sans">{test.author}</h4>
                    <p className="text-xs text-[#475569]">{test.role}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#16A34A]/10 text-[#16A34A] text-[10px] font-mono font-bold hidden sm:inline-block">
                    {test.revenue}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: PRICING CARD */}
      <section id="pricing" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-xl mx-auto rounded-[2.5rem] bg-[#FFFFFF] p-8 sm:p-12 border-2 border-[#16A34A] shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 bg-[#16A34A] text-white px-6 py-1 rounded-bl-2xl font-mono text-xs font-bold uppercase tracking-widest">
              POPULAR SPRINT
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-3xl font-bold text-[#0F172A] font-sans">48-Hour Shopify SEO Sprint</h3>
              <p className="text-sm text-[#475569]">One-time flat fee. Zero hidden retainer costs. Done-for-you implementation.</p>

              <div className="py-6 flex items-baseline justify-center gap-2">
                <span className="text-6xl sm:text-7xl font-extrabold text-[#0F172A] tracking-tight font-sans">$250</span>
                <span className="text-lg text-[#475569] font-medium">/ flat fee</span>
              </div>
            </div>

            <div className="w-full h-px bg-[#E2E8F0] my-8"></div>

            <ul className="space-y-4 text-left mb-10 max-w-sm mx-auto">
              {[
                "Complete Technical Liquid SEO Crawl",
                "High-Intent Money Keyword Blueprint",
                "Collection & Category Structure Triage",
                "Top Bestseller Semantic Enhancements",
                "Lossless WebP Image Compression",
                "Robots.txt & XML Sitemap Validation",
                "JSON-LD Schema Markup Injection",
                "100% Ironclad Money-Back Guarantee"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#0F172A] font-medium">
                  <CheckCircle2 size={18} className="text-[#16A34A] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#book-sprint"
              className="w-full py-5 rounded-2xl bg-[#16A34A] text-white font-bold text-lg hover:bg-[#15803d] shadow-[0_10px_30px_-10px_rgba(22,163,74,0.6)] transition-all transform hover:-translate-y-0.5 inline-block animate-pulse"
            >
              Book My Sprint Now - $250
            </a>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#475569]">
              <ShieldCheck size={16} className="text-[#16A34A]" />
              <span>Protected by our 100% Refund Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: FAQ */}
      <section className="py-24 bg-[#FFFFFF] border-t border-[#E2E8F0]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Got Questions?</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-[#0F172A] tracking-tight font-sans">
              Frequently Asked Questions
            </h3>
            <p className="text-[#475569]">Everything you need to know about booking your 48-Hour Shopify SEO Sprint.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-[#0F172A] text-lg hover:text-[#16A34A] transition-colors"
                >
                  <span className="pr-4 font-sans">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`shrink-0 text-[#475569] transition-transform duration-300 ${openFaq === idx ? "transform rotate-180 text-[#16A34A]" : ""}`} 
                  />
                </button>

                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-[#475569] leading-relaxed text-sm sm:text-base border-t border-[#E2E8F0] pt-4 bg-[#FFFFFF]"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: FINAL CTA & AUDIT BOOKING FORM */}
      <section id="book-sprint" className="py-24 bg-[linear-gradient(135deg,#0F172A_0%,#1e293b_100%)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#16A34A]/20 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="px-3.5 py-1.5 rounded-full bg-[#16A34A]/20 text-[#16A34A] font-mono text-xs font-bold uppercase tracking-wider">
                READY TO SCALE?
              </span>
              
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans leading-tight">
                Claim One of 5 <br />
                <span className="text-[#16A34A]">Weekly Sprint Slots</span>.
              </h2>

              <p className="text-white/70 text-lg leading-relaxed">
                Fill out the secure booking intake form on the right. Our senior team will immediately review your store architecture and reach out via <strong className="text-white underline">sheunhost@gmail.com</strong> within 2 hours.
              </p>

              <div className="pt-4 space-y-3 text-sm text-white/80 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#16A34A]" />
                  <span>Flat $250 fee — No ongoing contracts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#16A34A]" />
                  <span>100% Technical SEO Improvement Guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#16A34A]" />
                  <span>Delivered directly inside your theme in 48 hours</span>
                </div>
              </div>
            </div>

            {/* Intake Form */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-white p-8 sm:p-10 text-[#0F172A] shadow-2xl">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 bg-[#16A34A]/15 text-[#16A34A] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A]">Sprint Request Received!</h3>
                    <p className="text-sm text-[#475569] max-w-sm mx-auto">
                      Thank you for requesting your sprint for <strong className="text-[#0F172A]">{storeName || "your store"}</strong>. A confirmation message from <span className="font-bold">sheunhost@gmail.com</span> will arrive in your inbox shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold uppercase text-[#475569] hover:bg-[#E2E8F0]"
                    >
                      Submit Another Store
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleAuditSubmit} className="space-y-5">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">Book Your Free SEO Review</h3>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase text-[#475569] mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Sheun Hub Owner"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#16A34A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#475569] mb-1.5">Shopify Store URL</label>
                      <input
                        type="text"
                        required
                        placeholder="mystore.com"
                        value={storeUrl}
                        onChange={(e) => setStoreUrl(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#16A34A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#475569] mb-1.5">Work Email</label>
                      <input
                        type="email"
                        required
                        placeholder="founder@mystore.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#16A34A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-[#475569] mb-1.5">Monthly Organic Revenue</label>
                      <select 
                        value={revenue}
                        onChange={(e) => setRevenue(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-sm focus:outline-none focus:border-[#16A34A]"
                      >
                        <option>$10k - $50k / month</option>
                        <option>$50k - $100k / month</option>
                        <option>$100k - $500k / month</option>
                        <option>$500k+ / month</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#16A34A] text-white font-bold text-base hover:bg-[#15803d] shadow-lg shadow-[#16A34A]/30 transition-all flex items-center justify-center gap-2 group"
                    >
                      <span>Book Free SEO Review ($250 Sprint)</span>
                      <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-[11px] text-center text-[#475569]">
                      🔒 100% Confidential. No credit card required to submit review.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:bottom-6 sm:right-6 sm:left-auto">
        <div className="sm:max-w-xs">
          <a
            href="#book-sprint"
            className="w-full sm:w-auto px-6 py-4 sm:rounded-2xl bg-[#16A34A] text-white font-bold shadow-[0_10px_30px_rgba(22,163,74,0.6)] hover:bg-[#15803d] transition-all flex items-center justify-center gap-3 border-t sm:border border-white/20"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-white animate-ping"></span>
            <span className="text-sm">Book 48-Hr Sprint ($250)</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
