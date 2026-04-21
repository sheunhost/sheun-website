import { useParams } from "react-router-dom";
import ShopifySettingsGuide from "./ShopifySettingsGuide";
import ShopifySpeedOptimization from "./ShopifySpeedOptimization";
import BestDropshippingApps from "./BestDropshippingApps";
import PageWrapper from "../components/PageWrapper";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  if (id === "2") {
    return (
      <PageWrapper
        title="How to Speed Up Your Shopify Store in 2025"
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
        title="The Best Shopify Apps for Dropshipping Stores in 2025"
        description="My handpicked list of essential apps to automate your dropshipping business and increase AOV. Discover how to build a high-growth tech stack."
        keywords="Shopify Dropshipping Apps, Best Dropshipping Apps, DSers, Zendrop, ReConvert, Loox Reviews, Dropshipping Success 2025"
        canonical="/blog/3"
      >
        <BestDropshippingApps />
      </PageWrapper>
    );
  }

  // Default to ShopifySettingsGuide for other routes temporarily until more posts are added.
  return <ShopifySettingsGuide />;
}
