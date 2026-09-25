"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { REGULATORY } from "@/lib/constants";

const JOURNEY_MILESTONES = [
  {
    phase: "01",
    name: "BUILD",
    tagline: "Systematic Capital Accumulation",
    desc: "Automated monthly SIP mandates, foundational emergency liquidity reserves, and high-quality diversified mutual fund portfolios.",
    deliverable: "Direct AMC folios & automated NACH mandates",
    href: "/investments/sip",
  },
  {
    phase: "02",
    name: "PROTECT",
    tagline: "Downside Capital Shield & Milestone Lock",
    desc: "Pure-risk term life protection and super top-up medical covers insulating compounding assets from unforeseen clinical or life shocks.",
    deliverable: "Pure term life & comprehensive health shield",
    href: "/protection",
  },
  {
    phase: "03",
    name: "GROW",
    tagline: "Specialized Compounding & Rebalancing",
    desc: "Annual portfolio diagnostic audits, tax-efficient profit realization, and curated access to specialized PMS and AIF opportunities for eligible portfolios.",
    deliverable: "Annual CAS diagnostic audit & rebalancing blueprint",
    href: "/wealth-solutions/wealth-creation",
  },
  {
    phase: "04",
    name: "PRESERVE",
    tagline: "Longevity Cashflow & Generational Legacy",
    desc: "Inflation-adjusted Systematic Withdrawal Plans (SWP) for perpetual retirement income, followed by frictionless intergenerational wealth transfer.",
    deliverable: "Automated SWP cashflow engine & nominee audit",
    href: "/wealth-solutions/retirement-planning",
  },
];

export function FinancialJourneySection() {
  return (
    <section
      className="py-16 md:py-24 bg-white border-b border-[var(--color-border-subtle)]"
      aria-label="Financial Journey Architecture"
    >
      <div className="container-page">
        {/* Editorial Split Layout: Left 45% Authentic Photography & Credentials, Right 55% Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Photography Plate (Human & Premium) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-[4/5] max-h-[500px] rounded-[4px] overflow-hidden border border-[var(--color-border-strong)] bg-slate-900 shadow-md">
              <Image
                src="/brand/founder-panchanan-kumar.jpg"
                alt="Panchanan Kumar — AMFI Registered Mutual Fund Distributor ARN-195797"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority={false}
              />
              {/* Subtle Lower Identification Tag */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071A2A] via-[#071A2A]/90 to-transparent p-5 pt-12">
                <div className="text-xs font-mono font-bold tracking-[0.16em] uppercase text-[var(--color-finrev-gold)]">
                  PANCHANAN KUMAR
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider font-medium mt-0.5">
                  Mutual Fund Distributor · ARN-195797
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  15+ Years Direct Market Experience
                </div>
              </div>
            </div>

            {/* Factual Regulatory Disclaimer Tag */}
            <div className="flex items-center gap-2 mt-3 text-[11px] text-[var(--color-text-muted)] font-mono">
              <ShieldCheck size={13} className="text-[var(--color-secondary)] shrink-0" />
              <span>Regulated under AMFI & SEBI Code of Conduct</span>
            </div>
          </div>

          {/* Right Column: Editorial Message & 4-Stage Timeline (55%) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                  FINANCIAL JOURNEY
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--color-primary)] tracking-tight leading-[1.12]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Every financial journey is different.
              </h2>

              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] mt-3 leading-relaxed font-normal">
                True wealth planning is not a one-size-fits-all formula. It is an evolving, multi-decade progression built around your specific risk appetite, milestone horizons, and family aspirations.
              </p>
            </div>

            {/* Timeline: BUILD • PROTECT • GROW • PRESERVE (Thin Rules, Editorial Layout) */}
            <div className="divide-y divide-[var(--color-border-subtle)] border-t border-b border-[var(--color-border-subtle)]">
              {JOURNEY_MILESTONES.map((m) => (
                <div key={m.name} className="py-4.5 sm:py-5 group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-extrabold text-[var(--color-secondary)]">
                        {m.phase}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                        {m.name}
                      </h3>
                      <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
                      <span className="text-xs font-medium text-[var(--color-text-muted)]">
                        {m.tagline}
                      </span>
                    </div>

                    <Link
                      href={m.href}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0 group/link"
                    >
                      <span>Explore</span>
                      <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed font-normal pl-0 sm:pl-7">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Consultation Link */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <span className="text-xs text-[var(--color-text-muted)] font-mono">
                AMFI Registered Distributor ARN-195797
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-white text-xs font-semibold rounded-[3px] hover:bg-[var(--color-secondary)] transition-colors shadow-sm"
              >
                <span>Map Your Financial Journey</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
