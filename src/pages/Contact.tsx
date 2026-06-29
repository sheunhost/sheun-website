import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Gift, Globe, Star, ArrowRight, Zap, ChevronDown, Palette, Layout, Info, Clock, Calendar, CheckCircle } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAuditSuccess, setIsAuditSuccess] = useState(false);
  const [isAuditSubmitting, setIsAuditSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);
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

      // Subject validation
      const subject = formData.get("subject") as string;
      if (!subject || subject.trim().length < 2) {
        newErrors.subject = "Please enter a subject.";
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
    const form = e.currentTarget;
    
    const formData = new FormData(form);

    if (!validateForm(formData, type)) return;
    
    if (type === 'contact') {
      setIsSubmitting(true);
    } else {
      setIsAuditSubmitting(true);
    }
    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    setSubmissionError(null);

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
        fetch("/api/connect/subscribe", {
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
        
        // Google Ads Conversion Tracking
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'conversion', {'send_to': 'AW-18133653660/tyjNCN6l37IcEJyx5sZD'});
        }

        form.reset();
      } else {
        console.error("Error submitting form", data);
        setSubmissionError("Something went wrong with the submission. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmissionError("Failed to reach the server. Please check your connection and try again.");
    } finally {
      if (type === 'contact') setIsSubmitting(false);
      else setIsAuditSubmitting(false);
    }
  };

  return (
    <PageWrapper 
      title="Contact Sheun | Certified Shopify Partner & SEO Specialist" 
      description="Get a premium Shopify store build, custom theme, technical SEO audit, or a WooCommerce-to-Shopify migration project started. Remote partner consulting for the UK, US, Canada, Australia, France, and Germany."
      keywords="Contact Shopify Expert, Hire Shopify Developer UK, Shopify SEO consultation USA, Shopify migration expert Canada, Free Shopify Audit Australia, Shopify freelancer France, Shopify Partner Germany"
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
      <ScrollReveal>
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
                From technical audits to custom Shopify builds, we'm here to help your brand cross the next revenue threshold.
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
    </ScrollReveal>

      {/* Main Content: Bento Info + Master Form */}
      <ScrollReveal>
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
                      <h3 className="text-4xl font-bold tracking-tighter">Email us directly.</h3>
                      <p className="text-white/50 text-lg font-serif italic">For deep project discussions and formal quotes.</p>
                      <div className="pt-6 flex items-center gap-4 text-green font-bold text-xl">
                        sheunhost@gmail.com <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* Secondary Contact: LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/sheun-hub-26b876321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 p-8 bg-light rounded-[40px] border border-navy/5 hover:border-green/50 transition-all group"
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
                    <div className="text-navy font-bold text-2xl tracking-tighter leading-none">Sheun Hub®</div>
                    <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">Shopify Development</p>
                  </div>
                  <div className="w-20 h-20 rounded-full border-4 border-navy/10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-navy rounded-full animate-ping" />
                  </div>
                </div>
              </div>

              {/* Trust Badge / FAQ Micro */}
              <div className="p-12 space-y-8 bg-light rounded-[40px] border border-navy/5 border-dashed">
                <h3 className="text-2xl font-bold text-navy tracking-tight">What to expect?</h3>
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
                          <p className="text-navy/50 text-xl font-serif italic leading-relaxed">Tell us about your vision, and let's see how we can make it a reality.</p>
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
                            <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Phone Number</label>
                            <input
                              type="text"
                              name="phone"
                              placeholder="+1 (000) 000 0000"
                              className="w-full bg-light/30 rounded-2xl py-5 px-6 border-2 border-light focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all focus:bg-white focus:shadow-lg focus:-translate-y-1"
                            />
                          </div>

                          {/* Subject Field */}
                          <div className="space-y-3">
                            <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Subject</label>
                            <input
                              type="text"
                              name="subject"
                              placeholder="e.g. Website Redesign"
                              className={`w-full bg-light/30 rounded-2xl py-5 px-6 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all focus:bg-white focus:shadow-lg focus:-translate-y-1 ${errors.subject ? 'border-red-500' : 'border-light'}`}
                            />
                            {errors.subject && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.subject}</p>}
                          </div>
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
                        <div className="pt-4 space-y-6">
                          {submissionError && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-sm font-bold flex items-center gap-3"
                            >
                              <Info size={18} /> {submissionError}
                            </motion.div>
                          )}
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
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tighter">Congratulations! Perfectly received.</h3>
                            <p className="text-navy/60 text-xl max-w-lg mx-auto leading-relaxed">
                              Your message was successfully submitted. A confirmation message from <span className="font-bold">sheunhost@gmail.com</span> will be sent to you shortlyWe'm already reviewing your details. Let's make this project a success.
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
    </ScrollReveal>

      {/* Direct Audit CTA - High Impact */}
      <ScrollReveal>
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
                  Not sure what's broken? Send us your link and we'll record a personalized 5-minute audit of your conversion leaks.
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
                      {submissionError && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-sm font-bold flex items-center gap-3"
                        >
                          <Info size={18} /> {submissionError}
                        </motion.div>
                      )}
                      <button 
                        type="submit" 
                        disabled={isAuditSubmitting}
                        className="w-full bg-green text-navy py-8 rounded-full font-bold text-xl hover:scale-[1.02] active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-4"
                      >
                        {isAuditSubmitting ? (
                          <div className="w-8 h-8 border-4 border-navy/20 border-t-navy rounded-full animate-spin" />
                        ) : (
                          <>Claim Our Free Audit <Gift size={24} /></>
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
                        <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Congratulations! Audit Claimed!</h3>
                        <p className="text-white/60 text-lg leading-relaxed">
                          Your request was successfully submitted. A confirmation from <span className="font-bold">sheunhost@gmail.com</span> will be sent to you shortlyWe'll have your video ready and sent to your inbox within 24-48 hours. Here's what's next:
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
    </ScrollReveal>
      {/* FAQ Section */}
      <ScrollReveal>
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-20">
              <div className="text-center space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tighter">Common Questions.</h2>
                <p className="text-navy/60 text-xl font-serif italic leading-relaxed">
                  Everything you need to know before we start your project.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {[
                  {
                    q: "How do I get started?",
                    a: "The first step is to fill out the contact form or store audit request. I'll review your details and send you a custom project proposal within 24 hours."
                  },
                  {
                    q: "How long does a build take?",
                    a: "A standard custom build typically takes 2 to 4 weeks. Smaller migrations or speed optimizations are often completed in 7 to 10 days."
                  },
                  {
                    q: "What are your rates?",
                    a: "Projects are quoted as fixed-price based on scope. My goal is to provide a transparent investment with a clear ROI, not unpredictable hourly bills."
                  },
                  {
                    q: "Are you a certified Shopify Partner?",
                    a: "Yes, I am a registered Shopify Partner with full access to the platform's specialized tools and collaborator channels."
                  },
                  {
                    q: "Do you work with startups?",
                    a: "Absolutely. I work with both established brands and high-potential startups. If your business plan is solid, I'm happy to help you scale."
                  }
                ].map((faq, i) => (
                  <div key={i} className="space-y-4">
                    <h3 className="text-xl font-bold text-navy tracking-tight">{faq.q}</h3>
                    <p className="text-navy/60 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

    </PageWrapper>
  );
}
