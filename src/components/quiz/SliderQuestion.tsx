"use client";

import { SliderConfig } from "@/data/questions";

interface SliderQuestionProps {
  config: SliderConfig;
  value: number;
  onChange: (value: number) => void;
}

export default function SliderQuestion({ config, value, onChange }: SliderQuestionProps) {
  const fillPercent = (value / 10) * 100;

  return (
    <div className="w-full max-w-2xl flex flex-col items-center">
      {/* Large value display */}
      <div className="mb-12 flex flex-col items-center">
        <span className="text-7xl font-black text-[#845400] tracking-tighter leading-none">
          {value}
        </span>
        <div className="h-1 w-8 bg-[#df9931] rounded-full mt-3" />
      </div>

      {/* Slider track + input */}
      <div className="w-full px-2">
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input w-full mb-6"
          style={
            { "--slider-fill": `${fillPercent}%` } as React.CSSProperties
          }
        />

        {/* Min / Max labels */}
        <div className="flex justify-between px-1">
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold tracking-wider text-[#514536] uppercase">
              {config.minLabel}
            </span>
            <span className="text-[10px] text-[#514536]/60 font-medium">0</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold tracking-wider text-[#845400] uppercase">
              {config.maxLabel}
            </span>
            <span className="text-[10px] text-[#845400]/60 font-medium">10</span>
          </div>
        </div>
      </div>

      {/* Optional hint */}
      {config.hint && (
        <p className="mt-10 text-sm text-[#514536]/70 italic text-center max-w-md">
          {config.hint}
        </p>
      )}
    </div>
  );
}
