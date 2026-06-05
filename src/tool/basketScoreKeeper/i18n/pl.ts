import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'tablica-wynikow-koszykowka';
const title = 'Tablica Wyników Koszykówki Online : Darmowy Licznik Punktów';
const description =
  'Darmowa tablica wyników koszykówki online z przyciskami +1, +2 i +3. Zapisuj punkty w meczach towarzyskich, streetballu, na poziomie szkoły średniej i w lokalnych ligach. Bez rejestracji, bez pobierania, działa offline.';

const faqData = [
  {
    question: 'Jak zapisywać punkty w meczu koszykówki?',
    answer:
      'W koszykówce obowiązują trzy wartości punktowe: rzut wolny (+1 punkt), rzut z gry (+2 punkty) i rzut za trzy punkty (+3 punkty). Naciskaj odpowiedni przycisk za każdym razem, gdy drużyna zdobywa punkty. Tablica wyników automatycznie sumuje punkty. Aby poprawić pomyłkę, użyj przycisku minus obok wyniku.',
  },
  {
    question: 'Jaka jest różnica między +1, +2 i +3 w koszykówce?',
    answer:
      '+1 dotyczy rzutów wolnych przyznawanych po faulu. +2 to zwykły rzut z gry zdobyty z obrębu linii trzech punktów. +3 to rzuty oddane zza linii trzech punktów. Osobne przyciski dla każdej wartości pozwalają szybciej punktować i zmniejszają liczbę błędów w porównaniu ze zwykłym licznikiem.',
  },
  {
    question: 'Czy mogę używać tej tablicy wyników w prawdziwym meczu koszykówki?',
    answer:
      'Tak. Tablica wyników została zaprojektowana do prawdziwych meczów: koszykówki towarzyskiej, streetballu, meczów szkolnych, lokalnych lig i treningowych gier wewnętrznych. Zapisuje wynik w przeglądarce, więc możesz odświeżyć stronę bez utraty stanu gry.',
  },
  {
    question: 'Jak zapisywać punkty w streetballu lub meczach towarzyskich?',
    answer:
      'Streetball zwykle gra się do określonej liczby punktów (np. 21 lub 16) z punktacją 1 i 2 (lub tylko 1). Ta tablica wyników działa w każdym formacie. Używaj +1 za zwykłe kosze, +2 za rzuty zza łuku. Ustal własny warunek zwycięstwa i użyj przycisku minus, jeśli się pomylisz.',
  },
  {
    question: 'Czy działa offline na telefonie?',
    answer:
      'Tak. Po załadowaniu strony tablica wyników działa w pełni offline. Idealna na boiska zewnętrzne, sale gimnastyczne bez WiFi i wszędzie tam, gdzie sygnał jest słaby. Możesz też przejść w tryb pełnoekranowy, a ekran pozostanie włączony, więc nie zablokuje się podczas meczu.',
  },
  {
    question: 'Jak śledzić faule drużynowe i bonus?',
    answer:
      'Ta tablica wyników skupia się na samym wyniku. W przypadku fauli drużynowych możesz użyć pól nazw drużyn do ręcznego zapisywania fauli (np. zmień "GOSPODARZE" na "GOSPODARZE 3F"). Zalecamy łączenie tego narzędzia z osobnym licznikiem fauli w oficjalnych meczach.',
  },
  {
    question: 'Czy mogę używać tego licznika punktów koszykówki na telefonie?',
    answer:
      'Tak. Interfejs został zaprojektowany z myślą o urządzeniach mobilnych. Przyciski +1, +2 i +3 są duże i łatwe do naciśnięcia kciukiem. Tryb pełnoekranowy ukrywa interfejs przeglądarki, dzięki czemu tablica wyników zajmuje cały ekran, a blokada uśpienia zapobiega wyłączaniu się telefonu.',
  },
];

const howToData = [
  {
    name: 'Nazwij swoje drużyny',
    text: 'Naciśnij GOSPODARZE lub GOŚCIE, aby wprowadzić nazwy drużyn. Nazwy są automatycznie zapisywane w przeglądarce, więc pozostają nawet po odświeżeniu strony.',
  },
  {
    name: 'Zapisz rzut wolny (+1)',
    text: 'Naciśnij przycisk +1, gdy zawodnik wykona rzut wolny. Każdy rzut wolny jest wart jeden punkt i jest zwykle przyznawany po faulu.',
  },
  {
    name: 'Zapisz rzut z gry (+2)',
    text: 'Naciśnij przycisk +2 za zwykły kosz z obrębu linii trzech punktów. To najczęstsza akcja punktowa w koszykówce.',
  },
  {
    name: 'Zapisz rzut za trzy punkty (+3)',
    text: 'Naciśnij przycisk +3, gdy zawodnik zdobędzie punkty zza linii trzech punktów. Rzut za trzy punkty jest podświetlony czerwonym przyciskiem i wyzwala dodatkowy efekt świętowania.',
  },
  {
    name: 'Popraw pomyłkę w punktacji',
    text: 'Jeśli przypadkowo dodasz punkty, naciśnij przycisk minus, aby je odjąć. Nie zejdzie poniżej zera. Nie ma potrzeby rozpoczynania całej gry od nowa z powodu drobnego błędu.',
  },
  {
    name: 'Zamień strony w przerwie',
    text: 'Użyj przycisku zamiany, aby przestawić pozycje GOSPODARZY i GOŚCI w przerwie. Zarówno wyniki, jak i nazwy drużyn zostają zamienione, więc nie tracisz żadnych danych.',
  },
  {
    name: 'Rozpocznij nową grę',
    text: 'Naciśnij przycisk resetowania i potwierdź, aby wyczyścić wszystkie wyniki i rozpocząć nową grę. Nazwy drużyn pozostają, więc nie musisz ich ponownie wpisywać.',
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

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
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
      text: 'Darmowa Tablica Wyników Koszykówki Online : Bez Rejestracji, Bez Pobierania',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zapisywanie punktów w koszykówce powinno być proste. Rzut wolny to +1. Rzut z gry to +2. Rzut za trzy punkty to +3. Ta tablica wyników daje ci dedykowany przycisk dla każdej wartości, więc możesz naciskać i grać dalej. Żadnych menu, żadnych trybów, żadnej konfiguracji. Po prostu nazwij drużyny i zacznij punktować. Wynik jest automatycznie zapisywany w przeglądarce, więc możesz odświeżyć stronę, zamknąć telefon lub wrócić później bez utraty gry.',
    },
    {
      type: 'title',
      text: 'Dlaczego Dedykowany Licznik Punktów Koszykówki Jest Lepszy od Zwykłego Licznika',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Większość aplikacji do tablic wyników wymaga wielokrotnego naciskania tego samego przycisku, aby dodać dwa lub trzy punkty. Te dodatkowe naciśnięcia kumulują się podczas 40-minutowego meczu i zwiększają ryzyko pomyłki podczas szybkiej kontry lub zmiany. Ta tablica wyników ma <strong>trzy osobne przyciski</strong> : jeden dla każdej wartości punktowej : więc naciskasz dokładnie raz na każdą akcję punktową. Przycisk +3 świeci na czerwono i wyzwala eksplozywną animację, która oddaje emocje towarzyszące celowemu rzutowi za trzy punkty.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Koszykówka Towarzyska i Streetball',
          description:
            'Gra do 16 lub 21 z punktacją 1 i 2. Ta tablica wyników obsługuje obie wartości. Po prostu używaj +1 i +2, ignorując +3 podczas gry według zasad ulicznych.',
          icon: 'mdi:basketball',
          points: ['Bez konfiguracji', 'Działa dla każdego celu punktowego', 'Ekran pozostaje włączony'],
        },
        {
          title: 'Szkoła Średnia i Liga Lokalna',
          description:
            'Standardowe zasady FIBA lub NFHS z rzutami wolnymi, rzutami z gry i rzutami za trzy punkty. Dedykowane przyciski sprawiają, że jest wystarczająco szybka dla oficjalnego sekretarza.',
          icon: 'mdi:school',
          points: ['Wszystkie trzy wartości punktowe', 'Edytowalne nazwy drużyn', 'Tryb pełnoekranowy zapobiega uśpieniu'],
        },
        {
          title: 'Trening i Ćwiczenia',
          description:
            'Śledź celne rzuty podczas ćwiczeń strzeleckich, gier wewnętrznych lub pojedynków 1 na 1. Historia nie jest przechowywana, więc każda sesja zaczyna się od nowa.',
          icon: 'mdi:whistle',
          points: ['Szybki reset między ćwiczeniami', 'Działa offline na sali gimnastycznej', 'Bez konieczności konta'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak Działa Punktacja w Koszykówce',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Koszykówka ma trzy wartości punktowe.<strong>Rzut wolny</strong> jest wart 1 punkt i jest wykonywany z linii rzutów wolnych po faulu.<strong>Rzut z gry</strong> jest wart 2 punkty i liczy się za każdy kosz zdobyty z obrębu linii trzech punktów podczas normalnej gry.<strong>Rzut za trzy punkty</strong> jest wart 3 punkty za rzuty oddane zza linii trzech punktów. Większość profesjonalnych i akademickich meczów wykorzystuje wszystkie trzy wartości. Streetball często używa tylko 1 i 2, lub samych 1. Ta tablica wyników dostosowuje się do każdego formatu.',
    },
    {
      type: 'title',
      text: 'Gra w Każdym Formacie: Wygrana Punktami, Czasem lub Pierwszy do Celu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Koszykówka nie ma ustalonego limitu punktów : mecz kończy się, gdy zegar wybije zero. Ale koszykówka towarzyska często używa docelowych wyników, jak pierwszy do 16, 21 lub 11 (wygrana różnicą 2). Ta tablica wyników nie narzuca warunku zwycięstwa, ponieważ koszykówka nie kończy się na wyniku. To ty decydujesz, kiedy mecz się kończy, a przycisk resetowania czyści tablicę na następną grę. Nazwy drużyn są zachowywane, więc możesz grać kolejne mecze bez ponownego wpisywania.',
    },
    {
      type: 'title',
      text: 'Co Wyróżnia Tę Tablicę Wyników',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Trzy dedykowane przyciski</strong> : +1, +2 i +3. Bez przełączania wartości, bez długiego przytrzymywania, bez dodatkowych naciśnięć.',
        '<strong>Edytowalne nazwy drużyn</strong> : naciśnij nazwę, aby ją zmienić. Nazwy są zapisywane w przeglądarce i pozostają po odświeżeniu strony.',
        '<strong>Blokada uśpienia ekranu</strong> : w trybie pełnoekranowym tablica wyników zapobiega wyłączaniu się ekranu telefonu. Koniec z ciągłym naciskaniem ekranu, aby go utrzymać włączonym.',
        '<strong>Tryb pełnoekranowy</strong> : ukrywa karty przeglądarki i pasek adresu, dzięki czemu tablica wyników zajmuje cały ekran. Naciśnij przycisk pełnego ekranu raz, a narzędzie się rozszerzy.',
        '<strong>Offline najpierw</strong> : cała tablica wyników działa bez połączenia z internetem po pierwszym załadowaniu. Żadnych reklam, żadnych trackerów, żadnego zbierania danych.',
        '<strong>Satysfakcjonujące informacje zwrotne</strong> : każde naciśnięcie wyzwala animację punktów, unoszące się cząsteczki i subtelne wibracje na obsługiwanych urządzeniach. Przycisk +3 ma dodatkowy efekt eksplozji.',
        '<strong>Stan gry jest zapisywany</strong> : odśwież stronę, zamknij przeglądarkę lub wróć jutro. Wyniki i nazwy drużyn są przechowywane lokalnie.',
      ],
    },
    {
      type: 'title',
      text: 'Tablica Wyników Koszykówki vs. Papierowy Arkusz Punktacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Papierowy arkusz punktacji działa, ale wymaga długopisu, płaskiej powierzchni i kogoś, kto potrafi jednocześnie pisać i oglądać mecz. Cyfrowa tablica wyników rozwiązuje wszystkie trzy problemy. Przyciski są wystarczająco duże, aby naciskać je bez patrzenia. Liczby są czytelne z drugiego końca boiska. Wynik nigdy się nie rozmazuje, nie gubi ani nie zostaje przypadkowo usunięty. I w przeciwieństwie do papieru, ta tablica wyników zapisuje stan gry, więc możesz zamknąć ją w przerwie i wrócić później.',
    },
  ],
  ui: {
    playerA: 'GOSPODARZE',
    playerB: 'GOŚCIE',
    swapSides: 'Zamień Strony',
    reset: 'Resetuj',
    resetConfirm: 'Zresetować grę? Wszystkie punkty zostaną utracone.',
    cancel: 'Anuluj',
    fullscreen: 'Pełny Ekran',
    exitFullscreen: 'Wyjdź z Pełnego Ekranu',
    winnerLabel: 'ZWYCIĘZCA',
  },
};
