import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'spel-skadeformel-raknare-ttk';
const title = 'Skadeformellabb med TTK diagram';
const description = 'Jämför säkra skadeformler för spel i realtid med livekurvor, heatmaps för attack och försvar, avrundningsregler och Time to Kill (TTK).';

const faq = [
  {
    question: 'Vad jämför skadeformelräknaren?',
    answer: 'Den kör två säkra matematiska uttryck mot samma stridsvärden. Du kan jämföra skadekurvor, trösklar för antal träffar, time to kill (TTK), avrundningsregler och ordningen för motstånd.',
  },
  {
    question: 'Vilka variabler och funktioner kan jag använda?',
    answer: 'Tillgängliga variabler är attack, defense, level, power, resistance, flat, criticalChance och criticalMultiplier. Säkra funktioner inkluderar min, max, clamp, abs, sqrt, pow, floor, round och ceil.',
  },
  {
    question: 'Hur beräknas time to kill (TTK)?',
    answer: 'Antal träffar är målets hälsa dividerat med avrundad förväntad skada (avrundat uppåt). TTK mäter intervallet mellan första och sista träffen: (träffar - 1) / attacker per sekund.',
  },
  {
    question: 'Varför spelar ordningen för motstånd roll?',
    answer: 'Om en fast modifierare tillämpas före procentuellt motstånd minskar motståndet även det fasta värdet. Om motstånd tillämpas först förblir det fasta värdet opåverkat.',
  },
  {
    question: 'Betyder en jämn kurva att spelet är balanserat?',
    answer: 'Nej. En kurva visar trösklar och zoner med noll skada, men balans beror på spelkontext, roller och speltester.',
  },
];

const howTo = [
  { name: 'Välj två formler', text: 'Starta från en förinställning (linjär, förhållande eller nivåskalning) eller skriv två egna formler.' },
  { name: 'Ställ in stridsvärden', text: 'Ange värden för attack, försvar, nivå, kraftkoefficient, motstånd, fast modifierare, kritiska värden, hälsa och attackhastighet.' },
  { name: 'Bestäm regler för motorn', text: 'Välj hur skada avrundas och om motstånd gäller före eller efter den fasta modifieraren.' },
  { name: 'Analysera kurvor och trösklar', text: 'Jämför skadeförlopp, heatmap för försvar, antal träffar och diagnostiska varningar.' },
  { name: 'Spara experimentet', text: 'Kopiera en delningslänk eller ladda ner konfigurationen som JSON, CSV eller PNG-diagram.' },
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

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Skriv din nuvarande skadeformel, placera ett alternativ bredvid och justera stridsvärdena.',
    localNote: 'Privat modell. Formler och filer stannar i denna webbläsare.',
    formulaDeck: 'Formelkammare',
    formulaALabel: 'Formel A (Nuvarande modell)',
    formulaBLabel: 'Formel B (Utmanare)',
    formulaHint: 'Variabler: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Säkra funktioner: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Linjärt skydd',
    presetRatio: 'Rustningsförhållande',
    presetLevel: 'Nivåskalning',
    combatInputs: 'Stridsvärden',
    attackLabel: 'Attack',
    defenseLabel: 'Försvar',
    levelLabel: 'Nivå',
    powerLabel: 'Kraftkoefficient',
    resistanceLabel: 'Motstånd (%)',
    flatLabel: 'Fast modifierare',
    criticalChanceLabel: 'Kritisk chans (%)',
    criticalMultiplierLabel: 'Kritisk multiplikator',
    healthLabel: 'Målets hälsa',
    cadenceLabel: 'Attacker per sekund',
    roundingLabel: 'Skadeavrundning',
    roundingNone: 'Behåll decimaler',
    roundingFloor: 'Avrunda nedåt (Floor)',
    roundingRound: 'Närmaste heltal',
    roundingCeil: 'Avrunda uppåt (Ceil)',
    orderLabel: 'Ordning för modifierare',
    resistanceFirst: 'Motstånd sedan fast',
    flatFirst: 'Fast sedan motstånd',
    runLabel: 'Jämförelse i realtid',
    resultDamage: 'Förväntad skada',
    resultHits: 'Träffar för att besegra',
    resultTtk: 'Time to Kill (TTK)',
    resultDifference: 'Skadedifferens',
    formulaAName: 'Nuvarande',
    formulaBName: 'Utmanare',
    curveTitle: 'Attackförloppskurva',
    curveCaption: 'Attackvärdet varieras från hälften till det dubbla medan försvaret är fast.',
    heatmapTitle: 'Heatmap för tryckfält',
    heatmapCaption: 'Visar förväntad skada för Formel A över kombinationer av attack och försvar.',
    attackAxis: 'Attack ökar åt höger',
    defenseAxis: 'Försvar ökar nedåt',
    scenariosTitle: 'Stridsprofiler',
    scenarioSkirmisher: 'Skärmytslare',
    scenarioGuardian: 'Väktare',
    scenarioBoss: 'Boss',
    scenarioCustom: 'Nuvarande inställning',
    diagnosticsTitle: 'Tröskelkontroll',
    statusBalanced: 'Inga avvikande matematiska hopp upptäcktes i detta testintervall.',
    exportTitle: 'Exportera experimentet',
    copyLink: 'Kopiera delningslänk',
    exportCsv: 'Ladda ner CSV',
    exportJson: 'Ladda ner JSON',
    importJson: 'Importera JSON',
    exportPng: 'Ladda ner PNG-diagram',
    reset: 'Återställ modell',
    privacyDisclosure: 'Delningslänken sparar konfigurationen i URL-hashen och skickar inte data till servrar.',
    limitationDisclosure: 'Kritisk skada är ett genomsnitt och inte en slumpmässig simulering.',
    importError: 'Filen är inte en giltig konfiguration.',
    copiedStatus: 'Delningslänk kopierad till urklipp.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Testa skadeformler för spel innan de implementeras',
    },
    {
      type: 'paragraph',
      html: 'En skadeformel kan verka rimlig vid standardvärden men bryta samman vid höga nivåer. Detta laboratorium hjälper dig att upptäcka oönskade trösklar tidigt.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Säker och begränsad matematisk utvärdering',
    },
    {
      type: 'paragraph',
      html: 'Inmatningsfältet accepterar endast fördefinierade variabler och säkra funktioner utan att köra osäker kod.',
    },
    {
      type: 'table',
      headers: ['Mätvärde', 'Beräkning', 'Designfråga'],
      rows: [
        ['Förväntad skada', 'Basformel inklusive kritisk faktor och motstånd', 'Fungerar regeln rimligt för både svaga och starka enheter?'],
        ['Träffar för att besegra', 'Målets hälsa dividerat med avrundad skada', 'Gör 1 extra poäng att en hel träff faller bort?'],
        ['Time to Kill (TTK)', 'Intervall mellan träffar dividerat med attackhastighet', 'Skapar hastigheten den önskade stridsrytmen?'],
        ['Heatmap', 'Provtagning av Formel A över attack och försvar', 'Finns det oväntade trösklar eller döda zoner?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Separera matematik från balansbeslut',
    },
    {
      type: 'paragraph',
      html: 'En jämn graf garanterar inte att spelet är roligt. Använd laboratoriet för att hitta frågor att verifiera i speltester.',
    },
    {
      type: 'tip',
      title: 'Granska skada och antal träffar tillsammans',
      html: 'En liten förändring i skada kan passera en hälsotröskel och minska antal träffar med en hel attack. Jämför alltid skada med TTK.',
    },
  ],
  faq,
  bibliographyTitle: 'Referenser för skadeberäkning i spel',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
