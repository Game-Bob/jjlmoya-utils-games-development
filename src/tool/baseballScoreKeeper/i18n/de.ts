import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'baseball-spielstand';
const title = 'Premium Baseball und Softball Spielstand mit Laeuferverfolgung';
const description = 'Erfasse Live Baseballergebnisse mit Runs, Hits und Errors. Visuelles Diamantfeld mit Laeuferpositionen, Ball Strike Zaehler und Inning fuer Inning Verlaufsanzeige.';

const faqData = [
  {
    question: 'Wie funktioniert der Zaehler im Baseball?',
    answer: 'Der Zaehler zeigt die Anzahl der Balls und Strikes fuer den aktuellen Schlagmann. Balls erhoehen sich bis 4 fuer einen Walk. Strikes erhoehen sich bis 3 fuer ein Strikeout. Anpassbare Grenzen fuer Jugendligen.',
  },
  {
    question: 'Was zeigt das interaktive Baseball Diamantfeld?',
    answer: 'Das Diamantfeld zeigt das erste, zweite und dritte Base. Ein Tippen auf ein Base hebt es orange hervor, um einen Laeufer auf diesem Base anzuzeigen. Laeufer ruecken bei Hits automatisch vor.',
  },
  {
    question: 'Wie werden Runs, Hits und Errors erfasst?',
    answer: 'Die R H E Matrix zeigt Runs, Hits und Errors fuer beide Mannschaften. Die Inning fuer Inning Verlaufshistorie zeigt, wie sich das Ergebnis ueber alle Innings aufgebaut hat.',
  },
];

const howToData = [
  {
    name: 'Jeden Pitch Erfassen',
    text: 'Tippe auf Strike, Ball, Foul, Hit oder Out, um jeden Pitch zu erfassen. Der Zaehler aktualisiert sich automatisch basierend auf dem Ergebnis.',
  },
  {
    name: 'Laeufer Verwalten',
    text: 'Tippe auf die Basen im Diamantfeld, um Laeufer zu setzen oder zu entfernen. Bei einem Hit ruecken Laeufer automatisch vor.',
  },
  {
    name: 'Inning Fortschritt Verfolgen',
    text: 'Die Inning Anzeige zeigt das aktuelle Halbinnning. Nach drei Outs wechselt das Spiel automatisch zwischen dem oberen und unteren Halbinnning.',
  },
  {
    name: 'Spielstand Pruefen',
    text: 'Ueberpruefe die R H E Zusammenfassung und die scrollende Inning fuer Inning Verlaufstabelle, um den vollstaendigen Spielverlauf zu sehen.',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Kostenloser Online Baseball Spielstand: Erfasse Runs Hits und Errors mit Live Diamantfeld',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Brauchst du einen zuverlaessigen Baseball Spielstand fuer dein naechstes Spiel? Dieses kostenlose Online Tool erfasst Runs, Hits und Errors und zeigt ein interaktives Live Diamantfeld mit Echtzeit Laeuferpositionen. Jeder Pitch zaehlt und unser digitales Scoreboard stellt sicher, dass du nie den Ueberblick ueber den Zaehler, die Outs oder das Inning verlierst. Egal ob du eine Jugendliga trainierst, den Spielstand fuer ein Softball Turnier fuehrst oder ein High School Spiel leitest, dieses Tool verwaltet die gesamte Spielstandstabelle automatisch, damit du dich auf das Geschehen auf dem Feld konzentrieren kannst.',
    },
    {
      type: 'title',
      text: 'Wie Dieses Baseball Scoreboard Zeit Spart und Fehler Verhindert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuelle Spielstandsfuehrung ist fehleranfaellig, besonders bei schnellen Spielen. Ein uebersehener Strike oder ein uebersehener Laeufer kann die gesamte Spielstandstabelle durcheinanderbringen. Dieser digitale Spielstand automatisiert die muhevollen Teile. Tippe auf Strike, Ball, Foul, Hit oder Out und das Board aktualisiert sofort den Zaehler. Wenn ein Schlagmann einen Walk erhaelt oder ausgestriket wird, setzt das Tool den Zaehler automatisch zurueck. Nach drei Outs wechselt es das Inning von oben nach unten und zeichnet die Runs auf. Die R H E Matrix und die Inning fuer Inning Verlaufstabelle geben dir einen vollstaendigen Ueberblick ueber das Spiel auf einen Blick.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Live Pitch Zaehler',
          description: 'Automatisierte Ball und Strike Verfolgung mit Walk und Strikeout Erkennung fuer jeden At Bat.',
          icon: 'mdi:baseball',
          points: ['Balls bis 4 gezaehlt', 'Strikes bis 3 gezaehlt', 'Auto zuruecksetzen bei Entscheidung'],
        },
        {
          title: 'Laeufer Verwaltung',
          description: 'Interaktives Diamantfeld zeigt genau, wer auf dem ersten, zweiten oder dritten Base ist.',
          icon: 'mdi:diamond-stone',
          points: ['Tippe auf Basen um Laeufer zu setzen', 'Visuelle Hervorhebung bei Besetzung', 'Leeren bei Inning Wechsel'],
        },
        {
          title: 'Komplette Spielstandstabelle',
          description: 'Vollstaendige R H E Statistiken mit scrollendem Inning fuer Inning Spielverlauf.',
          icon: 'mdi:scoreboard-outline',
          points: ['Runs Hits und Errors', 'Inning fuer Inning Tabelle', 'Laufende Summen fuer beide Teams'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wer Dieses Baseball Spielstand Tool Braucht',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool ist fuer alle gedacht, die den Spielstand fuehren muessen: Jugendbaseball Trainer, die eine klare digitale Anzeige fuer ihre Spieler wollen, Softball Liga Freiwillige, die Spiele ohne eigenen Spielstandsfuehrer organisieren, Eltern, die die Spiele ihrer Kinder von den Tribuenen aus verfolgen, und Schiedsrichter, die ein sekundaeres Ueberpruefungssystem wuenschen. Die Oberflaeche funktioniert auf jedem Geraet, von Smartphones im Spielerraum bis zu Tablets am Zaun oder Laptops auf der Bank. Keine Installation erforderlich, einfach den Browser oeffnen und mit der Spielstandserfassung beginnen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Automatische Zaehlerverwaltung:</strong> Balls und Strikes werden automatisch nach Walks, Strikeouts, Hits und Outs zurueckgesetzt. Keine manuellen Ruecksetzungen erforderlich.',
        '<strong>Beruehrungsempfindliches Diamantfeld:</strong> Tippe auf das erste, zweite oder dritte Base, um Laeufer zu setzen oder zu entfernen. Das Diamantfeld leuchtet in Gold, um besetzte Basen anzuzeigen.',
        '<strong>Inning fuer Inning Ergebnisse:</strong> Jedes Halbinnning wird in der Tabelle aufgezeichnet. Sieh genau, wie jedes Team in allen neun Innings gepunktet hat.',
        '<strong>Keine Einrichtung Erforderlich:</strong> Oeffne die Seite und beginne sofort mit der Spielstandserfassung. Passe Teamnamen an, indem du auf die Beschriftungen ueber den Ergebnissen tippst.',
      ],
    },
    {
      type: 'title',
      text: 'Baseball Spielstandsfuehrung Vereinfacht: Zaehler Diamant und Tabelle an Einem Ort',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Spielstandsfuehrung im Baseball erfordert die gleichzeitige Verfolgung mehrerer Dinge: den Ball und Strike Zaehler, die Anzahl der Outs, welche Basen besetzt sind, die Runs jedes Teams und das aktuelle Inning. Den Ueberblick ueber eine dieser Groessen zu verlieren, fuehrt zu Verwirrung und ungenauen Aufzeichnungen. Dieses Tool buendelt alles auf einem einzigen Bildschirm. Die Zaehlerpunkte zeigen Balls und Strikes auf einen Blick. Das Diamantfeld zeigt die Laeuferpositionen. Die R H E Tabelle zeigt die vollstaendige Spielstandstabelle. Und die Inning Tabelle scrollt horizontal, um den kompletten Spielverlauf anzuzeigen. Alles aktualisiert sich in Echtzeit bei jeder Beruehrung.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Trainer', html: '<p>Behalte eine klare digitale Anzeige, die fuer dein gesamtes Team vom Spielerraum aus sichtbar ist.</p>' },
        { type: 'card', title: 'Freiwillige', html: '<p>Keine Erfahrung in der Spielstandsfuehrung erforderlich. Das Tool uebernimmt die gesamte komplexe Verfolgung automatisch.</p>' },
        { type: 'card', title: 'Eltern', html: '<p>Verfolge das Spiel von den Tribuenen aus mit einer zuverlaessigen Echtzeit Spielstandsanzeige auf deinem Telefon.</p>' },
        { type: 'card', title: 'Spieler', html: '<p>Sieh dir die Inning fuer Inning Ergebnisse nach dem Spiel an, um die Leistung zu analysieren.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Baseball Spielstand',
    description: 'Erfasse Runs, Hits und Errors mit Diamantansicht.',
    away: 'Auswaerts',
    home: 'Heim',
    runs: 'R',
    hits: 'H',
    errors: 'E',
    inning: 'Inning',
    topInning: 'Oben',
    bottomInning: 'Unten',
    balls: 'Balls',
    strikes: 'Strikes',
    outs: 'Outs',
    strikeBtn: 'Strike',
    ballBtn: 'Ball',
    foulBtn: 'Foul',
    hitBtn: 'Hit',
    outBtn: 'Out',
    walkBtn: 'Walk',
    runBtn: '+1 Run',
    errorBtn: 'Error',
    newBatter: 'Neuer Schlagmann',
    resetMatch: 'Spiel Zuruecksetzen',
    resetConfirm: 'Das aktuelle Spiel zuruecksetzen? Alle Ergebnisse gehen verloren.',
    cancel: 'Abbrechen',
    confirm: 'Bestaetigen',
    total: 'Gesamt',
    fullscreen: 'Vollbild',
    toggleSound: 'Ton Ein Aus',
  },
};
