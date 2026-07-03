import "./globals.css";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

// const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  metadataBase: new URL("https://www.thefifthveil.com"),

  title: "Fifth Veil | Swinger Clubs, Lifestyle Venues & Events",

  description: "Discover exclusive swinger clubs, lifestyle venues, and private adult events across the United States.",

  keywords: [
    "swinger clubs",
    "lifestyle clubs",
    "adult events",
    "lifestyle venues",
    "swinger resorts",
    "private clubs",
    "couples nightlife",
  ],

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

        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}
