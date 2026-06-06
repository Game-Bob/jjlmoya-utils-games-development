import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BeachVolleyballLocaleContent } from '../entry';

const slug = 'licznik-punktow-siatkowki-plazowej';
const title = 'Licznik Punktów i Traker Rotacji w Siatkówce Plażowej';
const description = 'Śledź wyniki siatkówki plażowej, kolejność serwowania, zmiany stron z powodu wiatru oraz sety dzięki interaktywnej wizualizacji boiska z piaskiem z góry.';

const faq = [
  {
    question: 'Kiedy drużyny zmieniają strony w siatkówce plażowej?',
    answer: 'Aby zapewnić uczciwość w warunkach zewnętrznych (wiatr, słońce, piasek), drużyny zmieniają strony co 7 punktów podczas pierwszych dwóch setów i co 5 punktów podczas trzeciego decydującego seta.',
  },
  {
    question: 'Jak działa rotacja serwowania w siatkówce plażowej?',
    answer: 'Każda drużyna ma 2 zawodników, którzy muszą serwować na zmianę. Gdy drużyna wygrywa przerwę w serwisie (side-out), musi zmienić serwującego, tak aby zawodnik, który nie serwował ostatnim razem, serwował teraz.',
  },
  {
    question: 'Ile punktów potrzeba, aby wygrać seta w siatkówce plażowej?',
    answer: 'Sety 1 i 2 rozgrywane są do 21 punktów. Jeśli wymagany jest trzeci set, rozgrywany jest do 15 punktów. We wszystkich przypadkach drużyna musi wygrać przynajmniej dwoma punktami przewagi.',
  },
];

const howTo = [
  {
    name: 'Ustaw Skład',
    text: 'Wprowadź niestandardowe nazwy dla dwóch zawodników drużyny A i drużyny B.',
  },
  {
    name: 'Rejestruj Punkty',
    text: 'Dotknij karty drużyny lub kliknij na interaktywne boisko z piaskiem, aby dodać punkty. Skład i rotacja aktualizują się automatycznie.',
  },
  {
    name: 'Postępuj zgodnie z Ostrzeżeniami o Zamianie Stron',
    text: 'Gdy baner zamiany stron zjedzie w dół, dokonaj fizycznej zmiany stron i kliknij przycisk zamiany, aby odwrócić orientację boiska.',
  },
];

const faqSchema: WithContext<FAQPage> = {
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
  description,
  step: howTo.map((step, i) => ({
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

export const content: BeachVolleyballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Internetowa Tablica Wyników i Traker Rotacji Serwu w Siatkówce Plażowej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Śledzenie kolejności serwowania i pozycji drużyn w ostrym słońcu może być trudne. Ten profesjonalny licznik punktów do siatkówki plażowej posiada cyfrowy układ boiska o wysokim kontraście i teksturze piasku, zoptymalizowany pod kątem widoczności na zewnątrz. Zapobiega problemom z odblaskami, automatyzuje zasady zmiany stron i śledzi, który z dwóch zawodników ma serwować po każdym side-out.',
    },
    {
      type: 'title',
      text: 'Zrozumienie Rotacji i Zasad Serwowania w Siatkówce Plażowej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Chociaż w 2v2 siatkówce plażowej nie ma stałych pozycji ani błędów rotacji związanych z miejscem na boisku, zawodnicy muszą ściśle zmieniać się w serwowaniu. Gdy drużyna przyjmująca wygrywa wymianę (tzw. side-out), zyskuje prawo do serwu. Zawodnik, który nie serwował poprzednim razem, gdy jego drużyna serwowała, musi być nowym serwującym. Serwowanie w nieodpowiedniej kolejności jest błędem i skutkuje punktem dla przeciwników. Ta cyfrowa tablica zawiera aktywne wskaźniki serwowania i odbijające się piłki obok kółek zawodników, aby zapobiec błędom rotacji.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Oficjalne Zasady FIVB',
          description: 'Spełniaj oficjalne wytyczne punktacji, w tym limity setów i zmiany stron.',
          icon: 'mdi:volleyball',
          points: ['Sety do 21 ( tiebreak do 15)', 'Ścisły margines 2 punktów', 'Automatyczne zmiany stron'],
        },
        {
          title: 'Śledzenie Rotacji',
          description: 'Nigdy nie spieraj się ani nie myl, czyja kolej na serw.',
          icon: 'mdi:account-sync-outline',
          points: ['Podświetlane wskaźniki serwu', 'Inicjały naniesione na piasek', 'Modal nakładki składu'],
        },
        {
          title: 'Zoptymalizowany na Zewnątrz',
          description: 'Stworzony do rzeczywistej gry na piaszczystych boiskach w bezpośrednim świetle słonecznym.',
          icon: 'mdi:weather-sunny',
          points: ['Motyw żółty o wysokim kontraście', 'Utrzymywanie ekranu Wake Lock', 'Gest przesunięcia cofania wyniku'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Interaktywne Funkcje i Ustawienia Gry',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Złote Boisko SVG z Piaskiem:</strong> Wizualnie odzwierciedla stan gry. Dotknij bezpośrednio dowolnej połowy boiska, aby przyznać punkt tej drużynie.',
        '<strong>Animacja Obrótu Boiska:</strong> Gdy ostrzeżenie o zmianie stron się aktywuje, kliknięcie przycisku zamiany obraca całe boisko SVG o 180 stopni, aby wyświetlacz był zgodny z waszymi fizycznymi pozycjami.',
        '<strong>Alarmy Zmiany Stron FIVB:</strong> Wyświetla dobrze widoczny baner ostrzegawczy, gdy łączny wynik jest wielokrotnością 7 (w setach 1 i 2) lub wielokrotnością 5 (w secie końcowym).',
        '<strong>Cząsteczki Rozbryzgującego Piasku:</strong> Dodaje wizualne informacje zwrotne przy zmianach wyniku dzięki animowanym cząsteczkom piasku wydobywającym się z miejsca dotknięcia.',
        '<strong>Sterowanie Cofaniem Gestern:</strong> Przesuń palcem w dół na karcie, aby natychmiast cofnąć ostatnio zarejestrowany punkt.',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Drużyny Zmieniają Strony w Siatkówce Plażowej?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W przeciwieństwie do siatkówki halowej, mecze siatkówki plażowej są silnie uzależnione od czynników środowiskowych, takich jak odblaski słońca, upał, siła wiatru i konsystencja piasku. Częste zmiany stron zapewniają, że żadna z drużyn nie uzyskuje nieuczciwej przewagi z powodu korzystnego kierunku wiatru lub słońca świecącego w oczy. Zasady nakazują zmianę stron co 7 punktów podczas pierwszych dwóch setów i co 5 punktów podczas trzeciego seta.',
    },
  ],
  ui: {
    teamA: 'Drużyna 1',
    teamB: 'Drużyna 2',
    points: 'Punkty',
    sets: 'Sety',
    reset: 'Resetuj',
    resetConfirm: 'Zresetować mecz? Wszystkie wyniki i składy zostaną utracone.',
    cancel: 'Anuluj',
    switchSides: 'Zamień Strony',
    switchSidesDesc: 'Łączny wynik osiągnął próg zmiany!',
    fullscreen: 'Pełny Ekran',
    exitFullscreen: 'Wyjdź z Pełnego Ekranu',
    player1: 'Zawodnik 1',
    player2: 'Zawodnik 2',
    serving: 'Serwuje',
    winner: 'Zwycięzca',
    undo: 'Cofnij',
  },
};
