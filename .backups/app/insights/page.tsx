import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle, FileText, ChevronRight, ShieldCheck, Compass, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Investor Insights & Financial Knowledge Hub — FINREV SOLUTIONS",
  "Master mutual fund concepts, behavioral finance, asset allocation, and regulatory structures with educational guides from FINREV SOLUTIONS.",
  "/insights"
);

const ARTICLES = [
  {
    title: "Demystifying NAV, Expense Ratios & Total Return Index (TRI)",
    category: "Mutual Fund Education",
    readTime: "5 min read",
    desc: "Why a lower NAV does not make a fund 'cheap', and how expense ratio compression impacts 20-year compounding outcomes.",
    href: "/insights/mutual-fund-guide",
  },
  {
    title: "Why Pausing SIPs in Market Corrections Destroys Alpha",
    category: "Behavioral Finance",
    readTime: "6 min read",
    desc: "Empirical analysis proving why continuous rupee cost averaging during bear regimes delivers the highest long-term portfolio returns.",
    href: "/insights/blog",
  },
  {
    title: "RBI Rate Cycles & Duration Risk in Debt Funds",
    category: "Fixed Income",
    readTime: "7 min read",
    desc: "How central bank policy shifts impact target maturity funds, corporate bond funds, and liquid treasury buckets in India.",
    href: "/insights/blog",
  },
  {
    title: "Asset Allocation: The Only Free Lunch in Finance",
    category: "Portfolio Architecture",
    readTime: "6 min read",
    desc: "Why rebalancing between equity, debt, and gold accounts for more than 90% of portfolio variance over decades.",
    href: "/insights/blog",
  },
];

export default function InsightsHubPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Insights</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <SectionLabel>Investor Intelligence</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Insights & Investor Education
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            An informed investor is a disciplined investor. We publish practical guides on fund mechanics,
            tax efficiency, and market cycle psychology to help you make rational capital decisions.
          </p>
        </div>

        {/* 2 Core Feature Hubs: Guide & FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Link
            href="/insights/mutual-fund-guide"
            className="p-8 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-secondary)] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center mb-4">
                <BookOpen size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)] block mb-1">
                Comprehensive Primer
              </span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-2">
                Mutual Fund Education Guide
              </h2>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Everything you need to know about equity, debt, and hybrid funds, NAV calculations,
                direct vs regular plans, and taxation rules in India.
              </p>
            </div>
            <span className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] mt-6">
              Read Guide
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/insights/faq"
            className="p-8 rounded-2xl bg-white border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-primary)] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center mb-4">
                <HelpCircle size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-primary)] block mb-1">
                Investor Q&A
              </span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Answers to 20+ common questions on AMFI distributor regulations, mutual fund safety,
                portfolio rebalancing, and digital client account operations.
              </p>
            </div>
            <span className="pt-4 border-t border-[var(--color-border-subtle)] inline-flex items-center gap-1 text-xs font-bold text-[var(--color-primary)] mt-6">
              Explore FAQs
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        {/* Featured Educational Articles */}
        <div className="mb-16">
          <SectionLabel>Curated Primers</SectionLabel>
          <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mt-1 mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Featured Articles & Market Commentary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ARTICLES.map((art) => (
              <Link
                key={art.title}
                href={art.href}
                className="bg-white p-6 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-secondary)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2 py-0.5 rounded border border-[var(--color-border-strong)]">
                      {art.category}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">{art.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-2 leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-secondary)] mt-4 group-hover:translate-x-1 transition-transform">
                  Read Analysis <ChevronRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Educational content is published strictly for investor awareness.
            It does not constitute investment advice or a recommendation to purchase specific securities.
            Mutual fund investments are subject to market risks.
          </p>
        </div>
      </Container>
    </div>
  );
}
