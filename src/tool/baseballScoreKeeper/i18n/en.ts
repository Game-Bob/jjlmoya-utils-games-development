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
      text: 'Baseball Scorekeeper Free Online: Track Runs Hits Errors with Live Diamond',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Need a reliable baseball scorekeeper for your next game? This free online tool tracks runs, hits, and errors while displaying a live interactive diamond with real time base runner positions. Every pitch matters, and our digital scoreboard makes sure you never lose track of the count, the outs, or the inning. Whether you are coaching little league, keeping score for a softball tournament, or managing a high school varsity game, this tool handles the entire box score automatically so you can focus on the action on the field.',
    },
    {
      type: 'title',
      text: 'How This Baseball Scoreboard Saves You Time and Prevents Errors',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manual scorekeeping is prone to mistakes, especially during fast paced games. One missed strike or an overlooked runner can throw off the entire box score. This digital scorekeeper automates the tedious parts. Tap Strike, Ball, Foul, Hit, or Out and the board updates the count instantly. When a batter walks or strikes out, the tool resets the count automatically. After three outs, it flips the inning from top to bottom and records the runs. The R H E matrix and inning by inning history grid give you a complete picture of the game at a glance.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Live Pitch Count',
          description: 'Automated balls and strikes tracking with walk and strikeout detection for every at bat.',
          icon: 'mdi:baseball',
          points: ['Balls tracked to 4', 'Strikes tracked to 3', 'Auto reset on decision'],
        },
        {
          title: 'Runner Management',
          description: 'Interactive diamond shows exactly who is on first, second, or third base.',
          icon: 'mdi:diamond-stone',
          points: ['Tap bases to set runners', 'Visual highlight when occupied', 'Clear on inning change'],
        },
        {
          title: 'Complete Box Score',
          description: 'Full R H E stats with scrolling inning by inning score history.',
          icon: 'mdi:scoreboard-outline',
          points: ['Runs hits and errors', 'Inning by inning grid', 'Running totals for both teams'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Who Needs This Baseball Score Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This tool is built for anyone who needs to keep score: youth baseball coaches who want a clear digital display for their players, softball league volunteers who manage games without a dedicated scorekeeper, parents tracking their childs games from the stands, and umpires who want a secondary verification system. The interface works on any device, from smartphones held in the dugout to tablets mounted on the fence or laptops on the bench. No installation needed, just open the browser and start scoring.',
    },
    {
      type: 'list',
      items: [
        '<strong>Automatic Count Management:</strong> Balls and strikes reset automatically after walks, strikeouts, hits, and outs. No manual resets needed.',
        '<strong>Touch Enabled Diamond:</strong> Tap first, second, or third base to place or remove runners. The diamond lights up in gold to show occupied bases.',
        '<strong>Inning by Inning Scores:</strong> Every half inning is recorded in the scrolling grid. See exactly how each team scored across all nine innings.',
        '<strong>Zero Setup Required:</strong> Open the page and start scoring immediately. Customize team names by tapping the labels above the scores.',
      ],
    },
    {
      type: 'title',
      text: 'Baseball Scoring Made Simple: Count, Diamond and Box Score in One Place',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keeping score in baseball requires tracking multiple things at once: the balls and strikes count, the number of outs, which bases have runners, the runs for each team, and the current inning. Losing track of any one of these creates confusion and inaccurate records. This tool consolidates everything into a single screen. The count dots show balls and strikes at a glance. The diamond shows base runner positions. The R H E table displays the full box score. And the inning grid scrolls horizontally to show the complete scoring history. Everything updates in real time with each tap.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Coaches', html: '<p>Keep a clear digital scoreboard visible to your whole team from the dugout.</p>' },
        { type: 'card', title: 'Volunteers', html: '<p>No scorekeeping experience needed. The tool handles all the complex tracking automatically.</p>' },
        { type: 'card', title: 'Parents', html: '<p>Track the game from the stands with a reliable real time score display on your phone.</p>' },
        { type: 'card', title: 'Players', html: '<p>Review inning by inning scores after the game to analyze performance.</p>' },
      ],
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
    runBtn: '+1 Run',
    errorBtn: 'Error',
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
