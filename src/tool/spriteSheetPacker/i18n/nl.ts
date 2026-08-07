import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'sprite-sheet-packer-en-extractor',
  title: 'Sprite Sheet Packer en Extractor',
  description:
    'Optimaliseer 2D game prestaties door afzonderlijke animatie frames samen te voegen in textuur atlassen of sprites te extraheren uit bestaande sheets.',
  ui: {
    packerTab: 'Packer Studio',
    extractorTab: 'Sprite Extractor',
    dropZoneTitle: 'Sleep Frames Hierheen',
    dropZoneSubtitle: 'Upload PNG of WebP afbeeldingen om een geoptimaliseerde textuuratlas te genereren',
    selectFilesButton: 'Selecteer Afbeeldingen',
    clearAllButton: 'Werkruimte Wissen',
    downloadZipButton: 'Pakket Downloaden (ZIP)',
    copyJsonButton: 'Atlas JSON Kopiëren',
    downloadSheetPngButton: 'Textuur PNG Downloaden',
    paddingLabel: 'Frame Afstand (px)',
    borderExtrusionLabel: 'Rand Extrusie (px)',
    maxTextureSizeLabel: 'Maximale Textuur Dimensie',
    powerOfTwoLabel: 'Macht van 2 Forceren (POT)',
    trimTransparencyLabel: 'Transparantie Bijsnijden',
    exportFormatLabel: 'Doel Engine Formaat',
    presetPixelArt: 'Pixel Art 16x16 Preset',
    presetHdUi: 'HD UI Atlas 1024 Preset',
    presetMobile: 'Mobiel WebGL 2048 Preset',
    formatGenericHash: 'Generieke JSON (Hash)',
    formatGenericArray: 'Generieke JSON (Array)',
    formatUnity: 'Unity 2D Engine',
    formatGodot: 'Godot 2D Engine',
    formatPhaser: 'Phaser / PixiJS Engine',
    formatCss: 'Web Frontend CSS',
    previewTitle: 'Textuur Atlas Voorbeeld',
    efficiencyBadge: 'Textuur Efficiëntie',
    drawCallsBadge: 'Gereduceerde Draw Calls',
    totalFramesBadge: 'Gepakte Frames',
    textureSizeBadge: 'Atlas Afmeting',
    flipbookTitle: 'Animatie Flipbook Speler',
    flipbookFpsLabel: 'Animatie Snelheid (FPS)',
    playAnimation: 'Afspelen',
    pauseAnimation: 'Pauzeren',
    extractorModeGrid: 'Vaste Raster Uitsnede',
    extractorModeAlpha: 'Automatische Alpha Kanaal Uitsnede',
    frameWidthLabel: 'Frame Breedte (px)',
    frameHeightLabel: 'Frame Hoogte (px)',
    marginLabel: 'Marge Offset (px)',
    spacingLabel: 'Raster Afstand (px)',
    extractFramesButton: 'Frames Extraheren',
    extractedCountLabel: 'Geëxtraheerde Sprites',
    codeSnippetTitle: 'Engine Integratie Code',
    copySnippetButton: 'Code Kopiëren',
    copiedToast: 'Gekopieerd naar Klembord',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'GPU Batching en Draw Call Optimalisatie in 2D Game Engines',
    },
    {
      type: 'paragraph',
      html: 'Het samenvoegen van losse afbeeldingen tot één textuuratlas vermindert het aantal draw calls dat de CPU naar de videokaart stuurt aanzienlijk.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Reductie van Draw Calls' },
        { value: '4x', label: 'Snellere GPU Verwerking' },
        { value: '60 FPS', label: 'Stabiel Doel op Mobiel' },
        { value: '100%', label: 'Lokale Verwerking in Browser' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Losse Afbeeldingen vs Gecomprimeerde Textuur Atlassen',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Losse Animatie Bestanden',
          description: 'Afzonderlijk opgeslagen PNG bestanden',
          points: [
            'Genereert een afzonderlijke draw call voor elk frame op het scherm',
            'Veroorzaakt frequente wissels op de grafische kaart GPU',
            'Verhoogt het aantal netwerkverzoeken bij web games',
            'Lagere framerates op mobiele apparaten',
          ],
        },
        {
          title: 'Gepakte Textuur Atlas',
          description: 'Enkele PNG afbeelding gekoppeld aan JSON metadata',
          points: [
            'Bundelt honderden sprites in één enkele GPU draw call',
            'Optimaliseert het geheugengebruik en de grafische snelheid',
            'Vermindert bestandsverzoeken door textuur en gegevens te bundelen',
            'Garanteert vloeiende 60 FPS prestaties op alle platforms',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Subpixel Camerabeweging en Rand Extrusie',
    },
    {
      type: 'paragraph',
      html: 'Het toepassen van 1 tot 2 pixels rand extrusie kopieert de buitenste randpixels om visuele randfouten bij camerabewegingen te voorkomen.',
    },
    {
      type: 'tip',
      title: 'Strategie voor Rand Extrusie',
      html: 'Gebruik rand extrusie om randfouten bij camerabewegingen in 2D games volledig te elimineren.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Aanbevolen Textuur Afmetingen voor Verschillende Platformen',
    },
    {
      type: 'table',
      headers: ['Doelplatform', 'Aanbevolen Max Grootte', 'Macht van 2 Vereist', 'Geheugenprofiel'],
      rows: [
        ['Mobiele Browsers', '2048 x 2048 px', 'Verplicht voor WebGL 1.0', 'Lage Bandbreedte'],
        ['Desktop PC / Console', '4096 x 4096 px', 'Aanbevolen', 'Hoge GPU Capaciteit'],
        ['Retro Handhelds', '1024 x 1024 px', 'Strikte Vereiste', 'Strikte VRAM Limieten'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Garanteert volledige compatibiliteit met oudere grafische stuurprogramma s en WebGL 1.0',
          con: 'Kan ongebruikte transparante ruimte achterlaten bij weinig sprites',
        },
        {
          pro: 'Ondersteunt automatische hardware mipmapping',
          con: 'Vereist nauwkeurige afstelling bij onregelmatige afmetingen',
        },
        {
          pro: 'Optimaliseert VRAM geheugentoewijzing op de GPU',
          con: 'Verhoogt de initiële textuuroppervlakte licht',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Kernbegrippen bij Sprite Packing',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Een commando van de CPU naar de GPU om een groep textures te renderen.',
        },
        {
          term: 'Bin Packing',
          definition: 'Een algoritme om rechthoekige vormen efficiënt in een minimale ruimte te schikken.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Het kopiëren van randpixels naar buiten om visuele naden bij camerabewegingen te voorkomen.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Het snel achter elkaar afspelen van opeenvolgende beelden om beweging te simuleren.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Prestatie Controlelijst voor Game Developers',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Productieregels',
      html: 'Groepeer animaties in gedeelde atlassen en gebruik machten van twee voor WebGL builds.',
    },
  ],
  faq: [
    {
      question: 'Wat is een sprite sheet en waarom is het belangrijk?',
      answer:
        'Een sprite sheet is één afbeelding die meerdere animatie beelden bevat.',
    },
    {
      question: 'Hoe werkt de lokale verwerking in deze tool?',
      answer:
        'Alle verwerking vindt lokaal in uw browser plaats via de HTML5 Canvas API.',
    },
    {
      question: 'Kan ik beelden uit een bestaande sprite sheet halen?',
      answer:
        'Ja. Schakel over naar de Extractor modus en stel de rastergrootte in.',
    },
  ],
  howTo: [
    {
      name: 'Bestanden Uploaden',
      text: 'Sleep uw PNG of WebP bestanden naar de uploadzone.',
    },
    {
      name: 'Instellingen Aanpassen',
      text: 'Stel de afstand, rand extrusie en maximale grootte in.',
    },
    {
      name: 'Controleren en Downloaden',
      text: 'Bekijk de animatie in de speler en download het ZIP pakket.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Sprite Sheet Packer en Extractor',
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
          name: 'Wat is een sprite sheet en waarom is het belangrijk?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Een sprite sheet is één afbeelding die meerdere animatie beelden bevat.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe sprite sheets in te pakken en te extraheren',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Bestanden Uploaden',
          text: 'Sleep uw PNG of WebP bestanden naar de uploadzone.',
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
