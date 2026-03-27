"use client";

import { useState } from "react";
import Image from "next/image";

const avatars = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEtWcghhEf8kkCJj7kx-ucnpnpzxeV5a5ZyRxVg43A0uUvDcnBdhJE_Q6S7eV8DqiGQqCEbv3IxShZVMqweG5dnFTCXe8TRFvvPnYRKCwzqrLXpNg6TvOe4FY_ERY8NGrHevkgLExtvwJre7wFRQ-r_iJWW9o7Id1RkCceDZeHnkWEN-YoGSJlsLqENCcgAaCwW3eNs_KjPoWA5QHNYYGwJBK_qXU6im85neWrBkxCw4sUSgRFSBsv0kBkHkRiNErgTrztkaMvJ1w",
    alt: "Professional executive",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrHv3nz9BWWibSZQt5IRSydwyPRYTjzZBvkMJC3VPwEeItD_0WV4oZwvqtEtU8fobqaAYni8ri6xwz8RFrhk6qHGcq6fK2JirkHb6OA0AMMjQJsjPTwKihtmR1iAKuDryrUypFjZ4-MhXXTcPzFUSwspE4fUpBkmUs4MRncB7WcgFButJ3cfK7QOuOTsZhTBC763s7XZ98qxqxuO6oYnCw7oNuhVUjEjrE7zKe4Bj4U13Xcbv_SCr1aUEcGGd4URiYxga-YghLTEM",
    alt: "Business leader",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvt1dNRT3M8Nlc7-90wf18IwDYYGF2ZsKoSze859wP4Lj4eOMM7Cx0onOVsoRRUKfE_4ctwi_L7qOJDNji1Wma9yBA-VBXq6yYD59R8zx1x2WTZoSAByUTo3Wn4Oh80tfiiVRPZBVaaUgmQE_lsKySWKbZ5E2jKpvRF_thupQsLNWiVnnywFtKxQ2AAhyLnviTecK9FUWlm3zOizMqd7QwqQK8acIcW8tyigWHUu3In_y2yuAi4o0-L0XvDd5LvsOO0ynvi_Im6Oo",
    alt: "Senior executive",
  },
];

interface LeadCaptureFormProps {
  onSubmit: (name: string, email: string) => void;
}

export default function LeadCaptureForm({ onSubmit }: LeadCaptureFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    consent?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address";
    if (!consent) newErrors.consent = "Please agree to continue";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Small delay for UX polish
    await new Promise((r) => setTimeout(r, 600));
    onSubmit(name.trim(), email.trim());
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center">
      {/* Progress indicator */}
      <div className="w-full max-w-2xl mb-12">
        <div className="flex justify-between items-end mb-4">
          <span className="text-[0.65rem] font-bold tracking-[0.15em] text-[#845400] uppercase">
            Final Step
          </span>
          <span className="text-[0.65rem] font-bold tracking-[0.15em] text-[#5f5e5e]/60 uppercase">
            Final Diagnostic
          </span>
        </div>
        <div className="h-2 w-full bg-[#e5e2e1] rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#845400] to-[#df9931] w-[95%] transition-all duration-700" />
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        {/* ── Left: Content ─────────────────────────────── */}
        <div className="lg:col-span-5 pt-8">
          <span className="inline-block px-3 py-1 bg-[#df9931]/10 text-[#df9931] rounded-full text-[0.7rem] font-bold tracking-wider uppercase mb-6">
            Editorial Intelligence
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1b1b1b] leading-[1.1] mb-8">
            You&apos;re almost there!{" "}
            <br />
            <span className="text-[#df9931]">
              Unlock your Brand Health Report.
            </span>
          </h1>

          <p className="text-lg text-[#5f5e5e] leading-relaxed mb-10 max-w-md">
            Our proprietary methodology has analyzed your responses. Your
            diagnostic report includes a 12-month action plan tailored to your
            market position.
          </p>

          {/* Trust badges */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f6f3f2] flex items-center justify-center text-[#845400] shrink-0">
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1b1b1b]">
                  Scientific Methodology
                </p>
                <p className="text-xs text-[#5f5e5e]">
                  Based on over 500+ successful brand audits.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#f6f3f2] flex items-center justify-center text-[#845400] shrink-0">
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  lock
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1b1b1b]">
                  Confidential Analytics
                </p>
                <p className="text-xs text-[#5f5e5e]">
                  Your data is encrypted and never shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Form Card ──────────────────────────── */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(27,27,27,0.06)] border border-[#e5e2e1]/40 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#df9931]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

            <form
              onSubmit={handleSubmit}
              className="relative z-10 space-y-8"
              noValidate
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[0.65rem] font-bold tracking-[0.1em] text-[#5f5e5e]/60 uppercase mb-2 ml-1">
                    Full Name
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                    }}
                    placeholder="e.g. Alexander Hamilton"
                    className={`w-full bg-[#f6f3f2] rounded-xl px-6 py-4 text-[#1b1b1b] placeholder:text-[#5f5e5e]/30 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "ring-2 ring-red-400/60"
                        : "focus:ring-[#df9931]/30"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1.5 ml-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[0.65rem] font-bold tracking-[0.1em] text-[#5f5e5e]/60 uppercase mb-2 ml-1">
                    Email Address
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    placeholder="you@company.com"
                    className={`w-full bg-[#f6f3f2] rounded-xl px-6 py-4 text-[#1b1b1b] placeholder:text-[#5f5e5e]/30 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "ring-2 ring-red-400/60"
                        : "focus:ring-[#df9931]/30"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1.5 ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="pt-0.5 shrink-0">
                    <input
                      id="lead-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked);
                        if (errors.consent)
                          setErrors((p) => ({ ...p, consent: undefined }));
                      }}
                      className="h-5 w-5 rounded cursor-pointer accent-[#845400]"
                    />
                  </div>
                  <span className="text-sm text-[#5f5e5e] leading-normal group-hover:text-[#1b1b1b] transition-colors">
                    Send me my detailed PDF report and action plan. By
                    continuing, you agree to our professional auditing
                    standards.
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-500 mt-1.5 ml-9">
                    {errors.consent}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  id="lead-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#df9931] hover:bg-[#845400] text-[#563500] hover:text-white py-5 rounded-full font-bold text-lg shadow-lg shadow-[#df9931]/20 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[0.99] active:scale-95 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span>Preparing your report…</span>
                      <span className="material-symbols-outlined animate-spin text-xl">
                        progress_activity
                      </span>
                    </>
                  ) : (
                    <>
                      <span>See My Results</span>
                      <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Card footer: avatars + trust text */}
            <div className="mt-10 pt-8 border-t border-[#e5e2e1] flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex -space-x-2">
                {avatars.map((a, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={a.src}
                      alt={a.alt}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <p className="text-[0.65rem] text-[#5f5e5e]/60 font-medium italic text-center md:text-right">
                Trusted by 2,400+ CMOs and Growth Directors worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
