"use client";

interface MultipleChoiceProps {
  options: string[];
  value: string | undefined;
  onChange: (value: string) => void;
}

export default function MultipleChoiceQuestion({ options, value, onChange }: MultipleChoiceProps) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`flex items-center justify-between p-6 rounded-xl transition-all duration-300 border text-left cursor-pointer
              ${isSelected
                ? "bg-[#845400] border-[#845400] scale-[0.99]"
                : "bg-[#f6f3f2] border-transparent hover:bg-white hover:border-[#845400]/20 active:scale-[0.98]"
              }`}
          >
            <span className={`text-lg font-semibold ${isSelected ? "text-white" : "text-[#1b1b1b]"}`}>
              {option}
            </span>
            <span
              className={`material-symbols-outlined transition-all duration-300 ${
                isSelected ? "text-white opacity-100" : "opacity-0"
              }`}
            >
              check_circle
            </span>
          </button>
        );
      })}
    </div>
  );
}
