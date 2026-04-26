import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let currentRef: number;
    function raf(time: number) {
      lenis.raf(time);
      currentRef = requestAnimationFrame(raf);
    }
    currentRef = requestAnimationFrame(raf);

    // Initial check for hash on mount
    if (location.hash) {
      const target = document.querySelector(location.hash) as HTMLElement | null;
      if (target) {
        setTimeout(() => lenis.scrollTo(target), 100);
      }
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      // Handle #hash links
      if (anchor && anchor.hash) {
        // If it's a cross-page hash link, react-router handles the page load,
        // and the useEffect below will scroll to the hash after render.
        // If it's an intra-page hash link:
        if (anchor.pathname === window.location.pathname || !anchor.pathname) {
          const el = document.querySelector(anchor.hash) as HTMLElement | null;
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el);
            window.history.pushState(null, '', anchor.hash);
          }
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(currentRef);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Handle cross-page hash navigation
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash) as HTMLElement | null;
      if (target) {
        const lenis = new Lenis();
        setTimeout(() => lenis.scrollTo(target), 100);
      }
    }
  }, [location]);

  return <>{children}</>;
}
