import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Cpu, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AutomationNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/automation" },
    { name: "Services", href: "/automation/services" },
    { name: "Solutions", href: "/automation/solutions" },
    { name: "About", href: "/automation/about" },
    { name: "FAQ", href: "/automation/faq" },
    { name: "Contact", href: "/automation/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/automation" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Sheun <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest ml-1 bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/20">Systems</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-cyan-400 ${
                    location.pathname === link.href ? "text-cyan-400" : "text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/automation/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-slate-950 bg-white hover:scale-105 transition-all duration-300"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-24 pb-8 px-4 overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-2xl font-bold transition-colors ${
                    location.pathname === link.href ? "text-cyan-400" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-8 mt-4 border-t border-white/10">
                <Link
                  to="/automation/contact"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 rounded-xl font-bold text-slate-950 bg-white"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
