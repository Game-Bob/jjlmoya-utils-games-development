import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'rugby-punktetafel';
const title = 'Premium Rugby Punktezähler mit Zeitstrafen und Spieluhr';
const description = 'Verfolge Live-Ergebnisse von Rugbyspielen mit Erfassung von Versuchen, Erhöhungen, Straftritten und Dropgoals. Verwalte Zeitstrafen und Spielhälften mit einer interaktiven Stadionanzeigetafel.';

const faqData = [
  {
    question: 'Wie werden Punkte in einem Rugby-Union-Spiel erzielt?',
    answer: 'Ein Versuch ist 5 Punkte wert und wird vergeben, wenn ein Spieler den Ball im Malfeld des Gegners ablegt. Eine Erhöhung nach einem Versuch ist 2 Punkte wert. Straftritte und Dropgoals zählen jeweils 3 Punkte.',
  },
  {
    question: 'Was passiert, wenn ein Spieler im Rugby eine gelbe Karte erhält?',
    answer: 'Eine gelbe Karte führt zu einer Zeitstrafe. Der Spieler muss für 10 Minuten aktive Spielzeit das Feld verlassen. Sein Team spielt in dieser Zeit mit einem Spieler weniger. Der Zeitstrafen-Timer zählt nur herunter, während die Spieluhr läuft.',
  },
  {
    question: 'Wie lange dauert ein Rugby-Union-Spiel?',
    answer: 'Ein Standard-Rugby-Union-Spiel besteht aus zwei 40-minütigen Hälften mit einer 10-minütigen Halbzeitpause. Die Spieluhr wird bei Verletzungen und schwerwiegenden Vorfällen angehalten. Für Unterbrechungen kann Nachspielzeit hinzugefügt werden.',
  },
];

const howToData = [
  {
    name: 'Punkteereignisse Erfassen',
    text: 'Tippe auf die Schaltflächen Versuch, Erhöhung, Straftritt oder Dropgoal, um Punkte zu erfassen. Nach einem Versuch leuchtet die Erhöhungs-Schaltfläche automatisch auf.',
  },
  {
    name: 'Zeitstrafen Verwalten',
    text: 'Tippe auf Gelbe Karte, um einen Spieler in die Zeitstrafe zu schicken. Gib seinen Namen oder seine Rückennummer ein und ein 10-Minuten-Countdown startet automatisch.',
  },
  {
    name: 'Spielzeit Steuern',
    text: 'Nutze die Spieluhr, um zwei 40-minütige Hälften zu verfolgen. Pausiere die Uhr bei Verletzungen und setze sie fort, wenn das Spiel weitergeht.',
  },
  {
    name: 'Punktentwicklung Verfolgen',
    text: 'Beobachte die Live-Anzeigetafel mit Punkten für Heim- und Gastmannschaft. Rufe die Punktezusammenfassung auf, um eine Aufschlüsselung von Versuchen, Erhöhungen, Straftritten und Dropgoals zu sehen.',
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
    image: undefined,
    url: undefined,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Kostenloser Online Rugby Punktezähler mit Live-Spielverfolgung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Übernimm die Kontrolle über die Punkteverfolgung deines Rugbyspiels mit unserer interaktiven digitalen Anzeigetafel. Erfasse Versuche, Erhöhungen, Straftritte und Dropgoals in Echtzeit. Das Zeitstrafen-Management zählt Spielersperren automatisch herunter, und die Spieluhr hält beide Hälften perfekt getaktet. Egal, ob du ein lokales Vereinsspiel leitest oder eine Jugendmannschaft trainierst, dieses Tool erledigt alle Punkte- und Zeitdetails automatisch.',
    },
    {
      type: 'title',
      text: 'Das Punktesystem im Rugby Union Erklärt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rugby Union bietet vier Möglichkeiten, Punkte zu erzielen, die jeweils unterschiedliche Fähigkeiten und Strategien erfordern. Der Versuch ist die wertvollste Angriffsaktion und belohnt Teams dafür, dass sie die Verteidigungslinie durchbrechen und den Ball im Versuchsfeld ablegen. Nach einem Versuch versucht die punktende Mannschaft eine Erhöhung für zwei Zusatzpunkte. Straftritte und Dropgoals verleihen taktische Tiefe und ermöglichen es Teams, aus dem offenen Spiel heraus oder nach gegnerischen Regelverstößen zu punkten.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Versuch',
          description: 'Lege den Ball im Malfeld ab für fünf Punkte.',
          icon: 'mdi:rugby',
          points: ['Fünf Punkte', 'Ermöglicht Erhöhungsversuch', 'Ball muss abgelegt werden'],
        },
        {
          title: 'Erhöhung',
          description: 'Tritt nach einem Versuch zwischen die Pfosten für zwei Punkte.',
          icon: 'mdi:goal',
          points: ['Zwei Punkte bei Erfolg', 'Tritt von der Versuchsposition', 'Muss über die Latte'],
        },
        {
          title: 'Straftritt',
          description: 'Tritt nach gegnerischem Vergehen aufs Tor für drei Punkte.',
          icon: 'mdi:alert-octagon',
          points: ['Drei Punkte', 'Kann getreten oder angetippt werden', 'Entscheidet oft enge Spiele'],
        },
        {
          title: 'Dropgoal',
          description: 'Tritt den Ball aus dem Spiel heraus per Dropkick zwischen die Pfosten für drei Punkte.',
          icon: 'mdi:circle-outline',
          points: ['Drei Punkte', 'Ball muss zuerst den Boden berühren', 'Druckvoller Spielentscheider'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Das Zeitstrafen-System Verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Zeitstrafe ist ein temporäres Suspensionssystem für gefährliche oder wiederholte Regelverstöße. Wenn ein Schiedsrichter die gelbe Karte zeigt, muss der Spieler das Feld für zehn Minuten aktive Spielzeit verlassen. Während dieser Zeit spielt sein Team mit einem Spieler weniger, was einen numerischen Vorteil für die gegnerische Mannschaft schafft. Der Zeitstrafen-Timer zählt nur herunter, während die Spieluhr läuft, was eine faire Durchsetzung unabhängig von Spielunterbrechungen gewährleistet.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gelbe Karte Strafe:</strong> Zehn Minuten Zeitstrafe für gefährliches Spiel oder wiederholte Teamvergehen.',
        '<strong>Numerischer Nachteil:</strong> Das bestrafte Team spielt während der Sperre mit 14 Spielern statt 15.',
        '<strong>Automatische Rückkehr:</strong> Wenn der Timer abläuft, kehrt der Spieler automatisch von der Mittellinie ins Spiel zurück.',
        '<strong>Rote Karte Aufwertung:</strong> Eine zweite gelbe Karte oder ein schweres Vergehen führt zu einer roten Karte und dauerhaften Ausschluss.',
      ],
    },
    {
      type: 'title',
      text: 'Spielzeit und Halbzeiten Verwalten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Standard-Rugby-Union-Spiel ist in zwei 40-minütige Hälften mit einer 10-minütigen Halbzeitpause unterteilt. Die Spieluhr läuft während des aktiven Spiels kontinuierlich, kann aber vom Schiedsrichter bei Verletzungen, Überprüfungen von gefährlichem Spiel oder anderen Unterbrechungen angehalten werden. Dieser digitale Punktezähler enthält eine präzise Spieluhr mit Pausen- und Fortsetzungsfunktionen, automatischer Halbzeiterfassung und klaren visuellen Anzeigen für jeden Spielabschnitt.',
    },
    {
      type: 'title',
      text: 'Warum Einen Digitalen Rugby Punktezähler Nutzen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuelle Punkteerfassung im Rugby ist aufgrund der Vielzahl an Bewertungsmethoden, der Zeitstrafenverwaltung und des Halbzeitmanagements anspruchsvoll. Dieses Browser-Tool bietet eine genaue Echtzeit-Punkteverfolgung, automatische Zeitstrafen-Countdowns und präzise Spielzeiterfassung. Trainer können sich auf die Spielstrategie statt auf Berechnungen konzentrieren, Schiedsrichter haben ein zuverlässiges Backup-System und Spieler können den Spielstand auf einen Blick überprüfen.',
    },
  ],
  ui: {
    title: 'Rugby Punktezähler',
    description: 'Verfolge Spielergebnisse und Zeitstrafen.',
    home: 'Heim',
    away: 'Gast',
    score: 'Punktestand',
    tryLabel: 'Versuch +5',
    conversion: 'Erhöhung +2',
    penalty: 'Straftritt +3',
    dropGoal: 'Dropgoal +3',
    conversionYes: 'Ja',
    conversionNo: 'Nein',
    sinBin: 'Gelbe Karte',
    sinBinTitle: 'Zeitstrafe',
    sinBinPlayer: 'Name oder Nummer des Spielers:',
    sinBinAdd: 'Strafe Starten',
    sinBinEmpty: 'Keine aktiven Zeitstrafen',
    sinBinReturn: 'Zurückgekehrt',
    matchClock: 'Spieluhr',
    half: 'Hälfte',
    half1: 'Erste Hälfte',
    half2: 'Zweite Hälfte',
    startMatch: 'Anstoß',
    pauseMatch: 'Pause',
    resumeMatch: 'Fortsetzen',
    resetMatch: 'Spiel Zurücksetzen',
    resetConfirm: 'Aktuelles Spiel zurücksetzen? Alle Punkte und Timer gehen verloren.',
    cancel: 'Abbrechen',
    confirm: 'Zurücksetzen Bestätigen',
    period: 'Spielabschnitt',
    scoringSummary: 'Punktezusammenfassung',
    tryScored: 'Versuche',
    conversionSuccess: 'Erhöhungen',
    conversionMiss: 'Verfehlte Erhöhungen',
    penaltyScored: 'Straftritte',
    dropGoalScored: 'Dropgoals',
    totalPoints: 'Gesamt',
    fullscreen: 'Vollbild',
    toggleSound: 'Ton Ein/Aus',
    eventLog: 'Ereignisprotokoll',
    eventEmpty: 'Noch keine Ereignisse',
    undoBtn: 'Letztes Rückgängig',
    timeOff: 'Zeit Gestoppt',
    timeOn: 'Zeit Läuft',
  },
};
