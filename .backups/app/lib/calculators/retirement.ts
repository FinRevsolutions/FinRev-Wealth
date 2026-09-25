// ============================================================
// FINREV SOLUTIONS — Retirement & FIRE Planning Engine
// Inflation-indexed corpus, annuity factors & Safe Withdrawal Rates
// ============================================================

import { calculateGoalSIP } from "./goals";

// ------------------------------------------------------------
// 12 / Category 2. Retirement Calculator
// ------------------------------------------------------------
export interface RetirementResult {
  yearsToRetire: number;
  retirementDurationYears: number;
  futureMonthlyExpense: number;
  futureAnnualExpense: number;
  requiredRetirementCorpus: number;
  requiredMonthlySIP: number;
  totalSIPInvested: number;
  compoundingShieldPercent: number;
  yearlySchedule: Array<{
    age: number;
    year: number;
    corpusAccumulated: number;
    annualExpense: number;
  }>;
}

export function calculateRetirementCorpus(
  currentAge: number,
  retirementAge: number,
  lifeExpectancy: number,
  currentMonthlyExpense: number,
  inflationRate: number,
  preRetirementReturn: number,
  postRetirementReturn: number,
  existingSavings: number = 0
): RetirementResult {
  const safeCurrentAge = Math.max(18, Math.min(75, currentAge));
  const safeRetirementAge = Math.max(safeCurrentAge + 1, Math.min(80, retirementAge));
  const safeLifeExp = Math.max(safeRetirementAge + 1, Math.min(100, lifeExpectancy));
  const safeExpense = Math.max(1000, currentMonthlyExpense);
  const safeInflation = Math.max(0, inflationRate) / 100;
  const safePreReturn = Math.max(1, preRetirementReturn);
  const safePostReturn = Math.max(0.1, postRetirementReturn);

  const yearsToRetire = safeRetirementAge - safeCurrentAge;
  const retirementDurationYears = safeLifeExp - safeRetirementAge;

  // Future monthly & annual expense at retirement
  const futureMonthlyExpense = Math.round(
    safeExpense * Math.pow(1 + safeInflation, yearsToRetire)
  );
  const futureAnnualExpense = futureMonthlyExpense * 12;

  // Real rate of return post-retirement
  const realRate = (1 + safePostReturn / 100) / (1 + safeInflation) - 1;

  // Present Value of Annuity formula
  let requiredRetirementCorpus = 0;
  if (Math.abs(realRate) < 0.0001) {
    requiredRetirementCorpus = futureAnnualExpense * retirementDurationYears;
  } else {
    requiredRetirementCorpus = Math.round(
      futureAnnualExpense *
        ((1 - Math.pow(1 + realRate, -retirementDurationYears)) / realRate)
    );
  }

  // Factor existing savings grown to retirement
  const fvExisting = Math.round(
    Math.max(0, existingSavings) * Math.pow(1 + safePreReturn / 100, yearsToRetire)
  );
  const netCorpusNeeded = Math.max(0, requiredRetirementCorpus - fvExisting);

  // Pre-retirement monthly SIP to accumulate net corpus
  const goalSIPResult = calculateGoalSIP(
    netCorpusNeeded,
    safePreReturn,
    yearsToRetire
  );

  // Yearly milestones
  const yearlySchedule: RetirementResult["yearlySchedule"] = [];
  const monthlyRate = safePreReturn / 100 / 12;
  let cumCorpus = fvExisting > 0 ? existingSavings : 0;
  for (let y = 1; y <= yearsToRetire; y++) {
    for (let m = 1; m <= 12; m++) {
      cumCorpus = (cumCorpus + goalSIPResult.requiredMonthlySIP) * (1 + monthlyRate);
    }
    const age = safeCurrentAge + y;
    yearlySchedule.push({
      age,
      year: y,
      corpusAccumulated: Math.round(cumCorpus),
      annualExpense: Math.round(safeExpense * 12 * Math.pow(1 + safeInflation, y)),
    });
  }

  return {
    yearsToRetire,
    retirementDurationYears,
    futureMonthlyExpense,
    futureAnnualExpense,
    requiredRetirementCorpus,
    requiredMonthlySIP: goalSIPResult.requiredMonthlySIP,
    totalSIPInvested: goalSIPResult.totalInvested,
    compoundingShieldPercent: goalSIPResult.compoundingContributionPercent,
    yearlySchedule,
  };
}

// ------------------------------------------------------------
// 16. Financial Independence / FIRE Calculator
// ------------------------------------------------------------
export interface FIREResult {
  currentAge: number;
  fireAge: number;
  yearsToFIRE: number;
  currentAnnualExpense: number;
  futureAnnualExpenseAtFIRE: number;
  fireCorpusTarget: number;
  leanFIRETarget: number;
  fatFIRETarget: number;
  existingSavingsGrown: number;
  netCorpusShortfall: number;
  requiredMonthlySavings: number;
  safeWithdrawalRatePercent: number;
  isAchievableWithCurrentSavings: boolean;
}

export function calculateFIRE(
  currentAge: number,
  desiredFireAge: number,
  currentMonthlyExpense: number,
  currentSavings: number,
  monthlySavingsCapacity: number,
  preReturnPercent: number = 12,
  postReturnPercent: number = 8,
  inflationPercent: number = 6,
  safeWithdrawalRatePercent: number = 3.5
): FIREResult {
  const safeAge = Math.max(18, Math.min(65, currentAge));
  const safeFireAge = Math.max(safeAge + 1, Math.min(70, desiredFireAge));
  const yearsToFIRE = safeFireAge - safeAge;
  const safeExpense = Math.max(1000, currentMonthlyExpense);
  const safeInflation = Math.max(0, inflationPercent) / 100;
  const safeSWR = Math.max(2.5, Math.min(6, safeWithdrawalRatePercent)) / 100;

  const currentAnnualExpense = safeExpense * 12;
  const futureAnnualExpenseAtFIRE = Math.round(
    currentAnnualExpense * Math.pow(1 + safeInflation, yearsToFIRE)
  );

  // Standard FIRE: 1 / SWR (e.g. 1 / 0.035 = ~28.5x expenses)
  const fireCorpusTarget = Math.round(futureAnnualExpenseAtFIRE / safeSWR);

  // Lean FIRE (75% expenses) & Fat FIRE (130% expenses)
  const leanFIRETarget = Math.round(fireCorpusTarget * 0.75);
  const fatFIRETarget = Math.round(fireCorpusTarget * 1.3);

  // Existing savings future value
  const existingSavingsGrown = Math.round(
    Math.max(0, currentSavings) * Math.pow(1 + preReturnPercent / 100, yearsToFIRE)
  );
  const netCorpusShortfall = Math.max(0, fireCorpusTarget - existingSavingsGrown);

  // Monthly savings needed
  const goal = calculateGoalSIP(netCorpusShortfall, preReturnPercent, yearsToFIRE);
  const requiredMonthlySavings = goal.requiredMonthlySIP;

  const isAchievableWithCurrentSavings =
    monthlySavingsCapacity >= requiredMonthlySavings;

  return {
    currentAge: safeAge,
    fireAge: safeFireAge,
    yearsToFIRE,
    currentAnnualExpense,
    futureAnnualExpenseAtFIRE,
    fireCorpusTarget,
    leanFIRETarget,
    fatFIRETarget,
    existingSavingsGrown,
    netCorpusShortfall,
    requiredMonthlySavings,
    safeWithdrawalRatePercent,
    isAchievableWithCurrentSavings,
  };
}
