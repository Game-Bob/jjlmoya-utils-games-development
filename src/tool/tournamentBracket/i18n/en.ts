import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'tournament';
const title = 'Free Online Bracket Generator and Tournament Organizer';
const description = 'Organize tournaments and create single-elimination brackets for free with no registration. Perfect for FIFA, Padel, eSports and board games. 100% Mobile Friendly.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Tournament in Progress',
  nextMatch: 'Next Match',
  share: 'Share',
  backNew: 'Back / New',
  back: 'Back',
  newTournament: 'New Tournament',
  setupSubtitle: 'Set up and generate your competition bracket.',
  tournamentNameLabel: 'Tournament Name',
  tournamentNamePlaceholder: 'E.g. Summer Tournament',
  addPlayersLabel: 'Add Participants',
  addPlayerPlaceholder: 'Name... or several separated by commas',
  playersLabel: 'Players',
  clearAll: 'Clear All',
  emptyList: 'The list is empty',
  howItWorks: 'How does it work?',
  howItWorksText: 'Add participants, give it a name and generate. The system will automatically create matchups and handle "Byes" (direct passes) if there is an odd number.',
  historyLabel: 'History',
  noHistory: 'No tournaments saved',
  noOldTournaments: 'No previous tournaments',
  generateBtn: 'Generate Bracket',
  shuffleLabel: 'Randomize matchups',
  scoreLabel: 'Enable Scores (Optional)',
  dragHint: 'Drag to move',
  roundFinal: 'Final',
  roundSemifinal: 'Semifinals',
  roundQuarter: 'Quarterfinals',
  roundPrefix: 'Round',
  byeLabel: 'Bye',
  waiting: 'Waiting...',
  emptyRound: 'Empty round',
  confirmClearPlayers: 'Clear the entire player list?',
  alertMinPlayers: 'You need at least 2 players.',
  alertLoadFailed: 'Could not load the tournament.',
  confirmDeleteTournament: 'Permanently delete this tournament from history?',
  toastShareLimit: 'Only tournaments with up to 32 players can be shared',
  toastShareError: 'Error generating the link',
  toastShareCopied: 'Link copied to clipboard',
  toastShareFailed: 'Could not copy. URL:',
  toastFinished: 'Tournament Finished!',
  defaultName: 'Tournament'
};

const faqData = [
  { question: 'How does single elimination work?', answer: 'It is a competition system where the participant who loses a match is automatically eliminated from the tournament. Winners advance to the next round (round of 16, quarterfinals, semifinals) until only two remain for the grand final.' },
  { question: 'What happens if I have an odd number of players?', answer: 'Our tool automatically handles "BYEs". Some players will advance directly to the second round without playing in the first so the bracket always ends in powers of two (2, 4, 8, 16...).' },
  { question: 'Can I save and share the tournament bracket?', answer: 'Yes, you can share the bracket through a unique instantly generated link. As a registration-free tool, data is kept in your browser while the tab is open.' },
  { question: 'Does it work for eSports tournaments like FIFA or LoL?', answer: 'Absolutely. It is designed to be fast and visual, ideal for managing quick console, PC game or even board and card game tournaments.' },
  { question: 'Is creating tournaments free?', answer: 'Yes, completely free and without restrictions. No premium plans, participant limits, watermarks or intrusive ads. Everything works offline in your browser.' },
  { question: 'Is my data deleted if I close the browser?', answer: 'No. We use LocalStorage to automatically save all your tournaments on your device. You can close the tab, shut down the computer and come back days later: your tournament will still be there. The full history is also persistent.' },
  { question: 'How does the "Next Match" button work?', answer: 'The system automatically detects the next ready matchup (both participants confirmed) but without a result yet. Pressing "Next Match" jumps the view directly to that match.' },
];

const howTo = [
  { name: 'Enter participants', text: 'Write the names of the players or teams that will take part in the competition.' },
  { name: 'Generate the bracket', text: 'Click the generate button. The system will automatically create the matchups and necessary rounds.' },
  { name: 'Update results', text: 'Click on the winning participant of each match so they automatically advance to the next stage of the bracket.' },
  { name: 'Finish', text: 'Once the tournament is complete, the final champion is shown.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Free Online Bracket Generator and Tournament Organizer',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Manage your sports, video game or board game competitions with the most complete, free and registration-free tournament organizer. Create visual and interactive single-elimination brackets in seconds, with an <strong>integrated scoring system</strong>, automatic history and smart match navigation. Everything works offline, directly in your browser.'
  },
  {
    type: 'title' as const,
    text: 'How to Create a Single Elimination Tournament?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Name your tournament</strong>, add participants (one by one or paste a comma-separated list), randomize matchups if you want, generate the bracket, manage results by tapping the winner of each match and use the "Next Match" button to navigate between unresolved matches.'
  },
  {
    type: 'title' as const,
    text: 'Advanced Features',
    level: 2 as const
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Bulk entry:</strong> Add multiple participants at once separated by commas.',
      '<strong>Exact scores:</strong> Scoring system with results like 3-1 or 21-19.',
      '<strong>Smart navigation:</strong> "Next Match" button jumps to the next pending matchup.',
      '<strong>Draggable bracket:</strong> Desktop view with free scroll for large tournaments.',
      '<strong>Persistent history:</strong> All tournaments saved automatically in your browser.',
      '<strong>Auto Walkovers:</strong> Byes and direct passes resolved without manual input.',
      '<strong>Share by URL:</strong> Generate a compressed link to send the bracket to anyone.',
    ]
  },
  {
    type: 'title' as const,
    text: 'Perfect for Any Competition',
    level: 2 as const
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Video Games & eSports',
        description: 'Perfect for FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros or Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Fast matchups', 'No team limit', 'Instantly shareable']
      },
      {
        title: 'Sports & Racket Sports',
        description: 'Manage Padel, Tennis, Ping Pong, Badminton, Futsal or 3x3 Basketball brackets.',
        icon: 'mdi:trophy-outline',
        points: ['Integrated scores', 'Optimized mobile view', 'No paper needed']
      },
      {
        title: 'Board & Card Games',
        description: 'Organize Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Chess or Dominoes tournaments.',
        icon: 'mdi:cards-playing-outline',
        points: ['Up to 64 players', 'Round history', 'Bye management']
      },
    ]
  },
  {
    type: 'title' as const,
    text: 'What are "Byes" or Direct Passes?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'In an ideal single-elimination tournament the number of participants must be a power of 2 (4, 8, 16, 32...). When you have an odd or non-power-of-2 number , for example 7, 10 or 13 players, the system automatically assigns <strong>"Byes"</strong> in the first round. A "Bye" means a participant advances directly to the next phase without playing. Our algorithm calculates and assigns these passes fairly and automatically.'
  },
  {
    type: 'title' as const,
    text: 'Instant, Free and No Sign-up Required',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Zero friction. No accounts, no installations, no waiting. Add participants and generate your tournament instantly. Everything is automatically saved in your browser via <strong>LocalStorage</strong>: close the tab, shut down the computer and come back days later. Your tournament and full history will still be there.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
