import type { SteamCapsuleGeneratorLocaleContent } from '../entry';

const title = 'Steam Capsule Generator';
const description = 'Create four Steam capsule previews from one master image, adjust the focal point, inspect safe zones and download a local PNG set or ZIP archive.';
const faq = [
  { question: 'Does the image leave my device?', answer: 'No. The image is decoded and rendered in your browser with canvas. The tool does not upload the master file or require an account.' },
  { question: 'What master image should I use?', answer: 'Use a PNG, JPEG or WebP image at least 1920 by 1080 pixels. A larger, clean master gives the crop more room around the focal subject.' },
  { question: 'What does the focal point control change?', answer: 'It changes the position of the source crop for every output. Place the marker over the character, product or logo that must remain visible.' },
  { question: 'Are the safe zones Steam guarantees?', answer: 'They are practical visual guides for leaving breathing room around platform overlays. Always compare the final files with the current Steamworks templates before publishing.' },
];
const howTo = [
  { name: 'Choose a master image', text: 'Drop a PNG, JPEG or WebP file of at least 1920 by 1080 pixels into the upload panel.' },
  { name: 'Set the focal point', text: 'Click the source preview or move the horizontal and vertical sliders until the important artwork sits in the marker.' },
  { name: 'Review the four crops', text: 'Inspect the Header Capsule, Main Capsule, Vertical Capsule and Community Icon previews with their safe zone guides.' },
  { name: 'Download the set', text: 'Download individual PNG files or create one ZIP archive. All processing happens locally in the browser.' },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({ '@type': 'Question' as const, name: item.question, acceptedAnswer: { '@type': 'Answer' as const, text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((item) => ({ '@type': 'HowToStep' as const, name: item.name, text: item.text })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'MultimediaApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: SteamCapsuleGeneratorLocaleContent = {
  slug: 'steam-capsule-generator',
  title,
  description,
  ui: {
    uploadTitle: 'Drop your master artwork',
    uploadHint: 'One high resolution image becomes a complete Steam preview set in your browser.',
    chooseFile: 'Choose artwork',
    minimumSize: 'Minimum master size',
    supportedFormats: 'PNG, JPEG or WebP',
    invalidImage: 'Choose an image of at least 1920 by 1080 pixels.',
    sourcePreview: 'Master artwork',
    focalPoint: 'Focal point',
    focalHint: 'Click the artwork or use the sliders to keep the important subject inside every crop.',
    horizontalFocus: 'Horizontal',
    verticalFocus: 'Vertical',
    resetFocus: 'Center focal point',
    outputPreview: 'Steam output set',
    safeZone: 'Safe zone',
    dimensions: 'pixels',
    downloadPng: 'PNG',
    downloadZip: 'Download ZIP',
    buildingZip: 'Building your local ZIP archive...',
    zipReady: 'Steam capsule set ready',
    localOnly: 'Private by design. Your artwork stays in this browser.',
    headerCapsule: 'Header Capsule',
    mainCapsule: 'Main Capsule',
    verticalCapsule: 'Vertical Capsule',
    communityIcon: 'Community Icon',
    ready: 'Ready',
    downloadError: 'The archive could not be created. Try the PNG buttons instead.',
  },
  seo: [
    { type: 'title', text: 'Build a coherent Steam capsule set from one artwork', level: 2 },
    { type: 'paragraph', html: 'A store page often fails visually when the same key art is exported several times without a consistent crop. This generator gives an indie developer one deliberate focal point and four immediate previews: a wide header at 460 by 215 pixels, a main capsule at 616 by 353 pixels, a vertical capsule at 374 by 448 pixels, and a square community icon at 184 by 184 pixels. The result is not a design replacement. It is a fast composition check that shows where the image loses the face, character, product silhouette or title mark as the aspect ratio changes.' },
    { type: 'paragraph', html: 'The browser loads the master file locally, calculates a proportional crop for each target ratio and paints the result into a canvas. Moving the focal point changes every preview at once. That makes the decision visible before export: a centered scene may work for the main capsule but cut away the subject in the vertical version, while a slightly off center position can preserve the story in all four formats.' },
    { type: 'title', text: 'A practical focal point workflow for game art', level: 2 },
    { type: 'list', items: ['Start with a clean master at least 1920 by 1080 pixels so each crop has room to move.', 'Place the marker on the visual subject, not necessarily on the geometric center of the canvas.', 'Check the vertical and square previews first because they remove the most surrounding context.', 'Use the safe zone guides as breathing room for platform overlays and verify the final files against Steamworks templates.'] },
    { type: 'paragraph', html: 'The focal point is a composition aid, not a promise that Steam will position every interface element identically in every surface. Keep essential logos, faces and short titles away from crowded edges. Steam also publishes rules about what text belongs on capsule artwork, so a beautiful crop can still need editorial changes before submission.' },
    { type: 'title', text: 'Why local generation helps an indie workflow', level: 2 },
    { type: 'paragraph', html: 'Large artwork should not need a round trip to a server for a simple resize and crop. This tool uses the browser canvas with high quality image smoothing, so the master remains on the creator\'s device while the four PNGs are prepared. The ZIP step is also local: each canvas is added to a small archive in memory and offered as a download. There is no account, queue or upload form hidden behind the preview.' },
    { type: 'paragraph', html: 'Treat the previews as a final preflight pass. Confirm that the logo remains legible at the smallest view, that the strongest contrast survives the crop and that temporary sale messaging is not baked into a permanent base asset. When the composition is approved, the separate PNGs and ZIP give you a tidy handoff for a store page, a team review or an art folder.' },
    { type: 'tip', html: 'Keep one master file with generous edge detail and a second version with the logo already positioned. If a crop needs a different logo treatment, adjust the artwork in a design tool and run the set again rather than stretching a finished capsule.' },
  ],
  faq,
  bibliography: [
    { name: 'Steamworks Graphical Assets Overview', url: 'https://partner.steamgames.com/doc/store/assets' },
    { name: 'Steamworks Store Graphical Assets', url: 'https://partner.steamgames.com/doc/store/assets/standard' },
    { name: 'Steamworks Graphical Asset Rules', url: 'https://partner.steamgames.com/doc/store/assets/rules' },
  ],
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
