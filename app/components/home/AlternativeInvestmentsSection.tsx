import Link from "next/link";
import { ArrowRight, Gem, ShieldAlert, Sparkles, Briefcase, Building2, Lock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface TierVehicle {
  tier: string;
  badge: string;
  title: string;
  subtitle: string;
  minimumStatutory: string;
  horizon: string;
  custody: string;
  icon: typeof Briefcase;
  description: string;
  features: string[];
  href: string;
  highlightColor: string;
}

const TIERS: TierVehicle[] = [
  {
    tier: "TIER 01",
    badge: "SEBI Mandated Portfolio",
    title: "Portfolio Management Services (PMS)",
    subtitle: "High-Conviction Concentrated Equity Mandates",
    minimumStatutory: "₹50 Lakhs (Statutory SEBI Minimum)",
    horizon: "3 – 5+ Years",
    custody: "Direct in Client Demat (Zero Pooling)",
    icon: Briefcase,
    description:
      "Specialized discretionary and non-discretionary equity portfolios managed by experienced institutional fund managers. Designed for investors seeking focused alpha beyond broad market indices.",
    features: [
      "Direct ownership of high-conviction underlying stocks",
      "Tailored discretionary & non-discretionary execution",
      "Direct institutional custodian reporting & audit trails",
      "Active cash calls during macro headwinds",
    ],
    href: "/investments/pms",
    highlightColor: "var(--color-primary)",
  },
  {
    tier: "TIER 02",
    badge: "Alternative Asset Class",
    title: "Alternative Investment Funds (AIF)",
    subtitle: "Private Equity, Venture Debt & Long-Short Hedge",
    minimumStatutory: "₹1 Crore (Statutory SEBI Minimum)",
    horizon: "4 – 7 Years (Illiquid Lifecycle)",
    custody: "SEBI Registered Pooled Trust / Custody",
    icon: Gem,
    description:
      "SEBI-regulated Category II (Private Credit, Real Estate, PE) and Category III (Long-Short Market Neutral) pooled strategies offering returns uncorrelated with standard public equities.",
    features: [
      "Access to private credit and institutional debt yields",
      "Market-neutral and directional long-short hedging",
      "Pre-screened institutional fund managers",
      "Staged capital drawdowns over investment lifecycle",
    ],
    href: "/investments/aif",
    highlightColor: "var(--color-secondary)",
  },
  {
    tier: "TIER 03",
    badge: "Private Growth Markets",
    title: "Unlisted Shares & Pre-IPO",
    subtitle: "Late-Stage Private Tech & Industrial Giants",
    minimumStatutory: "Accredited Portfolio Allocation",
    horizon: "2 – 4 Years (Pre-Listing Horizon)",
    custody: "CDSL / NSDL Demat Transfer",
    icon: Sparkles,
    description:
      "Direct private market allocations into mature pre-IPO unicorns and established unlisted enterprises before formal stock exchange listing and institutional price discovery.",
    features: [
      "Pre-market valuation discovery before retail IPOs",
      "Institutional balance sheet & governance screening",
      "Direct off-market demat credit via RTA transfer",
      "High growth upside coupled with liquidity lockups",
    ],
    href: "/investments/unlisted-pre-ipo",
    highlightColor: "var(--color-tertiary)",
  },
];

export function AlternativeInvestmentsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface-canvas)] border-t border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Institutional Spectrum</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Alternative & Private Markets
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
              Curated access to sophisticated investment vehicles beyond retail mutual funds, structured strictly
              for high-net-worth individuals, corporate treasuries, and family offices.
            </p>
          </div>
          <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)] shadow-xs">
            <Building2 size={16} className="text-[var(--color-primary)] shrink-0" />
            <span className="font-medium">HNW & Family Office Mandates</span>
          </div>
        </div>

        {/* 3 Institutional Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.title}
                className="bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all flex flex-col justify-between group overflow-hidden"
              >
                {/* Card Top Banner */}
                <div>
                  <div className="px-7 pt-7 pb-5 border-b border-[var(--color-border-subtle)] bg-slate-50/50">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[11px] font-bold tracking-widest text-[var(--color-text-muted)] uppercase"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {tier.tier}
                      </span>
                      <span className="text-[10px] font-semibold text-[var(--color-secondary-500)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded-md border border-[var(--color-border-strong)]">
                        {tier.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Icon size={19} />
                      </div>
                      <div>
                        <h3
                          className="text-base font-bold text-[var(--color-text-primary)] leading-tight group-hover:text-[var(--color-primary-600)] transition-colors"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {tier.title}
                        </h3>
                        <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                          {tier.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body Specs */}
                  <div className="p-7">
                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[var(--color-surface-low)] mb-5 text-[11px]">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">
                          Minimum Threshold
                        </span>
                        <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block leading-tight">
                          {tier.minimumStatutory}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">
                          Target Horizon
                        </span>
                        <span className="font-bold text-[var(--color-text-primary)] mt-0.5 block leading-tight">
                          {tier.horizon}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-5">
                      {tier.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] block">
                        Institutional Highlights
                      </span>
                      <ul className="flex flex-col gap-2">
                        {tier.features.map((feat) => (
                          <li key={feat} className="text-xs font-medium text-[var(--color-text-secondary)] flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-7 pb-6 pt-0">
                  <Link
                    href={tier.href}
                    className="w-full py-2.5 px-4 rounded-xl border border-[var(--color-border-subtle)] group-hover:border-[var(--color-primary)] bg-white text-xs font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary-600)] flex items-center justify-between transition-colors shadow-xs"
                  >
                    <span>Explore Structure & Mandates</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory & Risk Caveat */}
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
          <ShieldAlert size={18} className="text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-900">Statutory Regulatory Notice:</strong> Portfolio Management Services (PMS) require a statutory SEBI minimum commitment of ₹50 Lakhs. Alternative Investment Funds (AIF) require a statutory minimum of ₹1 Crore. Unlisted shares involve valuation risk, transfer illiquidity, and variable listing timelines. These vehicles are intended strictly for qualified high-net-worth investors capable of evaluating risk-return parameters.
          </p>
        </div>
      </Container>
    </section>
  );
}
