import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Market Commentary & Investor Blog — FINREV SOLUTIONS",
  "Read practical financial insights on asset allocation, behavioral discipline, RBI rate cycles, and long-term wealth compounding from FINREV SOLUTIONS.",
  "/insights/blog"
);

const POSTS = [
  {
    title: "Why Pausing SIPs in Market Corrections Destroys Alpha",
    category: "Behavioral Finance",
    date: "September 2026",
    readTime: "6 min read",
    desc: "When benchmark indices drop 10% to 15%, human psychology naturally urges investors to 'stop until stability returns'. We examine 20 years of historical data demonstrating why continuing SIPs through drawdowns creates the lion's share of your eventual 15-year alpha.",
  },
  {
    title: "RBI Monetary Policy & Duration Risk in Corporate Debt",
    category: "Fixed Income",
    date: "August 2026",
    readTime: "7 min read",
    desc: "How changes in the central bank's liquidity stance impact bond yields across 1-year, 5-year, and 10-year tenures, and how retail investors can use target maturity funds to insulate their fixed income portfolios.",
  },
  {
    title: "Asset Allocation: The Only Mathematical Free Lunch",
    category: "Portfolio Architecture",
    date: "July 2026",
    readTime: "5 min read",
    desc: "Why trying to pick the top-performing mutual fund each year is counterproductive. Empirical studies prove that strategic rebalancing between equity, debt, and gold accounts for 90%+ of total portfolio outcome stability.",
  },
];

export default function BlogPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[var(--color-text-primary)] transition-colors">Insights</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Blog</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <SectionLabel>Market Perspectives</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Investor Blog & Market Commentary
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Thoughtful analysis on market cycles, behavioural discipline, and portfolio architecture
            written from the perspective of an AMFI-registered distribution practice.
          </p>
        </div>

        {/* Posts List */}
        <div className="flex flex-col gap-6 mb-16 max-w-4xl">
          {POSTS.map((post) => (
            <article key={post.title} className="bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-0.5 rounded border border-[var(--color-border-strong)]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                  {post.title}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {post.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
                <span className="text-xs text-[var(--color-text-muted)] font-medium">FINREV Insights Desk</span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[var(--color-secondary)] hover:underline inline-flex items-center gap-1"
                >
                  Discuss with an Expert <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Opinions expressed in articles are for educational awareness and discussion only.
            They do not constitute an offer, solicitation, or recommendation to invest in specific schemes or securities.
            Mutual fund investments are subject to market risks.
          </p>
        </div>
      </Container>
    </div>
  );
}
