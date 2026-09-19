"use client";

import React, { useState } from "react";
import { CalculatorShell } from "../CalculatorShell";
import { CurrencyInput, PercentageInput, DurationInput, SelectInput } from "../Inputs";
import { PrimaryResultCard, MetricCard } from "../Results";
import { MilestoneTable } from "../MilestoneTable";
import { CalculatorActions, CalculatorCTA } from "../Panels";
import { getToolBySlug } from "@/lib/tools-registry";
import {
  calculateLifeInsuranceNeed,
  calculateHumanLifeValue,
  calculateHealthInsuranceNeed,
} from "@/lib/calculators/insurance";
import { formatExactINR, formatINR } from "@/lib/calculators/formatters";

// ============================================================
// 23. Life Insurance Need Calculator View
// ============================================================
export function LifeInsuranceNeedCalculatorView() {
  const tool = getToolBySlug("life-insurance-need-calculator")!;
  const [familyExpenses, setFamilyExpenses] = useState(1200000);
  const [supportYears, setSupportYears] = useState(20);
  const [loans, setLoans] = useState(4500000);
  const [milestones, setMilestones] = useState(3000000);
  const [existingInvestments, setExistingInvestments] = useState(2500000);
  const [existingCover, setExistingCover] = useState(5000000);

  const res = calculateLifeInsuranceNeed(
    familyExpenses,
    supportYears,
    loans,
    milestones,
    existingInvestments,
    existingCover
  );

  const reset = () => {
    setFamilyExpenses(1200000);
    setSupportYears(20);
    setLoans(4500000);
    setMilestones(3000000);
    setExistingInvestments(2500000);
    setExistingCover(5000000);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Recommended Pure Term Insurance Cover"
              value={res.netLifeCoverRecommended}
              subValueLabel={`Guarantees family income replacement, loan payoff, and milestone goals`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Gross Insurance Need" value={res.grossInsuranceNeed} variant="amber" />
              <MetricCard label="Family Living Support PV" value={res.livingExpensesSupport} />
              <MetricCard label="Debts to Retire" value={res.totalLiabilities} />
              <MetricCard
                label="Coverage Multiplier"
                value={`${res.incomeReplacementMultiplier}×`}
                isCurrency={false}
                subtext="Multiples of annual living expense"
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {res.netLifeCoverRecommended > 0
                ? `You have an unhedged family risk gap of ${formatExactINR(res.netLifeCoverRecommended)}. A pure term plan provides this large sum assured at minimal annual premium.`
                : "Your existing term life cover and liquid investments adequately protect your family's future lifestyle."}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Secure a Tailored Term Insurance Policy" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "The Income Replacement Method: Why Traditional Insurance Falls Short",
        paragraphs: [
          "Traditional endowment policies and ULIPs offer meager sum assureds (rarely exceeding 10x annual premium), leaving families critically underinsured.",
          "The income replacement method guarantees that in the event of an untimely demise, the insurance proceeds can be placed in conservative debt instruments to generate an inflation-protected monthly pension for dependents, while retiring all liabilities immediately.",
        ],
        takeaways: [
          "Keep insurance and investment strictly separate: buy pure Term Insurance and invest the difference in Mutual Funds.",
          "Target a sum assured equal to at least 15 to 20 times your annual family living expenses.",
        ],
      }}
      assumptions={[
        "Calculated using present value of family living support at a net 2% real discount rate.",
        "Deducts existing liquid savings and active life cover from gross need.",
      ]}
    >
      <CurrencyInput
        id="term-expense"
        label="Annual Family Living Expenses (₹/yr)"
        value={familyExpenses}
        min={300000}
        max={20000000}
        step={50000}
        sliderMin={500000}
        sliderMax={5000000}
        sliderStep={100000}
        onChange={setFamilyExpenses}
        helperMin="₹5 Lakh/yr"
        helperMid="₹25 Lakh/yr"
        helperMax="₹50 Lakh/yr"
      />
      <DurationInput
        id="term-years"
        label="Years of Support Needed (Until Dependents Independent)"
        value={supportYears}
        min={5}
        max={35}
        step={1}
        onChange={setSupportYears}
        helperMin="5 Years"
        helperMid="20 Years"
        helperMax="35 Years"
      />
      <CurrencyInput
        id="term-loans"
        label="Outstanding Debts & Mortgages to Settle (₹)"
        value={loans}
        min={0}
        max={50000000}
        step={100000}
        sliderMin={0}
        sliderMax={15000000}
        sliderStep={250000}
        onChange={setLoans}
        helperMin="₹0"
        helperMid="₹75 Lakh"
        helperMax="₹1.5 Crore"
      />
      <CurrencyInput
        id="term-milestones"
        label="Future Milestone Goals (Child Education/Wedding) (₹)"
        value={milestones}
        min={0}
        max={30000000}
        step={100000}
        sliderMin={0}
        sliderMax={10000000}
        sliderStep={200000}
        onChange={setMilestones}
        helperMin="₹0"
        helperMid="₹50 Lakh"
        helperMax="₹1 Crore"
      />
      <CurrencyInput
        id="term-existing-cov"
        label="Existing Active Term Life Insurance Cover (₹)"
        value={existingCover}
        min={0}
        max={50000000}
        step={250000}
        sliderMin={0}
        sliderMax={20000000}
        sliderStep={500000}
        onChange={setExistingCover}
        helperMin="₹0"
        helperMid="₹1 Crore"
        helperMax="₹2 Crore"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 24. Human Life Value (HLV) Calculator View
// ============================================================
export function HumanLifeValueCalculatorView() {
  const tool = getToolBySlug("human-life-value-calculator")!;
  const [annualIncome, setAnnualIncome] = useState(2500000);
  const [currentAge, setCurrentAge] = useState(32);
  const [retirementAge, setRetirementAge] = useState(60);
  const [personalExpensePct, setPersonalExpensePct] = useState(30);
  const [incomeGrowthRate, setIncomeGrowthRate] = useState(7);
  const [discountRate, setDiscountRate] = useState(8);

  const res = calculateHumanLifeValue(
    annualIncome,
    currentAge,
    retirementAge,
    personalExpensePct,
    incomeGrowthRate,
    discountRate
  );

  const reset = () => {
    setAnnualIncome(2500000);
    setCurrentAge(32);
    setRetirementAge(60);
    setPersonalExpensePct(30);
    setIncomeGrowthRate(7);
    setDiscountRate(8);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Capitalized Human Life Value (HLV)"
              value={res.humanLifeValue}
              subValueLabel={`Present discounted economic value of future lifetime earnings`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard
                label="Income Multiplier"
                value={`${res.multipleOfCurrentIncome}×`}
                isCurrency={false}
                variant="emerald"
                subtext="Multiples of current annual income"
              />
              <MetricCard label="Annual Surplus to Family" value={res.netEconomicSurplusToFamily} />
              <MetricCard
                label="Years of Earnings Remaining"
                value={`${res.workingYearsRemaining} Years`}
                isCurrency={false}
              />
              <MetricCard label="Personal Consumption" value={res.personalConsumptionExpense} />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Your economic value to your dependents over your remaining {res.workingYearsRemaining} working years is approximately {formatINR(res.humanLifeValue)}. This serves as the scientific upper bound for your total life insurance sum assured.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Protect Your Human Life Value" />
          </div>
        </>
      }
      milestones={
        <MilestoneTable
          title="HLV Projected Earnings Stream"
          subtitle="Projected annual income with increments vs discounted present value"
          headers={["Age Milestone", "Projected Annual Gross", "Present Value of Family Contribution"]}
          rows={res.yearlySchedule.map((d) => ({
            year: d.age,
            label: `Age ${d.age}`,
            value: d.presentValueOfContribution,
            customColumns: [
              { key: "gross", value: d.projectedIncome },
              { key: "pv", value: d.presentValueOfContribution },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "Actuarial Science of Human Life Value (HLV)",
        paragraphs: [
          "Coined by Professor Solomon S. Huebner of the Wharton School, Human Life Value quantifies an individual's economic worth to their dependents in financial terms.",
          "It calculates the discounted present value of the surplus income an individual will generate over their remaining working lifetime, after deducting their personal living and consumption expenses.",
        ],
        takeaways: [
          "Provides an objective, mathematically rigorous cap on term insurance cover.",
          "Underwriters at major insurers evaluate HLV before approving large sum assured policies (₹2 Cr+).",
        ],
      }}
      assumptions={[
        "Formula computes discounted cash flows of annual income after deducting personal consumption.",
        "Discount rate reflects prevailing sovereign G-Sec yield plus inflation expectations.",
      ]}
    >
      <CurrencyInput
        id="hlv-income"
        label="Annual Gross CTC / Professional Earnings (₹)"
        value={annualIncome}
        min={300000}
        max={50000000}
        step={50000}
        sliderMin={500000}
        sliderMax={10000000}
        sliderStep={100000}
        onChange={setAnnualIncome}
        helperMin="₹5 Lakh"
        helperMid="₹50 Lakh"
        helperMax="₹1 Crore"
      />
      <div className="grid grid-cols-2 gap-4">
        <DurationInput
          id="hlv-age"
          label="Current Age"
          value={currentAge}
          min={21}
          max={60}
          step={1}
          unit="Yrs"
          onChange={setCurrentAge}
          helperMin="21"
          helperMax="60"
        />
        <DurationInput
          id="hlv-retire"
          label="Planned Retirement Age"
          value={retirementAge}
          min={currentAge + 1}
          max={70}
          step={1}
          unit="Yrs"
          onChange={setRetirementAge}
          helperMin={`${currentAge + 1}`}
          helperMax="70"
        />
      </div>
      <PercentageInput
        id="hlv-personal"
        label="Personal Living & Consumption (%)"
        value={personalExpensePct}
        min={15}
        max={60}
        step={5}
        onChange={setPersonalExpensePct}
        helperMin="15%"
        helperMid="30% (Standard)"
        helperMax="60%"
      />
      <PercentageInput
        id="hlv-growth"
        label="Expected Annual Income Growth (% p.a.)"
        value={incomeGrowthRate}
        min={3}
        max={15}
        step={0.5}
        onChange={setIncomeGrowthRate}
        helperMin="3%"
        helperMid="7%"
        helperMax="15%"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 25. Health Insurance Calculator View
// ============================================================
export function HealthInsuranceCalculatorView() {
  const tool = getToolBySlug("health-insurance-calculator")!;
  const [cityTier, setCityTier] = useState<"tier1" | "tier2" | "tier3">("tier1");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [eldestAge, setEldestAge] = useState(36);
  const [hasElderly, setHasElderly] = useState(false);
  const [corporateCover, setCorporateCover] = useState(500000);

  const res = calculateHealthInsuranceNeed(
    cityTier,
    adults,
    children,
    eldestAge,
    hasElderly,
    corporateCover
  );

  const reset = () => {
    setCityTier("tier1");
    setAdults(2);
    setChildren(1);
    setEldestAge(36);
    setHasElderly(false);
    setCorporateCover(500000);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Recommended Total Health Cover Structure"
              value={res.totalRecommendedCover}
              subValueLabel={`Base ₹${(res.recommendedBaseSumInsured / 100000).toFixed(0)}L + Super Top-Up ₹${(res.recommendedSuperTopUp / 100000).toFixed(0)}L`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Recommended Base Cover" value={res.recommendedBaseSumInsured} variant="emerald" />
              <MetricCard label="Super Top-Up Buffer" value={res.recommendedSuperTopUp} />
              <MetricCard label="Protection Shortfall" value={res.protectionShortfall} variant="amber" />
              <MetricCard label="Est. Daily Room Rent" value={res.dailyHospitalRoomRentEstimate} />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {res.tierRationale}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Structure a 2-Tier Health Shield" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "Medical Inflation at 14%: The Strategy of Base + Super Top-Up",
        paragraphs: [
          "Relying solely on corporate employer health insurance is dangerous: coverage ceases immediately upon job transition or retirement, precisely when pre-existing conditions make obtaining private cover difficult.",
          "A cost-efficient modern healthcare shield pairs an individual ₹10 Lakh Base Cover (with NO room rent capping) with a ₹25 Lakh Super Top-Up policy. This delivers institutional ₹35 Lakh coverage at a fraction of standard premium costs.",
        ],
        takeaways: [
          "Ensure policies have ZERO room-rent sub-limits to prevent proportionate claim deductions.",
          "Purchase personal private cover while young and healthy before medical histories emerge.",
        ],
      }}
      assumptions={[
        "Calibrated against multi-specialty tertiary care costs in Indian metro and non-metro healthcare hubs.",
      ]}
    >
      <SelectInput
        id="health-tier"
        label="Primary City of Residence"
        value={cityTier}
        options={[
          { value: "tier1", label: "Tier 1 Metro (Mumbai, Delhi-NCR, Bengaluru, Chennai, Hyderabad, Kolkata)" },
          { value: "tier2", label: "Tier 2 Urban (Pune, Ahmedabad, Jaipur, Chandigarh, Lucknow, etc.)" },
          { value: "tier3", label: "Tier 3 & Regional Cities" },
        ]}
        onChange={(val) => setCityTier(val as "tier1" | "tier2" | "tier3")}
      />
      <div className="grid grid-cols-2 gap-4">
        <DurationInput
          id="health-adults"
          label="Adults Covered"
          value={adults}
          min={1}
          max={4}
          step={1}
          unit="Adults"
          onChange={setAdults}
          helperMin="1"
          helperMax="4"
        />
        <DurationInput
          id="health-kids"
          label="Children Covered"
          value={children}
          min={0}
          max={4}
          step={1}
          unit="Kids"
          onChange={setChildren}
          helperMin="0"
          helperMax="4"
        />
      </div>
      <DurationInput
        id="health-age"
        label="Eldest Family Member Age"
        value={eldestAge}
        min={18}
        max={75}
        step={1}
        unit="Yrs"
        onChange={setEldestAge}
        helperMin="18"
        helperMax="75"
      />
      <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)]">
        <div>
          <span className="text-xs font-bold text-[var(--color-text-primary)] block">
            Include Senior Citizen Parents (Age 60+)?
          </span>
          <span className="text-[11px] text-[var(--color-text-muted)]">
            Warrants separate dedicated policy to prevent premium loading
          </span>
        </div>
        <button
          type="button"
          onClick={() => setHasElderly(!hasElderly)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
            hasElderly
              ? "bg-[var(--color-secondary)] text-white"
              : "bg-white border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]"
          }`}
        >
          {hasElderly ? "Yes, Parents Included" : "No (Separate Policy)"}
        </button>
      </div>
      <CurrencyInput
        id="health-corp"
        label="Existing Employer / Corporate Health Cover (₹)"
        value={corporateCover}
        min={0}
        max={2000000}
        step={50000}
        sliderMin={0}
        sliderMax={1500000}
        sliderStep={50000}
        onChange={setCorporateCover}
        helperMin="₹0"
        helperMid="₹5 Lakh"
        helperMax="₹15 Lakh"
      />
    </CalculatorShell>
  );
}
