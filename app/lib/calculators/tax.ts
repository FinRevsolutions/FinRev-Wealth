// ============================================================
// FINREV SOLUTIONS — Category 5: Statutory & Tax-Advantaged Schemes
// NPS, PPF, and EPF engines with parameterized FY 2025-26 rates
// ============================================================

// ------------------------------------------------------------
// 30. NPS (National Pension System) Calculator
// ------------------------------------------------------------
export interface NPSResult {
  currentAge: number;
  retirementAge: number;
  investmentYears: number;
  monthlyContribution: number;
  totalInvested: number;
  accumulatedCorpus: number;
  totalGains: number;
  annuityRatioPercent: number;
  lumpsumWithdrawalAmount: number; // 60% max tax-free
  annuityReinvestmentAmount: number; // 40% min compulsory
  projectedMonthlyPension: number;
  yearlyData: Array<{
    year: number;
    age: number;
    invested: number;
    corpus: number;
  }>;
}

export function calculateNPS(
  monthlyContribution: number,
  currentAge: number,
  retirementAge: number = 60,
  expectedReturnRatePercent: number = 10,
  annuityPurchasePercent: number = 40,
  expectedAnnuityRatePercent: number = 6.5
): NPSResult {
  const safeMonthly = Math.max(500, monthlyContribution);
  const safeAge = Math.max(18, Math.min(65, currentAge));
  const safeRetire = Math.max(safeAge + 1, Math.min(75, retirementAge));
  const years = safeRetire - safeAge;
  const safeReturn = Math.max(1, expectedReturnRatePercent) / 100 / 12;
  const safeAnnuityPct = Math.max(40, Math.min(100, annuityPurchasePercent)) / 100;
  const safeAnnuityRate = Math.max(1, expectedAnnuityRatePercent) / 100;

  const totalMonths = years * 12;
  let corpus = 0;
  let invested = 0;
  const yearlyData: NPSResult["yearlyData"] = [];

  for (let m = 1; m <= totalMonths; m++) {
    invested += safeMonthly;
    corpus = (corpus + safeMonthly) * (1 + safeReturn);

    if (m % 12 === 0 || m === totalMonths) {
      const yr = Math.ceil(m / 12);
      yearlyData.push({
        year: yr,
        age: safeAge + yr,
        invested: Math.round(invested),
        corpus: Math.round(corpus),
      });
    }
  }

  const roundedCorpus = Math.round(corpus);
  const roundedInvested = Math.round(invested);
  const totalGains = Math.max(0, roundedCorpus - roundedInvested);

  const annuityReinvestmentAmount = Math.round(roundedCorpus * safeAnnuityPct);
  const lumpsumWithdrawalAmount = Math.max(0, roundedCorpus - annuityReinvestmentAmount);
  const projectedMonthlyPension = Math.round((annuityReinvestmentAmount * safeAnnuityRate) / 12);

  return {
    currentAge: safeAge,
    retirementAge: safeRetire,
    investmentYears: years,
    monthlyContribution: safeMonthly,
    totalInvested: roundedInvested,
    accumulatedCorpus: roundedCorpus,
    totalGains,
    annuityRatioPercent: Math.round(safeAnnuityPct * 100),
    lumpsumWithdrawalAmount,
    annuityReinvestmentAmount,
    projectedMonthlyPension,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 31. PPF (Public Provident Fund) Calculator
// ------------------------------------------------------------
export interface PPFResult {
  annualDeposit: number;
  tenureYears: number;
  interestRate: number;
  totalDeposited: number;
  totalInterestEarned: number;
  maturityValue: number;
  yearlyData: Array<{
    year: number;
    openingBalance: number;
    deposit: number;
    interestEarned: number;
    closingBalance: number;
  }>;
}

export function calculatePPF(
  annualDeposit: number,
  tenureYears: number = 15,
  statutoryInterestRatePercent: number = 7.1
): PPFResult {
  // PPF statutory cap is ₹1,50,000 per financial year; min is ₹500
  const safeDeposit = Math.max(500, Math.min(150000, annualDeposit));
  // Tenure in blocks of 5 years after initial 15 years
  const safeTenure = Math.max(15, Math.min(35, tenureYears));
  const r = safeInterest(statutoryInterestRatePercent) / 100;

  function safeInterest(rate: number) {
    return Math.max(1, rate);
  }

  let balance = 0;
  let totalInterest = 0;
  const yearlyData: PPFResult["yearlyData"] = [];

  for (let y = 1; y <= safeTenure; y++) {
    const opening = balance;
    // Assuming deposit made before 5th of April each FY for full year interest
    const interest = (opening + safeDeposit) * r;
    balance = opening + safeDeposit + interest;
    totalInterest += interest;

    yearlyData.push({
      year: y,
      openingBalance: Math.round(opening),
      deposit: safeDeposit,
      interestEarned: Math.round(interest),
      closingBalance: Math.round(balance),
    });
  }

  const totalDeposited = safeDeposit * safeTenure;
  const maturityValue = Math.round(balance);

  return {
    annualDeposit: safeDeposit,
    tenureYears: safeTenure,
    interestRate: statutoryInterestRatePercent,
    totalDeposited,
    totalInterestEarned: Math.round(totalInterest),
    maturityValue,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 32. EPF (Employees' Provident Fund) Calculator
// ------------------------------------------------------------
export interface EPFResult {
  currentAge: number;
  retirementAge: number;
  yearsOfService: number;
  startingBasicAndDA: number;
  employeeTotalContribution: number;
  employerEPFContribution: number;
  totalEPFInterestEarned: number;
  totalMaturityCorpus: number;
  yearlyData: Array<{
    year: number;
    age: number;
    monthlyWage: number;
    employeeAnnualEPF: number;
    employerAnnualEPF: number;
    interestEarned: number;
    closingBalance: number;
  }>;
}

export function calculateEPF(
  currentBasicAndDAMonthly: number,
  currentEPFBalance: number = 0,
  currentAge: number = 28,
  retirementAge: number = 58,
  annualSalaryIncrementPercent: number = 7,
  statutoryEPFRatePercent: number = 8.25
): EPFResult {
  const safeWage = Math.max(5000, currentBasicAndDAMonthly);
  const safeAge = Math.max(18, Math.min(57, currentAge));
  const safeRetire = Math.max(safeAge + 1, Math.min(65, retirementAge));
  const years = safeRetire - safeAge;
  const safeIncrement = Math.max(0, annualSalaryIncrementPercent) / 100;
  const epfInterest = Math.max(1, statutoryEPFRatePercent) / 100;

  // EPF Rules:
  // Employee contributes 12% of Basic + DA
  // Employer contributes 3.67% to EPF (and 8.33% to EPS capped at ₹15,000/mo wage)
  let wage = safeWage;
  let balance = Math.max(0, currentEPFBalance);
  let totalEmployeeContr = 0;
  let totalEmployerContr = 0;
  let totalInterest = 0;

  const yearlyData: EPFResult["yearlyData"] = [];

  for (let y = 1; y <= years; y++) {
    const employeeAnnual = wage * 0.12 * 12;
    const employerAnnual = wage * 0.0367 * 12;

    totalEmployeeContr += employeeAnnual;
    totalEmployerContr += employerAnnual;

    // EPF monthly progressive compounding approximated on yearly average
    const annualAddition = employeeAnnual + employerAnnual;
    const interest = (balance + annualAddition / 2) * epfInterest;
    totalInterest += interest;
    balance += annualAddition + interest;

    yearlyData.push({
      year: y,
      age: safeAge + y,
      monthlyWage: Math.round(wage),
      employeeAnnualEPF: Math.round(employeeAnnual),
      employerAnnualEPF: Math.round(employerAnnual),
      interestEarned: Math.round(interest),
      closingBalance: Math.round(balance),
    });

    wage = wage * (1 + safeIncrement);
  }

  return {
    currentAge: safeAge,
    retirementAge: safeRetire,
    yearsOfService: years,
    startingBasicAndDA: safeWage,
    employeeTotalContribution: Math.round(totalEmployeeContr),
    employerEPFContribution: Math.round(totalEmployerContr),
    totalEPFInterestEarned: Math.round(totalInterest),
    totalMaturityCorpus: Math.round(balance),
    yearlyData,
  };
}
