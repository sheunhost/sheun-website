import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls the window to the top whenever the route changes.
 * This ensures that navigating to a new page doesn't keep the scroll position
 * from the previous page.
 */
export default function ScrollToTopOnNavigation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, let the browser handle it or scroll to that element
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}
