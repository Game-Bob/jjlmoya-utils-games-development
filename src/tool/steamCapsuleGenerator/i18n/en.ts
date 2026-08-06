import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'steam-capsule-generator',
  title: 'Steam Capsule & Art Preview Generator',
  description: 'Crop, preview, and format official Steam store capsules and library assets with live mockup inspection and safe zone verification.',
  ui: {
    uploadTitle: 'Upload Game Artwork',
    uploadHint: 'Upload high-resolution source banner or key visual (recommended 3840x1240 or larger).',
    chooseFile: 'Select File',
    minimumSize: 'Recommended minimum size: 1920x1080 px',
    horizontalFocus: 'Horizontal Focus (X)',
    verticalFocus: 'Vertical Focus (Y)',
    zoomLevel: 'Zoom Magnification',
    resetFocus: 'Center Focal Point',
    safeZone: 'Safe Zone Overlay',
    downloadZip: 'Download All Steam Assets (ZIP)',
    headerCapsule: 'Header Capsule (460x215 / HD 920x430)',
    smallCapsule: 'Small Capsule (231x87 / HD 462x174)',
    mainCapsule: 'Main Capsule (616x353 / HD 1232x706)',
    verticalCapsule: 'Vertical Library Capsule (300x450 / HD 600x900)',
    libraryHero: 'Library Hero Banner (1920x620 / HD 3840x1240)',
    communityIcon: 'Community App Icon (32x32 / HD 184x184)',
    storePreviewTab: 'Steam Store Mockup',
    libraryPreviewTab: 'Steam Library Mockup',
    allAssetsTab: 'All Asset Sizes',
    toggleSafeZones: 'Safe Zone Guides',
    toggleSteamOverlay: 'Steam Interface Overlay'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Steam Graphical Asset Specifications and Presentation Rules'
    },
    {
      type: 'paragraph',
      html: 'Steam store pages and player library views rely on standardized graphical capsule images to display your title across various device displays and storefront widgets. Key visuals must maintain visual clarity, readability, and brand coherence across vastly different aspect ratios ranging from wide horizontal store banners to tall vertical library grid tiles. When preparing assets for submission to Steamworks, developers must adhere to strict pixel dimensions, file format guidelines, and UI overlay safe zones to avoid text obstruction from system elements like price tags, wishlist buttons, and status labels.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Store Header HD Resolution', value: '920 x 430 px' },
        { label: 'Library Capsule Aspect Ratio', value: '2:3 Vertical' },
        { label: 'Library Hero Maximum Res', value: '3840 x 1240 px' },
        { label: 'Community Icon Size', value: '184 x 184 px' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparing Steam Capsule Formats Across Storefront Placement'
    },
    {
      type: 'paragraph',
      html: 'Different sections of the Steam client highlight distinct asset dimensions. The Main Capsule serves as the primary visual anchor in featured recommendation carousels, whereas Small Capsules appear in fast-scrolling search result listings and promotional category feeds. Understanding how each asset functions ensures optimal conversion rates and player engagement.'
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Store Capsules (Header & Main)',
          description: 'Landscape aspect ratio focused on game title and main key visual.',
          points: [
            'Landscape aspect ratio focused on game title and main key visual',
            'Bottom-right area reserved for discount badge overlays and price tags',
            'High horizontal span suited for widescreen store carousel displays',
            'Requires immediate logo legibility at scaled desktop resolutions'
          ]
        },
        {
          title: 'Library Assets (Hero & Vertical Capsule)',
          description: 'Vertical capsule acts as game box art on player desktop grid.',
          points: [
            'Vertical capsule acts as game box art on player desktop grid',
            'Library Hero features wide panoramic background visual without embedded text',
            'Library Logo overlay floats independently with transparent PNG background',
            'Top and bottom margins host achievement progress and play buttons'
          ]
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Steam Asset Dimensional Matrix Reference'
    },
    {
      type: 'paragraph',
      html: 'Below is the full technical matrix outlining standard and high-density resolution parameters required for a complete Steamworks storefront and library publication.'
    },
    {
      type: 'table',
      headers: ['Asset Type', 'Standard Size (px)', 'HD Target Size (px)', 'Aspect Ratio', 'Format'],
      rows: [
        ['Header Capsule', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Small Capsule', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Main Capsule', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Vertical Library Capsule', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Library Hero', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Library Logo', '1280 x 720', '1280 x 720', '16:9', 'Transparent PNG'],
        ['Community Icon', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Best Practices for Safe Area Management and Visual Formatting'
    },
    {
      type: 'tip',
      title: 'Safe Zone Optimization Strategy',
      html: 'Keep all critical logotypes and character eyes within the upper-left two-thirds of the image canvas. Avoid placing fine print or secondary title text near the bottom right edge where discount badges display.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Pros and Cons of Automated Smart Focal Cropping'
    },
    {
      type: 'proscons',
      title: 'Workflow Evaluation',
      items: [
        {
          pro: 'Instant generation of all seven required Steam asset dimensions',
          con: 'Complex key visual compositions may require separate dedicated background layers'
        },
        {
          pro: 'Live interactive preview of Steam store and library user interfaces',
          con: 'Ultra-wide Library Hero banners may benefit from custom horizontal extension artwork'
        },
        {
          pro: 'Eliminates scale distortion by maintaining exact aspect ratios',
          con: 'Manual review recommended before official Steamworks upload'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Steam Graphics Glossary and Terminologies'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Capsule',
          definition: 'Standard term used by Valve to describe promotional box art graphic containers across the Steam storefront and client library.'
        },
        {
          term: 'Library Hero',
          definition: 'The expansive header banner image displayed at the top of a game detail page inside the player library view.'
        },
        {
          term: 'Safe Zone',
          definition: 'Designated bounds within a capsule layout that remain free from native Steam client UI overlays such as price tags, play buttons, and wishlist flags.'
        },
        {
          term: 'High-Density (HD) Spec',
          definition: 'Double-resolution asset target required by Steamworks to ensure crisp display on Retina and 4K displays.'
        }
      ]
    }
  ],
  faqTitle: 'Frequently Asked Questions About Steam Assets',
  faq: [
    {
      question: 'What file format should I use for Steam capsules?',
      answer: 'Steam accepts JPG or PNG files for main capsules. High-quality JPG is recommended for complex artwork.'
    },
    {
      question: 'Why are HD target sizes larger than display dimensions?',
      answer: 'Steam automatically downscales high-density images (such as 920x430 for Header Capsule) to match modern high-DPI and 4K desktop screens without losing sharpness.'
    },
    {
      question: 'Where is the price tag located on Steam store capsules?',
      answer: 'Price tags and discount badges are positioned in the bottom-right corner of store capsules. Keep title text and important logos away from this region.'
    }
  ],
  howTo: [
    {
      name: 'Upload High-Resolution Artwork',
      text: 'Select a high-density promotional visual using the uploader.'
    },
    {
      name: 'Adjust Focal Point and Zoom',
      text: 'Use the horizontal and vertical focal point sliders to align character faces or logo focal points inside the composition box.'
    },
    {
      name: 'Verify Safe Zone Overlays',
      text: 'Toggle Safe Zone Guides to verify that no title text or focal elements are covered by Steam price badges or UI buttons.'
    },
    {
      name: 'Export Complete Steam Asset Package',
      text: 'Click Download All Steam Assets to download a ZIP archive containing all formatted capsule images ready for Steamworks.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam Capsule & Art Preview Generator',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What file format should I use for Steam capsules?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam accepts JPG or PNG files for main capsules. High-quality JPG is recommended for complex artwork.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to generate Steam Capsules and Artwork',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Upload High-Resolution Artwork',
          text: 'Select a high-density promotional visual using the uploader.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
