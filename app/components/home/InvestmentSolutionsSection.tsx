import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers, Landmark, Briefcase, Sparkles, Building2, TrendingUp, ShieldCheck } from "lucide-react";

export function InvestmentSolutionsSection() {
  return (
    <section
      className="py-16 md:py-24 lg:py-28 bg-white border-b border-[var(--color-border-subtle)]"
      aria-label="Investment Solutions"
      id="investments"
    >
      <div className="container-page">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                INVESTMENT UNIVERSE
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.12]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Structured Capital Solutions. Tailored Asset Allocation.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed font-normal">
              From foundational mutual fund portfolios to specialized institutional private market allocations, we structure your holdings with direct investor custody and strict risk discipline.
            </p>
          </div>

          <Link
            href="/investments"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>Explore All Investment Offerings</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Structured Grid: 1 Primary Feature Area (Hero Block) + Supporting Services (Asymmetric Visual Weights) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          {/* PRIMARY FEATURE AREA (7 cols): Mutual Funds & Systematic Compounding (SIP) */}
          <div className="lg:col-span-7 bg-[var(--color-surface-canvas)] border border-[var(--color-border-strong)] p-6 sm:p-10 rounded-[4px] flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[var(--color-primary)] text-white px-2.5 py-1 rounded-[2px]">
                  CORE FOUNDATION
                </span>
                <span className="text-xs font-mono text-[var(--color-secondary)] font-semibold">
                  Direct AMC Distribution · ARN-195797
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] leading-tight mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mutual Funds & Systematic Investment Planning (SIP)
              </h3>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 font-normal">
                Disciplined compounding across Equity, Debt, and Hybrid strategies from India&apos;s leading Asset Management Companies. Every folio is registered directly in your name with zero intermediary pool accounts.
              </p>

              {/* 3 Core Execution Advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[var(--color-border-subtle)] mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">
                    Execution
                  </span>
                  <span className="text-xs font-bold text-[var(--color-primary)] mt-0.5 block">
                    Paperless NACH Mandates
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">
                    Custody
                  </span>
                  <span className="text-xs font-bold text-[var(--color-primary)] mt-0.5 block">
                    Direct AMC Holding
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block">
                    Compounding
                  </span>
                  <span className="text-xs font-bold text-[var(--color-primary)] mt-0.5 block">
                    Rupee-Cost Averaging
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/investments/mutual-funds"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-[3px] hover:bg-[var(--color-secondary)] transition-colors shadow-sm"
              >
                <span>View Mutual Funds</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/investments/sip"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[var(--color-border-strong)] text-[var(--color-primary)] text-xs font-semibold rounded-[3px] hover:border-[var(--color-secondary)] transition-colors"
              >
                <span>SIP Compounding</span>
              </Link>
              <Link
                href="/investments/lumpsum"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-xs font-medium transition-colors"
              >
                <span>Lumpsum & STP Routes</span>
              </Link>
            </div>
          </div>

          {/* SECONDARY FEATURE AREA (5 cols): Bonds & High-Credit Fixed Income */}
          <div className="lg:col-span-5 bg-white border border-[var(--color-border-strong)] p-6 sm:p-8 rounded-[4px] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                  CAPITAL PRESERVATION
                </span>
              </div>

              <h3
                className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] leading-tight mb-2.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bonds & Sovereign Securities
              </h3>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5 font-normal">
                Sovereign Gold Bonds, central government securities, and rated corporate debentures providing predictable cash flows and portfolio stability.
              </p>

              <div className="p-3.5 bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-[3px] mb-5">
                <span className="text-[10px] font-mono uppercase text-[var(--color-text-muted)] block mb-1">
                  Portfolio Role
                </span>
                <span className="text-xs font-semibold text-[var(--color-primary)] block">
                  Defensive yield and duration management counter-balancing equity volatility.
                </span>
              </div>
            </div>

            <Link
              href="/investments/bonds"
              className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-[var(--color-surface-canvas)] hover:bg-slate-100 border border-[var(--color-border-subtle)] text-[var(--color-primary)] text-xs font-semibold rounded-[3px] transition-colors group"
            >
              <span>Explore Fixed Income & Bonds</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[var(--color-secondary)]" />
            </Link>
          </div>
        </div>

        {/* SUPPORTING SPECIALIZED SERVICES ROW (3 Distinct Specialized Blocks with Hairlines) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[var(--color-border-subtle)]">
          {/* PMS */}
          <div className="p-5 bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] rounded-[4px] flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-secondary)]">
                  Active Stock Mandates
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  Min ₹50 Lakhs
                </span>
              </div>
              <h4 className="text-base font-bold text-[var(--color-primary)] mb-1.5">
                Portfolio Management (PMS)
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Institutional fund manager stock selection with direct demat holding for qualified HNI portfolios.
              </p>
            </div>
            <Link
              href="/investments/pms"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group"
            >
              <span>Explore PMS Solutions</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* AIF */}
          <div className="p-5 bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] rounded-[4px] flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-secondary)]">
                  Private Capital
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  Min ₹1 Crore
                </span>
              </div>
              <h4 className="text-base font-bold text-[var(--color-primary)] mb-1.5">
                Alternative Investment Funds (AIF)
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                SEBI Category II & III pooled strategies in private equity, private debt, and structured real estate.
              </p>
            </div>
            <Link
              href="/investments/aif"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group"
            >
              <span>Explore AIF Vehicles</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Unlisted & Pre-IPO */}
          <div className="p-5 bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-border-strong)] rounded-[4px] flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-secondary)]">
                  Pre-Listing Placements
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  HNI Portfolios
                </span>
              </div>
              <h4 className="text-base font-bold text-[var(--color-primary)] mb-1.5">
                Unlisted Shares & Pre-IPO
              </h4>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Access to high-growth private enterprise equity prior to public stock exchange listing.
              </p>
            </div>
            <Link
              href="/investments/unlisted-pre-ipo"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group"
            >
              <span>View Pre-IPO Solutions</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
