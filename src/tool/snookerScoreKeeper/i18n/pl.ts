import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'sledzenie-frameow-i-kalkulator-breaka-w-snookerze';
const title = 'Profesjonalny Rejestrator Frameów i Kalkulator Breaków w Snookera';
const description = 'Śledź wyniki frameów snookera na żywo, oblicz aktualną wartość breaka, wyświetlaj pozostałe punkty na stole i uzyskaj status deficytu w czasie rzeczywistym, w tym informację o potrzebie snookera.';

const faqData = [
  {
    question: 'Jak obliczana jest maksymalna liczba pozostałych punktów na stole snookerowym?',
    answer: 'Każda pozostała bila czerwona jest warta 8 punktów (1 punkt za czerwoną oraz 7 punktów za wbicie czarnej bili). Po wbiciu wszystkich czerwonych, pozostałe bile kolorowe są warte łącznie 27 punktów.',
  },
  {
    question: 'Co oznacza potrzeba snookera w tym kalkulatorze?',
    answer: 'Oznacza to, że deficyt punktowy jest większy niż suma pozostałych punktów na stole, więc zawodnik musi wymusić faul u przeciwnika, aby dogonić stratę.',
  },
  {
    question: 'Co to jest sytuacja decydującej czarnej bili?',
    answer: 'Scenariusz decydującej czarnej ma miejsce, gdy wszystkie bile zostały wbite, a wynik framea jest remisowy, wymagając ponownego ustawienia czarnej bili w celu wyłonienia zwycięzcy.',
  },
];

const howToData = [
  {
    name: 'Konfiguracja Nazw Zawodników',
    text: 'Wprowadź własne nazwy dwóch graczy snookera, aby spersonalizować wyświetlanie tablicy wyników.',
  },
  {
    name: 'Wbijaj Bile i Buduj Break',
    text: 'Dotknij świecących bil o filcowej fakturze, aby rejestrować wbite bile w odpowiedniej kolejności. Kalkulator blokuje nieodpowiednie kolory zgodnie z zasadami.',
  },
  {
    name: 'Sprawdź Status Deficyty',
    text: 'Monitoruj pasek statusu na żywo, aby sprawdzić, czy zawodnik jest bezpieczny, potrzebuje snookera, czy frame jest wciąż otwarty.',
  },
  {
    name: 'Rejestruj Faul i Punkty Karne',
    text: 'Otwórz menu fauli, aby przypisać punkty karne bezpośrednio przeciwnikowi i zmienić aktywnego zawodnika.',
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

export const content: SnookerScoreKeeperLocaleContent = {
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
      text: 'Darmowy Tablicę Wyników Snookera i Licznik Breaków Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uprość swoje frame snookera dzięki naszej cyfrowej tablicy wyników. Narzędzie oblicza aktywne punkty breaka, pozostałe punkty na stole oraz wyświetla dokładną różnicę punktów. Interfejs stylizowany na filc zapewnia interaktywne wskaźniki, które podświetlają się dynamicznie zgodnie z sekwencjami zasad snookera. Niezależnie od tego, czy sędziujesz turniej w lokalnym klubie, czy śledzisz przyjacielskie rozgrywki w domu, ta aplikacja automatycznie wykonuje wszystkie obliczenia.',
    },
    {
      type: 'title',
      text: 'Zrozumienie Punktacji w Snookerze i Obliczeń Deficyty',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Standardowa gra w snookera zaczyna się od piętnastu czerwonych bil wartych jeden punkt każda. Zawodnicy muszą na zmianę wbijać bilę czerwoną i kolorową. Każda wbita bila kolorowa wraca na swoje miejsce, dopóki wszystkie czerwone nie znikną. Następnie bile kolorowe muszą być wbijane w kolejności numerycznej od żółtej do czarnej. Ten kalkulator śledzi sekwencję i ostrzega, gdy wymagane są snookery. Obliczając różnicę punktów i maksymalną liczbę punktów pozostałych na stole, dokładnie określa, kiedy frame osiągnął próg zwycięstwa.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tablica Wyników Framea',
          description: 'Śledź wyniki frameów i tury graczy na wyświetlaczu o wysokim kontraście.',
          icon: 'mdi:scoreboard-outline',
          points: ['Wyraźne podświetlenie aktywnego gracza', 'Możliwość wprowadzenia własnych nazw', 'Cofanie jednym kliknięciem'],
        },
        {
          title: 'Kalkulator Breaka',
          description: 'Śledzenie aktywnych breaków w czasie rzeczywistym z rejestrem kolorów bil.',
          icon: 'mdi:billiards',
          points: ['Oś czasu wbitych bil', 'Automatyczne blokowanie bil zgodnie z zasadami', 'Status breaka oznaczony kolorami'],
        },
        {
          title: 'Wskaźniki Pozostałych Punktów',
          description: 'Śledź maksymalną liczbę punktów pozostałych na zielonym stole.',
          icon: 'mdi:percent-outline',
          points: ['Śledzenie różnicy punktów', 'Dynamiczne ostrzeżenia o potrzebie snookera', 'Wykrywanie decydującej czarnej'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktywne Sterowanie i Dźwięk Informacja Zwrotna',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Dotykowy HUD z Filcu</strong> umożliwia dotykanie bil w celu dodawania punktów i rejestrowanie ich na osi czasu breaka.',
        '<strong>Przyciski Akcji Faulu</strong> dodają od czterech do siedmiu punktów karnych do wyniku przeciwnika i kończą aktywną turę.',
        '<strong>Dynamiczny Wskaźnik Statusu</strong> aktualizuje się, aby wskazać normalną grę, bezpieczny margines lub potrzebę snookera.',
        '<strong>Synteza Audio</strong> odtwarza dźwięk wbicia przy punktowaniu oraz brzęczyk przy faulu.',
      ],
    },
    {
      type: 'title',
      text: 'Zasady Fauli w Snookerze i Systemy Kar Wyjaśnione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Faule w snookerze przyznają punkty przeciwnikowi. Wartość kary jest określana przez wartość bili docelowej lub bili zaangażowanej w faul, z minimalną karą czterech punktów. Na przykład wbicie białej bili, uderzenie kolorowej zamiast czerwonej jako pierwszej lub nieudane uderzenie jakiejkolwiek bili skutkuje karą. Jeśli faul zostanie popełniony przy celowaniu w niebieską, różową lub czarną, kara wynosi odpowiednio pięć, sześć lub siedem punktów. Ta cyfrowa tablica wyników zawiera szybki panel fauli, aby łatwo dodawać wartości kar i automatycznie przenosić aktywną turę do następnego gracza.',
    },
    {
      type: 'title',
      text: 'Co Dzieje się w Scenariuszu Decydującej Czarnej Bili',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gdy wszystkie bile zostały wbite, a wynik framea jest remisowy, czarna bila jest ponownie ustawiana na swojej pierwotnej pozycji. Zawodnicy losują, kto zagra pierwszy, a pierwszy zawodnik, który wbije czarną lub popełni faul, przegrywa frame. Ta zasada decydującej czarnej zapewnia sprawiedliwe rozstrzygnięcie zaciętych gier bez konieczności rozgrywania dodatkowych full frameów, a nasz rejestrator automatycznie wykrywa ten stan remisowy, aby powiadomić obu graczy.',
    },
    {
      type: 'title',
      text: 'Dlaczego Warto Używać Cyfrowego Rejestratora Snookera',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ręczne obliczanie pozostałych punktów i marginesów deficytu podczas zaciętych frameów jest podatne na błędy ludzkie. To narzędzie przeglądarkowe zapewnia dokładne statystyki w czasie rzeczywistym, pozwalając graczom skupić się na technice i strategii. Dzięki interaktywnej osi czasu wbitych bil sędziowie mogą łatwo weryfikować kontrowersyjne breaki i utrzymywać ciągłość oficjalnego meczu.',
    },
  ],
  ui: {
    title: 'Tablica Wyników Snookera',
    description: 'Śledź wyniki frameów i breaki.',
    player1: 'Gracz 1',
    player2: 'Gracz 2',
    score: 'Wynik',
    currentBreak: 'Break',
    remainingPoints: 'Pozostało',
    deficit: 'Deficyt',
    statusSafe: 'Bezpieczny',
    statusNeedSnookers: 'Potrzebny Snooker',
    statusDecidingBlack: 'Decydująca Czarna',
    statusNormal: 'Normalny',
    foul: 'Faul',
    foulTitle: 'Wybierz Karę za Faul',
    foulPoints: 'Kara',
    foulOnRed: 'Czerwona/Żółta/Zielona/Brązowa',
    foulOnYellow: 'Żółta',
    foulOnGreen: 'Zielona',
    foulOnBrown: 'Brązowa',
    foulOnBlue: 'Niebieska',
    foulOnPink: 'Różowa',
    foulOnBlack: 'Czarna',
    reset: 'Resetuj',
    resetConfirm: 'Zresetować obecny frame? Wszystkie wyniki zostaną utracone.',
    cancel: 'Anuluj',
    confirm: 'Potwierdź Reset',
    endTurn: 'Zakończ Turę',
    miss: 'Pudło',
    redsRemaining: 'Czerwone',
    pocketedBalls: 'Wbite',
    toggleSound: 'Dźwięk',
    fullscreen: 'Pełny Ekran',
  },
};
