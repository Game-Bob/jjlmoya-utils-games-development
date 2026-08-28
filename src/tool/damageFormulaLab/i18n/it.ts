import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calcolatore-formule-danno-giochi-ttk';
const title = 'Laboratorio Formule Danno e Grafici TTK';
const description = 'Confronta le formule di danno per videogiochi in tempo reale attraverso curve dinamiche, mappe di calore, arrotondamenti, colpi critici e Time to Kill (TTK).';

const faq = [
  {
    question: 'Cosa permette di confrontare il calcolatore di formule di danno?',
    answer: 'Esegue due espressioni matematiche sicure sugli stessi valori di combattimento. Permette di confrontare curve di danno, soglie di colpi, time to kill (TTK), regole di arrotondamento e l ordine delle resistenze.',
  },
  {
    question: 'Quali variabili e funzioni si possono utilizzare?',
    answer: 'Le variabili disponibili sono attack, defense, level, power, resistance, flat, criticalChance e criticalMultiplier. Le funzioni sicure sono min, max, clamp, abs, sqrt, pow, floor, round e ceil.',
  },
  {
    question: 'Come viene calcolato il Time to Kill (TTK)?',
    answer: 'I colpi necessari sono dati dalla salute del bersaglio divisa per il danno previsto arrotondato (per eccesso). Il TTK misura l intervallo tra il primo e l ultimo colpo: (colpi - 1) / attacchi al secondo.',
  },
  {
    question: 'Perché l ordine delle resistenze modifica il risultato?',
    answer: 'Applicare un modificatore piatto prima della resistenza percentuale riduce anche quel valore piatto. Applicare prima la resistenza lascia invariato il modificatore piatto successivo.',
  },
  {
    question: 'Una curva uniforme garantisce un gioco bilanciato?',
    answer: 'No. Una curva evidenzia zone a danno zero e discontinuità, ma il bilanciamento dipende dal contesto del gioco, dai ruoli e dai test con i giocatori.',
  },
];

const howTo = [
  { name: 'Scegliere due formule', text: 'Parti da un modello predefinito (lineare, rapporto o livello) oppure inserisci due formule personalizzate.' },
  { name: 'Impostare lo stato di combattimento', text: 'Inserisci i valori di attacco, difesa, livello, potenza, resistenza, modificatore piatto, critici, salute e cadenza.' },
  { name: 'Definire le regole dell motore', text: 'Scegli la modalità di arrotondamento e stabilisci se la resistenza si applica prima o dopo il modificatore piatto.' },
  { name: 'Analizzare curve e soglie', text: 'Confronta la traiettoria di attacco, la mappa di calore, i colpi necessari e gli avvisi di diagnostica.' },
  { name: 'Esportare l esperimento', text: 'Copia un link di condivisione o scarica la configurazione JSON, la tabella CSV o l immagine PNG del grafico.' },
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

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Inserisci la formula attualmente in uso, affiancala a un alternativa e regola i parametri di combattimento.',
    localNote: 'Modello privato. Formule e dati rimangono all interno di questo browser.',
    formulaDeck: 'Stanza delle formule',
    formulaALabel: 'Formula A (Modello attuale)',
    formulaBLabel: 'Formula B (Alternativa)',
    formulaHint: 'Variabili: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Funzioni sicure: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Protezione lineare',
    presetRatio: 'Armatura a rapporto',
    presetLevel: 'Scalabilità per livello',
    combatInputs: 'Stato di combattimento',
    attackLabel: 'Attacco',
    defenseLabel: 'Difesa',
    levelLabel: 'Livello',
    powerLabel: 'Coefficiente di potenza',
    resistanceLabel: 'Resistenza (%)',
    flatLabel: 'Modificatore piatto',
    criticalChanceLabel: 'Probabilità di critico (%)',
    criticalMultiplierLabel: 'Moltiplicatore critico',
    healthLabel: 'Salute del bersaglio',
    cadenceLabel: 'Attacchi al secondo',
    roundingLabel: 'Arrotondamento danno',
    roundingNone: 'Conserva decimali',
    roundingFloor: 'Arrotonda per difetto (Floor)',
    roundingRound: 'Intero più vicino',
    roundingCeil: 'Arrotonda per eccesso (Ceil)',
    orderLabel: 'Ordine dei modificatori',
    resistanceFirst: 'Resistenza poi piatto',
    flatFirst: 'Piatto poi resistenza',
    runLabel: 'Confronto di impatto in tempo reale',
    resultDamage: 'Danno previsto',
    resultHits: 'Colpi per sconfiggere',
    resultTtk: 'Time to Kill (TTK)',
    resultDifference: 'Differenza di danno',
    formulaAName: 'Attuale',
    formulaBName: 'Alternativa',
    curveTitle: 'Traiettoria di attacco',
    curveCaption: 'L attacco varia dalla metà al doppio del valore attuale mentre la difesa rimane fissa.',
    heatmapTitle: 'Mappa di calore di pressione',
    heatmapCaption: 'Mostra il danno previsto della Formula A su combinazioni di attacco e difesa.',
    attackAxis: 'L attacco aumenta verso destra',
    defenseAxis: 'La difesa aumenta verso il basso',
    scenariosTitle: 'Profili di combattimento',
    scenarioSkirmisher: 'Assaltatore',
    scenarioGuardian: 'Guardiano',
    scenarioBoss: 'Boss',
    scenarioCustom: 'Configurazione attuale',
    diagnosticsTitle: 'Verifica soglie e avvisi',
    statusBalanced: 'Nessuna anomalia matematica rilevata in questo intervallo di test.',
    exportTitle: 'Esporta esperimento',
    copyLink: 'Copia link di condivisione',
    exportCsv: 'Scarica CSV',
    exportJson: 'Scarica JSON',
    importJson: 'Importa JSON',
    exportPng: 'Scarica PNG grafico',
    reset: 'Ripristina modello',
    privacyDisclosure: 'Il link di condivisione salva la configurazione nell URL senza inviare dati a server esterni.',
    limitationDisclosure: 'Il danno critico previsto è una media e non una simulazione casuale.',
    importError: 'Il file selezionato non è una configurazione valida.',
    copiedStatus: 'Link copiato negli appunti.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Testare le formule di danno prima di integrarle nel motore di gioco',
    },
    {
      type: 'paragraph',
      html: 'Una formula di danno può sembrare corretta su valori medi ma fallire agli estremi della progressione. Questo laboratorio permette di identificare soglie e anomalie prima della stesura del codice.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Linguaggio di espressione sicuro e delimitato',
    },
    {
      type: 'paragraph',
      html: 'Il campo della formula accetta esclusivamente variabili e funzioni matematiche predefinite senza eseguire codice arbitrario.',
    },
    {
      type: 'table',
      headers: ['Metrica', 'Calcolo effettuato', 'Domanda di design'],
      rows: [
        ['Danno previsto', 'Formula base inclusiva di fattore critico e ordine di resistenza', 'La regola risponde in modo coerente su personaggi deboli e forti?'],
        ['Colpi per sconfiggere', 'Salute divisa per il danno arrotondato', 'Un singolo punto di statistica elimina un intero colpo necessario?'],
        ['Time to Kill (TTK)', 'Intervallo tra i colpi diviso per la cadenza di attacco', 'La frequenza crea il ritmo di combattimento desiderato?'],
        ['Mappa di calore', 'Campionamento della Formula A su attacco e difesa', 'Vi sono zone morte o salti improvvisi?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Separare l aritmetica dal giudizio sul bilanciamento',
    },
    {
      type: 'paragraph',
      html: 'Un grafico regolare non è una prova automatica di divertimento. Utilizza il laboratorio per individuare le domande da verificare nelle sessioni di playtest.',
    },
    {
      type: 'tip',
      title: 'Esamina sempre sia il danno che i colpi necessari',
      html: 'Una piccola variazione di danno può superare una soglia di salute ed eliminare un intero colpo. Confronta sempre il danno con il TTK.',
    },
    { type: 'paragraph', html: 'La stessa formula può produrre un combattimento diverso in base all arrotondamento e all ordine dei modificatori. Controlla anche danni piccoli, difesa alta e la soglia che richiede un colpo aggiuntivo; il TTK non include schivate, cooldown o interruzioni.' },
  ],
  faq,
  bibliographyTitle: 'Riferimenti per il calcolo del danno nei videogiochi',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
