import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, BookOpen, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { REGULATORY } from "@/lib/constants";

export function FounderInsightsSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[var(--color-border-subtle)]" aria-label="Founder & Insights">
      <Container>
        {/* Tier 1: Founder Perspective (Editorial Profile) */}
        <div className="bg-[var(--color-surface-canvas)] rounded-[6px] border border-[var(--color-border-strong)] p-6 sm:p-10 mb-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Portrait & Credentials (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-5 pb-6 sm:pb-0 lg:border-r border-[var(--color-border-subtle)] lg:pr-8">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[4px] overflow-hidden border border-[var(--color-border-strong)] shrink-0 shadow-sm">
                <Image
                  src="/brand/founder-panchanan-kumar.jpg"
                  alt={REGULATORY.founderName}
                  fill
                  className="object-cover object-top"
                  sizes="130px"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                  Founder & Principal
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] mt-0.5">
                  {REGULATORY.founderName}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  AMFI-Registered Mutual Fund Distributor
                </p>
                <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1 bg-white border border-[var(--color-border-strong)] rounded-[3px] text-[11px] font-mono font-bold text-[var(--color-primary)]">
                  <ShieldCheck size={13} className="text-[var(--color-secondary)]" />
                  <span>ARN: {REGULATORY.arnNumber}</span>
                </div>
              </div>
            </div>

            {/* Ethos & Practice Standards (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                    Practice Philosophy
                  </span>
                </div>
                <h4
                  className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] tracking-tight leading-snug mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Built on Transparency. Driven by Long-Term Goals.
                </h4>
                <blockquote className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed italic border-l-2 border-[var(--color-secondary)] pl-4 mb-5">
                  &ldquo;True wealth creation is not about chasing speculative market trends or guessing quarterly tops and bottoms. It is the steady outcome of disciplined asset allocation, objective risk defense, and uninterrupted long-term compounding.&rdquo;
                </blockquote>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[var(--color-primary)] font-medium">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-[3px] border border-[var(--color-border-subtle)]">
                    <CheckCircle2 size={14} className="text-[var(--color-secondary)] shrink-0" />
                    <span>Direct AMC Folios</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-[3px] border border-[var(--color-border-subtle)]">
                    <CheckCircle2 size={14} className="text-[var(--color-secondary)] shrink-0" />
                    <span>Objective Asset Allocation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-[3px] border border-[var(--color-border-subtle)]">
                    <CheckCircle2 size={14} className="text-[var(--color-secondary)] shrink-0" />
                    <span>SEBI & AMFI Compliance</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/about"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5"
                >
                  <span>Read Founder Biography & Background</span>
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-[4px] bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Editorial Financial Publication (No repetitive cards) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-6 border-b border-[var(--color-border-strong)] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                  Institutional Intelligence
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Featured Financial Insights & Investor Education.
              </h3>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors shrink-0"
            >
              <span>Visit Investor Insights Hub</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Editorial Grid: Main Feature + Secondary Research Notes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Primary Feature (7 cols) */}
            <div className="lg:col-span-7 bg-[var(--color-surface-canvas)] p-6 sm:p-8 rounded-[6px] border border-[var(--color-border-strong)] flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[var(--color-secondary)] px-2 py-0.5 rounded-[2px]">
                    Featured Editorial
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
                    <Clock size={12} /> 6 min read
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[var(--color-primary)] leading-snug mb-3">
                  Demystifying NAV, Total Return Index (TRI), and Expense Ratio Friction
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Why a lower Net Asset Value (NAV) does not make a mutual fund scheme &ldquo;cheap&rdquo;, and how recurring expense ratio drag of even 50 basis points mathematically impacts 15-to-20-year wealth compounding outcomes.
                </p>
                <div className="space-y-2 border-t border-[var(--color-border-subtle)] pt-4">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Key Investor Takeaways
                  </p>
                  <ul className="space-y-1.5 text-xs text-[var(--color-text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-secondary)] shrink-0" />
                      <span>NAV reflects per-unit portfolio net assets, not future compounding velocity.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-secondary)] shrink-0" />
                      <span>Always evaluate fund performance against the Total Return Index (TRI) benchmark.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--color-border-subtle)]">
                <Link
                  href="/insights/mutual-fund-guide"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5"
                >
                  <span>Read Complete Educational Analysis</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Secondary Research Notes (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-[6px] border border-[var(--color-border-strong)] divide-y divide-[var(--color-border-subtle)] flex flex-col justify-between shadow-sm">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={13} className="text-[var(--color-secondary)]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Market Volatility & Mindset
                  </span>
                </div>
                <h5 className="text-base font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
                  <Link href="/insights/blog">
                    Rupee-Cost Averaging: The Mathematical Discipline of Systematic Investing
                  </Link>
                </h5>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
                  How uninterrupted monthly SIP mandates convert market corrections into accumulation opportunities without the hazardous trap of market timing.
                </p>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen size={13} className="text-[var(--color-secondary)]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    Asset Protection Architecture
                  </span>
                </div>
                <h5 className="text-base font-bold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
                  <Link href="/protection">
                    Pure Risk Term Life: Why Capital Protection Must Precede Equity Risk
                  </Link>
                </h5>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1.5 leading-relaxed">
                  Why mixing insurance with investment produces substandard outcomes, and how pure term cover establishes an impregnable family security foundation.
                </p>
              </div>

              <div className="p-4 bg-[var(--color-surface-canvas)] border-t border-[var(--color-border-subtle)] text-center">
                <Link
                  href="/insights/faq"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-primary)] inline-flex items-center gap-1.5"
                >
                  <span>Browse Frequently Asked Investor Questions</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
