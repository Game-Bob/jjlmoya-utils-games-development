import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'edytor-plikow-zapisu-gier',
  title: 'Edytor i Ofuskator Plików Zapisu Gier',
  description: 'Odszyfruj, sprawdzaj, edytuj dane JSON i ponownie szyfruj pliki zapisu stanu gry przy użyciu Base64, maskowania XOR lub czystego tekstu 100% lokalnie w przeglądarce.',
  ui: {
    title: 'Edytor i Ofuskator Zapisu Stanu Gry',
    subtitle: 'Bezpiecznie sprawdzaj, modyfikuj i szyfruj lokalne pliki zapisu bez przesyłania danych na serwer',
    dropSaveFile: 'Przeciągnij i upuść plik zapisu gry tutaj',
    orSelectFile: 'lub kliknij, aby wybrać plik z dysku',
    encryptionMethod: 'Format Szyfrowania',
    methodBase64: 'Kodowanie Base64',
    methodXor: 'Maska XOR + Base64',
    methodRaw: 'Czysty JSON / Nieszyfrowany',
    xorKeyLabel: 'Tajny Klucz XOR',
    xorKeyPlaceholder: 'np. MojTajnyKluczGry2026',
    jsonRawTitle: 'Odszyfrowane Dane JSON (Edytor Na Żywo)',
    encodeAndDownload: 'Zaszyfruj i Pobierz Plik Zapisu',
    copyEncoded: 'Kopiuj Zaszyfrowany Tekst',
    copiedNotice: 'Skopiowano do Schowka!',
    decodedKeysCount: 'Liczba Parametrów',
    dataSize: 'Rozmiar Danych',
    detectedFormat: 'Wykryty Format',
    exportPreviewLabel: 'Podgląd Zaszyfrowanego Wyjścia',
    decodePanelTitle: 'Odszyfrowywanie i Edytor JSON Na Żywo',
    exportPanelTitle: 'Zaszyfrowane Dane Wyjściowe',
    decodeError: 'Nie udało się odszyfrować pliku zapisu gry',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Bezpieczeństwo i Protokoły Ofuskacji Plików Zapisu Gier',
    },
    {
      type: 'paragraph',
      html: 'Gry komputerowe i mobilne regularnie szeregują stan postępu gracza w trwałych formatach pamięci masowej, aby zachować stan ekwipunku, odblokowane poziomy, atrybuty postaci oraz flagi fabularne między sesjami rozgrywki. Aby zapobiec bezpośrednim modyfikacjom dokonywanym przez użytkowników w prostych edytorach tekstu, studia deweloperskie stosują ofuskację plików zapisu za pomocą schematów kodowania binarnego, takich jak Base64, lub bitowego maskowania XOR przy użyciu tajnego klucza. Podczas wewnętrznych testów kontroli jakości QA i debugowania, zespoły programistów potrzebują natychmiastowej możliwości inspekcji struktur JSON, testowania wartości brzegowych i ponownego szyfrowania danych bez konieczności ponownej kompilacji całej gry.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Prywatność Przetwarzania', value: '100% Lokalnie' },
        { label: 'Obsługiwane Dekodery', value: 'Base64 / XOR / JSON' },
        { label: 'Opóźnienie Dekodowania', value: '0 ms' },
        { label: 'Ryzyko Wycieku Danych', value: 'Zero' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Porównanie Schematów Ofuskacji',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Kodowanie Base64',
          description: 'Szybka konwersja tekstu zapobiegająca przypadkowej edycji w notatniku, lecz niezapewniająca bezpieczeństwa kryptograficznego.',
        },
        {
          title: 'Maskowanie XOR + Base64',
          description: 'Standardowa praktyka w grach niezależnych. Łączy bajty tekstu z tajnym kluczem w celu ochrony przed edytorami pamięci.',
        },
        {
          title: 'Czysty JSON',
          description: 'Czytelny plik zapisu bez szyfrowania. Idealny do wczesnego prototypowania oraz wewnętrznych testów zespołu.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktyki Testowania QA do Weryfikacji Stanu Gry',
    },
    {
      type: 'tip',
      title: 'Najlepsze Praktyki Bezpieczeństwa Zapisów w QA',
      html: 'Zawsze utrzymuj osobne klucze debugowania dla wersji wewnętrznych i produkcyjnych. Podczas weryfikacji błędów używaj lokalnych edytorów, aby wymusić wartości graniczne ekwipunku bez kompilowania kodu gry.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabela Wytycznych dla Parametrów Stanu Gry',
    },
    {
      type: 'table',
      headers: ['Typ Danych', 'Zalecany Format', 'Częste Zastosowanie', 'Warstwa Ofuskacji'],
      rows: [
        ['Liczby Całkowite', '32-bitowy Integer', 'Monety, Poziom, XP, Amunicja', 'Maska XOR'],
        ['Flagi Logiczne', 'Standardowy Boolean', 'Samouczek Ukończony, Boss Pokonany', 'Base64 / XOR'],
        ['Obiekty Zagnieżdżone', 'Hierarchia JSON', 'Ekwipunek Gracza, Drzewo Umiejętności', 'Kodowanie Base64'],
        ['Znaczniki Czasu', 'ISO 8601 UTC', 'Codzienny Logowanie, Czas Zapisu', 'Maska XOR'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Inżynieria Wsteczna i Ochrona Przed Modyfikacją',
    },
    {
      type: 'paragraph',
      html: 'Choć ofuskacja po stronie klienta zapobiega edycji plików przez niedoświadczonych graczy, maskowanie XOR i Base64 nie są pełnymi algorytmami kryptograficznymi. Narzędzia do analizy pamięci, takie jak RenderDoc czy x64dbg, mogą odczytać procedury generowania kluczy bezpośrednio z zebranych plików wykonywalnych. W grach wieloosobowych niezbędna jest weryfikacja po stronie serwera lub stosowanie podpisów kryptograficznych HMAC.',
    },
  ],
  faqTitle: 'Często Zadawane Pytania',
  faq: [
    {
      question: 'Czy moje pliki zapisu gry są przesyłane na zewnętrzny serwer?',
      answer: 'Nie. Cały proces dekodowania, edycji drzewa JSON i ponownego szyfrowania odbywa się w 100% wewnątrz Twojej przeglądarki internetowej.',
    },
    {
      question: 'Jak działa ofuskacja kluczem XOR w silnikach takich jak Unity lub Godot?',
      answer: 'Ofuskacja XOR wykonuje operację bitową XOR na bajtach UTF-8 ciągu JSON przy użyciu znaków tajnego klucza, a następnie przekształca wynik do formatu Base64.',
    },
  ],
  howTo: [
    {
      name: 'Wczytaj lub Wklej Plik Zapisu',
      text: 'Prześlij swój zaszyfrowany plik zapisu stanu gry lub przeciągnij go do strefy zrzutu.',
    },
    {
      name: 'Wybierz Metodę Dekodowania i Klucz',
      text: 'Wybierz Base64 lub Maskowanie XOR i wprowadź tajny klucz gry.',
    },
    {
      name: 'Edytuj Stan JSON',
      text: 'Zmieniaj poziomy, złoto, przedmioty w ekwipunku oraz flagi gry bezpośrednio w edytorze na żywo.',
    },
    {
      name: 'Zaszyfruj i Eksportuj',
      text: 'Pobierz zmodyfikowany plik zapisu przygotowany do testów w grze.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Edytor Plików Zapisu Gier',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PLN',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Czy moje pliki zapisu gry są przesyłane na zewnętrzny serwer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nie. Całe przetwarzanie odbywa się w 100% lokalnie w przeglądarce.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak Edytować Zaszyfrowane Pliki Zapisu Gier',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Wczytaj Plik Zapisu',
          text: 'Prześlij zaszyfrowany plik zapisu.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referencje i Dalsza Lektura',
  bibliography: bibliographyEntries,
};
