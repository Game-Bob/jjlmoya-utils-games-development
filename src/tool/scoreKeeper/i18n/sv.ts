import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'sport-resultattavla';
const title = 'Resultattavla för Sport Online: Gratis Poängräknare (2026)';
const description =
  'Digital resultattavla med jätteknappar för mobilen. Idealisk för padel, pingis och fotboll. Inga irriterande annonser mitt i matchen. Enkelt och snabbt.';

const faqData = [
  {
    question: 'Fungerar den utan internetanslutning?',
    answer:
      'Ja, när sidan väl har laddats fungerar resultattavlan helt offline. Du behöver varken mobildata eller WiFi under matchen. Allt sparas lokalt i din webbläsare.'
  },
  {
    question: 'Kan jag använda resultattavlan för tennis och padel?',
    answer:
      'Ja, Tennis/Padel-läget hanterar automatiskt sekvensen 15-30-40-AD och håller koll på set och gem enligt de officiella reglerna. Perfekt för vänskapsmatcher.'
  },
  {
    question: 'Kan den visas i helskärm?',
    answer:
      'Ja, du kan aktivera helskärmsläge via din webbläsare (F11 på PC, eller helskärmsknappen på mobilen). Siffrorna tar upp 80 % av skärmen för maximal synlighet.'
  },
  {
    question: 'Hur korrigerar jag ett poäng om jag gör fel?',
    answer:
      'Det finns en separat knapp för att dra av poäng på varje spelarkort. Du kan snabbt korrigera misstag utan att behöva starta om hela resultattavlan.'
  },
  {
    question: 'Fungerar den för basket med 1-, 2- och 3-poängskast?',
    answer:
      'Ja, i basketläget visas dedikerade +1-, +2- och +3-knappar för att snabbt registrera poäng för varje spel utan extra klick.'
  },
  {
    question: 'Hanterar resultattavlan automatiskt serven i pingis?',
    answer:
      'Ja, i pingis-läget roterar serveindikatorn automatiskt varannat poäng (eller efter varje poäng vid deuce), enligt de officiella ITTF-reglerna.'
  },
];

const howToData = [
  {
    name: 'Välj din sport',
    text: 'Välj sport i väljaren högst upp: Fri, Tennis, Padel, Pingis, Volleyboll eller Basket.'
  },
  {
    name: 'Anpassa namn',
    text: 'Tryck på "HEMMA" eller "BORTA" för att ändra namn på spelare eller lag.'
  },
  {
    name: 'Lägg till poäng med ett tryck',
    text: 'Tryck på det stora området på resultattavlan för att lägga till ett poäng. I basket använder du knapparna +1, +2 eller +3.'
  },
  {
    name: 'Ange serve',
    text: 'Använd serveknappen i nedre hörnet för att markera vem som servar. Den gula indikatorn visas automatiskt.'
  },
  {
    name: 'Korrigera misstag',
    text: 'Använd "−"-knappen om du råkat lägga till ett poäng av misstag. Du behöver inte starta om hela resultattavlan.'
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
  inLanguage: 'sv'
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
      text: 'Din digitala domare i fickan',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'När matchen är som mest intensiv är det lätt att tappa räkningen. "Var det 4-3 eller 3-4?". Den här resultattavlan är utformad för att lösa dessa diskussioner innan de ens börjar. Med ett gränssnitt av <strong>jätteknappar</strong> som tar upp nästan hela kortet kan du lägga till poäng utan att titta på skärmen, bara genom att sträcka ut armen mot telefonen på bänken.'
    },
    {
      type: 'title',
      text: 'Smart sportväljare',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tennis / Padel läge',
          description:
            'Anpassat gränssnitt med set- och gemräknare. Systemet hanterar automatiskt sekvensen 15-30-40-AD.',
          icon: 'mdi:tennis',
          points: ['Officiella regler', 'Hantering av fördel', 'Seträknare']
        },
        {
          title: 'Basketläge',
          description:
            'Resultattavlan känner av sporten och ändrar sitt gränssnitt. Dedikerade +1-, +2- och +3-knappar.',
          icon: 'mdi:basketball',
          points: ['Snabba trepoängare', 'Straffkast', 'Inga extra tryck']
        },
        {
          title: 'Pingis läge',
          description:
            'Glöm bort att memorera vems tur det är att serva. Den visuella indikatorn roterar automatiskt varannat poäng.',
          icon: 'mdi:table-tennis',
          points: ['ITTF-regler', 'Serverotation', 'Deuce-läge (11 p)']
        },
      ]
    },
    {
      type: 'title',
      text: 'Funktioner utformade för sport',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Hög synlighet:</strong> Siffror som tar upp 80 % av skärmen för maximal läsbarhet i solen.',
        '<strong>Redigerbara namn:</strong> Tryck på "HEMMA" eller "BORTA" för att ställa in spelarnamn.',
        '<strong>Felförebyggande:</strong> Separat minusknapp för att snabbt korrigera misstag utan omstart.',
        '<strong>Fungerar offline:</strong> När den väl är laddad behövs inget internet under matchen.',
      ]
    },
  ],
  ui: {
    playerA: 'HEMMA',
    playerB: 'BORTA',
    swapSides: 'Byt sida',
    reset: 'Återställ',
    serve: 'Serve',
    sets: 'Set',
    games: 'Gem',
    victory: 'VINST!',
    newGame: 'Ny match',
    continueGame: 'Fortsätt spela',
    resetConfirm: 'Återställ resultattavlan?',
    sportSimple: 'Fri (Fotboll, Luffarschack...)',
    sportTennis: 'Tennis',
    sportPadel: 'Padel',
    sportPingpong: 'Pingis',
    sportVolleyball: 'Volleyboll',
    sportBasket: 'Basket'
  }
};
