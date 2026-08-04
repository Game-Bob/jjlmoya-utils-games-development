import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'calculateur-css-natation';
const title = 'Calculateur de Vitesse Critique de Natation CSS';
const description = 'Calculez votre vitesse critique de natation CSS allure seuil par 100m ou 100yd a partir des tests de 400m et 200m en piscine.';

const faqData = [
  {
    question: 'A quelle frequence effectuer le test CSS en natation?',
    answer: 'Il est recommande d effectuer le test de 400m et 200m toutes les 4 a 6 semaines pour ajuster vos allures d entrainement.',
  },
  {
    question: 'Peut on calculer le CSS en yards au lieu des metres?',
    answer: 'Oui. La formule mathematique s applique exactement de la meme maniere dans les bassins en yards.',
  },
];

const howToData = [
  {
    name: 'Selectionnez l unite du bassin',
    text: 'Choisissez entre Metres (bassin de 25m ou 50m) ou Yards (bassin de 25yd).',
  },
  {
    name: 'Entrez le temps du test de 400m',
    text: 'Saisissez les minutes et secondes de votre test de 400 metres a effort maximal.',
  },
  {
    name: 'Entrez le temps du test de 200m',
    text: 'Saisissez les minutes et secondes de votre test de 200 metres a effort maximal.',
  },
  {
    name: 'Analysez les allures et temps de passage',
    text: 'Cliquez sur Calculer pour afficher votre vitesse aerobique et vos temps de passage par serie.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

const ui: SwimCssCalculatorUI = {
  title: 'Calculateur de Vitesse Critique de Natation CSS',
  subtitle: 'Calculez votre allure seuil aerobique par 100m et vos temps de passage par zone.',
  unitLabel: 'Unite du bassin',
  unitMeters: 'Metres (Bassin de 25m / 50m)',
  unitYards: 'Yards (Bassin de 25yd)',
  t400Label: 'Test de 400m / 400yd',
  t200Label: 'Test de 200m / 200yd',
  minutesLabel: 'Minutes',
  secondsLabel: 'Secondes',
  calculateButton: 'Calculer le CSS et les Temps',
  resetButton: 'Reinitialiser',
  cssResultTitle: 'Resultats de la Vitesse Critique de Natation',
  cssSpeedLabel: 'Vitesse Aerobique',
  cssPace100Label: 'Allure CSS par 100',
  lapPaceLabel: 'Cible par Longeur de 25m / 25yd',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Matrice des Allures d Entrainement en Piscine',
  zoneHeader: 'Zone d Intensite',
  pace100Header: 'Allure Cible / 100',
  split50Header: 'Temps 50',
  split100Header: 'Temps 100',
  split200Header: 'Temps 200',
  split400Header: 'Temps 400',
  zoneAerobic: 'Endurance Aerobique',
  zoneAerobicDesc: 'Pour les series longues aerobiques et echauffements (~104% allure CSS)',
  zoneAerobicRest: 'Repos: 10s - 15s par serie',
  zoneCss: 'Seuil CSS',
  zoneCssDesc: 'Allure cible pour les series au seuil et endurance de course (~100% allure CSS)',
  zoneCssRest: 'Repos: 15s - 20s par serie',
  zoneVo2Max: 'Vitesse VO2 Max',
  zoneVo2MaxDesc: 'Entrainement par intervalles a haute intensite (~96% allure CSS)',
  zoneVo2MaxRest: 'Repos: 30s - 45s par serie',
  invalidNotice: 'Le temps du test de 400m doit etre strictement superieur a celui de 200m.',
  copySplitsButton: 'Copier les Temps de Passage',
  copiedNotice: 'Temps de passage memoirises',
  seo: {
    title: 'Calculateur de Vitesse Critique de Natation CSS Allures',
    description: 'Calculez votre vitesse critique de natation CSS allure seuil par 100m ou 100yd a partir des tests de 400m et 200m en piscine.',
    h1: 'Calculateur de Vitesse Critique de Natation et Allures de Bain',
    intro: 'La vitesse critique de natation est la metrique de reference pour structurer les entrainements en piscine selon le seuil aerobique fonctionnel.',
    statsTitle: 'Indicateurs Cles de Performance',
    stat1Label: 'Test 1',
    stat1Value: '400m Effort Maximal',
    stat2Label: 'Test 2',
    stat2Value: '200m Effort Maximal',
    stat3Label: 'Seuil Aerobique',
    stat3Value: 'Allure de Base 100m CSS',
    stat4Label: 'Application Pratique',
    stat4Value: 'Temps de Passage Chrono',
    comparativeTitle: 'Approche CSS vs Frequence Cardiaque en Piscine',
    comparativeItem1Title: 'Vitesse Critique CSS',
    comparativeItem1Desc: 'Mesure directement la vitesse de propulsion dans l eau sans interferences de capteurs.',
    comparativeItem2Title: 'Frequence Cardiaque Classique',
    comparativeItem2Desc: 'Subit des retards de mesure et ne prend pas en compte la degradation de la technique.',
    tableTitle: 'Recapitulatif des Zones d Intensite et Temps de Passage',
    tableCol1: 'Zone d Entrainement',
    tableCol2: 'Adaptation Physiologique',
    tableCol3: 'Distances Recommandees',
    tableRow1Col1: 'Endurance Aerobique',
    tableRow1Col2: 'Capillarisation et utilisation des lipides.',
    tableRow1Col3: 'Repeat 400m a 800m avec repos court de 10 a 15 secondes.',
    tableRow2Col1: 'Seuil CSS',
    tableRow2Col2: 'Capacite de clairance du lactate et puissance aerobique.',
    tableRow2Col3: 'Repeat 100m a 300m avec repos de 15 a 20 secondes.',
    tableRow3Col1: 'Vitesse VO2 Max',
    tableRow3Col2: 'Consommation maximale d oxygene et frequence de bras.',
    tableRow3Col3: 'Intervalles de 50m a 100m avec repos plus longs.',
    tipTitle: 'Conseil d Entrainement pour le Test',
    tipText: 'Gerez regulierement votre allure sur le 400m pour eviter une accumulation prematuree de lactate.',
    faqTitle: 'Foire Aux Questions sur le CSS en Natation',
    faq1Q: 'A quelle frequence renouveler le test CSS?',
    faq1A: 'Tous les 4 a 6 semaines au cours du cycle d entrainement.',
    faq2Q: 'Est ce utilisable en bassin en yards?',
    faq2A: 'Oui. La formule mathematique reste strictement identique.',
    glossaryTitle: 'Glossaire de Physiologie de la Natation',
    term1Name: 'Vitesse Critique de Natation',
    term1Def: 'La vitesse maximale theorique maintenable en continu sans epuisement rapide.',
    term2Name: 'Temps de Passage',
    term2Def: 'Le temps cible au virage a chaque 50m ou 100m.',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Principes Biomecaniques de la Vitesse Critique de Natation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La vitesse critique de natation definit la pente de la relation entre la distance et le temps. Elle permet d isoler le seuil aerobique de la capacite anaerobie initiale.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Paire de Tests Standard' },
        { value: 'Base 100m', label: 'Allure Standard' },
        { value: '3 Zones', label: 'Matrice d Intensite' },
        { value: '4 Temps', label: 'Chronos de Passage' },
      ],
    },
    {
      type: 'title',
      text: 'Allure CSS vs Frequence Cardiaque en Milieu Aquatique',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Allure CSS Mesuree',
          description: 'Reflete la vitesse reelle dans l eau en prenant en compte les virages et la coulée.',
        },
        {
          title: 'Fréquence Cardiaque en Eau',
          description: 'Présente des retards d affichage et des problemes de stabilite de capteurs.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tableau des Zones et Temps de Repos',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nom de la Zone', 'Allure Relative', 'Objectif Principal', 'Repos Recommande'],
      rows: [
        ['Endurance Aerobique', '104% du temps CSS', 'Developpement de la capacite aerobique', '10 a 15 secondes'],
        ['Seuil CSS', '100% du temps CSS', 'Clairance du lactate et allure de course', '15 a 20 secondes'],
        ['Vitesse VO2 Max', '96% du temps CSS', 'Puissance aerobique maximale', '30 a 45 secondes'],
      ],
    },
    {
      type: 'title',
      text: 'Strategie d Execution des Series en Bassin',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Conseil pour Respecter l Allure Cible',
      html: 'Maintenez scrupuleusement le temps de passage sur chaque 50m. Partir trop vite entraine une baisse de vitesse brutale en fin de serie.',
    },
  ],
  ui,
};
