import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Facebook, Twitter, Send, CheckCircle2, Gift, Globe, Star, ArrowRight, MapPin, Clock, Phone, Zap, ChevronDown } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

const contactInfo = [
  { icon: Mail, label: "Email", value: "sheun.online (Sheun Hub)", href: "mailto:sheunhost@gmail.com", desc: "For project inquiries" },
  { icon: MessageCircle, label: "WhatsApp (NG)", value: "+234 808 431 5743", href: "#", desc: "Instant chat support" },
  { icon: MessageCircle, label: "WhatsApp (UK)", value: "+44 7476 664292", href: "#", desc: "Instant chat support" },
  { icon: Star, label: "Upwork", value: "upwork.com/freelancers/sheun_hub", href: "https://upwork.com/freelancers/sheun_hub", desc: "Order via platform" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sheun", href: "#", desc: "Professional network" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "c0573f7d-6191-4374-bc31-ee70ee9fa226");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        console.error("Error submitting form", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper 
      title="Contact" 
      description="Get in touch with Sheun for your next Shopify project. Free store audits and project quotes available."
      canonical="/contact"
    >
      {/* Contact Hero - Editorial Style */}
      <section className="pt-48 pb-32 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--color-green)_0%,_transparent_70%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl space-y-16">
            <div className="space-y-8">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-green text-xs font-bold uppercase tracking-[0.5em]"
              >
                Get in Touch
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-[118px] font-bold text-white tracking-tighter leading-[0.8]"
              >
                Contact Sheun, <br />
                <span className="italic font-serif font-light text-white/40">Shopify Expert</span>.
              </motion.h1>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-16"
            >
              <p className="text-white/60 text-2xl leading-relaxed max-w-2xl font-serif italic">
                Have a project in mind? Fill out the form or reach out directly — I respond within 24 hours.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 text-white/80 font-bold">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-green">
                    <Clock size={24} />
                  </div>
                  <span className="text-sm uppercase tracking-[0.2em]">Response in 24h</span>
                </div>
                <div className="flex items-center gap-4 text-white/80 font-bold">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-green">
                    <Globe size={24} />
                  </div>
                  <span className="text-sm uppercase tracking-[0.2em]">Global Availability</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Split Visible Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Left: Info Cards */}
            <div className="lg:col-span-5 space-y-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 md:p-12 bg-light rounded-[60px] border border-transparent hover:border-green/30 transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={20} className="text-green -rotate-45" />
                    </div>
                    <div className="space-y-8 relative z-10 w-full flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-navy group-hover:bg-green group-hover:text-navy transition-all duration-500 shadow-sm">
                        <item.icon size={32} />
                      </div>
                      <div className="space-y-3 w-full">
                        <p className="text-[10px] font-bold text-navy/30 uppercase tracking-[0.3em]">{item.label}</p>
                        <p className="text-xl font-bold text-navy tracking-tight break-all break-words">{item.value}</p>
                        <p className="text-sm text-navy/40 font-serif italic">{item.desc}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="p-16 bg-navy-gradient text-white rounded-[80px] space-y-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-16 opacity-10">
                  <Globe size={240} className="animate-spin-slow" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex items-center gap-4 bg-green/20 text-green border border-green/20 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">
                    <Zap size={16} /> Fast Response
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold leading-tight tracking-tighter">Based in Nigeria <br />Working Globally.</h3>
                    <p className="text-white/40 text-xl leading-relaxed max-w-sm font-serif italic">
                      I've built a workflow that allows me to work seamlessly with clients across all time zones.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-green font-bold text-lg">
                    <CheckCircle2 size={24} /> Average response: &lt; 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form - Visible Grid Style */}
            <div className="lg:col-span-7">
              <div className="bg-light p-12 md:p-20 rounded-[60px] border border-navy/5 relative overflow-hidden shadow-sm">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          className="w-full bg-white border-b-2 border-navy/5 rounded-3xl py-6 px-8 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          className="w-full bg-white border-b-2 border-navy/5 rounded-3xl py-6 px-8 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">WhatsApp / Phone</label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-white border-b-2 border-navy/5 rounded-3xl py-6 px-8 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Project Type</label>
                        <div className="relative">
                          <select name="project_type" className="w-full bg-white border-b-2 border-navy/5 rounded-3xl py-6 px-8 focus:border-green outline-none transition-all appearance-none font-medium text-navy">
                            <option>New Store Build</option>
                            <option>Dropshipping Store</option>
                            <option>Store Migration</option>
                            <option>Theme Redesign</option>
                            <option>Bug Fix</option>
                            <option>Free Store Audit</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown className="absolute right-8 top-1/2 -translate-y-1/2 text-navy/20 pointer-events-none" size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Project Description</label>
                      <textarea
                        required
                        name="message"
                        rows={6}
                        placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                        className="w-full bg-white border-b-2 border-navy/5 rounded-[40px] py-8 px-10 focus:border-green outline-none transition-all resize-none font-medium text-navy placeholder:text-navy/20"
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      className="w-full bg-navy text-white py-8 rounded-full font-bold text-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-4 group shadow-xl"
                    >
                      {isSubmitting ? (
                        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-8"
                  >
                    <div className="w-32 h-32 bg-green/20 text-green rounded-[40px] flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={64} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-5xl font-bold text-navy tracking-tight">Message Sent!</h3>
                      <p className="text-navy/40 text-xl max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. I've received your message and will get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-navy font-bold text-lg border-b-2 border-green pb-1 hover:text-green transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Audit Highlight - Recipe 2 */}
      <section className="py-32 bg-light relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-green rounded-[60px] p-16 md:p-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-16 opacity-10">
              <Gift size={300} className="text-navy" />
            </div>
            <div className="space-y-12 relative z-10">
              <div className="w-24 h-24 bg-navy rounded-[32px] flex items-center justify-center text-green shadow-2xl rotate-6">
                <Gift size={48} />
              </div>
              <div className="space-y-6">
                <h2 className="text-5xl md:text-7xl font-bold text-navy leading-[0.9] tracking-tighter">
                  Not ready <br />
                  to <span className="italic font-serif font-light text-navy/40">commit?</span>
                </h2>
                <p className="text-navy/60 text-2xl font-medium">Start with a FREE Store Audit.</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Speed review",
                  "Design feedback",
                  "SEO health check",
                  "Conversion tips",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-navy font-bold uppercase tracking-widest text-xs">
                    <div className="w-2 h-2 bg-navy rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-12 md:p-16 rounded-[50px] shadow-2xl space-y-10 relative z-10 border border-white/20">
              <input type="hidden" name="subject" value="New Free Store Audit Request" />
              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Store URL</label>
                  <input
                    type="text"
                    name="store_url"
                    required
                    placeholder="yourstore.com"
                    className="w-full bg-light border-b-2 border-navy/5 rounded-3xl py-6 px-8 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-navy/40 uppercase tracking-[0.3em] ml-4">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-light border-b-2 border-navy/5 rounded-3xl py-6 px-8 focus:border-green outline-none transition-all font-medium text-navy placeholder:text-navy/20"
                  />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-navy text-white py-6 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl disabled:opacity-50">
                {isSubmitting ? "Sending..." : "Claim Free Audit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
