import type { ToolLocaleContent } from '../../../types';
import type { RetroSfxGeneratorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<RetroSfxGeneratorUI> = {
  slug: 'generatore-effetti-sonori-retro',
  title: 'Generatore di Effetti Sonori Retro per Giochi',
  description: 'Crea brevi effetti sonori retro per videogiochi nel tuo browser con preset immediati, oscilloscopio live ed esportazione WAV.',
  ui: {
    waveformLabel: 'Forma d onda',
    waveformSquare: 'Quadra',
    waveformSawtooth: 'Dente di sega',
    waveformSine: 'Sinusoidale',
    waveformTriangle: 'Triangolare',
    waveformNoise: 'Rumore',
    presetLabel: 'Banco suoni rapidi',
    presetExplosion: 'Esplosione',
    presetLaser: 'Laser',
    presetJump: 'Salto',
    presetCoin: 'Moneta',
    presetPowerUp: 'Potenziamento',
    frequencyLabel: 'Frequenza iniziale',
    frequencyEndLabel: 'Frequenza finale',
    durationLabel: 'Durata',
    decayLabel: 'Decadimento',
    sweepLabel: 'Variazione tono',
    vibratoLabel: 'Vibrato',
    lowpassLabel: 'Passa-basso',
    highpassLabel: 'Passa-alto',
    noiseMixLabel: 'Miscela rumore',
    toneSection: 'Tono',
    dynamicsSection: 'Dinamica',
    filterSection: 'Tessitura',
    playButton: 'Riproduci suono',
    stopButton: 'Interrompi',
    downloadButton: 'Scarica WAV',
    randomizeButton: 'Casuale',
    resetButton: 'Reimposta',
    waveformPreviewLabel: 'Forma d onda live',
    generatedLabel: 'Generato',
    statusReady: 'Pronto per l ascolto',
    statusPlaying: 'In riproduzione nel browser',
    statusStopped: 'Riproduzione interrotta',
    statusDownloaded: 'WAV scaricato',
    statusAudioBlocked: 'La riproduzione richiede l autorizzazione audio del browser',
    statusGenerating: 'Generazione suono in corso',
    presetHint: 'Scegli un punto di partenza e modella il segnale con i controlli.',
    monoWavHint: '44.1 kHz · WAV mono a 16 bit',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Crea l audio del tuo gioco durante una game jam direttamente nel browser',
    },
    {
      type: 'paragraph',
      html: 'Un buon effetto sonoro per videogiochi deve comunicare un azione all istante. Una frequenza crescente evoca un salto o un potenziamento, una discesa rapida suggerisce un laser, e un rumore con decadimento simula un esplosione. Questo generatore consente di personalizzare tutti questi parametri.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Preset sonori', value: '5 modelli base' },
        { label: 'Oscillatori', value: '5 forme d onda' },
        { label: 'Formato export', value: 'WAV PCM 16 bit' },
        { label: 'Elaborazione', value: 'Nel browser' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Funzione dei controlli',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tono e movimento',
          description: 'I controlli di tono definiscono l identita del suono.',
          points: [
            'La frequenza iniziale stabilisce la nota di partenza',
            'La variazione di tono sposta la frequenza verso il valore finale',
            'Il vibrato aggiunge una modulazione periodica lieve',
            'Le diverse forme d onda generano timbri differenti',
          ],
        },
        {
          title: 'Forma e tessitura',
          description: 'Dinamica e filtri modellano l inviluppo del suono.',
          points: [
            'La durata definisce il tempo totale dell effetto',
            'Il decadimento regola la velocita di dissolvenza dell ampiezza',
            'Il filtro passa-basso ammorbidisce le frequenze acute',
            'Il filtro passa-alto elimina le frequenze basse',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Guida pratica per gli eventi di gioco',
    },
    {
      type: 'table',
      headers: ['Evento', 'Preset di partenza', 'Prima modifica consiglia'],
      rows: [
        ['Esplosione', 'Rumore a bassa frequenza', 'Aumentare la durata e abbassare il filtro passa-basso'],
        ['Laser', 'Dente di sega con variazione discendente', 'Accorciare la durata e alzare il filtro passa-alto'],
        ['Salto', 'Quadra con variazione ascendente', 'Ridurre il decadimento per mantenere chiaro l incremento'],
        ['Moneta', 'Quadra con breve variazione ascendente', 'Alzare la frequenza iniziale per un suono brillante'],
        ['Potenziamento', 'Triangolare con lunga variazione ascendente', 'Aggiungere un po di vibrato per dare dinamismo'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Perche il formato WAV e ideale per i prototipi',
    },
    {
      type: 'paragraph',
      html: 'Il formato WAV e immediatamente compatibile con i motori di gioco senza richiedere librerie di decompressione esterne.',
    },
    {
      type: 'tip',
      title: 'Testare al volume effettivo del gioco',
      html: 'Un suono gratificante da solo puo risultare stancante se ripetuto spesso nel gioco. Verificalo nel contesto di gioco reale.',
    },
    { type: 'paragraph', html: 'Ascolta il suono anche nel mix reale del gioco: un effetto brillante da solo può coprire dialoghi o musica. Controlla volume, clipping e durata prima di usarlo come asset definitivo.' },
  ],
  faqTitle: 'Domande Frequenti',
  faq: [
    {
      question: 'I miei suoni vengono caricati su un server?',
      answer: 'No. La sintesi e la codifica del file WAV avvengono interamente nel browser.',
    },
    {
      question: 'Posso usare questi suoni nel mio progetto commerciale?',
      answer: 'Sì, i suoni generati sono pensati per prototipi e progetti di game jam.',
    },
    {
      question: 'Come funziona la variazione di tono?',
      answer: 'Il cursore ricalcola la frequenza finale in modo proporzionale alla frequenza di partenza.',
    },
    {
      question: 'Cosa fare se non si sente alcun suono?',
      answer: 'Assicurati che l audio sia abilitato nella scheda del browser e riprova.',
    },
  ],
  howTo: [
    {
      name: 'Scegli un preset',
      text: 'Seleziona Esplosione, Laser, Salto, Moneta o Potenziamento.',
    },
    {
      name: 'Modella il segnale',
      text: 'Regola forma d onda, frequenza, durata e filtri.',
    },
    {
      name: 'Ascolta il risultato',
      text: 'Fai clic su Riproduci suono per l ascolto in tempo reale.',
    },
    {
      name: 'Scarica il file WAV',
      text: 'Fai clic su Scarica WAV per salvare il file audio.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Generatore di Effetti Sonori Retro per Giochi',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'I miei suoni vengono caricati su un server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. La sintesi avviene interamente nel browser.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come creare un effetto sonoro retro',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Scegli un preset',
          text: 'Seleziona un modello di partenza.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Riferimenti',
  bibliography: bibliographyEntries,
};
