import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-schadeformule-rekenmachine-ttk';
const title = 'Schadeformule Lab met TTK Grafieken';
const description = 'Vergelijk veilige schadeformules voor games met live curves, heatmaps van aanval en verdediging, afrondingspunten en Time to Kill (TTK).';

const faq = [
  {
    question: 'Wat vergelijkt de schadeformule rekenmachine?',
    answer: 'Het voert twee veilige wiskundige formules uit tegen dezelfde gevechtswaarden. U kunt schadecurves, trefferdrempels, time to kill (TTK), afrondingsregels en weerstands volgorde vergelijken zonder JavaScript uit te voeren.',
  },
  {
    question: 'Welke variabelen en functies zijn beschikbaar?',
    answer: 'Beschikbare variabelen zijn attack, defense, level, power, resistance, flat, criticalChance en criticalMultiplier. Veilige functies zijn min, max, clamp, abs, sqrt, pow, floor, round en ceil.',
  },
  {
    question: 'Hoe wordt time to kill (TTK) berekend?',
    answer: 'Het aantal treffers is de doel-gezondheid gedeeld door de afgeronde verwachte schade (naar boven afgerond). TTK meet het interval tussen de eerste en laatste treffer: (treffers - 1) / aanvallen per seconde.',
  },
  {
    question: 'Waarom maakt de volgorde van weerstand verschil?',
    answer: 'Wanneer een vaste aanpassing voor de procentuele weerstand wordt toegepast, vermindert de weerstand ook die vaste waarde. Wordt de weerstand eerst toegepast, blijft de latere vaste waarde ongewijzigd.',
  },
  {
    question: 'Betekent een vloeiende curve dat de game gebalanceerd is?',
    answer: 'Nee. Een curve toont drempels en zones met nul schade, maar balans hangt af van de spelcontext, rollen en speeltests.',
  },
];

const howTo = [
  { name: 'Kies twee formules', text: 'Start vanuit een vooraf ingestelde formule (lineair, ratio of level-skaling) of voer twee eigen formules in.' },
  { name: 'Stel de gevechtswaarden in', text: 'Voer waarden in voor aanval, verdediging, level, kracht-coëfficiënt, weerstand, vaste aanpassing, kritieke waarden, gezondheid en cadans.' },
  { name: 'Bepaal de engine-regels', text: 'Kies hoe schade wordt afgerond en of weerstand voor of na de vaste aanpassing geldt.' },
  { name: 'Analyseer curves en drempels', text: 'Vergelijk de schadeverloop, aanval-sweep, verdedigings-heatmap, treffers en waarschuwingen.' },
  { name: 'Sla het experiment op', text: 'Kopieer een deellink of download de configuratie als JSON, CSV of PNG-grafiek.' },
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
    onboarding: 'Voer uw huidige schadeformule in, plaats een alternatief ernaast en pas de gevechtswaarden aan.',
    localNote: 'Privémodel. Formules en bestanden blijven in deze browser.',
    formulaDeck: 'Formulekamer',
    formulaALabel: 'Formule A (Huidig model)',
    formulaBLabel: 'Formule B (Alternatief)',
    formulaHint: 'Variabelen: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Veilige functies: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Lineaire bescherming',
    presetRatio: 'Ratio harnas',
    presetLevel: 'Level-skaling',
    combatInputs: 'Gevechtswaarden',
    attackLabel: 'Aanval',
    defenseLabel: 'Verdediging',
    levelLabel: 'Level',
    powerLabel: 'Kracht-coëfficiënt',
    resistanceLabel: 'Weerstand (%)',
    flatLabel: 'Vaste aanpassing',
    criticalChanceLabel: 'Kritieke kans (%)',
    criticalMultiplierLabel: 'Kritieke vermenigvuldiger',
    healthLabel: 'Doel-gezondheid',
    cadenceLabel: 'Aanvallen per seconde',
    roundingLabel: 'Schade afronding',
    roundingNone: 'Decimalen behouden',
    roundingFloor: 'Naar beneden (Floor)',
    roundingRound: 'Dichtstbijzijnde geheel getal',
    roundingCeil: 'Naar boven (Ceil)',
    orderLabel: 'Volgorde van aanpassing',
    resistanceFirst: 'Weerstand daarna vast',
    flatFirst: 'Vast daarna weerstand',
    runLabel: 'Vergelijking in live model',
    resultDamage: 'Verwachte schade',
    resultHits: 'Treffers voor overwinning',
    resultTtk: 'Time to Kill (TTK)',
    resultDifference: 'Schadeverschil',
    formulaAName: 'Huidig',
    formulaBName: 'Alternatief',
    curveTitle: 'Aanval verloopcurve',
    curveCaption: 'Aanval varieert van de helft tot het dubbele van de huidige waarde terwijl verdediging vast blijft.',
    heatmapTitle: 'Drukveld heatmap',
    heatmapCaption: 'Toont verwachte schade van Formule A over combinaties van aanval en verdediging.',
    attackAxis: 'Aanval stijgt naar rechts',
    defenseAxis: 'Verdediging stijgt naar beneden',
    scenariosTitle: 'Gevechtsprofielen',
    scenarioSkirmisher: 'Aanvaller',
    scenarioGuardian: 'Bewaker',
    scenarioBoss: 'Baas',
    scenarioCustom: 'Huidige instelling',
    diagnosticsTitle: 'Drempelcontrole',
    statusBalanced: 'Geen afwijkende wiskundige sprongen gevonden in deze testreeks.',
    exportTitle: 'Experiment exporteren',
    copyLink: 'Deellink kopiëren',
    exportCsv: 'CSV downloaden',
    exportJson: 'JSON downloaden',
    importJson: 'JSON importeren',
    exportPng: 'PNG-grafiek downloaden',
    reset: 'Model herstellen',
    privacyDisclosure: 'De deellink slaat de configuratie op in de URL-hash en verzendt geen gegevens naar een server.',
    limitationDisclosure: 'Kritieke schade is een gemiddelde en geen willekeurige simulatie.',
    importError: 'Het bestand is geen geldige configuratie.',
    copiedStatus: 'Deellink gekopieerd naar het klembord.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Test schadeformules voor games voordat ze worden geïmplementeerd',
    },
    {
      type: 'paragraph',
      html: 'Een schadeformule kan goed lijken bij standaardwaarden maar vastlopen bij extreme voortgang. Dit lab helpt u om ongewenste drempels vroegtijdig te ontdekken.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Veilige en beperkte wiskundige evaluatie',
    },
    {
      type: 'paragraph',
      html: 'Het invoerveld accepteert alleen vooraf gedefinieerde variabelen en veilige functies zonder willekeurige code uit te voeren.',
    },
    {
      type: 'table',
      headers: ['Meetwaarde', 'Berekening', 'Ontwerpvraag'],
      rows: [
        ['Verwachte schade', 'Basisformule inclusief kritieke factor en weerstand', 'Reageert de regel logisch bij zowel zwakke als sterke karakters?'],
        ['Treffers voor overwinning', 'Doel-gezondheid gedeeld door afgeronde schade', 'Veroorzaakt 1 extra stat-punt het wegvallen van een complete treffer?'],
        ['Time to Kill (TTK)', 'Interval tussen treffers gedeeld door aanvalsnelheid', 'Creëert de snelheid het gewenste gevechtsritme?'],
        ['Drukveld', 'Steekproef van Formule A over aanval en verdediging', 'Zijn er dode zones of onverwachte stappen?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Wiskundige feiten scheiden van balansbeslissingen',
    },
    {
      type: 'paragraph',
      html: 'Een mooie grafiek garandeert niet automatisch dat een game leuk is. Gebruik dit laboratorium om vragen te vinden voor speeltests.',
    },
    {
      type: 'tip',
      title: 'Bekijk schade en treffers altijd samen',
      html: 'Een kleine verandering in schade kan een gezondheidsdrempel overschrijden en een complete treffer schelen. Vergelijk schade altijd met TTK.',
    },
    { type: 'paragraph', html: 'Dezelfde formule kan door afronding en de volgorde van modifiers een ander gevecht opleveren. Controleer ook kleine schade, hoge verdediging en de drempel voor een extra treffer; TTK modelleert geen ontwijken, cooldowns of onderbrekingen.' },
  ],
  faq,
  bibliographyTitle: 'Referenties voor schadeberekening in games',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
