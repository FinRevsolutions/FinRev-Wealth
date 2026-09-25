import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, TrendingUp, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Long-Term Wealth Creation — Multi-Generational Compounding",
  "Build multi-generational capital with disciplined high-equity asset allocation capturing India's structural economic expansion with FINREV SOLUTIONS.",
  "/wealth-solutions/wealth-creation"
);

const FAQS = [
  {
    q: "What is the primary driver of 15–20 year equity wealth creation?",
    a: "Corporate earnings growth. Over long horizons, broad Indian equity market indices closely mirror the nominal GDP growth and aggregate corporate earnings expansion of listed Indian enterprises. Short-term noise and political cycles diminish over decades.",
  },
  {
    q: "How many mutual fund schemes are ideal for long-term wealth creation?",
    a: "Most investors over-diversify into 15–20 funds, causing duplicate holdings and diluted returns. A focused core portfolio of 4 to 6 high-conviction funds (e.g. 1 Flexi Cap, 1 Large & Mid Cap, 1 Mid Cap, 1 Small Cap, and 1 Balanced Advantage) provides complete diversification without administrative clutter.",
  },
];

export default function WealthCreationPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Wealth Creation</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <TrendingUp size={14} />
            <span>Multi-Decade Compounding</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Long-Term Wealth Creation Strategies
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Wealth creation is a function of time, discipline, and asset quality. We structure multi-cap equity portfolios
            engineered to capture the structural expansion of the Indian economy.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Asymmetric Compounding Curve
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              In a 20-year compounding journey, more than 60% of total wealth accumulates in the final 5 years.
              Patience through bear cycles is what transforms modest savings into fortunes.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Multi-Cap Asset Allocation
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Balancing steady bluechip leaders with high-growth emerging mid-market champions to optimize
              risk-adjusted returns across bull and bear regimes.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Behavioral Protection Desk
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              The greatest risk to long-term wealth is investor emotional panic. Our role is keeping you disciplined
              and preventing value-destroying exits during temporary market drawdowns.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions
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
              Wealth Strategy
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Build a Generational Equity Portfolio
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Schedule a strategy discussion with Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Wealth Creation</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. No assured or guaranteed returns are offered.
            FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
