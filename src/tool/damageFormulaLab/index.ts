import type { ToolDefinition } from "../../types";
import { damageFormulaLab } from "./entry";

export * from "./entry";

export const DAMAGE_FORMULA_LAB_TOOL: ToolDefinition = {
  entry: damageFormulaLab,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};
