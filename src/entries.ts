export { steamCapsuleGenerator } from './tool/steamCapsuleGenerator/entry';
export type { SteamCapsuleGeneratorUI, SteamCapsuleGeneratorLocaleContent } from './tool/steamCapsuleGenerator/entry';
export { itchioGameTester } from './tool/itchioGameTester/entry';
export type { ItchioGameTesterUI, ItchioGameTesterLocaleContent } from './tool/itchioGameTester/entry';
export { spriteSheetPacker } from './tool/spriteSheetPacker/entry';
export type { SpriteSheetPackerUI, SpriteSheetPackerLocaleContent } from './tool/spriteSheetPacker/entry';
export { gamesCategory } from './category';
import { steamCapsuleGenerator } from './tool/steamCapsuleGenerator/entry';
import { itchioGameTester } from './tool/itchioGameTester/entry';
import { spriteSheetPacker } from './tool/spriteSheetPacker/entry';

export const ALL_ENTRIES = [steamCapsuleGenerator, itchioGameTester, spriteSheetPacker];
