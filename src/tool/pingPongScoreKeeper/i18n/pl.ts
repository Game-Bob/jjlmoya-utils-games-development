import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'licznik-ping-ponga';
const title = 'Licznik Ping Ponga Online : Darmowy Tracker Tenisa Stołowego';
const description =
  'Śledź mecze tenisa stołowego z punktacją gier i setów. Darmowy licznik ping ponga online do gier towarzyskich i turniejów. Bez rejestracji.';

const faqData = [
  {
    question: 'Jak działa punktacja w ping ponga?',
    answer:
      'Standardowa gra w ping ponga rozgrywana jest do 11 punktów. Musisz wygrać różnicą 2 punktów. Jeśli wynik osiągnie 10-10, gra toczy się dalej, aż ktoś prowadzi różnicą 2 punktów. Serwer zmienia się co 2 punkty. Ten licznik śledzi to wszystko automatycznie.',
  },
  {
    question: 'Jak korzystać z tego licznika?',
    answer:
      'Naciśnij przycisk + pod każdym graczem, aby dodać punkt. Wynik gry aktualizuje się automatycznie. Gdy gracz osiągnie 11 punktów z przewagą 2 punktów, gra kończy się i zaczyna nowa. Licznik wygranych gier śledzi, ile gier wygrał każdy gracz. Naciśnij Zakończ mecz, gdy mecz się skończy.',
  },
  {
    question: 'Jak działa wskaźnik serwisu?',
    answer:
      'Serwer zmienia się co 2 punkty. Kropka pojawia się obok gracza, który serwuje. Jest to zgodne z oficjalnymi zasadami tenisa stołowego. W każdej chwili podczas meczu możesz sprawdzić, kto powinien serwować.',
  },
  {
    question: 'Czy mogę go używać na telefonie podczas meczu?',
    answer:
      'Tak. Interfejs jest przyjazny dla urządzeń mobilnych z dużymi przyciskami. Tryb pełnoekranowy ukrywa przeglądarkę i utrzymuje ekran włączony.',
  },
  {
    question: 'Czy zapisuje dane meczu?',
    answer:
      'Tak. Aktualny wynik, wygrane gry i nazwy graczy są automatycznie zapisywane w przeglądarce.',
  },
];

const howToData = [
  {
    name: 'Nazwij graczy',
    text: 'Dotknij domyślnej nazwy gracza i wpisz własną. Nazwy są zapisywane automatycznie.',
  },
  {
    name: 'Dodaj punkt',
    text: 'Naciśnij duży okrągły przycisk + gracza, który zdobył punkt. Wynik aktualizuje się z animacją świętowania.',
  },
  {
    name: 'Usuń punkt',
    text: 'Naciśnij przycisk minus, jeśli dodałeś punkt przez pomyłkę.',
  },
  {
    name: 'Rozpocznij nową grę',
    text: 'Gdy gra się zakończy, naciśnij Nowa gra, aby rozpocząć następną. Lub naciśnij Zakończ mecz, aby zakończyć spotkanie.',
  },
  {
    name: 'Zakończ mecz',
    text: 'Naciśnij Zakończ mecz, aby zobaczyć zwycięzcę ogłoszonego z trofeum i konfetti.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Darmowy Licznik Ping Ponga Online : Tracker Meczów Tenisa Stołowego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Liczenie punktów w ping ponga powinno być proste, ale zasady mogą być mylące. Kto serwuje następny? Czy jest 10-10 czy 11-9? Ile gier wygrał każdy gracz? Ten darmowy licznik ping ponga online robi to wszystko automatycznie. Wystarczy nacisnąć przycisk +, gdy ktoś zdobędzie punkt. Licznik śledzi punkty na grę, wygrane gry w meczu i kto serwuje. Wszystko aktualizuje się w czasie rzeczywistym z animacjami świętowania, które sprawiają, że każdy punkt ma znaczenie. Bez rejestracji, bez pobierania, bez skomplikowanych menu.',
    },
    {
      type: 'title',
      text: 'Jak działa punktacja ping ponga w tym liczniku',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenis stołowy opiera się na standardowym systemie punktacji. Każda gra rozgrywana jest do 11 punktów. Gracz musi wygrać różnicą 2 punktów, więc jeśli wynik osiągnie 10-10, gra toczy się dalej, aż ktoś prowadzi różnicą 2 punktów. Serwer zmienia się co 2 punkty podczas gry. Ten licznik automatycznie śledzi wszystkie te zasady. Nie musisz pamiętać, kto serwuje ani kiedy zmienić. Wskaźnik serwisu pokazuje kropkę przy aktualnym serwerze. Gdy gracz wygra grę, licznik automatycznie przechodzi do następnej gry. Licznik wygranych gier zwiększa się dla zwycięzcy. Mecz może mieć dowolną liczbę gier, ale zazwyczaj jest to best of 5 lub 7. Naciśnij Zakończ mecz, gdy mecz się zakończy, a zwycięzca zostanie ogłoszony z uroczystością.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Gry Towarzyskie',
          description: 'Szybkie i łatwe liczenie punktów do luźnych gier w ping ponga ze znajomymi. Automatyczne śledzenie gier i meczów.',
          icon: 'mdi:table-tennis',
          points: ['Jeden dotyk na punkt', 'Automatyczne śledzenie serwisu', 'Działa offline'],
        },
        {
          title: 'Klub i Liga',
          description: 'Prowadź czysty zapis gier i wyników meczów. Idealny do turniejów klubowych i rozgrywek ligowych.',
          icon: 'mdi:trophy-outline',
          points: ['Śledzenie wygranych gier', 'Obsługa best of 5 lub 7', 'Przyjazny dla urządzeń mobilnych'],
        },
        {
          title: 'Turnieje',
          description: 'Śledź wiele meczów w turnieju. Szybki reset między spotkaniami.',
          icon: 'mdi:school',
          points: ['Szybki reset meczu', 'Zachowanie wyniku', 'Tryb pełnoekranowy'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Co wyróżnia ten licznik ping ponga',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Automatyczne liczenie</strong> licznik zna zasady ping ponga. Gry do 11, wygrana różnicą 2 punktów, automatyczne zmiany serwisu.',
        '<strong>Śledzenie wygranych gier</strong> każda wygrana gra jest rejestrowana. Zobacz na pierwszy rzut oka, ile gier każdy gracz wygrał w meczu.',
        '<strong>Wskaźnik serwisu</strong> widoczna kropka pokazuje, który gracz serwuje, zgodnie z zasadą rotacji co 2 punkty.',
        '<strong>Animacje świętowania</strong> każdy punkt uruchamia losową animację. Osiem różnych efektów sprawia, że każdy punkt jest ekscytujący.',
        '<strong>Unoszące się cząsteczki</strong> każdy zdobyty punkt generuje unoszący się tekst świętujący tę chwilę.',
        '<strong>Ceremonia zakończenia meczu</strong> naciśnij Zakończ mecz, aby uruchomić ogłoszenie zwycięzcy z trofeum i konfetti.',
        '<strong>Edytowalne nazwy graczy</strong> dotknij pola nazwy, aby zmienić imiona graczy. Nazwy są zapisywane w przeglądarce.',
        '<strong>Tryb pełnoekranowy</strong> ukrywa interfejs przeglądarki, aby tablica wyników wypełniła ekran i utrzymywała go włączonym.',
        '<strong>Offline first</strong> działa bez internetu. Żadnych reklam, śledzenia ani zbierania danych.',
      ],
    },
    {
      type: 'title',
      text: 'Licznik Ping Ponga a Ręczne Liczenie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ręczne liczenie w ping ponga wymaga śledzenia wyniku, pamiętania, kto serwuje, wiedzy, kiedy zmienić serwera i liczenia wygranych gier. Łatwo stracić orientację, zwłaszcza w szybkiej grze. Ten cyfrowy licznik robi wszystko automatycznie. Wystarczy nacisnąć przycisk, gdy padnie punkt. Licznik śledzi wynik gry, wykrywa, kiedy gra jest wygrana, rejestruje wygrane gry w meczu i pokazuje, kto serwuje. Każdy punkt jest świętowany animacjami i cząsteczkami. Wynik nigdy się nie myli i nigdy nie przegapisz zmiany serwisu. Niezależnie od tego, czy grasz luźną grę ze znajomymi, czy bierzesz udział w turnieju, ten darmowy licznik ping ponga online daje ci wszystko, czego potrzebujesz.',
    },
  ],
  ui: {
    playerA: 'Gracz 1',
    playerB: 'Gracz 2',
    winnerLabel: 'MISTRZ',
    finishMatch: 'Zakończ mecz',
    newGame: 'Nowa gra',
    serving: 'Serwuje',
    changeSide: 'Zmień strony',
    swapHint: 'Dotknij, aby zamienić',
    game: 'Gra',
    set: 'Set',
    gamePoint: 'Punkt gry',
    matchPoint: 'Punkt meczowy',
    mode: 'Format',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Punkty',
    reset: 'Resetuj',
    resetConfirm: 'Zresetować mecz? Wszystkie dane zostaną utracone.',
    cancel: 'Anuluj',
    fullscreen: 'Pełny ekran',
    exitFullscreen: 'Zamknij pełny ekran',
  },
};
