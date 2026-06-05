import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'darts-poangraknare';
const title = 'Darts Poangraknare Online : Leg och Set Spårare';
const description = 'Följ dartsmatcher med leg- och set-poäng. Gratis online-darts-poängräknare för 501 och 301 matcher med live checkout-beräkningar och statistik.';

const faqData = [
  {
    question: 'Hur fungerar darts-poängsättning i 501 och 301?',
    answer: 'Spelare börjar med en fast poäng på 501 eller 301 poäng. Varje spelare kastar tre pilar i tur och ordning, och det totala värdet av dessa kast dras från deras poäng. Målet är att nå exakt noll poäng. Om Double Out-regeln är aktiverad måste den sista vinnande pilen landa på ett dubbelsegment eller den inre bullseye.',
  },
  {
    question: 'Vad är en bust i darts och när inträffar den?',
    answer: 'En bust inträffar när en spelare får fler poäng än sin återstående summa, eller när deras poäng minskas till exakt en poäng med Double Out-regeln aktiv. När en spelare bustar avslutas deras tur omedelbart och deras poäng återställs till summan de hade i början av den turen.',
  },
  {
    question: 'Hur beräknar man ett darts-genomsnitt?',
    answer: 'Ett darts-genomsnitt beräknas genom att ta det totala antalet poäng, dividera med det totala antalet kastade pilar och multiplicera resultatet med tre. Detta representerar den genomsnittliga poängen en spelare uppnår per standardtur med tre pilar.',
  },
  {
    question: 'Vad är en checkout i darts?',
    answer: 'En checkout är den specifika kombinationen av kast som krävs för att minska återstående poäng till noll och vinna leg. Professionella poängräknare visar checkout-förslag för poäng på 170 och lägre, och vägleder spelare om vilka singlar, dubblar eller tripplar de ska sikta på.',
  },
];

const howToData = [
  {
    name: 'Välj startpoäng och regler',
    text: 'Välj 501 eller 301 som startpoäng och aktivera eller inaktivera Double Out-regeln beroende på önskad spel nivå.',
  },
  {
    name: 'Ange spelarnamn',
    text: 'Klicka på spelarnamnsfälten högst upp på poängtavlan för att anpassa namn. Värdena sparas automatiskt i din webbläsare.',
  },
  {
    name: 'Registrera kastade pilar',
    text: 'Använd det interaktiva tangentbordet eller tryck direkt på darttavlans sektorer för att registrera dina kast. Välj först multiplikatorn (Enkel, Dubbel eller Trippel) och sedan numret som träffades.',
  },
  {
    name: 'Följ checkout-rekommendationer',
    text: 'När din återstående poäng sjunker under 170, titta på checkout-panelen för att se optimala mål för att avsluta leg.',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: 'Gratis Online Darts Poängräknare och Matchspårare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att hantera poäng i darts kräver snabb huvudräkning och koncentration. Denna digitala darts-leg-spårare utför alla beräkningar åt dig, så att du kan fokusera helt på kastandet. Oavsett om du tränar ensam eller spelar en tävlingsmatch med vänner, håller denna poängtavla reda på poäng, legs, set, kastgenomsnitt och double-out checkout-mål.',
    },
    {
      type: 'title',
      text: 'Standard Darts Poängformat Förklarade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dartsmatcher spelas i legs och set. De mest populära formaten globalt är 501 och 301, båda subtraktionsspel där spelare minskar sin poäng till noll.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '501 Turnering',
          description: 'Standardformatet för professionella turneringar världen över.',
          icon: 'mdi:trophy-outline',
          points: ['Standard startpoäng', 'Double-out krävs', 'Fokus på höga poäng'],
        },
        {
          title: '301 Casual',
          description: 'En snabbare version av subtraktionsspelet idealisk för snabba matcher.',
          icon: 'mdi:clock-outline',
          points: ['Snabbare spel tempo', 'Double-in alternativ vanligt', 'Bra för träning'],
        },
        {
          title: 'Cricket Läge',
          description: 'Ett strategiskt målsiktningsspel populärt på pubar och i casual ligor.',
          icon: 'mdi:bullseye',
          points: ['Fokus på nummer 15-20', 'Bullseye spårning', 'Alternativt regelsystem'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Förstå Darts Checkout Matematik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den högsta möjliga checkouten i darts är 170, uppnådd genom att kasta Trippel 20, Trippel 20 och Dubbel Bull. När din poäng når 170 eller lägre går du in i checkout-range, där en specifik sekvens av pilar kan vinna spelet.',
    },
    {
      type: 'table',
      headers: ['Poäng', 'Mål Pil 1', 'Mål Pil 2', 'Mål Pil 3'],
      rows: [
        ['170', 'Trippel 20 (60)', 'Trippel 20 (60)', 'Dubbel Bull (50)'],
        ['120', 'Trippel 20 (60)', 'Enkel 20 (20)', 'Dubbel 20 (40)'],
        ['100', 'Trippel 20 (60)', 'Enkel 20 (20)', 'Dubbel 10 (20)'],
        ['80', 'Trippel 20 (60)', 'Dubbel 10 (20)', '-'],
        ['40', 'Dubbel 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Funktioner i denna Digitala Darts Poängtavla',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Interaktiva Inmatningsmetoder</strong> växla mellan en visuell radiell darttavla och ett snabbt numeriskt tangentbord.',
        '<strong>Smart Checkout Motor</strong> visar live-kombinationer för att avsluta legs.',
        '<strong>Bust Detektion</strong> återställer automatiskt ogiltiga kast och varnar användaren.',
        '<strong>Turhistorik Logg</strong> håller reda på tidigare omgångar och återstående poäng.',
        '<strong>Detaljerad Matchstatistik</strong> beräknar tre-pils-genomsnitt dynamiskt.',
      ],
    },
    {
      type: 'title',
      text: 'Manuell vs Digital Darts Spårning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Traditionella krittavlor kräver skrivande, suddande och ständiga beräkningar. Denna online-poängtavla eliminerar felrisker, automatiserar genomsnitt och visar checkout-mål. Placera din enhet bredvid tavlan, gå in i helskärmsläge för att hålla skärmen aktiv och njut av problemfri poängsättning.',
    },
  ],
  ui: {
    playerA: 'Spelare 1',
    playerB: 'Spelare 2',
    winnerLabel: 'MÄSTARE',
    reset: 'Återställ',
    resetConfirm: 'Återställ match? Alla data kommer att förloras.',
    cancel: 'Avbryt',
    fullscreen: 'Helskärm',
    exitFullscreen: 'Avsluta helskärm',
    leg: 'Leg',
    set: 'Set',
    average: 'Snitt',
    checkout: 'Checkout',
    busted: 'Bust',
    dart: 'Pil Kast',
    score301: '301',
    score501: '501',
    doubleOut: 'Double Out',
    noCheckout: 'Ingen Checkout',
  },
};
