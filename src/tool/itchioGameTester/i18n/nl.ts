import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'itchio-webgame-tester',
  title: 'Itch.io Webgame Inspecteur en Live Resolutie Optimalisator',
  description: 'Upload HTML5 exportbestanden of ZIP-archieven om viewports live te testen, scrollbars te herstellen, Godot en Unity WebGL builds te inspecteren en Itch.io embed-instellingen te genereren.',
  ui: {
    dropzoneTitle: 'Sleep je gamebuild of ZIP-bestand hierheen',
    dropzoneHint: 'Sleep een .ZIP-bestand, geëxporteerde map of HTML5 buildbestanden naar dit gebied voor directe inspectie.',
    chooseFiles: 'Gamebestand of map selecteren',
    engineDetected: 'Herkende engine',
    compatibilityScore: 'Itch.io compatibiliteitsscore',
    viewportWidth: 'Viewportbreedte (px)',
    viewportHeight: 'Viewporthoogte (px)',
    presets: 'Snelle resolutiepresets',
    fitTest: 'Live layout- en scrollbartest',
    copySettings: 'Itch.io embed-instellingen kopiëren',
    copied: 'Gekopieerd naar klembord',
    embedMode: 'Embed-modus',
    scrollbars: 'Scrollbars inschakelen',
    noIssuesFound: 'Alle controles zijn geslaagd. Het pakket voldoet voor 100% aan de Itch.io-normen.',
    filesInspected: 'Geïnspecteerde bestanden',
    resetViewport: 'Viewport herstellen',
    autoScaleToggle: 'Viewport automatisch aanpassen aan schermbreedte',
    scaledNotice: 'Viewport overschrijdt de schermbreedte. Er is een kunstmatige zoom-out toegepast zodat het volledige canvas zichtbaar is. Schakel automatisch schalen uit om de werkelijke lay-out te zien.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Opmaakrichtlijnen voor Itch.io HTML5-game exports'
    },
    {
      type: 'paragraph',
      html: 'Het publiceren van HTML5- en WebGL-games op Itch.io vereist nauwkeurige configuratie van viewportafmetingen, archiefbestandsstructuren en cross-origin beveiligingsheaders.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Standaard webbeeldverhouding', value: '16:9 Liggend' },
        { label: 'Klassieke Itch-resolutie', value: '960 x 540 px' },
        { label: 'Vereist invoerpuntbestand', value: 'index.html in root' },
        { label: 'Godot 4-vereiste', value: 'COOP / COEP headers' }
      ]
    },
    {
      type: 'tip',
      html: 'Stel bij het insluiten van een 1280x720 WebGL-game op Itch.io de embed-viewportafmetingen in op precies 1280x720 met "Embed in page" ingeschakeld.'
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
  ],
  faq: [
    {
      question: 'Waarom toont mijn Godot 4-game een zwart scherm op Itch.io?',
      answer: 'Godot 4 web-exports gebruiken WebAssembly multithreading dat SharedArrayBuffer-ondersteuning vereist. Schakel "SharedArrayBuffer support" in bij de frameopties van je Itch.io-game.'
    },
    {
      question: "Welke instelling moet je voor publicatie controleren? 1",
      answer: "Controleer afmetingen, doelomgeving en voorbeeldweergave voordat je het bestand publiceert.",
    },
  ],
  howTo: [
    { name: 'Gamebestanden of ZIP uploaden', text: 'Sleep je HTML5 export ZIP-archief of selecteer je buildmap met index.html.' },
    { name: 'Compatibiliteitsrapport bekijken', text: 'Controleer het automatische auditrapport op root-index.html plaatsing, hoofdletterwaarschuwingen en engine-detectie.' },
    { name: 'Viewport live aanpassen', text: 'Gebruik de resolutiecontroles en beeldverhoudingpresets om iframe-insluiting live te testen zonder scrollbars.' },
    { name: 'Itch.io-instellingen kopiëren', text: 'Klik op Instellingen kopiëren om exacte breedte- en hoogtewaarden te kopiëren voor je Itch.io-inzendingspagina.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io Webgame Inspecteur',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Waarom toont mijn Godot 4-game een zwart scherm op Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Godot 4 web-exports gebruiken WebAssembly multithreading dat SharedArrayBuffer-ondersteuning vereist. Schakel "SharedArrayBuffer support" in bij de frameopties van je Itch.io-game.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Zo controleer en test je de viewport van je Itch.io-game',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Gamebestanden of ZIP uploaden',
          text: 'Sleep je HTML5 export ZIP-archief of selecteer je buildmap met index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Viewport live aanpassen',
          text: 'Gebruik de resolutiecontroles en beeldverhoudingpresets om iframe-insluiting live te testen zonder scrollbars.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
