import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Target, DollarSign, ArrowRight, MessageSquare, Clock, ShieldCheck, Lock, Mail, Phone, Globe, Star, Sparkles, User, Briefcase, TrendingUp, ChevronDown, HelpCircle, HardDrive, ChevronLeft, ChevronRight } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import ScrollReveal from "../components/ScrollReveal";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollVideos = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : window.innerWidth * 0.35;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFormSection, setActiveFormSection] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    store_url: '',
    project_type: '',
    goals: '',
    revenue: '',
    budget: '',
    start_date: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const setProjectType = (type: string) => {
    setFormData(prev => ({ ...prev, project_type: type }));
  };

  // Auto-scroll to top on success
  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSuccess]);

  const toggleSection = (sectionId: number) => {
    if (sectionId < activeFormSection) {
      setActiveFormSection(sectionId);
    }
  };

  const nextStep = () => {
    // Validate current section
    const fieldsToValidate = [];
    if (activeFormSection === 1) {
      fieldsToValidate.push('name', 'email');
    }

    const missingField = fieldsToValidate.find(field => !formData[field as keyof typeof formData]);

    if (missingField) {
      alert(`Please fill in the required field: ${missingField.replace('_', ' ')}`);
      return;
    }

    setActiveFormSection(2);
    window.scrollTo({ top: document.getElementById('apply-form')?.offsetTop ? document.getElementById('apply-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setActiveFormSection(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    const submissionData = new FormData();
    submissionData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    submissionData.append("subject", "New Client Qualification Form");
    
    // Append all form values
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    try {
      // 1. Submit to Web3Forms for email notification
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        // 2. Submit to Mailchimp (Background)
        fetch("/api/mailchimp/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            firstName: formData.name.split(" ")[0],
            lastName: formData.name.split(" ").slice(1).join(" ")
          })
        }).catch(err => console.error("Mailchimp Sync Error:", err));

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
      title="Apply for a Project" 
      description="Apply to work with Sheun, a high-performing Shopify Conversion Specialist. High-intent qualification application for serious e-commerce store owners."
      keywords="Hire Shopify Expert, Shopify Migration Service, E-commerce Project Application, Shopify Agency Setup, Drop Shipping Setup Application, hire shopify expert, hire expert shopify, find shopify experts, hire shopify freelancer, shopify expert agency"
      canonical="/apply"
      schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Apply for a Project with Sheun Hub",
        "description": "Apply to work with Sheun, a high-performing Shopify Conversion Specialist.",
        "url": "https://sheun.online/apply"
      }}
    >
      {/* Simple, Trust-Building Hero */}
      <ScrollReveal>
        <section className="pt-40 pb-20 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(103,255,193,0.15)_0%,_transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-green/10 px-4 py-2 rounded-full border border-green/20">
              <Sparkles size={14} className="text-green" />
              <span className="text-[10px] font-bold text-green uppercase tracking-widest">Available for new projects</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
              Start Your <span className="text-green italic font-serif">Growth Journey</span>.
            </h1>
            
            <p className="text-white/60 text-xl md:text-2xl font-serif italic max-w-2xl mx-auto">
              I help brands build high-converting Shopify engines. Submit your details below to see if we're a fit for a partnership.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-navy bg-white/10 overflow-hidden ring-2 ring-white/5">
                    <img src={`https://picsum.photos/seed/client${i}/100/100`} alt="Client" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-green text-green" />)}
                </div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">150+ Brands Scaled · 5.0 Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>

      {/* Trust Bar */}
      <ScrollReveal>
        <section className="bg-white border-b border-navy/5 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-black text-2xl tracking-tighter">SHOPIFY PARTNER</span>
            <span className="font-black text-2xl tracking-tighter">UPWORK TOP RATED</span>
            <span className="font-black text-2xl tracking-tighter">5+ YEARS EXPERTISE</span>
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Qualification Form - Moved Higher */}
      <ScrollReveal>
        <section className="py-32 bg-light relative" id="apply-form">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-navy" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-8 hidden md:flex"
            >
              <ChevronDown size={48} className="text-navy opacity-30" />
            </motion.div>
            <div className="bg-white p-8 md:p-24 rounded-xl border border-navy/5 shadow-3xl relative overflow-hidden group/form">
                  {/* Technical Background Accents */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green/30 to-transparent scale-x-0 group-hover/form:scale-x-100 transition-transform duration-1000" />
                  <div className="absolute top-0 left-0 p-12 opacity-[0.02] -z-0">
                    <Zap size={400} />
                  </div>                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <motion.form 
                        key="apply-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit} 
                        className="space-y-12"
                      >
                        {/* Progress Stepper */}
                        <div className="flex items-center justify-between mb-16 relative">
                          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-navy/5 -z-0" />
                          {[1, 2].map((step) => (
                            <button
                              key={step}
                              type="button"
                              disabled={step > activeFormSection}
                              onClick={() => toggleSection(step)}
                              className={`relative z-10 flex flex-col items-center gap-4 group disabled:cursor-not-allowed`}
                            >
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shadow-lg transition-all duration-500 ${
                                activeFormSection === step 
                                  ? 'bg-navy text-green scale-110' 
                                  : activeFormSection > step 
                                    ? 'bg-green text-navy' 
                                    : 'bg-light text-navy/20'
                              }`}>
                                {activeFormSection > step ? <CheckCircle2 size={20} /> : `0${step}`}
                              </div>
                              <span className={`text-[8px] font-black uppercase tracking-[0.3em] transition-colors ${
                                activeFormSection === step ? 'text-navy' : 'text-navy/20'
                              }`}>
                                {step === 1 ? 'Contact' : 'Details'}
                              </span>
                            </button>
                          ))}
                        </div>

                        <AnimatePresence mode="wait">
                          {/* Section 1: Contact Info */}
                          {activeFormSection === 1 && (
                            <motion.div
                              key="section-1"
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -20, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                              className="space-y-12"
                            >
                              <div className="space-y-2">
                                <h3 className="text-4xl font-bold text-navy tracking-tight">Tell me about yourself.</h3>
                                <p className="text-navy/40 font-serif italic">Let's start with the basics of who you are.</p>
                              </div>

                              <div className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                  <div className="space-y-4">
                                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4">Full Name</label>
                                    <div className="relative group">
                                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} aria-hidden="true" />
                                      <input 
                                        required 
                                        id="name" 
                                        type="text" 
                                        name="name" 
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="John Doe" 
                                        className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-navy/10" 
                                      />
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4">Email Address</label>
                                    <div className="relative group">
                                      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center justify-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-5 h-5 object-contain" />
                                      </div>
                                      <input 
                                        required 
                                        id="email" 
                                        type="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com" 
                                        className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-navy/10" 
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                                  <div className="space-y-4">
                                    <label htmlFor="store_url" className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4">Store Website (Optional)</label>
                                    <div className="relative group">
                                      <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors" size={20} aria-hidden="true" />
                                      <input 
                                        id="store_url" 
                                        type="url" 
                                        name="store_url" 
                                        value={formData.store_url}
                                        onChange={handleInputChange}
                                        placeholder="yourstore.com" 
                                        className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-bold text-navy placeholder:text-navy/10" 
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex justify-end pt-8">
                                <motion.button 
                                  whileHover={{ x: 5 }}
                                  whileTap={{ scale: 0.98 }}
                                  type="button"
                                  onClick={nextStep}
                                  className="bg-navy text-white px-10 py-5 rounded-full font-bold shadow-xl flex items-center gap-3 group/btn hover:bg-green hover:text-navy transition-all duration-300"
                                >
                                  Continue to Details <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                                </motion.button>
                              </div>
                            </motion.div>
                          )}

                          {/* Section 2: Project Details */}
                          {activeFormSection === 2 && (
                            <motion.div
                              key="section-2"
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -20, opacity: 0 }}
                              transition={{ duration: 0.4 }}
                              className="space-y-12"
                            >
                              <div className="space-y-2">
                                <h3 className="text-4xl font-bold text-navy tracking-tight">The Technical Mission.</h3>
                                <p className="text-navy/40 font-serif italic">What exactly do you need built or optimized?</p>
                              </div>

                              <div className="space-y-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-navy/40 ml-4">What service do you need?</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="radiogroup">
                                  {[
                                    "Shopify Store Build",
                                    "Shopify Redesign",
                                    "Store Migration",
                                    "SEO Optimization",
                                    "Shopify Speed Optimization",
                                    "Custom Liquid Dev",
                                    "Conversion Rate Optimization (CRO) Audit",
                                    "Bug Fixing",
                                    "Other (Describe below)"
                                  ].map((type) => (
                                    <label key={type} className="relative cursor-pointer group">
                                      <input 
                                        type="radio" 
                                        name="project_type" 
                                        value={type} 
                                        checked={formData.project_type === type}
                                        onChange={() => setProjectType(type)}
                                        className="peer sr-only" 
                                        required 
                                      />
                                      <div className="bg-light p-6 rounded-[24px] border-2 border-transparent peer-checked:border-green peer-checked:bg-white peer-checked:shadow-xl transition-all duration-300 flex items-center justify-between group-hover:bg-white group-hover:scale-[1.02]">
                                        <span className="text-sm font-bold text-navy/60 group-hover:text-navy transition-colors">{type}</span>
                                        <div className="w-6 h-6 rounded-full border-2 border-navy/10 flex items-center justify-center peer-checked:bg-green peer-checked:border-green">
                                          <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100" />
                                        </div>
                                      </div>
                                    </label>
                                  ))}
                                </div>

                                <div className="space-y-4">
                                  <label htmlFor="budget" className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Project Budget</label>
                                  <div className="relative group">
                                    <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-navy/10 group-focus-within:text-green transition-colors pointer-events-none" size={20} aria-hidden="true" />
                                    <select 
                                      required 
                                      id="budget" 
                                      name="budget" 
                                      value={formData.budget}
                                      onChange={handleInputChange}
                                      className="w-full bg-light border-b-2 border-transparent rounded-[24px] py-6 pl-16 pr-8 focus:border-green focus:bg-white outline-none transition-all font-bold text-navy appearance-none cursor-pointer" 
                                    >
                                      <option value="" disabled>Select an estimated budget...</option>
                                      <option value="Less than $500">Less than $500</option>
                                      <option value="$500 - $2,000">$500 - $2,000</option>
                                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                                      <option value="$5,000+">$5,000+</option>
                                    </select>
                                    <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 text-navy/40 pointer-events-none" size={20} />
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <label htmlFor="goals" className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Project Goals</label>
                                  <textarea 
                                    required 
                                    id="goals" 
                                    name="goals" 
                                    value={formData.goals}
                                    onChange={handleInputChange}
                                    rows={4} 
                                    placeholder="Describe what you want to achieve..." 
                                    className="w-full bg-light border-b-2 border-transparent rounded-xl py-8 px-10 focus:border-green focus:bg-white outline-none transition-all resize-none font-medium text-navy placeholder:text-navy/10" 
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between pt-8">
                                <button 
                                  type="button"
                                  onClick={prevStep}
                                  className="text-navy/40 text-[10px] font-black uppercase tracking-widest hover:text-navy transition-colors"
                                >
                                  ← Back
                                </button>
                                <motion.button 
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  disabled={isSubmitting}
                                  className="bg-navy text-white px-10 py-5 rounded-full font-bold shadow-xl flex items-center gap-3 group/btn hover:bg-green hover:text-navy transition-all duration-300 disabled:opacity-50"
                                >
                                  {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-green rounded-full animate-spin" />
                                  ) : (
                                    <>
                                      Submit Application <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                                    </>
                                  )}
                                </motion.button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.form>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-20 space-y-12"
                      >
                        <div className="w-40 h-40 bg-green/5 text-green rounded-3xl flex items-center justify-center mx-auto shadow-inner relative overflow-hidden">
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
                          <h3 className="text-6xl font-bold text-navy tracking-tighter">Application Received.</h3>
                          <p className="text-navy/40 text-xl max-w-lg mx-auto leading-relaxed font-serif italic">
                            I will personally review your project within 24 hours. Keep an eye on your WhatsApp or email for a follow-up.
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
      </section>
    </ScrollReveal>

      {/* Video Previews */}
      <ScrollReveal>
        <section className="bg-white border-b border-navy/5 py-24">
          <div className="container mx-auto px-6">
            <div className="relative text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tighter">Happy Clients.</h2>
              <p className="text-navy/40 font-serif italic text-xl max-w-2xl mx-auto">
                Watch a few walkthroughs from our happy clients and store optimizations.
              </p>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden md:flex items-center gap-4">
                <button type="button" onClick={() => scrollVideos('left')} className="p-4 bg-navy text-white rounded-full hover:bg-green hover:text-navy transition-all duration-300 shadow-xl" aria-label="Previous videos">
                  <ChevronLeft size={24} />
                </button>
                <button type="button" onClick={() => scrollVideos('right')} className="p-4 bg-navy text-white rounded-full hover:bg-green hover:text-navy transition-all duration-300 shadow-xl" aria-label="Next videos">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
            <div className="md:hidden flex justify-center gap-4 mb-8">
              <button type="button" onClick={() => scrollVideos('left')} className="p-4 bg-navy text-white rounded-full hover:bg-green hover:text-navy transition-all duration-300 shadow-xl" aria-label="Previous videos">
                <ChevronLeft size={24} />
              </button>
              <button type="button" onClick={() => scrollVideos('right')} className="p-4 bg-navy text-white rounded-full hover:bg-green hover:text-navy transition-all duration-300 shadow-xl" aria-label="Next videos">
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="relative">
              <div ref={scrollRef} className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {[
                  "1190279942",
                  "1190279951",
                  "1190279899",
                  "1190279909",
                  "1190279925"
                ].map((videoId, idx) => (
                  <div key={idx} className="relative shrink-0 w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[400px] rounded-2xl overflow-hidden aspect-[16/9] border border-navy/5 shadow-xl bg-black transition-all duration-500 hover:-translate-y-2 snap-center">
                    <iframe 
                      src={`https://player.vimeo.com/video/${videoId}`} 
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0 absolute top-0 left-0"
                      title={`Project walkthrough video ${idx + 1}`}
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Social Proof Accent */}
      <ScrollReveal>
        <section className="py-24 bg-white border-y border-navy/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['Forbes', 'Spotify', 'Shopify', 'Nike'].map((item) => (
              <span key={item} className="text-3xl md:text-4xl font-black font-serif tracking-tighter text-navy">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Info Boxes - Recipe 11 */}
      <ScrollReveal>
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
                className="p-8 md:p-16 bg-white rounded-3xl space-y-6 md:space-y-8 border border-navy/5 shadow-xl group transition-all"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-light rounded-3xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-navy transition-all duration-500 shadow-sm border border-navy/5">
                  <box.icon size={32} className="md:w-[40px] md:h-[40px]" />
                </div>
                <div className="space-y-3 md:space-y-4 text-center md:text-left">
                  <h4 className="text-xl md:text-2xl font-bold text-navy uppercase tracking-widest">{box.title}</h4>
                  <p className="text-navy/40 text-base md:text-lg leading-relaxed font-serif italic">{box.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
    </PageWrapper>
  );
}

