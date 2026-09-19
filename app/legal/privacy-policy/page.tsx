import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { BRAND, CONTACT } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy — FINREV SOLUTIONS",
  "Privacy Policy of FINREV SOLUTIONS. How we collect, safeguard, and handle your confidential financial and personal data.",
  "/legal/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Privacy Policy</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <SectionLabel>Data Governance</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Last Updated: September 2026. How {BRAND.name} collects, protects, and handles your information.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] max-w-4xl flex flex-col gap-6 text-xs text-[var(--color-text-secondary)] leading-relaxed mb-16">
          <h2 className="text-base font-bold text-[var(--color-text-primary)]">1. Information Collection</h2>
          <p>
            In our capacity as an AMFI-registered Mutual Fund Distributor, we collect personal and financial information
            necessary to facilitate regulated investment transactions, KYC verification, and portfolio review requests.
            This includes: Name, Contact Numbers, Email, PAN, Bank Details, and Consolidated Account Statements (CAS)
            shared voluntarily by you.
          </p>

          <h2 className="text-base font-bold text-[var(--color-text-primary)]">2. Purpose of Processing</h2>
          <p>
            Your information is processed strictly for: (1) Executing mutual fund and financial product transactions via
            regulated exchange clearing mechanisms (BSE StAR MF / NSE NMF II / AMCs / RTAs), (2) Fulfilling statutory
            AML and KYC obligations, and (3) Providing requested portfolio health check reports.
          </p>

          <h2 className="text-base font-bold text-[var(--color-text-primary)]">3. Confidentiality & Zero Third-Party Sale</h2>
          <p>
            We do not sell, rent, trade, or lease your personal or financial data to any third-party marketing or lead-generation
            companies. Data is shared solely with regulated entities (AMCs, RTAs like CAMS and KFintech, and depository participants)
            solely for executing your transactions.
          </p>

          <h2 className="text-base font-bold text-[var(--color-text-primary)]">4. Data Security</h2>
          <p>
            We employ bank-grade encryption protocols and strict access controls to prevent unauthorized access, alteration,
            or disclosure of your confidential financial records.
          </p>

          <h2 className="text-base font-bold text-[var(--color-text-primary)]">5. Contact Data Protection Desk</h2>
          <p>
            For any queries or requests regarding your personal data, please contact our administrative desk at{" "}
            <a href={CONTACT.emailHref} className="text-[var(--color-secondary)] font-bold underline">
              {CONTACT.email}
            </a>.
          </p>
        </div>
      </Container>
    </div>
  );
}
