import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { BRAND, REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Terms of Service — FINREV SOLUTIONS",
  "Terms of Service governing the use of FINREV SOLUTIONS website and distributor facilitation services.",
  "/legal/terms"
);

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Terms of Service</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <SectionLabel>Legal Governance</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms of Service
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Terms and conditions governing the use of the {BRAND.name} digital platform and services.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] max-w-4xl flex flex-col gap-6 text-xs text-[var(--color-text-secondary)] leading-relaxed mb-16">
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website of {BRAND.name}, you agree to comply with and be bound by these Terms of Service.
            If you do not agree, please do not use this platform.
          </p>

          <h2 className="text-base font-bold text-[var(--color-text-primary)]">2. Nature of Services</h2>
          <p>
            {BRAND.name} is an AMFI-registered Mutual Fund Distributor ({REGULATORY.arnLabel}). The website provides
            educational tools, financial calculators, portfolio tracking gateways, and distributor facilitation services.
            The content on this website does not constitute formal legal, accounting, tax, or direct SEBI investment advice.
          </p>

          <h2 className="text-base font-bold text-[var(--color-text-primary)]">3. Accuracy of Tools & Projections</h2>
          <p>
            All financial calculators, return estimates, and wealth accumulation projections are purely illustrative and
            hypothetical. They rely on user-selected rates of return and assumptions. Market fluctuations, tax revisions,
            and fund performance will cause actual outcomes to vary.
          </p>

          <h2 className="text-base font-bold text-[var(--color-text-primary)]">4. Market Risk Acknowledgment</h2>
          <p>
            You explicitly acknowledge that mutual fund investments, bonds, PMS, and alternative investments are subject to
            market risks, and there is no guarantee or assurance of principal protection or returns.
          </p>

          <h2 className="text-base font-bold text-[var(--color-text-primary)]">5. Intellectual Property</h2>
          <p>
            All logos, visual assets, trademarks, calculation engines, and content displayed on this website are the
            exclusive property of {BRAND.name} and protected by applicable copyright laws.
          </p>
        </div>
      </Container>
    </div>
  );
}
