import { Lora, Montserrat } from "next/font/google";

// Self-hosted by Next.js at build time. Optional prevents a late font swap;
// preloading and metric-adjusted fallbacks keep the first render stable.
export const headingFont = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "optional",
  adjustFontFallback: true,
  preload: true,
});
export const bodyFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "optional",
  adjustFontFallback: true,
  preload: true,
});
