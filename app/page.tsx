import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PillarsSection } from "@/components/home/PillarsSection";
import { FinancialJourneySection } from "@/components/home/FinancialJourneySection";
import { SolutionsMatrix } from "@/components/home/SolutionsMatrix";
import { AMCPartnersSection } from "@/components/home/AMCPartnersSection";
import { WorkbenchPreview } from "@/components/home/WorkbenchPreview";
import { FounderInsightsSection } from "@/components/home/FounderInsightsSection";
import { ActionAnchor } from "@/components/home/ActionAnchor";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description:
    "Investment, wealth planning and protection solutions designed around your financial goals, risk profile and wealth creation journey. AMFI-registered MFD ARN-195797.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* 01 Hero — Panchanan Kumar Panoramic Visual & Clear Direction */}
      <HeroSection />

      {/* 02 Trust & Regulatory Ribbon */}
      <TrustStrip />

      {/* 03 Core Pillars — INVEST • PLAN • PROTECT • GROW */}
      <PillarsSection />

      {/* 04 Strategic Feature Section: 3D Financial Journey Architecture */}
      <FinancialJourneySection />

      {/* 05 Key Solutions: Two-Tier Capital Architecture */}
      <SolutionsMatrix />

      {/* 06 AMC Partners Showcase */}
      <AMCPartnersSection />

      {/* 07 Planning Tools: Interactive Workbench Simulator & 4 Flagship Calculators */}
      <WorkbenchPreview />

      {/* 08 Founder Commitment & Curated Intelligence */}
      <FounderInsightsSection />

      {/* 09 Action Anchor: Full-Width Consultation Banner */}
      <ActionAnchor />
    </>
  );
}
