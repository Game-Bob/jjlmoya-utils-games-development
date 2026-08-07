import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'wyszukiwarka-punktow-petli-audio-gier',
  title: 'Wyszukiwarka Punktów Pętli Audio i Injektor Metadanych',
  description: 'Zlokalizuj dokładne punkty pętli audio, dopasuj do przejść przez zero i eksportuj pliki WAV z metadanymi LOOPSTART i LOOPEND dla silników gier.',
  ui: {
    title: 'Wyszukiwarka Punktów Pętli Audio dla Gier',
    subtitle: 'Interaktywny analizator kształtu fali, detektor przejścia przez zero i edytor metadanych WAV',
    dropzoneTitle: 'Przeciągnij plik audio tutaj lub kliknij, aby przeglądać',
    dropzoneSubtitle: 'Obsługuje ścieżki audio WAV, OGG, MP3 i FLAC',
    dropzoneButton: 'Wybierz Plik Audio',
    audioInfoTitle: 'Właściwości Ścieżki Audio',
    durationLabel: 'Czas Trwania',
    sampleRateLabel: 'Częstotliwość Probkowania',
    channelsLabel: 'Kanały Audio',
    totalSamplesLabel: 'Całkowita Liczba Próbek',
    loopControlsTitle: 'Konfiguracja Regionu Pętli',
    loopStartLabel: 'Znacznik Początku Pętli',
    loopEndLabel: 'Znacznik Końca Pętli',
    loopDurationLabel: 'Czas Trwania Pętli',
    zeroCrossingLabel: 'Dopasowanie Przejścia przez Zero',
    snapZeroCrossingButton: 'Dopasuj do Najbliższego Przejścia przez Zero',
    playLoopButton: 'Odsłuchaj Pętlę Bez Szwów',
    pauseLoopButton: 'Wstrzymaj Odtwarzanie',
    stopLoopButton: 'Zatrzymaj Odtwarzanie',
    exportWavButton: 'Eksportuj WAV z Metadanymi',
    sampleUnitLabel: 'Próbki',
    secondUnitLabel: 'Sekundy',
    zoomLabel: 'Powiększenie Fali',
    zoomInButton: 'Powiększ',
    zoomOutButton: 'Pomniejsz',
    resetZoomButton: 'Resetuj Widok',
    noFileSelected: 'Nie załadowano jeszcze pliku audio',
    invalidAudioFile: 'Nie udało się zdekodować pliku audio',
    presetsTitle: 'Szybkie Ustawienia',
    presetFullTrack: 'Pętla Całego Utworu',
    presetIntroCut: 'Pomiń 10% Intro',
    presetMiddleLoop: 'Środkowa Sekcja 50%',
    statusLooping: 'Odtwarzanie w Pętli Aktywne',
    statusPaused: 'Odtwarzanie Wstrzymane',
    statusReady: 'Audio Załadowane i Gotowe',
    statusLoaded: 'Pomyślnie załadowano ścieżkę audio',
    statusDecodeError: 'Błąd podczas dekodowania pliku audio',
    statusSnapped: 'Znaczniki dopasowane do punktów przejścia przez zero',
    statusStopped: 'Zatrzymano odtwarzanie',
    statusExported: 'Wyeksportowano plik WAV z wbudowanymi tagami pętli',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Płynne Zapętlanie Audio w Grach i Wyrównanie Próbek',
    },
    {
      type: 'paragraph',
      html: 'Uzyskanie ciągłego odtwarzania muzyki w tle w grach wideo wymaga dokładnego wyrównania próbek na granicach pętli. Nowoczesne silniki gier, takie jak Unity, Godot, Unreal Engine, FMOD i Wwise, wykorzystują wbudowane metadane LOOPSTART i LOOPEND.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Precyzja Probkowania', value: '44.1 kHz / 48 kHz' },
        { label: 'Próg Przejścia przez Zero', value: 'Amplituda 0.00' },
        { label: 'Standard Metadanych', value: 'RIFF smpl i INFO' },
        { label: 'Redukcja Klików', value: '100% Wyrównanie Fazy' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Strategia Przejścia przez Zero',
    },
    {
      type: 'tip',
      title: 'Eliminacja Trasków i Klików',
      html: 'Zawsze wyrównuj znaczniki początku i końca pętli w dodatnich punktach przejścia przez zero. Zapobiega to gwałtownym skokom amplitudy i trzaskom w głośnikach.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabela Porównawcza Kompatybilności',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Znacznik Bloku RIFF smpl',
          description: 'Standardowe binarne metadane w nagłówku pliku WAV',
          points: [
            'Natywna obsługa w Godot, FMOD, Wwise i GameMaker',
            'Zapewnia dokładną precyzję próbek bez przesunięć',
            'Zapisuje punkty pętli wewnątrz jednego pliku WAV',
            'Eliminuje trzaski przy wyrównaniu do zera',
          ],
        },
        {
          title: 'Ręczne Dzielenie Audio',
          description: 'Cięcie wstępu i pętli na osobne pliki',
          points: [
            'Używane przez proste odtwarzacze bez obsługi metadanych',
            'Narażone na małe przerwy i niedokładności czasowe',
            'Wymaga zarządzania wieloma plikami w projekcie',
            'Wysokie ryzyko klików na przejściach',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabela Częstotliwości Probkowania',
    },
    {
      type: 'table',
      headers: ['Częstotliwość Probkowania', 'Próbki na Sekundę', 'Zalecane Zastosowanie', 'Rozdzielczość Czasowa'],
      rows: [
        ['44,100 Hz', '44,100', 'Standardowa Jakość CD w Muzyce do Gier', '0.0226 ms na próbkę'],
        ['48,000 Hz', '48,000', 'Nowoczesne Gry PC i Konsole', '0.0208 ms na próbkę'],
        ['96,000 Hz', '96,000', 'Pliki Audio Master w Wysokiej Rozdzielczości', '0.0104 ms na próbkę'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Automatyczne Wstrzykiwanie Metadanych w Bajtach',
    },
    {
      type: 'paragraph',
      html: 'Podczas eksportowania ścieżek z tego narzędzia nowe struktury metadanych są wstrzykiwane bezpośrednio do nagłówka RIFF pliku WAV.',
    },
  ],
  faqTitle: 'Często Zadawane Pytania',
  faq: [
    {
      question: 'Czym są tagi metadanych LOOPSTART i LOOPEND?',
      answer: 'LOOPSTART i LOOPEND to pola metadanych mierzone w bezwzględnej liczbie próbek.',
    },
    {
      question: 'Dlaczego w punktach pętli pojawiają się słyszalne kliki?',
      answer: 'Kliki pojawiają się, gdy fala na końcu nie odpowiada amplitudzie ani fazie na początku.',
    },
    {
      question: 'Czy mój oryginalny plik audio jest przesyłany na serwer?',
      answer: 'Nie. Całe przetwarzanie odbywa się lokalnie w pamięci Twojej przeglądarki.',
    },
  ],
  howTo: [
    {
      name: 'Załaduj Ścieżkę Audio',
      text: 'Przeciągnij plik muzyczny lub wybierz plik WAV, OGG, MP3 lub FLAC.',
    },
    {
      name: 'Ustaw Znaczniki Pętli',
      text: 'Dostosuj początek i koniec pętli za pomocą wykresu fali.',
    },
    {
      name: 'Dopasuj do Przejścia przez Zero',
      text: 'Kliknij przycisk dopasowania do przejścia przez zero.',
    },
    {
      name: 'Odsłuchaj i Eksportuj',
      text: 'Posłuchaj płynnej pętli i wyeksportuj plik WAV z metadanymi.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Wyszukiwarka Punktów Pętli Audio dla Gier',
      applicationCategory: 'MultimediaApplication',
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
          name: 'Czym są tagi metadanych LOOPSTART i LOOPEND?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART i LOOPEND to pola metadanych mierzone w liczbie próbek.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak znaleźć i wstrzyknąć punkty pętli audio',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Załaduj Ścieżkę Audio',
          text: 'Przeciągnij plik muzyczny lub wybierz plik audio.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Referencje i Dalsza Lektura',
  bibliography: bibliographyEntries,
};
