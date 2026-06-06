import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'streetball-3x3-basketball-scorekeeper';
const title = 'Premium Streetball 3x3 Scorekeeper with Shot Clock';
const description = 'Track FIBA 3x3 Streetball scores with an integrated 12-second shot clock, team fouls, sudden death points, and dynamic half-court visual indicators.';

const faq = [
  {
    question: 'How does the 12-second shot clock work in 3x3 Streetball?',
    answer: 'In FIBA 3x3, teams have only 12 seconds to attempt a shot once they gain possession. The shot clock resets to 12 on change of possession or to 14 seconds on offensive rebounds and fouls under specific conditions.',
  },
  {
    question: 'What is the sudden death score limit in 3x3 Basketball?',
    answer: 'The first team to score 21 points wins the match immediately, regardless of the remaining time on the game clock. This is the sudden death rule.',
  },
  {
    question: 'How do team fouls affect the match?',
    answer: 'Starting from the 7th team foul, opponents are awarded 2 free throws. On the 10th and subsequent fouls, they receive 2 free throws plus ball possession, triggering penalty states.',
  },
];

const howTo = [
  {
    name: 'Set Up Team Names',
    text: 'Input custom names for the two streetball squads to customize the HUD.',
  },
  {
    name: 'Log Points and Possession',
    text: 'Tap the interactive asphalt court to add 1 point (inside the arc) or 2 points (outside the arc) and toggle the possession light.',
  },
  {
    name: 'Control the Shot Clock',
    text: 'Tap the shot clock to reset to 12, click the secondary reset for 14, or double tap to pause the countdown.',
  },
  {
    name: 'Manage Team Fouls',
    text: 'Track team fouls using the counter, which changes to red once in penalty status (7+ fouls).',
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
  inLanguage: 'en',
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
      text: 'Free Online 3x3 Streetball Scoreboard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keeping score in fast-paced 3v3 basketball matches can be difficult while managing a short shot clock and tracking team fouls. This free online 3x3 streetball scoreboard provides an industrial asphalt theme with high-contrast neon styling. It handles the 12-second shot clock, game clock, fouls penalty system, and possession indicators automatically.',
    },
    {
      type: 'title',
      text: 'FIBA 3x3 Streetball Scoring and Shot Clock Rules',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3 streetball differs from traditional 5v5 basketball. Matches last for one 10-minute period or end immediately when a team scores 21 points (sudden death). Shots inside the arc and free throws count for 1 point, while shots made from behind the 6.75m arc count for 2 points. The 12-second shot clock enforces quick offensive plays, and players must clear the ball behind the arc upon a change of possession.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Casual Pickup Games',
          description: 'Quick scorekeeping for street basketball with friends on local courts.',
          icon: 'mdi:basketball',
          points: ['Simple point triggers', 'Responsive layout', 'Works offline'],
        },
        {
          title: 'Tournament Play',
          description: 'Perfect for official 3x3 tournaments and streetball leagues.',
          icon: 'mdi:trophy-outline',
          points: ['10 minute countdown', 'Sudden death at 21 points', 'Foul penalty states'],
        },
        {
          title: 'Umpire Dashboard',
          description: 'Designed for referees to manage fast shot clock resets and possession.',
          icon: 'mdi:school',
          points: ['12s and 14s shot clock resets', 'Buzzer sounds', 'Tactile button gestures'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interactive Controls and Tactile Animations',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12 Second Shot Clock</strong> flashes red and displays decimals under 4 seconds, followed by a simulated buzzer horn.',
        '<strong>Interactive Concrete Half Court</strong> lets you tap the 1-point and 2-point areas to log scores directly on the diagram.',
        '<strong>Fouls Counter Warning</strong> turns red and shakes to indicate team foul penalties (7+ and 10+ fouls).',
        '<strong>Ball Clearance Indicator</strong> displays a reminder when possession changes until the ball is cleared behind the arc.',
        '<strong>Timeout Tracker</strong> triggers a 30-second countdown with custom sound warnings.',
      ],
    },
    {
      type: 'title',
      text: 'Why Use a Digital Streetball Tracker?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A digital scoreboard eliminates disagreements about scores, fouls, or shot clock violations on the asphalt. The bright neon numbers are easy to read from a distance, and the automatic possession and clearance reminders ensure the match flows smoothly without interruptions.',
    },
  ],
  ui: {
    teamA: 'Team 1',
    teamB: 'Team 2',
    points: 'Points',
    fouls: 'Fouls',
    timeouts: 'Timeouts',
    shotClock: 'Shot Clock',
    reset: 'Reset',
    resetConfirm: 'Reset match? All data will be lost.',
    cancel: 'Cancel',
    gameTime: 'Time',
    possession: 'Possession',
    clearBall: 'Clear Ball',
    matchWon: 'Match Won',
    timeoutActive: 'Timeout',
    penalty: 'Penalty',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    overtime: 'Overtime',
    ptsInside: '+1 Point',
    ptsOutside: '+2 Points',
    toggleSound: 'Toggle Sound',
    soundOn: 'Sound On',
    soundOff: 'Sound Off',
  },
};
