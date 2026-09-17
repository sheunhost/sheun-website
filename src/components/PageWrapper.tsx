import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode } from "react";
import { SEO } from "./SEO";
import { useLocation } from "react-router-dom";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  schema?: Record<string, any>;
  image?: string;
}

export default function PageWrapper({ 
  children, 
  className, 
  title, 
  description,
  canonical,
  keywords,
  schema,
  image
}: PageWrapperProps) {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // If title is explicitly provided, use it. Otherwise, fallback to the default global title.
  const fullTitle = title ? title : "Shopify Development & Growth by Sheun Hub | Sheun Hub";
  const defaultDesc = "Professional Shopify Expert Portfolio for Sheun Hub. High-converting store builds, custom development, and eCommerce growth by Sheun Hub.";
  const defaultImage = "/og-image.png";
  const ogImage = image || defaultImage;
  
  // Use provided canonical or fall back to current path
  const currentPath = canonical || location.pathname;
  const canonicalUrl = `https://www.sheun.online${currentPath === "/" ? "" : currentPath}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.sheun.online/#organization",
    "name": "Sheun Hub",
    "alternateName": "Sheun Hub",
    "url": "https://www.sheun.online",
    "logo": defaultImage,
    "image": defaultImage,
    "email": "sheunhost@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Emmanuel Adedayo (Sheun)",
      "jobTitle": "Founder & Lead Developer",
      "image": "https://www.sheun.online/about/sheun-founder.webp"
    },
    "description": description || defaultDesc,
    "sameAs": [
      "https://github.com/sheunhost",
      "https://twitter.com/sheunhub",
      "https://www.linkedin.com/in/sheun-hub-26b876321"
    ],
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Shopify Development",
      "Shopify SEO",
      "Shopify Technical SEO",
      "Liquid Programming",
      "Shopify Custom Theme Development",
      "Shopify App Integration",
      "E-commerce Migration",
      "WooCommerce to Shopify Migration",
      "Shopify Speed Optimization",
      "Conversion Rate Optimization (CRO)",
      "Headless Shopify Commerce",
      "Shopify Plus Enterprise Customization"
    ],
    "offers": {
      "@type": "Offer",
      "serviceType": "Shopify Custom Development, SEO Audits, and Conversion Optimization",
      "seller": {
        "@type": "Organization",
        "name": "Sheun Hub"
      }
    }
  };

  const finalSchema = schema || defaultSchema;


  const breadcrumbSchema = currentPath !== '/' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sheun.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": fullTitle.split('|')[0].trim(),
        "item": canonicalUrl
      }
    ]
  } : null;


  return (
    <>
      <SEO 
        title={fullTitle} 
        description={description || defaultDesc} 
        canonical={canonicalUrl} 
        schema={finalSchema} 
        breadcrumbSchema={breadcrumbSchema} 
        keywords={keywords} 
        image={ogImage} 
      />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      
      {children}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-green origin-left z-[100]" style={{ scaleX }} />
    </motion.main>
    </>
  );
}
