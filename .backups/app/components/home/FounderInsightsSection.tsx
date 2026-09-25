import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { REGULATORY } from "@/lib/constants";

export function FounderInsightsSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)]">
      <Container>
        {/* Founder */}
        <div className="bg-white rounded-lg p-7 md:p-10 border border-[var(--color-border-strong)] mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Portrait & Credentials */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4 pb-6 sm:pb-0 lg:border-r border-[var(--color-border-subtle)] lg:pr-8">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden border border-[var(--color-border-strong)] shrink-0">
                <Image
                  src="/brand/founder-panchanan-kumar.jpg"
                  alt={REGULATORY.founderName}
                  fill
                  className="object-cover object-top"
                  sizes="120px"
                />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-secondary)]">
                  Founder & Principal
                </p>
                <h3 className="text-xl font-extrabold text-[var(--color-primary)] mt-0.5">
                  {REGULATORY.founderName}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  Mutual Fund Distributor
                </p>
                <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] text-[11px] font-mono font-bold text-[var(--color-secondary)]">
                  <ShieldCheck size={12} />
                  <span>AMFI {REGULATORY.arnNumber}</span>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="lg:col-span-9 flex flex-col justify-between">
              <div>
                <SectionLabel>Founder Practice Ethos</SectionLabel>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] tracking-tight mt-1 mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Built around trust. Designed around your goals.
                </h3>
                <blockquote className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed italic border-l-2 border-[var(--color-secondary)] pl-4 mb-6">
                  &ldquo;True wealth creation is not about chasing temporary market trends. It is about building a disciplined, goal-aligned asset allocation that protects your family today and compounds steadily for tomorrow.&rdquo;
                </blockquote>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--color-text-primary)] font-medium">
                  {["Direct AMC Folio Holding", "Objective Asset Allocation", "Regulated SEBI Framework"].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[var(--color-secondary)] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/about"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5"
                >
                  <span>Learn More About Panchanan Kumar & FINREV</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-md bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-bold transition-colors inline-flex items-center gap-2"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Editorial */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div className="max-w-2xl">
              <SectionLabel>Investor Knowledge</SectionLabel>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] tracking-tight mt-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Insights for Better Financial Decisions.
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
                Objective analysis on asset allocation, compounding discipline, and market dynamics.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
            >
              <span>Visit Insights Hub</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Featured Article (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-lg border border-[var(--color-border-strong)] p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold text-white bg-[var(--color-secondary)] px-2.5 py-0.5 tracking-wide uppercase">
                    Featured Guide
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                    <CalendarDays size={11} />
                    Sep 2026
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">· 5 min · Mutual Fund Education</span>
                </div>
                <h4
                  className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Demystifying NAV, Expense Ratios & Total Return Index
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                  Why a lower NAV does not mean a fund is cheap, and how expense ratio compression combined with index reinvestment impacts 15-to-20-year wealth compounding outcomes.
                </p>
                <div className="space-y-2 border-t border-[var(--color-border-subtle)] pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)]">Core Insights</p>
                  {[
                    "NAV reflects per-unit net market value, not future appreciation potential.",
                    "A 0.5% difference in recurring expense ratios compounds significantly across two decades.",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-secondary)] shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-5 border-t border-[var(--color-border-subtle)] mt-5">
                <Link
                  href="/insights/mutual-fund-guide"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5 group"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Supporting Articles (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {[
                {
                  category: "Behavioral Finance",
                  date: "Aug 2026",
                  read: "6 min",
                  title: "Why Pausing SIPs in Market Corrections Destroys Returns",
                  desc: "Empirical data showing why continuous rupee-cost averaging during market drawdowns delivers the highest long-term compounding.",
                  href: "/insights/blog",
                },
                {
                  category: "Fixed Income",
                  date: "Jul 2026",
                  read: "7 min",
                  title: "Interest Rate Cycles & Duration Risk in Debt Funds",
                  desc: "How RBI policy shifts impact target maturity funds, corporate bond buckets, and liquid treasury allocations.",
                  href: "/insights/blog",
                },
              ].map((article) => (
                <div key={article.title} className="bg-white rounded-lg border border-[var(--color-border-strong)] p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[var(--color-secondary)] bg-[var(--color-surface-canvas)] px-2 py-0.5 border border-[var(--color-border-subtle)] uppercase">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-[var(--color-text-muted)]">
                        <CalendarDays size={10} />
                        {article.date}
                      </span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">· {article.read}</span>
                    </div>
                    <h4 className="text-base font-bold text-[var(--color-primary)] mb-2 leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {article.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--color-border-subtle)] mt-4">
                    <Link
                      href={article.href}
                      className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1 group"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
