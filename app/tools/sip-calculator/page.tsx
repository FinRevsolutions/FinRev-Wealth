"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Phone, ShieldAlert, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateSIP, formatExactINR, formatINR } from "@/lib/calculators";
import { CONTACT } from "@/lib/constants";
import { GrowthChartSVG } from "@/components/calculators/Charts";
import { MilestoneTable } from "@/components/calculators/MilestoneTable";

export default function SIPCalculatorPage() {
  const [amount, setAmount] = useState<number>(15000);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(15);

  const result = calculateSIP(amount, rate, years);

  const chartData = result.yearlyData.map((d) => ({
    year: d.year,
    invested: d.invested,
    value: d.value,
  }));

  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[var(--color-text-primary)] transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">SIP Calculator</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-10">
          <SectionLabel>Investment Simulator</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Systematic Investment Plan (SIP) Calculator
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Model how disciplined monthly allocations compound over multi-year horizons via rupee-cost averaging.
          </p>
        </div>

        {/* Analytical Workbench: INPUT PANEL + RESULT SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8">
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                  <Calculator size={16} />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  SIP Investment Parameters
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase tracking-wider">
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
                    className="w-36 sm:w-44 pl-7 pr-3 min-h-[40px] text-right font-bold text-base text-[var(--color-secondary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
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
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
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
                    className="w-24 px-3 min-h-[40px] text-right font-bold text-base text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
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
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>6% (Conservative)</span>
                <span>12% (Equity Benchmark)</span>
                <span>18% (Aggressive)</span>
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
                    className="w-24 px-3 min-h-[40px] text-right font-bold text-base text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
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
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>35 Years</span>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Rupee-cost averaging automatically acquires more mutual fund units during market pullbacks and fewer units at elevated levels, reducing average purchase cost over time.
            </div>
          </div>

          {/* Results Display Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col justify-between gap-6">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                    Simulated Future Value
                  </span>
                  <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">
                    Illustrative Projection
                  </span>
                </div>
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatExactINR(result.totalCorpus)}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Approx. {formatINR(result.totalCorpus)} modeled at {rate}% p.a. over {years} years
                </p>
              </div>

              {/* Metric Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium block">Total Contribution</span>
                  <span
                    className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatExactINR(result.totalInvested)}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">{result.investedRatio}% of corpus</span>
                </div>
                <div className="p-3.5 rounded-[4px] bg-white border border-[var(--color-border-strong)]">
                  <span className="text-[11px] text-[var(--color-secondary)] font-medium block">Estimated Growth</span>
                  <span
                    className="text-base sm:text-lg font-bold text-[var(--color-secondary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    +{formatExactINR(result.estimatedGain)}
                  </span>
                  <span className="text-[10px] text-[var(--color-secondary)]">{result.gainRatio}% of corpus</span>
                </div>
              </div>

              {/* Split Bar */}
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex justify-between text-xs font-semibold text-[var(--color-text-muted)]">
                  <span>Contributed ({result.investedRatio}%)</span>
                  <span>Estimated Growth ({result.gainRatio}%)</span>
                </div>
                <div className="w-full h-2 rounded-[2px] overflow-hidden flex bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                  <div className="bg-[var(--color-primary)] h-full transition-all duration-200" style={{ width: `${result.investedRatio}%` }} />
                  <div className="bg-[var(--color-secondary)] h-full transition-all duration-200" style={{ width: `${result.gainRatio}%` }} />
                </div>
              </div>

              {/* Key Interpretation Box */}
              <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-[var(--color-text-primary)] block mb-1">Key Interpretation:</strong>
                Your total capital contribution of {formatINR(result.totalInvested)} produces an estimated wealth multiplier of{" "}
                <strong className="text-[var(--color-secondary)] font-bold">{result.multiplier}×</strong>, with compounding accounting for{" "}
                {result.gainRatio}% of total accumulated value.
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-full py-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Execute This SIP Allocation</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={CONTACT.phoneTel}
                className="w-full py-2.5 bg-white border border-[var(--color-border-strong)] hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] text-[var(--color-primary)] text-xs font-semibold rounded-[4px] text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={13} className="text-[var(--color-secondary)]" />
                <span>Speak with Principal</span>
              </a>
            </div>
          </div>
        </div>

        {/* Growth Trajectory Chart */}
        <GrowthChartSVG
          data={chartData}
          title="SIP Compounding Trajectory"
          subtitle="Annual breakdown of cumulative contributions versus compounding growth curve"
        />

        {/* Milestone Progression Table */}
        <MilestoneTable
          title="Year-by-Year SIP Milestone Schedule"
          subtitle="Cumulative investment outlay vs. year-end market valuation"
          headers={["Year", "Contributed Capital", "Compounded Gains", "Total Estimated Corpus"]}
          rows={result.yearlyData.map((d) => ({
            year: d.year,
            invested: d.invested,
            gain: d.gain,
            value: d.value,
          }))}
        />

        {/* Statutory Regulatory Disclaimer */}
        <div className="p-4 sm:p-5 rounded-[4px] bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)] mb-8">
          <ShieldAlert size={16} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">Statutory Notice:</strong> Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.
            Projections are illustrative and hypothetical, based on an assumed constant rate of return ({rate}% p.a.), and do not represent guaranteed or assured returns.
          </p>
        </div>
      </Container>
    </div>
  );
}
