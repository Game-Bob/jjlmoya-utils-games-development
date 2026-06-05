import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'tennis-spielstand';
const title = 'Tennis Punktestand Online : Kostenloser Match Tracker';
const description = 'Verfolge Tennis-Matches mit Satz- und Spiel-Punktzählung. Kostenloser Online-Tennis-Punktestand für Matches und Turniere. Keine Registrierung nötig.';

const faqData = [
  {
    question: 'Wie funktioniert die Zählweise im Tennis?',
    answer: 'Tennis-Matches bestehen aus Spielen und Sätzen. Ein Spiel wird mit Love, 15, 30, 40 gezählt. Bei 40-40 spricht man von Einstand (Deuce), und ein Spieler muss zwei Punkte in Folge gewinnen. Ein Satz wird vom ersten Spieler gewonnen, der 6 Spiele mit 2 Spielen Vorsprung gewinnt. Bei 6-6 wird ein Tiebreak gespielt.',
  },
  {
    question: 'Wie benutze ich diese Tennis-Anzeigetafel?',
    answer: 'Drücke den Plus-Button für einen Spieler, wenn er punktet. Der Stand aktualisiert sich automatisch. Der Punktestand verfolgt die Aufschlag-Reihenfolge, Spielstände, aktuelle Sätze und abgeschlossene Satz-Historien.',
  },
  {
    question: 'Wann wechseln Tennisspieler die Seiten?',
    answer: 'Tennisspieler wechseln die Seiten nach dem ersten, dritten und jedem weiteren ungeraden Spiel eines Satzes. Sie wechseln auch am Ende eines Satzes, es sei denn, die Gesamtzahl der Spiele ist gerade. Im Tiebreak wechseln die Spieler alle 6 Punkte die Seiten.',
  },
  {
    question: 'Unterstützt diese Anzeigetafel Tiebreaks?',
    answer: 'Ja, wenn ein Satz 6-6 erreicht, wechselt der Punktestand automatisch in den Tiebreak-Modus, bei dem Punkte numerisch bis 7 gezählt werden. Ein Spieler muss mit 2 Punkten Vorsprung gewinnen, um den Tiebreak und Satz zu beenden.',
  },
  {
    question: 'Kann ich dies auf meinem Mobiltelefon nutzen?',
    answer: 'Ja, die Benutzeroberfläche ist für mobile Geräte mit großen Tasten optimiert. Du kannst auch den Vollbildmodus aktivieren, um den Bildschirm während des Spiels wach zu halten.',
  },
];

const howToData = [
  {
    name: 'Spielernamen festlegen',
    text: 'Tippe auf die Spielernamen-Eingabefelder, um benutzerdefinierte Namen einzugeben. Sie werden in deinem Browser gespeichert.',
  },
  {
    name: 'Punkte hinzufügen',
    text: 'Klicke auf den Plus-Button für den Spieler, der den Ballwechsel gewonnen hat. Der Stand aktualisiert sich automatisch.',
  },
  {
    name: 'Satzergebnisse verwalten',
    text: 'Der Tracker schließt Spiele und Sätze automatisch ab. Er archiviert abgeschlossene Sätze und wechselt zum nächsten Satz.',
  },
  {
    name: 'Seiten wechseln',
    text: 'Die Anzeigetafel erinnert dich, wenn die Spieler die Seiten wechseln müssen. Tippe auf den Wechsel-Button, um die visuellen Seiten zu tauschen.',
  },
  {
    name: 'Match beenden',
    text: 'Der Tracker beendet das Match automatisch gemäß den Tennisregeln und gibt den Gewinner bekannt.',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Kostenloser Online Tennis Punktestand und Match Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Zählweise im Tennis kann mit Begriffen wie Einstand, Vorteil und Tiebreak herausfordernd sein. Dieser kostenlose Online-Tennis-Punktestand automatisiert den gesamten Prozess. Du musst nur den Plus-Button drücken, wenn ein Spieler punktet. Das Tool verwaltet Punkte, Spiele, Sätze und Seitenwechsel automatisch in Echtzeit.',
    },
    {
      type: 'title',
      text: 'Wie die Tennis-Zählweise in diesem Punktestand funktioniert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tennis verwendet eine einzigartige Zählstruktur. Ein Standardspiel durchläuft Love, 15, 30, 40 und Spiel. Wenn beide Spieler 40 erreichen, steht es Einstand (Deuce). Vom Einstand aus muss ein Spieler zwei Punkte in Folge gewinnen, um das Spiel zu gewinnen. Der erste Punkt heißt Vorteil (Advantage), und der nächste Punkt sichert das Spiel. Wenn der Gegner den nächsten Punkt gewinnt, geht der Stand zurück auf Einstand. Sätze gewinnt der erste Spieler, der 6 Spiele mit einem Vorsprung von 2 gewinnt. Wenn der Satz 6-6 erreicht, wird ein Tiebreak bis 7 Punkte gespielt.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Freizeitspiele',
          description: 'Schnelle und einfache Zählweise für lockere Tennis-Matches mit Freunden.',
          icon: 'mdi:tennis',
          points: ['Ein-Klick-Zählung', 'Seitenwechsel-Anzeige', 'Funktioniert offline'],
        },
        {
          title: 'Club Spiele',
          description: 'Perfekte Verfolgung für Club-Matches und Turniere.',
          icon: 'mdi:trophy-outline',
          points: ['Satz-Historie-Archiv', 'Best of 3 oder 5 Sätze', 'Mobilfreundliches Layout'],
        },
        {
          title: 'Turniermodus',
          description: 'Entwickelt für offizielle Match-Verfolgung und Schiedsrichter-Einsatz.',
          icon: 'mdi:school',
          points: ['Tiebreak-Unterstützung', 'Vollbild-Anzeigetafel', 'Lokale Datensicherheit'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Besondere Funktionen des Punktestands',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatische Tennis-Regellogik</strong> berechnet Love, 15, 30, 40, Einstand, Vorteil und Tiebreak automatisch.',
        '<strong>Satz-Historie-Archiv</strong> zeigt die Ergebnisse vorheriger Sätze auf einen Blick.',
        '<strong>Seitenwechsel-Hilfe</strong> fordert Spieler auf, die Seiten zu wechseln.',
        '<strong>Lebendige Punkt-Feiern</strong> zeigt schwebende Partikel für gewonnene Punkte.',
        '<strong>Best of 3 oder 5 Sätze</strong> konfigurierbare Match-Format-Einstellungen.',
        '<strong>Namen lokal gespeichert</strong> behält benutzerdefinierte Namen über Besuche hinweg.',
      ],
    },
    {
      type: 'title',
      text: 'Digitale Zählweise vs. Manuelle Verfolgung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuelle Anzeigetafeln erfordern ständige Konzentration, um Zahlen zu aktualisieren, die Aufschlag-Reihenfolge zu merken, Tiebreaks zu prüfen und Seitenwechsel zu berechnen. Dieser digitale Tennis-Punktestand handhabt jede Tennisregel automatisch. Du kannst dich ganz auf das Match konzentrieren, während das Tool Satz-Historien aktualisiert und den Gewinner mit einer Feier-Zeremonie bekannt gibt.',
    },
  ],
  ui: {
    playerA: 'Spieler 1',
    playerB: 'Spieler 2',
    winnerLabel: 'SIEGER',
    finishMatch: 'Match beenden',
    newGame: 'Neuer Satz',
    serving: 'Aufschlag',
    changeSide: 'Seiten wechseln',
    swapHint: 'Zum Seitenwechsel tippen',
    game: 'Spiel',
    set: 'Satz',
    gamePoint: 'Spielpunkt',
    setPoint: 'Satzpunkt',
    matchPoint: 'Matchpunkt',
    mode: 'Sätze',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Punkte',
    reset: 'Zurücksetzen',
    resetConfirm: 'Match zurücksetzen? Alle Daten gehen verloren.',
    cancel: 'Abbrechen',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild beenden',
    deuce: 'Einstand',
    advantage: 'Vorteil',
    tiebreak: 'Tiebreak',
  },
};
