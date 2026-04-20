import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import ImageGen from "../components/ImageGen";
import { ListChecks, Sparkles, Rocket, Zap, Globe, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Visualizer() {
  return (
    <PageWrapper
      title="Ai Store Visualizer"
      description="Use our AI-powered tool to visualize your future Shopify store theme, product layouts, and hero images instantly."
      canonical="/visualizer"
    >
      {/* Hero Section */}
      <section className="pt-48 pb-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green rounded-full blur-[200px] animate-pulse" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full mb-8 text-green"
              >
                <Sparkles size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Try Our New Tool</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-[118px] font-bold text-white tracking-tighter leading-[0.8] mb-12"
              >
                Shopify Visualizer <br />
                <span className="italic font-serif font-light text-white/40">by Sheun Hub</span>.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-2xl leading-relaxed max-w-3xl mx-auto font-serif italic"
              >
                Leverage advanced AI to generate high-converting hero sections and product concepts for your Shopify store in seconds.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Visualizer Tool Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-light rounded-[80px] p-2 md:p-12 border border-navy/5 shadow-2xl relative z-20">
            <ImageGen />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-navy/5 rounded-[60px] overflow-hidden">
            {[
              { title: "Gemini AI Powered", desc: "Uses Google's Gemini 2.5 Flash for high-speed, high-quality image generation.", icon: Sparkles },
              { title: "Conversion Optimized", desc: "Automatically enhances your prompts to focus on e-commerce best practices.", icon: Rocket },
              { title: "Instant Visualization", desc: "See your ideas come to life before spending a dime on development.", icon: Zap },
              { title: "Free to Use", desc: "Part of my commitment to helping startup brands succeed on Shopify.", icon: Globe },
            ].map((feature, i) => (
              <div key={i} className="p-16 border-r border-b border-navy/5 group hover:bg-light transition-all">
                <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-navy transition-all duration-500 mb-8">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-navy/40 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-32 bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.4em]">The Process</p>
                <h2 className="text-6xl md:text-8xl font-bold text-navy tracking-tighter leading-[0.85]">
                  How to <br />
                  <span className="italic font-serif font-light text-navy/40">Use It</span>.
                </h2>
                <p className="text-navy/60 text-xl leading-relaxed max-w-xl font-serif italic">
                  I've made it as simple as possible to get professional-looking store concepts.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Describe Your Niche", desc: "Enter your store's niche or product category (e.g., 'Modern Pet Accessories')." },
                  { title: "Gemini Enhances Prompt", desc: "Our AI automatically adds descriptive keywords for better image results." },
                  { title: "Generate Visuals", desc: "Watch as AI creates a high-quality hero section for your potential store." },
                  { title: "Reach Out to Build", desc: "If you love the vibe, contact me to turn that vision into a real Shopify store." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-navy font-bold shadow-sm shrink-0 group-hover:bg-green transition-colors">
                      {i + 1}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-navy">{step.title}</h4>
                      <p className="text-navy/40 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy p-16 rounded-[80px] text-white space-y-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-16 opacity-10">
                <Sparkles size={160} className="text-green" />
              </div>
              <div className="relative z-10 space-y-8">
                <h3 className="text-5xl font-bold leading-tight tracking-tighter">Turn the <span className="text-green italic font-serif">Vision</span> into Reality.</h3>
                <p className="text-white/40 text-xl leading-relaxed font-serif italic">
                  Visualizing your store is the first step. Building it for revenue is the next. Let's make it happen.
                </p>
                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                  <Link to="/contact#contact-form" className="bg-green text-navy px-12 py-6 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-green/10 text-center">
                    Start Real Build
                  </Link>
                  <Link to="/portfolio" className="text-white font-bold px-12 py-6 rounded-full flex items-center justify-center gap-4 group">
                    View Portfolio <div className="w-8 h-px bg-white/20 group-hover:w-16 group-hover:bg-green transition-all duration-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-green/5 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto space-y-16"
          >
            <h2 className="text-7xl md:text-[140px] font-bold text-white leading-[0.8] tracking-[-0.06em] uppercase">
              Ready to <br /><span className="text-green italic font-serif font-light lowercase">Launch?</span>
            </h2>
            <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic">
              Stop visualizing and start selling. I build high-performance Shopify stores that convert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <Link to="/contact#contact-form" className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 shadow-2xl shadow-green/20">
                Contact Me
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto text-white font-bold text-2xl flex items-center gap-6 group">
                View Work <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-green transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
