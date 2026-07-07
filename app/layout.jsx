import "./globals.css";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";
import Footer from "./components/Footer";
import CookieConsentBanner from "@/components/cookie-consent-banner";
import { seoKeywords } from "@/lib/seoKeywords";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Fifth Veil | Swinger Clubs, Lifestyle Venues & Events",

  description: "Discover exclusive swinger clubs, lifestyle venues, and private adult events across the United States.",

  keywords: seoKeywords,

  openGraph: {
    title: "Fifth Veil | Swinger Clubs, Lifestyle Venues & Events",
    description: "Discover exclusive swinger clubs, lifestyle venues, and private adult events across the United States.",
    images: {
      url: "/opengraph.png",
    },
  },

  icons: {
    icon: "favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-body", lato.variable)}>
      <body>
        {children}
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
