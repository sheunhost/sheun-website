import { useParams, useLocation } from "react-router-dom";
import ShopifySettingsGuide from "./ShopifySettingsGuide";
import ShopifySpeedOptimization from "./ShopifySpeedOptimization";
import BestDropshippingApps from "./BestDropshippingApps";
import FashionDropshippingGuide from "./FashionDropshippingGuide";
import WooCommerceToShopifyMigration from "./WooCommerceToShopifyMigration";
import ShopifySEOGuide from "./ShopifySEOGuide";
import LeveragingShopifyMarkets from "./LeveragingShopifyMarkets";
import ConversionKillers from "./ConversionKillers";
import PageWrapper from "../components/PageWrapper";
import BlogArticleHeader from "../components/BlogArticleHeader";
import SocialShare from "../components/SocialShare";
import BlogRelatedServices from "../components/BlogRelatedServices";
import { getBlogPost, generateBlogSchema, blogPostsData } from "../data/blogPostsData";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const postData = getBlogPost(id) || blogPostsData["1"];

  const getComponent = (postId: string) => {
    switch (postId) {
      case "1":
        return <ShopifySettingsGuide isEmbedded={true} />;
      case "2":
        return <ShopifySpeedOptimization isEmbedded={true} />;
      case "3":
        return <BestDropshippingApps isEmbedded={true} />;
      case "4":
        return <FashionDropshippingGuide isEmbedded={true} />;
      case "5":
        return <WooCommerceToShopifyMigration isEmbedded={true} />;
      case "6":
        return <ShopifySEOGuide isEmbedded={true} />;
      case "7":
        return <LeveragingShopifyMarkets isEmbedded={true} />;
      case "8":
        return <ConversionKillers isEmbedded={true} />;
      default:
        return <ShopifySettingsGuide isEmbedded={true} />;
    }
  };

  const canonicalPath = location.pathname;
  const canonicalUrl = `https://www.sheun.online${canonicalPath}`;
  const postSchema = generateBlogSchema(postData, canonicalUrl);

  return (
    <PageWrapper
      title={postData.title}
      description={postData.description}
      keywords={postData.keywords}
      canonical={canonicalPath}
      image={postData.image}
      type="article"
      articlePublishedTime={postData.datePublished}
      articleModifiedTime={postData.dateModified}
      articleAuthor="Emmanuel Adedayo (Sheun)"
      articleSection={postData.category}
      schema={postSchema}
    >
      {/* Organized Blog Article Header */}
      <BlogArticleHeader post={postData} />

      {/* Main Article Content */}
      <main className="w-full bg-white dark:bg-navy">
        {getComponent(postData.id)}
      </main>

      {/* Single Organized Social Sharing Section */}
      <div className="container mx-auto px-6 max-w-4xl">
        <SocialShare
          url={canonicalUrl}
          title={postData.heading}
          description={postData.description}
          image={postData.image}
          category={postData.category}
        />
      </div>

      {/* Relevant Services */}
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
