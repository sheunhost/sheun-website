import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openCalendlyPopup = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  
  const loadCalendly = () => {
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ 
        url: 'https://calendly.com/sheunhost?hide_gdpr_banner=1' 
      });
    }
  };

  if (!(window as any).Calendly) {
    // Load CSS
    if (!document.getElementById('calendly-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }
    
    // Load JS
    if (!document.getElementById('calendly-js')) {
      const script = document.createElement('script');
      script.id = 'calendly-js';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = loadCalendly;
      document.body.appendChild(script);
    }
  } else {
    loadCalendly();
  }
};
