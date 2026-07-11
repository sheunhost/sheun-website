import { useSEO } from "../hooks/useSEO";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: Record<string, any>;
  breadcrumbs?: { name: string; item: string }[];
}

export default function SEO({ title, description, canonical, schema, breadcrumbs }: SEOProps) {
  const fullUrl = `https://sheun.online${canonical === '/' ? '' : canonical}`;
  
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((bc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": bc.name,
      "item": `https://sheun.online${bc.item}`
    }))
  } : null;

  useSEO(title, description, fullUrl, schema, breadcrumbSchema, undefined, undefined);

  return null;
}
