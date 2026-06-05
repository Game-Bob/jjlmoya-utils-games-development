¡Hola! Qué buena base de partida. Lo que tienes aquí es una guía excelente, pero hiperfocalizada en herramientas deportivas (sports).

Para transformarla en una habilidad/guía genérica, lo que haremos será abstraer el dominio del deporte y las métricas, y sustituirlo por conceptos universales de desarrollo de software (como "núcleo de la aplicación", "métricas de negocio", "feedback visual de alto impacto" y "componentes estructurados").

Aquí tienes la versión completamente genérica, modular y lista para aplicar a cualquier tipo de biblioteca de herramientas web.

Creating Library Tools: Developer Skill & Workflow Guide
Follow this guide to build new tools in the core utility library. This document outlines the technical standards, user experience (UX) requirements, SEO standards, and step-by-step translation workflow.

Philosophy & Rigid Rules
1. Code Quality & Formatting
SOLID Principles: Keep components small, focused, and reusable. Business logic and UI components must be completely separated.

NO Comments in Code: Do not write any comments (// or /* */) in TypeScript, framework components, CSS, or JSON files.

NO Emojis: Do not use emojis in code, UI text, logs, titles, metadata, or translations.

2. High-Dopamine User Experience
Interactive Outcomes: Visual result banners must include detailed logical breakdowns displaying custom geometric badges or status indicators that match the exact category and context of the output.

Epic Feedback Animations:

Peak or optimal results must trigger an emphasis animation (e.g., scale-up rotation, bright dynamic border) and render a custom highlighting SVG symbol.

Critical errors or minimal results must trigger a warning animation (e.g., shiver-drop sag, desaturated danger glow) and render a distinct alert SVG symbol.

Click Particles: Spawn floating micro-feedback particles (e.g., value offsets, status triggers) at the exact click coordinates with text shadow glows and translation animations.

Micro-Animations: All interactive elements (button presses, selectors, and adjustments) must trigger springy hover and active scale animations to maximize tactile responsiveness.

3. Premium User-Facing SEO
No Programming Content: Do not write code examples, programming explanations, or developer jargon in public SEO text. Focus entirely on user utility, core value proposition, and practical use cases.

Rich Elements: Build information architectures using structured layouts (stats, table, tip, proscons, comparative, glossary, diagnostic).

No Hyphens or Pipes in Titles: Page titles in SEO sections and metadata must never contain - or | separators.

Workflow Steps
Step 1: Core Implementation (English-First)
Analyze existing library tools to understand registered paths, file structures, and shared core imports.

Build the primary tool files in English following the architecture:

src/tool/$TOOL_ID/index.ts (Core logic)

src/tool/$TOOL_ID/entry.ts (Registration & metadata)

src/tool/$TOOL_ID/component.[ext] (UI View)

src/tool/$TOOL_ID/seo.[ext] (SEO & Marketing content)

src/tool/$TOOL_ID/bibliography.ts (Data sources/References logic)

src/tool/$TOOL_ID/bibliography.[ext] (Data sources view)

src/tool/$TOOL_ID/i18n/en.ts (English dictionary)

src/tool/$TOOL_ID/$TOOL_ID.css (Scoped styles)

Map ONLY the 'en' property in the entry file's i18n object to the English dictionary temporarily (leave other locales unregistered/omitted so that i18n completeness tests intentionally fail until QA is completed).

Add the new tool entry to the central registration files (indexes, categories, and routing lists).

Step 2: Component Refactoring & Clean Up
Enforce strict style linting compliance: Do not use literal design values (hex, rgb, raw pixels) inside CSS properties; declare them as design tokens/CSS variables in the global root scope and read them via var().

Keep functions under 30 lines and source code files under 250 lines to maintain maintainability.

Step 3: Verification & QA
Run linting to check for formatting, syntax, and comment violations:
npm run lint

Run unit tests to check core mathematical, parsing, or business logic:
npm run test -- --testPathIgnorePatterns=i18n_coverage

After this, ask for the user's feedback.

Step 4: Multi-Language Translation
Once the baseline English tool is validated by the user, translate the content to the supported production locales:

Target Locales: de, es, fr, id, it, ja, ko, nl, pl, pt, ru, sv, tr, zh.

Slug Localization Rules:

For logographic script locales (ja, ko, zh), the URL slug must remain identical to the English slug.

For all other locales, translate and fully localize the URL slug to its respective language.

Separators Validation: Double check that no titles in the translated files contain - or |.

Register the loaders for the new locales in the tool's entry configuration.

Step 5: Final Verification
Run the complete automated lint and test suites to verify all locales and configurations are fully compliant:

npm run lint

npm run test
