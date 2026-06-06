import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'licznik-punktow-padla';
const title = 'Profesjonalny Licznik Punktów w Padelu : Złoty Punkt i Rotacja Serwisu';
const description = 'Śledź wyniki w padelu z oficjalną zasadą Punto de Oro (Złoty Punkt), alertami rotacji serwisu, tie-breakami i dynamiczną animacją zmiany stron.';

const faq = [
  {
    question: 'Czym jest Złoty Punkt (Punto de Oro) w padelu?',
    answer: 'Złoty Punkt to decydujący punkt rozgrywany, gdy wynik osiągnie 40-40 (równowaga). Nie gra się przewag. Drużyna przyjmująca wybiera, czy chce przyjmować serwis z lewej czy prawej strony, a kto wygra ten jeden punkt, wygrywa całego gema.',
  },
  {
    question: 'Jak działają formaty setów w padelu?',
    answer: 'Standardowe mecze rozgrywane są do 2 wygranych setów, a każdy set wygrywa drużyna, która pierwsza osiągnie 6 gemów (prowadząc różnicą 2). Przy wyniku 6-6 rozgrywany jest tie-break do 7 punktów. Opcjonalny format Golden Set kończy się przy 4 gemach z tie-breakiem przy 4-4.',
  },
  {
    question: 'Kiedy zawodnicy zmieniają strony w padelu?',
    answer: 'Zawodnicy zmieniają strony po pierwszym gemie, a następnie co 2 gemy (gdy suma gemów w bieżącym secie jest nieparzysta, np. 1, 3, 5). Podczas tie-breaków zawodnicy zmieniają strony co 6 punktów.',
  },
];

const howTo = [
  {
    name: 'Skonfiguruj Format Meczu',
    text: 'Wybierz standardowy format meczu (pierwszy do 6 gemów) lub krótszy format golden set (pierwszy do 4 gemów).',
  },
  {
    name: 'Wprowadź Nazwy Zawodników',
    text: 'Wpisz nazwy drużyn, aby spersonalizować tablicę wyników. Twoje ustawienia są zapisywane automatycznie.',
  },
  {
    name: 'Zapisuj Punkty na Korcie',
    text: 'Dotknij dowolną stronę wizualnego izometrycznego kortu do padla, aby zdobywać punkty. Wskaźniki serwisu poprowadzą cię przez diagonalne rotacje.',
  },
  {
    name: 'Rozstrzygaj Złote Punkty',
    text: 'Gdy osiągnięta zostanie równowaga, wybierz stronę przyjmującą (lewy lub prawy odbierający) i kliknij zwycięską drużynę, aby zakończyć gema.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Darmowa Tablica Wyników i Traker Meczu Padla Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Śledzenie wyników w padelu może być mylące przy szybkich wymianach, tie-breakach, zmianach stron i oficjalnej zasadzie Punto de Oro (Złoty Punkt). Ta darmowa tablica wyników padla online zdejmuje z ciebie ciężar liczenia punktów. Po prostu dotknij wizualny kort, aby zalogować punkty, a narzędzie automatycznie zarządza rotacjami serwisu, stronami odbierającymi, historią setów i zmianami stron w czasie rzeczywistym.',
    },
    {
      type: 'title',
      text: 'Zrozumienie Punktacji w Padelu, Złotych Punktów i Rotacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Padel stosuje standardową punktację podobną do tenisa (15, 30, 40, Gem), ale wprowadza specyficzne zasady dla szybszej gry. Zgodnie z profesjonalnymi zasadami FIP, gdy wynik osiągnie 40-40, rozgrywany jest decydujący Złoty Punkt (Punto de Oro). Drużyna przyjmująca wybiera, która strona (lewa lub prawa) będzie odbierać serwis, a zwycięzca tego pojedynczego punktu wygrywa gema. Ponadto drużyny muszą zamieniać się stronami kortu, gdy suma rozegranych gemów w secie jest nieparzysta, oraz co 6 punktów podczas tie-breaka.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Mecze Towarzyskie',
          description: 'Szybkie i przejrzyste liczenie punktów w meczach towarzyskich z partnerami od padla.',
          icon: 'mdi:tennis',
          points: ['Dodawanie punktu jednym dotknięciem', 'Układ mobilny', 'Działa offline w podróży'],
        },
        {
          title: 'Klub i Liga',
          description: 'Z łatwością śledź wyniki meczów klubowych i lokalnych turniejów.',
          icon: 'mdi:trophy-outline',
          points: ['Archiwum historii setów', 'Sety 6- lub 4-gemowe', 'Obsługa Punto de Oro'],
        },
        {
          title: 'Tryb Sędziowski',
          description: 'W pełni funkcjonalne narzędzie do sędziowania oficjalnych meczów lub sesji treningowych.',
          icon: 'mdi:school',
          points: ['Aktywne znaczniki serwisu i odbioru', 'Interaktywna rotacja kortu', 'Tryb konsoli na pełnym ekranie'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Zaawansowane Funkcje Cyfrowe dla Graczy Padla',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Oficjalna Logika Punto de Oro</strong> pozwala drużynie przyjmującej wybrać stronę odbierającego przy równowadze, pokazując ścieżkę serwisu.',
        '<strong>Wizualny Wskaźnik Kortu</strong> dynamicznie pokazuje pozycje serwującego (S) i odbierającego (R), aby uniknąć błędów rotacji.',
        '<strong>Automatyczna Zmiana Stron</strong> odwraca układ kortu przy nieparzystych gemach lub interwałach tie-break, aby zawsze pasował do twojego fizycznego widoku.',
        '<strong>Niestandardowe Formaty Setów</strong> obsługuje standardowe 6-gemowe sety lub szybkie 4-gemowe Golden Sety.',
        '<strong>Automatyczne Zapisywanie w Przeglądarce</strong> przechowuje nazwy graczy i bieżące wyniki meczu nawet po odświeżeniu strony.',
      ],
    },
    {
      type: 'title',
      text: 'Zasady Tie-breaka w Padelu: Standardowy vs Super Tie-break',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W standardowych setach padla, gdy wynik osiągnie 6-6 w gemach, rozgrywany jest standardowy tie-break do 7 punktów. W tie-breaku punkty liczone są numerycznie (1, 2, 3, itd.). Pierwsza drużyna, która osiągnie 7 punktów z przewagą 2, wygrywa seta. Zawodnik, którego kolejka przypada na serwis, podaje pierwszy punkt z prawej (deuce) strony. Następnie każdy zawodnik serwuje przez dwa kolejne punkty, zaczynając od lewej (przewaga) strony. W niektórych formatach turniejowych, gdy mecz jest remisowy 1-1 w setach, rozgrywany jest 10-punktowy Super Tie-break zamiast pełnego trzeciego seta, aby rozstrzygnąć mecz.',
    },
    {
      type: 'title',
      text: 'Zmiana Stron i Rotacje: Utrzymywanie Sprawiedliwości w Padelu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zmiana stron jest niezbędna w padelu, aby czynniki środowiskowe, takie jak słońce, wiatr czy niedoskonałości kortu, nie faworyzowały jednej drużyny nad drugą. Zawodnicy muszą zamieniać się stronami kortu po pierwszym gemie każdego seta, a następnie co dwa gemy (np. przy 1-0, 2-1, 3-2, 4-3, 5-4). Nasza cyfrowa tablica wyników padla posiada dynamiczną animację zmiany stron, która automatycznie obraca wizualny układ kortu o 180 stopni, gdy zawodnicy muszą fizycznie zmienić strony. Gwarantuje to, że drużyna wyświetlana na górze ekranu zawsze odpowiada drużynie grającej na dalekim końcu fizycznego kortu.',
    },
    {
      type: 'title',
      text: 'Standardowe Sety a Format Golden Sets',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Podczas gdy standardowe mecze rozgrywane są do 6 gemów na set, wiele lig rekreacyjnych i szybkich turniejów przyjmuje format "Golden Set", w którym sety rozgrywane są tylko do 4 gemów (z tie-breakiem przy 4-4). Ta tablica wyników pozwala przełączać się między tymi formatami jednym dotknięciem w pasku narzędzi. Niezależnie od wybranego formatu, tablica automatycznie obsługuje wszystkie tie-breaki, rotacje serwisu i obliczenia wyników.',
    },
    {
      type: 'title',
      text: 'Porady Efektywnego Liczenia Punktów na Korcie',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Użyj Stojaka na Kort lub Uchwytu na Telefon:</strong> Zamontuj telefon lub tablet na ogrodzeniu kortu padla na wysokości siatki. Pozwala to graczom z obu stron łatwo widzieć aktualny wynik i wskaźniki serwisu.',
        '<strong>Spersonalizuj Nazwy Przed Rozpoczęciem:</strong> Poświęć 10 sekund na wpisanie rzeczywistych nazw graczy lub drużyn. To sprawia, że komunikaty głosowe (jeśli włączone) i wizualna tablica wyników są znacznie bardziej angażujące i oficjalne.',
        '<strong>Włącz Tryb Pełnoekranowy:</strong> Kliknij przycisk pełnego ekranu w panelu nagłówka. Maksymalizuje to interfejs tablicy wyników i pomaga zapobiec automatycznemu wyłączaniu się ekranu podczas długich wymian.',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Warto Używać Cyfrowego Licznika Punktów w Padelu?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zamiast ciągle kłócić się o to, kto serwuje, czyja kolej na odbiór lub jaki jest wynik gema, cyfrowy tracker utrzymuje wszystkich w zgodzie. Wizualnie renderując pozycje serwującego i odbierającego bezpośrednio na ekranie, gracze mogą szybko rzucić okiem na telefon na ławce i wiedzieć dokładnie, gdzie mają stać. To poprawia tempo gry i zapobiega błędom rotacji.',
    },
  ],
  ui: {
    playerA: 'Drużyna 1',
    playerB: 'Drużyna 2',
    game: 'Gem',
    set: 'Set',
    tiebreak: 'Tie-break',
    goldPoint: 'Złoty Punkt',
    selectReceiver: 'Wybierz Odbierającego',
    leftReceiver: 'Lewy Odbierający',
    rightReceiver: 'Prawy Odbierający',
    server: 'Serwujący',
    receiver: 'Odbierający',
    changeEnds: 'Zmień Strony',
    matchWon: 'Mecz Wygrany',
    reset: 'Reset',
    resetConfirm: 'Zresetować mecz? Wszystkie dane zostaną utracone.',
    cancel: 'Anuluj',
    fullscreen: 'Pełny Ekran',
    exitFullscreen: 'Zamknij Pełny Ekran',
    deuce: 'Równowaga',
    advantage: 'Przewaga',
    formatStandard: '6 Gemów',
    formatGoldenSet: '4 Gemy',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Złoty Punkt Decydujący',
  },
};
