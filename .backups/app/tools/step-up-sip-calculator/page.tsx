"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateStepUpSIP, formatExactINR, formatINR } from "@/lib/calculators";

export default function StepUpSIPCalculatorPage() {
  const [initialSIP, setInitialSIP] = useState<number>(15000);
  const [stepUp, setStepUp] = useState<number>(10);
  const [rate, setRate] = useState<number>(12);
  const [years, setYears] = useState<number>(15);

  const result = calculateStepUpSIP(initialSIP, stepUp, rate, years);

  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[var(--color-text-primary)] transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Step-Up SIP Calculator</span>
        </nav>

        <div className="max-w-3xl mb-12">
          <SectionLabel>Accelerated Wealth Multiplier</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Step-Up SIP Calculator
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            As your income grows each year with career progression, increasing your monthly SIP by just 5% to 15%
            annually can dramatically accelerate your final wealth creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                  Step-Up Parameters
                </h2>
              </div>
              <span className="text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-1 rounded border border-[var(--color-border-strong)]">
                Annual Top-Up
              </span>
            </div>

            {/* Initial SIP */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="step-init" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Starting Monthly SIP (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--color-text-muted)]">₹</span>
                  <input
                    id="step-init"
                    type="number"
                    min={1000}
                    max={200000}
                    step={1000}
                    value={initialSIP}
                    onChange={(e) => setInitialSIP(Math.max(1000, Number(e.target.value)))}
                    className="w-36 pl-7 pr-3 py-1.5 text-right font-bold text-base text-[var(--color-secondary)] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={2000}
                max={100000}
                step={1000}
                value={initialSIP}
                onChange={(e) => setInitialSIP(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)]">
                <span>₹2,000/mo</span>
                <span>₹50,000/mo</span>
                <span>₹1,00,000/mo</span>
              </div>
            </div>

            {/* Annual Step-Up % */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="step-pct" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Annual Step-Up Percentage (%)
                </label>
                <div className="relative">
                  <input
                    id="step-pct"
                    type="number"
                    min={2}
                    max={25}
                    step={1}
                    value={stepUp}
                    onChange={(e) => setStepUp(Math.min(25, Math.max(2, Number(e.target.value))))}
                    className="w-24 px-3 py-1.5 text-right font-bold text-base text-[var(--color-text-primary)] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-text-muted)]">%</span>
                </div>
              </div>
              <input
                type="range"
                min={2}
                max={25}
                step={1}
                value={stepUp}
                onChange={(e) => setStepUp(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)]">
                <span>5% (Conservative)</span>
                <span>10% (Standard Salary Hike)</span>
                <span>20% (Accelerated)</span>
              </div>
            </div>

            {/* Rates & Horizon */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="step-rate" className="text-[11px] font-bold uppercase text-[var(--color-text-muted)] block mb-1">Return Rate (% p.a.)</label>
                <input
                  id="step-rate"
                  type="number"
                  step={0.5}
                  min={6}
                  max={18}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full p-2 text-sm font-bold text-center bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div>
                <label htmlFor="step-years" className="text-[11px] font-bold uppercase text-[var(--color-text-muted)] block mb-1">Tenure (Years)</label>
                <input
                  id="step-years"
                  type="number"
                  min={2}
                  max={30}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full p-2 text-sm font-bold text-center bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
            </div>
          </div>

          {/* Results: Comparative View (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card-hover)] flex flex-col justify-between gap-6">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)] block">
                  Step-Up Final Corpus
                </span>
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatExactINR(result.totalCorpus)}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Approx. {formatINR(result.totalCorpus)} vs {formatINR(result.regularSIPCorpus)} regular SIP
                </p>
              </div>

              {/* Extra Wealth Generated Callout */}
              <div className="my-5 p-4 rounded-xl bg-[var(--color-emerald-subtle)] border border-[var(--color-border-strong)]">
                <span className="text-xs font-semibold text-[var(--color-secondary)] block">
                  Extra Wealth From {stepUp}% Annual Top-Up:
                </span>
                <span
                  className="text-2xl font-black text-[var(--color-secondary)] block mt-0.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  +{formatExactINR(result.extraWealthGenerated)}
                </span>
                <span className="text-[11px] text-[var(--color-on-secondary-fixed-variant)] mt-1 block">
                  Your corpus is <strong>{result.stepUpMultiplier}×</strong> larger than a flat SIP!
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 bg-[var(--color-surface-canvas)] rounded-xl border border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] block">Total Invested</span>
                  <span className="text-sm font-bold text-[var(--color-text-primary)] mt-0.5 block" style={{ fontFamily: "var(--font-mono)" }}>
                    {formatExactINR(result.totalInvested)}
                  </span>
                </div>
                <div className="p-3 bg-[var(--color-surface-canvas)] rounded-xl border border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] block">Total Gain</span>
                  <span className="text-sm font-bold text-[var(--color-secondary)] mt-0.5 block" style={{ fontFamily: "var(--font-mono)" }}>
                    +{formatExactINR(result.estimatedGain)}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link
                href="/contact"
                className="w-full py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Automate a Step-Up SIP Mandate</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldAlert size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Calculations are strictly illustrative and assume constant returns.
            Mutual funds fluctuate with market cycles. Past performance does not guarantee future results.
          </p>
        </div>
      </Container>
    </div>
  );
}
