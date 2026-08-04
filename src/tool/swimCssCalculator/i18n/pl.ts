import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SwimCssCalculatorUI } from '../ui';

const slug = 'kalkulator-css-plywanie';
const title = 'Kalkulator Krytycznej Predkosci Plywania CSS';
const description = 'Oblicz swoja krytyczna predkosc plywania CSS tempo progowe na 100m lub 100yd na podstawie testow 400m i 200m.';

const faqData = [
  {
    question: 'Jak czesto nalezy wykonywac test CSS w plywaniu?',
    answer: 'Zaleca sie powtarzanie testu 400m i 200m co 4 do 6 tygodni w celu dostosowania docelowych temp treningowych.',
  },
  {
    question: 'Czy mozna obliczyc CSS dla basenow w jardach?',
    answer: 'Tak. Wzor matematyczny krytycznej predkosci stosuje sie identycznie dla basenow w jardach.',
  },
];

const howToData = [
  {
    name: 'Wybierz jednostke dlugosci basenu',
    text: 'Wybierz Metry (basen 25m lub 50m) lub Jardy (basen 25yd) za pomoca przelacznika.',
  },
  {
    name: 'Wprowadz czas testu 400m',
    text: 'Wpisz minuty i sekundy z maksymalnego testu na dystansie 400 metrow.',
  },
  {
    name: 'Wprowadz czas testu 200m',
    text: 'Wpisz minuty i sekundy z maksymalnego testu na dystansie 200 metrow.',
  },
  {
    name: 'Oblicz i sprawdz czasy miedzyczasy',
    text: 'Kliknij Oblicz, aby zobaczyc predkosc tlenowa i czasy miedzyczasy dla poszczegolnych serii.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

const ui: SwimCssCalculatorUI = {
  title: 'Kalkulator Krytycznej Predkosci Plywania CSS',
  subtitle: 'Oblicz tempo progu tlenowego na 100m oraz czasy miedzyczasy dla stref intensywnosci.',
  unitLabel: 'Jednostka dlugosci basenu',
  unitMeters: 'Metry (Basen 25m / 50m)',
  unitYards: 'Jardy (Basen 25yd)',
  t400Label: 'Czas testu 400m / 400yd',
  t200Label: 'Czas testu 200m / 200yd',
  minutesLabel: 'Minuty',
  secondsLabel: 'Sekundy',
  calculateButton: 'Oblicz CSS i Czasy',
  resetButton: 'Resetuj',
  cssResultTitle: 'Wyniki Krytycznej Predkosci Plywania',
  cssSpeedLabel: 'Predkosc Tlenowa',
  cssPace100Label: 'Tempo CSS na 100',
  lapPaceLabel: 'Cel na Dlugosc 25m / 25yd',
  unitMeterPerSec: 'm/s',
  unitYardPerSec: 'yd/s',
  pace100mUnit: '/100m',
  pace100ydUnit: '/100yd',
  trainingZonesTitle: 'Macierz Czasy Miedzyczasy w Plywaniu',
  zoneHeader: 'Strefa Intensywnosci',
  pace100Header: 'Tempo Docelowe / 100',
  split50Header: 'Czas 50',
  split100Header: 'Czas 100',
  split200Header: 'Czas 200',
  split400Header: 'Czas 400',
  zoneAerobic: 'Wytrzymalosc Tlenowa',
  zoneAerobicDesc: 'Dla dlugich serii tlenowych i rozgrzewki (~104% tempa CSS)',
  zoneAerobicRest: 'Odpoczynek: 10s - 15s na serie',
  zoneCss: 'Prog CSS',
  zoneCssDesc: 'Tempo docelowe dla serii progowych i tempa startowego (~100% tempa CSS)',
  zoneCssRest: 'Odpoczynek: 15s - 20s na serie',
  zoneVo2Max: 'Predkosc VO2 Max',
  zoneVo2MaxDesc: 'Trening interwalowy o wysokiej intensywnosci (~96% tempa CSS)',
  zoneVo2MaxRest: 'Odpoczynek: 30s - 45s na serie',
  invalidNotice: 'Czas testu 400m musi byc wiekszy niz czas testu 200m.',
  copySplitsButton: 'Kopiuj Miedzyczasy',
  copiedNotice: 'Miedzyczasy skopiowane',
  seo: {
    title: 'Kalkulator Krytycznej Predkosci Plywania CSS Czasy',
    description: 'Oblicz swoja krytyczna predkosc plywania CSS tempo progowe na 100m lub 100yd na podstawie testow 400m i 200m.',
    h1: 'Kalkulator Krytycznej Predkosci Plywania i Macierz Treningowa',
    intro: 'Krytyczna Predkosc Plywania to wskaźnik używany przez pływaków i triathletów do planowania treningów na basenie.',
    statsTitle: 'Glowne Wskazniki Wydajnosci',
    stat1Label: 'Test 1',
    stat1Value: '400m Maksymalny Wysilek',
    stat2Label: 'Test 2',
    stat2Value: '200m Maksymalny Wysilek',
    stat3Label: 'Wskaznik Progu',
    stat3Value: 'Tempo Bazowe 100m CSS',
    stat4Label: 'Zastosowanie',
    stat4Value: 'Czasy Nawrotow Stoper',
    comparativeTitle: 'Metoda CSS a Pomiar Tetna w Wodzie',
    comparativeItem1Title: 'Podejscie Krytycznej Predkosci CSS',
    comparativeItem1Desc: 'Mierzy rzeczywistą prędkość przemieszczania się w wodzie uwzględniając technikę nawrotów.',
    comparativeItem2Title: 'Konwencjonalny Pomiar Tetna',
    comparativeItem2Desc: 'W wodzie wykazuje opóźnienia i nie odzwierciedla zmian techniki pod wpływem zmęczenia.',
    tableTitle: 'Zestawienie Stref Intensywnosci i Czasy Odpoczynku',
    tableCol1: 'Strefa Treningowa',
    tableCol2: 'Adaptacja Fizjologiczna',
    tableCol3: 'Zalecane Dystanse',
    tableRow1Col1: 'Wytrzymalosc Tlenowa',
    tableRow1Col2: 'Rozwój unaczynienia i utleniania tłuszczów.',
    tableRow1Col3: 'Powtórzenia 400m do 800m z krótką przerwą (10-15s).',
    tableRow2Col1: 'Prog CSS',
    tableRow2Col2: 'Zwiększenie tolerancji mleczanowej i mocy tlenowej.',
    tableRow2Col3: 'Powtórzenia 100m do 300m z przerwą 15-20s.',
    tableRow3Col1: 'Predkosc VO2 Max',
    tableRow3Col2: 'Maksymalny pobór tlenu i częstotliwość ruchów.',
    tableRow3Col3: 'Interwały 50m do 100m z dłuższą przerwą.',
    tipTitle: 'Wskazowka Treningowa do Testu',
    tipText: 'Równomiernie rozłóż siły na dystansie 400m, aby uniknąć przedwczesnego zakwaszenia.',
    faqTitle: 'Czesto Zadawane Pytania o Krytyczna Predkosc Plywania',
    faq1Q: 'Jak czesto powtarzac test CSS?',
    faq1A: 'Zaleca się powtarzanie co 4 do 6 tygodni.',
    faq2Q: 'Czy dziala na basenach w jardach?',
    faq2A: 'Tak. Wzór matematyczny jest identyczny.',
    glossaryTitle: 'Slowniczek Fizjologii Plywania',
    term1Name: 'Krytyczna Predkosc Plywania',
    term1Def: 'Teoretyczna maksymalna prędkość pływania możliwa do utrzymania bez szybkiego wyczerpania.',
    term2Name: 'Miedzyczas',
    term2Def: 'Docelowy czas na nawrocie sprawdzany na stoperze.',
  },
};

export const content: ToolLocaleContent<SwimCssCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography: bibliographyEntries,
  seo: [
    {
      type: 'title',
      text: 'Zasady Biomechaniczne Krytycznej Predkosci Plywania',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Krytyczna prędkość pływania określa nachylenie prostej zależności dystansu od czasu. Odejmując czas z 200m od czasu z 400m eliminuje się udział energii beztlenowej.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '400m & 200m', label: 'Standardowa Para Testowa' },
        { value: 'Baza 100m', label: 'Standard Tempa' },
        { value: '3 Strefy', label: 'Macierz Intensywnosci' },
        { value: '4 Czasy', label: 'Miedzyczasy Nawrotow' },
      ],
    },
    {
      type: 'title',
      text: 'Tempo CSS vs Monitorowanie Tetna w Wodzie',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tempo Rzeczywiste CSS',
          description: 'Mierzy realną prędkość płynięcia z uwzględnieniem nawrotów i poślizgu pod wodą.',
        },
        {
          title: 'Czujniki Tetna w Wodzie',
          description: 'Często pokazują opóźnione odczyty i mają problemy ze szczelnością.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabela Stref Treningowych i Czasow Przerw',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Nazwa Strefy', 'Tempo Wzgledem CSS', 'Glowny Cel Treningowy', 'Zalecana Przerwa'],
      rows: [
        ['Wytrzymalosc Tlenowa', '104% czasu CSS', 'Podstawowa wydolność tlenowa', '10 do 15 sekund'],
        ['Prog CSS', '100% czasu CSS', 'Tolerancja mleczanowa i tempo startowe', '15 do 20 sekund'],
        ['Predkosc VO2 Max', '96% czasu CSS', 'Maksymalny pobór tlenu', '30 do 45 sekund'],
      ],
    },
    {
      type: 'title',
      text: 'Strategia Wykonania Serii na Basenie',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Wskazowka Utrzymania Tempa',
      html: 'Rygorystycznie pilnuj międzyczasu na każdym 50-metrowym odcinku. Zbytnie przyspieszenie na początku skutkuje załamaniem tempa.',
    },
  ],
  ui,
};
