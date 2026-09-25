import { REGULATORY } from "@/lib/constants";

const TRUST_METRICS = [
  {
    title: "AMFI REGISTERED",
    subtitle: "Mutual Fund Distributor",
  },
  {
    title: `ARN-${REGULATORY.arnNumber}`,
    subtitle: "Authorized Credential",
  },
  {
    title: "MULTIPLE AMC ACCESS",
    subtitle: "Direct Investor Folios",
  },
  {
    title: "GOAL-MAPPED PLANNING",
    subtitle: "Milestone Roadmaps",
  },
  {
    title: "LIFE & HEALTH PROTECTION",
    subtitle: "Downside Capital Shield",
  },
];

export function TrustArchitectureSection() {
  return (
    <section
      className="w-full bg-white border-b border-[var(--color-border-subtle)]"
      aria-label="Trust Architecture & Credentials"
    >
      <div className="container-page py-4 sm:py-5">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border-subtle)]">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`flex-1 min-w-[160px] flex items-center gap-3 ${
                idx > 0 ? "pt-2.5 sm:pt-0 sm:pl-4 lg:pl-6" : ""
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-finrev-gold)] shrink-0" />
              <div>
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[var(--color-primary)] block uppercase">
                  {metric.title}
                </span>
                <span className="text-[10px] text-[var(--color-text-muted)] font-medium block">
                  {metric.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
