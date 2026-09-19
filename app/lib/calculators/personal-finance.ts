// ============================================================
// FINREV SOLUTIONS — Category 3: Personal Finance Engine
// Emergency Fund, Net Worth, Savings Rate, DTI, Asset Allocation
// ============================================================

// ------------------------------------------------------------
// 18. Emergency Fund Calculator
// ------------------------------------------------------------
export interface EmergencyFundResult {
  monthlyExpenses: number;
  recommendedMonths: number;
  targetFund: number;
  existingFund: number;
  shortfallOrSurplus: number;
  status: "insufficient" | "moderate" | "adequate" | "surplus";
  threeMonthsBuffer: number;
  sixMonthsBuffer: number;
  twelveMonthsBuffer: number;
  monthsToReachGoalAtCurrentRate: number;
}

export function calculateEmergencyFund(
  monthlyExpenses: number,
  dependents: number = 0,
  isSelfEmployedOrSingleIncome: boolean = false,
  hasHighEMIs: boolean = false,
  existingLiquidSavings: number = 0,
  monthlySavingsCapacity: number = 10000
): EmergencyFundResult {
  const safeExpenses = Math.max(0, monthlyExpenses);
  const safeExisting = Math.max(0, existingLiquidSavings);
  const safeSavingsCap = Math.max(1000, monthlySavingsCapacity);

  // Buffer criteria:
  // Base = 6 months
  // +2 months if single income / business
  // +1 month per dependent (up to +2)
  // +2 months if EMIs > 40% of income
  let recommendedMonths = 6;
  if (isSelfEmployedOrSingleIncome) recommendedMonths += 3;
  if (dependents > 0) recommendedMonths += Math.min(2, dependents);
  if (hasHighEMIs) recommendedMonths += 2;
  recommendedMonths = Math.min(18, Math.max(3, recommendedMonths));

  const targetFund = safeExpenses * recommendedMonths;
  const shortfallOrSurplus = targetFund - safeExisting;

  let status: EmergencyFundResult["status"] = "adequate";
  const coverageMonths = safeExpenses > 0 ? safeExisting / safeExpenses : 0;
  if (coverageMonths < 3) status = "insufficient";
  else if (coverageMonths < recommendedMonths) status = "moderate";
  else if (coverageMonths > recommendedMonths * 1.5) status = "surplus";
  else status = "adequate";

  const monthsToReachGoal =
    shortfallOrSurplus > 0 ? Math.ceil(shortfallOrSurplus / safeSavingsCap) : 0;

  return {
    monthlyExpenses: safeExpenses,
    recommendedMonths,
    targetFund,
    existingFund: safeExisting,
    shortfallOrSurplus,
    status,
    threeMonthsBuffer: safeExpenses * 3,
    sixMonthsBuffer: safeExpenses * 6,
    twelveMonthsBuffer: safeExpenses * 12,
    monthsToReachGoalAtCurrentRate: monthsToReachGoal,
  };
}

// ------------------------------------------------------------
// 19. Net Worth Calculator
// ------------------------------------------------------------
export interface NetWorthResult {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  debtToAssetRatio: number;
  liquidAssets: number;
  investmentAssets: number;
  physicalAssets: number;
  liquidityRatioPercent: number;
  assetBreakdown: Array<{ category: string; amount: number; percentage: number }>;
}

export function calculateNetWorth(
  assets: {
    cashAndBank?: number;
    mutualFundsAndEquities?: number;
    fixedDepositsAndBonds?: number;
    providentFundAndNPS?: number;
    realEstateValue?: number;
    goldAndPreciousMetals?: number;
    otherAssets?: number;
  },
  liabilities: {
    homeLoan?: number;
    vehicleLoan?: number;
    personalLoan?: number;
    educationLoan?: number;
    creditCardDues?: number;
    otherDebts?: number;
  }
): NetWorthResult {
  const cashAndBank = assets?.cashAndBank || 0;
  const fixedDepositsAndBonds = assets?.fixedDepositsAndBonds || 0;
  const mutualFundsAndEquities = assets?.mutualFundsAndEquities || 0;
  const providentFundAndNPS = assets?.providentFundAndNPS || 0;
  const realEstateValue = assets?.realEstateValue || 0;
  const goldAndPreciousMetals = assets?.goldAndPreciousMetals || 0;
  const otherAssets = assets?.otherAssets || 0;

  const homeLoan = liabilities?.homeLoan || 0;
  const vehicleLoan = liabilities?.vehicleLoan || 0;
  const personalLoan = liabilities?.personalLoan || 0;
  const educationLoan = liabilities?.educationLoan || 0;
  const creditCardDues = liabilities?.creditCardDues || 0;
  const otherDebts = liabilities?.otherDebts || 0;

  const liquid = Math.max(0, cashAndBank) + Math.max(0, fixedDepositsAndBonds);
  const investments = Math.max(0, mutualFundsAndEquities) + Math.max(0, providentFundAndNPS);
  const physical = Math.max(0, realEstateValue) + Math.max(0, goldAndPreciousMetals) + Math.max(0, otherAssets);

  const totalAssets = liquid + investments + physical;
  const totalLiabilities =
    Math.max(0, homeLoan) +
    Math.max(0, vehicleLoan) +
    Math.max(0, personalLoan) +
    Math.max(0, educationLoan) +
    Math.max(0, creditCardDues) +
    Math.max(0, otherDebts);

  const netWorth = totalAssets - totalLiabilities;
  const debtToAssetRatio =
    totalAssets > 0 ? Number(((totalLiabilities / totalAssets) * 100).toFixed(1)) : 0;
  const liquidityRatioPercent =
    totalAssets > 0 ? Number(((liquid / totalAssets) * 100).toFixed(1)) : 0;

  const getPct = (val: number) => (totalAssets > 0 ? Number(((val / totalAssets) * 100).toFixed(1)) : 0);

  const assetBreakdown = [
    { category: "Cash & Liquid", amount: liquid, percentage: getPct(liquid) },
    { category: "Equity & Mutual Funds", amount: Math.max(0, mutualFundsAndEquities), percentage: getPct(mutualFundsAndEquities) },
    { category: "Retirement (EPF/NPS)", amount: Math.max(0, providentFundAndNPS), percentage: getPct(providentFundAndNPS) },
    { category: "Real Estate", amount: Math.max(0, realEstateValue), percentage: getPct(realEstateValue) },
    { category: "Gold & Others", amount: Math.max(0, goldAndPreciousMetals + otherAssets), percentage: getPct(goldAndPreciousMetals + otherAssets) },
  ];

  return {
    totalAssets,
    totalLiabilities,
    netWorth,
    debtToAssetRatio,
    liquidAssets: liquid,
    investmentAssets: investments,
    physicalAssets: physical,
    liquidityRatioPercent,
    assetBreakdown,
  };
}

// ------------------------------------------------------------
// 20. Savings Rate Calculator
// ------------------------------------------------------------
export interface SavingsRateResult {
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlySavings: number;
  savingsRatePercent: number;
  annualSavings: number;
  healthStatus: "exceptional" | "healthy" | "moderate" | "critical";
  yearsToFinancialIndependence: number;
}

export function calculateSavingsRate(
  monthlyTakeHomeIncome: number,
  monthlyExpenses: number
): SavingsRateResult {
  const safeIncome = Math.max(0, monthlyTakeHomeIncome);
  const safeExpenses = Math.max(0, monthlyExpenses);
  const monthlySavings = Math.max(0, safeIncome - safeExpenses);

  const savingsRate =
    safeIncome > 0 ? Number(((monthlySavings / safeIncome) * 100).toFixed(1)) : 0;
  const annualSavings = monthlySavings * 12;

  let healthStatus: SavingsRateResult["healthStatus"] = "healthy";
  if (savingsRate >= 50) healthStatus = "exceptional";
  else if (savingsRate >= 30) healthStatus = "healthy";
  else if (savingsRate >= 15) healthStatus = "moderate";
  else healthStatus = "critical";

  // Approximate years to financial independence using standard 4% SWR & 5% real investment return
  let yearsToFI = 45;
  if (savingsRate >= 70) yearsToFI = 8;
  else if (savingsRate >= 60) yearsToFI = 12;
  else if (savingsRate >= 50) yearsToFI = 17;
  else if (savingsRate >= 40) yearsToFI = 22;
  else if (savingsRate >= 30) yearsToFI = 28;
  else if (savingsRate >= 20) yearsToFI = 37;

  return {
    monthlyIncome: safeIncome,
    monthlyExpenses: safeExpenses,
    monthlySavings,
    savingsRatePercent: savingsRate,
    annualSavings,
    healthStatus,
    yearsToFinancialIndependence: yearsToFI,
  };
}

// ------------------------------------------------------------
// 21. Debt-to-Income (DTI) Ratio Calculator
// ------------------------------------------------------------
export interface DTIResult {
  grossMonthlyIncome: number;
  totalMonthlyDebtPayments: number;
  dtiPercent: number;
  discretionaryIncomeLeft: number;
  riskCategory: "healthy" | "manageable" | "high_risk" | "danger";
  maxRecommendedAdditionalBorrowing: number;
}

export function calculateDTI(
  grossMonthlyIncome: number,
  monthlyHomeLoanEMI: number = 0,
  carLoanEMI: number = 0,
  personalLoanEMI: number = 0,
  creditCardMinimumDue: number = 0,
  otherDebtPayments: number = 0
): DTIResult {
  const safeIncome = Math.max(1, grossMonthlyIncome);
  const totalDebt =
    Math.max(0, monthlyHomeLoanEMI) +
    Math.max(0, carLoanEMI) +
    Math.max(0, personalLoanEMI) +
    Math.max(0, creditCardMinimumDue) +
    Math.max(0, otherDebtPayments);

  const dti = Number(((totalDebt / safeIncome) * 100).toFixed(1));
  const discretionaryLeft = Math.max(0, safeIncome - totalDebt);

  let riskCategory: DTIResult["riskCategory"] = "healthy";
  if (dti <= 30) riskCategory = "healthy";
  else if (dti <= 40) riskCategory = "manageable";
  else if (dti <= 50) riskCategory = "high_risk";
  else riskCategory = "danger";

  // Recommended borrowing ceiling is 40% of income
  const maxSafeDebtCap = safeIncome * 0.4;
  const maxRecommendedAdditionalBorrowing = Math.max(0, Math.round(maxSafeDebtCap - totalDebt));

  return {
    grossMonthlyIncome: safeIncome,
    totalMonthlyDebtPayments: totalDebt,
    dtiPercent: dti,
    discretionaryIncomeLeft: discretionaryLeft,
    riskCategory,
    maxRecommendedAdditionalBorrowing,
  };
}

// ------------------------------------------------------------
// 22. Asset Allocation Calculator
// ------------------------------------------------------------
export interface AssetAllocationResult {
  investableCapital: number;
  recommendedEquityPercent: number;
  recommendedDebtPercent: number;
  recommendedGoldPercent: number;
  recommendedEquityAmount: number;
  recommendedDebtAmount: number;
  recommendedGoldAmount: number;
  riskProfileTitle: string;
  rationale: string;
}

export function calculateAssetAllocation(
  age: number,
  riskProfile: "conservative" | "moderate" | "growth" | "aggressive",
  investmentHorizonYears: number,
  totalPortfolioValue: number
): AssetAllocationResult {
  const safeAge = Math.max(18, Math.min(85, age || 35));
  const safeHorizon = Math.max(1, investmentHorizonYears || 5);
  const capital = Math.max(0, totalPortfolioValue || 0);
  const profile = (["conservative", "moderate", "growth", "aggressive"].includes(riskProfile)
    ? riskProfile
    : "moderate") as "conservative" | "moderate" | "growth" | "aggressive";

  // Baseline age-based equity allocation rule (100 - age)
  let equityPct = Math.max(20, Math.min(85, 100 - safeAge));
  let goldPct = 10;

  if (profile === "conservative") {
    equityPct = Math.min(30, equityPct - 20);
    goldPct = 10;
  } else if (profile === "moderate") {
    equityPct = Math.min(60, equityPct);
    goldPct = 10;
  } else if (profile === "growth") {
    equityPct = Math.min(75, equityPct + 10);
    goldPct = 10;
  } else if (profile === "aggressive") {
    equityPct = Math.min(85, equityPct + 20);
    goldPct = 5;
  }

  // Horizon adjustment: short horizons (< 3 yrs) must limit equity
  if (safeHorizon <= 3) {
    equityPct = Math.min(20, equityPct);
  } else if (safeHorizon <= 5) {
    equityPct = Math.min(50, equityPct);
  }

  const debtPct = Math.max(5, 100 - equityPct - goldPct);

  const recommendedEquityAmount = Math.round(capital * (equityPct / 100));
  const recommendedDebtAmount = Math.round(capital * (debtPct / 100));
  const recommendedGoldAmount = Math.round(capital * (goldPct / 100));

  const titles = {
    conservative: "Capital Preservation & Income",
    moderate: "Balanced Wealth Accumulation",
    growth: "Long-Term Growth & Compounding",
    aggressive: "Maximum Capital Appreciation",
  };

  const rationales = {
    conservative:
      "Prioritizes downside protection and steady coupon accrual, maintaining high liquidity with low equity volatility.",
    moderate:
      "Strikes an optimal balance between equity growth engine and debt stability, minimizing drawdown risk.",
    growth:
      "Tilts strategically toward equity to capture multi-cycle market growth with sufficient fixed income ballast.",
    aggressive:
      "High equity weighting designed for multi-decade compounding, tolerating near-term cyclical swings.",
  };

  return {
    investableCapital: capital,
    recommendedEquityPercent: equityPct,
    recommendedDebtPercent: debtPct,
    recommendedGoldPercent: goldPct,
    recommendedEquityAmount,
    recommendedDebtAmount,
    recommendedGoldAmount,
    riskProfileTitle: titles[profile],
    rationale: rationales[profile],
  };
}
