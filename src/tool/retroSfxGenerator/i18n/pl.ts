import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'generator-efektow-dwoiekowych-retro-gry',
  title: 'Generator Efektow Dwiekowych Retro do Gier',
  description: 'Tworz retro efekty dzwiekowe do gier w przegladarce dzieki gotowym ustawieniom, kontroli fal, oscyloskopowi na zywo i eksportowi WAV.',
  ui: {
    waveformLabel: 'Ksztalt fali',
    waveformSquare: 'Kwadratowa',
    waveformSawtooth: 'Pila',
    waveformSine: 'Sinusoidalna',
    waveformTriangle: 'Trojkatna',
    waveformNoise: 'Szum',
    presetLabel: 'Szybki bank dzwiekow',
    presetExplosion: 'Wybuch',
    presetLaser: 'Laser',
    presetJump: 'Skok',
    presetCoin: 'Moneta',
    presetPowerUp: 'Udoskonalenie',
    frequencyLabel: 'Czestotliwosc poczatkowa',
    frequencyEndLabel: 'Czestotliwosc koncowa',
    durationLabel: 'Dlugosc',
    decayLabel: 'Wygaszanie',
    sweepLabel: 'Zmiana tonu',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Dolnoprzepustowy',
    highpassLabel: 'Gornoprzepustowy',
    noiseMixLabel: 'Mieszanka szumu',
    toneSection: 'Ton',
    dynamicsSection: 'Dynamika',
    filterSection: 'Tekstura',
    playButton: 'Odtworz dzwiek',
    stopButton: 'Zatrzymaj',
    downloadButton: 'Pobierz WAV',
    randomizeButton: 'Losuj',
    resetButton: 'Resetuj',
    waveformPreviewLabel: 'Podglad fali na zywo',
    generatedLabel: 'Wygenerowano',
    statusReady: 'Gotowy do odsluchu',
    statusPlaying: 'Odtwarzanie w przegladarce',
    statusStopped: 'Zatrzymano odtwarzanie',
    statusDownloaded: 'Pobrano plik WAV',
    statusAudioBlocked: 'Odtwarzanie wymaga zezwolenia na dzwiek w karcie przegladarki',
    statusGenerating: 'Generowanie dzwieku',
    presetHint: 'Wybierz punkt startowy i dostosuj sygnal ponizszymi suwakami.',
    monoWavHint: '44.1 kHz · 16-bitowy mono WAV',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Tworz dzwiek do gier podczas Game Jamu bezpośrednio w przegladarce',
    },
    {
      type: 'paragraph',
      html: 'Dobre efekty dzwiekowe w grach natychmiast przekazuja informacje o akcji. Narzedzie to umozliwia szybkie tworzenie klasycznych dzwiekow retro za pomoca syntezy audio w przegladarce.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Ustawienia dzwieku', value: '5 wzorcow' },
        { label: 'Oscylatory', value: '5 ksztaltow fal' },
        { label: 'Format eksportu', value: '16-bitowy PCM WAV' },
        { label: 'Przetwarzanie', value: 'W przegladarce' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Co zmieniaja poszczegolne suwaki',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ton i ruch',
          description: 'Elementy sterujace tonem definiuja tozsamosc dzwieku.',
          points: [
            'Czestotliwosc poczatkowa wyznacza glowny ton oscylatora',
            'Zmiana tonu przesuwa czestotliwosc do wartosci koncowej',
            'Vibrato dodaje delikatne wahania tonu',
            'Rozne falowe ksztalty tworza unikalne barwy',
          ],
        },
        {
          title: 'Ksztalt i tekstura',
          description: 'Dynamika i filtry kszaltuja wybrzmiewanie dzwieku.',
          points: [
            'Dlugosc okresla calkowity czas trwania efektu',
            'Wygaszanie reguluje spadek glosnosci w czasie',
            'Filtr dolnoprzepustowy lagodzi wysokie czestotliwosci',
            'Filtr gornoprzepustowy usuwa niskie tony',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktyczne przepisy na typowe zdarzenia w grach',
    },
    {
      type: 'table',
      headers: ['Zdarzenie', 'Przydatne ustawienie', 'Pierwsza zmiana do wyprobowania'],
      rows: [
        ['Wybuch', 'Szum o niskiej czestotliwosci', 'Zwieksz dlugosc i obniz filtr dolnoprzepustowy'],
        ['Laser', 'Pila z opadajaca zmiana tonu', 'Skroc dlugosc i podnies filtr gornoprzepustowy'],
        ['Skok', 'Kwadrat z rosraca zmiana tonu', 'Zmniejsz wygaszanie, aby wyraznie slyszec wzrost tonu'],
        ['Moneta', 'Kwadrat z krotka rosnaca zmiana tonu', 'Zwieksz czestotliwosc poczatkowa dla jasnego dzwieku'],
        ['Udoskonalenie', 'Trojkat z dluga rosnaca zmiana tonu', 'Dodaj troche vibrato dla dynamicznego efektu'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Dlaczego WAV to idealny format eksportu',
    },
    {
      type: 'paragraph',
      html: 'Pliki WAV sa natywnie obslugiwane przez wiekszosc silnikow gier i edytorow audio bez koniecznosci stosowania dodatkowych bibliotek.',
    },
    {
      type: 'tip',
      title: 'Testuj przy docelowej glosnosci gry',
      html: 'Dzwiek brzmiacy atrakcyjnie osobno moze byc meczacy, gdy powtarza sie wielokrotnie w grze. Przetestuj go w silniku gry razem z muzyka.',
    },
  ],
  faqTitle: 'Czesto zadawane pytania',
  faq: [
    {
      question: 'Czy moje dzwieki sa wysylane na serwer?',
      answer: 'Nie. Caly proces syntezy i generowania pliku WAV odbywa sie lokalnie w przegladarce.',
    },
    {
      question: 'Czy moge uzyc pobranych dzwiekow w mojej grze?',
      answer: 'Tak. Wygenerowane dzwieki sa przeznaczone do prototypow i gier niezaleznych.',
    },
    {
      question: 'Jak dziala zmiana tonu?',
      answer: 'Suwak oblicza czestotliwosc koncowa proporcjonalnie do czestotliwosci poczatkowej.',
    },
    {
      question: 'Co zrobic, gdy nie slychac dzwieku?',
      answer: 'Upewnij sie, ze karta przegladarki ma uprawnienia do odtwarzania dzwieku i kliknij Odtworz dzwiek ponownie.',
    },
  ],
  howTo: [
    {
      name: 'Wybierz zestaw dzwiekow',
      text: 'Wybierz Wybuch, Laser, Skok, Moneta lub Udoskonalenie.',
    },
    {
      name: 'Dostosuj sygnal',
      text: 'Ustaw ksztalt fali, ton, dlugosc, wygaszanie i filtry.',
    },
    {
      name: 'Odsluchaj wynik',
      text: 'Kliknij Odtworz dzwiek, aby uslyszec podglad.',
    },
    {
      name: 'Pobierz WAV',
      text: 'Kliknij Pobierz WAV, aby zapisac plik na dysku.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Generator Efektow Dwiekowych Retro do Gier',
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
          name: 'Czy moje dzwieki sa wysylane na serwer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nie. Caly proces odbywa sie w przegladarce.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Jak stworzyc retro dzwiek do gry',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Wybierz zestaw dzwiekow',
          text: 'Wybierz gotowe ustawienie.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Bibliografia',
  bibliography: bibliographyEntries,
};
