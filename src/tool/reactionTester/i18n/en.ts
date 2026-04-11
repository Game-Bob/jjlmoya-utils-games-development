import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'reaction-test';
const title = 'Reaction Speed Test (Reflexes): Online Benchmark';
const description = 'Measure your reflexes in milliseconds with our professional reaction test. Compete for ranks from \'Turtle\' to \'Cyberathlete\' and analyze your performance.';

const ui: ReactionTesterUI = {
  title: 'Reaction Test',
  subtitle: 'Measure your reaction speed in milliseconds. Average of 5 attempts.',
  startBtn: 'Click to start',
  goTitle: 'GO!',
  goSubtitle: 'HIT IT NOW!',
  earlyTitle: 'Too soon!',
  earlySubtitle: 'Wait for the green.',
  earlyRetry: 'Click to retry',
  promptNext: 'Click for attempt',
  promptFinal: 'See Final Results',
  avgLabel: 'Final average',
  copyBtn: 'Copy',
  tweetBtn: 'Tweet',
  retryBtn: 'Try again',
  inputMouse: 'Mouse',
  inputTouch: 'Touch',
  inputSpace: 'Space',
  historyTitle: 'Local History',
  historyBest: 'Top 5 Best',
  historyWorst: 'Top 5 Worst',
  historyEmpty: 'Play to record your first score',
  copySuccess: 'Copied!',
  shareText: 'I scored {ms}ms on the Reaction Test!\nRank: {rank}\n\nCan you beat me?\n{url}',
  rankCiberatleta: 'Cyberathlete',
  rankTigre: 'Tiger',
  rankHumano: 'Human',
  rankTortuga: 'Turtle',
  rankDormido: 'Asleep',
  f150: 'ARE YOU A ROBOT?!',
  f180: 'INCREDIBLE!',
  f210: 'Very fast!',
  f250: 'Good reaction',
  f300: 'Not bad...',
  f400: 'A bit slow...',
  f600: 'You fell asleep',
  fSlow: 'Wake up...',
  wp0t: 'WAIT...', wp0s: 'Hold your breath...',
  wp1t: 'STILL...', wp1s: 'Don\'t blink now',
  wp2t: 'READY...', wp2s: 'Fingers ready...',
  wp3t: 'HOLD...', wp3s: 'Patience, grasshopper',
  wp4t: 'FOCUS...', wp4s: 'It\'s coming...',
};

const faqData = [
  { question: 'What is the average human reaction time?', answer: 'The average human reaction time to a visual stimulus is approximately 250 to 270 milliseconds. High-performance athletes and pro-gamers are usually below 200ms.' },
  { question: 'How can I improve my reflexes?', answer: 'The key is consistent practice and rest. Playing action video games (FPS), practicing fast sports like ping-pong and staying well hydrated helps keep the nervous system alert.' },
  { question: 'Does the screen affect my result?', answer: 'Yes. There is something called \'input lag\'. Screens with a low refresh rate (60Hz) or old wireless mice can add 15 to 50ms to your actual reaction time.' },
  { question: 'At what age do we start losing reflexes?', answer: 'Physiologically, human reflexes peak between ages 20 and 24. After that, there is a very slow decline (approx. 2-6ms per decade) if not trained.' },
];

const howTo = [
  { name: 'Wait for red', text: 'Click the start area and wait patiently for the screen to change color.' },
  { name: 'React to green', text: 'As soon as you see green, click or tap the screen as fast as you can.' },
  { name: 'See your result', text: 'The system will calculate the exact difference in milliseconds between the color change and your tap.' },
  { name: 'Analyze your rank', text: 'Repeat the test 5 times to get a reliable average and find out if you are a \'Turtle\' or a \'Cyberathlete\'.' },
];

const seo = [
  { type: 'title' as const, text: 'How Does This Reaction Test Work?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'This tool measures your <strong>visual reaction time</strong> with surgical precision. We calculate the exact interval from when the screen lights up until the signal travels from your eyes to your brain, and then to your fingers. The test requires <strong>5 consecutive attempts</strong> to calculate your real average, eliminating the luck factor.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Average of 5 attempts:</strong> We eliminate the "luck" factor by requiring consistency. A single lucky click won\'t make you a Cyberathlete.',
      '<strong>Anti-Cheat System:</strong> Random wait times (1.5s - 4.5s) and early-click detection to prevent prediction.',
      '<strong>Real science:</strong> Brain processing ~180-200ms + motor response +20-40ms = your total reaction time.',
    ],
  },
  { type: 'title' as const, text: 'World Ranking Table', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Time', 'Rank', 'Description'],
    rows: [
      ['&lt; 180 ms', 'Cyberathlete', 'Superhuman level typical of eSports pros or fighter pilots.'],
      ['180 - 230 ms', 'Tiger', 'Sharp reflexes. You\'re probably great at shooters.'],
      ['230 - 280 ms', 'Human', 'The healthy average. You\'re awake and functioning properly.'],
      ['280 - 350 ms', 'Turtle', 'Below average. Rest or train more.'],
      ['&gt; 350 ms', 'Asleep', 'Possible fatigue, sleepiness or slow hardware (input lag).'],
    ],
  },
  { type: 'title' as const, text: 'Why Are You Slow? Blaming the Hardware', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitor (Hz)',
        description: 'A 60Hz monitor takes ~16ms to paint a frame. A 144Hz one takes only 7ms. That 10ms difference counts in your final score.',
        icon: 'mdi:monitor',
        points: ['60Hz = ~16ms per frame', '144Hz = ~7ms per frame', 'Visible difference in test'],
      },
      {
        title: 'Wireless Mouse',
        description: 'Cheap office Bluetooth mice have high latency. For this test, use a cable or low-latency 2.4GHz wireless technology.',
        icon: 'mdi:mouse-variant',
        points: ['Cheap Bluetooth: +15-50ms', '2.4GHz gaming: <1ms extra', 'USB cable: reference'],
      },
      {
        title: 'Browser',
        description: 'Extensions that block ads or heavy scripts can cause stuttering. Try incognito mode for your real record.',
        icon: 'mdi:web',
        points: ['Close heavy extensions', 'Incognito = cleaner', 'Chrome/Firefox recommended'],
      },
    ],
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faqTitle: 'Frequently Asked Questions', faq: faqData, bibliography: [], howTo, schemas };
