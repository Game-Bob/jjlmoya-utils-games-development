import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'licznik-bramek';
const title = 'Licznik Bramek Online: Darmowy Licznik Goli Meczowych';
const description =
  'Śledź wyniki meczów piłkarskich online za darmo. Prosty licznik goli do meczów towarzyskich, treningów i turniejów. Bez rejestracji.';

const faqData = [
  {
    question: 'Jak korzystać z tego licznika bramek?',
    answer:
      'Dotknij przycisku + pod każdą drużyną, aby dodać gola. Wynik aktualizuje się natychmiast z animacją radości. Użyj przycisku minus, aby cofnąć pomyłkę. Nazwy drużyn można edytować: wystarczy dotknąć domyślnej nazwy i wpisać własną. Wszystko jest automatycznie zapisywane w przeglądarce, więc możesz zamknąć stronę i wrócić później.',
  },
  {
    question: 'Czy mogę go używać na telefonie podczas meczu?',
    answer:
      'Tak. Interfejs został zaprojektowany z myślą o urządzeniach mobilnych: duże przyciski, które można nacisnąć bez patrzenia. Tryb pełnoekranowy ukrywa przeglądarkę i utrzymuje ekran telefonu włączony przez cały mecz. Pionowy układ pozwala łatwo sięgnąć kciukiem do obu sekcji drużyn.',
  },
  {
    question: 'Czy moje dane meczowe są zapisywane?',
    answer:
      'Tak. Aktualny wynik i nazwy drużyn są automatycznie zapisywane w przeglądarce. Możesz odświeżyć stronę, zamknąć przeglądarkę lub wrócić następnego dnia: dane meczowe wciąż będą dostępne.',
  },
  {
    question: 'Czy mogę śledzić dogrywkę lub rzuty karne?',
    answer:
      'Tak. Licznik działa tak samo dla każdego formatu meczu. Po prostu używaj przycisków + podczas dogrywki lub rzutów karnych. Gdy mecz się zakończy, dotknij "Zakończ mecz", aby zobaczyć końcowy wynik.',
  },
  {
    question: 'Czy to naprawdę darmowe bez ukrytych ograniczeń?',
    answer:
      'Tak, całkowicie darmowe bez żadnych ograniczeń. Żadnych planów premium, limitów uczestników, znaków wodnych ani reklam. Wszystko działa offline w przeglądarce. Nie wymaga konta ani adresu e-mail.',
  },
];

const howToData = [
  {
    name: 'Nazwij drużyny',
    text: 'Dotknij domyślnej nazwy drużyny i wpisz własną. Nowa nazwa zostanie automatycznie zapisana w przeglądarce.',
  },
  {
    name: 'Dodaj gola',
    text: 'Dotknij dużego okrągłego przycisku + drużyny, która strzeliła gola. Licznik podskakuje z animacją radości.',
  },
  {
    name: 'Usuń gola',
    text: 'Dotknij przycisku minus pod przyciskiem +, jeśli przypadkowo dodałeś gola. Wynik zostanie natychmiast skorygowany.',
  },
  {
    name: 'Zakończ mecz',
    text: 'Dotknij "Zakończ mecz" na dole, aby zobaczyć ogłoszenie zwycięzcy z trofeum i konfetti. Zamknij uroczystość, dotykając poza obszarem.',
  },
  {
    name: 'Zresetuj mecz',
    text: 'Dotknij ikony resetu w górnym pasku i potwierdź, aby wyczyścić oba wyniki. Nazwy drużyn zostają zachowane.',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: 'Darmowy Licznik Bramek Online: Na Żywo Wyniki Meczów Piłkarskich',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Liczenie bramek podczas meczu piłkarskiego powinno być najprostszą częścią gry. Ten internetowy licznik bramek pozwala śledzić gole dwóch drużyn w czasie rzeczywistym jednym dotknięciem. Bez rejestracji, bez pobierania, bez skomplikowanych menu. Otwórz stronę, nazwij drużyny i zacznij liczyć gole. Niezależnie od tego, czy siedzisz na ławce trenerskiej podczas meczu młodzieżowego, prowadzisz towarzyski mecz między znajomymi, czy liczysz punkty podczas lokalnego meczu ligowego, to narzędzie zostało stworzone z myślą o szybkości i prostocie. Każda drużyna ma własną, kolorowo oznaczoną sekcję z dużym wyświetlaczem wyniku i dedykowanym przyciskiem +1. Dotknij, aby dodać gola, dotknij przycisku minus, aby cofnąć pomyłkę. Cała historia meczu pozostaje widoczna na ekranie, więc zawsze wiesz dokładnie, co się wydarzyło.',
    },
    {
      type: 'title',
      text: 'Dlaczego potrzebujesz dedykowanej tablicy wyników zamiast zwykłego licznika',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zwykły licznik cyfrowy nadaje się do liczenia wszystkiego, ale dedykowany licznik bramek rozumie, jak działa gra. Rozdziela dwie drużyny wizualnie za pomocą wyraźnych kolorów, dzięki czemu nigdy nie dotkniesz niewłaściwej strony. Przycisk gola jest duży i satysfakcjonujący w dotyku, nawet gdy trzymasz telefon w jednej ręce na linii bocznej. Przycisk minus pozwala natychmiast poprawić błędy bez konieczności resetowania całego meczu. A gdy mecz się skończy, przycisk "Zakończ mecz" uruchamia ekran świętowania pokazujący końcowy wynik z konfetti i trofeum. Zwykłe liczniki nie potrafią niczego z tego. Traktują każdy punkt tak samo. Piłka nożna nie jest zwykła i twój licznik bramek też nie powinien być.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Mecze Towarzyskie i Treningowe',
          description: 'Szybkie śledzenie goli w meczach treningowych i ćwiczeniach. Resetuj między meczami jednym dotknięciem. Działa offline, więc możesz go używać na każdym boisku.',
          icon: 'mdi:soccer',
          points: ['Dodawanie gola jednym kliknięciem', 'Działa w pełni offline', 'Bez konta i e-maila', 'Natychmiastowy reset między meczami'],
        },
        {
          title: 'Mecze Ligowe i Turniejowe',
          description: 'Prowadź czysty, bieżący wynik w meczach ligowych, gdzie liczy się każdy gol. Duży wyświetlacz czytelny z drugiego końca boiska. Kolory drużyn pomagają uniknąć pomyłek.',
          icon: 'mdi:trophy-outline',
          points: ['Kolorowe sekcje drużyn', 'Edytowalne nazwy drużyn', 'Zakończenie meczu z fetą', 'Duży wynik czytelny z daleka'],
        },
        {
          title: 'Piłka Młodzieżowa i Szkolna',
          description: 'Wystarczająco prosty, aby młodzi zawodnicy mogli go obsługiwać samodzielnie. Trenerzy mogą śledzić gole, skupiając się na grze. Tryb pełnoekranowy utrzymuje ekran włączony.',
          icon: 'mdi:school',
          points: ['Prosty w obsłudze dla dzieci', 'Pełny ekran utrzymuje wyświetlacz', 'Edytowalne nazwy drużyn', 'Bez rozpraszających funkcji'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak śledzić mecz piłkarski na żywo za pomocą tego licznika online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Korzystanie z tej tablicy wyników jest proste. Po otwarciu strony widzisz dwie sekcje drużyn. Gospodarze są pokazani na czerwono, a goście na niebiesko. Każda sekcja ma duży wyświetlacz wyniku pośrodku, pole nazwy drużyny u góry i dwa przyciski poniżej. Dotknij dużego okrągłego przycisku +, aby dodać gola dla tej drużyny. Licznik animuje się z efektem radości za każdym razem, gdy gol zostanie zarejestrowany. Osiem różnych animacji goli losowo się zmienia, więc każdy gol wydaje się wyjątkowy. Latające cząsteczki wylatują z obszaru przycisku z tekstami takimi jak GOL i SIUUU. Ekran na chwilę miga, aby zaznaczyć ten moment. Jeśli popełnisz błąd, dotknij małego przycisku minus, aby usunąć ostatniego gola. Pola nazw drużyn są edytowalne. Dotknij domyślnej nazwy, aby wpisać własną. Nazwy są automatycznie zapisywane w przeglądarce wraz z bieżącym wynikiem. Oznacza to, że możesz zamknąć stronę, wrócić później, a dane meczowe wciąż będą dostępne. Na koniec meczu dotknij "Zakończ mecz", aby zobaczyć ogłoszenie zwycięzcy z animacją trofeum i opadającym konfetti. Możesz zamknąć uroczystość, a wynik pozostanie wyświetlony.',
    },
    {
      type: 'title',
      text: 'Licznik bramek przyjazny urządzeniom mobilnym zaprojektowany na boisko',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie zostało zbudowane w pierwszej kolejności z myślą o urządzeniach mobilnych. Pionowy układ umieszcza jedną drużynę nad drugą, dzięki czemu łatwo sięgasz kciukiem do obu sekcji, trzymając telefon. Przyciski są wystarczająco duże, aby naciskać je bez patrzenia na ekran. Tryb pełnoekranowy usuwa paski narzędzi przeglądarki i utrzymuje ekran telefonu włączony przez cały mecz. Koniec z dotykaniem ekranu co kilka minut, żeby nie zgasł. Interfejs działa w orientacji poziomej i pionowej. Działa również offline po pierwszym załadowaniu strony, więc nie potrzebujesz połączenia z internetem na boisku. Nie ma reklam, trackerów ani zbierania danych. Twoje dane meczowe nigdy nie opuszczają twojego urządzenia.',
    },
    {
      type: 'title',
      text: 'Co wyróżnia ten licznik bramek',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Kolorowe drużyny</strong> czerwony dla gospodarzy i niebieski dla gości. Od razu widzisz, która strona jest która, bez czytania tekstu.',
        '<strong>Animacje radości po golu</strong> każdy gol uruchamia losową fetę. Osiem różnych animacji, w tym boom, rise, glow i ball bounce.',
        '<strong>Latające cząsteczki</strong> każdy gol generuje unoszący się tekst z napisami takimi jak GOL i SIUUU. Każda feta wydaje się wyjątkowa.',
        '<strong>Ceremonia zakończenia meczu</strong> dotknij "Zakończ mecz", aby uruchomić ogłoszenie zwycięzcy z animacją trofeum, nazwą drużyny i deszczem konfetti.',
        '<strong>Edytowalne nazwy drużyn</strong> dotknij pola nazwy, aby zmienić nazwy drużyn. Nazwy są zapisywane lokalnie w przeglądarce.',
        '<strong>Blokada wyłączenia ekranu</strong> tryb pełnoekranowy zapobiega wyłączeniu ekranu telefonu podczas meczu.',
        '<strong>Tryb pełnoekranowy</strong> ukrywa interfejs przeglądarki, aby tablica wyników wypełniła cały ekran: bez rozpraszaczy.',
        '<strong>Offline first</strong> działa bez internetu po pierwszej wizycie. Bez reklam, bez śledzenia, bez zbierania danych.',
        '<strong>Natychmiastowe zapisywanie danych</strong> wyniki i nazwy drużyn są automatycznie zapisywane. Odśwież stronę lub zamknij przeglądarkę: dane wracają.',
        '<strong>Resetowanie z potwierdzeniem</strong> przycisk resetu prosi o potwierdzenie przed wyczyszczeniem wyników. Zapobiega przypadkowej utracie danych.',
      ],
    },
    {
      type: 'title',
      text: 'Licznik bramek vs. Papierowy arkusz wyników: dlaczego cyfrowy jest lepszy',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Papierowe arkusze wyników są używane od dziesięcioleci, ale mają realne problemy. Potrzebujesz sprawnego długopisu, płaskiej powierzchni do pisania i wystarczającej uwagi, aby pisać podczas oglądania meczu. Jedno rozproszenie uwagi może sprawić, że przegapisz gola lub zapiszesz złą liczbę. Raz zapisany na papierze wynik nie może być czysto poprawiony. Przekreślone liczby utrudniają czytanie. Papier może zmoknąć na deszczu, zdmuchnąć go wiatr lub zgubić się między meczami. Cyfrowy licznik bramek rozwiązuje każdy z tych problemów. Przyciski są wystarczająco duże, aby naciskać je po omacku, bez patrzenia. Liczby są wyświetlane wyraźnie dużą czcionką, czytelną z drugiego końca boiska. Błędy są natychmiast poprawiane przyciskiem minus. Wynik jest automatycznie zapisywany i nigdy nie ginie. I w przeciwieństwie do papieru, licznik dodaje animacje radości i wizualne informacje zwrotne, które sprawiają, że liczenie bramek jest przyjemniejsze. Niezależnie od tego, czy trenujesz drużynę młodzieżową, prowadzisz ligę niedzielną, czy po prostu grasz ze znajomymi, ten darmowy licznik bramek online daje ci wszystko, czego potrzebujesz, i nic, czego nie potrzebujesz.',
    },
    {
      type: 'title',
      text: 'Darmowy licznik bramek dla każdego poziomu gry',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie jest całkowicie darmowe i bez ograniczeń. Nie ma poziomów premium, ukrytych funkcji za paywallem ani znaków wodnych na ekranie. Działa na każdym poziomie piłki nożnej: od luźnych kopanin ze znajomymi po zorganizowane mecze ligowe. Prosty interfejs oznacza, że każdy może go używać, od młodych graczy uczących się gry po doświadczonych trenerów prowadzących turniej. Żadna rejestracja nie jest wymagana. Żaden adres e-mail. Żadne dane osobowe nie są zbierane. Otwórz stronę, rozpocznij mecz, dotknij gole. To wszystko.',
    },
  ],
  ui: {
    playerA: 'Gospodarze',
    playerB: 'Goście',
    winnerLabel: 'MISTRZ',
    finishMatch: 'Zakończ mecz',
    reset: 'Resetuj',
    resetConfirm: 'Zresetować mecz? Wszystkie dane zostaną utracone.',
    cancel: 'Anuluj',
    fullscreen: 'Pełny ekran',
    exitFullscreen: 'Opuść pełny ekran',
  },
};
