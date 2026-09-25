"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Phone, X, LogIn } from "lucide-react";
import { PRIMARY_NAV, type NavGroup } from "@/lib/navigation";
import { CONTACT, REGULATORY } from "@/lib/constants";

interface MobileNavProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

function AccordionItem({
  group,
  onClose,
}: {
  group: NavGroup;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!group.children?.length;

  if (!hasChildren) {
    return (
      <Link
        href={group.href}
        onClick={onClose}
        className="flex items-center justify-between w-full px-4 py-3.5 text-sm font-semibold text-[var(--color-text-primary)] border-b border-[var(--color-border-subtle)] hover:bg-[var(--color-surface-low)] transition-colors"
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-[var(--color-border-subtle)]">
      <button
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center justify-between w-full px-4 py-3.5 text-sm font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-surface-low)] transition-colors cursor-pointer"
      >
        {group.label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-150 text-[var(--color-text-muted)] ${expanded ? "rotate-180 text-[var(--color-secondary)]" : ""}`}
        />
      </button>
      {expanded && (
        <div className="pb-1 bg-[var(--color-surface-canvas)]">
          {group.children!.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex flex-col px-6 py-2.5 hover:bg-white border-l-2 border-transparent hover:border-[var(--color-secondary)] transition-colors"
            >
              <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                {item.label}
              </span>
              {item.description && (
                <span className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                  {item.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileNav({ id, open, onClose }: MobileNavProps) {
  // Close on Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-[var(--color-primary)]/50 backdrop-blur-xs xl:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,340px)]",
          "bg-white shadow-[var(--shadow-modal)]",
          "flex flex-col xl:hidden",
          "transition-transform duration-200 ease-in-out",
          open ? "translate-x-0" : "translate-x-full invisible pointer-events-none",
        ].join(" ")}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-canvas)]">
          <div>
            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider block">
              Menu Directory
            </span>
            <span className="text-[10px] text-[var(--color-secondary)] font-mono font-semibold">
              {REGULATORY.arnNumber}
            </span>
          </div>
          <button
            aria-label="Close navigation"
            onClick={onClose}
            className="p-1.5 rounded-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav Items */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto"
        >
          {PRIMARY_NAV.map((group) => (
            <AccordionItem key={group.href} group={group} onClose={onClose} />
          ))}
        </nav>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-[var(--color-border-subtle)] flex flex-col gap-2.5 bg-[var(--color-surface-canvas)]">
          <Link
            href="/client/login"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-white border border-[var(--color-border-subtle)] rounded-xs text-xs font-semibold text-[var(--color-primary)] hover:border-[var(--color-secondary)] transition-colors shadow-2xs"
          >
            <LogIn size={14} className="text-[var(--color-secondary)]" />
            <span>Client Portal</span>
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white text-xs font-semibold rounded-xs transition-colors"
          >
            <Phone size={13} className="text-[var(--color-finrev-gold-light)]" />
            <span>Speak with an Expert</span>
          </Link>
          <a
            href={CONTACT.phoneTel}
            className="text-center text-[11px] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors pt-0.5 font-mono"
          >
            Desk: {CONTACT.phone}
          </a>
        </div>
      </div>
    </>
  );
}
