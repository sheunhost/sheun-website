import PageWrapper from "../components/PageWrapper";

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
              Last updated: April 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12 text-navy/80">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">2. Description of Service</h2>
              <p className="leading-relaxed">
                We provide Shopify store development, design, and optimization services. The specific details of the services will be outlined in a separate project agreement or proposal.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">3. Client Responsibilities</h2>
              <p className="leading-relaxed">
                You agree to provide timely feedback, necessary access to your Shopify store, and any required assets (images, copy, etc.) needed to complete the project.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">4. Payment Terms</h2>
              <p className="leading-relaxed">
                Payment terms, including milestones and final deliverables, will be specified in the project agreement. Work will commence upon receipt of the initial deposit.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">5. Intellectual Property</h2>
              <p className="leading-relaxed">
                Upon full payment, you will own the rights to the final deliverables. We retain the right to showcase the completed work in our portfolio.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">6. Limitation of Liability</h2>
              <p className="leading-relaxed">
                We shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
