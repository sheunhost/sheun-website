import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Target, DollarSign, ArrowRight, MessageSquare, Clock, ShieldCheck, Lock, Mail, Phone, Globe, Star, Sparkles, User, Briefcase, TrendingUp, ChevronDown, HelpCircle, HardDrive } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";

const qualifications = [
  "Want real revenue growth",
  "Value strategy, not shortcuts",
  "Are ready to invest in quality work",
  "Take their business seriously"
];

const expertise = [
  "Shopify store setup or redesign",
  "Migration from any platform to Shopify",
  "Conversion rate optimization",
  "Shopify speed improvement",
  "Product page enhancement",
  "Facebook, TikTok & Instagram ads",
  "Fixing poor-performing Shopify stores"
];

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFormSection, setActiveFormSection] = useState(1);

  // Auto-scroll to top on success
  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSuccess]);

  const toggleSection = (sectionId: number) => {
    setActiveFormSection(prev => prev === sectionId ? prev : sectionId);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    formData.append("subject", "New Client Qualification Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
        
        // Redirect to WhatsApp after 3 seconds
        setTimeout(() => {
          const whatsappNumber = "2348084315743";
          const message = encodeURIComponent("Hello Sheun, I just submitted the qualification form on your website. I'd like to discuss my project further.");
          window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
        }, 3000);
      } else {
        console.error("Error submitting form", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper 
      title="Work With Me" 
      description="Apply to work with Sheun, a Shopify Conversion Specialist. High-intent qualification for serious store owners."
      canonical="/apply"
    >
      {/* Hero Section - Recipe 12 Editorial */}
      <section className="pt-48 pb-32 bg-navy-gradient relative overflow-hidden">
        {/* Advanced Background System */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(103,255,193,0.15)_0%,_transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          
          {/* Floating Branding Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-96 h-96 border border-white/5 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -left-48 w-[600px] h-[600px] border border-white/5 rounded-full opacity-50"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-16"
          >
            <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-2xl border border-white/10 px-10 py-4 rounded-full text-green shadow-3xl group cursor-default">
              <ShieldCheck size={24} className="group-hover:scale-110 transition-transform" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Elite Partnership</span>
                <span className="text-[9px] text-white/40 uppercase tracking-widest mt-1">Verified Protocol v2.0</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-[134px] font-bold text-white tracking-tighter leading-[0.75] mb-12">
              <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="block">Scale with</motion.span>
              <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="text-green italic font-serif font-light text-glow block">Expert Sheun</motion.span>
              <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="text-white/20 block text-5xl md:text-8xl mt-4">Legacy Protocol</motion.span>
            </h1>

            {/* Floating Trust Radar - Recipe 3 Hardware Feel */}
            <div className="absolute top-1/2 right-12 hidden 2xl:block">
              <motion.div 
                animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] shadow-2xl space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green/10 rounded-2xl flex items-center justify-center text-green">
                    <Sparkles size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white uppercase tracking-widest">Global Reach</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-tighter">Verified Projects: 150+</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ delay: 1, duration: 2 }} className="h-full bg-green" />
                  </div>
                  <p className="text-[10px] font-bold text-green/60 text-right uppercase tracking-[0.2em]">Quality Threshold PASSED</p>
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green text-navy px-12 py-6 rounded-full font-bold text-xl shadow-2xl flex items-center gap-4 group"
              >
                Start Application <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center gap-4"
              >
                The Process <ChevronDown size={20} />
              </motion.button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/5 mx-auto max-w-4xl">
              <p className="text-white/40 text-2xl leading-relaxed font-serif italic text-balance">
                "I don't just build stores; I build revenue engines for brands that refuse to settle for average."
              </p>
              <div className="shrink-0 flex flex-col items-center gap-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-16 h-16 rounded-full border-4 border-navy bg-white/10 overflow-hidden">
                      <img src={`https://picsum.photos/seed/client${i}/100/100`} alt="Client" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-16 h-16 rounded-full border-4 border-navy bg-green flex items-center justify-center text-navy font-bold text-xs">
                    5.0
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green/10 px-4 py-2 rounded-full border border-green/20">
                  <ShieldCheck size={14} className="text-green" />
                  <span className="text-[10px] font-bold text-green uppercase tracking-widest text-center">100% Secure & Trustworthy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 Sub-banners Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-navy/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-light p-12 rounded-[60px] space-y-8 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold text-navy tracking-tight">Direct Access.</h3>
              <p className="text-navy/40 text-lg font-serif italic">Your application goes straight to my desk. No middleman, no account managers. Elite communication only.</p>
              <div className="w-12 h-1 bg-green" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-navy text-white p-12 rounded-[60px] space-y-8 flex flex-col justify-between"
            >
              <h3 className="text-4xl font-bold tracking-tight">Technical Vetting.</h3>
              <p className="text-white/40 text-lg font-serif italic">Every application undergoes a technical feasibility study before we even discuss a roadmap.</p>
              <div className="w-12 h-1 bg-green" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative Section - The Commitment */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                A Selective <br />
                <span className="text-green italic font-serif font-light">Partnership Protocol.</span>
              </h2>
              <div className="w-16 h-1 bg-green mx-auto" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-xl md:text-2xl text-white/50 font-serif italic leading-relaxed"
            >
              <p>
                The application process is intentionally rigorous. Because I operate as a solo expert rather than an agency, my bandwidth is the most valuable resource I offer. This intake protocol ensures that every project I accept is one where I can provide a 10x return on investment. 
              </p>
              <p>
                When you apply, you are signaling a commitment to professional excellence. I am looking for brands that have a clear vision, a proven product-market fit, and a desire to dismantle the technical barriers currently holding them back. If your application is accepted, you gain full access to a specialized deployment cycle designed for high-stakes scaling. Let's build something legacy-worthy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Journey Section - Recipe 11 Process */}
      <section className="py-32 bg-white relative overflow-hidden" id="process">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-light/50" />
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" 
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mb-24 relative">
            <div className="absolute -left-12 top-0 bottom-0 w-2 bg-green shadow-glow hidden lg:block" />
            <h2 className="text-6xl md:text-8xl font-bold text-navy tracking-tighter leading-none mb-8">
              The <span className="text-green italic font-serif font-light">Journey</span> From <br />
              Idea to Impact.
            </h2>
            <p className="text-navy/40 text-2xl font-serif italic max-w-2xl">
              I’ve refined a protocol that eliminates guesswork and focuses entirely on high-performance execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", desc: "Submit your details for technical evaluation.", icon: Mail, color: "bg-navy" },
              { step: "02", title: "Analyze", desc: "I review your business model and scaling potential.", icon: Target, color: "bg-green" },
              { step: "03", title: "Scale", desc: "We implement high-converting technical assets.", icon: TrendingUp, color: "bg-navy" },
              { step: "04", title: "Impact", desc: "Launch your engine and monitor real revenue growth.", icon: Zap, color: "bg-green" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-light border border-navy/5 p-12 rounded-[50px] space-y-8 group hover:bg-white hover:shadow-3xl transition-all relative overflow-hidden"
              >
                {/* Connecting Line Effect */}
                {i < 3 && (
                  <div className="absolute top-1/2 left-full w-8 h-px bg-navy/5 hidden lg:block z-0" />
                )}
                
                <div className="flex items-center justify-between relative z-10">
                  <div className={`w-16 h-16 ${item.color === 'bg-navy' ? 'bg-navy text-green' : 'bg-green text-navy'} rounded-2xl flex items-center justify-center shadow-inner group-hover:rotate-6 transition-transform`}>
                    <item.icon size={32} />
                  </div>
                  <span className="text-4xl font-black text-navy/5 group-hover:text-green/20 transition-colors uppercase">{item.step}</span>
                </div>
                <div className="space-y-4 relative z-10">
                  <h4 className="text-2xl font-bold text-navy uppercase tracking-tight">{item.title}</h4>
                  <p className="text-navy/40 text-lg leading-relaxed font-serif italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section - Recipe 8 Clean Utility */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="bg-light p-12 md:p-24 rounded-[80px] border border-navy/5 flex flex-col lg:flex-row items-center gap-24 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 opacity-5 -rotate-12 translate-x-1/2 -translate-y-1/2">
              <ShieldCheck size={400} className="text-navy" />
            </div>

            <div className="flex-grow space-y-12 relative z-10">
              <div className="inline-flex items-center gap-4 bg-white px-6 py-2 rounded-full border border-navy/5 shadow-sm">
                <ShieldCheck size={16} className="text-green" />
                <span className="text-[10px] font-bold text-navy uppercase tracking-widest">Ironclad Protection</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tighter leading-none">
                Zero Fear. <br />
                <span className="text-navy/20">Full Transparency.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {[
                  { title: "No Hidden Fees", desc: "Fixed-price quoting based on specific technical milestones.", icon: DollarSign },
                  { title: "Direct Contact", desc: "No white-labeling or outsourcing. You work only with me.", icon: User },
                  { title: "Escalated Privacy", desc: "Your proprietary data is never shared or reused.", icon: Lock },
                  { title: "100% Verified", desc: "Top Rated freelancer status with documented case studies.", icon: Star },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green shadow-sm border border-navy/5 shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-navy tracking-tight uppercase text-sm">{item.title}</h4>
                      <p className="text-navy/40 text-sm leading-relaxed font-serif italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-96 space-y-8 relative z-10">
              <div className="bg-white p-8 rounded-[40px] border border-navy/5 shadow-xl space-y-6">
                <div className="flex items-center gap-4 text-green">
                  <Sparkles size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest text-navy">Quality Guarantee</span>
                </div>
                <p className="text-navy/60 text-sm leading-relaxed italic font-serif">
                  "If the project roadmap we agree upon isn't technically sound within 48 hours of onboarding, we pivot immediately."
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-navy/5">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white text-xs font-bold">SH</div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest">Sheun Hub</p>
                    <p className="text-[9px] text-navy/40 uppercase tracking-widest">Founder & Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Recipe 11 Detail */}
      <section className="py-32 bg-light border-y border-navy/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-8 mb-24">
            <p className="text-green text-[10px] font-bold uppercase tracking-[0.5em]">Clarity Protocol</p>
            <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tighter">Your Questions, <span className="text-navy/20 italic font-serif">Answered</span>.</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How much does a custom Shopify build cost?", a: "Project fees vary based on complexity, but most high-performance builds start around $150 and can scale to $1,000+ for enterprise-level brands." },
              { q: "What is the typical turnaround time?", a: "A standard scaling project takes 1-3 weeks. However, I prioritize precision over speed to ensure every technical asset is perfectly optimized." },
              { q: "Do I need to have my products ready?", a: "Ideally, yes. Having content and products ready allows us to focus entirely on the revenue-generating aspects of the build from day one." },
              { q: "What happens after I submit this application?", a: "I personally review your details within 24 hours. If there's a fit, you'll receive a WhatsApp message to coordinate a technical deep-dive." }
            ].map((faq, i) => (
              <details key={i} className="group bg-light rounded-[40px] border border-navy/5 hover:border-green/20 transition-all">
                <summary className="list-none p-10 cursor-pointer flex items-center justify-between">
                  <span className="text-xl font-bold text-navy group-open:text-green transition-colors">{faq.q}</span>
                  <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm group-open:rotate-180 transition-transform">
                    <ChevronDown size={20} />
                  </div>
                </summary>
                <div className="px-10 pb-10">
                  <div className="pt-6 border-t border-navy/5 text-navy/60 text-lg leading-relaxed font-serif italic">
                    {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-navy/20 text-sm font-bold uppercase tracking-widest mb-12">Still unsure about something?</p>
            <Link to="/contact" className="inline-flex items-center gap-4 text-navy hover:text-green font-bold text-lg transition-colors group">
              Speak with a Human <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Recipe 11 Split */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="w-20 h-2 bg-green mb-12" />
                <h2 className="text-6xl md:text-8xl font-bold text-navy tracking-tighter leading-none">
                  Reserved for <span className="italic font-serif font-light text-navy/40">Builders</span>.
                </h2>
                <div className="space-y-8 text-2xl text-navy/60 leading-relaxed font-serif italic">
                  <p>Quality requires focus. I limit my client list to maintain the highest standard of execution for every project.</p>
                  <p className="text-navy bg-light p-8 border-l-4 border-green rounded-r-3xl">
                    "If you value speed over strategy, or price over performance, we might not be a fit."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {qualifications.map((q, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-8 bg-light rounded-[32px] border border-navy/5 group transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white border border-navy/5 flex items-center justify-center text-green group-hover:bg-green group-hover:text-navy transition-all duration-500 shadow-sm">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="font-bold text-navy tracking-tight">{q}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-green/20 blur-[120px] rounded-full" />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative bg-navy p-12 md:p-20 rounded-[80px] text-white space-y-16 shadow-3xl overflow-hidden border border-white/10 group"
              >
                {/* Hardware Grid Accent */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 L20 10 M10 0 L10 20' fill='none' stroke='%2367FFC1' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
                
                <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                  <Sparkles size={300} className="text-green" />
                </div>
                
                <div className="space-y-12 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-green border border-white/10 shadow-inner group-hover:scale-105 transition-transform">
                      <TrendingUp size={32} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-1">Technical Spec</p>
                      <h3 className="text-4xl font-bold tracking-tight">Project Focus</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {expertise.map((e, i) => (
                      <div key={i} className="flex items-center gap-6 group/item">
                        <div className="w-2 h-2 bg-green rounded-full group-hover/item:scale-150 transition-transform" />
                        <span className="text-xl font-medium text-white/60 group-hover/item:text-white transition-colors">{e}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-12 border-t border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-10">Portfolio Benchmarks</p>
                    <div className="flex flex-col sm:flex-row items-center gap-12">
                      <div className="space-y-2">
                        <p className="text-5xl font-bold text-green tracking-tighter shadow-glow-sm">$150+</p>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none">Min Project</p>
                      </div>
                      <div className="w-px h-16 bg-white/10 hidden sm:block" />
                      <div className="space-y-2">
                        <p className="text-5xl font-bold text-white tracking-tighter">$1k+</p>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest leading-none">Scale Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Form - Recipe 11 Grouped */}
      <section className="py-32 bg-light relative" id="apply-form">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-navy" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              
              {/* Vertical Side Rail Progress - Recipe 11 */}
              <div className="hidden lg:block lg:col-span-1 border-r border-navy/5 relative">
                <div className="sticky top-48 h-[600px] flex flex-col items-center py-12">
                  <div className="flex-1 flex flex-col items-center gap-12">
                    {[
                      { id: 1, label: "Identity" },
                      { id: 2, label: "Mechanics" },
                      { id: 3, label: "Financials" }
                    ].map((s) => (
                      <button 
                        key={s.id} 
                        onClick={() => toggleSection(s.id)}
                        aria-label={`Go to section ${s.id}: ${s.label}`}
                        aria-current={activeFormSection === s.id ? 'step' : undefined}
                        className="relative group flex flex-col items-center gap-2 cursor-pointer outline-none"
                      >
                        <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center font-black text-xs transition-all duration-500 ${
                          activeFormSection === s.id ? 'bg-navy border-navy text-green shadow-lg scale-110' : 'bg-white border-navy/5 text-navy/20 hover:border-green/20'
                        }`}>
                          0{s.id}
                        </div>
                        <span className={`[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.4em] transition-colors ${
                          activeFormSection === s.id ? 'text-navy' : 'text-navy/20 group-hover:text-green'
                        }`}>{s.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-navy/5 -z-10" />
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-3 space-y-12">
                <div className="sticky top-48 space-y-12">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                  >
                    <div className="w-20 h-2 bg-green shadow-glow" />
                    <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight leading-none">The <br /><span className="italic font-serif font-light text-navy/40 transition-colors hover:text-green">Protocol</span>.</h3>
                    <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-navy/5 shadow-sm">
                      <Clock size={14} className="text-green" />
                      <span className="text-[11px] font-bold text-navy uppercase tracking-widest whitespace-nowrap">3 Min To Finish</span>
                    </div>
                    <p className="text-navy/40 text-xl leading-relaxed font-serif italic">Complete the technical intake to initiate your brand's evolution.</p>
                  </motion.div>

                  <div className="space-y-10">
                    {[
                      { icon: Clock, title: "Initial Review", desc: "Expert assessment within 24 business hours." },
                      { icon: MessageSquare, title: "Direct Alignment", desc: "Consultation via WhatsApp for strategic depth." },
                      { icon: Zap, title: "Final Blueprint", desc: "Transparent roadmap with fixed-price precision." },
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-8 group"
                      >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm border border-navy/5 group-hover:bg-green group-hover:text-navy transition-all duration-500 shrink-0">
                          <item.icon size={28} />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg font-bold text-navy tracking-tight group-hover:text-green transition-colors">{item.title}</h4>
                          <p className="text-navy/40 text-sm leading-relaxed font-serif italic">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-10 bg-white border border-navy/5 rounded-[45px] space-y-8 shadow-2xl relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 text-green">
                      <ShieldCheck size={120} />
                    </div>
                    <div className="flex items-center gap-4 text-green relative z-10">
                      <Lock size={20} className="animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-navy">Data Fortress</span>
                    </div>
                    <p className="text-navy/60 text-base leading-relaxed italic font-serif relative z-10">
                      Your technical specs are encrypted and treated as proprietary assets. Zero third-party exposure.
                    </p>
                  </motion.div>

                  <div className="p-8 bg-navy text-white rounded-[40px] space-y-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Star size={80} className="text-green" />
                    </div>
                    <p className="text-sm font-bold text-green uppercase tracking-widest">Client Feedback</p>
                    <p className="text-xl leading-relaxed italic font-serif text-white/90">"The best decision we made for our Shopify expansion. Sheun's strategy is worth 10x his fee."</p>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">— Digital Fashion Co.</p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="lg:col-span-8">
                <div className="bg-white p-8 md:p-24 rounded-[80px] border border-navy/5 shadow-3xl relative overflow-hidden group/form">
                  {/* Technical Background Accents */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green/30 to-transparent scale-x-0 group-hover/form:scale-x-100 transition-transform duration-1000" />
                  <div className="absolute top-0 left-0 p-12 opacity-[0.02] -z-0">
                    <Zap size={400} />
                  </div>
                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <motion.form 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit} 
                        className="space-y-20"
                      >
                        {/* Section 1: Identity */}
                        <div className={`space-y-12 transition-all duration-500 ${activeFormSection === 1 ? 'opacity-100' : 'opacity-40'}`}>
                          <button 
                            type="button"
                            onClick={() => toggleSection(1)}
                            aria-expanded={activeFormSection === 1}
                            aria-controls="section-identity"
                            className="w-full flex items-center justify-between gap-6 border-b border-navy/5 pb-8 group"
                          >
                            <div className="flex items-center gap-6">
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black shadow-lg transition-all duration-500 ${
                                activeFormSection === 1 ? 'bg-navy text-green' : 'bg-light text-navy/20'
                              }`}>01</div>
                              <h3 className={`text-3xl font-bold tracking-tight transition-colors ${activeFormSection === 1 ? 'text-navy' : 'text-navy/40 group-hover:text-navy'}`}>Identity & Contact</h3>
                            </div>
                            <ChevronDown className={`transition-transform duration-500 text-navy/20 ${activeFormSection === 1 ? 'rotate-180 text-green' : ''}`} aria-hidden="true" />
                          </button>

                          <AnimatePresence>
                            {activeFormSection === 1 && (
                              <motion.div
                                id="section-identity"
                                role="region"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden space-y-12"
                              >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                  <div className="space-y-4">
                                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4 group-focus-within:text-green transition-colors">Your Full Name</label>
                                    <div className="relative group">
                                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} aria-hidden="true" />
                                      <input required id="name" type="text" name="name" placeholder="John Doe" aria-required="true" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-navy/10 font-serif" />
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4 group-focus-within:text-green transition-colors">Email Address</label>
                                    <div className="relative group">
                                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} aria-hidden="true" />
                                      <input required id="email" type="email" name="email" placeholder="john@example.com" aria-required="true" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-navy/10 font-serif" />
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                  <div className="space-y-4">
                                    <label htmlFor="whatsapp" className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4 group-focus-within:text-green transition-colors">WhatsApp Number</label>
                                    <div className="relative group">
                                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} aria-hidden="true" />
                                      <input required id="whatsapp" type="text" name="whatsapp" placeholder="+1 (555) 000-0000" aria-required="true" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-navy/10 font-serif" />
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    <label htmlFor="store_url" className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4 group-focus-within:text-green transition-colors">Store Website</label>
                                    <div className="relative group">
                                      <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} aria-hidden="true" />
                                      <input id="store_url" type="url" name="store_url" placeholder="yourstore.com" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-navy/10 font-serif" />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-end pt-4">
                                  <motion.button 
                                    whileHover={{ x: 5 }}
                                    type="button"
                                    onClick={() => toggleSection(2)}
                                    className="flex items-center gap-3 text-green text-[10px] font-black uppercase tracking-[0.4em] group/btn"
                                  >
                                    Next Section <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                                  </motion.button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Section 2: Project */}
                        <div className={`space-y-12 transition-all duration-500 ${activeFormSection === 2 ? 'opacity-100' : 'opacity-40'}`}>
                          <button 
                            type="button"
                            onClick={() => toggleSection(2)}
                            aria-expanded={activeFormSection === 2}
                            aria-controls="section-mechanics"
                            className="w-full flex items-center justify-between gap-6 border-b border-navy/5 pb-8 group"
                          >
                            <div className="flex items-center gap-6">
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black shadow-lg transition-all duration-500 ${
                                activeFormSection === 2 ? 'bg-navy text-green' : 'bg-light text-navy/20'
                              }`}>02</div>
                              <h3 className={`text-3xl font-bold tracking-tight transition-colors ${activeFormSection === 2 ? 'text-navy' : 'text-navy/40 group-hover:text-navy'}`}>Project Mechanics</h3>
                            </div>
                            <ChevronDown className={`transition-transform duration-500 text-navy/20 ${activeFormSection === 2 ? 'rotate-180 text-green' : ''}`} aria-hidden="true" />
                          </button>

                          <AnimatePresence>
                            {activeFormSection === 2 && (
                              <motion.div
                                id="section-mechanics"
                                role="region"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden space-y-12"
                              >
                                <div className="space-y-10">
                                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4">Select Mission Type</span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup">
                                    {[
                                      "Shopify Store Setup",
                                      "Shopify Redesign",
                                      "Shopify Migration",
                                      "Store Optimization",
                                      "Product Page Enhancement",
                                      "Ads Setup",
                                      "Other"
                                    ].map((type) => (
                                      <label key={type} className="relative cursor-pointer group">
                                        <input type="radio" name="project_type" value={type} className="peer sr-only" required aria-required="true" />
                                        <div className="bg-light p-6 rounded-[24px] border-2 border-transparent peer-checked:border-green peer-checked:bg-white peer-checked:shadow-xl transition-all duration-300 flex items-center justify-between group-hover:bg-white group-hover:scale-[1.02]">
                                          <span className="text-sm font-bold text-navy/60 group-hover:text-navy transition-colors">{type}</span>
                                          <div className="w-6 h-6 rounded-full border-2 border-navy/10 flex items-center justify-center peer-checked:bg-green peer-checked:border-green">
                                            <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
                                          </div>
                                        </div>
                                      </label>
                                    ))}
                                  </div>
                                </div>

                                <div className="space-y-10">
                                  <div className="space-y-4">
                                    <label htmlFor="goals" className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Technical Goals & Problem Description</label>
                                    <textarea required id="goals" name="goals" rows={4} aria-required="true" placeholder="Describe the problem or mission for this project..." className="w-full bg-light border-b-2 border-transparent rounded-[32px] py-8 px-10 focus:border-green focus:bg-white outline-none transition-all resize-none font-medium text-navy placeholder:text-navy/10" />
                                  </div>
                                  <div className="space-y-4">
                                    <label htmlFor="previous_efforts" className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">What have you tried before?</label>
                                    <textarea required id="previous_efforts" name="previous_efforts" aria-required="true" rows={4} placeholder="Previous solutions, hires, or apps used..." className="w-full bg-light border-b-2 border-transparent rounded-[32px] py-8 px-10 focus:border-green focus:bg-white outline-none transition-all resize-none font-medium text-navy placeholder:text-navy/10" />
                                  </div>
                                </div>

                                <div className="flex justify-end pt-4">
                                  <motion.button 
                                    whileHover={{ x: 5 }}
                                    type="button"
                                    onClick={() => toggleSection(3)}
                                    className="flex items-center gap-3 text-green text-[10px] font-black uppercase tracking-[0.4em] group/btn"
                                  >
                                    Next Section <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                                  </motion.button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Section 3: Revenue & Budget */}
                        <div className={`space-y-12 transition-all duration-500 ${activeFormSection === 3 ? 'opacity-100' : 'opacity-40'}`}>
                          <button 
                            type="button"
                            onClick={() => toggleSection(3)}
                            aria-expanded={activeFormSection === 3}
                            aria-controls="section-financials"
                            className="w-full flex items-center justify-between gap-6 border-b border-navy/5 pb-8 group"
                          >
                            <div className="flex items-center gap-6">
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black shadow-lg transition-all duration-500 ${
                                activeFormSection === 3 ? 'bg-navy text-green' : 'bg-light text-navy/20'
                              }`}>03</div>
                              <h3 className={`text-3xl font-bold tracking-tight transition-colors ${activeFormSection === 3 ? 'text-navy' : 'text-navy/40 group-hover:text-navy'}`}>Financial & Priority</h3>
                            </div>
                            <ChevronDown className={`transition-transform duration-500 text-navy/20 ${activeFormSection === 3 ? 'rotate-180 text-green' : ''}`} aria-hidden="true" />
                          </button>

                          <AnimatePresence>
                            {activeFormSection === 3 && (
                              <motion.div
                                id="section-financials"
                                role="region"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden space-y-12"
                              >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                  <div className="space-y-4">
                                    <label htmlFor="revenue" className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Monthly Revenue</label>
                                    <select id="revenue" name="revenue" required aria-required="true" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 px-10 focus:border-green focus:bg-white outline-none transition-all appearance-none font-bold text-navy">
                                      <option value="">Select Range</option>
                                      <option>$0 – $500</option>
                                      <option>$500 – $2,000</option>
                                      <option>$2,000 – $10,000</option>
                                      <option>$10,000+</option>
                                    </select>
                                  </div>
                                  <div className="space-y-4">
                                    <label htmlFor="budget" className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Project Budget</label>
                                    <select id="budget" name="budget" required aria-required="true" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 px-10 focus:border-green focus:bg-white outline-none transition-all appearance-none font-bold text-navy">
                                      <option value="">Select Range</option>
                                      <option>$100 – $300</option>
                                      <option>$300 – $700</option>
                                      <option>$700 – $1,500</option>
                                      <option>$1,500+</option>
                                    </select>
                                  </div>
                                  <div className="space-y-4">
                                    <label htmlFor="start_date" className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Launch Priority</label>
                                    <select id="start_date" name="start_date" required aria-required="true" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 px-10 focus:border-green focus:bg-white outline-none transition-all appearance-none font-bold text-navy">
                                      <option value="">Select Priority</option>
                                      <option>Immediately</option>
                                      <option>Within 1 week</option>
                                      <option>Just checking options</option>
                                    </select>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="space-y-8 pt-12">
                          <div className="flex items-center justify-center gap-6 mb-12 opacity-40">
                            <div className="h-px flex-1 bg-navy/5" />
                            <div className="flex gap-4">
                              <ShieldCheck size={16} />
                              <Lock size={16} />
                              <Zap size={16} />
                            </div>
                            <div className="h-px flex-1 bg-navy/5" />
                          </div>
                          
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                            className="w-full bg-navy text-white py-10 rounded-full font-bold text-2xl hover:bg-white hover:text-navy border-2 border-transparent hover:border-navy transition-all duration-500 shadow-3xl flex items-center justify-center gap-6 group disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <div className="w-8 h-8 border-4 border-white/30 border-t-green rounded-full animate-spin" />
                            ) : (
                              <>
                                Execute Application <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                              </>
                            )}
                          </motion.button>
                          
                          <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center justify-center gap-4 text-navy/20 text-xs font-bold uppercase tracking-widest text-center italic">
                              <ShieldCheck size={16} className="text-green" /> AES-256 Secured Submission Channel
                            </div>
                            <div className="flex items-center gap-8 grayscale opacity-20">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png" alt="Shopify" className="h-6 object-contain" referrerPolicy="no-referrer" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-5 object-contain" referrerPolicy="no-referrer" />
                            </div>
                          </div>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 space-y-12"
                      >
                        <div className="w-40 h-40 bg-green/5 text-green rounded-[60px] flex items-center justify-center mx-auto shadow-inner relative overflow-hidden">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                          >
                            <CheckCircle2 size={80} />
                          </motion.div>
                          <div className="absolute inset-0 bg-green/10 animate-pulse" />
                        </div>
                        <div className="space-y-6">
                          <h3 className="text-6xl font-bold text-navy tracking-tighter">Mission Received.</h3>
                          <p className="text-navy/40 text-xl max-w-lg mx-auto leading-relaxed font-serif italic">
                            I am currently reviewing your application. You will be redirected to WhatsApp to confirm your submission in <span className="text-green font-bold">24 hours</span>.
                          </p>
                        </div>
                        <div className="w-full max-w-md mx-auto h-2 bg-light rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3 }}
                            className="h-full bg-green"
                          />
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-navy/20">Redirecting to project coordination...</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Accent */}
      <section className="py-24 bg-white border-y border-navy/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Forbes', 'Spotify', 'Shopify', 'Nike', 'Apple'].map((item) => (
              <span key={item} className="text-4xl font-black font-serif tracking-tighter text-navy">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Info Boxes - Recipe 11 */}
      <section className="py-32 bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Clock, title: "Velocity", desc: "Response window is strictly under 24 hours for all qualified applications." },
              { icon: ShieldCheck, title: "Precision", desc: "I only accept 3 projects per month to ensure deep strategic impact." },
              { icon: MessageSquare, title: "Direct", desc: "No junior managers. You deal directly with the specialist from day one." },
            ].map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-16 bg-white rounded-[50px] space-y-8 border border-navy/5 shadow-xl group transition-all"
              >
                <div className="w-20 h-20 bg-light rounded-3xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-navy transition-all duration-500 shadow-sm border border-navy/5">
                  <box.icon size={40} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-navy uppercase tracking-widest">{box.title}</h4>
                  <p className="text-navy/40 text-lg leading-relaxed font-serif italic">{box.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

