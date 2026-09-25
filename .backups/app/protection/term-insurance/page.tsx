import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, HeartHandshake, FileCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Pure Risk Term Insurance — High Sum Assured Income Replacement",
  "Calculate and secure pure risk term life insurance with FINREV SOLUTIONS. Affordable premiums, critical illness riders, and complete family income protection.",
  "/protection/term-insurance"
);

const FAQS = [
  {
    q: "How much Term Insurance coverage do I need?",
    a: "Coverage is structured using the Human Life Value (HLV) methodology: taking into account your working years remaining, family living expense replacement, outstanding debts/liabilities, and subtracting existing liquid assets, rather than applying a simplistic rule of thumb.",
  },
  {
    q: "Why is Term Insurance superior to traditional endowment or money-back policies?",
    a: "Traditional endowment and ULIP policies mix insurance with investment, resulting in low life cover (often only 10x annual premium) and modest 4%–6% returns. Pure term insurance decouples the two: you get massive life cover (e.g. ₹1–2 Crores) for a fraction of the premium, freeing surplus cash to compound in mutual funds.",
  },
  {
    q: "What riders should be added to a Term Plan?",
    a: "Common valuable riders include: (1) Critical Illness Rider (pays a lumpsum upon diagnosis of cancer, heart attack, stroke), (2) Accidental Disability Rider (waiver of premium or additional payout upon severe disability), and (3) Waiver of Premium on Critical Illness.",
  },
  {
    q: "Until what age should I take term insurance coverage?",
    a: "Ideally until your planned retirement age (typically 60 or 65 years). By that age, your financial dependents will be independent, your debt obligations will be retired, and your accumulated investment corpus will provide self-insurance.",
  },
];

export default function TermInsurancePage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/protection" className="hover:text-[var(--color-text-primary)] transition-colors">Protection</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Term Insurance</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-gold-subtle)] text-[var(--color-tertiary)] text-xs font-bold rounded border border-[#fde68a] mb-3">
            <ShieldCheck size={14} />
            <span>Pure Income Replacement • Zero Investment Gimmickry</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pure Risk Term Life Insurance
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Secure high-value life protection for your dependents at affordable premiums. Ensure your family's
            aspirations, debts, and lifestyle remain completely insulated against unexpected mortality events.
          </p>
        </div>

        {/* Human Life Value Formula & Calculator Callout */}
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] p-6 md:p-8 mb-16 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <SectionLabel>Actuarial Mathematics</SectionLabel>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
                The Human Life Value (HLV) Method
              </h3>
            </div>
            <Link
              href="/tools/human-life-value-calculator"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)] bg-[var(--color-emerald-subtle)] px-3 py-1.5 rounded-lg border border-[var(--color-border-strong)] transition-colors self-start sm:self-auto"
            >
              <ShieldCheck size={13} />
              <span>Calculate Your HLV Cover</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="p-4 md:p-5 rounded-xl bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)] mb-6">
            <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2">Standard HLV Sum Assured Formula:</p>
            <div className="font-mono text-xs sm:text-sm font-bold text-[var(--color-text-primary)] leading-relaxed bg-white p-3 rounded-lg border border-[var(--color-border-subtle)]">
              Sum Assured = [ (Annual Gross Income - Personal Living Cost) × Working Years Remaining ] + Total Outstanding Liabilities - Existing Liquid Net Worth
            </div>
            <p className="text-[11px] text-[var(--color-text-muted)] mt-2 leading-relaxed">
              Example: A 35-year-old executive earning ₹18 Lakhs/year with a ₹40 Lakh home loan requires approximately ₹2.50 to ₹3.00 Crores in pure term cover to keep the family completely financially solvent.
            </p>
          </div>

          {/* Term vs Traditional Endowment Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)]">
                  <th className="py-3 px-4 font-bold text-[var(--color-text-primary)] uppercase tracking-wider text-[11px] w-1/4">Feature</th>
                  <th className="py-3 px-4 font-bold text-[var(--color-secondary)] uppercase tracking-wider text-[11px] w-3/8">Pure Risk Term Insurance</th>
                  <th className="py-3 px-4 font-bold text-[var(--color-text-muted)] uppercase tracking-wider text-[11px] w-3/8">Traditional Endowment / Money-Back</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">Life Cover (Sum Assured)</td>
                  <td className="py-3.5 px-4 font-bold text-[var(--color-secondary)]">₹1.00 Cr to ₹3.00+ Crores</td>
                  <td className="py-3.5 px-4 text-[var(--color-text-muted)]">₹5 Lakhs to ₹15 Lakhs (grossly under-insured)</td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">Annual Premium Cost</td>
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">₹12,000 – ₹22,000 / year (very low)</td>
                  <td className="py-3.5 px-4 text-[var(--color-text-muted)]">₹80,000 – ₹1,50,000 / year (very high)</td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">Investment Return</td>
                  <td className="py-3.5 px-4 text-[var(--color-text-secondary)]">0% (Pure protection; premium savings invested in mutual funds)</td>
                  <td className="py-3.5 px-4 text-red-600 font-semibold">Sub-inflationary 4% – 5.5% IRR (real wealth erosion)</td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[var(--color-text-primary)]">Liquidity & Exit</td>
                  <td className="py-3.5 px-4 text-[var(--color-text-secondary)]">Simple lapse or stop without punitive surrender penalties</td>
                  <td className="py-3.5 px-4 text-red-600 font-semibold">Severe surrender charges in initial 3–5 policy years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Income Replacement Multiplier
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              If the breadwinner is no longer present, the insurance payout invested in fixed income must generate
              sufficient monthly interest to replace their exact ongoing household income.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Liability Clearance Shield
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Ensure banks never repossess your family home or assets. Term insurance guarantees all outstanding
              mortgages and commercial liabilities are liquidated instantly upon claim settlement.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Critical Illness Integration
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Living through a debilitating illness often causes prolonged income interruption. Combining a pure term plan
              with a critical illness rider creates dual protection.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions on Term Insurance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle size={16} className="text-[var(--color-tertiary)] shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] leading-snug">{faq.q}</h4>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Coverage Evaluation
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Calculate Your Ideal Sum Assured
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Review your family income replacement requirements and liability schedule with Panchanan Kumar.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Term Insurance</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation.
            Policy issuance and claims are subject to underwriter approval and terms and conditions of the respective insurer.
          </p>
        </div>
      </Container>
    </div>
  );
}
