// ============================================================
// FINREV SOLUTIONS — Centralized Brand & Contact Constants
// All brand values, contact details, and regulatory identifiers
// must be sourced from this file — never hardcoded in components.
// ============================================================

export const BRAND = {
  name: "FINREV SOLUTIONS",
  shortName: "FinRev",
  tagline: "Secure Today. Stronger Tomorrow.",
  description:
    "Investment, wealth and protection solutions designed around your financial goals, risk profile and life journey.",
  logoPath: "/brand/finrev-logo.png",
  logoAlt: "FINREV SOLUTIONS — Secure Today. Stronger Tomorrow.",
  logoWidth: 1600,
  logoHeight: 562,
} as const;

export const CONTACT = {
  phone: "+91 9835592142",
  phoneTel: "tel:+919835592142",
  email: "info@finrevsolutions.com",
  emailHref: "mailto:info@finrevsolutions.com",
  whatsapp: "https://wa.me/919835592142",
  officeHours: "Mon – Sat: 9:30 AM – 6:30 PM IST",
} as const;

export const REGULATORY = {
  arnNumber: "ARN-195797",
  arnLabel: "AMFI ARN-195797",
  founderName: "Panchanan Kumar",
  founderTitle: "Registered Mutual Fund Distributor",
  registrationBody: "AMFI — Association of Mutual Funds in India",
  sebiRegulation: "SEBI (Mutual Funds) Regulations, 1996",
  riskDisclaimer:
    "Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Past performance is not indicative of future returns. No guaranteed or assured returns are offered.",
  amfiDisclaimer:
    "FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797). Distribution services are governed under SEBI (Mutual Funds) Regulations, 1996.",
} as const;

export const SITE = {
  url: "https://www.finrevsolutions.com",
  twitterHandle: "@finrevsolutions",
  copyrightYear: 2026,
} as const;
