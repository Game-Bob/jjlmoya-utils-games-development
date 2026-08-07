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
- **Strict `ToolLocaleContent` Export Structure**: Every locale file `i18n/<locale>.ts` MUST export `export const content: ToolLocaleContent<ToolUI> = { slug, title, description, ui, seo, faq, howTo, schemas, bibliography }`. NEVER export only the UI dictionary. In `entry.ts`, every locale loader MUST load `m.content` via `() => import('./i18n/<locale>').then((m) => m.content)`. Returning raw UI dictionaries instead of `ToolLocaleContent` causes `slug` to be `undefined` when clicking links in category listings!
- **Accessibility & PageSpeed Labeling**: Every `<input>` or control element in `component.astro` MUST have a matching `<label for="...">` or explicit `aria-label="..."` attribute to pass PageSpeed audit tests.
- **Excellence Over Speed**: Quality and completeness are mandatory. Never rush or leave empty arrays/placeholders (`faq`, `howTo`, `schemas`, `bibliography`) under any circumstances. Everything must be fully populated with real, meaningful data.
- **NO Comments in Code**: Do not write any comments (`//` or `/* */`) in TypeScript, Astro components, CSS, or JSON files.
- **NO Emojis**: Do not use emojis in code, UI text, logs, titles, metadata, or translations.
- **NO Redundant Titles**: Never repeat keywords or domain terms in titles or headers (e.g. AVOID combining "Penalty Penalty" or duplicating title words).
- **NO Embedded Page Title/Description in Tool Component**: NEVER render page titles (`<h1>`, `<h2>` main titles) or introductory description paragraphs inside `component.astro`. The parent layout/page already renders the page header. `component.astro` must contain ONLY the interactive tool card/interface itself.
- **Mandatory Metric & Imperial Toggle Switch**: If a tool makes reference to distances, weights, speeds, or units from either the Metric or Imperial system (e.g. km/mi, kg/lb, m/ft), it is MANDATORY to include an interactive toggle switch or selector allowing the user to seamlessly switch between Metric and Imperial units throughout the UI.

### High-Dopamine Visual Design & UX ("We Do Not Build Excels, We Build ART")
- **ART Manifesto & Ergonomic Questions**: We do NOT build dry, grid-like Excels. We build ART. Always ask yourself:
  1. *Can this be done with fewer inputs?*
  2. *Can the remaining inputs be made substantially more comfortable, tactile, and natural (sliders, visual chips, quick toggles)?*
  3. *Could this interface look significantly more beautiful, visual, and alive?* If the answer is yes, improve it immediately!
  4. *Can I make the user's life easier?* If YES -> do it immediately!
- **Single Unified Card Container**: The entire tool MUST be presented as a SINGLE unified card/container (`tool-card` / `ssp-main-card`). NEVER split the interface into disconnected, floating separate cards, detached tab bars, or fragmented outer boxes. All controls, tabs, previews, flipbook players, and action buttons MUST be integrated inside one cohesive, continuous card container with internal sub-sections.
- **Vibrant & Tactile UI**: Never build simple or minimal MVPs. Interfaces must feature rich gradients, smooth drop shadows, clean borders, dynamic visual indicators, and high contrast.
- **Full Light & Dark Theme Support**: CSS must use design tokens (`var(--bg-surface)`, `var(--text-base)`, `var(--border-base)`) and explicitly include `.theme-dark` container rules.
- **Click & Interaction Feedback**:
  - Spawn floating micro-feedback particles (`GOAL!`, `MISS!`, `+1`) at coordinate offsets on user actions.
  - Trigger keyframe animations on score/result changes (e.g. scale boom, color pulse, glow).
  - Hover and active scale micro-interactions on all interactive elements.
- **Epic Finish & Victory Celebrations**: When a match or calculation completes, display a full-screen, high-impact modal overlay (`ps-winner-overlay`) with glassmorphism backdrop, trophy animations, winner highlight, and score breakdown.

### Strict SEO Standards & Rich Predefined Components
- **Minimum 300 Words SEO Standard**: SEO text MUST contain a MINIMUM of 300 high-value words across its sections. Less than 300 words is unacceptable. The content volume must match the tool's real-world importance and provide true educational/practical depth.
- **Rich, Engaging & Readable Content**: Text must be genuinely engaging and valuable to read so users gain deep domain insights (biomechanical principles, tactical rules, pacing math, etc.), while simultaneously fulfilling search engine ranking criteria.
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
- **Mandatory Bibliography Contract**:
  - `bibliography.ts` MUST export `bibliographyEntries: BibliographyEntry[]` array (each object having `name` and `url`).
  - `bibliography.astro` MUST use the aliased import `import { Bibliography as SharedBibliography } from '@jjlmoya/utils-shared';`. NEVER use `import { SharedBibliography }` — that named export does NOT exist and will crash the production build. The component renders as `<SharedBibliography links={bibliographyEntries} />`.
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
   - `npm run build` (Must complete with 0 errors — this catches Vite bundling and Astro SSG runtime errors that type-check and lint cannot detect)
6. **Automatic Git Commit & Release**:
   - If ALL verification checks pass successfully, execute `git add -A`, `git commit`, `git push`, and then `npm run minor`.
   - `npm run minor` automatically triggers the `preversion` hook defined in `package.json`, which runs `lint + test + build` in sequence before bumping the version. If any of these fail, the version bump is aborted. This is enforced at the tooling level and cannot be bypassed.

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

### Step 1: Baseline Implementation (English-First ONLY)
1. Define pure state management and calculation logic in `logic.ts`.
2. Write unit tests covering normal flow, edge cases, and completion states in `logic.test.ts`.
3. Create ONLY `i18n/en.ts` exporting `content: ToolLocaleContent<ToolUI>` with full 300+ words SEO sections (including mandatory `stats`, `comparative`, `table`, `tip` components) and UI dictionary.
4. Build `component.astro` taking `{ ui: t }` as Astro props and `<slug>.css` with dark mode support.
5. Register the tool in `entry.ts` containing ONLY the `en` loader in `i18n: { en: () => import('./i18n/en').then((m) => m.content) }`. NEVER add non-English locale files, dummy fallback objects, or temporary loaders. The `GamesToolEntry` object MUST include a mandatory `icons` field: `icons: { bg: 'mdi:<icon>', fg: 'mdi:<icon>' }`. Omitting `icons` causes a runtime crash at build time when the home page iterates all tools. Export and register the tool entry in `src/entries.ts` and `src/tools.ts`.
6. STOP completely and present the English baseline tool to the user for review. Wait for the user to explicitly approve with **`OKQA`**.

### Step 2: Production Localization & Verification (STRICTLY AFTER OKQA)
ONLY AFTER the user explicitly writes **`OKQA`**:
1. Translate `i18n/en.ts` language-by-language into all 14 remaining locales (`de`, `es`, `fr`, `id`, `it`, `ja`, `ko`, `nl`, `pl`, `pt`, `ru`, `sv`, `tr`, `zh`). NEVER copy untranslated English text.
2. Register all 15 locale loaders in `entry.ts` and `category/index.ts`.
3. Run the full verification suite in order:
   ```bash
   npm run type-check
   npm run lint
   npm run test
   npm run build
   ```
4. **Automatic Git Commit & Release Deployment**:
   - Once all test suites and type checks pass 100%, commit all changes, push to remote repository, and execute `npm run minor` to perform the automatic minor release bump.

---

## 5. Double-Thinking Post-QA Audit Checklist

Before declaring the task finished, pause and perform a **Double-Check Audit** against this mandatory checklist:

- [ ] **15 Production Locales Real Translations**: Verify that all 15 locale files are properly translated into their target language (NO copy-pasted English text).
- [ ] **15 Production Locales Registered**: Verify that all 15 locale loaders exist and are registered in `entry.ts`.
- [ ] **Localized Slugs**: Verify that non-logographic script locales have translated URL slugs.
- [ ] **Bibliography Contract**: `bibliography.astro` uses `import { Bibliography as SharedBibliography }` (aliased import).
- [ ] **SEO Renderer Contract**: `seo.astro` uses `SEORenderer` from `@jjlmoya/utils-shared` with dynamic locale loader (NEVER destructure `ui.seo`).
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
  npm run build
  ```

---

## 6. Mandatory Post-Skill Self-Reflection Questions

AL ALWAYS and WITHOUT EXCEPTION, after completing any tool implementation, you MUST explicitly ask yourself and evaluate the following 6 core reflection questions before finishing:

1. **¿Esto puede ser más bonito?** (Is the UI visually striking, sports themed, glassmorphic, dynamic, and premium?)
2. **¿Esto puede ser más útil para el usuario?** (Does it add immediate value, visual chips, tactile sliders, or instant presets?)
3. **¿Esto podría simplificarse?** (Can we reduce input fatigue or simplify controls without losing power?)
4. **¿Podría hacer algo para que el usuario lo disfrute más?** (Are there micro-interactions, particles, animations, or dynamic feedback?)
5. **¿Son los resultados suficientemente visuales?** (Are results presented as rich visual cards, progress bars, gauges, or stat badges instead of raw tables/text?)
6. **¿Puedo aportar algo más al usuario?** (Can we offer extra insights, split target matrix, zone guides, or copy helpers?)
