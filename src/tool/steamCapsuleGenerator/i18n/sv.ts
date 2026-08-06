import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'steam-kapsel-skapare',
  title: 'Steam Kapsel och Grafik Generator',
  description: 'Beskär, förhandsgranska och formatera officiella Steam butiks och bibliotekskapslar med säkerhetszonskontroll.',
  ui: {
    uploadTitle: 'Ladda Upp Spelgrafik',
    uploadHint: 'Ladda upp en högupplöst bild (rekommenderas 3840x1240 px eller större).',
    chooseFile: 'Välj Fil',
    minimumSize: 'Rekommenderad minsta storlek: 1920x1080 px',
    horizontalFocus: 'Horisontellt Fokus (X)',
    verticalFocus: 'Vertikalt Fokus (Y)',
    zoomLevel: 'Zoomnivå',
    resetFocus: 'Återställ Fokus',
    safeZone: 'Säker Zon',
    downloadZip: 'Ladda Ner Alla Filer (ZIP)',
    headerCapsule: 'Headerkapsel (460x215 / HD 920x430)',
    smallCapsule: 'Liten Kapsel (231x87 / HD 462x174)',
    mainCapsule: 'Huvudkapsel (616x353 / HD 1232x706)',
    verticalCapsule: 'Vertikal Bibliotekskapsel (300x450 / HD 600x900)',
    libraryHero: 'Biblioteksbanner (1920x620 / HD 3840x1240)',
    communityIcon: 'Community Appikon (32x32 / HD 184x184)',
    storePreviewTab: 'Steam Butik',
    libraryPreviewTab: 'Steam Bibliotek',
    allAssetsTab: 'Alla Storlekar',
    toggleSafeZones: 'Säkerhetszoner',
    toggleSteamOverlay: 'Steam Gränssnitt'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Steam Grafik Kapsel Specifikationer'
    },
    {
      type: 'paragraph',
      html: 'Steam butikssidor och bibliotek använder standardiserade kapselbilder.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Butik Header HD Upplösning', value: '920 x 430 px' },
        { label: 'Biblioteks Kapsel Proportion', value: '2:3 Vertikal' },
        { label: 'Biblioteks Banner Max', value: '3840 x 1240 px' },
        { label: 'Community Ikon Storlek', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['Grafiktyp', 'Standard (px)', 'HD Mål (px)', 'Proportion', 'Format'],
      rows: [
        ['Headerkapsel', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Liten Kapsel', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Huvudkapsel', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Vertikal Kapsel', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Biblioteksbanner', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Bibliotekslogotyp', '1280 x 720', '1280 x 720', '16:9', 'Transparent PNG'],
        ['Community Ikon', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Optimering av Säkerhetszoner',
      html: 'Håll alla viktiga logotyper i övre vänstra två tredjedelarna av bilden.'
    },
    {
      type: 'proscons',
      title: 'Arbetsflödesutvärdering',
      items: [
        {
          pro: 'Direkt generering av alla erforderliga Steamworks storlekar',
          con: 'Komplexa bilder kan kräva separata lager'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kapsel',
          definition: 'Valves standardterm för marknadsföringsbilder.'
        }
      ]
    }
  ],
  faqTitle: 'Vanliga Frågor om Steam Grafik',
  faq: [
    {
      question: 'Vilket filformat ska jag använda?',
      answer: 'Steam accepterar JPG eller PNG filer för huvudkapslar.'
    }
  ],
  howTo: [
    {
      name: 'Ladda Upp Bild',
      text: 'Välj en högupplöst bild.'
    }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam Kapsel och Grafik Generator',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'SEK'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Vilket filformat ska jag använda?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam accepterar JPG eller PNG filer.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man skapar Steam kapslar',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Ladda Upp Bild',
          text: 'Välj en högupplöst bild.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
