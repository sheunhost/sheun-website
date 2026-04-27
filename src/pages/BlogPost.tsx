import { useParams } from "react-router-dom";
import ShopifySettingsGuide from "./ShopifySettingsGuide";
import ShopifySpeedOptimization from "./ShopifySpeedOptimization";
import BestDropshippingApps from "./BestDropshippingApps";
import FashionDropshippingGuide from "./FashionDropshippingGuide";
import WooCommerceToShopifyMigration from "./WooCommerceToShopifyMigration";
import ShopifySEOGuide from "./ShopifySEOGuide";
import LeveragingShopifyMarkets from "./LeveragingShopifyMarkets";
import PageWrapper from "../components/PageWrapper";
import Breadcrumbs from "../components/Breadcrumbs";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const getPostInfo = (postId: string | undefined) => {
    switch (postId) {
      case "1":
        return { 
          title: "10 Shopify Settings Most Store Owners Miss", 
          description: "Discover the 10 hidden settings in your Shopify admin that can make or break your store's conversion rate. Learn how to increase Shopify sales by optimizing your checkout and settings.",
          component: <ShopifySettingsGuide />, 
          keywords: "Shopify Settings, Shopify SEO, Increase Shopify Sales, Shopify Checkout Optimization, Shopify Expert, eCommerce Growth, Store Setup, Convert More Customers, Abandoned Cart Recovery" 
        };
      case "2":
        return { 
          title: "How to Speed Up Your Shopify Store in 2026", 
          description: "A comprehensive guide to optimizing your Shopify store's performance for better user experience, higher conversion rates, and improved technical SEO.",
          component: <ShopifySpeedOptimization />, 
          keywords: "Shopify Speed Optimization, Faster Shopify Theme, Shopify Performance, Core Web Vitals, Increase Site Speed, eCommerce Conversion Rate" 
        };
      case "3":
        return { 
          title: "The Best Shopify Apps for Dropshipping Stores in 2026", 
          description: "My handpicked list of essential apps to automate your dropshipping business and increase AOV. Discover how to build a high-growth tech stack.",
          component: <BestDropshippingApps />, 
          keywords: "Shopify Dropshipping Apps, Best Dropshipping Apps, DSers, Zendrop, ReConvert, Loox Reviews, Dropshipping Success 2026" 
        };
      case "4":
        return { 
          title: "How to Build a Profitable Fashion Dropshipping Store on Shopify", 
          description: "Learn the secrets to success in the high-growth fashion dropshipping niche. From niche selection and sourcing to TikTok marketing and SEO.",
          component: <FashionDropshippingGuide />, 
          keywords: "Fashion Dropshipping Shopify, Start Fashion Brand Dropshipping, Clothing Dropshipping Suppliers, Shopify Fashion Theme SEO, Profitable Shopify Fashion Store" 
        };
      case "5":
        return { 
          title: "How to Migrate from WooCommerce to Shopify Without Losing SEO", 
          description: "A technical walkthrough of migrating your WooCommerce store to Shopify while preserving your hard-earned Google rankings and organic traffic.",
          component: <WooCommerceToShopifyMigration />, 
          keywords: "WooCommerce to Shopify Migration, WordPress to Shopify SEO, Store Migration Guide, Matrixify, Preserve SEO rankings migration" 
        };
      case "6":
        return { 
          title: "Shopify SEO in 2026: The Beginner's Complete Guide", 
          description: "Break free from the 'paid ad' cycle. This comprehensive primer introduces you to the world of technical and on-page SEO specifically for the Shopify platform, helping you build a compounding asset that drives organic sales on autopilot.",
          component: <ShopifySEOGuide />, 
          keywords: "Shopify SEO 2026, Shopify SEO Guide, Technical SEO Shopify, Shopify Organic Traffic, eCommerce SEO Strategy, Shopify On-page SEO, Increase Shopify Organic Sales" 
        };
      case "7":
        return { 
          title: "Leveraging Shopify Markets for International Sales", 
          description: "Unlock global revenue with Shopify Markets. A comprehensive guide on currency conversion, language localization, and international shipping strategies.",
          component: <LeveragingShopifyMarkets />, 
          keywords: "Shopify Markets, International Sales, Currency Conversion, Localized Pricing, Shopify Shipping, Import Duties, eCommerce Expansion, Multi-language Shopify Store" 
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
      <div className="pt-32 pb-8 bg-white border-b border-navy/5">
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
