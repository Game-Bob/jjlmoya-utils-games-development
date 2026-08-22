import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  {
    question: 'Does this tool certify that my game UI is accessible?',
    answer: 'No. It combines documented color vision simulations, deterministic color measurements, visual stress heuristics, and review prompts. Use the findings to guide design review and testing with players, not as an accessibility certificate.',
  },
  {
    question: 'Does my screenshot leave the browser?',
    answer: 'No. The image is decoded, sampled, transformed, and exported inside your browser. The tool stores only display settings such as the selected lens, zoom, blur, and comparison mode in local storage.',
  },
  {
    question: 'What should I sample with the two color probes?',
    answer: 'Choose two colors that must communicate different meanings, such as ally and enemy markers, available and disabled states, health and damage, or two rarity tiers. Sample representative pixels from the same gameplay context.',
  },
  {
    question: 'Why can a good contrast ratio still need manual review?',
    answer: 'A pair can measure well while a small icon, thin type, moving background, visual clutter, or color only convention remains difficult to identify. The ratio describes the sampled colors, not the complete interaction.',
  },
  {
    question: 'What does the heatmap show?',
    answer: 'The heatmap is a local edge heuristic. It highlights pixels where nearby RGB separation drops sharply after the selected simulation. It can direct attention to fragile signals, but it does not identify interface semantics or prove a failure.',
  },
];

const howTo = [
  { name: 'Load a local screenshot', text: 'Choose a PNG, JPEG, or WebP capture of gameplay or a menu. The image remains in browser memory.' },
  { name: 'Choose a stress lens', text: 'Compare the original with a color vision simulation, grayscale, reduced contrast, or desaturation.' },
  { name: 'Stress hierarchy and scale', text: 'Add blur, reduce the render scale, zoom into pixels, or enable the edge collapse heatmap.' },
  { name: 'Sample two critical signals', text: 'Select probe A or B and click the original image, or enter colors directly with the color controls.' },
  { name: 'Record and export findings', text: 'Use the review prompts, add observations, then download a comparison sheet and structured JSON report.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Game UI Accessibility Stress Tester',
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
  name: 'How to stress test a game interface screenshot',
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug: 'game-ui-accessibility-stress-tester',
  title: 'Game UI Accessibility Stress Tester',
  description: 'Inspect a game screenshot locally with color vision simulations, HUD contrast probes, blur, downscale, edge collapse heatmaps, and exportable review findings.',
  ui: {
    onboarding: 'Load one current game screenshot, choose a stress lens, then compare two signals that players must tell apart. Start with ally versus enemy, health states, rarity, interactables, or minimap markers.',
    privacyNote: 'Local optical bench. Screenshots are not uploaded.',
    dropTitle: 'Place a gameplay or interface capture on the light table',
    dropHint: 'Drop one image here or choose it from your device. Use a representative moment with real backgrounds and visual clutter.',
    chooseImage: 'Choose screenshot',
    replaceImage: 'Replace screenshot',
    supportedFiles: 'PNG, JPEG, or WebP up to 16 MB. Large images are reduced to a 1600 px analysis edge.',
    lensLabel: 'Simulation lens',
    lensOriginal: 'Original',
    lensProtanopia: 'Protanopia',
    lensDeuteranopia: 'Deuteranopia',
    lensTritanopia: 'Tritanopia',
    lensAchromatopsia: 'Grayscale',
    lensReducedContrast: 'Reduced contrast',
    lensDesaturation: 'Desaturation',
    compareLabel: 'Comparison view',
    compareSideBySide: 'Side by side',
    compareSplit: 'Split lens',
    comparePress: 'Press reveal',
    holdOriginal: 'Hold to reveal original',
    splitPosition: 'Lens position',
    stressLabel: 'Signal stress controls',
    blurLabel: 'Blur in pixels',
    downscaleLabel: 'Small display preview',
    downscaleFull: 'Full',
    downscaleHalf: 'Half',
    downscaleQuarter: 'Quarter',
    downscaleEighth: 'Eighth',
    zoomLabel: 'Pixel inspection zoom',
    heatmapLabel: 'Edge collapse heatmap',
    heatmapHint: 'Highlight local separations that shrink sharply under the active lens.',
    originalView: 'Original signal field',
    simulatedView: 'Stressed signal field',
    emptyCanvas: 'Choose a screenshot to activate the comparison field. Your image will stay on this device.',
    sampleTitle: 'Critical signal probes',
    sampleInstructions: 'Select A or B, then click the original image. Compare colors that encode different player actions or states.',
    sampleA: 'Probe A',
    sampleB: 'Probe B',
    sampleAName: 'Meaning of probe A',
    sampleBName: 'Meaning of probe B',
    manualColor: 'Set probe color directly',
    sampleAInitial: 'Ally marker',
    sampleBInitial: 'Enemy marker',
    noSample: 'Waiting for screenshot',
    originalContrast: 'Original contrast',
    simulatedContrast: 'Stressed contrast',
    separationRetained: 'Separation retained',
    statusStrong: 'Signal remains distinct',
    statusWatch: 'Inspect in context',
    statusReview: 'Review signal design',
    statusPending: 'No analysis yet',
    measurementLabel: 'Measurement',
    heuristicLabel: 'Heuristic',
    manualReviewLabel: 'Manual review status',
    measurementHint: 'Contrast uses the WCAG relative luminance formula for the two sampled sRGB colors. It only describes this pair and is most meaningful when the colors are expected to touch.',
    heuristicHint: 'Separation retained compares linear RGB distance before and after the lens. It is a directional warning, not a perceptual threshold or pass condition.',
    promptTitle: 'Mission review prompts',
    promptColorOnly: 'Can players identify ally, enemy, warning, success, and failure without hue alone?',
    promptChangingBackground: 'Does text remain readable over the brightest, darkest, and busiest gameplay backgrounds?',
    promptMinimap: 'Do minimap markers differ by shape, label, position, or pattern as well as color?',
    promptStates: 'Are selected, disabled, unavailable, cooldown, health, and damage states still unambiguous?',
    promptShape: 'Can an icon, label, pattern, animation, position, or sound reinforce every critical color signal?',
    findingLabel: 'Team finding',
    findingPlaceholder: 'Example: Enemy outline disappears over the damage vignette',
    addFinding: 'Add finding',
    findingsEmpty: 'No written findings yet. Use the prompts as a first review pass.',
    exportSheet: 'Download comparison sheet',
    exportReport: 'Download structured report',
    resetTool: 'Clear session',
    uploadError: 'This image could not be read. Choose a valid PNG, JPEG, or WebP file.',
    fileTooLarge: 'The image is larger than 16 MB. Export a smaller review capture and try again.',
    imageReady: 'Screenshot loaded locally. Sample two critical signals to begin the review.',
    reportDownloaded: 'Structured findings report downloaded.',
    sheetDownloaded: 'Comparison sheet downloaded.',
    localOnlyDisclosure: 'Image decoding, simulation, sampling, heatmap generation, and exports run in this browser. Only display settings are stored locally.',
    limitationDisclosure: 'This tool supports design review. Simulations are models, blur and heatmaps are heuristics, and no result certifies accessibility or replaces testing with players.',
    reportTitle: 'Game UI accessibility review sheet',
    reportFindingReview: 'The sampled signal pair loses substantial contrast or color separation under the selected stress lens. Review it with the full gameplay context.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'How to review colorblind game UI without uploading a screenshot',
    },
    {
      type: 'paragraph',
      html: 'A game interface often communicates under pressure: health changes while the camera moves, enemy markers cross bright scenery, rarity colors compete with particle effects, and minimap icons shrink to a few pixels. This local tester keeps the screenshot in your browser and lets you inspect those real combinations through documented color vision simulations and practical stress conditions.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Measurements, heuristics, and human judgment answer different questions',
    },
    {
      type: 'table',
      headers: ['Evidence type', 'What this tester provides', 'What it cannot conclude'],
      rows: [
        ['Measurement', 'Relative luminance and contrast ratio for two sampled sRGB colors', 'Whether every text edge or background in the game meets a requirement'],
        ['Simulation', 'Protanopia, deuteranopia, and tritanopia transformations based on published matrices', 'The exact visual experience of every individual player'],
        ['Heuristic', 'Blur, downscale, desaturation, reduced contrast, and local edge collapse cues', 'A universal pass score or automatic diagnosis of UI semantics'],
        ['Manual review', 'Prompts and exportable findings tied to the selected screenshot and settings', 'Certification or a replacement for testing with disabled players'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Choose color probes that represent a player decision',
    },
    {
      type: 'paragraph',
      html: 'Do not sample two colors merely because they look attractive. Probe a pair whose difference changes what the player does: ally and enemy, safe and dangerous, selected and unavailable, healing and damage, or objective and decoration. If the stressed pair collapses, add a shape, icon, label, pattern, position, timing cue, or sound instead of searching only for another hue.',
    },
    {
      type: 'tip',
      title: 'Review the difficult frame',
      html: 'Use a capture from a busy encounter, not a clean mockup. Recheck the same signal over light scenery, dark scenery, motion, effects, damage overlays, and the smallest display size you support.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Read the exported report as a design conversation',
    },
    {
      type: 'paragraph',
      html: 'The JSON report records the lens, stress settings, sampled colors, measured contrast, separation heuristic, and team observations. Attach the PNG comparison sheet to an issue, then describe the gameplay consequence and the redundant cue you plan to add. A useful finding is specific enough for a designer and engineer to reproduce in the same scene.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
