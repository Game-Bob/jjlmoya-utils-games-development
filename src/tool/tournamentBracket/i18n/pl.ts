import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'generator-turniejowy';
const title = 'Darmowy Generator Drabinek Online i Organizator Turniejów';
const description = 'Organizuj turnieje i twórz drabinki w systemie pucharowym za darmo bez rejestracji. Idealne do FIFA, Padla, e-sportu i gier planszowych. W 100% mobilne.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Turniej w Toku',
  nextMatch: 'Następny Mecz',
  share: 'Udostępnij',
  backNew: 'Wstecz / Nowy',
  back: 'Wstecz',
  newTournament: 'Nowy Turniej',
  setupSubtitle: 'Skonfiguruj i wygeneruj drabinkę zawodów.',
  tournamentNameLabel: 'Nazwa Turnieju',
  tournamentNamePlaceholder: 'Np. Turniej Letni',
  addPlayersLabel: 'Dodaj Uczestników',
  addPlayerPlaceholder: 'Imię... lub kilka oddzielonych przecinkami',
  playersLabel: 'Gracze',
  clearAll: 'Wyczyść Wszystko',
  emptyList: 'Lista jest pusta',
  howItWorks: 'Jak to działa?',
  howItWorksText: 'Dodaj uczestników, nadaj nazwę i wygeneruj. System automatycznie utworzy pary i obsłuży „Bye” (wolne losy), jeśli liczba uczestników jest nieparzysta.',
  historyLabel: 'Historia',
  noHistory: 'Brak zapisanych turniejów',
  noOldTournaments: 'Brak poprzednich turniejów',
  generateBtn: 'Generuj Drabinkę',
  shuffleLabel: 'Losuj pary',
  scoreLabel: 'Włącz Wyniki (Opcjonalnie)',
  dragHint: 'Przeciągnij, aby przenieść',
  roundFinal: 'Finał',
  roundSemifinal: 'Półfinały',
  roundQuarter: 'Ćwierćfinały',
  roundPrefix: 'Runda',
  byeLabel: 'Bye',
  waiting: 'Oczekiwanie...',
  emptyRound: 'Pusta runda',
  confirmClearPlayers: 'Wyczyścić całą listę graczy?',
  alertMinPlayers: 'Potrzebujesz co najmniej 2 graczy.',
  alertLoadFailed: 'Nie udało się załadować turnieju.',
  confirmDeleteTournament: 'Trwale usunąć ten turniej z historii?',
  toastShareLimit: 'Udostępniać można tylko turnieje do 32 graczy',
  toastShareError: 'Błąd podczas generowania linku',
  toastShareCopied: 'Link skopiowany do schowka',
  toastShareFailed: 'Nie udało się skopiować. URL:',
  toastFinished: 'Turniej Zakończony!',
  defaultName: 'Turniej'
};

const faqData = [
  { question: 'Jak działa system pucharowy (pojedyncza eliminacja)?', answer: 'To system rozgrywek, w którym uczestnik przegrywający mecz automatycznie odpada z turnieju. Zwycięzcy przechodzą do kolejnych rund (1/8 finału, ćwierćfinały, półfinały), aż do wielkiego finału, w którym zostaje tylko dwóch zawodników.' },
  { question: 'Co się dzieje w przypadku nieparzystej liczby graczy?', answer: 'Nasze narzędzie automatycznie obsługuje „BYE” (wolne losy). Niektórzy gracze przejdą bezpośrednio do drugiej rundy bez grania w pierwszej, tak aby drabinka zawsze kończyła się potęgami dwójki (2, 4, 8, 16...).' },
  { question: 'Czy mogę zapisać i udostępnić drabinkę turniejową?', answer: 'Tak, możesz udostępnić drabinkę za pomocą unikalnego, natychmiast wygenerowanego linku. Jako narzędzie niewymagające rejestracji, dane są przechowywane w przeglądarce tak długo, jak otwarta jest karta.' },
  { question: 'Czy to działa w przypadku turniejów e-sportowych, takich jak FIFA czy LoL?', answer: 'Absolutnie. Narzędzie jest szybkie i przejrzyste, idealne do zarządzania błyskawicznymi turniejami na konsolach, PC, a nawet w grach planszowych i karcianych.' },
  { question: 'Czy tworzenie turniejów jest darmowe?', answer: 'Tak, całkowicie darmowe i bez ograniczeń. Żadnych planów premium, limitów uczestników, znaków wodnych czy uciążliwych reklam. Wszystko działa offline w przeglądarce.' },
  { question: 'Czy moje dane zostaną usunięte po zamknięciu przeglądarki?', answer: 'Nie. Używamy LocalStorage, aby automatycznie zapisywać wszystkie turnieje na Twoim urządzeniu. Możesz zamknąć kartę, wyłączyć komputer i wrócić po kilku dniach: turniej nadal tam będzie.' },
  { question: 'Jak działa przycisk „Następny Mecz”?', answer: 'System automatycznie wykrywa kolejną gotową parę (obaj uczestnicy potwierdzeni), która nie ma jeszcze wpisanego wyniku. Naciśnięcie „Następny Mecz” przenosi widok bezpośrednio do tego spotkania.' },
];

const howTo = [
  { name: 'Wprowadź uczestników', text: 'Wpisz imiona graczy lub nazwy drużyn biorących udział w zawodach.' },
  { name: 'Wygeneruj drabinkę', text: 'Kliknij przycisk generowania. System automatycznie utworzy pary i niezbędne rundy.' },
  { name: 'Aktualizuj wyniki', text: 'Kliknij zwycięzcę każdego meczu, aby automatycznie przeszedł do kolejnego etapu drabinki.' },
  { name: 'Zakończ', text: 'Po zakończeniu turnieju wyświetlany jest ostateczny zwycięzca.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Darmowy Generator Drabinek Online i Organizator Turniejów',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Zarządzaj swoimi rozgrywkami sportowymi, grami wideo lub planszowymi za pomocą najbardziej kompletnego, darmowego i niewymagającego rejestracji organizatora turniejów. Twórz wizualne i interaktywne drabinki pucharowe w kilka sekund, ze <strong>zintegrowanym systemem punktacji</strong>, automatyczną historią i inteligentną nawigacją meczów. Wszystko działa offline, bezpośrednio w Twojej przeglądarce.'
  },
  {
    type: 'title' as const,
    text: 'Jak stworzyć turniej w systemie pucharowym?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Nadaj nazwę turniejowi</strong>, dodaj uczestników (pojedynczo lub wklejając listę oddzieloną przecinkami), losuj pary, jeśli chcesz, wygeneruj drabinkę, zarządzaj wynikami, klikając zwycięzcę każdego meczu, i używaj przycisku „Następny Mecz”, aby poruszać się między nierozstrzygniętymi spotkaniami.'
  },
  {
    type: 'title' as const,
    text: 'Zaawansowane Funkcje',
    level: 2 as const
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Wprowadzanie zbiorcze:</strong> Dodawaj wielu uczestników naraz oddzielonych przecinkami.',
      '<strong>Dokładne wyniki:</strong> System punktacji z wynikami takimi jak 3-1 lub 21-19.',
      '<strong>Inteligentna nawigacja:</strong> Przycisk „Następny Mecz” przenosi do kolejnej oczekującej pary.',
      '<strong>Przesuwalna drabinka:</strong> Widok na komputer z wolnym przewijaniem dla dużych turniejów.',
      '<strong>Trwała historia:</strong> Wszystkie turnieje zapisywane automatycznie w Twojej przeglądarce.',
      '<strong>Automatyczne wolne losy:</strong> „Bye” i bezpośrednie awanse rozwiązywane bez ręcznej ingerencji.',
      '<strong>Udostępnianie przez URL:</strong> Generuj skompresowany link, aby wysłać drabinkę komukolwiek.',
    ]
  },
  {
    type: 'title' as const,
    text: 'Idealne dla Każdej Rywalizacji',
    level: 2 as const
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Gry Wideo & Esport',
        description: 'Idealne do FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros czy Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Szybkie parowanie', 'Brak limitu drużyn', 'Natychmiastowe udostępnianie']
      },
      {
        title: 'Sporty & Gry Rakietowe',
        description: 'Zarządzaj drabinkami do Padla, Tenisa, Ping Ponga, Badmintona, Futsalu czy Koszykówki 3x3.',
        icon: 'mdi:trophy-outline',
        points: ['Zintegrowane wyniki', 'Zoptymalizowany widok mobilny', 'Koniec z papierem']
      },
      {
        title: 'Gry Planszowe & Karciane',
        description: 'Organizuj turnieje Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Szachy czy Domino.',
        icon: 'mdi:cards-playing-outline',
        points: ['Do 64 graczy', 'Historia rund', 'Zarządzanie wolnymi losami']
      },
    ]
  },
  {
    type: 'title' as const,
    text: 'Czym są „Bye” lub Wolne Losy?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'W idealnym turnieju pucharowym liczba uczestników musi być potęgą liczby 2 (4, 8, 16, 32...). Kiedy masz nieparzystą liczbę lub niebędącą potęgą 2 , na przykład 7, 10 lub 13 graczy, system automatycznie przypisuje <strong>„Byes”</strong> (wolne losy) w pierwszej rundzie. Wolny los oznacza, że uczestnik przechodzi bezpośrednio do następnej fazy bez grania meczu. Nasz algorytm sprawiedliwie i automatycznie oblicza oraz przydziela te awanse.'
  },
  {
    type: 'title' as const,
    text: 'Natychmiast, Za Darmo i Bez Logowania',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Zero oporów. Żadnych kont, instalacji czy czekania. Dodaj uczestników i wygeneruj turniej natychmiast. Wszystko zapisuje się automatycznie w przeglądarce przez <strong>LocalStorage</strong>: zamknij kartę, wyłącz komputer i wróć po paru dniach. Twój turniej i pełna historia wciąż tam będą.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
