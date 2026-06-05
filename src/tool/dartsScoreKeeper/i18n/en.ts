import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'darts-scorekeeper';
const title = 'Darts Scorekeeper Online Leg and Set Tracker';
const description = 'Track darts matches with leg and set scoring. Free online darts scorekeeper for 501 and 301 matches featuring live checkout calculations and stats.';

const faqData = [
  {
    question: 'How does darts scoring work in 501 and 301?',
    answer: 'Players start with a fixed score of 501 or 301 points. Each player takes turns throwing three darts, and the total value of those throws is subtracted from their score. The objective is to reach exactly zero points. If the Double Out rule is enabled, the final winning dart must land on a double segment or the inner bullseye.',
  },
  {
    question: 'What is a bust in darts and when does it happen?',
    answer: 'A bust occurs when a player scores more points than their remaining total, or reduces their score to exactly one point when the Double Out rule is active. When a player busts, their turn ends immediately, and their score is reset to the total they had at the beginning of that turn.',
  },
  {
    question: 'How do you calculate a darts average?',
    answer: 'A darts average is calculated by taking the total number of points scored, dividing it by the total number of darts thrown, and multiplying the result by three. This represents the average score a player achieves per standard three-dart turn.',
  },
  {
    question: 'What is a checkout in darts?',
    answer: 'A checkout is the specific combination of throws needed to reduce the remaining score to zero and win the leg. Professional scorekeepers display checkout suggestions for scores of 170 and below, guiding players on which singles, doubles, or triples to target.',
  },
];

const howToData = [
  {
    name: 'Choose Starting Score and Rules',
    text: 'Select either 501 or 301 as your starting score and toggle the Double Out rule depending on your desired level of play.',
  },
  {
    name: 'Input Player Names',
    text: 'Click on the player name fields at the top of the scoreboard to customize names. The values will save automatically in your browser.',
  },
  {
    name: 'Register Darts Thrown',
    text: 'Use the interactive keypad or tap the dartboard sectors directly to log your throws. Select the modifier first (Single, Double, or Triple) and then the number hit.',
  },
  {
    name: 'Follow Checkout Recommendations',
    text: 'When your remaining score drops below 170, look at the checkout panel to see the optimal targets to hit to finish the leg.',
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
      text: 'Free Online Darts Scorekeeper and Match Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Managing scores in darts requires quick mental arithmetic and focus. This digital darts leg tracker handles all calculations for you, allowing you to focus entirely on throwing. Whether you are practicing alone or playing a competitive match with friends, this scoreboard tracks points, legs, sets, throwing averages, and double-out checkout targets.',
    },
    {
      type: 'title',
      text: 'Standard Darts Scoring Formats Explained',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Darts matches are played in legs and sets. The most popular formats globally are 501 and 301, both of which are subtraction games where players reduce their score to zero.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '501 Tournament',
          description: 'The standard format for professional tournaments worldwide.',
          icon: 'mdi:trophy-outline',
          points: ['Standard starting score', 'Double-out required', 'High scoring focus'],
        },
        {
          title: '301 Casual',
          description: 'A faster version of the subtraction game ideal for quick casual matches.',
          icon: 'mdi:clock-outline',
          points: ['Faster game pace', 'Double-in option common', 'Great for practice'],
        },
        {
          title: 'Cricket Mode',
          description: 'A strategic target-hitting game popular in pubs and casual leagues.',
          icon: 'mdi:bullseye',
          points: ['Numbers 15 to 20 focus', 'Bullseye tracking', 'Alternative rule system'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Understanding Darts Checkout Math',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The highest possible checkout in darts is 170, achieved by throwing Triple 20, Triple 20, and Double Bull. When your score reaches 170 or below, you enter checkout range, where a specific sequence of darts can win the game.',
    },
    {
      type: 'table',
      headers: ['Score', 'Dart 1 Target', 'Dart 2 Target', 'Dart 3 Target'],
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
      text: 'Features of this Digital Darts Scoreboard',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Interactive Input Methods</strong> toggle between a visual radial dartboard and a fast numeric keypad.',
        '<strong>Smart Checkout Engine</strong> displays live combinations for finishing legs.',
        '<strong>Bust Detection</strong> automatically resets illegal throws and alerts the user.',
        '<strong>Turn History Log</strong> tracks previous rounds and remaining scores.',
        '<strong>Detailed Match Stats</strong> calculates three-dart averages dynamically.',
      ],
    },
    {
      type: 'title',
      text: 'Manual vs Digital Darts Tracking',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Traditional chalkboards require writing, erasing, and constant calculations. This online scoreboard eliminates error risk, automates averages, and presents checkout targets. Keep your device by the board, enter fullscreen mode to keep the screen active, and enjoy hassle-free scoring.',
    },
  ],
  ui: {
    playerA: 'Player 1',
    playerB: 'Player 2',
    winnerLabel: 'CHAMPION',
    reset: 'Reset',
    resetConfirm: 'Reset match? All data will be lost.',
    cancel: 'Cancel',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    leg: 'Leg',
    set: 'Set',
    average: 'Avg',
    checkout: 'Checkout',
    busted: 'Busted',
    dart: 'Darts Turn',
    score301: '301',
    score501: '501',
    doubleOut: 'Double Out',
    noCheckout: 'No Checkout',
  },
};
