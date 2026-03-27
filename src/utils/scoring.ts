import { questions, QuizQuestion } from "@/data/questions";
import configData from "@/data/config.json";

type Answer = string | number;

// Import scoring mappings and metadata from config JSON
const GRID_SCORES = configData.scoring.gridScores as Record<string, number>;
const MULTIPLE_SCORES = configData.scoring.multipleScores as Record<string, number>;
const PILLAR_NAMES = Object.entries(configData.pillars).reduce(
  (acc, [key, val]: [string, any]) => {
    acc[Number(key)] = val.name;
    return acc;
  },
  {} as Record<number, string>
);
const PILLAR_FIXES = Object.entries(configData.pillars).reduce(
  (acc, [key, val]: [string, any]) => {
    acc[Number(key)] = val.immediateFix;
    return acc;
  },
  {} as Record<number, string>
);
const ACTION_PLANS = configData.actionPlans as Record<
  string,
  {
    scoreRange: string;
    headline: string;
    highlight: string;
    actionPlan: string;
    trustFactor: string;
  }
>;

export function getQuestionScore(q: QuizQuestion, answer: Answer): number {
  if (q.format === "grid") return GRID_SCORES[answer as string] ?? 1;
  if (q.format === "slider") return Math.round(((answer as number) / 10) * 3 * 10) / 10; // 0–3 scale, one decimal
  if (q.format === "multiple") return MULTIPLE_SCORES[answer as string] ?? 1.5;
  return 1.5;
}

// ── Aggregate results ───────────────────────────────────────────────────
// Total possible: 32 questions × 3 points = 96 points max
// Percentage = (total points / 96) × 100
export function calculateResults(answers: Record<number, Answer>) {
  const pillarBuckets: Record<number, number[]> = {};

  for (const q of questions) {
    const answer = answers[q.id];
    if (answer === undefined) continue;
    const score = getQuestionScore(q, answer);
    if (!pillarBuckets[q.pillarNumber]) pillarBuckets[q.pillarNumber] = [];
    pillarBuckets[q.pillarNumber].push(score);
  }

  // Total points across all questions
  const totalPoints = Object.values(pillarBuckets)
    .flat()
    .reduce((a, b) => a + b, 0);

  // Maximum possible points: 32 questions × 3 = 96
  const maxPoints = questions.length * 3;
  const overallScore = Math.round((totalPoints / maxPoints) * 100);

  // Pillar averages (for breakdown)
  const pillarAverages: Record<number, number> = {};
  for (const [pillar, scores] of Object.entries(pillarBuckets)) {
    const pillarTotal = scores.reduce((a, b) => a + b, 0);
    const pillarMax = scores.length * 3;
    pillarAverages[Number(pillar)] = Math.round((pillarTotal / pillarMax) * 100);
  }

  return { overallScore, pillarAverages };
}

// ── Letter grade ────────────────────────────────────────────────────────
// A = 90–100%, B = 80–89%, C = 70–79%, D = 60–69%, F = below 60%
export function getGrade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

// ── Rich results content ────────────────────────────────────────────────
export function getResultsContent(
  score: number,
  pillarAverages: Record<number, number>
) {
  // Get grade for score
  const grade = getGrade(score);

  // Weakest pillar
  const sorted = Object.entries(pillarAverages).sort(
    ([, a], [, b]) => a - b
  );
  const weakestNum = sorted[0] ? Number(sorted[0][0]) : 1;
  const weakestPillar = PILLAR_NAMES[weakestNum];
  const weakestScore = sorted[0] ? Math.round(Number(sorted[0][1])) : 50;

  // Messaging alignment = avg of pillars 1 & 2
  const consistencyScore = Math.round(
    ((pillarAverages[1] ?? 50) + (pillarAverages[2] ?? 50)) / 2
  );

  // Get action plan template from config
  const plan = ACTION_PLANS[grade] || ACTION_PLANS["F"];

  // Replace template variables
  const actionPlan = plan.actionPlan.replace(
    /{{weakestPillar}}/g,
    weakestPillar
  );

  return {
    headline: plan.headline,
    highlight: plan.highlight,
    actionPlan,
    trustFactor: plan.trustFactor,
    immediateFix: PILLAR_FIXES[weakestNum] ?? PILLAR_FIXES[1],
    weakestPillar,
    weakestScore,
    consistencyScore,
    growthUpside: Math.round((100 - score) * 0.28),
  };
}
