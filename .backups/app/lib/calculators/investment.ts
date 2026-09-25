// ============================================================
// FINREV SOLUTIONS — Category 1: Investment Calculation Engine
// Mathematically sound formulas for SIP, Step-Up SIP, Lumpsum,
// STP, SWP, SIP vs Lumpsum, CAGR, XIRR, Return & Compounding.
// Purely illustrative models per SEBI/AMFI compliance.
// ============================================================

export interface YearlyProgression {
  year: number;
  invested: number;
  value: number;
  gain: number;
}

// ------------------------------------------------------------
// 1. SIP Calculator
// ------------------------------------------------------------
export interface SIPResult {
  totalInvested: number;
  estimatedGain: number;
  totalCorpus: number;
  investedRatio: number;
  gainRatio: number;
  multiplier: number;
  yearlyData: YearlyProgression[];
}

export function calculateSIP(
  monthlyInvestment: number,
  annualRate: number,
  years: number
): SIPResult {
  const safeMonthly = Math.max(0, monthlyInvestment);
  const safeRate = Math.max(0, annualRate);
  const safeYears = Math.max(1, Math.min(50, years));

  const i = safeRate / 100 / 12;
  const n = safeYears * 12;

  const totalInvested = safeMonthly * n;
  let totalCorpus = totalInvested;
  if (i > 0) {
    totalCorpus = Math.round(
      safeMonthly * (((Math.pow(1 + i, n) - 1) / i) * (1 + i))
    );
  }

  const estimatedGain = Math.max(0, totalCorpus - totalInvested);
  const investedRatio = totalCorpus > 0 ? Math.round((totalInvested / totalCorpus) * 100) : 100;
  const gainRatio = Math.max(0, 100 - investedRatio);
  const multiplier = totalInvested > 0 ? Number((totalCorpus / totalInvested).toFixed(2)) : 1;

  const yearlyData: YearlyProgression[] = [];
  for (let y = 1; y <= safeYears; y++) {
    const months = y * 12;
    const inv = safeMonthly * months;
    let val = inv;
    if (i > 0) {
      val = Math.round(safeMonthly * (((Math.pow(1 + i, months) - 1) / i) * (1 + i)));
    }
    yearlyData.push({
      year: y,
      invested: inv,
      value: val,
      gain: Math.max(0, val - inv),
    });
  }

  return {
    totalInvested,
    estimatedGain,
    totalCorpus,
    investedRatio,
    gainRatio,
    multiplier,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 2. Step-Up SIP Calculator
// ------------------------------------------------------------
export interface StepUpSIPResult {
  totalInvested: number;
  estimatedGain: number;
  totalCorpus: number;
  investedRatio: number;
  gainRatio: number;
  multiplier: number;
  baselineCorpus: number;
  stepUpAdvantage: number;
  regularSIPCorpus: number;
  extraWealthGenerated: number;
  stepUpMultiplier: number;
  yearlyData: Array<{
    year: number;
    monthlySip: number;
    invested: number;
    value: number;
    gain: number;
  }>;
}

export function calculateStepUpSIP(
  initialMonthly: number,
  annualStepUpPercent: number,
  annualRate: number,
  years: number
): StepUpSIPResult {
  const safeInitial = Math.max(0, initialMonthly);
  const safeStepUp = Math.max(0, Math.min(50, annualStepUpPercent));
  const safeRate = Math.max(0, annualRate);
  const safeYears = Math.max(1, Math.min(40, years));

  const monthlyRate = safeRate / 100 / 12;
  let totalCorpus = 0;
  let totalInvested = 0;
  let currentMonthly = safeInitial;

  const yearlyData: StepUpSIPResult["yearlyData"] = [];

  for (let y = 1; y <= safeYears; y++) {
    for (let m = 1; m <= 12; m++) {
      totalInvested += currentMonthly;
      totalCorpus = (totalCorpus + currentMonthly) * (1 + monthlyRate);
    }
    yearlyData.push({
      year: y,
      monthlySip: Math.round(currentMonthly),
      invested: Math.round(totalInvested),
      value: Math.round(totalCorpus),
      gain: Math.max(0, Math.round(totalCorpus - totalInvested)),
    });
    currentMonthly = currentMonthly * (1 + safeStepUp / 100);
  }

  const roundedCorpus = Math.round(totalCorpus);
  const roundedInvested = Math.round(totalInvested);
  const estimatedGain = Math.max(0, roundedCorpus - roundedInvested);
  const investedRatio = roundedCorpus > 0 ? Math.round((roundedInvested / roundedCorpus) * 100) : 100;
  const gainRatio = Math.max(0, 100 - investedRatio);
  const multiplier = roundedInvested > 0 ? Number((roundedCorpus / roundedInvested).toFixed(2)) : 1;

  const baselineSIP = calculateSIP(safeInitial, safeRate, safeYears);
  const baselineCorpus = baselineSIP.totalCorpus;
  const stepUpAdvantage = Math.max(0, roundedCorpus - baselineCorpus);
  const stepUpMultiplier = baselineCorpus > 0 ? Number((roundedCorpus / baselineCorpus).toFixed(2)) : 1;

  return {
    totalInvested: roundedInvested,
    estimatedGain,
    totalCorpus: roundedCorpus,
    investedRatio,
    gainRatio,
    multiplier,
    baselineCorpus,
    stepUpAdvantage,
    regularSIPCorpus: baselineCorpus,
    extraWealthGenerated: stepUpAdvantage,
    stepUpMultiplier,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 3. Lumpsum Calculator
// ------------------------------------------------------------
export interface LumpsumResult {
  totalInvested: number;
  estimatedGain: number;
  totalCorpus: number;
  investedRatio: number;
  gainRatio: number;
  multiplier: number;
  yearlyData: YearlyProgression[];
}

export function calculateLumpsum(
  principal: number,
  annualRate: number,
  years: number
): LumpsumResult {
  const safePrincipal = Math.max(0, principal);
  const safeRate = Math.max(0, annualRate);
  const safeYears = Math.max(1, Math.min(50, years));

  const r = safeRate / 100;
  const totalInvested = safePrincipal;
  const totalCorpus = Math.round(safePrincipal * Math.pow(1 + r, safeYears));
  const estimatedGain = Math.max(0, totalCorpus - totalInvested);
  const investedRatio = totalCorpus > 0 ? Math.round((totalInvested / totalCorpus) * 100) : 100;
  const gainRatio = Math.max(0, 100 - investedRatio);
  const multiplier = totalInvested > 0 ? Number((totalCorpus / totalInvested).toFixed(2)) : 1;

  const yearlyData: YearlyProgression[] = [];
  for (let y = 1; y <= safeYears; y++) {
    const val = Math.round(safePrincipal * Math.pow(1 + r, y));
    yearlyData.push({
      year: y,
      invested: safePrincipal,
      value: val,
      gain: Math.max(0, val - safePrincipal),
    });
  }

  return {
    totalInvested,
    estimatedGain,
    totalCorpus,
    investedRatio,
    gainRatio,
    multiplier,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 4. STP (Systematic Transfer Plan) Calculator
// ------------------------------------------------------------
export interface STPResult {
  initialSourceCorpus: number;
  totalTransferred: number;
  remainingSourceValue: number;
  destinationCorpus: number;
  combinedValue: number;
  totalGain: number;
  transferMonths: number;
  yearlyData: Array<{
    year: number;
    sourceBalance: number;
    destinationBalance: number;
    totalPortfolioValue: number;
  }>;
}

export function calculateSTP(
  initialSourceCorpus: number,
  monthlyTransfer: number,
  sourceAnnualReturn: number,
  destinationAnnualReturn: number,
  transferMonths: number
): STPResult {
  const safeSource = Math.max(0, initialSourceCorpus);
  const safeTransfer = Math.max(0, monthlyTransfer);
  const safeSourceRate = Math.max(0, sourceAnnualReturn) / 100 / 12;
  const safeDestRate = Math.max(0, destinationAnnualReturn) / 100 / 12;
  const safeMonths = Math.max(1, Math.min(360, transferMonths));

  let sourceBalance = safeSource;
  let destBalance = 0;
  let totalTransferred = 0;

  const yearlyData: STPResult["yearlyData"] = [];
  const years = Math.ceil(safeMonths / 12);

  for (let m = 1; m <= safeMonths; m++) {
    // Grow source
    sourceBalance = sourceBalance * (1 + safeSourceRate);
    const transfer = Math.min(sourceBalance, safeTransfer);
    sourceBalance -= transfer;
    totalTransferred += transfer;

    // Transfer and grow destination
    destBalance = (destBalance + transfer) * (1 + safeDestRate);

    if (m % 12 === 0 || m === safeMonths) {
      yearlyData.push({
        year: Math.ceil(m / 12),
        sourceBalance: Math.round(sourceBalance),
        destinationBalance: Math.round(destBalance),
        totalPortfolioValue: Math.round(sourceBalance + destBalance),
      });
    }
  }

  const combinedValue = Math.round(sourceBalance + destBalance);
  const totalGain = Math.max(0, combinedValue - safeSource);

  return {
    initialSourceCorpus: safeSource,
    totalTransferred: Math.round(totalTransferred),
    remainingSourceValue: Math.round(sourceBalance),
    destinationCorpus: Math.round(destBalance),
    combinedValue,
    totalGain,
    transferMonths: safeMonths,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 5. SWP (Systematic Withdrawal Plan) Calculator
// ------------------------------------------------------------
export interface SWPResult {
  initialCorpus: number;
  totalWithdrawn: number;
  finalCorpusRemaining: number;
  totalReturnsGenerated: number;
  corpusExhaustedYear: number | null;
  yearlyData: Array<{
    year: number;
    withdrawnToDate: number;
    remainingCorpus: number;
  }>;
}

export function calculateSWP(
  initialCorpus: number,
  monthlyWithdrawal: number,
  annualReturn: number,
  years: number
): SWPResult {
  const safeInitial = Math.max(0, initialCorpus);
  const safeWithdrawal = Math.max(0, monthlyWithdrawal);
  const monthlyRate = Math.max(0, annualReturn) / 100 / 12;
  const totalMonths = Math.max(1, Math.min(40, years)) * 12;

  let balance = safeInitial;
  let totalWithdrawn = 0;
  let exhaustedYear: number | null = null;
  const yearlyData: SWPResult["yearlyData"] = [];

  for (let m = 1; m <= totalMonths; m++) {
    balance = balance * (1 + monthlyRate);
    if (balance >= safeWithdrawal) {
      balance -= safeWithdrawal;
      totalWithdrawn += safeWithdrawal;
    } else {
      totalWithdrawn += balance;
      balance = 0;
      if (exhaustedYear === null) {
        exhaustedYear = Math.ceil(m / 12);
      }
    }

    if (m % 12 === 0 || m === totalMonths) {
      yearlyData.push({
        year: Math.ceil(m / 12),
        withdrawnToDate: Math.round(totalWithdrawn),
        remainingCorpus: Math.round(balance),
      });
    }
  }

  const roundedFinal = Math.round(balance);
  const totalGain = Math.max(0, roundedFinal + totalWithdrawn - safeInitial);

  return {
    initialCorpus: safeInitial,
    totalWithdrawn: Math.round(totalWithdrawn),
    finalCorpusRemaining: roundedFinal,
    totalReturnsGenerated: Math.round(totalGain),
    corpusExhaustedYear: exhaustedYear,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 6. SIP vs Lumpsum Calculator
// ------------------------------------------------------------
export interface SIPvsLumpsumResult {
  investedAmount: number;
  sipCorpus: number;
  sipGain: number;
  lumpsumCorpus: number;
  lumpsumGain: number;
  difference: number;
  winningMode: "sip" | "lumpsum" | "equal";
  yearlyData: Array<{
    year: number;
    sipValue: number;
    lumpsumValue: number;
  }>;
}

export function calculateSIPvsLumpsum(
  capitalAmount: number,
  annualRate: number,
  years: number
): SIPvsLumpsumResult {
  const safeCapital = Math.max(0, capitalAmount);
  const safeYears = Math.max(1, Math.min(40, years));
  const safeRate = Math.max(0, annualRate);

  // Lumpsum: full capital invested at t=0
  const lumpsumRes = calculateLumpsum(safeCapital, safeRate, safeYears);

  // SIP: same total capital distributed over n monthly installments
  const totalMonths = safeYears * 12;
  const monthlySip = totalMonths > 0 ? Math.round(safeCapital / totalMonths) : 0;
  const sipRes = calculateSIP(monthlySip, safeRate, safeYears);

  const difference = Math.abs(lumpsumRes.totalCorpus - sipRes.totalCorpus);
  const winningMode =
    lumpsumRes.totalCorpus > sipRes.totalCorpus
      ? "lumpsum"
      : sipRes.totalCorpus > lumpsumRes.totalCorpus
      ? "sip"
      : "equal";

  const yearlyData: SIPvsLumpsumResult["yearlyData"] = [];
  for (let y = 1; y <= safeYears; y++) {
    const lVal = lumpsumRes.yearlyData.find((d) => d.year === y)?.value || 0;
    const sVal = sipRes.yearlyData.find((d) => d.year === y)?.value || 0;
    yearlyData.push({
      year: y,
      lumpsumValue: lVal,
      sipValue: sVal,
    });
  }

  return {
    investedAmount: safeCapital,
    sipCorpus: sipRes.totalCorpus,
    sipGain: sipRes.estimatedGain,
    lumpsumCorpus: lumpsumRes.totalCorpus,
    lumpsumGain: lumpsumRes.estimatedGain,
    difference,
    winningMode,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 7. CAGR (Compound Annual Growth Rate) Calculator
// ------------------------------------------------------------
export interface CAGRResult {
  initialValue: number;
  finalValue: number;
  years: number;
  cagrPercent: number;
  absoluteReturnPercent: number;
  totalGain: number;
  yearlyData: Array<{
    year: number;
    value: number;
  }>;
}

export function calculateCAGR(
  initialValue: number,
  finalValue: number,
  years: number
): CAGRResult {
  const safeInitial = Math.max(1, initialValue);
  const safeFinal = Math.max(0, finalValue);
  const safeYears = Math.max(0.1, years);

  const cagr = (Math.pow(safeFinal / safeInitial, 1 / safeYears) - 1) * 100;
  const cagrPercent = isFinite(cagr) ? Number(cagr.toFixed(2)) : 0;
  const totalGain = safeFinal - safeInitial;
  const absoluteReturnPercent = Number(((totalGain / safeInitial) * 100).toFixed(2));

  const yearlyData: CAGRResult["yearlyData"] = [];
  const roundedYears = Math.ceil(safeYears);
  for (let y = 1; y <= roundedYears; y++) {
    const val = Math.round(safeInitial * Math.pow(1 + cagrPercent / 100, y));
    yearlyData.push({
      year: y,
      value: y === roundedYears ? Math.round(safeFinal) : val,
    });
  }

  return {
    initialValue: safeInitial,
    finalValue: safeFinal,
    years: safeYears,
    cagrPercent,
    absoluteReturnPercent,
    totalGain,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 8. XIRR Calculator
// ------------------------------------------------------------
export interface XIRRResult {
  xirrPercent: number;
  totalInvested: number;
  currentValue: number;
  totalGain: number;
  absoluteReturnPercent: number;
}

export function calculateXIRR(
  cashFlows: Array<{ date: string; amount: number }>
): XIRRResult {
  let totalInvested = 0;
  let currentValue = 0;

  for (const cf of cashFlows) {
    if (cf.amount < 0) {
      totalInvested += Math.abs(cf.amount);
    } else {
      currentValue += cf.amount;
    }
  }

  // Newton-Raphson approximation for XIRR
  const parseDate = (d: string) => new Date(d).getTime() / (1000 * 60 * 60 * 24);
  const minDate = Math.min(...cashFlows.map((c) => parseDate(c.date)));

  let rate = 0.1; // Initial guess 10%
  for (let iter = 0; iter < 100; iter++) {
    let fv = 0;
    let dfv = 0;
    for (const cf of cashFlows) {
      const days = (parseDate(cf.date) - minDate) / 365.25;
      const factor = Math.pow(1 + rate, days);
      if (factor === 0 || !isFinite(factor)) continue;
      fv += cf.amount / factor;
      dfv -= (days * cf.amount) / (factor * (1 + rate));
    }
    if (Math.abs(dfv) < 1e-7) break;
    const newRate = rate - fv / dfv;
    if (Math.abs(newRate - rate) < 1e-6) {
      rate = newRate;
      break;
    }
    rate = newRate;
  }

  const xirrPercent = isFinite(rate) ? Number((rate * 100).toFixed(2)) : 0;
  const totalGain = Math.max(0, currentValue - totalInvested);
  const absoluteReturnPercent =
    totalInvested > 0 ? Number(((totalGain / totalInvested) * 100).toFixed(2)) : 0;

  return {
    xirrPercent,
    totalInvested: Math.round(totalInvested),
    currentValue: Math.round(currentValue),
    totalGain: Math.round(totalGain),
    absoluteReturnPercent,
  };
}

// ------------------------------------------------------------
// 9. Investment Return Calculator (Absolute, Annualized, Real)
// ------------------------------------------------------------
export interface InvestmentReturnResult {
  investedAmount: number;
  finalAmount: number;
  absoluteGain: number;
  absoluteReturnPercent: number;
  annualizedReturnPercent: number;
  inflationAdjustedReturnPercent: number;
  realPurchasingPower: number;
  multiplier: number;
}

export function calculateInvestmentReturn(
  investedAmount: number,
  finalAmount: number,
  years: number,
  annualInflationPercent: number = 6
): InvestmentReturnResult {
  const safeInvested = Math.max(1, investedAmount);
  const safeFinal = Math.max(0, finalAmount);
  const safeYears = Math.max(0.1, years);
  const safeInflation = Math.max(0, annualInflationPercent);

  const absoluteGain = safeFinal - safeInvested;
  const absoluteReturnPercent = Number(((absoluteGain / safeInvested) * 100).toFixed(2));
  const annualized = (Math.pow(safeFinal / safeInvested, 1 / safeYears) - 1) * 100;
  const annualizedReturnPercent = isFinite(annualized) ? Number(annualized.toFixed(2)) : 0;

  // Fisher equation for real return: (1 + nominal) / (1 + inflation) - 1
  const nominal = annualizedReturnPercent / 100;
  const inflation = safeInflation / 100;
  const realReturn = ((1 + nominal) / (1 + inflation) - 1) * 100;
  const inflationAdjustedReturnPercent = isFinite(realReturn) ? Number(realReturn.toFixed(2)) : 0;

  const realPurchasingPower = Math.round(safeFinal / Math.pow(1 + inflation, safeYears));
  const multiplier = Number((safeFinal / safeInvested).toFixed(2));

  return {
    investedAmount: safeInvested,
    finalAmount: safeFinal,
    absoluteGain,
    absoluteReturnPercent,
    annualizedReturnPercent,
    inflationAdjustedReturnPercent,
    realPurchasingPower,
    multiplier,
  };
}

// ------------------------------------------------------------
// 10. Compound Interest Calculator
// ------------------------------------------------------------
export interface CompoundInterestResult {
  principal: number;
  compoundInterest: number;
  totalAmount: number;
  simpleInterestEquivalent: number;
  compoundingBonus: number;
  yearlyData: YearlyProgression[];
}

export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  years: number,
  frequency: "annually" | "half-yearly" | "quarterly" | "monthly" = "annually"
): CompoundInterestResult {
  const safePrincipal = Math.max(0, principal);
  const safeRate = Math.max(0, annualRate);
  const safeYears = Math.max(1, Math.min(50, years));

  const nMap = {
    annually: 1,
    "half-yearly": 2,
    quarterly: 4,
    monthly: 12,
  };
  const n = nMap[frequency] || 1;
  const r = safeRate / 100;

  const totalAmount = Math.round(
    safePrincipal * Math.pow(1 + r / n, n * safeYears)
  );
  const compoundInterest = Math.max(0, totalAmount - safePrincipal);
  const simpleInterestEquivalent = Math.round(safePrincipal * r * safeYears);
  const compoundingBonus = Math.max(0, compoundInterest - simpleInterestEquivalent);

  const yearlyData: YearlyProgression[] = [];
  for (let y = 1; y <= safeYears; y++) {
    const val = Math.round(safePrincipal * Math.pow(1 + r / n, n * y));
    yearlyData.push({
      year: y,
      invested: safePrincipal,
      value: val,
      gain: Math.max(0, val - safePrincipal),
    });
  }

  return {
    principal: safePrincipal,
    compoundInterest,
    totalAmount,
    simpleInterestEquivalent,
    compoundingBonus,
    yearlyData,
  };
}
