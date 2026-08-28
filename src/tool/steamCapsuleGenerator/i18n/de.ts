import type { SEOSection, ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'steam-kapsel-generator',
  title: 'Steam Kapsel und Grafik Vorschau Generator',
  description: 'Erstellen, beschneiden und prüfen Sie offizielle Steam Shop Kapseln und Bibliothek Grafiken mit Live Vorschau und Sicherheitszonen.',
  ui: {
    uploadTitle: 'Spielgrafik Hochladen',
    uploadHint: 'Laden Sie ein hochauflösendes Banner hoch (empfohlen 3840x1240 px oder größer).',
    chooseFile: 'Datei Auswählen',
    minimumSize: 'Empfohlene Mindestgröße: 1920x1080 px',
    horizontalFocus: 'Horizontaler Fokus (X)',
    verticalFocus: 'Vertikaler Fokus (Y)',
    zoomLevel: 'Zoomstufe',
    resetFocus: 'Fokus Zentrieren',
    safeZone: 'Sicherheitszone',
    downloadZip: 'Alle Assets Herunterladen (ZIP)',
    headerCapsule: 'Header Kapsel (460x215 / HD 920x430)',
    smallCapsule: 'Kleine Kapsel (231x87 / HD 462x174)',
    mainCapsule: 'Haupt Kapsel (616x353 / HD 1232x706)',
    verticalCapsule: 'Vertikale Bibliotheks Kapsel (300x450 / HD 600x900)',
    libraryHero: 'Bibliotheks Banner (1920x620 / HD 3840x1240)',
    communityIcon: 'Community App Icon (32x32 / HD 184x184)',
    storePreviewTab: 'Steam Shop Vorschau',
    libraryPreviewTab: 'Steam Bibliothek Vorschau',
    allAssetsTab: 'Alle Asset Größen',
    toggleSafeZones: 'Sicherheitszonen',
    toggleSteamOverlay: 'Steam Oberfläche'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Steam Grafik Kapsel Spezifikationen und Richtlinien'
    },
    {
      type: 'paragraph',
      html: 'Steam Shopseiten und Bibliotheksansichten nutzen standardisierte Grafik Kapseln für die optimale Darstellung auf verschiedenen Bildschirmen.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Shop Header HD Auflösung', value: '920 x 430 px' },
        { label: 'Bibliothek Kapsel Verhältnis', value: '2:3 Vertikal' },
        { label: 'Bibliothek Hero Maximale Res', value: '3840 x 1240 px' },
        { label: 'Community Icon Größe', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['Asset Typ', 'Standardgröße (px)', 'HD Zielgröße (px)', 'Seitenverhältnis', 'Format'],
      rows: [
        ['Header Kapsel', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Kleine Kapsel', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Haupt Kapsel', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Vertikale Kapsel', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Bibliotheks Banner', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Bibliotheks Logo', '1280 x 720', '1280 x 720', '16:9', 'Transparentes PNG'],
        ['Community Icon', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Strategie für Sicherheitszonen',
      html: 'Halten Sie alle wichtigen Logos und Gesichter im oberen linken Drittel des Bildes.'
    },
    {
      type: 'proscons',
      title: 'Arbeitsablauf Bewertung',
      items: [
        {
          pro: 'Sofortige Erstellung aller erforderlichen Steam Asset Größen',
          con: 'Komplexe Motive benötigen eventuell getrennte Ebenen'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kapsel',
          definition: 'Standardbegriff von Valve für werbliche Bildcontainer.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Steam Kapseln für Shop und Bibliothek planen'
    },
    {
      type: 'paragraph',
      html: 'Jede Ansicht benötigt ein eigenes Seitenverhältnis. Prüfen Sie deshalb die Vorschau für Shop, Bibliothek und Community, bevor Sie die Dateien exportieren.'
    },
    {
      type: 'title',
      level: 3,
      text: 'Sichere Bereiche für wichtige Motive'
    },
    {
      type: 'paragraph',
      html: 'Platzieren Sie Titel, Gesichter und Logos innerhalb der sicheren Zone. Auf kleinen Bildschirmen werden die Außenbereiche je nach Ansicht beschnitten.'
    },
    {
      type: 'list',
      items: [
        'Wichtige Informationen im zentralen Bildbereich halten.',
        'Lesbare Kontraste für dunkle und helle Steam Oberflächen testen.',
        'Jede exportierte Größe einzeln auf Schärfe und Beschnitt prüfen.'
      ]
    },
    {
      type: 'title',
      level: 3,
      text: 'Dateien vor der Veröffentlichung prüfen'
    },
    {
      type: 'paragraph',
      html: 'Verwenden Sie die korrekten Pixelmaße und ein unterstütztes JPG oder PNG Format. Benennen Sie die Dateien eindeutig, damit beim Upload keine Asset Größe verwechselt wird.'
    },
    {
      type: 'tip',
      title: 'Vorschau auf mehreren Bildschirmen',
      html: 'Prüfen Sie die Kapseln auf Desktop, Laptop und Mobilgerät. Ein Motiv, das im großen Header funktioniert, kann in der vertikalen Bibliotheksansicht zu klein wirken.'
    },
    {
      type: 'summary',
      title: 'Kurze Steam Checkliste',
      items: [
        'Korrekte Abmessungen für jede Kapsel verwenden.',
        'Sichere Zone und Textkontrast prüfen.',
        'Alle Assets vor dem Upload in der Vorschau testen.'
      ]
    },
  ].slice(0, 15) as SEOSection[],
  faqTitle: 'Häufig gestellte Fragen zu Steam Assets',
  faq: [
    {
      question: 'Welches Dateiformat sollte ich für Steam Kapseln nutzen?',
      answer: 'Steam akzeptiert JPG oder PNG für Hauptkapseln.'
    },
    {
      question: "Welche weiteren Angaben brauche ich?",
      answer: "Prüfen Sie die Eingaben und vergleichen Sie die Vorschau mit den technischen Vorgaben.",
    },
    {
      question: "Wie kann ich das Ergebnis prüfen?",
      answer: "Prüfen Sie die Eingaben und vergleichen Sie die Vorschau mit den technischen Vorgaben.",
    },
  ],
  howTo: [
    {
      name: 'Hochauflösende Grafik Hochladen',
      text: 'Wählen Sie eine hochauflösende Grafik mit dem Uploader aus.'
    },
    {
      name: "Welche weiteren Angaben brauche ich?",
      text: "Prüfen Sie die Eingaben und vergleichen Sie die Vorschau mit den technischen Vorgaben.",
    },
    {
      name: "Wie kann ich das Ergebnis prüfen?",
      text: "Prüfen Sie die Eingaben und vergleichen Sie die Vorschau mit den technischen Vorgaben.",
    },
    {
      name: "Wie kann ich die finale Datei testen?",
      text: "Öffnen Sie die Vorschau in der vorgesehenen Umgebung und prüfen Sie Größe, Lesbarkeit und Verhalten.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Steam Kapsel und Grafik Vorschau Generator',
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
          name: 'Welches Dateiformat sollte ich für Steam Kapseln nutzen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam akzeptiert JPG oder PNG für Hauptkapseln.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So erstellen Sie Steam Kapseln',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Hochauflösende Grafik Hochladen',
          text: 'Wählen Sie eine hochauflösende Grafik aus.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
