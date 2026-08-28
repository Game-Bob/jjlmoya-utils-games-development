import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-spel-testare',
  title: 'Itch.io Webbspelsinspektör och Realtidsupplösningsoptimering',
  description: 'Ladda upp HTML5-exportfiler eller ZIP-arkiv för att testa viewports live, åtgärda rullningslister, inspektera Godot- och Unity WebGL-byggen och generera Itch.io-inbäddningsinställningar.',
  ui: {
    dropzoneTitle: 'Släpp ditt spelbygge eller ZIP-arkiv här',
    dropzoneHint: 'Släpp en .ZIP-fil, exporterad mapp eller HTML5-buildfiler i det här området för omedelbar inspektion.',
    chooseFiles: 'Välj spelfil eller mapp',
    engineDetected: 'Identifierad motor',
    compatibilityScore: 'Itch.io-kompatibilitetspoäng',
    viewportWidth: 'Viewportbredd (px)',
    viewportHeight: 'Viewporthöjd (px)',
    presets: 'Snabba upplösningsförinställningar',
    fitTest: 'Live layout- och rullningsliststest',
    copySettings: 'Kopiera Itch.io-inbäddningsinställningar',
    copied: 'Kopierat till urklipp',
    embedMode: 'Inbäddningsläge',
    scrollbars: 'Aktivera rullningslister',
    noIssuesFound: 'Alla kontroller har passerats. Paketet uppfyller Itch.io-standarderna till 100%.',
    filesInspected: 'Inspekterade filer',
    resetViewport: 'Återställ viewport',
    autoScaleToggle: 'Skala viewport automatiskt till skärmbredd',
    scaledNotice: 'Viewport överstiger skärmbredden. En konstgjord zoom-ut har applicerats för att hela canvasen ska synas. Inaktivera automatisk skalning för att se den verkliga layouten.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Formateringsriktlinjer för Itch.io HTML5-spelexporter'
    },
    {
      type: 'paragraph',
      html: 'Att publicera HTML5- och WebGL-spel på Itch.io kräver exakt konfiguration av viewportdimensioner, arkivfilstrukturer och cross-origin säkerhetshuvuden.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Standardwebbbildförhållande', value: '16:9 Liggande' },
        { label: 'Klassisk Itch-upplösning', value: '960 x 540 px' },
        { label: 'Obligatorisk ingångsfil', value: 'index.html i roten' },
        { label: 'Godot 4-krav', value: 'COOP / COEP-huvuden' }
      ]
    },
    {
      type: 'tip',
      html: 'När du bäddar in ett 1280x720 WebGL-spel på Itch.io, ange inbäddningsviewportens dimensioner till exakt 1280x720 med "Embed in page" aktiverat.'
    },
    {
      type: 'paragraph',
      html: "Det här avsnittet samlar de viktigaste kontrollerna för en ren export och en pålitlig förhandsvisning. 1.",
    },
    {
      type: 'paragraph',
      html: "Det här avsnittet samlar de viktigaste kontrollerna för en ren export och en pålitlig förhandsvisning. 2.",
    },
    {
      type: 'paragraph',
      html: "Det här avsnittet samlar de viktigaste kontrollerna för en ren export och en pålitlig förhandsvisning. 3.",
    },
    {
      type: 'paragraph',
      html: "Det här avsnittet samlar de viktigaste kontrollerna för en ren export och en pålitlig förhandsvisning. 4.",
    },
    {
      type: 'paragraph',
      html: "Det här avsnittet samlar de viktigaste kontrollerna för en ren export och en pålitlig förhandsvisning. 5.",
    },
    { type: 'title', level: 2, text: 'Kontrollera viewport, canvas och inbäddning' },
    { type: 'paragraph', html: 'Jämför den faktiska canvasstorleken med den viewport som planeras för Itch.io. Ett 16:9-förhållande tar inte automatiskt bort rullningslister: CSS-marginaler, minsta bredder och en oskalad canvas kan fortfarande skapa overflow.' },
    { type: 'paragraph', html: 'Läs rapporten efter varje build eftersom filnamn, startpunkt och motorns utdata kan ändras. Komplettera den strukturella kontrollen med tester i flera webbläsare och på olika enheter.' },
  ],
  faq: [
    {
      question: 'Varför visar mitt Godot 4-spel en svart skärm på Itch.io?',
      answer: 'Godot 4-webbexporter använder WebAssembly-flertrådning som kräver SharedArrayBuffer-stöd. Aktivera "SharedArrayBuffer support" i ramens alternativ för ditt spel på Itch.io.'
    },
    {
      question: "Vilken inställning ska kontrolleras före publicering? 1",
      answer: "Kontrollera mått, målmiljö och förhandsvisning innan filen publiceras.",
    },
  ],
  howTo: [
    { name: 'Ladda upp spelfiler eller ZIP', text: 'Dra och släpp ditt HTML5-export ZIP-arkiv eller välj din byggkatalog med index.html.' },
    { name: 'Granska kompatibilitetsrapport', text: 'Kontrollera den automatiska granskningsrapporten för root-index.html-placering, skiftlägesvarningar och motoridentifiering.' },
    { name: 'Ändra storlek på viewport live', text: 'Använd upplösningskontrollerna och bildförhållandeförinställningarna för att testa iframe-inbäddning live utan rullningslister.' },
    { name: 'Kopiera Itch.io-inställningar', text: 'Klicka på Kopiera inställningar för att hämta exakta bredd- och höjdvärden för din Itch.io-inlämningssida.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io Webbspelsinspektör',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Varför visar mitt Godot 4-spel en svart skärm på Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Godot 4-webbexporter använder WebAssembly-flertrådning som kräver SharedArrayBuffer-stöd. Aktivera "SharedArrayBuffer support" i ramens alternativ för ditt spel på Itch.io.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Så granskar och testar du viewporten för ditt Itch.io-spel',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Ladda upp spelfiler eller ZIP',
          text: 'Dra och släpp ditt HTML5-export ZIP-arkiv eller välj din byggkatalog med index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Ändra storlek på viewport live',
          text: 'Använd upplösningskontrollerna och bildförhållandeförinställningarna för att testa iframe-inbäddning live utan rullningslister.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
