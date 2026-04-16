import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Target, DollarSign, ArrowRight, MessageSquare, Clock, ShieldCheck, Mail, Phone, Globe, Star, Sparkles, User, Briefcase, TrendingUp } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent, useEffect } from "react";

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
  const [activeStep, setActiveStep] = useState(0);

  // Auto-scroll to top on success
  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSuccess]);

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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_var(--color-green)_0%,_transparent_70%)]" />
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2367FFC1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full text-green shadow-3xl">
              <ShieldCheck size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Elite Partnership</span>
            </div>
            
            <h1 className="text-7xl md:text-[160px] font-bold text-white tracking-tighter leading-[0.75] mb-12">
              Scale Your <br />
              <span className="text-green italic font-serif font-light text-glow">Ambition</span>.
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/5 mx-auto max-w-4xl">
              <p className="text-white/40 text-2xl leading-relaxed font-serif italic text-balance">
                "I don't just build stores; I build revenue engines for brands that refuse to settle for average."
              </p>
              <div className="shrink-0 flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-16 h-16 rounded-full border-4 border-navy bg-white/10 overflow-hidden">
                    <img src={`https://picsum.photos/seed/client${i}/100/100`} alt="Client" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-16 h-16 rounded-full border-4 border-navy bg-green flex items-center justify-center text-navy font-bold text-xs">
                  5.0
                </div>
              </div>
            </div>
          </motion.div>
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
              <div className="relative bg-navy p-12 md:p-20 rounded-[80px] text-white space-y-16 shadow-3xl overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12">
                  <Sparkles size={300} className="text-green" />
                </div>
                
                <div className="space-y-12 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-green border border-white/10">
                      <TrendingUp size={32} />
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight">Project Focus</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {expertise.map((e, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                        <div className="w-2 h-2 bg-green rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-xl font-medium text-white/60 group-hover:text-white transition-colors">{e}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-12 border-t border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-10">Investment Anchor</p>
                    <div className="flex flex-col sm:flex-row items-center gap-12">
                      <div className="space-y-2">
                        <p className="text-5xl font-bold text-green tracking-tighter">$150+</p>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-none">Min Project</p>
                      </div>
                      <div className="w-px h-16 bg-white/10 hidden sm:block" />
                      <div className="space-y-2">
                        <p className="text-5xl font-bold text-white tracking-tighter">$1k+</p>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest leading-none">Scale Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              
              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-12 pt-12">
                <div className="sticky top-48 space-y-12">
                  <div className="space-y-6">
                    <h2 className="text-6xl font-bold text-navy tracking-tight leading-none">The <br /><span className="italic font-serif font-light text-navy/40 transition-colors hover:text-green">Protocol</span>.</h2>
                    <p className="text-navy/40 text-lg leading-relaxed font-serif italic">Complete the form to initiate the technical review of your project.</p>
                  </div>

                  <div className="space-y-8">
                    {[
                      { icon: Clock, title: "Initial Review", desc: "I personally verify your business model and goals." },
                      { icon: MessageSquare, title: "Direct Alignment", desc: "WhatsApp coordination for strategic deep-dive." },
                      { icon: Zap, title: "Technical Blueprint", desc: "Detailed roadmap and fixed-price quotation." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy shadow-sm border border-navy/5 group-hover:bg-green transition-all shrink-0">
                          <item.icon size={24} />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-navy tracking-tight">{item.title}</h4>
                          <p className="text-navy/40 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-navy text-white rounded-[40px] space-y-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Star size={80} className="text-green" />
                    </div>
                    <p className="text-sm font-bold text-green uppercase tracking-widest">Client Feedback</p>
                    <p className="text-xl leading-relaxed italic font-serif">"The best decision we made for our Shopify expansion. Sheun's strategy is worth 10x his fee."</p>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">— Digital Fashion Co.</p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="lg:col-span-8">
                <div className="bg-white p-8 md:p-20 rounded-[80px] border border-navy/5 shadow-3xl relative overflow-hidden">
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
                        <div className="space-y-12">
                          <div className="flex items-center gap-6 border-b border-navy/5 pb-8">
                            <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy font-bold">01</div>
                            <h3 className="text-3xl font-bold text-navy tracking-tight">Identity & Contact</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Your Full Name</label>
                              <div className="relative group">
                                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} />
                                <input required type="text" name="name" placeholder="John Doe" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-medium text-navy placeholder:text-navy/10" />
                              </div>
                            </div>
                            <div className="space-y-4">
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Email Address</label>
                              <div className="relative group">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} />
                                <input required type="email" name="email" placeholder="john@example.com" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-medium text-navy placeholder:text-navy/10" />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">WhatsApp Number</label>
                              <div className="relative group">
                                <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} />
                                <input required type="text" name="whatsapp" placeholder="+1 (555) 000-0000" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-medium text-navy placeholder:text-navy/10" />
                              </div>
                            </div>
                            <div className="space-y-4">
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Store Website</label>
                              <div className="relative group">
                                <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} />
                                <input type="url" name="store_url" placeholder="yourstore.com" className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-medium text-navy placeholder:text-navy/10" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Section 2: Project */}
                        <div className="space-y-12">
                          <div className="flex items-center gap-6 border-b border-navy/5 pb-8">
                            <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy font-bold">02</div>
                            <h3 className="text-3xl font-bold text-navy tracking-tight">Project Mechanics</h3>
                          </div>
                          <div className="space-y-8">
                            <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">What type of project do you need?</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {[
                                "Shopify Store Setup",
                                "Shopify Redesign",
                                "Shopify Migration",
                                "Store Optimization (Speed/Conversion)",
                                "Product Page Optimization",
                                "Ads Setup",
                                "Other"
                              ].map((type) => (
                                <label key={type} className="relative cursor-pointer group">
                                  <input type="radio" name="project_type" value={type} className="peer sr-only" required />
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
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Technical Goals & Problem Description</label>
                              <textarea required name="goals" rows={4} placeholder="Describe the problem or mission for this project..." className="w-full bg-light border-b-2 border-transparent rounded-[32px] py-8 px-10 focus:border-green focus:bg-white outline-none transition-all resize-none font-medium text-navy placeholder:text-navy/10" />
                            </div>
                            <div className="space-y-4">
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">What have you tried before?</label>
                              <textarea required name="previous_efforts" rows={4} placeholder="Previous solutions, hires, or apps used..." className="w-full bg-light border-b-2 border-transparent rounded-[32px] py-8 px-10 focus:border-green focus:bg-white outline-none transition-all resize-none font-medium text-navy placeholder:text-navy/10" />
                            </div>
                          </div>
                        </div>

                        {/* Section 3: Revenue & Budget */}
                        <div className="space-y-12">
                          <div className="flex items-center gap-6 border-b border-navy/5 pb-8">
                            <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy font-bold">03</div>
                            <h3 className="text-3xl font-bold text-navy tracking-tight">Financial & Priority</h3>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="space-y-4">
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Monthly Revenue</label>
                              <select name="revenue" required className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 px-10 focus:border-green focus:bg-white outline-none transition-all appearance-none font-bold text-navy">
                                <option value="">Select Range</option>
                                <option>$0 – $500</option>
                                <option>$500 – $2,000</option>
                                <option>$2,000 – $10,000</option>
                                <option>$10,000+</option>
                              </select>
                            </div>
                            <div className="space-y-4">
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Project Budget</label>
                              <select name="budget" required className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 px-10 focus:border-green focus:bg-white outline-none transition-all appearance-none font-bold text-navy">
                                <option value="">Select Range</option>
                                <option>$100 – $300</option>
                                <option>$300 – $700</option>
                                <option>$700 – $1,500</option>
                                <option>$1,500+</option>
                              </select>
                            </div>
                            <div className="space-y-4">
                              <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Launch Priority</label>
                              <select name="start_date" required className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 px-10 focus:border-green focus:bg-white outline-none transition-all appearance-none font-bold text-navy">
                                <option value="">Select Priority</option>
                                <option>Immediately</option>
                                <option>Within 1 week</option>
                                <option>Just checking options</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <button 
                            disabled={isSubmitting}
                            className="w-full bg-navy text-white py-10 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 shadow-3xl flex items-center justify-center gap-6 group disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <div className="w-8 h-8 border-4 border-white/30 border-t-green rounded-full animate-spin" />
                            ) : (
                              <>
                                Submit Application <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                              </>
                            )}
                          </button>
                          <div className="flex items-center justify-center gap-4 text-navy/20 text-xs font-bold uppercase tracking-widest text-center italic">
                            <ShieldCheck size={16} className="text-green" /> AES-256 Secured Submission Channel
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

