import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'tennis-scorekeeper';
const title = 'Tennis Scorekeeper Online Free Match Tracker';
const description = 'Track tennis matches with set and game scoring. Free online tennis scorekeeper for matches and tournaments. No registration needed.';

const faqData = [
  {
    question: 'How does tennis scoring work?',
    answer: 'Tennis matches are played in games and sets. A game is scored as Love, 15, 30, 40. A score of 40-40 is called Deuce, requiring a player to win by 2 consecutive points. A set is won by the first player to win 6 games with a 2 game margin. If the score reaches 6-6, a tiebreak is played.',
  },
  {
    question: 'How do I use this tennis scoreboard?',
    answer: 'Tap the plus button for a player when they score. The score updates automatically. The scorekeeper tracks serving order, game scores, current sets, and completed set histories.',
  },
  {
    question: 'When do tennis players switch sides?',
    answer: 'Tennis players change ends after the first, third, and every subsequent odd game of each set. They also switch sides at the end of a set unless the total number of games is even. In a tiebreak, players switch ends every 6 points.',
  },
  {
    question: 'Does this scoreboard support tiebreaks?',
    answer: 'Yes, when a set reaches 6-6, the scorekeeper automatically enters tiebreak mode where points are counted numerically to 7. A player must win by 2 points to conclude the tiebreak and set.',
  },
  {
    question: 'Can I use this on my mobile phone?',
    answer: 'Yes, the interface is optimized for mobile devices with large buttons. You can also enter fullscreen mode to keep the screen awake during the match.',
  },
];

const howToData = [
  {
    name: 'Set player names',
    text: 'Tap on the player name input fields to type custom names. They are saved in your browser.',
  },
  {
    name: 'Add points',
    text: 'Click the plus button for the player who won the rally. The score will update automatically.',
  },
  {
    name: 'Manage set results',
    text: 'The tracker automatically concludes games and sets. It archives completed sets and shifts to the next set.',
  },
  {
    name: 'Swap sides',
    text: 'The scoreboard alerts you when players need to switch ends. Tap the swap button to swap the visual sides.',
  },
  {
    name: 'Match Conclusion',
    text: 'The tracker automatically concludes the match based on tennis rules and announces the winner.',
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

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Free Online Tennis Scorekeeper and Match Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keeping score in tennis can be challenging with terms like deuce, advantage, and tiebreaks. This free online tennis scorekeeper automates the process entirely. You only need to tap the plus button when a player scores. The tool manages points, games, sets, and side switches automatically in real time.',
    },
    {
      type: 'title',
      text: 'How Tennis Scoring Works in this Scorekeeper',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tennis uses a unique scoring structure. A standard game progresses through Love, 15, 30, 40, and Game. When both players reach 40, the score is Deuce. From Deuce, a player must score two consecutive points to win the game. The first point is called Advantage, and the next point secures the game. If the opposing player wins the next point, the score returns to Deuce. Sets are won by the first player to win 6 games with a margin of 2. When the set reaches 6-6, a tiebreak is played to 7 points.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Casual Games',
          description: 'Quick and easy scoring for friendly local tennis matches with friends.',
          icon: 'mdi:tennis',
          points: ['One tap scoring', 'Side swap indicator', 'Works offline'],
        },
        {
          title: 'Club Play',
          description: 'Perfect tracking for club matches and tournaments.',
          icon: 'mdi:trophy-outline',
          points: ['Set history archive', 'Best of 3 or 5 sets', 'Mobile friendly layout'],
        },
        {
          title: 'Tournament Mode',
          description: 'Designed for official match tracking and referee use.',
          icon: 'mdi:school',
          points: ['Tiebreak support', 'Fullscreen scoreboard', 'Local data safety'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Special Scorekeeper Features',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatic tennis rules logic</strong> computes Love, 15, 30, 40, deuce, advantage, and tiebreak scoring automatically.',
        '<strong>Set history archive</strong> shows the score of previous sets at a glance.',
        '<strong>Switch ends helper</strong> prompts players when they need to swap ends.',
        '<strong>Vibrant score celebrations</strong> shows floating particles for won points.',
        '<strong>Best of 3 or 5 sets</strong> configurable match format settings.',
        '<strong>Names saved locally</strong> keeps custom names saved across visits.',
      ],
    },
    {
      type: 'title',
      text: 'Digital Scorekeeping vs Manual Tracking',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manual scoreboards require constant concentration to update numbers, remember serving rotation, check tiebreaks, and calculate ends swaps. This digital tennis scorekeeper handles every rule of tennis automatically. You can focus entirely on the match while the tool updates set histories and announces the winner with a celebration ceremony.',
    },
  ],
  ui: {
    playerA: 'Player 1',
    playerB: 'Player 2',
    winnerLabel: 'CHAMPION',
    finishMatch: 'Finish Match',
    newGame: 'New Set',
    serving: 'Serving',
    changeSide: 'Switch Ends',
    swapHint: 'Tap to switch ends',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Game Point',
    setPoint: 'Set Point',
    matchPoint: 'Match Point',
    mode: 'Sets',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Points',
    reset: 'Reset',
    resetConfirm: 'Reset match? All data will be lost.',
    cancel: 'Cancel',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    deuce: 'Deuce',
    advantage: 'Advantage',
    tiebreak: 'Tiebreak',
  },
};
