import { motion } from "framer-motion";
import { ArrowRight, Star, ShoppingBag, Globe, Trophy, CheckCircle2, Layout, RefreshCw, ShoppingCart, Palette, ExternalLink, Zap, Code2, Rocket, MessageSquare, Send, Mail, MessageCircle, ChevronDown, Quote, TrendingUp, Target, AlertCircle, BarChart3, Search, Lightbulb, Info, AlertTriangle, X, Clock, DollarSign, ListChecks, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { GoogleGenAI } from "@google/genai";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { cn, openCalendlyPopup } from "../lib/utils";
import ImageGen from "../components/ImageGen";

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
    title: "Store Migration",
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
    content: "Sheun completely transformed our Shopify store. Our conversion rate doubled in the first month after the redesign!",
    image: "https://picsum.photos/seed/sarah/100/100",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "CEO, TechHaven",
    content: "The migration from WooCommerce to Shopify was flawless. We didn't lose a single order during the transition.",
    image: "https://picsum.photos/seed/marcus/100/100",
    rating: 5
  },
  {
    name: "Emma Roberts",
    role: "Owner, Style Boutique",
    content: "Incredible attention to detail and lightning-fast communication. The custom theme perfectly captures our brand vibe.",
    image: "https://picsum.photos/seed/emma/100/100",
    rating: 5
  },
  {
    name: "David Miller",
    role: "Director, Urban Gear",
    content: "The SEO audit alone was worth it. We've seen a 40% increase in organic traffic within just 3 weeks.",
    image: "https://picsum.photos/seed/david/100/100",
    rating: 5
  },
  {
    name: "Lisa Wong",
    role: "Founder, PetPalace",
    content: "Sheun is a Liquid genius. He built custom features that we thought were impossible on Shopify.",
    image: "https://picsum.photos/seed/lisa/100/100",
    rating: 5
  }
];

const SEOReport = ({ data }: { data: any }) => {
  if (!data) return null;
  
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      {/* Summary Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-navy p-8 rounded-[40px] text-white space-y-4 relative overflow-hidden">
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
        <div className="bg-green p-8 rounded-[40px] flex flex-col items-center justify-center text-center space-y-2 shadow-xl shadow-green/20">
           <p className="text-navy/60 text-[10px] font-bold uppercase tracking-widest">SEO Score</p>
           <p className="text-7xl font-black text-navy tracking-tighter">{data.store_summary.current_seo_score}</p>
           <Trophy className="text-navy/20" size={40} />
        </div>
      </div>

      {/* Biggest Opportunity */}
      <div className="bg-navy/5 border-2 border-green/20 p-8 rounded-[40px] flex items-start gap-6 group hover:bg-green/5 transition-colors">
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
        <div className="bg-navy p-8 rounded-[40px] space-y-6 shadow-2xl">
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
          <div className="bg-navy p-8 md:p-12 rounded-[40px] text-white relative overflow-hidden">
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
        className="relative w-full max-w-4xl bg-white rounded-[40px] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribeSuccess, setIsSubscribeSuccess] = useState(false);

  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleAuditSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAuditing(true);
    setAuditResult(null);

    const formData = new FormData(e.currentTarget);
    const storeUrl = formData.get("storeUrl") as string;
    const competitorUrl = formData.get("competitorUrl") as string;
    const niche = formData.get("niche") as string;

    try {
      console.log("SEO Audit: Starting...");
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.error("SEO Audit: Missing API Key");
        throw new Error("API Key is missing. Please configure it in the Secrets panel in the bottom left settings menu.");
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `
You are an elite Shopify SEO strategist. Perform a deep SEO audit for this store:
- Store URL: ${storeUrl}
- Competitor URL: ${competitorUrl || "None"}
- Niche: ${niche}

Analyze the niche and provide:
1. A store summary with a score (e.g. 75/100).
2. 10 primary keywords with volume, difficulty, and intent.
3. 5 long-tail keywords.
4. 3 critical SEO gaps.
5. 3 quick wins.
6. IF a competitor URL is provided, perform a targeted gap analysis and provide a strategy to outrank them.

Return ONLY valid JSON.

{
  "store_summary": {
    "store_url": "${storeUrl}",
    "detected_niche": "${niche}",
    "target_audience": "...",
    "current_seo_score": "...",
    "seo_score_reason": "...",
    "biggest_opportunity": "..."
  },
  "keywords": [{"keyword": "...", "volume": "...", "difficulty": "...", "intent": "...", "where_to_use": "...", "why_it_works": "..."}],
  "longtail": [{"keyword": "...", "intent": "...", "conversion_potential": "...", "where_to_place": "...", "why_it_converts": "..."}],
  "seo_gaps": [{"problem": "...", "location": "...", "fix": "..."}],
  "quick_wins": [{"action": "...", "where": "...", "impact": "..."}],
  "competitor_analysis": {
    "gaps": [{"title": "...", "description": "..."}],
    "outrank_strategy": [{"title": "...", "description": "..."}]
  }
}
      `;

      console.log("SEO Audit: Calling Gemini API...");
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      console.log("SEO Audit: Response received");
      let text = response.text || "{}";
      
      if (text.startsWith("\`\`\`json")) {
        text = text.replace(/^\`\`\`json\n/, "").replace(/\n\`\`\`$/, "");
      } else if (text.startsWith("\`\`\`")) {
        text = text.replace(/^\`\`\`\n/, "").replace(/\n\`\`\`$/, "");
      }

      try {
        const jsonResponse = JSON.parse(text);
        setAuditResult(jsonResponse);
      } catch (parseError) {
        console.error("Failed to parse Gemini response as JSON:", text);
        throw new Error("Failed to generate a valid SEO report. Please try again.");
      }
    } catch (error: any) {
      console.error("Error running SEO audit:", error);
      setAuditResult(null);
      // Log error instead of alert
      console.error("SEO Audit Error:", error.message || "Something went wrong");
    } finally {
      setIsAuditing(false);
    }
  };

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
    const form = e.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    formData.append("subject", "New Newsletter Subscriber");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubscribeSuccess(true);
        form.reset();
        setTimeout(() => setIsSubscribeSuccess(false), 5000);
      } else {
        console.error("Error submitting form", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
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
      title="Home" 
      description="Professional Shopify Expert & eCommerce Developer. High-converting store builds, theme customization, and strategic eCommerce growth."
      canonical="/"
    >
      {/* Hero Section */}
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

              <h1 className="text-6xl md:text-[118px] font-bold text-white leading-[0.8] tracking-[-0.05em] text-balance">
                <span className="block mb-4">
                  <motion.span
                    key="headline-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Shopify
                  </motion.span>
                  {" "}
                  <motion.span
                    key="headline-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-green"
                  >
                    Expert
                  </motion.span>
                </span>
                <motion.span 
                  className="text-white italic font-serif font-light opacity-40 block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.4, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Sheun Hub.
                </motion.span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                {[
                  { title: "Store Setup", desc: "Launch with precision." },
                  { title: "Conversion", desc: "Turn visitors into buyers." },
                  { title: "Migration", desc: "Seamless platform moves." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl"
                  >
                    <h4 className="text-green text-sm font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-white/40 text-xs italic font-serif">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

                <p className="text-white/60 text-xl md:text-2xl max-w-xl leading-relaxed font-light font-serif italic">
                  I am Sheun, the expert behind Sheun Hub. I help startup brands launch and scale on Shopify with high-converting stores and technical excellence.
                </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <button onClick={openCalendlyPopup} className="w-full sm:w-auto bg-green text-navy px-12 py-6 rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 green-glow flex items-center justify-center gap-3 text-center">
                Book a 15-Minute Strategy Audit <ArrowRight size={20} />
              </button>
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
                { label: "Upwork", value: "Top Rated" },
                { label: "Rating", value: "5.0/5" },
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
                className="absolute inset-0 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[80px] shadow-2xl overflow-hidden group"
              >
                <img 
                  src="https://mapplinks.com/wp-content/uploads/2020/06/screen1.png" 
                  alt="Shopify Dashboard" 
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
                  <p className="text-white/60 text-lg font-serif italic">Top Rated Upwork Freelancer</p>
                </div>
              </motion.div>

              {/* Floating Elements - Hardware Feel Recipe 3 */}
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[50px] shadow-2xl p-1 hidden sm:block"
              >
                <div className="w-full h-full rounded-[48px] bg-navy/60 flex flex-col items-center justify-center gap-6 border border-white/5">
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

      {/* 2 Sub-banners Section */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative h-[400px] bg-white/5 border border-white/10 rounded-[60px] overflow-hidden p-12 flex flex-col justify-end"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                <Rocket size={200} className="text-green" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">Scale Fast.</h3>
              <p className="text-white/40 text-lg font-serif italic mb-8">From zero to launch in record time without compromising technical depth.</p>
              <Link to="/apply#apply-form" className="inline-flex items-center gap-4 text-green font-bold group">
                Get Custom Project Roadmap <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative h-[400px] bg-green text-navy rounded-[60px] overflow-hidden p-12 flex flex-col justify-end"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                <Target size={200} className="text-navy" />
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tight">Convert More.</h3>
              <p className="text-navy/60 text-lg font-serif italic mb-8">Data-driven design that turns passive scrollers into long-term brand advocates.</p>
              <Link to="/services" className="inline-flex items-center gap-4 font-bold group">
                View Strategies <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

{/* Services Preview - Visible Grid Recipe */}
      <section className="py-32 bg-navy-gradient relative" id="services">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="space-y-6">
              <p className="text-green text-[10px] font-bold uppercase tracking-[0.4em]">Expertise</p>
              <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85]">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
            {[
              {
                title: "Store Setup",
                desc: "End-to-end Shopify store creation with premium themes and custom branding.",
                fullDesc: "Launch your brand with a professional, high-converting Shopify store. I handle everything from theme selection and customization to essential app integrations and payment gateway setup.",
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
                desc: "Bespoke Liquid coding, custom features, and complex app integrations.",
                fullDesc: "Go beyond standard theme limitations. I build custom Liquid sections, unique product page features, and complex logic that sets your store apart from the competition.",
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
                desc: "Seamlessly move your store from WooCommerce, Magento, or Etsy to Shopify.",
                fullDesc: "Switching platforms shouldn't be scary. I ensure a 100% safe migration of your products, customers, orders, and most importantly, your SEO rankings.",
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
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  console.log("Service clicked:", service.title);
                  setSelectedService(service);
                }}
                className="p-12 bg-navy space-y-10 group hover:bg-white/[0.02] transition-all cursor-pointer text-center w-full block border-r border-b border-white/5 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-green group-hover:scale-110 transition-transform duration-500 mx-auto">
                  <service.icon size={32} />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white tracking-tight line-clamp-1">{service.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed font-light font-serif italic line-clamp-2">{service.desc}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 pt-8 border-t border-white/5 w-full">
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

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>

      {/* Narrative Section - The Methodology */}
      <section className="py-32 bg-light relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-none">
                More Than Code. <br />
                <span className="text-green italic font-serif font-light">Strategy In Action.</span>
              </h2>
              <div className="w-16 h-1 bg-green mx-auto" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-xl md:text-2xl text-navy/70 font-serif italic leading-relaxed"
            >
              <p>
                At Sheun Hub, we believe that a Shopify store is not just a digital catalog, but a high-performance engine for business growth. Every pixel we place and every line of Liquid we write is interrogated for its impact on your bottom line. 
              </p>
              <p>
                Our approach bridges the gap between raw technical capability and sophisticated marketing psychology. We don't just build stores; we create immersive brand experiences that foster trust, drive velocity, and turn casual visitors into loyal, long-term advocates for your vision.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By - Logo Bar */}
      <section className="py-20 bg-white border-b border-navy/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-navy/40">Trusted by brands on</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
              {["Shopify", "WooCommerce", "Magento", "Wix", "Squarespace"].map((brand) => (
                <span key={brand} className="text-2xl md:text-3xl font-black tracking-tighter text-navy">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker - Recipe 5 */}
      <div className="bg-navy border-y border-white/5 py-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap animate-marquee items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              {[
                "Shopify Plus Expert",
                "Conversion Focused",
                "Custom Liquid Dev",
                "Dropshipping Specialist",
                "Store Migrations",
                "SEO Optimized",
              ].map((text, j) => (
                <div key={j} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green rounded-full shadow-[0_0_10px_rgba(0,229,160,0.5)]" />
                  <span className="text-white/40 text-2xl font-bold uppercase tracking-widest">{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Me - Premium Features */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.4em]">The Difference</p>
                <h2 className="text-6xl md:text-8xl font-bold text-navy tracking-tighter leading-[0.85]">
                  Why Work <br />
                  <span className="italic font-serif font-light text-navy/40">With Me</span>.
                </h2>
                <p className="text-navy/60 text-xl leading-relaxed max-w-xl font-serif italic">
                  I don't just build stores; I build business assets. My approach combines technical precision with conversion-focused strategy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  { title: "Conversion First", desc: "Every design decision is made to turn visitors into customers.", icon: Rocket },
                  { title: "Liquid Expert", desc: "Deep technical knowledge to push Shopify beyond its limits.", icon: Code2 },
                  { title: "Speed Optimized", desc: "Lightning-fast stores that rank higher and convert better.", icon: Zap },
                  { title: "Global Partner", desc: "Trusted by store owners across the US, UK, and Europe.", icon: Globe },
                ].map((item, i) => (
                  <div key={i} className="space-y-4 group">
                    <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-navy transition-all duration-500">
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-navy">{item.title}</h4>
                    <p className="text-navy/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10 aspect-square rounded-[80px] overflow-hidden border-[20px] border-light shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Shopify Store Concept" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-navy/10" />
              </motion.div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-green/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

            {/* AI Store Visualizer Tool */}
      <ImageGen />

      {/* Portfolio Preview - Bento Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-24">
            <h2 className="text-6xl md:text-8xl font-bold text-navy tracking-tighter leading-[0.85]">
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
                image: "https://m.media-amazon.com/images/I/81Ei5upG6ZL._AC_UF1000,1000_QL80_.jpg",
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
                transition={{ delay: i * 0.2 }}
                className={cn("relative group overflow-hidden rounded-[60px] cursor-pointer", item.col, item.height)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
                  <div className="space-y-4">
                    <p className="text-green text-[10px] font-bold uppercase tracking-[0.4em]">{item.category}</p>
                    <h3 className="text-4xl font-bold text-white tracking-tight line-clamp-1">{item.title}</h3>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <ArrowRight size={24} className="-rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Niche Specializations */}
      <section className="py-32 bg-navy overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
            <p className="text-green text-[10px] font-bold uppercase tracking-[0.3em]">Specializations</p>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Focus <span className="italic font-serif font-light text-white/60">Areas</span>.</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {niches.map((niche, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative h-[500px] rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl"
              >
                <img
                  src={niche.image}
                  alt={niche.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <h3 className="text-3xl font-bold text-white mb-4 line-clamp-1">{niche.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 line-clamp-2">
                    {niche.desc}
                  </p>
                  <div className="h-1 w-0 bg-green mt-6 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Social Proof - Recipe 8 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.3em]">The Numbers</p>
                <h2 className="text-5xl font-bold text-navy tracking-tight">Proven <br />Results.</h2>
              </div>
              <div className="grid grid-cols-2 gap-12">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-5xl font-bold text-navy">{stat.value}</p>
                    <p className="text-navy/40 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-light p-12 rounded-[40px] border border-navy/5 flex flex-col items-center text-center space-y-8 shadow-xl">
              <div className="w-32 h-32 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/bed47882db24771238091456bc69a699-1765207538189/19e070ae-9c29-498b-ac69-01114e131e68.png" 
                  alt="Sheun" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                  loading="lazy" 
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-navy">Sheun</h4>
                <p className="text-green text-xs font-bold uppercase tracking-[0.2em]">Top Rated Shopify Expert</p>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-green text-green" />)}
              </div>
              <p className="text-navy/60 text-sm italic">"Sheun is a true professional. He transformed our store's conversion rate overnight."</p>
              <a 
                href="https://upwork.com/freelancers/sheun_hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-navy/90 transition-all shadow-lg text-center block"
              >
                View Upwork Profile
              </a>
            </div>

            <div className="space-y-8">
              <div className="bg-green/5 p-12 rounded-[40px] border border-green/10 flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-green shadow-xl">
                  <ShoppingBag size={40} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-navy">Shopify Partner</h4>
                  <p className="text-navy/40 text-xs font-bold uppercase tracking-widest">Certified Since 2023</p>
                </div>
                <p className="text-navy/60 text-sm">Access to exclusive Shopify tools and early-release features for your store.</p>
              </div>

              <div className="bg-navy p-12 rounded-[40px] flex flex-col items-center text-center space-y-6 text-white group hover:bg-navy/95 transition-all">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-green shadow-xl border border-white/10 group-hover:bg-green group-hover:text-navy transition-all duration-500">
                  <ShieldCheck size={40} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">100% Trusted</h4>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Secure & Verified</p>
                </div>
                <p className="text-white/40 text-xs">All projects handled with complete technical transparency and secure delivery protocols.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Audit Section */}
      <section className="py-32 bg-white relative overflow-hidden border-y border-navy/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <p className="text-green text-[10px] font-bold uppercase tracking-[0.3em]">Free Tool</p>
              <h2 className="text-5xl md:text-6xl font-bold text-navy tracking-tight">
                Deep SEO <span className="italic font-serif font-light text-navy/40">Audit</span>
              </h2>
              <p className="text-navy/60 text-xl max-w-2xl mx-auto leading-relaxed">
                Get a comprehensive, AI-powered SEO keyword analysis for your Shopify store. Discover missed opportunities and quick wins.
              </p>
            </div>

            <div className="bg-light p-8 md:p-12 rounded-[40px] shadow-xl border border-navy/5">
              <form onSubmit={handleAuditSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-4">Store URL *</label>
                    <input 
                      type="url" 
                      name="storeUrl"
                      required
                      placeholder="https://yourstore.com" 
                      className="w-full bg-white border-2 border-navy/5 rounded-full py-4 px-6 focus:border-green outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-4">Store Niche *</label>
                    <input 
                      type="text" 
                      name="niche"
                      required
                      placeholder="e.g. Women's Fashion, Pet Supplies" 
                      className="w-full bg-white border-2 border-navy/5 rounded-full py-4 px-6 focus:border-green outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy ml-4">Competitor URL (Optional)</label>
                  <input 
                    type="url" 
                    name="competitorUrl"
                    placeholder="https://competitor.com" 
                    className="w-full bg-white border-2 border-navy/5 rounded-full py-4 px-6 focus:border-green outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isAuditing}
                  className="w-full bg-navy text-white py-5 rounded-full font-bold text-lg hover:bg-green hover:text-navy transition-colors disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {isAuditing ? (
                    <>
                      <RefreshCw className="animate-spin" size={20} />
                      Running Deep Audit...
                    </>
                  ) : (
                    <>
                      <Zap size={20} />
                      Generate Free SEO Report
                    </>
                  )}
                </button>
              </form>

              {auditResult && (
                <div className="mt-12 space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-navy">Your SEO Report</h3>
                    <button 
                      onClick={() => setAuditResult(null)}
                      className="text-sm font-bold text-navy/40 hover:text-navy transition-colors flex items-center gap-2"
                    >
                      <RefreshCw size={14} />
                      Clear Results
                    </button>
                  </div>
                  <SEOReport data={auditResult} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients / Testimonials Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-navy/30 text-[10px] font-bold uppercase tracking-[0.4em]"
                >
                  Success Stories
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl font-bold text-navy tracking-tighter leading-[0.85]"
                >
                  What Store <br />
                  <span className="italic font-serif font-light text-navy/40">Owners Say</span>.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-navy/60 text-xl font-serif italic max-w-md"
                >
                  "I don't just build stores; I build business assets. My approach combines technical precision with conversion-focused strategy."
                </motion.p>
              </div>

              <div className="flex items-center gap-6">
                <button 
                  onClick={prevTestimonial}
                  className="w-16 h-16 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-500"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-16 h-16 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-500"
                >
                  <ChevronRight size={24} />
                </button>
                <div className="flex items-center gap-2 ml-4">
                  {testimonials.map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "h-1.5 transition-all duration-500 rounded-full",
                        testimonialIndex === i ? "w-8 bg-green" : "w-2 bg-navy/10"
                      )} 
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="relative h-[500px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full bg-light p-12 md:p-20 rounded-[80px] border border-navy/5 relative group shadow-2xl"
                  >
                    <Quote className="absolute top-12 right-12 text-green/10" size={80} />
                    
                    <div className="space-y-10">
                      <div className="flex gap-1">
                        {[...Array(testimonials[testimonialIndex].rating)].map((_, j) => (
                          <Star key={j} size={20} className="fill-green text-green" />
                        ))}
                      </div>

                      <p className="text-navy text-2xl md:text-3xl leading-relaxed font-serif italic">
                        "{testimonials[testimonialIndex].content}"
                      </p>

                      <div className="flex items-center gap-6 pt-10 border-t border-navy/5">
                        <img 
                          src={testimonials[testimonialIndex].image} 
                          alt={testimonials[testimonialIndex].name} 
                          referrerPolicy="no-referrer"
                          className="w-20 h-20 rounded-3xl object-cover border-4 border-white shadow-xl" 
                          loading="lazy"
                        />
                        <div>
                          <h4 className="font-bold text-navy text-2xl tracking-tight">{testimonials[testimonialIndex].name}</h4>
                          <p className="text-navy/40 text-xs font-bold uppercase tracking-[0.3em]">{testimonials[testimonialIndex].role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-navy/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Visible Grid Style */}
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
                  Ready to transform your eCommerce presence? Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "sheunhost@gmail.com" },
                  { icon: MessageCircle, label: "WhatsApp (NG)", value: "+234 808 431 5743" },
                  { icon: MessageCircle, label: "WhatsApp (UK)", value: "+44 7476 664292" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 group text-center sm:text-left">
                    <div className="w-14 h-14 bg-light rounded-2xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-navy transition-all shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div className="min-w-0 flex-grow">
                      <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold text-navy break-all break-words">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-10 bg-navy text-white rounded-[40px] space-y-6 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap size={100} className="text-green" />
                </div>
                <div className="relative z-10 space-y-4">
                  <h4 className="text-xl font-bold">Free Store Audit</h4>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Not sure what your store needs? I'll provide a comprehensive review of your speed, design, and SEO — completely free.
                  </p>
                  <Link to="/contact#contact-form" className="inline-flex items-center gap-2 text-green font-bold text-sm border-b border-green/20 pb-1 hover:border-green transition-all">
                    Claim Your Audit <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-light p-10 md:p-16 rounded-[60px] border border-navy/5 shadow-sm">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-8">
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
                          className="w-full bg-white border-b-2 border-navy/5 rounded-3xl py-5 px-8 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-navy/40 uppercase tracking-widest ml-4">Project Type</label>
                      <div className="relative">
                        <select name="project_type" className="w-full bg-white border-b-2 border-navy/5 rounded-3xl py-5 px-8 focus:border-green outline-none transition-all appearance-none font-medium text-navy">
                          <option>New Store Build</option>
                          <option>Dropshipping Store</option>
                          <option>Store Migration</option>
                          <option>Theme Redesign</option>
                          <option>Bug Fix</option>
                          <option>Free Store Audit</option>
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
                        placeholder="Tell me about your project goals..."
                        className="w-full bg-white border-b-2 border-navy/5 rounded-[40px] py-6 px-8 focus:border-green outline-none transition-all resize-none font-medium text-navy placeholder:text-navy/20"
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
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-24 h-24 bg-green/20 text-green rounded-[32px] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={48} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold text-navy">Message Sent!</h3>
                      <p className="text-navy/40 text-lg max-w-xs mx-auto">
                        I've received your inquiry and will get back to you shortly.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-light relative overflow-hidden border-y border-navy/5">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[40px] p-10 md:p-16 shadow-xl border border-navy/5 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green/10 text-green rounded-2xl mb-2">
                <Mail size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
                Join the <span className="italic font-serif font-light text-navy/40">Newsletter</span>
              </h2>
              <p className="text-navy/60 text-lg">
                Get weekly tips on Shopify growth, conversion rate optimization, and eCommerce strategies.
              </p>
            </div>
            <div className="flex-1 w-full">
              {!isSubscribeSuccess ? (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Enter your email address" 
                    className="w-full bg-light border-2 border-navy/5 rounded-full py-6 pl-8 pr-40 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20"
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribing}
                    className="absolute right-3 bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-green hover:text-navy transition-colors disabled:opacity-50"
                  >
                    {isSubscribing ? "Wait..." : "Subscribe"}
                  </button>
                </form>
              ) : (
                <div className="bg-green/10 border border-green/20 rounded-full py-6 px-8 text-center">
                  <p className="text-green font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 size={20} /> You're subscribed!
                  </p>
                </div>
              )}
              <p className="text-[10px] font-bold text-navy/40 uppercase tracking-widest mt-4 text-center md:text-left">
                100% Privacy. I respect your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Recipe 2 */}
      <section className="py-48 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-green/5 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto space-y-16"
          >
            <h2 className="text-7xl md:text-[160px] font-bold text-white leading-[0.8] tracking-[-0.06em] uppercase">
              Ready to <span className="text-green italic font-serif font-light lowercase">Grow?</span>
            </h2>
            <p className="text-white/60 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-serif italic">
              Let's build a store that doesn't just look good, but converts visitors into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
              <Link to="/contact#contact-form" className="w-full sm:w-auto bg-green text-navy px-16 py-8 rounded-full font-bold text-2xl hover:scale-105 transition-all duration-500 green-glow flex items-center justify-center text-center">
                Get Your Free Audit
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto text-white font-bold text-2xl flex items-center justify-center gap-6 group text-center">
                View Portfolio <div className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-green transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
