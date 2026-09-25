import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Layers, Percent, TrendingUp, Landmark, Clock, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Mutual Funds Distribution — Equity, Debt, Hybrid & ELSS",
  "Access 40+ leading Asset Management Companies across Equity, Debt, Hybrid, Index, and ELSS funds through AMFI-registered distributor Panchanan Kumar (ARN-195797).",
  "/investments/mutual-funds"
);

const FUND_CATEGORIES = [
  {
    name: "Equity Mutual Funds",
    tenure: "5+ Years Horizon",
    risk: "Moderate to Very High",
    summary:
      "Invest in diversified baskets of publicly listed Indian and global equities. Covers Large Cap, Mid Cap, Small Cap, Flexi Cap, and ELSS tax saving funds for multi-year capital compounding.",
    types: ["Large Cap (Top 100 Companies)", "Flexi Cap (Dynamic Multi-Cap Allocation)", "Mid & Small Cap (High Growth Focus)", "ELSS (Section 80C Tax Planning)"],
  },
  {
    name: "Debt & Fixed Income Funds",
    tenure: "1 Day to 3 Years",
    risk: "Low to Moderate",
    summary:
      "Deploy capital into government treasury bills, corporate debt, commercial paper, and certificates of deposit for capital preservation and liquidity management.",
    types: ["Overnight & Liquid Funds", "Short Duration Funds", "Corporate Bond Funds", "Target Maturity G-Sec Funds"],
  },
  {
    name: "Hybrid & Multi-Asset Funds",
    tenure: "3 to 5 Years",
    risk: "Moderate",
    summary:
      "Dynamically blend equity growth with debt stability and gold hedging, providing down-market cushions while participating in upward economic expansion.",
    types: ["Balanced Advantage / Dynamic Asset Allocation", "Aggressive Hybrid", "Multi-Asset Allocation", "Equity Savings"],
  },
  {
    name: "Passive & Index Funds",
    tenure: "5+ Years",
    risk: "Benchmark Market Risk",
    summary:
      "Low-cost, rule-based replication of benchmark indices such as Nifty 50, Nifty Next 50, and BSE Sensex with minimal fund manager bias.",
    types: ["Nifty 50 Index Funds", "Nifty Next 50", "Target Maturity Debt Passives", "Global Factor Indices"],
  },
];

const HORIZON_MATRIX = [
  {
    tier: "01",
    category: "Overnight & Liquid Funds",
    horizon: "< 3 Months",
    risk: "Low Risk",
    purpose: "Cash management, emergency reserve, parking capital for STP",
    securities: "TREPS, 91-Day T-Bills, Commercial Papers (A1+)",
  },
  {
    tier: "02",
    category: "Short Duration & Corporate Debt",
    horizon: "1 – 3 Years",
    risk: "Low to Moderate",
    purpose: "Capital preservation with regular yield and low duration risk",
    securities: "AAA Corporate Bonds, G-Secs, Bank CDs",
  },
  {
    tier: "03",
    category: "Hybrid & Multi-Asset Allocation",
    horizon: "3 – 5 Years",
    risk: "Moderate",
    purpose: "Balanced growth with dynamic equity-debt-gold rebalancing",
    securities: "65-75% Equities, 25-35% Debt & Gold hedge",
  },
  {
    tier: "04",
    category: "Large & Flexi Cap Equity",
    horizon: "5+ Years",
    risk: "Moderately High",
    purpose: "Long-term GDP compounding and structural capital appreciation",
    securities: "India's top market leaders and scalable enterprises",
  },
  {
    tier: "05",
    category: "Mid & Small Cap Equity",
    horizon: "7 – 10+ Years",
    risk: "High / Very High",
    purpose: "Accelerated alpha expansion across emerging market leaders",
    securities: "High-growth mid/small enterprises with higher volatility",
  },
];

export default function MutualFundsPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Mutual Funds</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] mb-2">
            <ShieldCheck size={13} className="text-[var(--color-secondary)]" />
            <span>AMFI Registered Mutual Fund Distributor</span>
            <span className="text-[var(--color-secondary)]">•</span>
            <span className="font-mono text-[var(--color-secondary)]">{REGULATORY.arnNumber}</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mutual Fund Architecture
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            A regulated, transparent pooling vehicle designed to provide professional asset management, broad diversification,
            and daily liquidity across Indian and international capital markets.
          </p>
        </div>

        {/* Core Institutional Fact Ledger */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border-subtle)] bg-white border border-[var(--color-border-subtle)] rounded-[4px] mb-12">
          <div className="p-4 sm:p-5">
            <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">AMC Coverage</span>
            <span className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] mt-0.5 block">40+ Fund Houses</span>
            <span className="text-[11px] text-[var(--color-text-muted)]">Pan-India access</span>
          </div>
          <div className="p-4 sm:p-5">
            <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">Custody Structure</span>
            <span className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] mt-0.5 block">Direct Investor Folios</span>
            <span className="text-[11px] text-[var(--color-text-muted)]">Zero pool accounts</span>
          </div>
          <div className="p-4 sm:p-5">
            <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">Valuation Standard</span>
            <span className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] mt-0.5 block">Daily MTM NAV</span>
            <span className="text-[11px] text-[var(--color-text-muted)]">SEBI regulated pricing</span>
          </div>
          <div className="p-4 sm:p-5">
            <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">Settlement Rails</span>
            <span className="text-sm sm:text-base font-bold text-[var(--color-text-primary)] mt-0.5 block">BSE StAR / NSE NMF</span>
            <span className="text-[11px] text-[var(--color-text-muted)]">Direct bank debits</span>
          </div>
        </div>

        {/* SECTION 1: HOW A MUTUAL FUND WORKS (STRUCTURE & DIVERSIFICATION) */}
        <div className="bg-white rounded-[6px] border border-[var(--color-border-subtle)] p-6 sm:p-8 mb-12">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Structural Mechanics</SectionLabel>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The Mutual Fund Pooling & Diversification Model
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
              Understand how individual capital contributions are aggregated into an institutional trust structure to achieve scale and risk dispersion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            <div className="p-5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
              <span className="text-[10px] font-mono font-bold text-[var(--color-secondary)] uppercase block mb-1">
                Stage 01 • Capital Aggregation
              </span>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                Investor Pooling
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Thousands of individual and institutional investors pool their financial surpluses into a specific SEBI-registered Mutual Fund Trust managed by an Asset Management Company (AMC).
              </p>
            </div>

            <div className="p-5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
              <span className="text-[10px] font-mono font-bold text-[var(--color-secondary)] uppercase block mb-1">
                Stage 02 • Professional Allocation
              </span>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                Diversified Deployment
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Dedicated fund managers deploy pooled assets across 50 to 100+ securities (stocks, corporate bonds, government gilts). Single-company default or drop does not critically impair the portfolio.
              </p>
            </div>

            <div className="p-5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
              <span className="text-[10px] font-mono font-bold text-[var(--color-secondary)] uppercase block mb-1">
                Stage 03 • Pro-Rata Units & NAV
              </span>
              <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2">
                Daily Unit Pricing (NAV)
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Investors receive units proportionate to their capital contribution. The value of each unit is determined daily via the Net Asset Value (NAV), reflecting end-of-day market prices of all underlying holdings.
              </p>
            </div>
          </div>

          {/* NAV Concept Formula Box */}
          <div className="mt-6 p-4 sm:p-5 rounded-[4px] bg-white border border-[var(--color-border-strong)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase text-[var(--color-secondary)] font-bold block mb-1">
                The Net Asset Value (NAV) Formula
              </span>
              <p className="font-mono text-xs sm:text-sm font-bold text-[var(--color-text-primary)]">
                NAV per Unit = (Total Market Value of Portfolio Securities + Current Assets - Liabilities) ÷ Total Outstanding Units
              </p>
              <p className="text-[11px] text-[var(--color-text-muted)] mt-1">
                Calculated every business day at market close per SEBI valuation guidelines. NAV is not a stock price; a lower NAV does not indicate a "cheaper" fund.
              </p>
            </div>
            <Link
              href="/tools/sip-calculator"
              className="px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] transition-colors shrink-0 whitespace-nowrap min-h-[40px] inline-flex items-center gap-1.5"
            >
              <span>Simulate SIP</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* SECTION 2: CLEAN RISK & TIME-HORIZON VISUALIZATION */}
        <div className="bg-white rounded-[6px] border border-[var(--color-border-subtle)] p-6 sm:p-8 mb-12">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Calibrated Horizons</SectionLabel>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Risk vs. Investment Horizon Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
              Equities require multi-year holding horizons to absorb market volatility. Matching your goal timeline to the appropriate fund category is critical to capital preservation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-bold">
                  <th className="py-3 px-2">Tier</th>
                  <th className="py-3 px-2">Category</th>
                  <th className="py-3 px-2">Recommended Horizon</th>
                  <th className="py-3 px-2">Risk Classification</th>
                  <th className="py-3 px-2">Primary Strategic Function</th>
                  <th className="py-3 px-2 text-right">Underlying Assets</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                {HORIZON_MATRIX.map((row) => (
                  <tr key={row.tier} className="hover:bg-[var(--color-surface-canvas)] transition-colors">
                    <td className="py-3.5 px-2 font-mono text-[var(--color-text-muted)]">{row.tier}</td>
                    <td className="py-3.5 px-2 font-bold text-[var(--color-text-primary)]">{row.category}</td>
                    <td className="py-3.5 px-2 font-semibold text-[var(--color-secondary)]">{row.horizon}</td>
                    <td className="py-3.5 px-2">{row.risk}</td>
                    <td className="py-3.5 px-2 text-[var(--color-text-muted)]">{row.purpose}</td>
                    <td className="py-3.5 px-2 text-right font-mono text-[11px] text-[var(--color-text-muted)]">{row.securities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 3: FOUR CORE MUTUAL FUND QUADRANTS */}
        <div className="mb-12">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Fund Classifications</SectionLabel>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              The Four Mutual Fund Categories
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">
              Every scheme category fulfills a distinct mandate within an investor's overall asset allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FUND_CATEGORIES.map((cat) => (
              <div key={cat.name} className="bg-white p-6 rounded-[4px] border border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)] transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-secondary)] font-bold">
                      {cat.tenure}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--color-text-muted)]">Risk: {cat.risk}</span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {cat.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-[var(--color-border-subtle)] mb-4">
                    {cat.types.map((t) => (
                      <div key={t} className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-primary)]">
                        <CheckCircle2 size={12} className="text-[var(--color-secondary)] shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="pt-3 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors min-h-[36px]"
                >
                  <span>Inquire About Suitable Schemes</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: DIRECT AMC HOLDING & SETTLEMENT ARCHITECTURE */}
        <div className="bg-white rounded-[6px] border border-[var(--color-border-subtle)] p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <SectionLabel>Sovereign Custody</SectionLabel>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Direct Folio Ownership. Zero Intermediary Risk.
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                As an AMFI-registered Mutual Fund Distributor (ARN-195797), FINREV SOLUTIONS facilitates paperless transactions directly on national exchange rails (BSE StAR MF and NSE NMF II).
              </p>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                All mutual fund folios are registered solely under your PAN and individual bank account. Redemption proceeds are transferred directly by the AMC custodian bank to your verified bank account — never routed through third-party wallets or broker pool accounts.
              </p>
            </div>
            <div className="lg:col-span-4 bg-[var(--color-surface-canvas)] p-5 rounded-[4px] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] flex flex-col gap-2.5 font-medium">
              <span className="font-mono text-[10px] uppercase font-bold text-[var(--color-secondary)]">
                Operational Highlights
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
                <span>Consolidated CAS via NSDL/CDSL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
                <span>NACH / OTM paperless mandate setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
                <span>Nomination & tax statement assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
                <span>Annual asset allocation reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Consultation Action Anchor */}
        <div className="bg-[var(--color-primary)] text-white rounded-[6px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="finrev-gold-line mb-3" aria-hidden="true" />
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Begin Your Mutual Fund Allocation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Consult with founder Panchanan Kumar (ARN-195797) to structure scheme selection mapped to your financial milestones.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] shrink-0 transition-colors inline-flex items-center gap-2 min-h-[44px]"
          >
            <span>Speak with Principal</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Statutory Regulatory Notice */}
        <div className="p-4 sm:p-5 rounded-[4px] bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={16} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">Statutory Disclosure:</strong> Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
            Past performance is not indicative of future returns. FINREV SOLUTIONS does not guarantee returns or capital safety on market-linked financial products.
          </p>
        </div>
      </Container>
    </div>
  );
}
