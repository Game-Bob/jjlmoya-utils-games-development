import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'licznik-punktow-rugby';
const title = 'Profesjonalny Licznik Punktów Rugby z Timerem Kar i Zegarem Meczu';
const description = 'Śledź na żywo wyniki meczów rugby, rejestrując przyłożenia, podwyższenia, karne i drop gole. Zarządzaj odliczaniem czasu kar i połowami meczu dzięki interaktywnej tablicy wyników na stadionie.';

const faqData = [
  {
    question: 'Jak zdobywa się punkty w meczu rugby union?',
    answer: 'Przyłożenie jest warte 5 punktów i jest przyznawane, gdy zawodnik przyłoży piłkę w polu punktowym przeciwnika. Podwyższenie po przyłożeniu jest warte 2 punkty. Karne i drop gole są warte po 3 punkty każdy.',
  },
  {
    question: 'Co się dzieje, gdy zawodnik otrzyma żółtą kartkę w rugby?',
    answer: 'Żółta kartka skutkuje karą czasową. Zawodnik musi opuścić boisko na 10 minut aktywnego czasu gry. Jego drużyna gra w tym czasie w osłabieniu. Zegar kary odlicza tylko wtedy, gdy zegar meczu jest uruchomiony.',
  },
  {
    question: 'Jak długo trwa mecz rugby union?',
    answer: 'Standardowy mecz rugby union składa się z dwóch połow po 40 minut z 10-minutową przerwą. Zegar meczu jest zatrzymywany podczas kontuzji i poważnych incydentów. Można doliczyć czas stracony na przerwy.',
  },
];

const howToData = [
  {
    name: 'Rejestruj wydarzenia punktowe',
    text: 'Dotknij przycisków Przyłożenie, Podwyższenie, Karny lub Drop Goal, aby zapisać punkty. Po dotknięciu Przyłożenie przycisk Podwyższenie podświetla się automatycznie.',
  },
  {
    name: 'Zarządzaj karami czasowymi',
    text: 'Dotknij Żółta kartka, aby wysłać zawodnika na karę. Wpisz jego nazwisko lub numer, a minutnik automatycznie rozpocznie 10-minutowe odliczanie.',
  },
  {
    name: 'Kontroluj czas meczu',
    text: 'Używaj zegara meczu do śledzenia dwóch połow po 40 minut. Zatrzymuj zegar podczas kontuzji i wznawiaj, gdy gra zostanie wznowiona.',
  },
  {
    name: 'Śledź przebieg punktacji',
    text: 'Monitoruj tablicę wyników z punktami gospodarzy i gości. Przeglądaj podsumowanie punktacji, aby zobaczyć liczbę przyłożeń, podwyższeń, karnych i drop goli.',
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
  inLanguage: 'pl',
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
      text: 'Darmowy Licznik Punktów Rugby Online ze Śledzeniem Meczu na Żywo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Przejmij kontrolę nad punktacją meczu rugby dzięki naszej interaktywnej cyfrowej tablicy wyników. Śledź przyłożenia, podwyższenia, karne i drop gole w czasie rzeczywistym. System zarządzania karami automatycznie odlicza zawieszenia zawodników, a zegar meczu precyzyjnie mierzy obie połowy. Niezależnie od tego, czy sędziujesz lokalny mecz klubowy, czy trenujesz drużynę młodzieżową, to narzędzie automatycznie zajmie się wszystkimi szczegółami punktacji i pomiaru czasu.',
    },
    {
      type: 'title',
      text: 'System Punktacji w Rugby Union Wyjaśniony',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rugby union oferuje cztery sposoby zdobywania punktów, każdy wymagający innych umiejętności i strategii. Przyłożenie to najcenniejsza akcja ofensywna, nagradzająca drużyny za przebicie się przez linię obrony i przyłożenie piłki w polu punktowym. Po przyłożeniu drużyna punktująca próbuje podwyższenia za dwa dodatkowe punkty. Karne i drop gole dodają głębi taktycznej, pozwalając drużynom zdobywać punkty z gry lub po przewinieniach przeciwnika.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Przyłożenie',
          description: 'Przyłóż piłkę w polu punktowym za pięć punktów.',
          icon: 'mdi:rugby',
          points: ['Pięć punktów', 'Umożliwia podwyższenie', 'Wymaga przyłożenia piłki'],
        },
        {
          title: 'Podwyższenie',
          description: 'Kopnij piłkę między słupy po przyłożeniu za dwa punkty.',
          icon: 'mdi:goal',
          points: ['Dwa punkty za celne kopnięcie', 'Kop z miejsca przyłożenia', 'Musi przejść nad poprzeczką'],
        },
        {
          title: 'Karny',
          description: 'Kop na bramkę po przewinieniu przeciwnika za trzy punkty.',
          icon: 'mdi:alert-octagon',
          points: ['Trzy punkty', 'Można kopać lub dotknąć', 'Często decyduje o wynikach'],
        },
        {
          title: 'Drop Goal',
          description: 'Wykop piłkę z ręki między słupy w trakcie gry za trzy punkty.',
          icon: 'mdi:circle-outline',
          points: ['Trzy punkty', 'Piłka musi dotknąć ziemi', 'Często decyduje o zwycięstwie'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Zrozumienie Systemu Kar Czasowych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kara czasowa to system tymczasowego zawieszenia za niebezpieczne lub powtarzające się przewinienia. Gdy sędzia pokaże żółtą kartkę, zawodnik musi opuścić boisko na dziesięć minut aktywnej gry. W tym czasie jego drużyna gra w osłabieniu, co stwarza przewagę liczebną dla przeciwnika. Zegar kary odlicza tylko wtedy, gdy zegar meczu jest uruchomiony, co zapewnia sprawiedliwe egzekwowanie kary niezależnie od przerw w grze.',
    },
    {
      type: 'list',
      items: [
        '<strong>Kara żółtej kartki:</strong> Dziesięć minut kary za niebezpieczną grę lub powtarzające się przewinienia drużyny.',
        '<strong>Osłabienie liczbowe:</strong> Drużyna ukarana gra 14 zawodnikami zamiast 15 w trakcie zawieszenia.',
        '<strong>Automatyczny powrót:</strong> Po upływie czasu zawodnik automatycznie wraca do gry z linii środkowej.',
        '<strong>Podwyższenie do czerwonej kartki:</strong> Druga żółta kartka lub poważne przewinienie skutkuje czerwoną kartką i trwałym wykluczeniem.',
      ],
    },
    {
      type: 'title',
      text: 'Pomiar Czasu Meczu i Zarządzanie Połowami',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Standardowy mecz rugby union jest podzielony na dwie połowy po 40 minut z 10-minutową przerwą. Zegar meczu płynie nieprzerwanie podczas aktywnej gry, ale może być zatrzymany przez sędziego z powodu kontuzji, przeglądu poważnych przewinień lub innych przerw. Ten cyfrowy licznik punktów zawiera precyzyjny zegar meczu z przyciskami pauzy i wznowienia, automatyczne śledzenie połowy oraz wyraźne wskaźniki wizualne dla każdego okresu gry.',
    },
    {
      type: 'title',
      text: 'Dlaczego Warto Używać Cyfrowego Licznika Punktów Rugby',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ręczne prowadzenie punktacji w rugby jest trudne ze względu na różnorodność metod zdobywania punktów, wymogi dotyczące czasu kar i zarządzanie połowami. To narzędzie przeglądarkowe zapewnia dokładną punktację w czasie rzeczywistym, automatyczne odliczanie kar i precyzyjny pomiar czasu meczu. Trenerzy mogą skupić się na strategii gry zamiast na arytmetyce, sędziowie mają niezawodny system rezerwowy, a zawodnicy mogą jednym spojrzeniem zweryfikować stan meczu.',
    },
  ],
  ui: {
    title: 'Licznik Punktów Rugby',
    description: 'Śledź wyniki meczu i czasy kar.',
    home: 'Gospodarze',
    away: 'Goście',
    score: 'Wynik',
    tryLabel: 'Przyłożenie +5',
    conversion: 'Podwyższenie +2',
    penalty: 'Karny +3',
    dropGoal: 'Drop Goal +3',
    conversionYes: 'Tak',
    conversionNo: 'Nie',
    sinBin: 'Żółta kartka',
    sinBinTitle: 'Kara czasowa',
    sinBinPlayer: 'Imię lub numer zawodnika:',
    sinBinAdd: 'Rozpocznij karę',
    sinBinEmpty: 'Brak aktywnych kar',
    sinBinReturn: 'Powrót',
    matchClock: 'Zegar meczu',
    half: 'Połowa',
    half1: 'Pierwsza połowa',
    half2: 'Druga połowa',
    startMatch: 'Rozpocznij mecz',
    pauseMatch: 'Pauza',
    resumeMatch: 'Wznów',
    resetMatch: 'Resetuj mecz',
    resetConfirm: 'Zresetować bieżący mecz? Wszystkie wyniki i timery zostaną utracone.',
    cancel: 'Anuluj',
    confirm: 'Potwierdź reset',
    period: 'Okres',
    scoringSummary: 'Podsumowanie punktacji',
    tryScored: 'Przyłożenia',
    conversionSuccess: 'Podwyższenia',
    conversionMiss: 'Nieudane podwyższenia',
    penaltyScored: 'Karne',
    dropGoalScored: 'Drop gole',
    totalPoints: 'Razem',
    fullscreen: 'Pełny ekran',
    toggleSound: 'Dźwięk',
    eventLog: 'Rejestr zdarzeń',
    eventEmpty: 'Brak zdarzeń',
    undoBtn: 'Cofnij ostatnie',
    timeOff: 'Czas zatrzymany',
    timeOn: 'Czas włączony',
  },
};
