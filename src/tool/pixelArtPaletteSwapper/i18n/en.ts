import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'pixel-art-palette-swapper',
  title: 'Pixel Art Palette Swapper',
  description: 'Reduce sprites and spritesheets to classic console palettes or a custom set of hex colors directly in your browser.',
  ui: {
    uploadTitle: 'Drop a sprite or spritesheet',
    uploadHint: 'PNG, JPEG, or WebP stays on your device',
    chooseImage: 'Choose image',
    replaceImage: 'Replace image',
    paletteTitle: 'Choose palette',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'NES inspired',
    pico8Palette: 'PICO 8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Custom colors',
    customPaletteHint: 'Separate hex values with commas, spaces, or new lines.',
    applyCustomPalette: 'Apply palette',
    resetCustomPalette: 'Reset',
    sourcePreview: 'Original',
    resultPreview: 'Limited result',
    waitingForImage: 'Waiting for an image',
    uploadToPreview: 'Upload an image to preview it',
    resultEmpty: 'Your original and palette limited versions will appear side by side.',
    downloadPng: 'Download PNG',
    downloadDisabled: 'Upload an image to enable export.',
    colorCount: 'Source colors',
    mappedCount: 'Colors used',
    imageSize: 'Image size',
    paletteCount: 'palette colors',
    preserveAlpha: 'Preserve transparency',
    zoomLabel: 'Zoom',
    processing: 'Mapping pixels',
    invalidPalette: 'Add at least one valid hex color',
    invalidImage: 'Choose a PNG, JPEG, or WebP image',
    readyStatus: 'Ready',
    dropActive: 'Release to load',
    mappedSummary: 'Mapped {source} source colors to {mapped} palette colors',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Turn a Full Color Sprite Into a Deliberate Retro Palette',
    },
    {
      type: 'paragraph',
      html: 'A limited palette is more than a technical restriction. It gives a sprite a repeatable color vocabulary, makes scenes feel like they belong together, and can suggest the visual character of a specific console or fantasy hardware. This browser based palette swapper lets you compare the source image with a reduced version while you experiment with Game Boy, NES inspired, PICO 8, Commodore 64, DawnBringer 16, and custom palettes.',
    },
    {
      type: 'title',
      level: 2,
      text: 'How Nearest Color Mapping Works',
    },
    {
      type: 'paragraph',
      html: 'The tool reads the red, green, and blue channels for every visible pixel and compares that color with every color in the selected palette. It chooses the palette entry with the smallest squared RGB distance, then writes the replacement color to a new canvas buffer. The alpha channel is kept separate, so transparent pixels remain transparent and partially transparent edges keep their original opacity when Preserve transparency is enabled.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Palette limitation',
          description: 'Every source color is replaced by its closest available swatch.',
          points: [
            'Fast and predictable for sprites, icons, tiles, and UI art',
            'Keeps the original dimensions and pixel positions',
            'Makes a consistent color budget easy to review',
          ],
        },
        {
          title: 'Palette swapping',
          description: 'The same artwork can be remapped to another carefully chosen set.',
          points: [
            'Useful for alternate costumes, biomes, and damage states',
            'Custom hex lists let you match an existing art direction',
            'A downloaded PNG is ready to bring back into your editor',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Choosing a Palette for Pixel Art',
    },
    {
      type: 'table',
      headers: ['Palette', 'Colors', 'Good fit', 'Watch for'],
      rows: [
        ['Game Boy', '4', 'Monochrome handheld mood and strong value studies', 'Small value range can merge nearby materials'],
        ['NES inspired', '16', 'Chunky arcade sprites, characters, and tiles', 'Very bright colors can overpower small details'],
        ['PICO 8', '16', 'Compact modern pixel art with saturated accents', 'Highly saturated hues need deliberate contrast'],
        ['Commodore 64', '16', 'Muted retro scenes and computer game aesthetics', 'Low contrast benefits from clear silhouettes'],
        ['DawnBringer 16', '16', 'A flexible hand picked palette for general pixel art', 'Ramp colors still need intentional light direction'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'A Practical Workflow for Spritesheets',
    },
    {
      type: 'paragraph',
      html: 'Start with the largest source art you can comfortably edit, then upload the exported sprite or spritesheet here. Pick a preset to establish a direction, or paste a custom list from a palette library. Inspect the two canvases at a higher zoom and look for lost facial features, merged outlines, and highlights that no longer separate from their base color. If a result feels muddy, try a palette with a stronger value step or add one deliberate accent color to the custom list.',
    },
    {
      type: 'tip',
      title: 'Keep the palette intentional',
      html: 'A larger list is not automatically better. Start with four to sixteen colors, assign each color a job, and reserve the brightest values for focal points or readable highlights. The closest color algorithm preserves positions, but it cannot decide which colors should carry the visual hierarchy of your sprite.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Pixel Art Export Checklist',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Before importing the limited PNG',
      html: 'Check the result at 100 percent and at the final in game scale, confirm that transparent edges are still clean, verify that important silhouettes remain readable, and keep the original source file beside the export so you can revise the palette without starting over.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Color quantization',
          definition: 'The process of reducing a large set of source colors to a smaller defined set.',
        },
        {
          term: 'Palette ramp',
          definition: 'A related sequence of dark, mid, and light colors used to shade one material or surface.',
        },
        {
          term: 'Indexed palette',
          definition: 'A compact color table where image pixels refer to entries in a shared list instead of storing full colors repeatedly.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Does the palette swapper upload my image?',
      answer: 'No. The image is decoded into a canvas in your browser, mapped locally with JavaScript, and exported directly as a PNG. The utility has no upload step.',
    },
    {
      question: 'Can I use my own palette?',
      answer: 'Yes. Paste six digit or three digit hex colors into the Custom colors field, separated by commas, spaces, or new lines, then choose Apply palette.',
    },
    {
      question: 'Does it resize my sprite or spritesheet?',
      answer: 'No. The output keeps the source width, height, pixel positions, and alpha values when Preserve transparency is enabled.',
    },
    {
      question: 'What algorithm does it use?',
      answer: 'Each visible pixel is assigned to the closest color in the selected palette using squared Euclidean distance in RGB space. It is fast, deterministic, and easy to preview, but it does not apply dithering or perceptual Lab color correction.',
    },
  ],
  howTo: [
    {
      name: 'Load a sprite',
      text: 'Drop a PNG, JPEG, or WebP sprite or spritesheet into the workspace, or use Choose image.',
    },
    {
      name: 'Choose a palette',
      text: 'Select a classic preset or enter your own hex colors. The result updates immediately when a palette is applied.',
    },
    {
      name: 'Compare and export',
      text: 'Inspect the original and limited canvases, adjust the preview zoom, and download the result as a PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pixel Art Palette Swapper',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does the palette swapper upload my image?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The image is decoded and mapped locally in the browser, then exported directly as a PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use my own palette?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Paste valid hex colors into the Custom colors field and apply the palette.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to limit a sprite to a retro palette',
      step: [
        { '@type': 'HowToStep', name: 'Load a sprite', text: 'Drop an image into the workspace or choose it from your device.' },
        { '@type': 'HowToStep', name: 'Choose a palette', text: 'Select a preset or apply a custom list of hex colors.' },
        { '@type': 'HowToStep', name: 'Compare and export', text: 'Review the result and download the limited PNG.' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
