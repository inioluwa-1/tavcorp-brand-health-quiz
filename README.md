# TavCorp Brand Health Quiz

The **TavCorp Brand Health Quiz** is a high-performance, dynamic diagnostic tool built to assess brand vitality across multiple core qualitative parameters. Engineered as an interactive marketing funnel, this application transitions users through a comprehensive 32-point questionnaire, seamlessly capturing leads before generating instant, beautifully visualized brand health analytics.

---

## ✨ Key Features

- **Dynamic Quiz Engine**: Advanced question architecture supporting mixed data formats (Slider scales, Multiple Choice, Multi-Grid Matrix) driven by an externalized data configuration.
- **Intelligent Scoring Algorithms**: Real-time mathematical aggregation of qualitative user data into a centralized quantifiable 'Health Score', accompanied by granular algorithmic reporting structure.
- **Frictionless Lead Capture**: Embedded conversion funnel that secures critical B2B user data prior to displaying proprietary diagnostic results.
- **Premium UI/UX**: Designed for absolute high-fidelity impact, featuring fully responsive mobile breakpoints, fluid CSS typography scaling, elegant glassmorphism aesthetics, and `aos` continuous scroll animations.
- **Zero-Layout Shift Execution**: Mobile-first DOM paradigms mapped carefully alongside state-driven React transitions to eliminate jarring layout jumping entirely during the fast-paced question flow.

## 🛠 Technology Stack

- **Core Framework**: [Next.js 14/15](https://nextjs.org/) (App Router Methodology)
- **UI Library**: [React 19](https://react.dev/)
- **Styling Interface**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Orchestration**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) + Modular CSS Transitions
- **Typing**: Strict TypeScript

## 🏗 Architecture Overview

The application logic is strictly decoupled to ensure rapid scaling and maintainability:

- **`src/app/quiz/page.tsx`**: The primary state-machine handling the execution pipeline (`quiz phase` → `lead-capture phase` → `results dashboard`).
- **`src/components/quiz/*`**: Modular, atomic design elements (`GridQuestion`, `MultipleChoiceQuestion`, `ResultsChart`) engineered for robust reusability.
- **`src/utils/scoring.ts`**: The pure mathematical calculation engine converting subjective multi-variable categorical answers into precisely weighted CRM metrics.
- **`src/data/config.json & questions.ts`**: System architecture structured so that complex content updates do not mandate hardcode refactoring.

## 🚀 Getting Started (Local Development)

Ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tavcorp-brand-health-quiz.git
   cd tavcorp-brand-health-quiz
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the development sandbox:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to visualize the application environment.

## ⚙️ Administration & Configuration Guide

You do not need to be a developer to update the critical components of the site. Everything has been decoupled for easy access.

### 1. Update Branding (Logo, Colors, Fonts, Contact Link)
- **Logo:** Replace the `public/tavnobg.png` or `public/tav.jpg` files with your own graphic using the exact same filenames.
- **Colors:** Because Tailwind utility classes are used inline, simply perform a global "Find and Replace" in your code editor. Search for `#DF9931` (Gold) or `#1B1B1B` (Dark Gray) and replace it with your brand's hex code. Or, add them as root CSS variables in `src/app/globals.css`.
- **Fonts:** The project inherits Google Fonts globally via `src/app/layout.tsx`. To change it (e.g., to Roboto), modify `import { Inter } from "next/font/google";` to your chosen font.
- **Contact Links:** Found inside `src/components/Footer.tsx`. Open the file and edit the `href="#"` attributes inside the standard Links layout.

### 2. Modify Quiz Content via JSON
The entire quiz is powered by an external JSON payload, meaning you never need to touch complex React code.
- Open `src/data/questions.json`.
- Each question is mapped as an object inside an array.
- Standard format:
  ```json
  {
    "id": "q1",
    "text": "What is the primary way new clients discover your brand?",
    "type": "multiple_choice",
    "pillar": "market_position",
    "options": ["Referrals", "Organic Search"]
  }
  ```
- Simply update the `"text"` string to rephrase a question, or change the `"options"` array strings. Ensure you respect valid JSON syntax (no trailing commas).

### 3. Change Scoring Thresholds or Action Plan Messages
The algorithmic scoring constraints and personalized result messaging exist completely independent of the quiz itself.
- Open `src/data/config.json`.
- Inside the `"scoring"` object, you will see predefined thresholds (e.g., `gradeA`, `gradeF`).
- **To change thresholds:** Simply edit the minimum/maximum cutoff logic.
- **To change Action Plan Messages:** Scroll to the respective pillar or grade block and edit the `"actionPlan"` or `"message"` strings. The application automatically recalibrates instantly.

## 📦 Production Deployment

This application architecture is inherently optimized for seamless integration with **Vercel**. Connect your GitHub repository to the Vercel dashboard and configure the output build environment to standard `Next.js`.

Alternatively, utilizing the Vercel CLI:
```bash
npx vercel build
npx vercel deploy --prod
```

## 📋 Ongoing Development Pipeline
- [ ] Connect the `LeadCaptureForm.tsx` webhook to a direct operational database (e.g., Supabase / Resend / Salesforce Hub).
- [ ] Implement robust backend PDF generation logic to supply users with a downloadable comprehensive diagnostic packet directly from the `ResultsPage.tsx`.
- [ ] Incorporate browser `localStorage` to securely pause and persist user diagnostics midway through the assessment.

---
*Engineered emphasizing meticulous data UX and precise corporate aesthetic alignment.*
