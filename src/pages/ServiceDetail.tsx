import React, { useState, FormEvent } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../data/servicesData";
import PageWrapper from "../components/PageWrapper";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, ChevronDown, Zap, Target, Layout, RefreshCw, Palette, Bug, Search, ShoppingCart, Send, Info, Phone, Mail, Linkedin } from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id as keyof typeof servicesData] : null;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    
    const name = formData.get("name") as string;
    if (!name || name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }

    const email = formData.get("email") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const message = formData.get("message") as string;
    if (!message || message.trim().length < 20) {
      newErrors.message = "Please provide a bit more detail (min 20 characters).";
    }

    const budget = formData.get("budget") as string;
    if (!budget) {
      newErrors.budget = "Please select an estimated budget.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (!validateForm(formData)) return;
    
    setIsSubmitting(true);
    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    formData.append("project_type", service.title);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
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
        }).catch(err => console.error("Mailchimp Sync Error:", err));

        setIsSuccess(true);
        e.currentTarget.reset();
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout": return <Layout className="w-12 h-12 text-green" />;
      case "ShoppingCart": return <ShoppingCart className="w-12 h-12 text-green" />;
      case "RefreshCw": return <RefreshCw className="w-12 h-12 text-green" />;
      case "Palette": return <Palette className="w-12 h-12 text-green" />;
      case "Bug": return <Bug className="w-12 h-12 text-green" />;
      case "Search": return <Search className="w-12 h-12 text-green" />;
      case "Target": return <Target className="w-12 h-12 text-green" />;
      case "Zap": return <Zap className="w-12 h-12 text-green" />;
      default: return <Zap className="w-12 h-12 text-green" />;
    }
  };

  return (
    <PageWrapper 
      title={`${service.title} | Sheun Hub Shopify Expert`}
      description={service.description}
      keywords={service.keywords}
      canonical={`/services/${id}`}
    >
      <div className="bg-white">
        {/* Dynamic Hero Section */}
        <section className="pt-40 pb-32 bg-navy-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-green rounded-full blur-[160px] animate-pulse" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center justify-center bg-white/5 border border-white/10 p-4 rounded-3xl mb-4"
              >
                {getIcon(service.icon)}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold font-sans tracking-tight text-white"
              >
                {service.heading}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-white/70 font-serif italic"
              >
                {service.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
              >
                <a href="#service-form" className="w-full sm:w-auto bg-green text-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2">
                  Get a Custom Quote <ArrowRight className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-4 text-white/80 font-medium">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-light/20 flex items-center justify-center overflow-hidden">
                        <Star className="w-4 h-4 text-green fill-green" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left leading-tight">
                    <p className="font-bold text-white relative flex items-center">
                      5.0 Rating
                      <span className="absolute -top-1 -right-2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
                      </span>
                    </p>
                    <p className="text-sm font-serif italic">Top Rated Partner</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section (What the buyer wants to do) */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="container mx-auto px-6">
             <div className="max-w-4xl mx-auto flex gap-6">
                <div className="hidden md:block w-32 shrink-0">
                  <div className="sticky top-32 w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-navy font-bold text-2xl font-serif italic">01</div>
                </div>
                <div className="prose prose-lg prose-headings:text-navy text-navy/70 leading-relaxed">
                  <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-8">Is This You?</h2>
                  <div className="p-8 bg-red-50 border border-red-100 rounded-3xl relative">
                    <ShieldCheck className="absolute top-8 right-8 text-red-200 w-24 h-24 opacity-20" />
                    <p className="text-xl font-medium text-navy/80 relative z-10 m-0">
                      {service.problem}
                    </p>
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* Scope Section (What they are going to get) */}
        <section className="py-24 bg-light border-y border-navy/5">
           <div className="container mx-auto px-6">
             <div className="max-w-4xl mx-auto flex gap-6">
                <div className="hidden md:block w-32 shrink-0">
                  <div className="sticky top-32 w-16 h-16 bg-green/20 rounded-full flex items-center justify-center text-green font-bold text-2xl font-serif italic">02</div>
                </div>
                <div className="prose prose-lg prose-headings:text-navy text-navy/70 leading-relaxed w-full">
                  <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight mb-8">The Solution & Scope</h2>
                  <p className="text-xl font-medium mb-12">
                    {service.scope}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 not-prose">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-3xl border border-navy/5 hover:border-green/30 transition-all flex items-start gap-4 shadow-sm hover:shadow-md">
                        <CheckCircle2 className="w-8 h-8 text-green shrink-0 bg-green/10 rounded-full p-1" />
                        <span className="font-bold text-navy text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
           </div>
        </section>

        {/* FAQs Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto flex gap-6">
                <div className="hidden md:block w-32 shrink-0">
                  <div className="sticky top-32 w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white font-bold text-2xl font-serif italic">03</div>
                </div>
                <div className="w-full">
                  <h2 className="text-4xl md:text-5xl font-bold font-sans text-navy tracking-tight mb-4">Frequently Asked Questions</h2>
                  <p className="text-xl text-navy/60 font-serif italic mb-12">Clear answers to your most pressing tech questions.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {service.faqs.map((faq, index) => (
                      <FaqItem key={index} question={faq.q} answer={faq.a} />
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Final CTA / Form */}
        <ScrollReveal>
          <section className="py-32 bg-navy-gradient relative overflow-hidden" id="service-form">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-green rounded-full blur-[120px] animate-pulse" />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center">
              <h2 className="text-5xl md:text-7xl font-bold font-sans text-white tracking-tight mb-8">Ready to start your project?</h2>
              <p className="text-2xl text-white/70 font-serif italic max-w-2xl mx-auto mb-16">
                Let's discuss how my {service.title} expertise can scale your revenue.
              </p>
              
              <div className="bg-white rounded-[40px] p-8 md:p-12 lg:p-16 shadow-[0_0_80px_rgba(16,185,129,0.1)] relative max-w-4xl mx-auto text-left">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center space-y-6"
                    >
                      <div className="w-24 h-24 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 className="w-12 h-12 text-green" />
                      </div>
                      <h3 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">Request Received</h3>
                      <p className="text-xl text-navy/60 font-serif italic max-w-lg mx-auto">
                        Thank you. I'll review your {service.title} requirements and get back to you within 24 hours with next steps.
                      </p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="mt-8 text-green font-bold hover:text-navy transition-colors underline underline-offset-4"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="service-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      onSubmit={handleSubmit} 
                      className="space-y-10"
                    >
                      <input type="hidden" name="subject" value={`New ${service.title} Lead`} />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name Field */}
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="e.g. Jane Doe"
                            className={`w-full bg-light/30 rounded-2xl py-5 px-6 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-light'}`}
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
                            className={`w-full bg-light/30 rounded-2xl py-5 px-6 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-light'}`}
                          />
                          {errors.email && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Phone Field */}
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Phone / WhatsApp</label>
                          <input
                            type="text"
                            name="phone"
                            placeholder="+1 (000) 000 0000"
                            className="w-full bg-light/30 rounded-2xl py-5 px-6 border-2 border-light focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all"
                          />
                        </div>

                        {/* Budget Select */}
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Project Budget</label>
                          <div className="relative">
                            <select name="budget" defaultValue="" className={`w-full bg-light/30 rounded-2xl py-5 px-6 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold appearance-none outline-none transition-all cursor-pointer ${errors.budget ? 'border-red-500' : 'border-light'}`}>
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
                      </div>

                      {/* Message Field */}
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-navy/40 uppercase tracking-widest pl-2 block">Project Brief</label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder={`Describe your specific needs regarding ${service.title}...`}
                          className={`w-full bg-light/30 rounded-[28px] py-6 px-8 border-2 focus:border-green hover:border-navy/10 text-navy font-semibold placeholder:text-navy/20 outline-none transition-all resize-none ${errors.message ? 'border-red-500' : 'border-light'}`}
                        />
                        {errors.message && <p className="text-red-500 text-[10px] font-bold pl-2">{errors.message}</p>}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          disabled={isSubmitting}
                          className="w-full relative group h-20 overflow-hidden rounded-full transition-all focus:scale-[0.98] shadow-xl hover:shadow-green/20"
                        >
                          <div className="absolute inset-0 bg-navy group-hover:bg-green transition-all duration-500" />
                          <div className="relative z-10 h-full flex items-center justify-center gap-4 text-white group-hover:text-navy transition-colors">
                            {isSubmitting ? (
                              <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                            ) : (
                              <>
                                <span className="text-lg font-bold tracking-tight">Request {service.title} Proposal</span>
                                <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                              </>
                            )}
                          </div>
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Contact Links */}
              <div className="mt-12 sm:mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-8 md:pt-10 border-t border-white/10">
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-white tracking-tight mb-2">Prefer direct contact?</h3>
                  <p className="text-white/60 font-serif italic text-sm md:text-base">Reach out directly via email or social.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a href="mailto:sheunhost@gmail.com" className="flex items-center gap-2 bg-white/5 hover:bg-green text-white hover:text-navy px-5 py-2.5 rounded-full transition-colors border border-white/10 hover:border-green">
                    <Mail size={18} />
                    <span className="font-bold text-sm">Email</span>
                  </a>
                  <a href="https://wa.me/2348084315743" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-green text-white hover:text-navy px-5 py-2.5 rounded-full transition-colors border border-white/10 hover:border-green">
                    <Phone size={18} />
                    <span className="font-bold text-sm">WhatsApp</span>
                  </a>
                  <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-green text-white hover:text-navy px-5 py-2.5 rounded-full transition-colors border border-white/10 hover:border-green">
                    <Linkedin size={18} />
                    <span className="font-bold text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Related Services */}
        <section className="py-24 bg-light">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-navy tracking-tight mb-12 text-center">Other Services You Might Need</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(servicesData)
                  .filter(([key]) => key !== id)
                  .slice(0, 3)
                  .map(([key, relatedService]) => (
                    <Link 
                      key={key} 
                      to={`/services/${key}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="bg-white p-8 rounded-3xl border border-navy/5 hover:border-green/50 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                    >
                      <div className="w-12 h-12 bg-navy/5 rounded-2xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-white transition-colors mb-6">
                        {getIcon(relatedService.icon)}
                      </div>
                      <h3 className="font-bold text-navy text-xl mb-3 leading-tight">{relatedService.title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed mb-6 flex-grow">{relatedService.description}</p>
                      <div className="flex items-center gap-2 text-green font-bold text-sm uppercase tracking-wider group-hover:text-navy transition-colors mt-auto">
                        View Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageWrapper>
  );
}

// Separate component for FAQ to manage its own expand/collapse state
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-navy/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-navy/20 bg-light/50 h-full flex flex-col">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 focus:outline-none"
      >
        <h3 className="font-bold text-navy text-lg md:text-xl tracking-tight leading-snug">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-green shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out flex-grow`}
        style={{ maxHeight: isOpen ? "400px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        <div className="p-5 md:p-6 pt-0 text-navy/70 text-base leading-relaxed font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
}
