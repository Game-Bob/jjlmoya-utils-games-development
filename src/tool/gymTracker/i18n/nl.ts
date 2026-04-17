import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'fitness-tracker-voortgang';
const title = 'Fitness Tracker: Voortgangsgrafieken en Krachttrainingslogboek';
const description =
  'Registreer je lifts, selecteer oefeningen en visualiseer je voortgang met krachtgrafieken. Optimaliseer je progressieve belasting in de sportschool.';

const faqData = [
  {
    question: 'Wat is het doel van het bijhouden van trainingen?',
    answer:
      'Het dient om wetenschappelijk progressieve belasting toe te passen. Door precies te weten hoeveel je in de vorige sessie hebt getild, kun je proberen dat record te verbeteren, wat spiergroei en krachttoename op de lange termijn garandeert.',
  },
  {
    question: 'Welke gegevens moet ik vastleggen?',
    answer:
      'Het belangrijkste is het maximale gewicht (top set) dat je met een goede vorm hebt behaald voor een vastgesteld aantal herhalingen. Onze tool richt zich op het registreren van gewicht per sessie om je voortgangsgrafiek te genereren.',
  },
  {
    question: 'Hoe worden de grafieken geïnterpreteerd?',
    answer:
      'Een stijgende lijn geeft aan dat je vooruitgang boekt. Een vlakke lijn (plateau) suggereert dat je je volume, intensiteit of herstel moet aanpassen. Een constant dalende lijn kan een teken zijn van overtraining.',
  },
  {
    question: 'Waar worden mijn gegevens bewaard?',
    answer:
      'De gegevens worden lokaal in je browser opgeslagen (Local Storage). Dit betekent dat je privacy totaal is en je geen account hoeft aan te maken, maar als je de browsergegevens wist, gaat de geschiedenis verloren.',
  },
];

const howToData = [
  {
    name: 'Selecteer de oefening',
    text: 'Kies uit fundamentele lifts zoals Squats, Bench Press of Deadlift in het dropdown-menu.',
  },
  {
    name: 'Voer het gewicht in',
    text: 'Voer na je zwaarste set de getilde kilo\'s/ponden in het bijbehorende veld in.',
  },
  {
    name: 'Druk op Toevoegen',
    text: 'Sla je record op. Het systeem werkt automatisch je geschiedenis en voortgangsgrafiek bij.',
  },
  {
    name: 'Analyseer je ontwikkeling',
    text: 'Raadpleeg de grafiek periodiek om plateaus te identificeren en jezelf te motiveren door je werkelijke krachttoename te zien.',
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
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Wetenschappelijke Referenties',
  bibliography: [
    {
      name: 'Journal of Strength and Conditioning Research - Progressive Overload Study',
      url: 'https://journals.lww.com/nsca-jscr/Fulltext/2010/10000/The_Mechanisms_of_Muscle_Hypertrophy_and_Their.40.aspx',
    },
    {
      name: 'National Academy of Sports Medicine - Progressive Overload Explained',
      url: 'https://blog.nasm.org/progressive-overload-explained',
    },
    {
      name: 'Science of Strength - Data Tracking in Resistance Training',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30558493/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Fitness Tracking: De Sleutel tot Echte Vooruitgang',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In de wereld van fitness en bodybuilding is er een fundamenteel principe dat degenen die verbazingwekkende resultaten behalen scheidt van degenen die snel stagneren: <strong>progressieve belasting (progressive overload)</strong>. Het is echter onmogelijk om dit principe effectief toe te passen als je geen gedetailleerde gegevens bijhoudt van je lifts. In deze gids onderzoeken we waarom het bijhouden van je training essentieel is, hoe je onze <strong>fitness tracker</strong> kunt gebruiken om je winst te maximaliseren, en de wetenschappelijke basis die deze praktijk ondersteunt.',
    },
    {
      type: 'title',
      text: 'Wat is Progressieve Belasting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Progressieve belasting is de geleidelijke toename van de belasting die op het lichaam wordt uitgeoefend tijdens fysieke inspanning. Om een spier te laten groeien of sterker te laten worden, moet deze worden blootgesteld aan een grotere prikkel dan waaraan hij gewend is. Als je naar de sportschool gaat en altijd hetzelfde gewicht tilt, met dezelfde herhalingen en dezelfde rusttijd, heeft je lichaam geen biologische reden om zich aan te passen en te groeien.',
    },
    {
      type: 'list',
      items: [
        'Gewichtsverhoging: Meer gewicht tillen dan in de vorige sessie.',
        'Herhalingsverhoging: Meer herhalingen doen met hetzelfde gewicht.',
        'Volumeverhoging: Totaal meer sets uitvoeren per spiergroep.',
        'Rustvermindering: Hetzelfde werk doen in minder tijd.',
        'Vormverbetering: De oefening uitvoeren met superieure controle en een groter bewegingsbereik.',
      ],
    },
    {
      type: 'title',
      text: 'Waarom Handmatig Loggen Superieur is aan het Geheugen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Veel sporters maken de fout te vertrouwen op hun geheugen om te onthouden hoeveel ze vorige week hebben getild. Bij een typische training die tussen de 5 en 10 verschillende oefeningen omvat, vergeet je echter gemakkelijk of je 80 kg of 82,5 kg hebt gepakt op de bench, of dat je 10 herhalingen of 12 hebt gehaald. Dit gebrek aan precisie leidt tot middelmatigheid.',
    },
    {
      type: 'tip',
      title: 'De Kracht van het Visualiseren van Voortgang',
      html: 'Het zien van een stijgende lijn in een grafiek geeft je de boost die nodig is om die extra herhaling te proberen die het verschil maakt tussen stagnatie en consistente spiergroei.',
    },
    {
      type: 'title',
      text: 'Fundamentele Oefeningen voor Tracking',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hoewel alle oefeningen waardevol zijn, bieden bepaalde compound oefeningen het beste zicht op je algehele kracht en fysieke ontwikkeling. Deze zouden prioriteit moeten hebben in je tracking: <strong>Bench Press</strong> voor horizontaal duwen, <strong>Overhead Press</strong> voor verticaal duwen, <strong>Pull-ups</strong> voor trekken en <strong>Hip Thrust</strong> voor de billen.',
    },
    {
      type: 'title',
      text: 'Hoe analyseer je je voortgangsgrafieken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zodra je meerdere trainingen hebt vastgelegd, begin je patronen te zien: een <strong>constant stijgende lijn</strong> wijst op de juiste weg, een <strong>plateau</strong> suggereert dat je je volume of rust moet aanpassen, en een <strong>dalende trend</strong> kan een teken zijn van opgebouwde vermoeidheid.',
    },
    {
      type: 'title',
      text: 'De Psychologie van Succes in de Sportschool',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Training is zowel een mentale als een fysieke uitdaging. Door een visueel hulpmiddel te gebruiken dat je laat zien dat je vandaag 1% sterker bent dan veertien dagen geleden, voed je je dopamine-beloningssysteem. Dit creëert een positieve feedbackloop die van trainen een duurzame gewoonte maakt.',
    },
  ],
  ui: {
    exerciseLabel: 'Oefening',
    pushCategory: 'Push (Duwen)',
    pullCategory: 'Pull (Trekken)',
    gluteCategory: 'Bilspieren',
    customExerciseCategory: 'Aangepast',
    addCustomExercisetitle: 'Oefening toevoegen',
    newExerciseLabel: 'Nieuwe oefening',
    exercisePlaceholder: 'Naam oefening...',
    addBtn: 'Toevoegen',
    registerWeightLabel: 'Gewicht Loggen',
    weightPlaceholder: '00.0',
    startBtn: 'Start',
    resetBtn: 'Reset',
    okBtn: 'OK',
    noData: 'Geen gegevens',
    recordLabel: 'Record',
    lastLabel: 'Laatste',
    historyTitle: 'Logs',
    exportBtn: 'Exporteren',
    confirmDeletetitle: 'Geschiedenis wissen?',
    confirmDeleteText: 'Deze actie kan niet ongedaan worden gemaakt. Alle logs voor de geselecteerde oefening worden verwijderd.',
    deleteBtn: 'Verwijderen',
    cancelBtn: 'Annuleren',
    units: 'kg',

    benchPress: 'Bench Press',
    overheadPress: 'Overhead Press',
    pushPress: 'Push Press',
    inclineDbPress: 'Incline DB Press',
    dipsTriceps: 'Triceps Dips',
    tricepsExtensions: 'Cable Triceps Extensions',
    pullUp: 'Pull-ups',
    barbellRow: 'Barbell Row',
    latPulldown: 'Lat Pulldown',
    dbRow: 'Dumbbell Row',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Barbell Biceps Curl',
    hipThrust: 'Hip Thrust',
    rdl: 'Romanian Deadlift',
    lunges: 'Lunges',
    gluteKick: 'Cable Glute Kickback',
    hipAbduction: 'Machine Hip Abduction',
    stepUp: 'Step Up',
  },
};
