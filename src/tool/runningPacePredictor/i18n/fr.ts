import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'calculateur-allure-course-a-pied';
const title = 'Calculateur d Allure de Course et Prédiction de Temps';
const description =
  'Calculez votre allure de course, prédisez vos temps sur 5k, 10k, semi-marathon et marathon grâce à la formule de Riegel et vos zones d entraînement.';

const faqData = [
  {
    question: 'Quelle est la précision de la formule de Peter Riegel pour le marathon?',
    answer:
      'La formule de Riegel T2 = T1 * (D2 / D1)^1.06 est très précise si la base aérobie est développée. Pour un marathon, le résultat dépend du volume hebdomadaire et des sorties longues.',
  },
  {
    question: 'Comment convertir min/km en min/mile?',
    answer:
      'Multipliez le temps total en secondes par kilomètre par 1,609344. Une allure de 5:00 min/km correspond à 8:03 min/mile.',
  },
  {
    question: 'Pourquoi les prédictions semblent-elles parfois ambitieuses sur marathon?',
    answer:
      'L exposant 1.06 suppose une résistance optimale à la fatigue. Sans volume d entraînement suffisant, l épuisement du glycogène ralentit l allure réelle.',
  },
  {
    question: 'Comment structurer les zones d allure pour les séances de fractionné?',
    answer:
      'Les séances de VMA doivent être courues entre 95% et 105% de l allure 5k, le seuil entre 110% et 120%, et l endurance fondamentale entre 125% et 145%.',
  },
];

const howToData = [
  {
    name: 'Sélectionner l unité de mesure',
    text: 'Choisissez entre le système métrique (km, min/km) ou impérial (miles, min/mile) avec le sélecteur.',
  },
  {
    name: 'Choisir la distance',
    text: 'Cliquez sur une distance prédéfinie (5K, 10K, Semi, 42K) ou saisissez une distance personnalisée.',
  },
  {
    name: 'Ajuster le chrono de référence',
    text: 'Utilisez les boutons d ajustement (+1m, +5m, -1m, -5m) pour définir votre temps de course récent.',
  },
  {
    name: 'Analyser les résultats',
    text: 'Consultez votre allure moyenne, les temps estimés par la formule de Riegel et vos zones cibles.',
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

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
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
      text: 'Principes Biomécaniques du Calcul d Allure de Course',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le calcul de l allure de course et la prédiction de performances reposent sur la compréhension des filières énergétiques métaboliques. La performance en endurance dépend du VO2 max, du seuil anaérobie et de l économie de course.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Exposant Riegel' },
        { value: '4 Clés', label: 'Distances Majeures' },
        { value: '3 Voies', label: 'Calcul Réactif' },
        { value: '3 Niveaux', label: 'Zones Cibles' },
      ],
    },
    {
      type: 'title',
      text: 'La Formule de Riegel et sa Modélisation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Formulée par Peter Riegel en 1977, la formule T2 = T1 * (D2 / D1)^1.06 modélise la baisse de vitesse à mesure que la distance augmente. L exposant 1.06 reflète l érosion aérobie moyenne chez les athlètes entraînés.',
    },
    {
      type: 'title',
      text: 'Comparatif Système Métrique vs Impérial',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Système Métrique (min/km)',
          description: 'Unité internationale standard. Permet un contrôle précis des temps de passage tous les 1000 mètres.',
        },
        {
          title: 'Système Impérial (min/mile)',
          description: 'Unité standard aux États-Unis et au Royaume-Uni. Un mile équivaut à 1,609344 kilomètre.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Distances Officielles de Course sur Route',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Épreuve', 'Distance Métrique (km)', 'Distance Impériale (mi)', 'Filière Énergétique'],
      rows: [
        ['5K Route', '5.00 km', '3.11 mi', '90% Aérobie / 10% Anaérobie Glycolytique'],
        ['10K Route', '10.00 km', '6.21 mi', '95% Aérobie / 5% Anaérobie Glycolytic'],
        ['Semi-Marathon', '21.0975 km', '13.11 mi', '99% Aérobie (Dominante Seuil)'],
        ['Marathon', '42.195 km', '26.22 mi', '100% Aérobie (Limité par Glycogène)'],
      ],
    },
    {
      type: 'title',
      text: 'Stratégie de Course et Negative Split',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Efficacité du Negative Split',
      html: 'Courir la seconde moitié légèrement plus vite que la première préserve le glycogène et évite une acidose musculaire précoce.',
    },
  ],
  ui: {
    title: 'Calculateur d Allure de Course et Prédiction de Temps',
    subtitle: 'Calculez votre allure et vos temps cibles avec la formule de Riegel',
    paceCalculatorTitle: 'Calculateur d Allure, Distance et Temps',
    racePredictorTitle: 'Prédiction de Temps de Course',
    trainingZonesTitle: 'Zones d Allure d Entraînement',
    distanceLabel: 'Distance',
    timeLabel: 'Temps',
    paceLabel: 'Allure Moyenne',
    hoursLabel: 'Heures',
    minutesLabel: 'Minutes',
    secondsLabel: 'Secondes',
    unitKm: 'Kilomètres',
    unitMiles: 'Miles',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mile',
    presetsTitle: 'Distances Rapides',
    calculateButton: 'Calculer',
    resetButton: 'Réinitialiser',
    recentRaceTitle: 'Temps Récent de Référence',
    predictedTimesTitle: 'Temps Estimés sur Épreuves',
    distanceHeader: 'Distance',
    estimatedTimeHeader: 'Temps Estimé',
    targetPaceHeader: 'Allure Cible',
    trainingZoneHeader: 'Zone d Entraînement',
    paceRangeHeader: 'Plage d Allure',
    zoneEasy: 'Endurance Fondamentale',
    zoneEasyDesc: 'Développement de la base aérobie et récupération',
    zoneTempo: 'Allure Seuil & Fartlek',
    zoneTempoDesc: 'Amélioration du seuil anaérobie',
    zoneIntervals: 'Fractionné & VMA',
    zoneIntervalsDesc: 'Développement du VO2 max et de la vitesse',
    riegelExplanation: 'Les prédictions utilisent la formule de Riegel T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Calculateur d Allure de Course et Prédiction de Temps',
      description: 'Calculez votre allure de course et prédisez vos temps sur 5k, 10k, semi et marathon.',
      h1: 'Calculateur d Allure de Course et Prédiction de Temps',
      intro: 'Un calcul d allure précis et la prédiction de temps sont des outils essentiels pour les coureurs d endurance.',
      statsTitle: 'Indicateurs de Performance',
      stat1Label: 'Exposant Riegel',
      stat1Value: '1.06',
      stat2Label: 'Distances Clés',
      stat2Value: '4 Majeures',
      stat3Label: 'Calcul d Allure',
      stat3Value: '3 Voies',
      stat4Label: 'Zones Cibles',
      stat4Value: '3 Niveaux',
      comparativeTitle: 'Comparatif d Unités',
      comparativeItem1Title: 'Métrique (min/km)',
      comparativeItem1Desc: 'Standard international.',
      comparativeItem2Title: 'Impérial (min/mile)',
      comparativeItem2Desc: 'Standard aux USA et au Royaume-Uni.',
      tableTitle: 'Aperçu des Distances Officielles',
      tableCol1: 'Épreuve',
      tableCol2: 'Kilomètres',
      tableCol3: 'Miles',
      tableRow1Col1: 'Course 5K',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: 'Course 10K',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Semi-Marathon',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Gestion de Course',
      tipText: 'Le negative split permet une meilleure efficacité métabolique.',
      faqTitle: 'Foire Aux Questions',
      faq1Q: 'Quelle est la précision de Riegel ?',
      faq1A: 'Elle nécessite un bon entraînement d endurance.',
      faq2Q: 'Différence min/km et min/mile ?',
      faq2A: 'Min/km mesure les minutes par kilomètre.',
      glossaryTitle: 'Glossaire',
      term1Name: 'Formule de Riegel',
      term1Def: 'Modèle mathématique de prédiction de temps par Peter Riegel.',
      term2Name: 'Seuil Anaérobie',
      term2Def: 'Intensité où le lactate s accumule plus vite qu il n est éliminé.',
    },
  },
};
