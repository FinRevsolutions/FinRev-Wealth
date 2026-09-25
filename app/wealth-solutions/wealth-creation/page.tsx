import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, TrendingUp, Layers, Scale, LineChart, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Long-Term Wealth Creation — Multi-Generational Compounding",
  "Build multi-generational capital with disciplined high-equity asset allocation capturing India's structural economic expansion with FINREV SOLUTIONS (ARN-195797).",
  "/wealth-solutions/wealth-creation"
);

const CREATION_FRAMEWORK = [
  {
    pillar: "01. Structural GDP Alignment",
    focus: "India's Formalization & CapEx Growth",
    description: "Corporate earnings over long horizons mirror nominal economic growth. Equity mutual funds give investors fractional ownership of industry leaders benefiting from formalization, financialization, and infrastructure expansion.",
    mechanism: "Core allocation in Large & Flexi Cap funds anchoring systemic corporate earnings.",
  },
  {
    pillar: "02. Multi-Cap Asymmetric Compounding",
    focus: "Exponential Compounding Curve Dynamics",
    description: "In a 20-year equity compounding trajectory, over 60% of absolute wealth is generated in the final 5 years. Enduring short-term cyclical drawdowns without panicking is what converts routine monthly savings into substantial capital.",
    mechanism: "Satellite allocation in high-alpha Mid & Small Cap funds to capture emerging category champions.",
  },
  {
    pillar: "03. Dynamic Rebalancing & Disciplined Exits",
    focus: "Asset Allocation Governance",
    description: "Portfolios naturally drift as equities expand faster than fixed income. Annual rebalancing trims profits from overvalued sectors and systematically reallocates into underpriced asset classes without emotional interference.",
    mechanism: "Annual portfolio audits, rebalancing bands, and disciplined valuation trimming.",
  },
  {
    pillar: "04. Behavioral Shield Architecture",
    focus: "Preventing Capital Destruction During Panics",
    description: "Empirical studies prove that the average investor earns less than the funds they invest in due to emotional churn: buying at cyclical market tops and redeeming during bear market bottoms. We serve as a behavioral stabilizer.",
    mechanism: "Continuous advisory communication, market context debriefs, and automated SIP continuity.",
  },
];

const FAQS = [
  {
    q: "What is the primary engine of multi-decade equity wealth compounding?",
    a: "Corporate earnings growth. Over 10 to 20-year periods, broad market returns converge closely with underlying corporate revenue and profit expansion. Macroeconomic headlines, geopolitics, and short-term volatility represent market noise that diminishes across full business cycles.",
  },
  {
    q: "How many mutual fund schemes are optimal for long-term wealth creation?",
    a: "Most self-directed investors suffer from hyper-fragmentation, holding 15 to 25+ funds that create massive stock overlap and index-diluted returns. A well-engineered core-and-satellite portfolio of 4 to 6 high-conviction schemes provides full diversification across 150+ distinct corporate holdings without administrative drag.",
  },
  {
    q: "How should an investor respond during severe market corrections (-20% or more)?",
    a: "Market drawdowns are the historical engines of future alpha. During corrections, your active SIP installments acquire substantially higher unit counts at lower valuations. The prudent course is maintaining existing SIP mandates and selectively deploying surplus liquidity into diversified equity funds.",
  },
];

export default function WealthCreationPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Wealth Creation</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <TrendingUp size={13} className="text-[var(--color-secondary)]" />
            <span>Generational Capital Compounding</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Long-Term Wealth Creation Strategies
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Sustainable wealth creation requires mathematical patience and asset allocation discipline. We structure
            equity-led portfolios designed to capture the multi-decade expansion of India's formal economy.
          </p>
        </div>

        {/* 4 Architectural Framework Rows */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Strategic Foundations</span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Four Architectural Pillars of Multi-Decade Wealth
              </h2>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">Disciplined Asset Allocation</span>
          </div>

          <div className="space-y-6 divide-y divide-[var(--color-border-subtle)]">
            {CREATION_FRAMEWORK.map((item, idx) => (
              <div key={item.pillar} className={idx > 0 ? "pt-6" : ""}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="md:w-1/3">
                    <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      {item.focus}
                    </span>
                    <h3 className="text-base font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                      {item.pillar}
                    </h3>
                  </div>
                  <div className="md:w-2/3 space-y-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    <p>{item.description}</p>
                    <div className="p-2.5 bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] rounded-[2px] text-[11px] font-mono text-[var(--color-text-primary)]">
                      <strong>Implementation:</strong> {item.mechanism}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core & Satellite Portfolio Architecture */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Portfolio Construction</span>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Core & Satellite Equity Architecture
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              A balanced approach that separates baseline stability from accelerated alpha generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[var(--color-border-subtle)] rounded-[4px] p-5 bg-[var(--color-surface-low)]">
              <div className="text-xs font-mono font-bold text-[var(--color-secondary)] mb-1">CORE ALLOCATION (60% – 70%)</div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">Large Cap, Flexi Cap & Multi-Asset</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Anchors the portfolio in proven market leaders, scalable corporate balance sheets, and resilient cash generators. Provides lower volatility drawdowns during broad market corrections.
              </p>
              <div className="text-[11px] text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-2 font-mono">
                Objective: Steady GDP-linked compounder with capital preservation focus.
              </div>
            </div>

            <div className="border border-[var(--color-border-subtle)] rounded-[4px] p-5 bg-[var(--color-surface-low)]">
              <div className="text-xs font-mono font-bold text-[var(--color-primary)] mb-1">SATELLITE ALLOCATION (30% – 40%)</div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">Mid Cap & High-Conviction Small Cap</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Captures high-growth emerging enterprises climbing from mid-tier market caps into industry leadership. Generates asymmetric upside and portfolio alpha across full 7–10 year cycles.
              </p>
              <div className="text-[11px] text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-2 font-mono">
                Objective: Accelerated capital appreciation with managed volatility tolerance.
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white border border-[var(--color-border-subtle)] rounded-[4px] p-6 md:p-8 mb-12">
          <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked Questions on Wealth Creation
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
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-secondary)]">Wealth Advisory Desk</span>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Build Your Multi-Decade Wealth Blueprint
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-xl">
              Consult with Panchanan Kumar (ARN-195797) to structure focused equity allocations aligned with your risk appetite.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/tools/sip-calculator"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-primary)] rounded-[4px] hover:border-[var(--color-primary)] transition-colors"
            >
              <span>Simulate Compounding</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-xs font-semibold text-white rounded-[4px] hover:bg-[var(--color-primary-800)] transition-colors"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Regulatory Disclosure */}
        <div className="p-4 bg-white border border-[var(--color-border-subtle)] rounded-[4px] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="shrink-0 mt-0.5 text-[var(--color-secondary)]" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing. Equity investments do not guarantee capital protection or fixed returns. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
