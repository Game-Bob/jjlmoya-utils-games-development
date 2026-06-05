import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'ping-pong-scorekeeper';
const title = 'Ping Pong Scorekeeper Online : Free Table Tennis Tracker';
const description =
  'Track table tennis matches with game and set scoring. Free online ping pong scorekeeper for friendly games and tournaments. No registration needed.';

const faqData = [
  {
    question: 'How does ping pong scoring work?',
    answer:
      'A standard ping pong game is played to 11 points. You must win by 2 points. If the score reaches 10-10, play continues until one player leads by 2. The server changes every 2 points. Matches are usually best of 5 or 7 games. This scorekeeper tracks all of this automatically.',
  },
  {
    question: 'How do I use this scorekeeper?',
    answer:
      'Tap the + button under each player to add a point. The game score updates automatically. When a player reaches 11 with a 2 point lead, the game ends and a new game starts. The games won counter tracks how many games each player has won. Tap Finish Match when the match is over.',
  },
  {
    question: 'How does the server indicator work?',
    answer:
      'The server changes every 2 points. A dot appears next to the player who is serving. This follows official table tennis rules. You can track who should be serving at all times during the match.',
  },
  {
    question: 'Can I use it on my phone during a match?',
    answer:
      'Yes. The interface is mobile friendly with large buttons. Fullscreen mode hides the browser and keeps the screen awake.',
  },
  {
    question: 'Does it save my match data?',
    answer:
      'Yes. The current score, games won, and player names are saved in your browser automatically.',
  },
];

const howToData = [
  {
    name: 'Name the players',
    text: 'Tap the default player name and type your own. Names are saved automatically.',
  },
  {
    name: 'Add a point',
    text: 'Tap the big circular + button for the player who scored. The score updates with a celebration animation.',
  },
  {
    name: 'Remove a point',
    text: 'Tap the minus button if you added a point by mistake.',
  },
  {
    name: 'Start a new game',
    text: 'When a game ends, tap New Game to start the next game. Or tap Finish Match to end the match.',
  },
  {
    name: 'Finish the match',
    text: 'Tap Finish Match to see the winner announced with a trophy and confetti.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Free Online Ping Pong Scorekeeper : Table Tennis Match Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keeping score in ping pong should be simple, but the rules can get confusing. Who serves next? Is it 10-10 or 11-9? How many games has each player won? This free online ping pong scorekeeper handles all of that automatically. You just tap the + button when someone scores. The scorekeeper tracks points per game, games won in the match, and who is serving. Everything updates in real time with celebration animations that make every point count. No sign ups, no downloads, no complicated menus.',
    },
    {
      type: 'title',
      text: 'How ping pong scoring works in this scorekeeper',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Table tennis follows a standard scoring system. Each game is played to 11 points. A player must win by 2 points, so if the score reaches 10-10, play continues until someone leads by 2. The server changes every 2 points during a game. This scorekeeper tracks all of these rules automatically. You do not need to remember who serves or when to switch. The server indicator shows a dot next to the current server. When a player wins a game, the scorekeeper automatically moves to the next game. The games won counter increases for the winner. A match can be any number of games, but is typically best of 5 or 7. Tap Finish Match when the match is complete and the winner is announced with a celebration.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Friendly Games',
          description: 'Quick and easy scoring for casual ping pong with friends. Automatic game and match tracking.',
          icon: 'mdi:table-tennis',
          points: ['One tap per point', 'Automatic server tracking', 'Works offline'],
        },
        {
          title: 'Club & League Matches',
          description: 'Keep a clean record of games and match results. Perfect for club tournaments and league play.',
          icon: 'mdi:trophy-outline',
          points: ['Games won tracking', 'Best of 5 or 7 support', 'Mobile friendly'],
        },
        {
          title: 'Tournament Play',
          description: 'Track multiple matches in a tournament setting. Quick reset between matches.',
          icon: 'mdi:school',
          points: ['Fast match reset', 'Score persistence', 'Fullscreen mode'],
        },
      ],
    },
    {
      type: 'title',
      text: 'What makes this ping pong scorekeeper special',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatic game scoring</strong> the scorekeeper knows the rules of ping pong. Games to 11, win by 2, automatic server changes.',
        '<strong>Games won tracking</strong> each game won is recorded. See at a glance how many games each player has taken in the match.',
        '<strong>Server indicator</strong> a visible dot shows which player is serving, following the 2 point rotation rule.',
        '<strong>Goal celebration animations</strong> each point triggers a random celebration animation. Eight different effects keep every point exciting.',
        '<strong>Floating particles</strong> every point scored spawns floating text celebrating the moment.',
        '<strong>Finish Match ceremony</strong> tap Finish Match to trigger a winner announcement with trophy and confetti.',
        '<strong>Editable player names</strong> tap the name field to rename players. Names are saved in your browser.',
        '<strong>Fullscreen mode</strong> hides browser interface so the scoreboard fills the screen and keeps it awake.',
        '<strong>Offline first</strong> works without internet. No ads, no tracking, no data collection.',
      ],
    },
    {
      type: 'title',
      text: 'Ping Pong Scorekeeper vs Manual Scoring',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manual scoring in ping pong requires tracking the score, remembering who serves, knowing when to switch servers, and keeping count of games won. It is easy to lose track, especially in a fast paced game. This digital scorekeeper handles everything automatically. You only need to tap a button when a point is scored. The scorekeeper tracks the game score, detects when a game is won, records games won in the match, and shows who is serving. Every point is celebrated with animations and particles. The score never gets confused and you never miss a server change. Whether you are playing a casual game with friends or competing in a tournament, this free online ping pong scorekeeper gives you everything you need.',
    },
  ],
  ui: {
    playerA: 'Player 1',
    playerB: 'Player 2',
    winnerLabel: 'CHAMPION',
    finishMatch: 'Finish Match',
    newGame: 'New Game',
    serving: 'Serving',
    changeSide: 'Change Sides',
    swapHint: 'Tap to swap',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Game Point',
    matchPoint: 'Match Point',
    mode: 'Format',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Points',
    reset: 'Reset',
    resetConfirm: 'Reset match? All data will be lost.',
    cancel: 'Cancel',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
  },
};
