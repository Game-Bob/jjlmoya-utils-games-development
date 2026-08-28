import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'animator-hitbox-hurtbox-sprites';
const title = 'Animator Hitbox i Hurtbox dla Spritów';
const description = 'Rysuj warstwy kolizji na klatkach spritów, podglądaj ruch za pomocą cebulki (onion skin), edytuj dokładne współrzędne w pikselach i eksportuj neutralny plik JSON.';

const faq = [
  {
    question: 'Jaka jest różnica między hitboxem a hurtboxem?',
    answer: 'Hitbox określa obszar zadający atak, natomiast hurtbox definiuje obszar wrażliwy na trafienie. Pushboxy utrzymują dystans między postaciami, a grabboxy określają zasięg rzutów.',
  },
  {
    question: 'Czy moje pliki graficzne opuszczają przeglądarkę?',
    answer: 'Nie. Obrazy są przetwarzane i eksportowane w 100% w Twojej przeglądarce. W pamięci lokalnej zapisywane są jedynie preferencje edytora.',
  },
  {
    question: 'Jaki układ współrzędnych wykorzystuje eksport JSON?',
    answer: 'Każda klatka mierzy piksele od lewego górnego rogu wycięcia. Wymiary szerokości i wysokości są zapisywane jako wartości dodatnie z własnym punktem kotwiczenia (pivot).',
  },
  {
    question: 'Czy mogę edytować arkusze spritów i pojedyncze pliki klatek?',
    answer: 'Tak. Możesz załadować arkusz PNG/WebP podając liczbę wierszy i kolumn lub wybrać sekwencję uporządkowanych plików.',
  },
  {
    question: 'Czy eksport działa bezpośrednio w każdym silniku gry?',
    answer: 'Format JSON jest neutralny dla silników. Zapisuje wycięcia klatek, punkty kotwiczenia i geometrie bez narzucania konkretnej struktury silnika.',
  },
];

const howTo = [
  { name: 'Załaduj grafikę', text: 'Wybierz arkusz spritów PNG/WebP lub sekwencję plików. Przetwarzanie odbywa się lokalnie.' },
  { name: 'Zdefiniuj klatki', text: 'Podaj liczbę wierszy i kolumn i sprawdź wycięcia klatek na taśmie animacji.' },
  { name: 'Rysuj warstwy kolizji', text: 'Wybierz warstwę hitbox, hurtbox, pushbox lub sensor i narysuj prostokąt lub koło.' },
  { name: 'Dopasuj ruch w czasie', text: 'Edytuj dokładne współrzędne, kopiuj kształty na sąsiednie klatki i używaj podglądu cebulki.' },
  { name: 'Eksportuj projekt', text: 'Pobierz neutralny plik JSON i arkusz styków PNG. Przechowuj oryginalne pliki graficzne razem z JSON.' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Załaduj animację, potwierdź podział klatek i narysuj obszary ataku, trafienia, kolizji fizycznej lub detekcji.',
    privacyNote: 'Stół animacyjny lokalny. Pliki graficzne nie są wysyłane na serwer.',
    loadSprite: 'Umieść grafikę na stole montażowym',
    loadHint: 'Wybierz arkusz spritów lub sekwencję uporządkowanych plików PNG/WebP.',
    chooseImages: 'Wybierz pliki graficzne',
    slicingTitle: 'Podział klatek',
    rowsLabel: 'Wiersze',
    columnsLabel: 'Kolumny',
    applySlicing: 'Tnij klatki',
    playbackTitle: 'Podgląd ruchu',
    previousFrame: 'Poprzednia klatka',
    play: 'Odtwarzaj',
    pause: 'Pauza',
    nextFrame: 'Następna klatka',
    fpsLabel: 'Klatki na sekundę',
    onionPrevious: 'Cebulka poprzednia',
    onionNext: 'Cebulka następna',
    layerTitle: 'Warstwy kolizji',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Czujnik',
    typeCustom: 'Własny',
    shapeRectangle: 'Prostokąt',
    shapeCircle: 'Koło',
    drawShape: 'Rysuj',
    selectShape: 'Zaznacz',
    stageLabel: 'Obszar roboczy',
    emptyStage: 'Załaduj grafikę, aby rozpocząć rysowanie warstw kolizji.',
    frameReadout: 'Klatka {current} z {total}',
    timelineTitle: 'Taśma klatek',
    inspectorTitle: 'Inspektor kształtu',
    noSelection: 'Zaznacz kształt, aby edytować jego dokładne wartości.',
    nameLabel: 'Nazwa warstwy',
    xLabel: 'X w pikselach',
    yLabel: 'Y w pikselach',
    widthLabel: 'Szerokość w pikselach',
    heightLabel: 'Wysokość w pikselach',
    radiusLabel: 'Promień w pikselach',
    duplicateShape: 'Duplikuj',
    mirrorShape: 'Odbij w poziomie',
    deleteShape: 'Usuń kształt',
    copyPrevious: 'Kopiuj poprzednią klatkę tutaj',
    copyAll: 'Kopiuj tę klatkę do wszystkich',
    pivotTitle: 'Punkt kotwiczenia (Pivot)',
    pivotXLabel: 'Pivot X',
    pivotYLabel: 'Pivot Y',
    exportTitle: 'Eksportuj projekt',
    exportJson: 'Pobierz JSON',
    importJson: 'Importuj JSON',
    exportContactSheet: 'Pobierz arkusz styków',
    resetProject: 'Zresetuj warstwy',
    undo: 'Cofnij',
    redo: 'Ponów',
    statusReady: 'Stół montażowy jest gotowy.',
    statusImageLoaded: 'Załadowano {count} plików graficznych.',
    statusShapeCreated: 'Dodano nowy kształt kolizji.',
    statusShapeUpdated: 'Zaktualizowano kształt.',
    statusImported: 'Zaiportowano projekt.',
    statusExported: 'Przygotowano eksport.',
    statusError: 'Nie można odczytać wybranego pliku.',
    framesBadge: '{count} klatek',
    shapesBadge: '{count} kształtów',
    coverageBadge: '{percent}% pokrycia',
    coordinatesNote: 'Współrzędne używają lewego górnego rogu każdej klatki jako punktu (0,0).',
    localOnlyDisclosure: 'Plik JSON zapisuje nazwy plików, punkty kotwiczenia i geometrie bez treści obrazu.',
    limitationDisclosure: 'Warstwy definiują obszary projektowe. Przetestuj ich działanie w swoim silniku gry.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Projektuj hitboxy i hurtboxy dopasowane do ruchu sprita',
    },
    {
      type: 'paragraph',
      html: 'Ustawianie kolizji staje się trudne, gdy każda klatka jest analizowana osobno. Ten edytor łączy podgląd sprita, warstwy kolizji, podgląd cebulki i linię czasu.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Wybieraj warstwy kolizji według ich roli w grze',
    },
    {
      type: 'table',
      headers: ['Warstwa', 'Rola główna', 'Punkt kontrolny'],
      rows: [
        ['Hitbox', 'Obszar zadający atak', 'Czy pojawia się tylko w aktywnych klatkach?'],
        ['Hurtbox', 'Obszar otrzymujący obrażenia', 'Czy przylega do sylwetki postaci bez luk?'],
        ['Pushbox', 'Fizyczna kolizja między postaciami', 'Czy jest stabilna, aby uniknąć drgań?'],
        ['Grabbox', 'Zasięg wykonania rzutu', 'Czy czas zgadza się z animacją?'],
        ['Sensor', 'Strefa detekcji zdarzeń', 'Czy nazwa jest jednoznaczna?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Zrozumienie układu współrzędnych',
    },
    {
      type: 'paragraph',
      html: 'Wyeksportowany projekt mierzy współrzędne X i Y od lewego górnego rogu każdej klatki. Wymiary są podawane w dodatnich pikselach.',
    },
    {
      type: 'tip',
      title: 'Sprawdzaj pełną sekwencję animacji',
      html: 'Odtwórz pełną animację po edycji klatki, aby upewnić się, że ruch jest płynny.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Wykorzystaj arkusz styków w pracy zespołowej',
    },
    {
      type: 'paragraph',
      html: 'Arkusz styków PNG pokazuje wszystkie klatki i ich warstwy na jednym obrazie, co ułatwia komunikację z zespołem.',
    },
    { type: 'paragraph', html: 'Kształt kolizji powinien podążać za sylwetką i chwilą akcji. Sprawdź początek, fazę aktywną i powrót osobno, a następnie przetestuj zasięg, priorytet, odrzut i sieć w rzeczywiście zintegrowanym projekcie.' },
    { type: 'paragraph', html: 'Po eksporcie przejrzyj klatki graniczne, w których animacja zmienia kierunek albo kończy atak. Zbyt duży hurtbox powoduje niesprawiedliwe trafienia, a zbyt mały hitbox odbiera atakowi czytelność. Porównanie warstw z ruchem postaci ułatwia znalezienie takich rozbieżności przed testami z graczami.' },
  ],
  faq,
  bibliographyTitle: 'Referencje dotyczące projektowania kolizji',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
