import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'padel-spielstand';
const title = 'Padel Spielstand : Gold Point & Aufschlagrotation';
const description = 'Verfolge Padel-Punkte mit der offiziellen Punto de Oro (Gold Point) Regel, Aufschlagrotations-Alarmen, Tiebreaks und dynamischer Seitenwechsel-Animation.';

const faq = [
  {
    question: 'Was ist der Gold Point (Punto de Oro) beim Padel?',
    answer: 'Der Gold Point ist ein Entscheidungspunkt, der gespielt wird, wenn der Spielstand 40-40 (Einstand) erreicht. Es gibt kein Vorteilsspiel. Das aufschlagende Team wählt, ob es den Aufschlag auf der linken oder rechten Seite annimmt, und wer diesen einen Punkt gewinnt, gewinnt das gesamte Spiel.',
  },
  {
    question: 'Wie funktionieren Satzformate beim Padel?',
    answer: 'Standardspiele werden im Best-of-3-Sätzen ausgetragen, wobei jeder Satz vom ersten Team gewonnen wird, das 6 Spiele erreicht (mit 2 Spielen Vorsprung). Bei 6-6 wird ein 7-Punkte-Tiebreak gespielt. Ein optionales Golden-Set-Format endet bei 4 Spielen mit einem Tiebreak bei 4-4.',
  },
  {
    question: 'Wann wechseln Spieler die Seiten beim Padel?',
    answer: 'Die Spieler wechseln die Seiten nach dem ersten Spiel und dann alle 2 Spiele (wenn die Summe der Spiele im aktuellen Satz ungerade ist, z. B. 1, 3, 5). Während Tiebreaks wechseln die Spieler alle 6 Punkte die Seiten.',
  },
];

const howTo = [
  {
    name: 'Satzformat konfigurieren',
    text: 'Wähle das Standardformat (erster auf 6 Spiele) oder das kürzere Golden-Set-Format (erster auf 4 Spiele).',
  },
  {
    name: 'Spielernamen eingeben',
    text: 'Gib Teamnamen ein, um die Anzeigetafel zu personalisieren. Deine Einstellungen werden automatisch gespeichert.',
  },
  {
    name: 'Punkte auf dem Platz erfassen',
    text: 'Tippe auf eine Seite des visuellen isometrischen Padelplatzes, um Punkte zu erzielen. Aufschlaganzeiger führen dich durch die diagonalen Rotationen.',
  },
  {
    name: 'Gold Points entscheiden',
    text: 'Wenn der Einstand erreicht ist, wähle die Rückschlagseite (linker oder rechter Annahmespieler) und klicke auf das gewinnende Team, um das Spiel zu beenden.',
  },
];

const faqSchema: WithContext<FAQPage> = {
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
  description,
  step: howTo.map((step, i) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: PadelScoreKeeperLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kostenlose Online Padel Anzeigetafel & Spielverfolgung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Verfolgen der Punkte beim Padel kann mit schnellen Ballwechseln, Tiebreaks, Seitenwechseln und der offiziellen Punto de Oro (Gold Point) Regel verwirrend sein. Diese kostenlose Online-Padel-Anzeigetafel nimmt dir die Mühe der Punkteverfolgung ab. Tippe einfach auf das visuelle Spielfeld, um Punkte zu erfassen, und lass das Tool automatisch Aufschlagrotationen, Annahmeseiten, Satzverläufe und Seitenwechsel in Echtzeit verwalten.',
    },
    {
      type: 'title',
      text: 'Padel-Punktesystem, Gold Points und Rotationen verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Padel verwendet ein dem Tennis ähnliches Punktesystem (15, 30, 40, Spiel), führt aber spezifische Regeln für schnelleres Spiel ein. Nach den professionellen FIP-Regeln wird bei einem Spielstand von 40-40 ein entscheidender Gold Point (Punto de Oro) gespielt. Das annehmende Team wählt aus, welche Seite (links oder rechts) den Aufschlag erhält, und der Gewinner dieses einzigen Punktes gewinnt das Spiel. Außerdem müssen die Teams die Seiten wechseln, wenn die Gesamtzahl der Spiele in einem Satz ungerade ist, und alle 6 Punkte während eines Tiebreaks.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Freundschaftsspiele',
          description: 'Schnelle und saubere Punkteverfolgung für Freundschaftsspiele mit deinen Padel-Partnern.',
          icon: 'mdi:tennis',
          points: ['Punkte mit einem Klick', 'Optimiert für Mobilgeräte', 'Funktioniert offline'],
        },
        {
          title: 'Verein & Liga',
          description: 'Verfolge mühelos wettbewerbsorientierte Vereinsspiele und lokale Turniere.',
          icon: 'mdi:trophy-outline',
          points: ['Satzverlaufsarchiv', '6-Spiele oder 4-Spiele Sätze', 'Gold Point Unterstützung'],
        },
        {
          title: 'Schiedsrichter Modus',
          description: 'Voll ausgestattetes Tool zum Leiten offizieller Spiele oder Trainingseinheiten.',
          icon: 'mdi:school',
          points: ['Aktive Aufschlag- & Annahmemarker', 'Interaktive Platzrotation', 'Vollbild-Konsolenmodus'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Erweiterte Digitale Funktionen für Padel-Spieler',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Offizielle Gold Point Logik</strong> erlaubt dem annehmenden Team, die Annahmeseite bei Einstand zu wählen und zeigt den Aufschlagweg an.',
        '<strong>Visueller Platzanzeiger</strong> zeigt die Positionen von Aufschläger (S) und Annahmespieler (R) dynamisch an, um Rotationsfehler zu vermeiden.',
        '<strong>Automatischer Seitenwechsel</strong> dreht das Platzlayout bei ungeraden Spielen oder Tiebreak-Intervallen, damit es immer mit deiner physischen Ansicht übereinstimmt.',
        '<strong>Anpassbare Satzformate</strong> unterstützt Standardsätze mit 6 Spielen oder schnelle Golden Sets mit 4 Spielen.',
        '<strong>Lokale Browser-Autospeicherung</strong> bewahrt Spielernamen und aktuelle Spielstände, selbst wenn du die Seite aktualisierst.',
      ],
    },
    {
      type: 'title',
      text: 'Padel Tiebreak-Regeln: Standard vs. Super Tiebreak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In standardmäßigen Padel-Sätzen wird bei einem Spielstand von 6-6 ein 7-Punkte-Tiebreak gespielt. Bei einem Tiebreak werden die Punkte numerisch gezählt (1, 2, 3, usw.). Das erste Team, das 7 Punkte mit einem Vorsprung von 2 erreicht, gewinnt den Satz. Der Spieler, der an der Reihe ist aufzuschlagen, serviert den ersten Punkt von der rechten (Einstand-)Seite. Danach schlägt jeder Spieler zwei aufeinanderfolgende Punkte auf, beginnend von der linken (Vorteils-)Seite. In einigen Turnierformaten wird bei einem Satzstand von 1-1 ein 10-Punkte-Super-Tiebreak anstelle eines vollständigen dritten Satzes gespielt, um das Spiel zu entscheiden.',
    },
    {
      type: 'title',
      text: 'Platzwechsel und Rotationen: Fairness beim Padel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Seitenwechsel ist beim Padel unerlässlich, um sicherzustellen, dass Umgebungsfaktoren wie Sonne, Wind oder platsspezifische Unebenheiten kein Team bevorzugen. Die Spieler müssen die Seiten nach dem ersten Spiel jedes Satzes und dann nach jeweils zwei Spielen wechseln (z. B. bei 1-0, 2-1, 3-2, 4-3, 5-4). Unsere digitale Padel-Anzeigetafel verfügt über eine dynamische Seitenwechsel-Animation, die das visuelle Platzlayout automatisch um 180 Grad dreht, wenn die Spieler physisch die Seiten wechseln müssen. Dadurch wird sichergestellt, dass das oben auf deinem Bildschirm angezeigte Team immer mit dem Team übereinstimmt, das am anderen Ende des physischen Platzes spielt.',
    },
    {
      type: 'title',
      text: 'Standard-Sätze vs. Golden Sets Format',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Während Standardspiele mit 6 Spielen pro Satz gespielt werden, verwenden viele Freizeitligen und schnelle Turniere das "Golden Set"-Format, bei dem Sätze nur bis 4 Spiele gespielt werden (mit Tiebreak bei 4-4). Diese Anzeigetafel ermöglicht es dir, mit einem einzigen Tipp in der Symbolleiste zwischen diesen Formaten zu wechseln. Unabhängig vom ausgewählten Format verwaltet die Anzeigetafel alle Tiebreaks, Aufschlagrotationen und Punkteberechnungen automatisch.',
    },
    {
      type: 'title',
      text: 'Tipps für effektive Punkteverfolgung auf dem Platz',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Verwende einen Platzständer oder Handyhalter:</strong> Befestige dein Handy oder Tablet am Padelplatzzaun in Netzhöhe. So können Spieler auf beiden Seiten die aktuelle Punktzahl und die Aufschlaganzeiger leicht sehen.',
        '<strong>Personalisiere Namen vor Spielbeginn:</strong> Nimm dir 10 Sekunden Zeit, um die tatsächlichen Namen der Spieler oder Teams einzugeben. Das macht die Sprachansagen (falls aktiviert) und die visuelle Anzeigetafel viel ansprechender und offizieller.',
        '<strong>Aktiviere den Vollbildmodus:</strong> Klicke auf die Vollbild-Schaltfläche im Kopfbereich. Dies maximiert die Anzeigetafel-Oberfläche und verhindert, dass sich der Bildschirm bei langen Ballwechseln automatisch ausschaltet.',
      ],
    },
    {
      type: 'title',
      text: 'Warum einen digitalen Padel-Spielstand verwenden?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Anstatt ständig darüber zu diskutieren, wer aufschlägt, wer an der Reihe ist anzunehmen oder wie der Spielstand ist, sorgt ein digitaler Spielstand dafür, dass alle auf dem gleichen Stand sind. Durch die visuelle Darstellung der Aufschläger- und Annahmepositionen direkt auf dem Bildschirm können die Spieler schnell auf das Handy auf der Bank schauen und genau wissen, wo sie stehen müssen. Das verbessert das Spieltempo und verhindert Rotationsfehler.',
    },
  ],
  ui: {
    playerA: 'Team 1',
    playerB: 'Team 2',
    game: 'Spiel',
    set: 'Satz',
    tiebreak: 'Tiebreak',
    goldPoint: 'Gold Point',
    selectReceiver: 'Annahmespieler wählen',
    leftReceiver: 'Linker Annahmespieler',
    rightReceiver: 'Rechter Annahmespieler',
    server: 'Aufschläger',
    receiver: 'Annahmespieler',
    changeEnds: 'Seiten wechseln',
    matchWon: 'Gewonnen',
    reset: 'Zurücksetzen',
    resetConfirm: 'Spiel zurücksetzen? Alle Daten gehen verloren.',
    cancel: 'Abbrechen',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild beenden',
    deuce: 'Einstand',
    advantage: 'Vorteil',
    formatStandard: '6 Spiele',
    formatGoldenSet: '4 Spiele',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Gold Point Entscheidungspunkt',
  },
};
