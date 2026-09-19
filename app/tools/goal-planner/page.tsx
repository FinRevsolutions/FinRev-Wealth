"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Target, ShieldAlert, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateGoalSIP, formatExactINR, formatINR } from "@/lib/calculators";

export default function GoalPlannerPage() {
  const [targetCorpus, setTargetCorpus] = useState<number>(5000000); // 50 Lakhs
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  const result = calculateGoalSIP(targetCorpus, rate, years);

  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[var(--color-text-primary)] transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Goal Planner</span>
        </nav>

        <div className="max-w-3xl mb-12">
          <SectionLabel>Reverse Goal Modeling</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Goal Planner Calculator
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Start with your destination. Determine the exact monthly SIP contribution required to reach
            a specific financial target — whether home acquisition, higher education, or financial freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Inputs */}
          <div className="lg:col-span-7 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center">
                  <Target size={18} />
                </div>
                <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                  Target Goal Parameters
                </h2>
              </div>
              <span className="text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-1 rounded border border-[var(--color-border-strong)]">
                Reverse Calculated
              </span>
            </div>

            {/* Target Corpus Input */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="goal-target" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Target Corpus Required (₹)
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
                    className="w-44 pl-7 pr-3 py-1.5 text-right font-bold text-base text-[var(--color-secondary)] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={500000}
                max={20000000}
                step={250000}
                value={targetCorpus}
                onChange={(e) => setTargetCorpus(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>₹5 Lakhs</span>
                <span>₹1 Crore</span>
                <span>₹2 Crore</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="goal-years" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Years to Reach Milestone
                </label>
                <div className="relative">
                  <input
                    id="goal-years"
                    type="number"
                    min={1}
                    max={30}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Math.min(30, Math.max(1, Number(e.target.value))))}
                    className="w-24 px-3 py-1.5 text-right font-bold text-base text-[var(--color-text-primary)] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
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
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Return Rate */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="goal-rate" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Assumed Compounding Rate (% p.a.)
                </label>
                <div className="relative">
                  <input
                    id="goal-rate"
                    type="number"
                    min={6}
                    max={16}
                    step={0.5}
                    value={rate}
                    onChange={(e) => setRate(Math.min(16, Math.max(6, Number(e.target.value))))}
                    className="w-24 px-3 py-1.5 text-right font-bold text-base text-[var(--color-text-primary)] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-text-muted)]">%</span>
                </div>
              </div>
              <input
                type="range"
                min={6}
                max={16}
                step={0.5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] font-medium">
                <span>6% (Conservative)</span>
                <span>12% (Balanced Equity)</span>
                <span>16% (Aggressive)</span>
              </div>
            </div>
          </div>

          {/* Outputs Panel */}
          <div className="lg:col-span-5 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card-hover)] flex flex-col justify-between gap-6">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)] block">
                  Required Monthly SIP
                </span>
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatExactINR(result.requiredMonthlySIP)}/mo
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Required to achieve {formatINR(targetCorpus)} in {years} years at {rate}% p.a.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 my-5">
                <div className="p-3.5 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium block">Total You Invest</span>
                  <span className="text-base font-bold text-[var(--color-text-primary)] block mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                    {formatExactINR(result.totalInvested)}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">Out of pocket</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--color-emerald-subtle)] border border-[var(--color-border-strong)]">
                  <span className="text-[11px] text-[var(--color-secondary)] font-medium block">Compounding Share</span>
                  <span className="text-base font-bold text-[var(--color-secondary)] block mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                    +{formatExactINR(result.estimatedGain)}
                  </span>
                  <span className="text-[10px] text-[var(--color-secondary)]">{result.compoundingContributionPercent}% earned from market</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                <Sparkles size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>
                  Compounding covers <strong>{result.compoundingContributionPercent}%</strong> of your target goal.
                  You only personally contribute the remaining {100 - result.compoundingContributionPercent}%.
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-full py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Map This Goal to a Portfolio</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldAlert size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Projections are purely illustrative based on user parameters and hypothetical compounding rates.
            Mutual fund investments are subject to market risks. Past returns are not indicative of future results.
          </p>
        </div>
      </Container>
    </div>
  );
}
