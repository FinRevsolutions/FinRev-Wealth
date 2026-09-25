"use client";

import React, { useState } from "react";
import { CalculatorShell } from "../CalculatorShell";
import { CurrencyInput, PercentageInput, DurationInput } from "../Inputs";
import { PrimaryResultCard, MetricCard } from "../Results";
import { GrowthChartSVG } from "../Charts";
import { MilestoneTable } from "../MilestoneTable";
import { CalculatorActions, CalculatorCTA } from "../Panels";
import { getToolBySlug } from "@/lib/tools-registry";
import {
  calculateChildEducation,
  calculateMarriageGoal,
  calculateDreamHome,
  calculateInflation,
} from "@/lib/calculators/goals";
import { calculateFIRE } from "@/lib/calculators/retirement";
import { formatExactINR, formatINR } from "@/lib/calculators/formatters";

// ============================================================
// 13. Child Education Calculator View
// ============================================================
export function ChildEducationCalculatorView() {
  const tool = getToolBySlug("child-education-calculator")!;
  const [currentCost, setCurrentCost] = useState(2500000);
  const [childAge, setChildAge] = useState(3);
  const [collegeAge, setCollegeAge] = useState(18);
  const [inflation, setInflation] = useState(10);
  const [rate, setRate] = useState(12);
  const [existingSavings, setExistingSavings] = useState(300000);

  const res = calculateChildEducation(
    currentCost,
    childAge,
    collegeAge,
    inflation,
    rate,
    existingSavings
  );

  const reset = () => {
    setCurrentCost(2500000);
    setChildAge(3);
    setCollegeAge(18);
    setInflation(10);
    setRate(12);
    setExistingSavings(300000);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Required Monthly Educational SIP"
              value={res.requiredMonthlySIP}
              subValueLabel={`To accumulate ${formatINR(res.futureCost)} by the time child turns ${collegeAge}`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Future Education Cost" value={res.futureCost} variant="amber" />
              <MetricCard label="Net Shortfall to Fund" value={res.netShortfall} />
              <MetricCard label="Total SIP Outlay" value={res.totalInvested} />
              <MetricCard label="Compounded Growth" value={res.growthContribution} variant="emerald" />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Higher education inflation runs at ~10% annually in India, doubling tuition costs roughly every 7 years. Starting an SIP early when your child is {childAge} leaves {res.yearsToCollege} years for equity compounding to fund {Math.round((res.growthContribution / Math.max(1, res.netShortfall)) * 100)}% of the target.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Create a Child Higher Education Portfolio" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "Funding Higher Education Without Damaging Your Retirement",
        paragraphs: [
          "Tuition for premier undergraduate and postgraduate programs (MBA, Medicine, Engineering, Global Universities) escalates at nearly twice the rate of consumer inflation.",
          "Many parents make the irreversible mistake of dipping into their retirement corpus or taking crippling education loans. By establishing a dedicated equity mutual fund SIP when the child is young, compounding absorbs the vast majority of the financial burden.",
        ],
        takeaways: [
          "Factor 10% annual inflation rather than standard 6% CPI for academic costs.",
          "Maintain an equity-heavy allocation (70-80%) until 3 years before college.",
          "Systematically derisk into debt/liquid funds as admission deadlines approach.",
        ],
      }}
      assumptions={[
        "Assumes 10% education inflation applied annually to current tuition costs.",
        "Existing savings compound at the expected rate of return for the remaining years to college.",
      ]}
    >
      <CurrencyInput
        id="edu-current"
        label="Current Cost of Target Degree / College (₹)"
        value={currentCost}
        min={200000}
        max={30000000}
        step={100000}
        sliderMin={500000}
        sliderMax={10000000}
        sliderStep={250000}
        onChange={setCurrentCost}
        helperMin="₹5 Lakh"
        helperMid="₹50 Lakh"
        helperMax="₹1 Crore"
      />
      <div className="grid grid-cols-2 gap-4">
        <DurationInput
          id="edu-child-age"
          label="Child's Current Age"
          value={childAge}
          min={0}
          max={17}
          step={1}
          unit="Yrs"
          onChange={setChildAge}
          helperMin="0 (Newborn)"
          helperMax="17"
        />
        <DurationInput
          id="edu-college-age"
          label="College Admission Age"
          value={collegeAge}
          min={16}
          max={25}
          step={1}
          unit="Yrs"
          onChange={setCollegeAge}
          helperMin="16"
          helperMax="25"
        />
      </div>
      <PercentageInput
        id="edu-inflation"
        label="Higher Education Inflation (% p.a.)"
        value={inflation}
        min={6}
        max={14}
        step={0.5}
        onChange={setInflation}
        helperMin="6%"
        helperMid="10% (India Standard)"
        helperMax="14% (Foreign Study)"
      />
      <PercentageInput
        id="edu-rate"
        label="Expected Investment Return (% p.a.)"
        value={rate}
        min={8}
        max={16}
        step={0.5}
        onChange={setRate}
        helperMin="8%"
        helperMid="12% (Diversified Equity)"
        helperMax="16%"
      />
      <CurrencyInput
        id="edu-existing"
        label="Existing Dedicated Savings for this Goal (₹)"
        value={existingSavings}
        min={0}
        max={10000000}
        step={50000}
        sliderMin={0}
        sliderMax={2500000}
        sliderStep={50000}
        onChange={setExistingSavings}
        helperMin="₹0"
        helperMid="₹10 Lakh"
        helperMax="₹25 Lakh"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 14. Marriage Goal Calculator View
// ============================================================
export function MarriageGoalCalculatorView() {
  const tool = getToolBySlug("marriage-goal-calculator")!;
  const [currentBudget, setCurrentBudget] = useState(2000000);
  const [yearsToMarriage, setYearsToMarriage] = useState(10);
  const [inflation, setInflation] = useState(7);
  const [rate, setRate] = useState(12);
  const [existingSavings, setExistingSavings] = useState(200000);

  const res = calculateMarriageGoal(
    currentBudget,
    yearsToMarriage,
    inflation,
    rate,
    existingSavings
  );

  const reset = () => {
    setCurrentBudget(2000000);
    setYearsToMarriage(10);
    setInflation(7);
    setRate(12);
    setExistingSavings(200000);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Required Monthly Investment"
              value={res.requiredMonthlySIP}
              subValueLabel={`To accumulate ${formatINR(res.futureCost)} over ${yearsToMarriage} years`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Future Marriage Budget" value={res.futureCost} variant="amber" />
              <MetricCard label="Net Corpus Target" value={res.netGoalCorpus} />
              <MetricCard label="Total Capital Invested" value={res.totalInvested} />
              <MetricCard label="Estimated Compounded Gains" value={res.estimatedGains} variant="emerald" />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Planning wedding expenses {yearsToMarriage} years in advance lets equity compounding generate {formatExactINR(res.estimatedGains)}, reducing your out-of-pocket savings burden substantially.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Start a Milestone Goal Plan" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "Funding Wedding Milestones Without Taking High-Interest Debt",
        paragraphs: [
          "Wedding expenditures in India involve multiple vendors, hospitality, jewelry, and celebrations. In the absence of a proactive investment roadmap, families frequently resort to expensive personal loans or gold loans.",
          "A structured SIP initiated 7 to 15 years prior creates the necessary liquid wealth without straining daily household cash flows.",
        ],
        takeaways: [
          "Anticipate wedding-related lifestyle inflation at 7-8% p.a.",
          "Shift accumulated equity capital into ultra-safe liquid funds 12-18 months prior to the event.",
        ],
      }}
      assumptions={[
        "Assumes 7% annual inflation on hospitality, logistics, and celebration costs.",
        "Monthly contributions are compounded at the specified return rate.",
      ]}
    >
      <CurrencyInput
        id="marr-budget"
        label="Estimated Wedding Budget in Today's Terms (₹)"
        value={currentBudget}
        min={200000}
        max={20000000}
        step={100000}
        sliderMin={500000}
        sliderMax={5000000}
        sliderStep={200000}
        onChange={setCurrentBudget}
        helperMin="₹5 Lakh"
        helperMid="₹25 Lakh"
        helperMax="₹50 Lakh"
      />
      <DurationInput
        id="marr-years"
        label="Years Remaining Until Milestone"
        value={yearsToMarriage}
        min={1}
        max={25}
        step={1}
        onChange={setYearsToMarriage}
        helperMin="1 Year"
        helperMid="10 Years"
        helperMax="25 Years"
      />
      <PercentageInput
        id="marr-inflation"
        label="Expected Lifestyle Inflation (% p.a.)"
        value={inflation}
        min={4}
        max={12}
        step={0.5}
        onChange={setInflation}
        helperMin="4%"
        helperMid="7%"
        helperMax="12%"
      />
      <PercentageInput
        id="marr-rate"
        label="Expected Investment Return (% p.a.)"
        value={rate}
        min={6}
        max={16}
        step={0.5}
        onChange={setRate}
        helperMin="6%"
        helperMid="12%"
        helperMax="16%"
      />
      <CurrencyInput
        id="marr-existing"
        label="Existing Dedicated Savings (₹)"
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
// 15. Dream Home Goal Calculator View
// ============================================================
export function DreamHomeCalculatorView() {
  const tool = getToolBySlug("dream-home-calculator")!;
  const [propVal, setPropVal] = useState(10000000);
  const [years, setYears] = useState(5);
  const [downPct, setDownPct] = useState(25);
  const [dutyPct, setDutyPct] = useState(7);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [appreciation, setAppreciation] = useState(5);
  const [loanRate, setLoanRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const res = calculateDreamHome(
    propVal,
    years,
    downPct,
    dutyPct,
    expectedReturn,
    appreciation,
    loanRate,
    loanTenure
  );

  const reset = () => {
    setPropVal(10000000);
    setYears(5);
    setDownPct(25);
    setDutyPct(7);
    setExpectedReturn(12);
    setAppreciation(5);
    setLoanRate(8.5);
    setLoanTenure(20);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Required Monthly SIP for Down Payment"
              value={res.requiredMonthlySIP}
              subValueLabel={`To accumulate ${formatINR(res.futureUpfrontCashNeeded)} down payment & stamp duty in ${years} years`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Future Property Value" value={Math.round(propVal * Math.pow(1 + appreciation / 100, years))} variant="amber" />
              <MetricCard label="Total Upfront Cash Needed" value={res.futureUpfrontCashNeeded} />
              <MetricCard label="Projected Mortgage Loan" value={res.projectedLoanAmount} />
              <MetricCard label="Projected Monthly EMI" value={res.projectedMonthlyEMI} variant="emerald" />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Accumulating a 25-30% down payment upfront through disciplined SIP prevents excessive debt burdens, ensures favorable lending terms, and shields you from emergency borrowing.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Structure Your Real Estate Goal" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "Smart Home Ownership: Accumulating the True Upfront Capital",
        paragraphs: [
          "Buying a home requires more than just meeting bank loan eligibility. Aside from the mandatory 20% down payment, purchasers must account for 6-8% stamp duty, registration charges, interior fit-outs, and initial maintenance deposits.",
          "Attempting to fund these through unsecured personal loans places acute stress on monthly cash flows. Accumulating the complete upfront cash requirement via mutual funds ensures you enter homeownership with financial strength.",
        ],
        takeaways: [
          "Budget for 25% to 30% total upfront cash out of pocket.",
          "Target a mortgage EMI that does not exceed 35% of your gross monthly income.",
        ],
      }}
      assumptions={[
        "Property value appreciates at specified annual percentage.",
        "Mortgage EMI calculated on standard reducing balance method over specified tenure.",
      ]}
    >
      <CurrencyInput
        id="home-prop-val"
        label="Target Property Value Today (₹)"
        value={propVal}
        min={1000000}
        max={100000000}
        step={500000}
        sliderMin={2500000}
        sliderMax={30000000}
        sliderStep={500000}
        onChange={setPropVal}
        helperMin="₹25 Lakh"
        helperMid="₹1.5 Crore"
        helperMax="₹3 Crore"
      />
      <DurationInput
        id="home-years"
        label="Years to Purchase"
        value={years}
        min={1}
        max={15}
        step={1}
        onChange={setYears}
        helperMin="1 Year"
        helperMid="5 Years"
        helperMax="15 Years"
      />
      <div className="grid grid-cols-2 gap-4">
        <PercentageInput
          id="home-down-pct"
          label="Down Payment Target (%)"
          value={downPct}
          min={15}
          max={50}
          step={5}
          onChange={setDownPct}
          helperMin="15%"
          helperMax="50%"
        />
        <PercentageInput
          id="home-duty-pct"
          label="Stamp Duty & Registration (%)"
          value={dutyPct}
          min={3}
          max={10}
          step={0.5}
          onChange={setDutyPct}
          helperMin="3%"
          helperMax="10%"
        />
      </div>
      <PercentageInput
        id="home-appreciation"
        label="Assumed Real Estate Appreciation (% p.a.)"
        value={appreciation}
        min={2}
        max={10}
        step={0.5}
        onChange={setAppreciation}
        helperMin="2%"
        helperMid="5%"
        helperMax="10%"
      />
      <PercentageInput
        id="home-sip-rate"
        label="SIP Expected Return (% p.a.)"
        value={expectedReturn}
        min={6}
        max={16}
        step={0.5}
        onChange={setExpectedReturn}
        helperMin="6%"
        helperMid="12%"
        helperMax="16%"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 16. FIRE Calculator View
// ============================================================
export function FIRECalculatorView() {
  const tool = getToolBySlug("fire-calculator")!;
  const [currentAge, setCurrentAge] = useState(30);
  const [fireAge, setFireAge] = useState(45);
  const [monthlyExpense, setMonthlyExpense] = useState(80000);
  const [currentSavings, setCurrentSavings] = useState(2500000);
  const [monthlySavingsCapacity, setMonthlySavingsCapacity] = useState(60000);
  const [swr, setSwr] = useState(3.5);

  const res = calculateFIRE(
    currentAge,
    fireAge,
    monthlyExpense,
    currentSavings,
    monthlySavingsCapacity,
    12,
    8,
    6,
    swr
  );

  const reset = () => {
    setCurrentAge(30);
    setFireAge(45);
    setMonthlyExpense(80000);
    setCurrentSavings(2500000);
    setMonthlySavingsCapacity(60000);
    setSwr(3.5);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Standard FIRE Target Corpus"
              value={res.fireCorpusTarget}
              subValueLabel={`Based on ${swr}% Safe Withdrawal Rate at Age ${fireAge}`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Required Monthly Savings" value={res.requiredMonthlySavings} variant="emerald" />
              <MetricCard
                label="Feasibility Status"
                value={res.isAchievableWithCurrentSavings ? "On Track" : "Savings Gap"}
                isCurrency={false}
                variant={res.isAchievableWithCurrentSavings ? "emerald" : "amber"}
                subtext={
                  res.isAchievableWithCurrentSavings
                    ? `Surplus ₹${(monthlySavingsCapacity - res.requiredMonthlySavings).toLocaleString("en-IN")}/mo`
                    : `Shortfall ₹${(res.requiredMonthlySavings - monthlySavingsCapacity).toLocaleString("en-IN")}/mo`
                }
              />
              <MetricCard label="Lean FIRE (Frugal)" value={res.leanFIRETarget} />
              <MetricCard label="Fat FIRE (Abundant)" value={res.fatFIRETarget} variant="amber" />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Retiring {60 - fireAge} years earlier than conventional age 60 requires funding an extended 35-40 year retirement phase. A conservative {swr}% Safe Withdrawal Rate guards against early sequence-of-returns drawdowns.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Design Your Custom FIRE Roadmap" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "Financial Independence, Retire Early (FIRE) in the Indian Context",
        paragraphs: [
          "The FIRE philosophy centers on aggressive early savings, minimalist living, and disciplined equity compounding to gain complete control over your time decades before conventional retirement.",
          "In India, retiring early requires careful indexation for higher inflation (~6%) and healthcare costs. The classic US '4% Rule' is often calibrated to 3.0% - 3.5% in developing markets to protect multi-decade purchasing power.",
        ],
        takeaways: [
          "Lean FIRE: 75% of current expenses; basic survival without luxury.",
          "Standard FIRE: 100% of current living standard funded perpetually.",
          "Fat FIRE: 130%+ expenses allowing international travel, luxury, and gifting.",
        ],
      }}
      assumptions={[
        "Assumes 6% annual inflation until FIRE age and 3.5% safe withdrawal rate post-FIRE.",
        "Pre-FIRE equity portfolio returns assumed at 12% p.a.; post-FIRE balanced portfolio at 8% p.a.",
      ]}
    >
      <div className="grid grid-cols-2 gap-4">
        <DurationInput
          id="fire-curr-age"
          label="Current Age"
          value={currentAge}
          min={20}
          max={55}
          step={1}
          unit="Yrs"
          onChange={setCurrentAge}
          helperMin="20"
          helperMax="55"
        />
        <DurationInput
          id="fire-target-age"
          label="Desired FIRE Age"
          value={fireAge}
          min={currentAge + 1}
          max={60}
          step={1}
          unit="Yrs"
          onChange={setFireAge}
          helperMin={`${currentAge + 1}`}
          helperMax="60"
        />
      </div>
      <CurrencyInput
        id="fire-expense"
        label="Current Monthly Living Expenses (₹)"
        value={monthlyExpense}
        min={25000}
        max={1000000}
        step={5000}
        sliderMin={25000}
        sliderMax={300000}
        sliderStep={5000}
        onChange={setMonthlyExpense}
        helperMin="₹25,000"
        helperMid="₹1.5 Lakh"
        helperMax="₹3 Lakh"
      />
      <CurrencyInput
        id="fire-savings-cap"
        label="Current Monthly Savings Capacity (₹)"
        value={monthlySavingsCapacity}
        min={5000}
        max={1000000}
        step={5000}
        sliderMin={10000}
        sliderMax={250000}
        sliderStep={5000}
        onChange={setMonthlySavingsCapacity}
        helperMin="₹10,000"
        helperMid="₹1 Lakh"
        helperMax="₹2.5 Lakh"
      />
      <CurrencyInput
        id="fire-existing"
        label="Existing Investable Net Worth (₹)"
        value={currentSavings}
        min={0}
        max={50000000}
        step={100000}
        sliderMin={0}
        sliderMax={15000000}
        sliderStep={250000}
        onChange={setCurrentSavings}
        helperMin="₹0"
        helperMid="₹75 Lakh"
        helperMax="₹1.5 Crore"
      />
      <PercentageInput
        id="fire-swr"
        label="Safe Withdrawal Rate (% p.a.)"
        value={swr}
        min={2.5}
        max={5}
        step={0.25}
        onChange={setSwr}
        helperMin="2.5% (Ultra-Safe)"
        helperMid="3.5% (India Standard)"
        helperMax="5% (Aggressive)"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 17. Inflation & Future Value Calculator View
// ============================================================
export function InflationCalculatorView() {
  const tool = getToolBySlug("inflation-calculator")!;
  const [currentCost, setCurrentCost] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6.5);
  const [years, setYears] = useState(15);

  const res = calculateInflation(currentCost, inflationRate, years);

  const reset = () => {
    setCurrentCost(100000);
    setInflationRate(6.5);
    setYears(15);
  };

  const chartData = res.yearlyData.map((d) => ({
    year: d.year,
    invested: d.purchasingPower,
    value: d.futureCost,
  }));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Future Cost of Same Goods / Services"
              value={res.futureCost}
              subValueLabel={`What costs ₹${currentCost.toLocaleString("en-IN")} today will cost ${formatINR(res.futureCost)} in ${years} years`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Price Increase" value={res.priceIncrease} variant="amber" />
              <MetricCard
                label="Purchasing Power Loss"
                value={`${res.purchasingPowerLossPercent}%`}
                isCurrency={false}
                variant="amber"
              />
              <MetricCard
                label="Future Value of ₹1 Lakh"
                value={res.equivalentPurchasingPower}
                subtext="Purchasing power equivalent"
              />
              <MetricCard
                label="Cost Multiplier"
                value={`${(res.futureCost / Math.max(1, currentCost)).toFixed(2)}×`}
                isCurrency={false}
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              At {inflationRate}% annual inflation, prices double approximately every {Math.round(72 / inflationRate)} years (Rule of 72). Traditional cash savings lose {res.purchasingPowerLossPercent}% of their purchasing power over this window.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Beat Inflation with Equity Growth" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="Inflation Cost Escalation vs Purchasing Power Decay"
          subtitle="Future cost of living (Value curve) vs real worth of fixed nominal cash (Invested line)"
        />
      }
      milestones={
        <MilestoneTable
          title="Inflation Impact Over Time"
          subtitle="Tracking cost escalation and erosion of real value"
          headers={["Year", "Future Cost of Basket", "Real Value of Same Nominal Cash"]}
          rows={res.yearlyData.map((d) => ({
            year: d.year,
            value: d.futureCost,
            customColumns: [
              { key: "cost", value: d.futureCost },
              { key: "power", value: d.purchasingPower },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "Inflation: The Silent Tax on Wealth",
        paragraphs: [
          "Inflation is the sustained increase in the general price level of goods and services. When inflation averages 6.5%, the purchasing power of your money halves every 11 years.",
          "Investing in instruments that fail to beat inflation (such as traditional savings accounts or fixed deposits after 30% tax) guarantees a steady destruction of real wealth.",
        ],
        takeaways: [
          "Always plan future goals in real, inflation-adjusted rupees.",
          "Equities and real assets have historically outpaced inflation over 10+ year horizons.",
        ],
      }}
      assumptions={[
        "Formula: FV = PV * (1 + i)^t.",
        "Assumes steady compound annual inflation rate.",
      ]}
    >
      <CurrencyInput
        id="inf-cost"
        label="Current Cost of Goods / Monthly Expense (₹)"
        value={currentCost}
        min={1000}
        max={10000000}
        step={5000}
        sliderMin={10000}
        sliderMax={500000}
        sliderStep={5000}
        onChange={setCurrentCost}
        helperMin="₹10,000"
        helperMid="₹2.5 Lakh"
        helperMax="₹5 Lakh"
      />
      <PercentageInput
        id="inf-rate"
        label="Assumed Annual Inflation Rate (% p.a.)"
        value={inflationRate}
        min={3}
        max={14}
        step={0.25}
        onChange={setInflationRate}
        helperMin="3% (Low)"
        helperMid="6.5% (India Historical)"
        helperMax="14% (Medical/Education)"
      />
      <DurationInput
        id="inf-years"
        label="Time Horizon (Years)"
        value={years}
        min={1}
        max={40}
        step={1}
        onChange={setYears}
        helperMin="1 Year"
        helperMid="15 Years"
        helperMax="40 Years"
      />
    </CalculatorShell>
  );
}
