import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'elfmeterschiessen-rechner';
const title = 'Elfmeterschießen Rechner: Live Fußball Ergebnisstander';
const description =
  'Verfolgen Sie Fußball-Elfmeterschießen in Echtzeit. Mit 5-Schuss-Anzeige, mathematischem Ausscheidungsmodus, Sudden Death und Sieger-Animation.';

const faqData = [
  {
    question: 'Wann endet ein Elfmeterschießen vorzeitig?',
    answer:
      'Ein Elfmeterschießen endet, sobald eine Mannschaft einen Vorsprung erzielt, den die andere Mannschaft mit den verbleibenden Schüssen mathematisch nicht mehr einholen kann.',
  },
  {
    question: 'Wie funktioniert Sudden Death beim Elfmeterschießen?',
    answer:
      'Steht es nach jeweils 5 Schüssen unentschieden, wird das Schießen einzeln fortgesetzt, bis ein Team trifft und das andere im selben Durchgang verschießt.',
  },
  {
    question: 'Wer schießt beim Elfmeterschießen zuerst?',
    answer:
      'Der Schiedsrichter wirft eine Münze zur Wahl des Tors und eine zweite Münze zur Entscheidung, welches Team zuerst antritt.',
  },
  {
    question: 'Kann der Torwart während des Elfmeterschießens ausgewechselt werden?',
    answer:
      'Ein verletzter Torwart kann durch einen benannten Auswechselspieler ersetzt werden, sofern das Team sein Auswechselkontingent noch nicht ausgeschöpft hat.',
  },
];

const howToData = [
  {
    name: 'Teamnamen eingeben',
    text: 'Geben Sie die Wunschnamen der beiden Mannschaften in die Eingabefelder ein.',
  },
  {
    name: 'Schüsse protokollieren',
    text: 'Klicken Sie nach jedem Schuss auf TOR oder FEHL. Die App aktualisiert Spielstand, Rundenanzeige und Schussrecht automatisch.',
  },
  {
    name: 'Sudden-Death-Modus',
    text: 'Bei Gleichstand nach 5 Schüssen wechselt der Rechner automatisch in den Sudden-Death-Modus.',
  },
  {
    name: 'Sieger verkünden',
    text: 'Bei rechnerischem Sieg oder Entscheidung im Sudden Death verkündet ein Pokal-Overlay das Siegerteam.',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Offizielle IFAB-Regeln für das Elfmeterschießen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Elfmeterschießen (offiziell <em>Schüsse von der Strafstoßmarke</em>) entscheidet nach Regel 10 der IFAB-Spielregeln über den Sieger eines unentschiedenen K.-o.-Spiels.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Schüsse zu Beginn' },
        { value: '11m', label: 'Entfernung zum Tor' },
        { value: '1v1', label: 'Schütze vs Torwart' },
        { value: 'ABBA / AB', label: 'Schussreihenfolge' },
      ],
    },
    {
      type: 'tip',
      title: 'Mathematische Ausscheidungsregel',
      html: 'Hat ein Team mehr Tore erzielt als dem gegnerischen Team Schüsse verbleiben, beendet der Schiedsrichter das Schießen sofort.',
    },
    {
      type: 'title',
      text: 'Reguläre Phase vs Sudden Death im Vergleich',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Reguläre Phase (5 Schüsse)',
          description: 'Jedes Team führt 5 Schüsse abwechselnd aus. Vorzeitiges Ende nur bei mathematischer Unmöglichkeit.',
        },
        {
          title: 'Sudden Death Phase',
          description: 'Einzelne Schussdurchgänge ab Runden 6. Jede Tordifferenz nach gleicher Schusszahl bringt die Entscheidung.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Wichtige IFAB-Bestimmungen',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Regel / Bestimmung', 'Offizieller IFAB-Standard'],
      rows: [
        ['Teilnahmeberechtigt', 'Nur Spieler, die bei Spielende auf dem Feld stehen, dürfen Schüsse ausführen.'],
        ['Position des Torwarts', 'Muss im Moment des Schusses mit mindestens einem Teil eines Fußes die Torlinie berühren.'],
        ['Täuschen beim Anlauf', 'Täuschen im Anlauf erlaubt; Täuschen nach Abschluss des Anlaufs wird geahndet.'],
        ['Gleichzahl der Spieler', 'Wurde ein Spieler des Gegners feldverwiesen, muss das andere Team seine Spielerzahl anpassen.'],
      ],
    },
    {
      type: 'title',
      text: 'Vor und Nachteile des Elfmeterschießens',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Bewertung des Formats',
      items: [
        {
          pro: 'Garantiert einen eindeutigen Sieger in einem planbaren Zeitrahmen.',
          con: 'Hoher psychologischer Druck kann die Leistung der 120 Spielminuten in den Schatten stellen.',
        },
        {
          pro: 'Bietet höchste Spannung für Fans und Zuschauer.',
          con: 'Fehlschüsse einzelner Akteure werden oft übermäßig belastet.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Heimmannschaft',
    teamBLabel: 'Auswärtsmannschaft',
    scoreGoal: 'TOR',
    scoreMiss: 'FEHL',
    undo: 'Rückgängig',
    reset: 'Zurücksetzen',
    suddenDeath: 'Sudden Death',
    regularRounds: 'Reguläre Runde',
    roundLabel: 'Runde',
    turnLabel: 'Am Schuss',
    winnerTitle: 'Sieger steht fest',
    unreachableLead: 'Unerreichbarer Vorsprung',
    regularRoundsWin: 'Sieg nach 5 regulären Runden',
    suddenDeathWin: 'Sieg im Sudden Death',
    statusPending: 'Offen',
    statusScored: 'Treffer',
    statusMissed: 'Verschossen',
  },
};
