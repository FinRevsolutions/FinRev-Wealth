"use client";

import React, { useState } from "react";
import { CalculatorShell } from "../CalculatorShell";
import { CurrencyInput, PercentageInput, DurationInput, SelectInput } from "../Inputs";
import { PrimaryResultCard, MetricCard } from "../Results";
import { DonutChartSVG } from "../Charts";
import { CalculatorActions, CalculatorCTA } from "../Panels";
import { getToolBySlug } from "@/lib/tools-registry";
import {
  calculateEmergencyFund,
  calculateNetWorth,
  calculateSavingsRate,
  calculateDTI,
  calculateAssetAllocation,
} from "@/lib/calculators/personal-finance";
import { formatExactINR, formatINR } from "@/lib/calculators/formatters";

// ============================================================
// 18. Emergency Fund Calculator View
// ============================================================
export function EmergencyFundCalculatorView() {
  const tool = getToolBySlug("emergency-fund-calculator")!;
  const [expenses, setExpenses] = useState(60000);
  const [dependents, setDependents] = useState(2);
  const [isSelfEmployed, setIsSelfEmployed] = useState(false);
  const [hasLoans, setHasLoans] = useState(true);
  const [existingSavings, setExistingSavings] = useState(150000);

  const res = calculateEmergencyFund(
    expenses,
    dependents,
    isSelfEmployed,
    hasLoans,
    existingSavings,
    15000
  );

  const reset = () => {
    setExpenses(60000);
    setDependents(2);
    setIsSelfEmployed(false);
    setHasLoans(true);
    setExistingSavings(150000);
  };

  const statusLabels = {
    insufficient: "Critical Shortfall (< 3 Months)",
    moderate: "Moderate (Building Buffer)",
    adequate: "Adequately Protected (Target Met)",
    surplus: "Surplus Liquidity (Opportunity Drag)",
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Recommended Emergency Contingency Fund"
              value={res.targetFund}
              subValueLabel={`Calibrated for ${res.recommendedMonths} months of non-negotiable living expenses`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard
                label="Protection Status"
                value={statusLabels[res.status]}
                isCurrency={false}
                variant={res.status === "adequate" || res.status === "surplus" ? "emerald" : "amber"}
              />
              <MetricCard
                label={res.shortfallOrSurplus > 0 ? "Funding Shortfall" : "Surplus Liquid Cash"}
                value={Math.abs(res.shortfallOrSurplus)}
                variant={res.shortfallOrSurplus > 0 ? "amber" : "emerald"}
              />
              <MetricCard label="3-Month Minimum Buffer" value={res.threeMonthsBuffer} />
              <MetricCard label="12-Month Robust Shield" value={res.twelveMonthsBuffer} />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {res.shortfallOrSurplus > 0
                ? `You have a gap of ${formatExactINR(res.shortfallOrSurplus)}. Parking this buffer in Liquid Mutual Funds or Arbitrage Funds ensures instantaneous T+1 liquidity with zero exit load after 7 days.`
                : `Your emergency cushion is fully funded! Avoid holding excessive idle cash in low-interest savings accounts; deploy surplus capital into productive compounding assets.`}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Build a Liquid Contingency Reserve" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "The Zero-Negotiation Rule: Why Emergency Funds Come First",
        paragraphs: [
          "Before investing a single rupee in equities, real estate, or market instruments, an institutional-grade financial plan mandates the creation of an inviolable liquidity shield.",
          "An emergency fund protects your investments from being liquidated at severe market lows due to unforeseen medical emergencies, economic layoffs, or major family obligations.",
        ],
        takeaways: [
          "Park 50% in Liquid/Overnight Mutual Funds and 50% in sweep-in bank deposits.",
          "Never invest your emergency fund in volatile equities or long-duration debt.",
          "Review buffer requirements whenever your monthly lifestyle expenses or debt obligations increase.",
        ],
      }}
      assumptions={[
        "Baseline requirement is 6 months of expenses, adjusted upward for self-employment, dependents, and high debt obligations.",
      ]}
    >
      <CurrencyInput
        id="em-expense"
        label="Monthly Non-Negotiable Household Expenses (₹)"
        value={expenses}
        min={10000}
        max={1000000}
        step={5000}
        sliderMin={10000}
        sliderMax={300000}
        sliderStep={5000}
        onChange={setExpenses}
        helperMin="₹10,000"
        helperMid="₹1.5 Lakh"
        helperMax="₹3 Lakh"
      />
      <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
        <div>
          <span className="text-xs font-bold text-[var(--color-text-primary)] block">
            Primary Income Type
          </span>
          <span className="text-[11px] text-[var(--color-text-muted)]">
            Business/consulting warrants higher liquidity reserves
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsSelfEmployed(!isSelfEmployed)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
            isSelfEmployed
              ? "bg-[var(--color-secondary)] text-white"
              : "bg-white border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]"
          }`}
        >
          {isSelfEmployed ? "Self-Employed / Business" : "Salaried Corporate"}
        </button>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
        <div>
          <span className="text-xs font-bold text-[var(--color-text-primary)] block">
            Existing Loan EMIs Active?
          </span>
          <span className="text-[11px] text-[var(--color-text-muted)]">
            Home loan, car loan or personal loan obligations
          </span>
        </div>
        <button
          type="button"
          onClick={() => setHasLoans(!hasLoans)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
            hasLoans
              ? "bg-[var(--color-secondary)] text-white"
              : "bg-white border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]"
          }`}
        >
          {hasLoans ? "Yes, Active EMIs" : "No Debt Obligations"}
        </button>
      </div>
      <DurationInput
        id="em-dep"
        label="Number of Financial Dependents"
        value={dependents}
        min={0}
        max={6}
        step={1}
        unit="Persons"
        onChange={setDependents}
        helperMin="0"
        helperMax="6"
      />
      <CurrencyInput
        id="em-existing"
        label="Current Liquid Savings Available (₹)"
        value={existingSavings}
        min={0}
        max={5000000}
        step={25000}
        sliderMin={0}
        sliderMax={2000000}
        sliderStep={50000}
        onChange={setExistingSavings}
        helperMin="₹0"
        helperMid="₹10 Lakh"
        helperMax="₹20 Lakh"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 19. Net Worth Calculator View
// ============================================================
export function NetWorthCalculatorView() {
  const tool = getToolBySlug("net-worth-calculator")!;
  const [cash, setCash] = useState(300000);
  const [mf, setMf] = useState(2500000);
  const [fd, setFd] = useState(500000);
  const [epf, setEpf] = useState(1200000);
  const [realEstate, setRealEstate] = useState(8000000);
  const [gold, setGold] = useState(600000);
  const [homeLoan, setHomeLoan] = useState(4500000);
  const [otherDebts, setOtherDebts] = useState(200000);

  const res = calculateNetWorth(
    {
      cashAndBank: cash,
      mutualFundsAndEquities: mf,
      fixedDepositsAndBonds: fd,
      providentFundAndNPS: epf,
      realEstateValue: realEstate,
      goldAndPreciousMetals: gold,
      otherAssets: 0,
    },
    {
      homeLoan,
      vehicleLoan: 0,
      personalLoan: 0,
      educationLoan: 0,
      creditCardDues: otherDebts,
      otherDebts: 0,
    }
  );

  const reset = () => {
    setCash(300000);
    setMf(2500000);
    setFd(500000);
    setEpf(1200000);
    setRealEstate(8000000);
    setGold(600000);
    setHomeLoan(4500000);
    setOtherDebts(200000);
  };

  const donutSlices = [
    { label: "Equity & Mutual Funds", value: mf, color: "#006C4A" },
    { label: "Real Estate", value: realEstate, color: "#0A192F" },
    { label: "Retirement (EPF/NPS)", value: epf, color: "#B45309" },
    { label: "Cash & FDs", value: cash + fd, color: "#3B82F6" },
    { label: "Gold", value: gold, color: "#F59E0B" },
  ];

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="True Personal Net Worth"
              value={res.netWorth}
              subValueLabel="Consolidated Assets minus Total Liabilities"
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Total Assets" value={res.totalAssets} variant="emerald" />
              <MetricCard label="Total Liabilities" value={res.totalLiabilities} variant="amber" />
              <MetricCard
                label="Debt-to-Asset Ratio"
                value={`${res.debtToAssetRatio}%`}
                isCurrency={false}
                subtext={res.debtToAssetRatio < 35 ? "Solvent (< 35%)" : "Elevated Leverage"}
              />
              <MetricCard
                label="Liquid Assets Ratio"
                value={`${res.liquidityRatioPercent}%`}
                isCurrency={false}
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Your personal balance sheet represents true financial health. While income determines lifestyle capacity, net worth measures financial resilience and long-term autonomy.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Book a Comprehensive Portfolio Audit" />
          </div>
        </>
      }
      charts={
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-6 md:p-8 shadow-[var(--shadow-card)] mb-10">
          <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1">
            Asset Composition Breakdown
          </h3>
          <p className="text-xs text-[var(--color-text-muted)] mb-4">
            Percentage distribution across growth, fixed income, real estate, and defensive assets
          </p>
          <DonutChartSVG
            slices={donutSlices}
            centerLabel="Net Worth"
            centerValue={formatINR(res.netWorth)}
          />
        </div>
      }
      educationalPrimer={{
        title: "The Corporate Approach to Personal Wealth: Managing Your Net Worth",
        paragraphs: [
          "High-earning professionals frequently confuse cash flow with net worth. Spending heavily on depreciating assets or taking on large mortgages can create the illusion of affluence while keeping true net worth stagnant.",
          "Institutional wealth management focuses on expanding productive financial assets (equities, bonds, business interests) while systematically retiring uncollateralized liabilities.",
        ],
        takeaways: [
          "Track your net worth bi-annually on a fixed date.",
          "Target a debt-to-asset ratio strictly below 35%.",
          "Gradually shift illiquid physical real estate into transparent financial assets over time.",
        ],
      }}
      assumptions={[
        "Market values of mutual funds, equities, and real estate reflect current fair valuation.",
      ]}
    >
      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] block">
          Asset Holdings (₹)
        </span>
        <CurrencyInput
          id="nw-mf"
          label="Mutual Funds & Listed Equities"
          value={mf}
          min={0}
          max={50000000}
          step={50000}
          sliderMin={0}
          sliderMax={10000000}
          sliderStep={100000}
          onChange={setMf}
        />
        <CurrencyInput
          id="nw-re"
          label="Real Estate (Market Valuation)"
          value={realEstate}
          min={0}
          max={100000000}
          step={200000}
          sliderMin={0}
          sliderMax={30000000}
          sliderStep={500000}
          onChange={setRealEstate}
        />
        <CurrencyInput
          id="nw-epf"
          label="Provident Fund (EPF/PPF) & NPS"
          value={epf}
          min={0}
          max={30000000}
          step={50000}
          sliderMin={0}
          sliderMax={5000000}
          sliderStep={100000}
          onChange={setEpf}
        />
        <CurrencyInput
          id="nw-cash"
          label="Liquid Cash, Bank Balances & FDs"
          value={cash + fd}
          min={0}
          max={20000000}
          step={25000}
          sliderMin={0}
          sliderMax={3000000}
          sliderStep={50000}
          onChange={(val) => {
            setCash(Math.round(val * 0.4));
            setFd(Math.round(val * 0.6));
          }}
        />
        <CurrencyInput
          id="nw-gold"
          label="Physical Gold & Sovereign Gold Bonds"
          value={gold}
          min={0}
          max={10000000}
          step={25000}
          sliderMin={0}
          sliderMax={2000000}
          sliderStep={50000}
          onChange={setGold}
        />

        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-tertiary)] block pt-3 border-t border-[var(--color-border-subtle)]">
          Liabilities & Debts (₹)
        </span>
        <CurrencyInput
          id="nw-loan"
          label="Outstanding Home Loan Principal"
          value={homeLoan}
          min={0}
          max={50000000}
          step={100000}
          sliderMin={0}
          sliderMax={15000000}
          sliderStep={200000}
          onChange={setHomeLoan}
        />
        <CurrencyInput
          id="nw-other-debt"
          label="Vehicle, Personal & Card Loans"
          value={otherDebts}
          min={0}
          max={10000000}
          step={25000}
          sliderMin={0}
          sliderMax={2000000}
          sliderStep={50000}
          onChange={setOtherDebts}
        />
      </div>
    </CalculatorShell>
  );
}

// ============================================================
// 20. Savings Rate Calculator View
// ============================================================
export function SavingsRateCalculatorView() {
  const tool = getToolBySlug("savings-rate-calculator")!;
  const [income, setIncome] = useState(150000);
  const [expenses, setExpenses] = useState(85000);

  const res = calculateSavingsRate(income, expenses);

  const reset = () => {
    setIncome(150000);
    setExpenses(85000);
  };

  const statusMap = {
    exceptional: { label: "Exceptional (> 50%)", desc: "You are on the ultra-fast track to early financial independence within 15 years." },
    healthy: { label: "Healthy Institutional Standard (30-50%)", desc: "Solid wealth accumulation trajectory meeting all conventional goals comfortably." },
    moderate: { label: "Moderate (15-30%)", desc: "Sufficient for baseline retirement, but vulnerable to unexpected lifestyle inflation." },
    critical: { label: "Critical Risk (< 15%)", desc: "Urgent need for expenditure restructuring to avoid long-term wealth deficit." },
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Personal Monthly Savings Rate"
              value={res.savingsRatePercent}
              isCurrency={false}
              valueSuffix="%"
              subValueLabel={`Saving ${formatExactINR(res.monthlySavings)} out of ${formatExactINR(income)} monthly`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Monthly Savings" value={res.monthlySavings} variant="emerald" />
              <MetricCard label="Annual Savings Run-Rate" value={res.annualSavings} variant="emerald" />
              <MetricCard
                label="Financial Health"
                value={statusMap[res.healthStatus].label}
                isCurrency={false}
                variant={res.healthStatus === "exceptional" || res.healthStatus === "healthy" ? "emerald" : "amber"}
              />
              <MetricCard
                label="Est. Years to Freedom"
                value={`~${res.yearsToFinancialIndependence} Years`}
                isCurrency={false}
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {statusMap[res.healthStatus].desc}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Automate Your Monthly Surplus into SIPs" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "The Math of Financial Independence: Savings Rate Over Investment Returns",
        paragraphs: [
          "Most investors spend enormous energy chasing an extra 1-2% return from stock picking, while neglecting their single largest wealth lever: their savings rate.",
          "Every percentage increase in your savings rate accomplishes two things simultaneously: it increases the cash deployed into compounding assets, and it permanently decreases the annual expenditure your nest egg must sustain in retirement.",
        ],
        takeaways: [
          "A 50% savings rate enables financial independence in roughly 16-17 years from scratch.",
          "Automate your investments on salary day ('Pay Yourself First') before discretionary spending.",
        ],
      }}
      assumptions={[
        "Formula: Savings Rate = ((Income - Expenses) / Income) * 100.",
        "Years to financial freedom projected assuming 5% real investment return over inflation and 4% SWR.",
      ]}
    >
      <CurrencyInput
        id="sr-income"
        label="Monthly Take-Home In-Hand Income (₹)"
        value={income}
        min={20000}
        max={2000000}
        step={5000}
        sliderMin={25000}
        sliderMax={500000}
        sliderStep={5000}
        onChange={setIncome}
        helperMin="₹25,000"
        helperMid="₹2.5 Lakh"
        helperMax="₹5 Lakh"
      />
      <CurrencyInput
        id="sr-expenses"
        label="Total Monthly Household Expenses + EMIs (₹)"
        value={expenses}
        min={10000}
        max={income}
        step={5000}
        sliderMin={10000}
        sliderMax={Math.max(10000, income)}
        sliderStep={5000}
        onChange={setExpenses}
        helperMin="₹10,000"
        helperMid={formatINR(income / 2)}
        helperMax={formatINR(income)}
      />
    </CalculatorShell>
  );
}

// ============================================================
// 21. Debt-to-Income (DTI) Calculator View
// ============================================================
export function DTICalculatorView() {
  const tool = getToolBySlug("dti-calculator")!;
  const [income, setIncome] = useState(175000);
  const [homeEMI, setHomeEMI] = useState(45000);
  const [carEMI, setCarEMI] = useState(15000);
  const [cardBills, setCardBills] = useState(5000);

  const res = calculateDTI(income, homeEMI, carEMI, 0, cardBills, 0);

  const reset = () => {
    setIncome(175000);
    setHomeEMI(45000);
    setCarEMI(15000);
    setCardBills(5000);
  };

  const riskMap = {
    healthy: { label: "Healthy (< 30%)", variant: "emerald" as const, desc: "Your debt is well under control. You maintain excellent borrowing capacity and strong cash flow flexibility." },
    manageable: { label: "Manageable (30-40%)", variant: "navy" as const, desc: "Moderate leverage. Banks will still approve credit, but new debt obligations should be avoided." },
    high_risk: { label: "High Leverage Risk (40-50%)", variant: "amber" as const, desc: "Caution: Over 40% of income is locked in debt service. Prioritize prepayment of high-cost loans." },
    danger: { label: "Danger Level (> 50%)", variant: "amber" as const, desc: "Critical Debt Stress: More than half of income is servicing debt. Urgent debt consolidation advised." },
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Debt-to-Income (DTI) Ratio"
              value={res.dtiPercent}
              isCurrency={false}
              valueSuffix="%"
              subValueLabel={`Servicing ${formatExactINR(res.totalMonthlyDebtPayments)}/mo in total debt obligations`}
              variant={riskMap[res.riskCategory].variant}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard
                label="Risk Rating"
                value={riskMap[res.riskCategory].label}
                isCurrency={false}
                variant={riskMap[res.riskCategory].variant}
              />
              <MetricCard label="Discretionary Income Left" value={res.discretionaryIncomeLeft} variant="emerald" />
              <MetricCard label="Total Monthly Debt" value={res.totalMonthlyDebtPayments} />
              <MetricCard label="Safe Additional EMI Room" value={res.maxRecommendedAdditionalBorrowing} />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {riskMap[res.riskCategory].desc}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Consult on Debt Optimization" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "Debt-to-Income Ratio: The Universal Underwriting Benchmark",
        paragraphs: [
          "Financial institutions, mortgage underwriters, and credit rating agencies evaluate your Debt-to-Income (DTI) ratio to measure your capacity to handle monthly payments and service existing debt.",
          "A low DTI ratio demonstrates a healthy balance between debt and income, ensuring that unexpected economic shocks or job changes will not trigger loan default.",
        ],
        takeaways: [
          "Target an aggregate DTI strictly under 35% across all loans.",
          "Pay off high-cost unsecured debt (credit cards, personal loans) first.",
        ],
      }}
      assumptions={[
        "Formula: DTI = (Total Monthly Debt Payments / Gross Monthly Income) * 100.",
        "Maximum recommended institutional borrowing ceiling capped at 40% of gross income.",
      ]}
    >
      <CurrencyInput
        id="dti-income"
        label="Gross Monthly Income Before Tax (₹)"
        value={income}
        min={25000}
        max={2000000}
        step={5000}
        sliderMin={30000}
        sliderMax={500000}
        sliderStep={5000}
        onChange={setIncome}
        helperMin="₹30,000"
        helperMid="₹2.5 Lakh"
        helperMax="₹5 Lakh"
      />
      <CurrencyInput
        id="dti-home"
        label="Monthly Home Loan EMI (₹)"
        value={homeEMI}
        min={0}
        max={1000000}
        step={2500}
        sliderMin={0}
        sliderMax={150000}
        sliderStep={2500}
        onChange={setHomeEMI}
        helperMin="₹0"
        helperMid="₹75,000"
        helperMax="₹1,50,000"
      />
      <CurrencyInput
        id="dti-car"
        label="Car / Auto Loan Monthly EMI (₹)"
        value={carEMI}
        min={0}
        max={200000}
        step={1000}
        sliderMin={0}
        sliderMax={50000}
        sliderStep={1000}
        onChange={setCarEMI}
        helperMin="₹0"
        helperMid="₹25,000"
        helperMax="₹50,000"
      />
      <CurrencyInput
        id="dti-card"
        label="Credit Card Minimum Due & Personal Loan EMIs (₹)"
        value={cardBills}
        min={0}
        max={200000}
        step={1000}
        sliderMin={0}
        sliderMax={50000}
        sliderStep={1000}
        onChange={setCardBills}
        helperMin="₹0"
        helperMid="₹25,000"
        helperMax="₹50,000"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 22. Asset Allocation Calculator View
// ============================================================
export function AssetAllocationCalculatorView() {
  const tool = getToolBySlug("asset-allocation-calculator")!;
  const [age, setAge] = useState(35);
  const [riskProfile, setRiskProfile] = useState<"conservative" | "moderate" | "growth" | "aggressive">("growth");
  const [horizon, setHorizon] = useState(12);
  const [portfolioValue, setPortfolioValue] = useState(5000000);

  const res = calculateAssetAllocation(age, riskProfile, horizon, portfolioValue);

  const reset = () => {
    setAge(35);
    setRiskProfile("growth");
    setHorizon(12);
    setPortfolioValue(5000000);
  };

  const donutSlices = [
    { label: "Equity Mutual Funds", value: res.recommendedEquityAmount, color: "#006C4A", formattedText: `${res.recommendedEquityPercent}%` },
    { label: "Debt & Fixed Income", value: res.recommendedDebtAmount, color: "#0A192F", formattedText: `${res.recommendedDebtPercent}%` },
    { label: "Gold & SGBs", value: res.recommendedGoldAmount, color: "#B45309", formattedText: `${res.recommendedGoldPercent}%` },
  ];

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Recommended Strategic Allocation"
              value={res.recommendedEquityAmount}
              subValueLabel={`Equity: ${res.recommendedEquityPercent}% | Debt: ${res.recommendedDebtPercent}% | Gold: ${res.recommendedGoldPercent}%`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Equity Allocation" value={res.recommendedEquityAmount} variant="emerald" />
              <MetricCard label="Debt & Bonds" value={res.recommendedDebtAmount} />
              <MetricCard label="Gold & Sovereign Gold" value={res.recommendedGoldAmount} variant="amber" />
              <MetricCard label="Profile Mandate" value={res.riskProfileTitle} isCurrency={false} />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {res.rationale}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Rebalance Your Portfolio with FINREV" />
          </div>
        </>
      }
      charts={
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-6 md:p-8 shadow-[var(--shadow-card)] mb-10">
          <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1">
            Target Multi-Asset Distribution
          </h3>
          <p className="text-xs text-[var(--color-text-muted)] mb-4">
            Optimal allocation weights derived from age, horizon, and risk tolerance
          </p>
          <DonutChartSVG
            slices={donutSlices}
            centerLabel="Total Capital"
            centerValue={formatINR(portfolioValue)}
          />
        </div>
      }
      educationalPrimer={{
        title: "Modern Portfolio Theory: Over 90% of Return Variance Comes from Asset Allocation",
        paragraphs: [
          "Seminal empirical research (Brinson, Hood, Beebower) proved that over 90% of a portfolio's return variability is driven by asset allocation policy, rather than individual security selection or market timing.",
          "Maintaining an uncorrelated mix of equities (wealth creator), fixed income (volatility dampener), and gold (crisis hedge) maximizes Sharpe ratio while minimizing gut-wrenching portfolio drawdowns.",
        ],
        takeaways: [
          "Rebalance annually when any asset class deviates by > 5% from its target weight.",
          "As you age, systematically protect accumulated wealth by shifting equity into high-credit debt.",
        ],
      }}
      assumptions={[
        "Calibrated using modified age-based glidepath and Modern Portfolio Theory constraints.",
      ]}
    >
      <DurationInput
        id="aa-age"
        label="Investor Current Age"
        value={age}
        min={21}
        max={75}
        step={1}
        unit="Yrs"
        onChange={setAge}
        helperMin="21"
        helperMid="45"
        helperMax="75"
      />
      <SelectInput
        id="aa-risk"
        label="Investment Risk Profile"
        value={riskProfile}
        options={[
          { value: "conservative", label: "Conservative (Capital Preservation Focus)" },
          { value: "moderate", label: "Moderate (Balanced Growth & Stability)" },
          { value: "growth", label: "Growth (Strategic Equity Tilt)" },
          { value: "aggressive", label: "Aggressive (High Multi-Decade Equity Focus)" },
        ]}
        onChange={(val) => setRiskProfile(val as "conservative" | "moderate" | "growth" | "aggressive")}
      />
      <DurationInput
        id="aa-horizon"
        label="Investment Horizon (Years)"
        value={horizon}
        min={1}
        max={35}
        step={1}
        onChange={setHorizon}
        helperMin="1 Year"
        helperMid="10 Years"
        helperMax="35 Years"
      />
      <CurrencyInput
        id="aa-capital"
        label="Total Investable Capital / Portfolio Size (₹)"
        value={portfolioValue}
        min={100000}
        max={100000000}
        step={100000}
        sliderMin={500000}
        sliderMax={20000000}
        sliderStep={250000}
        onChange={setPortfolioValue}
        helperMin="₹5 Lakh"
        helperMid="₹1 Crore"
        helperMax="₹2 Crore"
      />
    </CalculatorShell>
  );
}
