import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'elo-rating-calculator';
const title = 'ELO Rating Calculator for Chess, Esports and Sports';
const description = 'Free ELO rating calculator for wins, draws and losses. Enter both ratings, choose a K factor, and see the exact rating change, expected score, new ELO and opponent ELO.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Player rating',
  opponentLabel: 'Opponent rating',
  kFactorLabel: 'K factor',
  resultLabel: 'Match result',
  winLabel: 'Win',
  drawLabel: 'Draw',
  lossLabel: 'Loss',
  calculateLabel: 'Calculate',
  resetLabel: 'Reset',
  expectedLabel: 'Expected',
  deltaLabel: 'Change',
  newRatingLabel: 'New rating',
  opponentNewRatingLabel: 'Opponent new ELO',
  kFactorHelpTitle: 'What is K factor?',
  kFactorHelpText: 'K controls how aggressive the update is. Low K means stable rankings. High K means every result moves ratings faster.',
  kFactorLowText: 'Stable',
  kFactorHighText: 'Volatile',
  resultSummaryLabel: 'Match impact',
  initialImpactText: 'Draw keeps the table tight',
  historyVersusLabel: 'vs',
  historyToLabel: 'to',
  playerPointsLabel: 'player points',
  opponentEloLabel: 'opponent ELO',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'RATING',
  upsetLabel: 'Upset chance',
  favoriteLabel: 'Favorite pressure',
  balancedLabel: 'Balanced match',
  historyLabel: 'Local calculations',
  noHistoryLabel: 'Run a calculation to save it here',
  copiedLabel: 'Copied',
  copyLabel: 'Copy',
  clearLabel: 'Clear',
  kBeginner: 'Beginner',
  kClub: 'Club',
  kTournament: 'Tournament',
  kElite: 'Elite',
};

const faqData = [
  { question: 'How do I calculate ELO rating change after a match?', answer: 'Enter your current ELO, the opponent ELO, the match result and the K factor. The calculator estimates your expected score, compares it with the real result, then returns the exact rating points gained or lost.' },
  { question: 'What does K factor mean in ELO?', answer: 'K factor controls rating sensitivity. A low K factor makes ratings stable and slow to move. A high K factor makes ratings react faster, which is useful for new players, short seasons or active local ladders.' },
  { question: 'Why do I gain fewer ELO points when I beat a lower rated opponent?', answer: 'Because the formula already expected you to win. Beating a much lower rated opponent confirms the prediction, so the rating gain is small. Beating a stronger opponent is more surprising, so the gain is larger.' },
  { question: 'Does the opponent lose the same number of ELO points?', answer: 'In a standard two player ELO exchange, yes. The points gained by one side are subtracted from the other side, so the calculator shows both the player new ELO and the opponent new ELO.' },
  { question: 'Can I use this ELO calculator outside chess?', answer: 'Yes. ELO works for any repeated head to head competition where stronger players should be more likely to win, including esports, tennis ladders, padel groups, table tennis, debating clubs and fantasy leagues.' },
];

const howTo = [
  { name: 'Enter the player rating', text: 'Type the current rating for the player whose change you want to calculate.' },
  { name: 'Enter the opponent rating', text: 'Add the opponent rating so the calculator can estimate the expected score.' },
  { name: 'Choose K factor and result', text: 'Use a lower K factor for stable rankings or a higher K factor when ratings should adjust quickly, then choose win, draw or loss.' },
  { name: 'Read the new ratings', text: 'The calculator shows expected score, rating change, your new ELO and the opponent new ELO after the point exchange.' },
];

const seo = [
  { type: 'title' as const, text: 'Calculate ELO Points After Any Match', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Use this ELO rating calculator when you need a fast answer to a very practical question: <strong>how many ELO points do I gain or lose after this result?</strong> Enter your rating, the opponent rating, the match result and the K factor. The tool calculates expected score, rating variation, your new ELO and the opponent new ELO in the same result card.'
  },
  {
    type: 'summary' as const,
    title: 'What this calculator answers',
    items: [
      'How many ELO points you gain after a win against a stronger or weaker opponent.',
      'How many ELO points you lose after an upset loss.',
      'Whether a draw should increase or decrease your rating.',
      'What the opponent rating becomes after the same point exchange.',
      'How changing the K factor makes rating movement stable or volatile.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'win score', description: 'A win is treated as a full point before it is compared with expected score.' },
      { value: '0.5', label: 'draw score', description: 'A draw is exactly between a win and a loss, so it can gain points against a stronger opponent.' },
      { value: '0.0', label: 'loss score', description: 'A loss against a lower rated opponent usually costs more because it was unexpected.' },
    ]
  },
  { type: 'title' as const, text: 'What the ELO Formula Is Doing', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'The three steps behind every result',
    description: 'The calculator follows the standard ELO idea without making you work through the formula manually.',
    items: [
      { label: 'Expected score', value: 'The rating gap is converted into a probability style score. Higher rated players are expected to score more.' },
      { label: 'Actual score', value: 'A win counts as 1, a draw counts as 0.5 and a loss counts as 0.' },
      { label: 'Rating change', value: 'The difference between actual and expected score is multiplied by K factor and rounded to points.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situation', 'What usually happens', 'Why it happens'],
    rows: [
      ['You beat a stronger opponent', 'Large ELO gain', 'Your actual score was much higher than expected'],
      ['You beat a weaker opponent', 'Small ELO gain', 'The formula already expected you to win'],
      ['You draw a stronger opponent', 'Small ELO gain', 'A draw can outperform your expected score'],
      ['You lose to a weaker opponent', 'Large ELO loss', 'The result was worse than expected'],
    ]
  },
  { type: 'title' as const, text: 'Choosing the Right K Factor for Your Rating System', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>K factor is the sensitivity knob of an ELO system.</strong> It does not decide who deserved to win. It decides how strongly the rating table reacts to one result. If your league has many matches and mature ratings, a lower K keeps the table calm. If players are new or seasons are short, a higher K helps ratings catch up faster.'
  },
  {
    type: 'table' as const,
    headers: ['K factor', 'Use it for', 'What the user should expect'],
    rows: [
      ['10 to 16', 'Established chess clubs, expert pools, long running rankings', 'Very stable ratings with small changes after each match'],
      ['20 to 32', 'Local leagues, club ladders, recurring tournaments', 'Balanced movement that feels responsive without overreacting'],
      ['40 to 60', 'New players, short seasons, esports ladders, informal groups', 'Fast correction when the current rating may be inaccurate'],
      ['60 plus', 'Experimental formats or provisional ratings only', 'Very volatile ratings where one match can shift the table heavily'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Best default for most users',
    html: 'If you are not following an official federation rule, start with <strong>K 32</strong>. It is responsive enough for active ladders and still stable enough that one lucky result does not completely rewrite the ranking.'
  },
  { type: 'title' as const, text: 'How to Read Your ELO Calculator Result', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Expected:</strong> the score the formula predicted before the match. Higher expected score means you were favored.',
      '<strong>Change:</strong> the exact ELO points added to or removed from the player rating.',
      '<strong>New rating:</strong> the player rating after applying the result.',
      '<strong>Opponent new ELO:</strong> the opponent rating after the opposite point movement.',
      '<strong>Match impact:</strong> a plain language summary of how strongly the result moved the table.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Chess and board games',
        description: 'Calculate post game ratings for club nights, online events and private rating pools.',
        icon: 'mdi:chess-knight',
        points: ['Win draw loss support', 'Opponent ELO shown', 'Good fit for long term rankings']
      },
      {
        title: 'Esports ladders',
        description: 'Update player or team rankings after repeated head to head matches where skill can change quickly.',
        icon: 'mdi:gamepad-variant',
        points: ['Higher K factor options', 'Fast rating correction', 'Clear upset rewards']
      },
      {
        title: 'Sports ladders',
        description: 'Maintain fair rankings for tennis, padel, squash, table tennis, badminton and local leagues.',
        icon: 'mdi:tennis',
        points: ['Simple manual updates', 'Works for clubs', 'Easy for organizers']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'When ELO is a good rating choice',
    items: [
      {
        pro: 'Excellent for repeated head to head matches where stronger players should win more often.',
        con: 'Less ideal for team sports where individual contribution is hard to isolate.'
      },
      {
        pro: 'Easy to explain because wins against stronger opponents are worth more points.',
        con: 'Needs enough matches before ratings feel accurate for brand new players.'
      },
      {
        pro: 'Simple enough to maintain in a spreadsheet, club ladder or league table.',
        con: 'K factor rules must be consistent or rankings become hard to trust.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Important for league organizers',
    html: 'Choose your K factor before the season starts and publish it. Players trust ELO tables more when everyone knows how ratings are calculated before results are entered.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
