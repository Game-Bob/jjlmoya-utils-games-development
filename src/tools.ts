export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { STEAM_CAPSULE_GENERATOR_TOOL } from './tool/steamCapsuleGenerator';
import { ITCHIO_GAME_TESTER_TOOL } from './tool/itchioGameTester';
import { SPRITE_SHEET_PACKER_TOOL } from './tool/spriteSheetPacker';
import { AUDIO_LOOP_POINT_FINDER_TOOL } from './tool/audioLoopPointFinder';
import { SAVE_FILE_EDITOR_TOOL } from './tool/saveFileEditor';
import { LOCALIZATION_SANITIZER_TOOL } from './tool/localizationSanitizer';
import { STEAM_BBCODE_TRANSLATOR_TOOL } from './tool/steamBbcodeTranslator';
import { RETRO_SFX_GENERATOR_TOOL } from './tool/retroSfxGenerator';
import { PIXEL_ART_PALETTE_SWAPPER_TOOL } from './tool/pixelArtPaletteSwapper';
import { GAME_UI_ACCESSIBILITY_TESTER_TOOL } from './tool/gameUIAccessibilityTester';

export const ALL_TOOLS: ToolDefinition[] = [
  STEAM_CAPSULE_GENERATOR_TOOL,
  ITCHIO_GAME_TESTER_TOOL,
  SPRITE_SHEET_PACKER_TOOL,
  AUDIO_LOOP_POINT_FINDER_TOOL,
  SAVE_FILE_EDITOR_TOOL,
  LOCALIZATION_SANITIZER_TOOL,
  STEAM_BBCODE_TRANSLATOR_TOOL,
  RETRO_SFX_GENERATOR_TOOL,
  PIXEL_ART_PALETTE_SWAPPER_TOOL,
  GAME_UI_ACCESSIBILITY_TESTER_TOOL,
];
