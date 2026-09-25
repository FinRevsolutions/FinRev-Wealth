import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle, ShieldCheck, ArrowRight, Clock } from "lucide-react";
import { BRAND, CONTACT, REGULATORY, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white border-t border-[var(--color-primary-700)]">
      {/* Top Gold & Teal Architectural Separator Line */}
      <div className="finrev-gold-line w-full" aria-hidden="true" />

      {/* Main Footer Grid */}
      <div className="container-page pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* COLUMN 1: Brand & Founder Identity (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <Link href="/" className="inline-block py-1">
              <Image
                src={BRAND.logoPath}
                alt={BRAND.logoAlt}
                width={170}
                height={56}
                className="h-11 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-finrev-gold-light)] flex items-center gap-2">
              <span className="finrev-gold-dot shrink-0" aria-hidden="true" />
              <span>{BRAND.tagline}</span>
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Modern financial planning, mutual fund distribution, and family protection solutions designed around your milestones.
            </p>

            {/* Founder Credentials Badge */}
            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col gap-1 text-xs">
              <span className="font-bold text-white">
                {REGULATORY.founderName}
              </span>
              <span className="text-slate-300">
                Mutual Fund Distributor
              </span>
              <span
                className="text-[var(--color-finrev-gold-light)] font-mono font-bold text-[11px] mt-0.5"
              >
                AMFI Registered MFD • {REGULATORY.arnNumber}
              </span>
            </div>
          </div>

          {/* COLUMN 2: Explore (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-2 border-b border-white/10">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
              <li>
                <Link href="/about" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  About FINREV
                </Link>
              </li>
              <li>
                <Link href="/investments" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/wealth-solutions" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Wealth Solutions
                </Link>
              </li>
              <li>
                <Link href="/protection" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Protection
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Financial Tools Hub
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Insights & Research
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Solutions (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-2 border-b border-white/10">
              Solutions
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
              <li>
                <Link href="/investments/mutual-funds" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="/investments/sip" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  SIP Compounding
                </Link>
              </li>
              <li>
                <Link href="/investments/bonds" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Bonds & Fixed Income
                </Link>
              </li>
              <li>
                <Link href="/investments/pms" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Portfolio Management (PMS)
                </Link>
              </li>
              <li>
                <Link href="/investments/aif" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Alternative Funds (AIF)
                </Link>
              </li>
              <li>
                <Link href="/investments/unlisted-pre-ipo" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Unlisted & Pre-IPO
                </Link>
              </li>
              <li>
                <Link href="/protection/term-insurance" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Term Life Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Resources (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-2 border-b border-white/10">
              Resources
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-slate-300">
              <li>
                <Link href="/tools/sip-calculator" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/retirement-calculator" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Retirement Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/goal-planner" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Goal Planner
                </Link>
              </li>
              <li>
                <Link href="/insights/mutual-fund-guide" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  Investor Education
                </Link>
              </li>
              <li>
                <Link href="/insights/faq" className="hover:text-[var(--color-secondary-500)] transition-colors">
                  FAQ Directory
                </Link>
              </li>
              <li>
                <Link href="/client/login" className="hover:text-[var(--color-secondary-500)] transition-colors flex items-center gap-1">
                  <span>Client Portal</span>
                  <ArrowRight size={11} />
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: Contact Desk (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/90 pb-2 border-b border-white/10">
              Advisory Desk
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-slate-300">
              <a
                href={CONTACT.phoneTel}
                className="flex items-center gap-2 hover:text-[var(--color-secondary-500)] transition-colors"
              >
                <Phone size={13} className="text-[var(--color-finrev-gold-light)] shrink-0" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-2 hover:text-[var(--color-secondary-500)] transition-colors"
              >
                <Mail size={13} className="text-[var(--color-secondary-500)] shrink-0" />
                <span>{CONTACT.email}</span>
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[var(--color-secondary-500)] transition-colors"
              >
                <MessageCircle size={13} className="text-[#25D366] shrink-0" />
                <span>WhatsApp Advisory Desk</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <Clock size={13} className="shrink-0 mt-0.5" />
                <span>{CONTACT.officeHours}</span>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold text-white transition-colors"
              >
                <span>Speak with an Expert</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory Governance & Risk Disclaimer */}
        <div className="p-5 sm:p-6 rounded-xl bg-white/[0.04] border border-white/10">
          <div className="flex items-start gap-3">
            <ShieldCheck
              size={20}
              className="text-[var(--color-finrev-gold-light)] shrink-0 mt-0.5"
            />
            <div className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
              <p className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center gap-2">
                <span className="finrev-gold-dot shrink-0" aria-hidden="true" />
                <span>Statutory Regulatory Governance</span>
              </p>
              <p>
                <strong>Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.</strong>
              </p>
              <p className="text-slate-400 text-[11px]">
                FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797). We do not provide guaranteed return schemes, assured income products, or fee-based investment advice. Past performance is not indicative of future returns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal Links */}
      <div className="border-t border-white/10">
        <div className="container-page py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            &copy; {SITE.copyrightYear} {BRAND.name}. All rights reserved. {REGULATORY.arnNumber}.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/regulatory-disclosures" className="hover:text-white transition-colors">
              Regulatory Disclosures
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            {/* Social Icons — LinkedIn & WhatsApp */}
            <span className="hidden sm:block w-px h-3 bg-white/20" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/company/finrev-solutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FINREV SOLUTIONS on LinkedIn"
              className="text-slate-400 hover:text-[var(--color-secondary-500)] transition-colors inline-flex items-center"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66a1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z" />
              </svg>
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Advisory Desk"
              className="text-slate-400 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
