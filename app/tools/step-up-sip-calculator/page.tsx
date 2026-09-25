"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Phone, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateStepUpSIP, formatExactINR, formatINR } from "@/lib/calculators";
import { CONTACT } from "@/lib/constants";
import { GrowthChartSVG } from "@/components/calculators/Charts";
import { MilestoneTable } from "@/components/calculators/MilestoneTable";

export default function StepUpSIPCalculatorPage() {
  const [initialSIP, setInitialSIP] = useState<number>(15000);
  const [stepUp, setStepUp] = useState<number>(10);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(15);

  const result = calculateStepUpSIP(initialSIP, stepUp, rate, years);

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
          <span className="text-[var(--color-text-primary)]">Step-Up SIP Calculator</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-10">
          <SectionLabel>Accelerated Wealth Multiplier</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Step-Up SIP Calculator
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Model how annual top-ups aligned with career salary increments dramatically expand final portfolio corpus.
          </p>
        </div>

        {/* Analytical Workbench: INPUT PANEL + RESULT SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8">
          {/* Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                  <Calculator size={16} />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  Step-Up Parameters
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase tracking-wider">
                Annual Top-Up
              </span>
            </div>

            {/* Initial SIP */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="initial-sip" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Starting Monthly SIP (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--color-text-muted)]">₹</span>
                  <input
                    id="initial-sip"
                    type="number"
                    min={1000}
                    max={500000}
                    step={1000}
                    value={initialSIP}
                    onChange={(e) => setInitialSIP(Math.max(1000, Number(e.target.value)))}
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
                value={initialSIP}
                onChange={(e) => setInitialSIP(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>₹1,000/mo</span>
                <span>₹50,000/mo</span>
                <span>₹2,00,000/mo</span>
              </div>
            </div>

            {/* Step-Up Rate */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="step-up-rate" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Annual Step-Up (% per year)
                </label>
                <div className="relative">
                  <input
                    id="step-up-rate"
                    type="number"
                    min={1}
                    max={25}
                    step={1}
                    value={stepUp}
                    onChange={(e) => setStepUp(Math.min(25, Math.max(1, Number(e.target.value))))}
                    className="w-24 px-3 min-h-[40px] text-right font-bold text-base text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-text-muted)]">%</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={stepUp}
                onChange={(e) => setStepUp(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>5% (Inflation Top-Up)</span>
                <span>10% (Standard Salary Growth)</span>
                <span>20% (Aggressive)</span>
              </div>
            </div>

            {/* Expected Return Rate */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="stepup-rate" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Expected Return Rate (% p.a.)
                </label>
                <div className="relative">
                  <input
                    id="stepup-rate"
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
            </div>

            {/* Investment Horizon */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="stepup-years" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Investment Horizon (Years)
                </label>
                <div className="relative">
                  <input
                    id="stepup-years"
                    type="number"
                    min={1}
                    max={30}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Math.min(30, Math.max(1, Number(e.target.value))))}
                    className="w-24 px-3 min-h-[40px] text-right font-bold text-base text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-text-muted)]">Yr</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
            </div>
          </div>

          {/* Results Display Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col justify-between gap-6">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                    Simulated Step-Up Corpus
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
                  Approx. {formatINR(result.totalCorpus)} with {stepUp}% annual increments
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium block">Total Contribution</span>
                  <span
                    className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatExactINR(result.totalInvested)}
                  </span>
                </div>
                <div className="p-3.5 rounded-[4px] bg-white border border-[var(--color-border-strong)]">
                  <span className="text-[11px] text-[var(--color-secondary)] font-medium block">Step-Up Advantage</span>
                  <span
                    className="text-base sm:text-lg font-bold text-[var(--color-secondary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    +{formatExactINR(result.stepUpAdvantage)}
                  </span>
                </div>
              </div>

              {/* Comparison Callout */}
              <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                <div className="flex justify-between py-1 border-b border-[var(--color-border-subtle)]">
                  <span>Regular Flat SIP Corpus:</span>
                  <strong className="font-mono">{formatExactINR(result.regularSIPCorpus)}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-[var(--color-border-subtle)]">
                  <span>Final Monthly SIP in Year {years}:</span>
                  <strong className="font-mono text-[var(--color-secondary)]">
                    {formatExactINR(result.yearlyData[result.yearlyData.length - 1]?.monthlySip || initialSIP)}/mo
                  </strong>
                </div>
                <div className="flex justify-between py-1 text-[var(--color-secondary)] font-bold">
                  <span>Incremental Corpus Generated:</span>
                  <span className="font-mono">+{formatINR(result.stepUpAdvantage)}</span>
                </div>
              </div>

              {/* Key Interpretation Box */}
              <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-[var(--color-text-primary)] block mb-1">Key Interpretation:</strong>
                A {stepUp}% annual increment yields an extra{" "}
                <strong className="text-[var(--color-secondary)] font-bold">{formatINR(result.stepUpAdvantage)}</strong> over a flat SIP, harnessing the compounding power of your rising income.
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-full py-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Set Up a Step-Up SIP Mandate</span>
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

        {/* Growth Trajectory Visual Curve */}
        <GrowthChartSVG
          data={chartData}
          title="Step-Up SIP Wealth Trajectory"
          subtitle="Annual progression of growing monthly contributions and compounding corpus"
        />

        {/* Milestone Progression Table */}
        <MilestoneTable
          title="Year-by-Year Step-Up Progression"
          subtitle="Annual contributions and compounding valuation"
          headers={["Year", "Cumulative Contribution", "Compounded Gains", "Estimated Corpus"]}
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
