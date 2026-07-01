import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'tennis-poangraknare';
const title = 'Tennis Poängräknare Online: Gratis Matchspårare';
const description = 'Följ tennismatcher med set- och game-poäng. Gratis online-poängräknare för tennis för matcher och turneringar. Ingen registrering behövs.';

const faqData = [
  {
    question: 'Hur fungerar poängräkning i tennis?',
    answer: 'Tennismatcher spelas i games och set. Ett game räknas som Love, 15, 30, 40. En ställning på 40-40 kallas Deuce och kräver att en spelare vinner 2 poäng i rad. Ett set vinns av den första spelaren som vinner 6 games med 2 games marginal. Vid 6-6 spelas ett tiebreak.',
  },
  {
    question: 'Hur använder jag denna tennis-poängtavla?',
    answer: 'Tryck på plusknappen för en spelare när de gör poäng. Poängen uppdateras automatiskt. Poängräknaren håller reda på serveordning, game-poäng, aktuella set och historik över avslutade set.',
  },
  {
    question: 'När byter tennisspelare sida?',
    answer: 'Tennisspelare byter sida efter första, tredje och varje efterföljande ojämna game i varje set. De byter också sida i slutet av ett set om inte det totala antalet games är jämnt. I ett tiebreak byter spelarna sida var 6:e poäng.',
  },
  {
    question: 'Stöder denna poängtavla tiebreak?',
    answer: 'Ja, när ett set når 6-6 går poängräknaren automatiskt över till tiebreak-läge där poäng räknas numeriskt till 7. En spelare måste vinna med 2 poängs marginal för att avsluta tiebreaket och setet.',
  },
  {
    question: 'Kan jag använda detta på min mobiltelefon?',
    answer: 'Ja, gränssnittet är optimerat för mobila enheter med stora knappar. Du kan också aktivera helskärmsläge för att hålla skärmen vaken under matchen.',
  },
];

const howToData = [
  {
    name: 'Ange spelarnamn',
    text: 'Tryck på namninmatningsfälten för att skriva egna namn. De sparas i din webbläsare.',
  },
  {
    name: 'Lägg till poäng',
    text: 'Klicka på plusknappen för spelaren som vann bollen. Poängen uppdateras automatiskt.',
  },
  {
    name: 'Hantera setresultat',
    text: 'Spåraren avslutar automatiskt games och set. Den arkiverar avslutade set och går vidare till nästa set.',
  },
  {
    name: 'Byt sida',
    text: 'Poängtavlan varnar dig när spelare behöver byta sida. Tryck på bytesknappen för att växla de visuella sidorna.',
  },
  {
    name: 'Matchavslutning',
    text: 'Spåraren avslutar automatiskt matchen enligt tennisreglerna och tillkännager vinnaren.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Gratis Online Tennis Poängräknare och Matchspårare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att hålla poäng i tennis kan vara utmanande med termer som deuce, advantage och tiebreak. Denna gratis online-poängräknare för tennis automatiserar hela processen. Du behöver bara trycka på plusknappen när en spelare gör poäng. Verktyget hanterar poäng, games, set och sidbyten automatiskt i realtid.',
    },
    {
      type: 'title',
      text: 'Hur tennispoängräkning fungerar i denna poängräknare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tennis använder en unik poängstruktur. Ett standard game går igenom Love, 15, 30, 40 och Game. När båda spelarna når 40 är ställningen Deuce. Från Deuce måste en spelare göra två poäng i rad för att vinna gamet. Den första poängen kallas Advantage, och nästa poäng säkrar gamet. Om motståndaren vinner nästa poäng går poängen tillbaka till Deuce. Set vinns av den första spelaren som vinner 6 games med 2 games marginal. När setet når 6-6 spelas ett tiebreak till 7 poäng.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Casual Matcher',
          description: 'Snabb och enkel poängräkning för informella tennismatcher med vänner.',
          icon: 'mdi:tennis',
          points: ['Poäng med en tryckning', 'Sidbytesindikator', 'Fungerar offline'],
        },
        {
          title: 'Klubbspel',
          description: 'Perfekt spårning för klubbmatcher och turneringar.',
          icon: 'mdi:trophy-outline',
          points: ['Sethistorikarkiv', 'Bäst av 3 eller 5 set', 'Mobilvänlig layout'],
        },
        {
          title: 'Turneringsläge',
          description: 'Designad för officiell matchspårning och domarbruk.',
          icon: 'mdi:school',
          points: ['Tiebreak-stöd', 'Helskärms-poängtavla', 'Lokal datasäkerhet'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Speciella Poängräknarfunktioner',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatisk tennisregellogik</strong> beräknar Love, 15, 30, 40, deuce, advantage och tiebreak automatiskt.',
        '<strong>Sethistorikarkiv</strong> visar poängen från tidigare set med en blick.',
        '<strong>Sidbyteshjälp</strong> påminner spelare när de behöver byta sida.',
        '<strong>Livfulla poängfiranden</strong> visar svävande partiklar för vunna poäng.',
        '<strong>Bäst av 3 eller 5 set</strong> konfigurerbara matchformatsinställningar.',
        '<strong>Namn sparas lokalt</strong> behåller anpassade namn mellan besök.',
      ],
    },
    {
      type: 'title',
      text: 'Digital Poängräkning vs Manuell Spårning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuella poängtavlor kräver konstant koncentration för att uppdatera siffror, komma ihåg serveordning, kontrollera tiebreak och beräkna sidbyten. Denna digitala tennis-poängräknare hanterar varje tennisregel automatiskt. Du kan fokusera helt på matchen medan verktyget uppdaterar sethistorik och tillkännager vinnaren med en firandeceremoni.',
    },
  ],
  ui: {
    playerA: 'Spelare 1',
    playerB: 'Spelare 2',
    winnerLabel: 'MÄSTARE',
    finishMatch: 'Avsluta match',
    newGame: 'Nytt set',
    serving: 'Servar',
    changeSide: 'Byt sida',
    swapHint: 'Tryck för att byta sida',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Game-poäng',
    setPoint: 'Set-poäng',
    matchPoint: 'Match-poäng',
    mode: 'Set',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Poäng',
    reset: 'Återställ',
    resetConfirm: 'Återställ match? Alla data kommer att förloras.',
    cancel: 'Avbryt',
    fullscreen: 'Helskärm',
    exitFullscreen: 'Avsluta helskärm',
    deuce: 'Deuce',
    advantage: 'Fördel',
    tiebreak: 'Tiebreak',
  },
};
