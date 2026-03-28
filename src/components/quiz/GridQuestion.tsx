"use client";

const OPTIONS = [
  { label: "Yes", icon: "check_circle" },
  { label: "No", icon: "cancel" },
  { label: "Partially", icon: "adjust" },
  { label: "I don't know", icon: "help" },
];

interface GridQuestionProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

export default function GridQuestion({ value, onChange }: GridQuestionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {OPTIONS.map((option) => {
        const isSelected = value === option.label;
        return (
          <button
            key={option.label}
            onClick={() => onChange(option.label)}
            className={`group relative flex items-center justify-between p-6 sm:p-8 rounded-xl transition-all duration-300 border cursor-pointer
              ${isSelected
                ? "bg-[#845400] border-[#845400] scale-[0.99]"
                : "bg-[#f6f3f2] border-transparent hover:bg-white hover:border-[#845400]/20 active:scale-[0.98]"
              }`}
          >
            <span className={`text-lg sm:text-xl font-semibold ${isSelected ? "text-white" : "text-[#1b1b1b]"}`}>
              {option.label}
            </span>
            <span
              className={`material-symbols-outlined transition-all duration-300 ${isSelected
                ? "opacity-100 text-white"
                : "opacity-0 group-hover:opacity-100 text-[#845400]"
                }`}
            >
              {option.icon}
            </span>
          </button>
        );
      })}
    </div>
  );
}
