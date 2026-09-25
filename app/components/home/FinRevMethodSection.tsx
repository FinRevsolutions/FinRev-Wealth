import Link from "next/link";
import { ArrowRight } from "lucide-react";

const METHOD_ITEMS = [
  {
    step: "01",
    tag: "INVEST",
    headline: "Build the investment foundation.",
    summary:
      "Disciplined mutual fund portfolios, systematic SIP compounding mandates, and high-credit fixed income securities tailored strictly to risk capacity and time horizon.",
    deliverables: [
      "Equity & Hybrid Mutual Funds",
      "Direct AMC Folios (Zero Pool Accounts)",
      "Automated Monthly SIP Mandates",
      "Sovereign & High-Quality Corporate Bonds",
    ],
    href: "/investments",
    linkText: "Explore Investment Foundation",
  },
  {
    step: "02",
    tag: "PLAN",
    headline: "Connect money with life milestones.",
    summary:
      "Map every invested rupee to concrete personal milestones — children's higher education, residential asset acquisition, and post-retirement independence, modeled against realistic inflation.",
    deliverables: [
      "Inflation-Adjusted Retirement Corpus",
      "Higher Education Milestone Funds",
      "Asset Acquisition Roadmaps",
      "Goal-Based Cash Flow Diagnostics",
    ],
    href: "/wealth-solutions",
    linkText: "Explore Milestone Planning",
  },
  {
    step: "03",
    tag: "PROTECT",
    headline: "Build resilience around what matters.",
    summary:
      "Pure-risk term life protection and comprehensive health insurance buffers designed to insulate your family and ensure unplanned life emergencies never force premature liquidation of compounding assets.",
    deliverables: [
      "Pure Term Life Protection Cover",
      "Comprehensive Health & Critical Care",
      "Liquid Emergency Capital Shield",
      "MWPA Section 6 Beneficial Protection",
    ],
    href: "/protection",
    linkText: "Explore Protection Architecture",
  },
  {
    step: "04",
    tag: "GROW",
    headline: "Review, adapt and progress.",
    summary:
      "Annual portfolio diagnostic reviews, disciplined asset rebalancing, tax-efficient capital realization, and curated access to specialized PMS and AIF vehicles for qualified investors.",
    deliverables: [
      "Consolidated CAS Portfolio Diagnostics",
      "Asset Allocation Rebalancing Blueprint",
      "Specialized PMS & AIF Market Access",
      "Multi-Decade Wealth Preservation",
    ],
    href: "/wealth-solutions/wealth-creation",
    linkText: "Explore Specialized Compounding",
  },
];

export function FinRevMethodSection() {
  return (
    <section
      className="py-16 md:py-24 lg:py-28 bg-white border-b border-[var(--color-border-subtle)]"
      aria-label="The FINREV Method"
      id="method"
    >
      <div className="container-page">
        {/* Large Editorial Statement */}
        <div className="max-w-4xl pb-10 sm:pb-12 border-b border-[var(--color-border-strong)]">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-finrev-gold)]" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              THE FINREV METHOD
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block text-[var(--color-primary)]">
              Money needs direction.
            </span>
            <span className="block text-[var(--color-secondary)] mt-1 sm:mt-2">
              Wealth needs structure.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-5 max-w-2xl leading-relaxed font-normal">
            We structure your family balance sheet through an interconnected four-part operating system — building savings, planning for milestones, defending downside risks, and compounding capital over generations.
          </p>
        </div>

        {/* Editorial Rows with Large Typography & Rules — Zero Cards */}
        <div className="divide-y divide-[var(--color-border-subtle)]">
          {METHOD_ITEMS.map((item) => (
            <div
              key={item.step}
              className="py-10 sm:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start group"
            >
              {/* Step Identifier (2 cols) */}
              <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start justify-between lg:justify-start gap-2">
                <span className="font-mono text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)]/25 group-hover:text-[var(--color-secondary)] transition-colors">
                  {item.step}
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-[var(--color-secondary)] uppercase">
                  {item.tag}
                </span>
              </div>

              {/* Core Headline & Narrative (6 cols) */}
              <div className="lg:col-span-6">
                <h3
                  className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[var(--color-primary)] leading-tight tracking-tight mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.headline}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed font-normal mb-5">
                  {item.summary}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors group/link"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Key Architecture Deliverables (4 cols) — Pure Typography with Rules */}
              <div className="lg:col-span-4 border-l border-[var(--color-border-subtle)] pl-6 sm:pl-8">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-3">
                  Pillar Architecture
                </span>
                <ul className="space-y-2.5">
                  {item.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-primary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-finrev-gold)] mt-1.5 shrink-0" />
                      <span className="leading-snug">{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
