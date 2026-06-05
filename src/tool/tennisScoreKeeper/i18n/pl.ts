import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'licznik-tenisa';
const title = 'Licznik Tenisa Online : Darmowy Tracker Meczów';
const description = 'Śledź mecze tenisa z punktacją setów i gier. Darmowy licznik tenisa online do meczów i turniejów. Bez rejestracji.';

const faqData = [
  {
    question: 'Jak działa punktacja w tenisie?',
    answer: 'Mecze tenisowe rozgrywane są w game i setach. Game punktowany jest jako Love, 15, 30, 40. Wynik 40-40 nazywany jest Deuce i wymaga wygrania 2 kolejnych punktów. Set wygrywa pierwszy gracz, który wygra 6 gier przewagą 2 gier. Przy wyniku 6-6 rozgrywany jest tiebreak.',
  },
  {
    question: 'Jak korzystać z tej tablicy wyników?',
    answer: 'Naciśnij przycisk plus dla gracza, gdy zdobędzie punkt. Wynik aktualizuje się automatycznie. Licznik śledzi kolejność serwisu, wyniki gier, bieżące sety i historię zakończonych setów.',
  },
  {
    question: 'Kiedy tenisiści zmieniają strony?',
    answer: 'Tenisiści zmieniają strony po pierwszym, trzecim i każdym kolejnym nieparzystym game każdego seta. Zmieniają także na koniec seta, chyba że łączna liczba gier jest parzysta. W tiebreaku gracze zmieniają strony co 6 punktów.',
  },
  {
    question: 'Czy ta tablica obsługuje tiebreak?',
    answer: 'Tak, gdy set osiągnie 6-6, licznik automatycznie przechodzi w tryb tiebreaka, gdzie punkty liczone są numerycznie do 7. Gracz musi wygrać różnicą 2 punktów, aby zakończyć tiebreak i seta.',
  },
  {
    question: 'Czy mogę używać tego na telefonie?',
    answer: 'Tak, interfejs jest zoptymalizowany pod kątem urządzeń mobilnych z dużymi przyciskami. Możesz także włączyć tryb pełnoekranowy, aby ekran nie gasł podczas meczu.',
  },
];

const howToData = [
  {
    name: 'Ustaw nazwy graczy',
    text: 'Dotknij pól wprowadzania nazw, aby wpisać własne nazwy. Są zapisywane w przeglądarce.',
  },
  {
    name: 'Dodawaj punkty',
    text: 'Kliknij przycisk plus gracza, który wygrał wymianę. Wynik zaktualizuje się automatycznie.',
  },
  {
    name: 'Zarządzaj wynikami setów',
    text: 'Tracker automatycznie kończy game i sety. Archiwizuje zakończone sety i przechodzi do następnego seta.',
  },
  {
    name: 'Zmień strony',
    text: 'Tablica ostrzega, gdy gracze muszą zmienić strony. Naciśnij przycisk zamiany, aby odwrócić strony wizualne.',
  },
  {
    name: 'Zakończenie meczu',
    text: 'Tracker automatycznie kończy mecz zgodnie z zasadami tenisa i ogłasza zwycięzcę.',
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
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Darmowy Licznik Tenisa Online i Tracker Meczów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Liczenie punktów w tenisie może być wyzwaniem z terminami takimi jak deuce, advantage i tiebreak. Ten darmowy licznik tenisa online w pełni automatyzuje proces. Wystarczy nacisnąć przycisk plus, gdy gracz zdobędzie punkt. Narzędzie zarządza punktami, grami, setami i zmianami stron automatycznie w czasie rzeczywistym.',
    },
    {
      type: 'title',
      text: 'Jak działa punktacja tenisa w tym liczniku',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenis używa unikalnej struktury punktacji. Standardowy game przechodzi przez Love, 15, 30, 40 i Game. Gdy obaj gracze osiągną 40, wynik to Deuce. Od Deuce gracz musi zdobyć dwa kolejne punkty, aby wygrać game. Pierwszy punkt to Advantage, a następny punkt zapewnia wygraną w game. Jeśli przeciwnik wygra następny punkt, wynik wraca do Deuce. Sety wygrywa pierwszy gracz, który wygra 6 gier przewagą 2. Gdy set osiągnie 6-6, rozgrywany jest tiebreak do 7 punktów.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Mecze Towarzyskie',
          description: 'Szybkie i łatwe liczenie do luźnych meczów tenisa ze znajomymi.',
          icon: 'mdi:tennis',
          points: ['Punktacja jednym dotknięciem', 'Wskaźnik zmiany strony', 'Działa offline'],
        },
        {
          title: 'Gra Klubowa',
          description: 'Idealne śledzenie dla meczów klubowych i turniejów.',
          icon: 'mdi:trophy-outline',
          points: ['Archiwum historii setów', 'Best of 3 lub 5 setów', 'Przyjazny dla urządzeń mobilnych'],
        },
        {
          title: 'Tryb Turniejowy',
          description: 'Zaprojektowany do oficjalnego śledzenia meczów i użycia sędziowskiego.',
          icon: 'mdi:school',
          points: ['Obsługa tiebreak', 'Pełnoekranowa tablica', 'Bezpieczeństwo danych lokalnych'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Specjalne funkcje licznika',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatyczna logika zasad tenisa</strong> oblicza Love, 15, 30, 40, deuce, advantage i tiebreak automatycznie.',
        '<strong>Archiwum historii setów</strong> pokazuje wyniki poprzednich setów na pierwszy rzut oka.',
        '<strong>Pomoc przy zmianie stron</strong> informuje graczy, gdy muszą zmienić strony.',
        '<strong>Żywe celebracje punktów</strong> wyświetla unoszące się cząsteczki za zdobyte punkty.',
        '<strong>Best of 3 lub 5 setów</strong> konfigurowalne ustawienia formatu meczu.',
        '<strong>Nazwy zapisane lokalnie</strong> przechowuje niestandardowe nazwy między wizytami.',
      ],
    },
    {
      type: 'title',
      text: 'Cyfrowe Liczenie a Ręczne Śledzenie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ręczne tablice wyników wymagają ciągłej koncentracji, aby aktualizować liczby, pamiętać kolejność serwisu, sprawdzać tiebreak i obliczać zmiany stron. Ten cyfrowy licznik tenisa automatycznie obsługuje każdą regułę tenisa. Możesz w pełni skoncentrować się na meczu, podczas gdy narzędzie aktualizuje historie setów i ogłasza zwycięzcę z ceremonią świętowania.',
    },
  ],
  ui: {
    playerA: 'Gracz 1',
    playerB: 'Gracz 2',
    winnerLabel: 'MISTRZ',
    finishMatch: 'Zakończ mecz',
    newGame: 'Nowy set',
    serving: 'Serwuje',
    changeSide: 'Zmień strony',
    swapHint: 'Dotknij, aby zmienić strony',
    game: 'Game',
    set: 'Set',
    gamePoint: 'Punkt gry',
    setPoint: 'Punkt setowy',
    matchPoint: 'Punkt meczowy',
    mode: 'Sety',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Punkty',
    reset: 'Resetuj',
    resetConfirm: 'Zresetować mecz? Wszystkie dane zostaną utracone.',
    cancel: 'Anuluj',
    fullscreen: 'Pełny ekran',
    exitFullscreen: 'Zamknij pełny ekran',
    deuce: 'Deuce',
    advantage: 'Przewaga',
    tiebreak: 'Tiebreak',
  },
};
