import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Calculator, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Child Education Planning — Beating Higher Education Inflation",
  "Build an inflation-hedged higher education corpus for your child's domestic and international degrees with FINREV SOLUTIONS (ARN-195797).",
  "/wealth-solutions/child-education"
);

const FAQS = [
  {
    q: "Why is traditional child insurance (child endowment) inadequate?",
    a: "Traditional child plans typically deliver 4% to 5.5% annual returns while higher education costs in India and abroad escalate at 10% to 12% annually. This leads to severe real wealth erosion. Equity mutual fund SIPs provide the historical growth needed to actually match college cost escalation.",
  },
  {
    q: "How does currency depreciation affect overseas education costs?",
    a: "If your child plans to study in the US, UK, or Europe, you face dual inflation: university tuition inflation (5%–7% in USD/GBP) plus Rupee depreciation against the dollar (historically ~3%–4% p.a.). Your planning model must account for a combined ~10% annual escalation.",
  },
  {
    q: "When should we start shifting money out of equity into liquid safety?",
    a: "We recommend a disciplined glide-path: When your child is 2–3 years away from college enrollment (around age 15–16), we systematically transfer accumulated equity gains into safe liquid or short-term debt funds to eliminate stock market volatility right before fees are due.",
  },
];

export default function ChildEducationPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/wealth-solutions" className="hover:text-[var(--color-text-primary)] transition-colors">Wealth Solutions</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Child Education</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <GraduationCap size={14} />
            <span>10–18 Year Horizon Compounding</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Child Higher Education Planning
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Higher education inflation significantly outpaces consumer inflation. We design long-horizon equity
            SIP portfolios with automated de-risking glide paths to guarantee college funds are ready when enrollment arrives.
          </p>
        </div>

        {/* Education Cost Inflation Escalation Matrix */}
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] p-6 md:p-8 mb-16 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <SectionLabel>Empirical Cost Analysis</SectionLabel>
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
                The True Cost of Higher Education (Compounded at 10% p.a.)
              </h3>
            </div>
            <Link
              href="/tools/child-education-calculator"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-secondary)] hover:text-[var(--color-secondary-700)] bg-[var(--color-emerald-subtle)] px-3 py-1.5 rounded-lg border border-[var(--color-border-strong)] transition-colors self-start sm:self-auto"
            >
              <Calculator size={13} />
              <span>Launch Child Education Calculator</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)]">
                  <th className="py-3 px-4 font-bold text-[var(--color-text-primary)] uppercase tracking-wider text-[11px]">Academic Course / Degree</th>
                  <th className="py-3 px-4 font-bold text-[var(--color-text-primary)] text-right">Cost Today (2026)</th>
                  <th className="py-3 px-4 font-bold text-[var(--color-text-primary)] text-right">In 7 Years (Age 18)</th>
                  <th className="py-3 px-4 font-bold text-[var(--color-text-primary)] text-right">In 12 Years (Age 18)</th>
                  <th className="py-3 px-4 font-bold text-[var(--color-secondary)] text-right">12-Yr Monthly SIP Required*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)]">
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-[var(--color-text-primary)]">Premier Private Engineering (B.Tech)</p>
                    <p className="text-[11px] text-[var(--color-text-muted)]">BITS / VIT / Top Private Tech Institutes</p>
                  </td>
                  <td className="py-3.5 px-4 text-right font-medium text-[var(--color-text-secondary)]">₹22.00 Lakhs</td>
                  <td className="py-3.5 px-4 text-right font-medium text-[var(--color-text-secondary)]">₹42.87 Lakhs</td>
                  <td className="py-3.5 px-4 text-right font-bold text-[var(--color-text-primary)]">₹69.05 Lakhs</td>
                  <td className="py-3.5 px-4 text-right font-extrabold text-[var(--color-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>₹21,500 / mo</td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-[var(--color-text-primary)]">Top-Tier Domestic MBA (IIMs / Private)</p>
                    <p className="text-[11px] text-[var(--color-text-muted)]">2-Year Full-time Management Degree</p>
                  </td>
                  <td className="py-3.5 px-4 text-right font-medium text-[var(--color-text-secondary)]">₹30.00 Lakhs</td>
                  <td className="py-3.5 px-4 text-right font-medium text-[var(--color-text-secondary)]">₹58.46 Lakhs</td>
                  <td className="py-3.5 px-4 text-right font-bold text-[var(--color-text-primary)]">₹94.15 Lakhs</td>
                  <td className="py-3.5 px-4 text-right font-extrabold text-[var(--color-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>₹29,300 / mo</td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-[var(--color-text-primary)]">Overseas STEM Master's (US / UK / Canada)</p>
                    <p className="text-[11px] text-[var(--color-text-muted)]">Tuition + Living expenses + Forex inflation</p>
                  </td>
                  <td className="py-3.5 px-4 text-right font-medium text-[var(--color-text-secondary)]">₹65.00 Lakhs</td>
                  <td className="py-3.5 px-4 text-right font-medium text-[var(--color-text-secondary)]">₹1.26 Crores</td>
                  <td className="py-3.5 px-4 text-right font-bold text-[var(--color-text-primary)]">₹2.04 Crores</td>
                  <td className="py-3.5 px-4 text-right font-extrabold text-[var(--color-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>₹63,500 / mo</td>
                </tr>
                <tr className="hover:bg-[var(--color-surface-subtle)]/40 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-[var(--color-text-primary)]">Overseas Undergraduate Degree (US Private)</p>
                    <p className="text-[11px] text-[var(--color-text-muted)]">4-Year Bachelor's Degree + Boarding</p>
                  </td>
                  <td className="py-3.5 px-4 text-right font-medium text-[var(--color-text-secondary)]">₹1.50 Crores</td>
                  <td className="py-3.5 px-4 text-right font-medium text-[var(--color-text-secondary)]">₹2.92 Crores</td>
                  <td className="py-3.5 px-4 text-right font-bold text-[var(--color-text-primary)]">₹4.70 Crores</td>
                  <td className="py-3.5 px-4 text-right font-extrabold text-[var(--color-secondary)]" style={{ fontFamily: "var(--font-mono)" }}>₹1,46,000 / mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-[var(--color-text-muted)] mt-3">
            *Assumes disciplined monthly SIP compounding at an assumed 12% p.a. long-term portfolio growth rate. Mutual fund investments are subject to market risks.
          </p>
        </div>

        {/* 3 Pillars of Education Planning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center mb-4">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Beating 10%+ Education Inflation
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              A ₹25 Lakh engineering or MBA degree today will cost ₹65+ Lakhs in 10–12 years. Only disciplined equity
              compounding has historically outpaced this steep cost curve.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center mb-4">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Currency & Global Hedging
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              For overseas universities, we integrate international feeder funds and dollar-denominated assets to insulate
              your college fund against ongoing foreign exchange currency depreciation.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] text-white flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Automated Glide-Path De-risking
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Two years prior to your child entering college, we systematically shift equity balances into liquid debt funds,
              safeguarding your built tuition money from market timing risk.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="p-5 bg-white rounded-xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-2 mb-2">
                  <HelpCircle size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] leading-snug">{faq.q}</h4>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl mb-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary-fixed)] block mb-1">
              Education Planning Desk
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Secure Your Child's Academic Future
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Calculate projected college costs and map an automated SIP allocation with Panchanan Kumar.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Consult on Child Education</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. Past performance does not guarantee future results.
            FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
          </p>
        </div>
      </Container>
    </div>
  );
}
