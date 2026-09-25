"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail, Clock, ArrowRight, Lock } from "lucide-react";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";
import { PRIMARY_NAV, type NavGroup } from "@/lib/navigation";
import { MobileNav } from "./MobileNav";

// ── Desktop Dropdown Component ──────────────────────────────
function DesktopDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }
  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 140);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") setOpen(false);
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!group.children?.length) {
    return (
      <Link
        href={group.href}
        className="px-3.5 py-2 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] transition-colors rounded-xs"
      >
        {group.label}
      </Link>
    );
  }

  const isWide = group.children.length >= 6;

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onKeyDown={handleKeyDown}
        className={[
          "flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors rounded-xs cursor-pointer",
          open
            ? "text-[var(--color-secondary)] bg-[var(--color-surface-low)]"
            : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]",
        ].join(" ")}
      >
        {group.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-150 ${open ? "rotate-180 text-[var(--color-secondary)]" : "text-[var(--color-text-muted)]"}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className={[
            "absolute top-full pt-1.5 z-50",
            isWide ? "left-1/2 -translate-x-1/2 w-[520px]" : "left-0 min-w-[270px]",
          ].join(" ")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white rounded-xs border border-[var(--color-border-subtle)] shadow-[var(--shadow-popover)] p-3 overflow-hidden">
            {/* Architectural Directory Header */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-[var(--color-border-subtle)] mb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-secondary)]">
                {group.label} Directory
              </span>
              <Link
                href={group.href}
                onClick={() => setOpen(false)}
                className="text-[11px] font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-secondary)] inline-flex items-center gap-1"
              >
                Overview
                <ArrowRight size={11} />
              </Link>
            </div>

            {/* Grid of links */}
            <div className={isWide ? "grid grid-cols-2 gap-0.5" : "flex flex-col gap-0.5"}>
              {group.children.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="group flex flex-col p-2 rounded-xs hover:bg-[var(--color-surface-low)] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-xs sm:text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary)] transition-colors flex items-center justify-between">
                    {item.label}
                    <ArrowRight
                      size={11}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-secondary)]"
                    />
                  </span>
                  {item.description && (
                    <span className="text-[11px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Corporate Header ─────────────────────────────────────────
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "bg-white",
          "border-b border-[var(--color-border-subtle)]",
          "transition-shadow duration-200",
          scrolled ? "shadow-[var(--shadow-header)]" : "shadow-none",
        ].join(" ")}
      >
        {/* Top Institutional Compliance Strip */}
        <div className="hidden sm:flex items-center justify-between bg-[var(--color-surface-canvas)] border-b border-[var(--color-border-subtle)] px-4 md:px-8 py-1.5 text-[11px] text-[var(--color-text-muted)] font-[family-name:var(--font-body)]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[var(--color-primary)] font-medium">
              <span className="finrev-gold-dot shrink-0" aria-hidden="true" />
              <span>AMFI Registered Mutual Fund Distributor</span>
              <span className="text-[var(--color-border-strong)] mx-1">|</span>
              <span className="font-mono font-bold text-[var(--color-secondary)] tracking-wider">
                {REGULATORY.arnNumber}
              </span>
            </span>

            <span className="hidden lg:inline-flex items-center text-[var(--color-text-muted)]">
              Direct-to-AMC Custody • Zero Pool Accounts
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={CONTACT.phoneTel}
              className="flex items-center gap-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] transition-colors"
            >
              <Phone size={11} className="text-[var(--color-secondary)]" />
              <span className="font-mono">{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.emailHref}
              className="hidden md:flex items-center gap-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-secondary)] transition-colors"
            >
              <Mail size={11} className="text-[var(--color-secondary)]" />
              <span>{CONTACT.email}</span>
            </a>
            <div className="hidden xl:flex items-center gap-1.5 text-[var(--color-text-muted)]">
              <Clock size={11} />
              <span>{CONTACT.officeHours}</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="container-page">
          <div className="flex items-center justify-between h-[62px] sm:h-[68px] gap-3 md:gap-4">
            {/* Logo — strictly preserving aspect ratio and official asset */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center py-1 focus-visible:ring-1 focus-visible:ring-[var(--color-secondary)] rounded-xs"
              aria-label={`${BRAND.name} — Home`}
            >
              <Image
                src={BRAND.logoPath}
                alt={BRAND.logoAlt}
                width={180}
                height={58}
                priority
                className="h-10 sm:h-12 md:h-[48px] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main corporate navigation"
              className="hidden xl:flex items-center gap-1"
            >
              {PRIMARY_NAV.map((group) => (
                <DesktopDropdown key={group.href} group={group} />
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Client Portal Button — Crisp institutional action */}
              <Link
                href="/client/login"
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 text-xs sm:text-sm font-semibold text-[var(--color-primary)] bg-[var(--color-surface-canvas)] hover:bg-white border border-[var(--color-border-subtle)] hover:border-[var(--color-secondary)] rounded-xs transition-colors shadow-2xs"
                aria-label="Secure Client Portal Login"
              >
                <Lock size={13} className="text-[var(--color-secondary)] shrink-0" />
                <span className="hidden sm:inline">Client Portal</span>
                <span className="sm:hidden text-xs">Portal</span>
              </Link>

              {/* Primary Consultation CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[var(--color-primary)] text-white text-xs sm:text-sm font-semibold rounded-xs hover:bg-[var(--color-secondary)] transition-colors shrink-0 border border-[var(--color-primary-600)]"
              >
                <span className="w-1.5 h-1.5 rounded-xs bg-[var(--color-finrev-gold)] shrink-0" aria-hidden="true" />
                <Phone size={13} className="shrink-0 text-[var(--color-finrev-gold-light)]" />
                <span className="hidden lg:inline">Speak with an Expert</span>
                <span className="lg:hidden">Contact</span>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((v) => !v)}
                className="xl:hidden p-2 rounded-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-low)] transition-colors cursor-pointer"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        id="mobile-nav"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Header spacer to prevent page content jump under fixed header */}
      <div className="h-[62px] sm:h-[98px]" aria-hidden="true" />
    </>
  );
}
