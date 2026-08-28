import type { ToolLocaleContent } from '../../../types';
import type { SteamBbcodeTranslatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamBbcodeTranslatorUI> = {
  slug: 'konwerter-bbcode-steam',
  title: 'Konwerter Steam BBCode, Markdown i HTML',
  description: 'Konwertuj między Steam BBCode, Markdown i HTML w obu kierunkach z automatycznym wykrywaniem składni i podglądem na żywo.',
  ui: {
    editorLabel: 'Wklej swój tekst',
    editorHint: 'Składnia BBCode, Markdown lub HTML jest wykrywana automatycznie.',
    detectedLabel: 'Wykryto',
    detectedEmpty: 'Oczekiwanie na tekst',
    bbcode: 'Steam BBCode',
    markdown: 'Markdown',
    html: 'HTML',
    clear: 'Wyczyść',
    copy: 'Kopiuj wynik',
    copied: 'Skopiowano do schowka',
    characters: 'Znaki',
    blocks: 'Bloki',
    privacyNote: 'Działa w Twojej przeglądarce. Nic nie jest wysyłane.',
    persistenceNote: 'Ostatni szkic zapisany lokalnie',
    previewLabel: 'Podgląd',
    previewEmpty: 'Twój sformatowany podgląd pojawi się tutaj.'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Dlaczego opisy sklepu wymagają konwertera'
    },
    {
      type: 'paragraph',
      html: 'Opisy sklepu Steam używają BBCode. Strony prasowe lub dokumentacje często wymagają Markdown lub HTML. Narzędzie konwertuje formaty automatycznie.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Obsługiwane znaczniki'
    },
    {
      type: 'paragraph',
      html: 'Obsługuje nagłówki, pogrubienie, kursywę, linki, listy, cytaty i spoilery.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Formaty wejściowe', value: '3' },
        { label: 'Wyniki na wklejenie', value: '2' },
        { label: 'Głębokość list', value: 'Zagnieżdżone' },
        { label: 'Przetwarzanie', value: 'Tylko przeglądarka' }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Zachowanie zagnieżdżonych list'
    },
    {
      type: 'paragraph',
      html: 'Drzewo struktury gwarantuje, że podlisty pozostają wewnątrz swoich elementów nadrzędnych.'
    },
    {
      type: 'table',
      headers: ['Steam BBCode', 'Markdown', 'HTML'],
      rows: [
        ['[h1]Tytuł[/h1]', '# Tytuł', '&lt;h1&gt;Tytuł&lt;/h1&gt;'],
        ['[b]Ważne[/b]', '**Ważne**', '&lt;strong&gt;Ważne&lt;/strong&gt;'],
        ['[i]Uwaga[/i]', '*Uwaga*', '&lt;em&gt;Uwaga&lt;/em&gt;'],
        ['[url=https://example.com]Link[/url]', '[Link](https://example.com)', '&lt;a href="https://example.com"&gt;Link&lt;/a&gt;'],
        ['[list][*]Jeden[*]Dwa[/list]', '- Jeden\n- Dwa', '&lt;ul&gt;&lt;li&gt;Jeden&lt;/li&gt;&lt;li&gt;Dwa&lt;/li&gt;&lt;/ul&gt;']
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Różnice między Markdown a HTML'
    },
    {
      type: 'paragraph',
      html: 'Jeśli Markdown nie obsługuje podkreślenia natywnie, stosowane są wstawki HTML.'
    },
    {
      type: 'tip',
      title: 'Sprawdzenie przed publikacją',
      html: 'Porównaj sformatowany podgląd z dokumentem źródłowym przed publikacją.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Prywatność danych'
    },
    {
      type: 'paragraph',
      html: 'Całe przetwarzanie odbywa się lokalnie w przeglądarce.'
    },
    {
      type: 'title',
      level: 2,
      text: 'Ograniczenia'
    },
    {
      type: 'proscons',
      title: 'Kwestie do rozważenia',
      items: [
        {
          pro: 'Zachowanie struktury list.',
          con: 'Niestandardowe znaczniki wymagają weryfikacji ręcznej.'
        }
      ]
    },
    {
      type: 'title',
      level: 2,
      text: 'Słowniczek'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BBCode',
          definition: 'Składnia znaczników w nawiasach kwadratowych na Steam.'
        },
        {
          term: 'Markdown',
          definition: 'Czytelny format tekstu sformatowanego.'
        },
        {
          term: 'HTML',
          definition: 'Standardowy język znaczników stron internetowych.'
        }
      ]
    },
    { type: 'title', level: 2, text: 'Sprawdź konwersję przed publikacją' },
    { type: 'paragraph', html: 'Najpierw ustal, jakiego formatu naprawdę używa tekst źródłowy, a potem porównaj nagłówki, linki, listy i obrazy w podglądzie. Widoczny wynik nie oznacza, że każdy tag właściwy dla Steam ma pełny odpowiednik w formacie docelowym.' },
    { type: 'paragraph', html: 'Zachowaj kopię oryginalnego tekstu i przetestuj wynik na stronie sklepu, na której zostanie opublikowany. Listy zagnieżdżone, zewnętrzne linki i widżety bez odpowiednika mogą wymagać ręcznej korekty. Konwerter analizuje strukturę w przeglądarce, ale nie ocenia jakości tekstu ani bezpieczeństwa adresów URL.' },
    { type: 'paragraph', html: 'Przed skopiowaniem wyniku sprawdź też zewnętrzne linki, niestandardowe tagi i obrazy w rzeczywistym widoku sklepu. Poprawna konwersja struktury nie zastępuje redakcji ani kontroli bezpieczeństwa adresów.' },
    { type: 'paragraph', html: 'Porównaj konwersję z podglądem strony Steam przed publikacją. Sprawdź łamanie wierszy, listy zagnieżdżone, odnośniki, obrazy i nierozpoznane tagi, ponieważ nieobsługiwany format może zostać pokazany jako zwykły tekst. Zachowaj wersję źródłową, aby śledzić ręczne poprawki, i przetestuj finalną treść w widoku, który rzeczywiście zobaczą gracze.' },
    { type: 'paragraph', html: 'Jeśli wynik różni się od edytora sklepu, przeanalizuj osobno każdy blok specjalnego formatowania. Zapisz elementy świadomie zastąpione lub usunięte, a następnie sprawdź ponownie hierarchię nagłówków, obrazy i wezwanie do działania na dużym oraz małym ekranie.' },
  ],
  faqTitle: 'Często zadawane pytania',
  faq: [
    {
      question: 'Czy mój tekst jest wysyłany na serwer?',
      answer: 'Nie. Konwersja odbywa się w pełni lokalnie w Twojej przeglądarce.'
    },
    {
      question: 'Czy listy zagnieżdżone są obsługiwane?',
      answer: 'Tak. Struktura listy jest analizowana przed wygenerowaniem wyniku.'
    },
    {
      question: "Które ustawienie trzeba sprawdzić przed publikacją? 1",
      answer: "Przed publikacją sprawdź wymiary, środowisko docelowe i podgląd.",
    },
    {
      question: "Które ustawienie trzeba sprawdzić przed publikacją? 2",
      answer: "Przed publikacją sprawdź wymiary, środowisko docelowe i podgląd.",
    },
    {
      question: "Które ustawienie trzeba sprawdzić przed publikacją? 3",
      answer: "Przed publikacją sprawdź wymiary, środowisko docelowe i podgląd.",
    },
    {
      question: "Które ustawienie trzeba sprawdzić przed publikacją? 4",
      answer: "Przed publikacją sprawdź wymiary, środowisko docelowe i podgląd.",
    },
  ],
  howTo: [
    {
      name: 'Wklej tekst',
      text: 'Wklej Steam BBCode, Markdown lub HTML.'
    },
    {
      name: 'Automatyczna konwersja',
      text: 'Pozostałe dwa formaty zostaną wygenerowane od razu.'
    },
    {
      name: "Które ustawienie trzeba sprawdzić przed publikacją? 1",
      text: "Przed publikacją sprawdź wymiary, środowisko docelowe i podgląd.",
    },
    {
      name: "Które ustawienie trzeba sprawdzić przed publikacją? 2",
      text: "Przed publikacją sprawdź wymiary, środowisko docelowe i podgląd.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Konwerter Steam BBCode, Markdown i HTML',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Czy mój tekst jest wysyłany na serwer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nie. Konwersja odbywa się w pełni lokalnie w Twojej przeglądarce.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak konwertować Steam BBCode, Markdown i HTML',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Wklej tekst',
          text: 'Wklej Steam BBCode, Markdown lub HTML.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
