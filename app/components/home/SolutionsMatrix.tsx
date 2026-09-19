import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CORE = [
  { title: "Mutual Funds", desc: "Diversified portfolios across Large, Flexi, Mid Cap and Hybrid categories.", href: "/investments/mutual-funds" },
  { title: "Systematic Investment Plans (SIP)", desc: "Automated monthly investing harnessing rupee-cost averaging.", href: "/investments/sip" },
  { title: "Lumpsum Deployment & STP", desc: "Systematic capital staging to manage entry valuations and market swings.", href: "/investments/lumpsum" },
  { title: "Bonds & Fixed Income", desc: "Government securities and high-grade corporate bonds for steady yield.", href: "/investments/bonds" },
];

const ADVANCED = [
  { title: "Portfolio Management Services (PMS)", desc: "Professional Portfolio Management with direct demat ownership and institutional research.", href: "/investments/pms" },
  { title: "Alternative Investment Funds (AIF)", desc: "SEBI-regulated Category II and III private equity, debt, and venture structures.", href: "/investments/aif" },
  { title: "Unlisted & Pre-IPO Equities", desc: "Pre-listing shares of fundamentally strong businesses prior to public offering.", href: "/investments/unlisted-pre-ipo" },
];

export function SolutionsMatrix() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Investment Solutions</SectionLabel>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight mt-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Key Investment Solutions.
            </h2>
            <p className="text-base text-[var(--color-text-secondary)] mt-2.5 leading-relaxed">
              We structure investments across core compounding assets and specialized alternative allocations.
            </p>
          </div>
          <Link
            href="/investments"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
          >
            <span>Explore All Investment Categories</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Tier 1: Core Investments (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-[var(--color-border-strong)]">
            <div className="px-7 py-5 border-b border-[var(--color-border-subtle)]">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-0.5">
                Core Investments
              </p>
              <h3 className="text-lg font-bold text-[var(--color-primary)]">
                Systematic Compounding & Capital Preservation
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
                Direct portfolio access across equity, debt, and hybrid fund houses. Scheme selection aligned strictly to your risk profile and milestone horizons.
              </p>
            </div>

            {/* Core items — plain list rows */}
            <div className="divide-y divide-[var(--color-border-subtle)]">
              {CORE.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center justify-between px-7 py-4 hover:bg-[var(--color-surface-canvas)] transition-colors group"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] shrink-0 ml-4 transition-colors" />
                </Link>
              ))}
            </div>

            <div className="px-7 py-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
              <span className="text-xs text-[var(--color-text-muted)]">Direct AMC Folios · Individual Ownership</span>
              <Link
                href="/investments"
                className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1"
              >
                <span>View Details</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Tier 2: Advanced Solutions (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-lg border border-[var(--color-border-strong)]">
            <div className="px-6 py-5 border-b border-[var(--color-border-subtle)]">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-0.5">
                Advanced Solutions
              </p>
              <h3 className="text-base font-bold text-[var(--color-primary)]">
                Specialized Portfolio Management
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
                For qualified investors seeking professional portfolio management and private market opportunities.
              </p>
            </div>

            <div className="divide-y divide-[var(--color-border-subtle)]">
              {ADVANCED.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center justify-between px-6 py-4 hover:bg-[var(--color-surface-canvas)] transition-colors group"
                >
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] shrink-0 ml-4 transition-colors" />
                </Link>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
              <span className="text-xs text-[var(--color-text-muted)]">Qualified Portfolio Solutions</span>
              <Link
                href="/investments/pms"
                className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
