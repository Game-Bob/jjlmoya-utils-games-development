import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'darts-punktestand';
const title = 'Darts Punktestand Online : Leg und Set Tracker';
const description = 'Verfolge Darts-Matches mit Leg- und Set-Punktzählung. Kostenloser Online-Darts-Punktestand für 501 und 301 Matches mit live Checkout-Berechnungen und Statistiken.';

const faqData = [
  {
    question: 'Wie funktioniert die Zählweise bei 501 und 301 Darts?',
    answer: 'Spieler starten mit einem festgelegten Punktestand von 501 oder 301 Punkten. Jeder Spieler wirft abwechselnd drei Pfeile, und der Gesamtwert dieser Würfe wird von ihrem Punktestand abgezogen. Das Ziel ist es, genau null Punkte zu erreichen. Wenn die Double-Out-Regel aktiviert ist, muss der letzte gewinnende Wurf auf einem Doppelsegment oder dem inneren Bullseye landen.',
  },
  {
    question: 'Was ist ein Bust im Darts und wann passiert es?',
    answer: 'Ein Bust tritt auf, wenn ein Spieler mehr Punkte erzielt als sein Restpunktestand beträgt, oder wenn sein Punktestand auf genau einen Punkt fällt, während die Double-Out-Regel aktiv ist. Wenn ein Spieler bustet, endet sein Durchgang sofort und sein Punktestand wird auf den Wert zu Beginn dieses Durchgangs zurückgesetzt.',
  },
  {
    question: 'Wie berechnet man den Darts-Durchschnitt?',
    answer: 'Ein Darts-Durchschnitt wird berechnet, indem die Gesamtpunktzahl durch die Gesamtzahl der geworfenen Pfeile geteilt und das Ergebnis mit drei multipliziert wird. Dies repräsentiert die durchschnittliche Punktzahl, die ein Spieler pro Standard-Dreipfeil-Durchgang erzielt.',
  },
  {
    question: 'Was ist ein Checkout im Darts?',
    answer: 'Ein Checkout ist die spezifische Kombination von Würfen, die nötig ist, um den Restpunktestand auf null zu reduzieren und das Leg zu gewinnen. Professionelle Punktestände zeigen Checkout-Vorschläge für Werte von 170 und darunter an und geben Hinweise, welche Einzel-, Doppel- oder Dreifachfelder angezielt werden sollten.',
  },
];

const howToData = [
  {
    name: 'Startpunktestand und Regeln wählen',
    text: 'Wähle entweder 501 oder 301 als Startpunktestand und schalte die Double-Out-Regel je nach gewünschtem Spielniveau ein oder aus.',
  },
  {
    name: 'Spielernamen eingeben',
    text: 'Klicke auf die Spielernamenfelder oben auf der Anzeigetafel, um Namen anzupassen. Die Werte werden automatisch im Browser gespeichert.',
  },
  {
    name: 'Geworfene Darts erfassen',
    text: 'Nutze das interaktive Tastenfeld oder tippe direkt auf die Dartscheiben-Sektoren, um Würfe zu erfassen. Wähle zuerst den Multiplikator (Einfach, Doppel oder Dreifach) und dann die getroffene Zahl.',
  },
  {
    name: 'Checkout-Empfehlungen folgen',
    text: 'Wenn dein Restpunktestand unter 170 fällt, sieh im Checkout-Bereich nach den optimalen Zielen, um das Leg zu beenden.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: 'Kostenloser Online Darts Punktestand und Match Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Punkteverwaltung im Darts erfordert schnelles Kopfrechnen und Konzentration. Dieser digitale Darts-Leg-Tracker führt alle Berechnungen für dich durch, sodass du dich voll und ganz auf das Werfen konzentrieren kannst. Egal, ob du alleine übst oder ein Wettkampfspiel mit Freunden spielst, diese Anzeigetafel verfolgt Punkte, Legs, Sets, Wurfdurchschnitte und Double-Out-Checkout-Ziele.',
    },
    {
      type: 'title',
      text: 'Standard Darts Zählformate erklärt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Darts-Matches werden in Legs und Sets gespielt. Die weltweit beliebtesten Formate sind 501 und 301, beides Subtraktionsspiele, bei denen die Spieler ihren Punktestand auf null reduzieren.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '501 Turnier',
          description: 'Das Standardformat für professionelle Turniere weltweit.',
          icon: 'mdi:trophy-outline',
          points: ['Standard Startwert', 'Double-Out erforderlich', 'Hohe Punkteausbeute'],
        },
        {
          title: '301 Casual',
          description: 'Eine schnellere Version des Subtraktionsspiels, ideal für schnelle Matches.',
          icon: 'mdi:clock-outline',
          points: ['Schnelleres Spiel', 'Double-In Option üblich', 'Ideal zum Üben'],
        },
        {
          title: 'Cricket Modus',
          description: 'Ein strategisches Zielspiel, beliebt in Kneipen und Freizeitligen.',
          icon: 'mdi:bullseye',
          points: ['Fokus auf Zahlen 15-20', 'Bullseye-Verfolgung', 'Alternatives Regelwerk'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Darts Checkout Mathematik verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der höchste mögliche Checkout im Darts ist 170, erzielt durch Triple 20, Triple 20 und Double Bull. Wenn dein Punktestand 170 oder weniger erreicht, bist du im Checkout-Bereich, wo eine bestimmte Wurfsequenz das Spiel gewinnen kann.',
    },
    {
      type: 'table',
      headers: ['Punktestand', 'Pfeil 1 Ziel', 'Pfeil 2 Ziel', 'Pfeil 3 Ziel'],
      rows: [
        ['170', 'Triple 20 (60)', 'Triple 20 (60)', 'Double Bull (50)'],
        ['120', 'Triple 20 (60)', 'Single 20 (20)', 'Double 20 (40)'],
        ['100', 'Triple 20 (60)', 'Single 20 (20)', 'Double 10 (20)'],
        ['80', 'Triple 20 (60)', 'Double 10 (20)', '-'],
        ['40', 'Double 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Funktionen dieser digitalen Darts-Anzeigetafel',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Interaktive Eingabemethoden</strong> wechsel zwischen einem visuellen radförmigen Dartboard und einem schnellen Zahlenfeld.',
        '<strong>Intelligenter Checkout-Rechner</strong> zeigt live Kombinationen zum Beenden von Legs an.',
        '<strong>Bust-Erkennung</strong> setzt ungültige Würfe automatisch zurück und warnt den Benutzer.',
        '<strong>Durchgangs-Verlaufslog</strong> verfolgt vorherige Runden und Restpunktestände.',
        '<strong>Detaillierte Match-Statistiken</strong> berechnet Dreipfeil-Durchschnitte dynamisch.',
      ],
    },
    {
      type: 'title',
      text: 'Manuelle vs Digitale Darts-Verfolgung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Traditionelle Kreidetafeln erfordern Schreiben, Ausradieren und ständige Berechnungen. Dieses Online-Punktestand beseitigt Fehlerrisiken, automatisiert Durchschnitte und zeigt Checkout-Ziele an. Stelle dein Gerät neben das Board, aktiviere den Vollbildmodus, um den Bildschirm aktiv zu halten, und genieße problemlose Punkteverfolgung.',
    },
  ],
  ui: {
    playerA: 'Spieler 1',
    playerB: 'Spieler 2',
    winnerLabel: 'SIEGER',
    reset: 'Zurücksetzen',
    resetConfirm: 'Match zurücksetzen? Alle Daten gehen verloren.',
    cancel: 'Abbrechen',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild beenden',
    leg: 'Leg',
    set: 'Set',
    average: 'Schnitt',
    checkout: 'Checkout',
    busted: 'Busted',
    dart: 'Darts Durchgang',
    score301: '301',
    score501: '501',
    doubleOut: 'Double Out',
    noCheckout: 'Kein Checkout',
  },
};
