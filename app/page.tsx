import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustArchitectureSection } from "@/components/home/TrustArchitectureSection";
import { FinRevMethodSection } from "@/components/home/FinRevMethodSection";
import { FinancialUniverseSection } from "@/components/home/FinancialUniverseSection";
import { FinancialJourneySection } from "@/components/home/FinancialJourneySection";
import { WorkbenchPreview } from "@/components/home/WorkbenchPreview";
import { AMCPartnersSection } from "@/components/home/AMCPartnersSection";
import { HumanExpertiseSection } from "@/components/home/HumanExpertiseSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FinalStatementSection } from "@/components/home/FinalStatementSection";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BRAND.name} | The Financial Intelligence Platform`,
  description:
    "Institutional financial intelligence, milestone-mapped wealth planning, and mutual fund distribution under AMFI ARN-195797. Interconnected investment architecture.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* 01. Hero — Immersive 42/58 Split with Large 3D Financial Architecture */}
      <HeroSection />

      {/* 02. Trust Architecture — Full-Width Institutional Metric Strip */}
      <TrustArchitectureSection />

      {/* 03. The FINREV Method — "Money needs direction. Wealth needs structure." */}
      <FinRevMethodSection />

      {/* 04. Financial Universe — Visual Relationship Map with FINREV at the Center */}
      <FinancialUniverseSection />

      {/* 05. Financial Journey — Authentic Portrait + BUILD • PROTECT • GROW • PRESERVE */}
      <FinancialJourneySection />

      {/* 06. FINREV Workbench — Analytical Wealth Simulator & 6 Planning Tools */}
      <WorkbenchPreview />

      {/* 07. AMC Ecosystem — "Access across leading Asset Management Companies." */}
      <AMCPartnersSection />

      {/* 08. Human Expertise — "Technology can organize the numbers. Experience puts them into context." */}
      <HumanExpertiseSection />

      {/* 09. Editorial Insights — Dominant Feature & Supporting Research Links */}
      <InsightsSection />

      {/* 10. Final Statement — Deep Navy: "Build with clarity. Invest with discipline." */}
      <FinalStatementSection />
    </>
  );
}
