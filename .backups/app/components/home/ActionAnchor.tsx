import Link from "next/link";
import { MessageCircle, ArrowRight, Mail, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";

export function ActionAnchor() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-primary)] text-white border-t border-[var(--color-secondary)]/30">
      <Container>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {"Let's plan your financial journey."}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
            Speak with Panchanan Kumar and explore investment, planning and protection solutions built around your goals.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 pt-2 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[var(--color-primary)] text-sm font-bold rounded-full hover:bg-slate-100 transition-colors w-full sm:w-auto justify-center"
            >
              <span>Speak with an Expert</span>
              <ArrowRight size={15} className="text-[var(--color-secondary)]" />
            </Link>
            <Link
              href="/investments"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white text-sm font-bold rounded-full border border-white/20 transition-colors w-full sm:w-auto justify-center"
            >
              <span>Explore Solutions</span>
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white text-sm font-bold rounded-full border border-[#25D366]/30 transition-colors w-full sm:w-auto justify-center"
            >
              <MessageCircle size={15} className="text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-6 border-t border-white/10 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-[var(--color-finrev-gold)]" />
              {REGULATORY.founderName} · AMFI {REGULATORY.arnNumber}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={12} className="text-[var(--color-secondary)]" />
              {CONTACT.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[var(--color-secondary)]" />
              {CONTACT.officeHours}
            </span>
          </div>

          <p className="text-[11px] text-white/35 max-w-2xl leading-relaxed">
            {BRAND.name} is an AMFI-registered Mutual Fund Distributor (ARN-195797). Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </Container>
    </section>
  );
}
