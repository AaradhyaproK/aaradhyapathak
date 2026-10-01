import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0F0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Aaradhya Pathak",
    "Full Stack Developer",
    "QA Tester",
    "Technical SEO Specialist",
    "Nashik Developer",
    "React",
    "Next.js",
    "AI Base",
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@aaradhyapathak",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "YX7SA7ySorpFNlYucQdy5lGWM7SJNI0rOuk1dJEHp1U",
  },
  other: {
    ...(process.env.NEXT_PUBLIC_ADSENSE_ID
      ? { "google-adsense-account": process.env.NEXT_PUBLIC_ADSENSE_ID }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${bricolageGrotesque.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="google-site-verification"
          content="YX7SA7ySorpFNlYucQdy5lGWM7SJNI0rOuk1dJEHp1U"
        />
        <JsonLd type="home" />
      </head>
      <body className="bg-[#0E0F0C] text-[#F2F0E6] antialiased min-h-screen flex flex-col font-sans selection:bg-[#C8F169] selection:text-[#0E0F0C]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C8F169] focus:text-[#0E0F0C] focus:rounded-full focus:font-mono-label focus:text-xs focus:font-bold focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Consent Mode v2 Cookie Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
