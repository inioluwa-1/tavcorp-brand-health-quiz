"use client";

interface InsightPanelProps {
  insight: { title: string; body: string };
}

export default function QuizInsightPanel({ insight }: InsightPanelProps) {
  return (
    <aside className="hidden xl:block fixed right-10 top-1/2 -translate-y-1/2 w-60 space-y-5 z-40">
      {/* Insight card */}
      <div className="p-6 bg-white rounded-2xl shadow-sm border border-[#d6c3b0]/20">
        <span className="material-symbols-outlined text-[#845400] mb-3 block text-2xl">
          lightbulb
        </span>
        <h4 className="text-sm font-bold mb-2 text-[#1b1b1b]">{insight.title}</h4>
        <p className="text-xs leading-relaxed text-[#514536]">{insight.body}</p>
      </div>

      {/* Live auditor pill */}
      <div className="p-5 bg-[#f6f3f2] rounded-2xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1b1b1b]">
            Live Auditor
          </span>
        </div>
        <p className="text-[11px] leading-relaxed text-[#514536]">
          Analyzing your brand health in real-time…
        </p>
      </div>
    </aside>
  );
}
