import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

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
  const siteTitle = "Sheun | sheun.online - Shopify Expert & eCommerce Developer";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDesc = "Professional Shopify Expert Portfolio at sheun.online. High-converting store builds, custom development, and eCommerce growth by Sheun Hub.";

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
        {canonical && <link rel="canonical" href={`https://sheun.online${canonical}`} />}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || defaultDesc} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description || defaultDesc} />
      </Helmet>
      {children}
    </motion.div>
  );
}
