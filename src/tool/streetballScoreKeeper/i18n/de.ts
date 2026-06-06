import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'streetball-3x3-spielstand';
const title = 'Streetball 3x3 Spielstand mit Wurfuhr';
const description = 'Verfolge FIBA 3x3 Streetball-Ergebnisse mit integrierter 12-Sekunden-Wurfuhr, Teamfouls, Sudden-Death-Punkten und dynamischen visuellen Anzeigen für die Spielfeldhälfte.';

const faq = [
  {
    question: 'Wie funktioniert die 12-Sekunden-Wurfuhr im 3x3 Streetball?',
    answer: 'Im FIBA 3x3 haben Teams nur 12 Sekunden Zeit für einen Korbversuch, sobald sie in Ballbesitz kommen. Die Wurfuhr wird bei Ballbesitzwechsel auf 12 zurückgesetzt oder bei offensiven Rebounds und Fouls unter bestimmten Bedingungen auf 14 Sekunden.',
  },
  {
    question: 'Was ist das Sudden-Death-Score-Limit im 3x3 Basketball?',
    answer: 'Das erste Team, das 21 Punkte erzielt, gewinnt das Spiel sofort, unabhängig von der verbleibenden Spielzeit. Dies ist die Sudden-Death-Regel.',
  },
  {
    question: 'Wie wirken sich Teamfouls auf das Spiel aus?',
    answer: 'Ab dem 7. Teamfoul erhält der Gegner 2 Freiwürfe. Beim 10. und jedem weiteren Foul gibt es 2 Freiwürfe plus Ballbesitz, was den Strafstatus auslöst.',
  },
];

const howTo = [
  {
    name: 'Teamnamen festlegen',
    text: 'Gib benutzerdefinierte Namen für die beiden Streetball-Teams ein, um die Anzeige anzupassen.',
  },
  {
    name: 'Punkte und Ballbesitz erfassen',
    text: 'Tippe auf das interaktive Asphaltfeld, um 1 Punkt (innerhalb des Bogens) oder 2 Punkte (außerhalb des Bogens) hinzuzufügen und den Ballbesitz-Indikator umzuschalten.',
  },
  {
    name: 'Wurfuhr steuern',
    text: 'Tippe auf die Wurfuhr, um auf 12 zurückzusetzen, klicke auf den sekundären Reset für 14, oder tippe doppelt, um den Countdown zu pausieren.',
  },
  {
    name: 'Teamfouls verwalten',
    text: 'Erfasse Teamfouls mit dem Zähler, der bei Strafstatus (7+ Fouls) rot wird.',
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

export const content: StreetballLocaleContent = {
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
      text: 'Kostenloses Online-3x3-Streetball-Scoreboard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Mitführen der Punktzahl in schnellen 3x3-Basketballspielen kann schwierig sein, während man eine kurze Wurfuhr verwaltet und Teamfouls im Auge behält. Dieses kostenlose Online-3x3-Streetball-Scoreboard bietet ein industrielles Asphaltthema mit kontrastreichem Neon-Design. Es verwaltet automatisch die 12-Sekunden-Wurfuhr, die Spieluhr, das Foul-Strafensystem und die Ballbesitz-Anzeigen.',
    },
    {
      type: 'title',
      text: 'FIBA 3x3 Streetball Wertungs- und Wurfuhr-Regeln',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3 Streetball unterscheidet sich vom traditionellen 5x5 Basketball. Die Spiele dauern eine 10-minütige Periode oder enden sofort, wenn ein Team 21 Punkte erreicht (Sudden Death). Würfe innerhalb des Bogens und Freiwürfe zählen 1 Punkt, während Würfe von hinter dem 6,75m-Bogen 2 Punkte zählen. Die 12-Sekunden-Wurfuhr erzwingt schnelle Angriffsaktionen, und die Spieler müssen den Ball bei einem Ballbesitzwechsel hinter den Bogen bringen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Freizeitspiele',
          description: 'Schnelle Punkterfassung für Straßenbasketball mit Freunden auf lokalen Plätzen.',
          icon: 'mdi:basketball',
          points: ['Einfache Punktauslöser', 'Responsives Layout', 'Funktioniert offline'],
        },
        {
          title: 'Turnierspiele',
          description: 'Perfekt für offizielle 3x3 Turniere und Streetball-Ligen.',
          icon: 'mdi:trophy-outline',
          points: ['10-Minuten-Countdown', 'Sudden Death bei 21 Pkt', 'Foul-Strafzustände'],
        },
        {
          title: 'Schiedsrichter Dashboard',
          description: 'Speziell für Schiedsrichter entwickelt, um schnelle Wurfuhr-Rücksetzungen und Ballbesitz zu verwalten.',
          icon: 'mdi:school',
          points: ['12s und 14s Rücksetzung', 'Summer-Sound', 'Taktile Gesten'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktive Steuerung und taktile Animationen',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12-Sekunden-Wurfuhr</strong> blinkt rot und zeigt Dezimalstellen unter 4 Sekunden an, gefolgt von einem simulierten Summer.',
        '<strong>Interaktive Beton-Spielfeldhälfte</strong> ermöglicht das Antippen der 1- und 2-Punkt-Bereiche, um Punkte direkt auf dem Diagramm zu erfassen.',
        '<strong>Foul-Zähler-Warnung</strong> wird rot und wackelt, um Teamfoul-Strafen anzuzeigen (7+ und 10+ Fouls).',
        '<strong>Ballfreigabe-Anzeige</strong> zeigt eine Erinnerung bei Ballbesitzwechsel, bis der Ball hinter den Bogen gebracht wurde.',
        '<strong>Auszeit-Tracker</strong> startet einen 30-Sekunden-Countdown mit benutzerdefinierten Soundwarnungen.',
      ],
    },
    {
      type: 'title',
      text: 'Warum einen digitalen Streetball-Tracker verwenden?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine digitale Anzeigetafel beseitigt Meinungsverschiedenheiten über Punkte, Fouls oder Wurfuhr-Verstöße auf dem Asphalt. Die hellen Neon-Zahlen sind aus der Ferne gut lesbar, und die automatischen Ballbesitz- und Freigabe-Erinnerungen sorgen für einen reibungslosen Spielablauf ohne Unterbrechungen.',
    },
  ],
  ui: {
    teamA: 'Team 1',
    teamB: 'Team 2',
    points: 'Punkte',
    fouls: 'Fouls',
    timeouts: 'Auszeiten',
    shotClock: 'Wurfuhr',
    reset: 'Zurücksetzen',
    resetConfirm: 'Spiel zurücksetzen? Alle Daten gehen verloren.',
    cancel: 'Abbrechen',
    gameTime: 'Zeit',
    possession: 'Ballbesitz',
    clearBall: 'Ball freigeben',
    matchWon: 'Spiel gewonnen',
    timeoutActive: 'Auszeit',
    penalty: 'Strafe',
    fullscreen: 'Vollbild',
    exitFullscreen: 'Vollbild beenden',
    overtime: 'Verlängerung',
    ptsInside: '+1 Punkt',
    ptsOutside: '+2 Punkte',
    toggleSound: 'Sound umschalten',
    soundOn: 'Sound an',
    soundOff: 'Sound aus',
  },
};
