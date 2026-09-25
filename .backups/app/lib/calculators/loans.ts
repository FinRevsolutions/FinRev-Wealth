// ============================================================
// FINREV SOLUTIONS — Category 5: Loans & Mortgages Engine
// Loan EMI, Home Loan Amortization, Prepayment, Rent vs Buy
// ============================================================

export interface AmortizationRow {
  year: number;
  beginningBalance: number;
  principalPaid: number;
  interestPaid: number;
  totalPayment: number;
  endingBalance: number;
}

// ------------------------------------------------------------
// 26. Loan EMI Calculator
// ------------------------------------------------------------
export interface EMIResult {
  loanAmount: number;
  monthlyEMI: number;
  totalInterest: number;
  totalPayment: number;
  principalRatioPercent: number;
  interestRatioPercent: number;
  yearlyData: AmortizationRow[];
}

export function calculateLoanEMI(
  principal: number,
  annualInterestRate: number,
  tenureYears: number
): EMIResult {
  const safeP = Math.max(0, principal);
  const safeR = Math.max(0.1, annualInterestRate);
  const safeY = Math.max(1, Math.min(40, tenureYears));

  const monthlyRate = safeR / 100 / 12;
  const totalMonths = safeY * 12;

  // EMI = [P * r * (1+r)^n] / [(1+r)^n - 1]
  const emiFactor = Math.pow(1 + monthlyRate, totalMonths);
  const monthlyEMI =
    emiFactor > 1 ? Math.round((safeP * monthlyRate * emiFactor) / (emiFactor - 1)) : 0;

  const totalPayment = monthlyEMI * totalMonths;
  const totalInterest = Math.max(0, totalPayment - safeP);

  const principalRatioPercent =
    totalPayment > 0 ? Math.round((safeP / totalPayment) * 100) : 100;
  const interestRatioPercent = Math.max(0, 100 - principalRatioPercent);

  // Amortization schedule
  let balance = safeP;
  const yearlyData: AmortizationRow[] = [];

  for (let y = 1; y <= safeY; y++) {
    const begBalance = balance;
    let yearPrincipal = 0;
    let yearInterest = 0;

    for (let m = 1; m <= 12; m++) {
      if (balance <= 0) break;
      const interest = balance * monthlyRate;
      const prin = Math.min(balance, monthlyEMI - interest);
      yearInterest += interest;
      yearPrincipal += prin;
      balance -= prin;
    }

    yearlyData.push({
      year: y,
      beginningBalance: Math.round(begBalance),
      principalPaid: Math.round(yearPrincipal),
      interestPaid: Math.round(yearInterest),
      totalPayment: Math.round(yearPrincipal + yearInterest),
      endingBalance: Math.max(0, Math.round(balance)),
    });
  }

  return {
    loanAmount: safeP,
    monthlyEMI,
    totalInterest,
    totalPayment,
    principalRatioPercent,
    interestRatioPercent,
    yearlyData,
  };
}

// ------------------------------------------------------------
// 27. Home Loan Calculator
// ------------------------------------------------------------
export interface HomeLoanResult extends EMIResult {
  propertyValue: number;
  downPayment: number;
  downPaymentPercent: number;
  effectiveCostOfProperty: number;
  taxDeduction80CPotential: number; // ₹1.5L limit
  taxDeduction24bPotential: number; // ₹2.0L limit
}

export function calculateHomeLoan(
  propertyValue: number,
  downPaymentPercent: number = 20,
  annualInterestRate: number = 8.5,
  tenureYears: number = 20
): HomeLoanResult {
  const safeProp = Math.max(0, propertyValue);
  const safeDownPct = Math.max(10, Math.min(90, downPaymentPercent));
  const downPayment = Math.round(safeProp * (safeDownPct / 100));
  const loanAmount = Math.max(0, safeProp - downPayment);

  const baseEmi = calculateLoanEMI(loanAmount, annualInterestRate, tenureYears);
  const effectiveCostOfProperty = downPayment + baseEmi.totalPayment;

  // Standard Indian Tax deduction potentials under Old Regime
  const taxDeduction80CPotential = Math.min(150000, loanAmount > 0 ? 150000 : 0);
  const taxDeduction24bPotential = Math.min(200000, baseEmi.totalInterest > 0 ? 200000 : 0);

  return {
    ...baseEmi,
    propertyValue: safeProp,
    downPayment,
    downPaymentPercent: safeDownPct,
    effectiveCostOfProperty,
    taxDeduction80CPotential,
    taxDeduction24bPotential,
  };
}

// ------------------------------------------------------------
// 28. Loan Prepayment Calculator
// ------------------------------------------------------------
export interface LoanPrepaymentResult {
  originalTotalInterest: number;
  originalTenureMonths: number;
  revisedTotalInterest: number;
  revisedTenureMonths: number;
  interestSaved: number;
  monthsReduced: number;
  yearsReduced: number;
  originalTotalPayment: number;
  revisedTotalPayment: number;
  savingsPercentage: number;
}

export function calculateLoanPrepayment(
  outstandingPrincipal: number,
  annualInterestRate: number,
  remainingTenureYears: number,
  prepaymentType: "extra_monthly" | "annual_lumpsum" | "one_time",
  prepaymentAmount: number
): LoanPrepaymentResult {
  const safeP = Math.max(0, outstandingPrincipal);
  const safeR = Math.max(0.1, annualInterestRate);
  const safeYears = Math.max(1, Math.min(35, remainingTenureYears));
  const safePrepay = Math.max(0, prepaymentAmount);

  const monthlyRate = safeR / 100 / 12;
  const originalMonths = safeYears * 12;

  // Base EMI
  const emiFactor = Math.pow(1 + monthlyRate, originalMonths);
  const baseEMI = (safeP * monthlyRate * emiFactor) / (emiFactor - 1);
  const originalTotalPayment = Math.round(baseEMI * originalMonths);
  const originalTotalInterest = Math.round(originalTotalPayment - safeP);

  // Simulate month by month with prepayment
  let balance = safeP;
  let revisedInterest = 0;
  let revisedPayment = 0;
  let monthsCount = 0;

  if (prepaymentType === "one_time") {
    balance = Math.max(0, balance - safePrepay);
    revisedPayment += Math.min(safeP, safePrepay);
  }

  while (balance > 0 && monthsCount < originalMonths) {
    monthsCount++;
    const monthlyInterest = balance * monthlyRate;
    revisedInterest += monthlyInterest;

    let totalThisMonth = baseEMI;
    if (prepaymentType === "extra_monthly") {
      totalThisMonth += safePrepay;
    } else if (prepaymentType === "annual_lumpsum" && monthsCount % 12 === 0) {
      totalThisMonth += safePrepay;
    }

    const principalPaid = Math.min(balance, totalThisMonth - monthlyInterest);
    revisedPayment += principalPaid + monthlyInterest;
    balance -= principalPaid;
  }

  const roundedRevInterest = Math.round(revisedInterest);
  const roundedRevPayment = Math.round(revisedPayment);
  const interestSaved = Math.max(0, originalTotalInterest - roundedRevInterest);
  const monthsReduced = Math.max(0, originalMonths - monthsCount);
  const yearsReduced = Number((monthsReduced / 12).toFixed(1));
  const savingsPercentage =
    originalTotalInterest > 0 ? Number(((interestSaved / originalTotalInterest) * 100).toFixed(1)) : 0;

  return {
    originalTotalInterest,
    originalTenureMonths: originalMonths,
    revisedTotalInterest: roundedRevInterest,
    revisedTenureMonths: monthsCount,
    interestSaved,
    monthsReduced,
    yearsReduced,
    originalTotalPayment,
    revisedTotalPayment: roundedRevPayment,
    savingsPercentage,
  };
}

// ------------------------------------------------------------
// 29. Rent vs Buy Calculator
// ------------------------------------------------------------
export interface RentVsBuyResult {
  horizonYears: number;
  totalCostOfRenting: number;
  totalCostOfBuying: number;
  renterInvestmentPortfolioValue: number;
  homeownerPropertyValue: number;
  netWealthRenting: number;
  netWealthBuying: number;
  wealthAdvantageAmount: number;
  winner: "buy" | "rent" | "equal";
  yearlyComparison: Array<{
    year: number;
    renterNetWealth: number;
    buyerNetWealth: number;
  }>;
}

export function calculateRentVsBuy(
  propertyPrice: number,
  monthlyRent: number,
  horizonYears: number = 15,
  downPaymentPercent: number = 20,
  loanInterestRate: number = 8.5,
  loanTenureYears: number = 20,
  propertyAppreciationPercent: number = 6,
  equityReturnPercent: number = 12,
  annualRentIncreasePercent: number = 5
): RentVsBuyResult {
  const safePrice = Math.max(100000, propertyPrice);
  const safeRent = Math.max(1000, monthlyRent);
  const safeYears = Math.max(1, Math.min(30, horizonYears));
  const safeDownPct = Math.max(10, Math.min(90, downPaymentPercent)) / 100;
  const safeLoanRate = Math.max(0.1, loanInterestRate) / 100 / 12;
  const safePropApp = Math.max(0, propertyAppreciationPercent) / 100;
  const safeEquityRet = Math.max(0, equityReturnPercent) / 100 / 12;
  const safeRentInc = Math.max(0, annualRentIncreasePercent) / 100;

  // Buyer metrics
  const downPayment = safePrice * safeDownPct;
  const loanAmount = safePrice - downPayment;
  const loanMonths = Math.min(loanTenureYears * 12, safeYears * 12);
  const emiFactor = Math.pow(1 + safeLoanRate, loanTenureYears * 12);
  const monthlyEMI = (loanAmount * safeLoanRate * emiFactor) / (emiFactor - 1);

  // Renter starts investing the down payment in equity portfolio
  let renterPortfolio = downPayment;
  let currentRent = safeRent;
  let totalRentPaid = 0;
  let buyerLoanBalance = loanAmount;
  let totalBuyingCashOutflow = downPayment;

  const yearlyComparison: RentVsBuyResult["yearlyComparison"] = [];

  for (let y = 1; y <= safeYears; y++) {
    for (let m = 1; m <= 12; m++) {
      totalRentPaid += currentRent;
      totalBuyingCashOutflow += monthlyEMI;

      // In the buy scenario, buyer pays EMI.
      // If EMI > Rent, Renter invests the difference into equity portfolio.
      // If Rent > EMI, Renter withdraws difference from portfolio.
      const monthlyDifference = monthlyEMI - currentRent;
      renterPortfolio = (renterPortfolio + monthlyDifference) * (1 + safeEquityRet);

      if (buyerLoanBalance > 0) {
        const intAmt = buyerLoanBalance * safeLoanRate;
        const prinAmt = Math.min(buyerLoanBalance, monthlyEMI - intAmt);
        buyerLoanBalance -= prinAmt;
      }
    }

    currentRent = currentRent * (1 + safeRentInc);

    const propValue = safePrice * Math.pow(1 + safePropApp, y);
    const buyerEquity = propValue - Math.max(0, buyerLoanBalance);

    yearlyComparison.push({
      year: y,
      renterNetWealth: Math.round(renterPortfolio),
      buyerNetWealth: Math.round(buyerEquity),
    });
  }

  const finalPropertyValue = Math.round(safePrice * Math.pow(1 + safePropApp, safeYears));
  const finalBuyerNetWealth = Math.round(finalPropertyValue - Math.max(0, buyerLoanBalance));
  const finalRenterNetWealth = Math.round(renterPortfolio);

  const difference = Math.abs(finalBuyerNetWealth - finalRenterNetWealth);
  const winner =
    finalBuyerNetWealth > finalRenterNetWealth
      ? "buy"
      : finalRenterNetWealth > finalBuyerNetWealth
      ? "rent"
      : "equal";

  return {
    horizonYears: safeYears,
    totalCostOfRenting: Math.round(totalRentPaid),
    totalCostOfBuying: Math.round(totalBuyingCashOutflow),
    renterInvestmentPortfolioValue: finalRenterNetWealth,
    homeownerPropertyValue: finalPropertyValue,
    netWealthRenting: finalRenterNetWealth,
    netWealthBuying: finalBuyerNetWealth,
    wealthAdvantageAmount: difference,
    winner,
    yearlyComparison,
  };
}
