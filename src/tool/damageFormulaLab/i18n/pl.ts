import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'kalkulator-formul-obrazen-gier-ttk';
const title = 'Laboratorium Formuł Obrażeń i Wykresów TTK';
const description = 'Porównuj formuły obrażeń w grach w czasie rzeczywistym za pomocą interaktywnych wykresów, map ciepła, zaokrągleń, trafień krytycznych i czasu zabicia (TTK).';

const faq = [
  {
    question: 'Co porównuje kalkulator formuł obrażeń?',
    answer: 'Wykonuje dwie bezpieczne formuły matematyczne na tych samych parametrach walki. Pozwala porównywać krzywe obrażeń, progi liczby trafień, czas zabicia (TTK), reguły zaokrąglania oraz kolejność naliczania pancerza i odporności.',
  },
  {
    question: 'Jakie zmienne i funkcje są dostępne?',
    answer: 'Dostępne zmienne to attack, defense, level, power, resistance, flat, criticalChance oraz criticalMultiplier. Bezpieczne funkcje to min, max, clamp, abs, sqrt, pow, floor, round i ceil.',
  },
  {
    question: 'Jak obliczany jest czas zabicia (TTK)?',
    answer: 'Liczba wymaganych trafień to punkty życia celu podzielone przez zaokrąglone spodziewane obrażenia (w górę). TTK mierzy odstęp między pierwszym a ostatnim trafieniem: (trafienia - 1) / ataki na sekundę.',
  },
  {
    question: 'Dlaczego kolejność odporności ma znaczenie?',
    answer: 'Zastosowanie stałego modyfikatora przed procentową odpornością zmniejsza również ten modyfikator. Zastosowanie odporności w pierwszej kolejności pozostawia stały modyfikator bez zmian.',
  },
  {
    question: 'Czy gładka krzywa gwarantuje zbalansowaną grę?',
    answer: 'Nie. Krzywa ujawnia progi i strefy zerowych obrażeń, ale balans zależy od kontekstu gry, ról postaci i testów z graczami.',
  },
];

const howTo = [
  { name: 'Wybierz dwie formuły', text: 'Zacznij od szablonu (liniowy, proporcjonalny, skalowanie poziomem) lub wpisz własne formuły A i B.' },
  { name: 'Ustaw parametry walki', text: 'Wprowadź wartości ataku, obrony, poziomu, współczynnika mocy, odporności, modyfikatora stałego, krytyków, zdrowia i szybkości ataku.' },
  { name: 'Określ reguły silnika', text: 'Wybierz sposób zaokrąglania obrażeń oraz kolejność uwzględniania odporności procentowej i modyfikatora stałego.' },
  { name: 'Analizuj wykresy i progi', text: 'Porównaj przebieg obrażeń, mapę ciepła obrony, liczbę potrzebnych ciosów i ostrzeżenia diagnostyczne.' },
  { name: 'Zapisz eksperyment', text: 'Skopiuj link udostępniania lub pobierz konfigurację w formacie JSON, tabelę CSV albo wykres w formacie PNG.' },
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

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Wpisz obecnie używaną formułę obrażeń, zestaw ją z alternatywą i dostosuj parametry walki.',
    localNote: 'Prywatny model. Formuły i pliki pozostają w Twojej przeglądarce.',
    formulaDeck: 'Komora formuł',
    formulaALabel: 'Formuła A (Obecny model)',
    formulaBLabel: 'Formuła B (Alternatywa)',
    formulaHint: 'Zmienne: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Bezpieczne funkcje: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Ochrona liniowa',
    presetRatio: 'Pancerz proporcjonalny',
    presetLevel: 'Skalowanie poziomem',
    combatInputs: 'Parametry walki',
    attackLabel: 'Atak',
    defenseLabel: 'Obrona',
    levelLabel: 'Poziom',
    powerLabel: 'Współczynnik mocy',
    resistanceLabel: 'Odporność (%)',
    flatLabel: 'Modyfikator stały',
    criticalChanceLabel: 'Szansa na krytyk (%)',
    criticalMultiplierLabel: 'Mnożnik krytyka',
    healthLabel: 'Zdrowie celu',
    cadenceLabel: 'Ataki na sekundę',
    roundingLabel: 'Zaokrąglanie obrażeń',
    roundingNone: 'Zachowaj ułamki',
    roundingFloor: 'W dół (Floor)',
    roundingRound: 'Do najbliższej całkowitej',
    roundingCeil: 'W górę (Ceil)',
    orderLabel: 'Kolejność modyfikatorów',
    resistanceFirst: 'Najpierw odporność, potem stały',
    flatFirst: 'Najpierw stały, potem odporność',
    runLabel: 'Porównanie wpływu na żywo',
    resultDamage: 'Spodziewane obrażenia',
    resultHits: 'Ciosy do pokonania',
    resultTtk: 'Czas zabicia (TTK)',
    resultDifference: 'Różnica obrażeń',
    formulaAName: 'Obecny',
    formulaBName: 'Alternatywa',
    curveTitle: 'Przebieg przy wzroście ataku',
    curveCaption: 'Wartość ataku zmienia się od połowy do dwukrotności obecnej wartości przy stałej obronie.',
    heatmapTitle: 'Mapa ciepła nacisku',
    heatmapCaption: 'Pokazuje spodziewane obrażenia Formuły A dla kombinacji ataku i obrony.',
    attackAxis: 'Atak rośnie w prawo',
    defenseAxis: 'Obrona rośnie w dół',
    scenariosTitle: 'Profile walki',
    scenarioSkirmisher: 'Hultaj',
    scenarioGuardian: 'Strażnik',
    scenarioBoss: 'Boss',
    scenarioCustom: 'Obecne ustawienia',
    diagnosticsTitle: 'Weryfikacja progów',
    statusBalanced: 'Nie wykryto skoków ani anomalii w tym zakresie testowym.',
    exportTitle: 'Eksportuj eksperyment',
    copyLink: 'Skopiuj link',
    exportCsv: 'Pobierz CSV',
    exportJson: 'Pobierz JSON',
    importJson: 'Importuj JSON',
    exportPng: 'Pobierz wykres PNG',
    reset: 'Zresetuj model',
    privacyDisclosure: 'Link udostępniania zapisuje konfigurację w adresie URL i nie wysyła danych do serwerów.',
    limitationDisclosure: 'Spodziewane obrażenia krytyczne to wartość średnia, a nie losowa symulacja.',
    importError: 'Wybrany plik nie jest prawidłową konfiguracją.',
    copiedStatus: 'Link skopiowany do schowka.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Testuj formuły obrażeń przed wdrożeniem do silnika gry',
    },
    {
      type: 'paragraph',
      html: 'Formuła obrażeń może wyglądać dobrze przy podstawowych statystykach, ale załamywać się na wysokich poziomach. To laboratorium pozwala wcześnie wykryć niepożądane progi i strefy zerowe.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Bezpieczny i ograniczony język wyrażeń',
    },
    {
      type: 'paragraph',
      html: 'Pole wyrażenia akceptuje wyłącznie zdefiniowane zmienne i bezpieczne funkcje matematyczne bez wykonywania niebezpiecznego kodu.',
    },
    {
      type: 'table',
      headers: ['Wskaźnik', 'Obliczenie', 'Pytanie projektowe'],
      rows: [
        ['Spodziewane obrażenia', 'Formuła podstawowa uwzględniająca krytyki i odporność', 'Czy formuła działa sensownie na słabych i silnych postaciach?'],
        ['Ciosy do pokonania', 'Zdrowie celu podzielone przez zaokrąglone obrażenia', 'Czy 1 dodatkowy punkt statystyki usuwa cały wymagany cios?'],
        ['Czas zabicia (TTK)', 'Odstęp między ciosami podzielony przez szybkość ataku', 'Czy szybkość ataku tworzy zamierzony rytm walki?'],
        ['Mapa ciepła', 'Próbkowanie Formuły A na przestrzeni ataku i obrony', 'Czy istnieją nieoczekiwane progi lub martwe strefy?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Oddzielenie arytmetyki od decyzji o balansie',
    },
    {
      type: 'paragraph',
      html: 'Gładki wykres nie jest gwarancją satysfakcjonującej rozgrywki. Używaj laboratorium do wyznaczania hipotez do testów z graczami.',
    },
    {
      type: 'tip',
      title: 'Analizuj obrażenia i liczbę ciosów jednocześnie',
      html: 'Niewielka zmiana obrażeń może przekroczyć próg zdrowia i zmniejszyć liczbę ciosów o jeden. Zawsze porównuj obrażenia z czasem zabicia (TTK).',
    },
    { type: 'paragraph', html: 'Ta sama formuła może dać inny przebieg walki zależnie od zaokrągleń i kolejności modyfikatorów. Sprawdź także małe obrażenia, wysoką obronę i próg dodatkowego trafienia; TTK nie obejmuje uników, cooldownów ani przerw.' },
  ],
  faq,
  bibliographyTitle: 'Referencje do projektowania matematyki w grach',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
