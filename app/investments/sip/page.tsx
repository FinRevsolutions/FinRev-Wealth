import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Coins, ShieldCheck, CheckCircle2, AlertTriangle, HelpCircle, Calculator, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Systematic Investment Plan (SIP) — Disciplined Wealth Compounding",
  "Start a Systematic Investment Plan (SIP) in mutual funds with FINREV SOLUTIONS (ARN-195797). Benefit from rupee cost averaging, automated bank mandates, and long-term compounding.",
  "/investments/sip"
);

const FAQS = [
  {
    q: "What is Rupee Cost Averaging in SIP?",
    a: "When market prices are high, your fixed monthly SIP buys fewer mutual fund units; when market prices drop, your fixed monthly SIP automatically buys more units. Over time, this lowers your average acquisition cost per unit without requiring you to time market cycles.",
  },
  {
    q: "Can I stop, pause, or modify my SIP?",
    a: "Yes. SIPs offer complete flexibility. You can pause your SIP for up to 3–6 months, stop it entirely without penalties, or increase the monthly amount using a Step-Up mandate as your income rises.",
  },
  {
    q: "Is there a penalty if my bank balance is insufficient on the SIP date?",
    a: "The AMC does not penalize you; they simply do not allot units for that month. However, your bank may levy ECS/NACH bounce charges. We recommend maintaining sufficient balance or setting SIP dates right after salary credit.",
  },
  {
    q: "What is the best SIP date of the month?",
    a: "Long-term historical market studies show virtually zero statistical difference in compounding returns across different days of the month (1st, 5th, 10th, or 15th). The best date is simply 2–3 days following your primary monthly income deposit.",
  },
];

export default function SIPPage() {
  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/investments" className="hover:text-[var(--color-text-primary)] transition-colors">Investments</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">SIP</span>
        </nav>

        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] text-xs font-bold rounded border border-[var(--color-border-strong)] mb-3">
            <Coins size={14} />
            <span>Disciplined Wealth Compounding</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Systematic Investment Planning (SIP)
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed max-w-3xl">
            Eliminate the stress of timing the stock market. An automated monthly SIP harnesses rupee cost averaging
            to compound consistent monthly savings into generational wealth.
          </p>
        </div>

        {/* 3 Pillars of SIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center mb-4">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Rupee Cost Averaging
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Volatile markets become an advantage. Downturns allow your fixed monthly installment to accumulate
              significantly more units at lower NAVs, accelerating your eventual recovery upside.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center mb-4">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Automated Financial Habit
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Through OTM (One Time Mandate) / NACH bank auto-debits, wealth creation becomes frictionless.
              You invest before you spend, protecting your surplus from discretionary lifestyle creep.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-tertiary)] text-white flex items-center justify-center mb-4">
              <Calculator size={20} />
            </div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Step-Up Flexibility
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Link your SIP increments to your annual career appraisals. Increasing your SIP contribution by 10%
              each year can more than double your 20-year maturity corpus.
            </p>
          </div>
        </div>

        {/* VISUAL 1: Rupee Cost Averaging Demonstration */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Mechanics of Averaging</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Why Market Corrections Accelerate SIP Compounding
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Fixed monthly installments automatically purchase more mutual fund units when valuations decline.
            </p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-bold">
                  <th className="py-2.5">Month</th>
                  <th className="py-2.5">Monthly SIP</th>
                  <th className="py-2.5">Scheme NAV</th>
                  <th className="py-2.5">Units Acquired</th>
                  <th className="py-2.5 text-right">Cumulative Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-3 font-bold text-[var(--color-text-primary)]">Month 1 (Market High)</td>
                  <td className="py-3">₹10,000</td>
                  <td className="py-3 font-mono">₹50.00</td>
                  <td className="py-3 font-mono">200.0 units</td>
                  <td className="py-3 font-mono text-right">₹10,000</td>
                </tr>
                <tr className="bg-rose-50/50">
                  <td className="py-3 font-bold text-rose-800">Month 2 (Market Correction)</td>
                  <td className="py-3">₹10,000</td>
                  <td className="py-3 font-mono text-rose-800 font-bold">₹40.00</td>
                  <td className="py-3 font-mono text-rose-800 font-bold">250.0 units (+25% more!)</td>
                  <td className="py-3 font-mono text-right">₹18,000</td>
                </tr>
                <tr className="bg-rose-50/70">
                  <td className="py-3 font-bold text-rose-900">Month 3 (Market Bottom)</td>
                  <td className="py-3">₹10,000</td>
                  <td className="py-3 font-mono text-rose-900 font-bold">₹33.33</td>
                  <td className="py-3 font-mono text-rose-900 font-bold">300.0 units (+50% more!)</td>
                  <td className="py-3 font-mono text-right">₹25,000</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold text-[var(--color-text-primary)]">Month 4 (Recovery Phase)</td>
                  <td className="py-3">₹10,000</td>
                  <td className="py-3 font-mono">₹45.00</td>
                  <td className="py-3 font-mono">222.2 units</td>
                  <td className="py-3 font-mono text-right">₹43,750</td>
                </tr>
                <tr className="bg-emerald-50/60">
                  <td className="py-3 font-bold text-emerald-800">Month 5 (New Peak)</td>
                  <td className="py-3">₹10,000</td>
                  <td className="py-3 font-mono font-bold text-emerald-800">₹55.00</td>
                  <td className="py-3 font-mono">181.8 units</td>
                  <td className="py-3 font-mono text-right font-bold text-emerald-900">₹63,470</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <span className="font-bold text-[var(--color-text-primary)] block">Average Acquisition Cost: ₹43.32 per unit</span>
              <span className="text-[var(--color-text-muted)] text-[11px]">Even though starting and ending NAVs averaged ~₹50+, the investor acquired units at ₹43.32.</span>
            </div>
            <span className="text-xs font-bold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-3 py-1 rounded-full border border-[var(--color-border-strong)] shrink-0">
              Total Units: 1,154 • Value: ₹63,470 (Gain: +26.9%)
            </span>
          </div>
        </div>

        {/* VISUAL 2: 20-Year Compounding Timeline (Invested vs Wealth Growth) */}
        <div className="bg-white rounded-2xl p-7 md:p-8 border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] mb-16">
          <div className="max-w-2xl mb-6">
            <SectionLabel>Multi-Decade Power</SectionLabel>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mt-1" style={{ fontFamily: "var(--font-heading)" }}>
              Illustrative Compounding Progression (₹10,000 Monthly SIP @ 12% CAGR)
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Notice how compounded returns dramatically dwarf total deposited capital after year 10.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                period: "5 Years",
                invested: "₹6.00 Lakhs",
                returns: "₹2.25 Lakhs",
                total: "₹8.25 Lakhs",
                splitInvested: "73%",
                splitGrowth: "27%",
              },
              {
                period: "10 Years",
                invested: "₹12.00 Lakhs",
                returns: "₹11.23 Lakhs",
                total: "₹23.23 Lakhs",
                splitInvested: "52%",
                splitGrowth: "48%",
              },
              {
                period: "15 Years",
                invested: "₹18.00 Lakhs",
                returns: "₹32.46 Lakhs",
                total: "₹50.46 Lakhs",
                splitInvested: "36%",
                splitGrowth: "64%",
              },
              {
                period: "20 Years",
                invested: "₹24.00 Lakhs",
                returns: "₹75.91 Lakhs",
                total: "₹99.91 Lakhs",
                splitInvested: "24%",
                splitGrowth: "76%",
              },
            ].map((milestone) => (
              <div key={milestone.period} className="p-5 rounded-xl bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                    {milestone.period} Milestone
                  </span>
                  <span className="text-xl font-bold text-[var(--color-text-primary)] block mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {milestone.total}
                  </span>

                  <div className="space-y-1 text-xs text-[var(--color-text-secondary)] mb-4">
                    <div className="flex justify-between"><span>Invested:</span><span className="font-semibold">{milestone.invested}</span></div>
                    <div className="flex justify-between text-[var(--color-secondary)]"><span>Growth:</span><span className="font-bold">{milestone.returns}</span></div>
                  </div>
                </div>

                <div>
                  <div className="w-full h-2 rounded-full overflow-hidden flex bg-slate-200">
                    <div className="bg-[var(--color-primary)] h-full" style={{ width: milestone.splitInvested }} title={`Invested: ${milestone.splitInvested}`} />
                    <div className="bg-[var(--color-secondary)] h-full" style={{ width: milestone.splitGrowth }} title={`Growth: ${milestone.splitGrowth}`} />
                  </div>
                  <div className="flex justify-between text-[10px] text-[var(--color-text-muted)] mt-1 font-mono">
                    <span>Deposit: {milestone.splitInvested}</span>
                    <span className="text-[var(--color-secondary)] font-bold">Alpha: {milestone.splitGrowth}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <span className="text-[10px] text-[var(--color-text-muted)] block text-center italic">
            Note: The figures above are strictly illustrative based on an assumed 12% annualized return and do not represent guaranteed outcomes. Mutual funds are subject to market risks.
          </span>
        </div>

        {/* FAQs */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Frequently Asked Questions on SIP
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
              Start Your SIP
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Automate Your Wealth Creation Journey
            </h3>
            <p className="text-xs text-white/70 mt-2 leading-relaxed">
              Paperless onboarding with Aadhaar/PAN and auto-mandate setup guided by Panchanan Kumar (ARN-195797).
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl text-center shrink-0 shadow-md transition-colors inline-flex items-center gap-2"
          >
            <span>Start an SIP Today</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Disclosure:</strong> Mutual fund investments are subject to market risks.
            Read all scheme related documents carefully before investing. SIP is a methodology for disciplined investing
            and does not assure profits or insulate against market loss during falling markets.
          </p>
        </div>
      </Container>
    </div>
  );
}
