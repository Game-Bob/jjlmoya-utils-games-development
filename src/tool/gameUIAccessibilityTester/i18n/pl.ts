import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'tester-dostepnosci-ui-gier';
const title = 'Tester Dostępności UI Gier';
const description = 'Sprawdzaj zrzuty ekranu z gier lokalnie w przeglądarce za pomocą symulacji ślepoty barw, próbników kontrastu HUD, rozmycia i map cieplnych.';

const faq = [
  {
    question: 'Czy to narzędzie certyfikuje dostępność UI mojej gry?',
    answer: 'Nie. Łączy symulacje widzenia barw, pomiary kontrastu oraz wskazówki przeglądu. Używaj wyników jako pomocy przy projektowaniu, a nie jako oficjalnego certyfikatu.',
  },
  {
    question: 'Czy mój zrzut ekranu jest przesyłany na serwer?',
    answer: 'Nie. Obraz jest dekodowany, analizowany i przekształcany wyłącznie w Twojej przeglądarce. W pamięci lokalnej zapisywane są tylko ustawienia widoku.',
  },
  {
    question: 'Co należy mierzyć za pomocą dwóch próbników koloru?',
    answer: 'Wybierz dwa kolory przekazujące różne informacje, takie jak wskaźniki sojusznika i wroga, stan aktywny i nieaktywny lub poziomy rzadkości.',
  },
  {
    question: 'Dlaczego dobry współczynnik kontrastu wymaga ręcznego przeglądu?',
    answer: 'Para kolorów może mieć wysoki kontrast, ale mała ikona, cienki tekst, ruchome tło lub poleganie wyłącznie na barwie mogą utrudniać odczyt.',
  },
  {
    question: 'Co pokazuje mapa cieplna?',
    answer: 'Mapa cieplna wyróżnia obszary, w których różnica kolorów drastycznie spada po zastosowaniu wybranej symulacji.',
  },
];

const howTo = [
  { name: 'Wczytaj zrzut ekranu', text: 'Wybierz plik PNG, JPEG lub WebP z gry. Obraz pozostaje w pamięci podręcznej Twojej przeglądarki.' },
  { name: 'Wybierz soczewkę symulacji', text: 'Porównaj oryginał z symulacją zaburzeń rozpoznawania barw, skalą szarości lub obniżonym kontrastem.' },
  { name: 'Zastosuj testy wizualne', text: 'Dodaj rozmycie, zmniejsz skalę renderowania, przybliż piksele lub włącz mapę cieplną krawędzi.' },
  { name: 'Zmierz dwa kluczowe sygnały', text: 'Wybierz Próbnik A lub B i kliknij na oryginalnym obrazie, aby porównać dwa kolory.' },
  { name: 'Eksportuj wnioski', text: 'Zapoznaj się z pytaniami pomocniczymi, dodaj własne uwagi i pobierz arkusz porównawczy oraz raport JSON.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
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
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Załaduj zrzut ekranu z gry, wybierz soczewkę symulacji i porównaj dwa sygnały wizualne, które gracz musi łatwo rozróżniać.',
    privacyNote: 'Analiza lokalna. Obrazy nie są wysyłane na żaden serwer.',
    dropTitle: 'Przeciągnij zrzut ekranu z gry na stół analityczny',
    dropHint: 'Upuść obraz tutaj lub wybierz go z urządzenia. Używaj reprezentatywnych kadrów z rzeczywistym tłem.',
    chooseImage: 'Wybierz zrzut ekranu',
    replaceImage: 'Zmień zrzut ekranu',
    supportedFiles: 'PNG, JPEG lub WebP do 16 MB. Duże obrazy są skalowane do 1600 px.',
    lensLabel: 'Soczewka symulacji',
    lensOriginal: 'Oryginał',
    lensProtanopia: 'Protanopia',
    lensDeuteranopia: 'Deuteranopia',
    lensTritanopia: 'Tritanopia',
    lensAchromatopsia: 'Skala szarości',
    lensReducedContrast: 'Obniżony kontrast',
    lensDesaturation: 'Desaturacja',
    compareLabel: 'Tryb porównania',
    compareSideBySide: 'Obok siebie',
    compareSplit: 'Dzielona soczewka',
    comparePress: 'Naciśnij, aby odsłonić',
    holdOriginal: 'Przytrzymaj dla oryginału',
    splitPosition: 'Pozycja podziału',
    stressLabel: 'Testy obciążeniowe sygnału',
    blurLabel: 'Rozmycie w pikselach',
    downscaleLabel: 'Podgląd małego ekranu',
    downscaleFull: 'Pełny',
    downscaleHalf: 'Połowa',
    downscaleQuarter: 'Ćwiartka',
    downscaleEighth: 'Jedna ósma',
    zoomLabel: 'Powiększenie pikseli',
    heatmapLabel: 'Mapa cieplna krawędzi',
    heatmapHint: 'Wyróżnia obszary ze znacznym spadkiem widoczności krawędzi.',
    originalView: 'Oryginalny sygnał',
    simulatedView: 'Symulowany sygnał',
    emptyCanvas: 'Wybierz zrzut ekranu, aby rozpocząć analizę. Plik pozostaje na Twoim urządzeniu.',
    sampleTitle: 'Próbniki sygnałów',
    sampleInstructions: 'Wybierz A lub B i kliknij na oryginale, aby pobrać próbkę koloru.',
    sampleA: 'Próbnik A',
    sampleB: 'Próbnik B',
    sampleAName: 'Znaczenie próbnika A',
    sampleBName: 'Znaczenie próbnika B',
    manualColor: 'Ustaw kolor ręcznie',
    sampleAInitial: 'Wskaźnik sojusznika',
    sampleBInitial: 'Wskaźnik wroga',
    noSample: 'Oczekiwanie na obraz',
    originalContrast: 'Oryginalny kontrast',
    simulatedContrast: 'Symulowany kontrast',
    separationRetained: 'Zachowana różnica',
    statusStrong: 'Sygnał wyraźnie widoczny',
    statusWatch: 'Sprawdź w kontekście',
    statusReview: 'Wymaga przeglądu',
    statusPending: 'Brak analizy',
    measurementLabel: 'Pomiar',
    heuristicLabel: 'Heurystyka',
    manualReviewLabel: 'Przegląd ręczny',
    measurementHint: 'Oblicza współczynnik kontrastu WCAG dla dwóch pobranych kolorów sRGB.',
    heuristicHint: 'Porównuje odległość kolorów przed i po zastosowaniu symulacji.',
    promptTitle: 'Pytania pomocnicze dla projektanta',
    promptColorOnly: 'Czy gracze mogą rozróżnić elementy bez polegania wyłącznie na barwie?',
    promptChangingBackground: 'Czy tekst pozostaje czytelny na jasnych, ciemnych lub ruchomych tłach?',
    promptMinimap: 'Czy ikony na minimapie różnią się kształtem lub wzorem oprócz koloru?',
    promptStates: 'Czy stany wyboru, wyłączenia i odnawiania są jednoznaczne?',
    promptShape: 'Czy symbol, napis lub dźwięk wzmacnia każdy sygnał kolorystyczny?',
    findingLabel: 'Uwaga zespołu',
    findingPlaceholder: 'Przykład: Obrys wroga zanika na czerwonym tle',
    addFinding: 'Dodaj uwagę',
    findingsEmpty: 'Brak zapisanych uwag.',
    exportSheet: 'Pobierz arkusz porównawczy',
    exportReport: 'Pobierz raport JSON',
    resetTool: 'Zresetuj',
    uploadError: 'Nie można odczytać pliku. Wybierz poprawny format PNG, JPEG lub WebP.',
    fileTooLarge: 'Plik przekracza 16 MB. Wybierz mniejszy obraz.',
    imageReady: 'Obraz załadowany. Pobierz dwie próbki kolorów, aby rozpocząć.',
    reportDownloaded: 'Pobrano raport JSON.',
    sheetDownloaded: 'Pobrano arkusz porównawczy.',
    localOnlyDisclosure: 'Analiza w 100% lokalna w Twojej przeglądarce.',
    limitationDisclosure: 'Narzędzie wspomaga projektowanie, ale nie zastępuje testów z graczami.',
    reportTitle: 'Raport przeglądu dostępności UI gry',
    reportFindingReview: 'Mierzona para kolorów traci znaczny kontrast w wybranej symulacji.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Testowanie dostępności UI gier bez wysyłania plików',
    },
    {
      type: 'paragraph',
      html: 'Interfejsy gier muszą być czytelne w dynamicznych warunkach wizualnych. To lokalne narzędzie pozwala analizować zrzuty ekranu bezpośrednio w przeglądarce przy użyciu symulacji ślepoty barw.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Pomiary, heurystyka i ocena człowieka',
    },
    {
      type: 'table',
      headers: ['Rodzaj analizy', 'Co zapewnia to narzędzie', 'Czego nie może zagwarantować'],
      rows: [
        ['Pomiar', 'Stosunek kontrastu i jasność względna WCAG dla dwóch kolorów', 'Automatyczna zgodność całej gry z normami'],
        ['Symulacja', 'Przekształcenia dla protanopii, deuteranopii i tritanopii', 'Dokładne odczucia wizualne każdego gracza'],
        ['Heurystyka', 'Rozmycie, skalowanie i wykrywanie utraty krawędzi', 'Automatyczna ocena jakości projektu UI'],
        ['Przegląd ręczny', 'Checklista z pytaniami i raporty do eksportu', 'Zastąpienie testów z udziałem graczy'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Mierz kolory wpływające na decyzje gracza',
    },
    {
      type: 'paragraph',
      html: 'Skup się na parach kolorów kluczowych dla rozgrywki, takich jak wrok i sojusznik. Jeśli kontrast spada, rozważ dodanie ikony lub kształtu.',
    },
    {
      type: 'paragraph',
      html: 'Następnie obejrzyj ten sam interfejs w docelowej skali i podczas ruchu. Zapisz, które sygnały znikają po zmianie tła, a potem połącz kolor z kształtem, wzorem, tekstem lub dźwiękiem. Dzięki temu raport prowadzi do konkretnych poprawek projektu, a nie kończy się na pojedynczej wartości kontrastu.',
    },
    {
      type: 'tip',
      title: 'Testuj dynamiczne kadry z gry',
      html: 'Używaj zrzutów ekranu z intensywnych momentów rozgrywki, aby uzyskać wiarygodne wyniki.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Wykorzystaj raport w pracy zespołowej',
    },
    {
      type: 'paragraph',
      html: 'Raport JSON oraz obraz PNG można dołączyć do zadań w systemie zarządzania projektem, aby ułatwić komunikację z zespołem.',
    },
    { type: 'paragraph', html: 'Zapisz scenę, rozdzielczość i badaną parę kolorów. Symulacja pomaga wcześnie znaleźć problemy projektu, ale nie zastępuje testów z prawdziwymi scenami, różnymi ekranami i osobami o różnych warunkach widzenia.' },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
