---
name: create-tool
description: Scaffold, design, and implement a new interactive utility tool in the library (src/tool/). Use whenever creating, adding, or refactoring a web tool to ensure SOLID code, high-dopamine UI/UX, dark/light theme support, and complete i18n & SEO.
---

# Create Tool Skill (Sports Utility Library)

Follow this skill workflow when scaffolding, building, or refactoring tools in `src/tool/`.

---

## 1. Philosophy & Strict Rules

### Code Architecture & Quality Standards
- **SOLID Principles**: Strict separation between core business logic (`logic.ts`), metadata & routing (`entry.ts`), visual presentation (`component.astro`), SEO content (`seo.astro`), references (`bibliography.ts`), and dictionaries (`i18n/en.ts`).
- **NO Comments in Code**: Do not write any comments (`//` or `/* */`) in TypeScript, Astro components, CSS, or JSON files.
- **NO Emojis**: Do not use emojis in code, UI text, logs, titles, metadata, or translations.
- **NO Redundant Titles**: Never repeat keywords or domain terms in titles or headers (e.g. AVOID combining "Penalty Penalty" or duplicating title words).

### High-Dopamine Visual Design & UX
- **Vibrant & Tactile UI**: Never build simple or minimal MVPs. Interfaces must feature rich gradients, smooth drop shadows, clean borders, and high contrast.
- **Full Light & Dark Theme Support**: CSS must use design tokens (`var(--bg-surface)`, `var(--text-base)`, `var(--border-base)`) and explicitly include `.theme-dark` container rules.
- **Click & Interaction Feedback**:
  - Spawn floating micro-feedback particles (`GOAL!`, `MISS!`, `+1`) at coordinate offsets on user actions.
  - Trigger keyframe animations on score/result changes (e.g. scale boom, color pulse, glow).
  - Hover and active scale micro-interactions on all interactive elements.
- **Epic Finish & Victory Celebrations**: When a match or calculation completes, display a full-screen, high-impact modal overlay (`ps-winner-overlay`) with glassmorphism backdrop, trophy animations, winner highlight, and score breakdown.

### Strict SEO Standards & Rich Predefined Components
- **Balanced Length & Real Value**: SEO text must NOT be excessively long or artificially padded with editorial fluff, nor excessively brief. It must directly answer real user search intents related to the tool.
- **Hyper-Relevant Content Only**: Zero generic filler text. Every paragraph must provide concrete rules, official standards, operational steps, or practical criteria for the tool's specific domain.
- **Mandatory Rich Visual Components**: Build the SEO architecture using a minimum of 4 distinct visually attractive predefined components:
  1. `stats`: Numerical highlights and impact metrics.
  2. `comparative`: Side-by-side comparisons of formats, phases, or rules.
  3. `tip`: Actionable advice and strategic notes.
  4. `table`: Structured tabular reference data or thresholds.
  5. `proscons`: Clear advantage vs disadvantage breakdown.
  6. `glossary`: Terms and technical definitions.
  7. `diagnostic`: Status alerts, warnings, or informational callouts.
- **No Developer Jargon**: Never include code examples, framework names, programming terms, or technical implementation details in public SEO text.
- **No Hyphens or Pipes in SEO Titles**: Titles in SEO sections and metadata must never contain `-` or `|`.

### Proportional & High-Authority Bibliography Rules
- **Proportional Bibliography Quantity**: Do NOT artificially inflate the bibliography count. Adapt the number of sources to the complexity and scope of the tool (e.g., 1 single official IFAB link is sufficient for a penalty shootout scorekeeper; multi-domain calculators like Elo or Snooker frame metrics may require 2-3 links).
- **Direct Domain Relevance Only**: Bibliography entries must strictly relate to the real-world subject matter, official regulations, or science of the tool (e.g. IFAB rules, FIFA protocols, sports biomechanics).
- **NO Programming or Framework Links**: Absolutely NO links to React, TypeScript, Astro, MDN Web Docs, npm, Node.js, or software development tutorials.
- **100% Real Working URLs (Zero 404s)**: Every URL must be a valid, live, high-authority domain link (Wikipedia, IFAB, FIFA, UEFA, IEEE, ISO, etc.). Never invent fake or broken deep links that lead to 404 errors.

### Strict Translation Rules (NO Copy-Pasting English)
- **Real Language-by-Language Translation Required**: You MUST translate every text string, UI label, FAQ, how-to step, title, description, and SEO paragraph into the actual target language for ALL 15 locales.
- **ABSOLUTELY FORBIDDEN**: Never copy untranslated English text into other language files (e.g. `de.ts`, `fr.ts`, `it.ts`, etc.). Placing raw English inside non-English locale files is strictly forbidden and a total violation of production readiness.
- **Native & Natural Phrasing**: Use natural, culturally adapted phrasing for each target language.

---

## 2. Meaning of OKQA & Production-Ready Protocol

When the user explicitly says **`OKQA`**, it means:
1. **Tool Design Approved**: The user has validated the core UX, design, and logic layout of the English baseline tool.
2. **Full Production Localization Mandate**: You must translate the tool content language-by-language with care, precision, and complete linguistic adaptation across all 15 supported production locales (`de`, `en`, `es`, `fr`, `id`, `it`, `ja`, `ko`, `nl`, `pl`, `pt`, `ru`, `sv`, `tr`, `zh`). NEVER duplicate English text.
3. **Slug Localization Rules**:
   - For logographic script locales (`ja`, `ko`, `zh`), the URL slug MUST remain identical to the English slug.
   - For all other locales, translate and fully localize the URL slug to its respective language.
4. **Complete Registering of Locales**: Add all 15 locale loaders inside `entry.ts` and `category/index.ts`.
5. **Full Automated Verification Suite Execution**:
   - `npm run type-check` (Must be 0 errors)
   - `npm run lint` (Must pass ESLint and Stylelint)
   - `npm run test` (Must pass 100% of test suites, including full i18n coverage tests)

---

## 3. Directory & File Structure

Every new tool must be created inside `src/tool/<toolId>/`:

```text
src/tool/<toolId>/
├── logic.ts              # Pure business logic & state functions
├── logic.test.ts         # Unit tests (Vitest)
├── ui.ts                 # UI translation interface (PenaltyShootoutUI, etc.)
├── entry.ts              # Tool registration & i18n loaders
├── index.ts              # Tool exports bundle
├── component.astro       # Interactive UI Component
├── <slug>.css            # Scoped styles (kebab-case of English slug)
├── seo.astro             # SEO container component
├── bibliography.ts       # References array
├── bibliography.astro    # References view component
└── i18n/
    ├── de.ts
    ├── en.ts
    ├── es.ts
    ├── fr.ts
    ├── id.ts
    ├── it.ts
    ├── ja.ts
    ├── ko.ts
    ├── nl.ts
    ├── pl.ts
    ├── pt.ts
    ├── ru.ts
    ├── sv.ts
    ├── tr.ts
    └── zh.ts
```

---

## 4. Step-by-Step Execution Workflow

### Step 1: Baseline Implementation (English-First)
1. Define pure state management and calculation logic in `logic.ts`.
2. Write unit tests covering normal flow, edge cases, and completion states in `logic.test.ts`.
3. Create `i18n/en.ts` with structured SEO sections and UI dictionary.
4. Build `component.astro` taking `{ ui: t }` as Astro props and `<slug>.css` with dark mode support.
5. Temporarily register ONLY `en` in `entry.ts` and present the baseline tool to the user.
6. Stop and wait for the user to review and issue **`OKQA`**.

### Step 2: Production Localization & Verification (After OKQA)
Once the user says **`OKQA`**:
1. Translate `i18n/en.ts` language-by-language into all 14 remaining locales (`de`, `es`, `fr`, `id`, `it`, `ja`, `ko`, `nl`, `pl`, `pt`, `ru`, `sv`, `tr`, `zh`). NEVER copy untranslated English text.
2. Register all 15 locale loaders in `entry.ts` and `category/index.ts`.
3. Run the full verification suite in order:
   ```bash
   npm run type-check
   npm run lint
   npm run test
   ```
4. Verify zero failures before confirming production readiness to the user.

---

## 5. Double-Thinking Post-QA Audit Checklist

Before declaring the task finished, pause and perform a **Double-Check Audit** against this mandatory checklist:

- [ ] **15 Production Locales Real Translations**: Verify that all 15 locale files are properly translated into their target language (NO copy-pasted English text).
- [ ] **15 Production Locales Registered**: Verify that all 15 locale loaders exist and are registered in `entry.ts`.
- [ ] **Localized Slugs**: Verify that non-logographic script locales have translated URL slugs.
- [ ] **Proportional Bibliography**: Verify that references match tool scope (avoiding unnecessary links when 1 official link suffices).
- [ ] **Title Non-Redundancy**: Verify that the main title does not repeat words or contain awkward duplicated prefixes.
- [ ] **Zero 404 Links in Bibliography**: Verify that every URL in `bibliography.ts` points to a real, live official domain with zero 404 risk.
- [ ] **Zero Dev Jargon in SEO**: Verify that no programming framework or developer terms appear in SEO text.
- [ ] **Dark & Light Mode Integration**: Verify that `.theme-dark` styles exist and CSS variables adapt properly.
- [ ] **High-Dopamine UX**: Verify that particle feedback, button animations, and victory overlay modals work seamlessly.
- [ ] **Full Automated Suite Compliance**:
  ```bash
  npm run type-check
  npm run lint
  npm run test
  ```
