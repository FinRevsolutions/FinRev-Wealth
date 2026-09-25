import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, HeartHandshake, FileCheck, Calculator, UserCheck, Clock, Layers, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Pure Risk Term Insurance — Income Replacement & MWPA Architecture",
  "Calculate and structure pure risk term life insurance with FINREV SOLUTIONS. Actuarial Human Life Value (HLV) sizing, policy duration alignment, and MWPA trust protection.",
  "/protection/term-insurance"
);

const TERM_PILLARS = [
  {
    pillar: "01. The Protection Need",
    metric: "Pure Economic Replacement",
    description:
      "Term insurance serves a singular objective: replacing the economic cash flow of the primary income earner in the event of untimely demise. It ensures that family living expenditures, children's education milestones, and outstanding debt obligations continue unimpaired without liquidating long-term investments.",
    implementation: "Decouples protection from investment; provides 10x–20x higher cover per rupee of premium than endowment plans.",
  },
  {
    pillar: "02. Coverage Calibration (HLV)",
    metric: "Human Life Value Methodology",
    description:
      "Avoid arbitrary rule-of-thumb multiples. Coverage must be sized using actuarial Human Life Value: [ (Annual Income – Personal Living Expenses) × Working Years Remaining ] + Total Outstanding Debt Liabilities (Home Loans/Personal Loans) – Existing Liquid Net Worth.",
    implementation: "Ensures the family is neither underinsured during peak liability years nor paying wasteful excess premiums.",
  },
  {
    pillar: "03. Policy Duration Horizon",
    metric: "Active Career Earning Span",
    description:
      "Policy tenure should strictly align with your anticipated working career (typically up to age 60 or 65). Once you retire, dependent obligations have matured, debt liabilities are paid off, and accumulated mutual fund wealth provides self-insurance. Marketing gimmicks like coverage till age 99 simply inflate costs.",
    implementation: "Term coverage ends when the accumulated retirement corpus becomes self-sustaining.",
  },
  {
    pillar: "04. Beneficiary & MWPA Protection",
    metric: "Nomination & Married Women's Property Act",
    description:
      "Under Section 6 of the Married Women's Property (MWP) Act, 1874, a term policy can be registered in favor of the wife and children as an irrevocable trust. In the event of death, the claim proceeds cannot be attached by commercial creditors, business lenders, or tax authorities.",
    implementation: "MWPA endorsement guarantees claim proceeds flow exclusively to designated family beneficiaries.",
  },
];

const FAQS = [
  {
    q: "Why is pure risk Term Insurance superior to traditional endowment and money-back plans?",
    a: "Traditional endowment and ULIP policies combine insurance with low-yield investments, resulting in inadequate life cover (often only 10 times annual premium) and modest 4%–5.5% annual returns. Pure term insurance provides massive life protection (e.g. ₹1.5 to ₹3 Crores) for modest annual premiums, freeing cash flow to compound at higher equity rates in mutual funds.",
  },
  {
    q: "Until what age should term insurance be continued?",
    a: "Coverage should typically end at your planned retirement age (age 60 or 65). By that life stage, financial dependents are independent, liabilities (such as mortgages) are cleared, and accumulated investments serve as self-insurance. Extending term policies to age 85 or 99 results in exorbitant premiums with zero economic need.",
  },
  {
    q: "What is the importance of Section 6 of the Married Women's Property (MWP) Act?",
    a: "Policies endorsed under MWPA create a statutory trust for the wife and/or children. The claim amount falls outside the estate of the deceased, meaning it cannot be attached by business creditors, commercial lenders, or civil court decrees, ensuring complete financial security for dependents.",
  },
  {
    q: "What riders are genuinely worth considering in a term policy?",
    a: "The most valuable riders are: (1) Comprehensive Critical Illness Rider (provides a lumpsum upon diagnosis of major illnesses like cancer or heart attack), (2) Accidental Total & Permanent Disability Rider (provides supplementary income or waiver of premium upon severe disability), and (3) Waiver of Premium Rider.",
  },
];

export default function TermInsurancePage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/protection" className="hover:text-[var(--color-text-primary)] transition-colors">Protection</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Term Insurance</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <ShieldCheck size={13} className="text-[var(--color-secondary)]" />
            <span>Pure Income Replacement Architecture</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pure Risk Term Life Insurance
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Secure high-value life protection for your dependents at affordable premiums. Ensure your family's
            aspirations, liabilities, and lifestyle remain completely insulated against premature mortality events.
          </p>
        </div>

        {/* THE 4 PILLARS OF TERM ARCHITECTURE: Need, Coverage, Duration, Beneficiaries */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Actuarial Principles</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Four Core Dimensions of Institutional Term Planning
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Need • Coverage • Duration • Nominee</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {TERM_PILLARS.map((p, idx) => (
              <div key={p.pillar} className={idx > 0 ? "pt-6" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      {p.metric}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {p.pillar}
                    </h3>
                  </div>
                  <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <p>{p.description}</p>
                    <div className="p-2.5 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[2px] text-[11px] font-mono text-[var(--color-primary)]">
                      <strong>Planning Principle:</strong> {p.implementation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HUMAN LIFE VALUE (HLV) METHODOLOGY PANEL */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Actuarial Sizing</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The Human Life Value (HLV) Mathematical Model
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              How institutional life coverage is calculated without relying on arbitrary income multiples.
            </p>
          </div>

          <div className="p-4 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[4px] mb-4">
            <div className="font-mono text-xs sm:text-sm font-bold text-[var(--color-text-primary)] leading-relaxed bg-white p-3 rounded-[2px] border border-[var(--color-border-subtle)] mb-2">
              Sum Assured = [ (Annual Income – Personal Living Expenses) × Working Years Remaining ] + Total Outstanding Liabilities – Liquid Net Worth
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              <strong>Case Study:</strong> A 35-year-old earning ₹20 Lakhs/year with personal expenses of ₹4 Lakhs, planning to work till age 60 (25 working years), holding an outstanding home loan of ₹45 Lakhs and liquid savings of ₹15 Lakhs requires: <span className="font-mono font-semibold text-[var(--color-primary)]">[ (₹16L × 25) + ₹45L – ₹15L ] = ₹4.30 Crores</span> in pure term life protection.
            </p>
          </div>
        </div>

        {/* COMPARATIVE ANALYSIS: Pure Term vs Traditional Endowment */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Policy Evaluation</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Pure Term Insurance vs. Traditional Endowment / ULIP
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3 w-1/4">Evaluation Parameter</th>
                  <th className="py-3 px-3 w-3/8 text-[var(--color-primary)]">Pure Risk Term Insurance</th>
                  <th className="py-3 px-3 w-3/8 text-[var(--color-text-muted)]">Traditional Endowment / Money-Back</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Life Coverage Scope</td>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-primary)]">₹1 Crore to ₹5+ Crores (Comprehensive HLV cover)</td>
                  <td className="py-3.5 px-3">Severely limited (typically 10x annual premium; ~₹10 Lakhs)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Annual Premium Outgo</td>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-secondary)] font-mono">Modest (e.g. ₹15,000–₹30,000/year for ₹2 Cr cover)</td>
                  <td className="py-3.5 px-3 font-mono">High (e.g. ₹1,00,000+/year for inadequate cover)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Investment Return Concept</td>
                  <td className="py-3.5 px-3">Zero investment mix; surplus compounds in mutual funds</td>
                  <td className="py-3.5 px-3">Sub-optimal 4%–5.5% IRR trailing education inflation</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Creditor Protection (MWPA)</td>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-primary)]">Available under Section 6 of MWP Act</td>
                  <td className="py-3.5 px-3">Subject to creditor attachment if not endorsed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Term Insurance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-[var(--color-border-subtle)] pb-4">
                <div className="flex items-start gap-2 mb-1.5">
                  <HelpCircle size={14} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <h3 className="text-xs font-bold text-[var(--color-text-primary)] leading-snug">{faq.q}</h3>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Protection Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Structure Your Human Life Value Cover & MWPA Trust
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Calculate exact coverage needs and evaluate underwriting criteria with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/tools/human-life-value-calculator"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <Calculator size={14} />
              <span>Calculate HLV Cover</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Consult on Term Cover</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation. Policy terms, claim settlement procedures, riders, and exclusions are governed strictly by the respective life insurance company policy document approved by the Insurance Regulatory and Development Authority of India (IRDAI). FINREV SOLUTIONS facilitates insurance advisory and distribution.
          </p>
        </div>
      </Container>
    </div>
  );
}
