import "./globals.css";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Fifth Veil",
  description: "Discover exclusive swinger clubs and lifestyle venues.",
  icons: {
    icon: "favicon.png",
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
