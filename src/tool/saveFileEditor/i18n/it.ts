import type { ToolLocaleContent } from '../../../types';
import type { SaveFileEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

export const content: ToolLocaleContent<SaveFileEditorUI> = {
  slug: 'editor-salvataggio-gioco',
  title: 'Editor e Offuscatore Salvataggi Gioco',
  description: 'Decodifica, ispeziona, modifica i payload JSON e ricifra i salvataggi di gioco utilizzando Base64, maschere XOR o testo in chiaro 100% localmente nel tuo browser.',
  ui: {
    title: 'Editor e Offuscatore Salvataggi Gioco',
    subtitle: 'Ispeziona, modifica e cifra i file di salvataggio locali in sicurezza senza inviare dati al server',
    dropSaveFile: 'Trascina e rilascia il file di salvataggio qui',
    orSelectFile: 'o clicca per selezionare un file locale',
    encryptionMethod: 'Formato di Cifratura',
    methodBase64: 'Codifica Base64',
    methodXor: 'Maschera XOR + Base64',
    methodRaw: 'JSON in Chiaro / Non Cifrato',
    xorKeyLabel: 'Chiave Segreta XOR',
    xorKeyPlaceholder: 'es. MiaChiaveSegreta2026',
    jsonRawTitle: 'Payload JSON Decodificato (Editor Live)',
    encodeAndDownload: 'Cifra e Scarica File',
    copyEncoded: 'Copia Testo Cifrato',
    copiedNotice: 'Copiato negli Appunti!',
    decodedKeysCount: 'Parametri Totali',
    dataSize: 'Dimensione Payload',
    detectedFormat: 'Formato Rilevato',
    exportPreviewLabel: 'Anteprima Output Cifrato',
    decodePanelTitle: 'Decodifica ed Editor JSON Live',
    exportPanelTitle: 'Payload Cifrato di Uscita',
    decodeError: 'Impossibile decodificare il file di salvataggio',
    bytesUnit: 'B',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Sicurezza e Protocolli di Offuscamento nei Salvataggi',
    },
    {
      type: 'paragraph',
      html: 'I videogiochi serializzano lo stato di avanzamento del giocatore in formati di archiviazione persistenti per conservare inventari, livelli sbloccati e attributi tra le varie sessioni di gioco. Per evitare modifiche dirette tramite semplici editor di testo, gli studi offuscano i salvataggi con schemi di codifica binaria come Base64 o maschere bit a bit XOR abbinate a una chiave segreta. Durante i test di controllo qualità QA e il debug delle operazioni live, i team di sviluppo necessitano della capacità immediata di ispezionare le strutture JSON grezze, forzare stati limite e ricifrare i dati modificati senza dover ricompilare i file eseguibili del gioco.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { label: 'Privacy Elaborazione', value: '100% Locale' },
        { label: 'Decodificatori Supportati', value: 'Base64 / XOR / JSON' },
        { label: 'Latenza Decodifica', value: '0 ms' },
        { label: 'Rischio Fughe Dati', value: 'Zero' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Confronto Schemi di Offuscamento',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Codifica Base64',
          description: 'Conversione rapida che impedisce modifiche veloci senza offrire sicurezza crittografica vera.',
        },
        {
          title: 'Maschera XOR + Base64',
          description: 'Pratica standard nello sviluppo indie. Miscela i byte con una chiave segreta contro i cheat engine.',
        },
        {
          title: 'Payload JSON in Chiaro',
          description: 'Salvataggio leggibile non cifrato. Ideale per prototipi e build di debug interne.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Pratiche di Test QA per i Salvataggi',
    },
    {
      type: 'tip',
      title: 'Best Practice di Sicurezza nei Salvataggi durante QA',
      html: 'Mantieni chiavi di debug separate per le build interne. Usa ispettori locali per testare valori limite senza ricompilare il codice di gioco.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Guida ai Parametri dello Stato di Gioco',
    },
    {
      type: 'table',
      headers: ['Tipo Dato', 'Formato Consigliato', 'Caso d Uso', 'Offuscamento'],
      rows: [
        ['Numeri Interi', 'Intero 32-bit', 'Monete, Livello, XP, Munizioni', 'Maschera XOR'],
        ['Flag Booleani', 'Boolean Standard', 'Tutorial Completato, Boss Sconfitto', 'Base64 / XOR'],
        ['Oggetti Annidati', 'Gerarchia JSON', 'Inventario, Abilità', 'Base64'],
        ['Timestamp', 'ISO 8601 UTC', 'Accesso Giornaliero, Salvataggio', 'Maschera XOR'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Reverse Engineering e Anti Manomissione',
    },
    {
      type: 'paragraph',
      html: 'Sebbene l offuscamento client eviti manomissioni occasionali, XOR e Base64 non sono veri algoritmi crittografici. Strumenti di analisi memoria come RenderDoc o x64dbg possono ispezionare le routine di generazione chiavi nei file compilati. Per titoli competitivi le firme HMAC o verifiche server sono fondamentali.',
    },
  ],
  faqTitle: 'Domande Frequenti',
  faq: [
    {
      question: 'I miei file vengono caricati su un server remoto?',
      answer: 'No. Tutto il processo avviene al 100% nel tuo browser.',
    },
    {
      question: 'Come funziona l offuscamento XOR in Unity o Godot?',
      answer: 'L offuscamento XOR applica un operazione bit a bit sui byte UTF-8 contro una chiave segreta.',
    },
  ],
  howTo: [
    {
      name: 'Carica File',
      text: 'Carica il tuo file di salvataggio cifrato.',
    },
    {
      name: 'Seleziona Chiave',
      text: 'Scegli il metodo e inserisci la chiave segreta.',
    },
    {
      name: 'Modifica JSON',
      text: 'Modifica i valori nell editor live.',
    },
    {
      name: 'Esporta e Scarica',
      text: 'Scarica il file modificato pronto per i test.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Editor Salvataggio Gioco',
      applicationCategory: 'DeveloperApplication',
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
          name: 'I miei file vengono caricati su un server remoto?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Tutto il processo avviene al 100% nel tuo browser.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Come Modificare Salvataggi di Gioco',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Carica File',
          text: 'Carica il tuo file di salvataggio cifrato.',
        },
      ],
    },
  ],
  bibliographyTitle: 'Riferimenti e Letture Aggiuntive',
  bibliography: bibliographyEntries,
};
