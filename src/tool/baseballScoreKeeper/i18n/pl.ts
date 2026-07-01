import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'licznik-punktow-baseball';
const title = 'Profesjonalny Licznik Punktów w Baseballu i Softballu z Wizualizacją Diamentu';
const description = 'Śledź na żywo wyniki baseballu z punktami, uderzeniami i błędami. Wizualny diament z pozycjami biegaczy, licznikiem piłek i strike\'ów oraz historią inning po inningu.';

const faqData = [
  {
    question: 'Jak działa licznik w baseballu?',
    answer: 'Licznik pokazuje liczbę piłek i strike\'ów u aktualnego odbijającego. Piłki mogą iść do 4 dla spaceru. Strike\'i do 3 dla strikeoutu. Regulowane limity dla lig młodzieżowych.',
  },
  {
    question: 'Co pokazuje interaktywny diament baseballowy?',
    answer: 'Diament pokazuje pierwszą, drugą i trzecią bazę. Dotknięcie bazy podświetla ją na pomarańczowo, wskazując biegacza na tej bazie. Biegacze przesuwają się automatycznie po uderzeniach.',
  },
  {
    question: 'Jak śledzone są punkty, uderzenia i błędy?',
    answer: 'Macierz R H E wyświetla punkty, uderzenia i błędy dla obu drużyn. Historia inning po inningu pokazuje jak wynik budował się w całym meczu.',
  },
];

const howToData = [
  {
    name: 'Rejestruj Każdy Rzut',
    text: 'Kliknij Strike, Piłka, Foul, Uderzenie lub Aut aby zarejestrować każdy rzut. Licznik aktualizuje się automatycznie na podstawie wyniku.',
  },
  {
    name: 'Zarządzaj Biegaczami na Bazach',
    text: 'Kliknij bazy na diamencie aby ustawić lub usunąć biegaczy. Po uderzeniu biegacze przesuwają się automatycznie.',
  },
  {
    name: 'Śledź Postęp Inningu',
    text: 'Wyświetlacz inningu pokazuje aktualną połowę inningu. Po trzech autach gra automatycznie przełącza się między górną i dolną połową.',
  },
  {
    name: 'Przeglądaj Tabelę Wynikową',
    text: 'Sprawdź podsumowanie R H E oraz przewijaną siatkę historii inningów, aby zobaczyć pełny przebieg wyników.',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Licznik Punktów Baseball Online: Śledź Punkty, Uderzenia i Błędy z Diamentem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Potrzebujesz niezawodnego licznika punktów baseball na swój następny mecz? To bezpłatne narzędzie online śledzi punkty, uderzenia i błędy, wyświetlając interaktywny diament z pozycjami biegaczy w czasie rzeczywistym. Każdy rzut ma znaczenie, a nasza cyfrowa tablica wyników zapewnia, że nigdy nie stracisz licznika, autów ani inningu. Bez względu na to, czy trenujesz ligę młodzieżową, prowadzisz wynik w turnieju softballu, czy zarządzasz meczem szkolnej drużyny, to narzędzie automatycznie obsłuży całą statystykę meczu, abyś mógł skupić się na grze na boisku.',
    },
    {
      type: 'title',
      text: 'Jak Ta Tablica Wyników Baseballu Oszczędza Ci Czas i Zapobiega Błędom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ręczne prowadzenie wyników jest podatne na błędy, szczególnie podczas szybkich meczów. Jeden przegapiony strike lub pominięty biegacz może zaburzyć całą statystykę. Ten cyfrowy licznik automatyzuje nudne części. Kliknij Strike, Piłka, Foul, Uderzenie lub Aut, a tablica natychmiast aktualizuje licznik. Gdy odbijający otrzyma spacer lub zostanie wyautowany przez strikeout, narzędzie automatycznie resetuje licznik. Po trzech autach przełącza inning z górnej na dolną połowę i rejestruje punkty. Macierz R H E i siatka historii inning po inningu dają pełny obraz gry na pierwszy rzut oka.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Licznik Rzutów na Żywo',
          description: 'Automatyczne śledzenie piłek i strike\'ów z wykrywaniem spaceru i strikeoutu dla każdego podejścia.',
          icon: 'mdi:baseball',
          points: ['Piłki liczone do 4', 'Strike\'i liczone do 3', 'Auto reset po decyzji'],
        },
        {
          title: 'Zarządzanie Biegaczami',
          description: 'Interaktywny diament pokazuje dokładnie kto jest na pierwszej, drugiej lub trzeciej bazie.',
          icon: 'mdi:diamond-stone',
          points: ['Kliknij bazę aby ustawić biegacza', 'Wizualne podświetlenie gdy zajęta', 'Czyszczenie przy zmianie inningu'],
        },
        {
          title: 'Pełna Statystyka Meczu',
          description: 'Pełne statystyki R H E z przewijaną historią wyników inning po inningu.',
          icon: 'mdi:scoreboard-outline',
          points: ['Punkty, uderzenia i błędy', 'Siatka inning po inningu', 'Łączne sumy dla obu drużyn'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kto Potrzebuje Tego Licznika Wyników Baseballu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie jest stworzone dla każdego, kto musi prowadzić wynik: trenerów baseballu młodzieżowego, którzy chcą przejrzysty cyfrowy wyświetlacz dla swoich zawodników, wolontariuszy lig softballu, którzy prowadzą mecze bez dedykowanego osobowego, rodziców śledzących gry swoich dzieci z trybun oraz sędziów poszukujących pomocniczego systemu weryfikacji. Interfejs działa na każdym urządzeniu, od smartfonów trzymanych w dugout po tablety na płotkach i laptopy na ławce. Bez instalacji, po prostu otwórz przeglądarkę i zaczynaj punktować.',
    },
    {
      type: 'list',
      items: [
        '<strong>Automatyczne Zarządzanie Licznikiem:</strong> Piłki i strike\'i resetują się automatycznie po spacerach, strikeoutach, uderzeniach i autach. Ręczne resetowanie nie jest potrzebne.',
        '<strong>Diament z Obsługą Dotykową:</strong> Kliknij pierwszą, drugą lub trzecią bazę aby ustawić lub usunąć biegaczy. Diament podświetla się na złoto aby pokazać zajęte bazy.',
        '<strong>Wyniki Inning po Inningu:</strong> Każda połowa inningu jest rejestrowana w przewijanej siatce. Zobacz dokładnie jak każda drużyna zdobywała punkty we wszystkich dziewięciu inningach.',
        '<strong>Zero Konfiguracji:</strong> Otwórz stronę i zaczynaj punktować natychmiast. Zmieniaj nazwy drużyn dotykając etykiety nad wynikami.',
      ],
    },
    {
      type: 'title',
      text: 'Prowadzenie Wyników Baseballu Proste: Licznik, Diament i Statystyka w Jednym Miejscu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prowadzenie wyników w baseballu wymaga śledzenia wielu rzeczy jednocześnie: licznika piłek i strike\'ów, liczby autów, które bazy mają biegaczy, punktów dla każdej drużyny oraz bieżącego inningu. Utracenie którejkolwiek z tych informacji powoduje zamieszanie i niepoprawne zapisy. To narzędzie łączy wszystko w jednym ekranie. Kropki licznika pokazują piłki i strike\'i na pierwszy rzut oka. Diament pokazuje pozycje biegaczy. Tabela R H E wyświetla pełną statystykę meczu. A siatka inningów przewija się poziomo, pokazując pełną historię wyników. Wszystko aktualizuje się w czasie rzeczywistym z każdym dotknięciem.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Trenerzy', html: '<p>Miej przejrzystą cyfrową tablicę wyników widoczną dla całej drużyny z dugoutu.</p>' },
        { type: 'card', title: 'Wolontariusze', html: '<p>Nie potrzebujesz doświadczenia w prowadzeniu wyników. Narzędzie automatycznie obsługuje wszystkie skomplikowane śledzenie.</p>' },
        { type: 'card', title: 'Rodzice', html: '<p>Śledź grę z trybun dzięki niezawodnemu wyświetlaniu wyników na telefonie w czasie rzeczywistym.</p>' },
        { type: 'card', title: 'Zawodnicy', html: '<p>Przeglądaj wyniki inning po inningu po meczu, aby analizować wydajność.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Licznik Punktów Baseballu',
    description: 'Śledź punkty, uderzenia i błędy z widokiem diamentu.',
    away: 'Goście',
    home: 'Gospodarze',
    runs: 'P',
    hits: 'U',
    errors: 'B',
    inning: 'Inning',
    topInning: 'Góra',
    bottomInning: 'Dół',
    balls: 'Piłki',
    strikes: 'Strike\'i',
    outs: 'Auty',
    strikeBtn: 'Strike',
    ballBtn: 'Piłka',
    foulBtn: 'Foul',
    hitBtn: 'Uderzenie',
    outBtn: 'Aut',
    walkBtn: 'Spacer',
    runBtn: '+1 Punkt',
    errorBtn: 'Błąd',
    newBatter: 'Nowy Odbijający',
    resetMatch: 'Resetuj Mecz',
    resetConfirm: 'Zresetować bieżący mecz? Wszystkie wyniki zostaną utracone.',
    cancel: 'Anuluj',
    confirm: 'Potwierdź',
    total: 'Razem',
    fullscreen: 'Pełny Ekran',
    toggleSound: 'Włącz Wyłącz Dźwięk',
  },
};
