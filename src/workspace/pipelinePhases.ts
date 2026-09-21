import type { PipelinePhase, WorkspaceToolItem } from './types';

export const ASSET_TOOLS: WorkspaceToolItem[] = [
  {
    id: 'spriteSheetPacker',
    name: 'SpriteSheet Packer',
    phaseId: 'assets',
    description: 'Texture atlas packing with Godot and Unity JSON export',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/spritesheet-packer/',
  },
  {
    id: 'hitboxHurtboxAnimator',
    name: 'Hitbox Hurtbox Animator',
    phaseId: 'assets',
    description: 'Frame-by-frame collision box coordinate tagging',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/hitbox-hurtbox-animator/',
  },
  {
    id: 'pixelArtPaletteSwapper',
    name: 'Pixel Art Palette Swapper',
    phaseId: 'assets',
    description: 'RGB index color remapping for retro hardware palettes',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/pixel-art-palette-swapper/',
  },
  {
    id: 'isometricTileMapEditor',
    name: 'Isometric Tilemap Editor',
    phaseId: 'assets',
    description: 'Diamond grid isometric tile arrangement and collision layers',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/isometric-tile-map-editor/',
  },
  {
    id: 'fixerEditor',
    name: 'Sprite Sheet Fixer',
    phaseId: 'assets',
    description: 'Grid alignment and spacing correction for pixel art sheets',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/sprite-sheet-fixer-editor/',
  },
];

export const AUDIO_TOOLS: WorkspaceToolItem[] = [
  {
    id: 'retroSfxGenerator',
    name: 'Retro SFX Generator',
    phaseId: 'audio',
    description: 'Procedural 8-bit sound synthesis with envelope controls',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/retro-sfx-generator/',
  },
  {
    id: 'audioLoopPointFinder',
    name: 'Audio Loop Point Finder',
    phaseId: 'audio',
    description: 'Zero-crossing sample detection for seamless BGM looping',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/audio-loop-point-finder/',
  },
];

export const LOGIC_TOOLS: WorkspaceToolItem[] = [
  {
    id: 'damageFormulaLab',
    name: 'Damage Formula Lab',
    phaseId: 'logic',
    description: 'Combat scaling simulations across stat distributions',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/damage-formula-lab/',
  },
  {
    id: 'gameDeltaTimeFixedTimestepLab',
    name: 'Delta Time Lab',
    phaseId: 'logic',
    description: 'Fixed timestep accumulator diagnostics against variable frames',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/game-delta-time-fixed-timestep-lab/',
  },
  {
    id: 'gameInputBufferWindowCalculator',
    name: 'Input Buffer Calculator',
    phaseId: 'logic',
    description: 'Combo timing window evaluation factoring polling latency',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/game-input-buffer-window-calculator/',
  },
  {
    id: 'gamePixelPerUnitPlanner',
    name: 'Pixel Per Unit Planner',
    phaseId: 'logic',
    description: 'Orthographic camera sizing for distortion-free pixel art',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/game-pixel-per-unit-planner/',
  },
  {
    id: 'saveFileEditor',
    name: 'Save File Editor',
    phaseId: 'logic',
    description: 'JSON, Base64 and XOR save file inspection and editing',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/save-file-editor/',
  },
];

export const PUBLISHING_TOOLS: WorkspaceToolItem[] = [
  {
    id: 'gameUIAccessibilityTester',
    name: 'UI Accessibility Tester',
    phaseId: 'publishing',
    description: 'Colorblind simulation matrices and WCAG contrast check',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/game-ui-accessibility-tester/',
  },
  {
    id: 'localizationSanitizer',
    name: 'Localization Sanitizer',
    phaseId: 'publishing',
    description: 'String template and escape sequence integrity verification',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/localization-sanitizer/',
  },
  {
    id: 'itchioGameTester',
    name: 'Itch.io Game Tester',
    phaseId: 'publishing',
    description: 'WebGL package and iframe embed dimension validation',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/itchio-game-tester/',
  },
  {
    id: 'steamBbcodeTranslator',
    name: 'Steam BBCode Translator',
    phaseId: 'publishing',
    description: 'Store page Markdown to Steam BBCode dialect transformation',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/steam-bbcode-translator/',
  },
  {
    id: 'steamCapsuleGenerator',
    name: 'Steam Capsule Generator',
    phaseId: 'publishing',
    description: 'Crop and scale artwork to all Valve store banner formats',
    routePath: '/utilidades/categorias/desarrollo-de-videojuegos/steam-capsule-generator/',
  },
];

export const PIPELINE_PHASES: PipelinePhase[] = [
  {
    id: 'assets',
    title: 'Visual Assets',
    subtitle: 'Sprites, animation hitboxes and palettes',
    tools: ASSET_TOOLS,
  },
  {
    id: 'audio',
    title: 'Sound Design',
    subtitle: 'Synthesis and sample-accurate looping',
    tools: AUDIO_TOOLS,
  },
  {
    id: 'logic',
    title: 'Logic & Balance',
    subtitle: 'Math formulas, camera scaling and physics timing',
    tools: LOGIC_TOOLS,
  },
  {
    id: 'publishing',
    title: 'QA & Storefront',
    subtitle: 'Accessibility, localization and store assets',
    tools: PUBLISHING_TOOLS,
  },
];
