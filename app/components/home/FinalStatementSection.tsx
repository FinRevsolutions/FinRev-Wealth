import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { REGULATORY } from "@/lib/constants";

export function FinalStatementSection() {
  return (
    <section
      className="py-20 md:py-28 bg-[#071A2A] text-white border-t border-slate-800"
      aria-label="Final Institutional Statement"
    >
      <div className="container-page">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Subtle Regulatory Metadata Ribbon */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-[3px] border border-white/15 mb-6">
            <ShieldCheck size={13} className="text-[var(--color-finrev-gold)]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
              AMFI Registered Mutual Fund Distributor · ARN-195797
            </span>
          </div>

          {/* Large Typography Statement */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block text-white">
              Build with clarity.
            </span>
            <span className="block text-[var(--color-secondary)] mt-1 sm:mt-2">
              Invest with discipline.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mt-6 font-normal">
            Speak directly with Panchanan Kumar to structure investments, wealth planning, and protection solutions designed around your family goals.
          </p>

          {/* Actions: Speak with an Expert & Explore Solutions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 min-h-[48px] bg-white text-[var(--color-primary)] text-sm font-semibold rounded-[3px] hover:bg-slate-100 transition-colors w-full sm:w-auto shadow-sm cursor-pointer"
            >
              <Phone size={14} className="text-[var(--color-secondary)]" />
              <span>Speak with an Expert</span>
            </Link>
            <Link
              href="/investments"
              className="inline-flex items-center justify-center gap-2 px-8 min-h-[48px] bg-white/10 hover:bg-white/15 text-white text-sm font-semibold rounded-[3px] border border-white/20 transition-colors w-full sm:w-auto cursor-pointer"
            >
              <span>Explore Solutions</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Factual Credential Notice */}
          <div className="pt-8 mt-10 border-t border-white/10 text-xs text-slate-400 font-mono flex flex-wrap items-center justify-center gap-4">
            <span>{REGULATORY.founderName}</span>
            <span>•</span>
            <span>AMFI ARN-{REGULATORY.arnNumber}</span>
            <span>•</span>
            <span>Direct Investor Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
