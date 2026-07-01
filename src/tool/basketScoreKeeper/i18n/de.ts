import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'basketball-anzeigetafel';
const title = 'Basketball Anzeigetafel online: Kostenloser Punktezähler';
const description =
  'Kostenlose Online-Basketball-Anzeigetafel mit +1-, +2- und +3-Tasten. Punkte zählen für Straßenball, Highschool- und lokale Ligaspiele. Keine Anmeldung, kein Download, funktioniert offline.';

const faqData = [
  {
    question: 'Wie zählt man Punkte in einem Basketballspiel?',
    answer:
      'Im Basketball gibt es drei Punktwerte: Freiwurf (+1 Punkt), Feldkorb (+2 Punkte) und Dreipunktwurf (+3 Punkte). Tippe jedes Mal auf die entsprechende Taste, wenn eine Mannschaft punktet. Die Anzeigetafel zählt die Summe automatisch. Um einen Fehler zu korrigieren, nutze die Minus-Taste neben dem Punktestand.',
  },
  {
    question: 'Was ist der Unterschied zwischen +1, +2 und +3 im Basketball?',
    answer:
      '+1 steht für Freiwürfe, die nach einem Foul vergeben werden. +2 ist für einen regulären Feldkorb innerhalb der Dreipunktelinie. +3 ist für Würfe von jenseits der Dreipunktelinie. Getrennte Tasten für jeden Wert ermöglichen schnelleres Zählen und reduzieren Fehler im Vergleich zu einem einfachen Zähler.',
  },
  {
    question: 'Kann ich diese Anzeigetafel für ein echtes Basketballspiel verwenden?',
    answer:
      'Ja. Die Anzeigetafel ist für echte Spiele ausgelegt: Straßenball, Highschool-Spiele, lokale Liga-Partien und Trainingsspiele. Der Punktestand wird im Browser gespeichert, sodass du die Seite neu laden kannst, ohne den Spielstand zu verlieren.',
  },
  {
    question: 'Wie zähle ich Punkte bei Straßen- oder Freizeit-Basketball?',
    answer:
      'Straßenbasketball wird meist auf eine Zielpunktzahl gespielt (z. B. 21 oder 16) mit 1ern und 2ern (oder nur 1ern). Diese Anzeigetafel funktioniert für jedes Format. Verwende +1 für normale Körbe und +2 für Würfe hinter der Dreipunktelinie. Lege deine eigene Gewinnbedingung fest und nutze die Minus-Taste bei einem Fehler.',
  },
  {
    question: 'Funktioniert es offline auf dem Handy?',
    answer:
      'Ja. Sobald die Seite geladen ist, arbeitet die Anzeigetafel vollständig offline. Perfekt für Außenplätze, Sporthallen ohne WLAN oder überall mit schlechtem Empfang. Du kannst auch in den Vollbildmodus wechseln, und der Bildschirm bleibt an, sodass er während des Spiels nicht sperrt.',
  },
  {
    question: 'Wie behalte ich den Überblick über Mannschaftsfouls und Bonus?',
    answer:
      'Diese Anzeigetafel konzentriert sich auf die Punkteanzeige selbst. Für Mannschaftsfouls kannst du die Team-Namensfelder nutzen, um Fouls manuell zu erfassen (z. B. "HEIM" in "HEIM 3F" umbenennen). Wir empfehlen, für offizielle Spiele ein separates Foul-Tracking-Tool zu verwenden.',
  },
  {
    question: 'Kann ich diesen Basketball-Punktezähler auf meinem Handy verwenden?',
    answer:
      'Ja. Die Oberfläche ist mobil optimiert. Die +1-, +2- und +3-Tasten sind groß und leicht mit dem Daumen zu erreichen. Der Vollbildmodus blendet die Browser-Oberfläche aus, sodass die Anzeigetafel den gesamten Bildschirm einnimmt, und die Bildschirmsperre verhindert, dass sich das Handy ausschaltet.',
  },
];

const howToData = [
  {
    name: 'Mannschaften benennen',
    text: 'Tippe auf HEIM oder GAST, um die Teamnamen einzugeben. Die Namen werden automatisch im Browser gespeichert und bleiben auch nach einem Neuladen der Seite erhalten.',
  },
  {
    name: 'Freiwurf erzielen (+1)',
    text: 'Tippe auf die +1-Taste, wenn ein Spieler einen Freiwurf verwandelt. Jeder Freiwurf ist einen Punkt wert und wird in der Regel nach einem Foul vergeben.',
  },
  {
    name: 'Feldkorb erzielen (+2)',
    text: 'Tippe auf die +2-Taste für einen regulären Korb innerhalb der Dreipunktelinie. Dies ist die häufigste Aktion im Basketball.',
  },
  {
    name: 'Dreipunktwurf erzielen (+3)',
    text: 'Tippe auf die +3-Taste, wenn ein Spieler von jenseits der Dreipunktelinie trifft. Ein Dreipunktwurf wird mit einer roten Taste hervorgehoben und löst einen extra Jubel-Effekt aus.',
  },
  {
    name: 'Punktfehler korrigieren',
    text: 'Wenn du versehentlich Punkte hinzugefügt hast, tippe auf die Minus-Taste, um sie abzuziehen. Es wird nicht unter null gehen. Ein kleiner Fehler erfordert keinen kompletten Neustart des Spiels.',
  },
  {
    name: 'Seiten zur Halbzeit wechseln',
    text: 'Nutze die Wechsel-Taste, um die Positionen von HEIM und GAST zur Halbzeit zu tauschen. Beide Punktestände und Teamnamen werden getauscht, sodass keine Daten verloren gehen.',
  },
  {
    name: 'Neues Spiel starten',
    text: 'Tippe auf die Reset-Taste und bestätige, um alle Punkte zu löschen und ein neues Spiel zu starten. Die Teamnamen bleiben erhalten, sodass du sie nicht erneut eingeben musst.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Kostenlose Online-Basketball-Anzeigetafel: Keine Anmeldung, kein Download',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Punktezählen im Basketball sollte einfach sein. Ein Freiwurf ist +1. Ein Feldkorb ist +2. Ein Dreipunktwurf ist +3. Diese Anzeigetafel hat eine eigene Taste für jeden Wert, sodass du einfach tippen und weiterspielen kannst. Keine Menüs, keine Modi, keine Konfiguration. Gib deinen Mannschaften einen Namen und fang an zu zählen. Der Punktestand wird automatisch im Browser gespeichert, sodass du die Seite neu laden, dein Handy schließen oder später zurückkommen kannst, ohne das Spiel zu verlieren.',
    },
    {
      type: 'title',
      text: 'Warum ein eigener Basketball-Punktezähler besser ist als ein einfacher Zähler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Punktezähler-Apps zwingen dich, mehrmals auf dieselbe Taste zu drücken, um zwei oder drei Punkte zu addieren. Das extra Tippen summiert sich über ein 40-minütiges Spiel und erhöht das Risiko, bei einem Fastbreak oder einer schnellen Auswechslung den Überblick zu verlieren. Diese Anzeigetafel hat <strong>drei separate Tasten</strong>: eine für jeden Punktwert: sodass du genau einmal pro Spielzug tippst. Die +3-Taste leuchtet rot und löst eine explosive Animation aus, die die Spannung eines verwandelten Dreipunktwurfs unterstreicht.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Straßenball & Freizeit',
          description:
            'Spiele bis 16 oder 21 mit 1ern und 2ern. Diese Anzeigetafel handhabt beide Werte. Verwende einfach +1 und +2 und ignoriere die +3, wenn nach Straßenregeln gespielt wird.',
          icon: 'mdi:basketball',
          points: ['Keine Einrichtung nötig', 'Funktioniert für jedes Punktziel', 'Bildschirm bleibt an'],
        },
        {
          title: 'Highschool & Lokale Liga',
          description:
            'Standard-Regeln nach FIBA oder NFHS mit Freiwürfen, Feldkörben und Dreipunktwürfen. Dank der eigenen Tasten ist die Anzeige schnell genug für einen offiziellen Punktezähler.',
          icon: 'mdi:school',
          points: ['Alle drei Punktwerte', 'Bearbeitbare Teamnamen', 'Vollbildmodus hält Handy wach'],
        },
        {
          title: 'Training & Übung',
          description:
            'Erfasste Würfe bei Wurfübungen, Trainingsspielen oder Eins-gegen-Eins-Spielen verfolgen. Der Verlauf wird nicht gespeichert, sodass jede Einheit frisch startet.',
          icon: 'mdi:whistle',
          points: ['Schneller Reset zwischen Übungen', 'Funktioniert offline in der Halle', 'Kein Konto nötig'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wie Basketball-Punktezählung funktioniert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketball hat drei Punktwerte. Ein <strong>Freiwurf</strong> ist 1 Punkt wert und wird von der Freiwurflinie nach einem Foul ausgeführt. Ein <strong>Feldkorb</strong> ist 2 Punkte wert und zählt für jeden Korb innerhalb der Dreipunktelinie während des normalen Spiels. Ein <strong>Dreipunktwurf</strong> ist 3 Punkte wert für Würfe von jenseits der Dreipunktelinie. Die meisten Profi- und Collegespiele verwenden alle drei Werte. Straßenbasketball verwendet oft nur 1er und 2er oder nur 1er. Diese Anzeigetafel passt sich jedem Format an.',
    },
    {
      type: 'title',
      text: 'Spiele in jedem Format: Sieg nach Punkten, nach Zeit oder als Erster am Ziel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketball hat keine feste Punktgrenze: das Spiel endet, wenn die Uhr abläuft. Straßenbasketball verwendet aber oft Zielpunktzahlen wie als Erster 16, 21 oder 11 (mit zwei Punkten Vorsprung). Diese Anzeigetafel erzwingt keine Gewinnbedingung, weil Basketball nicht mit einem bestimmten Punktestand endet. Du entscheidest, wann das Spiel vorbei ist, und die Reset-Taste löscht die Anzeige für das nächste Spiel. Die Teamnamen bleiben erhalten, sodass du mehrere Spiele hintereinander spielen kannst, ohne sie neu einzugeben.',
    },
    {
      type: 'title',
      text: 'Was diese Anzeigetafel besonders macht',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Drei eigene Tasten</strong>: +1, +2 und +3. Kein Durchschalten von Werten, kein langes Drücken, keine extra Tippser.',
        '<strong>Bearbeitbare Teamnamen</strong>: tippe auf den Namen, um ihn zu ändern. Namen werden im Browser gespeichert und bleiben über Seitenneuladungen hinweg erhalten.',
        '<strong>Bildschirmsperre verhindern</strong>: im Vollbildmodus verhindert die Anzeigetafel, dass sich der Handy-Bildschirm ausschaltet. Kein ständiges Antippen mehr, um den Bildschirm aktiv zu halten.',
        '<strong>Vollbildmodus</strong>: blendet Browser-Tabs und Adressleiste aus, sodass die Anzeigetafel den gesamten Bildschirm einnimmt. Einmal auf die Vollbild-Taste tippen und das Tool vergrößert sich.',
        '<strong>Offline zuerst</strong>: die gesamte Anzeigetafel funktioniert nach dem ersten Laden ohne Internetverbindung. Keine Werbung, keine Tracker, keine Datensammlung.',
        '<strong>Befriedigendes Feedback</strong>: jedes Antippen löst eine Punkte-Animation, schwebende Partikel und eine leichte Vibration auf unterstützten Geräten aus. Die +3 erhält einen extra Explosionseffekt.',
        '<strong>Spielstand wird gespeichert</strong>: lade die Seite neu, schließe den Browser oder komme morgen wieder. Die Punktestände und Teamnamen werden lokal gespeichert.',
      ],
    },
    {
      type: 'title',
      text: 'Basketball-Anzeigetafel vs. Papier-Punktzettel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Papier-Punktzettel funktioniert, aber er braucht einen Stift, eine gerade Unterlage und jemanden, der gleichzeitig schreiben und das Spiel verfolgen kann. Eine digitale Anzeigetafel löst alle drei Probleme. Die Tasten sind groß genug, um sie zu treffen, ohne hinzusehen. Die Zahlen sind von der ganzen Halle lesbar. Der Punktestand wird nie verschmiert, verloren oder versehentlich gelöscht. Und anders als Papier speichert diese Anzeigetafel den Spielstand, sodass du sie zur Halbzeit schließen und später fortsetzen kannst.',
    },
  ],
  ui: {
    playerA: 'HEIM',
    playerB: 'GAST',
    swapSides: 'Seiten wechseln',
    reset: 'Zurücksetzen',
    resetConfirm: 'Spiel zurücksetzen? Alle Punkte gehen verloren.',
    cancel: 'Abbrechen',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild beenden',
    winnerLabel: 'GEWINNER',
  },
};
