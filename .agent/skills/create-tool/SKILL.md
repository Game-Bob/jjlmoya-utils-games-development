---
name: create-tool
description: Creates exceptional interactive utility tools in src/tool/ with a distinct visual concept, user-first UX, responsive light and dark themes, English-first delivery, and an explicit OKQA gate before localization and release. Use when creating a new tool in the jjlmoya utilities ecosystem.
---

# Create Tool Skill

Follow this end-to-end guide to build, test, and release interactive tools in `src/tool/<tool-id>/`.

---

## 📋 NON-NEGOTIABLE ARCHITECTURE & RULES

1. **SOLID Principles & Clean Separation**:
   - `logic.ts`: Pure algorithmic/temporal functions (< 25 lines each).
   - `storage.ts`: `localStorage` persistence with clean `try/catch` blocks.
   - `evaluator.ts`: State evaluation & scanning rules.
   - `dom-views.ts`: Dynamic HTML generation & DOM updates (< 25 lines each).
   - `controller.ts`: Event orchestration & lifecycle class (< 25 lines per method).
   - `component.astro`: Ultra-compact Astro view (< 150 lines) importing controller.
   - `ui.ts`: `interface ToolUI` with ALL user-visible strings parameterized.
   - `bibliography.ts`: Curated authoritative sources.
   - `<tool-id>.css`: CSS with theme tokens.
2. **Zero Comments in Code**: Strictly forbidden in `.ts`, `.astro`, `.css`, `.json` (including empty catch blocks).
3. **Zero Emojis**: Forbidden anywhere in code, content, or git commits.
4. **No Redundant Headers**: Never render `<h1>`, `<h2>`, or topbars inside `component.astro`. The page layout already has `UtilityHeader`.
5. **Windows PowerShell Command Syntax**: Use `;` instead of `&&` when chaining commands.
6. **Git Commits & Push**: Always use `--no-verify`.

---

## 🔄 WORKFLOW PHASES

### Phase 1: Interactive Tool Architecture (English-First)
1. Build `logic.ts`, `logic.test.ts`, `storage.ts`, `evaluator.ts`, `dom-views.ts`, `controller.ts`, `ui.ts`, `component.astro`, `bibliography.ts`, and `<tool-id>.css`.
2. Register in `src/tools.ts` and `src/category/index.ts`.
3. Create `i18n/en.ts` with >300 words SEO content, FAQs, and HowTo.
4. Run `npm run test` on `logic.test.ts`.
5. **STOP AND WAIT FOR USER okQA**: Do not proceed to translation or release without explicit `okQA`.

### Phase 2: Localization to 15 Supported Locales
1. Create all 15 locale files in `src/tool/<tool-id>/i18n/`:
   `de.ts`, `en.ts`, `es.ts`, `fr.ts`, `id.ts`, `it.ts`, `ja.ts`, `ko.ts`, `nl.ts`, `pl.ts`, `pt.ts`, `ru.ts`, `sv.ts`, `tr.ts`, `zh.ts`.
2. Keep logographic slugs (`ja`, `ko`, `zh`) identical to English `<tool-id>`. Localize all other slugs.
3. Export `schemas: [faqSchema, howToSchema, appSchema]` in every locale file.
4. Register all 15 locale loaders in `entry.ts`.

### Phase 3: Automated Quality Verification Gates
Run in the tool repository:
1. `npm run type-check` (0 errors)
2. `npm run lint` (0 ESLint & Stylelint errors)
3. `npm run test` (100% tests passing)
4. `npm run build` (0 errors)

### Phase 4: Release & Consumer Integration
1. In the utility library:
   ```powershell
   git add -A; git commit -m "feat: add <tool-id> utility" --no-verify; git push --no-verify; npm run minor
   ```
2. In `jjlmoya` and `website`:
   `npm run update <category>`
3. Generate OpenGraph WebP images for `jjlmoya` (ES slug) and `website` (EN slug).
4. Commit and push in `jjlmoya` and `website` with `--no-verify`.

---

## 🛠️ TROUBLESHOOTING & PREVENTION RULES (READ CAREFULLY)

1. **ESLint Size & Complexity Violations**:
   - `max-lines (>250)`, `max-lines-per-function (>30)`, `complexity (>8)`, `max-params (>4)`.
   - Prevention: Never write inline client scripts > 20 lines in `component.astro`. Separate into `logic.ts`, `storage.ts`, `evaluator.ts`, `dom-views.ts`, and `controller.ts`.

2. **No Comments Allowed (`no-comments/disallowComments`)**:
   - Prevention: Zero `//` or `/* */` comments. In empty catch blocks use `catch { return; }` without comments.

3. **Zero Hardcoded English Strings in Client JS**:
   - Prevention: All strings must be declared in `ui.ts`. Pass `ui` via `data-i18n={JSON.stringify(ui)}` on root container. Parse with `JSON.parse(appEl.dataset.i18n)` in controller and replace placeholders with `.replace('{key}', ...)`.

4. **Mandatory Schema Trio (`schemas_fulfillment.test.ts`)**:
   - Prevention: Every single `i18n/<locale>.ts` must export `schemas: [faqSchema, howToSchema, appSchema]` using `schema-dts`.

5. **Typography Garbage Validation (`no_en_dash.test.ts`)**:
   - Prevention: Never use curly apostrophes `’`, curly quotes `“”`, en-dash `–`, em-dash `—`, ellipses `…`, guillemets `«»`, or space before colons ` : `. Use only straight ASCII `'`, `"`, `-`, `...`.

6. **SEO Title Separator Validation (`title_quality.test.ts`)**:
   - Prevention: Never use `-` or `|` in any title string inside the `seo` array. Use words or spaces instead.

7. **Updating Tool Count in Test Suites**:
   - Prevention: When adding a new tool to a category, update the expected tool count in `src/tests/tool_validation.test.ts` and `src/tests/locale_completeness.test.ts`.

8. **Date Picker Visibility in Dark Mode**:
   - Prevention: Wrap `<input type="date">` in `.sc-date-wrap`, position a custom SVG calendar icon with `color: var(--sc-brand)`, and hide the native indicator with `::-webkit-calendar-picker-indicator { opacity: 0; position: absolute; width: 100%; height: 100%; cursor: pointer; }`.

9. **SVG `className` Read-Only Error**:
   - Prevention: Never do `svgElement.className = ...`. Always use `svgElement.setAttribute('class', ...)` or `svgElement.classList.add/remove`.

10. **Stylelint CSS Formatting**:
    - Prevention: Always use 3-digit shorthand `#fff`, never declare `font-family` in utility CSS, maintain blank lines before declarations.
