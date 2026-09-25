import Link from "next/link";
import { MessageCircle, ArrowRight, Mail, Clock, ShieldCheck, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";

export function ActionAnchor() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-primary)] text-white border-t border-slate-800" aria-label="Action Anchor">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-[3px] border border-white/15 mb-4">
            <ShieldCheck size={13} className="text-[var(--color-finrev-gold)]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
              AMFI Registered Mutual Fund Distributor · ARN-195797
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.14]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your financial journey deserves a clear structure.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mt-4">
            Speak with Panchanan Kumar to structure investments, wealth planning, and protection solutions built around your goals.
          </p>

          {/* Action CTAs — Restrained Institutional Geometry (No Pills) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 min-h-[46px] bg-white text-[var(--color-primary)] text-sm font-semibold rounded-[3px] hover:bg-slate-100 transition-colors w-full sm:w-auto shadow-sm"
            >
              <Phone size={14} className="text-[var(--color-secondary)]" />
              <span>Speak with an Expert</span>
            </Link>
            <Link
              href="/investments"
              className="inline-flex items-center justify-center gap-2 px-7 min-h-[46px] bg-white/10 hover:bg-white/15 text-white text-sm font-semibold rounded-[3px] border border-white/20 transition-colors w-full sm:w-auto"
            >
              <span>Explore Solutions</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 min-h-[46px] bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white text-sm font-semibold rounded-[3px] border border-[#25D366]/40 transition-colors w-full sm:w-auto"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Institutional Contact Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 mt-8 border-t border-white/10 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[var(--color-finrev-gold)]" />
              <span>{REGULATORY.founderName} · AMFI {REGULATORY.arnNumber}</span>
            </span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={12} className="text-[var(--color-secondary-500)]" />
              <span>{CONTACT.email}</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[var(--color-secondary-500)]" />
              <span>{CONTACT.officeHours}</span>
            </span>
          </div>

          <p className="text-[11px] text-slate-500 max-w-2xl leading-relaxed mt-4 text-center">
            {BRAND.name} is an AMFI-registered Mutual Fund Distributor (ARN-195797). Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </Container>
    </section>
  );
}
