import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Privacy <span className="italic font-serif font-light text-white/40">Policy</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              Effective Date: April 2026. Your privacy is a priority at Sheun Hub.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto">
            <div className="md:col-span-4 space-y-8">
              <div className="bg-light p-8 rounded-2xl sticky top-32">
                <h3 className="text-xl font-bold text-navy mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li><a href="#collection" className="text-navy/60 hover:text-green font-medium transition-colors">Information Collection</a></li>
                  <li><a href="#usage" className="text-navy/60 hover:text-green font-medium transition-colors">How We Use It</a></li>
                  <li><a href="#sharing" className="text-navy/60 hover:text-green font-medium transition-colors">Information Sharing</a></li>
                  <li><a href="#security" className="text-navy/60 hover:text-green font-medium transition-colors">Data Security</a></li>
                  <li><a href="#contact" className="text-navy/60 hover:text-green font-medium transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-8 space-y-16 text-navy/80">
              <div className="space-y-6" id="collection">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy">
                    <Eye size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">1. Information We Collect</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  We collect information you provide directly to us when you fill out a form, request an audit, or communicate with us. This may include your name, email address, phone number, store URL, and project requirements.
                </p>
                <p className="leading-relaxed text-lg">
                  We also collect technical data automatically when you interact with our website, such as IP addresses, browser types, and usage patterns, to help us optimize the site.
                </p>
              </div>
              
              <div className="space-y-6" id="usage">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy">
                    <Shield size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">2. How We Use Your Information</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  We use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-navy/70">
                  <li>Provide, maintain, and improve our services.</li>
                  <li>Process your requests and build targeted project roadmaps.</li>
                  <li>Communicate with you regarding updates, support, and administrative messages.</li>
                  <li>Detect, investigate, and prevent fraudulent transactions or illegal activities.</li>
                </ul>
              </div>

              <div className="space-y-6" id="sharing">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-navy">3. Information Sharing</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  We are committed to maintaining your trust and we want you to understand when and with whom we may share information collected about you. We do not share your personal information with third parties except as necessary to provide our services, process payments, or as required by law.
                </p>
              </div>

              <div className="space-y-6" id="security">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy">
                    <Lock size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">4. Data Security</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  We use reasonable administrative, technical, and physical measures to safeguard your personal information against loss, theft and unauthorized use, disclosure, or modification. However, please note that no internet transmission is completely secure.
                </p>
              </div>

              <div className="space-y-6" id="contact">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-navy">5. Contact Us</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sheunhost@gmail.com" className="text-green font-bold">sheunhost@gmail.com</a>. Let's make sure your data is as safe as your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
