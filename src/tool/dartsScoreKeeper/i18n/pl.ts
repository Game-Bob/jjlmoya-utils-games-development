import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DartsScoreKeeperUI } from '../ui';

const slug = 'licznik-darta';
const title = 'Licznik Darta Online: Tracker Legów i Setów';
const description = 'Śledź mecze darta z punktacją legów i setów. Darmowy licznik darta online do meczów 501 i 301 z obliczeniami checkout na żywo i statystykami.';

const faqData = [
  {
    question: 'Jak działa punktacja w darcie 501 i 301?',
    answer: 'Gracze zaczynają z ustalonym wynikiem 501 lub 301 punktów. Każdy gracz na zmianę rzuca trzema strzałkami, a łączna wartość tych rzutów jest odejmowana od ich wyniku. Celem jest osiągnięcie dokładnie zera punktów. Jeśli zasada Double Out jest włączona, ostatnia zwycięska strzałka musi trafić w podwójny segment lub wewnętrzne bullseye.',
  },
  {
    question: 'Czym jest bust w darcie i kiedy występuje?',
    answer: 'Bust występuje, gdy gracz zdobędzie więcej punktów niż wynosi jego pozostały wynik, lub gdy jego wynik spadnie dokładnie do jednego punktu przy włączonej zasadzie Double Out. Kiedy gracz zrobi bust, jego tura natychmiast się kończy, a jego wynik jest resetowany do wartości z początku tej tury.',
  },
  {
    question: 'Jak obliczyć średnią w darcie?',
    answer: 'Średnią w darcie oblicza się, biorąc całkowitą liczbę zdobytych punktów, dzieląc ją przez całkowitą liczbę rzuconych strzałek i mnożąc wynik przez trzy. Reprezentuje to średni wynik, jaki gracz osiąga na standardową turę trzech strzałek.',
  },
  {
    question: 'Czym jest checkout w darcie?',
    answer: 'Checkout to specyficzna kombinacja rzutów potrzebna do zredukowania pozostałego wyniku do zera i wygrania lega. Profesjonalne liczniki wyświetlają sugestie checkout dla wyników 170 i poniżej, prowadząc graczy, które pojedyncze, podwójne lub potrójne segmenty celować.',
  },
];

const howToData = [
  {
    name: 'Wybierz wynik początkowy i zasady',
    text: 'Wybierz 501 lub 301 jako wynik początkowy i włącz lub wyłącz zasadę Double Out w zależności od pożądanego poziomu gry.',
  },
  {
    name: 'Wprowadź nazwy graczy',
    text: 'Kliknij pola nazw graczy u góry tablicy, aby dostosować nazwy. Wartości zostaną automatycznie zapisane w przeglądarce.',
  },
  {
    name: 'Rejestruj rzucone strzałki',
    text: 'Użyj interaktywnej klawiatury lub dotknij bezpośrednio sektorów tarczy, aby rejestrować rzuty. Najpierw wybierz mnożnik (Pojedynczy, Podwójny lub Potrójny), a następnie trafioną liczbę.',
  },
  {
    name: 'Postępuj zgodnie z zaleceniami checkout',
    text: 'Gdy twój pozostały wynik spadnie poniżej 170, spójrz na panel checkout, aby zobaczyć optymalne cele do zakończenia lega.',
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

export const content: ToolLocaleContent<DartsScoreKeeperUI> = {
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
      text: 'Darmowy Licznik Darta Online i Tracker Meczów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zarządzanie wynikami w darcie wymaga szybkiej arytmetyki umysłowej i koncentracji. Ten cyfrowy tracker legów darta wykonuje wszystkie obliczenia za ciebie, pozwalając ci w pełni skupić się na rzucaniu. Niezależnie od tego, czy ćwiczysz sam, czy grasz mecz towarzyski z przyjaciółmi, ta tablica śledzi punkty, legi, sety, średnie rzutów i cele checkout double out.',
    },
    {
      type: 'title',
      text: 'Standardowe Formaty Punktacji w Darcie Wyjaśnione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mecze darta rozgrywane są w legach i setach. Najpopularniejszymi formatami na świecie są 501 i 301, oba gry polegające na odejmowaniu, w których gracze redukują swój wynik do zera.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Turniej 501',
          description: 'Standardowy format profesjonalnych turniejów na całym świecie.',
          icon: 'mdi:trophy-outline',
          points: ['Standardowy wynik początkowy', 'Double-out wymagany', 'Skupienie na wysokich wynikach'],
        },
        {
          title: '301 Casual',
          description: 'Szybsza wersja gry w odejmowanie, idealna do szybkich meczów towarzyskich.',
          icon: 'mdi:clock-outline',
          points: ['Szybsze tempo gry', 'Double-in opcja popularna', 'Świetna do treningu'],
        },
        {
          title: 'Tryb Cricket',
          description: 'Strategiczna gra w trafianie celów popularna w pubach i ligach.',
          icon: 'mdi:bullseye',
          points: ['Skupienie na liczbach 15-20', 'Śledzenie bullseye', 'Alternatywny system zasad'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Zrozumienie Matematyki Checkout w Darcie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Najwyższy możliwy checkout w darcie to 170, osiągnięty przez rzucenie Triple 20, Triple 20 i Double Bull. Gdy twój wynik osiągnie 170 lub mniej, wchodzisz w zasięg checkout, gdzie określona sekwencja strzałek może wygrać grę.',
    },
    {
      type: 'table',
      headers: ['Wynik', 'Cel Strzałka 1', 'Cel Strzałka 2', 'Cel Strzałka 3'],
      rows: [
        ['170', 'Triple 20 (60)', 'Triple 20 (60)', 'Double Bull (50)'],
        ['120', 'Triple 20 (60)', 'Single 20 (20)', 'Double 20 (40)'],
        ['100', 'Triple 20 (60)', 'Single 20 (20)', 'Double 10 (20)'],
        ['80', 'Triple 20 (60)', 'Double 10 (20)', '-'],
        ['40', 'Double 20 (40)', '-', '-'],
      ],
    },
    {
      type: 'title',
      text: 'Funkcje tej Cyfrowej Tablicy do Darta',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Interaktywne Metody Wprowadzania</strong> przełączaj między wizualną radialną tarczą a szybką klawiaturą numeryczną.',
        '<strong>Inteligentny Silnik Checkout</strong> wyświetla kombinacje na żywo do kończenia legów.',
        '<strong>Wykrywanie Bust</strong> automatycznie resetuje nielegalne rzuty i ostrzega użytkownika.',
        '<strong>Dziennik Historii Tur</strong> śledzi poprzednie rundy i pozostałe wyniki.',
        '<strong>Szczegółowe Statystyki Meczu</strong> dynamicznie oblicza średnie trzech strzałek.',
      ],
    },
    {
      type: 'title',
      text: 'Ręczne vs Cyfrowe Śledzenie Darta',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tradycyjne tablice kredowe wymagają pisania, wymazywania i ciągłych obliczeń. Ta tablica online eliminuje ryzyko błędów, automatyzuje średnie i przedstawia cele checkout. Umieść swoje urządzenie obok tarczy, włącz tryb pełnoekranowy, aby utrzymać ekran aktywny, i ciesz się bezproblemowym liczeniem punktów.',
    },
  ],
  ui: {
    playerA: 'Gracz 1',
    playerB: 'Gracz 2',
    winnerLabel: 'MISTRZ',
    reset: 'Resetuj',
    resetConfirm: 'Zresetować mecz? Wszystkie dane zostaną utracone.',
    cancel: 'Anuluj',
    fullscreen: 'Pełny ekran',
    exitFullscreen: 'Zamknij pełny ekran',
    leg: 'Leg',
    set: 'Set',
    average: 'Śred',
    checkout: 'Checkout',
    busted: 'Bust',
    dart: 'Rzut Darta',
    score301: '301',
    score501: '501',
    doubleOut: 'Double Out',
    noCheckout: 'Brak Checkout',
  },
};
