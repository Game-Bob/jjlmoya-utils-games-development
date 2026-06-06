import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'beach-volleyball-scorekeeper';
const title = 'Beach Volleyball Scorekeeper & Rotation Tracker';
const description = 'Track beach volleyball scores, serving rotation order, wind side-swaps, and sets with an interactive top-down golden sand court visualization.';

const faq = [
  {
    question: 'When do teams switch sides in Beach Volleyball?',
    answer: 'To ensure fairness under outdoor conditions (wind, sun, sand), teams switch sides every 7 points during the first two sets, and every 5 points during the tiebreak third set.',
  },
  {
    question: 'How does serving rotation work in Beach Volleyball?',
    answer: 'Each team has 2 players who must alternate service. When a team wins a service break (side-out), they must rotate the server so the player who did not serve last time serves next.',
  },
  {
    question: 'How many points are needed to win a Beach Volleyball set?',
    answer: 'Sets 1 and 2 are played to 21 points. If a third set is required, it is played to 15 points. In all cases, a team must win by at least a 2-point margin.',
  },
];

const howTo = [
  {
    name: 'Set Up Lineup',
    text: 'Input custom names for the two players of both Team A and Team B.',
  },
  {
    name: 'Record Points',
    text: 'Tap on a team card or click on the interactive sand court to add points. The lineup and rotation update automatically.',
  },
  {
    name: 'Follow Side-Swap Warnings',
    text: 'When the swap banner slides down, perform a physical side switch and click the swap button to invert court orientation.',
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
      text: 'Online Beach Volleyball Scoreboard & Server Rotation Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keeping track of serving order and team positions under the hot sun can be difficult. This professional beach volleyball scorekeeper features a sand-textured, high-contrast digital court layout optimized for outdoor visibility. It prevents glare reading issues, automates the side-switching rules, and tracks which of the two players is due to serve after every side-out point.',
    },
    {
      type: 'title',
      text: 'Understanding Beach Volleyball Rotation and Server Rules',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Although there are no fixed positions or rotation faults based on court locations in 2v2 beach volleyball, players must strictly alternate service. Whenever a receiving team wins a rally (known as a side-out), they earn the right to serve. The player who did not serve the previous time their team served must be the new server. Serving out of order is a fault and results in a point for the opponents. This digital board features active serving dots and bouncing ball indicators next to the player circle nodes to prevent rotation errors.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Official FIVB Rules',
          description: 'Fulfill official scoring guidelines, including set limits and side-swaps.',
          icon: 'mdi:volleyball',
          points: ['Sets to 21 (tiebreak to 15)', 'Strict win-by-2 margin', 'Automated side-swaps'],
        },
        {
          title: 'Rotation Tracking',
          description: 'Never argue or get confused about whose turn it is to serve.',
          icon: 'mdi:account-sync-outline',
          points: ['Glow serving indicators', 'Initials mapped on sand', 'Lineup overlay modal'],
        },
        {
          title: 'Outdoor Optimized',
          description: 'Built for actual play on sand courts under direct sunlight.',
          icon: 'mdi:weather-sunny',
          points: ['High-contrast yellow theme', 'Wake Lock screen persistence', 'Swipe gesture to undo score'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interactive Features & Game Settings',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Golden Sand SVG Court:</strong> Visually reflects the state of the game. Tap directly on either court half to award a point to that team.',
        '<strong>Court Rotation Animation:</strong> When the side-swap warning triggers, clicking the switch button rotates the entire SVG court 180 degrees so the display aligns with your physical positions.',
        '<strong>FIVB Side-Swap Alarms:</strong> Displays a high-visibility warning banner when the combined score is a multiple of 7 (in sets 1 and 2) or a multiple of 5 (in the final set).',
        '<strong>Sand-Splash Particles:</strong> Adds visual feedback on score changes with animated sand particles bursting from the tap coordinates.',
        '<strong>Gesture Undo Control:</strong> Swipe down on the card to undo the last recorded point instantly.',
      ],
    },
    {
      type: 'title',
      text: 'Why Do Teams Switch Sides in Beach Volleyball?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Unlike indoor volleyball, beach volleyball matches are highly influenced by environmental elements like sun glare, heat, wind strength, and sand consistency. Switching sides frequently ensures neither team receives an unfair advantage due to a favorable wind direction or having the sun in their eyes. The rules dictate switching sides every 7 points during the first two sets, and every 5 points during the third set.',
    },
  ],
  ui: {
    teamA: 'Team 1',
    teamB: 'Team 2',
    points: 'Points',
    sets: 'Sets',
    reset: 'Reset',
    resetConfirm: 'Reset match? All scores and lineups will be lost.',
    cancel: 'Cancel',
    switchSides: 'Switch Sides',
    switchSidesDesc: 'Cumulative score reached swap threshold!',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    player1: 'Player 1',
    player2: 'Player 2',
    serving: 'Serving',
    winner: 'Winner',
    undo: 'Undo',
  },
};
