import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, PieChart, Coins, Banknote, Landmark, Briefcase, Gem, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Investment Solutions — Mutual Funds, Bonds, PMS, AIF & Pre-IPO",
  "Explore FINREV SOLUTIONS comprehensive investment architecture: Mutual Funds, Systematic Investment Plans (SIP), Corporate Bonds, PMS, AIF, and Unlisted Shares.",
  "/investments"
);

const VEHICLES = [
  {
    icon: PieChart,
    title: "Mutual Funds",
    badge: "Core Wealth Engine",
    desc: "Diversified portfolios across 40+ leading AMCs — Equity, Debt, Hybrid, Index and ELSS tax saving funds.",
    href: "/investments/mutual-funds",
  },
  {
    icon: Coins,
    title: "Systematic Investment Plan (SIP)",
    badge: "Disciplined Compounding",
    desc: "Automated monthly investing with rupee cost averaging. Eliminate market timing stress and compound wealth systematically.",
    href: "/investments/sip",
  },
  {
    icon: Banknote,
    title: "Lumpsum & STP Deployment",
    badge: "Strategic Allocation",
    desc: "Deploy surplus capital through structured Systematic Transfer Plans (STP) to average into equity during volatile phases.",
    href: "/investments/lumpsum",
  },
  {
    icon: Landmark,
    title: "Bonds & Fixed Income",
    badge: "Capital Preservation",
    desc: "High-grade corporate bonds, Sovereign Gold Bonds (SGBs), and Government Securities (G-Secs) for predictable cash flows.",
    href: "/investments/bonds",
  },
  {
    icon: Briefcase,
    title: "Portfolio Management Services (PMS)",
    badge: "SEBI Min: ₹50 Lakhs",
    desc: "Concentrated alpha portfolios of 15–25 high-conviction stocks held directly in your individual demat account.",
    href: "/investments/pms",
  },
  {
    icon: Gem,
    title: "Alternative Investment Funds (AIF)",
    badge: "SEBI Min: ₹1 Crore",
    desc: "Category II and III institutional vehicles covering private credit, private equity, and absolute return hedge strategies.",
    href: "/investments/aif",
  },
  {
    icon: Sparkles,
    title: "Unlisted Shares & Pre-IPO",
    badge: "Private Equity Access",
    desc: "Direct demat allocations in mature late-stage private companies before their public stock exchange listings.",
    href: "/investments/unlisted-pre-ipo",
  },
];

export default function InvestmentsHubPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Investments</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <SectionLabel>Pillar 01: Invest</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Comprehensive Investment Solutions
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            From retail mutual fund systematic investment plans to institutional PMS and alternative private assets,
            FINREV delivers a full-spectrum investment platform calibrated to your unique risk-reward profile.
          </p>
        </div>

        {/* CATEGORY 1: CORE WEALTH COMPACT ENGINES (Mutual Funds, SIP, Lumpsum) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                Tier 01 • Foundation
              </span>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Core Wealth Compounding
              </h2>
            </div>
            <span className="text-xs font-semibold text-[var(--color-text-muted)] hidden sm:block">
              Daily Liquidity • 40+ AMCs • SEBI Regulated
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Flagship: Mutual Funds & SIP Duo (8 cols) */}
            <div className="lg:col-span-8 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                    Primary Wealth Engine
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">Equity • Hybrid • Debt • ELSS</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Mutual Funds & Systematic Investment Plans (SIP)
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  Access institutional-grade portfolio diversification across India's leading Asset Management Companies.
                  Automate monthly rupee cost averaging to harness long-term compounding while completely eliminating market timing risk.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-[var(--color-surface-low)] rounded-xl border border-[var(--color-border-subtle)] mb-6 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] block">Partner AMCs</span>
                    <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block">40+ Fund Houses</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] block">Ticket Minimum</span>
                    <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block">₹500 / month</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[var(--color-text-muted)] block">Custody Structure</span>
                    <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block">Direct AMC Folios</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4 text-xs font-bold">
                  <Link href="/investments/mutual-funds" className="text-[var(--color-secondary)] hover:underline inline-flex items-center gap-1">
                    <span>Explore Mutual Funds</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link href="/investments/sip" className="text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
                    <span>Explore SIP Strategies</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
                <Link
                  href="/tools/sip-calculator"
                  className="text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] inline-flex items-center gap-1"
                >
                  <span>Launch SIP Calculator</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Sidecar: Lumpsum & Systematic Transfer Plan (STP) (4 cols) */}
            <div className="lg:col-span-4 bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center">
                    <Banknote size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-[var(--color-primary)] bg-[var(--color-surface-canvas)] px-2.5 py-0.5 rounded border border-[var(--color-border-subtle)]">
                    Surplus Deployment
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Lumpsum & STP Deployment
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-6">
                  Park significant capital surpluses in liquid/overnight funds and systematically transfer fixed weekly or monthly
                  tranches into equity funds, protecting your entry valuation against sudden corrections.
                </p>

                <ul className="space-y-2 text-xs text-[var(--color-text-secondary)] font-medium mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
                    <span>Eliminates single-day market timing anxiety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
                    <span>Yield on parked liquid buffer during deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shrink-0" />
                    <span>Rule-based automated AMC transfer mechanics</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/investments/lumpsum"
                className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
              >
                <span>Explore STP Architecture</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* CATEGORY 2: WEALTH & CAPITAL PRESERVATION (Bonds & Fixed Income) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                Tier 02 • Preservation
              </span>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Bonds & Institutional Fixed Income
              </h2>
            </div>
            <span className="text-xs font-semibold text-[var(--color-text-muted)] hidden sm:block">
              Predictable Cash Flows • Sovereign & Corporate Debt
            </span>
          </div>

          <div className="p-7 md:p-8 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-3">
                <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                  Capital Defense Architecture
                </span>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                  Balancing Equity Volatility with Defined-Yield Instruments
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  High-rated corporate bonds, Sovereign Gold Bonds (SGBs), and Government Securities (G-Secs) structured
                  to generate predictable periodic coupon payments while mitigating equity drawdown anxiety.
                </p>
                <div className="pt-2">
                  <Link
                    href="/investments/bonds"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-600)] text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    <span>View Fixed Income Solutions</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">AAA / AA+ Papers</span>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] mt-1 mb-1.5">Corporate Bonds</h4>
                    <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                      Regular semi-annual coupon yields from established PSU & blue-chip private corporations.
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--color-secondary)] mt-3 block">2 – 10 Yr Tenure</span>
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">Sovereign Credit</span>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] mt-1 mb-1.5">G-Secs & SDLs</h4>
                    <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                      Zero credit default risk backed by the Government of India for multi-decade horizon matching.
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--color-secondary)] mt-3 block">5 – 40 Yr Tenure</span>
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">2.50% Coupon + Gold</span>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] mt-1 mb-1.5">Sovereign Gold (SGB)</h4>
                    <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                      Semi-annual interest coupon plus domestic gold price appreciation, tax-exempt at maturity.
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--color-secondary)] mt-3 block">8 Yr Horizon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY 3: ALTERNATIVE & HIGH-COMPLEXITY (PMS, AIF, Pre-IPO) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-tertiary)]">
                Tier 03 • Private Wealth
              </span>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-heading)" }}>
                Alternative Assets & Institutional Strategies
              </h2>
            </div>
            <span className="text-xs font-semibold text-[var(--color-text-muted)] hidden sm:block">
              Accredited Investors • Family Treasuries • HNIs
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* PMS Card */}
            <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center">
                    <Briefcase size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                    SEBI Min: ₹50 Lakhs
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Portfolio Management Services (PMS)
                </h3>
                <span className="text-xs text-[var(--color-text-muted)] block mb-3">
                  Discretionary High-Conviction Equity
                </span>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-5">
                  Direct stock ownership in your individual demat account. Concentrated 15–25 stock portfolios managed
                  by experienced institutional fund managers for aggressive alpha.
                </p>
                <div className="p-3 rounded-lg bg-[var(--color-surface-low)] text-[11px] text-[var(--color-text-secondary)] font-medium mb-4">
                  Direct demat custody • Quarterly manager debriefs
                </div>
              </div>
              <Link
                href="/investments/pms"
                className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
              >
                <span>Inquire About PMS</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* AIF Card */}
            <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center">
                    <Gem size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                    SEBI Min: ₹1 Crore
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Alternative Investment Funds (AIF)
                </h3>
                <span className="text-xs text-[var(--color-text-muted)] block mb-3">
                  Cat II & III Private Market Vehicles
                </span>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-5">
                  Pooled institutional structures accessing private equity, venture debt, structured real estate credit,
                  and long-short quantitative hedge fund strategies.
                </p>
                <div className="p-3 rounded-lg bg-[var(--color-surface-low)] text-[11px] text-[var(--color-text-secondary)] font-medium mb-4">
                  3 – 7 Yr capital lifecycle • Non-correlated market returns
                </div>
              </div>
              <Link
                href="/investments/aif"
                className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)]"
              >
                <span>Inquire About AIF</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Pre-IPO Card */}
            <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] text-white flex items-center justify-center">
                    <Sparkles size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-[var(--color-tertiary)] bg-[var(--color-gold-subtle)] px-2.5 py-0.5 rounded border border-[#fde68a]">
                    Accredited Only
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  Unlisted Shares & Pre-IPO
                </h3>
                <span className="text-xs text-[var(--color-text-muted)] block mb-3">
                  Late-Stage Private Tech & Industry
                </span>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-5">
                  Direct off-market equity allocations into mature pre-IPO unicorns and profitable enterprises before
                  formal stock exchange listing and price discovery.
                </p>
                <div className="p-3 rounded-lg bg-[var(--color-surface-low)] text-[11px] text-[var(--color-text-secondary)] font-medium mb-4">
                  Direct CDSL/NSDL transfer • Mandatory 6-mo post-IPO lock-in
                </div>
              </div>
              <Link
                href="/investments/unlisted-pre-ipo"
                className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-bold text-[var(--color-tertiary)] hover:text-[var(--color-tertiary-container)]"
              >
                <span>Inquire About Pre-IPO</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Advisory Banner */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Personalized Guidance
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Need Help Selecting the Right Investment Mix?
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Schedule a consultation with founder Panchanan Kumar (ARN-195797) to structure your asset allocation.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Speak with an Expert</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. FINREV SOLUTIONS is an AMFI-registered
            Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
