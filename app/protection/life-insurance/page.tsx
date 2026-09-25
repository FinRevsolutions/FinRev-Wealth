import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldAlert, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, HeartHandshake, UserCheck, Clock, Layers, Scale, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Life Insurance Solutions — Family Legacy & Estate Defense",
  "Comprehensive life protection structured to secure family legacy, business continuity, and outstanding debt liabilities through FINREV SOLUTIONS.",
  "/protection/life-insurance"
);

const LIFE_DIMENSIONS = [
  {
    dimension: "01. Protection Need Analysis",
    subtitle: "Catastrophic Risk Mitigation",
    description: "Life insurance functions strictly as a financial risk transfer vehicle. Its purpose is to insulate dependents from the loss of the primary breadwinner's economic earnings, ensuring household solvency, milestone continuity, and debt cancellation.",
    framework: "Identifies essential annual cash-flow requirements and liabilities before evaluating product types.",
  },
  {
    dimension: "02. Actuarial Coverage Sizing",
    subtitle: "Human Life Value (HLV) Calibration",
    description: "Determining exact coverage requires evaluating the present value of future earnings, personal consumption deductions, existing mortgage balances, and children's education milestones, offset by existing financial assets.",
    framework: "Prevents underinsurance while eliminating excessive premium waste on low-cover endowment policies.",
  },
  {
    dimension: "03. Policy Duration Alignment",
    subtitle: "Matching the Human Capital Earning Phase",
    description: "Life protection is only necessary while there is human capital to replace and dependents to support (typically ages 25 to 60/65). Once liabilities are cleared and investment assets reach self-sufficiency, insurance needs naturally extinguish.",
    framework: "Eliminates high-cost whole-life structures that charge excessive premiums into non-earning retirement years.",
  },
  {
    dimension: "04. Beneficiary & Estate Governance",
    subtitle: "Nomination & MWPA Trust Architecture",
    description: "Under Section 6 of the Married Women's Property (MWP) Act, 1874, a life insurance policy can be created as an irrevocable trust for the spouse and children. The claim proceeds cannot be attached by business creditors, commercial lenders, or civil courts.",
    framework: "Statutory ring-fencing guaranteeing proceeds pass directly and uncontested to legal beneficiaries.",
  },
];

const FAQS = [
  {
    q: "What is the primary role of life insurance in an institutional wealth architecture?",
    a: "Life insurance serves exclusively as a risk mitigation shield. Its sole role is to replace the economic earning power of the individual, extinguish debt obligations (home loans, business credit), and guarantee that long-term goals proceed without forcing the family to liquidate compounding investments.",
  },
  {
    q: "How does the Married Women's Property (MWP) Act safeguard family claims?",
    a: "When a policy is endorsed under Section 6 of the MWP Act, 1874, it creates an independent statutory trust for the wife and/or children. The policyholder cannot revoke the trust, surrender the policy, or borrow against it without trustee consent, and commercial creditors or court assignees have zero jurisdiction to attach the claim proceeds.",
  },
  {
    q: "What is Keyman Insurance for corporate partnerships and businesses?",
    a: "Keyman Insurance is taken out by a business entity on the life of an indispensable executive, director, or partner whose sudden demise would cause severe financial, credit, or operational disruption. Claim proceeds compensate the business for profit disruption, loan settlements, and executive replacement expenses.",
  },
];

export default function LifeInsurancePage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/protection" className="hover:text-[var(--color-text-primary)] transition-colors">Protection</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Life Insurance</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <ShieldCheck size={13} className="text-[var(--color-secondary)]" />
            <span>Family Estate & Risk Defense</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comprehensive Life Insurance Solutions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Protect your family legacy, business partnerships, and dependent cash flows through actuarially calibrated
            life insurance structures and statutory MWPA asset protection.
          </p>
        </div>

        {/* THE 4 PILLARS OF LIFE PROTECTION: Need, Coverage, Duration, Beneficiaries */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Actuarial Architecture</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Four Foundational Pillars of Life Protection
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Need • Coverage • Duration • Nominee</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {LIFE_DIMENSIONS.map((item, idx) => (
              <div key={item.dimension} className={idx > 0 ? "pt-6" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.dimension}
                    </h3>
                  </div>
                  <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <p>{item.description}</p>
                    <div className="p-2.5 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[2px] text-[11px] font-mono text-[var(--color-primary)]">
                      <strong>Governance Rule:</strong> {item.framework}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MWPA ACT 1874 STATUTORY FORTRESS */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Statutory Asset Shield</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Married Women’s Property (MWP) Act, 1874 Fortress
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              How Section 6 creates an impenetrable legal ring-fence around life insurance claim proceeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)]">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] block mb-1">01. CREDITOR IMMUNITY</span>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">Immune to Debt Recovery</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Business debts, bank loans, personal liabilities, and commercial insolvency proceedings cannot touch or attach MWPA claim proceeds.
              </p>
            </div>

            <div className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)]">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] block mb-1">02. JUDICIAL PROTECTION</span>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">No Court Attachments</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Neither civil courts nor official assignees under insolvency statutes possess the legal authority to attach or liquidate policy benefits.
              </p>
            </div>

            <div className="border border-[var(--color-border-subtle)] rounded-[4px] p-4 bg-[var(--color-surface-low)]">
              <span className="text-xs font-mono font-bold text-[var(--color-secondary)] block mb-1">03. IRREVOCABLE TRUST</span>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">Named Beneficiary Sovereignty</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                The policyholder cannot assign, surrender, or pledge the policy without the formal written consent of the named trustees/beneficiaries.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Life Insurance
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Life Protection Advisory</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Structure Comprehensive Family Protection
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Conduct Human Life Value evaluations and MWPA trust setups with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/protection/term-insurance"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <span>Explore Term Cover</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Schedule Review</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation. Policy terms, exclusions, and claims settlement procedures are governed strictly by the respective life insurance company policy contracts approved by IRDAI. FINREV SOLUTIONS facilitates insurance advisory and distribution.
          </p>
        </div>
      </Container>
    </div>
  );
}
