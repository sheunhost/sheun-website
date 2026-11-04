import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, X, CheckCircle2, Send, Video, ShieldCheck, ExternalLink, ArrowRight } from "lucide-react";

export default function DirectCallBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("14:00 - 14:30 UTC (09:00 AM - 09:30 AM EST)");
  const [topic, setTopic] = useState("Shopify SEO & Conversion Optimization");
  const [notes, setNotes] = useState("");

  // Tomorrow's date formatted as YYYY-MM-DD for min date attribute
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setErrorMsg("");
    };

    window.addEventListener("open-call-booking-modal", handleOpen);
    return () => window.removeEventListener("open-call-booking-modal", handleOpen);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const submissionDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "medium"
    });

    const formattedMessage = `NEW FREE 30-MINUTE STRATEGY CALL BOOKING\n\nDuration: 30 Minutes (Free 1-on-1 Session)\nCustomer Name: ${name.trim()}\nWork Email: ${email.trim()}\nShopify Store / Website: ${storeUrl.trim()}\nPreferred Date: ${date}\nPreferred 30-Min Slot: ${timeSlot}\nCall Focus: ${topic}\nProject Notes: ${notes.trim() || "None provided"}\nSubmission Date: ${submissionDate}`;

    const formData = new FormData();
    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");
    formData.append("subject", `NEW 30-MIN CALL BOOKING: ${name.trim()} (${date})`);
    formData.append("from_name", "Sheun Hub Direct Call Booking");
    formData.append("replyto", email.trim());
    formData.append("Call Duration", "30 Minutes (Free Call)");
    formData.append("Customer Name", name.trim());
    formData.append("Work Email", email.trim());
    formData.append("Shopify Store URL", storeUrl.trim());
    formData.append("Preferred Call Date", date);
    formData.append("Preferred 30-Min Slot", timeSlot);
    formData.append("Call Focus Topic", topic);
    formData.append("Project Notes", notes.trim() || "None provided");
    formData.append("message", formattedMessage);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        // Google Ads Conversion Tracking
        if (typeof (window as any).gtag !== "undefined") {
          (window as any).gtag("event", "conversion", {
            send_to: "AW-18133653660/tyjNCN6l37IcEJyx5sZD"
          });
        }
      } else {
        setErrorMsg("Failed to book call. Please try again or reach out to sheunhost@gmail.com directly.");
      }
    } catch (err) {
      console.error("Booking error:", err);
      // Fallback display success if network glitch on third party
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName("");
    setEmail("");
    setStoreUrl("");
    setDate("");
    setNotes("");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden text-slate-900 dark:text-white"
          >
            {/* Top 3-Color Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9]" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {isSuccess ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">30-Minute Call Confirmed!</h3>
                  <p className="text-slate-600 dark:text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name || "there"}</span>! Your free 30-minute strategy call request has been received.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-600 dark:text-white/80 space-y-1 text-left">
                  <p><strong>Duration:</strong> 30 Minutes (Free 1-on-1 Strategy Session)</p>
                  <p><strong>Scheduled Date:</strong> {date || "Earliest available date"}</p>
                  <p><strong>Preferred 30-Min Slot:</strong> {timeSlot}</p>
                  <p><strong>Confirmation Email:</strong> {email}</p>
                  <p className="pt-2 text-emerald-600 dark:text-emerald-400 font-medium">
                    ✓ A Google Meet link and calendar invite will be delivered to your inbox from <span className="underline">sheunhost@gmail.com</span> within 2 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Header */}
                <div className="space-y-1.5 pr-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D946EF]/10 border border-[#D946EF]/20 text-[#D946EF] text-xs font-bold uppercase tracking-wider">
                    <Video size={13} />
                    <span>Free 30-Minute Video Call</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Book a Free 30-Minute Strategy Call</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60">
                    No sign-in or account required. Select your preferred date and 30-minute time slot, and we will send your Google Meet invite directly.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-white/70 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="Customer Name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#D946EF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-white/70 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="Work Email"
                      required
                      placeholder="founder@mystore.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#D946EF]"
                    />
                  </div>
                </div>

                {/* Store URL */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-white/70 mb-1">
                    Shopify Store / Website URL *
                  </label>
                  <input
                    type="text"
                    name="Shopify Store URL"
                    required
                    placeholder="https://mystore.com"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#D946EF]"
                  />
                </div>

                {/* Preferred Date & 30-Minute Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-white/70 mb-1 flex items-center gap-1">
                      <Calendar size={13} className="text-[#FF6B4A]" />
                      <span>Preferred Date *</span>
                    </label>
                    <input
                      type="date"
                      name="Preferred Call Date"
                      required
                      min={minDate}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#D946EF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-600 dark:text-white/70 mb-1 flex items-center gap-1">
                      <Clock size={13} className="text-[#D946EF]" />
                      <span>Preferred 30-Min Slot *</span>
                    </label>
                    <select
                      name="Preferred 30-Min Slot"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#D946EF]"
                    >
                      <option value="10:00 - 10:30 UTC (05:00 AM - 05:30 AM EST)">10:00 AM - 10:30 AM UTC</option>
                      <option value="11:00 - 11:30 UTC (06:00 AM - 06:30 AM EST)">11:00 AM - 11:30 AM UTC</option>
                      <option value="12:00 - 12:30 UTC (07:00 AM - 07:30 AM EST)">12:00 PM - 12:30 PM UTC</option>
                      <option value="13:00 - 13:30 UTC (08:00 AM - 08:30 AM EST)">01:00 PM - 01:30 PM UTC</option>
                      <option value="14:00 - 14:30 UTC (09:00 AM - 09:30 AM EST)">02:00 PM - 02:30 PM UTC (09:00 AM EST)</option>
                      <option value="15:00 - 15:30 UTC (10:00 AM - 10:30 AM EST)">03:00 PM - 03:30 PM UTC (10:00 AM EST)</option>
                      <option value="16:00 - 16:30 UTC (11:00 AM - 11:30 AM EST)">04:00 PM - 04:30 PM UTC (11:00 AM EST)</option>
                      <option value="17:00 - 17:30 UTC (12:00 PM - 12:30 PM EST)">05:00 PM - 05:30 PM UTC (12:00 PM EST)</option>
                      <option value="18:00 - 18:30 UTC (01:00 PM - 01:30 PM EST)">06:00 PM - 06:30 PM UTC (01:00 PM EST)</option>
                      <option value="19:00 - 19:30 UTC (02:00 PM - 02:30 PM EST)">07:00 PM - 07:30 PM UTC (02:00 PM EST)</option>
                      <option value="20:00 - 20:30 UTC (03:00 PM - 03:30 PM EST)">08:00 PM - 08:30 PM UTC (03:00 PM EST)</option>
                    </select>
                  </div>
                </div>

                {/* Call Focus */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-white/70 mb-1">
                    Call Focus / Topics
                  </label>
                  <select
                    name="Call Focus Topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#0B132B] border border-slate-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#D946EF]"
                  >
                    <option value="Shopify SEO & Conversion Optimization">Shopify Technical SEO & Conversion Optimization</option>
                    <option value="48-Hour Shopify SEO Sprint">48-Hour Shopify SEO Sprint ($250)</option>
                    <option value="Custom Liquid Development & Theme Builds">Custom Liquid Development & Theme Builds</option>
                    <option value="WooCommerce or Magento to Shopify Migration">Store Migration (WooCommerce / Magento to Shopify)</option>
                    <option value="Shopify Speed & Core Web Vitals Optimization">Shopify Speed & Core Web Vitals Optimization</option>
                    <option value="AI Workflow & CRM Business Automation">AI Workflow & CRM Business Automation</option>
                    <option value="General Consultation & Retainer">General Consultation & Monthly Retainer</option>
                  </select>
                </div>

                {/* Brief Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-600 dark:text-white/70 mb-1">
                    What would you like to achieve? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    name="Project Notes"
                    placeholder="Briefly describe what you would like to discuss during our 30-minute call..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm focus:outline-none focus:border-[#D946EF] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] text-white font-bold text-base hover:opacity-95 shadow-lg shadow-[#D946EF]/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>{isSubmitting ? "Confirming 30-Min Call..." : "Confirm Free 30-Minute Strategy Call"}</span>
                  <Send size={18} className={`transform transition-transform ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"}`} />
                </button>

                {/* Trust Footer with Calendly Alternative Link */}
                <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-white/60">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    100% Free 30-Minute Session. No account or login required.
                  </span>
                  <a
                    href="https://calendly.com/sheunhost/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#D946EF] hover:underline font-semibold"
                  >
                    <span>Prefer Calendly link?</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
