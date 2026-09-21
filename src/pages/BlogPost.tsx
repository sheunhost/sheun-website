import { useParams } from "react-router-dom";
import ShopifySettingsGuide from "./ShopifySettingsGuide";
import ShopifySpeedOptimization from "./ShopifySpeedOptimization";
import BestDropshippingApps from "./BestDropshippingApps";
import FashionDropshippingGuide from "./FashionDropshippingGuide";
import WooCommerceToShopifyMigration from "./WooCommerceToShopifyMigration";
import ShopifySEOGuide from "./ShopifySEOGuide";
import LeveragingShopifyMarkets from "./LeveragingShopifyMarkets";
import ConversionKillers from "./ConversionKillers";
import PageWrapper from "../components/PageWrapper";
import Breadcrumbs from "../components/Breadcrumbs";
import BlogRelatedServices from "../components/BlogRelatedServices";
import { blogPostsData } from "../data/blogPostsData";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const currentId = id && blogPostsData[id] ? id : "1";
  const postData = blogPostsData[currentId];

  const getComponent = (postId: string) => {
    switch (postId) {
      case "1":
        return <ShopifySettingsGuide />;
      case "2":
        return <ShopifySpeedOptimization />;
      case "3":
        return <BestDropshippingApps />;
      case "4":
        return <FashionDropshippingGuide />;
      case "5":
        return <WooCommerceToShopifyMigration />;
      case "6":
        return <ShopifySEOGuide />;
      case "7":
        return <LeveragingShopifyMarkets />;
      case "8":
        return <ConversionKillers />;
      default:
        return <ShopifySettingsGuide />;
    }
  };

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.sheun.online/blog/${postData.id}#article`,
    "headline": postData.heading,
    "name": postData.title,
    "description": postData.description,
    "image": postData.image,
    "datePublished": postData.datePublished,
    "dateModified": postData.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.sheun.online/blog/${postData.id}`
    },
    "author": {
      "@type": "Person",
      "name": "Emmanuel Adedayo (Sheun)",
      "jobTitle": "Founder & Lead Developer",
      "url": "https://www.sheun.online/about",
      "sameAs": [
        "https://github.com/sheunhost",
        "https://twitter.com/sheunhub",
        "https://www.linkedin.com/in/sheun-hub-26b876321"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sheun Hub",
      "url": "https://www.sheun.online",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sheun.online/logo.png"
      }
    },
    "articleSection": postData.category,
    "keywords": postData.keywords
  };

  return (
    <PageWrapper
      title={postData.title}
      description={postData.description}
      keywords={postData.keywords}
      canonical={`/blog/${postData.id}`}
      image={postData.image}
      schema={postSchema}
    >
      <div className="pt-32 pb-8 bg-white dark:bg-navy border-b border-navy/5 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-4xl relative z-50">
          <Breadcrumbs 
            items={[
              { label: "Blog", path: "/blog" },
              { label: postData.heading }
            ]} 
          />
        </div>
      </div>
      <div className="-mt-32">
        {getComponent(postData.id)}
      </div>
      
      {postData.relevantServices && postData.relevantServices.length > 0 && (
        <div className="container mx-auto px-6 max-w-4xl pb-24">
          <BlogRelatedServices 
            services={postData.relevantServices} 
            category={postData.category}
          />
        </div>
      )}
    </PageWrapper>
  );
}

