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

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const getPostInfo = (postId: string | undefined) => {
    switch (postId) {
      case "1":
        return { 
          title: "Shopify Backend Settings Optimization Guide", 
          description: "Hidden Shopify settings to boost conversion rates, optimize checkout checkout pipelines, and streamline global delivery. Expert setup audit tips for international merchants.",
          component: <ShopifySettingsGuide />, 
          keywords: "Shopify Settings Guide, Shopify Backend Settings, Shopify checkout audit, Shopify international markets setup" 
        };
      case "2":
        return { 
          title: "Shopify Speed Optimization & Core Web Vitals Specialist", 
          description: "Optimize your Shopify storefront speed and mobile Core Web Vitals. Reduce script bloat, lazy-load assets, and boost mobile conversions. Speed audit services for e-commerce brands worldwide.",
          component: <ShopifySpeedOptimization />, 
          keywords: "Shopify Speed Optimization, Core Web Vitals Shopify, improve Shopify pagespeed, Shopify developer speed, Shopify speed optimization, Shopify speed expert" 
        };
      case "3":
        return { 
          title: "Best Shopify Dropshipping Apps for High Conversions", 
          description: "The definitive checklist of Shopify dropshipping apps for 2026. Discover sourcing, inventory synchronization, custom fulfillment, and speed-optimized layouts for international merchants.",
          component: <BestDropshippingApps />, 
          keywords: "Shopify Dropshipping Apps, best sourcing tools, dropshipping builder, Shopify store setup, e-commerce automation, Shopify integration" 
        };
      case "4":
        return { 
          title: "High-Converting Fashion Dropshipping Shopify Store Design & Strategy", 
          description: "Learn to build a high-converting fashion dropshipping Shopify store. Supplier strategies, custom Liquid theme branding, and conversion tactics for merchants worldwide.",
          component: <FashionDropshippingGuide />, 
          keywords: "Fashion Dropshipping Shopify, Shopify dropshipping builder, custom clothing store, fashion e-commerce expert, fashion Shopify developer" 
        };
      case "5":
        return { 
          title: "WooCommerce to Shopify Migration SEO: 2026 Checklist & Expert Services", 
          description: "Migrate WooCommerce to Shopify without losing Google search rankings. Complete step-by-step SEO checklist, URL 301 mapping, and expert migration services for brands worldwide.",
          component: <WooCommerceToShopifyMigration />, 
          keywords: "migrate WooCommerce to Shopify, WooCommerce to Shopify migration, Shopify migration expert, WooCommerce to Shopify SEO checklist, ecommerce migration services, WooCommerce to Shopify migration agency, Shopify partner migration" 
        };
      case "6":
        return { 
          title: "Shopify SEO in 2026: Complete Expert Optimization Guide", 
          description: "Step-by-step technical and on-page Shopify SEO checklist. Learn to optimize collections, override metadata, configure rich schemas, and drive organic traffic for merchants worldwide.",
          component: <ShopifySEOGuide />, 
          keywords: "Shopify SEO Guide, Shopify SEO expert, Shopify SEO specialist, technical Shopify SEO, rank Shopify store, Shopify SEO consultant, Shopify optimization" 
        };
      case "7":
        return { 
          title: "How to Leverage Shopify Markets for International Sales", 
          description: "Scale your store globally with Shopify Markets. Configure custom pricing, duties calculation, localized SEO, and multi-currency checkouts for international brands.",
          component: <LeveragingShopifyMarkets />, 
          keywords: "Shopify Markets guide, international Shopify setup, Shopify multi-currency, Shopify expert, Shopify partner, Shopify developer" 
        };
      case "8":
        return { 
          title: "Shopify Store Not Converting? CRO Optimization Guide", 
          description: "Is your Shopify storefront getting traffic but no sales? Fix low Shopify conversion rates, checkout drop-offs, and design errors. Professional CRO audit services for brands worldwide.",
          component: <ConversionKillers />, 
          keywords: "Shopify store not converting, Shopify conversion optimization, e-commerce CRO audit, fix checkout drop-off, Shopify checkout audit, Shopify CRO expert" 
        };
      default:
        return { 
          title: "Blog Post", 
          description: "Expert insights for your Shopify store from Sheun Hub.",
          component: <ShopifySettingsGuide />, 
          keywords: "" 
        };
    }
  };

  const postInfo = getPostInfo(id);

  return (
    <PageWrapper
      title={postInfo.title}
      description={postInfo.description}
      keywords={postInfo.keywords}
      canonical={`/blog/${id}`}
    >
      <div className="pt-32 pb-8 bg-white dark:bg-navy border-b border-navy/5 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-4xl relative z-50">
          <Breadcrumbs 
            items={[
              { label: "Blog", path: "/blog" },
              { label: postInfo.title }
            ]} 
          />
        </div>
      </div>
      <div className="-mt-32">
        {postInfo.component}
      </div>
    </PageWrapper>
  );
}
