import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-game-tester',
  title: 'Itch.io Web Game Inspector & Live Resolution Optimizer',
  description: 'Upload HTML5 export files or ZIP archives to test viewports live, fix aspect ratio scrollbars, inspect Godot and Unity WebGL builds, and generate copyable Itch.io dashboard embed settings.',
  ui: {
    dropzoneTitle: 'Drag & Drop Web Game Build or ZIP Archive',
    dropzoneHint: 'Drop any .ZIP file, exported folder, or HTML5 build files anywhere in this area to inspect immediately.',
    chooseFiles: 'Select Game File or Folder',
    engineDetected: 'Detected Engine',
    compatibilityScore: 'Itch.io Compatibility Score',
    viewportWidth: 'Viewport Width (px)',
    viewportHeight: 'Viewport Height (px)',
    aspectRatio: 'Aspect Ratio',
    lockAspectRatio: 'Lock Aspect Ratio',
    presets: 'Quick Resolution Presets',
    fitTest: 'Live Layout & Scrollbar Test',
    copySettings: 'Copy Itch.io Embed Settings',
    copied: 'Copied to Clipboard!',
    embedMode: 'Embed Mode',
    scrollbars: 'Enable Scrollbars',
    noIssuesFound: 'All checks passed cleanly! Package is 100% compliant with Itch.io standards.',
    filesInspected: 'Files Inspected',
    resetViewport: 'Reset Viewport',
    autoScaleToggle: 'Auto-Scale Viewport to Screen Width',
    scaledNotice: 'Viewport exceeds screen width. Artificial zoom-out applied so full canvas fits. Disable auto-scale to view true broken layout.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Essential Formatting Guidelines for Itch.io HTML5 Web Game Exports'
    },
    {
      type: 'paragraph',
      html: 'Publishing HTML5 and WebGL games on Itch.io requires precise configuration of viewport dimensions, archive file structures, and cross-origin security headers. Unlike desktop executable downloads, browser-based games must load seamlessly inside an embedded iframe container without generating unintended scrollbars, black letterbox borders, or canvas clipping across desktop monitors, laptops, and mobile screens.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Standard Web Aspect Ratio', value: '16:9 Landscape' },
        { label: 'Classic Itch Resolution', value: '960 x 540 px' },
        { label: 'Entry Point File Requirement', value: 'index.html in Root' },
        { label: 'Godot 4 Requirement', value: 'COOP / COEP Headers' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparing Engine Web Export Requirements across Frameworks'
    },
    {
      type: 'paragraph',
      html: 'Different game engines produce unique web export bundles that dictate how assets and WebAssembly binaries interact with the browser context. Understanding engine-specific constraints helps developers eliminate load failures before making their game public.'
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Godot Engine (HTML5 Export)',
          description: 'Generates index.html alongside WebAssembly (.wasm) and main data package (.pck) binaries. Godot 4 requires SharedArrayBuffer support enabled in Itch.io project settings for multi-threaded WebGL performance.'
        },
        {
          title: 'Unity WebGL Build',
          description: 'Structures builds inside a Build/ directory containing framework.js, data, and wasm files. Canvas size is fixed in unityFramework loader settings and requires explicit iframe sizing to prevent scrollbars.'
        },
        {
          title: 'Phaser & Construct Web Exports',
          description: 'Lightweight JavaScript builds utilizing HTML5 canvas or WebGL renderers. Ideal for responsive full-window scaling and low memory footprint on mobile browsers.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Common Itch.io Packaging Errors and Resolution Best Practices'
    },
    {
      type: 'table',
      headers: ['Issue Type', 'Root Cause', 'Recommended Solution'],
      rows: [
        ['Nested index.html', 'Zipping parent folder instead of contents', 'Ensure index.html is located directly in the root directory of the archive.'],
        ['Case-sensitivity 404', 'File paths matching lower/upper case mismatches', 'Keep all file extensions and asset references lowercase to prevent Linux server 404s.'],
        ['Canvas Scrollbars', 'Viewport dimensions smaller than canvas size', 'Set Itch.io embed viewport dimensions 20px larger than canvas or disable canvas overflow margins.'],
        ['Uncompressed Audio', 'Large WAV files included in web package', 'Compress sound effects and music tracks into OGG or MP3 formats to decrease initial download time.']
      ]
    },
    {
      type: 'tip',
      html: 'When embedding a 1280x720 WebGL game on Itch.io, set your embed viewport dimensions to exactly 1280x720 with "Embed in page" enabled and "Click to launch" disabled. Always test fullscreen mode toggles to ensure the canvas scales dynamically across display aspect ratios.'
    }
  ],
  faq: [
    {
      question: 'Why does my Godot 4 game display a black screen on Itch.io?',
      answer: 'Godot 4 web exports use WebAssembly multi-threading which requires SharedArrayBuffer support. In your Itch.io game edit page, scroll down to Frame options and enable "SharedArrayBuffer support" to set the required COOP/COEP HTTP headers.'
    },
    {
      question: 'Do I need to zip my game files before using this tester?',
      answer: 'No! You can upload a ZIP archive or directly select your exported HTML5 files and folders. The inspector reads files directly in your browser memory.'
    }
  ],
  howTo: [
    {
      name: 'Upload Game Files or ZIP',
      text: 'Drag and drop your HTML5 web export ZIP archive or select your build directory containing index.html.'
    },
    {
      name: 'Review Compatibility Audit',
      text: 'Check the automated audit report for root index.html placement, case sensitivity warnings, and engine detection.'
    },
    {
      name: 'Live Resize Viewport',
      text: 'Use the interactive resolution sliders and aspect ratio chips to test live iframe embedding without scrollbars.'
    },
    {
      name: 'Copy Itch.io Settings',
      text: 'Click the Copy Settings button to grab exact viewport width and height values ready for your Itch.io game submission page.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io Web Game Inspector & Live Resolution Optimizer',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does my Godot 4 game display a black screen on Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Godot 4 web exports use WebAssembly multi-threading which requires SharedArrayBuffer support. In your Itch.io game edit page, scroll down to Frame options and enable SharedArrayBuffer support to set the required COOP/COEP HTTP headers.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Audit and Test Your Itch.io Game Viewport',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Upload Game Files or ZIP',
          text: 'Drag and drop your HTML5 web export ZIP archive or select your build directory containing index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Live Resize Viewport',
          text: 'Use the interactive resolution sliders and aspect ratio chips to test live iframe embedding without scrollbars.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
