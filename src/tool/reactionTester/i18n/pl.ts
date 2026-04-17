import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'test-reakcji';
const title = 'Test Szybkości Reakcji (Refleksy): Benchmark Online';
const description = 'Zmierz swoje refleksy w milisekundach za pomocą naszego profesjonalnego testu reakcji. Rywalizuj o rangi od \"Żółwia\" do \"Cyberatety\" i przeanalizuj swoje wyniki.';

const ui: ReactionTesterUI = {
  title: 'Test Reakcji',
  subtitle: 'Zmierz szybkość swoich refleksów w milisekundach. Średnia z 5 prób.',
  startBtn: 'Kliknij aby zacząć',
  goTitle: 'DAWAJ!',
  goSubtitle: 'KLIKNIJ TERAZ!',
  earlyTitle: 'Za wcześnie!',
  earlySubtitle: 'Czekaj na zielony kolor.',
  earlyRetry: 'Kliknij aby spróbować ponownie',
  promptNext: 'Kliknij aby następna próba',
  promptFinal: 'Pokaż Ostateczne Wyniki',
  avgLabel: 'Średnia ostateczna',
  copyBtn: 'Kopiuj',
  tweetBtn: 'Tweet',
  retryBtn: 'Spróbuj ponownie',
  inputMouse: 'Mysz',
  inputTouch: 'Dotyk',
  inputSpace: 'Spacja',
  historyTitle: 'Historia Lokalna',
  historyBest: 'Top 5 Najlepsze',
  historyWorst: 'Top 5 Najgorsze',
  historyEmpty: 'Graj aby zarejestować swój pierwszy wynik',
  copySuccess: 'Skopiowano!',
  shareText: 'Uzyskałem {ms}ms w Teście Reaktywności!\nRanga: {rank}\n\nCzy potrafisz mnie pokonać?\n{url}',
  rankCiberatleta: 'Cyberateta',
  rankTigre: 'Tygrys',
  rankHumano: 'Człowiek',
  rankTortuga: 'Żółw',
  rankDormido: 'Śpiący',
  f150: 'JESTEŚ ROBOTEM?!',
  f180: 'NIESAMOWITE!',
  f210: 'Bardzo szybko!',
  f250: 'Dobra reakcja',
  f300: 'Nieźle...',
  f400: 'Trochę powoli...',
  f600: 'Zasnąłeś',
  fSlow: 'Obudź się...',
  wp0t: 'CZEKAJ...', wp0s: 'Wstrzymaj oddech...',
  wp1t: 'SPOKOJNIE...', wp1s: 'Nie mrugaj teraz',
  wp2t: 'GOTOWY...', wp2s: 'Palce gotowe...',
  wp3t: 'TRZYMAJ...', wp3s: 'Cierpliwości, młody uczniowie',
  wp4t: 'SKONCENTRUJ...', wp4s: 'To już się zbliża...',
};

const faqData = [
  { question: 'Jaki jest średni czas reakcji człowieka?', answer: 'Średni czas reakcji człowieka na bodziec wizualny wynosi około 250-270 milisekund. Zawodnicy wysokiej klasy i profesjonalni gracze zwykle uzyskują poniżej 200 ms.' },
  { question: 'Jak mogę poprawić moje refleksy?', answer: 'Kluczem jest konsekwentna praktyka i odpoczynek. Granie w gry akcji (FPS), ćwiczenie szybkich sportów takich jak tenis stołowy i utrzymywanie prawidłowego nawodnienia pomaga utrzymać układ nerwowy czujny.' },
  { question: 'Czy ekran wpływa na mój wynik?', answer: 'Tak. Istnieje coś, co się zwie \"opóźnieniem wejścia\". Ekrany o niskiej częstotliwości odświeżania (60Hz) lub stare myszy bezprzewodowe mogą dodać 15-50 ms do twojego rzeczywistego czasu reakcji.' },
  { question: 'W jakim wieku zaczynamy tracić refleksy?', answer: 'Fiziologicznie, refleksy człowieka osiągają szczyt między 20 a 24 rokiem życia. Następnie następuje bardzo powolny spadek (około 2-6 ms na dekadę), jeśli się nie trenuje.' },
];

const howTo = [
  { name: 'Czekaj na czerwień', text: 'Kliknij w obszar startowy i cierpliwie czekaj, aż kolor ekranu się zmieni.' },
  { name: 'Zareaguj na zieleń', text: 'Gdy tylko zobaczysz zielony kolor, kliknij lub dotknij ekran tak szybko jak to możliwe.' },
  { name: 'Zobacz swój wynik', text: 'System obliczy dokładną różnicę w milisekundach między zmianą koloru a twoim dotknięciem.' },
  { name: 'Przeanalizuj swoją rangę', text: 'Powtórz test 5 razy, aby uzyskać wiarygodną średnią i dowiedz się, czy jesteś \"Żółwiem\" czy \"Cyberateta\".' },
];

const seo = [
  { type: 'title' as const, text: 'Jak działa ten test reakcji?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'To narzędzie mierzy twoją <strong>wizualną szybkość reakcji</strong> z chirurgiczną dokładnością. Obliczamy dokładny przedział czasu od momentu, gdy ekran się zaświeci, aż sygnał przejdzie z twoich oczu do mózgu, a następnie do palców. Test wymaga <strong>5 kolejnych prób</strong>, aby obliczyć twoją rzeczywistą średnią, eliminując czynnik szczęścia.',
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Średnia z 5 prób:</strong> Eliminujemy czynnik \"szczęścia\" poprzez wymaganie konsekwencji. Jedno szczęśliwe kliknięcie nie uczyni cię Cyberateta.',
      '<strong>System Anti-Cheat:</strong> Losowe czasy oczekiwania (1,5s - 4,5s) oraz detekcja wczesnych kliknięć w celu zapobiegania przewidywaniu.',
      '<strong>Prawdziwa nauka:</strong> Przetwarzanie mózgu ~180-200 ms + odpowiedź motoryczna +20-40 ms = twój całkowity czas reakcji.',
    ],
  },
  { type: 'title' as const, text: 'Światowa Tabela Rankingowa', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Czas', 'Ranga', 'Opis'],
    rows: [
      ['&lt; 180 ms', 'Cyberateta', 'Poziom ponadludzki typowy dla profesjonalistów esportów lub pilotów myśliwców.'],
      ['180 - 230 ms', 'Tygrys', 'Ostre refleksy. Prawdopodobnie świetnie radzisz sobie w grach strzelackich.'],
      ['230 - 280 ms', 'Człowiek', 'Zdrowa średnia. Jesteś świadomy i funcjonujesz prawidłowo.'],
      ['280 - 350 ms', 'Żółw', 'Poniżej średniej. Odpoczywaj lub więcej ćwicz.'],
      ['&gt; 350 ms', 'Śpiący', 'Możliwe zmęczenie, senność lub powolny sprzęt (opóźnienie wejścia).'],
    ],
  },
  { type: 'title' as const, text: 'Dlaczego jesteś powolny? Obwinianie sprzętu', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Monitor (Hz)',
        description: 'Monitor 60Hz potrzebuje około 16ms na narysowanie klatki. Monitor 144Hz potrzebuje tylko 7ms. Ta różnica 10ms liczy się w twoim ostatecznym wyniku.',
        icon: 'mdi:monitor',
        points: ['60Hz = około 16ms na klatkę', '144Hz = około 7ms na klatkę', 'Widoczna różnica w teście'],
      },
      {
        title: 'Mysz bezprzewodowa',
        description: 'Tanie biurowe myszy Bluetooth mają wysoką latencję. Do tego testu użyj kabla lub technologii bezprzewodowej 2,4GHz z niską latencją.',
        icon: 'mdi:mouse-variant',
        points: ['Tanie Bluetooth: +15-50ms', 'Gaming 2.4GHz: <1ms dodatkowe', 'Kabel USB: referencja'],
      },
      {
        title: 'Przeglądarka',
        description: 'Rozszerzenia blokujące reklamy lub ciężkie skrypty mogą powodować opóźnienia. Spróbuj trybu incognito, aby uzyskać twój rzeczywisty wynik.',
        icon: 'mdi:web',
        points: ['Zamknij ciężkie rozszerzenia', 'Incognito = czystsze', 'Chrome/Firefox zalecane'],
      },
    ],
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faqTitle: 'Najczęściej Zadawane Pytania', faq: faqData, bibliography: [], howTo, schemas };
