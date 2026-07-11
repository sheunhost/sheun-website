import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  MousePointer2, 
  ShoppingBag, 
  ShieldCheck, 
  Zap, 
  Smartphone,
  Search,
  MessageSquare,
  FileText,
  Clock
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

const conversionKillers = [
  {
    title: "Weak Hero Copy (The 'Welcome' Trap)",
    killer: "Vague headlines like 'Welcome to our store' or 'Quality products for you.'",
    fix: "Use a benefit-driven headline that answers 'What is in it for me?' in 3 seconds.",
    example: "Instead of 'Best Eco-Friendly Shop', use 'The Last Reusable Water Bottle You'll Ever Buy—Guaranteed for Life.'",
    icon: MessageSquare
  },
  {
    title: "Missing Trust Signals",
    killer: "No reviews, no physical address, or generic 'Secure Checkout' badges that look like clip-art.",
    fix: "Real customer photos, specific industry certifications, and a clear 'About Us' that shows real humans.",
    example: "A beauty brand increased sales by 22% just by adding 'Dermatologist Tested' and 500+ verified Loox reviews to the top of the fold.",
    icon: ShieldCheck
  },
  {
    title: "Bad Product Images",
    killer: "Low-res photos, inconsistent lighting, or no lifestyle shots showing the product in use.",
    fix: "High-resolution studio shots on white backgrounds paired with 2-3 lifestyle images.",
    example: "An apparel store replaced flat-lay phone photos with professional model shots, reducing their 'Add to Cart' bounce rate by nearly half.",
    icon: ShoppingBag
  },
  {
    title: "Confusing Navigation",
    killer: "Mega-menus with 50+ links or vague categories like 'Stuff' and 'Collection 1'.",
    fix: "Simplify to 4-6 primary categories based on how customers actually search.",
    example: "One tech accessory store consolidated their 12-item header into 4 clear categories (iPhone, Samsung, Mac, Sale), resulting in a 15% lift in browsing depth.",
    icon: MousePointer2
  },
  {
    title: "The Mobile Speed Wall",
    killer: "Large unoptimized images and 20+ apps fighting for control, leading to a 5+ second mobile load time.",
    fix: "Remove unused apps and use Shopify's native liquid optimization for image loading.",
    example: "A kitchenware store improved their mobile PageSpeed score from 32 to 85, which directly correlated to a 30% increase in mobile conversion rate.",
    icon: Smartphone
  }
];

export default function ConversionKillers() {
  return (
    <PageWrapper
      title="Shopify Store Not Converting? CRO Optimization Guide (UK, US, CA, AU, FR, DE)"
      description="Is your Shopify storefront getting traffic but no sales? Fix low Shopify conversion rates, checkout drop-offs, and design errors. Professional CRO audit services in the UK, US, Canada, Australia, France, and Germany."
      keywords="Shopify store not converting UK, Shopify conversion optimization USA, e-commerce CRO audit Canada, fix checkout drop-off Australia, Shopify checkout audit France, Shopify CRO expert Germany"
      canonical="/shopify-not-converting"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white border-b border-navy/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm mb-8 font-medium border border-red-100"
          >
            <AlertTriangle size={16} />
            <span>Traffic is easy. Conversions are hard.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-navy mb-8 leading-tight tracking-tight"
          >
            Why Your Shopify Store Isn't Selling (And How to Fix It).
          </motion.h1>

          <div className="prose prose-lg max-w-none text-navy/70 leading-relaxed font-serif italic mb-12">
            <p className="text-xl">
              You're running ads. You're posting on socials. You see the 'Live View' in Shopify showing 20, 50, or 100 people on your site right now.
            </p>
            <p className="text-xl">
              But the 'Total Sales' remains at $0.00.
            </p>
          </div>

          <p className="text-lg text-navy/60 leading-relaxed mb-12">
            If your Shopify store is not converting, you don't have a traffic problem. You have a trust or friction problem. After reviewing dozens of stores, I've found that 90% of low conversion rates come down to the same five killers.
          </p>
        </div>
      </section>

      {/* The 5 Killers */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-navy mb-16 text-center">The 5 Most Common Conversion Killers</h2>
          
          <div className="space-y-12">
            {conversionKillers.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-12 rounded-[3rem] border border-navy/5 shadow-sm relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-navy text-white flex items-center justify-center shrink-0">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-2">The Killer:</span>
                        <p className="text-navy/60">{item.killer}</p>
                      </div>
                      
                      <div className="p-6 rounded-2xl bg-green/5 border border-green/10">
                        <span className="text-xs font-bold uppercase tracking-widest text-green block mb-2">The Fix:</span>
                        <p className="text-navy/80 font-medium">{item.fix}</p>
                      </div>

                      <div className="pt-4 border-t border-navy/5">
                        <span className="text-xs font-bold uppercase tracking-widest text-navy/40 block mb-2">Real World Example:</span>
                        <p className="text-sm text-navy/60 italic">"{item.example}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Stop Guessing" Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">Stop guessing. Start growing.</h2>
          <p className="text-lg text-navy/60 mb-12 leading-relaxed">
            Every day your store sits with a low conversion rate is a day you are burning ad spend and leaving money on the table. You don't need a $10,000 redesign. You need a surgical list of what is broken and how to fix it.
          </p>
        </div>
      </section>

      {/* Audit CTA */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="bg-white/5 border border-white/10 p-12 md:p-20 rounded-[4rem] backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green text-navy text-xs font-bold uppercase tracking-widest mb-8">
                  <Zap size={14} />
                  <span>Limited Weekly Slots</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Get Your Professional <br /><span className="text-green">Shopify Store Audit.</span></h2>
                <p className="text-xl text-white/60 mb-12">I will manually review your store and provide a priority fix list in 48 hours. No fluff, just results.</p>
                
                <ul className="space-y-4 mb-12">
                  {[
                    "Full UX & Friction Analysis",
                    "SEO & Speed Performance Check",
                    "Conversion Leak Identification",
                    "15-Minute Loom Video Walkthrough",
                    "Actionable Google Doc Checklist"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <CheckCircle2 size={20} className="text-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center lg:text-left">
                <div className="bg-white p-10 md:p-12 rounded-[3rem] text-navy shadow-2xl">
                  <div className="mb-8">
                    <span className="text-sm font-bold uppercase tracking-widest text-navy/40 block mb-2">Flat Fee Investment</span>
                    <div className="text-6xl font-bold">$197</div>
                  </div>
                  
                  <Link
                    to="/shopify-store-audit"
                    className="w-full py-6 rounded-2xl bg-navy text-white font-bold text-xl hover:bg-green transition-all shadow-xl flex items-center justify-center gap-3 group mb-6"
                  >
                    Get My Audit Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex flex-col gap-4 text-sm font-medium text-navy/40">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <Clock size={16} />
                      <span>48-Hour Delivery Guarantee</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <Search size={16} />
                      <span>Manually written by Sheun Hub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Article Text */}
      <section className="py-24 bg-offwhite">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-navy max-w-none text-navy/70 leading-relaxed space-y-8">
            <h3 className="text-2xl font-bold text-navy">Why is my Shopify store not selling?</h3>
            <p>
              It's a question I hear every week. You've followed the tutorials, set up the theme, and added products. But the sales aren't coming. Usually, it's not one big thing—it's a dozen small points of friction that add up to a "no" from your customer.
            </p>
            <p>
              Fixing a <strong>Shopify low conversion rate</strong> requires looking at your store through the eyes of a skeptical stranger. They don't know you. They don't know if your products are real. They are looking for any reason to leave your site and go back to Instagram or TikTok.
            </p>
            <p>
              When you <strong>fix your Shopify store</strong>, you're essentially removing those reasons to leave. You're building a "slippery slope" that leads from the landing page directly to the "Thank You" screen.
            </p>
            <p>
              If you're tired of staring at a <strong>Shopify store not converting</strong>, let's take a look under the hood together.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
