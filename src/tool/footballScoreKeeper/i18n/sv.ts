import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'fotboll-malrakning';
const title = 'Fotboll Målräkning Online : Gratis Matchpoängsräknare';
const description =
  'Håll koll på fotbollspoäng online gratis. Enkel målräknare för träningsmatcher, vänskapsmatcher och turneringar. Ingen registrering krävs.';

const faqData = [
  {
    question: 'Hur använder jag den här fotbollsmålräknaren?',
    answer:
      'Tryck på +-knappen under varje lag för att lägga till ett mål. Poängen uppdateras direkt med en festanimation. Använd minusknappen för att ångra ett misstag. Lagnamn kan redigeras : tryck bara på standardnamnet och skriv ditt eget. Allt sparas automatiskt i din webbläsare så att du kan stänga sidan och komma tillbaka senare.',
  },
  {
    question: 'Kan jag använda den på min telefon under en match?',
    answer:
      'Ja. Gränssnittet är designat för mobilanvändning med stora knappar som du kan trycka på utan att titta. Helskärmsläget döljer webbläsaren och håller din telefonskärm vaken under hela matchen. Den vertikala layouten låter dig nå båda lagsektionerna enkelt med tummen.',
  },
  {
    question: 'Sparas mina matchdata?',
    answer:
      'Ja. Den aktuella poängen och lagnamnen sparas automatiskt i din webbläsare. Du kan ladda om sidan, stänga webbläsaren eller komma tillbaka nästa dag och dina matchdata finns fortfarande kvar.',
  },
  {
    question: 'Kan jag hålla koll på förlängning eller straffläggning?',
    answer:
      'Ja. Målräknaren fungerar på samma sätt för alla matchformat. Fortsätt bara att använda +-knapparna under förlängning eller straffläggning. När matchen är slut trycker du på „Avsluta match" för att se slutresultatet.',
  },
  {
    question: 'Är det verkligen gratis utan dolda begränsningar?',
    answer:
      'Ja, helt gratis utan begränsningar. Inga premiumplaner, inga deltagarbegränsningar, inga vattenstämplar, inga annonser. Allt fungerar offline i din webbläsare. Inget konto eller e-post krävs.',
  },
];

const howToData = [
  {
    name: 'Namnge lagen',
    text: 'Tryck på standardlagets namn och skriv ditt eget. Det nya namnet sparas automatiskt i din webbläsare.',
  },
  {
    name: 'Lägg till ett mål',
    text: 'Tryck på den stora runda +-knappen för laget som gjorde mål. Poängsiffran hoppar upp med en festanimation.',
  },
  {
    name: 'Ta bort ett mål',
    text: 'Tryck på minusknappen under +-knappen om du råkat lägga till ett mål. Poängen justeras omedelbart.',
  },
  {
    name: 'Avsluta matchen',
    text: 'Tryck på „Avsluta match" längst ner för att se vinnaren utropas med trofé och konfetti. Stäng firandet genom att trycka utanför.',
  },
  {
    name: 'Återställ matchen',
    text: 'Tryck på återställningsikonen i det övre fältet och bekräfta för att rensa båda poängen. Lagnamnen behålls.',
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
      text: 'Gratis Online Fotbollsmålräknare : Live Matchpoängsräknare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att hålla koll på poängen under en fotbollsmatch borde vara det enklaste med spelet. Den här online-målräknaren låter dig registrera mål för två lag i realtid med bara en tryckning. Ingen registrering, inga nedladdningar, inga komplicerade menyer. Öppna sidan, namnge dina lag och börja räkna mål. Oavsett om du står vid sidlinjen och coachar ungdomsfotboll, leder en vänskapsmatch mellan vänner eller håller poängen under en lokal ligamatch, är det här verktyget byggt för snabbhet och enkelhet. Varje lag får en egen färgkodad sektion med en stor poängdisplay och en dedikerad +1-knapp. Tryck för att lägga till ett mål, tryck på minusknappen för att ångra ett misstag. Hela matchhistoriken förblir synlig på skärmen så att du alltid vet exakt vad som hände och när.',
    },
    {
      type: 'title',
      text: 'Varför du behöver en dedikerad fotbollspoängtavla istället för en generisk räknare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En generisk sifferräknare fungerar för att räkna vad som helst, men en dedikerad fotbollsmålräknare förstår hur spelet fungerar. Den separerar de två lagen visuellt med distinkta färger så att du aldrig trycker på fel sida. Målknappen är stor och tillfredsställande att trycka på, även när du håller en telefon i en hand vid sidlinjen. Minusknappen låter dig korrigera fel direkt utan att behöva återställa hela matchen. Och när matchen är över utlöser knappen „Avsluta match" en firandeskärm som visar slutresultatet med konfetti och en trofé. Generiska räknare kan inget av det där. De behandlar varje poäng på samma sätt. Fotboll är inte generiskt och din poängräknare borde inte vara det heller.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vänskaps och Träningsmatcher',
          description: 'Snabba mål för övningsmatcher och träningspass. Återställ mellan matcher med en tryckning. Fungerar offline så du kan använda det på vilken plan som helst.',
          icon: 'mdi:soccer',
          points: ['Målregistrering med en tryckning', 'Fungerar helt offline', 'Inget konto eller e-post behövs', 'Direkt återställning mellan matcher'],
        },
        {
          title: 'Lokala Ligor & Turneringar',
          description: 'Håll en ren löpande poäng för ligamatcher där varje mål räknas. Stor display läsbar från andra sidan planen. Lagfärger hjälper till att undvika förvirring.',
          icon: 'mdi:trophy-outline',
          points: ['Färgkodade lagsektioner', 'Redigerbara lagnamn', 'Avsluta match med firande', 'Stor poäng läsbar på avstånd'],
        },
        {
          title: 'Ungdoms och Skolfotboll',
          description: 'Enkelt nog för unga spelare att använda själva. Tränare kan hålla koll på mål medan de fokuserar på spelet. Helskärmsläget håller skärmen vaken.',
          icon: 'mdi:school',
          points: ['Enkelt nog för barn', 'Helskärm håller skärmen på', 'Redigerbara lagnamn', 'Inga distraherande funktioner'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Så här följer du en fotbollsmatch live med denna online-målräknare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att använda den här fotbollspoängtavlan är enkelt. När du öppnar sidan ser du två lagsektioner. Hemmalaget visas i rött och bortalaget i blått. Varje sektion har ett stort poängnummer i mitten, ett lagnamnsfält högst upp och två knappar under. Tryck på den stora runda +-knappen för att lägga till ett mål för det laget. Poängnumret animeras med en festeffekt varje gång ett mål registreras. Åtta olika mål-animationer roterar slumpmässigt, så varje mål känns unikt. Flygande partiklar sprutar från knappområdet med text som MÅL och SIUUU. Skärmen blinkar till kort för att markera ögonblicket. Om du gör ett misstag trycker du på den lilla minusknappen för att ta bort det senaste målet. Lagnamnsfälten är redigerbara. Tryck på standardnamnet för att skriva ditt eget lagnamn. Namnen sparas automatiskt i din webbläsare tillsammans med den aktuella poängen. Det betyder att du kan stänga sidan, komma tillbaka senare och dina matchdata finns fortfarande kvar. I slutet av matchen trycker du på „Avsluta match" för att se vinnaren utropas med en troféanimation och fallande konfetti. Du kan stänga firandet och poängen förblir synlig.',
    },
    {
      type: 'title',
      text: 'Mobilanpassad fotbollspoängräkning designad för sidlinjen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det här verktyget är byggt mobile first. Den vertikala layouten placerar ett lag ovanför det andra så att du enkelt kan nå båda sektionerna med tummen medan du håller din telefon. Knapparna är tillräckligt stora för att trycka på utan att titta på skärmen. Helskärmsläget tar bort webbläsarens verktygsfält och håller din telefonskärm vaken under hela matchen. Inget mer att trycka på skärmen varannan minut för att förhindra att den släcks. Gränssnittet fungerar i liggande och stående orientering. Det fungerar även offline efter den första sidladdningen, så du behöver ingen internetanslutning på planen. Det finns inga annonser, inga spårare och ingen datainsamling. Dina matchdata lämnar aldrig din enhet.',
    },
    {
      type: 'title',
      text: 'Vad som gör den här fotbollsmålräknaren speciell',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Färgkodade lag</strong> rött för hemma och blått för borta. Du ser direkt vilken sida som är vilken utan att läsa text.',
        '<strong>Målfirningsanimationer</strong> varje mål utlöser ett slumpmässigt firande. Åtta olika animationer inklusive boom, rise, glow och ball bounce.',
        '<strong>Flygande partiklar</strong> varje mål skapar flytande text med meddelanden som MÅL och SIUUU. Varje firande känns unikt.',
        '<strong>Avsluta match-ceremoni</strong> tryck på „Avsluta match" för att utropa vinnaren med troféanimation, lagnamn och konfettiregn.',
        '<strong>Redigerbara lagnamn</strong> tryck på namnfältet för att byta namn på dina lag. Namn sparas lokalt i din webbläsare.',
        '<strong>Skärmlås</strong> helskärmsläget förhindrar att din telefonskärm släcks under matchen.',
        '<strong>Helskärmsläge</strong> döljer webbläsarens gränssnitt så att poängtavlan fyller hela skärmen utan distraktioner.',
        '<strong>Offline first</strong> fungerar utan internet efter första besöket. Inga annonser, ingen spårning, ingen datainsamling.',
        '<strong>Omedelbar datalagring</strong> poäng och lagnamn sparas automatiskt. Ladda om sidan eller stäng webbläsaren och dina matchdata kommer tillbaka.',
        '<strong>Återställning med bekräftelse</strong> återställningsknappen ber om bekräftelse innan poängen rensas. Förhindrar oavsiktlig dataförlust.',
      ],
    },
    {
      type: 'title',
      text: 'Fotbollsmålräknare vs. Papperspoängblad : varför digitalt är bättre',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Papperspoängblad har använts i årtionden, men de har verkliga problem. Du behöver en penna som fungerar, en plan yta att skriva på och tillräckligt med uppmärksamhet för att skriva medan du tittar på spelet. En enda distraktion kan göra att du missar ett mål eller skriver fel siffra. När det väl är skrivet på papper kan poängen inte korrigeras snyggt. Överstrukna siffror gör bladet svårt att läsa. Papper kan bli blött i regn, blåsa bort i vinden eller försvinna mellan matcher. En digital fotbollsmålräknare löser vartenda ett av dessa problem. Knapparna är tillräckligt stora för att tryckas på utan att titta. Siffror visas tydligt i en stor textstorlek som är läsbar från andra sidan planen. Misstag rättas omedelbart med minusknappen. Poängen sparas automatiskt och går aldrig förlorad. Och till skillnad från papper lägger målräknaren till firandaanimationer och visuell återkoppling som gör poängräkning roligare. Oavsett om du coachar ett ungdomslag, leder en söndagsliga eller bara spelar med vänner, ger den här gratis online-målräknaren dig allt du behöver och inget du inte behöver.',
    },
    {
      type: 'title',
      text: 'Gratis fotbollsmålräkning för alla nivåer av spelet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det här verktyget är helt gratis att använda utan begränsningar. Det finns inga premiumnivåer, inga dolda funktioner bakom en betalvägg och inga vattenstämplar på skärmen. Det fungerar för alla nivåer av fotboll från avslappnade sparkar med vänner till organiserade ligamatcher. Det enkla gränssnittet innebär att vem som helst kan använda det, från unga spelare som lär sig spelet till erfarna tränare som leder en turnering. Ingen registrering krävs. Ingen e-postadress. Inga personuppgifter samlas in. Öppna sidan, starta matchen, tryck in målen. Det är allt som finns.',
    },
  ],
  ui: {
    playerA: 'Hemma',
    playerB: 'Borta',
    winnerLabel: 'MÄSTARE',
    finishMatch: 'Avsluta match',
    reset: 'Återställ',
    resetConfirm: 'Återställ match? Alla data förloras.',
    cancel: 'Avbryt',
    fullscreen: 'Helskärm',
    exitFullscreen: 'Avsluta helskärm',
  },
};
