"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, Phone, ShieldAlert, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateGoalSIP, calculateSIP, formatExactINR, formatINR } from "@/lib/calculators";
import { CONTACT } from "@/lib/constants";
import { GrowthChartSVG } from "@/components/calculators/Charts";
import { MilestoneTable } from "@/components/calculators/MilestoneTable";

export default function GoalPlannerPage() {
  const [targetCorpus, setTargetCorpus] = useState<number>(5000000); // 50 Lakhs
  const [currentSavings, setCurrentSavings] = useState<number>(500000); // 5 Lakhs
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  // Growth of current savings
  const fvCurrentSavings = Math.round(currentSavings * Math.pow(1 + rate / 100, years));
  // Remaining gap to bridge
  const netGoalGap = Math.max(0, targetCorpus - fvCurrentSavings);

  // SIP required to fund the remaining gap
  const goalResult = calculateGoalSIP(netGoalGap, rate, years);
  const requiredMonthlySIP = goalResult.requiredMonthlySIP;
  const totalSIPInvested = goalResult.totalInvested;
  const totalCapitalContributed = currentSavings + totalSIPInvested;
  const totalCompoundedGain = Math.max(0, targetCorpus - totalCapitalContributed);
  const progressCoveredPercent = Math.min(100, Math.round((fvCurrentSavings / targetCorpus) * 100));

  const chartData = goalResult.yearlyData.map((d) => {
    const fvSavingsAtYear = Math.round(currentSavings * Math.pow(1 + rate / 100, d.year));
    return {
      year: d.year,
      invested: currentSavings + d.invested,
      value: Math.min(targetCorpus, fvSavingsAtYear + d.value),
    };
  });

  return (
    <div className="py-10 md:py-16 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[var(--color-text-primary)] transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Goal Planner</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-10">
          <SectionLabel>Milestone Financial Architecture</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Goal Planner Calculator
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Reverse-engineer the exact monthly SIP contribution required to achieve your target milestone after factoring in current accumulated savings.
          </p>
        </div>

        {/* Analytical Workbench: INPUT PANEL + RESULT SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8">
          {/* Inputs */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-secondary)] flex items-center justify-center">
                  <Target size={16} />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  Target Goal Parameters
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase tracking-wider">
                Reverse Calculated
              </span>
            </div>

            {/* Target Corpus Input */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="goal-target" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Target Goal Corpus (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--color-text-muted)]">₹</span>
                  <input
                    id="goal-target"
                    type="number"
                    min={100000}
                    max={100000000}
                    step={100000}
                    value={targetCorpus}
                    onChange={(e) => setTargetCorpus(Math.max(100000, Number(e.target.value)))}
                    className="w-36 sm:w-44 pl-7 pr-3 min-h-[40px] text-right font-bold text-base text-[var(--color-secondary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={500000}
                max={25000000}
                step={250000}
                value={targetCorpus}
                onChange={(e) => setTargetCorpus(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>₹5 Lakhs</span>
                <span>₹1.25 Crore</span>
                <span>₹2.5 Crore</span>
              </div>
            </div>

            {/* Current Savings Input */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="current-savings" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Current Dedicated Savings (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--color-text-muted)]">₹</span>
                  <input
                    id="current-savings"
                    type="number"
                    min={0}
                    max={targetCorpus}
                    step={50000}
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Math.min(targetCorpus, Math.max(0, Number(e.target.value))))}
                    className="w-36 sm:w-44 pl-7 pr-3 min-h-[40px] text-right font-bold text-base text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={Math.min(10000000, targetCorpus)}
                step={50000}
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>₹0 (Starting from scratch)</span>
                <span>{formatINR(currentSavings)}</span>
                <span>Max: {formatINR(targetCorpus)}</span>
              </div>
            </div>

            {/* Time Horizon */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="goal-years" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Time Horizon to Goal (Years)
                </label>
                <div className="relative">
                  <input
                    id="goal-years"
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
                max={30}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
            </div>

            {/* Expected Return */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="goal-rate" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Assumed Return (% p.a.)
                </label>
                <div className="relative">
                  <input
                    id="goal-rate"
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
          </div>

          {/* Results Display Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col justify-between gap-6">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                    Required Monthly Contribution
                  </span>
                  <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">
                    Mandate Target
                  </span>
                </div>
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatExactINR(requiredMonthlySIP)}
                  <span className="text-sm font-semibold text-[var(--color-text-muted)]">/month</span>
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  SIP needed over {years} years to accumulate the remaining {formatINR(netGoalGap)} gap
                </p>
              </div>

              {/* Metric Breakdown Cards */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium block">Total Goal Target</span>
                  <span
                    className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatExactINR(targetCorpus)}
                  </span>
                </div>
                <div className="p-3.5 rounded-[4px] bg-white border border-[var(--color-border-strong)]">
                  <span className="text-[11px] text-[var(--color-secondary)] font-medium block">Savings Future Value</span>
                  <span
                    className="text-base sm:text-lg font-bold text-[var(--color-secondary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatExactINR(fvCurrentSavings)}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex justify-between text-xs font-semibold text-[var(--color-text-muted)]">
                  <span>Current Savings Growth: {progressCoveredPercent}%</span>
                  <span>Unfunded Gap: {100 - progressCoveredPercent}%</span>
                </div>
                <div className="w-full h-2 rounded-[2px] overflow-hidden flex bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                  <div className="bg-[var(--color-primary)] h-full transition-all duration-200" style={{ width: `${progressCoveredPercent}%` }} />
                  <div className="bg-[var(--color-secondary)] h-full transition-all duration-200" style={{ width: `${100 - progressCoveredPercent}%` }} />
                </div>
              </div>

              {/* Key Interpretation Box */}
              <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-[var(--color-text-primary)] block mb-1">Key Interpretation:</strong>
                Your current savings of {formatINR(currentSavings)} will grow to approx. {formatINR(fvCurrentSavings)}. Bridging the remaining{" "}
                {formatINR(netGoalGap)} target requires a monthly allocation of <strong className="text-[var(--color-secondary)] font-bold">{formatINR(requiredMonthlySIP)}</strong> over {years} years.
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-full py-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Map Out This Financial Goal</span>
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
          title="Goal Wealth Accumulation Pathway"
          subtitle="Combined trajectory of existing savings growth and monthly SIP compounding toward the target"
        />

        {/* Milestone Progression Table */}
        <MilestoneTable
          title="Year-by-Year Goal Progress Schedule"
          subtitle="Annual trajectory of contributions and portfolio milestone accumulation"
          headers={["Year", "Cumulative Capital Outlay", "Compounded Value", "Target Milestone Gap"]}
          rows={chartData.map((d) => ({
            year: d.year,
            invested: d.invested,
            value: d.value,
            customColumns: [
              { key: "inv", value: d.invested },
              { key: "val", value: d.value },
              { key: "gap", value: Math.max(0, targetCorpus - d.value) },
            ],
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
