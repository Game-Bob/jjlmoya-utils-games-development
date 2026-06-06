import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'baseball-scorekeeper';
const title = 'Premium Baseball and Softball Scorekeeper with Diamond Tracker';
const description = 'Track live baseball scores with runs, hits and errors. Visual diamond with base runner positions, ball strike count tracker, and inning by inning history grid.';

const faqData = [
  {
    question: 'How does the count tracker work in baseball?',
    answer: 'The count shows the number of balls and strikes on the current batter. Balls go up to 4 for a walk. Strikes go up to 3 for a strikeout. Adjustable limits for youth leagues.',
  },
  {
    question: 'What does the interactive baseball diamond show?',
    answer: 'The diamond shows first, second, and third base. Tapping a base highlights it in orange to indicate a runner is on that base. Runners advance automatically on hits.',
  },
  {
    question: 'How are runs, hits, and errors tracked?',
    answer: 'The R H E matrix displays runs, hits, and errors for both teams. Inning by inning history shows how the score built up across all innings.',
  },
];

const howToData = [
  {
    name: 'Log Each Pitch',
    text: 'Tap Strike, Ball, Foul, Hit or Out to record each pitch. The count updates automatically based on the outcome.',
  },
  {
    name: 'Manage Base Runners',
    text: 'Tap the bases on the diamond to place or remove runners. On a hit, runners advance automatically.',
  },
  {
    name: 'Track Inning Progression',
    text: 'The inning display shows the current half inning. After three outs the game automatically switches between top and bottom halves.',
  },
  {
    name: 'Review the Box Score',
    text: 'Check the R H E summary and the scrolling inning history grid to see the full score progression.',
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
    image: undefined,
    url: undefined,
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Free Online Baseball Scorekeeper with Live Diamond Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Take control of your baseball game scoring with our interactive digital scoreboard. Track runs, hits, and errors in real time while the visual diamond shows exactly where the runners are. The automatic count tracker handles balls, strikes, and outs so you can focus on the game.',
    },
    {
      type: 'title',
      text: 'Baseball Scoring Fundamentals',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Baseball scoring revolves around tracking each pitch and play. The count balls and strikes determines whether a batter walks or strikes out. Hits advance runners around the bases to score runs. Errors track defensive mistakes that allow batters to reach base. This digital tool automates all of these calculations and presents them on a vintage inspired scoreboard.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pitch Count',
          description: 'Track balls and strikes for each at bat with automatic walk and strikeout detection.',
          icon: 'mdi:baseball',
          points: ['Automatic ball count', 'Strikeout on 3 strikes', 'Walk on 4 balls'],
        },
        {
          title: 'Base Running',
          description: 'Visual diamond with live runner positions on each base.',
          icon: 'mdi:diamond-stone',
          points: ['Tap to place runners', 'Auto advance on hits', 'Clear on outs'],
        },
        {
          title: 'Box Score',
          description: 'Complete R H E matrix with inning by inning history.',
          icon: 'mdi:scoreboard-outline',
          points: ['Runs hits and errors', 'Inning by inning grid', 'Running totals'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Understanding the Count and Base States',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The count balls and strikes is the foundation of every at bat. A 3 2 count means a full count where the next pitch decides the outcome. Runners on base add strategic depth. A runner on first with two outs is a very different situation than bases loaded with no outs. This tool keeps track of all these states visually.',
    },
    {
      type: 'list',
      items: [
        '<strong>Count Tracking:</strong> Balls track up to 4, strikes up to 3 with automatic strikeout and walk detection.',
        '<strong>Base Management:</strong> Tap any base on the diamond to place or remove a runner visually.',
        '<strong>Inning Control:</strong> After 3 outs the game automatically flips between top and bottom halves.',
        '<strong>Score History:</strong> Every inning score is recorded in the scrolling history grid for full game review.',
      ],
    },
    {
      type: 'title',
      text: 'Why Use a Digital Baseball Scorekeeper',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manual scorekeeping in baseball requires constant attention to the count, the outs, the runners, and the score. One missed number can throw off the entire box score. This browser tool handles all the tracking automatically with an intuitive diamond interface. Coaches can focus on game strategy instead of arithmetic, and scorekeepers have a reliable digital record of every play.',
    },
  ],
  ui: {
    title: 'Baseball Scorekeeper',
    description: 'Track runs, hits and errors with diamond view.',
    away: 'Away',
    home: 'Home',
    runs: 'R',
    hits: 'H',
    errors: 'E',
    inning: 'Inning',
    topInning: 'Top',
    bottomInning: 'Bot',
    balls: 'Balls',
    strikes: 'Strikes',
    outs: 'Outs',
    strikeBtn: 'Strike',
    ballBtn: 'Ball',
    foulBtn: 'Foul',
    hitBtn: 'Hit',
    outBtn: 'Out',
    walkBtn: 'Walk',
    newBatter: 'New Batter',
    resetMatch: 'Reset Game',
    resetConfirm: 'Reset the current game? All scores will be lost.',
    cancel: 'Cancel',
    confirm: 'Confirm',
    total: 'Total',
    fullscreen: 'Fullscreen',
    toggleSound: 'Toggle Sound',
  },
};
