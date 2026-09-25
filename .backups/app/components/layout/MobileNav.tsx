"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Phone, X, LogIn } from "lucide-react";
import { PRIMARY_NAV, type NavGroup } from "@/lib/navigation";
import { CONTACT } from "@/lib/constants";

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
        className="flex items-center justify-between w-full px-4 py-3.5 text-base font-semibold text-[var(--color-text-primary)] border-b border-[var(--color-border-subtle)] hover:bg-[var(--color-surface-low)] transition-colors"
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
        className="flex items-center justify-between w-full px-4 py-3.5 text-base font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-surface-low)] transition-colors"
      >
        {group.label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 text-[var(--color-text-muted)] ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="pb-1 bg-[var(--color-surface-canvas)]">
          {group.children!.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex flex-col px-6 py-3 hover:bg-[var(--color-surface-low)] transition-colors"
            >
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                {item.label}
              </span>
              {item.description && (
                <span className="text-xs text-[var(--color-text-muted)] mt-0.5">
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
          className="fixed inset-0 z-40 bg-[var(--color-on-surface)]/40 backdrop-blur-sm xl:hidden"
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
          "fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,360px)]",
          "bg-[var(--color-surface-card)] shadow-[var(--shadow-modal)]",
          "flex flex-col xl:hidden",
          "transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full invisible pointer-events-none",
        ].join(" ")}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-[var(--color-border-subtle)]">
          <span className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wider">
            Navigation
          </span>
          <button
            aria-label="Close navigation"
            onClick={onClose}
            className="p-2 rounded text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-low)] transition-colors"
          >
            <X size={20} />
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
            className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-[var(--color-border-strong)] rounded-xl text-xs font-bold text-[var(--color-primary)] hover:bg-[var(--color-surface-low)] transition-colors shadow-2xs"
          >
            <LogIn size={15} className="text-[var(--color-secondary)]" />
            <span>Secure Client Portal Login</span>
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            <Phone size={14} />
            <span>Speak with an Expert</span>
          </Link>
          <a
            href={CONTACT.phoneTel}
            className="text-center text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors pt-1"
          >
            Direct Desk: {CONTACT.phone}
          </a>
        </div>
      </div>
    </>
  );
}
