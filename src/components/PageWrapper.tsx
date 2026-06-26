import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
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
  const defaultImage = "https://i.postimg.cc/wxQgVCcf/1000031270-removebg-preview.png";
  const ogImage = image || defaultImage;
  
  // Use provided canonical or fall back to current path
  const currentPath = canonical || location.pathname;
  const canonicalUrl = `https://www.sheun.online${currentPath === "/" ? "" : currentPath}`;

  // Default Person schema with highly rich semantic data for AI & search crawlers (Generative Engine Optimization / GEO)
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sheun",
    "alternateName": "Sheun Hub",
    "url": "https://sheun.online",
    "image": defaultImage,
    "jobTitle": "Certified Shopify Partner, Developer & E-commerce Growth Specialist",
    "description": description || defaultDesc,
    "sameAs": [
      "https://github.com/sheunhost",
      "https://twitter.com/sheunhub"
    ],
    "award": [
      "Certified Shopify Partner",
      "Shopify Theme Development Expert",
      "Shopify App Customizer"
    ],
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
    "areaServed": [
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "France" }
    ],
    "offers": {
      "@type": "Offer",
      "serviceType": "Shopify Custom Development, SEO Audits, and Conversion Optimization",
      "seller": {
        "@type": "Person",
        "name": "Sheun"
      }
    }
  };

  const finalSchema = schema || defaultSchema;

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description || defaultDesc} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content={schema?.['@type'] === 'Article' ? 'article' : 'website'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || defaultDesc} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description || defaultDesc} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      </Helmet>
      {children}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-green origin-left z-[100]" style={{ scaleX }} />
    </motion.main>
  );
}
