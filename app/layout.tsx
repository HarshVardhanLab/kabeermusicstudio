import type { Metadata, Viewport } from "next";
import { DM_Sans, Noto_Sans_Devanagari, Playfair_Display } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import MobileActions from "@/components/mobile-actions";
import Announcement from "@/components/announcement";
import { LanguageProvider } from "@/components/language-provider";
import Localized from "@/components/localized";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const notoDevanagari = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-hindi", display: "swap", preload: false });

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) } : {}),
  title: {
    default: "Bhajan Kirtan Sonotek — Make room for devotion",
    template: "%s | Bhajan Kirtan Sonotek",
  },
  description: "Explore devotional performances and enquire about a bhajan or kirtan for your occasion.",
  openGraph: {
    title: "Bhajan Kirtan Sonotek — Make room for devotion",
    description: "Explore devotional performances and enquire about a bhajan or kirtan for your occasion.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f4ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} ${notoDevanagari.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap"
        />
        {/* Material Symbols Rounded — icon font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>
        <LanguageProvider>
          <a className="skip-link" href="#main"><Localized>Skip to content</Localized></a>
          <Announcement />
          <SiteHeader />
          {children}
          <SiteFooter />
          <MobileActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
