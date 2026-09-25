"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingUp, DollarSign, Target, CalendarClock, Banknote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CALCULATOR_TOOLS = [
  {
    icon: TrendingUp,
    name: "SIP Compounding Calculator",
    summary: "Simulate systematic wealth compounding across variable tenures and return rates.",
    href: "/tools/sip-calculator",
  },
  {
    icon: Target,
    name: "Goal-Based Investment Planner",
    summary: "Reverse-calculate the exact monthly SIP required to reach any targeted life milestone.",
    href: "/tools/goal-planner",
  },
  {
    icon: CalendarClock,
    name: "Retirement Corpus Calculator",
    summary: "Model inflation-adjusted living expenses and post-retirement longevity needs.",
    href: "/tools/retirement-calculator",
  },
  {
    icon: DollarSign,
    name: "Lumpsum Calculator",
    summary: "Estimate future corpus growth from one-time surplus capital deployment.",
    href: "/tools/lumpsum-calculator",
  },
  {
    icon: Banknote,
    name: "SWP Cash Flow Calculator",
    summary: "Model sustainable monthly cash flows from accumulated corpus with capital preservation.",
    href: "/tools/swp-calculator",
  },
];

export function CalculatorsPreviewSection() {
  const [amount, setAmount] = useState<number>(20000);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(15);

  // Financial formula: FV = P * [ (1 + i)^n - 1 ] * (1 + i) / i
  const i = rate / 100 / 12;
  const n = years * 12;
  const totalInvested = amount * n;
  const totalCorpus = Math.round(amount * (((Math.pow(1 + i, n) - 1) / i) * (1 + i)));
  const estimatedGain = Math.max(0, totalCorpus - totalInvested);
  const investedRatio = Math.round((totalInvested / totalCorpus) * 100) || 0;
  const gainRatio = 100 - investedRatio;

  function formatINR(val: number) {
    return "₹" + Math.round(val).toLocaleString("en-IN");
  }

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Empirical Modeling</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Financial Calculators & Tools
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
              Visualize compounding physics and plan with mathematical precision before deploying capital.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)] transition-colors"
          >
            <span>Explore All 32 Financial Calculators</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 2-Column Split: Quick Simulator on Left, Tool Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Quick Simulator (7 Cols) */}
          <div className="lg:col-span-7 bg-[var(--color-surface-canvas)] p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)] text-white flex items-center justify-center">
                    <Calculator size={17} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                    Quick SIP Compounding Simulator
                  </h3>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-white text-[var(--color-secondary)] border border-[var(--color-border-strong)]">
                  Hypothetical Model
                </span>
              </div>

              {/* Sliders */}
              <div className="flex flex-col gap-6">
                {/* Slider 1: Amount */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Monthly SIP Contribution
                    </label>
                    <span
                      className="text-base font-bold text-[var(--color-secondary)] bg-white px-3 py-1 rounded-md border border-[var(--color-border-subtle)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {formatINR(amount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={100000}
                    step={1000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-strong)] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[var(--color-text-muted)]">
                    <span>₹1,000/mo</span>
                    <span>₹50,000/mo</span>
                    <span>₹1,00,000/mo</span>
                  </div>
                </div>

                {/* Slider 2: Rate */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Expected Annual Rate (Illustrative)
                    </label>
                    <span
                      className="text-base font-bold text-[var(--color-text-primary)] bg-white px-3 py-1 rounded-md border border-[var(--color-border-subtle)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {rate.toFixed(1)}% p.a.
                    </span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={16}
                    step={0.5}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-strong)] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[var(--color-text-muted)]">
                    <span>8% (Conservative)</span>
                    <span>12% (Balanced Equity)</span>
                    <span>16% (Aggressive)</span>
                  </div>
                </div>

                {/* Slider 3: Years */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                      Investment Period
                    </label>
                    <span
                      className="text-base font-bold text-[var(--color-text-primary)] bg-white px-3 py-1 rounded-md border border-[var(--color-border-subtle)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {years} {years === 1 ? "Year" : "Years"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-strong)] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[var(--color-text-muted)]">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>

              {/* Output Metric Cards */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-white rounded-xl border border-[var(--color-border-subtle)] mt-6">
                <div>
                  <p className="text-[11px] text-[var(--color-text-muted)] font-medium">Invested Amount</p>
                  <p
                    className="text-base font-bold text-[var(--color-text-primary)] mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatINR(totalInvested)}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[var(--color-secondary)] font-medium">Estimated Gain*</p>
                  <p
                    className="text-base font-bold text-[var(--color-secondary)] mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    +{formatINR(estimatedGain)}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-[var(--color-text-primary)] font-bold">Total Corpus*</p>
                  <p
                    className="text-lg font-extrabold text-[var(--color-secondary)] mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatINR(totalCorpus)}
                  </p>
                </div>
              </div>

              {/* Visual Split Ratio Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-[11px] font-semibold text-[var(--color-text-muted)] mb-1.5">
                  <span>Invested: {investedRatio}%</span>
                  <span className="text-[var(--color-secondary)]">Compounded Gain: {gainRatio}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full overflow-hidden flex bg-[var(--color-border-subtle)]">
                  <div className="bg-[var(--color-primary)] h-full transition-all duration-200" style={{ width: `${investedRatio}%` }} />
                  <div className="bg-[var(--color-secondary)] h-full transition-all duration-200" style={{ width: `${gainRatio}%` }} />
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] text-[var(--color-text-muted)] mt-5 pt-3 border-t border-[var(--color-border-subtle)] leading-relaxed">
              * Projections are purely illustrative and based on a hypothetical compounding rate. Mutual fund returns
              fluctuate with market conditions and past returns do not assure future gains.
            </p>
          </div>

          {/* Dedicated Tools Links (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                Explore Dedicated Calculators
              </span>
              {CALCULATOR_TOOLS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="p-3.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-canvas)] hover:bg-white hover:border-[var(--color-secondary)] hover:shadow-[var(--shadow-card)] transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white border border-[var(--color-border-subtle)] group-hover:bg-[var(--color-secondary)] group-hover:text-white group-hover:border-[var(--color-secondary)] transition-colors flex items-center justify-center shrink-0">
                        <Icon size={17} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5 leading-snug">
                          {tool.summary}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/tools"
              className="w-full py-3.5 text-center rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore All 32 Financial Calculators</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
