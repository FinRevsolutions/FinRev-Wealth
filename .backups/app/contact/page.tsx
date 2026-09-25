"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MessageCircle, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BRAND, CONTACT, REGULATORY } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Mutual Funds & SIP",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Front-end state validation
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  }

  return (
    <div className="py-12 md:py-20 bg-[var(--color-surface-canvas)] min-h-screen">
      <Container>
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] mb-8">
          <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[var(--color-text-primary)]">Contact</span>
        </nav>

        <div className="max-w-3xl mb-14">
          <SectionLabel>Direct Investor Services</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight mt-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Connect with FINREV SOLUTIONS
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mt-3 leading-relaxed">
            Schedule a confidential consultation to review your existing portfolios, structure new SIP allocations,
            or evaluate family protection plans with founder Panchanan Kumar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-secondary)] block mb-1">
                Investor Support Desk
              </span>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                Office & Direct Lines
              </h2>

              <div className="flex flex-col gap-4 text-xs text-[var(--color-text-secondary)]">
                <a
                  href={CONTACT.phoneTel}
                  className="p-3.5 rounded-xl bg-[var(--color-surface-canvas)] hover:bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex items-center gap-3 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-secondary)] text-white flex items-center justify-center shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--color-text-muted)] block">Direct Phone</span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)]">{CONTACT.phone}</span>
                  </div>
                </a>

                <a
                  href={CONTACT.emailHref}
                  className="p-3.5 rounded-xl bg-[var(--color-surface-canvas)] hover:bg-[var(--color-surface-low)] border border-[var(--color-border-subtle)] flex items-center gap-3 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--color-text-muted)] block">Official Email</span>
                    <span className="text-sm font-bold text-[var(--color-text-primary)]">{CONTACT.email}</span>
                  </div>
                </a>

                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 flex items-center gap-3 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--color-text-muted)] block">Instant Message</span>
                    <span className="text-sm font-bold text-[#128C7E]">Chat on WhatsApp</span>
                  </div>
                </a>

                <div className="p-3.5 rounded-xl bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-low)] text-[var(--color-text-muted)] flex items-center justify-center shrink-0">
                    <Clock size={15} />
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--color-text-muted)] block">Desk Hours</span>
                    <span className="text-xs font-semibold text-[var(--color-text-primary)]">{CONTACT.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Confirmation */}
            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center gap-3">
              <ShieldCheck size={18} className="text-[var(--color-secondary)] shrink-0" />
              <div className="text-[11px] text-[var(--color-text-muted)]">
                <span className="font-bold text-[var(--color-text-primary)]">{BRAND.name}</span> • {REGULATORY.arnLabel}
              </div>
            </div>
          </div>

          {/* Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 md:p-8 rounded-2xl border border-[var(--color-border-subtle)] shadow-[var(--shadow-card)]">
            {submitted ? (
              <div className="p-8 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[var(--color-emerald-subtle)] text-[var(--color-secondary)] flex items-center justify-center border border-[var(--color-border-strong)]">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">Inquiry Received</h3>
                <p className="text-xs text-[var(--color-text-muted)] max-w-md leading-relaxed">
                  Thank you for reaching out to FINREV SOLUTIONS. Founder Panchanan Kumar or an investor desk
                  executive will review your requirements and get in touch within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[var(--color-primary)] text-white text-xs font-bold rounded-lg mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="pb-3 border-b border-[var(--color-border-subtle)]">
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                    Schedule a Consultation
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    Fill in your details below and we will contact you directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                      Full Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-2.5 text-xs bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 text-xs bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="investor@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 text-xs bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-service" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                      Area of Interest
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-2.5 text-xs bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)] font-medium"
                    >
                      <option>Mutual Funds & SIP</option>
                      <option>Goal-Based Investment Planning</option>
                      <option>Retirement & SWP Strategy</option>
                      <option>Free Portfolio Health Check (CAS)</option>
                      <option>Life / Term / Health Insurance</option>
                      <option>Bonds & Fixed Income</option>
                      <option>PMS / AIF / Unlisted Shares</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="form-message" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] block mb-1">
                    Your Requirements / Message (Optional)
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    placeholder="Tell us about your investment horizon, current goals, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 text-xs bg-[var(--color-surface-canvas)] border border-[var(--color-border-subtle)] rounded-lg focus:outline-none focus:border-[var(--color-secondary)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-700)] text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  <span>Submit Consultation Request</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Compliance Footer */}
        <div className="p-4 rounded-xl bg-white border border-[var(--color-border-subtle)] flex items-start gap-3 text-xs text-[var(--color-text-muted)]">
          <ShieldCheck size={18} className="text-[var(--color-text-muted)] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Statutory Notice:</strong> FINREV SOLUTIONS is an AMFI-registered Mutual Fund Distributor (ARN-195797).
            Information submitted is confidential and used solely to facilitate your requested consultation. We do not share
            your data with third-party marketing entities.
          </p>
        </div>
      </Container>
    </div>
  );
}
