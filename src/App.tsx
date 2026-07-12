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
import SmoothScroll from "./components/SmoothScroll";

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

// Loading fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-green border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
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
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <GoogleAnalytics />
        <ScrollToTopOnNavigation />
        <SmoothScroll>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
            <FloatingCalendly />
            <ScrollToTop />
          </div>
        </SmoothScroll>
      </Router>
    </HelmetProvider>
  );
}
