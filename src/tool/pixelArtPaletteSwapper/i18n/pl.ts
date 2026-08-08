import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'konwerter-palety-pixel-art',
  title: 'Konwerter Palety dla Pixel Artu',
  description: 'Redukuj kolory spritów i arkuszy grafik do klasycznych palet konsolowych lub własnej listy kolorów hex bezpośrednio w przeglądarce.',
  ui: {
    uploadTitle: 'Przeciągnij sprite lub arkusz grafik',
    uploadHint: 'Pliki PNG, JPEG lub WebP są przetwarzane na Twoim urządzeniu',
    chooseImage: 'Wybierz obraz',
    replaceImage: 'Zamień obraz',
    paletteTitle: 'Wybierz paletę',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'Inspirowana NES',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Własne kolory',
    customPaletteHint: 'Rozdziel wartości hex przecinkami, spacjami lub nowymi liniami.',
    applyCustomPalette: 'Zastosuj paletę',
    resetCustomPalette: 'Zresetuj',
    sourcePreview: 'Oryginał',
    resultPreview: 'Zredukowany wynik',
    waitingForImage: 'Oczekiwanie na obraz',
    uploadToPreview: 'Prześlij obraz, aby zobaczyć podgląd',
    resultEmpty: 'Wersja oryginalna i zredukowana pojawią się obok siebie.',
    downloadPng: 'Pobierz PNG',
    downloadDisabled: 'Prześlij obraz, aby odblokować eksport.',
    colorCount: 'Kolory źródłowe',
    mappedCount: 'Użyte kolory',
    imageSize: 'Rozmiar obrazu',
    paletteCount: 'kolorów w palecie',
    preserveAlpha: 'Zachowaj przezroczystość',
    zoomLabel: 'Powiększenie',
    processing: 'Mapowanie pikseli',
    invalidPalette: 'Dodaj przynajmniej jeden poprawny kod hex',
    invalidImage: 'Wybierz obraz w formacie PNG, JPEG lub WebP',
    readyStatus: 'Gotowe',
    dropActive: 'Upuść, aby wczytać',
    mappedSummary: 'Zmapowano {source} kolorów źródłowych na {mapped} kolorów palety',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Zamień Pełnokolorowy Sprite w Przemyślaną Retropaletę',
    },
    {
      type: 'paragraph',
      html: 'Ograniczona paleta to coś więcej niż tylko techniczne ograniczenie. Nadaje spritowi spójną język kolorów, sprawia, że elementy sceny pasują do siebie i przywołuje wizualny charakter konkretnej konsoli lub klasycznego sprzętu. Ten konwerter palet w przeglądarce pozwala porównać obraz źródłowy z wersją zredukowaną podczas eksperymentowania z paletami Game Boy, inspirowanymi NES, PICO-8, Commodore 64, DawnBringer 16 oraz własnymi zestawami kolorów.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Jak Działa Mapowanie do Najbliższego Koloru',
    },
    {
      type: 'paragraph',
      html: 'Narzędzie odczytuje kanały czerwony, zielony i niebieski dla każdego widocznego piksela i porównuje ten kolor z każdym kolorem w wybranej palecie. Wybiera element palety o najmniejszej kwadratowej odległości RGB, a następnie zapisuje zastępczy kolor w nowym buforze płótna. Kanał alfa jest traktowany oddzielnie, dzięki czemu przezroczyste piksele pozostają przezroczyste, a półprzezroczyste krawędzie zachowują swoją oryginalną przezroczystość, gdy włączona jest opcja Zachowaj przezroczystość.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Redukcja palety',
          description: 'Każdy kolor źródłowy jest zastępowany najbliższą dostępną próbką barwy.',
          points: [
            'Szybkie i przewidywalne dla spritów, ikon, kafli i elementów interfejsu',
            'Zachowuje dokładnie oryginalne wymiary i pozycje pikseli',
            'Ułatwia kontrolę i przegląd ustalonego budżetu kolorów',
          ],
        },
        {
          title: 'Palette Swapping',
          description: 'Ta sama grafika może zostać zmapowana na inny, starannie dobrany zestaw kolorów.',
          points: [
            'Przydatne dla alternatywnych strojów, biomów i stanów uszkodzeń',
            'Niestandardowe listy hex pozwalają dopasować się do własnej wizji artystycznej',
            'Pobrany plik PNG jest od razu gotowy do zaimportowania w Twoim edytorze',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Wybór Palety dla Pixel Artu',
    },
    {
      type: 'table',
      headers: ['Paleta', 'Kolory', 'Zastosowanie', 'Na co uważać'],
      rows: [
        ['Game Boy', '4', 'Monochromatyczny klimat konsoli przenośnej i wyraźne studia wartości', 'Mały zakres wartości może zlewać blisko położone materiały'],
        ['Inspirowana NES', '16', 'Wyraziste grafiki arcade, postacie i kafle', 'Bardzo jasne kolory mogą przytłaczać drobne detale'],
        ['PICO-8', '16', 'Nowoczesny pixel art z nasyconymi akcentami kolorystycznymi', 'Silnie nasycone odcienie wymagają przemyślanego kontrastu'],
        ['Commodore 64', '16', 'Stonowane sceny retro i estetyka gier komputerowych', 'Niski kontrast zyskuje przy zastosowaniu wyrazistych sylwetek'],
        ['DawnBringer 16', '16', 'Wszechstronna, starannie dobrana paleta do ogólnego pixel artu', 'Rampy kolorów wciąż wymagają świadomego kierunku światła'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktyczny Przebieg Pracy z Arkuszami Grafik',
    },
    {
      type: 'paragraph',
      html: 'Zacznij od największej grafiki źródłowej, jaką możesz wygodnie edytować, a następnie prześlij wyeksportowany sprite lub arkusz grafik tutaj. Wybierz gotowy zestaw, aby ustalić kierunek, lub wklej niestandardową listę z biblioteki palet. Sprawdź oba płótna przy większym powiększeniu pod kątem utraconych rysów twarzy, połączonych konturów i refleksów, które nie odcinają się już od koloru bazowego. Jeśli wynik wydaje się nieczytelny, wypróbuj paletę z wyraźniejszymi skokami wartości lub dodaj jeden przemyślany kolor akcentujący do listy.',
    },
    {
      type: 'tip',
      title: 'Świadomie Dobieraj Paletę',
      html: 'Większa lista kolorów nie jest automatycznie lepsza. Zacznij od 4 do 16 kolorów, przypisz każdemu kolorowi określone zadanie i zarezerwuj najjaśniejsze wartości dla punktów centralnych lub czytelnych refleksów. Algorytm najbliższego koloru zachowuje pozycje pikseli, ale nie decyduje o tym, które kolory powinny budować hierarchię wizualną Twojego sprita.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Lista Kontrolna Eksportu Pixel Artu',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Przed Zaimportowaniem Zredukowanego Pliku PNG',
      html: 'Sprawdź wynik w skali 100 procent oraz w ostatecznej skali w grze, upewnij się, że przezroczyste krawędzie pozostają czyste, zweryfikuj czytelność ważnych sylwetek i zachowaj oryginalny plik źródłowy obok wyeksportowanego, aby móc dostosować paletę bez zaczynania od zera.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kwantyzacja koloru',
          definition: 'Proces redukcji dużego zestawu kolorów źródłowych do mniejszego, zdefiniowanego zbioru.',
        },
        {
          term: 'Rampa kolorów',
          definition: 'Uporządkowany ciąg ciemnych, średnich i jasnych odcieni używany do cieniowania powierzchni.',
        },
        {
          term: 'Paleta indeksowana',
          definition: 'Kompaktowa tabela kolorów, w której piksele odwołują się do wpisów na wspólnej liście zamiast wielokrotnie zapisywać pełne kolory.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Czy konwerter palet przesyła moje obrazy na serwer?',
      answer: 'Nie. Obraz jest dekodowany na płótnie w Twojej przeglądarce, mapowany lokalnie w JavaScript i eksportowany bezpośrednio jako PNG. Narzędzie nie posiada kroku przesyłania na serwer.',
    },
    {
      question: 'Czy mogę użyć własnej palety?',
      answer: 'Tak. Wklej 6-cyfrowe lub 3-cyfrowe kody hex w polu Własne kolory, rozdzielając je przecinkami, spacjami lub nowymi liniami, a następnie wybierz Zastosuj paletę.',
    },
    {
      question: 'Czy narzędzie zmienia rozmiar mojego sprita lub arkusza grafik?',
      answer: 'Nie. Plik wynikowy zachowuje oryginalną szerokość, wysokość, pozycje pikseli i wartości alfa, gdy opcja Zachowaj przezroczystość jest włączona.',
    },
    {
      question: 'Jaki algorytm jest używany?',
      answer: 'Każdy widoczny piksel jest przypisywany do najbliższego koloru w wybranej palecie przy użyciu kwadratowej odległości euklidesowej w przestrzeni RGB. Jest to metoda szybka, deterministyczna i łatwa w podglądzie, ale nie stosuje ditheringu ani korekcji perceptualnej Lab.',
    },
  ],
  howTo: [
    {
      name: 'Załaduj sprite',
      text: 'Przeciągnij sprite lub arkusz grafik w formacie PNG, JPEG lub WebP do obszaru roboczego lub użyj przycisku Wybierz obraz.',
    },
    {
      name: 'Wybierz paletę',
      text: 'Wybierz klasyczny zestaw lub wprowadź własne kolory hex. Wynik aktualizuje się natychmiast po zastosowaniu palety.',
    },
    {
      name: 'Porównaj i wyeksportuj',
      text: 'Sprawdź płótno oryginalne i zredukowane, dostosuj powiększenie podglądu i pobierz wynik jako plik PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Konwerter Palety dla Pixel Artu',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Czy konwerter palet przesyła moje obrazy na serwer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nie. Obraz jest przetwarzany lokalnie w przeglądarce i eksportowany bezpośrednio jako PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Czy mogę użyć własnej palety?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tak. Wklej kody hex w polu Własne kolory i kliknij Zastosuj paletę.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak zredukować sprite do retropalety',
      step: [
        { '@type': 'HowToStep', name: 'Załaduj sprite', text: 'Przeciągnij plik do obszaru roboczego.' },
        { '@type': 'HowToStep', name: 'Wybierz paletę', text: 'Wybierz zestaw lub wprowadź kolory hex.' },
        { '@type': 'HowToStep', name: 'Porównaj i wyeksportuj', text: 'Sprawdź wynik i pobierz plik PNG.' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
