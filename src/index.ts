export { gamesCategory } from './category';
export const GamesCategorySEO = () => import('./category/GamesCategorySEO.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  GamesToolEntry,
  GamesCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
export { STEAM_CAPSULE_GENERATOR_TOOL, steamCapsuleGenerator } from './tool/steamCapsuleGenerator';
export { STEAM_BBCODE_TRANSLATOR_TOOL, steamBbcodeTranslator } from './tool/steamBbcodeTranslator';
export { RETRO_SFX_GENERATOR_TOOL, retroSfxGenerator } from './tool/retroSfxGenerator';
export { PIXEL_ART_PALETTE_SWAPPER_TOOL, pixelArtPaletteSwapper } from './tool/pixelArtPaletteSwapper';
export { GAME_UI_ACCESSIBILITY_TESTER_TOOL, gameUiAccessibilityTester } from './tool/gameUIAccessibilityTester';
export { HITBOX_HURTBOX_ANIMATOR_TOOL, hitboxHurtboxAnimator } from './tool/hitboxHurtboxAnimator';
export { DAMAGE_FORMULA_LAB_TOOL, damageFormulaLab } from './tool/damageFormulaLab';

export type { ToolLocaleContent as GamesToolLocaleContent } from './types';
