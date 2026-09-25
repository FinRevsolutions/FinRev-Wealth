"use client";

import React, { useState } from "react";
import { CalculatorShell } from "../CalculatorShell";
import { CurrencyInput, PercentageInput, DurationInput, SelectInput } from "../Inputs";
import { PrimaryResultCard, MetricCard, SplitRatioBar } from "../Results";
import { MilestoneTable } from "../MilestoneTable";
import { GrowthChartSVG } from "../Charts";
import { CalculatorActions, CalculatorCTA } from "../Panels";
import { getToolBySlug } from "@/lib/tools-registry";
import {
  calculateLoanEMI,
  calculateHomeLoan,
  calculateLoanPrepayment,
  calculateRentVsBuy,
} from "@/lib/calculators/loans";
import {
  calculateNPS,
  calculatePPF,
  calculateEPF,
} from "@/lib/calculators/tax";
import { formatExactINR, formatINR } from "@/lib/calculators/formatters";

// ============================================================
// 26. Loan EMI Calculator View
// ============================================================
export function LoanEMICalculatorView() {
  const tool = getToolBySlug("loan-emi-calculator")!;
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [rate, setRate] = useState(9.5);
  const [years, setYears] = useState(5);

  const res = calculateLoanEMI(loanAmount, rate, years);

  const reset = () => {
    setLoanAmount(2500000);
    setRate(9.5);
    setYears(5);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Equated Monthly Installment (EMI)"
              value={res.monthlyEMI}
              subValueLabel={`Monthly outflow over ${years} years (${years * 12} installments)`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Principal Borrowed" value={res.loanAmount} />
              <MetricCard label="Total Interest Payable" value={res.totalInterest} variant="amber" />
              <MetricCard label="Total Repayment Amount" value={res.totalPayment} />
              <MetricCard
                label="Interest-to-Loan Ratio"
                value={`${res.interestRatioPercent}%`}
                isCurrency={false}
              />
            </div>
            <SplitRatioBar
              leftLabel="Principal Borrowed"
              leftPercent={res.principalRatioPercent}
              rightLabel="Total Interest Paid"
              rightPercent={res.interestRatioPercent}
              leftColor="bg-[var(--color-primary)]"
              rightColor="bg-[var(--color-tertiary)]"
            />
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Assess Loan & Refinancing Options" />
          </div>
        </>
      }
      milestones={
        <MilestoneTable
          title="Annual Amortization Schedule"
          subtitle="Yearly principal reduction vs interest outflow"
          headers={["Year", "Beginning Balance", "Principal Paid", "Interest Paid", "Ending Balance"]}
          rows={res.yearlyData.map((d) => ({
            year: d.year,
            value: d.endingBalance,
            customColumns: [
              { key: "beg", value: d.beginningBalance },
              { key: "prin", value: d.principalPaid },
              { key: "int", value: d.interestPaid },
              { key: "end", value: d.endingBalance },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "How Loan Amortization Works",
        paragraphs: [
          "In a standard reducing balance loan, your initial EMI payments are predominantly composed of interest, with only a small fraction reducing the underlying principal balance.",
          "As the principal balance reduces over the loan tenure, the interest component decreases and the principal repayment component accelerates.",
        ],
        takeaways: [
          "Prepayments made in the first 3-5 years save the highest proportion of interest.",
          "Even a 0.5% lower interest rate saves significant sums over long durations.",
        ],
      }}
      assumptions={[
        "Standard reducing balance monthly amortization formula.",
        "Assumes interest rate remains fixed throughout the loan tenure.",
      ]}
    >
      <CurrencyInput
        id="emi-amount"
        label="Loan Principal Amount (₹)"
        value={loanAmount}
        min={50000}
        max={50000000}
        step={50000}
        sliderMin={100000}
        sliderMax={10000000}
        sliderStep={100000}
        onChange={setLoanAmount}
        helperMin="₹1 Lakh"
        helperMid="₹50 Lakh"
        helperMax="₹1 Crore"
      />
      <PercentageInput
        id="emi-rate"
        label="Annual Interest Rate (% p.a.)"
        value={rate}
        min={6}
        max={24}
        step={0.25}
        onChange={setRate}
        helperMin="6%"
        helperMid="9.5% (Typical Auto/Personal)"
        helperMax="24%"
      />
      <DurationInput
        id="emi-years"
        label="Loan Tenure (Years)"
        value={years}
        min={1}
        max={30}
        step={1}
        onChange={setYears}
        helperMin="1 Year"
        helperMid="5 Years"
        helperMax="30 Years"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 27. Home Loan Calculator View
// ============================================================
export function HomeLoanCalculatorView() {
  const tool = getToolBySlug("home-loan-calculator")!;
  const [propertyValue, setPropertyValue] = useState(8000000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const res = calculateHomeLoan(propertyValue, downPaymentPct, rate, tenure);

  const reset = () => {
    setPropertyValue(8000000);
    setDownPaymentPct(20);
    setRate(8.5);
    setTenure(20);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Monthly Home Loan EMI"
              value={res.monthlyEMI}
              subValueLabel={`Financing ₹${(res.loanAmount / 100000).toFixed(2)} Lakh over ${tenure} years at ${rate}%`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Upfront Down Payment" value={res.downPayment} />
              <MetricCard label="Total Interest Payable" value={res.totalInterest} variant="amber" />
              <MetricCard label="Effective Total Property Cost" value={res.effectiveCostOfProperty} />
              <MetricCard
                label="Sec. 24(b) Max Deduction"
                value={res.taxDeduction24bPotential}
                subtext="Interest deduction limit / yr"
              />
            </div>
            <SplitRatioBar
              leftLabel="Principal Borrowed"
              leftPercent={res.principalRatioPercent}
              rightLabel="Total Interest"
              rightPercent={res.interestRatioPercent}
              leftColor="bg-[var(--color-primary)]"
              rightColor="bg-[var(--color-tertiary)]"
            />
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Consult on Home Loan Strategy" />
          </div>
        </>
      }
      milestones={
        <MilestoneTable
          title="Home Loan Amortization Breakdown"
          subtitle="Annual trajectory of principal and interest payments"
          headers={["Year", "Beginning Principal", "Principal Paid", "Interest Paid", "Closing Balance"]}
          rows={res.yearlyData.filter((_, idx) => (idx + 1) % 5 === 0 || idx === 0 || idx === tenure - 1).map((d) => ({
            year: d.year,
            value: d.endingBalance,
            customColumns: [
              { key: "beg", value: d.beginningBalance },
              { key: "prin", value: d.principalPaid },
              { key: "int", value: d.interestPaid },
              { key: "end", value: d.endingBalance },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "The True Economics of 20-Year Home Loans",
        paragraphs: [
          "On a 20-year home loan at 8.5%, total interest paid often matches or exceeds the original principal borrowed. Borrowing ₹64 Lakhs incurs ~₹74 Lakhs in interest alone.",
          "Tax deductions under Section 24(b) (up to ₹2 Lakh for interest) and Section 80C (up to ₹1.5 Lakh for principal) provide partial relief under the Old Tax Regime, but structuring smart partial prepayments remains the premier path to saving lakhs.",
        ],
        takeaways: [
          "Higher down payments dramatically compress lifetime interest liability.",
          "Paying just ONE additional EMI each year can shave 4 to 5 years off a 20-year loan.",
        ],
      }}
      assumptions={[
        "Standard monthly reducing balance amortization.",
        "Assumes constant interest rate over entire tenure.",
      ]}
    >
      <CurrencyInput
        id="hl-prop-val"
        label="Total Property Cost (Agreement Value) (₹)"
        value={propertyValue}
        min={1000000}
        max={100000000}
        step={500000}
        sliderMin={2000000}
        sliderMax={25000000}
        sliderStep={250000}
        onChange={setPropertyValue}
        helperMin="₹20 Lakh"
        helperMid="₹1.25 Crore"
        helperMax="₹2.5 Crore"
      />
      <PercentageInput
        id="hl-down-pct"
        label="Down Payment Portion (%)"
        value={downPaymentPct}
        min={15}
        max={60}
        step={5}
        onChange={setDownPaymentPct}
        helperMin="15% (Minimum)"
        helperMid="20% (Standard)"
        helperMax="60%"
      />
      <PercentageInput
        id="hl-rate"
        label="Home Loan Interest Rate (% p.a.)"
        value={rate}
        min={7.5}
        max={12}
        step={0.1}
        onChange={setRate}
        helperMin="7.5%"
        helperMid="8.5% (Prime Bank Rate)"
        helperMax="12%"
      />
      <DurationInput
        id="hl-tenure"
        label="Loan Tenure (Years)"
        value={tenure}
        min={5}
        max={30}
        step={1}
        onChange={setTenure}
        helperMin="5 Years"
        helperMid="20 Years"
        helperMax="30 Years"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 28. Loan Prepayment Calculator View
// ============================================================
export function LoanPrepaymentCalculatorView() {
  const tool = getToolBySlug("loan-prepayment-calculator")!;
  const [outstandingPrincipal, setOutstandingPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.75);
  const [remainingTenure, setRemainingTenure] = useState(18);
  const [prepayType, setPrepayType] = useState<"extra_monthly" | "annual_lumpsum" | "one_time">("extra_monthly");
  const [prepayAmount, setPrepayAmount] = useState(10000);

  const res = calculateLoanPrepayment(
    outstandingPrincipal,
    rate,
    remainingTenure,
    prepayType,
    prepayAmount
  );

  const reset = () => {
    setOutstandingPrincipal(5000000);
    setRate(8.75);
    setRemainingTenure(18);
    setPrepayType("extra_monthly");
    setPrepayAmount(10000);
  };

  const prepayLabels = {
    extra_monthly: "Extra Monthly Prepayment",
    annual_lumpsum: "Annual Lump Sum Prepayment (e.g., from bonus)",
    one_time: "Immediate One-Time Lump Sum Prepayment",
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Total Interest Saved"
              value={res.interestSaved}
              subValueLabel={`Reduced loan tenure by ${res.yearsReduced} years (${res.monthsReduced} months)`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Revised Total Interest" value={res.revisedTotalInterest} variant="emerald" />
              <MetricCard label="Original Total Interest" value={res.originalTotalInterest} variant="amber" />
              <MetricCard
                label="Tenure Reduction"
                value={`${res.yearsReduced} Years`}
                isCurrency={false}
                variant="emerald"
              />
              <MetricCard
                label="Interest Savings %"
                value={`${res.savingsPercentage}%`}
                isCurrency={false}
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              By paying an extra {formatExactINR(prepayAmount)} ({prepayLabels[prepayType]}), you slash your remaining loan tenure from {remainingTenure} years down to {(res.revisedTenureMonths / 12).toFixed(1)} years and keep {formatExactINR(res.interestSaved)} in your pocket.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Plan a Debt Elimination Strategy" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "The Miracle of Loan Prepayment: Beating the Bank at Its Own Game",
        paragraphs: [
          "Because interest in the early half of a mortgage is calculated on a very large outstanding balance, every rupee prepaid goes 100% directly toward reducing the principal balance.",
          "This immediately and permanently shrinks the interest charged for every subsequent month of the entire remaining loan duration.",
        ],
        takeaways: [
          "RBI guidelines prohibit banks from levying prepayment penalties on floating-rate home loans for individuals.",
          "Prepaying even 5% of your outstanding loan once a year can cut your 20-year mortgage down to under 12 years.",
        ],
      }}
      assumptions={[
        "Assumes prepayments reduce loan tenure while maintaining base EMI amount.",
        "Floating rate remains constant over revised tenure.",
      ]}
    >
      <CurrencyInput
        id="prep-prin"
        label="Current Outstanding Principal Balance (₹)"
        value={outstandingPrincipal}
        min={200000}
        max={50000000}
        step={50000}
        sliderMin={500000}
        sliderMax={15000000}
        sliderStep={100000}
        onChange={setOutstandingPrincipal}
        helperMin="₹5 Lakh"
        helperMid="₹75 Lakh"
        helperMax="₹1.5 Crore"
      />
      <PercentageInput
        id="prep-rate"
        label="Current Loan Interest Rate (% p.a.)"
        value={rate}
        min={7}
        max={14}
        step={0.25}
        onChange={setRate}
        helperMin="7%"
        helperMid="8.75%"
        helperMax="14%"
      />
      <DurationInput
        id="prep-tenure"
        label="Remaining Tenure (Years)"
        value={remainingTenure}
        min={1}
        max={30}
        step={1}
        onChange={setRemainingTenure}
        helperMin="1 Year"
        helperMid="15 Years"
        helperMax="30 Years"
      />
      <SelectInput
        id="prep-type"
        label="Prepayment Mode"
        value={prepayType}
        options={[
          { value: "extra_monthly", label: "Extra Amount Paid Every Month" },
          { value: "annual_lumpsum", label: "One Lump Sum Every Year (Annual Bonus)" },
          { value: "one_time", label: "One-Time Immediate Lump Sum" },
        ]}
        onChange={(val) => setPrepayType(val as "extra_monthly" | "annual_lumpsum" | "one_time")}
      />
      <CurrencyInput
        id="prep-amount"
        label="Prepayment Amount (₹)"
        value={prepayAmount}
        min={1000}
        max={5000000}
        step={1000}
        sliderMin={2000}
        sliderMax={200000}
        sliderStep={2000}
        onChange={setPrepayAmount}
        helperMin="₹2,000"
        helperMid="₹1 Lakh"
        helperMax="₹2 Lakh"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 29. Rent vs Buy Calculator View
// ============================================================
export function RentVsBuyCalculatorView() {
  const tool = getToolBySlug("rent-vs-buy-calculator")!;
  const [propPrice, setPropPrice] = useState(9000000);
  const [monthlyRent, setMonthlyRent] = useState(30000);
  const [horizon, setHorizon] = useState(15);
  const [downPct, setDownPct] = useState(20);
  const [loanRate, setLoanRate] = useState(8.5);
  const [propAppreciation, setPropAppreciation] = useState(6);
  const [equityReturn, setEquityReturn] = useState(12);
  const [rentIncrease, setRentIncrease] = useState(6);

  const res = calculateRentVsBuy(
    propPrice,
    monthlyRent,
    horizon,
    downPct,
    loanRate,
    20,
    propAppreciation,
    equityReturn,
    rentIncrease
  );

  const reset = () => {
    setPropPrice(9000000);
    setMonthlyRent(30000);
    setHorizon(15);
    setDownPct(20);
    setLoanRate(8.5);
    setPropAppreciation(6);
    setEquityReturn(12);
    setRentIncrease(6);
  };

  const chartData = res.yearlyComparison.map((d) => ({
    year: d.year,
    invested: d.renterNetWealth,
    value: d.buyerNetWealth,
  }));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label={
                res.winner === "buy"
                  ? "Buying Creates Greater Net Wealth"
                  : "Renting & Investing Difference Wins"
              }
              value={res.wealthAdvantageAmount}
              subValueLabel={`Estimated wealth advantage over ${horizon} years`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Buyer Net Equity" value={res.netWealthBuying} variant={res.winner === "buy" ? "emerald" : "canvas"} />
              <MetricCard label="Renter Equity Portfolio" value={res.netWealthRenting} variant={res.winner === "rent" ? "emerald" : "canvas"} />
              <MetricCard label="Total Rent Paid" value={res.totalCostOfRenting} />
              <MetricCard label="Total Outflow (Buyer)" value={res.totalCostOfBuying} />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {res.winner === "buy"
                ? `Due to property appreciation and mortgage amortization, purchasing this home yields an extra ${formatExactINR(res.wealthAdvantageAmount)} in net assets after ${horizon} years.`
                : `Because rental yield is low (~${((monthlyRent * 12 * 100) / propPrice).toFixed(1)}%), renting and compounding the down payment difference in equity mutual funds at ${equityReturn}% yields an extra ${formatExactINR(res.wealthAdvantageAmount)} in liquid wealth.`}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Analyze Your Real Estate Decision" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="Renting + Equity Investing vs Home Ownership Equity"
          subtitle="Net wealth of Buyer (Value curve) vs Renter investing savings in equities (Invested line)"
        />
      }
      educationalPrimer={{
        title: "Rent vs. Buy: The Opportunity Cost of Capital",
        paragraphs: [
          "In metropolitan India, gross residential rental yields hover around 2.5% to 3.5%, while home loan interest rates run between 8.5% and 9.5%.",
          "This wide divergence means renting is often remarkably cheap compared to buying. A renter who disciplines themselves to invest the upfront down payment and monthly EMI difference into diversified equity mutual funds can often build superior liquid wealth compared to a homeowner.",
        ],
        takeaways: [
          "Buying delivers emotional security, stability, and leveraged property equity.",
          "Renting offers geographical mobility, zero maintenance headaches, and superior compounding when savings are invested in equity.",
        ],
      }}
      assumptions={[
        "Renter invests down payment and any monthly cash savings into equity portfolio at specified rate.",
        "Homeowner equity equals property appreciation value minus remaining mortgage balance.",
      ]}
    >
      <CurrencyInput
        id="rvb-price"
        label="Property Purchase Price (₹)"
        value={propPrice}
        min={1000000}
        max={100000000}
        step={500000}
        sliderMin={2500000}
        sliderMax={30000000}
        sliderStep={500000}
        onChange={setPropPrice}
        helperMin="₹25 Lakh"
        helperMid="₹1.5 Crore"
        helperMax="₹3 Crore"
      />
      <CurrencyInput
        id="rvb-rent"
        label="Monthly Rent for Equivalent Home (₹)"
        value={monthlyRent}
        min={5000}
        max={500000}
        step={2500}
        sliderMin={10000}
        sliderMax={150000}
        sliderStep={2500}
        onChange={setMonthlyRent}
        helperMin="₹10,000/mo"
        helperMid="₹50,000/mo"
        helperMax="₹1,50,000/mo"
      />
      <DurationInput
        id="rvb-horizon"
        label="Comparison Horizon (Years)"
        value={horizon}
        min={3}
        max={30}
        step={1}
        onChange={setHorizon}
        helperMin="3 Years"
        helperMid="15 Years"
        helperMax="30 Years"
      />
      <div className="grid grid-cols-2 gap-4">
        <PercentageInput
          id="rvb-prop-app"
          label="Property Appreciation (% p.a.)"
          value={propAppreciation}
          min={2}
          max={12}
          step={0.5}
          onChange={setPropAppreciation}
          helperMin="2%"
          helperMax="12%"
        />
        <PercentageInput
          id="rvb-eq-ret"
          label="Renter Equity Return (% p.a.)"
          value={equityReturn}
          min={6}
          max={16}
          step={0.5}
          onChange={setEquityReturn}
          helperMin="6%"
          helperMax="16%"
        />
      </div>
    </CalculatorShell>
  );
}

// ============================================================
// 30. NPS Calculator View
// ============================================================
export function NPSCalculatorView() {
  const tool = getToolBySlug("nps-calculator")!;
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [rate, setRate] = useState(10);
  const [annuityPct, setAnnuityPct] = useState(40);
  const [annuityRate, setAnnuityRate] = useState(6.5);

  const res = calculateNPS(
    monthlyContribution,
    currentAge,
    retireAge,
    rate,
    annuityPct,
    annuityRate
  );

  const reset = () => {
    setMonthlyContribution(10000);
    setCurrentAge(30);
    setRetireAge(60);
    setRate(10);
    setAnnuityPct(40);
    setAnnuityRate(6.5);
  };

  const chartData = res.yearlyData.map((d) => ({
    year: d.year,
    invested: d.invested,
    value: d.corpus,
  }));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Total Accumulated NPS Pension Corpus"
              value={res.accumulatedCorpus}
              subValueLabel={`At Age ${retireAge} after ${res.investmentYears} years of monthly contributions`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard
                label="Tax-Free Lump Sum (60%)"
                value={res.lumpsumWithdrawalAmount}
                variant="emerald"
                subtext="100% Tax-Exempt at maturity"
              />
              <MetricCard
                label="Projected Monthly Pension"
                value={res.projectedMonthlyPension}
                variant="emerald"
                subtext={`From 40% Annuity at ${annuityRate}%`}
              />
              <MetricCard label="Total Invested Outlay" value={res.totalInvested} />
              <MetricCard label="Total Compounded Gains" value={res.totalGains} variant="emerald" />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Under PFRDA regulations, up to 60% of maturity corpus is completely tax-free. The remaining 40% purchases a mandatory life annuity generating {formatExactINR(res.projectedMonthlyPension)}/month in pension.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Integrate NPS into Retirement Plan" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="NPS Tier-1 Corpus Accumulation"
          subtitle="Annual progression of contributions vs compounded retirement corpus"
        />
      }
      milestones={
        <MilestoneTable
          title="NPS Milestone Projections"
          subtitle="Accumulation trajectory towards superannuation"
          headers={["Year / Age", "Total Contributed", "Maturity Corpus Valuation"]}
          rows={res.yearlyData.filter((_, idx) => (idx + 1) % 5 === 0 || idx === 0 || idx === res.yearlyData.length - 1).map((d) => ({
            year: d.year,
            label: `Age ${d.age}`,
            value: d.corpus,
            customColumns: [
              { key: "inv", value: d.invested },
              { key: "corp", value: d.corpus },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "National Pension System: Institutional Grade, Low-Cost Retirement Engine",
        paragraphs: [
          "Governed by PFRDA, the National Pension System (NPS) is one of the world's most cost-effective retirement savings vehicles with fund management charges capped at ultra-low institutional levels (under 0.09%).",
          "NPS allows strategic allocation across Asset Class E (Equities up to 75%), C (Corporate Debt), G (Government Bonds), and A (Alternative Assets), delivering powerful market-linked compounding for long-term retirement planning.",
        ],
        takeaways: [
          "Additional ₹50,000 exclusive tax deduction under Section 80CCD(1B) beyond the ₹1.5L 80C limit.",
          "60% lump sum at age 60 is completely tax-free under current Indian tax laws.",
        ],
      }}
      assumptions={[
        "Assumes monthly contributions compound at specified return rate until retirement age 60.",
        "Mandatory 40% minimum annuity purchase deployed at assumed annuity rate.",
      ]}
    >
      <CurrencyInput
        id="nps-monthly"
        label="Monthly NPS Tier-1 Contribution (₹)"
        value={monthlyContribution}
        min={500}
        max={200000}
        step={500}
        sliderMin={1000}
        sliderMax={50000}
        sliderStep={1000}
        onChange={setMonthlyContribution}
        helperMin="₹1,000/mo"
        helperMid="₹20,000/mo"
        helperMax="₹50,000/mo"
      />
      <div className="grid grid-cols-2 gap-4">
        <DurationInput
          id="nps-curr-age"
          label="Current Age"
          value={currentAge}
          min={18}
          max={60}
          step={1}
          unit="Yrs"
          onChange={setCurrentAge}
          helperMin="18"
          helperMax="60"
        />
        <DurationInput
          id="nps-ret-age"
          label="Retirement Age"
          value={retireAge}
          min={currentAge + 1}
          max={75}
          step={1}
          unit="Yrs"
          onChange={setRetireAge}
          helperMin={`${currentAge + 1}`}
          helperMax="75"
        />
      </div>
      <PercentageInput
        id="nps-rate"
        label="Expected Annual Return Rate (% p.a.)"
        value={rate}
        min={7}
        max={14}
        step={0.5}
        onChange={setRate}
        helperMin="7% (Debt Focus)"
        helperMid="10% (Active Auto Choice)"
        helperMax="14% (Aggressive Equity)"
      />
      <div className="grid grid-cols-2 gap-4">
        <PercentageInput
          id="nps-annuity-pct"
          label="Annuity Reinvestment (%)"
          value={annuityPct}
          min={40}
          max={100}
          step={5}
          onChange={setAnnuityPct}
          helperMin="40% (Statutory Min)"
          helperMax="100%"
        />
        <PercentageInput
          id="nps-annuity-rate"
          label="Expected Annuity Rate (%)"
          value={annuityRate}
          min={5}
          max={9}
          step={0.25}
          onChange={setAnnuityRate}
          helperMin="5%"
          helperMid="6.5%"
          helperMax="9%"
        />
      </div>
    </CalculatorShell>
  );
}

// ============================================================
// 31. PPF Calculator View
// ============================================================
export function PPFCalculatorView() {
  const tool = getToolBySlug("ppf-calculator")!;
  const [deposit, setDeposit] = useState(150000);
  const [tenure, setTenure] = useState(15);
  const [rate, setRate] = useState(7.1);

  const res = calculatePPF(deposit, tenure, rate);

  const reset = () => {
    setDeposit(150000);
    setTenure(15);
    setRate(7.1);
  };

  const chartData = res.yearlyData.map((d) => ({
    year: d.year,
    invested: deposit * d.year,
    value: d.closingBalance,
  }));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Tax-Free PPF Maturity Corpus"
              value={res.maturityValue}
              subValueLabel={`Sovereign-backed return under EEE tax status over ${tenure} years (rates notified quarterly by Govt of India)`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Total Invested" value={res.totalDeposited} />
              <MetricCard label="Total Tax-Free Interest" value={res.totalInterestEarned} variant="emerald" />
              <MetricCard
                label="Statutory Interest Rate"
                value={`${rate}% p.a.`}
                isCurrency={false}
                subtext="Ministry of Finance notified"
              />
              <MetricCard
                label="Tax Status"
                value="EEE (100% Tax Free)"
                isCurrency={false}
                variant="emerald"
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              PPF enjoys triple tax exemption (EEE): Tax deduction on deposit (80C), tax-exempt interest accrual, and completely tax-free maturity proceeds.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Integrate PPF into Debt Allocation" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="PPF Sovereign Wealth Accumulation"
          subtitle="Tax-free compounding of annual statutory deposits"
        />
      }
      milestones={
        <MilestoneTable
          title="PPF 15-Year Progression Schedule"
          subtitle="Yearly opening balance, interest accrual, and closing balance"
          headers={["Year", "Annual Deposit", "Interest Earned", "Closing Balance"]}
          rows={res.yearlyData.map((d) => ({
            year: d.year,
            value: d.closingBalance,
            customColumns: [
              { key: "dep", value: d.deposit },
              { key: "int", value: d.interestEarned },
              { key: "close", value: d.closingBalance },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "Public Provident Fund: The Sovereign Pillar of Fixed Income",
        paragraphs: [
          "Backed by the Government of India, the Public Provident Fund is a premier sovereign-backed debt compounding instrument with zero credit risk available to retail Indian investors.",
          "With an annual deposit ceiling of ₹1.5 Lakh and a lock-in period of 15 years (extendable in 5-year blocks indefinitely), it offers unparalleled capital safety with interest rates notified quarterly by the Ministry of Finance.",
        ],
        takeaways: [
          "Deposit before the 5th of every month to earn interest for that calendar month.",
          "Can be extended indefinitely in blocks of 5 years with or without fresh contributions.",
        ],
      }}
      assumptions={[
        "Interest rate compounded annually at notified sovereign rate (7.1% p.a.).",
        "Assumes full annual deposit deposited before April 5th of each financial year.",
      ]}
    >
      <CurrencyInput
        id="ppf-deposit"
        label="Annual Contribution (₹/yr) (Max ₹1.5 Lakh)"
        value={deposit}
        min={500}
        max={150000}
        step={5000}
        sliderMin={5000}
        sliderMax={150000}
        sliderStep={5000}
        onChange={setDeposit}
        helperMin="₹5,000/yr"
        helperMid="₹75,000/yr"
        helperMax="₹1,50,000/yr (Max)"
      />
      <DurationInput
        id="ppf-tenure"
        label="Tenure (15-year base + 5-year blocks)"
        value={tenure}
        min={15}
        max={35}
        step={5}
        onChange={setTenure}
        helperMin="15 Years"
        helperMid="25 Years"
        helperMax="35 Years"
      />
      <PercentageInput
        id="ppf-rate"
        label="Statutory Interest Rate (% p.a.)"
        value={rate}
        min={6}
        max={9}
        step={0.1}
        onChange={setRate}
        helperMin="6%"
        helperMid="7.1% (Govt Notified)"
        helperMax="9%"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 32. EPF Calculator View
// ============================================================
export function EPFCalculatorView() {
  const tool = getToolBySlug("epf-calculator")!;
  const [basicWage, setBasicWage] = useState(60000);
  const [epfBalance, setEpfBalance] = useState(500000);
  const [currentAge, setCurrentAge] = useState(28);
  const [retireAge, setRetireAge] = useState(58);
  const [salaryHike, setSalaryHike] = useState(7);
  const [epfRate, setEpfRate] = useState(8.25);

  const res = calculateEPF(
    basicWage,
    epfBalance,
    currentAge,
    retireAge,
    salaryHike,
    epfRate
  );

  const reset = () => {
    setBasicWage(60000);
    setEpfBalance(500000);
    setCurrentAge(28);
    setRetireAge(58);
    setSalaryHike(7);
    setEpfRate(8.25);
  };

  const chartData = res.yearlyData.map((d) => ({
    year: d.year,
    invested: d.employeeAnnualEPF * d.year,
    value: d.closingBalance,
  }));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Projected EPF Maturity Corpus at Retirement"
              value={res.totalMaturityCorpus}
              subValueLabel={`At Age ${retireAge} after ${res.yearsOfService} years of salaried service`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Employee Total Contribution" value={res.employeeTotalContribution} />
              <MetricCard label="Employer EPF Contribution" value={res.employerEPFContribution} />
              <MetricCard label="Total Interest Earned" value={res.totalEPFInterestEarned} variant="emerald" />
              <MetricCard
                label="Statutory Interest Rate"
                value={`${epfRate}% p.a.`}
                isCurrency={false}
                subtext="EPFO CBT approved rate"
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Due to 30 years of progressive salary hikes and 8.25% compounding, compounding interest accounts for over {Math.round((res.totalEPFInterestEarned / res.totalMaturityCorpus) * 100)}% of your final retirement nest egg.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Incorporate EPF into Comprehensive Retirement Plan" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="Salaried EPF Retirement Corpus Growth"
          subtitle="Trajectory of monthly payroll deductions + employer match + annual interest"
        />
      }
      milestones={
        <MilestoneTable
          title="EPF Five-Year Milestone Projection"
          subtitle="Salary increments and accumulated balance milestones"
          headers={["Milestone Age", "Monthly Basic + DA", "Annual Total EPF", "Accumulated Balance"]}
          rows={res.yearlyData.filter((_, idx) => (idx + 1) % 5 === 0 || idx === 0 || idx === res.yearlyData.length - 1).map((d) => ({
            year: d.year,
            label: `Age ${d.age}`,
            value: d.closingBalance,
            customColumns: [
              { key: "wage", value: d.monthlyWage },
              { key: "annual", value: d.employeeAnnualEPF + d.employerAnnualEPF },
              { key: "bal", value: d.closingBalance },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "Employees' Provident Fund: The Silent Foundation of Salaried Wealth",
        paragraphs: [
          "For corporate employees, EPF is an automated, mandatory wealth-building mechanism. 12% of your Basic Salary + Dearness Allowance is deducted monthly, with 3.67% matched by your employer into EPF (and 8.33% into EPS).",
          "Coupled with sovereign safety and an attractive 8.25% annual return (as notified by EPFO for FY 2023-24/2024-25), resisting the temptation to withdraw EPF balances during job changes is one of the most impactful financial decisions an employee can make.",
        ],
        takeaways: [
          "Transfer your UAN balance seamlessly between employers rather than withdrawing.",
          "Interest earned on employee contributions up to ₹2.5 Lakh per year remains tax-exempt.",
        ],
      }}
      assumptions={[
        "Employee contribution: 12% of Basic + DA; Employer contribution to EPF: 3.67%.",
        "Assumes constant annual salary increment applied across basic wage.",
      ]}
    >
      <CurrencyInput
        id="epf-wage"
        label="Monthly Basic Salary + DA (₹)"
        value={basicWage}
        min={10000}
        max={1000000}
        step={5000}
        sliderMin={15000}
        sliderMax={250000}
        sliderStep={5000}
        onChange={setBasicWage}
        helperMin="₹15,000/mo"
        helperMid="₹1.25 Lakh/mo"
        helperMax="₹2.5 Lakh/mo"
      />
      <CurrencyInput
        id="epf-curr-bal"
        label="Current Accumulated EPF Balance (₹)"
        value={epfBalance}
        min={0}
        max={20000000}
        step={25000}
        sliderMin={0}
        sliderMax={5000000}
        sliderStep={50000}
        onChange={setEpfBalance}
        helperMin="₹0"
        helperMid="₹25 Lakh"
        helperMax="₹50 Lakh"
      />
      <div className="grid grid-cols-2 gap-4">
        <DurationInput
          id="epf-age"
          label="Current Age"
          value={currentAge}
          min={18}
          max={57}
          step={1}
          unit="Yrs"
          onChange={setCurrentAge}
          helperMin="18"
          helperMax="57"
        />
        <DurationInput
          id="epf-retire"
          label="Retirement Age"
          value={retireAge}
          min={currentAge + 1}
          max={65}
          step={1}
          unit="Yrs"
          onChange={setRetireAge}
          helperMin={`${currentAge + 1}`}
          helperMax="65"
        />
      </div>
      <PercentageInput
        id="epf-hike"
        label="Expected Annual Salary Increment (% p.a.)"
        value={salaryHike}
        min={3}
        max={15}
        step={0.5}
        onChange={setSalaryHike}
        helperMin="3%"
        helperMid="7% (Standard)"
        helperMax="15%"
      />
      <PercentageInput
        id="epf-rate"
        label="Statutory EPF Interest Rate (% p.a.)"
        value={epfRate}
        min={7}
        max={9.5}
        step={0.05}
        onChange={setEpfRate}
        helperMin="7%"
        helperMid="8.25% (FY 2024-25)"
        helperMax="9.5%"
      />
    </CalculatorShell>
  );
}
