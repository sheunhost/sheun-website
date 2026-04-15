import PageWrapper from "../components/PageWrapper";

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
              Last updated: April 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-navy/80">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">1. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us when you fill out a form, request an audit, or communicate with us. This may include your name, email address, phone number, and store URL.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">2. How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to process your requests, and to communicate with you about your projects.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">3. Information Sharing</h2>
              <p className="leading-relaxed">
                We do not share your personal information with third parties except as necessary to provide our services or as required by law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">4. Data Security</h2>
              <p className="leading-relaxed">
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">5. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at sheunhost@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
