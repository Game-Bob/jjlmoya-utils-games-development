import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'dziennik-treningowy-gym';
const title = 'Tracker Treningowy: Wykresy Postępów i Dziennik Siłowy';
const description =
  'Rejestruj swoje ciężary, wybieraj ćwiczenia i wizualizuj postępy za pomocą wykresów siły. Optymalizuj progresywne przeładowanie na siłowni.';

const faqData = [
  {
    question: 'Jaki jest cel śledzenia treningów?',
    answer:
      'Służy to naukowemu stosowaniu progresywnego przeładowania. Wiedząc dokładnie, ile podniosłeś na poprzedniej sesji, możesz spróbować pobić ten wynik, co gwarantuje wzrost mięśni i długoterminowe zyski siłowe.',
  },
  {
    question: 'Jakie dane powinienem rejestrować?',
    answer:
      'Najważniejszy jest ciężar maksymalny (top set), który osiągnąłeś z dobrą techniką dla ustalonej liczby powtórzeń. Nasze narzędzie koncentruje się na rejestrowaniu ciężaru na każdej sesji w celu wygenerowania wykresu postępów.',
  },
  {
    question: 'Jak interpretować wykresy?',
    answer:
      'Linia wznosząca wskazuje, że robisz postępy. Linia płaska (stagnacja) sugeruje, że musisz dostosować objętość, intensywność lub regenerację. Stale opadająca linia może być oznaką przetrenowania.',
  },
  {
    question: 'Gdzie są przechowywane moje dane?',
    answer:
      'Dane są przechowywane lokalnie w Twojej przeglądarce (Local Storage). Oznacza to całkowitą prywatność i brak konieczności zakładania konta, ale jeśli wyczyścisz dane przeglądarki, historia zostanie utracona.',
  },
];

const howToData = [
  {
    name: 'Wybierz ćwiczenie',
    text: 'Wybierz z rozwijanego menu podstawowe boje, takie jak przysiad, wyciskanie na ławce czy martwy ciąg.',
  },
  {
    name: 'Wprowadź ciężar',
    text: 'Po najcięższej serii wpisz podniesione kilogramy/funty w odpowiednim polu.',
  },
  {
    name: 'Naciśnij Dodaj',
    text: 'Zapisz swój wynik. System automatycznie zaktualizuje historię i wykres postępów.',
  },
  {
    name: 'Analizuj swoją ewolucję',
    text: 'Okresowo zaglądaj do wykresu, aby zidentyfikować przestoje i motywować się widokiem realnego wzrostu siły.',
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
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje Naukowe',
  bibliography: [
    {
      name: 'Journal of Strength and Conditioning Research - Progressive Overload Study',
      url: 'https://journals.lww.com/nsca-jscr/Fulltext/2010/10000/The_Mechanisms_of_Muscle_Hypertrophy_and_Their.40.aspx',
    },
    {
      name: 'National Academy of Sports Medicine - Progressive Overload Explained',
      url: 'https://blog.nasm.org/progressive-overload-explained',
    },
    {
      name: 'Science of Strength - Data Tracking in Resistance Training',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30558493/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Śledzenie Treningu: Klucz do Prawdziwego Postępu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W świecie fitnessu i kulturystyki istnieje fundamentalna zasada, która oddziela tych, którzy osiągają niesamowite wyniki, od tych, którzy szybko wpadają w stagnację: <strong>progresywne przeładowanie (progressive overload)</strong>. Niemniej jednak, niemożliwe jest skuteczne stosowanie tej zasady, jeśli nie prowadzi się szczegółowych rejestrów swoich dźwignięć. W tym przewodniku zbadamy, dlaczego śledzenie treningów jest kluczowe, jak korzystać z naszego <strong>trackera treningowego</strong>, aby zmaksymalizować zyski, oraz podstawy naukowe wspierające tę praktykę.',
    },
    {
      type: 'title',
      text: 'Czym jest Progresywne Przeładowanie?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Progresywne przeładowanie to stopniowe zwiększanie stresu nakładanego na organizm podczas ćwiczeń fizycznych. Aby mięsień rósł lub stawał się silniejszy, musi być poddawany bodźcowi większemu niż ten, do którego jest przyzwyczajony. Jeśli idziesz na siłownię i zawsze podnosisz ten sam ciężar, z tą samą liczbą powtórzeń i tym samym czasem odpoczynku, Twoje ciało nie będzie miało biologicznego powodu, aby się adaptować i rosnąć.',
    },
    {
      type: 'list',
      items: [
        'Zwiększenie ciężaru: Podnoszenie większego obciążenia niż na poprzedniej sesji.',
        'Zwiększenie powtórzeń: Wykonywanie większej liczby powtórzeń z tym samym ciężarem.',
        'Zwiększenie objętości: Wykonywanie większej całkowitej liczby serii na grupę mięśniową.',
        'Skrócenie odpoczynku: Wykonanie tej samej pracy w krótszym czasie.',
        'Poprawa techniki: Wykonywanie ćwiczenia z lepszą kontrolą i większym zakresem ruchu.',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Dziennik Ręczny jest Lepszy od Pamięci',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wielu sportowców popełnia błąd, ufając swojej pamięci w kwestii tego, ile podnieśli w zeszłym tygodniu. Jednak w typowym treningu obejmującym od 5 do 10 różnych ćwiczeń, bardzo łatwo jest zapomnieć, czy było to 80 kg czy 82,5 kg na ławce, albo czy powtórzeń było 10 czy 12. Ten brak precyzji prowadzi do przeciętności.',
    },
    {
      type: 'tip',
      title: 'Moc Wizualizacji Postępu',
      html: 'Widok wznoszącej się linii na wykresie daje impuls potrzebny do spróbowania tego dodatkowego powtórzenia, które stanowi różnicę między stagnacją a stałym wzrostem mięśni.',
    },
    {
      type: 'title',
      text: 'Podstawowe Ćwiczenia do Śledzenia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Choć wszystkie ćwiczenia są wartościowe, pewne boje złożone (compound) oferują najlepszy wgląd w ogólną siłę i rozwój fizyczny. To na nich powinieneś skupić się w pierwszej kolejności: <strong>Wyciskanie na ławce</strong> dla wypychania horyzontalnego, <strong>Wyciskanie nad głowę</strong> dla wypychania wertykalnego, <strong>Podciąganie</strong> dla przyciągania oraz <strong>Hip Thrust</strong> dla pośladków.',
    },
    {
      type: 'title',
      text: 'Jak Analizować Wykresy Postępów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Po zarejestrowaniu kilku treningów zaczniesz dostrzegać wzorce: <strong>stale wznosząca się linia</strong> wskazuje właściwą drogę, <strong>stagnacja</strong> sugeruje potrzebę dostosowania objętości lub odpoczynku, a <strong>trend spadkowy</strong> może być oznaką nagromadzonego zmęczenia.',
    },
    {
      type: 'title',
      text: 'Psychologia Sukcesu na Siłowni',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Trening to wyzwanie zarówno mentalne, jak i fizyczne. Używając wizualnego narzędzia, które pokazuje, że dziś jesteś o 1% silniejszy niż dwa tygodnie temu, karmisz swój dopaminowy system nagrody. Tworzy to pozytywną pętlę zwrotną, która zmienia trening w trwały nawyk.',
    },
  ],
  ui: {
    exerciseLabel: 'Ćwiczenie',
    pushCategory: 'Pchanie (Push)',
    pullCategory: 'Przyciąganie (Pull)',
    gluteCategory: 'Pośladki',
    customExerciseCategory: 'Własne',
    addCustomExercisetitle: 'Dodaj ćwiczenie',
    newExerciseLabel: 'Nowe ćwiczenie',
    exercisePlaceholder: 'Nazwa ćwiczenia...',
    addBtn: 'Dodaj',
    registerWeightLabel: 'Zapisz Ciężar',
    weightPlaceholder: '00.0',
    startBtn: 'Start',
    resetBtn: 'Reset',
    okBtn: 'OK',
    noData: 'Brak danych',
    recordLabel: 'Rekord',
    lastLabel: 'Ostatnio',
    historyTitle: 'Wpisy',
    exportBtn: 'Eksportuj',
    confirmDeletetitle: 'Wyczyścić historię?',
    confirmDeleteText: 'Tej akcji nie można cofnąć. Wszystkie wpisy dla wybranego ćwiczenia zostaną usunięte.',
    deleteBtn: 'Usuń',
    cancelBtn: 'Anuluj',
    units: 'kg',

    benchPress: 'Wyciskanie na ławce',
    overheadPress: 'Wyciskanie nad głowę',
    pushPress: 'Push Press',
    inclineDbPress: 'Wyciskanie hantli skos',
    dipsTriceps: 'Dipsy tricepsowe',
    tricepsExtensions: 'Prostowanie linek wyciągu',
    pullUp: 'Podciąganie',
    barbellRow: 'Wiosłowanie sztangą',
    latPulldown: 'Ściąganie drążka',
    dbRow: 'Wiosłowanie hantlem',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Uginanie ramion ze sztangą',
    hipThrust: 'Hip Thrust',
    rdl: 'Martwy ciąg rumuński',
    lunges: 'Wykroki',
    gluteKick: 'Odwodzenie nogi na wyciągu',
    hipAbduction: 'Odwodzenie nóg na maszynie',
    stepUp: 'Step Upy',
  },
};
