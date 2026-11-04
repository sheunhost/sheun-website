import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openDirectBookingModal = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-call-booking-modal"));
  }
};

// Seamless direct booking alias - replaces broken Calendly account sign-in prompt
export const openCalendlyPopup = openDirectBookingModal;

export const openExternalCalendly = (e?: React.MouseEvent) => {
  if (e) e.preventDefault();
  if (typeof window !== "undefined") {
    window.open("https://calendly.com/sheunhost/30min", "_blank", "noopener,noreferrer");
  }
};
