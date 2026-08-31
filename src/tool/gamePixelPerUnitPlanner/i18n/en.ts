import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamePixelPerUnitPlannerUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  {
    question: 'What does pixels per unit mean in a game?',
    answer: 'Pixels per unit, or PPU, describes how many texture pixels represent one world unit. A consistent PPU helps a sprite keep a predictable visual size beside tiles, UI, and other assets. This planner calculates horizontal and vertical PPU separately so stretched or mismatched assumptions are visible.',
  },
  {
    question: 'Why do integer scales matter for pixel art?',
    answer: 'An integer scale maps each source pixel to the same whole number of screen pixels. Fractional scaling can make neighboring source pixels cover different amounts of the screen and can introduce uneven edges or blur, especially when smoothing is enabled.',
  },
  {
    question: 'What is pixel bleeding?',
    answer: 'Pixel bleeding is an unwanted sample from a neighboring texel or atlas region. Non integer scaling, filtered sampling, subpixel placement, and missing padding can all contribute to visible seams. The planner reports a heuristic risk from scale, axis alignment, and viewport fit; it cannot inspect an actual texture atlas or renderer.',
  },
  {
    question: 'How should I use the recommended scale?',
    answer: 'Use it as a candidate integer multiplier that stays inside the declared display resolution and is close to your target. Then validate the choice in the engine with nearest filtering, pixel grid alignment, atlas padding, and the camera settings your project actually uses.',
  },
  {
    question: 'Does this planner choose the correct PPU for every engine?',
    answer: 'No. It is a transparent arithmetic and planning aid. Engines differ in camera models, reference resolutions, import settings, texture filtering, mipmaps, rounding, and pixel snapping. Treat the result as a design constraint to test in your project, not as a renderer guarantee.',
  },
];

const howTo = [
  {
    name: 'Enter the destination display',
    text: 'Set the width and height of the game view or reference canvas in screen pixels. Resolution presets provide common starting points for a quick experiment.',
  },
  {
    name: 'Describe the source sprite',
    text: 'Enter the sprite texture dimensions in pixels and its intended width and height in world units. Keep the two axes separate when the asset is not square.',
  },
  {
    name: 'Choose a target scale',
    text: 'Move the target scale slider or choose a preset. Whole numbers are the crisp candidates. Quarter steps are allowed so the risk panel can make a fractional choice visible.',
  },
  {
    name: 'Inspect the pixel field',
    text: 'Read the horizontal and vertical PPU, the visible world viewport, the sprite footprint, and the bleed risk. A mismatch between PPU axes usually means an assumption needs correction.',
  },
  {
    name: 'Test a crisp step in the engine',
    text: 'Use the scale strip to choose a fitting integer multiplier, then verify nearest filtering, camera snapping, atlas padding, and motion at the real target resolutions.',
  },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Game Pixel Per Unit Planner',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to plan pixels per unit for a pixel art game',
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

export const content: ToolLocaleContent<GamePixelPerUnitPlannerUI> = {
  slug: 'game-pixel-per-unit-planner',
  title: 'Game Pixel Per Unit Planner',
  description: 'Plan sprite pixels per unit, integer scaling, viewport fit, and pixel bleeding risk from your display, texture, and world dimensions.',
  ui: {
    inputsTitle: 'Upload and test your sprite',
    uploadTitle: 'Your source image',
    uploadHint: 'Choose a PNG, GIF, WebP, or JPEG. Its native dimensions drive every preview.',
    chooseSpriteLabel: 'Choose sprite',
    noSpriteLabel: 'No sprite loaded yet',
    defaultSpriteLabel: 'GameBob cat sample',
    loadedSpriteLabel: 'Loaded',
    clearSpriteLabel: 'Remove sprite',
    displayWidthLabel: 'Display width px',
    displayHeightLabel: 'Display height px',
    spriteWidthLabel: 'Sprite width px',
    spriteHeightLabel: 'Sprite height px',
    worldWidthLabel: 'Sprite width units',
    worldHeightLabel: 'Sprite height units',
    targetScaleLabel: 'Target screen scale',
    targetScaleHint: 'Pixels from the source texture per source pixel on screen.',
    resolutionPresetsLabel: 'Reference resolutions',
    preset320: '320 x 180',
    preset384: '384 x 216',
    preset640: '640 x 360',
    scalePresetsLabel: 'Quick scale steps',
    scale1: '1x',
    scale2: '2x',
    scale3: '3x',
    scale4: '4x',
    scale6: '6x',
    resetLabel: 'Reset values',
    fieldTitle: 'See it at different sizes',
    fieldCaption: 'The uploaded image is rendered with nearest-neighbour scaling so you can judge the actual footprint at each integer multiplier.',
    previewPlaceholder: 'Upload a sprite to start the visual test',
    previewScaleLabel: 'Preview scale',
    sourceImageAlt: 'Uploaded sprite preview',
    viewportLabel: 'Declared display',
    spriteLabel: 'Rendered sprite',
    crispTitle: 'Crisp scale steps',
    crispCaption: 'Whole number multipliers keep source pixels evenly sized. Grey steps exceed the declared display on at least one axis.',
    fitLabel: 'Fits display:',
    yesLabel: 'yes',
    noLabel: 'no',
    recommendedLabel: 'closest fit',
    summaryTitle: 'Plan summary',
    ppuXLabel: 'Horizontal PPU',
    ppuYLabel: 'Vertical PPU',
    viewportWorldLabel: 'Visible world',
    fitScaleLabel: 'Largest fitting scale',
    bleedingRiskLabel: 'Bleeding risk',
    lowRisk: 'Low',
    mediumRisk: 'Medium',
    highRisk: 'High',
    riskLowMessage: 'Axes align and the target is an integer scale inside the declared viewport. Still verify filtering and atlas padding.',
    riskMediumMessage: 'The target fits imperfectly: it is close to a safe plan but has an axis mismatch or exceeds the fitting scale. Inspect the highlighted steps.',
    riskHighMessage: 'This plan can create uneven sampling because the scale is fractional or the two PPU axes diverge strongly. Prefer an integer step and review the source dimensions.',
    alignmentLabel: 'Sampling note',
    tableTitle: 'Accessible scale ledger',
    tableScale: 'Scale',
    tableWidth: 'Rendered width',
    tableHeight: 'Rendered height',
    tableFits: 'Fits display',
    modelNote: 'The planner calculates PPU as rendered sprite pixels divided by the sprite world size on each axis. Bleeding risk is a warning heuristic, not a texture inspection, renderer test, or guarantee of pixel perfect motion.',
    privacyDisclosure: 'Your values stay in this browser so the plan is ready when you return. No project files, textures, or telemetry are uploaded.',
    statusReady: 'Plan updated',
    unitPixels: 'px',
    unitUnits: 'units',
  },
  seo: [
    { type: 'title', level: 2, text: 'Why pixels per unit is a useful art and camera contract' },
    { type: 'paragraph', html: 'A pixel art sprite has two sizes: the bitmap size stored in the texture and the size it occupies in the game world. Pixels per unit connects those two descriptions. If a 16 pixel sprite represents one world unit, its source density is 16 pixels per unit before any screen scaling. Making that relationship explicit helps artists, level designers, camera programmers, and UI developers reason about a shared grid.' },
    { type: 'paragraph', html: 'This planner keeps the horizontal and vertical axes visible because a square texture does not automatically imply a square world size. It multiplies the source dimensions by the target screen scale, then divides by the intended world dimensions. The result is a PPU value for each axis and a derived world viewport for the declared display resolution.' },
    { type: 'title', level: 2, text: 'Read the four decisions in the result' },
    { type: 'list', items: ['Use the PPU values to compare the sprite with tiles and other assets.', 'Use the visible world size to check whether the camera framing matches the level design.', 'Use the scale ledger to find whole number multipliers that fit the target display.', 'Use the bleed warning to decide where an engine test is necessary, not to certify the renderer.'] },
    { type: 'title', level: 2, text: 'Integer scaling protects the pixel grid' },
    { type: 'paragraph', html: 'A whole number scale gives every source pixel an even footprint on the screen. A fractional scale asks the renderer to distribute source pixels unevenly, which can show up as soft edges, alternating line widths, or unstable details during movement. Nearest filtering preserves hard texel choices, but it does not solve every problem: camera positions, atlas boundaries, sampling coordinates, and aspect ratios still matter.' },
    { type: 'table', headers: ['Planning signal', 'What it tells you', 'What to verify next'], rows: [['Matched PPU axes', 'The sprite world rectangle has the same density horizontally and vertically.', 'Compare it with tiles and the project reference grid.'], ['Fractional target scale', 'The requested source pixel footprint is not a whole number.', 'Try the closest fitting integer step and test the camera.'], ['Scale exceeds viewport', 'The sprite footprint is larger than the declared display on at least one axis.', 'Choose a smaller step or use a larger reference resolution.'], ['Axis mismatch', 'The world rectangle assigns different pixel densities to X and Y.', 'Check whether non uniform scaling is intentional.']] },
    { type: 'title', level: 2, text: 'Understand pixel bleeding as a sampling problem' },
    { type: 'paragraph', html: 'Pixel bleeding usually describes an unwanted color from a neighboring texel or atlas region. Linear filtering blends nearby samples, while nearest filtering selects the closest texel. Even with nearest filtering, sampling at texture borders or moving a camera between pixel positions can expose seams or flicker. That is why padding, clamp behavior, integer placement, and the project camera settings deserve a separate engine test.' },
    { type: 'title', level: 2, text: 'Use the planner before building a scene' },
    { type: 'paragraph', html: 'Start with the reference resolution your game is designed around. Enter one representative sprite and its intended world size, then compare both PPU axes. Try the integer scale steps that fit the display. If the result is not visually stable, change one assumption at a time: the reference resolution, sprite import size, world dimension, or camera policy. This gives the team a small, auditable design decision instead of a vague pixel perfect promise.' },
    { type: 'tip', title: 'What the number cannot prove', html: 'A PPU plan cannot inspect an atlas, choose an engine import preset, measure a device, or guarantee that motion will lock to a pixel grid. Use the number as a contract between assets and camera setup, then validate the actual render at every resolution and motion path you support.' },
  ],
  faqTitle: 'Pixel per unit questions',
  faq,
  bibliographyTitle: 'Pixel rendering references',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
