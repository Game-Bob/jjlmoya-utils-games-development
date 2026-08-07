import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'sprite-sheet-packer',
  title: 'Sprite Sheet Packer and Extractor',
  description:
    'Optimize 2D game performance by packing loose animation frames into texture atlases or extracting individual sprites from existing sheets client-side.',
  ui: {
    packerTab: 'Packer Studio',
    extractorTab: 'Sprite Extractor',
    dropZoneTitle: 'Drag and Drop Frames',
    dropZoneSubtitle: 'Upload PNG or WebP images to generate your optimized texture atlas',
    selectFilesButton: 'Select Frame Images',
    clearAllButton: 'Clear Workspace',
    downloadZipButton: 'Download Package (ZIP)',
    copyJsonButton: 'Copy Atlas JSON',
    downloadSheetPngButton: 'Download Texture PNG',
    paddingLabel: 'Frame Padding (px)',
    borderExtrusionLabel: 'Border Extrusion (px)',
    maxTextureSizeLabel: 'Max Texture Dimension',
    powerOfTwoLabel: 'Force Power of 2 (POT)',
    exportFormatLabel: 'Target Engine Format',
    presetPixelArt: 'Pixel Art 16x16 Preset',
    presetHdUi: 'HD UI Atlas 1024 Preset',
    presetMobile: 'Mobile WebGL 2048 Preset',
    formatGenericHash: 'Generic JSON (Hash)',
    formatGenericArray: 'Generic JSON (Array)',
    formatUnity: 'Unity 2D Engine',
    formatGodot: 'Godot 2D Engine',
    formatPhaser: 'Phaser / PixiJS Engine',
    formatCss: 'Web Frontend CSS',
    previewTitle: 'Texture Atlas Preview',
    efficiencyBadge: 'Texture Efficiency',
    drawCallsBadge: 'Draw Calls Reduced',
    totalFramesBadge: 'Packed Frames',
    textureSizeBadge: 'Atlas Dimension',
    flipbookTitle: 'Animation Flipbook Player',
    flipbookFpsLabel: 'Animation Speed (FPS)',
    playAnimation: 'Play Sequence',
    pauseAnimation: 'Pause Sequence',
    frameWidthLabel: 'Frame Width (px)',
    frameHeightLabel: 'Frame Height (px)',
    marginLabel: 'Margin Offset (px)',
    spacingLabel: 'Grid Spacing (px)',
    extractedCountLabel: 'Extracted Sprites',
    codeSnippetTitle: 'Engine Integration Code',
    copySnippetButton: 'Copy Code Snippet',
    copiedToast: 'Copied to Clipboard!',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Understanding GPU Batching and Draw Call Optimization in 2D Engines',
    },
    {
      type: 'paragraph',
      html: 'In modern 2D graphics pipelines, every individual image file rendered on screen requires the CPU to send a instruction known as a draw call to the graphics card GPU. When a character animation consists of dozens of loose PNG files, the GPU must constantly switch texture bindings and flush its rendering pipeline for every single frame. Packing loose character frames into a unified sprite sheet or texture atlas consolidates hundreds of separate render commands into a single batch, eliminating graphics pipeline stalls and boosting framerates on mobile web browsers, desktop engines, and indie game runtimes.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Draw Call Reduction' },
        { value: '4x', label: 'Faster GPU Batching' },
        { value: '60 FPS', label: 'Stable Mobile Target' },
        { value: '100%', label: 'Local In-Browser Security' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparing Loose Frame Files vs Packed Texture Atlases',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Loose Animation Frame Files',
          description: 'Individual PNG or WebP files stored separately on disk',
          points: [
            'Generates an independent GPU draw call for every single frame displayed on screen',
            'Triggers frequent texture unit state switching and VRAM memory fragmentation',
            'Increases HTTP network requests and loading latency for web and HTML5 games',
            'Causes severe framerate drops on mobile GPUs during heavy particle or character scenes',
          ],
        },
        {
          title: 'Packed Texture Atlas Asset',
          description: 'Single unified PNG sheet paired with coordinate metadata JSON',
          points: [
            'Batches hundreds of sprite frames into a single unified GPU draw call',
            'Maximizes graphics memory bandwidth utilization and quad rendering throughput',
            'Bundles all animation frames into one asset download, reducing disk and network overhead',
            'Helps maintain ultra-smooth 60 FPS performance across low-end mobile devices and browsers',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Subpixel Camera Translation and Border Extrusion Mathematics',
    },
    {
      type: 'paragraph',
      html: 'When rendering pixel art or 2D characters with subpixel camera smoothing or bilinear filtering, neighboring frames on a sprite sheet can bleed into one another along texture coordinate boundaries. This visual artifact, known as pixel bleeding or edge seam bleeding, occurs because texture sampling interpolates adjacent texel colors when camera positions fall between whole pixel coordinates.',
    },
    {
      type: 'tip',
      title: 'Border Extrusion Strategy for Seamless Rendering',
      html: 'To eliminate subpixel bleeding during camera zooming or scrolling, apply 1 to 2 pixels of border extrusion when packing sprite sheets. Extrusion duplicates outer edge pixels outwards into the padding region, ensuring that bilinear sampling interpolates identical edge colors instead of adjacent frames or transparent background space.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Texture Dimension Guidelines for Mobile WebGL and Desktop Engines',
    },
    {
      type: 'paragraph',
      html: 'Selecting appropriate maximum texture dimensions is critical for cross-platform compatibility. While modern desktop GPUs easily handle 4096x4096px or 8192x8192px textures, mobile WebGL 1.0 drivers and embedded graphics processors often enforce maximum texture limits of 2048x2048px.',
    },
    {
      type: 'table',
      headers: ['Target Game Platform', 'Recommended Maximum Size', 'Power of Two (POT)', 'Memory Profile and Usage'],
      rows: [
        ['Mobile Web Browsers and HTML5', '2048 x 2048 px', 'Mandatory for WebGL 1.0', 'Low VRAM Bandwidth and High Efficiency'],
        ['Desktop PC and Console Engines', '4096 x 4096 px', 'Recommended', 'High GPU Capacity and Fast Mipmapping'],
        ['Retro and Handheld Consoles', '1024 x 1024 px', 'Strict Hardware Requirement', 'Strict VRAM Limits and Uncompressed Sampling'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Trade Offs of Power of Two Texture Packing Alignment',
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Provides 100% rendering compatibility with legacy mobile drivers, WebGL 1.0, and WebGPU fallbacks',
          con: 'May introduce unused transparent padding when packing small or odd-numbered frame counts',
        },
        {
          pro: 'Enables automatic hardware mipmap generation for smooth downscaling without aliasing',
          con: 'Slightly increases overall texture surface area on initial allocation',
        },
        {
          pro: 'Optimizes GPU memory allocation patterns inside native graphics driver texture pools',
          con: 'Requires precise padding configuration to balance sprite density against edge clearance',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Key Architectural Terms in Sprite Sheet Optimization',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'A command dispatched by the CPU to the graphics processor instructing it to render a batch of textured geometry.',
        },
        {
          term: 'Bin Packing Algorithm',
          definition: 'A mathematical algorithm that places two-dimensional rectangles of varying sizes inside a minimal bounding container without overlap.',
        },
        {
          term: 'Border Extrusion',
          definition: 'The process of cloning outer edge pixels outwards into padding space to prevent texture filtering artifacts during subpixel camera movement.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Sequential rapid playback of discrete 2D sprite frames to simulate smooth physical motion in video games.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Production Optimization Checklist for Game Artists and Developers',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Game Development Production Rules',
      html: 'Group animation sequences into shared character or environment atlases, enforce power-of-two dimensions for WebGL builds, apply 1-2px border extrusion for subpixel camera motion, and trim transparent padding around frames before final export.',
    },
  ],
  faq: [
    {
      question: 'What is a sprite sheet and why is it essential for 2D game development?',
      answer:
        'A sprite sheet, or texture atlas, is a single composite image file containing multiple smaller graphics or animation frames. By combining images into one sheet, game engines can draw many objects in a single GPU draw call rather than issuing hundreds of individual render commands, dramatically improving game performance.',
    },
    {
      question: 'How does the client-side packing process work in this utility?',
      answer:
        'Your images are loaded into your browser HTML5 canvas API locally. A bin-packing algorithm calculates optimal rectangular coordinates to fit all frames into a tight texture bounding box. The combined texture PNG and engine JSON metadata are generated instantly without sending any data to external servers.',
    },
    {
      question: 'Can I extract frames from an existing sprite sheet?',
      answer:
        'Yes. Switch to Extractor mode, upload any sprite sheet graphic, and configure grid dimensions or automatic transparency detection. The utility slices individual frames and packages them into a ZIP archive for immediate download.',
    },
  ],
  howTo: [
    {
      name: 'Upload Animation Frames',
      text: 'Drag and drop your individual PNG or WebP character frame files into the drop zone container.',
    },
    {
      name: 'Configure Packing Settings',
      text: 'Adjust padding, border extrusion, and maximum texture size. Select your target engine format such as Unity, Godot, or Phaser.',
    },
    {
      name: 'Preview Animation and Export',
      text: 'Test the flipbook animation player to verify frame alignment, then click Download Package to receive your PNG texture and metadata in a ZIP file.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Sprite Sheet Packer and Extractor',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a sprite sheet and why is it essential for 2D game development?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A sprite sheet is a single composite image file containing multiple smaller graphics or animation frames that allows game engines to draw many objects in a single GPU draw call.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Pack and Extract Sprite Sheets',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Upload Animation Frames',
          text: 'Drag and drop your individual PNG or WebP character frame files into the drop zone container.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
