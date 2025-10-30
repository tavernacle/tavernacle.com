import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  compress: true,
  
  /* Production optimizations */
  productionBrowserSourceMaps: false, // Disable source maps in production to reduce bundle size
  
  /* Compiler optimizations */
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  /* Experimental features for better performance */
  experimental: {
    optimizePackageImports: ['lucide-react', '@vercel/analytics', '@vercel/speed-insights'],
    optimizeCss: true, // Enable CSS optimization
  },

  /* Image optimization */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 60, 75], // Custom quality levels for optimized images
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /* Headers for better SEO and performance */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.{jpg,jpeg,png,gif,webp,avif,svg,ico}",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/public/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /* Redirects for canonical URL (www) */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "tavernacle.com",
          },
        ],
        destination: "https://www.tavernacle.com/:path*",
        permanent: true,
      },
    ];
  },
};
