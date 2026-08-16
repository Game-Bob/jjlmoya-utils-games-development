import type { ToolLocaleContent } from '../../../types';
import type { ItchioGameTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<ItchioGameTesterUI> = {
  slug: 'tester-gier-itchio',
  title: 'Itch.io Inspektor Gier Webowych i Optymalizator Rozdzielczości na Żywo',
  description: 'Prześlij pliki eksportu HTML5 lub archiwa ZIP, aby testować viewporty na żywo, naprawiać paski przewijania, sprawdzać buildy Godot i Unity WebGL oraz generować ustawienia osadzania Itch.io.',
  ui: {
    dropzoneTitle: 'Upuść build gry lub archiwum ZIP tutaj',
    dropzoneHint: 'Upuść plik .ZIP, wyeksportowany folder lub pliki buildu HTML5 w tym obszarze, aby natychmiast je sprawdzić.',
    chooseFiles: 'Wybierz plik gry lub folder',
    engineDetected: 'Wykryty silnik',
    compatibilityScore: 'Wynik zgodności z Itch.io',
    viewportWidth: 'Szerokość viewportu (px)',
    viewportHeight: 'Wysokość viewportu (px)',
    presets: 'Szybkie presety rozdzielczości',
    fitTest: 'Test układu i pasków przewijania na żywo',
    copySettings: 'Skopiuj ustawienia osadzania Itch.io',
    copied: 'Skopiowano do schowka',
    embedMode: 'Tryb osadzania',
    scrollbars: 'Włącz paski przewijania',
    noIssuesFound: 'Wszystkie testy zakończone pomyślnie. Pakiet jest w 100% zgodny ze standardami Itch.io.',
    filesInspected: 'Sprawdzone pliki',
    resetViewport: 'Zresetuj viewport',
    autoScaleToggle: 'Automatycznie skaluj viewport do szerokości ekranu',
    scaledNotice: 'Viewport przekracza szerokość ekranu. Zastosowano sztuczne oddalenie, aby cały kanvas był widoczny. Wyłącz automatyczne skalowanie, aby zobaczyć prawdziwy układ.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Wytyczne formatowania eksportów HTML5 gier na Itch.io'
    },
    {
      type: 'paragraph',
      html: 'Publikowanie gier HTML5 i WebGL na Itch.io wymaga precyzyjnej konfiguracji rozmiarów viewportu, struktury plików archiwalnych i nagłówków bezpieczeństwa cross-origin.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Standardowe proporcje ekranu', value: '16:9 Poziomo' },
        { label: 'Klasyczna rozdzielczość Itch', value: '960 x 540 px' },
        { label: 'Wymagany plik wejściowy', value: 'index.html w katalogu głównym' },
        { label: 'Wymaganie Godot 4', value: 'Nagłówki COOP / COEP' }
      ]
    },
    {
      type: 'tip',
      html: 'Osadzając grę WebGL 1280x720 na Itch.io, ustaw dokładnie wymiary 1280x720 viewportu osadzenia z włączoną opcją "Embed in page".'
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 1.",
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 2.",
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 3.",
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 4.",
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 5.",
    },
  ],
  faq: [
    {
      question: 'Dlaczego moja gra Godot 4 wyświetla czarny ekran na Itch.io?',
      answer: 'Eksporty webowe Godot 4 używają wielowątkowości WebAssembly wymagającej obsługi SharedArrayBuffer. Włącz "SharedArrayBuffer support" w opcjach ramki swojej gry na Itch.io.'
    },
    {
      question: "Które ustawienie trzeba sprawdzić przed publikacją? 1",
      answer: "Przed publikacją sprawdź wymiary, środowisko docelowe i podgląd.",
    },
  ],
  howTo: [
    { name: 'Prześlij pliki gry lub ZIP', text: 'Przeciągnij archiwum ZIP eksportu HTML5 lub wybierz katalog buildu zawierający index.html.' },
    { name: 'Przejrzyj raport zgodności', text: 'Sprawdź automatyczny raport audytu pod kątem umieszczenia index.html w katalogu głównym, ostrzeżeń dotyczących wielkości liter i wykrycia silnika.' },
    { name: 'Zmień rozmiar viewportu na żywo', text: 'Użyj kontrolek rozdzielczości i presetów proporcji ekranu, aby testować osadzanie iframe na żywo bez pasków przewijania.' },
    { name: 'Skopiuj ustawienia Itch.io', text: 'Kliknij Kopiuj ustawienia, aby uzyskać dokładne wartości szerokości i wysokości dla strony zgłoszenia gry na Itch.io.' }
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Itch.io Inspektor Gier Webowych',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Dlaczego moja gra Godot 4 wyświetla czarny ekran na Itch.io?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eksporty webowe Godot 4 używają wielowątkowości WebAssembly wymagającej obsługi SharedArrayBuffer. Włącz "SharedArrayBuffer support" w opcjach ramki swojej gry na Itch.io.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak sprawdzić i przetestować viewport gry na Itch.io',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Prześlij pliki gry lub ZIP',
          text: 'Przeciągnij archiwum ZIP eksportu HTML5 lub wybierz katalog buildu zawierający index.html.'
        },
        {
          '@type': 'HowToStep',
          name: 'Zmień rozmiar viewportu na żywo',
          text: 'Użyj kontrolek rozdzielczości i presetów proporcji ekranu, aby testować osadzanie iframe na żywo bez pasków przewijania.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
