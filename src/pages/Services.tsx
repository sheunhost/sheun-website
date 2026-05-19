import { motion, AnimatePresence } from "framer-motion";
import { Layout, RefreshCw, ShoppingCart, Palette, Bug, Search, Rocket, Gift, ChevronDown, CheckCircle2, ArrowRight, Code2, Zap, MessageSquare, Star, X, Clock, DollarSign, ListChecks, ShieldCheck, Target, Quote, ChevronLeft, ChevronRight, Grid, List } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import { servicesData } from "../data/servicesData";

const services = [
  {
    id: "setup",
    icon: Layout,
    title: "Shopify Store Setup",
    desc: "Complete Shopify store setup from scratch — theme, products, payments, and launch-ready configuration.",
    fullDesc: "Launch your brand with a professional, high-converting Shopify store. I handle everything from theme selection and customization to essential app integrations and payment gateway setup.",
    includes: ["Theme setup", "Product upload", "Payment gateway", "Domain setup"],
    price: "Custom Quote",
    timeline: "1-2 Weeks",
    tag: "Launch",
    roadmap: [
      { title: "Discovery & Strategy", desc: "Understanding your products, niche, and target audience." },
      { title: "Theme Selection & Branding", desc: "Choosing the right foundation and applying your visual identity." },
      { title: "Store Configuration", desc: "Setting up shipping, taxes, payments, and essential apps." },
      { title: "Product Import & SEO", desc: "Optimizing product data for search engines and conversions." },
      { title: "Testing & Launch", desc: "Rigorous quality checks before going live to the world." }
    ]
  },
  {
    id: "dropshipping",
    icon: ShoppingCart,
    title: "Dropshipping Build",
    desc: "Full dropshipping store for fashion, beauty, pets, or gadgets — supplier integration and conversion-optimized design.",
    fullDesc: "Start your dropshipping journey with a store built for sales. I integrate reliable suppliers, optimize your product pages for high conversion, and set up automated fulfillment systems.",
    includes: ["Niche research", "Supplier setup", "Theme customization", "Upsell setup"],
    price: "From $700",
    timeline: "2 Weeks",
    tag: "Growth",
    roadmap: [
      { title: "Niche & Product Research", desc: "Identifying high-demand products and reliable suppliers." },
      { title: "Supplier Integration", desc: "Setting up automated product importing and order fulfillment." },
      { title: "Conversion Design", desc: "Building a store layout that builds trust and drives sales." },
      { title: "Marketing Setup", desc: "Integrating pixels and tracking for your ad campaigns." },
      { title: "Launch Support", desc: "Guidance on your first sales and scaling strategies." }
    ]
  },
  {
    id: "migration",
    icon: RefreshCw,
    title: "Store Migration",
    desc: "Seamlessly migrate your store from any platform to Shopify without losing data, SEO rankings, or sales momentum.",
    fullDesc: "Switching platforms shouldn't be scary. I ensure a 100% safe migration of your products, customers, orders, and most importantly, your SEO rankings.",
    includes: ["Product/order migration", "URL redirects", "SEO preservation", "Testing"],
    price: "$500",
    timeline: "2-3 Weeks",
    tag: "Scale",
    roadmap: [
      { title: "Data Mapping", desc: "Planning how data from your old platform fits into Shopify." },
      { title: "Migration Setup", desc: "Configuring secure data transfer protocols." },
      { title: "Transfer & Validation", desc: "Moving data and verifying every single record." },
      { title: "SEO Preservation", desc: "Setting up 301 redirects to keep your Google rankings." },
      { title: "Final Cutover", desc: "Switching your domain and launching on Shopify." }
    ]
  },
  {
    id: "custom",
    icon: Palette,
    title: "Custom Liquid Dev",
    desc: "Bespoke Shopify store using premium themes — fully tailored to your brand identity with custom Liquid code.",
    fullDesc: "Go beyond standard theme limitations. I build custom Liquid sections, unique product page features, and complex logic that sets your store apart from the competition.",
    includes: ["Color/font branding", "Custom sections", "Mobile optimization", "Speed tuning"],
    price: "Custom Quote",
    timeline: "2-4 Weeks",
    tag: "Premium",
    roadmap: [
      { title: "Technical Audit", desc: "Reviewing your current code and identifying bottlenecks." },
      { title: "Feature Scoping", desc: "Defining the exact functionality and user experience." },
      { title: "Development Phase", desc: "Writing clean, efficient Liquid and JavaScript code." },
      { title: "Integration & Testing", desc: "Ensuring custom features work seamlessly with your apps." },
      { title: "Deployment", desc: "Pushing changes to your live store with zero downtime." }
    ]
  },
  {
    id: "plus",
    icon: Target,
    title: "Shopify Plus Upgrades",
    desc: "Enterprise Shopify Plus configuration, checkout extensibility, custom B2B portals, and enterprise migrations.",
    fullDesc: "Enterprise brands hitting the limitations of standard Shopify need robust customizations to handle massive scale. A standard theme cannot support multi-million dollar volume, custom B2B pricing grids, complex checkout modifications, or seamless API integrations with enterprise ERPs.",
    includes: ["Checkout Extensibility", "B2B Features", "Shopify Scripts", "App Integration"],
    price: "Custom Quote",
    timeline: "3-6 Weeks",
    tag: "Plus",
    roadmap: [
      { title: "Enterprise Scoping", desc: "Mapping out complex flows like B2B wholesale pricing." },
      { title: "Checkout Extensibility", desc: "Building custom checkout UI extensions and functions." },
      { title: "Integration", desc: "Connecting enterprise ERPs and bespoke internal operational apps." },
      { title: "Load Testing", desc: "Ensuring zero performance drops under massive flash sale pressure." },
      { title: "Deployment", desc: "Safe, zero-downtime launch for your enterprise brand." }
    ]
  },
  {
    id: "bug",
    icon: Bug,
    title: "Bug Fixing",
    desc: "Fast resolution of any Shopify errors, broken layouts, app conflicts, or checkout issues.",
    fullDesc: "Don't let technical glitches kill your sales. I provide rapid response support to fix layout issues, broken apps, and checkout errors that affect your bottom line.",
    includes: ["Bug diagnosis", "Fix + Test", "Ongoing support options"],
    price: "Custom Quote",
    timeline: "24-48 Hours",
    tag: "Support",
    roadmap: [
      { title: "Bug Diagnosis", desc: "Identifying the root cause of the issue in your theme or apps." },
      { title: "Safe Environment Fix", desc: "Applying fixes in a duplicate theme to ensure no live downtime." },
      { title: "Cross-Device Testing", desc: "Verifying the fix works perfectly on mobile and desktop." },
      { title: "Deployment", desc: "Publishing the fixed theme to your live store." },
      { title: "Post-Fix Monitoring", desc: "Ensuring the issue doesn't return and everything is stable." }
    ]
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    desc: "Shopify-specific SEO setup to improve your Google rankings and drive organic traffic.",
    fullDesc: "Traffic is useless if it's not the right kind. I optimize your Shopify store's technical SEO, metadata, and site structure to help you rank for the keywords that actually convert.",
    includes: ["Meta tags", "URL structure", "Image alt text", "Schema markup"],
    price: "Custom Quote",
    timeline: "1-2 Weeks",
    tag: "Traffic",
    roadmap: [
      { title: "SEO Audit", desc: "Deep dive into your current rankings and technical health." },
      { title: "Keyword Research", desc: "Identifying high-intent keywords for your products." },
      { title: "On-Page Optimization", desc: "Updating titles, metas, and alt text across your store." },
      { title: "Technical Fixes", desc: "Improving site structure and fixing broken links." },
      { title: "Performance Tracking", desc: "Setting up Search Console and analytics to monitor growth." }
    ]
  },
  {
    id: "cro",
    icon: Target,
    title: "Conversion Rate Optimization (CRO)",
    desc: "A deep, data-driven analysis of your store's user behavior, providing a strategic roadmap of UI/UX improvements to increase your sales without increasing traffic.",
    fullDesc: "Increase your sales without increasing traffic. I perform a deep, data-driven analysis of your store's user behavior and provide a strategic roadmap of UI/UX improvements.",
    includes: ["UX Audit", "A/B Testing", "Heatmap Analysis", "Funnel Optimization"],
    price: "$800",
    timeline: "3 Weeks",
    tag: "Growth",
    roadmap: [
      { title: "Behavior Analysis", desc: "Installing heatmaps and analyzing drop-off points." },
      { title: "Hypothesis Generation", desc: "Identifying friction points and opportunities." },
      { title: "Design Solutions", desc: "Creating optimized mockups and new flows." },
      { title: "A/B Testing", desc: "Running live experiments to validate conversions." },
      { title: "Implementation", desc: "Rolling out the winning variations." }
    ]
  },
  {
    id: "apps",
    icon: Layout,
    title: "App Configuration",
    desc: "Seamless integration of marketing, loyalty, and logistics apps without slowing your store.",
    fullDesc: "Installing apps is easy, but configuring them correctly without destroying your store speed is hard. We handle complex setups for Klaviyo, Recharge, Yotpo, and more.",
    includes: ["App installation", "Theme integration", "Speed testing", "Workflow setup"],
    price: "$300",
    timeline: "3-5 Days",
    tag: "Support",
    roadmap: [
      { title: "Requirements Check", desc: "Finding the best app for your specific needs." },
      { title: "Integration", desc: "Installing and wiring the app to your theme." },
      { title: "Custom Styling", desc: "Matching the app's widgets to your brand design." },
      { title: "Speed Check", desc: "Ensuring the app script doesn't drop your Lighthouse score." },
      { title: "Handover", desc: "Training you on how to use the new dashboard." }
    ]
  },
  {
    id: "speed",
    icon: Zap,
    title: "Speed Optimization",
    desc: "Lightning-fast page loads to improve Google rankings and customer retention.",
    fullDesc: "Every second of delay costs you sales. I optimize your theme code, compress assets, and prune heavy apps to get your store to a 90+ score on Core Web Vitals.",
    includes: ["Core Web Vitals", "Image optimization", "Code minification", "App audit"],
    price: "$400",
    timeline: "1 Week",
    tag: "Performance",
    roadmap: [
      { title: "Speed Audit", desc: "Identifying the specific bottlenecks slowing down your store." },
      { title: "Image & Asset Optimization", desc: "Compressing and lazy-loading heavy visual content." },
      { title: "Code Cleanup", desc: "Minifying CSS/JS and removing unused theme fragments." },
      { title: "App Script Pruning", desc: "Deferring heavy app scripts to improve initial load time." },
      { title: "Performance Reports", desc: "Final testing across mobile and desktop with before/after data." }
    ]
  }
];

const faqs = [
  { q: "How long does a Shopify store build take?", a: "Typically, a complete store build takes between 5 to 10 days depending on the complexity and number of products." },
  { q: "What platforms can you migrate from?", a: "I can migrate from WooCommerce, Wix, Squarespace, BigCommerce, and custom-built platforms." },
  { q: "Do you offer ongoing support after launch?", a: "Absolutely. I offer maintenance packages and support to ensure your store continues to run smoothly after launch." },
  { q: "What's included in the free store audit?", a: "The audit includes a review of your store's speed, design/UX, SEO health, and conversion rate optimization tips." },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Founder, Glow Beauty",
    content: "Sheun completely transformed our Shopify store. Our conversion rate doubled in the first month after the redesign!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "CEO, TechHaven",
    content: "The migration from WooCommerce to Shopify was flawless. We didn't lose a single order during the transition.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "David Miller",
    role: "Director, Urban Gear",
    content: "The Growth Plan alone was worth it. We've seen a 40% increase in organic traffic and sales within just 3 weeks.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Mia Thompson",
    role: "Owner, Bloom Florals",
    content: "Our site looks completely premium now. The UI improvements alone increased our average order value by 15%.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

const ServiceModal = ({ service, onClose }: { service: any; onClose: () => void }) => {
  const navigate = useNavigate();
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy/90 backdrop-blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-light rounded-full flex items-center justify-center text-navy hover:bg-green hover:text-navy transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-navy-gradient p-8 md:p-16 text-white space-y-10 md:space-y-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green rounded-3xl flex items-center justify-center text-navy shadow-2xl shrink-0">
              <service.icon size={32} className="md:w-[40px] md:h-[40px]" />
            </div>
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter text-balance break-words">{service.title}</h3>
              <p className="text-white/60 text-base md:text-xl leading-relaxed font-serif italic text-balance break-words">{service.fullDesc}</p>
            </div>
            <div className="space-y-6 pt-10 border-t border-white/10">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-green shrink-0">
                  <Clock size={20} className="md:w-[24px] md:h-[24px]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Timeline</p>
                  <p className="text-lg md:text-xl font-bold">{service.timeline}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-green shrink-0">
                  <DollarSign size={20} className="md:w-[24px] md:h-[24px]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Starting From</p>
                  <p className="text-lg md:text-xl font-bold">{service.price}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 md:p-16 space-y-10 md:space-y-12 bg-white">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-3 md:gap-4">
                <ListChecks className="text-green w-6 h-6 md:w-8 md:h-8" />
                <h4 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">Service Roadmap</h4>
              </div>
              <div className="space-y-6 md:space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-navy/5">
                {service.roadmap.map((step: any, i: number) => (
                  <div key={i} className="relative pl-12 md:pl-16 group">
                    <div className="absolute left-0 top-1 w-8 h-8 md:w-10 md:h-10 bg-light rounded-2xl border border-navy/5 flex items-center justify-center text-xs md:text-sm font-bold text-navy group-hover:bg-green group-hover:border-green transition-all duration-500">
                      {i + 1}
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <p className="text-lg md:text-xl font-bold text-navy">{step.title}</p>
                      <p className="text-navy/60 text-sm md:text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 md:pt-10 border-t border-navy/5">
              <button
                onClick={() => {
                  onClose();
                  navigate("/apply#apply-form");
                }}
                className="w-full bg-navy text-white py-5 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-green hover:text-navy transition-all duration-500 flex items-center justify-center gap-3 md:gap-4 shadow-2xl"
              >
                Get Started <ArrowRight size={20} className="md:w-[24px] md:h-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialExpanded, setIsTestimonialExpanded] = useState(false);
  const navigate = useNavigate();

  const nextTestimonial = () => {
    setIsTestimonialExpanded(false);
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsTestimonialExpanded(false);
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isTestimonialExpanded) return;
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [isTestimonialExpanded]);

  return (
    <PageWrapper 
      title="Shopify Development Services | Sheun Hub" 
      description="Professional Shopify services: store setups, data migrations, theme customizations, SEO enhancements, and conversion rate optimization (CRO)."
      keywords="Shopify Services, Store Setup, Shopify Migration, Theme Customization, E-commerce SEO, Convertion Rate Optimization, shopify dropshipping expert, hire shopify seo expert, shopify experts, shopify freelancer, hire someone to build shopify store, shopify migration, shopify migration agency, shopify migration experts, build shopify store for me, shopify web designer, shopify developers, shopify website designer, shopify agency, hire shopify expert, shopify consultant, freelance shopify developer, shopify website designers, magento to shopify migration, shopify designers, shopify website design company, shopify developers for hire, shopify marketing experts, shopify website experts, shopify seo expert, shopify expert agency, shopify agency partners, shopify migration services, hire someone to set up shopify store, woocommerce to shopify migration, shopify coding expert, web designer for shopify, shopify freelance developer, shopify designer freelance, migrate woocommerce to shopify, shopify developer agency, shopify plus experts, shopify design experts, shopify expert help, certified shopify expert, shopify expert website builder, shopify developer hire, shopify store expert, freelance shopify website designer, hire someone to build my shopify store, shopify web agency, find shopify experts, shopify to bigcommerce migration, migrate from shopify to bigcommerce, wordpress to shopify migration, bigcommerce to shopify migration, shopify consultation, shopify seo specialist, shopify professionals, shopify expert hire, hire expert shopify, shopify development service, best shopify website designers, best shopify agency, shopify experts seo, shopify expert developer, shopify ecommerce experts, hire a shopify seo expert"
      canonical="/services"
      schema={{
         "@context": "https://schema.org",
         "@type": "Service",
         "name": "Shopify Development Services",
         "provider": {
            "@type": "Person",
            "name": "Sheun"
         },
         "description": "Expert Shopify store setup, data migration, theme customization, and holistic E-commerce growth.",
         "url": "https://sheun.online/services"
      }}
    >
      {/* Services Hero - Editorial Style */}
      <ScrollReveal>
        <section className="pt-48 pb-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green rounded-full blur-[200px] animate-pulse" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-16">
            <div className="space-y-8">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-green text-xs font-bold uppercase tracking-[0.5em]"
              >
                Services & Solutions
              </motion.p>
              <motion.h1 
                className="text-6xl md:text-[118px] font-bold text-white tracking-tighter leading-[0.8]"
              >
                <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="block">Shopify Services</motion.span>
                <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="italic font-serif font-light text-white/40 block">Expert Solutions</motion.span>
                <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="text-green block text-3xl md:text-5xl mt-8">by Sheun Hub</motion.span>
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-12"
            >
              <p className="text-white/60 text-2xl leading-relaxed max-w-2xl font-serif italic">
                Whether you're starting from scratch or scaling an existing store — I provide the technical expertise to make it happen.
              </p>
              <div className="inline-flex items-center gap-4 bg-green/10 border border-green/20 px-10 py-5 rounded-full">
                <Gift className="text-green" size={24} />
                <span className="text-green font-bold text-lg">Free Store Audit Included</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Services List/Grid */}
      <ScrollReveal>
        <section className="py-32 bg-white">
        <div className={`container mx-auto px-6 ${viewMode === 'list' ? 'max-w-5xl' : 'max-w-7xl'}`}>
          <div className="flex justify-end mb-12">
            <div className="bg-light border border-navy/5 p-1 rounded-full flex items-center drop-shadow-sm">
              <button 
                onClick={() => setViewMode('grid')}
                className={`w-12 h-12 rounded-full transition-all flex items-center justify-center ${viewMode === 'grid' ? 'bg-white shadow-md text-navy' : 'text-navy/40 hover:text-navy hover:bg-white/50'}`}
                aria-label="Grid View"
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`w-12 h-12 rounded-full transition-all flex items-center justify-center ${viewMode === 'list' ? 'bg-white shadow-md text-navy' : 'text-navy/40 hover:text-navy hover:bg-white/50'}`}
                aria-label="List View"
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {viewMode === 'list' ? (
          <div className="space-y-16">
            {services.map((service, i) => {
              const data = servicesData[service.id as keyof typeof servicesData];
              if (!data) return null;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-light p-6 md:p-12 lg:p-16 rounded-[32px] md:rounded-[40px] border border-navy/5 relative overflow-hidden group hover:border-green/50 transition-colors duration-500 shadow-sm hover:shadow-2xl"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-green bg-green/10 px-6 py-2 rounded-full hidden md:inline-block">
                      {service.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="w-20 h-20 bg-navy/5 rounded-3xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-white transition-all duration-500 shrink-0">
                        <service.icon size={40} />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-2">{service.title}</h3>
                        <p className="text-navy/50 font-serif italic text-lg md:text-xl">{data.heading || service.desc}</p>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                      <div className="space-y-8">
                        {/* Problem */}
                        <div className="space-y-3">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full" /> The Problem
                          </h4>
                          <p className="text-navy/70 leading-relaxed font-medium">
                            {data.problem}
                          </p>
                        </div>

                        {/* Scope */}
                        <div className="space-y-3">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green rounded-full" /> My Solution (Scope)
                          </h4>
                          <p className="text-navy/70 leading-relaxed font-medium">
                            {data.scope}
                          </p>
                        </div>
                      </div>

                      {/* Deliverables & Actions */}
                      <div className="bg-white p-8 rounded-3xl space-y-8 border border-navy/5 h-full flex flex-col">
                        <div className="space-y-4 flex-grow">
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40">Key Deliverables</h4>
                          <ul className="space-y-3">
                            {data.deliverables.map((item, j) => (
                              <li key={j} className="flex items-start gap-3 text-navy/80 font-semibold text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-8 border-t border-navy/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                          <div className="text-center sm:text-left">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/40 mb-1">Starting At</p>
                            <span className="text-navy font-bold text-2xl tracking-tighter">{service.price}</span>
                          </div>
                          <Link 
                            to={`/services/${service.id}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-green hover:text-navy transition-all duration-300 shadow-xl hover:shadow-green/20"
                          >
                            Learn More <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const data = servicesData[service.id as keyof typeof servicesData];
                if (!data) return null;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="bg-light p-8 md:p-10 rounded-3xl border border-navy/5 relative overflow-hidden group hover:border-green/50 transition-colors duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-green bg-green/10 px-4 py-1.5 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                     <div className="w-16 h-16 bg-white rounded-2xl border border-navy/5 flex items-center justify-center text-navy group-hover:bg-green group-hover:text-white transition-all duration-500 mb-8 shrink-0">
                      <service.icon size={32} />
                    </div>
                    
                    <div className="space-y-4 mb-8 flex-grow">
                      <h3 className="text-2xl font-bold text-navy tracking-tight leading-tight">{service.title}</h3>
                      <p className="text-navy/60 font-medium leading-relaxed line-clamp-3">{service.desc}</p>
                    </div>

                    <div className="pt-8 border-t border-navy/5 flex items-center justify-between mt-auto">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Starting at</p>
                        <p className="font-bold text-navy">{service.price}</p>
                      </div>
                      <Link 
                        to={`/services/${service.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy shadow-sm group-hover:bg-navy group-hover:text-white transition-all"
                      >
                        <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>

      {/* Pricing Tiers - Bento Grid */}
      <ScrollReveal>
        <section className="py-32 bg-light">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
              <p className="text-navy/30 text-[10px] font-bold uppercase tracking-[0.4em]">Pricing</p>
              <h2 className="text-6xl md:text-8xl font-bold text-navy tracking-tighter leading-none">Simple <span className="italic font-serif font-light text-navy/40">Plans</span>.</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {[
                { name: "Basic", price: "Custom", features: ["Store Setup", "Basic Theme Custom", "Up to 10 Products", "SEO Setup", "Bug Fixing"], popular: false },
                { name: "Standard", price: "$700", features: ["Store Setup", "Advanced Theme Custom", "Up to 30 Products", "SEO Setup", "Bug Fixing", "Dropshipping Build"], popular: true },
                { name: "Premium", price: "$1200+", features: ["Full Custom Build", "Unlimited Products", "SEO Setup", "Bug Fixing", "Migration", "30 Days Support"], popular: false },
              ].map((tier, i) => (
                <div
                  key={i}
                  className={`p-8 md:p-16 rounded-3xl border-2 transition-all duration-500 flex flex-col ${
                    tier.popular ? "bg-navy-gradient text-white border-green scale-100 lg:scale-105 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] z-10" : "bg-white text-navy border-transparent"
                  }`}
                >
                  {tier.popular && <span className="bg-green text-navy text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full mb-10 inline-block self-start">Most Popular</span>}
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-4 uppercase tracking-[0.1em] opacity-40">{tier.name}</h3>
                    <p className={`text-7xl font-bold tracking-tighter ${tier.popular ? "text-green" : "text-navy"}`}>{tier.price}</p>
                  </div>
                  
                  <ul className="space-y-8 mb-16 flex-grow">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-5 text-lg font-medium opacity-80">
                        <CheckCircle2 size={24} className="text-green shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>

                  <Link to="/apply#apply-form" className={`w-full py-8 rounded-full font-bold text-xl text-center transition-all duration-500 ${
                    tier.popular ? "bg-green text-navy hover:scale-105 shadow-xl" : "bg-navy text-white hover:bg-navy/90"
                  }`}>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Slider */}
      <ScrollReveal>
        <section className="py-32 bg-white relative overflow-hidden border-t border-navy/5">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Quote size={100} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center space-y-6 mb-16">
              <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.3em]">Client Success</p>
              <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
                Service <span className="italic font-serif font-light text-navy/40">Feedback</span>.
              </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-light p-6 md:p-10 rounded-3xl shadow-xl border border-navy/5 flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="shrink-0 relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md relative z-10">
                      <img 
                        src={testimonials[testimonialIndex].image} 
                        alt={testimonials[testimonialIndex].name} 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green text-navy rounded-full flex items-center justify-center shadow z-20">
                      <Quote size={10} />
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1">
                      {[...Array(testimonials[testimonialIndex].rating || 5)].map((_, j) => (
                        <Star key={j} size={16} fill="currentColor" className="text-[#FFC107]" />
                      ))}
                    </div>
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <p className="text-navy/70 font-serif italic text-lg md:text-xl leading-relaxed transition-all duration-300">
                        "{isTestimonialExpanded || testimonials[testimonialIndex].content.length <= 150 
                          ? testimonials[testimonialIndex].content 
                          : `${testimonials[testimonialIndex].content.slice(0, 150)}...`}"
                      </p>
                      {testimonials[testimonialIndex].content.length > 150 && (
                        <button 
                          onClick={() => setIsTestimonialExpanded(!isTestimonialExpanded)}
                          className="text-navy font-bold text-sm tracking-wide hover:text-green transition-colors mt-2 underline decoration-green decoration-2 underline-offset-4"
                        >
                          {isTestimonialExpanded ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>
                    <div>
                      <h4 className="text-navy font-bold text-lg">{testimonials[testimonialIndex].name}</h4>
                      <p className="text-navy/40 text-xs uppercase tracking-widest mt-1">{testimonials[testimonialIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-6 mt-10">
                <button 
                  onClick={prevTestimonial}
                  className="w-14 h-14 rounded-full bg-white border border-navy/10 flex items-center justify-center text-navy hover:bg-green hover:border-green transition-all shadow-lg hover:scale-105"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setTestimonialIndex(idx)}
                      className={`h-2 rounded-full transition-all ${idx === testimonialIndex ? 'w-8 bg-green' : 'w-2 bg-navy/10 hover:bg-navy/30'}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="w-14 h-14 rounded-full bg-white border border-navy/10 flex items-center justify-center text-navy hover:bg-green hover:border-green transition-all shadow-lg hover:scale-105"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ - Bento Layout */}
      <ScrollReveal>
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-4">
                  <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.3em]">Support</p>
                  <h2 className="text-5xl font-bold text-navy tracking-tight">Common <br />Questions.</h2>
                </div>
                <p className="text-navy/40 text-lg leading-relaxed">
                  Everything you need to know about working with me on your Shopify project.
                </p>
                <div className="bg-light p-8 rounded-xl border border-navy/5 space-y-4">
                  <MessageSquare className="text-green" size={32} />
                  <h4 className="text-xl font-bold text-navy">Still have questions?</h4>
                  <p className="text-navy/40 text-sm">I'm here to help. Let's chat about your specific needs.</p>
                  <button 
                    onClick={() => navigate("/apply#apply-form")} 
                    className="inline-block text-navy font-bold text-sm border-b-2 border-green pb-1 text-left"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-navy/5 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-8 text-left flex items-center justify-between bg-light hover:bg-light/80 transition-colors"
                    >
                      <span className="font-bold text-navy text-lg">{faq.q}</span>
                      <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform ${openFaq === i ? "rotate-180 bg-green text-navy" : "text-navy/20"}`}>
                        <ChevronDown size={20} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-8 text-navy/60 text-lg leading-relaxed border-t border-navy/5 bg-white">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Main Consultation CTA */}
      <ScrollReveal>
        <section className="py-32 bg-light">
          <div className="container mx-auto px-6">
            <div className="bg-navy rounded-[60px] p-12 md:p-24 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-full h-full bg-green/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
              </div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
                <div className="space-y-10">
                  <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-green">
                    <ShieldCheck size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Direct Expert Access</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.95]">
                    Need a <span className="text-green italic font-serif font-light">Custom Quote</span> or Tech Consultation?
                  </h2>
                  <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-serif italic max-w-xl">
                    Skip the generic plans. Let's discuss your specific store requirements and build a technical roadmap that actually works for your business.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 space-y-10">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white tracking-tight">Schedule Your Call</h3>
                      <p className="text-white/40 font-medium">15-minute intro to discuss scope, timelines, and pricing.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link 
                        to="/apply#apply-form" 
                        className="bg-green text-navy px-8 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-green/20 text-center flex items-center justify-center gap-2"
                      >
                        Book Call <ArrowRight size={20} />
                      </Link>
                      <Link 
                        to="/contact" 
                        className="bg-white/10 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center border border-white/10"
                      >
                        Send Message
                      </Link>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-center lg:justify-start gap-10">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-navy overflow-hidden">
                            <img 
                              src={`https://i.pravatar.cc/150?u=${i + 10}`} 
                              alt="Client" 
                              className="w-full h-full object-cover grayscale" 
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">120+ Brands Scaled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>


      {/* Comprehensive Shopify Services SEO Context */}
      <ScrollReveal>
        <section className="py-24 bg-white border-t border-navy/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-navy prose-a:text-green text-navy/70 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold font-sans not-italic mb-6 tracking-tight">Expert Custom Shopify Development Services</h2>
              <p className="mb-6 font-serif italic text-xl">
                In today's competitive digital landscape, a generic store won't cut it. Whether you are an ambitious e-commerce owner looking to scale globally or a local retailer ready to take your physical storefront online, a fast, conversion-optimized Shopify site is paramount. As a dedicated Shopify developer and e-commerce growth expert, I deliver end-to-end custom development tailored to high-growth brands in fashion, beauty, gadgets, and pet supply niches.
              </p>
              <h3 className="text-2xl font-bold font-sans not-italic mt-12 mb-4 tracking-tight">Built for Performance & Conversion</h3>
              <p className="mb-4">
                My approach to <strong>Shopify Store Setup</strong> and <strong>Custom Liquid Development</strong> ensures that your website is not only visually stunning but technically flawless. A standard theme installation might get you started, but to truly dominate your market, you need a store engineered for performance. I build highly responsive dropshipping layouts, integrate essential third-party apps seamlessly without bloat, and write bespoke Liquid code to accommodate your unique business logic. This level of customization allows you to offer personalized shopping experiences that drive customer loyalty and increase your Average Order Value (AOV).
              </p>
              <p className="mb-4">
                If you are struggling with a clunky platform, my <strong>E-commerce Platform Integration</strong> and migration services guarantee a smooth transition. Transitioning from WooCommerce, Wix, or BigCommerce to Shopify can seem intimidating, but I carefully map your products, customers, and order history while meticulously preserving your SEO rankings via proper 301 redirects. You won't lose your hard-earned domain authority.
              </p>
              <h3 className="text-2xl font-bold font-sans not-italic mt-12 mb-4 tracking-tight">Driving Traffic & Growth</h3>
              <p className="mb-4">
                Through comprehensive <strong>Shopify SEO Optimization</strong>, I refine your site's architecture, optimize meta tags, and deploy schema markup so that your store ranks for buyer-intent keywords effortlessly. Coupled with rigorous <strong>Conversion Rate Optimization (CRO)</strong> audits and <strong>Shopify Speed Optimization</strong>, we ensure your pages load in under 3 seconds to convert browsers into loyal buyers. Focus on growing your product line, and leave the technical heavy lifting to a trusted Shopify expert.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Free Audit CTA - Recipe 2 */}
      <ScrollReveal>
        <section className="py-48 bg-navy-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-green/5 opacity-50" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto space-y-16"
            >
              <div className="w-32 h-32 bg-white/5 rounded-2xl flex items-center justify-center text-green mx-auto shadow-2xl border border-white/10 backdrop-blur-xl">
                <Gift size={64} />
              </div>
              <h2 className="text-7xl md:text-[140px] font-bold text-white leading-[0.8] tracking-[-0.06em] uppercase">
                Free Store <span className="text-green italic font-serif font-light lowercase">Audit.</span>
              </h2>
              <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic">
                Not sure where to start? I'll review your store and send you a growth tips report — completely free.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                <button 
                  onClick={() => navigate("/apply#apply-form")} 
                  className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 green-glow"
                >
                  Get Started
                </button>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-green">
                  <ShieldCheck size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Trust Guaranteed</span>
                </div>
              </div>

              <div className="pt-12 flex items-center justify-center gap-4">
                <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
                </a>
                <a href="https://wa.me/2348084315743" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                </a>
                <a href="mailto:sheunhost@gmail.com" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="https://www.fiverr.com/sheun_h" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-green hover:text-navy text-white rounded-full transition-all border border-white/10 shrink-0 flex items-center justify-center overflow-hidden" title="Fiverr">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zeK0uAVJfpeE1Zx1b3vDoihQGglG3BW2IjvgFTmksQ&s" alt="Fiverr" className="w-6 h-6 object-contain" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </PageWrapper>
  );
}
