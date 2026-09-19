import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getToolBySlug, TOOLS_REGISTRY } from "@/lib/tools-registry";
import { createPageMetadata } from "@/lib/metadata";

// Category 1: Investment Views
import {
  STPCalculatorView,
  SWPCalculatorView,
  SIPvsLumpsumCalculatorView,
  CAGRCalculatorView,
  XIRRCalculatorView,
  InvestmentReturnCalculatorView,
  CompoundInterestCalculatorView,
} from "@/components/calculators/views/InvestmentViews";

// Category 2: Goal Planning Views
import {
  ChildEducationCalculatorView,
  MarriageGoalCalculatorView,
  DreamHomeCalculatorView,
  FIRECalculatorView,
  InflationCalculatorView,
} from "@/components/calculators/views/GoalViews";

// Category 3: Personal Finance Views
import {
  EmergencyFundCalculatorView,
  NetWorthCalculatorView,
  SavingsRateCalculatorView,
  DTICalculatorView,
  AssetAllocationCalculatorView,
} from "@/components/calculators/views/PersonalFinanceViews";

// Category 4: Protection Views
import {
  LifeInsuranceNeedCalculatorView,
  HumanLifeValueCalculatorView,
  HealthInsuranceCalculatorView,
} from "@/components/calculators/views/ProtectionViews";

// Category 5: Loans & Tax Views
import {
  LoanEMICalculatorView,
  HomeLoanCalculatorView,
  LoanPrepaymentCalculatorView,
  RentVsBuyCalculatorView,
  NPSCalculatorView,
  PPFCalculatorView,
  EPFCalculatorView,
} from "@/components/calculators/views/LoanTaxViews";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

const CONCRETE_SLUGS = new Set([
  "sip-calculator",
  "step-up-sip-calculator",
  "lumpsum-calculator",
  "goal-planner",
  "retirement-calculator",
]);

export async function generateStaticParams() {
  return TOOLS_REGISTRY.filter((t) => !CONCRETE_SLUGS.has(t.slug)).map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return createPageMetadata("Calculator Not Found", "The requested calculator could not be found.", "/tools");
  }

  return createPageMetadata(
    `${tool.title} | FINREV Financial Tools`,
    tool.description,
    `/tools/${tool.slug}`
  );
}

export default async function DynamicToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  switch (slug) {
    // Category 1: Investment
    case "stp-calculator":
      return <STPCalculatorView />;
    case "swp-calculator":
      return <SWPCalculatorView />;
    case "sip-vs-lumpsum-calculator":
      return <SIPvsLumpsumCalculatorView />;
    case "cagr-calculator":
      return <CAGRCalculatorView />;
    case "xirr-calculator":
      return <XIRRCalculatorView />;
    case "investment-return-calculator":
      return <InvestmentReturnCalculatorView />;
    case "compound-interest-calculator":
      return <CompoundInterestCalculatorView />;

    // Category 2: Goal Planning
    case "child-education-calculator":
      return <ChildEducationCalculatorView />;
    case "marriage-goal-calculator":
      return <MarriageGoalCalculatorView />;
    case "dream-home-calculator":
      return <DreamHomeCalculatorView />;
    case "fire-calculator":
      return <FIRECalculatorView />;
    case "inflation-calculator":
      return <InflationCalculatorView />;

    // Category 3: Personal Finance
    case "emergency-fund-calculator":
      return <EmergencyFundCalculatorView />;
    case "net-worth-calculator":
      return <NetWorthCalculatorView />;
    case "savings-rate-calculator":
      return <SavingsRateCalculatorView />;
    case "dti-calculator":
      return <DTICalculatorView />;
    case "asset-allocation-calculator":
      return <AssetAllocationCalculatorView />;

    // Category 4: Protection
    case "life-insurance-need-calculator":
      return <LifeInsuranceNeedCalculatorView />;
    case "human-life-value-calculator":
      return <HumanLifeValueCalculatorView />;
    case "health-insurance-calculator":
      return <HealthInsuranceCalculatorView />;

    // Category 5: Loans & Tax
    case "loan-emi-calculator":
      return <LoanEMICalculatorView />;
    case "home-loan-calculator":
      return <HomeLoanCalculatorView />;
    case "loan-prepayment-calculator":
      return <LoanPrepaymentCalculatorView />;
    case "rent-vs-buy-calculator":
      return <RentVsBuyCalculatorView />;
    case "nps-calculator":
      return <NPSCalculatorView />;
    case "ppf-calculator":
      return <PPFCalculatorView />;
    case "epf-calculator":
      return <EPFCalculatorView />;

    default:
      notFound();
  }
}
