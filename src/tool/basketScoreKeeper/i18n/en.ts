import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'basketball-scoreboard';
const title = 'Basketball Scoreboard Online : Free Score Keeper';
const description =
  'Free online basketball scoreboard with +1, +2 and +3 buttons. Keep score for pickup games, streetball, high school and local league matches. No signup, no download, works offline.';

const faqData = [
  {
    question: 'How do you keep score in a basketball game?',
    answer:
      'Basketball uses three scoring values: free throw (+1 point), field goal (+2 points), and three-pointer (+3 points). Tap the corresponding button each time a team scores. The scoreboard automatically tracks the total. To correct a mistake, use the minus button next to the score.',
  },
  {
    question: 'What is the difference between +1, +2 and +3 in basketball?',
    answer:
      '+1 is for free throws awarded after a foul. +2 is for a regular field goal scored inside the three-point arc. +3 is for shots made from beyond the three-point line. Having separate buttons for each value lets you score faster and reduces errors compared to a simple counter.',
  },
  {
    question: 'Can I use this scoreboard for a real basketball game?',
    answer:
      'Yes. The scoreboard is designed for real games: pickup basketball, streetball, high school matches, local league games, and practice scrimmages. It saves the score in your browser so you can reload the page without losing the game state.',
  },
  {
    question: 'How do I keep score for street basketball or pickup games?',
    answer:
      'Street basketball usually plays to a target score (like 21 or 16) with 1s and 2s (or just 1s). This scoreboard works for any format. Use +1 for regular buckets, +2 for shots behind the arc. Set your own win condition and use the minus button if you make a mistake.',
  },
  {
    question: 'Does it work offline on mobile?',
    answer:
      'Yes. Once the page loads, the scoreboard works completely offline. Perfect for outdoor courts, gyms without WiFi, or anywhere with a poor signal. You can also go fullscreen and the screen will stay awake so it does not lock during the game.',
  },
  {
    question: 'How do I keep track of team fouls and the bonus?',
    answer:
      'This scoreboard focuses on the scoreboard itself. For team fouls, you can use the team name fields to manually track fouls (e.g., rename "HOME" to "HOME 3F"). We recommend pairing this tool with a separate foul tracker for official games.',
  },
  {
    question: 'Can I use this basketball scorekeeper on my phone?',
    answer:
      'Yes. The interface is designed for mobile first. The +1, +2 and +3 buttons are large and easy to tap with your thumb. Fullscreen mode hides the browser chrome so the scoreboard takes the entire screen, and the screen wake lock prevents your phone from turning off.',
  },
];

const howToData = [
  {
    name: 'Name your teams',
    text: 'Tap on HOME or AWAY to enter your team names. The names are saved automatically in your browser so they persist even if you reload the page.',
  },
  {
    name: 'Score a free throw (+1)',
    text: 'Tap the +1 button when a player makes a free throw. Each free throw is worth one point and is typically awarded after a foul.',
  },
  {
    name: 'Score a field goal (+2)',
    text: 'Tap the +2 button for a regular basket inside the three-point line. This is the most common scoring action in basketball.',
  },
  {
    name: 'Score a three-pointer (+3)',
    text: 'Tap the +3 button when a player scores from beyond the three-point arc. A three-pointer is highlighted with a red button and triggers an extra celebration effect.',
  },
  {
    name: 'Correct a scoring mistake',
    text: 'If you accidentally add points, tap the minus button to subtract. It will not go below zero. There is no need to restart the entire game for a small error.',
  },
  {
    name: 'Swap sides at halftime',
    text: 'Use the swap button to switch the HOME and AWAY positions at halftime. Both scores and team names are swapped, so you do not lose any data.',
  },
  {
    name: 'Start a new game',
    text: 'Tap the reset button and confirm to clear all scores and start a new game. The team names are kept so you do not have to type them again.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Free Online Basketball Scoreboard : No Signup, No Download',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keeping score in basketball should be simple. A free throw is +1. A field goal is +2. A three-pointer is +3. This scoreboard gives you a dedicated button for each value so you can tap and keep playing. No menus, no modes, no configuration. Just name your teams and start scoring. The score is saved in your browser automatically, so you can reload the page, close your phone, or come back later without losing the game.',
    },
    {
      type: 'title',
      text: 'Why a Dedicated Basketball Scorekeeper Beats a Generic Counter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Most scoreboard apps force you to tap the same button multiple times to add two or three points. That extra tap adds up over a 40-minute game and increases the chance of losing count during a fast break or a quick substitution. This scoreboard has <strong>three separate buttons</strong> : one for each scoring value : so you tap exactly once per scoring play. The +3 button lights up in red and triggers an explosive animation to match the excitement of a three-pointer going in.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pickup & Streetball',
          description:
            'Games to 16 or 21 with 1s and 2s. This scoreboard handles both values. Just use +1 and +2 and ignore the +3 when playing by street rules.',
          icon: 'mdi:basketball',
          points: ['No setup needed', 'Works for any win target', 'Screen stays awake'],
        },
        {
          title: 'High School & Local League',
          description:
            'Standard FIBA or NFHS rules with free throws, field goals and three-pointers. Dedicated buttons make it fast enough for an official scorer.',
          icon: 'mdi:school',
          points: ['All three scoring values', 'Editable team names', 'Fullscreen keeps phone awake'],
        },
        {
          title: 'Practice & Training',
          description:
            'Track made shots during shooting drills, scrimmage scoring, or one-on-one games. The history is not stored, so each session starts fresh.',
          icon: 'mdi:whistle',
          points: ['Quick reset between drills', 'Works offline in the gym', 'No account needed'],
        },
      ],
    },
    {
      type: 'title',
      text: 'How Basketball Scoring Works',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketball has three scoring values. A <strong>free throw</strong> is worth 1 point and is taken from the free-throw line after a foul. A <strong>field goal</strong> is worth 2 points and counts for any basket made from inside the three-point arc during normal play. A <strong>three-point field goal</strong> is worth 3 points for shots taken from beyond the arc, marked by the three-point line. Most professional and college games use all three values. Street basketball often uses only 1s and 2s, or just 1s. This scoreboard adapts to any format.',
    },
    {
      type: 'title',
      text: 'Play Any Format: Win by Score, Win by Time, or First to Target',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketball does not have a fixed scoring limit : the game ends when the clock runs out. But pickup basketball often uses target scores like first to 16, 21, or 11 (win by 2). This scoreboard does not enforce a win condition because basketball does not end on a score. You decide when the game is over, and the reset button clears the board for the next game. The team names are preserved so you can play consecutive games without retyping.',
    },
    {
      type: 'title',
      text: 'What Makes This Scoreboard Different',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Three dedicated buttons</strong> : +1, +2, and +3. No cycling through values, no long press, no extra taps.',
        '<strong>Editable team names</strong> : tap the name to change it. Names are saved in your browser and persist across page reloads.',
        '<strong>Screen wake lock</strong> : when you go fullscreen, the scoreboard prevents your phone screen from turning off. No more tapping the screen just to keep it alive.',
        '<strong>Fullscreen mode</strong> : hides browser tabs and address bar so the scoreboard takes the entire screen. Tap the fullscreen button once and the tool expands.',
        '<strong>Offline first</strong> : the entire scoreboard works without an internet connection after the first load. No ads, no trackers, no data collection.',
        '<strong>Satisfying feedback</strong> : each tap triggers a score animation, floating particles, and a subtle vibration on supported devices. The +3 gets an extra explosion effect.',
        '<strong>Game state is saved</strong> : reload the page, close the browser, or come back tomorrow. The scores and team names are stored locally.',
      ],
    },
    {
      type: 'title',
      text: 'Basketball Scoreboard vs. Paper Score Sheet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A paper score sheet works, but it requires a pen, a flat surface, and someone who can write and watch the game at the same time. A digital scoreboard solves all three problems. The buttons are large enough to tap without looking. The numbers are readable from across the court. The score never gets smudged, lost, or accidentally erased. And unlike paper, this scoreboard saves your game state, so you can close it at halftime and come back.',
    },
  ],
  ui: {
    playerA: 'HOME',
    playerB: 'AWAY',
    swapSides: 'Swap Sides',
    reset: 'Reset',
    resetConfirm: 'Reset the game? All points will be lost.',
    cancel: 'Cancel',
    fullscreen: 'Full Screen',
    exitFullscreen: 'Exit Full Screen',
    winnerLabel: 'WINNER',
  },
};

