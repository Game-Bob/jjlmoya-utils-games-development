import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'kalkulator-elo';
const title = 'Kalkulator Rankingu ELO dla Szachów, Esportu i Sportu';
const description = 'Darmowy kalkulator rankingu ELO dla zwycięstw, remisów i porażek. Wprowadź oba rankingi, wybierz współczynnik K i zobacz dokładną zmianę punktów, oczekiwany wynik, nowe ELO i ELO przeciwnika.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Ranking gracza',
  opponentLabel: 'Ranking przeciwnika',
  kFactorLabel: 'Współczynnik K',
  resultLabel: 'Wynik meczu',
  winLabel: 'Wygrana',
  drawLabel: 'Remis',
  lossLabel: 'Porażka',
  calculateLabel: 'Oblicz',
  resetLabel: 'Resetuj',
  expectedLabel: 'Oczekiwany',
  deltaLabel: 'Zmiana',
  newRatingLabel: 'Nowy ranking',
  opponentNewRatingLabel: 'Nowe ELO przeciwnika',
  kFactorHelpTitle: 'Co to jest współczynnik K?',
  kFactorHelpText: 'K kontroluje agresywność aktualizacji. Niski K oznacza stabilne rankingi. Wysoki K sprawia, że każdy wynik szybciej zmienia rankingi.',
  kFactorLowText: 'Stabilny',
  kFactorHighText: 'Zmienny',
  resultSummaryLabel: 'Wpływ meczu',
  initialImpactText: 'Remis utrzymuje tabelę zwartą',
  historyVersusLabel: 'vs',
  historyToLabel: 'do',
  playerPointsLabel: 'punkty gracza',
  opponentEloLabel: 'ELO przeciwnika',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'RANKING',
  upsetLabel: 'Szansa na niespodziankę',
  favoriteLabel: 'Presja faworyta',
  balancedLabel: 'Wyrównany mecz',
  historyLabel: 'Lokalne obliczenia',
  noHistoryLabel: 'Wykonaj obliczenie, aby je tutaj zapisać',
  copiedLabel: 'Skopiowano',
  copyLabel: 'Kopiuj',
  clearLabel: 'Wyczyść',
  kBeginner: 'Początkujący',
  kClub: 'Klub',
  kTournament: 'Turniej',
  kElite: 'Elita',
};

const faqData = [
  { question: 'Jak obliczyć zmianę rankingu ELO po meczu?', answer: 'Wprowadź swoje aktualne ELO, ELO przeciwnika, wynik meczu i współczynnik K. Kalkulator szacuje oczekiwany wynik, porównuje go z rzeczywistym rezultatem i zwraca dokładną liczbę zdobytych lub straconych punktów.' },
  { question: 'Co oznacza współczynnik K w ELO?', answer: 'Współczynnik K kontroluje czułość rankingu. Niski współczynnik K sprawia, że rankingi są stabilne i wolno się zmieniają. Wysoki współczynnik K sprawia, że rankingi reagują szybciej, co jest przydatne dla nowych graczy, krótkich sezonów lub aktywnych lokalnych drabinek.' },
  { question: 'Dlaczego zdobywam mniej punktów ELO, gdy wygrywam z niżej notowanym przeciwnikiem?', answer: 'Ponieważ formuła już oczekiwała twojej wygranej. Pokonanie znacznie niżej notowanego przeciwnika potwierdza przewidywanie, więc wzrost rankingu jest niewielki. Pokonanie silniejszego przeciwnika jest bardziej zaskakujące, więc zysk jest większy.' },
  { question: 'Czy przeciwnik traci tę samą liczbę punktów ELO?', answer: 'W standardowej dwustronnej wymianie ELO, tak. Punkty zdobyte przez jedną stronę są odejmowane od drugiej, więc kalkulator pokazuje zarówno nowe ELO gracza, jak i nowe ELO przeciwnika.' },
  { question: 'Czy mogę używać tego kalkulatora ELO poza szachami?', answer: 'Tak. ELO działa dla każdej powtarzalnej rywalizacji jeden na jednego, gdzie silniejsi gracze powinni mieć większe szanse na wygraną, w tym esportu, drabinek tenisowych, grup padla, tenisa stołowego, klubów debat i lig fantasy.' },
];

const howTo = [
  { name: 'Wprowadź ranking gracza', text: 'Wpisz aktualny ranking gracza, którego zmianę chcesz obliczyć.' },
  { name: 'Wprowadź ranking przeciwnika', text: 'Dodaj ranking przeciwnika, aby kalkulator mógł oszacować oczekiwany wynik.' },
  { name: 'Wybierz współczynnik K i wynik', text: 'Użyj niższego współczynnika K dla stabilnych rankingów lub wyższego, gdy rankingi powinny szybko się dostosowywać, a następnie wybierz wygraną, remis lub porażkę.' },
  { name: 'Odczytaj nowe rankingi', text: 'Kalkulator pokazuje oczekiwany wynik, zmianę rankingu, twoje nowe ELO i nowe ELO przeciwnika po wymianie punktów.' },
];

const seo = [
  { type: 'title' as const, text: 'Oblicz Punkty ELO Po Każdym Meczu', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Użyj tego kalkulatora rankingu ELO, gdy potrzebujesz szybkiej odpowiedzi na bardzo praktyczne pytanie: <strong>ile punktów ELO zyskam lub stracę po tym wyniku?</strong> Wprowadź swój ranking, ranking przeciwnika, wynik meczu i współczynnik K. Narzędzie oblicza oczekiwany wynik, zmianę rankingu, twoje nowe ELO i nowe ELO przeciwnika w tej samej karcie wyników.'
  },
  {
    type: 'summary' as const,
    title: 'Na co odpowiada ten kalkulator',
    items: [
      'Ile punktów ELO zyskujesz po wygranej z silniejszym lub słabszym przeciwnikiem.',
      'Ile punktów ELO tracisz po niespodziewanej porażce.',
      'Czy remis powinien zwiększyć czy zmniejszyć twój ranking.',
      'Jaki jest ranking przeciwnika po tej samej wymianie punktów.',
      'Jak zmiana współczynnika K sprawia, że ruch rankingu jest stabilny lub zmienny.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'wynik wygranej', description: 'Wygrana jest traktowana jako pełny punkt przed porównaniem z oczekiwanym wynikiem.' },
      { value: '0.5', label: 'wynik remisu', description: 'Remis znajduje się dokładnie pomiędzy wygraną a porażką, więc może przynieść punkty przeciwko silniejszemu przeciwnikowi.' },
      { value: '0.0', label: 'wynik porażki', description: 'Porażka z niżej notowanym przeciwnikiem zwykle kosztuje więcej, ponieważ była nieoczekiwana.' },
    ]
  },
  { type: 'title' as const, text: 'Co Robi Formuła ELO', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'Trzy kroki za każdym wynikiem',
    description: 'Kalkulator podąża za standardową ideą ELO, bez konieczności ręcznej pracy z formułą.',
    items: [
      { label: 'Oczekiwany wynik', value: 'Różnica rankingowa jest przekształcana na wynik probabilistyczny. Od wyżej notowanych graczy oczekuje się zdobycia większej liczby punktów.' },
      { label: 'Rzeczywisty wynik', value: 'Wygrana liczy się jako 1, remis jako 0.5, a porażka jako 0.' },
      { label: 'Zmiana rankingu', value: 'Różnica między rzeczywistym a oczekiwanym wynikiem jest mnożona przez współczynnik K i zaokrąglana do punktów.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Sytuacja', 'Co zwykle się dzieje', 'Dlaczego tak się dzieje'],
    rows: [
      ['Wygrywasz z silniejszym przeciwnikiem', 'Duży wzrost ELO', 'Twój rzeczywisty wynik był znacznie wyższy niż oczekiwano'],
      ['Wygrywasz ze słabszym przeciwnikiem', 'Mały wzrost ELO', 'Formuła już oczekiwała twojej wygranej'],
      ['Remisujesz z silniejszym przeciwnikiem', 'Mały wzrost ELO', 'Remis może przewyższyć twój oczekiwany wynik'],
      ['Przegrywasz ze słabszym przeciwnikiem', 'Duży spadek ELO', 'Wynik był gorszy niż oczekiwano'],
    ]
  },
  { type: 'title' as const, text: 'Wybór Odpowiedniego Współczynnika K dla Twojego Systemu Rankingowego', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>Współczynnik K to pokrętło czułości systemu ELO.</strong> Nie decyduje on o tym, kto zasłużył na wygraną. Decyduje o tym, jak silnie tabela rankingowa reaguje na wynik. Jeśli twoja liga ma wiele meczów i dojrzałe rankingi, niższy K utrzymuje tabelę spokojną. Jeśli gracze są nowi lub sezony są krótkie, wyższy K pomaga rankingom szybciej nadrabiać zaległości.'
  },
  {
    type: 'table' as const,
    headers: ['Współczynnik K', 'Zastosowanie', 'Czego użytkownik powinien się spodziewać'],
    rows: [
      ['10 do 16', 'Uznane kluby szachowe, grupy ekspertów, długoterminowe rankingi', 'Bardzo stabilne rankingi z małymi zmianami po każdym meczu'],
      ['20 do 32', 'Lokalne ligi, drabinki klubowe, cykliczne turnieje', 'Zrównoważony ruch, który wydaje się responsywny bez przesadnej reakcji'],
      ['40 do 60', 'Nowi gracze, krótkie sezony, drabinki esportowe, nieformalne grupy', 'Szybka korekta, gdy obecny ranking może być niedokładny'],
      ['60 i więcej', 'Tylko formaty eksperymentalne lub rankingi tymczasowe', 'Bardzo zmienne rankingi, gdzie jeden mecz może znacząco zmienić tabelę'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Najlepsza wartość domyślna dla większości użytkowników',
    html: 'Jeśli nie przestrzegasz oficjalnych zasad federacji, zacznij od <strong>K 32</strong>. Jest wystarczająco responsywne dla aktywnych drabinek i jednocześnie na tyle stabilne, że jeden szczęśliwy wynik nie przepisze całkowicie rankingu.'
  },
  { type: 'title' as const, text: 'Jak Odczytać Wynik Twojego Kalkulatora ELO', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Oczekiwany:</strong> wynik, który formuła przewidziała przed meczem. Wyższy oczekiwany wynik oznacza, że byłeś faworytem.',
      '<strong>Zmiana:</strong> dokładne punkty ELO dodane do lub odjęte od rankingu gracza.',
      '<strong>Nowy ranking:</strong> ranking gracza po zastosowaniu wyniku.',
      '<strong>Nowe ELO przeciwnika:</strong> ranking przeciwnika po przeciwnym ruchu punktowym.',
      '<strong>Wpływ meczu:</strong> przystępne podsumowanie tego, jak silnie wynik przesunął tabelę.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Szachy i gry planszowe',
        description: 'Oblicz rankingi pomeczowe na wieczory klubowe, wydarzenia online i prywatne grupy rankingowe.',
        icon: 'mdi:chess-knight',
        points: ['Wsparcie wygrana-remis-porażka', 'Wyświetlane ELO przeciwnika', 'Dobre do długoterminowych rankingów']
      },
      {
        title: 'Drabinki esportowe',
        description: 'Aktualizuj rankingi graczy lub drużyn po powtarzających się meczach jeden na jednego, gdzie umiejętności mogą szybko się zmieniać.',
        icon: 'mdi:gamepad-variant',
        points: ['Opcje wyższego współczynnika K', 'Szybka korekta rankingu', 'Wyraźne nagrody za niespodzianki']
      },
      {
        title: 'Drabinki sportowe',
        description: 'Utrzymuj sprawiedliwe rankingi dla tenisa, padla, squasha, tenisa stołowego, badmintona i lokalnych lig.',
        icon: 'mdi:tennis',
        points: ['Proste ręczne aktualizacje', 'Działa dla klubów', 'Łatwe dla organizatorów']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'Kiedy ELO jest dobrym wyborem rankingowym',
    items: [
      {
        pro: 'Doskonałe do powtarzających się meczów jeden na jednego, gdzie silniejsi gracze powinni wygrywać częściej.',
        con: 'Mniej idealne dla sportów drużynowych, gdzie indywidualny wkład jest trudny do wyodrębnienia.'
      },
      {
        pro: 'Łatwe do wyjaśnienia, ponieważ wygrane z silniejszymi przeciwnikami są warte więcej punktów.',
        con: 'Potrzebuje wystarczającej liczby meczów, zanim rankingi będą wydawać się dokładne dla zupełnie nowych graczy.'
      },
      {
        pro: 'Wystarczająco proste do prowadzenia w arkuszu kalkulacyjnym, drabince klubowej lub tabeli ligowej.',
        con: 'Zasady współczynnika K muszą być spójne, w przeciwnym razie rankingom trudno ufać.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Ważne dla organizatorów lig',
    html: 'Wybierz współczynnik K przed rozpoczęciem sezonu i opublikuj go. Gracze bardziej ufają tabelom ELO, gdy wszyscy wiedzą, jak rankingi są obliczane przed wprowadzeniem wyników.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
