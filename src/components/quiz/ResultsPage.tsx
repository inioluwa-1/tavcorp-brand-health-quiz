"use client";

import { useMemo } from "react";
import Image from "next/image";
import { calculateResults, getGrade, getResultsContent } from "@/utils/scoring";

type Answer = string | number;

interface ResultsPageProps {
  answers: Record<number, Answer>;
  lead: { name: string; email: string };
}

const growthAvatars = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgDCpjjJ4zAUXB8nRFhBCNX_7SJLgWcX4DwHo-Ogyrw4k67JLghDmlD-j-QLWY6rAXNvtXyK-STiJgBQrInNy1BCASp0wLnTUGPF_1FyX6wos6PbEXC5LGRFxAYvX8Aa-A9gFuVki4mZRVA-G22CtkQYV4h_I2Z2ZJkefyVQNmcGmWt8EZSAYk014FVAsrb9N45cdA5xbhgbj2KMgOr4p_WW0jv4HEm_gD0PnSUDgJgqbTIy2sWj45mJ1lc5Gw2eT6P4bnDtG7eiY",
    alt: "Professional woman",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkbPDNaT63OqrSuIY8ngO4lCj9mQj1iAoi4MKX7FEmBCYa03Phl0mYFtUN4QCh7m8auG74SqNJ0a_duTu2K-L-D86-6DV4Lv-e6npm4T1rehe46aLYts-EI79KAEueB1u2o0b8xba9mizlku2ASVaf1-u6hin4v8KfpMXkOKkRtNsCaIyJOWfCW-4wi78-T-PFs6k5Dpi6W9994tenFe6GKJL0BO9ozvKtuZVfig-MSFcIYDuPOog9etY6gna_44f_e4lWoPjrn0Y",
    alt: "Executive man",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4hDxb8HVzWEhtOQdkVHIzpuSKD9uM6E5BGVwClTfra3W1wtGZQ_qgasItVCwFc57Pd9-1Uf48FaLUf7F-TgcHkN1QmAQCv7O4sCMkc-6dAh08g_jalraEVUXjv_jO0NPKxZhC92XbIJhZ01A1NjdCWCXXoPy_GZIM2nQMT-Vo3-4biySMnIQdDAqqshRuPMvon0yXjJBxcj-ebFy2T7Marv2bTNCt9gc21sN742Sf-eX1L3K9sMLo6QYdeDieVuBcx8TH0vyneQo",
    alt: "Female professional",
  },
];

export default function ResultsPage({ answers, lead }: ResultsPageProps) {
  const { overallScore, pillarAverages } = useMemo(
    () => calculateResults(answers),
    [answers]
  );

  const grade = getGrade(overallScore);

  const content = useMemo(
    () => getResultsContent(overallScore, pillarAverages),
    [overallScore, pillarAverages]
  );

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* ── Result Header ──────────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-20">
        {/* Circular score indicator */}
        <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center shrink-0">
          {/* Base ring */}
          <div className="absolute inset-0 rounded-full border-[12px] border-[#e5e2e1]" />
          {/* Filled arc — clip-path driven by score */}
          <div
            className="absolute inset-0 rounded-full border-[12px] border-[#df9931]"
            style={{
              clipPath: `polygon(0 0, 100% 0, 100% ${overallScore}%, 0 ${overallScore}%)`,
            }}
          />
          {/* Score text */}
          <div className="text-center z-10 flex flex-col items-center">
            <span className="text-[0.6rem] font-bold tracking-[0.12em] text-[#514536]/60 uppercase mb-2">
              AUDIT SCORE
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[6.5rem] md:text-[8rem] font-black tracking-tighter leading-none text-[#1b1b1b]">
                {overallScore}
              </span>
              <span className="text-3xl md:text-4xl font-bold text-[#df9931]">
                %
              </span>
            </div>
            <div className="mt-3 bg-[#df9931]/10 px-6 py-2 rounded-full">
              <span className="text-2xl md:text-3xl font-black text-[#df9931] tracking-tighter">
                {grade}
              </span>
            </div>
          </div>
        </div>

        {/* Narrative */}
        <div className="flex-1 space-y-8 mt-4 lg:mt-10">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 bg-[#df9931]/10 text-[#845400] font-bold text-xs tracking-widest uppercase rounded-full">
              DIAGNOSTIC COMPLETE — {lead.name}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-[#1b1b1b]">
              {content.headline}{" "}
              <span className="text-[#df9931]">{content.highlight}</span>
            </h1>
          </div>

          {/* Personalized action plan */}
          <div className="bg-[#f6f3f2] p-8 md:p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-[0.08] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <span className="material-symbols-outlined text-[6rem]">
                auto_awesome
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#1b1b1b]">
              <span className="material-symbols-outlined text-[#df9931]">
                lightbulb
              </span>
              Personalized Action Plan
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-[#514536] font-medium">
              {content.actionPlan}
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
            <a
              href="#"
              id="results-cta-consultation"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-br from-[#845400] to-[#df9931] text-white font-bold rounded-full shadow-lg shadow-[#df9931]/20 hover:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book a Free Consultation
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </a>
            <button
              id="results-download-pdf"
              className="w-full sm:w-auto px-10 py-5 bg-[#eae7e7]/70 text-[#514536] font-semibold rounded-full hover:bg-[#eae7e7] transition-all duration-300 cursor-pointer"
            >
              Download Full Report (PDF)
            </button>
          </div>
        </div>
      </div>

      {/* ── Bento Grid ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Consistency Analysis — 2-col */}
        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-[#d6c3b0]/10 flex flex-col justify-between min-h-[280px]">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="text-sm font-bold text-[#514536]/60 tracking-widest uppercase mb-1">
                Consistency Analysis
              </h4>
              <p className="text-2xl font-bold text-[#1b1b1b]">
                Brand Identity Alignment
              </p>
            </div>
            <div className="p-3 bg-[#f6f3f2] rounded-xl shrink-0">
              <span className="material-symbols-outlined text-[#df9931]">
                palette
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-bold">
              <span className="text-[#1b1b1b]">
                Messaging vs Visual Identity
              </span>
              <span className="text-[#df9931]">
                {content.consistencyScore}% Match
              </span>
            </div>
            <div className="h-2 w-full bg-[#e5e2e1] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#df9931] rounded-full transition-all duration-1000"
                style={{ width: `${content.consistencyScore}%` }}
              />
            </div>
            <p className="text-sm text-[#514536]/70 leading-relaxed">
              Your brand assets show variance between messaging clarity and
              visual consistency. Aligning these two pillars will significantly
              strengthen overall brand perception and market recognition.
            </p>
          </div>
        </div>

        {/* Trust Factor — 1-col dark gold */}
        <div className="bg-[#845400] text-white p-8 rounded-2xl flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-[10rem]">
              verified_user
            </span>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#df9931] tracking-widest uppercase mb-1">
              Trust Factor
            </h4>
            <p className="text-2xl font-bold">Market Perception</p>
          </div>
          <div className="z-10 mt-8">
            <span className="text-5xl font-black italic">
              {content.trustFactor}
            </span>
            <p className="text-sm mt-2 text-[#ffddb6]/70">
              {overallScore >= 70
                ? "Your messaging resonates with key personas."
                : "Improve consistency to strengthen market trust."}
            </p>
          </div>
        </div>

        {/* Growth Potential — 1-col */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#d6c3b0]/10">
          <div className="p-3 bg-[#f6f3f2] rounded-xl w-fit mb-6">
            <span className="material-symbols-outlined text-[#df9931]">
              trending_up
            </span>
          </div>
          <h4 className="text-xl font-bold mb-2 text-[#1b1b1b]">
            Growth Potential
          </h4>
          <p className="text-[#514536]/70 text-sm leading-relaxed mb-6">
            By strengthening your weakest pillar ({content.weakestPillar}), you
            could see up to a{" "}
            <span className="font-bold text-[#df9931]">
              {content.growthUpside}%
            </span>{" "}
            increase in conversion trust within 90 days.
          </p>
          <div className="flex -space-x-2 items-center">
            {growthAvatars.map((a, i) => (
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
            <div className="w-8 h-8 rounded-full border-2 border-white bg-[#eae7e7] flex items-center justify-center text-[10px] font-bold text-[#1b1b1b]">
              +12
            </div>
          </div>
        </div>

        {/* Immediate Fix — 2-col dark */}
        <div className="md:col-span-2 bg-[#1b1b1b] text-white p-8 rounded-2xl flex items-center gap-8 relative overflow-hidden">
          <div className="flex-1">
            <h4 className="text-[#df9931] font-bold text-sm tracking-widest uppercase mb-3">
              Immediate Fix
            </h4>
            <p className="text-xl font-medium leading-relaxed text-white/90">
              {content.immediateFix}
            </p>
          </div>
          <div className="hidden sm:flex h-24 w-24 shrink-0 bg-[#df9931] rounded-2xl rotate-12 items-center justify-center">
            <span className="material-symbols-outlined text-white text-4xl">
              edit_note
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
