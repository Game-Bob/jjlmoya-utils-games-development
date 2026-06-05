import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'football-scorekeeper';
const title = 'Football Scorekeeper Online : Free Soccer Match Tracker';
const description =
  'Track football match scores online for free. Simple goal counter for soccer games, friendly matches, and tournaments. No registration needed.';

const faqData = [
  {
    question: 'How do I use this football scorekeeper?',
    answer:
      'Tap the + button under each team to add a goal. The score updates instantly with a celebration animation. Use the minus button to undo a mistake. Team names are editable just tap on the default name and type your own. Everything is saved automatically in your browser so you can close the page and come back later.',
  },
  {
    question: 'Can I use it on my phone during a match?',
    answer:
      'Yes. The interface is designed for mobile use with large buttons you can tap without looking. Fullscreen mode hides the browser and keeps your phone screen awake during the entire match. The vertical layout lets you reach both team sections easily with your thumb.',
  },
  {
    question: 'Does it save my match data?',
    answer:
      'Yes. The current score and team names are saved in your browser automatically. You can reload the page, close the browser, or come back the next day and your match data will still be there.',
  },
  {
    question: 'Can I track extra time or penalty shootouts?',
    answer:
      'Yes. The scorekeeper works the same way for any match format. Just keep using the + buttons during extra time or penalty shootouts. When the match is over, tap Finish Match to see the final result.',
  },
  {
    question: 'Is it really free with no hidden limits?',
    answer:
      'Yes, completely free with no restrictions. No premium plans, no participant limits, no watermarks, no ads. Everything works offline in your browser. No account or email required.',
  },
];

const howToData = [
  {
    name: 'Name the teams',
    text: 'Tap the default team name and type your own. The new name is saved automatically in your browser.',
  },
  {
    name: 'Add a goal',
    text: 'Tap the big circular + button for the team that scored. The score number jumps up with a celebration animation.',
  },
  {
    name: 'Remove a goal',
    text: 'Tap the minus button below the + button if you added a goal by accident. The score adjusts immediately.',
  },
  {
    name: 'Finish the match',
    text: 'Tap Finish Match at the bottom to see the winner announced with a trophy and confetti. Dismiss the celebration by tapping outside.',
  },
  {
    name: 'Reset the match',
    text: 'Tap the reset icon in the top bar and confirm to clear both scores. Team names are kept so you do not need to re enter them.',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: 'Free Online Football Scorekeeper : Live Soccer Match Tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Keeping score during a football match should be the easiest part of the game. This online football scorekeeper lets you track goals for two teams in real time with nothing but a tap. No sign ups, no downloads, no complicated menus. Open the page, name your teams, and start counting goals. Whether you are on the sideline coaching youth football, running a friendly match between friends, or keeping score during a local league game, this tool is built for speed and simplicity. Each team gets its own color coded section with a large score display and a dedicated +1 button. Tap to add a goal, tap the minus button to undo a mistake. The entire match history stays visible on screen so you always know exactly what happened and when.',
    },
    {
      type: 'title',
      text: 'Why you need a dedicated football scoreboard instead of a generic counter',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A generic number counter works for counting anything, but a dedicated football scorekeeper understands how the game works. It separates the two teams visually with distinct colors so you never tap the wrong side. The goal button is large and satisfying to press, even when you are holding a phone in one hand on the sideline. The minus button lets you correct errors instantly without having to reset the whole match. And when the game is over, the Finish Match button triggers a celebration screen that shows the final result with confetti and a trophy. Generic counters cannot do any of that. They treat every point the same way. Football is not generic, and your scorekeeper should not be either.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Friendly & Training Matches',
          description: 'Quick goal tracking for practice games and training sessions. Reset between matches in one tap. Works offline so you can use it at any pitch.',
          icon: 'mdi:soccer',
          points: ['One tap goal entry', 'Works completely offline', 'No account or email needed', 'Instant reset between games'],
        },
        {
          title: 'Local League & Tournament Games',
          description: 'Keep a clean running score for league matches where every goal counts. Large display readable from across the field. Team colors help avoid confusion.',
          icon: 'mdi:trophy-outline',
          points: ['Color coded team sections', 'Editable team names', 'Finish Match with celebration', 'Large score readable from distance'],
        },
        {
          title: 'Youth and School Football',
          description: 'Simple enough for young players to operate themselves. Coaches can track goals while focusing on the game. Fullscreen mode keeps the screen awake.',
          icon: 'mdi:school',
          points: ['Easy enough for kids to use', 'Fullscreen keeps screen on', 'Editable team names', 'No distracting features'],
        },
      ],
    },
    {
      type: 'title',
      text: 'How to track a football match live with this online scorekeeper',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Using this football scoreboard is straightforward. When you open the page, you see two team sections. The home team is shown in red and the away team in blue. Each section has a large score number in the middle, a team name field at the top, and two buttons below. Tap the big circular + button to add a goal for that team. The score number will animate with a celebration effect each time a goal is recorded. Eight different goal animations rotate randomly, so every goal feels unique. Floating particles burst from the button area with text like GOAL and SIUUU. The screen flashes briefly to mark the moment. If you make a mistake, tap the small minus button to remove the last goal. The team name fields are editable. Tap on the default name to type your own team name. Names are saved automatically in your browser along with the current score. This means you can close the page, come back later, and your match data will still be there. At the end of the match, tap Finish Match to see the winner announced with a trophy animation and falling confetti. You can dismiss the celebration and keep the score displayed.',
    },
    {
      type: 'title',
      text: 'Mobile friendly football scorekeeping designed for the sideline',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This tool is built mobile first. The vertical layout places one team above the other so you can reach both sections easily with your thumb while holding your phone. Buttons are large enough to tap without looking at the screen. The fullscreen mode removes browser toolbars and keeps your phone screen awake during the entire match. No more tapping the screen every few minutes to stop it from going dark. The interface works in landscape and portrait orientations. It also works offline after the first page load, so you do not need an internet connection at the pitch. There are no ads, no trackers, and no data collection. Your match data never leaves your device.',
    },
    {
      type: 'title',
      text: 'What makes this football scorekeeper special',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Color coded teams</strong> red for home and blue for away. You can tell which side is which instantly without reading text.',
        '<strong>Goal celebration animations</strong> each goal triggers a random celebration. Eight different animations including boom, rise, glow, and ball bounce.',
        '<strong>Floating particles</strong> every goal spawns floating text with messages like GOAL and SIUUU. Each celebration feels unique.',
        '<strong>Finish Match ceremony</strong> tap Finish Match to trigger a winner announcement with trophy animation, team name, and confetti shower.',
        '<strong>Editable team names</strong> tap the name field to rename your teams. Names are saved locally in your browser.',
        '<strong>Screen wake lock</strong> fullscreen mode prevents your phone screen from turning off during the match.',
        '<strong>Fullscreen mode</strong> hides browser interface so the scoreboard fills the entire screen with no distractions.',
        '<strong>Offline first</strong> works without internet after the first visit. No ads, no tracking, no data collection.',
        '<strong>Instant data persistence</strong> scores and team names are saved automatically. Reload the page or close the browser and your match data comes back.',
        '<strong>Reset with confirmation</strong> the reset button asks for confirmation before clearing scores. Prevents accidental data loss.',
      ],
    },
    {
      type: 'title',
      text: 'Football Scorekeeper vs Paper Scoresheet : why digital is better',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Paper scoresheets have been used for decades, but they have real problems. You need a pen that works, a flat surface to write on, and enough attention to write while watching the game. A single distraction can make you miss a goal or write the wrong number. Once written on paper, the score cannot be corrected cleanly. Crossed out numbers make the sheet hard to read. Paper can get wet in rain, blown away by wind, or lost between matches. A digital football scorekeeper solves every one of these problems. Buttons are large enough to tap by touch alone without looking. Numbers are displayed clearly in a large font that is readable from across the pitch. Mistakes are fixed instantly with the minus button. The score is saved automatically and never gets lost. And unlike paper, the scorekeeper adds celebration animations and visual feedback that make keeping score more enjoyable. Whether you are coaching a youth team, running a Sunday league, or just playing with friends, this free online football scorekeeper gives you everything you need and nothing you do not.',
    },
    {
      type: 'title',
      text: 'Free football scorekeeping for every level of the game',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This tool is completely free to use with no limitations. There are no premium tiers, no hidden features behind a paywall, and no watermarks on the screen. It works for any level of football from casual kickabouts with friends to organized league matches. The simple interface means anyone can use it, from young players learning the game to experienced coaches managing a tournament. No registration is required. No email address. No personal data collected. Open the page, start the match, tap the goals. That is all there is to it.',
    },
  ],
  ui: {
    playerA: 'Local',
    playerB: 'Visitor',
    winnerLabel: 'CHAMPION',
    finishMatch: 'Finish Match',
    reset: 'Reset',
    resetConfirm: 'Reset match? All data will be lost.',
    cancel: 'Cancel',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Exit Fullscreen',
  },
};
