import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'pingis-poangraknare';
const title = 'Pingis Poängräknare Online : Gratis Bordtennisspårare';
const description =
  'Följ bordtennismatcher med poängräkning för game och set. Gratis online-poängräknare för pingis för vänskapsmatcher och turneringar. Ingen registrering behövs.';

const faqData = [
  {
    question: 'Hur fungerar poängräkning i pingis?',
    answer:
      'Ett standard game i pingis spelas till 11 poäng. Man måste vinna med 2 poängs marginal. Om ställningen når 10-10 fortsätter spelet tills någon leder med 2 poäng. Serve byts varannan poäng. Denna poängräknare sköter allt automatiskt.',
  },
  {
    question: 'Hur använder jag denna poängräknare?',
    answer:
      'Tryck på +-knappen under varje spelare för att lägga till en poäng. Game-poängen uppdateras automatiskt. När en spelare når 11 med 2 poängs ledning slutar spelet och ett nytt börjar. Räknaren för vunna game håller reda på hur många game varje spelare har vunnit. Tryck på Avsluta match när matchen är slut.',
  },
  {
    question: 'Hur fungerar serverindikatorn?',
    answer:
      'Serve byts varannan poäng. En prick visas bredvid den spelare som servar. Detta följer officiella bordtennisregler. Du kan alltid se vem som ska serva under matchen.',
  },
  {
    question: 'Kan jag använda den på min telefon under en match?',
    answer:
      'Ja. Gränssnittet är mobilvänligt med stora knappar. Helskärmsläge döljer webbläsaren och håller skärmen vaken.',
  },
  {
    question: 'Sparas mina matchdata?',
    answer:
      'Ja. Nuvarande poäng, vunna game och spelarnamn sparas automatiskt i din webbläsare.',
  },
];

const howToData = [
  {
    name: 'Namnge spelarna',
    text: 'Tryck på standardnamnet för spelaren och skriv in ditt eget. Namn sparas automatiskt.',
  },
  {
    name: 'Lägg till en poäng',
    text: 'Tryck på den stora runda +-knappen för spelaren som gjorde poäng. Poängen uppdateras med en festlig animation.',
  },
  {
    name: 'Ta bort en poäng',
    text: 'Tryck på minusknappen om du har lagt till en poäng av misstag.',
  },
  {
    name: 'Starta ett nytt game',
    text: 'När ett game slutar, tryck på Nytt game för att starta nästa. Eller tryck på Avsluta match för att avsluta matchen.',
  },
  {
    name: 'Avsluta matchen',
    text: 'Tryck på Avsluta match för att se vinnaren presenteras med trofé och konfetti.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Gratis Online Pingis Poängräknare : Bordtennismatch-spårare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att hålla poäng i pingis borde vara enkelt, men reglerna kan vara förvirrande. Vem servar härnäst? Är det 10-10 eller 11-9? Hur många game har varje spelare vunnit? Denna gratis online-poängräknare för pingis sköter allt automatiskt. Du trycker bara på +-knappen när någon gör poäng. Poängräknaren håller reda på poäng per game, vunna game i matchen och vem som servar. Allt uppdateras i realtid med festliga animationer som gör varje poäng betydelsefull. Ingen registrering, inga nedladdningar, inga komplicerade menyer.',
    },
    {
      type: 'title',
      text: 'Hur pingis-poängräkning fungerar i denna poängräknare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bordtennis följer ett standard poängsystem. Varje game spelas till 11 poäng. En spelare måste vinna med 2 poängs marginal, så om ställningen når 10-10 fortsätter spelet tills någon leder med 2 poäng. Serve byts varannan poäng under ett game. Denna poängräknare följer alla dessa regler automatiskt. Du behöver inte komma ihåg vem som servar eller när det är dags att byta. Serverindikatorn visar en prick bredvid den aktuella servern. När en spelare vinner ett game går poängräknaren automatiskt vidare till nästa game. Räknaren för vunna game ökar för vinnaren. En match kan ha hur många game som helst, men är vanligtvis bäst av 5 eller 7. Tryck på Avsluta match när matchen är klar och vinnaren tillkännages med en fest.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vänskapsmatcher',
          description: 'Snabb och enkel poängräkning för casual pingis med vänner. Automatisk game- och matchspårning.',
          icon: 'mdi:table-tennis',
          points: ['En tryckning per poäng', 'Automatisk serverspårning', 'Fungerar offline'],
        },
        {
          title: 'Klubb & Liga',
          description: 'Håll en ren registrering av game och matchresultat. Perfekt för klubbturneringar och ligaspel.',
          icon: 'mdi:trophy-outline',
          points: ['Spårning av vunna game', 'Stöd för bäst av 5 eller 7', 'Mobilvänligt'],
        },
        {
          title: 'Turneringsspel',
          description: 'Följ flera matcher i en turneringsmiljö. Snabb återställning mellan matcher.',
          icon: 'mdi:school',
          points: ['Snabb matchåterställning', 'Poäng sparas', 'Helskärmsläge'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vad som gör denna pingis-poängräknare speciell',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatisk poängräkning</strong> poängräknaren kan reglerna för pingis. Game till 11, vinst med 2 poängs marginal, automatiska servebyten.',
        '<strong>Spårning av vunna game</strong> varje vunnet game registreras. Se direkt hur många game varje spelare har vunnit i matchen.',
        '<strong>Serverindikator</strong> en synlig prick visar vilken spelare som servar, enligt 2-poängs rotationsregeln.',
        '<strong>Festliga animationer</strong> varje poäng utlöser en slumpmässig festanimation. Åtta olika effekter gör varje poäng spännande.',
        '<strong>Svävande partiklar</strong> varje poäng som görs genererar svävande text som firar ögonblicket.',
        '<strong>Avsluta match-ceremoni</strong> tryck på Avsluta match för att utlösa ett vinnarmeddelande med trofé och konfetti.',
        '<strong>Redigerbara spelarnamn</strong> tryck på namnfältet för att byta namn på spelare. Namn sparas i din webbläsare.',
        '<strong>Helskärmsläge</strong> döljer webbläsarens gränssnitt så att poängtavlan fyller skärmen och håller den vaken.',
        '<strong>Offline first</strong> fungerar utan internet. Inga annonser, ingen spårning, ingen datainsamling.',
      ],
    },
    {
      type: 'title',
      text: 'Pingis Poängräknare vs Manuell Poängräkning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuell poängräkning i pingis kräver att du håller reda på poängen, kommer ihåg vem som servar, vet när du ska byta server och räknar vunna game. Det är lätt att tappa bort sig, särskilt i ett snabbt spel. Denna digitala poängräknare sköter allt automatiskt. Du behöver bara trycka på en knapp när en poäng görs. Poängräknaren håller reda på game-poängen, upptäcker när ett game är vunnet, registrerar vunna game i matchen och visar vem som servar. Varje poäng firas med animationer och partiklar. Poängen blir aldrig fel och du missar aldrig ett servebyte. Oavsett om du spelar en casual match med vänner eller tävlar i en turnering, ger denna gratis online-pingis-poängräknare dig allt du behöver.',
    },
  ],
  ui: {
    playerA: 'Spelare 1',
    playerB: 'Spelare 2',
    winnerLabel: 'MÄSTARE',
    finishMatch: 'Avsluta match',
    newGame: 'Nytt game',
    serving: 'Servar',
    changeSide: 'Byt sida',
    swapHint: 'Tryck för att byta',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Game-poäng',
    matchPoint: 'Match-poäng',
    mode: 'Format',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Poäng',
    reset: 'Återställ',
    resetConfirm: 'Återställ match? Alla data kommer att förloras.',
    cancel: 'Avbryt',
    fullscreen: 'Helskärm',
    exitFullscreen: 'Avsluta helskärm',
  },
};
