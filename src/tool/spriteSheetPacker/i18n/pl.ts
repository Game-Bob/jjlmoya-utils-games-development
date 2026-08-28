import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'pakowarka-i-ekstraktor-sprite-sheet',
  title: 'Pakowarka i Ekstraktor Sprite Sheet',
  description:
    'Optymalizuj wydajność gier 2D, pakując pojedyncze klatki animacji w atlasy tekstur lub wyciągając klatki z istniejących arkuszy.',
  ui: {
    packerTab: 'Studio Pakowania',
    extractorTab: 'Ekstraktor Sprite',
    dropZoneTitle: 'Przeciągnij i Upuść Klatki',
    dropZoneSubtitle: 'Prześlij obrazy PNG lub WebP, aby wygenerować zoptymalizowany atlas tekstur',
    selectFilesButton: 'Wybierz Pliki Klatek',
    clearAllButton: 'Wyczyść Obszar Róboczy',
    downloadZipButton: 'Pobierz Paczkę (ZIP)',
    copyJsonButton: 'Kopiuj JSON Atlasu',
    downloadSheetPngButton: 'Pobierz Teksturę PNG',
    paddingLabel: 'Odstęp Klatek (px)',
    borderExtrusionLabel: 'Ekstruzja Krawędzi (px)',
    maxTextureSizeLabel: 'Maksymalny Wymiar Tekstury',
    powerOfTwoLabel: 'Wymuś Potęgę 2 (POT)',
    trimTransparencyLabel: 'Przytnij Przeźroczystość',
    exportFormatLabel: 'Docelowy Format Silnika',
    presetPixelArt: 'Ustawienie Pixel Art 16x16',
    presetHdUi: 'Ustawienie HD UI Atlas 1024',
    presetMobile: 'Ustawienie Mobile WebGL 2048',
    formatGenericHash: 'Ogólny JSON (Hash)',
    formatGenericArray: 'Ogólny JSON (Array)',
    formatUnity: 'Silnik Unity 2D',
    formatGodot: 'Silnik Godot 2D',
    formatPhaser: 'Silnik Phaser / PixiJS',
    formatCss: 'CSS Web Frontend',
    previewTitle: 'Podgląd Atlasu Tekstur',
    efficiencyBadge: 'Wydajność Tekstury',
    drawCallsBadge: 'Zredukowane Draw Calls',
    totalFramesBadge: 'Spakowane Klatki',
    textureSizeBadge: 'Wymiar Atlasu',
    flipbookTitle: 'Odtwarzacz Animacji Flipbook',
    flipbookFpsLabel: 'Prędkość Animacji (FPS)',
    playAnimation: 'Odtwarzaj',
    pauseAnimation: 'Wstrzymaj',
    extractorModeGrid: 'Cięcie Według Siatki',
    extractorModeAlpha: 'Automatyczne Cięcie Kanału Alfa',
    frameWidthLabel: 'Szerokość Klatki (px)',
    frameHeightLabel: 'Wysokość Klatki (px)',
    marginLabel: 'Margines Zewnętrzny (px)',
    spacingLabel: 'Odstęp Siatki (px)',
    extractFramesButton: 'Wyciągnij Klatki',
    extractedCountLabel: 'Wyciągnięte Sprity',
    codeSnippetTitle: 'Kod Integracji z Silnikiem',
    copySnippetButton: 'Kopiuj Kod',
    copiedToast: 'Skopiowano do Schowka',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Zrozumienie Batchingu GPU i Optymalizacja Draw Calls w Silnikach 2D',
    },
    {
      type: 'paragraph',
      html: 'Łączenie pojedynczych obrazów klatek w jeden atlas tekstury drastycznie zmniejsza liczbę poleceń rysowania przesyłanych z procesora CPU do karty graficznej GPU.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Redukcja Draw Calls' },
        { value: '4x', label: 'Szybsze Przetwarzanie GPU' },
        { value: '60 FPS', label: 'Stabilna Płynność na Smartfonach' },
        { value: '100%', label: 'Lokalne Przetwarzanie w Przeglądarce' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Porównanie Pojedynczych Plików z Połączonym Atlasem Tekstur',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pojedyncze Pliki Klatek',
          description: 'Obrazy PNG lub WebP zapisane osobno',
          points: [
            'Generuje osobne polecenie rysowania dla każdej klatki na ekranie',
            'Powoduje częste przełączanie kontekstu na karcie graficznej GPU',
            'Zwiększa liczbę żądań HTTP w grach przeglądarkowych',
            'Spadek płynności na urządzeniach mobilnych',
          ],
        },
        {
          title: 'Spakowany Atlas Tekstury',
          description: 'Pojedynczy plik PNG połączony z danymi JSON',
          points: [
            'Łączy setki klatek w jedno polecenie rysowania GPU',
            'Maksymalizuje przepustowość pamięci graficznej VRAM',
            'Zmniejsza liczbę pobieranych plików',
            'Gwarantuje płynną animację na wszystkich platformach',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Matematyka Ekstruzji Krawędzi i Ruch Subpikselowy',
    },
    {
      type: 'paragraph',
      html: 'Dodanie 1 do 2 pikseli ekstruzji krawędzi powiela zewnętrzne piksele klatek, co zapobiega powstawaniu niepożądanych linii i szwów przy ruchu kamery.',
    },
    {
      type: 'tip',
      title: 'Strategia Ekstruzji Krawędzi',
      html: 'Używaj ekstruzji krawędzi, aby całkowicie wyeliminować błędy pikselowe przy ruchu i przybliżaniu kamery.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Zalecane Wymiary Tekstur dla Różnych Platform',
    },
    {
      type: 'table',
      headers: ['Platforma Docelowa', 'Zalecany Maksymalny Wymiar', 'Wymóg Potęgi 2', 'Profil Pamięci'],
      rows: [
        ['Przeglądarki Mobilne', '2048 x 2048 px', 'Wymagane w WebGL 1.0', 'Niska Przepustowość'],
        ['Komputery PC / Konsole', '4096 x 4096 px', 'Zalecane', 'Wysoka Wydajność GPU'],
        ['Konsolki Retro', '1024 x 1024 px', 'Ścisły Wymóg', 'Ścisłe Limity VRAM'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Gwarantuje pełną kompatybilność ze starszymi sterownikami i WebGL 1.0',
          con: 'Może pozostawiać pustą przestrzeń przy małej liczbie klatek',
        },
        {
          pro: 'Wspiera automatyczne generowanie mipmap sprzętowych',
          con: 'Wymaga starannego ustawienia odstępów przy nieregularnych kształtach',
        },
        {
          pro: 'Optymalizuje alokację pamięci VRAM w karcie graficznej',
          con: 'Niewielki wzrost początkowej powierzchni tekstury',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Kluczowe Pojęcia Pakowania Sprite',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Polecenie wysyłane przez procesor CPU do karty graficznej GPU w celu wyrenderowania geometrii.',
        },
        {
          term: 'Bin Packing',
          definition: 'Algorytm optymalnego rozmieszczania prostokątnych elementów w minimalnym obszarze.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Powielanie zewnętrznych pikseli krawędzi w celu uniknięcia szwów widocznych przy ruchu kamery.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Szybkie sekwencyjne odtwarzanie klatek w celu symulacji ciągłego ruchu w grach 2D.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Lista Kontrolna Optymalizacji',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Zasady Produkcyjne',
      html: 'Grupuj animacje postaci w pojedyncze atlasy i stosuj potęgi dwójki dla eksportu WebGL.',
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 1.",
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 2.",
    },
    { type: 'title', level: 2, text: 'Dopasuj padding, ekstruzję i dane eksportu' },
    { type: 'paragraph', html: 'Padding oddziela sąsiednie klatki, a ekstruzja powtarza piksele na ich krawędziach. Obie wartości trzeba ocenić razem z filtrowaniem, mipmapami i ruchem kamery: zbyt mały odstęp tworzy szwy, a zbyt duży marnuje miejsce tekstury.' },
    { type: 'paragraph', html: 'Po spakowaniu sprawdź współrzędne JSON w docelowym silniku. Atlas jest bezpieczny tylko wtedy, gdy rozmiar klatki, początek, obrót i przezroczystość są interpretowane tak samo jak w wyeksportowanym pliku.' },
    { type: 'paragraph', html: 'Sprawdź również, czy format tekstury i metadane odpowiadają docelowemu silnikowi. Maksymalny rozmiar, przycinanie przezroczystości i wymóg potęgi dwójki wpływają na pamięć oraz zgodność ze starszymi urządzeniami.' },
  ],
  faq: [
    {
      question: 'Czym jest sprite sheet i dlaczego jest ważny w grach 2D?',
      answer:
        'Sprite sheet to pojedynczy plik graficzny zawierający wiele klatek animacji. Pozwala silnikowi gry wyrenderować wiele obiektów w jednym poleceniu GPU.',
    },
    {
      question: 'Jak działa przetwarzanie lokalne w tym narzędziu?',
      answer:
        'Wszystkie operacje wykonywane są w Twojej przeglądarce przy użyciu HTML5 Canvas API bez przesyłania plików na serwer.',
    },
    {
      question: 'Czy mogę wyciągnąć klatki z istniejącego sprite sheeta?',
      answer:
        'Tak. Przejdź do trybu Ekstraktora, prześlij swój obraz i ustaw wymiary siatki cięcia.',
    },
  ],
  howTo: [
    {
      name: 'Prześlij Klatki',
      text: 'Przeciągnij pliki PNG lub WebP do obszaru roboczego.',
    },
    {
      name: 'Skonfiguruj Ustawienia',
      text: 'Dostosuj odstępy, ekstruzję krawędzi oraz format silnika docelowego.',
    },
    {
      name: 'Sprawdź i Pobierz',
      text: 'Przetestuj animację w odtwarzaczu i pobierz paczkę ZIP.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pakowarka i Ekstraktor Sprite Sheet',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Czym jest sprite sheet i dlaczego jest ważny w grach 2D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sprite sheet to pojedynczy plik graficzny zawierający wiele klatek animacji.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak pakować i wyciągać klatki sprite sheet',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Prześlij Klatki',
          text: 'Przeciągnij pliki PNG lub WebP do obszaru roboczego.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
