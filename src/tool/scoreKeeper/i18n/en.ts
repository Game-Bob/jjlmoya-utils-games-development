import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'sports-scoreboard';
const title = 'Sports Scoreboard Online: Free Score Counter (2026)';
const description =
  'Digital scoreboard with giant buttons for mobile. Ideal for padel, ping-pong and football. No annoying ads in the middle of the game. Simple and fast.';

const faqData = [
  {
    question: 'Does it work without an internet connection?',
    answer:
      'Yes, once the page is loaded, the scoreboard works completely offline. You do not need data or WiFi during the match. Everything is saved locally in your browser.'
  },
  {
    question: 'Can I use the scoreboard for tennis and padel?',
    answer:
      'Yes, the Tennis/Padel mode automatically handles the 15-30-40-AD sequence and keeps track of sets and games according to the official rules. Perfect for friendly matches.'
  },
  {
    question: 'Can it be put in full screen?',
    answer:
      'Yes, you can activate full screen mode from your browser (F11 on PC, or the full screen button on mobile). Numbers take up 80% of the screen for maximum visibility.'
  },
  {
    question: 'How do I correct a point if I make a mistake?',
    answer:
      'There is a separate button to subtract points on each player card. You can quickly correct mistakes without having to restart the entire scoreboard.'
  },
  {
    question: 'Does it work for basketball with 1, 2 and 3 point baskets?',
    answer:
      'Yes, in Basketball mode dedicated +1, +2 and +3 buttons appear to score any play quickly without extra taps.'
  },
  {
    question: 'Does the scoreboard automatically handle service in ping-pong?',
    answer:
      'Yes, in Ping Pong mode the service indicator rotates automatically every 2 points (or every point in deuce), following the official ITTF rules.'
  },
];

const howToData = [
  {
    name: 'Select your sport',
    text: 'Choose the sport from the selector at the top: Free, Tennis, Padel, Ping Pong, Volleyball or Basketball.'
  },
  {
    name: 'Customize names',
    text: 'Tap on "HOME" or "AWAY" to change the player or team names.'
  },
  {
    name: 'Add points with one tap',
    text: 'Tap the large scoreboard area to add a point. In basketball, use the +1, +2 or +3 buttons.'
  },
  {
    name: 'Indicate serve',
    text: 'Use the serve button in the bottom corner to mark who is serving. The yellow indicator appears automatically.'
  },
  {
    name: 'Correct mistakes',
    text: 'Use the "−" button if you added a point by mistake. No need to restart the entire scoreboard.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: 'Your Digital Referee in Your Pocket',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'In the heat of the match, it\'s easy to lose count. "Was it 4-3 or 3-4?". This scoreboard is designed to settle those disputes before they start. With an interface of <strong>giant buttons</strong> that take up almost the entire card, you can add points without looking at the screen, just reaching out your arm to the phone on the bench.'
    },
    {
      type: 'title',
      text: 'Smart Sport Selector',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tennis / Padel Mode',
          description:
            'Adapted interface with Sets and Games counters. The system automatically handles the 15-30-40-AD sequence.',
          icon: 'mdi:tennis',
          points: ['Official rules', 'Advantage management', 'Sets counter']
        },
        {
          title: 'Basketball Mode',
          description:
            'The scoreboard detects the sport and changes its interface. Dedicated +1, +2 and +3 buttons.',
          icon: 'mdi:basketball',
          points: ['Quick triples', 'Free throws', 'No extra taps']
        },
        {
          title: 'Ping Pong Mode',
          description:
            'Forget about memorizing whose turn it is to serve. The visual indicator rotates automatically every 2 points.',
          icon: 'mdi:table-tennis',
          points: ['ITTF rules', 'Serve rotation', 'Deuce mode (11 pts)']
        },
      ]
    },
    {
      type: 'title',
      text: 'Features Designed for Sport',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>High Visibility Mode:</strong> Numbers that take up 80% of the screen for maximum readability in the sun.',
        '<strong>Editable Names:</strong> Tap on "HOME" or "AWAY" to set the player names.',
        '<strong>Error Prevention:</strong> Separate minus button to quickly correct mistakes without restarting.',
        '<strong>Works Offline:</strong> Once loaded, no internet is needed during the match.',
      ]
    },
  ],
  ui: {
    playerA: 'HOME',
    playerB: 'AWAY',
    swapSides: 'Swap Sides',
    reset: 'Reset',
    serve: 'Serve',
    sets: 'Sets',
    games: 'Games',
    victory: 'VICTORY!',
    newGame: 'New Game',
    continueGame: 'Keep Playing',
    resetConfirm: 'Reset scoreboard?',
    sportSimple: 'Free (Football, Tic-Tac-Toe...)',
    sportTennis: 'Tennis',
    sportPadel: 'Padel',
    sportPingpong: 'Ping Pong',
    sportVolleyball: 'Volleyball',
    sportBasket: 'Basketball'
  }
};
