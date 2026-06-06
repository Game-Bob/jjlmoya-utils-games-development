import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'snooker-frame-tracker-break-calculator';
const title = 'Premium Snooker Frame Tracker and Break Calculator';
const description = 'Track live snooker frame scores, calculate current break values, display remaining points on the table, and get real-time deficit status like need snookers.';

const faq = [
  {
    question: 'How is the maximum remaining points on the snooker table calculated?',
    answer: 'Each remaining red ball is worth 8 points (1 point for the red itself plus 7 points for potting a black color ball). Once all reds are potted, the remaining colors are worth 27 points in total.',
  },
  {
    question: 'What does needing snookers mean in this calculator?',
    answer: 'It means the score deficit is greater than the total remaining points on the table, meaning a player must force fouls from their opponent to catch up.',
  },
  {
    question: 'What is a deciding black ball situation?',
    answer: 'A deciding black scenario occurs when all balls are potted and the frame scores are tied, requiring a re-spotted black ball to determine the winner.',
  },
];

const howTo = [
  {
    name: 'Configure Player Names',
    text: 'Input custom names for the two snooker players to customize the scoreboard display.',
  },
  {
    name: 'Pot Balls and Build Breaks',
    text: 'Tap the glowing felt balls to log potted balls in sequence. The calculator locks ineligible colors according to rules.',
  },
  {
    name: 'Check Deficit Status',
    text: 'Monitor the live status bar to see if a player is safe, needs snookers, or if the frame is still open.',
  },
  {
    name: 'Log Foul Penalties',
    text: 'Open the foul menu to assign penalty points directly to the opponent and switch the active player turn.',
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Free Online Snooker Frame Scorekeeper and Break Counter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simplify your snooker frames with our digital scoreboard. The tool calculates active break points, remaining table points, and displays the exact score difference. The felt styled interface provides interactive indicators that light up dynamically based on snooker rule sequences. Whether you are refereeing a local club tournament or tracking friendly frames at home, this application handles all the calculations automatically.',
    },
    {
      type: 'title',
      text: 'Understanding Snooker Scoring and Deficit Calculations',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A standard snooker game starts with fifteen red balls worth one point each. Players must alternate between a red ball and a color ball. Each potted color ball is returned to its spot until all reds are gone. Afterwards, the colors must be pocketed in their numerical order from yellow to black. This calculator keeps track of the sequence and warns when snookers are required. By calculating the score gap and the maximum points left on the table, it determines exactly when a frame has reached its victory threshold.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frame Scoreboard',
          description: 'Keep track of frame scores and player turns on a high contrast display.',
          icon: 'mdi:scoreboard-outline',
          points: ['Clear active player highlighting', 'Custom player name entry', 'One click undo support'],
        },
        {
          title: 'Break Calculator',
          description: 'Real time tracking of active potting breaks with ball color logs.',
          icon: 'mdi:billiards',
          points: ['Potted history timeline strip', 'Automatic ball locks by rules', 'Color coded break status'],
        },
        {
          title: 'Remaining Point Gauges',
          description: 'Track the maximum points left on the green felt table.',
          icon: 'mdi:percent-outline',
          points: ['Score difference tracking', 'Dynamic snooker requirement warnings', 'Deciding black detection'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interactive Controls and Sound Feedback',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tactile Felt HUD</strong> allows tapping the balls to add points and records them on the break timeline.',
        '<strong>Foul Action Buttons</strong> apply four to seven penalty points to the opponent score and end the active turn.',
        '<strong>Dynamic Status Light</strong> updates to indicate normal play, safe margin, or snookers required.',
        '<strong>Audio Synthesis</strong> triggers a pocket sound on potting and a buzzer sound on fouls.',
      ],
    },
    {
      type: 'title',
      text: 'Snooker Foul Rules and Penalty Systems Explained',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fouls in snooker award points to the opponent. The penalty value is determined by the value of the target ball or the ball involved in the foul, with a minimum penalty of four points. For instance, potting the white cue ball, hitting a color instead of a red first, or failing to hit any ball yields a penalty. If a foul is committed while targeting the blue, pink, or black, the penalty is five, six, or seven points respectively. This digital scorecard features a quick foul panel to easily add penalty values and automatically transfer active turns to the next player.',
    },
    {
      type: 'title',
      text: 'What Happens During a Deciding Black Ball Scenario',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When all balls have been pocketed and the frame scores are tied, the black ball is re-spotted on its original position. The players draw lots to determine who will play first, and the first player to pot the black or commit a foul loses the frame. This deciding black rule ensures a fair resolution to tight games without requiring additional full frames, and our tracker automatically detects this tied end-game state to notify both players.',
    },
    {
      type: 'title',
      text: 'Why Use a Digital Snooker Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manual calculation of remaining points and deficit margins during tight frames is prone to human error. This browser tool provides accurate real-time stats, allowing players to focus on their technique and strategy. By keeping an interactive timeline of pocketed balls, referees can easily verify controversial breaks and maintain official match continuity.',
    },
  ],
  ui: {
    title: 'Snooker Scorekeeper',
    description: 'Track frame scores and breaks.',
    player1: 'Player 1',
    player2: 'Player 2',
    score: 'Score',
    currentBreak: 'Break',
    remainingPoints: 'Remaining',
    deficit: 'Deficit',
    statusSafe: 'Safe',
    statusNeedSnookers: 'Snookers Required',
    statusDecidingBlack: 'Deciding Black',
    statusNormal: 'Normal',
    foul: 'Foul',
    foulTitle: 'Select Foul Ball Penalty',
    foulPoints: 'Penalty',
    foulOnRed: 'Red/Yellow/Green/Brown',
    foulOnYellow: 'Yellow',
    foulOnGreen: 'Green',
    foulOnBrown: 'Brown',
    foulOnBlue: 'Blue',
    foulOnPink: 'Pink',
    foulOnBlack: 'Black',
    reset: 'Reset',
    resetConfirm: 'Reset current frame? All scores will be lost.',
    cancel: 'Cancel',
    confirm: 'Confirm Reset',
    endTurn: 'End Turn',
    miss: 'Miss',
    redsRemaining: 'Reds',
    pocketedBalls: 'Pocketed',
    toggleSound: 'Toggle Sound',
    fullscreen: 'Fullscreen',
  },
};
