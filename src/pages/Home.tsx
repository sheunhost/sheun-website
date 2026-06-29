import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingBag, Globe, Trophy, CheckCircle2, Layout, RefreshCw, ShoppingCart, Palette, ExternalLink, Zap, Code2, Rocket, MessageSquare, Send, Mail, ChevronDown, Quote, TrendingUp, Target, AlertCircle, BarChart3, Search, Lightbulb, Info, AlertTriangle, X, Clock, DollarSign, ListChecks, ChevronLeft, ChevronRight, ShieldCheck, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { cn, openCalendlyPopup } from "../lib/utils";
import ScrollReveal from "../components/ScrollReveal";
import { ImpactMetrics } from "../components/ImpactMetrics";
import { TiltCard } from "../components/TiltCard";

const stats = [
  { label: "Stores Built", value: "20+" },
  { label: "Star Rating", value: "5.0" },
  { label: "Years Experience", value: "3+" },
  { label: "Client Satisfaction", value: "100%" },
];

const services = [
  {
    title: "Store Setup & Build",
    icon: Layout,
    desc: "Complete Shopify store setup from scratch — theme, products, and configuration.",
  },
  {
    title: "Shopify Migration Service",
    icon: RefreshCw,
    desc: "Seamlessly migrate your store from any platform to Shopify without losing data.",
  },
  {
    title: "Dropshipping Stores",
    icon: ShoppingCart,
    desc: "Niche research, supplier setup, and conversion-optimized design for dropshipping.",
  },
  {
    title: "Theme Customization",
    icon: Palette,
    desc: "Custom-designed Shopify store using premium themes tailored to your brand.",
  },
];

const portfolio = [
  {
    name: "Rooibru",
    tag: "Real Client Project",
    desc: "Full Shopify build for a premium drink store — custom design, product setup, and store optimization.",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
    link: "https://rooibru.com",
  },
  {
    name: "Fashion Nova",
    tag: "Fashion Inspiration",
    desc: "The standard for high-converting Shopify fashion dropshipping stores.",
    image: "https://picsum.photos/seed/fashion/800/600",
    link: "#",
  },
  {
    name: "Uproot Clean",
    tag: "Pet Inspiration",
    desc: "5-figure monthly sales pet store with smart upsell flows.",
    image: "https://picsum.photos/seed/pets/800/600",
    link: "#",
  },
];

const niches = [
  { name: "Fashion", desc: "Trendy dropshipping stores built to convert", image: "https://cdn-images.farfetch-contents.com/31/90/40/19/31904019_61489160_1000.jpg" },
  { name: "Beauty", desc: "Elegant, trust-building beauty storefronts", image: "https://www.raycochrane.co.uk/wp-content/uploads/2017/08/Woman-having-facial-mask-at-beauty-salon-133557705_3645x2734.jpg" },
  { name: "Pets", desc: "Upsell-optimized pet product stores", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4cmUVsx11t41Zvm2ZUF02sFqGoo152yezg&s" },
  { name: "Gadgets", desc: "High-converting tech & accessories stores", image: "https://dodptt9f4zk9h.cloudfront.net/stores/97090/collections/a524d801cea38da741c3f7ad6fde21ae6a29f8f6.jpeg" },
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Founder, Glow Beauty",
    content: "Sheun Hub completely transformed our Shopify store. Our conversion rate doubled in the first month after the redesign!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "CEO, TechHaven",
    content: "The migration from WooCommerce to Shopify was flawless. We didn't lose a single order during the transition.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Emma Roberts",
    role: "Owner, Style Boutique",
    content: "Incredible attention to detail and lightning-fast communication. The custom theme perfectly captures our brand vibe.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "David Miller",
    role: "Director, Urban Gear",
    content: "The Growth Plan alone was worth it. We've seen a 40% increase in organic traffic and sales within just 3 weeks.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Lisa Wong",
    role: "Founder, PetPalace",
    content: "Sheun is a Liquid expert. He built custom features that we thought were impossible on Shopify.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "James Carter",
    role: "Founder, Peak Performance",
    content: "The custom dropshipping integration saved us hours every week. Outstanding execution.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Mia Thompson",
    role: "Owner, Bloom Florals",
    content: "Our site looks completely premium now. The UI improvements alone increased our average order value by 15%.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Oliver Wright",
    role: "CEO, NextGen Electronics",
    content: "Sheun optimized my checkout flow and the results were immediate. Cart abandonment dropped significantly.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200",
    rating: 4
  },
  {
    name: "Sophia Martinez",
    role: "Director, Luxe Interiors",
    content: "A master at Shopify development. The custom theme is fast, responsive, and perfectly aligned with our brand.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Alexander Kim",
    role: "Founder, Active Gear",
    content: "The store speed optimization was incredible. Pages load instantly, and our mobile conversion rate is up 30%.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];

const SEOReport = ({ data }: { data: any }) => {
  if (!data) return null;
  
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Summary Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-navy p-8 rounded-2xl text-white space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Globe size={120} />
          </div>
          <div className="flex items-center gap-3 text-green relative z-10">
            <Globe size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Store Analysis</span>
          </div>
          <h3 className="text-3xl font-bold relative z-10 break-all">{data.store_summary.store_url}</h3>
          <p className="text-white/60 leading-relaxed relative z-10">{data.store_summary.seo_score_reason}</p>
          <div className="pt-4 flex flex-wrap gap-4 relative z-10">
             <div className="bg-white/10 px-4 py-2 rounded-2xl">
               <p className="text-[8px] text-white/40 uppercase font-bold">Niche</p>
               <p className="font-bold text-green">{data.store_summary.detected_niche}</p>
             </div>
             <div className="bg-white/10 px-4 py-2 rounded-2xl">
               <p className="text-[8px] text-white/40 uppercase font-bold">Target Audience</p>
               <p className="font-bold">{data.store_summary.target_audience}</p>
             </div>
          </div>
        </div>
        <div className="bg-green p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 shadow-xl shadow-green/20">
           <p className="text-navy/60 text-[10px] font-bold uppercase tracking-widest">SEO Score</p>
           <p className="text-7xl font-black text-navy tracking-tighter">{data.store_summary.current_seo_score}</p>
           <Trophy className="text-navy/20" size={40} />
        </div>
      </div>

      {/* Biggest Opportunity */}
      <div className="bg-navy/5 border-2 border-green/20 p-8 rounded-2xl flex items-start gap-6 group hover:bg-green/5 transition-colors">
        <div className="w-12 h-12 bg-green rounded-2xl flex items-center justify-center text-navy shrink-0 shadow-lg shadow-green/20">
          <Zap size={24} />
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">Biggest Opportunity</p>
          <p className="text-xl font-bold text-navy">{data.store_summary.biggest_opportunity}</p>
        </div>
      </div>

      {/* Keywords Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Search className="text-green" size={24} />
          <h4 className="text-2xl font-bold text-navy">Primary Keywords</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.keywords.map((kw: any, i: number) => (
            <div key={i} className="bg-white border border-navy/5 p-6 rounded-3xl hover:shadow-lg transition-shadow group">
              <div className="flex justify-between items-start mb-4">
                <p className="text-lg font-bold text-navy group-hover:text-green transition-colors">{kw.keyword}</p>
                <span className={`text-[8px] font-bold uppercase px-2 py-1 rounded-full ${
                  kw.difficulty === 'Easy' ? 'bg-green/10 text-green' : 
                  kw.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-red-500/10 text-red-600'
                }`}>
                  {kw.difficulty}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-[10px]">
                <div>
                  <p className="text-navy/40 uppercase font-bold">Volume</p>
                  <p className="font-bold">{kw.volume}</p>
                </div>
                <div>
                  <p className="text-navy/40 uppercase font-bold">Intent</p>
                  <p className="font-bold">{kw.intent}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-navy/5">
                <p className="text-[10px] text-navy/40 uppercase font-bold mb-1">Where to use</p>
                <p className="text-xs text-navy/70 leading-relaxed">{kw.where_to_use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Longtail Keywords */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <TrendingUp className="text-green" size={24} />
          <h4 className="text-2xl font-bold text-navy">Long-tail Opportunities</h4>
        </div>
        <div className="bg-navy p-8 rounded-2xl space-y-6 shadow-2xl">
          {data.longtail.map((lt: any, i: number) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 last:border-0 last:pb-0">
              <div className="space-y-1">
                <p className="text-lg font-bold text-white">{lt.keyword}</p>
                <p className="text-white/40 text-xs">{lt.why_it_converts}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[8px] text-white/40 uppercase font-bold">Potential</p>
                  <p className="text-green font-bold">{lt.conversion_potential}</p>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-green">
                  <CheckCircle2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gaps & Quick Wins */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-red-500" size={24} />
            <h4 className="text-2xl font-bold text-navy">Critical Gaps</h4>
          </div>
          <div className="space-y-4">
            {data.seo_gaps.map((gap: any, i: number) => (
              <div key={i} className="bg-red-50 border border-red-100 p-6 rounded-3xl space-y-3">
                <p className="font-bold text-red-900">{gap.problem}</p>
                <p className="text-xs text-red-700/80 italic">Location: {gap.location}</p>
                <div className="bg-white p-4 rounded-2xl text-xs text-navy/70 border border-red-200">
                  <p className="font-bold text-navy mb-1">Fix:</p>
                  {gap.fix}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Rocket className="text-green" size={24} />
            <h4 className="text-2xl font-bold text-navy">Quick Wins</h4>
          </div>
          <div className="space-y-4">
            {data.quick_wins.map((win: any, i: number) => (
              <div key={i} className="bg-green/5 border border-green/10 p-6 rounded-3xl space-y-3">
                <p className="font-bold text-navy">{win.action}</p>
                <p className="text-xs text-navy/60 italic">Where: {win.where}</p>
                <div className="flex items-center gap-2 text-green font-bold text-[10px] uppercase tracking-widest bg-green/10 w-fit px-3 py-1 rounded-full">
                  <Zap size={14} />
                  Impact: {win.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitor Analysis - New Section */}
      {data.competitor_analysis && (
        <div className="space-y-6 pt-12 border-t border-navy/5">
          <div className="flex items-center gap-3">
            <Target className="text-navy" size={24} />
            <h4 className="text-2xl font-bold text-navy">Competitor Gap Analysis</h4>
          </div>
          <div className="bg-navy p-8 md:p-12 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <BarChart3 size={160} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <p className="text-green text-[10px] font-bold uppercase tracking-widest">What they have that you don't</p>
                <div className="space-y-4">
                  {data.competitor_analysis.gaps.map((gap: any, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                        <AlertTriangle size={14} />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">{gap.title}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{gap.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-green text-[10px] font-bold uppercase tracking-widest">How to outrank them</p>
                <div className="space-y-4">
                  {data.competitor_analysis.outrank_strategy.map((strategy: any, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-green/20 flex items-center justify-center text-green shrink-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold">{strategy.title}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{strategy.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ServiceModal = ({ service, onClose }: { service: any; onClose: () => void }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy/90 backdrop-blur-xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 bg-light rounded-full flex items-center justify-center text-navy hover:bg-green hover:text-navy transition-all z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-navy p-8 md:p-12 text-white space-y-8">
            <div className="w-16 h-16 bg-green rounded-2xl flex items-center justify-center text-navy">
              <service.icon size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold leading-tight">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.fullDesc}</p>
            </div>
            <div className="space-y-4 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <Clock className="text-green" size={20} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Timeline</p>
                  <p className="font-bold">{service.timeline}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <DollarSign className="text-green" size={20} />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Starting From</p>
                  <p className="font-bold">{service.price}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 md:p-12 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <ListChecks className="text-green" size={24} />
                <h4 className="text-2xl font-bold text-navy">Service Roadmap</h4>
              </div>
              <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-navy/5">
                {service.roadmap.map((step: any, i: number) => (
                  <div key={i} className="relative pl-12 group">
                    <div className="absolute left-0 top-1 w-8 h-8 bg-light rounded-full border-2 border-navy/5 flex items-center justify-center text-xs font-bold text-navy group-hover:bg-green group-hover:border-green transition-all">
                      {i + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="font-bold text-navy">{step.title}</p>
                      <p className="text-sm text-navy/60 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-navy/5">
              <a
                href="#contact"
                onClick={(e) => {
                  onClose();
                  // Smooth scroll to contact
                  const contact = document.getElementById('contact');
                  if (contact) {
                    e.preventDefault();
                    contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full bg-navy text-white py-5 rounded-full font-bold text-lg hover:bg-green hover:text-navy transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                Get Started with {service.title} <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailErrorContact, setEmailErrorContact] = useState("");

  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribeSuccess, setIsSubscribeSuccess] = useState(false);
  const [emailErrorSubscribe, setEmailErrorSubscribe] = useState("");

  const [isRequestingPlan, setIsRequestingPlan] = useState(false);
  const [planRequested, setPlanRequested] = useState(false);
  const [emailErrorPlan, setEmailErrorPlan] = useState("");

  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isTestimonialExpanded, setIsTestimonialExpanded] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nextTestimonial = () => {
    setIsTestimonialExpanded(false);
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsTestimonialExpanded(false);
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isTestimonialExpanded) return;
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [isTestimonialExpanded]);

  const handlePlanRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    
    if (!email || !emailRegex.test(email)) {
      setEmailErrorPlan("Please enter a valid email address.");
      return;
    }
    setEmailErrorPlan("");
    setIsRequestingPlan(true);

    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    formData.append("subject", "New Audit/Plan Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setPlanRequested(true);
        form.reset();
      } else {
        setEmailErrorPlan("Something went wrong. Please try again.");
      }
    } catch (error) {
       setEmailErrorPlan("Connection error. Please try again.");
    } finally {
      setIsRequestingPlan(false);
    }
  };

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    if (!email || !emailRegex.test(email)) {
      setEmailErrorSubscribe("Please enter a valid email address.");
      return;
    }
    setEmailErrorSubscribe("");
    setIsSubscribing(true);

    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    formData.append("subject", "New Newsletter Subscriber");

    try {
      // 1. Submit to Web3Forms for email notification
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // 2. Submit to Mailchimp (Background)
        fetch("/api/connect/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email })
        })
        .then(async r => {
          if (!r.ok) {
            const err = await r.json();
            throw new Error(err.details || err.error || "Mailchimp sync failed");
          }
          console.log("Mailchimp sync success");
        })
        .catch(err => {
          console.error("Mailchimp Sync Error:", err);
        });

        setIsSubscribeSuccess(true);
        form.reset();
        setTimeout(() => setIsSubscribeSuccess(false), 5000);
      } else {
        console.error("Error submitting form", data);
        setEmailErrorSubscribe("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setEmailErrorSubscribe("Connection error. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    if (!email || !emailRegex.test(email)) {
      setEmailErrorContact("Please enter a valid email address.");
      return;
    }
    setEmailErrorContact("");
    setIsSubmitting(true);

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
        const name = (formData.get("name") as string) || "";
        fetch("/api/connect/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            firstName: name.split(" ")[0],
            lastName: name.split(" ").slice(1).join(" ")
          })
        }).catch(err => console.error("Mailchimp Sync Error:", err));

        setIsSuccess(true);
        form.reset();
      } else {
        console.error("Error submitting form", data);
        setEmailErrorContact("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setEmailErrorContact("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper 
      title="Best Shopify Developer, Consultant & SEO Expert (UK, US, CA, AU, FR, DE) | Sheun" 
      description="Need a certified Shopify Developer & SEO Consultant? Sheun provides custom store builds, technical SEO audits, WooCommerce migrations, and speed optimizations for brands in the UK, US, Canada, Australia, France, and Germany."
      keywords="best shopify developer, affordable shopify developer, shopify expert reviews, shopify expert UK, freelance shopify developer, shopify developer Australia, shopify expert Canada, shopify expert USA, shopify developer France, shopify expert Germany, WooCommerce to Shopify migration, Shopify SEO Sprint, Technical Shopify SEO Audit, Custom Shopify Themes, E-commerce CRO, speed optimization"
      canonical="/"
      schema={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "name": "Shopify Developer, SEO Specialist & Growth Expert - Sheun",
        "description": "Scale your brand with a certified Shopify Partner specializing in WooCommerce migrations, technical SEO audits, custom theme development, and performance optimization across the UK, US, Canada, Australia, France, and Germany.",
        "url": "https://sheun.online",
        "mainEntity": {
          "@type": "Person",
          "name": "Sheun",
          "jobTitle": "Shopify Developer & SEO Specialist",
          "url": "https://sheun.online",
          "sameAs": [
            "https://www.linkedin.com/in/sheun-hub-26b876321",
            "https://twitter.com/sheunhub"
          ]
        }
      }}
    >
      {/* Hero Section */}
      <ScrollReveal>
        <section className="relative min-h-screen flex items-center pt-48 pb-20 bg-navy-gradient overflow-hidden">
          {/* Rail Text - Recipe 11 */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block z-20">
          <div className="flex flex-col items-center gap-8">
            <div className="w-px h-24 bg-green/20" />
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
              Shopify Partner · 2024 Edition
            </span>
          </div>
        </div>

        {/* Dynamic Background - Recipe 7 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#064e4b]/20 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#064e4b]/10 rounded-full blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-green)_1px,_transparent_1px)] bg-[size:60px_60px] opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full">
                <div className="w-1.5 h-1.5 bg-green rounded-full" />
                <span className="text-green text-[10px] font-bold uppercase tracking-[0.2em]">Available for new projects</span>
              </div>

              <h1 className="text-5xl md:text-[100px] font-bold text-white leading-[0.8] tracking-[-0.05em] text-balance">
                <span className="block mb-4">
                  <motion.span
                    key="headline-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Shopify Development
                  </motion.span>
                  <br />
                  <motion.span
                    key="headline-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    &amp; <span className="text-green">Growth</span>
                  </motion.span>
                </span>
                <motion.span 
                  className="text-white italic font-serif font-light opacity-40 block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.4, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  by Sheun.
                </motion.span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {[
                  { title: "Custom Development", desc: "Bespoke Liquid coding." },
                  { title: "Store Optimization", desc: "Speed and UX refinement." },
                  { title: "E-commerce Scaling", desc: "Conversion focused design." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <TiltCard depth={20}>
                      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full backdrop-blur-sm shadow-xl">
                        <div className="text-green text-sm font-bold uppercase tracking-widest mb-1">{item.title}</div>
                        <p className="text-white/40 text-xs italic font-serif">{item.desc}</p>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </div>

                <p className="text-white/60 text-xl md:text-2xl max-w-xl leading-relaxed font-light font-serif italic">
                  Scale your brand with a specialist in Custom Shopify Development and E-commerce Growth. From custom theme builds to technical store optimization, Sheun helps businesses maximize revenue on the Shopify platform.
                </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <Link 
                to="/apply" 
                className="w-full sm:w-auto bg-green text-navy px-12 py-6 rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 green-glow flex items-center justify-center gap-3 text-center"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services" 
                className="text-white font-bold hover:text-green transition-colors flex items-center gap-2"
              >
                Explore Services <ChevronDown size={16} />
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto text-white/80 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-4 group text-center">
                View Portfolio <div className="w-8 h-px bg-white/20 group-hover:w-16 group-hover:bg-green transition-all duration-500" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-12 pt-8 border-t border-white/5"
            >
              {[
                { label: "Stores Built", value: "20+" },
                { label: "Rating", value: "5.0 Stars" },
                { label: "Upwork", value: "Top Rated" },
                { label: "Trust", value: "100% Secure" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">{stat.label}</p>
                  <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5]">
              {/* Main Card - Recipe 12 Oval Mask Feel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden group"
              >
                <img 
                  src="https://mapplinks.com/wp-content/uploads/2020/06/screen1.png" 
                  alt="Sheun - Shopify Development and Growth Expert" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute bottom-16 left-12 right-12 space-y-6">
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-green text-green" />)}
                  </div>
                  <h3 className="text-white font-bold text-4xl tracking-tighter leading-none">Top Rated <br />Shopify Expert.</h3>
                  <p className="text-white/60 text-lg font-serif italic">Top Rated Shopify Specialist</p>
                  
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a href="https://www.linkedin.com/in/sheun-hub-26b876321" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-green hover:text-navy rounded-full text-white transition-all flex items-center justify-center overflow-hidden" title="LinkedIn">
                      <img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~017eb19011cd354946" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-green hover:text-navy rounded-full text-white transition-all flex items-center justify-center overflow-hidden" title="Upwork">
                      <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/upwork-icon.png" alt="Upwork" className="w-5 h-5 object-contain" />
                    </a>
                    <a href="mailto:sheunhost@gmail.com" className="p-2 bg-white/5 hover:bg-green hover:text-navy rounded-full text-white transition-all flex items-center justify-center overflow-hidden" title="Email">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-5 h-5 object-contain" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements - Hardware Feel Recipe 3 */}
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-1 hidden sm:block"
              >
                <div className="w-full h-full rounded-3xl bg-navy/60 flex flex-col items-center justify-center gap-6 border border-white/5">
                  <div className="w-20 h-20 bg-green/10 rounded-3xl flex items-center justify-center text-green shadow-inner">
                    <ShoppingCart size={40} />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-3xl tracking-tighter">+142%</p>
                    <p className="text-white/30 text-[10px] uppercase font-bold tracking-[0.3em] mt-1">Avg. ROI Increase</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-green to-transparent" />
        </div>
      </section>
    </ScrollReveal>

    {/* Credibility Bar */}
    <section className="py-12 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Shopify Partner", sub: "Verified & Certified", icon: ShieldCheck, color: "#10b981" },
            { label: "Upwork Top Rated", sub: "100% Success Rate", icon: Trophy, color: "#2563EB" },
            { label: "5.0 Star Expert", sub: "Loved By Merchants", icon: Star, color: "#F59E0B" },
            { label: "100% Satisfaction", sub: "Money-Back Guarantee", icon: CheckCircle2, color: "#09090b" }
          ].map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_-10px_rgba(0,0,0,0.05)] transition-all"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${badge.color}10`, color: badge.color }}
              >
                <badge.icon size={22} className={badge.icon === Star ? "fill-current" : ""} />
              </div>
              <div>
                <div className="font-bold text-[#0F172A] text-sm leading-tight font-sans">{badge.label}</div>
                <p className="text-[11px] text-[#71717a] font-medium mt-0.5">{badge.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Pain Points Section */}
    <ScrollReveal>
      <section className="py-32 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E2E8F0]">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F020_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2">
              <AlertTriangle size={14} className="text-[#F59E0B]" />
              The Reality of E-Commerce
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tighter">
              Is your Shopify store <br />
              <span className="text-[#10b981] underline decoration-[#10b981]/20 underline-offset-8 italic font-serif font-light">working for you?</span>
            </h2>
            <p className="text-[#71717a] text-lg sm:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
              Most Shopify stores fail not because the product is bad, but because the technical and user-experience foundation is weak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Your store is slow.", 
                desc: "Every second of load time reduces conversions by 7%. If your store takes more than 3 seconds to load, you are literally throwing money away and hurting search rankings.",
                icon: Zap,
                color: "#10b981",
                stat: "7% Loss",
                statLabel: "per second delay"
              },
              { 
                title: "Low conversion rate.", 
                desc: "Traffic is expensive. If you are getting visitors but no checkout conversions, your UI/UX is creating friction that stops prospective buyers from clicking 'Buy Now'.",
                icon: Target,
                color: "#2563EB",
                stat: "1.5% average",
                statLabel: "standard Shopify CRO"
              },
              { 
                title: "Broken layouts.", 
                desc: "A distorted image or a broken checkout button on mobile devices kills buyer trust instantly. Modern consumers do not buy from stores that look unprofessional.",
                icon: AlertCircle,
                color: "#EF4444",
                stat: "85% customers",
                statLabel: "abandon on broken design"
              },
              { 
                title: "No technical partner.", 
                desc: "Spending countless hours trying to fix complex Liquid code, app conflicts, or checkout errors yourself is a waste of your time. You should focus entirely on scaling.",
                icon: Code2,
                color: "#09090b",
                stat: "100% focused",
                statLabel: "on business growth"
              }
            ].map((point, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -4 }}
                className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E2E8F0] shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_-15px_rgba(9,9,11,0.08)] transition-all space-y-6 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${point.color}10`, color: point.color }}
                  >
                    <point.icon size={26} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#0F172A] font-mono">{point.stat}</div>
                    <div className="text-[10px] text-[#71717a] font-medium uppercase tracking-wider mt-0.5">{point.statLabel}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">{point.title}</h3>
                  <p className="text-[#71717a] text-sm leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
        <section className="py-32 bg-white relative overflow-hidden border-y border-navy/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <p className="text-green text-[10px] font-bold uppercase tracking-[0.3em]">Free Strategy Plan</p>
              <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight">
                Scale Your <span className="italic font-serif font-light text-navy/40">Sales</span>.
              </h2>
              <p className="text-navy/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Enter your store details below and I will personally review your site and send you a custom, 3-step action plan to increase your conversion rate.
              </p>
            </div>

            <div className="bg-light p-8 md:p-12 rounded-3xl shadow-xl border border-navy/5">
              {!planRequested ? (
                <form onSubmit={handlePlanRequest} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy ml-4">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe" 
                        className="w-full bg-white border-2 border-navy/5 rounded-full py-4 px-6 focus:border-green outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-navy ml-4">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="john@example.com" 
                        className={`w-full bg-white border-2 ${emailErrorPlan ? 'border-red-500' : 'border-navy/5'} rounded-full py-4 px-6 focus:border-green outline-none transition-all`}
                      />
                      {emailErrorPlan && <p className="text-red-500 text-xs ml-4">{emailErrorPlan}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-4">Store URL *</label>
                    <input 
                      type="text" 
                      name="store_url"
                      required
                      placeholder="yourstore.com" 
                      className="w-full bg-white border-2 border-navy/5 rounded-full py-4 px-6 focus:border-green outline-none transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isRequestingPlan}
                    className="w-full bg-navy text-white py-5 rounded-full font-bold text-lg hover:bg-green hover:text-navy transition-colors disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg"
                  >
                    {isRequestingPlan ? (
                      <>
                        <RefreshCw className="animate-spin" size={20} />
                        Creating your request...
                      </>
                    ) : (
                      <>
                        <Zap size={20} />
                        Get My Free Growth Plan
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-navy/40 mt-4 flex justify-center items-center gap-2">
                    <Lock size={12} /> 100% Secure. No spam, ever.
                  </p>
                </form>
              ) : (
                <div className="text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} className="text-green" />
                  </div>
                  <h3 className="text-3xl font-bold text-navy tracking-tight">Congratulations! Request Received!</h3>
                  <p className="text-navy/60 text-lg max-w-md mx-auto leading-relaxed">
                    Your form was submitted. You will receive a message with further steps from <span className="font-bold">sheunhost@gmail.com</span> shortly. We will review your store and email your custom Growth Plan within 24-48 hours. Let's scale your brand!
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-navy p-10 md:p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 translate-y-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <TrendingUp size={150} className="text-green" />
               </div>
              <div className="space-y-4 text-center md:text-left relative z-10">
                <h3 className="text-3xl font-bold text-white tracking-tight">Want to talk immediately?</h3>
                <p className="text-white/60 text-lg max-w-lg font-serif italic">
                  Skip the line and book a free 1-on-1 strategy call with us to discuss your custom store build.
                </p>
              </div>
              <button onClick={openCalendlyPopup} className="shrink-0 relative z-10 bg-green text-navy px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow flex items-center gap-3 w-full md:w-auto justify-center cursor-pointer">
                Book Strategy Call <ArrowRight size={20} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </ScrollReveal>

    <ImpactMetrics />

    {/* Credibility & Comparison Section */}
    <ScrollReveal>
      <section className="py-32 bg-white relative overflow-hidden border-b border-[#E2E8F0]">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F015_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 -z-10"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] border border-[#E2E8F0] text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-2">
              The Comparison
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tighter">
              Why brands choose <br />
              <span className="text-[#10b981] underline decoration-[#10b981]/20 underline-offset-8 italic font-serif font-light">Sheun over Agencies.</span>
            </h2>
            <p className="text-[#71717a] text-lg sm:text-xl font-serif italic leading-relaxed">
              Finding the "best Shopify developer" shouldn't mean paying agency overheads or gambling on cheap, unreliable freelancers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Cheap Freelancer */}
            <div className="p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC]/60 space-y-8 flex flex-col opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:border-red-200 transition-all duration-300">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#71717a]">Option 01</span>
                <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">Generic Freelancer</h3>
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest">Low Cost, High Risk</p>
              </div>
              <ul className="space-y-4 flex-grow border-t border-[#E2E8F0] pt-6">
                <li className="flex items-start gap-3 text-[#71717a] text-sm leading-relaxed">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  Language & communication barriers
                </li>
                <li className="flex items-start gap-3 text-[#71717a] text-sm leading-relaxed">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  Cookie-cutter, generic template stores
                </li>
                <li className="flex items-start gap-3 text-[#71717a] text-sm leading-relaxed">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  Unreliable timelines, delays & ghosting
                </li>
                <li className="flex items-start gap-3 text-[#71717a] text-sm leading-relaxed">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  No understanding of commercial conversion strategy
                </li>
              </ul>
              <div className="pt-6 border-t border-[#E2E8F0]">
                <p className="text-[#71717a] font-bold text-xs uppercase tracking-wider">Hidden Cost: <span className="text-red-500 font-mono">Broken Stores</span></p>
              </div>
            </div>

            {/* Sheun (The Expert) */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#09090b] text-white space-y-8 flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.15)] scale-105 z-10 border border-green/30">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#10b981] text-[#09090b] text-[10px] font-bold uppercase tracking-[0.25em] px-6 py-2 rounded-full shadow-lg">
                Most Reliable Choice
              </div>
              {/* Internal dotted background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(16,185,129,0.15)_1px,transparent_1px)] bg-[size:16px_16px] rounded-3xl pointer-events-none"></div>

              <div className="space-y-2 relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-green">Partner Option</span>
                <h3 className="text-3xl font-bold text-white tracking-tight">Sheun Hub</h3>
                <p className="text-[#10b981] text-xs font-bold uppercase tracking-widest">Professional Shopify Partner</p>
              </div>
              <ul className="space-y-4 flex-grow border-t border-white/10 pt-6 relative z-10">
                <li className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                  Direct partnership with a certified remote specialist
                </li>
                <li className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                  Bespoke Liquid coding, zero theme-bloat & technical SEO
                </li>
                <li className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                  Strategic focus on conversion metrics & commercial growth
                </li>
                <li className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                  Transparent project cost structures without agency bloat
                </li>
                <li className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                  <CheckCircle2 size={18} className="text-[#10b981] shrink-0 mt-0.5" />
                  Highly proactive, clear, and direct communications
                </li>
              </ul>
              <div className="pt-6 border-t border-white/10 relative z-10">
                <p className="text-white/80 font-bold text-xs uppercase tracking-wider">Result: <span className="text-[#10b981] font-mono">Profitable Scaled Store</span></p>
              </div>
            </div>

            {/* Big Agency */}
            <div className="p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC]/60 space-y-8 flex flex-col opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:border-red-200 transition-all duration-300">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#71717a]">Option 02</span>
                <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">Big Digital Agency</h3>
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest">High Cost, Low Attention</p>
              </div>
              <ul className="space-y-4 flex-grow border-t border-[#E2E8F0] pt-6">
                <li className="flex items-start gap-3 text-[#71717a] text-sm leading-relaxed">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  $5k+ minimum project setup & monthly retainers
                </li>
                <li className="flex items-start gap-3 text-[#71717a] text-sm leading-relaxed">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  Your project is outsourced to junior developers/interns
                </li>
                <li className="flex items-start gap-3 text-[#71717a] text-sm leading-relaxed">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  Overwhelming bureaucracy & slow ticket-system responses
                </li>
                <li className="flex items-start gap-3 text-[#71717a] text-sm leading-relaxed">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  You're treated as just another ticket in their queue
                </li>
              </ul>
              <div className="pt-6 border-t border-[#E2E8F0]">
                <p className="text-[#71717a] font-bold text-xs uppercase tracking-wider">Hidden Cost: <span className="text-red-500 font-mono">Inefficiency</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Services Preview - Visible Grid Recipe */}
    <ScrollReveal>
      <section className="py-32 bg-navy-gradient relative" id="services">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="space-y-6">
              <p className="text-green text-[10px] font-bold uppercase tracking-[0.4em]">Expertise</p>
              <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85]">
                Crafting <span className="italic font-serif font-light text-white/40">Digital</span><br />
                Commerce.
              </h2>
            </div>
            <Link to="/services" className="group flex items-center gap-4 text-white font-bold text-lg">
              View All Services <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-green group-hover:text-navy transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {[
              {
                title: "Store Setup",
                desc: "Launch your brand instantly with a high-converting, deeply optimized Shopify store designed to maximize sales from day one.",
                fullDesc: "Launch your brand with a professional, high-converting Shopify store. We handle everything from theme selection and customization to essential app integrations and payment gateway setup.",
                icon: ShoppingBag,
                tags: ["Dropshipping", "Branding", "Launch"],
                timeline: "1-2 Weeks",
                price: "$999",
                roadmap: [
                  { title: "Discovery & Strategy", desc: "Understanding your products, niche, and target audience." },
                  { title: "Theme Selection & Branding", desc: "Choosing the right foundation and applying your visual identity." },
                  { title: "Store Configuration", desc: "Setting up shipping, taxes, payments, and essential apps." },
                  { title: "Product Import & SEO", desc: "Optimizing product data for search engines and conversions." },
                  { title: "Testing & Launch", desc: "Rigorous quality checks before going live to the world." }
                ]
              },
              {
                title: "Custom Dev",
                desc: "Increase conversion rates with bespoke features, custom checkout logic, and lightning-fast custom Liquid coding.",
                fullDesc: "Go beyond standard theme limitationsWe build custom Liquid sections, unique product page features, and complex logic that sets your store apart from the competition.",
                icon: Code2,
                tags: ["Liquid", "API", "Performance"],
                timeline: "2-4 Weeks",
                price: "$1,499",
                roadmap: [
                  { title: "Technical Audit", desc: "Reviewing your current code and identifying bottlenecks." },
                  { title: "Feature Scoping", desc: "Defining the exact functionality and user experience." },
                  { title: "Development Phase", desc: "Writing clean, efficient Liquid and JavaScript code." },
                  { title: "Integration & Testing", desc: "Ensuring custom features work seamlessly with your apps." },
                  { title: "Deployment", desc: "Pushing changes to your live store with zero downtime." }
                ]
              },
              {
                title: "Migrations",
                desc: "Safely upgrade to Shopify with absolutely zero downtime, preserving your hard-earned SEO rankings and customer data.",
                fullDesc: "Switching platforms shouldn't be scaryWe ensure a 100% safe migration of your products, customers, orders, and most importantly, your SEO rankings.",
                icon: Zap,

                tags: ["Data", "SEO", "Zero Downtime"],
                timeline: "2-3 Weeks",
                price: "$1,999",
                roadmap: [
                  { title: "Data Mapping", desc: "Planning how data from your old platform fits into Shopify." },
                  { title: "Migration Setup", desc: "Configuring secure data transfer protocols." },
                  { title: "Transfer & Validation", desc: "Moving data and verifying every single record." },
                  { title: "SEO Preservation", desc: "Setting up 301 redirects to keep your Google rankings." },
                  { title: "Final Cutover", desc: "Switching your domain and launching on Shopify." }
                ]
              }
            ].map((service, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedService(service);
                }}
                className="p-6 md:p-8 lg:p-12 bg-navy space-y-6 md:space-y-10 group hover:bg-white/[0.02] transition-all cursor-pointer text-center w-full block border-r border-b border-white/5 flex flex-col items-center overflow-hidden"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-green group-hover:scale-110 transition-transform duration-500 mx-auto transform-gpu">
                  <service.icon size={32} />
                </div>
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold text-white tracking-tight line-clamp-1">{service.title}</h3>
                  <p className="text-[clamp(1rem,1.5vw,1.125rem)] text-white/40 leading-relaxed font-light font-serif italic line-clamp-3">{service.desc}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 pt-6 md:pt-8 border-t border-white/5 w-full">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-[0.2em] text-green bg-green/10 px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>

      {/* Testimonials Slider */}
      <ScrollReveal>
        <section className="py-32 bg-light relative overflow-hidden border-t border-navy/5">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Quote size={100} />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-6 mb-16">
            <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.3em]">Client Success</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
              Trusted by <span className="italic font-serif font-light text-navy/40">Founders</span>.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-navy/5 flex flex-col md:flex-row items-center gap-8"
              >
                <div className="shrink-0 relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md relative z-10">
                    <img 
                      src={testimonials[testimonialIndex].image} 
                      alt={testimonials[testimonialIndex].name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green text-navy rounded-full flex items-center justify-center shadow z-20">
                    <Quote size={10} />
                  </div>
                </div>

                <div className="space-y-4 flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1">
                    {[...Array(testimonials[testimonialIndex].rating || 5)].map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" className="text-[#FFC107]" />
                    ))}
                  </div>
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <p className="text-navy/70 font-serif italic text-lg md:text-xl leading-relaxed transition-all duration-300">
                      "{isTestimonialExpanded || testimonials[testimonialIndex].content.length <= 150 
                        ? testimonials[testimonialIndex].content 
                        : `${testimonials[testimonialIndex].content.slice(0, 150)}...`}"
                    </p>
                    {testimonials[testimonialIndex].content.length > 150 && (
                      <button 
                        onClick={() => setIsTestimonialExpanded(!isTestimonialExpanded)}
                        className="text-navy font-bold text-sm tracking-wide hover:text-green transition-colors mt-2 underline decoration-green decoration-2 underline-offset-4"
                      >
                        {isTestimonialExpanded ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                  <div>
                    <h3 className="text-navy font-bold text-lg">{testimonials[testimonialIndex].name}</h3>
                    <p className="text-navy/40 text-xs uppercase tracking-widest mt-1">{testimonials[testimonialIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-6 mt-10">
              <button 
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-white border border-navy/10 flex items-center justify-center text-navy hover:bg-green hover:border-green transition-all shadow-lg hover:scale-105"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === testimonialIndex ? 'w-8 bg-green' : 'w-2 bg-navy/10 hover:bg-navy/30'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-white border border-navy/10 flex items-center justify-center text-navy hover:bg-green hover:border-green transition-all shadow-lg hover:scale-105"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Portfolio Preview - Bento Grid */}
    <ScrollReveal>
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-24">
            <h2 className="text-5xl md:text-8xl font-bold text-navy tracking-tighter leading-[0.85]">
              Selected <span className="italic font-serif font-light text-navy/40">Works</span>.
            </h2>
            <Link to="/portfolio" className="group flex items-center gap-4 text-navy font-bold text-lg">
              View All Projects
              <div className="w-12 h-12 rounded-full border border-navy/10 flex items-center justify-center group-hover:bg-navy group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {[
              {
                title: "Beauty",
                category: "Beauty & Skincare",
                image: "https://www.chesterwellnesscentre.co.uk/wp-content/uploads/2023/08/Essentials-of-Skin-Care.jpg",
                col: "md:col-span-8",
                height: "h-[700px]"
              },
              {
                title: "PET",
                category: "Pet Supplies",
                image: "https://m.media-amazon.com/images/we/81Ei5upG6ZL._AC_UF1000,1000_QL80_.jpg",
                col: "md:col-span-4",
                height: "h-[700px]"
              },
              {
                title: "Gadgets",
                category: "Gadgets",
                image: "https://miro.medium.com/0*G29d-grLDSv2GyEc.jpg",
                col: "md:col-span-12",
                height: "h-[500px]"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={cn(item.col)}
              >
                <TiltCard depth={15} className="h-full">
                  <div className={cn("relative group overflow-hidden rounded-3xl cursor-pointer p-8 flex flex-col justify-end w-full", item.height)}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="relative z-10 flex items-end justify-between w-full">
                      <div className="space-y-4">
                        <p className="text-green text-[10px] font-bold uppercase tracking-[0.4em]">{item.category}</p>
                        <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-white tracking-tight line-clamp-1">{item.title}</h3>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shrink-0">
                        <ArrowRight size={24} className="-rotate-45" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Call to Action Section */}
    <ScrollReveal>
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Ready to scale <br />
              <span className="text-green italic font-serif font-light">Your Shopify store?</span>
            </h2>
            <p className="text-white/60 text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
              Join the high-performing brands that have transformed their e-commerce presence with bespoke development and strategic growth.
            </p>
            <div className="pt-8">
              <Link to="/apply" className="inline-flex items-center gap-3 bg-green text-navy font-bold px-12 py-6 rounded-full hover:scale-105 transition-transform text-lg shadow-2xl">
                Apply for Growth Plan <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Why Partner With Us */}
    <ScrollReveal>
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                The Sheun Hub <br />
                <span className="text-green italic font-serif font-light">Advantage</span>.
              </h2>
              <p className="text-white/60 text-xl max-w-lg leading-relaxed font-serif italic">
                We don't just build stores; we build profitable eCommerce systems. Combining deep technical expertise with conversion rate psychology.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  { title: "Custom Liquid Mastery", desc: "No cookie-cutter templates. Features coded purely for your brand's unique needs." },
                  { title: "Speed Obsessive", desc: "Ultra-fast load times mathematically proven to increase conversion rates." },
                  { title: "Direct Communication", desc: "No middle-men or project managers. You work directly with the technical architect." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-green mt-1">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/40 leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="Shopify Growth Developer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/50 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-green text-navy p-10 rounded-2xl shadow-2xl border-4 border-navy border-t-0 animate-bounce-slow">
                <p className="text-6xl font-bold tracking-tighter mb-2">100%</p>
                <p className="text-xs uppercase font-bold tracking-widest opacity-80">Job Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* Contact Section - Visible Grid Style */}
    <ScrollReveal>
      <section className="py-32 bg-white relative overflow-hidden" id="contact">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.3em]">Contact</p>
                <h2 className="text-5xl md:text-7xl font-bold text-navy tracking-tight leading-none">
                  Let's Start <br />
                  <span className="italic font-serif font-light text-navy/40">Your Project</span>.
                </h2>
                <p className="text-navy/60 text-xl leading-relaxed max-w-md">
                  Ready to transform your eCommerce presence? Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: "gmail", label: "Email", value: "sheunhost@gmail.com" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group text-center sm:text-left">
                    <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-navy transition-all shrink-0 overflow-hidden">
                      {item.icon === "whatsapp" ? (
                        <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
                      ) : (
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-6 h-6 object-contain" />
                      )}
                    </div>
                    <div className="min-w-0 flex-grow">
                      <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold text-navy break-all break-words">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-10 bg-navy text-white rounded-2xl space-y-6 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap size={100} className="text-green" />
                </div>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-bold">Free Growth Plan</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Not sure what your store needsWe'll provide a comprehensive review of your speed, design, and SEO — completely free.
                  </p>
                  <Link to="/contact#contact-form" className="inline-flex items-center gap-2 text-green font-bold text-sm border-b border-green/20 pb-1 hover:border-green transition-all">
                    Claim Your Growth Plan <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-light p-10 md:p-16 rounded-3xl border border-navy/5 shadow-sm">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form 
                      key="home-contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onSubmit={handleSubmit} 
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest ml-4">Full Name</label>
                          <input
                            required
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            className="w-full bg-white border-b-2 border-navy/5 rounded-3xl py-5 px-8 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest ml-4">Email Address</label>
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            className={`w-full bg-white border-b-2 ${emailErrorContact ? 'border-red-500' : 'border-navy/5'} rounded-3xl py-5 px-8 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20`}
                          />
                          {emailErrorContact && <p className="text-red-500 text-xs ml-4">{emailErrorContact}</p>}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest ml-4">Project Type</label>
                        <div className="relative">
                          <select name="project_type" className="w-full bg-white border-b-2 border-navy/5 rounded-3xl py-5 px-8 focus:border-green outline-none transition-all appearance-none font-medium text-navy">
                            <option>New Store Build</option>
                            <option>Dropshipping Store</option>
                            <option>Shopify Migration Service</option>
                            <option>Theme Redesign</option>
                            <option>Bug Fix</option>
                            <option>Free Growth Plan</option>
                          </select>
                          <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 text-navy/20 pointer-events-none" size={20} />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest ml-4">Message</label>
                        <textarea
                          required
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project goals..."
                          className="w-full bg-white border-b-2 border-navy/5 rounded-2xl py-6 px-8 focus:border-green outline-none transition-all resize-none font-medium text-navy placeholder:text-navy/20"
                        />
                      </div>

                      <button
                        disabled={isSubmitting}
                        className="w-full bg-navy text-white py-6 rounded-full font-bold text-lg hover:bg-navy/90 transition-all flex items-center justify-center gap-4 group shadow-xl"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="home-contact-success"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="text-center py-12 space-y-8"
                    >
                      <div className="w-24 h-24 bg-green text-navy rounded-2xl flex items-center justify-center mx-auto shadow-xl rotate-3">
                        <CheckCircle2 size={48} />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl lg:text-4xl font-bold text-navy uppercase tracking-tight">Congratulations! Message Received.</h3>
                        <p className="text-navy/60 text-lg max-w-sm mx-auto leading-relaxed">
                          Your message has been submitted. A response will be sent to you through <span className="font-bold">sheunhost@gmail.com</span> shortly. We'll review your inquiry and get back to you personally within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="text-navy font-bold border-b-2 border-green pb-1 hover:text-green transition-colors"
                      >
                        Send another message
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

    {/* Newsletter Section */}
    <ScrollReveal>
      <section className="py-24 bg-light relative overflow-hidden border-y border-navy/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-10 md:p-16 shadow-xl border border-navy/5 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green/10 text-green rounded-2xl mb-2 overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/960px-Gmail_icon_%282020%29.svg.png?_=20221017173631" alt="Gmail" className="w-8 h-8 object-contain" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
                Join the <span className="italic font-serif font-light text-navy/40">Newsletter</span>
              </h2>
              <p className="text-navy/60 text-lg">
                Get weekly tips on Shopify growth, conversion rate optimization, and eCommerce strategies.
              </p>
            </div>
            <div className="flex-1 w-full">
              <AnimatePresence mode="wait">
                {!isSubscribeSuccess ? (
                  <motion.form 
                    key="newsletter-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubscribe} 
                    className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-0"
                  >
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Enter your email address" 
                      className={`w-full bg-light border-2 ${emailErrorSubscribe ? 'border-red-500' : 'border-navy/5'} rounded-full py-6 pl-8 pr-8 sm:pr-40 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20`}
                    />
                    {emailErrorSubscribe && <p className="absolute -bottom-6 left-8 text-red-500 text-xs">{emailErrorSubscribe}</p>}
                    <button 
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full sm:w-auto sm:absolute sm:right-3 bg-navy text-white px-8 py-4 sm:py-4 rounded-full font-bold hover:bg-green hover:text-navy transition-colors disabled:opacity-50 min-h-[60px]"
                    >
                      {isSubscribing ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="newsletter-success"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="bg-green/10 border border-green/20 rounded-2xl p-8 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-green text-navy rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-navy font-bold text-xl uppercase tracking-tighter">Congratulations! You're in!</p>
                      <p className="text-navy/60 font-serif italic">Your subscription is successful. A confirmation message from <span className="font-bold">sheunhost@gmail.com</span> will hit your inbox shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest mt-4 text-center md:text-left">
                100% Privacy. We respect your data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* CTA Banner - Recipe 2 */}
    <ScrollReveal>
      <section className="py-48 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-green/5 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto space-y-16"
          >
            <h2 className="text-5xl md:text-[160px] font-bold text-white leading-[0.8] tracking-[-0.06em] uppercase">
              Ready to <span className="text-green italic font-serif font-light lowercase">Grow?</span>
            </h2>
            <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic">
              Let's build a store that doesn't just look good, but converts visitors into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <Link to="/contact#contact-form" className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 green-glow flex items-center justify-center text-center">
                Get Your Free Growth Plan
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto text-white font-bold text-2xl flex items-center justify-center gap-6 group text-center">
                View Portfolio <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-green transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  </PageWrapper>
  );
}
