import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'pixel-art-palette-tauscher',
  title: 'Pixel Art Palette Tauscher',
  description: 'Reduzieren Sie Sprites und Spritesheets auf klassische Konsolenpaletten oder eigene Hex-Farben direkt in Ihrem Browser.',
  ui: {
    uploadTitle: 'Sprite oder Spritesheet ablegen',
    uploadHint: 'PNG, JPEG oder WebP bleiben auf Ihrem Gerät',
    chooseImage: 'Bild auswählen',
    replaceImage: 'Bild ersetzen',
    paletteTitle: 'Palette wählen',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'NES inspiriert',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Benutzerdefinierte Farben',
    customPaletteHint: 'Trennen Sie Hex-Werte durch Kommas, Leerzeichen oder Zeilenumbrüche.',
    applyCustomPalette: 'Palette anwenden',
    resetCustomPalette: 'Zurücksetzen',
    sourcePreview: 'Original',
    resultPreview: 'Reduziertes Ergebnis',
    waitingForImage: 'Warten auf ein Bild',
    uploadToPreview: 'Laden Sie ein Bild hoch, um es vorzuschauen',
    resultEmpty: 'Original und reduzierte Version erscheinen nebeneinander.',
    downloadPng: 'PNG herunterladen',
    downloadDisabled: 'Bild hochladen zum Exportieren.',
    colorCount: 'Quellfarben',
    mappedCount: 'Verwendete Farben',
    imageSize: 'Bildgröße',
    paletteCount: 'Palettenfarben',
    preserveAlpha: 'Transparenz erhalten',
    zoomLabel: 'Zoom',
    processing: 'Pixel werden zugeordnet',
    invalidPalette: 'Mindestens eine gültige Hex-Farbe eingeben',
    invalidImage: 'Wählen Sie ein PNG-, JPEG- oder WebP-Bild',
    readyStatus: 'Bereit',
    dropActive: 'Zum Laden loslassen',
    mappedSummary: '{source} Quellfarben auf {mapped} Palettenfarben abgebildet',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Verwandeln Sie Vollfarb-Sprites in Gezielte Retro-Paletten',
    },
    {
      type: 'paragraph',
      html: 'Eine begrenzte Palette ist mehr als eine technische Einschränkung. Sie verleiht einem Sprite eine wiedererkennbare Farbsprache, lässt Szenen wie aus einem Guss wirken und erinnert an den visuellen Charakter einer bestimmten Konsole oder Fantasie-Hardware. Dieser browserbasierte Palette-Swapper ermöglicht es Ihnen, das Quellbild mit einer reduzierten Version zu vergleichen, während Sie mit Game Boy, NES-inspirierten, PICO-8, Commodore 64, DawnBringer 16 und eigenen Paletten experimentieren.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Funktionsweise der Nächstgelegenen Farbreduktion',
    },
    {
      type: 'paragraph',
      html: 'Das Werkzeug liest die Rot-, Grün- und Blaukanäle für jeden sichtbaren Pixel und vergleicht diese Farbe mit jeder Farbe der ausgewählten Palette. Es wählt den Paletteneintrag mit dem geringsten quadratischen RGB-Abstand aus und schreibt die Ersatzfarbe in einen neuen Canvas-Puffer. Der Alphakanal bleibt getrennt, sodass transparente Pixel transparent bleiben und halbtransparente Kanten ihre ursprüngliche Deckkraft behalten, wenn Transparenz erhalten aktiviert ist.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Palettenbegrenzung',
          description: 'Jede Quellfarbe wird durch den nächstgelegenen verfügbaren Farbton ersetzt.',
          points: [
            'Schnell und vorhersehbar für Sprites, Icons, Tilesets und UI-Grafiken',
            'Behält ursprüngliche Maße und Pixelpositionen exakt bei',
            'Ermöglicht eine übersichtliche Kontrolle des festgelegten Farbbudgets',
          ],
        },
        {
          title: 'Palette Swapping',
          description: 'Das gleiche Artwork kann auf ein anderes sorgfältig gewähltes Farbset neu abgebildet werden.',
          points: [
            'Nützlich für alternative Kostüme, Biome und Schadenszustände',
            'Benutzerdefinierte Hex-Listen passen sich Ihrer eigenen Art-Direction an',
            'Das heruntergeladene PNG kann direkt in Ihren Editor importiert werden',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Wahl Einer Palette für Pixel Art',
    },
    {
      type: 'table',
      headers: ['Palette', 'Farben', 'Eignung', 'Beachten'],
      rows: [
        ['Game Boy', '4', 'Monochromer Handheld-Stil und starke Tonwertstudien', 'Geringer Kontrast kann nahe beieinander liegende Materialien verschmelzen'],
        ['NES inspiriert', '16', 'Markante Arcade-Sprites, Charaktere und Tilesets', 'Sehr helle Töne können kleine Details überdecken'],
        ['PICO-8', '16', 'Modernes Pixel Art mit kräftigen Farb-Akzenten', 'Hohe Sättigung erfordert gezielt eingesetzten Kontrast'],
        ['Commodore 64', '16', 'Dezente Retro-Szenen und Computergame-Ästhetik', 'Niedriger Kontrast profitiert von klaren Silhouetten'],
        ['DawnBringer 16', '16', 'Vielseitige handverlesene Palette für allgemeine Pixel-Grafik', 'Farbrampen benötigen weiterhin eine bewusste Lichtrichtung'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktischer Workflow für Spritesheets',
    },
    {
      type: 'paragraph',
      html: 'Beginnen Sie mit der größten Quellgrafik, die Sie komfortabel bearbeiten können, und laden Sie das exportierte Sprite oder Spritesheet hier hoch. Wählen Sie eine Voreinstellung, um eine Stilrichtung festzulegen, oder fügen Sie eine eigene Hex-Liste ein. Prüfen Sie beide Bildflächen bei höherem Zoom auf verlorene Gesichtszüge, verschmolzene Konturen oder Highlights. Wenn das Ergebnis matschig wirkt, versuchen Sie eine Palette mit stärkeren Tonwertstufen oder fügen Sie eine gezielte Akzentfarbe hinzu.',
    },
    {
      type: 'tip',
      title: 'Palette Bewusst Wählen',
      html: 'Eine größere Farbliste ist nicht automatisch besser. Beginnen Sie mit vier bis sechzehn Farben, weisen Sie jeder Farbe eine klare Aufgabe zu und reservieren Sie die hellsten Werte für Fokusspunkte oder gut lesbare Highlights. Der Algorithmus behält die Pixelpositionen bei, kann aber nicht entscheiden, welche Farben die visuelle Hierarchie Ihres Sprites tragen sollen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Export-Checkliste für Pixel Art',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Vor dem Import der reduzierten PNG Datei',
      html: 'Überprüfen Sie das Ergebnis bei 100 Prozent sowie im finalen Spielmaßstab, stellen Sie sicher, dass transparente Ränder sauber bleiben, prüfen Sie die Lesbarkeit wichtiger Silhouetten und bewahren Sie die ursprüngliche Quelldatei neben dem Export auf, um die Palette anzupassen ohne von vorn beginnen zu müssen.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Farbquantisierung',
          definition: 'Der Prozess der Reduzierung einer großen Menge an Quellfarben auf ein kleineres, fest definiertes Farbset.',
        },
        {
          term: 'Farbrampe',
          definition: 'Eine zusammenhängende Folge von dunklen, mittleren und hellen Farben zur Schattierung einer Oberfläche.',
        },
        {
          term: 'Indizierte Palette',
          definition: 'Eine kompakte Farbtabelle, bei der Bildpixel auf Einträge in einer gemeinsamen Liste verweisen, anstatt vollständige Farbwerte zu speichern.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Werden meine Bilder auf einen Server hochgeladen?',
      answer: 'Nein. Das Bild wird in Ihrem Browser auf einem Canvas decodiert, lokal mit JavaScript verarbeitet und direkt als PNG exportiert. Das Werkzeug enthält keinen Hochladevorgang.',
    },
    {
      question: 'Kann ich meine eigene Palette verwenden?',
      answer: 'Ja. Füge 6-stellige oder 3-stellige Hex-Farbcodes durch Kommas, Leerzeichen oder Zeilenumbrüche getrennt in das Feld für benutzerdefinierte Farben ein und wähle Palette anwenden.',
    },
    {
      question: 'Wird die Größe meines Sprites oder Spritesheets verändert?',
      answer: 'Nein. Die Ausgabedatei behält die ursprüngliche Breite, Höhe, Pixelpositionen und Alpha-Werte bei, wenn Transparenz erhalten aktiviert ist.',
    },
    {
      question: 'Welcher Algorithmus wird verwendet?',
      answer: 'Jeder sichtbare Pixel wird der nächstgelegenen Farbe der ausgewählten Palette mithilfe des quadratischen euklidischen Abstands im RGB-Raum zugewiesen. Es ist schnell, deterministisch und einfach vorzuschauen, wendet jedoch kein Dithering oder eine perzeptive Lab-Farbkorrektur an.',
    },
  ],
  howTo: [
    {
      name: 'Sprite laden',
      text: 'Ziehen Sie ein PNG-, JPEG- oder WebP-Sprite oder Spritesheet in den Arbeitsbereich oder nutzen Sie Bild auswählen.',
    },
    {
      name: 'Palette wählen',
      text: 'Wählen Sie eine klassische Voreinstellung oder geben Sie eigene Hex-Farben ein. Das Ergebnis aktualisiert sich sofort nach dem Anwenden.',
    },
    {
      name: 'Vergleichen und exportieren',
      text: 'Inspeizieren Sie das Original und das reduzierte Bild, passen Sie den Vorschau-Zoom an und laden Sie das Ergebnis als PNG herunter.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pixel Art Palette Tauscher',
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
          name: 'Werden meine Bilder auf einen Server hochgeladen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Das Bild wird lokal im Browser verarbeitet und direkt als PNG exportiert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich meine eigene Palette verwenden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Füge Hex-Farbcodes in das entsprechende Feld ein und wähle Palette anwenden.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Wie man ein Sprite auf eine Retro-Palette reduziert',
      step: [
        { '@type': 'HowToStep', name: 'Sprite laden', text: 'Ziehen Sie ein Bild in den Arbeitsbereich.' },
        { '@type': 'HowToStep', name: 'Palette wählen', text: 'Wählen Sie ein Preset oder geben Sie Hex-Farben ein.' },
        { '@type': 'HowToStep', name: 'Vergleichen und exportieren', text: 'Prüfen Sie das Ergebnis und laden Sie das PNG herunter.' },
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
