import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'tischtennis-punktestand';
const title = 'Tischtennis Punktestand Online : Kostenloser Table Tennis Tracker';
const description =
  'Verfolge Tischtennis-Matches mit Spiel- und Satzpunktzählung. Kostenloser Online-Punktestand für Trainingsspiele und Turniere. Keine Anmeldung nötig.';

const faqData = [
  {
    question: 'Wie funktioniert die Zählweise beim Tischtennis?',
    answer:
      'Ein normales Tischtennisspiel wird bis 11 Punkte gespielt. Du musst mit 2 Punkten Vorsprung gewinnen. Bei 10:10 wird weitergespielt, bis jemand mit 2 Punkten führt. Der Aufschlag wechselt alle 2 Punkte. Dieser Punktestand verfolgt all das automatisch.',
  },
  {
    question: 'Wie benutze ich diesen Punktestand?',
    answer:
      'Drücke die +-Taste unter jedem Spieler, um einen Punkt zu vergeben. Der Spielstand aktualisiert sich automatisch. Wenn ein Spieler 11 Punkte mit 2 Punkten Vorsprung erreicht, endet das Spiel und ein neues beginnt. Der Spielstandsanzeiger zeigt, wie viele Spiele jeder Spieler gewonnen hat. Drücke Spiel beenden, wenn das Match vorbei ist.',
  },
  {
    question: 'Wie funktioniert die Aufschlag-Anzeige?',
    answer:
      'Der Aufschlag wechselt alle 2 Punkte. Ein Punkt erscheint neben dem Spieler, der aufschlägt. Dies folgt den offiziellen Tischtennisregeln. Du kannst jederzeit im Match sehen, wer aufschlagen müsste.',
  },
  {
    question: 'Kann ich es während eines Spiels auf dem Handy benutzen?',
    answer:
      'Ja. Die Benutzeroberfläche ist mobilfreundlich mit großen Tasten. Der Vollbildmodus blendet den Browser aus und hält den Bildschirm wach.',
  },
  {
    question: 'Speichert es meine Spieldaten?',
    answer:
      'Ja. Der aktuelle Spielstand, gewonnene Spiele und Spielernamen werden automatisch im Browser gespeichert.',
  },
];

const howToData = [
  {
    name: 'Namen eingeben',
    text: 'Tippe auf den Standard-Spielernamen und gib deinen eigenen ein. Namen werden automatisch gespeichert.',
  },
  {
    name: 'Punkt vergeben',
    text: 'Drücke den großen runden +-Knopf für den Spieler, der gepunktet hat. Der Stand aktualisiert sich mit einer Jubel-Animation.',
  },
  {
    name: 'Punkt zurücknehmen',
    text: 'Drücke den Minus-Knopf, falls du versehentlich einen Punkt vergeben hast.',
  },
  {
    name: 'Neues Spiel starten',
    text: 'Wenn ein Spiel endet, drücke Neues Spiel, um das nächste zu beginnen. Oder drücke Spiel beenden, um das Match zu beenden.',
  },
  {
    name: 'Match beenden',
    text: 'Drücke Spiel beenden, um den Gewinner mit Trophäe und Konfetti zu feiern.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Kostenloser Online-Tischtennis-Punktestand : Match-Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Zählweise beim Tischtennis sollte einfach sein, aber die Regeln können verwirrend sein. Wer schlägt als Nächstes auf? Steht es 10:10 oder 11:9? Wie viele Spiele hat jeder Spieler gewonnen? Dieser kostenlose Online-Punktestand erledigt all das automatisch. Du drückst einfach auf +, wenn jemand punktet. Der Punktestand verfolgt Punkte pro Spiel, gewonnene Spiele und den Aufschlag. Alles aktualisiert sich in Echtzeit mit Jubel-Animationen, die jeden Punkt zählen lassen. Keine Anmeldung, kein Download, keine komplizierten Menüs.',
    },
    {
      type: 'title',
      text: 'Wie die Zählweise in diesem Punktestand funktioniert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tischtennis folgt einem standardisierten Zählsystem. Jedes Spiel geht bis 11 Punkte. Ein Spieler muss mit 2 Punkten Vorsprung gewinnen. Bei 10:10 wird weitergespielt, bis jemand mit 2 Punkten führt. Der Aufschlag wechselt alle 2 Punkte während eines Spiels. Dieser Punktestand verfolgt all diese Regeln automatisch. Du musst dir nicht merken, wer aufschlägt oder wann gewechselt wird. Die Anzeige zeigt einen Punkt neben dem aktuellen Aufschläger. Wenn ein Spieler ein Spiel gewinnt, wechselt der Punktestand automatisch zum nächsten Spiel. Der Zähler für gewonnene Spiele erhöht sich für den Gewinner. Ein Match kann beliebig viele Spiele umfassen, ist aber typischerweise Best of 5 oder 7. Drücke Spiel beenden, wenn das Match vorbei ist, und der Gewinner wird mit einer Feier bekannt gegeben.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Trainingsspiele',
          description: 'Schnelle und einfache Zählweise für lockere Spiele mit Freunden. Automatische Spiel- und Match-Verfolgung.',
          icon: 'mdi:table-tennis',
          points: ['Ein Klick pro Punkt', 'Automatische Aufschlag-Verfolgung', 'Funktioniert offline'],
        },
        {
          title: 'Verein & Liga',
          description: 'Führe saubere Aufzeichnungen über Spiele und Ergebnisse. Perfekt für Vereinsturniere und Ligaspiele.',
          icon: 'mdi:trophy-outline',
          points: ['Gewonnene Spiele verfolgen', 'Best of 5 oder 7 Modus', 'Mobilfreundlich'],
        },
        {
          title: 'Turnierbetrieb',
          description: 'Verfolge mehrere Partien im Turniermodus. Schneller Reset zwischen den Matches.',
          icon: 'mdi:school',
          points: ['Schneller Match-Reset', 'Stand speichert', 'Vollbildmodus'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Was diesen Tischtennis-Punktestand besonders macht',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatische Spielzählung</strong> der Punktestand kennt die Regeln des Tischtennis. Spiele bis 11, Sieg mit 2 Punkten Vorsprung, automatische Aufschlagwechsel.',
        '<strong>Gewonnene Spiele verfolgen</strong> jedes gewonnene Spiel wird aufgezeichnet. Sieh auf einen Blick, wie viele Spiele jeder Spieler im Match gewonnen hat.',
        '<strong>Aufschlag-Anzeige</strong> ein sichtbarer Punkt zeigt, welcher Spieler aufschlägt, nach der 2-Punkte-Wechselregel.',
        '<strong>Jubel-Animationen</strong> jeder Punkt löst eine zufällige Jubel-Animation aus. Acht verschiedene Effekte halten jeden Punkt spannend.',
        '<strong>Schwebende Partikel</strong> jeder erzielte Punkt erzeugt schwebenden Text, der den Moment feiert.',
        '<strong>Match-Abschluss-Zeremonie</strong> drücke Spiel beenden, um eine Gewinner-Bekanntgabe mit Trophäe und Konfetti auszulösen.',
        '<strong>Bearbeitbare Spielernamen</strong> tippe auf das Namensfeld, um Spieler umzubenennen. Namen werden im Browser gespeichert.',
        '<strong>Vollbildmodus</strong> blendet die Browser-Oberfläche aus, sodass die Anzeige den Bildschirm füllt und wach bleibt.',
        '<strong>Offline zuerst</strong> funktioniert ohne Internet. Keine Werbung, kein Tracking, keine Datensammlung.',
      ],
    },
    {
      type: 'title',
      text: 'Punktestand vs. Manuelle Zählweise',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bei der manuellen Zählweise im Tischtennis muss man den Punktestand verfolgen, sich merken, wer aufschlägt, wissen, wann der Aufschlag wechselt, und die gewonnenen Spiele zählen. Besonders in einem schnellen Spiel verliert man leicht den Überblick. Dieser digitale Punktestand erledigt alles automatisch. Du musst nur einen Knopf drücken, wenn ein Punkt erzielt wird. Der Punktestand verfolgt das Spielergebnis, erkennt, wann ein Spiel gewonnen wird, zeichnet gewonnene Spiele auf und zeigt an, wer aufschlägt. Jeder Punkt wird mit Animationen und Partikeln gefeiert. Der Stand gerät nie durcheinander und du verpasst nie einen Aufschlagwechsel. Ob du nun ein lockeres Spiel mit Freunden spielst oder an einem Turnier teilnimmst, dieser kostenlose Online-Tischtennis-Punktestand bietet alles, was du brauchst.',
    },
  ],
  ui: {
    playerA: 'Spieler 1',
    playerB: 'Spieler 2',
    winnerLabel: 'SIEGER',
    finishMatch: 'Spiel beenden',
    newGame: 'Neues Spiel',
    serving: 'Aufschlag',
    changeSide: 'Seiten wechseln',
    swapHint: 'Zum Wechseln tippen',
    game: 'Spiel',
    set: 'Satz',
    gamePoint: 'Spielpunkt',
    matchPoint: 'Matchpunkt',
    mode: 'Format',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Punkte',
    reset: 'Zurücksetzen',
    resetConfirm: 'Match zurücksetzen? Alle Daten gehen verloren.',
    cancel: 'Abbrechen',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild beenden',
  },
};
