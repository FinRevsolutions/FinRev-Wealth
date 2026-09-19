"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    tag: "INVEST",
    title: "Build Your Wealth",
    desc: "Start systematic monthly SIPs or lumpsum deployments in regulated mutual fund portfolios and fixed income assets.",
    items: ["Mutual Funds & SIPs", "Government & Corporate Bonds", "Direct AMC Folio Holding"],
    href: "/investments",
  },
  {
    step: "02",
    tag: "PLAN",
    title: "Plan Around Your Goals",
    desc: "Calculate exact investment amounts required for life goals — from retirement independence to children's higher education.",
    items: ["Retirement Planning", "Children's Education Fund", "Goal-Based Investment Planning"],
    href: "/wealth-solutions",
  },
  {
    step: "03",
    tag: "PROTECT",
    title: "Protect What Matters",
    desc: "Shield your family and built wealth with pure-risk term life insurance and comprehensive health buffers before risking surplus capital.",
    items: ["Pure Term Life Cover", "Family Health Insurance", "Emergency Reserve Strategy"],
    href: "/protection",
  },
  {
    step: "04",
    tag: "GROW",
    title: "Build for the Long Term",
    desc: "Access specialized Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) for qualified, seasoned portfolios.",
    items: ["Portfolio Management (PMS)", "Alternative Investment Funds (AIF)", "Pre-IPO & Unlisted Opportunities"],
    href: "/investments/pms",
  },
];

export function FinancialJourneySection() {
  return (
    <section className="relative w-full bg-[var(--color-primary)] text-white py-20 lg:py-28 border-y border-[var(--color-primary-700)]">
      <div className="container-page">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-finrev-gold)] mb-4">
            The Financial Journey
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A disciplined approach to your{" "}
            <span className="text-[var(--color-secondary-500)]">financial journey.</span>
          </h2>
          <p className="text-base text-slate-300 mt-4 leading-relaxed max-w-2xl">
            We structure your wealth through an interconnected four-stage roadmap — building savings, planning for life goals, protecting against emergencies, and compounding capital over decades.
          </p>
        </div>

        {/* Editorial Numbered List — no individual cards */}
        <div className="divide-y divide-white/10">
          {STAGES.map((s, i) => (
            <div key={s.tag} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 group">
              {/* Step + Tag */}
              <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-3 md:gap-1 pt-0.5">
                <span className="text-2xl font-bold text-white/20 font-mono leading-none">{s.step}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-500)]">{s.tag}</span>
              </div>

              {/* Title + Description */}
              <div className="md:col-span-5">
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{s.desc}</p>
              </div>

              {/* Items + Link */}
              <div className="md:col-span-5">
                <ul className="space-y-1.5 mb-5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-secondary-500)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-[var(--color-secondary-500)] transition-colors"
                >
                  <span>Explore {s.tag}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <span>Multi-Decade Horizon · Regulated Mutual Fund Distribution · ARN-195797</span>
          <Link
            href="/tools"
            className="text-[var(--color-finrev-gold-light)] hover:text-white font-semibold transition-colors inline-flex items-center gap-1"
          >
            <span>Model Your Milestones in the Financial Tools Hub</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
