import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "SEO Sprint", href: "/shopify-seo-sprint" },
  { name: "Blog", href: "/blog" },
  { name: "Calculator", href: "/calculator" },
  { name: "About", href: "/about" },
];

const darkHeroRoutes = [
  "/",
  "/blog",
  "/contact",
  "/apply",
  "/calculator",
  "/privacy-policy",
  "/terms-of-service",
];

const isDarkHeroRoute = (pathname: string) => {
  if (pathname === "/") return true;
  if (pathname.startsWith("/blog")) return true;
  if (pathname === "/contact") return true;
  if (pathname === "/apply") return true;
  if (pathname === "/calculator") return true;
  if (pathname === "/privacy-policy" || pathname === "/terms-of-service") return true;
  return false;
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkHero = isDarkHeroRoute(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Wall 3-Color Gradient Bar (Orange/Coral -> Pink/Magenta -> Purple/Deep Violet) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] z-[100] shadow-[0_1px_10px_rgba(217,70,239,0.35)]" />

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled 
            ? "bg-white/95 dark:bg-navy/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-4" 
            : "bg-transparent py-6 md:py-7"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-10">
            <Link to="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Sheun Hub - Shopify Development and Growth Expert" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className={cn(
                  "rounded-full object-cover shadow-lg border-2 border-[#D946EF]/30 group-hover:border-[#FF6B4A]/60 transition-all duration-500",
                  isScrolled ? "h-16 w-16 md:h-20 md:w-20" : "h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                )} 
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "text-xs font-bold uppercase tracking-[0.2em] transition-all relative group",
                      isActive
                        ? "text-[#8B5CF6]"
                        : isScrolled
                          ? "text-navy dark:text-white font-semibold hover:text-[#D946EF]"
                          : isDarkHero
                            ? "text-white/90 hover:text-[#D946EF]"
                            : "text-navy dark:text-white font-semibold hover:text-[#D946EF]"
                    )}
                  >
                    {link.name}
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9]"
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                );
              })}
              
              <Link 
                to="/apply" 
                className={cn(
                  "px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md",
                  isScrolled 
                    ? "bg-[#08090B] text-white hover:bg-gradient-to-r hover:from-[#FF6B4A] hover:via-[#D946EF] hover:to-[#6D28D9]" 
                    : "bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] text-white hover:opacity-90 shadow-[0_4px_20px_rgba(217,70,239,0.3)]"
                )}
              >
                Apply Now
              </Link>
              <ThemeToggle />
            </div>
          </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            className={cn(
              "p-2 rounded-xl transition-all duration-300",
              isScrolled 
                ? "text-navy dark:text-white hover:bg-navy/5 dark:hover:bg-white/5" 
                : isDarkHero 
                  ? "text-white hover:bg-white/10" 
                  : "text-navy dark:text-white hover:bg-navy/5 dark:hover:bg-white/5"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X size={32} className={cn(isScrolled || !isDarkHero ? "text-navy dark:text-white" : "text-white")} />
            ) : (
              <div className="space-y-1.5 p-1">
                <div className={cn(
                  "w-6 h-0.5 rounded-full transition-all duration-300",
                  isScrolled || !isDarkHero ? "bg-navy dark:bg-white" : "bg-white"
                )}></div>
                <div className={cn(
                  "w-8 h-0.5 rounded-full transition-all duration-300",
                  isScrolled || !isDarkHero ? "bg-navy dark:bg-white" : "bg-white"
                )}></div>
                <div className={cn(
                  "w-5 h-0.5 rounded-full transition-all duration-300",
                  isScrolled || !isDarkHero ? "bg-navy dark:bg-white" : "bg-white"
                )}></div>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-navy/95 backdrop-blur-2xl border-b border-navy/5 dark:border-white/10 p-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold flex items-center justify-between tracking-tighter",
                    location.pathname === link.href ? "text-[#8B5CF6]" : "text-navy dark:text-white"
                  )}
                >
                  {link.name}
                  <ChevronRight size={20} className="text-[#8B5CF6]" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
