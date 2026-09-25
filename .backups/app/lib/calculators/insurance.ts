// ============================================================
// FINREV SOLUTIONS — Category 4: Protection & Insurance Engine
// Life Insurance Need, Human Life Value (HLV), Health Cover
// ============================================================

// ------------------------------------------------------------
// 23. Life Insurance Need Calculator (Expense & Liability Model)
// ------------------------------------------------------------
export interface LifeInsuranceNeedResult {
  livingExpensesSupport: number;
  totalLiabilities: number;
  milestoneEducationMarriageNeeds: number;
  grossInsuranceNeed: number;
  currentLiquidInvestments: number;
  existingLifeCover: number;
  netLifeCoverRecommended: number;
  incomeReplacementMultiplier: number;
}

export function calculateLifeInsuranceNeed(
  annualFamilyLivingExpenses: number,
  yearsOfIncomeSupport: number = 20,
  outstandingLoans: number = 0,
  futureMilestones: number = 0,
  currentLiquidInvestments: number = 0,
  existingTermCover: number = 0
): LifeInsuranceNeedResult {
  const safeExpenses = Math.max(0, annualFamilyLivingExpenses);
  const safeYears = Math.max(1, Math.min(40, yearsOfIncomeSupport));
  const safeLoans = Math.max(0, outstandingLoans);
  const safeMilestones = Math.max(0, futureMilestones);
  const safeInvestments = Math.max(0, currentLiquidInvestments);
  const safeExistingCover = Math.max(0, existingTermCover);

  // Present value of family living support assuming ~2% net real discount rate (inflation vs risk-free)
  const realRate = 0.02;
  const livingExpensesSupport = Math.round(
    safeExpenses * ((1 - Math.pow(1 + realRate, -safeYears)) / realRate)
  );

  const grossInsuranceNeed = livingExpensesSupport + safeLoans + safeMilestones;
  const netLifeCoverRecommended = Math.max(
    0,
    grossInsuranceNeed - safeInvestments - safeExistingCover
  );
  const incomeReplacementMultiplier =
    safeExpenses > 0 ? Number((netLifeCoverRecommended / safeExpenses).toFixed(1)) : 0;

  return {
    livingExpensesSupport,
    totalLiabilities: safeLoans,
    milestoneEducationMarriageNeeds: safeMilestones,
    grossInsuranceNeed,
    currentLiquidInvestments: safeInvestments,
    existingLifeCover: safeExistingCover,
    netLifeCoverRecommended,
    incomeReplacementMultiplier,
  };
}

// ------------------------------------------------------------
// 24. Human Life Value (HLV) Calculator
// ------------------------------------------------------------
export interface HLVResult {
  currentAge: number;
  retirementAge: number;
  workingYearsRemaining: number;
  annualEarnings: number;
  personalConsumptionExpense: number;
  netEconomicSurplusToFamily: number;
  humanLifeValue: number;
  multipleOfCurrentIncome: number;
  yearlySchedule: Array<{
    age: number;
    projectedIncome: number;
    presentValueOfContribution: number;
  }>;
}

export function calculateHumanLifeValue(
  annualGrossIncome: number,
  currentAge: number,
  retirementAge: number = 60,
  personalConsumptionPercent: number = 30,
  expectedIncomeGrowthRatePercent: number = 6,
  discountRatePercent: number = 8
): HLVResult {
  const safeIncome = Math.max(0, annualGrossIncome);
  const safeAge = Math.max(18, Math.min(75, currentAge));
  const safeRetirement = Math.max(safeAge + 1, Math.min(80, retirementAge));
  const workingYears = safeRetirement - safeAge;
  const safePersonalPct = Math.max(10, Math.min(80, personalConsumptionPercent)) / 100;
  const g = Math.max(0, expectedIncomeGrowthRatePercent) / 100;
  const r = Math.max(1, discountRatePercent) / 100;

  const personalConsumptionExpense = Math.round(safeIncome * safePersonalPct);
  const netEconomicSurplus = safeIncome - personalConsumptionExpense;

  let totalHLV = 0;
  const yearlySchedule: HLVResult["yearlySchedule"] = [];

  for (let t = 1; t <= workingYears; t++) {
    const projectedIncome = safeIncome * Math.pow(1 + g, t - 1);
    const familyContribution = projectedIncome * (1 - safePersonalPct);
    const pv = familyContribution / Math.pow(1 + r, t);
    totalHLV += pv;

    if (t <= 5 || t % 5 === 0 || t === workingYears) {
      yearlySchedule.push({
        age: safeAge + t,
        projectedIncome: Math.round(projectedIncome),
        presentValueOfContribution: Math.round(pv),
      });
    }
  }

  const roundedHLV = Math.round(totalHLV);
  const multipleOfCurrentIncome =
    safeIncome > 0 ? Number((roundedHLV / safeIncome).toFixed(1)) : 0;

  return {
    currentAge: safeAge,
    retirementAge: safeRetirement,
    workingYearsRemaining: workingYears,
    annualEarnings: safeIncome,
    personalConsumptionExpense,
    netEconomicSurplusToFamily: netEconomicSurplus,
    humanLifeValue: roundedHLV,
    multipleOfCurrentIncome,
    yearlySchedule,
  };
}

// ------------------------------------------------------------
// 25. Health Insurance Coverage Calculator
// ------------------------------------------------------------
export interface HealthInsuranceResult {
  recommendedBaseSumInsured: number;
  recommendedSuperTopUp: number;
  totalRecommendedCover: number;
  existingEmployerCover: number;
  protectionShortfall: number;
  dailyHospitalRoomRentEstimate: number;
  tierRationale: string;
}

export function calculateHealthInsuranceNeed(
  cityTier: "tier1" | "tier2" | "tier3" = "tier1",
  numberOfAdults: number = 2,
  numberOfChildren: number = 1,
  eldestMemberAge: number = 35,
  hasElderlyParents: boolean = false,
  existingCorporateCover: number = 500000
): HealthInsuranceResult {
  const safeAdults = Math.max(1, numberOfAdults);
  const safeChildren = Math.max(0, numberOfChildren);
  const safeAge = Math.max(18, eldestMemberAge);
  const safeCorp = Math.max(0, existingCorporateCover);

  // Baseline base sum insured based on geography and family size
  let baseSum = 1000000; // 10 Lakhs default
  let roomRent = 7000;

  if (cityTier === "tier1") {
    baseSum = safeAdults > 2 || safeChildren >= 2 ? 1500000 : 1000000;
    roomRent = 10000;
  } else if (cityTier === "tier2") {
    baseSum = 1000000;
    roomRent = 6000;
  } else {
    baseSum = 750000;
    roomRent = 4000;
  }

  // If age > 45 or elderly parents included, increase base
  if (safeAge > 45 || hasElderlyParents) {
    baseSum = Math.max(baseSum, 1500000);
  }

  // Cost-effective Super Top-up recommendation
  const superTopUp = 2500000; // 25 Lakhs super top-up with deductible equal to baseSum
  const totalRecommendedCover = baseSum + superTopUp;
  const protectionShortfall = Math.max(0, totalRecommendedCover - safeCorp);

  const rationales = {
    tier1:
      "Metropolitan healthcare inflation runs at 12-14% p.a. Multi-specialty tertiary care for critical conditions warrants a base ₹10-15L cover combined with a ₹25L+ Super Top-Up.",
    tier2:
      "Tier-2 healthcare infrastructure costs have accelerated significantly. A solid ₹10L base cover safeguards against quality hospitalization without out-of-pocket room rent deductions.",
    tier3:
      "Regional healthcare access requires local coverage backed by portability for major surgeries in nearby Tier-1 medical centers.",
  };

  return {
    recommendedBaseSumInsured: baseSum,
    recommendedSuperTopUp: superTopUp,
    totalRecommendedCover,
    existingEmployerCover: safeCorp,
    protectionShortfall,
    dailyHospitalRoomRentEstimate: roomRent,
    tierRationale: rationales[cityTier],
  };
}
