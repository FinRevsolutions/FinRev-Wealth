import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, CheckCircle2, AlertTriangle, Layers, Percent, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Comprehensive Mutual Fund Guide — NAV, Expense Ratios & Fund Classes",
  "A detailed educational primer explaining how mutual funds work in India: Net Asset Value (NAV), Total Expense Ratio (TER), Direct vs Regular, and taxation rules.",
  "/insights/mutual-fund-guide"
);

export default function MutualFundGuidePage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[var(--color-text-primary)] transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Mutual Fund Guide</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <BookOpen size={14} />
            <span>Investor Education Primer</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Complete Mutual Fund Guide
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Master the core concepts of mutual fund investing in India: Net Asset Value (NAV), Total Expense Ratio (TER),
            SEBI categorization rules, and current taxation frameworks.
          </p>
        </div>

        {/* Chapters / Key Topics */}
        <div className="flex flex-col gap-10 mb-16 max-w-4xl">
          {/* Chapter 1: What is a Mutual Fund */}
          <div className="bg-white p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <SectionLabel>Chapter 01</SectionLabel>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              What is a Mutual Fund & How Does It Work?
            </h2>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              A mutual fund is a professionally managed trust that pools money from thousands of individual and institutional
              investors who share common financial objectives. The pooled capital is invested by full-time, SEBI-registered
              fund managers across diverse asset classes like equities, corporate bonds, government securities, and gold.
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Each investor receives "units" representing their fractional ownership in the total portfolio. As the value of
              underlying shares or bonds increases, the value of each unit — known as the Net Asset Value (NAV) — rises proportionally.
            </p>
          </div>

          {/* Chapter 2: NAV Demystified */}
          <div className="bg-white p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <SectionLabel>Chapter 02</SectionLabel>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Demystifying Net Asset Value (NAV)
            </h2>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              A prevalent myth among retail investors is that an NFO (New Fund Offer) priced at ₹10 is "cheaper" or has
              higher upside than an established 15-year-old fund with an NAV of ₹500. This is mathematically incorrect.
            </p>
            <div className="p-4 bg-[var(--color-surface-low)] rounded-xl border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] mb-4">
              <strong>The Math:</strong> If you invest ₹1,00,000 in a ₹10 NAV fund, you receive 10,000 units.
              If you invest ₹1,00,000 in a ₹500 NAV fund, you receive 200 units. If both funds experience a 15% increase in
              their underlying stocks, both portfolios will be worth exactly ₹1,15,000. NAV is a unit-divider, not a valuation multiple.
            </div>
          </div>

          {/* Chapter 3: Total Expense Ratio (TER) */}
          <div className="bg-white p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <SectionLabel>Chapter 03</SectionLabel>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Total Expense Ratio (TER) & Distributor Value
            </h2>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
              The Total Expense Ratio (TER) is the annual percentage charged by the AMC to cover fund management fees,
              administrative expenses, custodian charges, and distributor commissions. The NAV published every evening is
              already net of all expenses.
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              SEBI strictly caps the maximum TER that an AMC can charge based on asset size. In Regular plans distributed by
              licensed MFDs like FINREV, the commission is paid by the AMC from this capped TER. The distributor provides
              ongoing portfolio review, rebalancing, tax reporting, and behavioural guidance through market cycles.
            </p>
          </div>

          {/* Chapter 4: Capital Gains Taxation */}
          <div className="bg-white p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <SectionLabel>Chapter 04</SectionLabel>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Mutual Fund Taxation Framework (Current Rules)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[var(--color-surface-canvas)] rounded-xl border border-[var(--color-border-subtle)]">
                <h4 className="font-bold text-[var(--color-text-primary)] mb-1.5">Equity Oriented Funds (&gt;65% Equity)</h4>
                <ul className="flex flex-col gap-1.5 text-[var(--color-text-muted)]">
                  <li>• <strong>STCG (&le; 12 Months):</strong> 20% on gains</li>
                  <li>• <strong>LTCG (&gt; 12 Months):</strong> 12.5% on gains exceeding ₹1.25 Lakhs per financial year</li>
                </ul>
              </div>
              <div className="p-4 bg-[var(--color-surface-canvas)] rounded-xl border border-[var(--color-border-subtle)]">
                <h4 className="font-bold text-[var(--color-text-primary)] mb-1.5">Debt & Other Funds</h4>
                <ul className="flex flex-col gap-1.5 text-[var(--color-text-muted)]">
                  <li>• Gains on debt fund units purchased after April 1, 2023 are taxed at your applicable income tax slab rate.</li>
                  <li>• Indexation benefits are no longer available for new debt fund purchases.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Personalized Guidance
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Have Questions About Your Mutual Fund Holdings?
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Connect with Panchanan Kumar (ARN-195797) for an unbiased evaluation of your schemes.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Mutual Funds</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. Taxation rules are subject to change by government amendments.
            Consult your tax advisor for specific personal advice.
          </p>
        </div>
      </Container>
    </div>
  );
}
