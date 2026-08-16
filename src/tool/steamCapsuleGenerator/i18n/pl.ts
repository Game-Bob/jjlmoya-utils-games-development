import type { ToolLocaleContent } from '../../../types';
import type { SteamCapsuleGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SteamCapsuleGeneratorUI> = {
  slug: 'generator-kapsul-dla-steam',
  title: 'Generator i Podgląd Kapsuł Steam',
  description: 'Kadruj, przeglądaj i formatuj oficjalne kapsuły sklepowe oraz grafiki biblioteki Steam z weryfikacją stref bezpiecznych.',
  ui: {
    uploadTitle: 'Prześlij Grafikę Gry',
    uploadHint: 'Prześlij grafikę w wysokiej rozdzielczości (zalecane 3840x1240 px lub więcej).',
    chooseFile: 'Wybierz Plik',
    minimumSize: 'Zalecana minimalna rozdzielczość: 1920x1080 px',
    horizontalFocus: 'Osiowe Skupienie (X)',
    verticalFocus: 'Pionowe Skupienie (Y)',
    zoomLevel: 'Poziom Powiększenia',
    resetFocus: 'Wyśrodkuj Skupienie',
    safeZone: 'Strefa Bezpieczna',
    downloadZip: 'Pobierz Wszystkie Pliki (ZIP)',
    headerCapsule: 'Kapsuła Nagłówka (460x215 / HD 920x430)',
    smallCapsule: 'Mała Kapsuła (231x87 / HD 462x174)',
    mainCapsule: 'Główna Kapsuła (616x353 / HD 1232x706)',
    verticalCapsule: 'Pionowa Kapsuła Biblioteki (300x450 / HD 600x900)',
    libraryHero: 'Banner Biblioteki (1920x620 / HD 3840x1240)',
    communityIcon: 'Ikona Aplikacji Społeczności (32x32 / HD 184x184)',
    storePreviewTab: 'Sklep Steam',
    libraryPreviewTab: 'Biblioteka Steam',
    allAssetsTab: 'Wszystkie Rozmiary',
    toggleSafeZones: 'Strefy Bezpieczne',
    toggleSteamOverlay: 'Interfejs Steam'
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Specyfikacja Graficzna Kapsuł Steam'
    },
    {
      type: 'paragraph',
      html: 'Strony sklepu Steam oraz widoki biblioteki używają standaryzowanych grafik kapsuł do prezentacji gier.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Nagłówek Sklepu HD', value: '920 x 430 px' },
        { label: 'Proporcja Kapsuły Biblioteki', value: '2:3 Pionowa' },
        { label: 'Maksymalny Banner', value: '3840 x 1240 px' },
        { label: 'Ikona Społeczności', value: '184 x 184 px' }
      ]
    },
    {
      type: 'table',
      headers: ['Typ Grafiki', 'Rozmiar Standardowy (px)', 'Rozmiar HD (px)', 'Proporcje', 'Format'],
      rows: [
        ['Kapsuła Nagłówka', '460 x 215', '920 x 430', '2.14:1', 'JPG / PNG'],
        ['Mała Kapsuła', '231 x 87', '462 x 174', '2.65:1', 'JPG / PNG'],
        ['Główna Kapsuła', '616 x 353', '1232 x 706', '1.74:1', 'JPG / PNG'],
        ['Pionowa Kapsuła', '300 x 450', '600 x 900', '2:3', 'JPG / PNG'],
        ['Banner Biblioteki', '1920 x 620', '3840 x 1240', '3.1:1', 'JPG / PNG'],
        ['Logo Biblioteki', '1280 x 720', '1280 x 720', '16:9', 'Przezroczysty PNG'],
        ['Ikona Społeczności', '32 x 32', '184 x 184', '1:1', 'PNG']
      ]
    },
    {
      type: 'tip',
      title: 'Optymalizacja Stref Bezpiecznych',
      html: 'Umieszczaj główne logo w lewej górnej części obrazu.'
    },
    {
      type: 'proscons',
      title: 'Ocena Procesu',
      items: [
        {
          pro: 'Natychmiastowe generowanie wszystkich rozmiarów Steamworks',
          con: 'Złożone grafiki mogą wymagać osobnych warstw'
        }
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kapsuła',
          definition: 'Określenie firmy Valve dla promocyjnych kontenerów graficznych.'
        }
      ]
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
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 6.",
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 7.",
    },
    {
      type: 'paragraph',
      html: "Ta sekcja zbiera najważniejsze kontrole potrzebne do poprawnego eksportu i wiarygodnego podglądu. 8.",
    },
  ],
  faqTitle: 'Często Zadawane Pytania o Grafiki Steam',
  faq: [
    {
      question: 'Jaki format plików wybrać?',
      answer: 'Steam akceptuje pliki JPG lub PNG dla głównych kapsuł.'
    },
    {
      question: "Jakie dodatkowe dane trzeba przygotować?",
      answer: "Sprawdź dane wejściowe i porównaj podgląd ze specyfikacją techniczną.",
    },
    {
      question: "Jak sprawdzić wynik?",
      answer: "Sprawdź dane wejściowe i porównaj podgląd ze specyfikacją techniczną.",
    },
  ],
  howTo: [
    {
      name: 'Prześlij Grafikę',
      text: 'Wybierz obraz w wysokiej rozdzielczości.'
    },
    {
      name: "Jakie dodatkowe dane trzeba przygotować?",
      text: "Sprawdź dane wejściowe i porównaj podgląd ze specyfikacją techniczną.",
    },
    {
      name: "Jak sprawdzić wynik?",
      text: "Sprawdź dane wejściowe i porównaj podgląd ze specyfikacją techniczną.",
    },
    {
      name: "Jak przetestować gotowy plik?",
      text: "Otwórz podgląd w środowisku docelowym i sprawdź wymiary oraz wygląd.",
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Generator i Podgląd Kapsuł Steam',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'PLN'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Jaki format plików wybrać?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Steam akceptuje pliki JPG lub PNG.'
          }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak generować kapsuły Steam',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Prześlij Grafikę',
          text: 'Wybierz obraz w wysokiej rozdzielczości.'
        }
      ]
    }
  ],
  bibliography: bibliographyEntries
};
