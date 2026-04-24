import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Gift, Globe, Star, ArrowRight, Zap, ChevronDown, Palette, Layout, Info, Clock, Calendar, CheckCircle } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAuditSuccess, setIsAuditSuccess] = useState(false);
  const [isAuditSubmitting, setIsAuditSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const validateForm = (formData: FormData, type: 'contact' | 'audit' = 'contact') => {
    const newErrors: Record<string, string> = {};
    
    if (type === 'contact') {
      // Name validation
      const name = formData.get("name") as string;
      if (!name || name.trim().length < 2) {
        newErrors.name = "Please enter your full name.";
      }

      // Email validation
      const email = formData.get("email") as string;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address.";
      }

      // Message validation
      const message = formData.get("message") as string;
      if (!message || message.trim().length < 20) {
        newErrors.message = "Please provide a bit more detail (min 20 characters).";
      }

      // Budget validation
      const budget = formData.get("budget") as string;
      if (!budget) {
        newErrors.budget = "Please select an estimated budget.";
      }
    } else {
      // Audit form validation
      const storeUrl = formData.get("store_url") as string;
      if (!storeUrl || storeUrl.trim().length < 4) {
        newErrors.store_url = "Please provide your store URL.";
      }

      const email = formData.get("email") as string;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        newErrors.email_audit = "Please enter a valid email.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>, type: 'contact' | 'audit' = 'contact') => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    if (!validateForm(formData, type)) return;
    
    if (type === 'contact') {
      setIsSubmitting(true);
    } else {
      setIsAuditSubmitting(true);
    }
    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");

    try {
      // 1. Submit to Web3Forms for email notification
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // 2. Submit to Mailchimp (Background)
        const email = formData.get("email") as string;
        const name = (formData.get("name") as string) || "";
        fetch("/api/mailchimp/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            firstName: name.split(" ")[0],
            lastName: name.split(" ").slice(1).join(" ")
          })
        })
        .then(async r => {
          if (!r.ok) {
            const err = await r.json();
            throw new Error(err.details || err.error || "Mailchimp sync failed");
          }
          console.log("Mailchimp sync success");
        })
        .catch(err => console.error("Mailchimp Sync Error:", err));

        if (type === 'contact') setIsSuccess(true);
        else setIsAuditSuccess(true);
        
        e.currentTarget.reset();
      } else {
        console.error("Error submitting form", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      if (type === 'contact') setIsSubmitting(false);
      else setIsAuditSubmitting(false);
    }
  };

  return (
    <PageWrapper 
      title="Contact Sheun | Shopify Expert" 
      description="Get in touch with Sheun for your next Shopify project. Free store audits, custom UX/UI redesigns, and accurate project quotes are available."
      keywords="Contact Shopify Expert, Free Shopify Audit, E-commerce Consultation, Shopify Freelancer Contact, Hire Shopify Developer"
      canonical="/contact"
      schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Sheun - Shopify Expert",
        "url": "https://sheun.online/contact",
        "description": "Get in touch with Sheun for your next Shopify project. Free store audits, custom UX/UI redesigns, and accurate project quotes are available.",
        "mainEntity": {
          "@type": "Person",
          "name": "Sheun",
          "email": "sheunhost@gmail.com",
          "telephone": "+2348084315743",
          "url": "https://sheun.online"
        }
      }}
    >
      {/* Contact Hero - Dynamic Editorial Style */}
      <section className="pt-48 pb-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-30" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/2 opacity-20" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl space-y-20">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl"
              >
                <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
                <span className="text-green text-[10px] font-bold uppercase tracking-[0.4em]">Available for Projects</span>
              </motion.div>
              
              <motion.h1 
                className="text-7xl md:text-[150px] font-bold text-white tracking-tighter leading-[0.75]"
              >
                <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="block">Let's build</motion.span>
                <motion.span initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="italic font-serif font-light text-white/30 block ml-[0.1em]">momentum.</motion.span>
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end"
            >
              <p className="text-white/50 text-2xl md:text-3xl leading-snug max-w-xl font-serif italic">
                From technical audits to custom Shopify builds, I'm here to help your brand cross the next revenue threshold.
              </p>
              <div className="flex flex-wrap gap-8 lg:justify-end">
                <div className="space-y-2">
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Timezone</p>
                  <p className="text-white text-xl font-bold flex items-center gap-2">WAT <span className="text-white/40 font-medium">UTC+1</span></p>
                </div>
                <div className="w-px h-12 bg-white/10 hidden md:block" />
                <div className="space-y-2">
                  <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Global Reach</p>
                  <p className="text-white text-xl font-bold">20+ Countries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content: Bento Info + Master Form */}
      <section className="py-32 bg-white relative" id="contact-form">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Interactive Bento Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Primary Contact: Email */}
                <motion.a
                  href="mailto:sheunhost@gmail.com"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="sm:col-span-2 group relative p-10 bg-navy text-white rounded-[40px] overflow-hidden shadow-2xl transition-all hover:bg-navy/95"
                >
                  <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-[120px] h-[120px] object-contain" />
                  </div>
                  <div className="relative z-10 space-y-10">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md overflow-hidden">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-8 h-8 object-contain" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-4xl font-bold tracking-tighter">Email me directly.</h4>
                      <p className="text-white/50 text-lg font-serif italic">For deep project discussions and formal quotes.</p>
                      <div className="pt-6 flex items-center gap-4 text-green font-bold text-xl">
                        sheunhost@gmail.com <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* Secondary Contact: WhatsApp */}
                <motion.a
                  href="https://wa.me/2348084315743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 bg-light rounded-[40px] border border-navy/5 hover:border-green/50 transition-all group"
                >
                  <div className="space-y-10">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-green transition-colors overflow-hidden">
                      <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-navy font-bold text-xl uppercase tracking-tighter">WhatsApp</p>
                      <p className="text-navy/40 text-sm font-medium tracking-tight">Instant chat for quick questions.</p>
                    </div>
                  </div>
                </motion.a>

                {/* Secondary Contact: LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/sheun-hub-26b876321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-8 bg-light rounded-[40px] border border-navy/5 hover:border-green/50 transition-all group"
                >
                  <div className="space-y-10">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-green transition-colors overflow-hidden">
                      <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-8 h-8 object-contain" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-navy font-bold text-xl uppercase tracking-tighter">LinkedIn</p>
                      <p className="text-navy/40 text-sm font-medium tracking-tight">Professional network & insights.</p>
                    </div>
                  </div>
                </motion.a>

                {/* Branding Card */}
                <div className="sm:col-span-2 p-10 bg-green rounded-[40px] flex items-center justify-between shadow-xl">
                  <div className="space-y-2">
                    <h5 className="text-navy font-bold text-2xl tracking-tighter leading-none">Sheun Hub®</h5>
                    <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">Shopify Development</p>
                  </div>
                  <div className="w-20 h-20 rounded-full border-4 border-navy/10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-navy rounded-full animate-ping" />
                  </div>
                </div>
              </div>

              {/* Trust Badge / FAQ Micro */}
              <div className="p-12 space-y-8 bg-light rounded-[40px] border border-navy/5 border-dashed">
                <h4 className="text-2xl font-bold text-navy tracking-tight">What to expect?</h4>
                <div className="space-y-6">
                  {[
                    "Response within 24 business hours",
                    "Detailed technical breakdown",
                    "Fixed-price quote with milestones",
                    "Direct access to the developer"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 text-navy/70 text-sm font-medium">
                      <CheckCircle2 className="text-green shrink-0" size={20} />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: The Master Form */}
            <div className="lg:col-span-7 bg-white">
              <div className="relative group">
                {/* Decorative border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-tr from-green/20 via-navy/5 to-white rounded-[44px] group-hover:from-green/40 transition-all" />
                
                <div className="relative bg-white p-10 md:p-20 rounded-[40px] shadow-2xl">
                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <motion.form 
                        key="contact-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        onSubmit={(e) => handleSubmit(e, 'contact')} 
                        className="space-y-12"
                      >
                        <div className="space-y-6 text-center lg:text-left">
                          <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tighter leading-none">Start a project.</h3>
                          <p className="text-navy/50 text-xl font-serif italic leading-relaxed">Tell me about your vision, and let's see how we can make it a reality.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                          {/* Name Field */}
                          <div className="space-y-3">
                            <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="e.g. Jane Doe"
                              className={`w-full bg-light/30 rounded-2xl py-5 px-6 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all focus:bg-white focus:shadow-lg focus:-translate-y-1 ${errors.name ? 'border-red-500' : 'border-light'}`}
                            />
                            {errors.name && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.name}</p>}
                          </div>

                          {/* Email Field */}
                          <div className="space-y-3">
                            <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Email Address</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="hello@brand.com"
                              className={`w-full bg-light/30 rounded-2xl py-5 px-6 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all focus:bg-white focus:shadow-lg focus:-translate-y-1 ${errors.email ? 'border-red-500' : 'border-light'}`}
                            />
                            {errors.email && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                          {/* Phone Field */}
                          <div className="space-y-3">
                            <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Phone / WhatsApp</label>
                            <input
                              type="text"
                              name="phone"
                              placeholder="+1 (000) 000 0000"
                              className="w-full bg-light/30 rounded-2xl py-5 px-6 border-2 border-light focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all focus:bg-white focus:shadow-lg focus:-translate-y-1"
                            />
                          </div>

                          {/* Service Select */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Service Needed</label>
                              <div className="relative">
                                <button 
                                  type="button"
                                  onMouseEnter={() => setActiveTooltip('service')}
                                  onMouseLeave={() => setActiveTooltip(null)}
                                  className="text-navy/20 hover:text-green transition-colors"
                                >
                                  <Info size={14} />
                                </button>
                                <AnimatePresence>
                                  {activeTooltip === 'service' && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                      animate={{ opacity: 1, y: 0, scale: 1 }}
                                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                      className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-navy text-white text-[10px] leading-relaxed rounded-2xl shadow-2xl pointer-events-none"
                                    >
                                      <div className="space-y-2">
                                        <p className="font-bold text-green mb-1">Choosing a Service:</p>
                                        <p>• <span className="text-green">Store Build:</span> New end-to-end setups.</p>
                                        <p>• <span className="text-green">Redesign:</span> Improving existing themes.</p>
                                        <p>• <span className="text-green">Migration:</span> Moving from Wix/Woo to Shopify.</p>
                                      </div>
                                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-navy" />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                            <div className="relative">
                              <select name="project_type" className="w-full bg-light/30 rounded-2xl py-5 px-6 border-2 border-light focus:border-green hover:border-navy/10 text-navy font-semibold appearance-none outline-none transition-all focus:bg-white focus:shadow-lg focus:-translate-y-1 cursor-pointer">
                                <option>Shopify Store Build</option>
                                <option>Shopify Redesign</option>
                                <option>Store Migration</option>
                                <option>SEO Optimization</option>
                                <option>Shopify Speed Optimization</option>
                                <option>Custom Liquid Dev</option>
                                <option>Conversion Rate Optimization (CRO) Audit</option>
                                <option>Bug Fixing</option>
                                <option>Other (Describe below)</option>
                              </select>
                              <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-navy/40 pointer-events-none" size={20} />
                            </div>
                          </div>
                        </div>

                        {/* Budget Select */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Project Budget</label>
                            <div className="relative">
                                <button 
                                  type="button"
                                  onMouseEnter={() => setActiveTooltip('budget')}
                                  onMouseLeave={() => setActiveTooltip(null)}
                                  className="text-navy/20 hover:text-green transition-colors"
                                >
                                  <Info size={14} />
                                </button>
                                <AnimatePresence>
                                  {activeTooltip === 'budget' && (
                                    <motion.div
                                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                      animate={{ opacity: 1, y: 0, scale: 1 }}
                                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                      className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-4 bg-navy text-white text-[10px] leading-relaxed rounded-2xl shadow-2xl pointer-events-none"
                                    >
                                      <p className="font-bold text-green mb-2 italic underline underline-offset-4 tracking-[0.05em]">Why we ask:</p>
                                      <p className="mb-3 font-medium opacity-80 leading-relaxed font-serif">Providing an estimate helps me tailor the solution and roadmap to reflect your business goals and current scale.</p>
                                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-navy" />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                          </div>
                          <div className="relative">
                            <select name="budget" defaultValue="" className={`w-full bg-light/30 rounded-2xl py-5 px-6 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold appearance-none outline-none transition-all focus:bg-white focus:shadow-lg focus:-translate-y-1 cursor-pointer ${errors.budget ? 'border-red-500' : 'border-light'}`}>
                              <option value="" disabled>Select an estimated budget...</option>
                              <option value="Less than $1,000">Less than $1,000</option>
                              <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                              <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                              <option value="$5,000+">$5,000+</option>
                            </select>
                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-navy/40 pointer-events-none" size={20} />
                          </div>
                          {errors.budget && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.budget}</p>}
                        </div>

                        {/* Message Field */}
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Project Brief</label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Describe your current store, your pain points, and your goals..."
                            className={`w-full bg-light/30 rounded-[28px] py-6 px-8 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all resize-none focus:bg-white focus:shadow-lg focus:-translate-y-1 ${errors.message ? 'border-red-500' : 'border-light'}`}
                          />
                          {errors.message && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                          <button
                            disabled={isSubmitting}
                            className="w-full relative group h-20 md:h-24 overflow-hidden rounded-full transition-all focus:scale-[0.98] shadow-xl hover:shadow-green/20"
                          >
                            <div className="absolute inset-0 bg-navy group-hover:bg-green transition-all duration-500" />
                            <div className="relative z-10 h-full flex items-center justify-center gap-4 text-white group-hover:text-navy transition-colors">
                              {isSubmitting ? (
                                <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                              ) : (
                                <>
                                  <span className="text-lg md:text-xl font-bold tracking-tight">Request Project Proposal</span>
                                  <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </>
                              )}
                            </div>
                          </button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="contact-success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-12"
                      >
                        <div className="text-center space-y-8 py-20 pb-10 border-b border-navy/5">
                          <div className="w-32 h-32 bg-green/10 text-green rounded-full flex items-center justify-center mx-auto shadow-inner">
                            <CheckCircle2 size={64} className="animate-bounce" />
                          </div>
                          <div className="space-y-6">
                            <h3 className="text-6xl font-bold text-navy tracking-tighter">Perfectly received.</h3>
                            <p className="text-navy/50 text-xl max-w-sm mx-auto leading-relaxed font-serif italic">
                              I'm already reviewing your details. Let's make this project a success.
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                          {[
                            { icon: Clock, title: "24 Hours", desc: "Expect a detailed response within 1 business day." },
                            { icon: Calendar, title: "Next Step", desc: "We'll schedule a discovery call to dive deeper." },
                            { icon: CheckCircle, title: "Proposal", desc: "You'll receive a custom technical breakdown." }
                          ].map((step, i) => (
                            <div key={i} className="p-6 bg-light rounded-3xl space-y-4">
                              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green shadow-sm">
                                <step.icon size={20} />
                              </div>
                              <div className="space-y-1">
                                <p className="font-bold text-navy uppercase text-[10px] tracking-widest opacity-40">{step.title}</p>
                                <p className="text-xs text-navy/60 font-medium leading-relaxed">{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 text-center">
                          <button
                            onClick={() => setIsSuccess(false)}
                            className="px-10 py-4 bg-navy text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-green hover:text-navy transition-all"
                          >
                            New Message
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Audit CTA - High Impact */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/50 border border-navy/5 rounded-[60px] overflow-hidden shadow-sm">
            
            {/* CTA Content */}
            <div className="p-16 md:p-24 space-y-12 bg-white flex flex-col justify-center">
              <div className="w-20 h-20 bg-green rounded-3xl flex items-center justify-center text-navy shadow-xl rotate-3">
                <Gift size={40} />
              </div>
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold text-navy leading-none tracking-tighter">
                  Free store <br />
                  <span className="italic font-serif font-light text-navy/30">video audit.</span>
                </h2>
                <p className="text-navy/50 text-2xl font-serif italic leading-snug">
                  Not sure what's broken? Send me your link and I'll record a personalized 5-minute audit of your conversion leaks.
                </p>
              </div>
              <div className="flex flex-wrap gap-8">
                {[
                  { label: "Design", icon: Palette },
                  { label: "Performance", icon: Zap },
                  { label: "UX Bottlenecks", icon: Layout }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-navy/40 font-bold uppercase tracking-widest text-[10px]">
                    <item.icon size={16} className="text-green" /> {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Form */}
            <div className="p-16 md:p-24 bg-navy text-white relative">
              <div className="absolute inset-0 bg-green/5 opacity-50" />
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {!isAuditSuccess ? (
                    <motion.form 
                      key="audit-form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={(e) => handleSubmit(e, 'audit')} 
                      className="space-y-10"
                    >
                      <input type="hidden" name="subject" value="New Free Store Audit Request" />
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Store URL</label>
                          <input
                            type="text"
                            name="store_url"
                            placeholder="yourbrand.com"
                            className={`w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-10 text-white font-medium outline-none focus:border-green transition-all ${errors.store_url ? 'border-red-500/50' : ''}`}
                          />
                          {errors.store_url && <p className="text-red-500 text-[10px] font-bold pl-4">{errors.store_url}</p>}
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em]">Contact Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="hello@yoursite.com"
                            className={`w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-10 text-white font-medium outline-none focus:border-green transition-all ${errors.email_audit ? 'border-red-500/50' : ''}`}
                          />
                          {errors.email_audit && <p className="text-red-500 text-[10px] font-bold pl-4">{errors.email_audit}</p>}
                        </div>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isAuditSubmitting}
                        className="w-full bg-green text-navy py-8 rounded-full font-bold text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4"
                      >
                        {isAuditSubmitting ? (
                          <div className="w-8 h-8 border-4 border-navy/20 border-t-navy rounded-full animate-spin" />
                        ) : (
                          <>Claim My Free Audit <Gift size={24} /></>
                        )}
                      </button>
                      <p className="text-white/20 text-xs text-center font-serif italic">Limited to 5 stores per week. No commitment required.</p>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="audit-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10 space-y-10"
                    >
                      <div className="w-32 h-32 bg-white/10 text-green rounded-full flex items-center justify-center mx-auto">
                        <Star size={64} className="fill-green" />
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-5xl font-bold tracking-tight">Audit Claimed!</h3>
                        <p className="text-white/40 text-lg font-serif italic leading-relaxed">
                          I'll have your video ready and sent to your inbox within 24-48 hours. Here's what's next:
                        </p>
                        <div className="flex flex-col gap-3 text-left max-w-xs mx-auto text-white/60 text-xs">
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-green" />
                            <span>Deep UX analysis of your home & product pages.</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-green" />
                            <span>Speed performance bottleneck identification.</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-green" />
                            <span>3 actionable conversion hacks you can use today.</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsAuditSuccess(false)}
                        className="text-white/20 font-bold text-[10px] uppercase tracking-[0.4em] hover:text-white transition-colors"
                      >
                        Audit another store
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
