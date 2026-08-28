import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-ui-toegankelijkheid-stresstester';
const title = 'Game UI Toegankelijkheid Stresstester';
const description = 'Inspecteer game-screenshots lokaal met kleurensimulaties, HUD-contrastmetingen, vervaging, schaalverkleining en randen-heatmaps.';

const faq = [
  {
    question: 'Certificeert deze tool de toegankelijkheid van mijn game-UI?',
    answer: 'Nee. Het combineert kleurvisiesimulaties, contrastmetingen en controle-vragen. Gebruik de resultaten als leidraad voor designreviews, niet als officieel certificaat.',
  },
  {
    question: 'Verlaat mijn screenshot de browser?',
    answer: 'Nee. De afbeelding wordt volledig in uw eigen browser verwerkt. Alleen uw weergave-instellingen worden lokaal opgeslagen.',
  },
  {
    question: 'Wat moet ik meten met de twee kleursondes?',
    answer: 'Kies twee kleuren met een verschillende betekenis, zoals bondgenoot en vijand, actief en inactief, of twee zeldzaamheidsniveaus.',
  },
  {
    question: 'Waarom is handmatige controle nodig bij een goede contrastverhouding?',
    answer: 'Een paar kan een goede verhouding hebben, maar een klein pictogram, dunne tekst of een bewegende achtergrond kan alsnog moeilijk leesbaar zijn.',
  },
  {
    question: 'Wat toont de heatmap?',
    answer: 'De heatmap licht gebieden uit waar het kleurverschil sterk afneemt na de gekozen simulatie.',
  },
];

const howTo = [
  { name: 'Screenshot laden', text: 'Selecteer een PNG, JPEG of WebP-afbeelding van uw game. De afbeelding blijft in het geheugen van uw browser.' },
  { name: 'Simulatielens kiezen', text: 'Vergelijk het origineel met simulaties voor kleurenblindheid, grijstinten of verminderd contrast.' },
  { name: 'Visuele stress toepassen', text: 'Voeg vervaging toe, verklein de weergave, zoom in op pixels of schakel de randen-heatmap in.' },
  { name: 'Twee signalen meten', text: 'Selecteer sonde A of B en klik op de originele afbeelding om twee kleuren te vergelijken.' },
  { name: 'Bevindingen exporteren', text: 'Bekijk de controle-vragen, voeg opmerkingen toe en download een vergelijkingsafbeelding en JSON-rapport.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Laad een game-screenshot, kies een simulatielens en vergelijk twee visuele signalen die spelers duidelijk moeten kunnen onderscheiden.',
    privacyNote: 'Lokale analyse. Screenshots worden niet geüpload.',
    dropTitle: 'Plaats een game-screenshot op de werkbank',
    dropHint: 'Sleep hier een afbeelding naartoe of kies een bestand vanaf uw apparaat. Gebruik een representatief spelmoment.',
    chooseImage: 'Screenshot kiezen',
    replaceImage: 'Screenshot vervangen',
    supportedFiles: 'PNG, JPEG of WebP tot 16 MB. Grote afbeeldingen worden op schaal aangepast.',
    lensLabel: 'Simulatielens',
    lensOriginal: 'Origineel',
    lensProtanopia: 'Protanopie',
    lensDeuteranopia: 'Deuteranopie',
    lensTritanopia: 'Tritanopie',
    lensAchromatopsia: 'Grijstinten',
    lensReducedContrast: 'Verminderd contrast',
    lensDesaturation: 'Desaturatie',
    compareLabel: 'Vergelijkingsmodus',
    compareSideBySide: 'Naast elkaar',
    compareSplit: 'Gesplitste lens',
    comparePress: 'Ingedrukt houden voor origineel',
    holdOriginal: 'Vasthouden voor origineel',
    splitPosition: 'Lenspositie',
    stressLabel: 'Signaalstresstests',
    blurLabel: 'Vervaging in pixels',
    downscaleLabel: 'Klein scherm weergave',
    downscaleFull: 'Volledig',
    downscaleHalf: 'Helft',
    downscaleQuarter: 'Kwart',
    downscaleEighth: 'Achtste',
    zoomLabel: 'Inspectiezoom',
    heatmapLabel: 'Randen-heatmap',
    heatmapHint: 'Licht gebieden uit waar kleurverschil sterk afneemt onder de lens.',
    originalView: 'Origineel signaal',
    simulatedView: 'Gestimuleerd signaal',
    emptyCanvas: 'Selecteer een screenshot om te beginnen. Uw bestand blijft op dit apparaat.',
    sampleTitle: 'Signaalsondes',
    sampleInstructions: 'Selecteer A of B en klik op het origineel om kleursamples te nemen.',
    sampleA: 'Sonde A',
    sampleB: 'Sonde B',
    sampleAName: 'Betekenis sonde A',
    sampleBName: 'Betekenis sonde B',
    manualColor: 'Kleur direct instellen',
    sampleAInitial: 'Bondgenoot',
    sampleBInitial: 'Vijand',
    noSample: 'Wachten op screenshot',
    originalContrast: 'Origineel contrast',
    simulatedContrast: 'Gestimuleerd contrast',
    separationRetained: 'Behouden onderscheid',
    statusStrong: 'Signaal duidelijk te onderscheiden',
    statusWatch: 'Controleer in spelcontext',
    statusReview: 'Signaalontwerp herzien',
    statusPending: 'Nog geen analyse',
    measurementLabel: 'Meting',
    heuristicLabel: 'Heuristiek',
    manualReviewLabel: 'Handmatige controle',
    measurementHint: 'Berekent de relatieve luminantie-contrastverhouding volgens WCAG voor de kleursamples.',
    heuristicHint: 'Vergelijkt het kleurverschil voor en na de visuele simulatie.',
    promptTitle: 'Controle-vragen voor UI-design',
    promptColorOnly: 'Kunnen spelers elementen herkennen zonder alleen op kleur te vertrouwen?',
    promptChangingBackground: 'Blijft tekst leesbaar op drukke, lichte of donkere achtergronden?',
    promptMinimap: 'Onderscheiden minimap-pictogrammen zich ook door vorm of patroon?',
    promptStates: 'Zijn actieve, inactieve en herlaad-statussen duidelijk?',
    promptShape: 'Versterkt een pictogram of geluid elk kleursignaal?',
    findingLabel: 'Opmerking van het team',
    findingPlaceholder: 'Bijvoorbeeld: Omtrek van vijand vervaagt bij rood effect',
    addFinding: 'Opmerking toevoegen',
    findingsEmpty: 'Nog geen schriftelijke opmerkingen.',
    exportSheet: 'Vergelijkingsafbeelding downloaden',
    exportReport: 'JSON-rapport downloaden',
    resetTool: 'Sessie wissen',
    uploadError: 'Kan bestand niet lezen. Kies een geldige PNG, JPEG of WebP.',
    fileTooLarge: 'Bestand groter dan 16 MB. Kies een kleiner bestand.',
    imageReady: 'Screenshot geladen. Selecteer twee kleursondes om te starten.',
    reportDownloaded: 'JSON-rapport gedownload.',
    sheetDownloaded: 'Vergelijkingsafbeelding gedownload.',
    localOnlyDisclosure: 'Lokale verwerking in uw browser. Geen data-overdracht.',
    limitationDisclosure: 'Ondersteunt designreviews maar vervangt geen gebruikers-tests.',
    reportTitle: 'Controlerapport Game UI Toegankelijkheid',
    reportFindingReview: 'Het gemeten kleurpaar verliest aanzienlijk contrast onder de simulatie.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Game-UI toegankelijkheid testen zonder afbeeldingen te uploaden',
    },
    {
      type: 'paragraph',
      html: 'Game-interfaces moeten goed te lezen zijn onder dynamische omstandigheden. Met deze lokale tester kunt u screenshots direct in uw browser inspecteren via kleurblindheidssimulaties en visuele stresstests.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Metingen, heuristieken en menselijke controle',
    },
    {
      type: 'table',
      headers: ['Type bewijs', 'Wat deze tool biedt', 'Wat het niet kan concluderen'],
      rows: [
        ['Meting', 'Relatieve luminantie en WCAG-contrastverhouding voor twee kleuren', 'Volledige automatische naleving van de hele game'],
        ['Simulatie', 'Wetenschappelijke transformaties voor protanopie, deuteranopie en tritanopie', 'De exacte visuele ervaring van elke individuele speler'],
        ['Heuristiek', 'Vervaging, schaalverkleining en randverlies-detectie', 'Automatische beoordeling van de UI-kwaliteit'],
        ['Handmatige controle', 'Checklist met vragen en exporteerbare rapporten', 'Vervanging van testen met echte gebruikers'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Meet kleuren die beslissingen van spelers beïnvloeden',
    },
    {
      type: 'paragraph',
      html: 'Bekijk daarna dezelfde interface op ware spelgrootte en in beweging. Noteer welke signalen verdwijnen wanneer de achtergrond verandert en combineer kleur met vorm, patroon, tekst of geluid. Zo wordt het rapport een concreet ontwerpplan in plaats van alleen een contrastcijfer.',
    },
    {
      type: 'paragraph',
      html: 'Richt uw metingen op kleurparen die belangrijk zijn voor de speler, zoals vijand en bondgenoot. Voeg vormen of pictogrammen toe als het contrast afneemt onder simulatie.',
    },
    {
      type: 'tip',
      title: 'Test drukke spelsituaties',
      html: 'Gebruik screenshots van actievolle spelmomenten voor een realistisch testresultaat.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Gebruik het rapport voor teamoverleg',
    },
    {
      type: 'paragraph',
      html: 'Het JSON-rapport en de PNG-afbeelding kunnen direct aan uw taken worden toegevoegd om designverbeteringen te bespreken.',
    },
    { type: 'paragraph', html: 'Noteer scène, resolutie en het onderzochte kleurpaar. De simulatie helpt ontwerpproblemen vroeg te vinden, maar vervangt geen tests met echte scènes, verschillende schermen en mensen met uiteenlopende visuele omstandigheden.' },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
