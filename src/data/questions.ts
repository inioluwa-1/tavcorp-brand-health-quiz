import questionsData from './questions.json';

export type QuestionFormat = 'grid' | 'slider' | 'multiple';

export interface SliderConfig {
  minLabel: string;
  maxLabel: string;
  hint?: string;
}

export interface QuizQuestion {
  id: number;
  pillar: string;
  pillarNumber: number;
  format: QuestionFormat;
  text: string;
  options?: string[];
  slider?: SliderConfig;
  insight?: { title: string; body: string };
}

// Import questions from JSON for easy content management
export const questions: QuizQuestion[] = questionsData as QuizQuestion[];
