"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, X, SlidersHorizontal } from "lucide-react";
import { FinancialTool, TOOL_CATEGORIES, ToolCategory } from "@/lib/tools-registry";
import { ToolIcon } from "./ToolIcon";

interface ToolsHubExplorerProps {
  initialTools: FinancialTool[];
}

export function ToolsHubExplorer({ initialTools }: ToolsHubExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | "all">("all");

  const filteredTools = useMemo(() => {
    return initialTools.filter((tool) => {
      const matchesCategory =
        selectedCategory === "all" || tool.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchTitle = tool.title.toLowerCase().includes(q);
      const matchDesc = tool.description.toLowerCase().includes(q);
      const matchCategory = tool.categoryLabel.toLowerCase().includes(q);
      const matchBadge = tool.badge.toLowerCase().includes(q);
      const matchTags = tool.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchTitle || matchDesc || matchCategory || matchBadge || matchTags;
    });
  }, [initialTools, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search & Filter Controls Bar */}
      <div className="bg-white rounded-[6px] border border-[var(--color-border-subtle)] p-4 sm:p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
            />
            <input
              type="text"
              placeholder="Search calculators by name, concept, or goal (e.g., SIP, Retirement, EMI, Tax)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 min-h-[44px] text-xs sm:text-sm bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-[4px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] p-1.5"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-[var(--color-text-muted)] flex items-center gap-1.5 self-end md:self-center px-1">
            <SlidersHorizontal size={13} />
            <span>{filteredTools.length} of {initialTools.length} Calculators Available</span>
          </div>
        </div>

        {/* Category Filter Tabs — Segmented Architectural Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-4 mt-4 border-t border-[var(--color-border-subtle)] no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-2 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 min-h-[40px] ${
              selectedCategory === "all"
                ? "bg-[var(--color-primary)] text-white"
                : "bg-[var(--color-surface-canvas)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]"
            }`}
          >
            <span>All Calculators</span>
            <span
              className={`text-[10px] font-mono ${
                selectedCategory === "all"
                  ? "text-slate-300"
                  : "text-[var(--color-text-muted)]"
              }`}
            >
              ({initialTools.length})
            </span>
          </button>

          {TOOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 min-h-[40px] ${
                selectedCategory === cat.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-surface-canvas)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono ${
                  selectedCategory === cat.id
                    ? "text-slate-300"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                ({cat.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tools — Editorial Structure */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="bg-white rounded-[4px] border border-[var(--color-border-subtle)] p-5 hover:border-[var(--color-secondary)] transition-colors group flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category Indicator */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-[4px] bg-[var(--color-surface-canvas)] text-[var(--color-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <ToolIcon name={tool.iconName} size={18} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-secondary)]">
                    {tool.badge}
                  </span>
                </div>

                {/* Category kicker */}
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider block mb-1">
                  {tool.categoryLabel}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-semibold text-[var(--color-secondary)]">
                <span>Simulate Model</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-[4px] border border-[var(--color-border-subtle)] p-10 text-center max-w-lg mx-auto mb-14">
          <div className="w-10 h-10 rounded-[4px] bg-[var(--color-surface-canvas)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] flex items-center justify-center mx-auto mb-3">
            <Search size={18} />
          </div>
          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">
            No calculators found
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] mb-5">
            We could not find any financial tools matching "{searchQuery}". Try searching for SIP, Retirement, Loan, or Tax.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 bg-[var(--color-primary)] text-white text-xs font-semibold uppercase tracking-wider rounded-[4px] hover:bg-[var(--color-secondary)] transition-colors min-h-[40px]"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
