import { useParams } from "react-router-dom";
import ShopifySettingsGuide from "./ShopifySettingsGuide";
import ShopifySpeedOptimization from "./ShopifySpeedOptimization";
import BestDropshippingApps from "./BestDropshippingApps";
import FashionDropshippingGuide from "./FashionDropshippingGuide";
import WooCommerceToShopifyMigration from "./WooCommerceToShopifyMigration";
import PageWrapper from "../components/PageWrapper";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  if (id === "2") {
    return (
      <PageWrapper
        title="How to Speed Up Your Shopify Store in 2026"
        description="A comprehensive guide to optimizing your Shopify store's performance for better user experience, higher conversion rates, and improved technical SEO."
        keywords="Shopify Speed Optimization, Faster Shopify Theme, Shopify Performance, Core Web Vitals, Increase Site Speed, eCommerce Conversion Rate"
        canonical="/blog/2"
      >
        <ShopifySpeedOptimization />
      </PageWrapper>
    );
  }

  if (id === "3") {
    return (
      <PageWrapper
        title="The Best Shopify Apps for Dropshipping Stores in 2026"
        description="My handpicked list of essential apps to automate your dropshipping business and increase AOV. Discover how to build a high-growth tech stack."
        keywords="Shopify Dropshipping Apps, Best Dropshipping Apps, DSers, Zendrop, ReConvert, Loox Reviews, Dropshipping Success 2026"
        canonical="/blog/3"
      >
        <BestDropshippingApps />
      </PageWrapper>
    );
  }

  if (id === "4") {
    return (
      <PageWrapper
        title="How to Build a Profitable Fashion Dropshipping Store on Shopify"
        description="Learn the secrets to success in the high-growth fashion dropshipping niche. From niche selection and sourcing to TikTok marketing and SEO."
        keywords="Fashion Dropshipping Shopify, Start Fashion Brand Dropshipping, Clothing Dropshipping Suppliers, Shopify Fashion Theme SEO, Profitable Shopify Fashion Store"
        canonical="/blog/4"
      >
        <FashionDropshippingGuide />
      </PageWrapper>
    );
  }

  if (id === "5") {
    return (
      <PageWrapper
        title="How to Migrate from WooCommerce to Shopify Without Losing SEO"
        description="A technical walkthrough of migrating your WooCommerce store to Shopify while preserving your hard-earned Google rankings and organic traffic."
        keywords="WooCommerce to Shopify Migration, WordPress to Shopify SEO, Store Migration Guide, Matrixify, Preserve SEO rankings migration"
        canonical="/blog/5"
      >
        <WooCommerceToShopifyMigration />
      </PageWrapper>
    );
  }

  // Default to ShopifySettingsGuide for other routes temporarily until more posts are added.
  return <ShopifySettingsGuide />;
}
