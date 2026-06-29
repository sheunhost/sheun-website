import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Search, 
  Zap, 
  ShoppingBag, 
  MousePointer2, 
  BarChart3, 
  FileText, 
  Video, 
  Clock, 
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Target
} from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const auditSections = [
  {
    title: "First Impression & UX",
    desc: "Analysis of your header, navigation hierarchy, and mobile homepage layout. I identify what confuses customers in the first 3 seconds.",
    icon: ShoppingBag
  },
  {
    title: "Product Page Optimization",
    desc: "A deep dive into your product descriptions, 'Add to Cart' visibility, image quality, and trust triggers (social proof, shipping info).",
    icon: Target
  },
  {
    title: "Checkout Friction Audit",
    desc: "Identifying bottlenecks in the cart-to-checkout flow. I look for unnecessary fields, hidden costs, or technical errors causing abandonment.",
    icon: MousePointer2
  },
  {
    title: "Technical SEO Basics",
    desc: "Checking your H1 hierarchy, image alt text, page speed, and meta titles to ensure you aren't invisible to Google.",
    icon: Search
  },
  {
    title: "Conversion Leaks",
    desc: "Reviewing your apps, pop-ups, and site speed. I find the 'clutter' that is slowing down your store and killing your revenue.",
    icon: Zap
  },
  {
    title: "Priority Action List",
    desc: "The 'Golden List'. I rank every fix by impact and effort, so you know exactly what to change first to see a lift.",
    icon: BarChart3
  }
];

const faqs = [
  {
    q: "What do I need to provide?",
    a: "Just your store URL and (optional but recommended) collaborator access to your Shopify admin. This allows me to look at your theme settings and backend configuration without needing your password."
  },
  {
    q: "When will I receive my audit?",
    a: "Your Google Doc and Loom video walkthrough will be delivered to your inbox within 48 hours of booking."
  },
  {
    q: "What happens after the audit?",
    a: "You'll have a clear roadmap. You can implement the changes yourself, hand the list to your developer, or hire me to execute the high-priority fixes for you."
  }
];

export default function ShopifyAudit() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageWrapper
      title="Shopify Store Audit & CRO Performance Analysis (UK, US, CA, AU, FR, DE)"
      description="Get an expert Shopify store audit, technical SEO inspection, and conversion rate analysis (CRO). 48-hour delivery with video walkthrough. Stop guessing and start scaling in the UK, US, Canada, Australia, France, and Germany."
      keywords="shopify store audit UK, shopify audit service USA, shopify CRO expert Canada, shopify speed optimization Australia, shopify SEO audit France, shopify store optimization Germany, conversion rate analysis"
      canonical="/shopify-store-audit"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy text-sm mb-8 font-medium border border-navy/10"
            >
              <ShieldCheck size={16} className="text-green" />
              <span>Practitioner-Written Audit • 48-Hour Delivery</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-navy mb-8 leading-tight tracking-tight"
            >
              Shopify Store Audit — <br />
              <span className="italic font-serif font-light text-navy/40">Know Exactly</span> What Is Hurting Your Sales.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-navy/60 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Stop guessing why your traffic isn't converting. Get a high-impact, no-fluff teardown of your store's UX, SEO, and conversion leaks for a flat fee of $197.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#book"
                className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-navy text-white font-bold text-lg hover:bg-green transition-all shadow-xl flex items-center justify-center gap-3 group"
              >
                Get My Audit for $197
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-navy/40 font-medium">Limited slots available weekly</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-offwhite border-y border-navy/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Is your store in one of these positions?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Traffic but No Sales",
                desc: "You're running ads or getting organic clicks, but your conversion rate is stuck below 1%. Something is breaking the trust."
              },
              {
                title: "The New Store Plateau",
                desc: "You just launched but aren't gaining traction. You need to know if it's the product-market fit or a technical barrier."
              },
              {
                title: "The Outdated Store",
                desc: "Your store was built 3+ years ago. It feels slow, clunky on mobile, and doesn't match modern buyer expectations."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-navy/5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-green mb-6">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
                <p className="text-navy/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">A Deep Dive Into Every Money-Making Variable.</h2>
            <p className="text-lg text-navy/60">This isn't an automated report from a free tool. It's a manual, expert review of the 6 core pillars of your store.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {auditSections.map((section, i) => (
              <div key={i} className="group">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center text-navy mb-6 group-hover:bg-green group-hover:text-white transition-colors">
                  <section.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{section.title}</h3>
                <p className="text-navy/60 leading-relaxed text-sm">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverable Section */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">The Deliverable: <br /><span className="text-green">Actionable Clarity.</span></h2>
              <p className="text-xl text-white/60 mb-12">No 50-page PDFs of fluff. You get two high-value assets delivered in 48 hours:</p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <FileText size={24} className="text-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Audit Document</h3>
                    <p className="text-white/40">A Google Doc detailing every finding, categorised by 'Critical', 'Recommended', and 'Optional' with screenshots.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Video size={24} className="text-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Loom Walkthrough</h3>
                    <p className="text-white/40">A 15-20 minute video where I personally navigate your store, explaining the 'why' behind the fixes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-8 text-center">Why it's worth $197</h3>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-green font-bold text-lg mb-1 block">1. One Sale Covers It</span>
                  <p className="text-sm text-white/40">If the audit fixes just one major leak that leads to one extra order per month, it pays for itself instantly.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-green font-bold text-lg mb-1 block">2. Stop Burning Ad Spend</span>
                  <p className="text-sm text-white/40">Stop sending traffic to a broken bucket. Fix the conversion leaks first, then scale your ads with confidence.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-green font-bold text-lg mb-1 block">3. Years of Experience</span>
                  <p className="text-sm text-white/40">You aren't paying for an hour of my time; you're paying for the years of Shopify experience condensed into 48 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">Questions? I have answers.</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-navy/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg font-bold text-navy group-hover:text-green transition-colors">{faq.q}</span>
                  <ChevronDown className={`text-navy/20 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                  <p className="text-navy/60 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" className="py-24 bg-offwhite">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-navy/5 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tight">Ready to fix your sales?</h2>
              <p className="text-xl text-navy/60 mb-10">Book your Shopify Store Audit today for a one-time flat fee of $197.</p>
              
              <div className="flex flex-col items-center gap-6">
                <a
                  href="/contact"
                  className="w-full sm:w-auto px-12 py-6 rounded-2xl bg-navy text-white font-bold text-xl hover:bg-green transition-all shadow-2xl flex items-center justify-center gap-3"
                >
                  Book My Audit Now — $197
                </a>
                <div className="flex items-center gap-2 text-navy/40 text-sm font-medium">
                  <Clock size={16} />
                  <span>Next delivery window: Within 48 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
