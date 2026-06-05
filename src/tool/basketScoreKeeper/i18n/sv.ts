import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'basketball-resultattavla';
const title = 'Basketball Resultattavla Online : Gratis Poängräknare';
const description =
  'Gratis online resultattavla för basket med +1, +2 och +3-knappar. Håll poäng i pickup-spel, streetbasket, high school och lokala seriematcher. Ingen registrering, ingen nedladdning, fungerar offline.';

const faqData = [
  {
    question: 'Hur håller man poäng i en basketmatch?',
    answer:
      'Basket använder tre poängvärden: frislag (+1 poäng), field goal (+2 poäng) och trepoängare (+3 poäng). Tryck på motsvarande knapp varje gång ett lag gör poäng. Resultattavlan håller automatiskt reda på totalsumman. För att rätta ett misstag, använd minusknappen bredvid poängen.',
  },
  {
    question: 'Vad är skillnaden mellan +1, +2 och +3 i basket?',
    answer:
      '+1 är för frislag som tilldöms efter en foul. +2 är för ett vanligt field goal som görs innanför trepoängslinjen. +3 är för skott som görs från utanför trepoängslinjen. Separata knappar för varje värde gör att du kan poängsätta snabbare och minskar risken för fel jämfört med en enkel räknare.',
  },
  {
    question: 'Kan jag använda denna resultattavla för en riktig basketmatch?',
    answer:
      'Ja. Resultattavlan är designad för riktiga matcher: pickup-basket, streetbasket, high school-matcher, lokala seriematcher och träningsmatcher. Den sparar poängen i din webbläsare så att du kan ladda om sidan utan att förlora matchstatusen.',
  },
  {
    question: 'Hur håller jag poäng för streetbasket eller pickup-spel?',
    answer:
      'Streetbasket spelas ofta till ett målpoäng (som 21 eller 16) med 1:or och 2:or (eller bara 1:or). Denna resultattavla fungerar för alla format. Använd +1 för vanliga korgar, +2 för skott bakom linjen. Bestäm ditt eget vinstvillkor och använd minusknappen om du gör ett misstag.',
  },
  {
    question: 'Fungerar den offline på mobilen?',
    answer:
      'Ja. När sidan har laddats fungerar resultattavlan helt offline. Perfekt för utomhusplaner, gym utan WiFi eller platser med dålig signal. Du kan även gå i fullskärmsläge och skärmen hålls vaken så att den inte låser sig under matchen.',
  },
  {
    question: 'Hur håller jag reda på lagfouls och bonus?',
    answer:
      'Denna resultattavla fokuserar på själva poängräkningen. För lagfouls kan du använda lagnamnsfälten för att manuellt hålla koll (t.ex. byt namn på "HEMMA" till "HEMMA 3F"). Vi rekommenderar att kombinera detta verktyg med en separat foulräknare för officiella matcher.',
  },
  {
    question: 'Kan jag använda denna basketpoängräknare på min telefon?',
    answer:
      'Ja. Gränssnittet är designat för mobilt först. +1, +2 och +3-knapparna är stora och lätta att trycka med tummen. Fullskärmsläge döljer webbläsarens gränssnitt så att resultattavlan tar upp hela skärmen, och skärmvakten förhindrar att telefonen stängs av.',
  },
];

const howToData = [
  {
    name: 'Namnge dina lag',
    text: 'Tryck på HEMMA eller BORTA för att ange dina lagnamn. Namnen sparas automatiskt i din webbläsare så att de finns kvar även om du laddar om sidan.',
  },
  {
    name: 'Poängsätt ett frislag (+1)',
    text: 'Tryck på +1-knappen när en spelare gör ett frislag. Varje frislag är värt en poäng och tilldöms vanligtvis efter en foul.',
  },
  {
    name: 'Poängsätt ett field goal (+2)',
    text: 'Tryck på +2-knappen för en vanlig korg innanför trepoängslinjen. Detta är den vanligaste poängsättningen i basket.',
  },
  {
    name: 'Poängsätt en trepoängare (+3)',
    text: 'Tryck på +3-knappen när en spelare gör poäng från utanför trepoängslinjen. En trepoängare markeras med en röd knapp och utlöser en extra festeffekt.',
  },
  {
    name: 'Rätta ett poängmisstag',
    text: 'Om du råkar lägga till poäng, tryck på minusknappen för att dra bort dem. Den går inte under noll. Det finns inget behov av att starta om hela matchen för ett litet misstag.',
  },
  {
    name: 'Byt sidor i halvtid',
    text: 'Använd bytesknappen för att växla HEMMA och BORTA-positionerna i halvtid. Både poäng och lagnamn byts, så du förlorar inga data.',
  },
  {
    name: 'Starta ett nytt spel',
    text: 'Tryck på återställningsknappen och bekräfta för att rensa alla poäng och starta ett nytt spel. Lagnamnen behålls så att du inte behöver skriva in dem igen.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Gratis online resultattavla för basket : ingen registrering, ingen nedladdning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att hålla poäng i basket borde vara enkelt. Ett frislag är +1. Ett field goal är +2. En trepoängare är +3. Denna resultattavla ger dig en dedikerad knapp för varje värde så att du kan trycka och fortsätta spela. Inga menyer, inga lägen, ingen konfiguration. Bara namnge dina lag och börja poängsätta. Poängen sparas automatiskt i din webbläsare, så du kan ladda om sidan, stänga telefonen eller komma tillbaka senare utan att förlora matchen.',
    },
    {
      type: 'title',
      text: 'Varför en dedikerad basketpoängräknare är bättre än en generisk räknare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De flesta poängräknare tvingar dig att trycka på samma knapp flera gånger för att lägga till två eller tre poäng. De extra trycken summeras under en 40-minutersmatch och ökar risken att tappa räkningen under en snabb kontring eller ett snabbt byte. Denna resultattavla har <strong>tre separata knappar</strong> : en för varje poängvärde : så du trycker exakt en gång per poänggivande aktion. +3-knappen lyser rött och utlöser en explosiv animation som matchar spänningen av en trepoängare.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pickup & Streetbasket',
          description:
            'Spel till 16 eller 21 med 1:or och 2:or. Denna resultattavla hanterar båda värdena. Använd bara +1 och +2 och ignorera +3 när du spelar efter streetregler.',
          icon: 'mdi:basketball',
          points: ['Ingen installation krävs', 'Fungerar för alla vinstmål', 'Skärmen hålls vaken'],
        },
        {
          title: 'High School & Lokal Serie',
          description:
            'Standard FIBA eller NFHS-regler med frislag, field goals och trepoängare. Dedikerade knappar gör den snabb nog för en officiell poängräknare.',
          icon: 'mdi:school',
          points: ['Alla tre poängvärden', 'Redigerbara lagnamn', 'Fullskärm håller telefonen vaken'],
        },
        {
          title: 'Träning & Övning',
          description:
            'Håll koll på gjorda skott under skotträning, träningsmatcher eller en-mot-en-spel. Historiken sparas inte, så varje session börjar från noll.',
          icon: 'mdi:whistle',
          points: ['Snabb återställning mellan övningar', 'Fungerar offline i gymmet', 'Inget konto behövs'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hur basketpoängsättning fungerar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basket har tre poängvärden. Ett <strong>frislag</strong> är värt 1 poäng och tas från frislaglinjen efter en foul. Ett <strong>field goal</strong> är värt 2 poäng och räknas för varje korg som görs innanför trepoängslinjen under normalt spel. En <strong>trepoängare</strong> är värd 3 poäng för skott från utanför trepoängslinjen. De flesta professionella ligor och collegeligor använder alla tre värden. Streetbasket använder ofta bara 1:or och 2:or, eller bara 1:or. Denna resultattavla anpassar sig till alla format.',
    },
    {
      type: 'title',
      text: 'Spela i vilket format som helst: Vinst på poäng, vinst på tid eller först till mål',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basket har ingen fast poänggräns : matchen slutar när klockan rinner ut. Men pickup-basket använder ofta målpoäng som först till 16, 21 eller 11 (vinst med 2). Denna resultattavla tvingar inte på något vinstvillkor eftersom basket inte avgörs på poäng. Du bestämmer när matchen är över, och återställningsknappen rensar tavlan för nästa match. Lagnamnen bevaras så att du kan spela flera matcher i rad utan att skriva om dem.',
    },
    {
      type: 'title',
      text: 'Vad gör denna resultattavla annorlunda',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Tre dedikerade knappar</strong> : +1, +2 och +3. Inget cyklande mellan värden, ingen lång tryckning, inga extra tryck.',
        '<strong>Redigerbara lagnamn</strong> : tryck på namnet för att ändra det. Namnen sparas i din webbläsare och finns kvar efter sidomladdning.',
        '<strong>Skärmvakt</strong> : när du går i fullskärmsläge förhindrar resultattavlan att din telefon skärm släcks. Inget mer tryckande på skärmen bara för att hålla den vid liv.',
        '<strong>Fullskärmsläge</strong> : döljer webbläsarens flikar och adressfält så att resultattavlan tar upp hela skärmen. Tryck på fullskärmsknappen en gång så expanderar verktyget.',
        '<strong>Offline först</strong> : hela resultattavlan fungerar utan internetanslutning efter första laddningen. Inga annonser, inga spårare, ingen datainsamling.',
        '<strong>Tillfredsställande feedback</strong> : varje tryck utlöser en poänganimation, flygande partiklar och en subtil vibration på enheter som stöder det. +3 får en extra explosionseffekt.',
        '<strong>Matchstatus sparas</strong> : ladda om sidan, stäng webbläsaren eller kom tillbaka imorgon. Poängen och lagnamnen lagras lokalt.',
      ],
    },
    {
      type: 'title',
      text: 'Basketresultattavla vs. pappersprotokoll',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett pappersprotokoll fungerar, men det kräver en penna, en plan yta och någon som kan skriva och titta på matchen samtidigt. En digital resultattavla löser alla tre problemen. Knapparna är tillräckligt stora för att trycka utan att titta. Siffrorna är läsbara från andra sidan planen. Poängen blir aldrig kladdig, förlorad eller oavsiktligt raderad. Och till skillnad från papper sparar denna resultattavla matchstatusen, så du kan stänga den i halvtid och komma tillbaka.',
    },
  ],
  ui: {
    playerA: 'HEMMA',
    playerB: 'BORTA',
    swapSides: 'Byt sidor',
    reset: 'Återställ',
    resetConfirm: 'Återställa matchen? Alla poäng förloras.',
    cancel: 'Avbryt',
    fullscreen: 'Fullskärm',
    exitFullscreen: 'Avsluta fullskärm',
    winnerLabel: 'VINNARE',
  },
};
