import { motion, AnimatePresence } from "framer-motion";
import { Layout, RefreshCw, ShoppingCart, Palette, Bug, Search, Rocket, Gift, ChevronDown, CheckCircle2, ArrowRight, Code2, Zap, MessageSquare, Star, X, Clock, DollarSign, ListChecks, ShieldCheck, Target } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";
import { openCalendlyPopup } from "../lib/utils";

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
    title: "Conversion Optimization",
    desc: "Data-driven UI/UX improvements to turn more visitors into paying customers.",
    fullDesc: "Stop leaving money on the table. We analyze user recordings, run A/B tests, and optimize your funnel to increase your conversion rate and average order value.",
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
  }
];

const faqs = [
  { q: "How long does a Shopify store build take?", a: "Typically, a complete store build takes between 5 to 10 days depending on the complexity and number of products." },
  { q: "Do you work with clients outside Nigeria?", a: "Yes, I work with clients globally, with a significant portion of my client base located in the United States and Europe." },
  { q: "What platforms can you migrate from?", a: "I can migrate from WooCommerce, Wix, Squarespace, BigCommerce, and custom-built platforms." },
  { q: "Do you offer ongoing support after launch?", a: "Absolutely. I offer maintenance packages and support to ensure your store continues to run smoothly after launch." },
  { q: "What's included in the free store audit?", a: "The audit includes a review of your store's speed, design/UX, SEO health, and conversion rate optimization tips." },
];

const ServiceModal = ({ service, onClose }: { service: any; onClose: () => void }) => {
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
        className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-light rounded-full flex items-center justify-center text-navy hover:bg-green hover:text-navy transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-navy-gradient p-12 md:p-16 text-white space-y-12">
            <div className="w-20 h-20 bg-green rounded-3xl flex items-center justify-center text-navy shadow-2xl">
              <service.icon size={40} />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-balance break-words">{service.title}</h3>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed font-serif italic text-balance break-words">{service.fullDesc}</p>
            </div>
            <div className="space-y-6 pt-10 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-green">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Timeline</p>
                  <p className="text-xl font-bold">{service.timeline}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-green">
                  <DollarSign size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Starting From</p>
                  <p className="text-xl font-bold">{service.price}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-12 md:p-16 space-y-12 bg-white">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <ListChecks className="text-green" size={32} />
                <h4 className="text-3xl font-bold text-navy tracking-tight">Service Roadmap</h4>
              </div>
              <div className="space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-navy/5">
                {service.roadmap.map((step: any, i: number) => (
                  <div key={i} className="relative pl-16 group">
                    <div className="absolute left-0 top-1 w-10 h-10 bg-light rounded-2xl border border-navy/5 flex items-center justify-center text-sm font-bold text-navy group-hover:bg-green group-hover:border-green transition-all duration-500">
                      {i + 1}
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl font-bold text-navy">{step.title}</p>
                      <p className="text-navy/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-navy/5">
              <button
                onClick={(e) => {
                  onClose();
                  openCalendlyPopup(e);
                }}
                className="w-full bg-navy text-white py-6 rounded-full font-bold text-xl hover:bg-green hover:text-navy transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl"
              >
                Book a 15-Minute Strategy Audit <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <PageWrapper 
      title="Services" 
      description="Professional Shopify services including store setup, migration, theme customization, and conversion rate optimization."
      canonical="/services"
    >
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
      {/* Services Hero - Editorial Style */}
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

      {/* 2 Sub-banners Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative h-[400px] border border-white/10 rounded-[60px] overflow-hidden p-12 flex flex-col justify-end bg-gradient-to-br from-white/5 to-transparent backdrop-blur-3xl"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform duration-700">
                <Code2 size={200} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">Liquid Development</h3>
              <p className="text-white/40 text-lg font-serif italic mb-8">Custom themes and bespoke functionality built on Shopify's native language.</p>
              <div className="w-12 h-1 bg-green" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative h-[400px] bg-green text-navy rounded-[60px] overflow-hidden p-12 flex flex-col justify-end"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 scale-150 group-hover:rotate-12 transition-transform duration-700">
                <Layout size={200} className="text-navy" />
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tight">Conversion UI</h3>
              <p className="text-navy/60 text-lg font-serif italic mb-8">User interfaces designed specifically to guide customers to the checkout button.</p>
              <div className="w-12 h-1 bg-navy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section - The Ecosystem */}
      <section className="py-32 bg-light relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-none">
                Engineering <br />
                <span className="text-green italic font-serif font-light">Commerce Ecosystems.</span>
              </h2>
              <div className="w-16 h-1 bg-green mx-auto" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-xl md:text-2xl text-navy/70 font-serif italic leading-relaxed"
            >
              <p>
                Services at Sheun Hub are not isolated tasks; they are interconnected components of a holistic eCommerce strategy. Whether you are migrating from a legacy platform or launching a first-of-its-kind dropshipping venture, our goal is to build a resilient architecture that supports rapid scaling.
              </p>
              <p>
                We focus on the intersection of speed, security, and storytelling. By optimizing every technical layer—from Liquid theme logic to third-party app synchronization—we ensure that your store remains agile, accessible, and high-converting even under the pressure of global traffic spikes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid - Visible Grid Recipe */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-navy/5 rounded-[60px] overflow-hidden">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="p-16 border-r border-b border-navy/5 group hover:bg-light transition-all relative overflow-hidden text-center flex flex-col h-full items-center"
              >
                <div className="absolute top-0 right-0 p-12 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-green bg-green/10 px-4 py-2 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <div className="space-y-10 relative z-10 flex-grow w-full flex flex-col items-center">
                  <div className="w-20 h-20 bg-navy/5 rounded-3xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-navy transition-all duration-500">
                    <service.icon size={40} />
                  </div>
                  <div className="space-y-6 text-center">
                    <h3 className="text-4xl font-bold text-navy tracking-tight">{service.title}</h3>
                    <p className="text-navy/40 text-lg leading-relaxed font-serif italic">{service.desc}</p>
                  </div>
                  <ul className="space-y-4 pb-10 flex flex-col items-center w-full">
                    {service.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-4 text-sm text-navy/60 font-bold uppercase tracking-[0.2em] text-center">
                        <div className="w-1.5 h-1.5 bg-green rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-10 border-t border-navy/5 flex flex-col items-center justify-center gap-6 mt-auto w-full">
                  <span className="text-navy font-bold text-3xl tracking-tighter">{service.price}</span>
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="bg-navy text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-green hover:text-navy transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                  >
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers - Bento Grid */}
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
                className={`p-16 rounded-[60px] border-2 transition-all duration-500 flex flex-col ${
                  tier.popular ? "bg-navy-gradient text-white border-green scale-105 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] z-10" : "bg-white text-navy border-transparent"
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

      {/* FAQ - Bento Layout */}
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
              <div className="bg-light p-8 rounded-[32px] border border-navy/5 space-y-4">
                <MessageSquare className="text-green" size={32} />
                <h4 className="text-xl font-bold text-navy">Still have questions?</h4>
                <p className="text-navy/40 text-sm">I'm here to help. Let's chat about your specific needs.</p>
                <button onClick={openCalendlyPopup} className="inline-block text-navy font-bold text-sm border-b-2 border-green pb-1 text-left">Book a 15-Minute Strategy Audit</button>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-navy/5 rounded-[32px] overflow-hidden">
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

      {/* Free Audit CTA - Recipe 2 */}
      <section className="py-48 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-green/5 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto space-y-16"
          >
            <div className="w-32 h-32 bg-white/5 rounded-[40px] flex items-center justify-center text-green mx-auto shadow-2xl border border-white/10 backdrop-blur-xl">
              <Gift size={64} />
            </div>
            <h2 className="text-7xl md:text-[140px] font-bold text-white leading-[0.8] tracking-[-0.06em] uppercase">
              Free Store <span className="text-green italic font-serif font-light lowercase">Audit.</span>
            </h2>
            <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic">
              Not sure where to start? I'll review your store and send you a growth tips report — completely free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <button onClick={openCalendlyPopup} className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 green-glow">
                Book a 15-Minute Strategy Audit
              </button>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-green">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Trust Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
