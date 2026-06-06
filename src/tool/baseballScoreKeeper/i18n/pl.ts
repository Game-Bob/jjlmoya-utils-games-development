import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'licznik-punktow-baseball';
const title = 'Profesjonalny Licznik Punktow w Baseballu i Softballu z Wizualizacja Diamentu';
const description = 'Sledz na zywo wyniki baseballu z punktami, uderzeniami i bledami. Wizualny diament z pozycjami biegaczy, licznikiem pilek i strikeow oraz historia inning po inningu.';

const faqData = [
  {
    question: 'Jak dziala licznik w baseballu?',
    answer: 'Licznik pokazuje liczbe pilek i strikeow u aktualnego odbijajacego. Pilki moga isc do 4 dla spaceru. Strikei do 3 dla strikeoutu. Regulowane limity dla lig mlodziezowych.',
  },
  {
    question: 'Co pokazuje interaktywny diament baseballowy?',
    answer: 'Diament pokazuje pierwsza, druga i trzecia baze. Dotkniecie bazy podswietla ja na pomaranczowo, wskazujac biegacza na tej bazie. Biegacze przesuwaja sie automatycznie po uderzeniach.',
  },
  {
    question: 'Jak sledzone sa punkty, uderzenia i bledy?',
    answer: 'Macierz R H E wyswietla punkty, uderzenia i bledy dla obu druzyn. Historia inning po inningu pokazuje jak wynik budowal sie w calym meczu.',
  },
];

const howToData = [
  {
    name: 'Rejestruj Kazdy Rzut',
    text: 'Kliknij Strike, Pilka, Foul, Uderzenie lub Aut aby zarejestrowac kazdy rzut. Licznik aktualizuje sie automatycznie na podstawie wyniku.',
  },
  {
    name: 'Zarzadzaj Biegaczami na Bazach',
    text: 'Kliknij bazy na diamencie aby ustawic lub usunac biegaczy. Po uderzeniu biegacze przesuwaja sie automatycznie.',
  },
  {
    name: 'Sledz Postep Inningu',
    text: 'Wyswietlacz inningu pokazuje aktualna polowe inningu. Po trzech autach gra automatycznie przelacza sie miedzy gorna i dolna polowa.',
  },
  {
    name: 'Przegladaj Tabele Wynikowa',
    text: 'Sprawdz podsumowanie R H E oraz przewijana siatke historii inningow, aby zobaczyc pelny przebieg wynikow.',
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
    image: undefined,
    url: undefined,
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Licznik Punktow Baseball Online: Sledz Punkty, Uderzenia i Bledy z Diamentem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Potrzebujesz niezawodnego licznika punktow baseball na swoj nastepny mecz? To bezplatne narzedzie online sledzi punkty, uderzenia i bledy, wyswietlajac interaktywny diament z pozycjami biegaczy w czasie rzeczywistym. Kazdy rzut ma znaczenie, a nasza cyfrowa tablica wynikow zapewnia, ze nigdy nie stracisz licznika, autow ani inningu. Bez wzgledu na to, czy trenujesz lige mlodziezowa, prowadzisz wynik w turnieju softballu, czy zarzadzasz meczem szkolnej druzyny, to narzedzie automatycznie obsluzy cala statystyke meczu, abys mogl skupic sie na grze na boisku.',
    },
    {
      type: 'title',
      text: 'Jak Ta Tablica Wynikow Baseballu Oszczedza Ci Czas i Zapobiega Bledom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Reczne prowadzenie wynikow jest podatne na bledy, szczegolnie podczas szybkich meczow. Jeden przegapiony strike lub pominiety biegacz moze zaburzyc cala statystyke. Ten cyfrowy licznik automatyzuje nudne czesci. Kliknij Strike, Pilka, Foul, Uderzenie lub Aut, a tablica natychmiast aktualizuje licznik. Gdy odbijajacy otrzyma spacer lub zostanie wyautowany przez strikeout, narzedzie automatycznie resetuje licznik. Po trzech autach przelacza inning z gornej na dolna polowe i rejestruje punkty. Macierz R H E i siatka historii inning po inningu daja pelny obraz gry na pierwszy rzut oka.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Licznik Rzutow na Zywo',
          description: 'Automatyczne sledzenie pilek i strikeow z wykrywaniem spaceru i strikeoutu dla kazdego podejscia.',
          icon: 'mdi:baseball',
          points: ['Pilki liczone do 4', 'Strikei liczone do 3', 'Auto reset po decyzji'],
        },
        {
          title: 'Zarzadzanie Biegaczami',
          description: 'Interaktywny diament pokazuje dokladnie kto jest na pierwszej, drugiej lub trzeciej bazie.',
          icon: 'mdi:diamond-stone',
          points: ['Kliknij baze aby ustawic biegacza', 'Wizualne podswietlenie gdy zajeta', 'Czyszczenie przy zmianie inningu'],
        },
        {
          title: 'Pelna Statystyka Meczu',
          description: 'Pelne statystyki R H E z przewijana historia wynikow inning po inningu.',
          icon: 'mdi:scoreboard-outline',
          points: ['Punkty, uderzenia i bledy', 'Siatka inning po inningu', 'Laczne sumy dla obu druzyn'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kto Potrzebuje Tego Licznika Wynikow Baseballu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To narzedzie jest stworzone dla kazdego, kto musi prowadzic wynik: trenerow baseballu mlodziezowego, ktorzy chca przejrzysty cyfrowy wyswietlacz dla swoich zawodnikow, wolontariuszy lig softballu, ktorzy prowadza mecze bez dedykowanego osobowego, rodzicow sledzacych gry swoich dzieci z trybun oraz sedziow poszukujacych pomocniczego systemu weryfikacji. Interfejs dziala na kazdym urzadzeniu, od smartfonow trzymanych w dugout po tablety na plotkach i laptopy na lawce. Bez instalacji, po prostu otworz przegladarke i zaczynaj punktowac.',
    },
    {
      type: 'list',
      items: [
        '<strong>Automatyczne Zarzadzanie Licznikiem:</strong> Pilki i strikei resetuja sie automatycznie po spacerach, strikeoutach, uderzeniach i autach. Reczne resetowanie nie jest potrzebne.',
        '<strong>Diament z Obsluga Dotykowa:</strong> Kliknij pierwsza, druga lub trzecia baze aby ustawic lub usunac biegaczy. Diament podswietla sie na zloto aby pokazac zajete bazy.',
        '<strong>Wyniki Inning po Inningu:</strong> Kazda polowa inningu jest rejestrowana w przewijanej siatce. Zobacz dokladnie jak kazda druzyna zdobywala punkty we wszystkich dziewieciu inningach.',
        '<strong>Zero Konfiguracji:</strong> Otworz strone i zaczynaj punktowac natychmiast. Zmieniaj nazwy druzyn dotykajac etykiety nad wynikami.',
      ],
    },
    {
      type: 'title',
      text: 'Prowadzenie Wynikow Baseballu Proste: Licznik, Diament i Statystyka w Jednym Miejscu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prowadzenie wynikow w baseballu wymaga sledzenia wielu rzeczy jednoczesnie: licznika pilek i strikeow, liczby autow, ktore bazy maja biegaczy, punktow dla kazdej druzyny oraz biezacego inningu. Utracenie ktorejkolwiek z tych informacji powoduje zamieszanie i niepoprawne zapisy. To narzedzie laczy wszystko w jednym ekranie. Kropki licznika pokazuja pilki i strikei na pierwszy rzut oka. Diament pokazuje pozycje biegaczy. Tabela R H E wyswietla pelna statystyke meczu. A siatka inningow przewija sie poziomo, pokazujac pelna historie wynikow. Wszystko aktualizuje sie w czasie rzeczywistym z kazdym dotknieciem.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Trenerzy', html: '<p>Miej przejrzysta cyfrowa tablice wynikow widoczna dla calej druzyny z dugoutu.</p>' },
        { type: 'card', title: 'Wolontariusze', html: '<p>Nie potrzebujesz doswiadczenia w prowadzeniu wynikow. Narzedzie automatycznie obsluguje wszystkie skomplikowane sledzenie.</p>' },
        { type: 'card', title: 'Rodzice', html: '<p>Sledz gre z trybun dzieki niezawodnemu wyswietlaniu wynikow na telefonie w czasie rzeczywistym.</p>' },
        { type: 'card', title: 'Zawodnicy', html: '<p>Przegladaj wyniki inning po inningu po meczu, aby analizowac wydajnosc.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Licznik Punktow Baseballu',
    description: 'Sledz punkty, uderzenia i bledy z widokiem diamentu.',
    away: 'Goscie',
    home: 'Gospodarze',
    runs: 'P',
    hits: 'U',
    errors: 'B',
    inning: 'Inning',
    topInning: 'Gora',
    bottomInning: 'Dol',
    balls: 'Pilki',
    strikes: 'Strikei',
    outs: 'Auty',
    strikeBtn: 'Strike',
    ballBtn: 'Pilka',
    foulBtn: 'Foul',
    hitBtn: 'Uderzenie',
    outBtn: 'Aut',
    walkBtn: 'Spacer',
    runBtn: '+1 Punkt',
    errorBtn: 'Blad',
    newBatter: 'Nowy Odbijajacy',
    resetMatch: 'Resetuj Mecz',
    resetConfirm: 'Zresetowac biezacy mecz? Wszystkie wyniki zostana utracone.',
    cancel: 'Anuluj',
    confirm: 'Potwierdz',
    total: 'Razem',
    fullscreen: 'Pelny Ekran',
    toggleSound: 'Wlacz Wylacz Dzwiek',
  },
};
