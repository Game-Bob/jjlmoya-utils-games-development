import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'sprite-sheet-packer-och-extraktor',
  title: 'Sprite Sheet Packer och Extraktor',
  description:
    'Optimera 2D spelprestanda genom att packa enskilda animeringsbilder i texturatlaser eller extrahera sprites från befintliga sheets.',
  ui: {
    packerTab: 'Packer Studio',
    extractorTab: 'Sprite Extraktor',
    dropZoneTitle: 'Dra och Släpp Bildrutor',
    dropZoneSubtitle: 'Ladda upp PNG eller WebP bilder för att generera din optimerade texturatlas',
    selectFilesButton: 'Välj Bildfiler',
    clearAllButton: 'Rensa Arbetsyta',
    downloadZipButton: 'Ladda ner Paket (ZIP)',
    copyJsonButton: 'Kopiera Atlas JSON',
    downloadSheetPngButton: 'Ladda ner Textur PNG',
    paddingLabel: 'Marginal mellan bildrutor (px)',
    borderExtrusionLabel: 'Kanthelt Extrudering (px)',
    maxTextureSizeLabel: 'Maximal Texturstorlek',
    powerOfTwoLabel: 'Tvinga Potens av 2 (POT)',
    trimTransparencyLabel: 'Beskär Genomskinlighet',
    exportFormatLabel: 'Målspelsmotor Format',
    presetPixelArt: 'Pixel Art 16x16 Preset',
    presetHdUi: 'HD UI Atlas 1024 Preset',
    presetMobile: 'Mobil WebGL 2048 Preset',
    formatGenericHash: 'Generisk JSON (Hash)',
    formatGenericArray: 'Generisk JSON (Array)',
    formatUnity: 'Unity 2D Engine',
    formatGodot: 'Godot 2D Engine',
    formatPhaser: 'Phaser / PixiJS Engine',
    formatCss: 'Web Frontend CSS',
    previewTitle: 'Texturatlas Förhandsgranskning',
    efficiencyBadge: 'Textureffektivitet',
    drawCallsBadge: 'Minskade Draw Calls',
    totalFramesBadge: 'Packade Bildrutor',
    textureSizeBadge: 'Atlasdimension',
    flipbookTitle: 'Animeringsspelare Flipbook',
    flipbookFpsLabel: 'Animeringshastighet (FPS)',
    playAnimation: 'Spela Sekvens',
    pauseAnimation: 'Pausa',
    extractorModeGrid: 'Fast Rutnätsuppdelning',
    extractorModeAlpha: 'Automatisk Alfa Kanal Uppdelning',
    frameWidthLabel: 'Bildrutans Bredd (px)',
    frameHeightLabel: 'Bildrutans Höjd (px)',
    marginLabel: 'Yttre Marginal (px)',
    spacingLabel: 'Rutnätsavstånd (px)',
    extractFramesButton: 'Extrahera Bildrutor',
    extractedCountLabel: 'Extraherade Sprites',
    codeSnippetTitle: 'Integreringskod för Spelmotor',
    copySnippetButton: 'Kopiera Kod',
    copiedToast: 'Kopierat till Urklipp',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Förståelse för GPU Batching och Optimering av Draw Calls i 2D Spelmotorer',
    },
    {
      type: 'paragraph',
      html: 'Att samla enskilda bildrutor i en gemensam texturatlas minskar antalet anrop som skickas från processorn CPU till grafikkortet GPU.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Minskning av Draw Calls' },
        { value: '4x', label: 'Snabbare GPU Bearbetning' },
        { value: '60 FPS', label: 'Stabilt Mål på Mobila Enheter' },
        { value: '100%', label: 'Lokal Bearbetning i Webbläsaren' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Jämförelse mellan Enskilda Filer och Packade Texturatlaser',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Enskilda Bildrutefiler',
          description: 'Fristående PNG eller WebP filer på disken',
          points: [
            'Genererar ett separat renderanrop för varje enskild bildruta på skärmen',
            'Orsakar täta kontextbyten på grafikkortet GPU',
            'Ökar antalet HTTP förfrågningar för webbaserade spel',
            'Sänker bildhastigheten på mobila enheter',
          ],
        },
        {
          title: 'Packad Texturatlas',
          description: 'Enkel PNG bild kombinerad med JSON koordinatdata',
          points: [
            'Buntar ihop hundratals sprites i ett enda GPU renderanrop',
            'Maximerar minnesbandbredd och grafisk återgivningshastighet',
            'Minskar nätverksanrop genom att bunta ihop bild och data',
            'Garanterar jämn 60 FPS på alla plattformar',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Subpixel Kamerarörelse och Kantextruderingsmatematik',
    },
    {
      type: 'paragraph',
      html: 'Att lägga till 1 till 2 pixlars kantextrudering kopierar de yttre kantpixlarna utåt för att förhindra synliga skarvar vid kamerarörelser.',
    },
    {
      type: 'tip',
      title: 'Strategie för Kantextrudering',
      html: 'Använd kantextrudering för att helt eliminera kantartefakter vid kamerarörelser i 2D spel.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Rekommenderade Texturstorlekar för Olika Plattformar',
    },
    {
      type: 'table',
      headers: ['Målplattform', 'Rekommenderad Maxstorlek', 'Krav på Potens av 2', 'Minnesprofil'],
      rows: [
        ['Mobila Webbläsare', '2048 x 2048 px', 'Obligatoriskt för WebGL 1.0', 'Låg Bandbredd'],
        ['Dator PC / Konsol', '4096 x 4096 px', 'Rekommenderas', 'Hög GPU Kapacitet'],
        ['Retro Handhållna Konsoler', '1024 x 1024 px', 'Strikt Krav', 'Strikta VRAM Gränser'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Garanterar full kompatibilitet med äldre grafikdrivrutiner och WebGL 1.0',
          con: 'Kan lämna oanvänt genomskinligt utrymme vid få sprites',
        },
        {
          pro: 'Stöder automatisk generering av mipmaps i hårdvaran',
          con: 'Kräver noggrann marginaljustering vid oregelbundna former',
        },
        {
          pro: 'Optimerar VRAM minnesallokering på grafikkortet',
          con: 'Ökar den initiala texturytan något',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Viktiga Begrepp inom Sprite Packning',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Ett kommando från processorn till grafikkortet att rita geometri och texturer.',
        },
        {
          term: 'Bin Packing',
          definition: 'En algoritm för att arrangera rektangulära objekt optimalt i en minimal yta.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Duplicering av yttre kantpixlar utåt för att förhindra synliga skarvar vid kamerarörelser.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Snabb sekventiell uppspelning av bildrutor för att simulera kontinuerlig rörelse i 2D spel.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Checklista för Prestanda',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Produktionsregler',
      html: 'Gruppera animationer i gemensamma atlaser och använd potenser av två för WebGL byggen.',
    },
    {
      type: 'paragraph',
      html: "Det här avsnittet samlar de viktigaste kontrollerna för en ren export och en pålitlig förhandsvisning. 1.",
    },
    {
      type: 'paragraph',
      html: "Det här avsnittet samlar de viktigaste kontrollerna för en ren export och en pålitlig förhandsvisning. 2.",
    },
    { type: 'title', level: 2, text: 'Samordna padding, kantutdragning och exportdata' },
    { type: 'paragraph', html: 'Padding separerar närliggande bildrutor medan kantutdragning upprepar pixlarna vid kanten. Bedöm värdena tillsammans med filtrering, mipmap och kamerarörelser: för lite avstånd skapar sömmar och för mycket avstånd slösar texturyta.' },
    { type: 'paragraph', html: 'Kontrollera JSON-koordinaterna i målmotorn efter packningen. Ett atlasark är tillförlitligt först när bildrutans storlek, ursprung, rotation och transparens tolkas på samma sätt som i den exporterade filen.' },
    { type: 'paragraph', html: 'Kontrollera också att texturformat och metadata passar målmotorn. Maximal storlek, beskärning av transparens och kravet på tvåpotens påverkar minnesanvändning och kompatibilitet med äldre enheter.' },
  ],
  faq: [
    {
      question: 'Vad är ett sprite sheet och varför är det viktigt?',
      answer:
        'Ett sprite sheet är en enskild bildfil som innehåller flera animeringsbilder.',
    },
    {
      question: 'Hur fungerar den lokala bearbetningen i verktyget?',
      answer:
        'Alla beräkningar sker lokalt i din webbläsare via HTML5 Canvas API.',
    },
    {
      question: 'Kan jag extrahera bilder från ett befintligt sprite sheet?',
      answer:
        'Ja. Växla till Extraktor läget och ladda upp din bild.',
    },
  ],
  howTo: [
    {
      name: 'Ladda upp Bildrutor',
      text: 'Dra och släpp dina PNG eller WebP filer i uppladdningsområdet.',
    },
    {
      name: 'Justera Inställningar',
      text: 'Ställ in marginaler kantextrudering och maximal texturstorlek.',
    },
    {
      name: 'Förhandsgranska och Ladda ner',
      text: 'Kontrollera animationen i spelaren och ladda ner ditt ZIP paket.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Sprite Sheet Packer och Extraktor',
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
          name: 'Vad är ett sprite sheet och varför är det viktigt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ett sprite sheet är en enskild bildfil som innehåller flera animeringsbilder.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur man packar och extraherar sprite sheets',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Ladda upp Bildrutor',
          text: 'Dra och släpp dina PNG eller WebP filer i uppladdningsområdet.',
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
