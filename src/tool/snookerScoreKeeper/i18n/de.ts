import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'snooker-frame-tracker-break-rechner';
const title = 'Premium Snooker Frame Tracker und Break Rechner';
const description = 'Verfolge live Snooker-Frame-Ergebnisse, berechne aktuelle Break-Werte, zeige verbleibende Punkte auf dem Tisch an und erhalte Echtzeit-Status zum Rückstand, einschließlich benöter Snooker.';

const faqData = [
  {
    question: 'Wie werden die maximal verbleibenden Punkte auf dem Snookertisch berechnet?',
    answer: 'Jede verbleibende rote Kugel ist 8 Punkte wert (1 Punkt für die Rote selbst plus 7 Punkte für das Einlochen einer schwarzen Farbe). Sobald alle Roten eingelocht sind, sind die verbleibenden Farben insgesamt 27 Punkte wert.',
  },
  {
    question: 'Was bedeutet es, wenn dieser Rechner Snooker benötigt anzeigt?',
    answer: 'Es bedeutet, dass der Punkterückstand größer ist als die gesamten verbleibenden Punkte auf dem Tisch, sodass ein Spieler Fouls des Gegners erzwingen muss, um aufzuschließen.',
  },
  {
    question: 'Was ist eine entscheidende Schwarz-Situation?',
    answer: 'Ein entscheidendes Schwarz-Szenario tritt ein, wenn alle Kugeln eingelocht sind und die Frame-Ergebnisse unentschieden stehen, sodass eine zurückgesetzte schwarze Kugel den Gewinner bestimmt.',
  },
];

const howToData = [
  {
    name: 'Spielernamen Konfigurieren',
    text: 'Gib benutzerdefinierte Namen für die beiden Snooker-Spieler ein, um die Anzeige des Scoreboards anzupassen.',
  },
  {
    name: 'Kugeln Einlochen und Breaks Aufbauen',
    text: 'Tippe auf die leuchtenden Filzkugeln, um eingelochte Kugeln in der Reihenfolge zu erfassen. Der Rechner sperrt nicht erlaubte Farben gemäß den Regeln.',
  },
  {
    name: 'Rückstandsstatus Prüfen',
    text: 'Beobachte die Live-Statusleiste, um zu sehen, ob ein Spieler sicher ist, Snooker benötigt oder das Frame noch offen ist.',
  },
  {
    name: 'Foul-Strafen Erfassen',
    text: 'Öffne das Foul-Menü, um Strafpunkte direkt dem Gegner zuzuweisen und den aktiven Spielerzug zu wechseln.',
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Kostenloser Online Snooker Frame Scorekeeper und Break Zähler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vereinfache deine Snooker-Frames mit unserer digitalen Anzeigetafel. Das Tool berechnet aktive Break-Punkte, verbleibende Tischpunkte und zeigt die exakte Punktedifferenz an. Die Filz-optische Oberfläche bietet interaktive Indikatoren, die sich dynamisch basierend auf den Snooker-Regelabfolgen beleuchten. Egal, ob du ein lokales Clubturnier schiedsrichterst oder freundschaftliche Partien zu Hause verfolgst, diese Anwendung übernimmt alle Berechnungen automatisch.',
    },
    {
      type: 'title',
      text: 'Snooker Punktesystem und Rückstandsberechnungen Verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Standard-Snookerspiel beginnt mit fünfzehn roten Kugeln, die jeweils einen Punkt wert sind. Die Spieler müssen zwischen einer roten und einer farbigen Kugel abwechseln. Jede eingelochte Farbkugel wird bis zum Ende der Roten zurückgesetzt. Danach müssen die Farben in ihrer numerischen Reihenfolge von Gelb bis Schwarz eingelocht werden. Dieser Rechner verfolgt die Sequenz und warnt, wenn Snooker erforderlich sind. Durch die Berechnung der Punktelücke und der maximal verbleibenden Punkte auf dem Tisch ermittelt er genau, wann ein Frame seine Gewinnschwelle erreicht hat.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frame Anzeigetafel',
          description: 'Behalte den Überblick über Frame-Ergebnisse und Spielerzüge auf einem kontrastreichen Display.',
          icon: 'mdi:scoreboard-outline',
          points: ['Klare Hervorhebung des aktiven Spielers', 'Benutzerdefinierte Spielernamen', 'Rückgängig mit einem Klick'],
        },
        {
          title: 'Break Rechner',
          description: 'Echtzeit-Verfolgung aktiver Einlochen-Breaks mit farbcodiertem Verlauf.',
          icon: 'mdi:billiards',
          points: ['Verlaufsstreifen eingelochter Kugeln', 'Automatische Kugelsperrung nach Regeln', 'Farbcodierter Break-Status'],
        },
        {
          title: 'Verbleibende Punktanzeigen',
          description: 'Verfolge die maximal verbleibenden Punkte auf dem grünen Filztisch.',
          icon: 'mdi:percent-outline',
          points: ['Punktedifferenz-Verfolgung', 'Dynamische Snooker-Bedarfswarnungen', 'Erkennung entscheidendes Schwarz'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktive Steuerung und Audio Feedback',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Taktiles Filz-HUD</strong> ermöglicht das Antippen der Kugeln zum Hinzufügen von Punkten und zeichnet sie auf der Break-Zeitleiste auf.',
        '<strong>Foul-Aktions-Buttons</strong> weisen vier bis sieben Strafpunkte dem Gegner zu und beenden den aktiven Zug.',
        '<strong>Dynamische Statusanzeige</strong> aktualisiert sich, um normales Spiel, sicheren Vorsprung oder erforderliche Snooker anzuzeigen.',
        '<strong>Audio-Synthese</strong> löst beim Einlochen ein Geräusch und bei Fouls einen Summer aus.',
      ],
    },
    {
      type: 'title',
      text: 'Snooker Foulregeln und Strafpunktsystem Erklärt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fouls im Snooker geben Punkte an den Gegner. Der Strafwert richtet sich nach dem Wert der Zielkugel oder der am Foul beteiligten Kugel, mit einer Mindeststrafe von vier Punkten. Das Einlochen der weißen Spielkugel, das zuerst Berühren einer Farbe statt einer Roten oder das Verfehlen aller Kugeln führt zu einer Strafe. Wird ein Foul beim Zielen auf Blau, Pink oder Schwarz begangen, beträgt die Strafe fünf, sechs bzw. sieben Punkte. Diese digitale Anzeigetafel verfügt über ein praktisches Foul-Panel zum einfachen Hinzufügen von Strafwerten und wechselt automatisch den aktiven Spieler.',
    },
    {
      type: 'title',
      text: 'Was Passiert bei Einem Entscheidenden Schwarz Szenario?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn alle Kugeln eingelocht wurden und die Frame-Ergebnisse unentschieden stehen, wird die schwarze Kugel auf ihre ursprüngliche Position zurückgesetzt. Die Spieler losen aus, wer zuerst spielt, und der erste Spieler, der die Schwarze einlocht oder ein Foul begeht, verliert das Frame. Diese Regel des entscheidenden Schwarz gewährleistet eine faire Entscheidung bei knappen Spielen ohne zusätzliche komplette Frames. Unser Tracker erkennt diesen verbundenen Endspielzustand automatisch und benachrichtigt beide Spieler.',
    },
    {
      type: 'title',
      text: 'Warum Einen Digitalen Snooker Tracker Verwenden?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die manuelle Berechnung verbleibender Punkte und Rückstandsspannen während knapper Frames ist anfällig für menschliche Fehler. Dieses Browser-Tool liefert genaue Echtzeit-Statistiken, sodass sich Spieler auf ihre Technik und Strategie konzentrieren können. Durch die interaktive Zeitleiste eingelochter Kugeln können Schiedsrichter kontroverse Breaks leicht überprüfen und die offizielle Spielkontinuität wahren.',
    },
  ],
  ui: {
    title: 'Snooker Scorekeeper',
    description: 'Frame-Ergebnisse und Breaks verfolgen.',
    player1: 'Spieler 1',
    player2: 'Spieler 2',
    score: 'Punktzahl',
    currentBreak: 'Break',
    remainingPoints: 'Verbleibend',
    deficit: 'Rückstand',
    statusSafe: 'Sicher',
    statusNeedSnookers: 'Snooker Nötig',
    statusDecidingBlack: 'Entscheidendes Schwarz',
    statusNormal: 'Normal',
    foul: 'Foul',
    foulTitle: 'Foul-Strafe Auswählen',
    foulPoints: 'Strafe',
    foulOnRed: 'Rot/Gelb/Grün/Braun',
    foulOnYellow: 'Gelb',
    foulOnGreen: 'Grün',
    foulOnBrown: 'Braun',
    foulOnBlue: 'Blau',
    foulOnPink: 'Pink',
    foulOnBlack: 'Schwarz',
    reset: 'Zurücksetzen',
    resetConfirm: 'Aktuelles Frame zurücksetzen? Alle Punkte gehen verloren.',
    cancel: 'Abbrechen',
    confirm: 'Zurücksetzen Bestätigen',
    endTurn: 'Zug Beenden',
    miss: 'Fehlversuch',
    redsRemaining: 'Rote',
    pocketedBalls: 'Eingelocht',
    toggleSound: 'Ton Umschalten',
    fullscreen: 'Vollbild',
  },
};
