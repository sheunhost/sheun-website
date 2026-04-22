import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import { FileText, Briefcase, CreditCard, Scale, Mail } from "lucide-react";

export default function TermsOfService() {
  return (
    <PageWrapper>
      <section className="pt-48 pb-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              Terms of <span className="italic font-serif font-light text-white/40">Service</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              Effective Date: April 2026. Please read these terms carefully before engaging Sheun Hub.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto">
            <div className="md:col-span-4 space-y-8">
              <div className="bg-light p-8 rounded-2xl sticky top-32">
                <h3 className="text-xl font-bold text-navy mb-6">Agreement Overview</h3>
                <ul className="space-y-4">
                  <li><a href="#acceptance" className="text-navy/60 hover:text-green font-medium transition-colors">1. Acceptance</a></li>
                  <li><a href="#services" className="text-navy/60 hover:text-green font-medium transition-colors">2. Services</a></li>
                  <li><a href="#responsibilities" className="text-navy/60 hover:text-green font-medium transition-colors">3. Responsibilities</a></li>
                  <li><a href="#payments" className="text-navy/60 hover:text-green font-medium transition-colors">4. Payments</a></li>
                  <li><a href="#ip" className="text-navy/60 hover:text-green font-medium transition-colors">5. Intellectual Property</a></li>
                  <li><a href="#liability" className="text-navy/60 hover:text-green font-medium transition-colors">6. Liability</a></li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-8 space-y-16 text-navy/80">
              <div className="space-y-6" id="acceptance">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy">
                    <FileText size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">1. Acceptance of Terms</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  By accessing the website at sheunhub.com or using our development and design services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
                </p>
              </div>
              
              <div className="space-y-6" id="services">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy">
                    <Briefcase size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">2. Description of Service</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  Sheun Hub provides professional Shopify store development, bespoke theme design, conversion rate optimization, and technical maintenance. All projects begin with a strategy audit, followed by a formal project roadmap. The exact specifications, timelines, and deliverables will be codified in a dedicated Project Agreement prior to commencement.
                </p>
              </div>

              <div className="space-y-6" id="responsibilities">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-navy">3. Client Responsibilities</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  To ensure a successful project outcome and adherence to timelines, the client agrees to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-navy/70">
                  <li>Provide timely feedback (usually within 24-48 hours of a request).</li>
                  <li>Supply high-resolution brand assets, product imagery, and copy on schedule.</li>
                  <li>Grant temporary access to their Shopify Admin panel, domain registrar, or relevant third-party apps as required.</li>
                </ul>
              </div>

              <div className="space-y-6" id="payments">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy">
                    <CreditCard size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">4. Payment Terms</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  Standard engagement requires an initial deposit (typically 50%) to secure a spot in the schedule, with the remaining balance due upon project completion or at agreed-upon milestones. Development will not commence until the initial deposit clears. All payments are non-refundable once work has commenced due to the customized nature of the service.
                </p>
              </div>

              <div className="space-y-6" id="ip">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-navy">5. Intellectual Property</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  Upon final payment, the client assumes full ownership and intellectual rights to the customized theme and assets deployed onto their Shopify store. Sheun Hub retains the right to display screenshots, links, and case studies of the completed work in our promotional portfolio and marketing materials.
                </p>
              </div>

              <div className="space-y-6" id="liability">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-light rounded-2xl flex items-center justify-center text-navy">
                    <Scale size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-navy">6. Limitation of Liability</h2>
                </div>
                <p className="leading-relaxed text-lg">
                  In no event shall Sheun Hub nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service.
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-navy/10 text-center">
                <p className="text-navy/60 italic font-serif">
                  For legal inquiries or clarifications on these terms, contact <a href="mailto:sheunhost@gmail.com" className="text-green font-bold px-1 hover:underline">sheunhost@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
