import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'baseball-spielstand';
const title = 'Baseball und Softball Spielstand mit Läuferverfolgung';
const description = 'Erfasse Live Baseballergebnisse mit Runs, Hits und Errors. Visuelles Diamantfeld mit Läuferpositionen, Ball Strike Zähler und Inning für Inning Verlaufsanzeige.';

const faqData = [
  {
    question: 'Wie funktioniert der Zähler im Baseball?',
    answer: 'Der Zähler zeigt die Anzahl der Balls und Strikes für den aktuellen Schlagmann. Balls erhöhen sich bis 4 für einen Walk. Strikes erhöhen sich bis 3 für ein Strikeout. Anpassbare Grenzen für Jugendligen.',
  },
  {
    question: 'Was zeigt das interaktive Baseball Diamantfeld?',
    answer: 'Das Diamantfeld zeigt das erste, zweite und dritte Base. Ein Tippen auf ein Base hebt es orange hervor, um einen Läufer auf diesem Base anzuzeigen. Läufer rücken bei Hits automatisch vor.',
  },
  {
    question: 'Wie werden Runs, Hits und Errors erfasst?',
    answer: 'Die R H E Matrix zeigt Runs, Hits und Errors für beide Mannschaften. Die Inning für Inning Verlaufshistorie zeigt, wie sich das Ergebnis über alle Innings aufgebaut hat.',
  },
];

const howToData = [
  {
    name: 'Jeden Pitch Erfassen',
    text: 'Tippe auf Strike, Ball, Foul, Hit oder Out, um jeden Pitch zu erfassen. Der Zähler aktualisiert sich automatisch basierend auf dem Ergebnis.',
  },
  {
    name: 'Läufer Verwalten',
    text: 'Tippe auf die Basen im Diamantfeld, um Läufer zu setzen oder zu entfernen. Bei einem Hit rücken Läufer automatisch vor.',
  },
  {
    name: 'Inning Fortschritt Verfolgen',
    text: 'Die Inning Anzeige zeigt das aktuelle Halbinnning. Nach drei Outs wechselt das Spiel automatisch zwischen dem oberen und unteren Halbinnning.',
  },
  {
    name: 'Spielstand Prüfen',
    text: 'Überprüfe die R H E Zusammenfassung und die scrollende Inning für Inning Verlaufstabelle, um den vollständigen Spielverlauf zu sehen.',
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
      html: 'Brauchst du einen zuverlässigen Baseball Spielstand für dein nächstes Spiel? Dieses kostenlose Online Tool erfasst Runs, Hits und Errors und zeigt ein interaktives Live Diamantfeld mit Echtzeit Läuferpositionen. Jeder Pitch zählt und unser digitales Scoreboard stellt sicher, dass du nie den Überblick über den Zähler, die Outs oder das Inning verlierst. Egal ob du eine Jugendliga trainierst, den Spielstand für ein Softball Turnier führst oder ein High School Spiel leitest, dieses Tool verwaltet die gesamte Spielstandstabelle automatisch, damit du dich auf das Geschehen auf dem Feld konzentrieren kannst.',
    },
    {
      type: 'title',
      text: 'Wie Dieses Baseball Scoreboard Zeit Spart und Fehler Verhindert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuelle Spielstandsführung ist fehleranfällig, besonders bei schnellen Spielen. Ein übersehener Strike oder ein übersehener Läufer kann die gesamte Spielstandstabelle durcheinanderbringen. Dieser digitale Spielstand automatisiert die mühevollen Teile. Tippe auf Strike, Ball, Foul, Hit oder Out und das Board aktualisiert sofort den Zähler. Wenn ein Schlagmann einen Walk erhält oder ausgestriket wird, setzt das Tool den Zähler automatisch zurück. Nach drei Outs wechselt es das Inning von oben nach unten und zeichnet die Runs auf. Die R H E Matrix und die Inning für Inning Verlaufstabelle geben dir einen vollständigen Überblick über das Spiel auf einen Blick.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Live Pitch Zähler',
          description: 'Automatisierte Ball und Strike Verfolgung mit Walk und Strikeout Erkennung für jeden At Bat.',
          icon: 'mdi:baseball',
          points: ['Balls bis 4 gezählt', 'Strikes bis 3 gezählt', 'Auto zurücksetzen bei Entscheidung'],
        },
        {
          title: 'Läufer Verwaltung',
          description: 'Interaktives Diamantfeld zeigt genau, wer auf dem ersten, zweiten oder dritten Base ist.',
          icon: 'mdi:diamond-stone',
          points: ['Tippe auf Basen um Läufer zu setzen', 'Visuelle Hervorhebung bei Besetzung', 'Leeren bei Inning Wechsel'],
        },
        {
          title: 'Komplette Spielstandstabelle',
          description: 'Vollständige R H E Statistiken mit scrollendem Inning für Inning Spielverlauf.',
          icon: 'mdi:scoreboard-outline',
          points: ['Runs Hits und Errors', 'Inning für Inning Tabelle', 'Laufende Summen für beide Teams'],
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
      html: 'Dieses Tool ist für alle gedacht, die den Spielstand führen müssen: Jugendbaseball Trainer, die eine klare digitale Anzeige für ihre Spieler wollen, Softball Liga Freiwillige, die Spiele ohne eigenen Spielstandsführer organisieren, Eltern, die die Spiele ihrer Kinder von den Tribünen aus verfolgen, und Schiedsrichter, die ein sekundäres Überprüfungssystem wünschen. Die Oberfläche funktioniert auf jedem Gerät, von Smartphones im Spielerraum bis zu Tablets am Zaun oder Laptops auf der Bank. Keine Installation erforderlich, einfach den Browser öffnen und mit der Spielstandserfassung beginnen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Automatische Zählerverwaltung:</strong> Balls und Strikes werden automatisch nach Walks, Strikeouts, Hits und Outs zurückgesetzt. Keine manuellen Rücksetzungen erforderlich.',
        '<strong>Berührungsempfindliches Diamantfeld:</strong> Tippe auf das erste, zweite oder dritte Base, um Läufer zu setzen oder zu entfernen. Das Diamantfeld leuchtet in Gold, um besetzte Basen anzuzeigen.',
        '<strong>Inning für Inning Ergebnisse:</strong> Jedes Halbinnning wird in der Tabelle aufgezeichnet. Sieh genau, wie jedes Team in allen neun Innings gepunktet hat.',
        '<strong>Keine Einrichtung Erforderlich:</strong> Öffne die Seite und beginne sofort mit der Spielstandserfassung. Passe Teamnamen an, indem du auf die Beschriftungen über den Ergebnissen tippst.',
      ],
    },
    {
      type: 'title',
      text: 'Baseball Spielstandsführung Vereinfacht: Zähler Diamant und Tabelle an Einem Ort',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Spielstandsführung im Baseball erfordert die gleichzeitige Verfolgung mehrerer Dinge: den Ball und Strike Zähler, die Anzahl der Outs, welche Basen besetzt sind, die Runs jedes Teams und das aktuelle Inning. Den Überblick über eine dieser Größen zu verlieren, führt zu Verwirrung und ungenauen Aufzeichnungen. Dieses Tool bündelt alles auf einem einzigen Bildschirm. Die Zählerpunkte zeigen Balls und Strikes auf einen Blick. Das Diamantfeld zeigt die Läuferpositionen. Die R H E Tabelle zeigt die vollständige Spielstandstabelle. Und die Inning Tabelle scrollt horizontal, um den kompletten Spielverlauf anzuzeigen. Alles aktualisiert sich in Echtzeit bei jeder Berührung.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Trainer', html: '<p>Behalte eine klare digitale Anzeige, die für dein gesamtes Team vom Spielerraum aus sichtbar ist.</p>' },
        { type: 'card', title: 'Freiwillige', html: '<p>Keine Erfahrung in der Spielstandsführung erforderlich. Das Tool übernimmt die gesamte komplexe Verfolgung automatisch.</p>' },
        { type: 'card', title: 'Eltern', html: '<p>Verfolge das Spiel von den Tribünen aus mit einer zuverlässigen Echtzeit Spielstandsanzeige auf deinem Telefon.</p>' },
        { type: 'card', title: 'Spieler', html: '<p>Sieh dir die Inning für Inning Ergebnisse nach dem Spiel an, um die Leistung zu analysieren.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Baseball Spielstand',
    description: 'Erfasse Runs, Hits und Errors mit Diamantansicht.',
    away: 'Auswärts',
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
    resetMatch: 'Spiel Zurücksetzen',
    resetConfirm: 'Das aktuelle Spiel zurücksetzen? Alle Ergebnisse gehen verloren.',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen',
    total: 'Gesamt',
    fullscreen: 'Vollbild',
    toggleSound: 'Ton Ein Aus',
  },
};
