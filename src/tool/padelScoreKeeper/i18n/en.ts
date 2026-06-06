import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'padel-scorekeeper';
const title = 'Padel Scorekeeper : Gold Point & Rotation Tracker';
const description = 'Track padel scores with the official Punto de Oro (Gold Point) rule, serve rotation alerts, set tiebreaks, and dynamic ends swapping animation.';

const faq = [
  {
    question: 'What is the Gold Point (Punto de Oro) in Padel?',
    answer: 'The Gold Point is a deciding point played when the score reaches 40-40 (Deuce). There is no advantage play. The receiving team chooses whether to receive the serve on the left or right side, and whoever wins that single point wins the entire game.',
  },
  {
    question: 'How do set formats work in Padel?',
    answer: 'Standard matches are played best of 3 sets, with each set won by the first team to reach 6 games (leading by 2). If the score reaches 6-6, a 7-point tiebreak is played. An optional Golden Set format ends at 4 games with a tiebreak at 4-4.',
  },
  {
    question: 'When do players switch sides in Padel?',
    answer: 'Players change ends after the first game, and then every 2 games after that (whenever the sum of games in the current set is odd, e.g. 1, 3, 5). During tiebreaks, players switch sides every 6 points.',
  },
];

const howTo = [
  {
    name: 'Configure Match Format',
    text: 'Select the standard match format (first to 6 games) or the shorter golden set format (first to 4 games).',
  },
  {
    name: 'Enter Player Names',
    text: 'Input team names to personalize the scoreboard. Your configurations are saved automatically.',
  },
  {
    name: 'Log Points on the Court',
    text: 'Tap either side of the visual isometric padel court to score points. Serve indicators will guide you on diagonal rotations.',
  },
  {
    name: 'Decide Gold Points',
    text: 'When deuce is reached, select the returning side (left or right receiver) and click the winning team to conclude the game.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Free Online Padel Scoreboard & Match Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tracking scores in padel can get confusing with fast-paced rallies, tiebreaks, side changes, and the official Punto de Oro (Gold Point) rule. This free online padel scoreboard takes the hassle out of scorekeeping. Simply tap the visual court to log points, and let the tool automatically manage server rotations, receiver sides, set histories, and court side swaps in real-time.',
    },
    {
      type: 'title',
      text: 'Understanding Padel Scoring, Gold Points, and Rotations',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Padel follows standard tennis-like scoring (15, 30, 40, Game) but introduces specific rules for faster play. Under the professional FIP rules, when the score reaches 40-40, a deciding Gold Point (Punto de Oro) is played. The receiving team selects which side (left or right) will receive the serve, and the winner of that single point wins the game. Additionally, teams must swap sides of the court whenever the total games played in a set is odd, and every 6 points during a tiebreak.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Friendly Matches',
          description: 'Quick and clean scorekeeping for friendly matches with your padel partners.',
          icon: 'mdi:tennis',
          points: ['One-tap point addition', 'Mobile first layout', 'Works offline on the go'],
        },
        {
          title: 'Club & League',
          description: 'Keep track of competitive club matches and local tournaments with ease.',
          icon: 'mdi:trophy-outline',
          points: ['Set history archive', '6-game or 4-game sets', 'Punto de Oro support'],
        },
        {
          title: 'Umpire Mode',
          description: 'Full-featured tool for refereeing official matches or training sessions.',
          icon: 'mdi:school',
          points: ['Active serve & receive markers', 'Interactive court rotation', 'Fullscreen console mode'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Advanced Digital Features for Padel Players',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Official Punto de Oro Logic</strong> lets the receiving team choose the receiver side at deuce, showing the serve path.',
        '<strong>Visual Court Indicator</strong> shows the server (S) and receiver (R) positions dynamically to avoid rotation mistakes.',
        '<strong>Automatic Ends Swapping</strong> flips the court layout on odd games or tiebreak intervals so it always matches your physical view.',
        '<strong>Custom Set Formats</strong> supports standard 6-game sets or fast 4-game Golden Sets.',
        '<strong>Local Browser Auto-Save</strong> keeps player names and current match scores safe even if you refresh the page.',
      ],
    },
    {
      type: 'title',
      text: 'Padel Tiebreak Rules: Standard vs Super Tiebreaks',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In standard padel sets, if the score reaches 6-6 in games, a standard 7-point tiebreak is played. In a tiebreak, points are counted numerically (1, 2, 3, etc.). The first team to reach 7 points with a margin of 2 wins the set. The player whose turn it is to serve serves the first point from the right (deuce) side. Thereafter, each player serves for two consecutive points, starting from the left (advantage) side. In some tournament formats, if the match is tied at 1-1 in sets, a 10-point Super Tiebreak is played instead of a full third set to decide the match.',
    },
    {
      type: 'title',
      text: 'Court Switching and Rotations: Keeping Padel Fair',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Court switching is essential in padel to ensure that environmental factors, such as sun, wind, or court-specific imperfections, do not favor one team over another. Players must swap ends of the court after the first game of each set, and then after every two games (e.g. at 1-0, 2-1, 3-2, 4-3, 5-4). Our digital padel scoreboard features a dynamic ends swapping animation that automatically rotates the visual court layout by 180 degrees whenever players are required to switch sides physically. This ensures that the team displayed at the top of your screen always matches the team playing on the far end of the physical court.',
    },
    {
      type: 'title',
      text: 'Standard Sets vs Golden Sets Format',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'While standard matches are played to 6 games per set, many recreational leagues and fast-paced tournaments adopt the "Golden Set" format where sets are played to only 4 games (with a tiebreak at 4-4). This scoreboard allows you to switch between these formats with a single tap in the toolbar. Regardless of the format selected, the scoreboard handles all tiebreaks, service rotations, and score calculations automatically.',
    },
    {
      type: 'title',
      text: 'Tips for Effective Scorekeeping on Court',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Use a Court Stand or Phone Holder:</strong> Mount your phone or tablet on the padel court fence at net height. This allows players from both sides to easily see the active score and server indicators.',
        '<strong>Personalize Names Before Starting:</strong> Take 10 seconds to type the actual names of the players or teams. This makes the voice announcements (if enabled) and visual scoreboard much more engaging and official.',
        '<strong>Enable Fullscreen Mode:</strong> Click the fullscreen button in the header panel. This maximizes the scoreboard interface and helps prevent the screen from turning off automatically during long rallies.',
      ],
    },
    {
      type: 'title',
      text: 'Why Use a Digital Padel Scorekeeper?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Instead of constantly arguing over who is serving, whose turn it is to receive, or what the game score is, a digital tracker keeps everyone aligned. By visually rendering the server and receiver positions directly on the screen, players can quickly glance at the phone on the bench and know exactly where to stand. This improves pace of play and prevents rotation errors.',
    },
  ],
  ui: {
    playerA: 'Team 1',
    playerB: 'Team 2',
    game: 'Game',
    set: 'Set',
    tiebreak: 'Tiebreak',
    goldPoint: 'Gold Point',
    selectReceiver: 'Select Receiver',
    leftReceiver: 'Left Receiver',
    rightReceiver: 'Right Receiver',
    server: 'Server',
    receiver: 'Receiver',
    changeEnds: 'Change Ends',
    matchWon: 'Match Won',
    reset: 'Reset',
    resetConfirm: 'Reset match? All data will be lost.',
    cancel: 'Cancel',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
    deuce: 'Deuce',
    advantage: 'Advantage',
    formatStandard: '6 Games',
    formatGoldenSet: '4 Games',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Gold Point Deciding Point',
  },
};
