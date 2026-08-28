import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'animatore-hitbox-hurtbox-sprite';
const title = 'Animatore Hitbox e Hurtbox per Sprite';
const description = 'Disegna livelli di collisione su ogni fotogramma dello sprite, anteprima con carta cipolla, modifica coordinate in pixel ed esporta JSON neutro.';

const faq = [
  {
    question: 'Qual è la differenza tra hitbox e hurtbox?',
    answer: 'Una hitbox definisce l area che infligge un attacco, mentre una hurtbox definisce l area vulnerabile che lo riceve. Le pushbox mantengono la distanza tra i personaggi e le grabbox regolano le prese.',
  },
  {
    question: 'I miei file di immagini vengono caricati online?',
    answer: 'No. Le immagini vengono elaborate ed esportate interamente nel tuo browser. Vengono salvate localmente solo le preferenze dell editor.',
  },
  {
    question: 'Quale sistema di coordinate utilizza l esportazione JSON?',
    answer: 'Ogni fotogramma misura le coordinate in pixel dall angolo in alto a sinistra. Le dimensioni di larghezza e altezza memorizzano valori positivi con il proprio perno.',
  },
  {
    question: 'Posso modificare uno spritesheet o fotogrammi singoli?',
    answer: 'Sì. Puoi caricare uno spritesheet PNG/WebP indicando righe e colonne, oppure selezionare più immagini ordinate.',
  },
  {
    question: 'L esportazione funziona in tutti i motori di gioco?',
    answer: 'Il formato JSON è neutro. Salva i rettangoli dei fotogrammi, i perni e i livelli geometrici senza imporre la struttura di un motore specifico.',
  },
];

const howTo = [
  { name: 'Carica la grafica', text: 'Seleziona uno spritesheet PNG/WebP o immagini ordinate. L elaborazione rimane locale sul tuo dispositivo.' },
  { name: 'Definisci i fotogrammi', text: 'Imposta righe e colonne per uno spritesheet e verifica il ritaglio dei fotogrammi sulla sequenza temporale.' },
  { name: 'Disegna i livelli di collisione', text: 'Scegli un livello hitbox, hurtbox, pushbox o sensore, quindi traccia un rettangolo o un cerchio.' },
  { name: 'Rifinisci il movimento', text: 'Modifica le coordinate esatte, copia le forme su fotogrammi vicini e usa la carta cipolla.' },
  { name: 'Esporta il progetto', text: 'Scarica il file JSON neutro e una scheda di contatto PNG. Conserva le immagini originali.' },
];

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Carica un animazione, conferma i ritagli dei fotogrammi e disegna le aree di attacco, danno o collisione.',
    privacyNote: 'Tavolo di animazione locale. Le immagini non vengono caricate online.',
    loadSprite: 'Metti l immagine sul tavolo di lavoro',
    loadHint: 'Scegli uno spritesheet o immagini PNG/WebP ordinate.',
    chooseImages: 'Scegli immagini',
    slicingTitle: 'Ritaglio fotogrammi',
    rowsLabel: 'Righe',
    columnsLabel: 'Colonne',
    applySlicing: 'Ritaglia',
    playbackTitle: 'Anteprima movimento',
    previousFrame: 'Fotogramma precedente',
    play: 'Riproduci',
    pause: 'Pausa',
    nextFrame: 'Fotogramma successivo',
    fpsLabel: 'Fotogrammi al secondo',
    onionPrevious: 'FOGLIO precedente',
    onionNext: 'FOGLIO successivo',
    layerTitle: 'Livelli di collisione',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Sensore',
    typeCustom: 'Personalizzato',
    shapeRectangle: 'Rettangolo',
    shapeCircle: 'Cerchio',
    drawShape: 'Disegna',
    selectShape: 'Seleziona',
    stageLabel: 'Area di lavoro',
    emptyStage: 'Carica le immagini per iniziare a disegnare i livelli di collisione.',
    frameReadout: 'Fotogramma {current} di {total}',
    timelineTitle: 'Sequenza fotogrammi',
    inspectorTitle: 'Ispettore forma',
    noSelection: 'Seleziona una forma per modificarne le coordinate esatte.',
    nameLabel: 'Nome livello',
    xLabel: 'X in pixel',
    yLabel: 'Y in pixel',
    widthLabel: 'Larghezza in pixel',
    heightLabel: 'Altezza in pixel',
    radiusLabel: 'Raggio in pixel',
    duplicateShape: 'Duplica',
    mirrorShape: 'Rifletti orizzontalmente',
    deleteShape: 'Elimina forma',
    copyPrevious: 'Copia fotogramma precedente qui',
    copyAll: 'Copia su tutti i fotogrammi',
    pivotTitle: 'Perno fotogramma',
    pivotXLabel: 'Perno X',
    pivotYLabel: 'Perno Y',
    exportTitle: 'Esporta progetto',
    exportJson: 'Scarica JSON',
    importJson: 'Importa JSON',
    exportContactSheet: 'Scarica scheda di contatto',
    resetProject: 'Ripristina livelli',
    undo: 'Annulla',
    redo: 'Ripristina',
    statusReady: 'Il tavolo di lavoro è pronto.',
    statusImageLoaded: '{count} file immagine caricati.',
    statusShapeCreated: 'Forma di collisione aggiunta.',
    statusShapeUpdated: 'Forma aggiornata.',
    statusImported: 'Progetto importato.',
    statusExported: 'Esportazione pronta.',
    statusError: 'Impossibile leggere il file selezionato.',
    framesBadge: '{count} fotogrammi',
    shapesBadge: '{count} forme',
    coverageBadge: '{percent}% coperto',
    coordinatesNote: 'Le coordinate usano l angolo in alto a sinistra di ogni fotogramma come origine (0,0).',
    localOnlyDisclosure: 'Il file JSON memorizza nomi delle immagini, perni e forme senza includere i pixel.',
    limitationDisclosure: 'I livelli definiscono aree geometriche di design. Testali direttamente nel tuo motore di gioco.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Progetta hitbox e hurtbox allineate al movimento reale dello sprite',
    },
    {
      type: 'paragraph',
      html: 'Configurare le collisioni risulta complesso quando ogni fotogramma viene analizzato singolarmente. Questo editor unisce l immagine dello sprite, i livelli di collisione, la carta cipolla e la sequenza temporale per garantire la fluidità del movimento.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Scegli ogni livello in base alla funzione di gioco',
    },
    {
      type: 'table',
      headers: ['Livello', 'Ruolo principale', 'Aspetto da verificare'],
      rows: [
        ['Hitbox', 'Area che infligge un attacco o effetto', 'Compare solo nei fotogrammi attivi previsti?'],
        ['Hurtbox', 'Area che riceve attacchi o danni', 'Segue la silhouette senza spazi innaturali?'],
        ['Pushbox', 'Area di collisione fisica tra personaggi', 'Rimani stabile per evitare scatti visibili?'],
        ['Grabbox', 'Raggio d azione per avviare una presa', 'Il timing corrisponde all animazione visiva?'],
        ['Sensor', 'Area di rilevamento per interazioni', 'Il nome è abbastanza chiaro per l implementazione?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comprendere e applicare il sistema di coordinate',
    },
    {
      type: 'paragraph',
      html: 'Il progetto esportato misura X e Y dall angolo in alto a sinistra di ogni fotogramma ritagliato. Le dimensioni di larghezza e altezza sono valori positivi espressi in pixel.',
    },
    {
      type: 'tip',
      title: 'Verifica l intera sequenza di attacco',
      html: 'Riproduci l animazione completa dopo aver modificato un fotogramma per confermare la continuità del movimento.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Utilizza la scheda di contatto per la revisione con il team',
    },
    {
      type: 'paragraph',
      html: 'La scheda di contatto PNG mostra tutti i fotogrammi e i loro livelli di colore su un unica immagine, ideale per la collaborazione tra artisti e programmatori.',
    },
    { type: 'paragraph', html: 'Una forma di collisione deve seguire sia il profilo sia il momento dell azione. Controlla le fasi iniziale, attiva e di recupero e prova portata, priorità, rinculo e rete nel progetto realmente integrato.' },
  ],
  faq,
  bibliographyTitle: 'Riferimenti per lo sviluppo delle collisioni',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
