import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { 
  PhoneCall, Mail, ShieldCheck, Clock, Sparkles, Send, CheckCircle2, Cpu
} from "lucide-react";
import AutomationPageWrapper from "../components/AutomationPageWrapper";

export default function AutomationContact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    "AI Workflow Automation",
    "GoHighLevel CRM Setup & Automation",
    "AI Chatbot Development",
    "AI Voice Agent & AI Calling",
    "Business Process Automation (BPA)",
    "CRM Integration & Migration",
    "Email & Marketing Automation",
    "Custom API & n8n/Zapier Middleware"
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call and redirect to thank-you page
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/automation/thank-you");
    }, 1200);
  };

  return (
    <AutomationPageWrapper
      title="Book AI Automation Consultation | Sheun Automation"
      description="Book a free 30-minute AI & Automation Strategy Session with our engineering team to map your workflows, software stack, and projected ROI."
    >
      <section className="relative pt-32 pb-16 bg-slate-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Direct Engineering Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Book Your Free Strategy Session
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Discuss your current operational friction points, software stack, and automation goals with our lead engineers.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-white">What Happens on the Call?</h2>
                
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 text-xs font-bold font-mono">1</div>
                    <div>
                      <strong className="text-white">Workflow Audit:</strong> We review your daily manual processes, staff hours spent, and software touchpoints.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 text-xs font-bold font-mono">2</div>
                    <div>
                      <strong className="text-white">Architecture Blueprint:</strong> We propose exact API connectors, AI models, and CRM workflows required.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 text-xs font-bold font-mono">3</div>
                    <div>
                      <strong className="text-white">ROI &amp; Quote Calculation:</strong> We provide fixed project pricing, implementation timelines, and payroll savings estimates.
                    </div>
                  </li>
                </ul>

                <div className="pt-6 border-t border-slate-800 space-y-3 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>Response SLA: &lt; 2 hours during business hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>Email: hello@sheun.online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>SOC2 Compliant &amp; Confidentiality NDA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-2">Project &amp; Consultation Details</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="s.jenkins@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Company Name</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Apex Enterprise"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                {/* Services Needed Checkboxes */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Services Interested In (Select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableServices.map((srv) => {
                      const checked = formData.selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => handleServiceToggle(srv)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all border flex items-center justify-between ${
                            checked
                              ? "bg-blue-600/20 border-cyan-400 text-cyan-300"
                              : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          <span className="truncate">{srv}</span>
                          {checked && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Industry Sector</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                    >
                      <option>Healthcare &amp; Clinics</option>
                      <option>Real Estate &amp; Property</option>
                      <option>Professional Services &amp; Legal</option>
                      <option>Marketing Agencies</option>
                      <option>E-Commerce &amp; DTC</option>
                      <option>Education &amp; Coaching</option>
                      <option>Finance &amp; Wealth</option>
                      <option>Construction &amp; Field Services</option>
                      <option>Hospitality &amp; Travel</option>
                      <option>Other / Tech SaaS</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Project Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-400"
                    >
                      <option>$1,500 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000 - $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Current Software Tools in Use</label>
                  <input
                    type="text"
                    value={formData.currentStack}
                    onChange={(e) => setFormData({ ...formData, currentStack: e.target.value })}
                    placeholder="e.g. GoHighLevel, HubSpot, Zapier, Stripe, QuickBooks..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Describe Your Current Manual Bottleneck or Goals</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what process is taking up too much time or where leads are falling through..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:shadow-xl hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 animate-spin text-cyan-200" />
                      <span>Scheduling Strategy Call...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      <span>Submit &amp; Schedule Strategy Session</span>
                    </span>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </AutomationPageWrapper>
  );
}
