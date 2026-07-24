/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnNavigation from "./components/ScrollToTopOnNavigation";
import FloatingCalendly from "./components/FloatingCalendly";
import GoogleAnalytics from "./components/GoogleAnalytics";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const Calculator = lazy(() => import("./pages/Calculator"));
const Apply = lazy(() => import("./pages/Apply"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ShopifySeoSprint = lazy(() => import("./pages/ShopifySeoSprint"));
const ShopifyAudit = lazy(() => import("./pages/ShopifyAudit"));
const ConversionKillers = lazy(() => import("./pages/ConversionKillers"));
const ShopifySEOGuide = lazy(() => import("./pages/ShopifySEOGuide"));
const ShopifySettingsGuide = lazy(() => import("./pages/ShopifySettingsGuide"));
const ShopifySpeedOptimization = lazy(() => import("./pages/ShopifySpeedOptimization"));
const WooCommerceToShopifyMigration = lazy(() => import("./pages/WooCommerceToShopifyMigration"));
const BestDropshippingApps = lazy(() => import("./pages/BestDropshippingApps"));
const FashionDropshippingGuide = lazy(() => import("./pages/FashionDropshippingGuide"));
const LeveragingShopifyMarkets = lazy(() => import("./pages/LeveragingShopifyMarkets"));

// Lazy load Automation components
const AutomationHome = lazy(() => import("./automation/pages/AutomationHome"));
const AutomationServices = lazy(() => import("./automation/pages/AutomationServices"));
const AutomationServiceDetail = lazy(() => import("./automation/pages/AutomationServiceDetail"));
const AutomationSolutions = lazy(() => import("./automation/pages/AutomationSolutions"));
const AutomationIndustries = lazy(() => import("./automation/pages/AutomationIndustries"));
const AutomationCaseStudies = lazy(() => import("./automation/pages/AutomationCaseStudies"));
const AutomationAbout = lazy(() => import("./automation/pages/AutomationAbout"));
const AutomationFAQ = lazy(() => import("./automation/pages/AutomationFAQ"));
const AutomationContact = lazy(() => import("./automation/pages/AutomationContact"));
const AutomationPrivacyPolicy = lazy(() => import("./automation/pages/AutomationPrivacyPolicy"));
const AutomationTerms = lazy(() => import("./automation/pages/AutomationTerms"));
const AutomationThankYou = lazy(() => import("./automation/pages/AutomationThankYou"));
const AutomationNotFound = lazy(() => import("./automation/pages/AutomationNotFound"));

import AutomationNavbar from "./automation/components/AutomationNavbar";
import AutomationFooter from "./automation/components/AutomationFooter";

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          {/* Main Site Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/shopify-migration" element={<Navigate to="/services/migration" replace />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopify-seo-sprint" element={<ShopifySeoSprint />} />
          <Route path="/seo-sprint" element={<ShopifySeoSprint />} />
          <Route path="/shopify-store-audit" element={<ShopifyAudit />} />
          <Route path="/audit" element={<ShopifyAudit />} />
          <Route path="/shopify-not-converting" element={<ConversionKillers />} />
          <Route path="/shopify-seo-guide" element={<ShopifySEOGuide />} />
          <Route path="/shopify-settings-guide" element={<ShopifySettingsGuide />} />
          <Route path="/shopify-speed-optimization" element={<ShopifySpeedOptimization />} />
          <Route path="/woocommerce-to-shopify-migration" element={<WooCommerceToShopifyMigration />} />
          <Route path="/best-dropshipping-apps" element={<BestDropshippingApps />} />
          <Route path="/fashion-dropshipping-guide" element={<FashionDropshippingGuide />} />
          <Route path="/leveraging-shopify-markets" element={<LeveragingShopifyMarkets />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Automation Section Routes */}
          <Route path="/automation" element={<AutomationHome />} />
          <Route path="/automation/services" element={<AutomationServices />} />
          <Route path="/automation/services/:slug" element={<AutomationServiceDetail />} />
          <Route path="/automation/solutions" element={<AutomationSolutions />} />
          <Route path="/automation/industries" element={<AutomationIndustries />} />
          <Route path="/automation/case-studies" element={<AutomationCaseStudies />} />
          <Route path="/automation/about" element={<AutomationAbout />} />
          <Route path="/automation/faq" element={<AutomationFAQ />} />
          <Route path="/automation/contact" element={<AutomationContact />} />
          <Route path="/automation/privacy-policy" element={<AutomationPrivacyPolicy />} />
          <Route path="/automation/terms" element={<AutomationTerms />} />
          <Route path="/automation/thank-you" element={<AutomationThankYou />} />

          {/* Legacy Automation Service Route Aliases */}
          <Route path="/automation/services/workflow" element={<Navigate to="/automation/services/ai-workflow-automation" replace />} />
          <Route path="/automation/services/gohighlevel" element={<Navigate to="/automation/services/gohighlevel-crm" replace />} />
          <Route path="/automation/services/chatbot" element={<Navigate to="/automation/services/ai-chatbots" replace />} />
          <Route path="/automation/services/voice" element={<Navigate to="/automation/services/ai-voice-agents" replace />} />
          <Route path="/automation/services/business-process" element={<Navigate to="/automation/services/business-process-automation" replace />} />
          <Route path="/automation/services/crm-migration" element={<Navigate to="/automation/services/crm-integration" replace />} />
          <Route path="/automation/services/email-marketing" element={<Navigate to="/automation/services/email-marketing-automation" replace />} />
          <Route path="/automation/services/api" element={<Navigate to="/automation/services/custom-api-n8n-zapier" replace />} />
          <Route path="/automation/*" element={<AutomationNotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function Layout() {
  const location = useLocation();
  const isAutomation = location.pathname.startsWith('/automation');

  return (
    <div className={`min-h-screen flex flex-col ${isAutomation ? 'bg-slate-950 text-slate-100' : ''}`}>
      {isAutomation ? <AutomationNavbar /> : <Navbar />}
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      {isAutomation ? <AutomationFooter /> : <Footer />}
      {!isAutomation && <FloatingCalendly />}
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <GoogleAnalytics />
        <ScrollToTopOnNavigation />
        <Layout />
      </Router>
    </HelmetProvider>
  );
}
