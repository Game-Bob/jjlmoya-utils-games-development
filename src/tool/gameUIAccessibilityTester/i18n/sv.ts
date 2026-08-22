import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-ui-tillganglighet-stresstesta';
const title = 'Stresstesta Tillgänglighet för Spel UI';
const description = 'Inspektera skärmdumpar från spel lokalt med färgblindhetssimuleringar, kontrastmätning, oskärpa, skalning och värmekartor.';

const faq = [
  {
    question: 'Certifierar detta verktyg att mitt spel-UI är tillgängligt?',
    answer: 'Nej. Det kombinerar färgblindhetssimuleringar, kontrastmätningar och granskningsfrågor. Använd resultaten som stöd vid designgranskning och användartester.',
  },
  {
    question: 'Laddas min skärmdump upp till någon server?',
    answer: 'Nej. Bilden bearbetas helt och hållet i din webbläsare. Endast dina visningsinställningar sparas lokalt.',
  },
  {
    question: 'Vad bör jag mäta med de två färgprovarna?',
    answer: 'Välj två färger som förmedlar olika betydelser, såsom allierad och fiende, aktiv och inaktiv, eller olika sällsynthetsgrader.',
  },
  {
    question: 'Varför kan manuell granskning behövas trots god kontrast?',
    answer: 'Ett par färger kan ha god kontrast på papperet, men små ikoner, tunn text eller en rörlig bakgrund kan ändå göra elementen svåra att identifiera.',
  },
  {
    question: 'Vad visar värmekartan?',
    answer: 'Värmekartan markerar områden där färgskillnaden minskar kraftigt efter den valda simuleringen.',
  },
];

const howTo = [
  { name: 'Ladda en skärmdump', text: 'Välj en PNG, JPEG eller WebP-bild från ditt spel. Bilden stannar i din webbläsares minne.' },
  { name: 'Välj simuleringslins', text: 'Jämför originalet med simuleringar för färgblindhet, gråskala eller reducerad kontrast.' },
  { name: 'Tillämpa visuella stresstester', text: 'Lägg till oskärpa, minska upplösningen, zooma in på pixlar eller aktivera värmekartan.' },
  { name: 'Mät två viktiga signaler', text: 'Välj Prov A eller B och klicka på originalbilden för att jämföra två färger.' },
  { name: 'Exportera dina slutsatser', text: 'Gå igenom granskningsfrågorna, skriv ner iakttagelser och ladda ner en jämförelsebild samt en JSON-rapport.' },
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
    onboarding: 'Ladda en skärmdump från spelet, välj en simuleringslins och jämför två visuella signaler som spelare måste kunna skilja på.',
    privacyNote: 'Lokal analys. Bilderna laddas inte upp.',
    dropTitle: 'Släpp en skärmdump på granskningsytan',
    dropHint: 'Dra en bild hit eller välj från din enhet. Använd en bild från en riktig spelsituation.',
    chooseImage: 'Välj skärmdump',
    replaceImage: 'Ersätt skärmdump',
    supportedFiles: 'PNG, JPEG eller WebP upp till 16 MB. Stora bilder anpassas automatiskt.',
    lensLabel: 'Simuleringslins',
    lensOriginal: 'Original',
    lensProtanopia: 'Protanopi',
    lensDeuteranopia: 'Deuteranopi',
    lensTritanopia: 'Tritanopi',
    lensAchromatopsia: 'Gråskala',
    lensReducedContrast: 'Minskad kontrast',
    lensDesaturation: 'Avmättnad',
    compareLabel: 'Jämförelseläge',
    compareSideBySide: 'Sida vid sida',
    compareSplit: 'Delad lins',
    comparePress: 'Håll för original',
    holdOriginal: 'Håll intryckt för original',
    splitPosition: 'Linsposition',
    stressLabel: 'Signalstresstester',
    blurLabel: 'Oskärpa i pixlar',
    downscaleLabel: 'Liten skärm-förhandsgranskning',
    downscaleFull: 'Full',
    downscaleHalf: 'Hälften',
    downscaleQuarter: 'Fjärdedel',
    downscaleEighth: 'Åttondel',
    zoomLabel: 'Inspektionszoom',
    heatmapLabel: 'Värmekarta för kanter',
    heatmapHint: 'Markerar områden där färgseparationsgraden minskar kraftigt.',
    originalView: 'Originalsignal',
    simulatedView: 'Simulerad signal',
    emptyCanvas: 'Välj en skärmdump för att starta analysen. Bilden stannar på din enhet.',
    sampleTitle: 'Signalfärgprovar',
    sampleInstructions: 'Välj A eller B och klicka på originalet för att ta färgprov.',
    sampleA: 'Prov A',
    sampleB: 'Prov B',
    sampleAName: 'Betydelse Prov A',
    sampleBName: 'Betydelse Prov B',
    manualColor: 'Ange färg direkt',
    sampleAInitial: 'Allierad',
    sampleBInitial: 'Fiende',
    noSample: 'Väntar på skärmdump',
    originalContrast: 'Originalkontrast',
    simulatedContrast: 'Simulerad kontrast',
    separationRetained: 'Bevarad separation',
    statusStrong: 'Signalen är tydligt separerad',
    statusWatch: 'Granska i spelsammanhang',
    statusReview: 'Signalen bör ses över',
    statusPending: 'Ingen analys ännu',
    measurementLabel: 'Mätning',
    heuristicLabel: 'Heuristik',
    manualReviewLabel: 'Manuell granskning',
    measurementHint: 'Beräknar kontrastförhållandet för relativ luminans enligt WCAG för de valda färgerna.',
    heuristicHint: 'Jämför färgavståndet före och efter den visuella simuleringen.',
    promptTitle: 'Frågor för UI-granskning',
    promptColorOnly: 'Kan spelare identifiera element utan att enbart förlita sig på färg?',
    promptChangingBackground: 'Är texten läsbar mot ljusa, mörka eller rörliga bakgrunder?',
    promptMinimap: 'Skiljer sig kartikoner med hjälp av form eller mönster utöver färg?',
    promptStates: 'Är lägena vald, inaktiv och nedräkning tydliga?',
    promptShape: 'Förstärker en ikon, text eller ljudeffekt varje färgsignal?',
    findingLabel: 'Teamnotering',
    findingPlaceholder: 'Exempel: Fiendens kontur flyter ihop med den röda skadeeffekten',
    addFinding: 'Lägg till notering',
    findingsEmpty: 'Inga sparade noteringar ännu.',
    exportSheet: 'Ladda ner jämförelsebild',
    exportReport: 'Ladda ner JSON-rapport',
    resetTool: 'Återställ',
    uploadError: 'Kunde inte läsa bilden. Välj en giltig PNG, JPEG eller WebP.',
    fileTooLarge: 'Bilden är större än 16 MB. Välj en mindre fil.',
    imageReady: 'Skärmdump laddad. Välj två färgprovar för att börja.',
    reportDownloaded: 'JSON-rapport nedladdad.',
    sheetDownloaded: 'Jämförelsebild nedladdad.',
    localOnlyDisclosure: 'Bearbetningen sker helt lokalt i din webbläsare.',
    limitationDisclosure: 'Verktyget stödjer designgranskning men ersätter inte tester med spelare.',
    reportTitle: 'Granskningsrapport Spel-UI Tillgänglighet',
    reportFindingReview: 'Det uppmätta färgparet tappar avsevärd kontrast i den valda simuleringen.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Testa tillgängligheten i spel-UI utan att ladda upp bilder',
    },
    {
      type: 'paragraph',
      html: 'Spelgränssnitt måste fungera under dynamiska och visuelt komplexa förhållanden. Med detta lokala verktyg kan du granska dina skärmdumpar direkt i webbläsaren med hjälp av färgblindhetssimuleringar.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Mätningar, heuristik och mänsklig bedömning',
    },
    {
      type: 'table',
      headers: ['Typ av bevis', 'Vad verktyget ger', 'Vad det inte kan garantera'],
      rows: [
        ['Mätning', 'Kontrastförhållande och relativ luminans enligt WCAG för två färger', 'Automatisk bekräftelse av hela spelets tillgänglighet'],
        ['Simulering', 'Vetenskapliga omvandlingar för protanopi, deuteranopi och tritanopi', 'Den exakta visuella upplevelsen för varje enskild spelare'],
        ['Heuristik', 'Oskärpa, minskad upplösning och kantförlustanalys', 'Automatisk bedömning av gränssnittets designkvalitet'],
        ['Manuell granskning', 'Checklista och exporterbara rapporter för teamet', 'Ersättning för tester med riktiga användare'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Mät färger som påverkar spelarens beslut',
    },
    {
      type: 'paragraph',
      html: 'Fokusera på färgpar som är avgörande för spelförloppet, till exempel allierad och fiende. Om kontrasten minskar under simulering bör du överväga att lägga till ikoner eller former.',
    },
    {
      type: 'tip',
      title: 'Testa skärmdumpar från intensiva spelsituationer',
      html: 'Använd bilder från aktiva spelsituationer i stället för renskalade menyer för att få realistiska testresultat.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Använd den exporterade rapporten i teamarbetet',
    },
    {
      type: 'paragraph',
      html: 'JSON-rapporten och PNG-jämförelsebilden kan bifogas i ert projekthanteringsverktyg för att underlätta kommunikationen kring gränssnittsändringar.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
