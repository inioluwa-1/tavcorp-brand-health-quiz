"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuizProgress from "@/components/quiz/QuizProgress";
import GridQuestion from "@/components/quiz/GridQuestion";
import SliderQuestion from "@/components/quiz/SliderQuestion";
import MultipleChoiceQuestion from "@/components/quiz/MultipleChoiceQuestion";
import QuizInsightPanel from "@/components/quiz/QuizInsightPanel";
import LeadCaptureForm from "@/components/quiz/LeadCaptureForm";
import ResultsPage from "@/components/quiz/ResultsPage";
import { questions } from "@/data/questions";

type Answer = string | number;
type Stage = "quiz" | "form" | "results";

// ── Lead data (persisted through stages) ──────────────────────────────────
interface Lead {
  name: string;
  email: string;
}

export default function QuizPage() {
  const [stage, setStage] = useState<Stage>("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [animKey, setAnimKey] = useState(0);
  const [lead, setLead] = useState<Lead | null>(null);

  const totalQuestions = questions.length;
  const question = questions[currentIndex];
  const isLast = currentIndex === totalQuestions - 1;
  const canProceed = answers[question.id] !== undefined;

  // Pre-fill slider default so Next is always enabled for slider questions
  useEffect(() => {
    if (question.format === "slider" && answers[question.id] === undefined) {
      setAnswers((prev) => ({ ...prev, [question.id]: 5 }));
    }
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAnswer = (ans: Answer) => {
    setAnswers((prev) => ({ ...prev, [question.id]: ans }));
  };

  const navigate = (dir: "next" | "prev") => {
    if (dir === "next") {
      if (isLast) {
        // Finished all questions → go to lead capture
        setStage("form");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setCurrentIndex((i) => i + 1);
        setAnimKey((k) => k + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    if (dir === "prev" && currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setAnimKey((k) => k + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLeadSubmit = (name: string, email: string) => {
    setLead({ name, email });
    setStage("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Lead capture form stage ──────────────────────────────────────────
  if (stage === "form") {
    return (
      <>
        <Navbar />
        <LeadCaptureForm onSubmit={handleLeadSubmit} />
        <Footer />
      </>
    );
  }

  // ── Results stage ────────────────────────────────────────────────────
  if (stage === "results") {
    return (
      <>
        <Navbar />
        <ResultsPage answers={answers} lead={lead!} />
        <Footer />
      </>
    );
  }

  // ── Quiz questions stage ─────────────────────────────────────────────
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
        {/* Progress */}
        <QuizProgress
          current={currentIndex + 1}
          total={totalQuestions}
          pillar={question.pillar}
        />

        {/* Question card — key re-mounts it for slide-in animation */}
        <div
          key={animKey}
          className="question-animate w-full bg-[#f6f3f2] rounded-2xl p-6 sm:p-8 md:p-16 relative overflow-hidden"
        >
          <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-[#845400]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Pillar tag */}
            <span className="inline-block px-4 py-1.5 bg-[#e5e2e1] rounded-full text-[10px] font-bold tracking-widest text-[#514536] mb-10 uppercase">
              {question.pillar}
            </span>

            {/* Question text */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-[#1b1b1b] leading-tight mb-10 md:mb-16 max-w-3xl tracking-tight px-2">
              {question.text}
            </h1>

            {question.format === "grid" && (
              <GridQuestion
                value={answers[question.id] as string | undefined}
                onChange={handleAnswer}
              />
            )}

            {question.format === "slider" && (
              <SliderQuestion
                config={question.slider!}
                value={(answers[question.id] as number) ?? 5}
                onChange={handleAnswer}
              />
            )}

            {question.format === "multiple" && (
              <MultipleChoiceQuestion
                options={question.options!}
                value={answers[question.id] as string | undefined}
                onChange={handleAnswer}
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="w-full mt-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <button
            onClick={() => navigate("prev")}
            disabled={currentIndex === 0}
            className="flex items-center justify-center w-full sm:w-auto gap-2 text-[#514536]/60 hover:text-[#845400] disabled:opacity-30 disabled:cursor-not-allowed transition-colors py-4 px-5 rounded-full hover:bg-[#f6f3f2] font-medium cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="text-sm font-bold uppercase tracking-widest">
              Previous
            </span>
          </button>

          <button
            onClick={() => navigate("next")}
            disabled={!canProceed}
            className="group flex items-center justify-center w-full sm:w-auto gap-4 bg-[#845400] text-white pl-8 pr-4 py-4 rounded-full shadow-lg hover:scale-[0.98] hover:shadow-xl transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              {isLast ? "Finish Quiz" : "Next Question"}
            </span>
            <div className="bg-[#df9931] text-white h-10 w-10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <span className="material-symbols-outlined">
                {isLast ? "check" : "arrow_forward"}
              </span>
            </div>
          </button>
        </div>
      </main>

      {/* Right-side insight panel (xl screens only) */}
      {question.insight && <QuizInsightPanel insight={question.insight} />}

      <Footer />
    </div>
  );
}