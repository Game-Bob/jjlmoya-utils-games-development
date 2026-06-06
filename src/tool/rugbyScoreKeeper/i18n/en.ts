import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'rugby-scorekeeper';
const title = 'Rugby Scorekeeper with Sin Bin Timers and Match Clock';
const description = 'Track live rugby match scores with try, conversion, penalty and drop goal logging. Manage sin bin countdown timers and match halves with an interactive stadium scoreboard.';

const faqData = [
  {
    question: 'How are points scored in a rugby union match?',
    answer: 'A try is worth 5 points and is awarded when a player touches the ball down in the opponents in goal area. A conversion kick after a try is worth 2 points. Penalty kicks and drop goals are each worth 3 points.',
  },
  {
    question: 'What happens when a player receives a yellow card in rugby?',
    answer: 'A yellow card results in a sin bin suspension. The player must leave the field for 10 minutes of active match time. Their team plays with one fewer player during this period. The sin bin timer only counts down while the match clock is running.',
  },
  {
    question: 'How long is a rugby union match?',
    answer: 'A standard rugby union match consists of two 40 minute halves with a 10 minute halftime break. The match clock is stopped during injuries and serious incidents. Extra time may be added for stoppages.',
  },
];

const howToData = [
  {
    name: 'Log Scoring Events',
    text: 'Tap the Try, Conversion, Penalty or Drop Goal buttons to record points. After tapping Try, the Conversion button lights up automatically.',
  },
  {
    name: 'Manage Sin Bin Penalties',
    text: 'Tap Yellow Card to send a player to the sin bin. Enter their name or number and a 10 minute countdown starts automatically.',
  },
  {
    name: 'Control Match Timing',
    text: 'Use the match clock to track two 40 minute halves. Pause the clock during injuries and resume when play restarts.',
  },
  {
    name: 'Track Score Progression',
    text: 'Monitor the live scoreboard with home and away points. View the scoring summary to see a breakdown of tries, conversions, penalties and drop goals.',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Free Online Rugby Scorekeeper with Live Match Tracking',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Take control of your rugby match scoring with our interactive digital scoreboard. Track tries, conversions, penalties and drop goals in real time. The sin bin management system automatically counts down player suspensions, and the match clock keeps both halves perfectly timed. Whether you are refereeing a local club fixture or coaching a youth team, this tool handles all the scoring and timing details automatically.',
    },
    {
      type: 'title',
      text: 'Rugby Union Scoring System Explained',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rugby union offers four ways to score points, each requiring different skills and strategies. The try is the most valuable attacking play, rewarding teams for breaking through the defensive line and grounding the ball in the try zone. After a try, the scoring team attempts a conversion kick for two extra points. Penalty kicks and drop goals add tactical depth, letting teams score from open play or after opposition infractions.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Try',
          description: 'Ground the ball in the try zone for five points.',
          icon: 'mdi:rugby',
          points: ['Five points awarded', 'Sets up conversion attempt', 'Requires ball grounding'],
        },
        {
          title: 'Conversion',
          description: 'Kick through the posts after a try for two points.',
          icon: 'mdi:goal',
          points: ['Two points if successful', 'Kicked from try position', 'Must clear crossbar'],
        },
        {
          title: 'Penalty Kick',
          description: 'Kick at goal after opposition infringement for three points.',
          icon: 'mdi:alert-octagon',
          points: ['Three points awarded', 'Can be kicked or tapped', 'Often decides close matches'],
        },
        {
          title: 'Drop Goal',
          description: 'Drop kick the ball through the posts during open play for three points.',
          icon: 'mdi:circle-outline',
          points: ['Three points awarded', 'Ball must hit ground first', 'High pressure game winner'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Understanding the Sin Bin System',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The sin bin is a temporary suspension system for dangerous or repeated infringements. When a referee shows a yellow card, the player must leave the field for ten minutes of active play. During this time, their team plays with one fewer player, creating a numerical advantage for the opposing team. The sin bin timer only counts down while the match clock is running, ensuring fair enforcement regardless of stoppages.',
    },
    {
      type: 'list',
      items: [
        '<strong>Yellow Card Penalty:</strong> Ten minutes in the sin bin for dangerous play or repeated team infringements.',
        '<strong>Numerical Disadvantage:</strong> The offending team plays with 14 players instead of 15 during the suspension period.',
        '<strong>Automatic Return:</strong> When the timer expires, the player automatically rejoins the match from the halfway line.',
        '<strong>Red Card Upgrade:</strong> A second yellow card or a single serious offense results in a red card and permanent dismissal.',
      ],
    },
    {
      type: 'title',
      text: 'Match Timing and Half Management',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A standard rugby union match is divided into two 40 minute halves with a 10 minute halftime interval. The match clock runs continuously during active play but can be paused by the referee for injuries, serious foul play reviews, or other stoppages. This digital scorekeeper includes a precise match clock with pause and resume controls, automatic half tracking, and clear visual indicators for each period of play.',
    },
    {
      type: 'title',
      text: 'Why Use a Digital Rugby Scorekeeper',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manual scorekeeping in rugby is challenging due to the variety of scoring methods, sin bin timing requirements, and half management. This browser tool provides accurate real time scoring, automatic sin bin countdowns, and precise match timing. Coaches can focus on game strategy instead of arithmetic, referees have a reliable backup scoring system, and players can verify the match state at a glance.',
    },
  ],
  ui: {
    title: 'Rugby Scorekeeper',
    description: 'Track match scores and sin bin timers.',
    home: 'Home',
    away: 'Away',
    score: 'Score',
    tryLabel: 'Try +5',
    conversion: 'Conversion +2',
    penalty: 'Penalty +3',
    dropGoal: 'Drop Goal +3',
    conversionYes: 'Yes',
    conversionNo: 'No',
    sinBin: 'Yellow Card',
    sinBinTitle: 'Sin Bin Suspension',
    sinBinPlayer: 'Player name or number:',
    sinBinAdd: 'Start Suspension',
    sinBinEmpty: 'No active suspensions',
    sinBinReturn: 'Returned',
    matchClock: 'Match Clock',
    half: 'Half',
    half1: 'First Half',
    half2: 'Second Half',
    startMatch: 'Kick Off',
    pauseMatch: 'Pause',
    resumeMatch: 'Resume',
    resetMatch: 'Reset Match',
    resetConfirm: 'Reset the current match? All scores and timers will be lost.',
    cancel: 'Cancel',
    confirm: 'Confirm Reset',
    period: 'Period',
    scoringSummary: 'Scoring Summary',
    tryScored: 'Tries',
    conversionSuccess: 'Conversions',
    conversionMiss: 'Missed Conversions',
    penaltyScored: 'Penalties',
    dropGoalScored: 'Drop Goals',
    totalPoints: 'Total',
    fullscreen: 'Fullscreen',
    toggleSound: 'Toggle Sound',
    eventLog: 'Event Log',
    eventEmpty: 'No events yet',
    undoBtn: 'Undo Last',
    timeOff: 'Time Off',
    timeOn: 'Time On',
  },
};
