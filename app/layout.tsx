import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "./components/Footer";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  siteConfig,
} from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://tavernacle.com"
  ),
  title: {
    default:
      "Tavernacle Social Club | Downtown Salt Lake City Dueling Piano Bar & Live Music",
    template: "%s | Tavernacle Social Club",
  },
  description:
    "Experience live dueling pianos, local beers, cocktails, and unforgettable entertainment at Tavernacle Social Club. Downtown Salt Lake City's premier music venue since 2002. Open nightly 6pm-1am at 50 W Broadway. Full kitchen, LGBTQ+ friendly, and the best vibes in SLC.",
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
    "cocktails SLC",
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Tavernacle Social Club | Salt Lake City's Premier Dueling Piano Bar",
    description:
      "Downtown SLC's best live music venue! Dueling pianos, local beers, cocktails, great food & unforgettable entertainment. Open nightly 6pm-1am at 50 W Broadway.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 600,
        height: 300,
        alt: "Tavernacle Social Club - Salt Lake City's Premier Piano Bar",
      },
      {
        url: "/logo.png",
        width: 600,
        height: 200,
        alt: "Tavernacle Social Club Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tavernacle Social Club | Downtown SLC's Best Piano Bar",
    description:
      "Live dueling pianos, local beers, cocktails & great vibes! Salt Lake City's premier music venue since 2002. 50 W Broadway, SLC.",
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
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
