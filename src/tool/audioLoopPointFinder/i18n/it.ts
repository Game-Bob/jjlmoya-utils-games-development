import type { ToolLocaleContent } from '../../../types';
import type { AudioLoopPointFinderUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<AudioLoopPointFinderUI> = {
  slug: 'trova-punti-loop-audio-giochi',
  title: 'Trova Punti di Loop Audio per Giochi e Iniettore di Metadati',
  description: 'Individua punti di loop audio precisi, aggancia ai passaggi per lo zero ed esporta file WAV con metadati LOOPSTART e LOOPEND per i motori di gioco.',
  ui: {
    title: 'Trova Punti di Loop Audio per Giochi',
    subtitle: 'Analizzatore di forma d onda interattivo, rilevatore di passaggio per lo zero ed etichettatore WAV',
    dropzoneTitle: 'Trascina qui il file audio o clicca per cercare',
    dropzoneSubtitle: 'Supporta tracce audio WAV, OGG, MP3 e FLAC',
    dropzoneButton: 'Seleziona File Audio',
    audioInfoTitle: 'Proprietà Traccia Audio',
    durationLabel: 'Durata',
    sampleRateLabel: 'Frequenza di Campionamento',
    channelsLabel: 'Canali Audio',
    totalSamplesLabel: 'Conteggio Totale Campioni',
    loopControlsTitle: 'Configurazione Regione di Loop',
    loopStartLabel: 'Marcatore Inizio Loop',
    loopEndLabel: 'Marcatore Fine Loop',
    loopDurationLabel: 'Durata del Loop',
    zeroCrossingLabel: 'Aggancio Passaggio per lo Zero',
    snapZeroCrossingButton: 'Aggancia al Passaggio per lo Zero Più Vicino',
    playLoopButton: 'Anteprima Loop Senza Interruzioni',
    pauseLoopButton: 'Pausa Riproduzione',
    stopLoopButton: 'Interrompi Riproduzione',
    exportWavButton: 'Esporta WAV con Metadati',
    sampleUnitLabel: 'Campioni',
    secondUnitLabel: 'Secondi',
    zoomLabel: 'Zoom Forma d Onda',
    zoomInButton: 'Ingrandisci',
    zoomOutButton: 'Riduci',
    resetZoomButton: 'Ripristina Vista',
    noFileSelected: 'Nessun file audio caricato',
    invalidAudioFile: 'Impossibile decodificare il file audio',
    presetsTitle: 'Preimpostazioni Rapide',
    presetFullTrack: 'Loop Traccia Intera',
    presetIntroCut: 'Salta 10% Intro',
    presetMiddleLoop: 'Sezione Centrale 50%',
    statusLooping: 'Riproduzione in Loop Attiva',
    statusPaused: 'Riproduzione in Pausa',
    statusReady: 'Audio Caricato e Pronto',
    statusLoaded: 'Traccia audio caricata con successo',
    statusDecodeError: 'Errore durante la decodifica del file audio',
    statusSnapped: 'Marcatori agganciati ai punti di passaggio per lo zero',
    statusStopped: 'Riproduzione interrotta',
    statusExported: 'File WAV esportato con tag di loop integrati',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Loop Audio Fluido e Allineamento dei Campioni nei Videogiochi',
    },
    {
      type: 'paragraph',
      html: 'Ottenere una riproduzione continua della musica di sottofondo nei videogiochi richiede un allineamento esatto dei campioni ai limiti del loop. Motori di gioco moderni come Unity, Godot, Unreal Engine, FMOD e Wwise utilizzano metadati di loop integrati come LOOPSTART e LOOPEND.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Precisione Campionamento', value: '44.1 kHz / 48 kHz' },
        { label: 'Soglia Passaggio per lo Zero', value: 'Ampiezza 0.00' },
        { label: 'Standard Metadati', value: 'RIFF smpl e INFO' },
        { label: 'Riduzione Clic', value: '100% Fase Allineata' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Strategia di Passaggio per lo Zero',
    },
    {
      type: 'tip',
      title: 'Eliminazione dei Rumori di Clic',
      html: 'Allinea sempre i marcatori di inizio e fine loop sui punti di passaggio per lo zero a pendenza positiva per evitare sbalzi di ampiezza.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Tabella Comparativa di Compatibilità',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Marcatore RIFF smpl Chunk',
          description: 'Metadati binari standard integrati nell intestazione WAV',
          points: [
            'Supportato nativamente da Godot, FMOD, Wwise e GameMaker',
            'Fornisce precisione esatta al singolo campione',
            'Raggruppa i marcatori di loop direttamente nel file WAV',
            'Elimina i clic acustici con l aggancio allo zero',
          ],
        },
        {
          title: 'Taglio Manuale dell Audio',
          description: 'Separazione di intro e loop in file distinti',
          points: [
            'Utilizzato da lettori multimediali di base',
            'Soggetto a imperfezioni temporali in millisecondi',
            'Richiede la gestione di file multipli nel progetto',
            'Elevato rischio di clic nei punti di transizione',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Riferimento Frequenze di Campionamento',
    },
    {
      type: 'table',
      headers: ['Frequenza di Campionamento', 'Campioni al Secondo', 'Uso Consigliato', 'Risoluzione Temporale'],
      rows: [
        ['44,100 Hz', '44,100', 'Colonna Sonora Standard da CD', '0.0226 ms per campione'],
        ['48,000 Hz', '48,000', 'Giochi Moderni per PC e Console', '0.0208 ms per campione'],
        ['96,000 Hz', '96,000', 'Audio Master ad Alta Definizione', '0.0104 ms per campione'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Iniezione Automatica di Metadati in Byte',
    },
    {
      type: 'paragraph',
      html: 'Durante l esportazione delle tracce, le nuove strutture di metadati vengono iniettate direttamente nell intestazione RIFF del file binario WAV.',
    },
  ],
  faqTitle: 'Domande Frequenti',
  faq: [
    {
      question: 'Cosa sono i tag di metadati LOOPSTART e LOOPEND?',
      answer: 'LOOPSTART e LOOPEND sono campi di metadati misurati in numero assoluto di campioni.',
    },
    {
      question: 'Perché si verificano clic udibili nei punti di loop?',
      answer: 'I clic si verificano quando la forma d onda alla fine non corrisponde all ampiezza o alla fase dell inizio.',
    },
    {
      question: 'Il mio file audio originale viene caricato su un server?',
      answer: 'No. Tutto il processo avviene localmente nella memoria del tuo browser.',
    },
  ],
  howTo: [
    {
      name: 'Carica Traccia Audio',
      text: 'Trascina il tuo file o seleziona un file WAV, OGG, MP3 o FLAC.',
    },
    {
      name: 'Posiziona i Marcatori',
      text: 'Imposta l inizio e la fine del loop con la forma d onda.',
    },
    {
      name: 'Aggancia allo Zero',
      text: 'Fai clic sul pulsante per agganciare al passaggio per lo zero.',
    },
    {
      name: 'Anteprima ed Esporta',
      text: 'Ascolta il loop senza interruzioni ed esporta il file WAV.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Trova Punti di Loop Audio per Giochi',
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
          name: 'Cosa sono i tag di metadati LOOPSTART e LOOPEND?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LOOPSTART e LOOPEND sono campi di metadati misurati in numero di campioni.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come trovare e iniettare punti di loop audio',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Carica Traccia Audio',
          text: 'Trascina il tuo file o seleziona un file audio.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Riferimenti e Letture Approfondite',
  bibliography: bibliographyEntries,
};
