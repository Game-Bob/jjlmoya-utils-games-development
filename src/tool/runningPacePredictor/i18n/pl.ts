import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RunningPacePredictorUI } from '../ui';

const slug = 'kalkulator-tempa-biegu';
const title = 'Kalkulator Tempa Biegu i Prognoza Czasu Rezultatu';
const description =
  'Oblicz tempo biegu, przewiduj czasy na 5k, 10k, półmaraton i maraton za pomocą formuły Riegela oraz generuj strefy treningowe.';

const faqData = [
  {
    question: 'Jak dokładna jest formuła Petera Riegela przy prognozowaniu maratonu?',
    answer:
      'Wzór Riegela T2 = T1 * (D2 / D1)^1.06 zapewnia wysoką dokładność przy dobrym przygotowaniu tlenowym. W maratonie wynik zależy od objętości tygodniowej i biegów długich.',
  },
  {
    question: 'Jak przeliczyć min/km na min/mile?',
    answer:
      'Pomnóż całkowitą liczbę sekund na kilometr przez 1,609344. Tempo 5:00 min/km odpowiada 8:03 min/mile.',
  },
  {
    question: 'Dlaczego prognozy czasu na maraton bywają zbyt ambitne?',
    answer:
      'Współczynnik 1,06 zakłada optymalną odporność na zmęczenie. Brak bazy tlenowej powoduje spadek tempa i gorszy wynik niż wyliczony.',
  },
  {
    question: 'Jak ustalać strefy tempa dla treningu powtórzeniowego i tempo biegu?',
    answer:
      'Trening interwałowy wykonuj z tempem 95%-105% tempa na 5k, biegi progowe na 110%-120%, a spokojne wybiegania na 125%-145%.',
  },
];

const howToData = [
  {
    name: 'Wybierz system jednostek',
    text: 'Wybierz system metryczny (km, min/km) lub imperialny (mile, min/mile).',
  },
  {
    name: 'Wybierz dystans',
    text: 'Kliknij przycisk dystansu (5K, 10K, Półmaraton, 42K) lub wpisz własny.',
  },
  {
    name: 'Ustaw czas odniesienia',
    text: 'Użyj przycisków (+1m, +5m, -1m, -5m) lub wpisz godziny i minuty z ostatnich zawodów.',
  },
  {
    name: 'Analizuj wyniki',
    text: 'Zobacz średnie tempo, prognozowane czasy na zawodach i strefy treningowe.',
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

export const content: ToolLocaleContent<RunningPacePredictorUI> = {
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
      text: 'Biomechaniczne Podstawy Obliczania Tempa Biegu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wyliczanie tempa i prognozowanie wyników wymaga zrozumienia procesów metabolicznych. Wydolność w biegach długich zależy od VO2 max, progu mleczanowego i ekonomii biegu.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.06', label: 'Współczynnik Riegela' },
        { value: '4 Główne', label: 'Dystanse Zawodów' },
        { value: '3 Sposoby', label: 'Przeliczania Tempa' },
        { value: '3 Poziomy', label: 'StrefTreningowych' },
      ],
    },
    {
      type: 'title',
      text: 'Formuła Riegela i Jej Zastosowanie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opracowany przez Petera Riegela wzór T2 = T1 * (D2 / D1)^1.06 opisuje spadek prędkości wraz ze wzrostem dystansu. Wskaźnik 1.06 odpowiada przeciętnemu spadkowi formy u trenujących biegaczy.',
    },
    {
      type: 'title',
      text: 'Porównanie Systemu Metrycznego i Imperialnego',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'System Metryczny (min/km)',
          description: 'Standard w biegach w Europie. Pozwala na precyzyjną kontrolę międzyczasów co 1000 metrów.',
        },
        {
          title: 'System Imperialny (min/mile)',
          description: 'Standard w USA i Wielkiej Brytanii. Jedna mila to 1.609344 km.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Oficjalne Dystanse Biegów Ulicznych',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Bieg', 'Dystans Metryczny (km)', 'Dystans Imperialny (mi)', 'Główny System Energetyczny'],
      rows: [
        ['Bieg 5K', '5.00 km', '3.11 mi', '90% Tlenowy / 10% Beztlenowy'],
        ['Bieg 10K', '10.00 km', '6.21 mi', '95% Tlenowy / 5% Beztlenowy'],
        ['Półmaraton', '21.0975 km', '13.11 mi', '99% Tlenowy (Próg Mleczanowy)'],
        ['Maraton', '42.195 km', '26.22 mi', '100% Tlenowy (Limit Glikogenu)'],
      ],
    },
    {
      type: 'title',
      text: 'Taktyka Biegu i Negative Split',
      level: 2,
    },
    {
      type: 'tip',
      title: 'Zalety Negative Split',
      html: 'Bieg pokonany szybciej w drugiej połowie chroni zapasy glikogenu i zapobiega przedwczesnemu zakwaszeniu.',
    },
  ],
  ui: {
    title: 'Kalkulator Tempa Biegu i Prognoza Czasu Rezultatu',
    subtitle: 'Oblicz tempo i przewiduj czasy z formułą Riegela',
    paceCalculatorTitle: 'Kalkulator Tempa, Dystansu i Czasu',
    racePredictorTitle: 'Prognoza Czasów na Zawodach',
    trainingZonesTitle: 'Docelowe Strefy Tempa Treningowego',
    distanceLabel: 'Dystans',
    timeLabel: 'Czas',
    paceLabel: 'Średnie Tempo',
    hoursLabel: 'Godziny',
    minutesLabel: 'Minuty',
    secondsLabel: 'Sekundy',
    unitKm: 'Kilometry',
    unitMiles: 'Mile',
    paceUnitKm: 'min/km',
    paceUnitMiles: 'min/mile',
    presetsTitle: 'Szybki Wybór Dystansu',
    calculateButton: 'Oblicz',
    resetButton: 'Zresetuj',
    recentRaceTitle: 'Ostatni Czas Odniesienia',
    predictedTimesTitle: 'Szacowane Czasy na Zawodach',
    distanceHeader: 'Dystans',
    estimatedTimeHeader: 'Szacowany Czas',
    targetPaceHeader: 'Docelowe Tempo',
    trainingZoneHeader: 'Strefa Treningowa',
    paceRangeHeader: 'Zakres Tempa',
    zoneEasy: 'Spokojny Bieg Wybieganie',
    zoneEasyDesc: 'Budowanie bazy tlenowej i regeneracja',
    zoneTempo: 'Bieg Progowy & Fartlek',
    zoneTempoDesc: 'Podnoszenie progu mleczanowego',
    zoneIntervals: 'Interwały i Powtórzenia',
    zoneIntervalsDesc: 'Rozwój VO2 max i wytrzymałości szybkościowej',
    riegelExplanation: 'Prognozy korzystają ze wzoru Riegela T2 = T1 * (D2 / D1)^1.06.',
    seo: {
      title: 'Kalkulator Tempa Biegu i Prognoza Czasu Rezultatu',
      description: 'Oblicz tempo biegu i prognozuj czasy na 5k, 10k, półmaraton i maraton.',
      h1: 'Kalkulator Tempa Biegu i Prognoza Czasu Rezultatu',
      intro: 'Dokładne obliczanie tempa i prognozowanie czasów to kluczowe narzędzia dla biegaczy.',
      statsTitle: 'Wskaźniki Wydolności',
      stat1Label: 'Współczynnik Riegela',
      stat1Value: '1.06',
      stat2Label: 'Główne Dystanse',
      stat2Value: '4 Zawody',
      stat3Label: 'Przeliczanie Tempa',
      stat3Value: '3 Sposoby',
      stat4Label: 'Strefy Treningowe',
      stat4Value: '3 Poziomy',
      comparativeTitle: 'Porównanie Jednostek',
      comparativeItem1Title: 'System Metryczny (min/km)',
      comparativeItem1Desc: 'Standard w Europie.',
      comparativeItem2Title: 'System Imperialny (min/mile)',
      comparativeItem2Desc: 'Standard w USA i Wielkiej Brytanii.',
      tableTitle: 'Zestawienie Dystansów',
      tableCol1: 'Bieg',
      tableCol2: 'Kilometry',
      tableCol3: 'Mile',
      tableRow1Col1: 'Bieg 5K',
      tableRow1Col2: '5.00 km',
      tableRow1Col3: '3.11 mi',
      tableRow2Col1: 'Bieg 10K',
      tableRow2Col2: '10.00 km',
      tableRow2Col3: '6.21 mi',
      tableRow3Col1: 'Półmaraton',
      tableRow3Col2: '21.10 km',
      tableRow3Col3: '13.11 mi',
      tipTitle: 'Taktyka Tempa',
      tipText: 'Negative split pozwala uzyskać lepsze wyniki na metcie.',
      faqTitle: 'Często Zadawane Pytania',
      faq1Q: 'Jak dokładny jest wzór Riegela?',
      faq1A: 'Wymaga odpowiedniego przygotowania tlenowego.',
      faq2Q: 'Różnica min/km a min/mile?',
      faq2A: 'Min/km to minuty na kilometr.',
      glossaryTitle: 'Słownik Biegowy',
      term1Name: 'Wzór Riegela',
      term1Def: 'Matematyczny wzór prognozowania wyników Petera Riegela.',
      term2Name: 'Próg Mleczanowy',
      term2Def: 'Intensywność, przy której kwas mlekowy gwałtownie rośnie.',
    },
  },
};
