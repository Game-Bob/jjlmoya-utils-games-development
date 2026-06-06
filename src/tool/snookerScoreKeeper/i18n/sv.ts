import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'snooker-ram-raknare-och-break-kalkylator';
const title = 'Premium Snooker Ramräknare och Breakkalkylator';
const description = 'Spåra snookerramsresultat i realtid, beräkna aktuella breakvärden, visa återstående poäng på bordet och få realtidsstatus för underskott som behov av snookrar.';

const faqData = [
  {
    question: 'Hur beräknas maximalt antal återstående poäng på snookerbordet?',
    answer: 'Varje återstående röd boll är värd 8 poäng (1 poäng för den röda bollen plus 7 poäng för att sänka en svart boll). När alla röda är sänkta är de återstående färgerna värda totalt 27 poäng.',
  },
  {
    question: 'Vad innebär det att behöva snookrar i den här kalkylatorn?',
    answer: 'Det innebär att poängunderskottet är större än de totalt återstående poängen på bordet, vilket betyder att en spelare måste tvinga fram fouls från sin motståndare för att komma ikapp.',
  },
  {
    question: 'Vad är en avgörande svart boll-situation?',
    answer: 'Ett avgörande svart-scenario inträffar när alla bollar är sänkta och ramsresultaten är oavgjorda, vilket kräver en återplacerad svart boll för att avgöra vinnaren.',
  },
];

const howToData = [
  {
    name: 'Konfigurera Spelarnamn',
    text: 'Ange anpassade namn för de två snookerspelarna för att anpassa resultattavlans utseende.',
  },
  {
    name: 'Sänk Bollarna och Bygg Break',
    text: 'Tryck på de glödande filtbollarna för att logga sänkta bollar i sekvens. Kalkylatorn låser otillåtna färger enligt reglerna.',
  },
  {
    name: 'Kontrollera Underskottsstatus',
    text: 'Övervaka statusfältet i realtid för att se om en spelare är säker, behöver snookrar, eller om ramen fortfarande är öppen.',
  },
  {
    name: 'Logga Foullstraff',
    text: 'Öppna foulmenyn för att tilldela straffpoäng direkt till motståndaren och byta aktiv spelare.',
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
    image: undefined,
    url: undefined,
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Gratis Online Snooker Ramräknare och Breakräknare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Förenkla dina snookerramar med vår digitala resultattavla. Verktyget beräknar aktiva breakpoäng, återstående bords-poäng och visar den exakta poängskillnaden. Det filtinspirerade gränssnittet ger interaktiva indikatorer som lyser upp dynamiskt baserat på snookerns regelsekvenser. Oavsett om du dömer en lokal klubb-turnering eller följer vänskapsmatcher hemma, hanterar denna applikation alla beräkningar automatiskt.',
    },
    {
      type: 'title',
      text: 'Förstå Snookerpoängsättning och Underskottsberäkningar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett standard snookerparti börjar med femton röda bollar värda en poäng var. Spelare måste alternera mellan en röd boll och en färgad boll. Varje sänkt färgad boll återplaceras på sin plats tills alla röda är borta. Därefter måste de färgade bollarna sänkas i numerisk ordning från gul till svart. Denna kalkylator håller reda på sekvensen och varnar när snookrar krävs. Genom att beräkna poänggapet och de maximala poäng som finns kvar på bordet avgör den exakt när en ram har nått sin segertröskel.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Ramresultattavla',
          description: 'Håll koll på ramresultat och spelar-turer på en högkontrastdisplay.',
          icon: 'mdi:scoreboard-outline',
          points: ['Tydlig markering av aktiv spelare', 'Anpassad spelarnamn-inmatning', 'Ångra med ett klick'],
        },
        {
          title: 'Breakräknare',
          description: 'Realtidsspårning av aktiva sänknings-break med bollfärgslogg.',
          icon: 'mdi:billiards',
          points: ['Tidslinje för sänkta bollar', 'Automatisk boll-låsning enligt regler', 'Färgkodad breakstatus'],
        },
        {
          title: 'Återstående Poängmätare',
          description: 'Spåra de maximala poäng som finns kvar på det gröna filtbordet.',
          icon: 'mdi:percent-outline',
          points: ['Poängskillnads-spårning', 'Dynamiska snookervarningar', 'Detektering av avgörande svart'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktiva Kontroller och Ljudåterkoppling',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Taktil Filt-HUD</strong> gör det möjligt att trycka på bollarna för att lägga till poäng och registrera dem på break-tidslinjen.',
        '<strong>Foul-knappar</strong> tilldelar fyra till sju straffpoäng till motståndarens resultat och avslutar den aktiva turen.',
        '<strong>Dynamisk Statuslampa</strong> uppdateras för att indikera normalt spel, säker marginal eller behov av snookrar.',
        '<strong>Ljudsyntes</strong> utlöser ett fickljud vid sänkning och en summerton vid foul.',
      ],
    },
    {
      type: 'title',
      text: 'Snookers Foullregler och Straffsystem Förklarade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fouls i snooker ger poäng till motståndaren. Straffvärdet bestäms av värdet på mål-bollen eller bollen som är inblandad i foulet, med ett minimumstraff på fyra poäng. Till exempel, att sänka den vita köbollen, att först träffa en färg istället för en röd, eller att missa alla bollar ger ett straff. Om ett foul begås när man siktar på blå, rosa eller svart, är straffet fem, sex respektive sju poäng. Denna digitala resultattavla har en snabb foul-panel för att enkelt lägga till straffvärden och automatiskt överföra aktiva turer till nästa spelare.',
    },
    {
      type: 'title',
      text: 'Vad Händer vid en Avgörande Svart Boll-situation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När alla bollar har sänkts och ramsresultaten är oavgjorda, återplaceras den svarta bollen på sin ursprungliga position. Spelarna lottar om vem som ska spela först, och den första spelaren som sänker den svarta eller begår ett foul förlorar ramen. Denna avgörande svarta regel säkerställer en rättvis lösning på jämna partier utan att kräva ytterligare fulla ramar, och vår tracker upptäcker automatiskt detta oavgjorda slutskede för att meddela båda spelarna.',
    },
    {
      type: 'title',
      text: 'Varför Använda en Digital Snooker-tracker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuell beräkning av återstående poäng och underskottsmarginaler under jämna ramar är benägen för mänskliga fel. Detta webbläsarverktyg ger korrekta realtidsstatistik, vilket gör att spelare kan fokusera på sin teknik och strategi. Genom att hålla en interaktiv tidslinje över sänkta bollar kan domare enkelt verifiera kontroversiella break och upprätthålla kontinuiteten i officiella matcher.',
    },
  ],
  ui: {
    title: 'Snookerresultattavla',
    description: 'Spåra ramresultat och break.',
    player1: 'Spelare 1',
    player2: 'Spelare 2',
    score: 'Resultat',
    currentBreak: 'Break',
    remainingPoints: 'Kvar',
    deficit: 'Underskott',
    statusSafe: 'Säker',
    statusNeedSnookers: 'Snooker Behövs',
    statusDecidingBlack: 'Avgörande Svart',
    statusNormal: 'Normal',
    foul: 'Foul',
    foulTitle: 'Välj Foullstraff',
    foulPoints: 'Straff',
    foulOnRed: 'Röd/Gul/Grön/Brun',
    foulOnYellow: 'Gul',
    foulOnGreen: 'Grön',
    foulOnBrown: 'Brun',
    foulOnBlue: 'Blå',
    foulOnPink: 'Rosa',
    foulOnBlack: 'Svart',
    reset: 'Återställ',
    resetConfirm: 'Återställ nuvarande ram? Alla poäng försvinner.',
    cancel: 'Avbryt',
    confirm: 'Bekräfta Återställning',
    endTurn: 'Avsluta Tur',
    miss: 'Miss',
    redsRemaining: 'Röda',
    pocketedBalls: 'Sänkta',
    toggleSound: 'Ljud på/av',
    fullscreen: 'Fullskärm',
  },
};
