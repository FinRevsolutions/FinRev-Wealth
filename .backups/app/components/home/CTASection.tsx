import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT, BRAND } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-primary)] text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white/80 uppercase tracking-widest">
            Private Consultation
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Goals Deserve a{" "}
            <span className="text-[var(--color-secondary-fixed-dim)]">
              Financial Plan.
            </span>
          </h2>

          {/* Supporting text */}
          <p className="text-base text-white/70 max-w-xl leading-relaxed">
            Start with a conversation. We assess your goals, present a clear and unbiased
            investment and protection strategy, and support your financial journey every step
            of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-secondary)] text-white text-sm font-bold rounded hover:bg-[var(--color-secondary-700)] transition-colors shadow-lg"
            >
              <ArrowRight size={16} />
              Explore Solutions
            </Link>
            <a
              href={CONTACT.phoneTel}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded border border-white/20 transition-colors"
            >
              <Phone size={16} />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded border border-white/20 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-white/40 max-w-lg leading-relaxed pt-2">
            {BRAND.name} is an AMFI-registered Mutual Fund Distributor. This is not investment
            advice. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </Container>
    </section>
  );
}
