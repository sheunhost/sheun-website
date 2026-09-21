import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles, ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import { AUTOMATION_SERVICES } from "../data/automationData";
import { openCalendlyPopup } from "../../lib/utils";

export default function AutomationNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/automation" },
    { name: "Services", href: "/automation/services", hasDropdown: true },
    { name: "Solutions", href: "/automation/solutions" },
    { name: "Industries", href: "/automation/industries" },
    { name: "Case Studies", href: "/automation/case-studies" },
    { name: "About", href: "/automation/about" },
    { name: "FAQ", href: "/automation/faq" },
    { name: "Contact", href: "/automation/contact" }
  ];

  return (
    <>
      {/* Top 3-Color Gradient Wall Bar (Orange/Coral -> Cyan/Aqua -> Deep Purple) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B4A] via-cyan-400 to-[#6D28D9] z-[100] shadow-[0_1px_10px_rgba(6,182,212,0.35)]" />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3" 
            : "bg-white/80 backdrop-blur-md border-b border-[#E2E8F0]/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Primary Multi-Colored Geometric Logo */}
            <Link 
              to="/automation" 
              className="flex items-center group focus:outline-none"
              aria-label="Sheun Hub"
            >
              <img 
                src="/logo.png" 
                alt="Sheun Hub" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-11 w-11 sm:h-13 sm:w-13 rounded-full object-cover shadow-sm border-2 border-cyan-400/40 group-hover:border-[#FF6B4A]/70 transition-all duration-300" 
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                  (link.href !== "/automation" && location.pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div 
                      key={link.name} 
                      className="relative group"
                      onMouseEnter={() => setServicesDropdown(true)}
                      onMouseLeave={() => setServicesDropdown(false)}
                    >
                      <Link
                        to={link.href}
                        className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                          isActive 
                            ? "text-cyan-700 bg-cyan-50 border border-cyan-200/80 shadow-xs" 
                            : "text-[#334155] hover:text-cyan-700 hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180 text-cyan-600" : ""}`} />
                      </Link>

                      {/* Services Mega Dropdown */}
                      {servicesDropdown && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white backdrop-blur-2xl border border-[#E2E8F0] rounded-2xl p-4 shadow-2xl shadow-slate-900/10 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                          {AUTOMATION_SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              to={`/automation/services/${service.slug}`}
                              className="p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200 group/item flex items-start gap-3"
                            >
                              <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center shrink-0 group-hover/item:bg-cyan-600 group-hover/item:text-white transition-colors">
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-[#0F172A] group-hover/item:text-cyan-700 transition-colors flex items-center gap-1">
                                  {service.title}
                                </div>
                                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 mt-2 pt-3 border-t border-[#E2E8F0] flex items-center justify-between px-2 text-xs">
                            <span className="text-slate-500 font-mono">8 Custom AI Systems Available</span>
                            <Link to="/automation/services" className="text-cyan-600 hover:text-cyan-700 font-bold flex items-center gap-1">
                              View All Capabilities <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                      isActive 
                        ? "text-cyan-700 bg-cyan-50 border border-cyan-200/80 shadow-xs" 
                        : "text-[#334155] hover:text-cyan-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA with Calendly Instant Booking */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/"
                className="text-xs font-semibold text-slate-500 hover:text-[#0F172A] transition-colors flex items-center gap-1"
                title="Switch to main Shopify site"
              >
                <span>Shopify Hub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              <button
                onClick={openCalendlyPopup}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-[#6D28D9] hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all duration-300 transform active:scale-95 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-cyan-100 group-hover:rotate-12 transition-transform" />
                <span>Book Strategy Call</span>
              </button>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                onClick={openCalendlyPopup}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-600 text-white cursor-pointer"
              >
                Book Call
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#0F172A] bg-slate-100 border border-slate-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/98 backdrop-blur-2xl border-b border-[#E2E8F0] shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 z-50">
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="block px-4 py-2.5 rounded-xl text-base font-semibold text-[#0F172A] hover:bg-slate-50 border border-transparent hover:border-slate-200"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 pl-3 border-l border-slate-200 my-1 space-y-1">
                      {AUTOMATION_SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/automation/services/${service.slug}`}
                          className="block px-3 py-1.5 text-xs text-slate-600 hover:text-cyan-700"
                        >
                          • {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCalendlyPopup();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-[#6D28D9] shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Call (Calendly)
                </button>
                <div className="text-center pt-2">
                  <Link to="/" className="text-xs text-slate-500 hover:text-cyan-700 font-semibold">
                    Switch to Main Shopify Hub →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
