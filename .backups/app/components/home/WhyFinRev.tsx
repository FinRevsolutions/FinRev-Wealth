import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { REGULATORY } from "@/lib/constants";

const STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "Deep discovery of your income, goals, risk appetite, existing assets and financial timelines.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "A tailored asset allocation strategy balancing equity, debt and protection — mapped to your goals.",
  },
  {
    num: "03",
    title: "Invest",
    desc: "Paperless onboarding with Aadhaar/PAN KYC and seamless bank auto-mandate setup.",
  },
  {
    num: "04",
    title: "Monitor",
    desc: "Regular portfolio tracking with consolidated reporting across AMCs and asset classes.",
  },
  {
    num: "05",
    title: "Review",
    desc: "Periodic rebalancing audits to ensure allocations remain aligned as markets and goals evolve.",
  },
];

export function WhyFinRev() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <SectionLabel>Our Approach</SectionLabel>
              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Secure Today.{" "}
                <span className="text-[var(--color-secondary)]">
                  Stronger Tomorrow.
                </span>
              </h2>
            </div>

            <p className="text-base text-[var(--color-on-surface-variant)] leading-relaxed">
              At <strong>FINREV SOLUTIONS</strong>, we believe individual investors deserve the same
              disciplined approach and careful attention as institutional portfolios. We reject
              speculative shortcuts and build long-term, goal-mapped financial strategies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Zero Speculation",
                  desc: "Regulated, transparent mutual funds with proven governance track records.",
                },
                {
                  title: "Long-Horizon Focus",
                  desc: "Portfolios built to endure market cycles and capture India's economic growth.",
                },
                {
                  title: "Complete Ecosystem",
                  desc: "From mutual funds and bonds to insurance — all under one trusted relationship.",
                },
                {
                  title: "Founder-Led Service",
                  desc: `${REGULATORY.founderName} directly engages with every client portfolio.`,
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="p-4 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface-canvas)]"
                >
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">
                    {title}
                  </h4>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 5-Step Process */}
          <div className="lg:col-span-7">
            <SectionLabel>The FINREV Method</SectionLabel>
            <h3
              className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight mt-2 mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Investing Right Takes a Plan
            </h3>
            <div className="flex flex-col gap-0">
              {STEPS.map(({ num, title, desc }, idx) => (
                <div
                  key={num}
                  className="flex gap-5 pb-6 relative"
                >
                  {/* Connector line */}
                  {idx < STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-[19px] top-10 bottom-0 w-px bg-[var(--color-border-strong)]"
                    />
                  )}
                  {/* Step number bubble */}
                  <div
                    className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 font-bold text-sm z-10"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {num}
                  </div>
                  {/* Content */}
                  <div className="pt-1.5 pb-2">
                    <h4 className="text-base font-bold text-[var(--color-text-primary)] mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {desc}
                    </p>
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
