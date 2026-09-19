"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, X, Sparkles, SlidersHorizontal } from "lucide-react";
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
      <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-4 sm:p-6 shadow-[var(--shadow-card)] mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
            />
            <input
              type="text"
              placeholder="Search calculators by name, concept, or goal (e.g., SIP, Retirement, EMI, Tax)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 text-sm bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] p-1"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-[var(--color-text-muted)] flex items-center gap-1.5 self-end md:self-center px-1">
            <SlidersHorizontal size={14} />
            <span>Showing {filteredTools.length} of {initialTools.length} Calculators</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-[var(--color-border-subtle)] no-scrollbar">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              selectedCategory === "all"
                ? "bg-[var(--color-secondary)] text-white shadow-sm"
                : "bg-[var(--color-surface-canvas)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-low)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            <span>All Calculators</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                selectedCategory === "all"
                  ? "bg-white/20 text-white"
                  : "bg-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
              }`}
            >
              {initialTools.length}
            </span>
          </button>

          {TOOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-[var(--color-secondary)] text-white shadow-sm"
                  : "bg-[var(--color-surface-canvas)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-low)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  selectedCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-[var(--color-border-subtle)] text-[var(--color-text-muted)]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tools */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-secondary)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] border border-[var(--color-border-strong)] flex items-center justify-center group-hover:scale-105 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-all duration-300">
                    <ToolIcon name={tool.iconName} size={22} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-secondary)] bg-[var(--color-surface-canvas)] px-2.5 py-1 rounded-full border border-[var(--color-border-subtle)]">
                    {tool.badge}
                  </span>
                </div>

                {/* Category tag */}
                <span className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-1">
                  {tool.categoryLabel}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-2.5 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-3 mb-6">
                  {tool.description}
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs font-bold text-[var(--color-secondary)]">
                <span>Launch Calculator</span>
                <div className="w-7 h-7 rounded-full bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:text-white group-hover:border-[var(--color-secondary)] transition-all duration-300">
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-[var(--color-border-subtle)] p-12 text-center max-w-lg mx-auto mb-16 shadow-[var(--shadow-card)]">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-surface-low)] text-[var(--color-text-muted)] flex items-center justify-center mx-auto mb-4">
            <Search size={22} />
          </div>
          <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1">
            No calculators found
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] mb-6">
            We could not find any financial tools matching "{searchQuery}". Try searching for SIP, Retirement, Loan, or Tax.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 bg-[var(--color-secondary)] text-white text-xs font-bold rounded-xl hover:bg-[var(--color-secondary-700)] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
