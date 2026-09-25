"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, DollarSign, Target, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";

const SELECTED_TOOLS = [
  {
    icon: TrendingUp,
    name: "SIP Calculator",
    subtitle: "Systematic monthly compounding simulator",
    metric: "12% p.a. baseline",
    href: "/tools/sip-calculator",
  },
  {
    icon: DollarSign,
    name: "Lumpsum Calculator",
    subtitle: "One-time surplus capital growth projector",
    metric: "Multi-year holding",
    href: "/tools/lumpsum-calculator",
  },
  {
    icon: Target,
    name: "Goal Planner",
    subtitle: "Reverse-calculate SIPs for targeted life milestones",
    metric: "Milestone-driven",
    href: "/tools/goal-planner",
  },
  {
    icon: CalendarClock,
    name: "Retirement Calculator",
    subtitle: "Inflation-adjusted post-retirement corpus modeler",
    metric: "Longevity planning",
    href: "/tools/retirement-calculator",
  },
];

export function WorkbenchPreview() {
  const [monthlyAmount, setMonthlyAmount] = useState<number>(25000);
  const [returnRate, setReturnRate] = useState<number>(12);
  const [horizonYears, setHorizonYears] = useState<number>(15);

  const monthlyRate = returnRate / 100 / 12;
  const totalMonths = horizonYears * 12;
  const totalInvested = monthlyAmount * totalMonths;
  const totalCorpus = Math.round(
    monthlyAmount * (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate))
  );
  const estimatedWealthGain = Math.max(0, totalCorpus - totalInvested);

  function formatCurrency(val: number) {
    return "₹" + Math.round(val).toLocaleString("en-IN");
  }

  // Generate SVG curve points
  const svgWidth = 420;
  const svgHeight = 110;
  const points: string[] = [];
  for (let step = 0; step <= 10; step++) {
    const t = (horizonYears / 10) * step;
    const nStep = t * 12;
    const corpusStep =
      nStep > 0
        ? monthlyAmount * (((Math.pow(1 + monthlyRate, nStep) - 1) / monthlyRate) * (1 + monthlyRate))
        : 0;
    const x = (step / 10) * svgWidth;
    const y = svgHeight - (corpusStep / totalCorpus) * (svgHeight - 18) - 10;
    points.push(`${x},${Math.max(6, y)}`);
  }
  const polylineStr = points.join(" ");
  const areaStr = `0,${svgHeight} ${polylineStr} ${svgWidth},${svgHeight}`;

  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)]" aria-label="Financial Tools Workbench">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-4 border-b border-[var(--color-border-strong)] gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                Quantitative Planning
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.15]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Interactive Wealth Modeling Workbench.
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
              Test assumptions, model realistic return scenarios, and project corpus requirements before committing hard-earned capital.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>Explore All 5 Financial Calculators</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Workbench Grid: Modeler (7 cols) + Tools Directory (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Live Compounding Simulation Engine */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[6px] border border-[var(--color-border-strong)] shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)] mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                  Simulated Projection
                </span>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mt-0.5">
                  SIP Wealth Growth Modeler
                </h3>
              </div>
              <span className="text-[11px] font-mono text-[var(--color-text-muted)] bg-[var(--color-surface-canvas)] px-2.5 py-1 rounded-[3px] border border-[var(--color-border-subtle)]">
                Formula: P × [((1+i)ⁿ - 1) / i] × (1+i)
              </span>
            </div>

            {/* Input Controls */}
            <div className="space-y-5">
              {/* Monthly Contribution */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[var(--color-primary)]">
                    Monthly Allocation
                  </label>
                  <span className="text-base font-bold text-[var(--color-primary)] font-mono">
                    {formatCurrency(monthlyAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={2000}
                  max={100000}
                  step={1000}
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                  className="w-full accent-[var(--color-secondary)] h-1.5 bg-slate-200 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[var(--color-text-muted)] mt-1">
                  <span>₹2,000 / mo</span>
                  <span>₹50,000 / mo</span>
                  <span>₹1,00,000 / mo</span>
                </div>
              </div>

              {/* Rate of Return */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[var(--color-primary)]">
                    Expected Return Rate (p.a.)
                  </label>
                  <span className="text-base font-bold text-[var(--color-secondary)] font-mono">
                    {returnRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={16}
                  step={0.5}
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full accent-[var(--color-secondary)] h-1.5 bg-slate-200 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[var(--color-text-muted)] mt-1">
                  <span>8.0% (Conservative)</span>
                  <span>12.0% (Balanced)</span>
                  <span>16.0% (Aggressive)</span>
                </div>
              </div>

              {/* Horizon */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[var(--color-primary)]">
                    Time Horizon
                  </label>
                  <span className="text-base font-bold text-[var(--color-primary)] font-mono">
                    {horizonYears} {horizonYears === 1 ? "Year" : "Years"}
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={30}
                  step={1}
                  value={horizonYears}
                  onChange={(e) => setHorizonYears(Number(e.target.value))}
                  className="w-full accent-[var(--color-secondary)] h-1.5 bg-slate-200 rounded cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[var(--color-text-muted)] mt-1">
                  <span>3 Years</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>

            {/* Geometric Visualization Plate */}
            <div className="mt-6 p-4 rounded-[4px] bg-[var(--color-primary)] border border-slate-700/50">
              <div className="flex items-center justify-between text-[10px] text-slate-300 font-mono mb-2">
                <span>MATHEMATICAL TRAJECTORY</span>
                <span className="text-[var(--color-finrev-gold)]">COMPOUNDING CURVE</span>
              </div>
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-20 overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="wbCurve" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#146B73" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#146B73" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                <polygon points={areaStr} fill="url(#wbCurve)" />
                <polyline points={polylineStr} fill="none" stroke="#D4A017" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Output Ledger */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-[var(--color-border-subtle)] text-center">
              <div className="p-3 bg-[var(--color-surface-canvas)] rounded-[4px] border border-[var(--color-border-subtle)]">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-text-muted)] block">
                  Total Invested
                </span>
                <span className="text-sm sm:text-base font-bold text-[var(--color-primary)] font-mono mt-0.5 block">
                  {formatCurrency(totalInvested)}
                </span>
              </div>
              <div className="p-3 bg-[var(--color-surface-canvas)] rounded-[4px] border border-[var(--color-border-subtle)]">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-text-muted)] block">
                  Estimated Gain
                </span>
                <span className="text-sm sm:text-base font-bold text-[var(--color-secondary)] font-mono mt-0.5 block">
                  {formatCurrency(estimatedWealthGain)}
                </span>
              </div>
              <div className="p-3 bg-[var(--color-surface-canvas)] rounded-[4px] border border-[var(--color-border-subtle)]">
                <span className="text-[10px] font-mono font-bold uppercase text-[var(--color-text-muted)] block">
                  Total Projected Corpus
                </span>
                <span className="text-sm sm:text-base font-bold text-[var(--color-primary)] font-mono mt-0.5 block">
                  {formatCurrency(totalCorpus)}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-[var(--color-text-muted)] text-center mt-4">
              Illustrative compounding projection based on assumed uniform returns. Mutual fund returns are subject to market risks.
            </p>
          </div>

          {/* Right Column: Clean Directory of Selected Tools (No repetitive cards) */}
          <div className="lg:col-span-5 bg-white rounded-[6px] border border-[var(--color-border-strong)] overflow-hidden shadow-sm">
            <div className="p-6 border-b border-[var(--color-border-subtle)]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                Planning Catalog
              </span>
              <h3 className="text-base font-bold text-[var(--color-primary)] mt-0.5">
                Financial Planning Tools
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                Access quantitative planning utilities tailored to specific milestones.
              </p>
            </div>

            <div className="divide-y divide-[var(--color-border-subtle)]">
              {SELECTED_TOOLS.map((t) => {
                const Icon = t.icon;
                return (
                  <Link
                    key={t.name}
                    href={t.href}
                    className="p-5 flex items-start gap-4 hover:bg-[var(--color-surface-canvas)] transition-colors group block"
                  >
                    <div className="p-2 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] group-hover:border-[var(--color-secondary)] shrink-0 mt-0.5 transition-colors">
                      <Icon size={16} className="text-[var(--color-secondary)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                          {t.name}
                        </h4>
                        <span className="text-[10px] font-mono text-[var(--color-text-muted)] bg-[var(--color-surface-canvas)] px-2 py-0.5 rounded-[2px] border border-[var(--color-border-subtle)] shrink-0 ml-2">
                          {t.metric}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1 leading-snug">
                        {t.subtitle}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-[var(--color-secondary)] mt-2">
                        <span>Launch Tool</span>
                        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="p-4 bg-[var(--color-surface-canvas)] border-t border-[var(--color-border-subtle)] text-center">
              <Link
                href="/tools"
                className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5"
              >
                <span>View All Financial Planning Calculators</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
