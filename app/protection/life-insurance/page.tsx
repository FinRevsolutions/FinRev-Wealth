import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldAlert, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Life Insurance Solutions — Family Legacy & Estate Defense",
  "Comprehensive life protection structured to secure family legacy, business continuity, and outstanding debt liabilities through FINREV SOLUTIONS.",
  "/protection/life-insurance"
);

const FAQS = [
  {
    q: "What is the primary role of life insurance in a wealth architecture?",
    a: "Life insurance serves strictly as a catastrophic financial defense mechanism. Its role is to instantly replace the economic earning power of the individual, extinguish outstanding debts, and ensure children's education milestones proceed uninterrupted if the primary provider passes away.",
  },
  {
    q: "How does life insurance integrate with estate planning?",
    a: "Policies registered under the Married Women's Property Act (MWP Act, 1874) cannot be attached by creditors, business lenders, or tax authorities. The claim proceeds belong exclusively to the wife and children, safeguarding family legacy.",
  },
  {
    q: "What is Keyman Insurance for businesses?",
    a: "Keyman Insurance is taken out by a business entity on the life of a crucial executive, director, or partner whose sudden absence would cause significant financial or operational disruption. The proceeds compensate the firm for financial loss and stabilization costs.",
  },
];

export default function LifeInsurancePage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/protection" className="hover:text-[var(--color-text-primary)] transition-colors">Protection</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Life Insurance</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-gold-subtle)] text-[var(--color-tertiary)] text-xs font-bold rounded border border-[#fde68a] mb-3">
            <ShieldAlert size={14} />
            <span>Family Estate Defense</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comprehensive Life Insurance Solutions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Protect your family legacy, business partnerships, and financial dependents from life uncertainties
            through legally robust life insurance coverage.
          </p>
        </div>

        {/* MWP Act 1874 Statutory Fortress Section */}
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] p-6 md:p-8 mb-16 overflow-hidden">
          <SectionLabel>Statutory Asset Protection</SectionLabel>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mt-1 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            The Married Women’s Property (MWP) Act, 1874 Fortress
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-6">
            Section 6 of the MWP Act provides an impenetrable ring-fence around your life insurance policy. When endorsed under this Act, the policy creates a statutory trust solely for the benefit of your spouse and/or children.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)]">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)] text-white flex items-center justify-center font-bold text-xs mb-3">01</div>
              <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1.5">Immunity from Creditors</h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Business debts, bank recoveries, commercial liabilities, or insolvency proceedings cannot attach or liquidate MWP policy claim proceeds.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)]">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs mb-3">02</div>
              <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1.5">No Court Attachment</h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Neither civil courts nor official assignees under the Insolvency and Bankruptcy Code have jurisdiction to attach or assign the policy benefits.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)]">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-tertiary)] text-white flex items-center justify-center font-bold text-xs mb-3">03</div>
              <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1.5">Irrevocable Beneficiaries</h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                The policyholder cannot assign, pledge, or take a loan against the policy without the explicit legal consent of the named beneficiaries/trustees.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Coverage Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Family Legacy & Estate Shield
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Ensure long-term family lifestyle continuity and provide guaranteed capital for children's future
              milestones, regardless of premature breadwinner mortality.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              MWP Act Creditor Protection
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Policies endorsed under the Married Women's Property Act (MWP Act) are legally protected from
              attachment by business creditors, court decrees, or insolvency liquidations.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Keyman & Partnership Cover
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Safeguard business continuity by insuring founders and vital directors. Ensures surviving partners
              possess the liquidity to acquire equity stakes from legal heirs smoothly.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions on Life Insurance
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
              Estate Consultation
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Structure Your Family's Insurance Shield
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Consult with Panchanan Kumar on sum assured adequacy, MWP Act endorsement, and policy structuring.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Life Cover</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Insurance is the subject matter of solicitation.
            Policy issuance and claims are subject to the terms and conditions of the respective insurer.
          </p>
        </div>
      </Container>
    </div>
  );
}
