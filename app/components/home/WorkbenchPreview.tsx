"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Target, CalendarClock, DollarSign } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const FLAGSHIP_TOOLS = [
  { icon: TrendingUp, name: "SIP Compounding Calculator", summary: "Simulate systematic wealth compounding across variable tenures and return rates.", href: "/tools/sip-calculator" },
  { icon: DollarSign, name: "Lumpsum Calculator", summary: "Estimate future corpus growth from one-time surplus capital deployment.", href: "/tools/lumpsum-calculator" },
  { icon: Target, name: "Goal-Based Investment Planner", summary: "Reverse-calculate the exact monthly SIP required to reach any targeted life milestone.", href: "/tools/goal-planner" },
  { icon: CalendarClock, name: "Retirement Corpus Calculator", summary: "Model inflation-adjusted living expenses and post-retirement corpus longevity.", href: "/tools/retirement-calculator" },
];

export function WorkbenchPreview() {
  const [amount, setAmount] = useState<number>(25000);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(15);

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

  const points = [];
  const svgWidth = 400;
  const svgHeight = 110;
  for (let step = 0; step <= 10; step++) {
    const t = (years / 10) * step;
    const nStep = t * 12;
    const corpusStep = nStep > 0 ? amount * (((Math.pow(1 + i, nStep) - 1) / i) * (1 + i)) : 0;
    const x = (step / 10) * svgWidth;
    const y = svgHeight - (corpusStep / totalCorpus) * (svgHeight - 16) - 8;
    points.push(`${x},${Math.max(8, y)}`);
  }
  const polylineStr = points.join(" ");
  const areaStr = `0,${svgHeight} ${polylineStr} ${svgWidth},${svgHeight}`;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Planning Tools</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Plan Smarter. Calculate Better.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
              Visualize how disciplined monthly investing compounds over time. Test your assumptions before committing capital.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>Explore All Financial Tools</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Calculator (7 cols) */}
          <div className="lg:col-span-7 bg-[var(--color-surface-canvas)] p-7 md:p-8 rounded-lg border border-[var(--color-border-strong)] flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)] mb-6">
                <h3 className="text-base font-bold text-[var(--color-primary)]">
                  Wealth Compounding Trajectory
                </h3>
                <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                  Hypothetical compounding simulator — for illustration only
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Monthly Investment</label>
                    <span className="text-base font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {formatINR(amount)}
                    </span>
                  </div>
                  <input type="range" min={2000} max={100000} step={1000} value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full accent-[var(--color-secondary)] h-1.5 bg-slate-200 rounded cursor-pointer" />
                  <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] mt-1">
                    <span>₹2,000/mo</span><span>₹50,000/mo</span><span>₹1,00,000/mo</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Illustrative Return Rate (p.a.)</label>
                    <span className="text-base font-bold text-[var(--color-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {rate.toFixed(1)}% p.a.
                    </span>
                  </div>
                  <input type="range" min={8} max={16} step={0.5} value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full accent-[var(--color-secondary)] h-1.5 bg-slate-200 rounded cursor-pointer" />
                  <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] mt-1">
                    <span>8% (Conservative)</span><span>12% (Balanced)</span><span>16% (Aggressive)</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Time Horizon</label>
                    <span className="text-base font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {years} {years === 1 ? "Year" : "Years"}
                    </span>
                  </div>
                  <input type="range" min={3} max={30} step={1} value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full accent-[var(--color-secondary)] h-1.5 bg-slate-200 rounded cursor-pointer" />
                  <div className="flex justify-between text-[11px] text-[var(--color-text-muted)] mt-1">
                    <span>3 Years</span><span>15 Years</span><span>30 Years</span>
                  </div>
                </div>
              </div>

              {/* Compounding curve */}
              <div className="my-5 p-3 rounded-md bg-[var(--color-primary)] border border-slate-700/40 overflow-hidden">
                <div className="flex items-center justify-between text-[10px] text-slate-300 font-semibold mb-1">
                  <span>Growth Trajectory</span>
                  <span className="text-[var(--color-finrev-gold)]">Compounding Phase</span>
                </div>
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-20 overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#146B73" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#146B73" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <polygon points={areaStr} fill="url(#curveGradient)" />
                  <polyline fill="none" stroke="#E8B400" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={polylineStr} />
                </svg>
              </div>

              {/* Result row — clean data, no card border */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-[var(--color-border-subtle)]">
                <div>
                  <p className="text-[10px] text-[var(--color-text-muted)] font-semibold uppercase">Total Invested</p>
                  <p className="text-sm sm:text-base font-bold text-[var(--color-primary)] mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                    {formatINR(totalInvested)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-[var(--color-secondary)] font-semibold uppercase">Estimated Gain*</p>
                  <p className="text-sm sm:text-base font-bold text-[var(--color-secondary)] mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                    +{formatINR(estimatedGain)}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-[var(--color-primary)] font-bold uppercase">Estimated Corpus*</p>
                  <p className="text-base sm:text-lg font-extrabold text-[var(--color-secondary)] mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                    {formatINR(totalCorpus)}
                  </p>
                </div>
              </div>

              <div className="mt-3.5">
                <div className="flex justify-between text-[11px] font-semibold text-[var(--color-text-muted)] mb-1">
                  <span>Invested Principal: {investedRatio}%</span>
                  <span className="text-[var(--color-secondary)]">Compounded Returns: {gainRatio}%</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden flex bg-slate-200">
                  <div className="bg-[var(--color-primary)] h-full transition-all duration-200" style={{ width: `${investedRatio}%` }} />
                  <div className="bg-[var(--color-secondary)] h-full transition-all duration-200" style={{ width: `${gainRatio}%` }} />
                </div>
              </div>
            </div>

            <p className="text-[10px] text-[var(--color-text-muted)] mt-5 pt-3 border-t border-[var(--color-border-subtle)] leading-relaxed">
              * Calculations are illustrative and based on a hypothetical compounding rate. Mutual fund returns fluctuate with market conditions; past performance does not guarantee future results.
            </p>
          </div>

          {/* Right column: Tool list + directory (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Flagship Planning Calculators
              </p>
              <div className="divide-y divide-[var(--color-border-subtle)] border border-[var(--color-border-strong)] rounded-lg overflow-hidden bg-white">
                {FLAGSHIP_TOOLS.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="flex items-start justify-between px-5 py-4 hover:bg-[var(--color-surface-canvas)] transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <Icon size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                            {tool.name}
                          </p>
                          <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
                            {tool.summary}
                          </p>
                        </div>
                      </div>
                      <ArrowRight size={13} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] shrink-0 mt-1 ml-2 transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Directory link */}
            <div className="p-5 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface-canvas)]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-bold text-[var(--color-primary)]">Complete Tool Directory</p>
                <span className="text-[10px] font-semibold text-[var(--color-secondary)]">32 Calculators</span>
              </div>
              <p className="text-[11px] text-[var(--color-text-muted)] leading-relaxed mb-3">
                Specialized tools for Tax Savings (ELSS), SWP Cash Flows, Child Education, EMI, and Step-Up SIP modeling.
              </p>
              <Link
                href="/tools"
                className="w-full py-2.5 text-center rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>Browse All Financial Calculators</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Why Mutual Funds comparison */}
            <div className="p-5 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-surface-canvas)]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-bold text-[var(--color-primary)]">Why Mutual Funds?</p>
                <span className="text-[10px] font-semibold text-[var(--color-secondary)]">Illustrative</span>
              </div>
              <p className="text-[11px] text-[var(--color-text-muted)] leading-snug mb-3">
                How different asset classes compare on long-term growth potential and liquidity.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Savings / Bank FD", bar: 22, color: "bg-slate-300" },
                  { label: "Gold", bar: 42, color: "bg-yellow-400" },
                  { label: "Real Estate", bar: 55, color: "bg-orange-300" },
                  { label: "Direct Equity", bar: 72, color: "bg-blue-300" },
                  { label: "Mutual Funds (Equity)", bar: 88, color: "bg-[var(--color-secondary)]" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] font-semibold text-[var(--color-primary)] mb-0.5">{item.label}</p>
                    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[var(--color-text-muted)] leading-relaxed pt-3 border-t border-[var(--color-border-subtle)] mt-3">
                Illustrative only. Not a performance guarantee or investment advice. Returns subject to market risk.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
