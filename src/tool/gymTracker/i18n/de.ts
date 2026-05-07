import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'fitness-tracker-online';
const title = 'Fitness Tracker: Fortschrittsdiagramme und Kraftsport Logbuch';
const description =
  'Protokollieren Sie Ihre Übungen, wählen Sie Übungen aus und visualisieren Sie Ihren Fortschritt mit Kraftdiagrammen. Optimieren Sie Ihre progressive Überlastung im Fitnessstudio.';

const faqData = [
  {
    question: 'Was ist der Zweck der Trainingsverfolgung?',
    answer:
      'Es dient dazu, progressive Überlastung wissenschaftlich anzuwenden. Indem Sie genau wissen, wie viel Sie in der vorherigen Sitzung gehoben haben, können Sie versuchen, diese Marke zu übertreffen, was Muskelwachstum und langfristige Kraftgewinne garantiert.'
  },
  {
    question: 'Welche Daten sollte ich aufzeichnen?',
    answer:
      'Das Wichtigste ist das maximale Gewicht (Top Set), das Sie mit guter Form für eine festgelegte Anzahl von Wiederholungen erreicht haben. Unser Tool konzentriert sich auf die Aufzeichnung des Gewichts pro Sitzung, um Ihr Fortschrittsdiagramm zu erstellen.'
  },
  {
    question: 'Wie werden die Diagramme interpretiert?',
    answer:
      'Eine ansteigende Linie zeigt an, dass Sie Fortschritte machen. Eine flache Linie (Plateau) deutet darauf hin, dass Sie Ihr Volumen, Ihre Intensität oder Ihre Erholung anpassen müssen. Eine anhaltend fallende Linie kann ein Zeichen für Übertraining sein.'
  },
  {
    question: 'Wo werden meine Daten gespeichert?',
    answer:
      'Die Daten werden lokal in Ihrem Browser (Local Storage) gespeichert. Dies bedeutet, dass Ihre Privatsphäre absolut gewahrt bleibt und Sie kein Konto erstellen müssen. Wenn Sie jedoch die Browserdaten löschen, geht der Verlauf verloren.'
  },
];

const howToData = [
  {
    name: 'Wählen Sie die Übung aus',
    text: 'Wählen Sie im Dropdown-Menü aus Grundübungen wie Kniebeugen, Bankdrücken oder Kreuzheben.'
  },
  {
    name: 'Geben Sie das Gewicht ein',
    text: 'Geben Sie nach Ihrem schwersten Satz das gehobene Gewicht in Kilogramm/Pfund in das entsprechende Feld ein.'
  },
  {
    name: 'Drücken Sie auf Hinzufügen',
    text: 'Speichern Sie Ihre Marke. Das System aktualisiert automatisch Ihren Verlauf und Ihr Fortschrittsdiagramm.'
  },
  {
    name: 'Analysieren Sie Ihre Entwicklung',
    text: 'Konsultieren Sie regelmäßig das Diagramm, um Plateaus zu identifizieren und sich durch Ihren realen Kraftzuwachs zu motivieren.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de'
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Fitness-Tracking: Der Schlüssel zu echtem Fortschritt',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'In der Welt von Fitness und Bodybuilding gibt es ein fundamentales Prinzip, das diejenigen trennt, die erstaunliche Ergebnisse erzielen, von denen, die schnell stagnieren: <strong>progressive Überlastung</strong>. Es ist jedoch unmöglich, dieses Prinzip effektiv anzuwenden, wenn Sie keine detaillierten Aufzeichnungen über Ihre Hebungen führen. In diesem Leitfaden werden wir untersuchen, warum die Verfolgung Ihres Trainings lebenswichtig ist, wie Sie unseren <strong>Fitness-Tracker</strong> nutzen können, um Ihre Gewinne zu maximieren, und welche wissenschaftlichen Grundlagen diese Praxis unterstützen.'
    },
    {
      type: 'title',
      text: 'Was ist progressive Überlastung?',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Progressive Überlastung ist die allmähliche Steigerung der Belastung, die während körperlicher Betätigung auf den Körper ausgeübt wird. Damit ein Muskel wächst oder stärker wird, muss er einem Reiz ausgesetzt werden, der größer ist als der, an den er gewöhnt ist. Wenn Sie ins Fitnessstudio gehen und immer das gleiche Gewicht mit den gleichen Wiederholungen und der gleichen Ruhezeit heben, hat Ihr Körper keinen biologischen Grund, sich anzupassen und zu wachsen.'
    },
    {
      type: 'list',
      items: [
        'Gewichtssteigerung: Mehr Gewicht heben als in der vorherigen Sitzung.',
        'Wiederholungssteigerung: Mehr Wiederholungen mit demselben Gewicht machen.',
        'Volumensteigerung: Durchführung von insgesamt mehr Sätzen pro Muskelgruppe.',
        'Ruhereduktion: Die gleiche Arbeit in kürzerer Zeit erledigen.',
        'Formverbesserung: Ausführung der Übung mit überlegener Kontrolle und größerem Bewegungsspielraum.',
      ]
    },
    {
      type: 'title',
      text: 'Warum manuelles Protokollieren dem Gedächtnis überlegen ist',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Viele Sportler machen den Fehler, ihrem Gedächtnis zu vertrauen, um sich daran zu erinnern, wie viel sie letzte Woche gehoben haben. Bei einem typischen Training, das zwischen 5 und 10 verschiedene Übungen umfasst, vergisst man jedoch leicht, ob man beim Bankdrücken 80 kg oder 82,5 kg geschafft hat oder ob es 10 oder 12 Wiederholungen waren. Dieser Mangel an Präzision führt zur Mittelmäßigkeit.'
    },
    {
      type: 'tip',
      title: 'Die Kraft der Visualisierung von Fortschritt',
      html: 'Eine ansteigende Linie in einem Diagramm zu sehen, gibt Ihnen den nötigen Schub, um die zusätzliche Wiederholung zu versuchen, die den Unterschied zwischen Stagnation und konsistentem Muskelwachstum ausmacht.'
    },
    {
      type: 'title',
      text: 'Grundübungen für das Tracking',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Obwohl alle Übungen wertvoll sind, bieten bestimmte Verbundübungen den besten Überblick über Ihre Gesamtkraft und körperliche Entwicklung. Diese sollten Sie bei Ihrem Tracking priorisieren: <strong>Bankdrücken</strong> für horizontales Drücken, <strong>Überkopfdrücken</strong> für vertikales Drücken, <strong>Klimmzüge</strong> für Zugübungen und <strong>Hip Thrusts</strong> für die Gesäßmuskulatur.'
    },
    {
      type: 'title',
      text: 'So analysieren Sie Ihre Fortschrittsdiagramme',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Sobald Sie mehrere Trainingseinheiten aufgezeichnet haben, werden Sie Muster erkennen: eine <strong>konstant ansteigende Linie</strong> zeigt den richtigen Weg an, ein <strong>Plateau</strong> deutet darauf hin, dass Sie Ihr Volumen oder Ihre Ruhe anpassen müssen, und ein <strong>Abwärtstrend</strong> kann ein Zeichen für akkumulierte Ermüdung sein.'
    },
    {
      type: 'title',
      text: 'Die Psychologie des Erfolgs im Fitnessstudio',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Training ist sowohl eine mentale als auch eine körperliche Herausforderung. Durch die Verwendung eines visuellen Werkzeugs, das Ihnen zeigt, dass Sie heute 1 % stärker sind als vor vierzehn Tagen, füttern Sie Ihr Dopamin-Belohnungssystem. Dies schafft eine positive Rückkopplungsschleife, die das Training zu einer nachhaltigen Gewohnheit macht.'
    },
  ],
  ui: {
    exerciseLabel: 'Übung',
    pushCategory: 'Push (Drücken)',
    pullCategory: 'Pull (Ziehen)',
    gluteCategory: 'Glute (Gesäß)',
    customExerciseCategory: 'Benutzerdefiniert',
    addCustomExercisetitle: 'Übung hinzufügen',
    newExerciseLabel: 'Neue Übung',
    exercisePlaceholder: 'Name der Übung...',
    addBtn: 'Hinzufügen',
    registerWeightLabel: 'Gewicht loggen',
    weightPlaceholder: '00.0',
    startBtn: 'Start',
    resetBtn: 'Reset',
    okBtn: 'OK',
    noData: 'Keine Daten',
    recordLabel: 'Rekord',
    lastLabel: 'Zuletzt',
    historyTitle: 'Protokolle',
    exportBtn: 'Exportieren',
    confirmDeletetitle: 'Verlauf löschen?',
    confirmDeleteText: 'Diese Aktion kann nicht rückgängig gemacht werden. Alle Protokolle für die ausgewählte Übung werden gelöscht.',
    deleteBtn: 'Löschen',
    cancelBtn: 'Abbrechen',
    units: 'kg',

    benchPress: 'Bankdrücken',
    overheadPress: 'Überkopfdrücken',
    pushPress: 'Push Press',
    inclineDbPress: 'Schrägbankdrücken KH',
    dipsTriceps: 'Trizeps Dips',
    tricepsExtensions: 'Trizepsdrücken am Kabel',
    pullUp: 'Klimmzüge',
    barbellRow: 'Langhantelrudern',
    latPulldown: 'Latzug',
    dbRow: 'Kurzhantelrudern',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Langhantel-Bizepscurls',
    hipThrust: 'Hip Thrust',
    rdl: 'Rumänisches Kreuzheben',
    lunges: 'Ausfallschritte',
    gluteKick: 'Kickbacks am Kabel',
    hipAbduction: 'Abduktorenmaschine',
    stepUp: 'Step Ups'
  }
};
