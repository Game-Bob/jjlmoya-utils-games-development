import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'penalty-shootout-calculator';
const title = 'Penalty Shootout Tracker: Online Football Scoreboard';
const description =
  'Real-time football penalty shootout scorekeeper. Features 5-round tracking, mathematical elimination detection, sudden death rules, and instant winner announcements.';

const faqData = [
  {
    question: 'When does a penalty shootout end early?',
    answer:
      'A shootout ends as soon as one team builds a goal lead that the opposing team cannot mathematically tie with their remaining kicks.',
  },
  {
    question: 'How does sudden death work in penalty shootouts?',
    answer:
      'If scores are tied after 5 kicks per team, the shootout enters sudden death. Teams take single pairs of kicks until one team scores and the other misses in the same round.',
  },
  {
    question: 'Who takes the first kick in a penalty shootout?',
    answer:
      'The referee tosses a coin to determine which goal to use, followed by a second coin toss to decide which team kicks first.',
  },
  {
    question: 'Can a goalkeeper be replaced during a penalty shootout?',
    answer:
      'A goalkeeper who is unable to continue during the shootout may be replaced by a named substitute, provided their team has not used their maximum allowed substitutions.',
  },
];

const howToData = [
  {
    name: 'Set Team Names',
    text: 'Enter custom team names in the input fields before starting the shootout.',
  },
  {
    name: 'Record Kicks',
    text: 'Tap GOAL or MISS after each kick. The app automatically updates scores, marks round indicators, and toggles the active turn.',
  },
  {
    name: 'Sudden Death Mode',
    text: 'If tied after 5 kicks each, the tracker automatically switches to sudden death mode for single-round elimination.',
  },
  {
    name: 'Declare Winner',
    text: 'Upon mathematical victory or sudden death outcome, an epic champion modal announces the winning team and score.',
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
  inLanguage: 'en',
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
      text: 'Official IFAB Penalty Shootout Rules and Regulations',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Penalty shootouts (officially <em>kicks from the penalty mark</em>) determine the winner of a drawn association football match in knockout competitions according to Law 10 of the IFAB Laws of the Game.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Initial Kicks' },
        { value: '11m', label: 'Penalty Distance' },
        { value: '1v1', label: 'Kicker vs Goalkeeper' },
        { value: 'ABBA / AB', label: 'Turn Sequences' },
      ],
    },
    {
      type: 'tip',
      title: 'Mathematical Elimination Rule',
      html: 'If one team leads by more goals than the opposing team has remaining kicks, the shootout terminates immediately without completing the 5 rounds.',
    },
    {
      type: 'title',
      text: 'Regular Phase vs Sudden Death Comparison',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Initial 5 Kicks Phase',
          description: 'Each team takes 5 alternating kicks. Early victory occurs only upon mathematical impossibility of a comeback.',
        },
        {
          title: 'Sudden Death Phase',
          description: 'Single-round pairs after round 5. Any score disparity after equal kick attempts determines the instant winner.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Key IFAB Penalty Shootout Rules Reference',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Rule / Regulation', 'Official IFAB Standard Requirement'],
      rows: [
        ['Eligible Players', 'Only players on the field at the end of match/extra time may take kicks.'],
        ['Goalkeeper Position', 'Must have at least part of one foot on or touching the goal line when kicked.'],
        ['Feinting in Run-up', 'Feinting during run-up is permitted; feinting after completing run-up is an offense.'],
        ['Equal Number of Players', 'If one team has fewer players due to red cards, the opposing team must reduce their team size to match.'],
      ],
    },
    {
      type: 'title',
      text: 'Pros and Cons of Penalty Shootouts in Football',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Shootout Evaluation',
      items: [
        {
          pro: 'Guarantees a definitive match winner within a predictable time window.',
          con: 'High psychological pressure can overshadow overall team performance across 120 minutes.',
        },
        {
          pro: 'Delivers maximum spectator excitement and dramatic sporting moments.',
          con: 'Individual player misses can carry disproportionate blame.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Home Team',
    teamBLabel: 'Away Team',
    scoreGoal: 'GOAL',
    scoreMiss: 'MISS',
    undo: 'Undo',
    reset: 'Reset',
    suddenDeath: 'Sudden Death',
    regularRounds: 'Regular Round',
    roundLabel: 'Round',
    turnLabel: 'Turn to Kick',
    winnerTitle: 'Winner Decided',
    unreachableLead: 'Unreachable lead in regular rounds',
    regularRoundsWin: 'Victory after 5 regular rounds',
    suddenDeathWin: 'Victory in sudden death round',
    statusPending: 'Pending',
    statusScored: 'Scored',
    statusMissed: 'Missed',
  },
};
