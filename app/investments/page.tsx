import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PieChart, Coins, Banknote, Landmark, Briefcase, Gem, ShieldCheck, TrendingUp, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";
import { REGULATORY } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata(
  "Investment Solutions — Mutual Funds, Bonds, PMS, AIF & Pre-IPO",
  "Explore FINREV SOLUTIONS comprehensive investment architecture: Mutual Funds, Systematic Investment Plans (SIP), Corporate Bonds, PMS, AIF, and Unlisted Shares.",
  "/investments"
);

export default function InvestmentsHubPage() {
  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Investments</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <SectionLabel>Investment Ecosystem Architecture</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Capital Allocation Solutions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            From systematic retail mutual fund compounding to institutional fixed income, discretionary PMS,
            and regulated alternative investment funds, FINREV provides a structured asset architecture aligned strictly to your risk profile.
          </p>
        </div>

        {/* TIER 01: CORE WEALTH COMPOUNDING (Mutual Funds, SIP, Lumpsum & STP) */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                Tier 01 • Core Foundation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                Mutual Funds & Systematic Allocation
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--color-text-muted)]">
              Direct AMC Folios • BSE StAR MF / NSE NMF II Clearing
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Mutual Funds & SIP Duo (8 cols) */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                    Primary Compounding Engine
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    Equity • Debt • Hybrid • Solution Oriented
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Mutual Funds & Systematic Investment Plans (SIP)
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Access comprehensive portfolio diversification across India's leading Asset Management Companies.
                  Automate monthly rupee-cost averaging mandates to systematically compound capital across market cycles while eliminating entry timing stress.
                </p>

                {/* Ledger metadata grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[var(--color-surface-canvas)] rounded-[4px] border border-[var(--color-border-subtle)] mb-6 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">AMC Coverage</span>
                    <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block">40+ Asset Management Cos</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">Entry Threshold</span>
                    <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block">₹500 / month</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">Custody Structure</span>
                    <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block">Direct Investor Folios</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <Link href="/investments/mutual-funds" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors inline-flex items-center gap-1">
                    <span>Explore Mutual Funds</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link href="/investments/sip" className="text-[var(--color-secondary)] hover:underline inline-flex items-center gap-1">
                    <span>Explore SIP Strategies</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
                <Link
                  href="/tools/sip-calculator"
                  className="text-xs font-mono text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] transition-colors inline-flex items-center gap-1"
                >
                  <span>Launch SIP Simulator</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Lumpsum & STP (4 cols) */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-canvas)] text-[var(--color-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                    <Banknote size={16} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-primary)]">
                    Surplus Deployment
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Lumpsum & STP Deployment
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  Deploy surplus liquidity through structured Systematic Transfer Plans (STP), parking in lower-volatility liquid funds and averaging into equity over 12–36 months.
                </p>

                <ul className="space-y-2 text-xs text-[var(--color-text-secondary)] mb-6 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-secondary)] shrink-0">•</span>
                    <span>Mitigates peak equity market entry valuation risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-secondary)] shrink-0">•</span>
                    <span>Liquid fund yields on unallocated capital buffer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-secondary)] shrink-0">•</span>
                    <span>Automated weekly or monthly transfer execution</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/investments/lumpsum"
                className="pt-3 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors min-h-[40px]"
              >
                <span>Explore STP Architecture</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* TIER 02: FIXED INCOME & CAPITAL PRESERVATION */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-primary)]">
                Tier 02 • Capital Preservation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                Bonds & Defined-Yield Securities
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--color-text-muted)]">
              Credit Quality • Duration Management • Regular Cash Flows
            </span>
          </div>

          <div className="bg-white rounded-[6px] border border-[var(--color-border-subtle)] p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="text-xs font-mono uppercase text-[var(--color-secondary)] font-bold">
                  Defensive Allocation Framework
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                  Structured Yield Aligned to Horizon & Credit Capacity
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Fixed income assets provide regular periodic coupon cash flows and portfolio stability.
                  We facilitate access to AAA/AA+ rated corporate papers, Sovereign Gold Bonds, and G-Secs without promising guaranteed market returns.
                </p>
                <div>
                  <Link
                    href="/investments/bonds"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] transition-colors min-h-[40px]"
                  >
                    <span>Explore Bond Solutions</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              {/* Comparative Fixed Income Matrix */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">AAA / AA+ Papers</span>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] mt-1 mb-1.5">Corporate Bonds</h4>
                    <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                      Semi-annual or annual coupon yields from established PSU & blue-chip private corporate issuers.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-secondary)] font-semibold mt-4 block">2 – 10 Yr Tenure</span>
                </div>

                <div className="p-4 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">Sovereign Credit</span>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] mt-1 mb-1.5">G-Secs & SDLs</h4>
                    <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                      Sovereign-backed debt issued by RBI on behalf of Central & State Governments for liability matching.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-secondary)] font-semibold mt-4 block">5 – 30 Yr Horizon</span>
                </div>

                <div className="p-4 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">2.5% Coupon + Gold</span>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] mt-1 mb-1.5">Sovereign Gold Bonds</h4>
                    <p className="text-[11px] text-[var(--color-text-secondary)] leading-relaxed">
                      Semi-annual cash interest plus underlying gold price appreciation, tax-exempt at statutory maturity.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--color-secondary)] font-semibold mt-4 block">8 Yr Tenure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TIER 03: SPECIALIZED & INSTITUTIONAL WEALTH (PMS, AIF, Pre-IPO) */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-tertiary)]">
                Tier 03 • Specialized Capital
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mt-0.5" style={{ fontFamily: "var(--font-heading)" }}>
                Institutional PMS, AIF & Unlisted Assets
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--color-text-muted)]">
              Accredited Investors • Family Offices • High-Net-Worth Portfolios
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* PMS */}
            <div className="bg-white p-6 rounded-[4px] border border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-canvas)] text-[var(--color-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                    <Briefcase size={16} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-secondary)] font-bold">
                    SEBI Min: ₹50 Lakhs
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Portfolio Management Services (PMS)
                </h3>
                <span className="text-xs text-[var(--color-text-muted)] block mb-3 font-medium">
                  Direct Demat Discretionary Portfolios
                </span>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  Direct stock ownership in your individual demat account. Concentrated 15–25 stock portfolios managed
                  by specialized institutional asset managers under SEBI-registered PMS mandates.
                </p>
                <div className="p-3 rounded-[4px] bg-[var(--color-surface-canvas)] text-[11px] text-[var(--color-text-secondary)] font-mono mb-4 border border-[var(--color-border-subtle)]">
                  Direct Demat Custody • Quarterly Performance Reviews
                </div>
              </div>
              <Link
                href="/investments/pms"
                className="pt-3 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors min-h-[40px]"
              >
                <span>Review PMS Framework</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* AIF */}
            <div className="bg-white p-6 rounded-[4px] border border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-canvas)] text-[var(--color-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                    <Gem size={16} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-secondary)] font-bold">
                    SEBI Min: ₹1 Crore
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Alternative Investment Funds (AIF)
                </h3>
                <span className="text-xs text-[var(--color-text-muted)] block mb-3 font-medium">
                  Category II & III Private Market Vehicles
                </span>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  Pooled institutional structures accessing private credit, structured debt, private equity,
                  and absolute-return quantitative hedge fund strategies with structured capital call commitments.
                </p>
                <div className="p-3 rounded-[4px] bg-[var(--color-surface-canvas)] text-[11px] text-[var(--color-text-secondary)] font-mono mb-4 border border-[var(--color-border-subtle)]">
                  3 – 7 Yr Commitment Cycle • Multi-Asset Uncorrelated Alpha
                </div>
              </div>
              <Link
                href="/investments/aif"
                className="pt-3 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors min-h-[40px]"
              >
                <span>Review AIF Structures</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Pre-IPO */}
            <div className="bg-white p-6 rounded-[4px] border border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-canvas)] text-[var(--color-tertiary)] border border-[var(--color-border-subtle)] flex items-center justify-center">
                    <Layers size={16} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-tertiary)] font-bold">
                    High Risk • Illiquid
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Unlisted Equities & Pre-IPO
                </h3>
                <span className="text-xs text-[var(--color-text-muted)] block mb-3 font-medium">
                  Late-Stage Private Enterprise Allocation
                </span>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  Direct off-market equity allocations into mature pre-IPO enterprises before public listing.
                  Subject to significant illiquidity, limited price discovery, and mandatory post-IPO statutory lock-in periods.
                </p>
                <div className="p-3 rounded-[4px] bg-[var(--color-surface-canvas)] text-[11px] text-[var(--color-text-secondary)] font-mono mb-4 border border-[var(--color-border-subtle)]">
                  Direct Demat Transfer • Strict Risk Suitability Required
                </div>
              </div>
              <Link
                href="/investments/unlisted-pre-ipo"
                className="pt-3 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-semibold text-[var(--color-tertiary)] hover:text-[var(--color-primary)] transition-colors min-h-[40px]"
              >
                <span>Review Risk Framework</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Institutional Consultation Banner */}
        <div className="bg-[var(--color-primary)] text-white rounded-[6px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="finrev-gold-line mb-3" aria-hidden="true" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 block mb-1">
              Personalized Portfolio Allocation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Calibrate Your Investment Architecture
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Schedule a consultative review with founder Panchanan Kumar (AMFI Registered MFD ARN-195797) to structure scheme selection and risk allocation.
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
            <strong className="text-[var(--color-text-primary)]">Statutory Notice:</strong> Mutual fund investments and securities markets are subject to market risks.
            Read all scheme-related documents carefully before investing. FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
            FINREV distributes third-party financial products and does not operate as a SEBI-registered Investment Adviser or discretionary PMS manufacturer.
          </p>
        </div>
      </Container>
    </div>
  );
}
