"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { formatExactINR } from "@/lib/calculators/formatters";

export interface MilestoneRow {
  year: number;
  label?: string;
  invested?: number;
  gain?: number;
  value: number;
  customColumns?: Array<{ key: string; value: string | number }>;
}

interface MilestoneTableProps {
  title?: string;
  subtitle?: string;
  rows: MilestoneRow[];
  headers?: string[];
}

export function MilestoneTable({
  title = "Annual Wealth Compounding Milestones",
  subtitle = "Year-by-year progression of capital contributions vs. compounding growth",
  rows,
  headers = ["Year", "Invested Capital", "Compounded Gains", "Year-End Value"],
}: MilestoneTableProps) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className="bg-white rounded-[6px] border border-[var(--color-border-subtle)] p-6 md:p-8 mb-8">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--color-border-subtle)]">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
            {subtitle}
          </p>
        </div>
        <TrendingUp size={16} className="text-[var(--color-secondary)]" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-[var(--color-border-subtle)] text-[var(--color-text-muted)] uppercase tracking-wider font-bold">
              {headers.map((h, idx) => (
                <th
                  key={idx}
                  className={`py-2.5 ${idx === headers.length - 1 ? "text-right" : ""}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)] font-medium text-[var(--color-text-secondary)]">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-[var(--color-surface-canvas)] transition-colors"
              >
                <td className="py-3 font-bold text-[var(--color-text-primary)]">
                  {row.label || `Year ${row.year}`}
                </td>
                {row.customColumns ? (
                  row.customColumns.map((col, cIdx) => (
                    <td
                      key={cIdx}
                      className={`py-3 ${cIdx === (row.customColumns?.length || 0) - 1 ? "text-right font-bold text-[var(--color-text-primary)]" : ""}`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {typeof col.value === "number" ? formatExactINR(col.value) : col.value}
                    </td>
                  ))
                ) : (
                  <>
                    <td className="py-3" style={{ fontFamily: "var(--font-mono)" }}>
                      {row.invested !== undefined ? formatExactINR(row.invested) : "—"}
                    </td>
                    <td
                      className="py-3 text-[var(--color-secondary)] font-semibold"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {row.gain !== undefined ? `+${formatExactINR(row.gain)}` : "—"}
                    </td>
                    <td
                      className="py-3 text-right font-bold text-[var(--color-text-primary)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {formatExactINR(row.value)}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
