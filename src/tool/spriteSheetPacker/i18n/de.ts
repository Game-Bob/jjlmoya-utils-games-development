import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'sprite-sheet-packer-und-extraktor',
  title: 'Sprite Sheet Packer und Extraktor',
  description:
    'Optimieren Sie die 2D Spielperformance indem Sie einzelne Animationsframes in Texturatlanten packen oder Sprites aus bestehenden Sheets extrahieren.',
  ui: {
    packerTab: 'Packer Studio',
    extractorTab: 'Sprite Extraktor',
    dropZoneTitle: 'Frames hierher ziehen',
    dropZoneSubtitle: 'Laden Sie PNG oder WebP Bilder hoch um Ihren optimierten Texturatlas zu erstellen',
    selectFilesButton: 'Bilder auswählen',
    clearAllButton: 'Arbeitsbereich leeren',
    downloadZipButton: 'Paket herunterladen (ZIP)',
    copyJsonButton: 'Atlas JSON kopieren',
    downloadSheetPngButton: 'Textur PNG herunterladen',
    paddingLabel: 'Frame Abstand (px)',
    borderExtrusionLabel: 'Rand Extrusion (px)',
    maxTextureSizeLabel: 'Maximale Texturgröße',
    powerOfTwoLabel: 'Zweierpotenz erzwingen (POT)',
    trimTransparencyLabel: 'Transparenz zuschneiden',
    exportFormatLabel: 'Engine Zielformat',
    presetPixelArt: 'Pixel Art 16x16 Voreinstellung',
    presetHdUi: 'HD UI Atlas 1024 Voreinstellung',
    presetMobile: 'Mobile WebGL 2048 Voreinstellung',
    formatGenericHash: 'Generisches JSON (Hash)',
    formatGenericArray: 'Generisches JSON (Array)',
    formatUnity: 'Unity 2D Engine',
    formatGodot: 'Godot 2D Engine',
    formatPhaser: 'Phaser / PixiJS Engine',
    formatCss: 'Web Frontend CSS',
    previewTitle: 'Texturatlas Vorschau',
    efficiencyBadge: 'Textureffizienz',
    drawCallsBadge: 'Reduzierte Draw Calls',
    totalFramesBadge: 'Gepackte Frames',
    textureSizeBadge: 'Atlasabmessung',
    flipbookTitle: 'Animations Flipbook Player',
    flipbookFpsLabel: 'Animationsgeschwindigkeit (FPS)',
    playAnimation: 'Sequenz abspielen',
    pauseAnimation: 'Sequenz pausieren',
    extractorModeGrid: 'Feste Gittertrennung',
    extractorModeAlpha: 'Automatische Alpha Kanal Trennung',
    frameWidthLabel: 'Frame Breite (px)',
    frameHeightLabel: 'Frame Höhe (px)',
    marginLabel: 'Randversatz (px)',
    spacingLabel: 'Gitterabstand (px)',
    extractFramesButton: 'Frames extrahieren',
    extractedCountLabel: 'Extrahierte Sprites',
    codeSnippetTitle: 'Engine Integrationscode',
    copySnippetButton: 'Code Snippet kopieren',
    copiedToast: 'In die Zwischenablage kopiert',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Verständnis von GPU Batching und Draw Call Optimierung in 2D Engines',
    },
    {
      type: 'paragraph',
      html: 'In modernen 2D Grafik Pipelines erfordert jedes auf dem Bildschirm gerenderte Bild einen Befehl der CPU an die Grafikkarte GPU der als Draw Call bezeichnet wird. Wenn eine Charakteranimation aus Dutzenden einzelner PNG Dateien besteht muss die Grafikkarte ständig Texturen wechseln.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Draw Call Reduzierung' },
        { value: '4x', label: 'Schnellere GPU Batchverarbeitung' },
        { value: '60 FPS', label: 'Stabiles Ziel auf Mobilgeräten' },
        { value: '100%', label: 'Lokale Verarbeitung im Browser' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Vergleich zwischen Einzelframes und Gepackten Texturatlanten',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Einzelne Framedateien',
          description: 'Separat gespeicherte PNG oder WebP Dateien',
          points: [
            'Erzeugt für jeden einzelnen Frame auf dem Bildschirm einen eigenen Draw Call',
            'Führt zu häufigen Kontextwechseln auf der Grafikkarte',
            'Erhöht die Anzahl der HTTP Anfragen bei Webspielen',
            'Langsamere Bildraten auf mobilen Endgeräten',
          ],
        },
        {
          title: 'Gepackter Texturatlas',
          description: 'Einzelne PNG Grafik kombiniert mit JSON Koordinaten',
          points: [
            'Bündelt hunderte Sprites in einen einzigen GPU Draw Call',
            'Maximiert die Speicherbandbreite und den Durchsatz der Grafikkarte',
            'Reduziert Datei Requests durch Bündelung der Textur mit Metadaten',
            'Sichert flüssige Bildraten auf allen Systemen',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Subpixel Kamerabewegung und Rand Extrusions Mathematik',
    },
    {
      type: 'paragraph',
      html: 'Beim Rendern von Pixel Art Grafiken mit Kamerasynchronisation können benachbarte Frames ineinander verlaufen.',
    },
    {
      type: 'tip',
      title: 'Strategie zur Randextrusion',
      html: 'Wenden Sie 1 bis 2 Pixel Rand Extrusion an um visuelle Artefakte bei Kamerabewegungen zu vermeiden.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Empfohlene Texturgrößen für Mobile und Desktop Engines',
    },
    {
      type: 'table',
      headers: ['Zielplattform', 'Empfohlene Max Größe', 'Zweierpotenz Anforderung', 'Speicherprofil'],
      rows: [
        ['Mobile Webbrowser', '2048 x 2048 px', 'Erforderlich für WebGL 1.0', 'Niedrige Bandbreite'],
        ['Desktop PC / Konsole', '4096 x 4096 px', 'Empfohlen', 'Hohe GPU Kapazität'],
        ['Retro Handhelds', '1024 x 1024 px', 'Erforderlich', 'Strikte VRAM Limits'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Garantiert volle Kompatibilität mit älteren Grafiktreibern und WebGL 1.0',
          con: 'Kann ungenutzten transparenten Raum hinterlassen bei wenigen Sprites',
        },
        {
          pro: 'Ermöglicht automatische Mipmapping Unterstützung für Hardwarefilterung',
          con: 'Erfordert sorgfältige Abstandsanpassungen bei unregelmäßigen Frames',
        },
        {
          pro: 'Optimiert die VRAM Zuweisung innerhalb der Grafikkarte',
          con: 'Erhöht leicht die anfängliche Texturfläche',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Schlüsselbegriffe der Sprite Packing Architektur',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Befehl der CPU an die Grafikkarte zum Rendern von Geometrie und Texturen.',
        },
        {
          term: 'Bin Packing',
          definition: 'Algorithmus zur optimalen Anordnung rechteckiger Elemente in einem Behälter.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Duplizierung der äußeren Kantenpixel zur Vermeidung von Nahtstellen bei Kamerabewegungen.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Sequenzielle Wiedergabe schneller Einzelbilder zur Simulation von Bewegung in 2D Spielen.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Performance Checkliste für Spielentwickler',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Regeln für die Spieleentwicklung',
      html: 'Fassen Sie Charakteranimationen in gemeinsamen Texturatlanten zusammen und schneiden Sie ungenutzte Transparenz zu.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Sprite Sheets für stabile Bildraten optimieren'
    },
    {
      type: 'paragraph',
      html: 'Ein gut gepacktes Sprite Sheet reduziert Texturwechsel und Draw Calls. Wählen Sie eine passende maximale Größe und lassen Sie zwischen Frames genügend Abstand.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Padding, Extrusion und Exportdaten abstimmen',
    },
    {
      type: 'paragraph',
      html: 'Padding schafft Abstand zwischen benachbarten Frames, während Randextrusion die äußeren Pixel wiederholt. Diese Werte wirken zusammen mit Filterung, Mipmaps und Kamerabewegung: Zu wenig Abstand kann Nähte zeigen, zu viel Abstand verschwendet Texturfläche.',
    },
    {
      type: 'paragraph',
      html: 'Prüfen Sie nach dem Packen die erzeugten JSON-Koordinaten in der Ziel-Engine. Ein Atlas ist nur dann brauchbar, wenn Framegröße, Ursprung, Drehung und Transparenz genauso interpretiert werden wie im Export.',
    },
  ],
  faq: [
    {
      question: 'Was ist ein Sprite Sheet und warum ist es für 2D Spiele wichtig?',
      answer:
        'Ein Sprite Sheet ist eine einzelne Bilddatei die mehere kleinere Grafiken enthält.',
    },
    {
      question: 'Wie funktioniert das clientseitige Packen in diesem Tool?',
      answer:
        'Ihre Bilder werden lokal in der HTML5 Canvas API Ihres Browsers verarbeitet.',
    },
    {
      question: 'Kann ich Sprites aus einem bestehenden Sheet extrahieren?',
      answer:
        'Ja. Wechseln Sie in den Extraktor Modus und laden Sie Ihr Sheet hoch.',
    },
  ],
  howTo: [
    {
      name: 'Frames hochladen',
      text: 'Ziehen Sie Ihre Einzelbilder in den Upload Bereich.',
    },
    {
      name: 'Einstellungen konfigurieren',
      text: 'Passen Sie Abstand Extrusion und maximale Texturgröße an.',
    },
    {
      name: 'Vorschau und Export',
      text: 'Prüfen Sie die Animation im Flipbook Player und laden Sie das ZIP Paket herunter.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Sprite Sheet Packer und Extraktor',
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
          name: 'Was ist ein Sprite Sheet und warum ist es für 2D Spiele wichtig?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein Sprite Sheet ist eine einzelne Bilddatei die mehrere kleinere Grafiken enthält.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Wie man Sprite Sheets packt und extrahiert',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Frames hochladen',
          text: 'Ziehen Sie Ihre Einzelbilder in den Upload Bereich.',
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
