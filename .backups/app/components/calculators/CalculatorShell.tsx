"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CalculatorHeader } from "./CalculatorHeader";
import { EducationalPrimer, AssumptionsPanel, DisclaimerPanel } from "./Panels";
import { FinancialTool, getToolsByCategory } from "@/lib/tools-registry";

interface CalculatorShellProps {
  tool: FinancialTool;
  children: ReactNode; // Input controls
  results: ReactNode; // Result cards & metrics
  charts?: ReactNode; // Growth chart or visual breakdown
  milestones?: ReactNode; // Progression table
  educationalPrimer: {
    title: string;
    paragraphs: string[];
    takeaways?: string[];
  };
  assumptions: string[];
  disclaimerCustomText?: string;
  faq?: Array<{ question: string; answer: string }>;
}

export function CalculatorShell({
  tool,
  children,
  results,
  charts,
  milestones,
  educationalPrimer,
  assumptions,
  disclaimerCustomText,
  faq,
}: CalculatorShellProps) {
  const relatedTools = getToolsByCategory(tool.category)
    .filter((t) => t.id !== tool.id)
    .slice(0, 3);

  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        {/* Header with Breadcrumbs */}
        <CalculatorHeader
          category={tool.category}
          categoryLabel={tool.categoryLabel}
          title={tool.title}
          subtitle={tool.description}
        />

        {/* Interactive Calculator Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-secondary)] text-white flex items-center justify-center">
                  <Calculator size={18} />
                </div>
                <h2 className="text-base font-bold text-[var(--color-text-primary)]">
                  Investment & Planning Inputs
                </h2>
              </div>
              <span className="text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-emerald-subtle)] px-2.5 py-1 rounded border border-[var(--color-border-strong)]">
                {tool.badge}
              </span>
            </div>

            {/* Injected Interactive Inputs */}
            {children}
          </div>

          {/* Results Display Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card-hover)] flex flex-col justify-between gap-6">
            {results}
          </div>
        </div>

        {/* Charts & Visualization Section */}
        {charts && <div className="mb-10">{charts}</div>}

        {/* Milestone Schedule Section */}
        {milestones && <div className="mb-10">{milestones}</div>}

        {/* Educational Narrative Primer */}
        <EducationalPrimer
          title={educationalPrimer.title}
          paragraphs={educationalPrimer.paragraphs}
          takeaways={educationalPrimer.takeaways}
        />

        {/* Assumptions & Methodology */}
        <AssumptionsPanel assumptions={assumptions} />

        {/* Frequently Asked Questions */}
        {faq && faq.length > 0 && (
          <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-6 md:p-8 shadow-[var(--shadow-card)] mb-10">
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faq.map((item, idx) => (
                <div key={idx} className="pb-4 border-b border-[var(--color-border-subtle)] last:border-0 last:pb-0">
                  <h4 className="text-sm font-bold text-[var(--color-text-primary)] mb-1.5">
                    {item.question}
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regulatory Compliance Notice */}
        <DisclaimerPanel customText={disclaimerCustomText} />

        {/* Related Financial Calculators in Category */}
        {relatedTools.length > 0 && (
          <div className="pt-8 border-t border-[var(--color-border-subtle)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)]">
                  Explore More Tools
                </span>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mt-0.5">
                  Related in {tool.categoryLabel}
                </h3>
              </div>
              <Link
                href="/tools"
                className="text-xs font-bold text-[var(--color-secondary)] hover:underline flex items-center gap-1"
              >
                <span>View All 32 Calculators</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedTools.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/tools/${rel.slug}`}
                  className="p-5 rounded-xl bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold text-[var(--color-secondary)] uppercase tracking-wider block mb-1">
                      {rel.badge}
                    </span>
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-1.5">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                      {rel.description}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[var(--color-secondary)] flex items-center gap-1 mt-4">
                    <span>Calculate Now</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
