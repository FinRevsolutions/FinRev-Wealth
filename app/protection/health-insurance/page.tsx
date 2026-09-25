import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Activity, Plus, Equal, Shield, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Comprehensive Health Insurance & Super Top-Up Architecture",
  "Shield your compounding mutual fund portfolio from medical inflation with structured family floater and super top-up health insurance through FINREV SOLUTIONS.",
  "/protection/health-insurance"
);

const FAQS = [
  {
    q: "Why is an employer corporate health policy often inadequate?",
    a: "Corporate health covers typically offer modest limits (₹3 to ₹5 Lakhs), can be altered or withdrawn by employers during cost-cutting, and terminate immediately upon job transition or retirement. Purchasing private health cover at older ages or after developing pre-existing conditions is significantly more expensive or medically uninsurable.",
  },
  {
    q: "What is the operational distinction between Top-Up and Super Top-Up?",
    a: "A regular Top-Up policy applies its deductible on a per-hospitalization basis. If you have a ₹5 Lakh deductible, each single hospital bill must exceed ₹5 Lakhs for the top-up to activate. A Super Top-Up calculates claims cumulatively across the entire 365-day policy year for all family members. Multiple hospitalizations that collectively breach the deductible activate coverage.",
  },
  {
    q: "What are Room Rent Sub-Limits and why must they be avoided?",
    a: "Room rent limits restrict hospital room charges to a fixed percentage (e.g. 1% of Sum Insured). Exceeding this limit triggers proportionate deductions on doctor consultation fees, surgeries, and ICU charges across the entire hospital bill. Policies should be selected with zero room-rent sub-limits.",
  },
  {
    q: "What waiting periods govern Pre-Existing Diseases (PED)?",
    a: "Under current IRDAI regulations, standard waiting periods for pre-existing medical conditions typically range from 1 to 3 years depending on insurer underwriting. Complete, transparent upfront medical disclosures are essential to guarantee frictionless cashless claim settlements.",
  },
];

export default function HealthInsurancePage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/protection" className="hover:text-[var(--color-text-primary)] transition-colors">Protection</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Health Insurance</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <HeartPulse size={13} className="text-[var(--color-secondary)]" />
            <span>Healthcare Inflation Architecture</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comprehensive Family Health Insurance
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Healthcare inflation in India regularly exceeds 14% annually. A severe hospitalization event must never
            force the premature liquidation of compounding mutual funds or impair long-term family goals.
          </p>
        </div>

        {/* VISUAL DISTINCTION: Base Health Cover + Super Top-Up */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Structural Coverage Model</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                The Two-Tier Health Shield: Base Cover + Super Top-Up
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Deductible Mechanics</span>
          </div>

          {/* Institutional Equation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center mb-6">
            {/* Box 1: Base Cover */}
            <div className="lg:col-span-5 border border-[var(--color-border-subtle)] rounded-[4px] p-5 bg-[var(--color-surface-low)]">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--color-secondary)] font-bold mb-1">
                <span>TIER 01 • PRIMARY</span>
                <span>Zero Deductible</span>
              </div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1">
                Base Health Insurance Cover
              </h3>
              <div className="text-xl font-bold text-[var(--color-primary)] font-mono my-2">
                ₹10,00,000 Sum Insured
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3">
                Provides first-rupee protection. Absorbs standard seasonal illnesses, planned surgeries, diagnostic daycare procedures, and routine hospitalizations without any threshold deductible.
              </p>
              <div className="text-[11px] font-mono text-[var(--color-secondary)] border-t border-[var(--color-border-subtle)] pt-2 font-semibold">
                • First-Rupee Settlement<br />
                • Restores No-Claim Bonus (NCB)
              </div>
            </div>

            {/* Plus Symbol */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-primary)] font-bold text-lg">
                +
              </div>
            </div>

            {/* Box 2: Super Top-Up */}
            <div className="lg:col-span-6 border border-[var(--color-secondary)] rounded-[4px] p-5 bg-white shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--color-secondary)] font-bold mb-1">
                <span>TIER 02 • CATASTROPHIC UMBRELLA</span>
                <span>₹10L Deductible</span>
              </div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1">
                Super Top-Up Health Policy
              </h3>
              <div className="text-xl font-bold text-[var(--color-secondary)] font-mono my-2">
                ₹90,00,000 Umbrella Cover
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3">
                Activates when cumulative hospitalization expenses in a single policy year exceed the ₹10 Lakh deductible threshold. Underwritten at a fraction of standard base premium due to the high claims threshold.
              </p>
              <div className="text-[11px] font-mono text-[var(--color-primary)] border-t border-[var(--color-border-subtle)] pt-2 font-semibold">
                • High Threshold Cost Efficiency<br />
                • Cumulative 365-Day Threshold Tracking
              </div>
            </div>
          </div>

          {/* Summary Result Ribbon */}
          <div className="p-4 bg-[var(--color-surface-container-highest)] border border-[var(--color-border-subtle)] rounded-[4px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[var(--color-text-primary)] block">Total Combined Family Hospitalization Shield: ₹1.00 Crore</span>
              <span className="text-[11px] text-[var(--color-text-muted)]">Combining a ₹10L Base Floater with a ₹90L Super Top-Up typically reduces total annual premium outgo by approximately 35%–45% compared to purchasing a standalone single ₹1 Crore base policy.</span>
            </div>
            <div className="shrink-0 font-mono text-xs font-bold text-[var(--color-secondary)] bg-white px-3 py-1.5 rounded-[2px] border border-[var(--color-border-subtle)]">
              Integrated Claim Protocol
            </div>
          </div>
        </div>

        {/* COMPARATIVE TABLE: Base Cover vs Super Top-Up */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Technical Comparison</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Operational Distinctions: Base Health vs. Super Top-Up
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3 w-1/4">Policy Dimension</th>
                  <th className="py-3 px-3 w-3/8">Base Health Insurance Policy</th>
                  <th className="py-3 px-3 w-3/8 text-[var(--color-primary)]">Super Top-Up Insurance Policy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Deductible Threshold</td>
                  <td className="py-3.5 px-3">₹0 (Zero Deductible)</td>
                  <td className="py-3.5 px-3 font-mono font-semibold text-[var(--color-primary)]">Defined Deductible (e.g. ₹5L, ₹10L, ₹15L)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Claim Trigger Mechanism</td>
                  <td className="py-3.5 px-3">Settles from the first rupee of admitted claim</td>
                  <td className="py-3.5 px-3">Triggers once cumulative annual claims exceed deductible</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Cumulative vs Per-Claim</td>
                  <td className="py-3.5 px-3">Per hospitalization up to Sum Insured</td>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-primary)]">Cumulative tracking across 365-day policy year</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Primary Strategic Role</td>
                  <td className="py-3.5 px-3">Daycare, routine surgery, diagnostic hospitalization</td>
                  <td className="py-3.5 px-3">Catastrophic critical illness, prolonged ICU, organ transplant</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-text-primary)]">Relative Premium Cost</td>
                  <td className="py-3.5 px-3">Standard baseline actuarial rates</td>
                  <td className="py-3.5 px-3 font-semibold text-[var(--color-secondary)]">Substantially discounted per unit of coverage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Health Coverage
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Protection Audit Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Audit Your Family Health Insurance Architecture
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Review room-rent clauses, deductible alignments, and network hospital cashless terms with Panchanan Kumar.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Request Health Policy Audit</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation. Health insurance coverage, exclusions, waiting periods, and claims settlement terms are strictly subject to policy terms and conditions issued by respective IRDAI-registered insurance companies. FINREV SOLUTIONS facilitates health insurance advisory and distribution.
          </p>
        </div>
      </Container>
    </div>
  );
}
