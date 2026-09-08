import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headingFont, bodyFont } from "@/lib/fonts";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: site.url,
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
  },
  robots: { index: false, follow: false },
  // app/icon.svg supplies the icon via Next.js file conventions.
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
