import { useEffect } from 'react';

export function useSEO(title: string, description: string, canonical: string, schema: any, breadcrumbSchema: any, keywords?: string, image?: string) {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setOgMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };
    
    const setSchema = (id: string, data: any) => {
      if (!data) return;
      let element = document.getElementById(id);
      if (!element) {
        element = document.createElement('script');
        element.setAttribute('type', 'application/ld+json');
        element.setAttribute('id', id);
        document.head.appendChild(element);
      }
      element.textContent = JSON.stringify(data);
    };

    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    
    setOgMeta('og:title', title);
    if (description) setOgMeta('og:description', description);
    if (image) setOgMeta('og:image', image);
    
    if (canonical) {
      setLink('canonical', canonical);
      setOgMeta('og:url', canonical);
    }

    if (schema) setSchema('schema-main', schema);
    if (breadcrumbSchema) setSchema('schema-breadcrumb', breadcrumbSchema);

  }, [title, description, canonical, schema, breadcrumbSchema, keywords, image]);
}
