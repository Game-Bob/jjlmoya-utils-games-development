import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'kalkulator-rzutow-karnych';
const title = 'Tablica Rzutów Karnych Online: Licznik Serii Karnych';
const description =
  'Śledź serię rzutów karnych w piłce nożnej na żywo. Rejestracja 5 strzałów, matematyczna eliminacja, zasada nagłej śmierci i animacja zwycięzcy.';

const faqData = [
  {
    question: 'Kiedy seria rzutów karnych kończy się przedwcześnie?',
    answer:
      'Seria kończy się w momencie, gdy jedna z drużyn uzyska przewagę bramkową, której rywal nie jest już w stanie matematycznie odrobić pozostałymi strzałami.',
  },
  {
    question: 'Jak działa zasada nagłej śmierci w rzutach karnych?',
    answer:
      'Jeśli po 5 rzutach karnych dla każdej drużyny utrzymuje się remis, strzały wykonuje się pojedynczo, aż jedna drużyna strzeli, a druga spudłuje w tej samej kolejce.',
  },
  {
    question: 'Kto strzela pierwszy w serii rzutów karnych?',
    answer:
      'Sędzia wykonuje rzut monetą w celu wyboru bramki oraz drugi rzut monetą, aby wyłonić drużynę wykonującą pierwszy strzał.',
  },
  {
    question: 'Czy można zmienić bramkarza podczas serii rzutów karnych?',
    answer:
      'Kontuzjowany bramkarz niezdolny do dalszej gry może zostać zastąpiony przez zgłoszonego rezerwowego, o ile drużyna nie wykorzystała limitu zmian.',
  },
];

const howToData = [
  {
    name: 'Wprowadź nazwy drużyn',
    text: 'Wpisz własne nazwy zespołów w polach formularza przed rozpoczęciem serii.',
  },
  {
    name: 'Rejestruj każdy strzał',
    text: 'Klikaj GOL lub Pudło po każdym strzale. Aplikacja automatycznie aktualizuje wynik, wskaźniki i kolejność wykonawców.',
  },
  {
    name: 'Przejście do Nagłej Śmierci',
    text: 'W przypadku remisu po 5 strzałach na drużynę, narządzenie automatycznie przechodzi do trybu nagłej śmierci.',
  },
  {
    name: 'Ogłoszenie Zwycięzcy',
    text: 'Po osiągnięciu wygranej matematycznej lub w nagłej śmierci, animowane okno ogłasza zwycięski zespół.',
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

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Oficjalne Przepisy IFAB Dotyczące Rzutów Karnych',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Seria rzutów karnych (oficjalnie <em>strzały z punktu karnego</em>) rozstrzyga o zwycięstwie w zremisowanym meczu piłki nożnej zgodnie z Artykułem 10 Przepisów Gry IFAB.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Początkowe Strzały' },
        { value: '11m', label: 'Odległość od Bramki' },
        { value: '1v1', label: 'Strzelec vs Bramkarz' },
        { value: 'ABBA / AB', label: 'Kolejność Wykonania' },
      ],
    },
    {
      type: 'tip',
      title: 'Zasada Eliminacji Matematycznej',
      html: 'Jeśli jedna z drużyn zdobędzie więcej bramek, niż przeciwnik jest w stanie uzyskać z pozostałych rzutów karnych, sędzia kończy serię.',
    },
    {
      type: 'title',
      text: 'Porównanie Fazy Regularnej i Nagłej Śmierci',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Faza Regularna (5 Karnych)',
          description: 'Seria 5 strzałów naprzemiennych dla każdej drużyny. Wcześniejszy koniec tylko w przypadku braku szans na odrobienie strat.',
        },
        {
          title: 'Faza Nagłej Śmierci',
          description: 'Pojedyncze kolejki po 5. rundzie. Każda różnica bramek przy równej liczbie wykonanych strzałów przynosi wygraną.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Najważniejsze Wymogi Przepisów IFAB',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Przepis / Wymóg', 'Oficjalny Standard IFAB'],
      rows: [
        ['Uprawnieni Gracze', 'Wyłącznie zawodnicy przebywający na boisku w momencie końcowego gwizdka mogą wykonywać karne.'],
        ['Pozycja Bramkarza', 'Musi utrzymywać przynajmniej część jednej stopy na linii bramkowej w momencie uderzenia.'],
        ['Zwody w Nabiegu', 'Zwody podczas rozbiegu są dozwolone; zwód po zakończeniu rozbiegu jest karany.'],
        ['Liczebność Zespołów', 'Jeśli drużyna ma mniej graczy wskutek czerwonej kartki, rywal musi zmniejszyć skład do tej samej liczby.'],
      ],
    },
    {
      type: 'title',
      text: 'Zalety i Wady Rzutów Karnych',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Ocena Formatu',
      items: [
        {
          pro: 'Gwarantuje wyłonienie zwycięzcy w przewidywalnym czasie.',
          con: 'Ogromna presja psychiczna może przysłonić postawę zespołu w ciągu 120 minut gry.',
        },
        {
          pro: 'Dostarcza ogromnych emocji i widowiska dla kibiców.',
          con: 'Pudło indywidualnego zawodnika obarczone jest potężną odpowiedzialnością.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Gospodarze',
    teamBLabel: 'Goście',
    scoreGoal: 'GOL',
    scoreMiss: 'PUDŁO',
    undo: 'Cofnij',
    reset: 'Resetuj',
    suddenDeath: 'Nagła Śmierć',
    regularRounds: 'Runda Regularna',
    roundLabel: 'Runda',
    turnLabel: 'Kolej Strzału',
    winnerTitle: 'Zwycięzca Wyłoniony',
    unreachableLead: 'Nieosiągalna przewaga w fazie regularnej',
    regularRoundsWin: 'Wygrana po 5 karnych regularnych',
    suddenDeathWin: 'Wygrana w nagłej śmierci',
    statusPending: 'Oczekuje',
    statusScored: 'Trafiony',
    statusMissed: 'Chybiony',
  },
};
