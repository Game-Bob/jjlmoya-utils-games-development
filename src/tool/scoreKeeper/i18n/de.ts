import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'sport-punktestand';
const title = 'Sport Anzeigetafel Online: Kostenloser Punktezähler (2026)';
const description =
  'Digitale Anzeigetafel mit riesigen Tasten für das Handy. Ideal für Padel, Tischtennis und Fußball. Keine nervige Werbung während des Spiels. Einfach und schnell.';

const faqData = [
  {
    question: 'Funktioniert es ohne Internetverbindung?',
    answer:
      'Ja, sobald die Seite geladen ist, funktioniert die Anzeigetafel komplett offline. Sie benötigen während des Spiels weder Daten noch WLAN. Alles wird lokal in Ihrem Browser gespeichert.',
  },
  {
    question: 'Kann ich die Anzeigetafel für Tennis und Padel verwenden?',
    answer:
      'Ja, der Tennis/Padel-Modus handhabt automatisch die Sequenz 15-30-40-AD und verfolgt Sätze und Spiele gemäß den offiziellen Regeln. Perfekt für Freundschaftsspiele.',
  },
  {
    question: 'Kann sie im Vollbildmodus angezeigt werden?',
    answer:
      'Ja, Sie können den Vollbildmodus über Ihren Browser aktivieren (F11 am PC oder die Vollbild-Taste am Handy). Die Zahlen nehmen 80 % des Bildschirms ein, um maximale Sichtbarkeit zu gewährleisten.',
  },
  {
    question: 'Wie korrigiere ich einen Punkt, wenn ich einen Fehler mache?',
    answer:
      'Auf jeder Spielerkarte gibt es eine separate Taste zum Abziehen von Punkten. Sie können Fehler schnell korrigieren, ohne die gesamte Anzeigetafel neu starten zu müssen.',
  },
  {
    question: 'Funktioniert es für Basketball mit 1-, 2- und 3-Punkt-Körben?',
    answer:
      'Ja, im Basketball-Modus erscheinen dedizierte +1, +2 und +3 Tasten, um jeden Spielzug schnell und ohne zusätzliches Tippen zu punkten.',
  },
  {
    question: 'Regelt die Anzeigetafel den Aufschlag beim Tischtennis automatisch?',
    answer:
      'Ja, im Tischtennis-Modus wechselt die Aufschlagsanzeige automatisch alle 2 Punkte (oder bei Gleichstand nach jedem Punkt), gemäß den offiziellen ITTF-Regeln.',
  },
];

const howToData = [
  {
    name: 'Wählen Sie Ihre Sportart',
    text: 'Wählen Sie die Sportart aus dem Selektor oben aus: Frei, Tennis, Padel, Tischtennis, Volleyball oder Basketball.',
  },
  {
    name: 'Namen anpassen',
    text: 'Tippen Sie auf "HEIM" oder "GAST", um die Spieler- oder Teamnamen zu ändern.',
  },
  {
    name: 'Punkte mit einem Tipp hinzufügen',
    text: 'Tippen Sie auf den großen Bereich der Anzeigetafel, um einen Punkt hinzuzufügen. Verwenden Sie beim Basketball die Tasten +1, +2 oder +3.',
  },
  {
    name: 'Aufschlag anzeigen',
    text: 'Verwenden Sie die Aufschlag-Taste in der unteren Ecke, um zu markieren, wer aufschlägt. Die gelbe Anzeige erscheint automatisch.',
  },
  {
    name: 'Fehler korrigieren',
    text: 'Verwenden Sie die "−"-Taste, wenn Sie versehentlich einen Punkt hinzugefügt haben. Die gesamte Anzeigetafel muss nicht neu gestartet werden.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Offizielle Regeln und Referenzen',
  bibliography: [
    {
      name: 'ITTF: Offizielle Tischtennis-Regeln',
      url: 'https://www.ittf.com/handbook/',
    },
    {
      name: 'ITF: Offizielle Tennis-Regeln',
      url: 'https://www.itftennis.com/en/about-us/governance/rules-and-regulations/',
    },
    {
      name: 'FIP: Offizielle Padel-Regelungen',
      url: 'https://www.padelfip.com/es/regulaciones/',
    },
    {
      name: 'FIVB: Offizielle Volleyball-Regeln',
      url: 'https://www.fivb.com/en/volleyball/thegame_volleyball/rulesofthegame_volleyball',
    },
    {
      name: 'FIBA: Offizielle Basketball-Regeln',
      url: 'https://www.fiba.basketball/en/official-basketball-rules',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ihr digitaler Schiedsrichter für die Hosentasche',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der Hitze des Gefechts verliert man leicht den Überblick. "War es 4-3 oder 3-4?". Diese Anzeigetafel wurde entwickelt, um solche Streitigkeiten zu schlichten, bevor sie entstehen. Mit einer Benutzeroberfläche aus <strong>riesigen Tasten</strong>, die fast die gesamte Karte einnehmen, können Sie Punkte hinzufügen, ohne auf den Bildschirm zu schauen, indem Sie einfach Ihren Arm nach dem Telefon auf der Bank ausstrecken.',
    },
    {
      type: 'title',
      text: 'Intelligenter Sport-Selektor',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tennis / Padel Modus',
          description:
            'Angepasste Benutzeroberfläche mit Satz- und Spielezählern. Das System handhabt automatisch die Sequenz 15-30-40-AD.',
          icon: 'mdi:tennis',
          points: ['Offizielle Regeln', 'Vorteils-Management', 'Satz-Zähler'],
        },
        {
          title: 'Basketball Modus',
          description:
            'Die Anzeigetafel erkennt die Sportart und ändert ihre Benutzeroberfläche. Dedizierte +1, +2 und +3 Tasten.',
          icon: 'mdi:basketball',
          points: ['Schnelle Dreier', 'Freiwürfe', 'Kein extra Tippen'],
        },
        {
          title: 'Tischtennis Modus',
          description:
            'Vergessen Sie das Auswendiglernen, wer mit dem Aufschlag an der Reihe ist. Die visuelle Anzeige wechselt automatisch alle 2 Punkte.',
          icon: 'mdi:table-tennis',
          points: ['ITTF-Regeln', 'Aufschlagswechsel', 'Einstand-Modus (11 Pkt.)'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Für den Sport entwickelte Funktionen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Hohe Sichtbarkeit:</strong> Zahlen, die 80 % des Bildschirms einnehmen, für maximale Lesbarkeit in der Sonne.',
        '<strong>Editierbare Namen:</strong> Tippen Sie auf "HEIM" oder "GAST", um die Spielernamen festzulegen.',
        '<strong>Fehlervermeidung:</strong> Separate Minus-Taste zur schnellen Korrektur von Fehlern ohne Neustart.',
        '<strong>Funktioniert offline:</strong> Einmal geladen, ist während des Spiels kein Internet erforderlich.',
      ],
    },
  ],
  ui: {
    playerA: 'HEIM',
    playerB: 'GAST',
    swapSides: 'Seiten wechseln',
    reset: 'Zurücksetzen',
    serve: 'Aufschlag',
    sets: 'Sätze',
    games: 'Spiele',
    victory: 'SIEG!',
    newGame: 'Neues Spiel',
    continueGame: 'Weiterspielen',
    resetConfirm: 'Anzeigetafel zurücksetzen?',
    sportSimple: 'Frei (Fußball, Tic-Tac-Toe...)',
    sportTennis: 'Tennis',
    sportPadel: 'Padel',
    sportPingpong: 'Tischtennis',
    sportVolleyball: 'Volleyball',
    sportBasket: 'Basketball',
  },
};
