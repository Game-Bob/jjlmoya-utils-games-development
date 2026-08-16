---
name: create-tool
description: Creates exceptional interactive utility tools in src/tool/ with a distinct visual concept, user-first UX, responsive light and dark themes, English-first delivery, and an explicit OKQA gate before localization and release. Use when creating a new tool in the jjlmoya utilities ecosystem.
---

# Create Tool Skill

Follow this end-to-end guide to build, test, and release interactive tools in `src/tool/<tool-id>/`.

---

## 📋 NON-NEGOTIABLE ARCHITECTURE & RULES

1. **SOLID Principles & Clean Separation**:
   - `logic.ts`: Pure algorithmic/temporal functions (< 25 lines each, object params for >4 arguments).
   - `storage.ts`: `localStorage` persistence with clean `try/catch` blocks (< 20 lines).
   - `evaluator.ts`: State evaluation & scanning rules.
   - `dom-views.ts`: Dynamic HTML generation & DOM updates (< 25 lines each).
   - `controller.ts`: Event orchestration, custom select management & lifecycle class (< 25 lines per method).
   - `component.astro`: Ultra-compact Astro view (< 150 lines) importing controller.
   - `ui.ts`: `interface ToolUI` with ALL user-visible strings parameterized.
   - `bibliography.ts`: Curated authoritative sources.
   - `<tool-id>.css`: CSS with theme tokens for both light and dark mode.
2. **Single Compact Integrated Card (Obligatory)**:
   - All tools MUST be built within a single main card container namespaced with the tool slug (e.g. `.<tool-id>-card` or `.<tool-id>-main-card`), splitting into a sidebar for controls/inputs on the left and a results/visualization stage on the right. Never create fragmented islands or multiple detached cards.
3. **CSS Namespacing by Tool Slug (Strictly Required)**:
   - All CSS class names must be explicitly namespaced with the tool ID / slug (e.g. `.<tool-id>-*`). Generic class names or arbitrary prefixes like `.sc-*` are strictly forbidden to guarantee complete CSS isolation across tools.
4. **Native `<select>` Elements Strictly Forbidden**:
   - Never use native `<select>` and `<option>` elements. Always build custom selects (`.<tool-id>-custom-select`) with styled trigger button, custom SVG chevron, ARIA attributes, and an accessible options dropdown menu.
4. **100% Light & Dark Mode Contrast & Readability**:
   - Define `--n-*` variables for both standard (light) and `.theme-dark` contexts. Zero washed-out or low-contrast text.
5. **Real-Proportion SVGs (No Flattened Diagrams)**:
   - SVGs must have generous heights (220px-280px) and spacious viewBoxes (e.g. 600x260). Never use `preserveAspectRatio="none"` or squash diagram proportions.
6. **Clean Unit Formatting**:
   - Display compact unit symbols (`m`, `ft`, `kts`, `kg`) instead of full button labels like `Metric (m)`.
- **ART Manifesto & Ergonomic Questions ("We Do Not Build Excels, We Build ART")**:
  1. *Can this be done with fewer inputs?*
  2. *Can the remaining inputs be made substantially more comfortable, tactile, and natural (sliders, visual chips, quick toggles)?*
  3. *Could this interface look significantly more beautiful, visual, and alive?* If yes, improve it immediately!
  4. *Can I make the user's life easier?* If YES -> do it immediately!

- **Mandatory Self-Reflection Questions (Always explicitly present to user)**:
  1. **¿Esto puede ser más bonito?** (Visual excellence, theme contrast, glassmorphic layout).
  2. **¿Esto puede ser más útil para el usuario?** (Smart presets, tactile sliders, instant feedback).
  3. **¿Esto podría simplificarse?** (Reduce input fatigue without losing precision).
  4. **¿Podría hacer algo para que el usuario lo disfrute más?** (Micro-interactions, dynamic SVG animations).
  5. **¿Son los resultados suficientemente visuales?** (Gauges, real-time elevation profile, status badges).
  6. **¿Puedo aportar algo más al usuario?** (Extra domain insights, seabed guidance, safety margin advice).

- **Mandatory SEO & Content Reflection Questions (Always explicitly present to user)**:
  1. **¿Esto es útil para el usuario?** (Real practical value, accurate calculations, zero filler text).
  2. **¿Esto responde a la intención de búsqueda?** (Directly satisfies search intent, answering the what, how, and why).
  3. **¿Puedo aportar mayor utilidad al usuario final?** (Rich comparisons, actionable tips, structured tables, and authoritative sources).
- **Mandatory Native Orthography & Diacritics (Zero Stripping of Accents)**:
  - Translations in Spanish (`es`), French (`fr`), Portuguese (`pt`), German (`de`), Polish (`pl`), Turkish (`tr`), Swedish (`sv`), and Italian (`it`) MUST include all native diacritics and accents (`á, é, í, ó, ú, ü, ñ, à, è, ç, ą, ę, ł, ó, ś, ź, ż, etc.`). Stripping accents or writing Spanish in ASCII is strictly forbidden.
  - `diacritics_density.test.ts` with strict thresholds (e.g. `es: 8.0`, `fr: 8.0`, `pl: 10.0`, `tr: 10.0`, `pt: 8.0`, `sv: 5.0`, `de: 3.0`, `it: 3.0`) MUST be passed on 100% of i18n files.
8. **Zero Comments in Code**: Strictly forbidden in `.ts`, `.astro`, `.css`, `.json` (including empty catch blocks).
9. **Zero Emojis**: Forbidden anywhere in code, content, or git commits.
10. **No Redundant Headers**: Never render `<h1>`, `<h2>`, or topbars inside `component.astro`. The page layout already has `UtilityHeader`.
11. **Windows PowerShell Command Syntax**: Use `;` instead of `&&` when chaining commands.
12. **Git Commits & Push**: Always use `--no-verify`.

---

## 🔄 WORKFLOW PHASES

### Phase 1: Interactive Tool Architecture (English-First)
1. Build `logic.ts`, `logic.test.ts`, `storage.ts`, `evaluator.ts`, `dom-views.ts`, `controller.ts`, `ui.ts`, `component.astro`, `bibliography.ts`, and `<tool-id>.css`.
2. Register in `src/tools.ts`, `src/entries.ts` and `src/category/index.ts`.
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

## 🛠️ TROUBLESHOOTING & PREVENTION RULES

1. **ESLint Size, Complexity & Parameter Limits**:
   - `max-params (<= 4)`, `max-lines-per-function (<= 30)`, `no-nested-ternary`. Use parameter objects when functions accept multiple coordinates or state values.

2. **Custom Select Dropdown Implementation**:
   - Implement custom dropdown triggers with `.<tool-id>-custom-select` and `.<tool-id>-select-dropdown`. Listen for outside clicks to close open menus.

3. **Stylelint CSS Variable Enforcement (`scale-unlimited/declaration-strict-value`)**:
   - Always declare color values in `--n-*` variables and use `var(--n-...)` for `color`, `background-color`, and `border-color`.

4. **No Comments Allowed (`no-comments/disallowComments`)**:
   - Zero comments anywhere. In empty catch blocks use `catch { return; }` or `catch {}`.

5. **Mandatory Schema Trio (`schemas_fulfillment.test.ts`)**:
   - Every single `i18n/<locale>.ts` must export `schemas: [faqSchema, howToSchema, appSchema]` using `schema-dts`.

6. **Typography Garbage Validation (`no_en_dash.test.ts`)**:
   - Use only straight ASCII `'`, `"`, `-`, `...`. Never use curly quotes, en-dash, em-dash, or space before colons.

7. **SEO Title Separator Validation (`title_quality.test.ts`)**:
   - Never use `-` or `|` in any title string inside the `seo` array.

8. **Updating Tool Count in Test Suites**:
   - Update expected tool count in `src/tests/tool_validation.test.ts` and `src/tests/locale_completeness.test.ts`.
