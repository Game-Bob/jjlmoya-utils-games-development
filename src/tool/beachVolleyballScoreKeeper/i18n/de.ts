import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'beachvolleyball-spielstand';
const title = 'Beachvolleyball Spielstand und Aufschlagreihenfolge';
const description = 'Verfolge Beachvolleyball Punkte, Aufschlagreihenfolge, Seitenwechsel durch Wind und Satze mit einer interaktiven Sandplatzvisualisierung von oben.';

const faq = [
  {
    question: 'Wann wechseln Teams im Beachvolleyball die Seiten?',
    answer: 'Um Fairness unter Freiluftbedingungen (Wind, Sonne, Sand) zu gewahrleisten, wechseln Teams alle 7 Punkte in den ersten beiden Satzen und alle 5 Punkte im entscheidenden dritten Satz die Seiten.',
  },
  {
    question: 'Wie funktioniert die Aufschlagreihenfolge im Beachvolleyball?',
    answer: 'Jedes Team hat 2 Spieler, die sich beim Aufschlag abwechseln mussen. Wenn ein Team einen Aufschlagbruch (Side-out) gewinnt, muss der Aufschlag wechseln, sodass der Spieler, der beim letzten Aufschlag des Teams nicht aufgeschlagen hat, als nachster aufschlagt.',
  },
  {
    question: 'Wie viele Punkte werden benotigt, um einen Beachvolleyball-Satz zu gewinnen?',
    answer: 'Satz 1 und 2 werden bis 21 Punkte gespielt. Wenn ein dritter Satz erforderlich ist, wird er bis 15 Punkte gespielt. In allen Fallen muss ein Team mit mindestens 2 Punkten Vorsprung gewinnen.',
  },
];

const howTo = [
  {
    name: 'Aufstellung Konfigurieren',
    text: 'Gib benutzerdefinierte Namen fur die beiden Spieler von Team A und Team B ein.',
  },
  {
    name: 'Punkte Aufzeichnen',
    text: 'Tippe auf die Teamkarte oder klicke auf den interaktiven Sandplatz, um Punkte hinzuzufugen. Die Aufstellung und Rotation werden automatisch aktualisiert.',
  },
  {
    name: 'Seitenwechsel Warnungen Beachten',
    text: 'Wenn das Wechselbanner nach unten rutscht, fuhre einen physischen Seitenwechsel durch und klicke auf die Wechseltaste, um die Platzausrichtung zu invertieren.',
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

export const content: BeachVolleyballLocaleContent = {
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
      text: 'Online Beachvolleyball Spielstandsanzeige und Aufschlagreihenfolge',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den Uberblick uber die Aufschlagreihenfolge und Teampositionen in der heissen Sonne zu behalten, kann schwierig sein. Dieser professionelle Beachvolleyball-Spielstandsanzeiger verfugt uber ein sandtexturiertes, kontrastreiches digitales Platzlayout, das fur die Sichtbarkeit im Freien optimiert ist. Es verhindert Blendungsprobleme beim Ablesen, automatisiert die Seitenwechselregeln und verfolgt, welcher der beiden Spieler nach jedem Side-out Punkt aufschlagen muss.',
    },
    {
      type: 'title',
      text: 'Beachvolleyball Aufschlagreihenfolge und Regeln Verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Obwohl es im 2v2 Beachvolleyball keine festen Positionen oder Rotationsfehler basierend auf der Platzposition gibt, mussen die Spieler den Aufschlag streng abwechseln. Immer wenn das annehmende Team einen Ballwechsel gewinnt (Side-out), erhalt es das Aufschlagsrecht. Der Spieler, der beim letzten Aufschlag seines Teams nicht aufgeschlagen hat, muss der neue Aufschlagende sein. Das Aufschlagen in falscher Reihenfolge ist ein Fehler und fuhrt zu einem Punkt fur die Gegner. Diese digitale Anzeige verfugt uber aktive Aufschlagpunkte und springende Ballindikatoren neben den Spielerkreisen, um Rotationsfehler zu vermeiden.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Offizielle FIVB Regeln',
          description: 'Erfulle die offiziellen Bewertungsrichtlinien, einschliesslich Satzgrenzen und Seitenwechsel.',
          icon: 'mdi:volleyball',
          points: ['Satze bis 21 (Tiebreak bis 15)', 'Strenger 2-Punkte Vorsprung', 'Automatisierte Seitenwechsel'],
        },
        {
          title: 'Aufschlagverfolgung',
          description: 'Streite oder verwechsle nie, wer an der Reihe ist aufzuschlagen.',
          icon: 'mdi:account-sync-outline',
          points: ['Leuchtende Aufschlaganzeigen', 'Initialen auf dem Sand', 'Aufstellungsoverlay Modal'],
        },
        {
          title: 'Fur Aussen Optimiert',
          description: 'Entwickelt fur das Spielen auf Sandplatzen bei direktem Sonnenlicht.',
          icon: 'mdi:weather-sunny',
          points: ['Kontrastreiches gelbes Design', 'Wake Lock Bildschirmpersistenz', 'Wischgeste zum Ruckgangig machen'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktive Funktionen und Spieleinstellungen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Goldener Sand SVG Platz:</strong> Zeigt den Spielstand visuell an. Tippe direkt auf eine der beiden Spielfeldhalfen, um diesem Team einen Punkt zu geben.',
        '<strong>Platzrotationsanimation:</strong> Wenn die Seitenwechselwarnung ausgelost wird, dreht ein Klick auf die Wechseltaste den gesamten SVG Platz um 180 Grad, sodass die Anzeige mit euren physischen Positionen ubereinstimmt.',
        '<strong>FIVB Seitenwechselalarme:</strong> Zeigt ein gut sichtbares Warnbanner an, wenn die Gesamtpunktzahl ein Vielfaches von 7 (in Satz 1 und 2) oder ein Vielfaches von 5 (im letzten Satz) betragt.',
        '<strong>Sandspritzer Partikel:</strong> Fugt bei Punkteanderungen visuelles Feedback mit animierten Sandpartikeln hinzu, die von den Tippkoordinaten aufwirbeln.',
        '<strong>Ruckgangig Geste:</strong> Wische auf der Karte nach unten, um den letzten aufgezeichneten Punkt sofort ruckgangig zu machen.',
      ],
    },
    {
      type: 'title',
      text: 'Warum Wechseln Teams im Beachvolleyball die Seiten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im Gegensatz zum Hallenvolleyball werden Beachvolleyballspiele stark von Umwelteinflussen wie Sonnenblendung, Hitze, Windstarke und Sandbeschaffenheit beeinflusst. Haufige Seitenwechsel stellen sicher, dass kein Team einen unfairen Vorteil durch eine gunstige Windrichtung oder die Sonne in den Augen erhalt. Die Regeln schreiben vor, dass die Seiten in den ersten beiden Satzen alle 7 Punkte und im dritten Satz alle 5 Punkte gewechselt werden.',
    },
  ],
  ui: {
    teamA: 'Team 1',
    teamB: 'Team 2',
    points: 'Punkte',
    sets: 'Satze',
    reset: 'Zurucksetzen',
    resetConfirm: 'Spiel zurucksetzen? Alle Punkte und Aufstellungen gehen verloren.',
    cancel: 'Abbrechen',
    switchSides: 'Seiten Wechseln',
    switchSidesDesc: 'Gesamtpunktzahl hat Wechselschwelle erreicht!',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild Beenden',
    player1: 'Spieler 1',
    player2: 'Spieler 2',
    serving: 'Aufschlag',
    winner: 'Gewinner',
    undo: 'Ruckgangig',
  },
};
