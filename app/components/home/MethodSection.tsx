import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Search, Compass, Zap, Layers, RefreshCw } from "lucide-react";

const STAGES = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Cashflow Analysis",
    description:
      "We begin by understanding your specific financial commitments, surplus liquidity, risk appetite, and time horizons.",
  },
  {
    step: "02",
    icon: Compass,
    title: "Asset Allocation Architecture",
    description:
      "Formulate a mathematically balanced allocation across diversified equity, liquid shields, fixed income, and protection.",
  },
  {
    step: "03",
    icon: Zap,
    title: "100% Paperless Onboarding",
    description:
      "Seamless Aadhaar/PAN digital KYC completion and automated bank NACH mandates for frictionless monthly execution.",
  },
  {
    step: "04",
    icon: Layers,
    title: "Direct Folio Consolidation",
    description:
      "All schemes held directly in your name across respective AMCs. Zero pool accounts, ensuring total investor security.",
  },
  {
    step: "05",
    icon: RefreshCw,
    title: "Periodic Audit & Rebalancing",
    description:
      "Ongoing portfolio health check, tax-efficient profit harvesting, and horizon-tapering as your target dates draw near.",
  },
];

export function MethodSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface-canvas)] border-t border-[var(--color-border-subtle)]">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <SectionLabel>Institutional Discipline</SectionLabel>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            How FINREV Works
          </h2>
          <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
            Investing is easy. Investing right requires a disciplined, structured, and repeatable architecture.
          </p>
        </div>

        {/* 5 Sequential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isLastOnTablet = idx === STAGES.length - 1;
            return (
              <div
                key={stage.step}
                className={`bg-white rounded-2xl p-5 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all flex flex-col justify-between ${
                  isLastOnTablet ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {stage.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-low)] text-[var(--color-primary)] flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                  </div>
                  <h3
                    className="text-sm font-bold text-[var(--color-text-primary)] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="w-full h-1 bg-[var(--color-surface-low)] rounded-full mt-5 overflow-hidden">
                  <div className="w-full h-full bg-[var(--color-secondary)]" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
