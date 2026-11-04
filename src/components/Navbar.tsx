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
  // Routes with light background hero in light mode
  if (
    pathname === "/services" ||
    pathname.startsWith("/services/") ||
    pathname === "/portfolio" ||
    pathname === "/about" ||
    pathname === "/shopify-seo-sprint" ||
    pathname === "/seo-sprint"
  ) {
    return false;
  }
  // All other pages (Home /, /blog, /blog/*, /contact, /apply, /calculator, /privacy-policy, /terms-of-service, etc.) have dark navy hero backgrounds
  return true;
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDarkHero = isDarkHeroRoute(location.pathname);
  const isDarkBackground = !isScrolled && isDarkHero;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* Top Wall 3-Color Gradient Bar (Orange/Coral -> Pink/Magenta -> Purple/Deep Violet) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] z-[100] shadow-[0_1px_10px_rgba(217,70,239,0.35)]" />

      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-[var(--header-h)] flex items-center transition-colors duration-300",
          isScrolled 
            ? "bg-white/95 dark:bg-navy/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-b border-slate-200/80 dark:border-white/10" 
            : isDarkHero
              ? "bg-navy/80 backdrop-blur-md border-b border-white/10"
              : "bg-white/80 dark:bg-navy/80 backdrop-blur-md border-b border-slate-200/40 dark:border-white/10"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-full">
          <div className="flex items-center gap-6 lg:gap-10 h-full">
            <Link to="/" className="flex items-center group shrink-0" aria-label="Sheun Hub Home">
              <img 
                src="/logo.webp" 
                srcSet="/logo.webp 1x, /logo-2x.webp 2x"
                alt="Sheun Hub" 
                width="112"
                height="112"
                loading="eager"
                fetchPriority="high"
                className="rounded-full object-cover shadow-lg border-2 border-[#D946EF]/30 group-hover:border-[#FF6B4A]/60 transition-all duration-300 h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
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
                        ? "text-[#D946EF] dark:text-[#D946EF]"
                        : isDarkBackground
                          ? "text-white/95 hover:text-white drop-shadow-sm hover:text-[#D946EF]"
                          : "text-[#0F172A] dark:text-white hover:text-[#D946EF]"
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
                    ? "bg-[#08090B] dark:bg-white dark:text-[#08090B] text-white hover:bg-gradient-to-r hover:from-[#FF6B4A] hover:via-[#D946EF] hover:to-[#6D28D9] dark:hover:text-white" 
                    : "bg-gradient-to-r from-[#FF6B4A] via-[#D946EF] to-[#6D28D9] text-white hover:opacity-90 shadow-[0_4px_20px_rgba(217,70,239,0.3)]"
                )}
              >
                Apply Now
              </Link>
              <ThemeToggle isDarkBackground={isDarkBackground} />
            </div>
          </div>

        {/* Mobile Toggle & Theme */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle isDarkBackground={isDarkBackground} />
          <button
            className={cn(
              "p-2.5 min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center transition-all duration-300",
              isDarkBackground
                ? "text-white hover:bg-white/10"
                : "text-[#0F172A] dark:text-white hover:bg-navy/5 dark:hover:bg-white/5"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X size={26} className={isDarkBackground ? "text-white" : "text-[#0F172A] dark:text-white"} />
            ) : (
              <div className="space-y-1.5 p-0.5">
                <div className={cn("w-6 h-0.5 rounded-full transition-all duration-300", isDarkBackground ? "bg-white" : "bg-[#0F172A] dark:bg-white")}></div>
                <div className={cn("w-7 h-0.5 rounded-full transition-all duration-300", isDarkBackground ? "bg-white" : "bg-[#0F172A] dark:bg-white")}></div>
                <div className={cn("w-5 h-0.5 rounded-full transition-all duration-300", isDarkBackground ? "bg-white" : "bg-[#0F172A] dark:bg-white")}></div>
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
            className="absolute top-full left-0 right-0 bg-white/98 dark:bg-navy/98 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 p-8 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold flex items-center justify-between tracking-tighter transition-colors",
                    location.pathname === link.href ? "text-[#D946EF]" : "text-[#0F172A] dark:text-white hover:text-[#D946EF]"
                  )}
                >
                  {link.name}
                  <ChevronRight size={20} className={location.pathname === link.href ? "text-[#D946EF]" : "text-[#8B5CF6]"} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </header>
  );
}
