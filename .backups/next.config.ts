import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Strict React mode
  reactStrictMode: true,

  // Optimized image handling
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
  },

  // Production-ready headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Long cache for brand assets
        source: "/brand/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Safe redirect for deprecated commission disclosures page
  async redirects() {
    return [
      {
        source: "/legal/commission-disclosures",
        destination: "/legal/regulatory-disclosures",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
