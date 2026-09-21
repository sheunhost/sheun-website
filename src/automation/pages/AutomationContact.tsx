import { useState, FormEvent } from "react";
import { 
  PhoneCall, Mail, ShieldCheck, Sparkles, Send, CheckCircle2, Calendar, Lock, ArrowRight, Check
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";
import { openCalendlyPopup } from "../../lib/utils";

export default function AutomationContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    industry: "Healthcare & Clinics",
    budget: "$2,500 - $5,000",
    selectedServices: [] as string[],
    currentStack: "",
    message: ""
  });

  const availableServices = [
    "AI Workflow Automation (n8n / Make)",
    "GoHighLevel CRM Setup & Automation",
    "AI Voice Agents & Inbound Calling",
    "Customer Support AI Chatbots",
    "Business Process Automation (BPA)",
    "Shopify / E-Commerce Data Sync",
    "Email & SMS Marketing Automation",
    "Custom API & Webhook Middleware"
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(service);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter(s => s !== service) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, service] };
      }
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const data = new FormData();
    data.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    data.append("from_name", "Sheun Hub Automation Division");
    data.append("subject", `New Automation Project Intake: ${formData.fullName} (${formData.companyName})`);
    data.append("name", formData.fullName);
    data.append("email", formData.email);
    data.append("company", formData.companyName);
    data.append("phone", formData.phone);
    data.append("industry", formData.industry);
    data.append("budget_tier", formData.budget);
    data.append("selected_services", formData.selectedServices.join(", ") || "General Systems Architecture");
    data.append("current_stack", formData.currentStack);
    data.append("message", formData.message);

    try {
      // 1. Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });
      const result = await response.json();

      if (result.success) {
        // 2. Submit to Mailchimp/CRM Hub
        const nameParts = formData.fullName.trim().split(" ");
        fetch("/api/connect/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            firstName: nameParts[0] || "",
            lastName: nameParts.slice(1).join(" ") || ""
          })
        }).catch(err => console.error("CRM Sync Error:", err));

        // 3. Google Ads Conversion Tracking
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'conversion', {'send_to': 'AW-18133653660/tyjNCN6l37IcEJyx5sZD'});
        }

        setIsSuccess(true);
      } else {
        setErrorMessage(result.message || "Failed to submit request. Please try again or book via our calendar.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please book directly through our calendar or email hello@sheun.online.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AutomationPageWrapper
      title="Book AI Automation Consultation | Sheun Hub"
      description="Book a free 30-minute AI & Automation Strategy Session with our engineering team to map your workflows, software stack, and projected ROI."
    >
      {/* Top Header Section */}
      <section className="relative pt-32 pb-16 bg-[#FFFFFF] border-b border-[#E2E8F0] text-center">
        {/* Top Rim Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-[#6D28D9] to-[#FF6B4A]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono font-bold shadow-xs">
            <PhoneCall className="w-3.5 h-3.5 text-cyan-600" />
            <span>Direct Systems Engineering Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Schedule Your Free Strategy Session
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Discuss your current operational friction points, software stack, and automation goals directly with our lead automation architects.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Instant Calendly Card */}
              <div className="bg-white border-2 border-cyan-300 rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-[#6D28D9]" />
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-200">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-700 font-bold uppercase tracking-wider">Fastest Response</span>
                    <h3 className="text-xl font-bold text-[#0F172A]">Instant Calendar Booking</h3>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Skip the back-and-forth email scheduling. Choose an open slot on our team calendar for an immediate 30-minute technical session.
                </p>

                <button
                  onClick={openCalendlyPopup}
                  className="w-full py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-[#6D28D9] hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Calendly &amp; Select Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Consultation Agenda Card */}
              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#0F172A]">What Happens on the Call?</h3>
                
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 text-xs font-bold font-mono">1</div>
                    <div>
                      <strong className="text-[#0F172A]">Workflow Audit:</strong> We review your daily manual processes, staff hours spent, and disconnected tools.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 text-xs font-bold font-mono">2</div>
                    <div>
                      <strong className="text-[#0F172A]">Architecture Blueprint:</strong> We propose exact API connectors, AI voice models, and CRM pipelines required.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0 text-xs font-bold font-mono">3</div>
                    <div>
                      <strong className="text-[#0F172A]">Clear Scope &amp; ROI:</strong> We deliver a fixed-scope 14-day production roadmap with transparent pricing.
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500 font-mono">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Free 30-minute session • Zero pressure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-600" />
                    <span>Mutual Non-Disclosure Agreement (NDA) included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#6D28D9]" />
                    <span>Direct: hello@sheun.online</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 shadow-xl">
                
                <div className="mb-8 pb-6 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-[#0F172A]">Or Submit Project Details</h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Fill out the scoping questionnaire below and our engineering team will review your software architecture before following up within 24 hours.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A]">Request Successfully Sent!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.fullName}. Our lead systems architect has received your details and will deliver a personalized scoping review to <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          companyName: "",
                          phone: "",
                          industry: "Healthcare & Clinics",
                          budget: "$2,500 - $5,000",
                          selectedServices: [],
                          currentStack: "",
                          message: ""
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
                    >
                      Submit Another Scope
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rachel Chen"
                          className="w-full bg-slate-50 border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-cyan-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rachel@company.com"
                          className="w-full bg-slate-50 border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-cyan-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g. Vantage Dental Care"
                          className="w-full bg-slate-50 border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-cyan-500 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 234-5678"
                          className="w-full bg-slate-50 border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-cyan-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                          Industry Focus
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full bg-slate-50 border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-cyan-500 focus:bg-white"
                        >
                          <option value="Healthcare & Clinics">Healthcare &amp; Dental Clinics</option>
                          <option value="Real Estate & Property">Real Estate &amp; Property</option>
                          <option value="Legal & Financial">Legal &amp; Financial Services</option>
                          <option value="E-Commerce & Retail">E-Commerce &amp; Retail</option>
                          <option value="SaaS & Technology">SaaS &amp; Technology</option>
                          <option value="Home Services & Contractors">Home Services &amp; Contractors</option>
                          <option value="Other">Other High-Volume Operation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                          Estimated Budget Tier
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-slate-50 border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-cyan-500 focus:bg-white"
                        >
                          <option value="Under $2,500">Under $2,500 (Initial Audit / Single Flow)</option>
                          <option value="$2,500 - $5,000">$2,500 - $5,000 (Core Department Automation)</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000 (Multi-System Architecture)</option>
                          <option value="$10,000+">$10,000+ (Full Enterprise Pipeline)</option>
                        </select>
                      </div>
                    </div>

                    {/* Services Multi-Select Grid */}
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                        Interested Capabilities (Select all that apply)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {availableServices.map((service) => {
                          const isSelected = formData.selectedServices.includes(service);
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => handleServiceToggle(service)}
                              className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? "bg-cyan-50 border-cyan-500 text-cyan-900 font-bold"
                                  : "bg-slate-50 border-[#E2E8F0] text-slate-600 hover:bg-slate-100"
                              }`}
                            >
                              <span>{service}</span>
                              <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                                isSelected ? "bg-cyan-600 border-cyan-600 text-white" : "border-slate-300 bg-white"
                              }`}>
                                {isSelected && <Check className="w-3 h-3" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                        Current Software Stack
                      </label>
                      <input
                        type="text"
                        value={formData.currentStack}
                        onChange={(e) => setFormData({ ...formData, currentStack: e.target.value })}
                        placeholder="e.g. GoHighLevel, HubSpot, Shopify, Zapier, Google Workspace"
                        className="w-full bg-slate-50 border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-cyan-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1.5">
                        Project Overview &amp; Primary Bottleneck
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your current manual bottlenecks, volume of inquiries, or system goals..."
                        className="w-full bg-slate-50 border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-cyan-500 focus:bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-[#6D28D9] text-white font-extrabold text-base hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Submitting Scoping Form..." : "Submit Project Intake"}</span>
                    </button>

                    <div className="flex items-center justify-center gap-4 text-xs text-slate-500 font-mono">
                      <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Web3Forms &amp; CRM Sync</span>
                      <span>•</span>
                      <span>100% Confidential</span>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
