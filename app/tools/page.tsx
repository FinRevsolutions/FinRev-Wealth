import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { getAllTools } from "@/lib/tools-registry";
import { ToolsHubExplorer } from "@/components/calculators/ToolsHubExplorer";

export const metadata: Metadata = createPageMetadata(
  "Financial Calculators & Wealth Tools Hub",
  "Explore 32 institutional financial calculators by FINREV SOLUTIONS across Investment, Goal Planning, Personal Finance, Protection, and Loans & Tax planning.",
  "/tools"
);

export default function ToolsHubPage() {
  const allTools = getAllTools();

  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Financial Tools Hub</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <SectionLabel>Institutional Financial Planning</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Plan Better. Invest Smarter.
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Every successful wealth journey starts with rigorous mathematical clarity. Explore FINREV's suite
            of 32 specialized calculators designed to test compounding timelines, reverse-engineer milestone goals,
            assess solvency, and protect multi-generational capital.
          </p>
        </div>

        {/* Interactive Explorer with Live Search & Category Tabs */}
        <ToolsHubExplorer initialTools={allTools} />

        {/* Regulatory Governance & Methodology Footer */}
        <div className="rounded-2xl bg-white border border-[var(--color-border-subtle)] p-6 md:p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] border border-[var(--color-border-strong)] flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div className="space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
              <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                Regulatory Standards & Computational Framework
              </h4>
              <p>
                All 32 calculators provided in this hub execute deterministic formulas adhering to standard financial mathematics
                (compounding annuities, reducing balance amortizations, and actuarial present value discounted models).
              </p>
              <p className="text-[var(--color-text-muted)]">
                <strong>Statutory Notice:</strong> Outputs generated are purely hypothetical and intended for investor education
                and financial planning simulations. They do not constitute guaranteed return assurances, financial advice, or solicitation
                under SEBI (Mutual Funds) Regulations, 1996. Mutual fund investments are subject to market risks.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
