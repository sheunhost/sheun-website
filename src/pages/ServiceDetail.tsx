import React, { useState, FormEvent, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../data/servicesData";
import PageWrapper from "../components/PageWrapper";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, ChevronDown, Zap, Target, Layout, RefreshCw, Palette, Bug, Search, ShoppingCart, Send, Mail, Linkedin } from "lucide-react";

const themeColors: Record<string, { main: string, glow: string, text: string, bg: string, border: string }> = {
  setup: { main: '#3b82f6', glow: 'rgba(59, 130, 246, 0.4)', text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' }, // Blue
  dropshipping: { main: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)', text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' }, // Purple
  migration: { main: '#f97316', glow: 'rgba(249, 115, 22, 0.4)', text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' }, // Orange
  custom: { main: '#ec4899', glow: 'rgba(236, 72, 153, 0.4)', text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' }, // Pink
  plus: { main: '#eab308', glow: 'rgba(234, 179, 8, 0.4)', text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' }, // Yellow
  bug: { main: '#ef4444', glow: 'rgba(239, 68, 68, 0.4)', text: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' }, // Red
  seo: { main: '#10b981', glow: 'rgba(16, 185, 129, 0.4)', text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' }, // Emerald
  cro: { main: '#06b6d4', glow: 'rgba(6, 182, 212, 0.4)', text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' }, // Cyan
  apps: { main: '#6366f1', glow: 'rgba(99, 102, 241, 0.4)', text: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' }, // Indigo
  speed: { main: '#f43f5e', glow: 'rgba(244, 63, 94, 0.4)', text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' }, // Rose
};

// Cosmic Background Component
const CosmicBackground = ({ color }: { color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#050505]">
      {/* Stars Layer 1 */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen" />
      
      {/* Nebula Glows */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse"
        style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
      />
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse"
        style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)`, animationDelay: '2s' }}
      />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </div>
  );
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id as keyof typeof servicesData] : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const theme = id && themeColors[id] ? themeColors[id] : themeColors.seo;

  const faqSchema = service ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (validateForm(formData)) {
      setIsSubmitting(true);
      formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
      formData.append("subject", `New Service Inquiry: ${service.title}`);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          setIsSuccess(true);
          e.currentTarget.reset();
        } else {
          setErrors({ submit: "There was a problem submitting your request. Please try again." });
        }
      } catch (error) {
        setErrors({ submit: "There was a problem submitting your request. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "Layout": return <Layout className="w-12 h-12" style={{ color: theme.main }} />;
      case "ShoppingCart": return <ShoppingCart className="w-12 h-12" style={{ color: theme.main }} />;
      case "RefreshCw": return <RefreshCw className="w-12 h-12" style={{ color: theme.main }} />;
      case "Palette": return <Palette className="w-12 h-12" style={{ color: theme.main }} />;
      case "Bug": return <Bug className="w-12 h-12" style={{ color: theme.main }} />;
      case "Search": return <Search className="w-12 h-12" style={{ color: theme.main }} />;
      case "Target": return <Target className="w-12 h-12" style={{ color: theme.main }} />;
      case "Zap": return <Zap className="w-12 h-12" style={{ color: theme.main }} />;
      default: return <Zap className="w-12 h-12" style={{ color: theme.main }} />;
    }
  };

  return (
    <PageWrapper 
      title={`${service.title} | Sheun Hub - Shopify Expert`}
      description={service.description}
      keywords={service.keywords}
      canonical={`/services/${id}`}
    >
      <div className="bg-[#050505] text-white min-h-screen relative font-sans selection:bg-white/20">
        <CosmicBackground color={theme.main} />
        
        {/* Dynamic Hero Section */}
        <section className="pt-48 pb-32 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center space-y-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center justify-center p-6 rounded-full border mb-6 relative backdrop-blur-xl"
                style={{ 
                  borderColor: theme.main, 
                  backgroundColor: `${theme.main}15`,
                  boxShadow: `0 0 40px ${theme.glow}`
                }}
              >
                {getIcon(service.icon)}
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black tracking-tighter"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                  {service.heading}
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed"
              >
                {service.description}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
              >
                <a 
                  href="#service-form" 
                  className="w-full sm:w-auto px-12 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 group relative overflow-hidden"
                  style={{ backgroundColor: theme.main, color: '#000', boxShadow: `0 0 30px ${theme.glow}` }}
                >
                  <span className="relative z-10">Initiate Protocol</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
                
                <div className="flex items-center gap-4 text-white/80">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center">
                        <Star className="w-4 h-4 fill-current" style={{ color: theme.main }} />
                      </div>
                    ))}
                  </div>
                  <div className="text-left text-sm">
                    <p className="font-bold tracking-wider uppercase" style={{ color: theme.main }}>Elite Rating</p>
                    <p className="text-white/40">Verified Partner</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ScrollReveal>
          {/* Problem Section */}
          <section className="py-32 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                  <div 
                    className="p-12 rounded-3xl border backdrop-blur-xl relative overflow-hidden"
                    style={{ borderColor: `${theme.main}30`, backgroundColor: 'rgba(0,0,0,0.4)' }}
                  >
                    <ShieldCheck className="absolute top-8 right-8 w-32 h-32 opacity-10" style={{ color: theme.main }} />
                    <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                      <span className="w-12 h-1px" style={{ backgroundColor: theme.main }}></span>
                      The Challenge
                    </h2>
                    <p className="text-xl text-white/70 leading-relaxed font-light relative z-10">
                      {service.problem}
                    </p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                    The <span style={{ color: theme.main }}>Solution</span>
                  </h2>
                  <p className="text-xl text-white/60 font-light leading-relaxed">
                    {service.scope}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                    {service.deliverables.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl border backdrop-blur-md flex items-center gap-4"
                        style={{ borderColor: `${theme.main}20`, backgroundColor: 'rgba(255,255,255,0.02)' }}
                      >
                        <CheckCircle2 className="w-6 h-6 shrink-0" style={{ color: theme.main }} />
                        <span className="font-medium text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* How It Works Section */}
        {service.howItWorks && (
          <ScrollReveal>
            <section className="py-32 relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-3xl">
              <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Execution Protocol</h2>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: theme.main }} />
                  </div>
                  
                  <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[28px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {service.howItWorks.map((step: string, idx: number) => {
                      const parts = step.split(': ');
                      const title = parts[0];
                      const desc = parts.slice(1).join(': ');
                      return (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                          <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#050505] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10" style={{ backgroundColor: theme.main }}>
                            <span className="text-black font-black text-xl">{idx + 1}</span>
                          </div>
                          <div 
                            className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl border backdrop-blur-md transition-all duration-500 hover:scale-[1.02]"
                            style={{ borderColor: `${theme.main}30`, backgroundColor: 'rgba(255,255,255,0.03)', boxShadow: `inset 0 0 20px ${theme.glow}` }}
                          >
                            <h3 className="text-2xl font-bold mb-3" style={{ color: theme.main }}>{title}</h3>
                            <p className="text-white/60 leading-relaxed">{desc || title}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Pricing Section */}
        {service.pricing && (
          <ScrollReveal>
            <section className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 rounded-full blur-[150px] mix-blend-screen opacity-20 pointer-events-none"
                style={{ backgroundColor: theme.main }}
              />
              <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16">Investment Parameters</h2>
                  
                  <div 
                    className="p-12 md:p-20 rounded-[3rem] border relative backdrop-blur-2xl overflow-hidden group"
                    style={{ 
                      borderColor: `${theme.main}40`, 
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      boxShadow: `0 0 80px ${theme.glow}`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Starting Blueprint</p>
                    <div className="text-7xl md:text-9xl font-black tracking-tighter mb-8" style={{ color: theme.main }}>
                      {service.pricing.startingAt}
                    </div>
                    <p className="text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                      {service.pricing.details}
                    </p>
                    <a 
                      href="#service-form" 
                      className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105"
                      style={{ backgroundColor: 'white', color: 'black' }}
                    >
                      Request Secure Transmission <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Comparison Section */}
        {service.comparison && (
          <ScrollReveal>
            <section className="py-32 relative z-10 border-t border-white/5 bg-black/40">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Why the Sheun Hub Architecture?</h2>
                  <div 
                    className="p-10 md:p-16 rounded-[2.5rem] border backdrop-blur-xl relative overflow-hidden"
                    style={{ borderColor: `${theme.main}20`, backgroundColor: 'rgba(255,255,255,0.02)' }}
                  >
                    <p className="text-2xl md:text-3xl text-white/80 leading-relaxed font-light italic">
                      "{service.comparison}"
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Recent Work Section */}
        {service.recentWork && (
          <ScrollReveal>
            <section className="py-32 relative z-10 border-t border-white/5">
              <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Recent Deployments</h2>
                      <p className="text-xl text-white/40 font-light">Mission logs for {service.title}</p>
                    </div>
                    <Link to="/portfolio" className="text-white/60 hover:text-white flex items-center gap-2 transition-colors">
                      View All Logs <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {service.recentWork.map((work: any, idx: number) => (
                      <Link 
                        to={work.link} 
                        key={idx} 
                        onClick={() => window.scrollTo(0, 0)} 
                        className="group block p-10 rounded-[2rem] border backdrop-blur-md transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        style={{ borderColor: `${theme.main}20`, backgroundColor: 'rgba(255,255,255,0.03)' }}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top right, ${theme.glow}, transparent 70%)` }} />
                        <h3 className="text-3xl font-bold mb-4 relative z-10 text-white group-hover:text-white transition-colors">{work.name}</h3>
                        <p className="text-white/60 font-light text-lg mb-8 relative z-10">{work.result}</p>
                        <div 
                          className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-colors relative z-10"
                          style={{ color: theme.main }}
                        >
                          Access Core File <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Testimonial Section */}
        {service.testimonial && (
          <ScrollReveal>
            <section className="py-32 relative z-10 border-t border-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen" />
              <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto text-center">
                  <Star className="w-16 h-16 mx-auto mb-10" style={{ fill: theme.main, color: theme.main }} />
                  <blockquote className="text-3xl md:text-5xl font-light italic leading-snug mb-12 text-balance text-white/90">
                    "{service.testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-2xl mb-2">{service.testimonial.author}</div>
                    <div className="uppercase tracking-widest text-sm font-bold" style={{ color: theme.main }}>
                      {service.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* FAQs Section */}
        <ScrollReveal>
          <section className="py-32 relative z-10 border-t border-white/5 bg-black/60 backdrop-blur-3xl">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center mb-16">Data Query Logs</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq: any, index: number) => (
                    <FaqItem key={index} question={faq.q} answer={faq.a} theme={theme} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA / Form */}
        <ScrollReveal>
          <section className="py-32 relative z-10 border-t border-white/5 overflow-hidden" id="service-form">
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-96 rounded-t-[100%] blur-[120px] mix-blend-screen opacity-20 pointer-events-none"
              style={{ backgroundColor: theme.main }}
            />
            
            <div className="container mx-auto px-6 relative text-center">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Ready for Liftoff?</h2>
              <p className="text-2xl text-white/60 font-light max-w-2xl mx-auto mb-16">
                Transmit your coordinates to begin the {service.title} integration.
              </p>
              
              <div 
                className="rounded-[3rem] p-8 md:p-16 relative max-w-3xl mx-auto text-left backdrop-blur-2xl border"
                style={{ 
                  borderColor: `${theme.main}30`,
                  backgroundColor: 'rgba(10,10,12,0.7)',
                  boxShadow: `0 20px 80px rgba(0,0,0,0.8), inset 0 0 40px ${theme.glow}`
                }}
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-20 text-center space-y-6"
                    >
                      <div 
                        className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border"
                        style={{ backgroundColor: `${theme.main}20`, borderColor: theme.main, color: theme.main }}
                      >
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Transmission Received</h3>
                      <p className="text-xl text-white/60 font-light max-w-lg mx-auto">
                        Your {service.title} request has been logged. A confirmation signal from <span className="font-bold text-white">sheunhost@gmail.com</span> is en route. We will analyze your coordinates and respond within 24 hours.
                      </p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="mt-8 font-bold hover:text-white transition-colors underline underline-offset-8"
                        style={{ color: theme.main }}
                      >
                        Initiate Another Sequence
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      {errors.submit && (
                        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-2xl text-red-400 text-sm font-bold text-center">
                          {errors.submit}
                        </div>
                      )}
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-4 block">Commander Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full bg-black/40 rounded-full py-5 px-8 border border-white/10 focus:border-white text-white placeholder:text-white/20 outline-none transition-all"
                            style={{ '--tw-ring-color': theme.main } as any}
                          />
                          {errors.name && <p className="text-red-400 text-xs font-bold pl-4">{errors.name}</p>}
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-4 block">Comms Frequency (Email)</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            className="w-full bg-black/40 rounded-full py-5 px-8 border border-white/10 focus:border-white text-white placeholder:text-white/20 outline-none transition-all"
                          />
                          {errors.email && <p className="text-red-400 text-xs font-bold pl-4">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-4 block">Direct Line (Phone)</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-black/40 rounded-full py-5 px-8 border border-white/10 focus:border-white text-white placeholder:text-white/20 outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-4 block">Resource Allocation</label>
                          <div className="relative">
                            <select 
                              name="budget" 
                              defaultValue="" 
                              className="w-full bg-black/40 rounded-full py-5 px-8 border border-white/10 focus:border-white text-white appearance-none outline-none transition-all cursor-pointer"
                            >
                              <option value="" disabled className="text-black">Select an estimated budget...</option>
                              <option value="Less than $500" className="text-black">Less than $500</option>
                              <option value="$500 - $2,000" className="text-black">$500 - $2,000</option>
                              <option value="$2,000 - $5,000" className="text-black">$2,000 - $5,000</option>
                              <option value="$5,000+" className="text-black">$5,000+</option>
                            </select>
                            <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" size={20} />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-bold text-white/40 uppercase tracking-widest pl-4 block">Mission Parameters</label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder={`Detail your specific requirements for ${service.title}...`}
                          className="w-full bg-black/40 rounded-[2rem] py-6 px-8 border border-white/10 focus:border-white text-white placeholder:text-white/20 outline-none transition-all resize-none"
                        />
                        {errors.message && <p className="text-red-400 text-xs font-bold pl-4">{errors.message}</p>}
                      </div>

                      <div className="pt-6">
                        <button
                          disabled={isSubmitting}
                          className="w-full h-20 rounded-full transition-all focus:scale-[0.98] relative group overflow-hidden"
                          style={{ backgroundColor: theme.main, color: '#000', boxShadow: `0 0 30px ${theme.glow}` }}
                        >
                          <div className="relative z-10 h-full flex items-center justify-center gap-3 font-black text-lg">
                            {isSubmitting ? (
                              <div className="w-8 h-8 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                            ) : (
                              <>
                                <span>Transmit Proposal Request</span>
                                <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform shrink-0" />
                              </>
                            )}
                          </div>
                          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-20 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Alternative Comms?</h3>
                  <p className="text-white/40 font-light text-lg">Reach out via standard protocols.</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a href="mailto:sheunhost@gmail.com" className="flex items-center gap-2 bg-white/5 hover:bg-white text-white hover:text-black px-6 py-3 rounded-full transition-all border border-white/10">
                    <Mail size={18} />
                    <span className="font-bold text-sm uppercase tracking-wider">Email</span>
                  </a>
                  <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white text-white hover:text-black px-6 py-3 rounded-full transition-all border border-white/10">
                    <Linkedin size={18} />
                    <span className="font-bold text-sm uppercase tracking-wider">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Related Services */}
        <section className="py-32 relative z-10 border-t border-white/5 bg-[#050505]">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-16 text-center">Explore Other Quadrants</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(servicesData)
                  .filter(([key]) => key !== id)
                  .slice(0, 3)
                  .map(([key, relatedService]) => {
                    const relatedTheme = themeColors[key] || themeColors.seo;
                    return (
                      <Link 
                        key={key} 
                        to={`/services/${key}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="group bg-[#0a0a0c] p-10 rounded-[2rem] border border-white/5 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
                        style={{ '--hover-color': relatedTheme.main } as any}
                      >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top right, ${relatedTheme.main}, transparent)` }} />
                        
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/10 bg-black/50" style={{ color: relatedTheme.main }}>
                          {/* Use the parent's getIcon logic but adapted for this */}
                          <Zap className="w-8 h-8" />
                        </div>
                        
                        <h3 className="font-bold text-white text-2xl mb-4">{relatedService.title}</h3>
                        <p className="text-white/50 font-light leading-relaxed mb-8 flex-grow">{relatedService.description}</p>
                        
                        <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors mt-auto" style={{ color: relatedTheme.main }}>
                          Engage Sub-Routine <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>

      </div>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </PageWrapper>
  );
}

function FaqItem({ question, answer, theme }: { question: string, answer: string, theme: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border rounded-2xl overflow-hidden transition-all duration-300 bg-white/5 backdrop-blur-sm"
      style={{ borderColor: isOpen ? theme.main : 'rgba(255,255,255,0.1)' }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-6 focus:outline-none"
      >
        <h3 className="font-bold text-white text-lg md:text-xl tracking-tight pr-8">{question}</h3>
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors shrink-0"
          style={{ 
            borderColor: isOpen ? theme.main : 'rgba(255,255,255,0.2)',
            backgroundColor: isOpen ? `${theme.main}20` : 'transparent',
            color: isOpen ? theme.main : 'white'
          }}
        >
          <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div 
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? "400px" : "0", opacity: isOpen ? 1 : 0 }}
      >
        <div className="p-6 md:p-8 pt-0 text-white/60 font-light leading-relaxed text-lg border-t border-white/5 mt-2">
          {answer}
        </div>
      </div>
    </div>
  );
}
