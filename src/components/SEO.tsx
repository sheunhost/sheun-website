import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: any;
  breadcrumbSchema?: any;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
}

export function SEO({ 
  title, 
  description, 
  canonical, 
  schema, 
  breadcrumbSchema, 
  keywords, 
  image,
  type = 'website',
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  articleSection
}: SEOProps) {
  const canonicalUrl = canonical.startsWith('http') 
    ? canonical 
    : `https://www.sheun.online${canonical.startsWith('/') ? '' : '/'}${canonical}`;

  const fullImageUrl = image 
    ? (image.startsWith('http') ? image : `https://www.sheun.online${image.startsWith('/') ? '' : '/'}${image}`) 
    : 'https://www.sheun.online/og-image.png';

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Self-referencing Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook & LinkedIn */}
      <meta property="og:site_name" content="Sheun Hub" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {type === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {type === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {type === 'article' && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {type === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      
      {/* Twitter / X Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sheunhub" />
      <meta name="twitter:creator" content="@sheunhub" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}


