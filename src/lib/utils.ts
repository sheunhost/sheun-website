import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openCalendlyPopup = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  if ((window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({ 
      url: 'https://calendly.com/sheunhost?hide_gdpr_banner=1&background_color=042f2e&text_color=ffffff&primary_color=c69c2d' 
    });
  }
};
