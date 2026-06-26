/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import Apply from "./pages/Apply";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import BlogPost from "./pages/BlogPost";
import ShopifySeoSprint from "./pages/ShopifySeoSprint";
import ShopifyAudit from "./pages/ShopifyAudit";
import ConversionKillers from "./pages/ConversionKillers";
import ShopifySEOGuide from "./pages/ShopifySEOGuide";
import ShopifySettingsGuide from "./pages/ShopifySettingsGuide";
import ShopifySpeedOptimization from "./pages/ShopifySpeedOptimization";
import WooCommerceToShopifyMigration from "./pages/WooCommerceToShopifyMigration";
import BestDropshippingApps from "./pages/BestDropshippingApps";
import FashionDropshippingGuide from "./pages/FashionDropshippingGuide";
import LeveragingShopifyMarkets from "./pages/LeveragingShopifyMarkets";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnNavigation from "./components/ScrollToTopOnNavigation";
import FloatingCalendly from "./components/FloatingCalendly";
import GoogleAnalytics from "./components/GoogleAnalytics";

import SmoothScroll from "./components/SmoothScroll";

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
              <AnimatePresence mode="wait">
                <Routes>
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
              </AnimatePresence>
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
