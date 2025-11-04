import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AppProviders } from "@/components/providers/app-providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Gramlex Investments | Steel Reinforcement Experts",
    template: "%s | Gramlex Investments",
  },
  description:
    "Gramlex Investments delivers premium steel reinforcement solutions for construction, civil engineering, and mining projects across Zimbabwe.",
  metadataBase: new URL("https://www.gramlex.co.zw"),
  openGraph: {
    title: "Gramlex Investments",
    description:
      "Steel reinforcement specialists offering supply, fabrication, and installation services for infrastructure projects across Zimbabwe.",
    url: "https://www.gramlex.co.zw",
    siteName: "Gramlex Investments",
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gramlex Investments",
    description:
      "Steel reinforcement specialists offering supply, fabrication, and installation services for infrastructure projects across Zimbabwe.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <AppProviders>
          <Navigation />
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
