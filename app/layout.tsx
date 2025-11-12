import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  siteConfig,
} from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["monospace"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://www.tavernacle.com"
  ),
  title: {
    default: "Tavernacle Social Club | Dueling Piano Bar Downtown SLC",
    template: "%s | Tavernacle Social Club",
  },
  description:
    "Salt Lake City's best bar for live dueling pianos, local beers & great vibes. This top-rated downtown SLC bar and piano bar has been the premier music venue since 2002. Open nightly 6pm-1am. LGBTQ+ friendly bar with full kitchen.",
  keywords: [
    "Salt Lake City bars",
    "downtown SLC nightlife",
    "bars near me Salt Lake City",
    "piano bar Salt Lake City",
    "dueling pianos SLC",
    "live music Salt Lake City",
    "karaoke Salt Lake City",
    "Broadway SLC bars",
    "best bars in Salt Lake City",
    "LGBTQ bars Salt Lake City",
    "local beer Salt Lake City",
    "Utah beer downtown",
    "drinks SLC",
    "date night Salt Lake City",
    "downtown Salt Lake City restaurants",
    "live entertainment SLC",
    "Utah piano bar",
    "SLC nightlife",
    "bars downtown Salt Lake",
    "music venue Salt Lake City",
  ],
  authors: [{ name: "Tavernacle Social Club" }],
  creator: "Tavernacle Social Club",
  publisher: "Tavernacle Social Club",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tavernacle.com",
    siteName: siteConfig.name,
    title:
      "Tavernacle Social Club | Salt Lake City's Premier Dueling Piano Bar & Best Bar Downtown",
    description:
      "Downtown SLC's best bar for live music! Top-rated piano bar featuring dueling pianos, local beers, and great drinks. This iconic bar has provided unforgettable entertainment since 2002. Open nightly 6pm-1am at 50 W Broadway.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 600,
        height: 300,
        alt: "Tavernacle Social Club - Salt Lake City's Premier Dueling Piano Bar",
      },
      {
        url: "/logo.webp",
        width: 600,
        height: 200,
        alt: "Tavernacle Social Club Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tavernacle Social Club | Downtown SLC's Best Dueling Piano Bar",
    description:
      "Salt Lake City's top-rated bar for live dueling pianos, local beers & great vibes! This premier dueling piano bar and live entertainment destination has been SLC's favorite since 2002. 50 W Broadway, SLC.",
    images: ["/opengraph-image.jpg"],
    creator: "@tavernacleclub",
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "your-google-verification-code", // TODO: Add Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        {/* Inline critical CSS to prevent render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `:root{--background:#0a0a0a;--foreground:#ededed;--accent:#f7931e;--accent-hover:#ff6b35;--card-bg:rgba(255,255,255,0.05);--border-color:rgba(255,255,255,0.1)}body{background:var(--background);color:var(--foreground);font-family:var(--font-geist-sans),-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0}`
        }} />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/media/geist-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Critical resource hints - preconnect for immediate connections */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://vitals.vercel-insights.com"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for analytics and CDN domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Additional Meta Tags */}
        <meta name="geo.region" content="US-UT" />
        <meta name="geo.placename" content="Salt Lake City" />
        <meta name="geo.position" content="40.7631046;-111.8930998" />
        <meta name="ICBM" content="40.7631046, -111.8930998" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
