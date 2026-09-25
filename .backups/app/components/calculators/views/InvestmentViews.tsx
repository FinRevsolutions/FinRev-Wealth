"use client";

import React, { useState } from "react";
import { CalculatorShell } from "../CalculatorShell";
import { CurrencyInput, PercentageInput, DurationInput, SelectInput } from "../Inputs";
import { PrimaryResultCard, MetricCard, SplitRatioBar } from "../Results";
import { GrowthChartSVG } from "../Charts";
import { MilestoneTable } from "../MilestoneTable";
import { CalculatorActions, CalculatorCTA } from "../Panels";
import { getToolBySlug } from "@/lib/tools-registry";
import {
  calculateSTP,
  calculateSWP,
  calculateSIPvsLumpsum,
  calculateCAGR,
  calculateXIRR,
  calculateInvestmentReturn,
  calculateCompoundInterest,
} from "@/lib/calculators/investment";
import { formatExactINR, formatINR } from "@/lib/calculators/formatters";

// ============================================================
// 4. STP Calculator View
// ============================================================
export function STPCalculatorView() {
  const tool = getToolBySlug("stp-calculator")!;
  const [sourceCorpus, setSourceCorpus] = useState(1000000);
  const [monthlyTransfer, setMonthlyTransfer] = useState(25000);
  const [sourceRate, setSourceRate] = useState(7);
  const [destRate, setDestRate] = useState(12);
  const [transferMonths, setTransferMonths] = useState(36);

  const res = calculateSTP(sourceCorpus, monthlyTransfer, sourceRate, destRate, transferMonths);

  const reset = () => {
    setSourceCorpus(1000000);
    setMonthlyTransfer(25000);
    setSourceRate(7);
    setDestRate(12);
    setTransferMonths(36);
  };

  const chartData = res.yearlyData.map((d) => ({
    year: d.year,
    invested: d.sourceBalance,
    value: d.totalPortfolioValue,
  }));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Combined Maturity Portfolio Value"
              value={res.combinedValue}
              subValueLabel={`After ${transferMonths} monthly transfers from Liquid to Equity`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Equity Corpus" value={res.destinationCorpus} variant="emerald" />
              <MetricCard label="Remaining Source" value={res.remainingSourceValue} />
              <MetricCard label="Total Transferred" value={res.totalTransferred} />
              <MetricCard label="Net Compounded Gain" value={res.totalGain} variant="emerald" />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              STP mitigates the risk of deploying a large lump sum at market peaks by averaging unit acquisition costs.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Plan an STP Allocation" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="STP Portfolio Growth Trajectory"
          subtitle="Combined valuation of Source (Liquid/Debt) and Target (Equity) funds over time"
        />
      }
      milestones={
        <MilestoneTable
          title="STP Annual Progression Breakdown"
          subtitle="Status of source debt fund vs destination equity fund"
          headers={["Milestone", "Source Balance", "Destination Equity", "Combined Portfolio Value"]}
          rows={res.yearlyData.map((d) => ({
            year: d.year,
            value: d.totalPortfolioValue,
            customColumns: [
              { key: "source", value: d.sourceBalance },
              { key: "dest", value: d.destinationBalance },
              { key: "total", value: d.totalPortfolioValue },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "The Strategic Power of Systematic Transfer Plans (STP)",
        paragraphs: [
          "A Systematic Transfer Plan (STP) allows an investor to deploy a lump sum into a lower-volatility source fund (such as an Arbitrage or Liquid Fund) and systematically transfer a pre-determined sum at regular intervals into a target equity fund.",
          "This two-pronged approach ensures your idle capital generates reasonable debt-like yields while systematically capitalizing on equity market dips through rupee cost averaging.",
        ],
        takeaways: [
          "Protects capital against sudden broad market drawdowns.",
          "Eliminates the psychological challenge of market timing.",
          "Optimizes tax efficiency when transferring between debt and equity schemes.",
        ],
      }}
      assumptions={[
        "Source fund returns are compounded monthly at the specified annualized rate.",
        "Destination equity fund returns assume steady monthly compounding without factoring short-term drawdowns.",
        "Exit loads and applicable capital gains taxes on source fund redemptions are excluded from this mathematical model.",
      ]}
      faq={[
        {
          question: "When should I choose an STP over a direct Lumpsum investment?",
          answer:
            "STP is ideal when you receive a significant liquidity event (such as a property sale, bonus, or maturity payout) and equity market valuations appear elevated. It allows you to participate over 12 to 36 months safely.",
        },
        {
          question: "Can STP transfers be paused or modified?",
          answer:
            "Yes, investors can cancel, increase, or decrease STP instructions through their AMFI-registered distributor or mutual fund portal.",
        },
      ]}
    >
      <CurrencyInput
        id="stp-source"
        label="Initial Lump Sum Capital in Source Fund"
        value={sourceCorpus}
        min={50000}
        max={10000000}
        step={25000}
        sliderMin={50000}
        sliderMax={5000000}
        sliderStep={25000}
        onChange={setSourceCorpus}
        helperMin="₹50,000"
        helperMid="₹25 Lakh"
        helperMax="₹50 Lakh"
      />
      <CurrencyInput
        id="stp-transfer"
        label="Monthly Transfer Amount to Equity"
        value={monthlyTransfer}
        min={1000}
        max={500000}
        step={1000}
        sliderMin={1000}
        sliderMax={100000}
        sliderStep={1000}
        onChange={setMonthlyTransfer}
        helperMin="₹1,000"
        helperMid="₹50,000"
        helperMax="₹1,00,000"
      />
      <PercentageInput
        id="stp-source-rate"
        label="Source Fund Expected Return (% p.a. - Liquid/Debt)"
        value={sourceRate}
        min={3}
        max={10}
        step={0.25}
        onChange={setSourceRate}
        helperMin="3% (Overnight)"
        helperMid="6.5% (Liquid/Arbitrage)"
        helperMax="10% (Dynamic Debt)"
      />
      <PercentageInput
        id="stp-dest-rate"
        label="Destination Fund Expected Return (% p.a. - Equity)"
        value={destRate}
        min={6}
        max={18}
        step={0.5}
        onChange={setDestRate}
        helperMin="6% (Conservative)"
        helperMid="12% (Balanced)"
        helperMax="18% (Aggressive)"
      />
      <DurationInput
        id="stp-months"
        label="Transfer Tenure (Months)"
        value={transferMonths}
        min={6}
        max={120}
        step={6}
        unit="Mo"
        onChange={setTransferMonths}
        helperMin="6 Months"
        helperMid="36 Months (3 Yrs)"
        helperMax="120 Months"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 5. SWP Calculator View
// ============================================================
export function SWPCalculatorView() {
  const tool = getToolBySlug("swp-calculator")!;
  const [corpus, setCorpus] = useState(5000000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(35000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(15);

  const res = calculateSWP(corpus, monthlyWithdrawal, rate, years);

  const reset = () => {
    setCorpus(5000000);
    setMonthlyWithdrawal(35000);
    setRate(10);
    setYears(15);
  };

  const chartData = res.yearlyData.map((d) => ({
    year: d.year,
    invested: d.withdrawnToDate,
    value: d.remainingCorpus,
  }));

  const withdrawalRateAnnual = Number(((monthlyWithdrawal * 12 * 100) / corpus).toFixed(1));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Remaining Final Corpus Balance"
              value={res.finalCorpusRemaining}
              subValueLabel={`After ${years} years of receiving regular monthly cash flows`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Total Cash Withdrawn" value={res.totalWithdrawn} variant="emerald" />
              <MetricCard label="Total Wealth Generated" value={res.totalReturnsGenerated} />
              <MetricCard
                label="Annual Withdrawal Rate"
                value={`${withdrawalRateAnnual}%`}
                isCurrency={false}
                subtext={withdrawalRateAnnual <= rate ? "Sustainable (< Return)" : "Caution (> Return)"}
                variant={withdrawalRateAnnual <= rate ? "emerald" : "amber"}
              />
              <MetricCard
                label="Corpus Longevity"
                value={res.corpusExhaustedYear ? `Depletes in Year ${res.corpusExhaustedYear}` : "Indefinite & Growing"}
                isCurrency={false}
                variant={res.corpusExhaustedYear ? "amber" : "emerald"}
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {res.corpusExhaustedYear
                ? `Caution: At this withdrawal rate, capital will be fully depleted around Year ${res.corpusExhaustedYear}. Consider lowering the monthly withdrawal to under ${formatINR((corpus * rate) / 100 / 12)}.`
                : `Your monthly withdrawal of ${formatExactINR(monthlyWithdrawal)} is below generated returns, preserving and expanding your core capital.`}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Set Up an SWP Cash Flow" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="SWP Capital Longevity & Cumulative Withdrawals"
          subtitle="Remaining corpus balance compared against total payouts received"
        />
      }
      milestones={
        <MilestoneTable
          title="SWP Annual Cash Flow Schedule"
          subtitle="Cumulative payouts vs balance remaining"
          headers={["Year", "Withdrawn To Date", "Remaining Corpus Balance"]}
          rows={res.yearlyData.map((d) => ({
            year: d.year,
            value: d.remainingCorpus,
            customColumns: [
              { key: "withdrawn", value: d.withdrawnToDate },
              { key: "remaining", value: d.remainingCorpus },
            ],
          }))}
        />
      }
      educationalPrimer={{
        title: "Systematic Withdrawal Plan: The Ultimate Tax-Smart Pension",
        paragraphs: [
          "A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed cash sum from your mutual fund investments each month, while the remaining balance continues to compound in the markets.",
          "Unlike traditional annuities or fixed deposit interest where the entire payout is taxed at your income slab, an SWP redacts both capital and gains proportionally, meaning only the capital gain portion is subject to tax, dramatically lowering your tax drag in retirement.",
        ],
        takeaways: [
          "Delivers consistent monthly cash flows directly into your registered bank account.",
          "Significantly higher tax efficiency compared to traditional bank FD interest.",
          "Keeps your core capital exposed to inflation-beating equity and debt compounding.",
        ],
      }}
      assumptions={[
        "Calculated on standard monthly compounding of remaining corpus balance.",
        "Assumes monthly withdrawals occur at the beginning of each calendar month.",
        "Applicable equity or debt capital gains taxes are excluded from the balance calculations.",
      ]}
      faq={[
        {
          question: "What is considered a safe SWP withdrawal rate?",
          answer:
            "A withdrawal rate of 6% to 8% p.a. in a balanced hybrid or equity savings fund is generally sustainable for decades, ensuring capital longevity while offering regular monthly cash flow.",
        },
      ]}
    >
      <CurrencyInput
        id="swp-corpus"
        label="Total Accumulated Corpus (₹)"
        value={corpus}
        min={500000}
        max={100000000}
        step={100000}
        sliderMin={500000}
        sliderMax={20000000}
        sliderStep={250000}
        onChange={setCorpus}
        helperMin="₹5 Lakh"
        helperMid="₹1 Crore"
        helperMax="₹2 Crore"
      />
      <CurrencyInput
        id="swp-monthly"
        label="Desired Monthly Withdrawal (₹)"
        value={monthlyWithdrawal}
        min={1000}
        max={500000}
        step={1000}
        sliderMin={5000}
        sliderMax={150000}
        sliderStep={2500}
        onChange={setMonthlyWithdrawal}
        helperMin="₹5,000/mo"
        helperMid="₹50,000/mo"
        helperMax="₹1,50,000/mo"
      />
      <PercentageInput
        id="swp-rate"
        label="Expected Annual Portfolio Return (% p.a.)"
        value={rate}
        min={5}
        max={16}
        step={0.5}
        onChange={setRate}
        helperMin="5% (Conservative Debt)"
        helperMid="10% (Hybrid/Balanced)"
        helperMax="16% (Pure Equity)"
      />
      <DurationInput
        id="swp-years"
        label="Withdrawal Horizon (Years)"
        value={years}
        min={1}
        max={35}
        step={1}
        onChange={setYears}
        helperMin="1 Year"
        helperMid="15 Years"
        helperMax="35 Years"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 6. SIP vs Lumpsum Calculator View
// ============================================================
export function SIPvsLumpsumCalculatorView() {
  const tool = getToolBySlug("sip-vs-lumpsum-calculator")!;
  const [capital, setCapital] = useState(600000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const res = calculateSIPvsLumpsum(capital, rate, years);

  const reset = () => {
    setCapital(600000);
    setRate(12);
    setYears(10);
  };

  const chartData = res.yearlyData.map((d) => ({
    year: d.year,
    invested: d.sipValue,
    value: d.lumpsumValue,
  }));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label={
                res.winningMode === "lumpsum"
                  ? "Lumpsum Delivers Higher Maturity Value"
                  : "SIP Delivers Higher Maturity Value"
              }
              value={Math.max(res.lumpsumCorpus, res.sipCorpus)}
              subValueLabel={`Advantage of ${formatExactINR(res.difference)} over ${years} years`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Lumpsum Maturity Value" value={res.lumpsumCorpus} variant="emerald" />
              <MetricCard label="SIP Maturity Value" value={res.sipCorpus} />
              <MetricCard label="Lumpsum Gains" value={res.lumpsumGain} />
              <MetricCard label="SIP Gains" value={res.sipGain} />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              {res.winningMode === "lumpsum"
                ? "In a steadily ascending market, Lumpsum wins mathematically because 100% of capital compounds for the full tenure. However, SIP provides behavioral discipline and downside risk buffer."
                : "SIP staggered distribution protected against upfront peak risk."}
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Consult on Strategic Allocation" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="SIP vs Lumpsum Wealth Trajectory"
          subtitle="Comparing Lumpsum full capital compounding (Value line) vs staggered SIP deployment (Invested line)"
        />
      }
      educationalPrimer={{
        title: "SIP vs Lumpsum: Navigating Risk and Time in the Market",
        paragraphs: [
          "One of the most persistent dilemmas for investors is whether to commit capital as a single lump sum or spread it across monthly SIP installments.",
          "In mathematical theory, whenever an asset class has an upward expected trajectory, lumpsum investing outperforms because money is at work for longer. However, behavioral finance shows that investing a large sum right before a market correction causes panic selling. SIP eliminates that timing hazard by buying more units when prices fall.",
        ],
        takeaways: [
          "Lumpsum delivers superior returns in bull markets due to full time in market.",
          "SIP reduces downside volatility and rupee-cost averages through cyclical downturns.",
          "A hybrid strategy (STP) bridges the gap: park in liquid funds and transfer monthly into equities.",
        ],
      }}
      assumptions={[
        "Assumes identical annual compound rate of return for both strategies.",
        "SIP monthly installment is computed as Total Capital divided by Total Months (years * 12).",
        "Taxes, exit loads, and expense ratios are omitted for comparative clarity.",
      ]}
    >
      <CurrencyInput
        id="svl-capital"
        label="Total Capital to Deploy (₹)"
        value={capital}
        min={50000}
        max={50000000}
        step={25000}
        sliderMin={50000}
        sliderMax={5000000}
        sliderStep={25000}
        onChange={setCapital}
        helperMin="₹50,000"
        helperMid="₹25 Lakh"
        helperMax="₹50 Lakh"
      />
      <PercentageInput
        id="svl-rate"
        label="Expected Annual Return (% p.a.)"
        value={rate}
        min={6}
        max={18}
        step={0.5}
        onChange={setRate}
        helperMin="6%"
        helperMid="12%"
        helperMax="18%"
      />
      <DurationInput
        id="svl-years"
        label="Investment Horizon (Years)"
        value={years}
        min={1}
        max={30}
        step={1}
        onChange={setYears}
        helperMin="1 Year"
        helperMid="10 Years"
        helperMax="30 Years"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 7. CAGR Calculator View
// ============================================================
export function CAGRCalculatorView() {
  const tool = getToolBySlug("cagr-calculator")!;
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(320000);
  const [years, setYears] = useState(7);

  const res = calculateCAGR(initialValue, finalValue, years);

  const reset = () => {
    setInitialValue(100000);
    setFinalValue(320000);
    setYears(7);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Compound Annual Growth Rate (CAGR)"
              value={res.cagrPercent}
              isCurrency={false}
              valueSuffix="% p.a."
              subValueLabel={`Smoothed annual return over ${years} years`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Initial Outlay" value={res.initialValue} />
              <MetricCard label="Final Value" value={res.finalValue} variant="emerald" />
              <MetricCard label="Total Capital Gain" value={res.totalGain} variant="emerald" />
              <MetricCard
                label="Absolute Return"
                value={`${res.absoluteReturnPercent}%`}
                isCurrency={false}
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              A ₹{initialValue.toLocaleString("en-IN")} investment growing to ₹{finalValue.toLocaleString("en-IN")} over {years} years equals a geometric compounding rate of {res.cagrPercent}% every single year.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Review Your Portfolio CAGR" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "Understanding CAGR: The True Standard of Long-Term Performance",
        paragraphs: [
          "Compound Annual Growth Rate (CAGR) measures the mean annual growth rate of an investment over a specified period longer than one year.",
          "Unlike simple or absolute returns which ignore the element of time, CAGR provides a smoothed, geometric annualized rate of return that allows you to compare disparate asset classes (such as real estate, mutual funds, gold, and fixed deposits) on an equal footing.",
        ],
        takeaways: [
          "Eliminates the distortion caused by intermediate volatility.",
          "Allows apples-to-apples comparison between different asset classes.",
          "Essential metric for benchmarking mutual fund scheme performance against indices.",
        ],
      }}
      assumptions={[
        "Formula: CAGR = (Final Value / Initial Value)^(1 / Years) - 1.",
        "Assumes all dividends or interim payouts were fully reinvested.",
      ]}
    >
      <CurrencyInput
        id="cagr-initial"
        label="Beginning / Initial Investment Amount (₹)"
        value={initialValue}
        min={1000}
        max={100000000}
        step={5000}
        sliderMin={10000}
        sliderMax={2000000}
        sliderStep={10000}
        onChange={setInitialValue}
        helperMin="₹10,000"
        helperMid="₹10 Lakh"
        helperMax="₹20 Lakh"
      />
      <CurrencyInput
        id="cagr-final"
        label="Maturity / Current Portfolio Value (₹)"
        value={finalValue}
        min={1000}
        max={500000000}
        step={10000}
        sliderMin={10000}
        sliderMax={10000000}
        sliderStep={25000}
        onChange={setFinalValue}
        helperMin="₹10,000"
        helperMid="₹50 Lakh"
        helperMax="₹1 Crore"
      />
      <DurationInput
        id="cagr-years"
        label="Investment Duration (Years)"
        value={years}
        min={1}
        max={40}
        step={1}
        onChange={setYears}
        helperMin="1 Year"
        helperMid="10 Years"
        helperMax="40 Years"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 8. XIRR Calculator View
// ============================================================
export function XIRRCalculatorView() {
  const tool = getToolBySlug("xirr-calculator")!;
  const [monthlyContribution, setMonthlyContribution] = useState(10000);
  const [tenureYears, setTenureYears] = useState(5);
  const [currentVal, setCurrentVal] = useState(900000);

  // Approximate cash flows: monthly investments + final redemption
  const now = new Date();
  const flows: Array<{ date: string; amount: number }> = [];
  for (let y = tenureYears; y >= 1; y--) {
    for (let m = 1; m <= 12; m++) {
      const d = new Date(now.getFullYear() - y, now.getMonth() + m, 1);
      flows.push({ date: d.toISOString().split("T")[0], amount: -monthlyContribution });
    }
  }
  flows.push({ date: now.toISOString().split("T")[0], amount: currentVal });

  const res = calculateXIRR(flows);

  const reset = () => {
    setMonthlyContribution(10000);
    setTenureYears(5);
    setCurrentVal(900000);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Extended Internal Rate of Return (XIRR)"
              value={res.xirrPercent}
              isCurrency={false}
              valueSuffix="% p.a."
              subValueLabel="True annualized return across periodic investments"
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Total Invested" value={res.totalInvested} />
              <MetricCard label="Current Valuation" value={res.currentValue} variant="emerald" />
              <MetricCard label="Net Compounded Gain" value={res.totalGain} variant="emerald" />
              <MetricCard
                label="Absolute Return"
                value={`${res.absoluteReturnPercent}%`}
                isCurrency={false}
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              XIRR accounts for the exact dates money entered and exited the fund, delivering the true rate of return that reflects timing and rupee cost averaging.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Get a Consolidated Portfolio Review" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "Why XIRR is Mandatory for SIPs and Irregular Cash Flows",
        paragraphs: [
          "While CAGR works perfectly for a one-time lumpsum investment with a single start and end date, it cannot calculate returns when multiple transactions happen at different points in time.",
          "Extended Internal Rate of Return (XIRR) is the universal institutional standard used across mutual funds to evaluate cash flows occurring at unequal intervals, weighing each rupee by the exact number of days it spent in the market.",
        ],
        takeaways: [
          "Essential for reviewing SIP statements and STP performance.",
          "Accurately reflects the compounding contribution of early vs recent installments.",
          "Standardized metric endorsed by SEBI and AMFI on all CAS statements.",
        ],
      }}
      assumptions={[
        "Calculated via Newton-Raphson approximation algorithm.",
        "Assumes consistent monthly installments over the chosen tenure with current value realized today.",
      ]}
    >
      <CurrencyInput
        id="xirr-monthly"
        label="Periodic Monthly SIP Installment (₹)"
        value={monthlyContribution}
        min={1000}
        max={500000}
        step={1000}
        sliderMin={1000}
        sliderMax={100000}
        sliderStep={1000}
        onChange={setMonthlyContribution}
        helperMin="₹1,000"
        helperMid="₹50,000"
        helperMax="₹1,00,000"
      />
      <DurationInput
        id="xirr-tenure"
        label="Investment Horizon (Years Completed)"
        value={tenureYears}
        min={1}
        max={20}
        step={1}
        onChange={setTenureYears}
        helperMin="1 Year"
        helperMid="5 Years"
        helperMax="20 Years"
      />
      <CurrencyInput
        id="xirr-current"
        label="Current Market Value of Portfolio (₹)"
        value={currentVal}
        min={1000}
        max={100000000}
        step={10000}
        sliderMin={10000}
        sliderMax={5000000}
        sliderStep={25000}
        onChange={setCurrentVal}
        helperMin="₹10,000"
        helperMid="₹25 Lakh"
        helperMax="₹50 Lakh"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 9. Investment Return Calculator View
// ============================================================
export function InvestmentReturnCalculatorView() {
  const tool = getToolBySlug("investment-return-calculator")!;
  const [invested, setInvested] = useState(500000);
  const [finalVal, setFinalVal] = useState(1500000);
  const [years, setYears] = useState(8);
  const [inflation, setInflation] = useState(6);

  const res = calculateInvestmentReturn(invested, finalVal, years, inflation);

  const reset = () => {
    setInvested(500000);
    setFinalVal(1500000);
    setYears(8);
    setInflation(6);
  };

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Inflation-Adjusted Real Return"
              value={res.inflationAdjustedReturnPercent}
              isCurrency={false}
              valueSuffix="% p.a."
              subValueLabel={`Real purchasing power growth after subtracting ${inflation}% annual inflation`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard
                label="Nominal Annualized Return"
                value={`${res.annualizedReturnPercent}% p.a.`}
                isCurrency={false}
                variant="emerald"
              />
              <MetricCard
                label="Absolute Gain"
                value={res.absoluteGain}
                variant="emerald"
              />
              <MetricCard
                label="Real Purchasing Power"
                value={res.realPurchasingPower}
                subtext={`Equivalent today at ${inflation}% inflation`}
              />
              <MetricCard
                label="Wealth Multiplier"
                value={`${res.multiplier}×`}
                isCurrency={false}
              />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Nominal returns tell you how many rupees you made. Real returns reveal how much actual purchasing power you gained after the silent erosion of inflation.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Optimize for Real Post-Tax Returns" />
          </div>
        </>
      }
      educationalPrimer={{
        title: "The Critical Difference: Nominal Returns vs. Real Returns",
        paragraphs: [
          "Investors frequently evaluate investments purely on nominal figures. For instance, a fixed deposit offering 7% appears safe and productive until you subtract 6% inflation and a 30% tax slab, which results in negative real purchasing power.",
          "To truly create wealth, your capital must compound at a rate sufficiently above consumer price inflation (CPI) and taxes.",
        ],
        takeaways: [
          "Real return = (1 + Nominal Return) / (1 + Inflation) - 1.",
          "Equity mutual funds are one of the few asset classes historically delivering 4-6% real positive returns in India.",
          "Always measure financial goals in real purchasing power, not just nominal crore targets.",
        ],
      }}
      assumptions={[
        "Applies the Fisher equation for real rate calculation.",
        "Assumes uniform annual inflation over the entire duration.",
      ]}
    >
      <CurrencyInput
        id="ret-invested"
        label="Invested Capital (₹)"
        value={invested}
        min={10000}
        max={100000000}
        step={10000}
        sliderMin={10000}
        sliderMax={5000000}
        sliderStep={25000}
        onChange={setInvested}
        helperMin="₹10,000"
        helperMid="₹25 Lakh"
        helperMax="₹50 Lakh"
      />
      <CurrencyInput
        id="ret-final"
        label="Final Maturity / Realized Value (₹)"
        value={finalVal}
        min={10000}
        max={500000000}
        step={25000}
        sliderMin={10000}
        sliderMax={10000000}
        sliderStep={50000}
        onChange={setFinalVal}
        helperMin="₹10,000"
        helperMid="₹50 Lakh"
        helperMax="₹1 Crore"
      />
      <DurationInput
        id="ret-years"
        label="Investment Horizon (Years)"
        value={years}
        min={1}
        max={35}
        step={1}
        onChange={setYears}
        helperMin="1 Year"
        helperMid="10 Years"
        helperMax="35 Years"
      />
      <PercentageInput
        id="ret-inflation"
        label="Assumed Annual Inflation Rate (% p.a.)"
        value={inflation}
        min={2}
        max={12}
        step={0.5}
        onChange={setInflation}
        helperMin="2%"
        helperMid="6% (India Avg)"
        helperMax="12%"
      />
    </CalculatorShell>
  );
}

// ============================================================
// 10. Compound Interest Calculator View
// ============================================================
export function CompoundInterestCalculatorView() {
  const tool = getToolBySlug("compound-interest-calculator")!;
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(15);
  const [frequency, setFrequency] = useState<"annually" | "half-yearly" | "quarterly" | "monthly">("annually");

  const res = calculateCompoundInterest(principal, rate, years, frequency);

  const reset = () => {
    setPrincipal(500000);
    setRate(10);
    setYears(15);
    setFrequency("annually");
  };

  const chartData = res.yearlyData.map((d) => ({
    year: d.year,
    invested: d.invested,
    value: d.value,
  }));

  return (
    <CalculatorShell
      tool={tool}
      results={
        <>
          <div>
            <PrimaryResultCard
              label="Maturity Value with Compounding"
              value={res.totalAmount}
              subValueLabel={`Initial ₹${principal.toLocaleString("en-IN")} compounded ${frequency} at ${rate}% for ${years} years`}
            />
            <div className="grid grid-cols-2 gap-3 my-5">
              <MetricCard label="Principal Invested" value={res.principal} />
              <MetricCard label="Total Interest Earned" value={res.compoundInterest} variant="emerald" />
              <MetricCard label="Simple Interest Equivalent" value={res.simpleInterestEquivalent} />
              <MetricCard label="Compounding Bonus" value={res.compoundingBonus} variant="emerald" />
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-secondary)]">
              Compounding generates ₹{res.compoundingBonus.toLocaleString("en-IN")} MORE wealth than simple interest because interest earned in prior periods earns interest of its own.
            </div>
          </div>
          <div>
            <CalculatorActions onReset={reset} />
            <CalculatorCTA primaryActionText="Begin Your Compounding Journey" />
          </div>
        </>
      }
      charts={
        <GrowthChartSVG
          data={chartData}
          title="The Exponential Curve of Compounding"
          subtitle="Watch how interest earned overtakes principal capital exponentially in later years"
        />
      }
      educationalPrimer={{
        title: "The Eighth Wonder of the World: How Compounding Multiplies Wealth",
        paragraphs: [
          "Albert Einstein famously observed: 'Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.'",
          "In simple interest, your returns grow linearly. In compound interest, your earnings are reinvested to produce additional earnings, turning your growth trajectory into an exponential hockey-stick curve.",
        ],
        takeaways: [
          "Time in the market matters far more than timing the market.",
          "The most dramatic wealth creation occurs in the final 30% of your investment horizon.",
          "Higher compounding frequencies (quarterly, monthly) yield marginally higher effective annual rates.",
        ],
      }}
      assumptions={[
        "Formula: A = P * (1 + r/n)^(n*t), where n is compounding frequency.",
        "Assumes no early withdrawals or capital redemptions before maturity.",
      ]}
    >
      <CurrencyInput
        id="ci-principal"
        label="Principal Investment Amount (₹)"
        value={principal}
        min={10000}
        max={50000000}
        step={10000}
        sliderMin={10000}
        sliderMax={2500000}
        sliderStep={25000}
        onChange={setPrincipal}
        helperMin="₹10,000"
        helperMid="₹12.5 Lakh"
        helperMax="₹25 Lakh"
      />
      <PercentageInput
        id="ci-rate"
        label="Annual Interest / Growth Rate (% p.a.)"
        value={rate}
        min={4}
        max={20}
        step={0.5}
        onChange={setRate}
        helperMin="4% (Savings)"
        helperMid="10% (Index/Hybrid)"
        helperMax="20% (High Growth)"
      />
      <DurationInput
        id="ci-years"
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
      <SelectInput
        id="ci-freq"
        label="Compounding Frequency"
        value={frequency}
        options={[
          { value: "annually", label: "Annually (1x / yr)" },
          { value: "half-yearly", label: "Semi-Annually (2x / yr)" },
          { value: "quarterly", label: "Quarterly (4x / yr)" },
          { value: "monthly", label: "Monthly (12x / yr)" },
        ]}
        onChange={(val) => setFrequency(val as "annually" | "half-yearly" | "quarterly" | "monthly")}
      />
    </CalculatorShell>
  );
}
