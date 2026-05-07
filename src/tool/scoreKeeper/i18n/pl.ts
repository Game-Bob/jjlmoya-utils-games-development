import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ScoreKeeperUI } from '../ui';

const slug = 'tablica-wynikow-sportowych';
const title = 'Tablica Wyników Sportowych Online: Darmowy Licznik Punktów ';
const description =
  'Cyfrowa tablica wyników z gigantycznymi przyciskami na telefon. Idealna do padla, ping-ponga i piłki nożnej. Bez irytujących reklam w trakcie gry. Prosta i szybka.';

const faqData = [
  {
    question: 'Czy to działa bez połączenia z internetem?',
    answer:
      'Tak, po załadowaniu strony tablica wyników działa całkowicie offline. Nie potrzebujesz danych ani WiFi podczas meczu. Wszystko jest zapisywane lokalnie w Twojej przeglądarce.'
  },
  {
    question: 'Czy mogę używać tablicy do tenisa i padla?',
    answer:
      'Tak, tryb Tenis/Padel automatycznie obsługuje sekwencję 15-30-40-AD i śledzi sety oraz gemy zgodnie z oficjalnymi zasadami. Idealne do meczów towarzyskich.'
  },
  {
    question: 'Czy można ją wyświetlić na pełnym ekranie?',
    answer:
      'Tak, możesz aktywować tryb pełnoekranowy w swojej przeglądarce (F11 na PC lub przycisk pełnego ekranu na telefonie). Cyfry zajmują 80% ekranu dla maksymalnej widoczności.'
  },
  {
    question: 'Jak poprawić punkt, jeśli popełnię błąd?',
    answer:
      'Na każdej karcie gracza znajduje się osobny przycisk do odejmowania punktów. Możesz szybko poprawić błędy bez konieczności restartowania całej tablicy.'
  },
  {
    question: 'Czy to działa w koszykówce z rzutami za 1, 2 i 3 punkty?',
    answer:
      'Tak, w trybie Koszykówka pojawiają się dedykowane przyciski +1, +2 i +3, aby szybko zapisywać punkty bez zbędnych kliknięć.'
  },
  {
    question: 'Czy tablica automatycznie obsługuje serwis w ping-pongu?',
    answer:
      'Tak, w trybie Ping Pong wskaźnik serwisu zmienia się automatycznie co 2 punkty (lub co każdy punkt przy stanie równowagi), zgodnie z oficjalnymi zasadami ITTF.'
  },
];

const howToData = [
  {
    name: 'Wybierz dyscyplinę',
    text: 'Wybierz sport z selektora na górze: Dowolny, Tenis, Padel, Ping Pong, Siatkówka lub Koszykówka.'
  },
  {
    name: 'Dostosuj nazwy',
    text: 'Dotknij "GOSPODARZE" lub "GOŚCIE", aby zmienić nazwy graczy lub drużyn.'
  },
  {
    name: 'Dodaj punkty jednym dotknięciem',
    text: 'Dotknij dużego obszaru tablicy, aby dodać punkt. W koszykówce używaj przycisków +1, +2 lub +3.'
  },
  {
    name: 'Oznacz serwis',
    text: 'Użyj przycisku serwisu w dolnym rogu, aby oznaczyć, kto serwuje. Żółty wskaźnik pojawi się automatycznie.'
  },
  {
    name: 'Popraw błędy',
    text: 'Użyj przycisku "−", jeśli przez pomyłkę dodałeś punkt. Nie musisz restartować całej tablicy.'
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
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
    text: step.text
  }))
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pl'
};

export const content: ToolLocaleContent<ScoreKeeperUI> = {
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
      text: 'Twój cyfrowy sędzia w kieszeni',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'W ferworze walki łatwo stracić rachubę. "Było 4-3 czy 3-4?". Ta tablica wyników została zaprojektowana, aby rozstrzygać takie spory przed ich rozpoczęciem. Dzięki interfejsowi z <strong>gigantycznymi przyciskami</strong>, które zajmują niemal całą kartę, możesz dodawać punkty bez patrzenia na ekran, po prostu wyciągając rękę do telefonu na ławce.'
    },
    {
      type: 'title',
      text: 'Inteligentny Wybór Sportu',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tryb Tenis / Padel',
          description:
            'Dostosowany interfejs z licznikami setów i gemów. System automatycznie obsługuje sekwencję 15-30-40-AD.',
          icon: 'mdi:tennis',
          points: ['Oficjalne zasady', 'Zarządzanie przewagą', 'Licznik setów']
        },
        {
          title: 'Tryb Koszykówka',
          description:
            'Tablica wykrywa sport i zmienia swój interfejs. Dedykowane przyciski +1, +2 i +3.',
          icon: 'mdi:basketball',
          points: ['Szybkie trójki', 'Rzuty wolne', 'Bez zbędnych kliknięć']
        },
        {
          title: 'Tryb Ping Pong',
          description:
            'Zapomnij o zapamiętywaniu, czyja kolej na serwis. Wizualny wskaźnik zmienia się automatycznie co 2 punkty.',
          icon: 'mdi:table-tennis',
          points: ['Zasady ITTF', 'Rotacja serwisu', 'Tryb deuce (11 pkt)']
        },
      ]
    },
    {
      type: 'title',
      text: 'Funkcje Zaprojektowane dla Sportu',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Wysoka widoczność:</strong> Cyfry zajmujące 80% ekranu dla maksymalnej czytelności w słońcu.',
        '<strong>Edytowalne nazwy:</strong> Dotknij "GOSPODARZE" lub "GOŚCIE", aby ustawić nazwy graczy.',
        '<strong>Zapobieganie błędom:</strong> Osobny przycisk minusa do szybkiej poprawy błędów bez restartu.',
        '<strong>Działa offline:</strong> Po załadowaniu nie potrzebujesz internetu podczas meczu.',
      ]
    },
  ],
  ui: {
    playerA: 'GOSPODARZE',
    playerB: 'GOŚCIE',
    swapSides: 'Zamień strony',
    reset: 'Reset',
    serve: 'Serwis',
    sets: 'Sety',
    games: 'Gemy',
    victory: 'ZWYCIĘSTWO!',
    newGame: 'Nowy Mecz',
    continueGame: 'Graj dalej',
    resetConfirm: 'Zresetować tablicę?',
    sportSimple: 'Dowolny (Piłka nożna, Kółko i krzyżyk...)',
    sportTennis: 'Tenis',
    sportPadel: 'Padel',
    sportPingpong: 'Ping Pong',
    sportVolleyball: 'Siatkówka',
    sportBasket: 'Koszykówka'
  }
};
