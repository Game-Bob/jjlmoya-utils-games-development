import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'rugby-poangraknare';
const title = 'Premium Rugbypoängräknare med Utvisningstimer och Matchklocka';
const description = 'Följ livescoring i rugbymatcher med registrering av försök, omvandlingar, straffar och drop goals. Hantera utvisningsnedräkningar och matchhalvlekar med en interaktiv matchtavla.';

const faqData = [
  {
    question: 'Hur poängsätts en rugby union-match?',
    answer: 'Ett försök är värt 5 poäng och tilldelas när en spelare trycker ner bollen i motståndarens målområde. En omvandlingsspark efter ett försök är värd 2 poäng. Straffsparkar och drop goals är värda 3 poäng var.',
  },
  {
    question: 'Vad händer när en spelare får gult kort i rugby?',
    answer: 'Gult kort resulterar i en utvisning i 10 minuter. Spelaren måste lämna planen i 10 minuters aktiv matchtid. Laget spelar med en spelare mindre under denna period. Utvisningstimern räknar bara ner medan matchklockan är igång.',
  },
  {
    question: 'Hur lång är en rugby union-match?',
    answer: 'En standardmatch i rugby union består av två halvlekar på 40 minuter med en 10 minuters halvtidspaus. Matchklockan stoppas vid skador och allvarliga incidenter. Tilläggstid kan läggas till för avbrott.',
  },
];

const howToData = [
  {
    name: 'Registrera poänghändelser',
    text: 'Tryck på knapparna Försök, Omvandling, Straff eller Drop Goal för att registrera poäng. Efter att du tryckt på Försök lyser Omvandlingsknappen upp automatiskt.',
  },
  {
    name: 'Hantera utvisningar',
    text: 'Tryck på Gult kort för att skicka en spelare till utvisningsbåset. Ange deras namn eller nummer så startar en 10-minuters nedräkning automatiskt.',
  },
  {
    name: 'Kontrollera matchtidtagning',
    text: 'Använd matchklockan för att hålla koll på två 40-minutershalvlekar. Pausa klockan vid skador och återuppta när spelet startar igen.',
  },
  {
    name: 'Följ poängutvecklingen',
    text: 'Övervaka den live-uppdaterade matchtavlan med hemmalagets och bortalagets poäng. Visa poängsammanställningen för att se en uppdelning av försök, omvandlingar, straffar och drop goals.',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Gratis Online Rugbypoängräknare med Live-matchspårning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ta kontroll över poängsättningen i din rugbymatch med vår interaktiva digitala matchtavla. Spåra försök, omvandlingar, straffar och drop goals i realtid. Utvisningshanteringssystemet räknar automatiskt ner spelares avstängningar och matchklockan håller båda halvlekarna perfekt tidsatta. Oavsett om du dömer en lokal klubbmatch eller tränar ett ungdomslag sköter detta verktyg automatiskt all poängsättning och tidtagning.',
    },
    {
      type: 'title',
      text: 'Rugby Unions Poängsystem Förklarat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rugby union erbjuder fyra sätt att göra poäng på, var och en kräver olika färdigheter och strategier. Försöket är den mest värdefulla anfallshandlingen och belönar lag för att bryta igenom försvarslinjen och trycka ner bollen i målområdet. Efter ett försök försöker det poängsättande laget en omvandlingsspark för två extra poäng. Straffsparkar och drop goals tillför taktiskt djup och låter lag göra poäng från öppet spel eller efter motståndarens överträdelser.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Försök',
          description: 'Tryck ner bollen i målområdet för fem poäng.',
          icon: 'mdi:rugby',
          points: ['Fem poäng', 'Möjliggör omvandling', 'Kräver nertryckning av boll'],
        },
        {
          title: 'Omvandling',
          description: 'Sparka genom stolparna efter ett försök för två poäng.',
          icon: 'mdi:goal',
          points: ['Två poäng vid lyckad spark', 'Sparkas från försökets position', 'Måste gå över ribban'],
        },
        {
          title: 'Straffspark',
          description: 'Sparka mot mål efter motståndarens överträdelse för tre poäng.',
          icon: 'mdi:alert-octagon',
          points: ['Tre poäng', 'Kan sparkas eller tappas', 'Avgör ofta jämna matcher'],
        },
        {
          title: 'Drop Goal',
          description: 'Drop-sparka bollen genom stolparna under öppet spel för tre poäng.',
          icon: 'mdi:circle-outline',
          points: ['Tre poäng', 'Bollen måste studsa först', 'Högtrycksmatchvinnare'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Förstå Utvisningssystemet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utvisningsbåset är ett tillfälligt avstängningssystem för farliga eller upprepade överträdelser. När en domare visar gult kort måste spelaren lämna planen i tio minuters aktiv speltid. Under denna tid spelar laget med en spelare mindre, vilket skapar en numerär fördel för motståndarlaget. Utvisningstimern räknar bara ner medan matchklockan är igång, vilket säkerställer rättvis verkställighet oavsett avbrott.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gult kort-straff:</strong> Tio minuters utvisning för farligt spel eller upprepade lagöverträdelser.',
        '<strong>Numerär nackdel:</strong> Det straffade laget spelar med 14 spelare istället för 15 under avstängningsperioden.',
        '<strong>Automatisk återkomst:</strong> När timern går ut återvänder spelaren automatiskt till matchen från halvvägslinjen.',
        '<strong>Rött kort-uppgradering:</strong> Ett andra gult kort eller en allvarlig förseelse resulterar i rött kort och permanent avstängning.',
      ],
    },
    {
      type: 'title',
      text: 'Matchtidtagning och Halvlekshantering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En standardmatch i rugby union är uppdelad i två halvlekar på 40 minuter med en 10 minuters halvtidspaus. Matchklockan går kontinuerligt under aktivt spel men kan pausas av domaren för skador, granskning av allvarliga fouls eller andra avbrott. Denna digitala poängräknare innehåller en precis matchklocka med paus- och återupptagningskontroller, automatisk halvleksspårning och tydliga visuella indikatorer för varje spelperiod.',
    },
    {
      type: 'title',
      text: 'Varför Använda en Digital Rugbypoängräknare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Manuell poängräkning i rugby är utmanande på grund av variationen i poängsättningsmetoder, utvisningstider och halvlekshantering. Detta webbläsarverktyg ger korrekt poängsättning i realtid, automatiska utvisningsnedräkningar och precis matchtidtagning. Tränare kan fokusera på spelstrategi istället för aritmetik, domare har ett pålitligt reservsystem och spelare kan se matchläget med en blick.',
    },
  ],
  ui: {
    title: 'Rugbypoängräknare',
    description: 'Spåra matchpoäng och utvisningstimer.',
    home: 'Hemma',
    away: 'Borta',
    score: 'Poäng',
    tryLabel: 'Försök +5',
    conversion: 'Omvandling +2',
    penalty: 'Straff +3',
    dropGoal: 'Drop Goal +3',
    conversionYes: 'Ja',
    conversionNo: 'Nej',
    sinBin: 'Gult kort',
    sinBinTitle: 'Utvisning',
    sinBinPlayer: 'Spelarens namn eller nummer:',
    sinBinAdd: 'Starta utvisning',
    sinBinEmpty: 'Inga aktiva utvisningar',
    sinBinReturn: 'Återvände',
    matchClock: 'Matchklocka',
    half: 'Halvlek',
    half1: 'Första halvlek',
    half2: 'Andra halvlek',
    startMatch: 'Avspark',
    pauseMatch: 'Pausa',
    resumeMatch: 'Återuppta',
    resetMatch: 'Återställ match',
    resetConfirm: 'Återställa pågående match? Alla poäng och timer kommer att förloras.',
    cancel: 'Avbryt',
    confirm: 'Bekräfta återställning',
    period: 'Period',
    scoringSummary: 'Poängsammanställning',
    tryScored: 'Försök',
    conversionSuccess: 'Omvandlingar',
    conversionMiss: 'Missade omvandlingar',
    penaltyScored: 'Straffar',
    dropGoalScored: 'Drop goals',
    totalPoints: 'Totalt',
    fullscreen: 'Helskärm',
    toggleSound: 'Ljud på/av',
    eventLog: 'Händelselogg',
    eventEmpty: 'Inga händelser ännu',
    undoBtn: 'Ångra senaste',
    timeOff: 'Tid stoppad',
    timeOn: 'Tid igång',
  },
};
