import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, CheckCircle2, Calculator, TrendingUp, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Retirement Planning & Systematic Withdrawal Plans (SWP)",
  "Plan your inflation-hedged retirement corpus and implement tax-efficient SWP monthly income streams with FINREV SOLUTIONS (ARN-195797).",
  "/wealth-solutions/retirement-planning"
);

const FAQS = [
  {
    q: "How does a Systematic Withdrawal Plan (SWP) work in retirement?",
    a: "An SWP allows you to withdraw a fixed sum (e.g. ₹75,000/month) from your accumulated mutual fund corpus directly into your bank account. The remaining unwithdrawn capital stays invested, continuing to compound and fight inflation.",
  },
  {
    q: "Why is an SWP more tax-efficient than traditional Bank Fixed Deposit interest?",
    a: "Bank FD interest is taxed fully at your peak slab rate every financial year. In an SWP from an equity or balanced fund, each monthly withdrawal comprises partly capital return and partly capital gains. Only the capital gains portion is taxed, resulting in significantly lower annual tax drag.",
  },
  {
    q: "What is Longevity Risk in retirement?",
    a: "Longevity risk is the danger of outliving your retirement savings due to rising life expectancy. If a retiree keeps 100% of their money in fixed deposits earning 7% while healthcare inflation is 12%, their purchasing power halving every 8–10 years can deplete their corpus prematurely.",
  },
];

export default function RetirementPlanningPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Retirement Planning</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-navy-subtle)] text-[var(--color-primary)] text-xs font-bold rounded border border-[var(--color-border-subtle)] mb-3">
            <Clock size={14} />
            <span>Financial Independence Architecture</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Retirement Planning & SWP Cashflow Solutions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Retirement is not an age; it is a financial number. We engineer your transition from the wealth accumulation
            phase to the tax-efficient post-career distribution phase through Systematic Withdrawal Plans.
          </p>
        </div>

        {/* The 4-Stage Institutional Retirement Architecture */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Retirement Lifecycle</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The 4-Stage Retirement Wealth Architecture
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Retirement planning is not just saving for a number; it is orchestrating four distinct financial regimes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                stage: "01",
                name: "Accumulation Phase",
                ageSpan: "Ages 25 to 50",
                badge: "Wealth Creation",
                badgeColor: "text-emerald-800 bg-emerald-50 border-emerald-200",
                description: "Aggressive multi-cap equity compounding via automated monthly SIPs. Annual salary step-ups maximize capital accumulation while career earnings peak.",
                keyAction: "80% Equity • Step-Up SIP • Dividend Reinvestment",
              },
              {
                stage: "02",
                name: "Transition Phase",
                ageSpan: "Ages 50 to 60",
                badge: "Glidepath De-Risking",
                badgeColor: "text-blue-800 bg-blue-50 border-blue-200",
                description: "Systematic Transfer Plans (STP) harvest accumulated equity gains into target maturity debt and high-credit corporate bonds, insulating the corpus from market shocks.",
                keyAction: "50% Equity / 50% Debt • Debt Laddering • Volatility Shield",
              },
              {
                stage: "03",
                name: "Income & SWP Phase",
                ageSpan: "Ages 60 to 80+",
                badge: "Cashflow Freedom",
                badgeColor: "text-purple-800 bg-purple-50 border-purple-200",
                description: "Implement a 3-Bucket SWP architecture: 2-year liquid buffer, 5-year hybrid reserve, and long-term equity growth bucket to outpace healthcare inflation.",
                keyAction: "Monthly SWP Credit • Tax-Efficient Drawdown • SWR Protocol",
              },
              {
                stage: "04",
                name: "Legacy & Continuity Phase",
                ageSpan: "Generational Horizon",
                badge: "Estate Governance",
                badgeColor: "text-amber-800 bg-amber-50 border-amber-200",
                description: "Ensuring unencumbered estate transmission to surviving spouses and heirs through comprehensive AMC nomination audits, joint folios, and succession governance.",
                keyAction: "Nomination Audits • Joint Holdings • Estate Tax Resilience",
              },
            ].map((cycle) => (
              <div key={cycle.stage} className="p-5 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] font-bold text-[var(--color-secondary)]">STAGE {cycle.stage}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${cycle.badgeColor}`}>
                      {cycle.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-0.5 leading-snug">{cycle.name}</h4>
                  <span className="text-[11px] font-semibold text-[var(--color-secondary)] block mb-2">{cycle.ageSpan}</span>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4">
                    {cycle.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[var(--color-border-subtle)] text-[10px] text-[var(--color-text-primary)] font-semibold">
                  {cycle.keyAction}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Retirement Tool Callout */}
        <div className="p-8 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] block mb-1">
              Test Your Retirement Corpus
            </span>
            <h4 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Model Your Post-Retirement Inflation & Corpus Requirements
            </h4>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Adjust current monthly expenses, inflation assumptions, and retirement ages on our calculator.
            </p>
          </div>
          <Link
            href="/tools/retirement-calculator"
            className="px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-inverse-surface)] text-white text-xs font-bold rounded-xl shrink-0 transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <Calculator size={14} />
            <span>Open Retirement Calculator</span>
          </Link>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions on Retirement Planning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
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
              Retirement Architecture
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Plan Your Financial Independence With Panchanan Kumar
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Model your retirement roadmap and SWP cashflows with an AMFI-registered distributor (ARN-195797).
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Retirement</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. Systematic Withdrawal Plans (SWP) do not guarantee
            capital preservation or fixed returns. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
