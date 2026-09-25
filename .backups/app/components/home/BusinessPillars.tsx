import Link from "next/link";
import {
  TrendingUp,
  Target,
  Umbrella,
  Gem,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PILLARS = [
  {
    icon: TrendingUp,
    label: "Invest",
    color: "emerald",
    headline: "Grow Your Wealth",
    description:
      "Access mutual funds, SIP, lumpsum and bond solutions across 40+ leading AMCs — all under one relationship.",
    href: "/investments",
    items: ["Mutual Funds", "SIP", "Lumpsum", "Bonds"],
    accent: "bg-[var(--color-emerald-subtle)] border-[var(--color-border-strong)]",
    iconColor: "text-[var(--color-secondary)]",
    iconBg: "bg-[var(--color-secondary)]",
    ctaColor: "text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)]",
  },
  {
    icon: Target,
    label: "Plan",
    color: "navy",
    headline: "Plan for Life's Milestones",
    description:
      "From buying your first home to a comfortable retirement — every goal mapped to a disciplined financial strategy.",
    href: "/wealth-solutions",
    items: ["Goal Planning", "Retirement", "Child Education", "Wealth Creation"],
    accent: "bg-[var(--color-surface-low)] border-[var(--color-border-subtle)]",
    iconColor: "text-[var(--color-primary)]",
    iconBg: "bg-[var(--color-primary)]",
    ctaColor: "text-[var(--color-primary)] hover:text-[var(--color-inverse-surface)]",
  },
  {
    icon: Umbrella,
    label: "Protect",
    color: "amber",
    headline: "Protect What Matters",
    description:
      "Comprehensive life, health and general insurance solutions to shield your family and assets from uncertainty.",
    href: "/protection",
    items: ["Life Insurance", "Term Insurance", "Health Insurance", "General Insurance"],
    accent: "bg-[var(--color-gold-subtle)] border-[#fde68a]",
    iconColor: "text-[var(--color-on-tertiary-container)]",
    iconBg: "bg-[var(--color-tertiary)]",
    ctaColor: "text-[var(--color-on-tertiary-container)] hover:text-[var(--color-tertiary-container)]",
  },
  {
    icon: Gem,
    label: "Explore",
    color: "navy",
    headline: "Beyond Conventional",
    description:
      "For investors seeking diversified, institutional-grade opportunities beyond standard mutual funds.",
    href: "/investments/pms",
    items: ["PMS", "AIF", "Unlisted Shares", "Pre-IPO"],
    accent: "bg-[var(--color-surface-high)] border-[var(--color-border-strong)]",
    iconColor: "text-[var(--color-text-primary)]",
    iconBg: "bg-[var(--color-inverse-surface)]",
    ctaColor: "text-[var(--color-text-primary)] hover:text-[var(--color-inverse-surface)]",
  },
];

export function BusinessPillars() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-surface-canvas)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <SectionLabel>Complete Financial Ecosystem</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Everything You Need. One Trusted Relationship.
            </h2>
          </div>
          <p className="text-base text-[var(--color-text-muted)] max-w-sm md:text-right">
            FINREV is not just a mutual fund distributor. We are your complete financial services partner.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map(({ icon: Icon, label, headline, description, href, items, accent, iconColor, iconBg, ctaColor }) => (
            <Link
              key={label}
              href={href}
              className={[
                "group flex flex-col p-6 rounded-xl border transition-all duration-200",
                "hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5",
                "bg-white border-[var(--color-border-subtle)]",
              ].join(" ")}
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${iconBg}`}>
                <Icon size={20} className="text-white" />
              </div>

              {/* Eyebrow */}
              <span
                className={[
                  "text-xs font-bold uppercase tracking-widest mb-1.5 px-2 py-0.5 rounded-sm self-start border",
                  accent,
                  iconColor,
                ].join(" ")}
              >
                {label}
              </span>

              {/* Heading */}
              <h3
                className="text-lg font-bold text-[var(--color-text-primary)] mb-2 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {headline}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 flex-1">
                {description}
              </p>

              {/* Sub-items */}
              <ul className="flex flex-col gap-1.5 mb-5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs font-medium text-[var(--color-text-muted)]"
                  >
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 ${iconBg}`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <span
                className={[
                  "flex items-center gap-1.5 text-xs font-bold border-t border-[var(--color-border-subtle)] pt-4",
                  ctaColor,
                  "transition-colors",
                ].join(" ")}
              >
                Explore {label}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
