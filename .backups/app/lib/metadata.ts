import type { Metadata } from "next";
import { BRAND, REGULATORY, SITE } from "./constants";

// ============================================================
// FINREV SOLUTIONS — Shared SEO Metadata Defaults
// ============================================================

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.shortName}`,
  },
  description: BRAND.description,
  keywords: [
    "mutual funds",
    "SIP investment",
    "wealth management",
    "financial planning",
    "retirement planning",
    "life insurance",
    "health insurance",
    "PMS",
    "AIF",
    "Panchanan Kumar",
    "ARN-195797",
    "AMFI registered distributor",
    "FINREV SOLUTIONS",
  ],
  authors: [{ name: REGULATORY.founderName }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: BRAND.name,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: BRAND.logoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
    creator: SITE.twitterHandle,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE.url,
  },
  other: {
    "regulatory-disclosure": REGULATORY.riskDisclaimer,
  },
};

// Helper to create page-specific metadata
export function createPageMetadata(
  title: string,
  description: string,
  path: string = "/"
): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${BRAND.name}`,
      description,
      url,
    },
    twitter: {
      title: `${title} | ${BRAND.name}`,
      description,
    },
  };
}
