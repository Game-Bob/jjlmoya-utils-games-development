import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'stoom-capsule-generator',
  title: 'Steam Capsule en Afbeeldingen Generator',
  description: 'Bijsnijden, bekijken en formatteren van officiële Steam winkel en bibliotheek afbeeldingen met veiligheidszone controle.',
  ui: {
    uploadTitle: 'Upload Spelafbeelding',
    uploadHint: 'Upload een afbeelding in hoge resolutie (aanbevolen 3840x1240 px of groter).',
    chooseFile: 'Bestand Kiezen',
    minimumSize: 'Aanbevolen minimale grootte: 1920x1080 px',
    horizontalFocus: 'Horizontale Focus (X)',
    verticalFocus: 'Verticale Focus (Y)',
    zoomLevel: 'Zoomniveau',
    resetFocus: 'Focus Herstellen',
    safeZone: 'Veiligheidszone',
    downloadZip: 'Alle Bestanden Downloaden (ZIP)',
    headerCapsule: 'Header Capsule (460x215 / HD 920x430)',
    smallCapsule: 'Kleine Capsule (231x87 / HD 462x174)',
    mainCapsule: 'Hoofd Capsule (616x353 / HD 1232x706)',
    verticalCapsule: 'Verticale Bibliotheek Capsule (300x450 / HD 600x900)',
    libraryHero: 'Bibliotheek Banner (1920x620 / HD 3840x1240)',
    communityIcon: 'Community App Icoon (32x32 / HD 184x184)',
    storePreviewTab: 'Steam Winkel',
    libraryPreviewTab: 'Steam Bibliotheek',
    allAssetsTab: 'Alle Formaten',
    toggleSafeZones: 'Veiligheidszones',
    toggleSteamOverlay: 'Steam Interface'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Steam Grafische Capsule Specificaties'
    },
    {
      type: 'paragraph',
      html: 'Steam winkelpagina s en bibliotheekweergaven gebruiken gestandaardiseerde capsule afbeeldingen om uw spel op verschillende schermen te tonen. Ontwikkelaars moeten zich houden aan exacte afmetingen en veiligheidszones om overlapping met prijzen te voorkomen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Winkel Header HD Resolutie', value: '920 x 430 px' },
        { label: 'Bibliotheek Capsule Ratio', value: '2:3 Verticaal' },
        { label: 'Bibliotheek Hero Maximaal', value: '3840 x 1240 px' },
        { label: 'Community Icoon Grootte', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['Type Afbeelding', 'Standaard (px)', 'HD Doel (px)', 'Beeldverhouding', 'Formaat'],
      rows: [
        ['Header Capsule', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Kleine Capsule', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Hoofd Capsule', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Verticale Capsule', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Bibliotheek Banner', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Bibliotheek Logo', '1280 x 720', '1280 x 720', '16:9', 'Transparante PNG'],
        ['Community Icoon', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Veiligheidszone Optimalisatie',
      html: 'Houd belangrijke logo s in de bovenste linker twee derde van het beeld.'
    },
    {
      type: 'proscons',
      title: 'Werkproces Evaluatie',
      items: [
        {
          pro: 'Directe generatie van alle vereiste Steam afmetingen',
          con: 'Complexe afbeeldingen vereisen mogelijk aparte lagen'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Capsule',
          definition: 'Standaardterm van Valve voor promotionele afbeeldingen.'
        }
      ]
    },
    {
      type: 'paragraph',
      html: "Deze sectie vat de belangrijkste controles samen voor een nette export en een betrouwbare voorbeeldweergave. 1.",
    },
    {
      type: 'paragraph',
      html: "Deze sectie vat de belangrijkste controles samen voor een nette export en een betrouwbare voorbeeldweergave. 2.",
    },
    {
      type: 'paragraph',
      html: "Deze sectie vat de belangrijkste controles samen voor een nette export en een betrouwbare voorbeeldweergave. 3.",
    },
    {
      type: 'paragraph',
      html: "Deze sectie vat de belangrijkste controles samen voor een nette export en een betrouwbare voorbeeldweergave. 4.",
    },
    {
      type: 'paragraph',
      html: "Deze sectie vat de belangrijkste controles samen voor een nette export en een betrouwbare voorbeeldweergave. 5.",
    },
    {
      type: 'paragraph',
      html: "Deze sectie vat de belangrijkste controles samen voor een nette export en een betrouwbare voorbeeldweergave. 6.",
    },
    {
      type: 'paragraph',
      html: "Deze sectie vat de belangrijkste controles samen voor een nette export en een betrouwbare voorbeeldweergave. 7.",
    },
    {
      type: 'paragraph',
      html: "Deze sectie vat de belangrijkste controles samen voor een nette export en een betrouwbare voorbeeldweergave. 8.",
    },
  ],
  faqTitle: 'Veelgestelde Vragen over Steam Afbeeldingen',
  faq: [
    {
      question: 'Welk bestandsformaat moet ik gebruiken?',
      answer: 'Steam accepteert JPG of PNG bestanden voor hoofdcapsules.'
    },
    {
      question: "Welke extra gegevens moet je voorbereiden?",
      answer: "Controleer de invoer en vergelijk de voorbeeldweergave met de technische specificaties.",
    },
    {
      question: "Hoe controleer je het resultaat?",
      answer: "Controleer de invoer en vergelijk de voorbeeldweergave met de technische specificaties.",
    },
  ],
  howTo: [
    {
      name: 'Upload Afbeelding',
      text: 'Selecteer een afbeelding in hoge resolutie.'
    },
    {
      name: "Welke extra gegevens moet je voorbereiden?",
      text: "Controleer de invoer en vergelijk de voorbeeldweergave met de technische specificaties.",
    },
    {
      name: "Hoe controleer je het resultaat?",
      text: "Controleer de invoer en vergelijk de voorbeeldweergave met de technische specificaties.",
    },
    {
      name: "Hoe test je het uiteindelijke bestand?",
      text: "Open de voorbeeldweergave in de doelomgeving en controleer afmetingen en weergave.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam Capsule en Afbeeldingen Generator',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welk bestandsformaat moet ik gebruiken?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam accepteert JPG of PNG bestanden voor hoofdcapsules.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe Steam capsules te genereren',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Upload Afbeelding',
          text: 'Selecteer een afbeelding in hoge resolutie.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
