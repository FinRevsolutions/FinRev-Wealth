import { ShieldCheck, Building2, Target, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { REGULATORY } from "@/lib/constants";

const TRUST_METRICS = [
  {
    icon: ShieldCheck,
    title: "AMFI Registered MFD",
    highlight: REGULATORY.arnNumber,
    description: "Certified Mutual Fund Distributor",
  },
  {
    icon: Building2,
    title: "Multiple AMCs",
    highlight: "Comprehensive Access",
    description: "Leading Fund Houses in India",
  },
  {
    icon: Target,
    title: "Goal-Mapped Planning",
    highlight: "Milestone-Driven",
    description: "Targeted Life-Stage Roadmaps",
  },
  {
    icon: HeartHandshake,
    title: "Life & Health Protection",
    highlight: "Capital Defense",
    description: "Insulated Family Security",
  },
];

export function TrustStrip() {
  return (
    <section className="py-4 bg-white border-b border-[var(--color-border-subtle)]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border-subtle)]">
          {TRUST_METRICS.map(({ icon: Icon, title, highlight, description }, idx) => (
            <div
              key={title}
              className={`flex items-center gap-3 py-2 px-2 sm:px-4 ${idx !== 0 ? "sm:pl-6" : ""}`}
            >
              <Icon size={16} className="text-[var(--color-secondary)] shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)] truncate">
                  {title}
                </p>
                <p className="text-xs font-semibold text-[var(--color-secondary)] truncate">
                  {highlight}
                </p>
                <p className="text-[11px] text-[var(--color-text-muted)] truncate hidden sm:block">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
