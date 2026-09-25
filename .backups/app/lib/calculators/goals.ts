// ============================================================
// FINREV SOLUTIONS — Category 2: Goal Planning Engine
// Goal SIP, Child Education, Marriage, Dream Home, Inflation
// Purely illustrative models per SEBI/AMFI compliance.
// ============================================================

import { calculateSIP, YearlyProgression } from "./investment";

// ------------------------------------------------------------
// 11. Goal Planner (Reverse SIP)
// ------------------------------------------------------------
export interface GoalResult {
  targetCorpus: number;
  expectedReturn: number;
  yearsToGoal: number;
  requiredMonthlySIP: number;
  totalInvested: number;
  compoundingShield: number;
  estimatedGain: number;
  compoundingContributionPercent: number;
  yearlyData: YearlyProgression[];
}

export function calculateGoalSIP(
  targetCorpus: number,
  expectedReturn: number,
  yearsToGoal: number
): GoalResult {
  const safeTarget = Math.max(0, targetCorpus);
  const safeRate = Math.max(0.1, expectedReturn);
  const safeYears = Math.max(1, Math.min(40, yearsToGoal));

  const i = safeRate / 100 / 12;
  const n = safeYears * 12;

  // FV = PMT * [ ((1+i)^n - 1)/i ] * (1+i)
  // PMT = FV / ( [ ((1+i)^n - 1)/i ] * (1+i) )
  const annuityFactor = ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const requiredMonthlySIP = annuityFactor > 0 ? Math.round(safeTarget / annuityFactor) : 0;
  const totalInvested = requiredMonthlySIP * n;
  const compoundingShield = Math.max(0, safeTarget - totalInvested);
  const compoundingContributionPercent =
    safeTarget > 0 ? Math.round((compoundingShield / safeTarget) * 100) : 0;

  const sipSim = calculateSIP(requiredMonthlySIP, safeRate, safeYears);

  return {
    targetCorpus: safeTarget,
    expectedReturn: safeRate,
    yearsToGoal: safeYears,
    requiredMonthlySIP,
    totalInvested,
    compoundingShield,
    estimatedGain: compoundingShield,
    compoundingContributionPercent,
    yearlyData: sipSim.yearlyData,
  };
}

// ------------------------------------------------------------
// 12. Child Education Goal Calculator
// ------------------------------------------------------------
export interface ChildEducationResult {
  currentCost: number;
  childAge: number;
  collegeAge: number;
  yearsToCollege: number;
  educationInflation: number;
  futureCost: number;
  existingSavings: number;
  futureValueOfExistingSavings: number;
  netShortfall: number;
  requiredMonthlySIP: number;
  totalInvested: number;
  growthContribution: number;
}

export function calculateChildEducation(
  currentCost: number,
  childCurrentAge: number,
  collegeAge: number = 18,
  educationInflationPercent: number = 10,
  expectedReturnPercent: number = 12,
  existingSavings: number = 0
): ChildEducationResult {
  const safeCost = Math.max(0, currentCost);
  const safeChildAge = Math.max(0, Math.min(25, childCurrentAge));
  const safeCollegeAge = Math.max(safeChildAge + 1, collegeAge);
  const yearsToCollege = safeCollegeAge - safeChildAge;
  const safeInflation = Math.max(0, educationInflationPercent) / 100;
  const safeReturn = Math.max(1, expectedReturnPercent);
  const safeExisting = Math.max(0, existingSavings);

  // Future education cost inflated
  const futureCost = Math.round(safeCost * Math.pow(1 + safeInflation, yearsToCollege));

  // Growth of existing savings
  const fvExisting = Math.round(safeExisting * Math.pow(1 + safeReturn / 100, yearsToCollege));
  const netShortfall = Math.max(0, futureCost - fvExisting);

  // Goal SIP for net shortfall
  const goal = calculateGoalSIP(netShortfall, safeReturn, yearsToCollege);

  return {
    currentCost: safeCost,
    childAge: safeChildAge,
    collegeAge: safeCollegeAge,
    yearsToCollege,
    educationInflation: educationInflationPercent,
    futureCost,
    existingSavings: safeExisting,
    futureValueOfExistingSavings: fvExisting,
    netShortfall,
    requiredMonthlySIP: goal.requiredMonthlySIP,
    totalInvested: goal.totalInvested,
    growthContribution: goal.compoundingShield,
  };
}

// ------------------------------------------------------------
// 13. Marriage Goal Calculator
// ------------------------------------------------------------
export interface MarriageGoalResult {
  currentBudget: number;
  yearsToMarriage: number;
  inflationRate: number;
  futureCost: number;
  existingSavings: number;
  netGoalCorpus: number;
  requiredMonthlySIP: number;
  totalInvested: number;
  estimatedGains: number;
}

export function calculateMarriageGoal(
  currentBudget: number,
  yearsToMarriage: number,
  inflationPercent: number = 7,
  expectedReturnPercent: number = 12,
  existingSavings: number = 0
): MarriageGoalResult {
  const safeBudget = Math.max(0, currentBudget);
  const safeYears = Math.max(1, Math.min(30, yearsToMarriage));
  const safeInflation = Math.max(0, inflationPercent) / 100;
  const safeReturn = Math.max(1, expectedReturnPercent);
  const safeExisting = Math.max(0, existingSavings);

  const futureCost = Math.round(safeBudget * Math.pow(1 + safeInflation, safeYears));
  const fvExisting = Math.round(safeExisting * Math.pow(1 + safeReturn / 100, safeYears));
  const netGoalCorpus = Math.max(0, futureCost - fvExisting);

  const goal = calculateGoalSIP(netGoalCorpus, safeReturn, safeYears);

  return {
    currentBudget: safeBudget,
    yearsToMarriage: safeYears,
    inflationRate: inflationPercent,
    futureCost,
    existingSavings: safeExisting,
    netGoalCorpus,
    requiredMonthlySIP: goal.requiredMonthlySIP,
    totalInvested: goal.totalInvested,
    estimatedGains: goal.compoundingShield,
  };
}

// ------------------------------------------------------------
// 14. Dream Home Goal Calculator
// ------------------------------------------------------------
export interface DreamHomeResult {
  propertyValue: number;
  yearsToPurchase: number;
  downPaymentPercent: number;
  stampDutyPercent: number;
  downPaymentAmount: number;
  stampDutyAndRegistration: number;
  totalUpfrontCashNeeded: number;
  futureUpfrontCashNeeded: number;
  requiredMonthlySIP: number;
  projectedLoanAmount: number;
  projectedMonthlyEMI: number;
  totalSIPInvested: number;
}

export function calculateDreamHome(
  propertyValue: number,
  yearsToPurchase: number,
  downPaymentPercent: number = 20,
  stampDutyPercent: number = 7,
  expectedReturnPercent: number = 12,
  propertyAppreciationPercent: number = 5,
  loanInterestRatePercent: number = 8.5,
  loanTenureYears: number = 20
): DreamHomeResult {
  const safePropVal = Math.max(0, propertyValue);
  const safeYears = Math.max(1, Math.min(25, yearsToPurchase));
  const safeDownPct = Math.max(10, Math.min(90, downPaymentPercent));
  const safeDutyPct = Math.max(0, Math.min(15, stampDutyPercent));
  const safeReturn = Math.max(1, expectedReturnPercent);
  const safePropGrowth = Math.max(0, propertyAppreciationPercent) / 100;

  // Future property value after appreciation
  const futurePropertyValue = Math.round(safePropVal * Math.pow(1 + safePropGrowth, safeYears));

  const downPaymentAmount = Math.round(futurePropertyValue * (safeDownPct / 100));
  const stampDutyAndRegistration = Math.round(futurePropertyValue * (safeDutyPct / 100));
  const futureUpfrontCashNeeded = downPaymentAmount + stampDutyAndRegistration;

  const currentDownPayment = Math.round(safePropVal * (safeDownPct / 100));
  const currentStampDuty = Math.round(safePropVal * (safeDutyPct / 100));
  const totalUpfrontCashNeeded = currentDownPayment + currentStampDuty;

  // SIP to accumulate upfront down payment
  const goal = calculateGoalSIP(futureUpfrontCashNeeded, safeReturn, safeYears);

  // Projected loan
  const projectedLoanAmount = futurePropertyValue - downPaymentAmount;
  const monthlyLoanRate = loanInterestRatePercent / 100 / 12;
  const loanMonths = loanTenureYears * 12;
  let projectedMonthlyEMI = 0;
  if (monthlyLoanRate > 0 && loanMonths > 0) {
    projectedMonthlyEMI = Math.round(
      (projectedLoanAmount * monthlyLoanRate * Math.pow(1 + monthlyLoanRate, loanMonths)) /
        (Math.pow(1 + monthlyLoanRate, loanMonths) - 1)
    );
  }

  return {
    propertyValue: safePropVal,
    yearsToPurchase: safeYears,
    downPaymentPercent: safeDownPct,
    stampDutyPercent: safeDutyPct,
    downPaymentAmount,
    stampDutyAndRegistration,
    totalUpfrontCashNeeded,
    futureUpfrontCashNeeded,
    requiredMonthlySIP: goal.requiredMonthlySIP,
    projectedLoanAmount,
    projectedMonthlyEMI,
    totalSIPInvested: goal.totalInvested,
  };
}

// ------------------------------------------------------------
// 15. Inflation / Future Value Calculator
// ------------------------------------------------------------
export interface InflationResult {
  currentCost: number;
  inflationRate: number;
  years: number;
  futureCost: number;
  priceIncrease: number;
  purchasingPowerLossPercent: number;
  equivalentPurchasingPower: number;
  yearlyData: Array<{
    year: number;
    futureCost: number;
    purchasingPower: number;
  }>;
}

export function calculateInflation(
  currentCost: number,
  inflationPercent: number,
  years: number
): InflationResult {
  const safeCost = Math.max(0, currentCost);
  const safeRate = Math.max(0, inflationPercent);
  const safeYears = Math.max(1, Math.min(50, years));

  const i = safeRate / 100;
  const futureCost = Math.round(safeCost * Math.pow(1 + i, safeYears));
  const priceIncrease = Math.max(0, futureCost - safeCost);

  // Real purchasing power of same nominal amount in the future
  const equivalentPurchasingPower = Math.round(safeCost / Math.pow(1 + i, safeYears));
  const purchasingPowerLossPercent =
    safeCost > 0
      ? Number((((safeCost - equivalentPurchasingPower) / safeCost) * 100).toFixed(1))
      : 0;

  const yearlyData: InflationResult["yearlyData"] = [];
  for (let y = 1; y <= safeYears; y++) {
    const fCost = Math.round(safeCost * Math.pow(1 + i, y));
    const pPower = Math.round(safeCost / Math.pow(1 + i, y));
    yearlyData.push({
      year: y,
      futureCost: fCost,
      purchasingPower: pPower,
    });
  }

  return {
    currentCost: safeCost,
    inflationRate: safeRate,
    years: safeYears,
    futureCost,
    priceIncrease,
    purchasingPowerLossPercent,
    equivalentPurchasingPower,
    yearlyData,
  };
}
