"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, CalendarClock, Phone, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { calculateRetirementCorpus, formatExactINR, formatINR } from "@/lib/calculators";
import { CONTACT } from "@/lib/constants";
import { GrowthChartSVG } from "@/components/calculators/Charts";
import { MilestoneTable } from "@/components/calculators/MilestoneTable";

export default function RetirementCalculatorPage() {
  const [currentAge, setCurrentAge] = useState<number>(32);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [lifeExpectancy, setLifeExpectancy] = useState<number>(85);
  const [currentExpense, setCurrentExpense] = useState<number>(60000);
  const [currentSavings, setCurrentSavings] = useState<number>(1000000); // 10 Lakhs existing
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
    postReturn,
    currentSavings
  );

  const chartData = result.yearlySchedule.map((d) => ({
    year: d.year,
    invested: Math.round(d.corpusAccumulated * 0.4),
    value: d.corpusAccumulated,
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
          <span className="text-[var(--color-text-primary)]">Retirement Calculator</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-3xl mb-10">
          <SectionLabel>Longevity & Inflation Modeling</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Retirement Corpus Calculator
          </h1>
          <p className="text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Model the inflation-indexed corpus required to sustain your lifestyle across a {result.retirementDurationYears}-year post-retirement horizon without outliving your assets.
          </p>
        </div>

        {/* Analytical Workbench: INPUT PANEL + RESULT SUMMARY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8">
          {/* Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-[var(--color-primary)] flex items-center justify-center">
                  <CalendarClock size={16} />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
                  Retirement Planning Parameters
                </h2>
              </div>
              <span className="text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                Inflation-Indexed
              </span>
            </div>

            {/* Age Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cur-age" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Current Age
                </label>
                <input
                  id="cur-age"
                  type="number"
                  min={18}
                  max={65}
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full px-3 min-h-[40px] text-right font-bold text-sm bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ret-age" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Retirement Age
                </label>
                <input
                  id="ret-age"
                  type="number"
                  min={currentAge + 1}
                  max={75}
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full px-3 min-h-[40px] text-right font-bold text-sm bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="life-exp" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Life Expectancy
                </label>
                <input
                  id="life-exp"
                  type="number"
                  min={retirementAge + 1}
                  max={100}
                  value={lifeExpectancy}
                  onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                  className="w-full px-3 min-h-[40px] text-right font-bold text-sm bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
            </div>

            {/* Current Monthly Living Expenses */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="cur-expense" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Current Monthly Living Expense (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--color-text-muted)]">₹</span>
                  <input
                    id="cur-expense"
                    type="number"
                    min={15000}
                    max={1000000}
                    step={5000}
                    value={currentExpense}
                    onChange={(e) => setCurrentExpense(Math.max(15000, Number(e.target.value)))}
                    className="w-36 sm:w-44 pl-7 pr-3 min-h-[40px] text-right font-bold text-base text-[var(--color-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={20000}
                max={300000}
                step={5000}
                value={currentExpense}
                onChange={(e) => setCurrentExpense(Number(e.target.value))}
                className="w-full accent-[var(--color-primary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
            </div>

            {/* Existing Retirement Savings */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <label htmlFor="ret-savings" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Existing Dedicated Retirement Savings (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-[var(--color-text-muted)]">₹</span>
                  <input
                    id="ret-savings"
                    type="number"
                    min={0}
                    max={50000000}
                    step={100000}
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Math.max(0, Number(e.target.value)))}
                    className="w-36 sm:w-44 pl-7 pr-3 min-h-[40px] text-right font-bold text-base text-[var(--color-text-primary)] bg-white border border-[var(--color-border-strong)] rounded-[4px] focus:outline-none focus:border-[var(--color-secondary)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  />
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={10000000}
                step={100000}
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full accent-[var(--color-primary)] h-2 bg-[var(--color-border-subtle)] rounded-[2px] cursor-pointer"
              />
            </div>

            {/* Economic Assumptions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-[var(--color-border-subtle)]">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ret-inf" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Inflation (% p.a.)
                </label>
                <input
                  id="ret-inf"
                  type="number"
                  min={4}
                  max={10}
                  step={0.5}
                  value={inflation}
                  onChange={(e) => setInflation(Number(e.target.value))}
                  className="w-full px-3 min-h-[40px] text-right font-bold text-sm bg-white border border-[var(--color-border-strong)] rounded-[4px]"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pre-ret" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Pre-Ret Return (%)
                </label>
                <input
                  id="pre-ret"
                  type="number"
                  min={8}
                  max={16}
                  step={0.5}
                  value={preReturn}
                  onChange={(e) => setPreReturn(Number(e.target.value))}
                  className="w-full px-3 min-h-[40px] text-right font-bold text-sm bg-white border border-[var(--color-border-strong)] rounded-[4px]"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="post-ret" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Post-Ret Return (%)
                </label>
                <input
                  id="post-ret"
                  type="number"
                  min={5}
                  max={10}
                  step={0.5}
                  value={postReturn}
                  onChange={(e) => setPostReturn(Number(e.target.value))}
                  className="w-full px-3 min-h-[40px] text-right font-bold text-sm bg-white border border-[var(--color-border-strong)] rounded-[4px]"
                  style={{ fontFamily: "var(--font-mono)" }}
                />
              </div>
            </div>
          </div>

          {/* Results Display Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-[6px] border border-[var(--color-border-subtle)] flex flex-col justify-between gap-6">
            <div>
              <div className="pb-4 border-b border-[var(--color-border-subtle)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                    Required Retirement Corpus
                  </span>
                  <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase">
                    At Age {retirementAge}
                  </span>
                </div>
                <p
                  className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)] mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatExactINR(result.requiredRetirementCorpus)}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  Supports an inflation-adjusted {formatINR(result.futureMonthlyExpense)}/month living cost across {result.retirementDurationYears} post-retirement years
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium block">Required Monthly SIP</span>
                  <span
                    className="text-base sm:text-lg font-bold text-[var(--color-secondary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatExactINR(result.requiredMonthlySIP)}/mo
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">{result.yearsToRetire} years to retirement</span>
                </div>
                <div className="p-3.5 rounded-[4px] bg-white border border-[var(--color-border-strong)]">
                  <span className="text-[11px] text-[var(--color-text-muted)] font-medium block">Monthly Expense at 60</span>
                  <span
                    className="text-base sm:text-lg font-bold text-[var(--color-text-primary)] block mt-0.5"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatExactINR(result.futureMonthlyExpense)}
                  </span>
                  <span className="text-[10px] text-[var(--color-text-muted)]">due to {inflation}% annual inflation</span>
                </div>
              </div>

              {/* Key Interpretation Box */}
              <div className="p-3.5 rounded-[4px] bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                <strong className="text-[var(--color-text-primary)] block mb-1">Key Interpretation:</strong>
                Due to compounding inflation, your current living cost of {formatINR(currentExpense)}/mo will escalate to {formatINR(result.futureMonthlyExpense)}/mo when you retire in {result.yearsToRetire} years.
                Funding this requires a dedicated monthly accumulation of <strong className="text-[var(--color-secondary)] font-bold">{formatINR(result.requiredMonthlySIP)}</strong>.
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-2.5">
              <Link
                href="/contact"
                className="w-full py-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Structure a Retirement Roadmap</span>
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
          title="Retirement Corpus Accumulation Trajectory"
          subtitle="Portfolio accumulation leading up to your retirement age"
        />

        {/* Milestone Progression Table */}
        <MilestoneTable
          title="Retirement Corpus Accumulation Schedule"
          subtitle="Year-by-year projected wealth progression"
          headers={["Age", "Accumulation Year", "Corpus Value", "Projected Annual Living Need"]}
          rows={result.yearlySchedule.map((d) => ({
            year: d.year,
            label: `Age ${d.age}`,
            value: d.corpusAccumulated,
            customColumns: [
              { key: "age", value: `Age ${d.age}` },
              { key: "yr", value: `Year ${d.year}` },
              { key: "val", value: d.corpusAccumulated },
              { key: "exp", value: d.annualExpense },
            ],
          }))}
        />

        {/* Statutory Regulatory Disclaimer */}
        <div className="p-4 sm:p-5 rounded-[4px] bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)] mb-8">
          <ShieldAlert size={16} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">Statutory Notice:</strong> Projections are illustrative and hypothetical models based on constant inflation and return assumptions.
            Actual post-retirement expenses, life expectancy, health costs, and market-linked portfolio returns will vary over time. No universal tax claims are implied.
          </p>
        </div>
      </Container>
    </div>
  );
}
