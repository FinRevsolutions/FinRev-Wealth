"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarClock, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateRetirementCorpus, formatExactINR, formatINR } from "@/lib/calculators";

export default function RetirementCalculatorPage() {
  const [currentAge, setCurrentAge] = useState<number>(32);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [lifeExpectancy, setLifeExpectancy] = useState<number>(85);
  const [currentExpense, setCurrentExpense] = useState<number>(60000);
  const [inflation, setInflation] = useState<number>(6);
  const [preReturn, setPreReturn] = useState<number>(12);
  const [postReturn, setPostReturn] = useState<number>(8);

  const result = calculateRetirementCorpus(
    currentAge,
    retirementAge,
    lifeExpectancy,
    currentExpense,
    inflation,
    preReturn,
    postReturn
  );

  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[var(--color-text-primary)] transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Retirement Calculator</span>
        </nav>

        <div className="max-w-3xl mb-12">
          <SectionLabel>Longevity & Inflation Modeling</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Retirement Corpus Calculator
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Determine the inflation-adjusted corpus required to maintain your living standards throughout your
            post-career years without outliving your savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center">
                  <CalendarClock size={18} />
                </div>
                <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                  Retirement Planning Inputs
                </h2>
              </div>
              <span className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-navy-subtle)] px-2.5 py-1 rounded">
                Inflation Indexed
              </span>
            </div>

            {/* Ages */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="ret-curr-age" className="text-[11px] font-bold uppercase text-[var(--color-text-muted)] block mb-1">Current Age</label>
                <input
                  id="ret-curr-age"
                  type="number"
                  min={20}
                  max={60}
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full p-2 text-sm font-bold text-center bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div>
                <label htmlFor="ret-target-age" className="text-[11px] font-bold uppercase text-[var(--color-text-muted)] block mb-1">Retire Age</label>
                <input
                  id="ret-target-age"
                  type="number"
                  min={40}
                  max={70}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full p-2 text-sm font-bold text-center bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div>
                <label htmlFor="ret-life-age" className="text-[11px] font-bold uppercase text-[var(--color-text-muted)] block mb-1">Life Expectancy</label>
                <input
                  id="ret-life-age"
                  type="number"
                  min={70}
                  max={100}
                  value={lifeExpectancy}
                  onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                  className="w-full p-2 text-sm font-bold text-center bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
            </div>

            {/* Current Monthly Expense */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="ret-expense" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Current Monthly Living Expenses (₹)
                </label>
                <span className="text-sm font-bold text-[var(--color-primary)] bg-[var(--color-surface-canvas)] px-3 py-1 rounded border border-[var(--color-border-subtle)]" style={{ fontFamily: "var(--font-mono)" }}>
                  {formatExactINR(currentExpense)}/mo
                </span>
              </div>
              <input
                id="ret-expense"
                type="range"
                min={20000}
                max={300000}
                step={5000}
                value={currentExpense}
                onChange={(e) => setCurrentExpense(Number(e.target.value))}
                className="w-full accent-[var(--color-primary)] h-2 bg-[var(--color-border-subtle)] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-text-muted)]">
                <span>₹20,000/mo</span>
                <span>₹1,50,000/mo</span>
                <span>₹3,00,000/mo</span>
              </div>
            </div>

            {/* Rates */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="ret-inflation" className="text-[11px] font-bold uppercase text-[var(--color-text-muted)] block mb-1">Inflation (% p.a.)</label>
                <input
                  id="ret-inflation"
                  type="number"
                  step={0.5}
                  min={4}
                  max={9}
                  value={inflation}
                  onChange={(e) => setInflation(Number(e.target.value))}
                  className="w-full p-2 text-sm font-bold text-center bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div>
                <label htmlFor="ret-pre-return" className="text-[11px] font-bold uppercase text-[var(--color-text-muted)] block mb-1">Pre-Ret. Return</label>
                <input
                  id="ret-pre-return"
                  type="number"
                  step={0.5}
                  min={8}
                  max={15}
                  value={preReturn}
                  onChange={(e) => setPreReturn(Number(e.target.value))}
                  className="w-full p-2 text-sm font-bold text-center bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div>
                <label htmlFor="ret-post-return" className="text-[11px] font-bold uppercase text-[var(--color-text-muted)] block mb-1">Post-Ret. Return</label>
                <input
                  id="ret-post-return"
                  type="number"
                  step={0.5}
                  min={5}
                  max={10}
                  value={postReturn}
                  onChange={(e) => setPostReturn(Number(e.target.value))}
                  className="w-full p-2 text-sm font-bold text-center bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
            </div>
          </div>

          {/* Outputs (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card-hover)] flex flex-col justify-between gap-6">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)] block">
                  Required Retirement Corpus
                </span>
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-[var(--color-secondary)] mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatExactINR(result.requiredRetirementCorpus)}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Approx. {formatINR(result.requiredRetirementCorpus)} needed by age {retirementAge}
                </p>
              </div>

              <div className="flex flex-col gap-3 my-5">
                <div className="p-3.5 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[var(--color-text-muted)] block">Expense at Age {retirementAge}</span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {formatExactINR(result.futureMonthlyExpense)}/mo
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--color-text-muted)]">Indexed for {inflation}% inflation</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[var(--color-emerald-subtle)] border border-[var(--color-border-strong)] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[var(--color-secondary)] font-semibold block">Required Monthly SIP</span>
                    <span className="text-lg font-bold text-[var(--color-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {formatExactINR(result.requiredMonthlySIP)}/mo
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--color-secondary)]">For {result.yearsToRetire} years</span>
                </div>
              </div>

              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Starting early allows compounding to fund approximately <strong>{result.compoundingShieldPercent}%</strong> of your
                total nest egg.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <Link
                href="/contact"
                className="w-full py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Structure Retirement Plan</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldAlert size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Notice:</strong> This retirement estimation model uses standard actuarial annuity formulas.
            It does not guarantee returns or future inflation rates. Consult Panchanan Kumar to map retirement allocations.
          </p>
        </div>
      </Container>
    </div>
  );
}
