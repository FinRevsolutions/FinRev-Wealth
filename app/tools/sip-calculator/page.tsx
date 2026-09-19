"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Phone, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateSIP, formatExactINR, formatINR } from "@/lib/calculators";
import { CONTACT } from "@/lib/constants";

export default function SIPCalculatorPage() {
  const [amount, setAmount] = useState<number>(15000);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(15);

  const result = calculateSIP(amount, rate, years);

  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[var(--color-text-primary)] transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">SIP Calculator</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <SectionLabel>Wealth Simulator</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Systematic Investment Plan (SIP) Calculator
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Simulate how disciplined monthly compounding transforms small, consistent contributions
            into substantial generational wealth over 5, 10, 20, and 30-year horizons.
          </p>
        </div>

        {/* Interactive Calculator Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center">
                  <Calculator size={18} />
                </div>
                <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                  SIP Investment Parameters
                </h2>
              </div>
              <span className="text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-1 rounded border border-[var(--color-border-strong)]">
                Monthly Compounding
              </span>
            </div>

            {/* Slider & Input 1: Monthly Investment */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="sip-amount" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Monthly SIP Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--color-text-muted)]">₹</span>
                  <input
                    id="sip-amount"
                    type="number"
                    min={500}
                    max={500000}
                    step={500}
                    value={amount}
                    onChange={(e) => setAmount(Math.max(500, Number(e.target.value)))}
                    className="w-36 pl-7 pr-3 py-1.5 text-right font-bold text-base text-[var(--color-secondary)] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={1000}
                max={200000}
                step={1000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>₹1,000/mo</span>
                <span>₹50,000/mo</span>
                <span>₹2,00,000/mo</span>
              </div>
            </div>

            {/* Slider & Input 2: Expected Return Rate */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="sip-rate" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Expected Return Rate (% p.a.)
                </label>
                <div className="relative">
                  <input
                    id="sip-rate"
                    type="number"
                    min={6}
                    max={18}
                    step={0.5}
                    value={rate}
                    onChange={(e) => setRate(Math.min(18, Math.max(6, Number(e.target.value))))}
                    className="w-24 px-3 py-1.5 text-right font-bold text-base text-[var(--color-text-primary)] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-text-muted)]">%</span>
                </div>
              </div>
              <input
                type="range"
                min={6}
                max={18}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>6% (Conservative Debt)</span>
                <span>12% (Balanced Equity)</span>
                <span>18% (High Growth)</span>
              </div>
            </div>

            {/* Slider & Input 3: Tenure in Years */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="sip-years" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Investment Horizon (Years)
                </label>
                <div className="relative">
                  <input
                    id="sip-years"
                    type="number"
                    min={1}
                    max={35}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Math.min(35, Math.max(1, Number(e.target.value))))}
                    className="w-24 px-3 py-1.5 text-right font-bold text-base text-[var(--color-text-primary)] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-text-muted)]">Yr</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={35}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>35 Years</span>
              </div>
            </div>

            {/* Educational Note */}
            <div className="p-3.5 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)] flex items-start gap-2.5">
              <Sparkles size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
              <span>
                Rupee cost averaging automatically acquires more units when market indices correct,
                reducing the average unit cost without needing to time market entries.
              </span>
            </div>
          </div>

          {/* Results Display Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card-hover)] flex flex-col justify-between gap-6">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)] block">
                  Simulated Future Corpus
                </span>
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatExactINR(result.totalCorpus)}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Approx. {formatINR(result.totalCorpus)} at {rate}% p.a. over {years} years
                </p>
              </div>

              {/* Metric Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="p-3.5 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium block">Total Invested</span>
                  <span
                    className="text-lg font-bold text-[var(--color-text-primary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatExactINR(result.totalInvested)}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">{result.investedRatio}% of total</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--color-emerald-subtle)] border border-[var(--color-border-strong)]">
                  <span className="text-[11px] text-[var(--color-secondary)] font-medium block">Compounded Gain</span>
                  <span
                    className="text-lg font-bold text-[var(--color-secondary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    +{formatExactINR(result.estimatedGain)}
                  </span>
                  <span className="text-[10px] text-[var(--color-secondary)]">{result.gainRatio}% of total</span>
                </div>
              </div>

              {/* Split Bar */}
              <div className="flex flex-col gap-1.5 mb-5">
                <div className="flex justify-between text-xs font-semibold text-[var(--color-text-muted)]">
                  <span>Capital Invested</span>
                  <span>Compounded Growth ({result.multiplier}×)</span>
                </div>
                <div className="w-full h-3 rounded-full overflow-hidden flex bg-[var(--color-surface-low)]">
                  <div className="bg-[var(--color-primary)] h-full transition-all duration-200" style={{ width: `${result.investedRatio}%` }} />
                  <div className="bg-[var(--color-secondary)] h-full transition-all duration-200" style={{ width: `${result.gainRatio}%` }} />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-medium text-[var(--color-text-secondary)]">
                <span>Wealth Multiplier:</span>
                <span className="font-bold text-[var(--color-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>
                  {result.multiplier}× initial outlay
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-full py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Execute This SIP Allocation</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={CONTACT.phoneTel}
                className="w-full py-2.5 bg-white border border-[var(--color-border-strong)] hover:bg-[var(--color-surface-low)] text-[var(--color-text-primary)] text-xs font-bold rounded-xl text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={13} />
                <span>Speak with Panchanan Kumar</span>
              </a>
            </div>
          </div>
        </div>

        {/* Milestone Progression Table */}
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-6 md:p-8 shadow-[var(--shadow-card)] mb-12">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
            <div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                Annual Wealth Compounding Milestones
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                Year-by-year progression of invested capital vs. compounding growth at {rate}% p.a.
              </p>
            </div>
            <TrendingUp size={18} className="text-[var(--color-secondary)]" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-bold">
                  <th className="py-2.5">Year</th>
                  <th className="py-2.5">Invested Capital</th>
                  <th className="py-2.5">Compounded Gains</th>
                  <th className="py-2.5 text-right">Year-End Portfolio Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                {result.yearlyData.filter((_, idx) => (idx + 1) % 5 === 0 || idx === years - 1 || idx === 0).map((row) => (
                  <tr key={row.year} className="hover:bg-[var(--color-surface-canvas)] transition-colors">
                    <td className="py-3 font-bold text-[var(--color-text-primary)]">Year {row.year}</td>
                    <td className="py-3" style={{ fontFamily: "var(--font-mono)" }}>{formatExactINR(row.invested)}</td>
                    <td className="py-3 text-[var(--color-secondary)] font-semibold" style={{ fontFamily: "var(--font-mono)" }}>
                      +{formatExactINR(row.gain)}
                    </td>
                    <td className="py-3 text-right font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {formatExactINR(row.value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldAlert size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. The calculation generated above is for
            illustrative and educational purposes only, based on user-supplied inputs and an assumed hypothetical
            rate of return. It does not represent actual past or future performance of any mutual fund scheme and
            does not guarantee returns.
          </p>
        </div>
      </Container>
    </div>
  );
}
