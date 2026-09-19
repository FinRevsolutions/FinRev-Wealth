"use client";

import Link from "next/link";
import { ArrowRight, PieChart, Coins, Landmark, Banknote, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function InvestmentSolutionsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Core Capital Allocation</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Investment Solutions
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
              Carefully filtered financial assets engineered for capital preservation, systematic compounding,
              and multi-decade wealth creation without pool account counterparty risk.
            </p>
          </div>
          <Link
            href="/investments"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)] transition-colors"
          >
            <span>Explore All Investment Categories</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Editorial Investment-Category Composition (Replaces 4-Card Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Flagship Left Feature: Core Equities & Systematic SIP (7 Cols) */}
          <div className="lg:col-span-7 bg-[var(--color-surface-canvas)] rounded-2xl p-7 md:p-9 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center">
                    <PieChart size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)] block">
                      Core Wealth Engine
                    </span>
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                      Mutual Funds & Systematic Investment Plans (SIP)
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-1 rounded-full border border-[var(--color-border-strong)]">
                  40+ AMCs
                </span>
              </div>

              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Direct portfolio access across India's premier mutual fund houses. Rather than chasing short-term performance tables, FINREV constructs goal-aligned asset allocations across Large Cap, Flexi Cap, Mid Cap, and Hybrid strategies.
              </p>

              {/* Editorial Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Coins size={16} className="text-[var(--color-secondary)]" />
                    <span className="text-xs font-bold text-[var(--color-text-primary)]">
                      Rupee Cost Averaging
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    Automated SIP installments acquire more mutual fund units during market corrections, lowering average acquisition cost without timing risk.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <ShieldCheck size={16} className="text-[var(--color-secondary)]" />
                    <span className="text-xs font-bold text-[var(--color-text-primary)]">
                      Direct Folio Ownership
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    100% of investments settle directly between your bank and the respective AMCs. No third-party pool accounts or escrow risks.
                  </p>
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[var(--color-text-secondary)] mb-6">
                {["Step-Up SIP Capabilities", "Consolidated CAS Reporting", "Tax-Loss Harvesting Review"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dual Link Actions */}
            <div className="pt-5 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-4">
              <Link
                href="/investments/mutual-funds"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[var(--color-secondary)] text-white text-xs font-bold rounded-xl hover:bg-[var(--color-secondary-700)] transition-colors shadow-sm"
              >
                <span>Explore Mutual Funds</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/investments/sip"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border border-[var(--color-border-strong)] text-[var(--color-text-primary)] text-xs font-bold rounded-xl hover:bg-[var(--color-surface-low)] transition-colors"
              >
                <span>Calculate & Start SIP</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right Column: Asymmetric Stacked Pillars (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Block 1: Bonds & Fixed Income */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--color-primary)] transition-all flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center">
                    <Landmark size={19} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] bg-[var(--color-navy-subtle)] px-2.5 py-1 rounded-full">
                    Fixed Income & Debt
                  </span>
                </div>
                <h4 className="text-base font-bold text-[var(--color-text-primary)] mb-2">
                  Bonds & Capital Preservation
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Curated Government Securities (G-Secs), State Development Loans (SDLs), and AAA/AA+ Corporate Bonds structured to lock in dependable coupon yields and stabilize overall portfolio volatility.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Sovereign Safety", "Predictable Coupons", "Duration Matching"].map((t) => (
                    <span key={t} className="text-[11px] font-semibold text-[var(--color-text-muted)] bg-[var(--color-surface-canvas)] px-2.5 py-1 rounded-md border border-[var(--color-border-subtle)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/investments/bonds"
                className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors group"
              >
                <span>Explore Fixed Income & Bonds</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Block 2: Tactical Deployments & Lumpsum STP */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--color-secondary)] transition-all flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] border border-[var(--color-border-strong)] flex items-center justify-center">
                    <Banknote size={19} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)] bg-[var(--color-surface-canvas)] px-2.5 py-1 rounded-full border border-[var(--color-border-subtle)]">
                    Liquidity Management
                  </span>
                </div>
                <h4 className="text-base font-bold text-[var(--color-text-primary)] mb-2">
                  Lumpsum Deployment & Systematic Transfers (STP)
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Prudently deploy windfall liquidity (business payouts, property sale proceeds, annual bonuses) by parking in liquid funds and systematically transferring into equities over 12 to 36 months.
                </p>
              </div>
              <Link
                href="/investments/lumpsum"
                className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center justify-between text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)] transition-colors group"
              >
                <span>Deploy Surplus Capital Wisely</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
