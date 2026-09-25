import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-primary)] text-white relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/15 rounded-full blur-3xl pointer-events-none"
      />

      <Container className="relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-7">
          {/* Eyebrow with Digital Card Gold Dot */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-bold text-[var(--color-finrev-gold-light)] uppercase tracking-wider">
            <span className="finrev-gold-dot shrink-0" aria-hidden="true" />
            <span>Complimentary Portfolio Health Check</span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Life Goals Deserve a{" "}
            <span className="text-[var(--color-secondary-500)] block sm:inline">
              Structured Financial Plan.
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Begin with a confidential conversation. We analyze your milestones, identify existing
            portfolio inefficiencies, and build an institutional investment and protection strategy
            geared for generational stability.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[var(--color-primary)] text-sm font-bold rounded-lg hover:bg-[var(--color-surface-low)] transition-all shadow-md active:scale-[0.99]"
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={15} className="text-[var(--color-secondary)]" />
            </Link>
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white text-sm font-bold rounded-lg border border-white/20 transition-colors"
            >
              <Phone size={15} className="text-[var(--color-finrev-gold-light)]" />
              <span>{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-white text-sm font-bold rounded-lg border border-[#25D366]/30 transition-colors"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              <span>Direct WhatsApp</span>
            </a>
          </div>

          {/* Founder Desk info bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-secondary-fixed)]" />
              Founder: <strong>{REGULATORY.founderName}</strong> (AMFI {REGULATORY.arnNumber})
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-[var(--color-secondary-fixed)]" />
              {CONTACT.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[var(--color-secondary-fixed)]" />
              {CONTACT.officeHours}
            </span>
          </div>

          {/* Statutory Disclaimer */}
          <p className="text-[11px] text-white/40 max-w-2xl leading-relaxed pt-2">
            {BRAND.name} is an AMFI-registered Mutual Fund Distributor (ARN-195797). We do not provide
            guaranteed return schemes or assured income products. Mutual fund investments are subject to
            market risks. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </Container>
    </section>
  );
}
