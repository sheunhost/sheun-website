import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";

interface AutomationPageWrapperProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  schema?: Record<string, any>;
  image?: string;
}

export default function AutomationPageWrapper({
  children,
  className,
  title,
  description,
  canonical,
  keywords,
  schema,
  image
}: AutomationPageWrapperProps) {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const fullTitle = title 
    ? title 
    : "Sheun Automation | AI Automation, Workflows & CRM Systems";

  const defaultDesc = description || "Sheun Automation builds intelligent AI workflows, custom GoHighLevel CRMs, AI chatbots, voice agents, and business process automations that scale operations without extra headcount.";
  
  const defaultImage = image || "https://i.postimg.cc/wxQgVCcf/1000031270-removebg-preview.png";
  
  const currentPath = canonical || location.pathname;
  const canonicalUrl = `https://sheun.online${currentPath === "/" ? "/automation" : currentPath}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sheun Automation",
    "alternateName": "Sheun AI Automation & Workflow Division",
    "url": "https://sheun.online/automation",
    "logo": defaultImage,
    "image": defaultImage,
    "description": defaultDesc,
    "slogan": "Automate Smarter. Scale Faster.",
    "telephone": "+1-800-AUTOMATE",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://github.com/sheunhost",
      "https://twitter.com/sheunhub"
    ],
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Australia" }
    ],
    "knowsAbout": [
      "AI Workflow Automation",
      "GoHighLevel CRM Architecture",
      "Conversational AI Chatbots",
      "AI Voice Agents",
      "Business Process Automation",
      "CRM Integration and Data Migration",
      "Email Marketing Automation",
      "Zapier, Make.com and n8n Engineering"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "name": "AI Automation & Workflow Solutions"
    }
  };

  const finalSchema = schema || defaultSchema;

  const breadcrumbSchema = currentPath !== '/automation' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sheun.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Automation",
        "item": "https://sheun.online/automation"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": fullTitle.split('|')[0].trim(),
        "item": canonicalUrl
      }
    ]
  } : null;

  useSEO(fullTitle, defaultDesc, canonicalUrl, finalSchema, breadcrumbSchema, keywords, defaultImage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 ${className || ""}`}
    >
      {children}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 origin-left z-[100]" 
        style={{ scaleX }} 
      />
    </motion.div>
  );
}
