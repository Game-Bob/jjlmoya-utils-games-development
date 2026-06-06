import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'licznik-punktow-streetball-3x3';
const title = 'Profesjonalny Licznik Punktów Streetball 3x3 z Zegarem Rzutów';
const description = 'Śledź wyniki FIBA 3x3 Streetball z wbudowanym 12-sekundowym zegarem rzutów, faulami drużynowymi, punktami sudden death i dynamicznymi wskaźnikami na połowie boiska.';

const faq = [
  {
    question: 'Jak działa 12-sekundowy zegar rzutów w 3x3 Streetball?',
    answer: 'W FIBA 3x3 drużyny mają tylko 12 sekund na oddanie rzutu po przejęciu piłki. Zegar resetuje się do 12 przy zmianie posiadania lub do 14 sekund przy zbiórkach ofensywnych i faulach w określonych sytuacjach.',
  },
  {
    question: 'Jaka jest granica punktów sudden death w 3x3 Koszykówce?',
    answer: 'Pierwsza drużyna, która zdobędzie 21 punktów, natychmiast wygrywa mecz, niezależnie od pozostałego czasu na zegarze meczowym. Jest to zasada sudden death.',
  },
  {
    question: 'Jak faule drużynowe wpływają na mecz?',
    answer: 'Od 7 faulu drużynowego przeciwnicy otrzymują 2 rzuty wolne. Przy 10 i kolejnych faulach otrzymują 2 rzuty wolne plus posiadanie piłki, co uruchamia stan karny.',
  },
];

const howTo = [
  {
    name: 'Ustaw Nazwy Drużyn',
    text: 'Wprowadź niestandardowe nazwy dla dwóch drużyn streetball, aby spersonalizować interfejs.',
  },
  {
    name: 'Zapisuj Punkty i Posiadanie',
    text: 'Dotknij interaktywnego asfaltowego boiska, aby dodać 1 punkt (za linią) lub 2 punkty (spoza łuku) i przełączyć wskaźnik posiadania.',
  },
  {
    name: 'Steruj Zegarem Rzutów',
    text: 'Dotknij zegara rzutów, aby zresetować do 12, kliknij drugi przycisk resetu dla 14, lub dotknij dwukrotnie, aby wstrzymać odliczanie.',
  },
  {
    name: 'Zarządzaj Faulem Drużynowym',
    text: 'Śledź faule drużynowe za pomocą licznika, który zmienia kolor na czerwony po osiągnięciu stanu karnego (7+ fauli).',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, i) => ({
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
  inLanguage: 'pl',
};

export const content: StreetballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Darmowa Tablica Wyników Streetball 3x3 Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Śledzenie wyniku w szybkich meczach 3v3 koszykówki może być trudne przy jednoczesnym zarządzaniu krótkim zegarem rzutów i rejestrowaniu fauli drużynowych. Ta darmowa tablica wyników streetball 3x3 online oferuje industrialny asfaltowy motyw z neonowym stylowaniem o wysokim kontraście. Automatycznie obsługuje 12-sekundowy zegar rzutów, zegar meczowy, system kar za faule i wskaźniki posiadania.',
    },
    {
      type: 'title',
      text: 'Zasady Punktacji i Zegara Rzutów FIBA 3x3 Streetball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FIBA 3x3 streetball różni się od tradycyjnej koszykówki 5v5. Mecze trwają jedną 10-minutową połowę lub kończą się natychmiast, gdy drużyna zdobędzie 21 punktów (sudden death). Rzuty za łukiem i rzuty wolne liczą 1 punkt, podczas gdy rzuty spoza łuku 6,75m liczą 2 punkty. 12-sekundowy zegar rzutów wymusza szybkie akcje ofensywne, a zawodnicy muszą wyprowadzić piłkę za łuk po zmianie posiadania.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nieformalne Gry',
          description: 'Szybkie liczenie punktów w koszykówce ulicznej z przyjaciółmi na lokalnych boiskach.',
          icon: 'mdi:basketball',
          points: ['Proste przyciski punktów', 'Responsywny układ', 'Działa offline'],
        },
        {
          title: 'Gra Turniejowa',
          description: 'Idealny do oficjalnych turniejów 3x3 i lig streetball.',
          icon: 'mdi:trophy-outline',
          points: ['10-minutowe odliczanie', 'Sudden death przy 21 punktach', 'Stany karne za faule'],
        },
        {
          title: 'Panel Sędziego',
          description: 'Zaprojektowany dla sędziów do szybkiego resetowania zegara rzutów i zarządzania posiadaniem.',
          icon: 'mdi:school',
          points: ['Reset zegara 12s i 14s', 'Dźwięki syreny', 'Gestykulacja przycisków'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktywne Sterowanie i Animacje Dotykowe',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>12-sekundowy Zegar Rzutów</strong> miga na czerwono i wyświetla ułamki sekund poniżej 4, a następnie symulowany dźwięk syreny.',
        '<strong>Interaktywna Betonowa Połowa Boiska</strong> umożliwia dotknięcie stref 1 i 2 punktów, aby rejestrować wyniki bezpośrednio na schemacie.',
        '<strong>Ostrzeżenie Licznika Fauli</strong> zmienia kolor na czerwony i drży, aby wskazać kary za faule drużynowe (7+ i 10+ fauli).',
        '<strong>Wskaźnik Wycofania Piłki</strong> wyświetla przypomnienie po zmianie posiadania, dopóki piłka nie zostanie wycofana za łuk.',
        '<strong>Licznik Time-outów</strong> uruchamia 30-sekundowe odliczanie z niestandardowymi sygnałami dźwiękowymi.',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Warto Używać Cyfrowego Trackera Streetball?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cyfrowa tablica wyników eliminuje spory dotyczące punktów, fauli czy naruszeń zegara rzutów na asfalcie. Jasne neonowe cyfry są łatwe do odczytania z daleka, a automatyczne przypomnienia o posiadaniu i wycofaniu piłki zapewniają płynny przebieg meczu bez przerw.',
    },
  ],
  ui: {
    teamA: 'Drużyna 1',
    teamB: 'Drużyna 2',
    points: 'Punkty',
    fouls: 'Faule',
    timeouts: 'Time-outy',
    shotClock: 'Zegar Rzutów',
    reset: 'Reset',
    resetConfirm: 'Zresetować mecz? Wszystkie dane zostaną utracone.',
    cancel: 'Anuluj',
    gameTime: 'Czas',
    possession: 'Posiadanie',
    clearBall: 'Wycofaj Piłkę',
    matchWon: 'Mecz Wygrany',
    timeoutActive: 'Time-out',
    penalty: 'Kara',
    fullscreen: 'Pełny Ekran',
    exitFullscreen: 'Zamknij Pełny Ekran',
    overtime: 'Dogrywka',
    ptsInside: '+1 Punkt',
    ptsOutside: '+2 Punkty',
    toggleSound: 'Dźwięk Wł./Wył.',
    soundOn: 'Dźwięk Wł.',
    soundOff: 'Dźwięk Wył.',
  },
};
