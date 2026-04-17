import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  canonical?: string;
}

export default function PageWrapper({ 
  children, 
  className, 
  title, 
  description,
  canonical 
}: PageWrapperProps) {
  const location = useLocation();
  const siteTitle = "Sheun | Sheun Hub - Shopify Expert & eCommerce Developer";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDesc = "Professional Shopify Expert Portfolio for Sheun Hub. High-converting store builds, custom development, and eCommerce growth by Sheun.";
  
  // Use provided canonical or fall back to current path
  const currentPath = canonical || location.pathname;
  const canonicalUrl = `https://sheun.online${currentPath === "/" ? "" : currentPath}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description || defaultDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || defaultDesc} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description || defaultDesc} />
      </Helmet>
      {children}
    </motion.div>
  );
}
