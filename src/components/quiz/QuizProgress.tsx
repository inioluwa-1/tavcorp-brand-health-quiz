"use client";

interface QuizProgressProps {
  current: number;
  total: number;
  pillar: string;
}

export default function QuizProgress({ current, total, pillar }: QuizProgressProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full max-w-2xl mb-16 space-y-4">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <span className="text-[0.65rem] font-bold tracking-[0.15em] text-[#845400] uppercase">
            {pillar}
          </span>
          <h2 className="text-[#514536] font-medium text-sm">
            Question {current} of {total}
          </h2>
        </div>
        <span className="text-[#845400] font-bold text-lg">{percentage}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full bg-[#e5e2e1] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#845400] to-[#df9931] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
