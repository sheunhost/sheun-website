import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Cpu, Menu, X, ChevronDown, Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { AUTOMATION_SERVICES } from "../data/automationData";

export default function AutomationNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3" 
          : "bg-slate-950/60 backdrop-blur-md border-b border-slate-800/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/automation" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Sheun
                </span>
                <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Automation
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                AI & Workflow Systems
              </span>
            </div>
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
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
                        isActive 
                          ? "text-cyan-400 bg-slate-900/80 border border-slate-800" 
                          : "text-slate-300 hover:text-white hover:bg-slate-900/50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180 text-cyan-400" : ""}`} />
                    </Link>

                    {/* Services Mega Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-2xl p-4 shadow-2xl shadow-slate-950/80 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {AUTOMATION_SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            to={`/automation/services/${service.slug}`}
                            className="p-3 rounded-xl hover:bg-slate-800/70 transition-all border border-transparent hover:border-slate-700/50 group/item flex items-start gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                              <Sparkles className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover/item:text-cyan-300 transition-colors flex items-center gap-1">
                                {service.title}
                              </div>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                {service.shortDescription}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 mt-2 pt-3 border-t border-slate-800/80 flex items-center justify-between px-2 text-xs">
                          <span className="text-slate-400 font-mono">8 Custom AI Services Available</span>
                          <Link to="/automation/services" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1">
                            View All Services <ArrowRight className="w-3 h-3" />
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
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? "text-cyan-400 bg-slate-900/80 border border-slate-800" 
                      : "text-slate-300 hover:text-white hover:bg-slate-900/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/automation/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300 transform active:scale-95 group overflow-hidden"
            >
              <PhoneCall className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <Link
              to="/automation/contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200 z-50">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800"
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 pl-3 border-l border-slate-800 my-1 space-y-1">
                    {AUTOMATION_SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        to={`/automation/services/${service.slug}`}
                        className="block px-3 py-1.5 text-xs text-slate-400 hover:text-cyan-400"
                      >
                        • {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <Link
                to="/automation/contact"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20"
              >
                <PhoneCall className="w-4 h-4" />
                Book Free Consultation
              </Link>
              <div className="text-center pt-2">
                <Link to="/services" className="text-xs text-slate-400 hover:text-cyan-400">
                  Switch to Shopify Division →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
