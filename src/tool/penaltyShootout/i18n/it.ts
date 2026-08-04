import { bibliographyEntries } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PenaltyShootoutUI } from '../ui';

const slug = 'calcolatore-calci-di-rigore';
const title = 'Tabellone Calci di Rigore Online: Segnapunti Rigori Calcio';
const description =
  'Traccia la sequenza dei calci di rigore in tempo reale. Monitoraggio di 5 rigori, eliminazione matematica, sudden death e celebrazione del vincitore.';

const faqData = [
  {
    question: 'Quando finisce anticipatamente una sequenza di calci di rigore?',
    answer:
      'I rigori terminano non appena una squadra accumula un vantaggio di reti che l\'altra non può più raggiungere matematicamente con i tiri rimasti.',
  },
  {
    question: 'Come funziona ad oltranza (Sudden Death) nei rigori?',
    answer:
      'Se dopo 5 rigori a testa persiste la parità, si prosegue con una coppia di rigori alla volta fino a quando una squadra segna e l\'altra sbaglia nello stesso turno.',
  },
  {
    question: 'Chi calcia per primo nella sequenza dei rigori?',
    answer:
      'L\'arbitro effettua un sorteggio con la moneta per scegliere la porta e un secondo sorteggio per stabilire chi calcia per primo.',
  },
  {
    question: 'È possibile sostituire il portiere durante i calci di rigore?',
    answer:
      'Un portiere infortunato che non può proseguire può essere sostituito da una riserva designata, a condizione che la squadra non abbia esaurito le sostituzioni.',
  },
];

const howToData = [
  {
    name: 'Inserisci i nomi delle squadre',
    text: 'Scrivi i nomi personalizzati delle due squadre prima di iniziare la sequenza di tiri.',
  },
  {
    name: 'Registra ciascun rigore',
    text: 'Fai clic su GOL o ERRORE dopo ogni tiro. L\'applicazione aggiorna punteggio, indicatori e turno di battuta.',
  },
  {
    name: 'Passaggio ad Oltranza',
    text: 'In caso di parità dopo 5 rigori ciascuno, la schermata passa automaticamente alla modalità ad oltranza.',
  },
  {
    name: 'Proclamazione del Vincitore',
    text: 'Al raggiungimento della vittoria matematica o ad oltranza, una schermata animata proclama la squadra vincitrice.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<PenaltyShootoutUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography: bibliographyEntries,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Regolamento Ufficiale IFAB per i Calci di Rigore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I calci di rigore (ufficialmente <em>tiri dal punto del calcio di rigore</em>) stabiliscono il vincitore di una partita di calcio finita in parità secondo la Regola 10 dell\'IFAB.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5', label: 'Rigori Iniziali' },
        { value: '11m', label: 'Distanza dal Gol' },
        { value: '1v1', label: 'Tiratore vs Portiere' },
        { value: 'ABBA / AB', label: 'Sequenza Tiri' },
      ],
    },
    {
      type: 'tip',
      title: 'Regola dell\'Eliminazione Matematica',
      html: 'Se una squadra ottiene un numero di gol superiore a quelli che l\'avversario può realizzare con i rigori rimasti, l\'arbitro fischia la fine della sequenza.',
    },
    {
      type: 'title',
      text: 'Confronto Fase Regolare vs Ad Oltranza',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fase Iniziale (5 Rigori)',
          description: 'Serie di 5 tiri alternati per squadra. Interruzione anticipata solo in caso di impossibilità matematica di rimonta.',
        },
        {
          title: 'Fase ad Oltranza',
          description: 'Coppie singole di rigori dal 6° turno. Qualsiasi scarto di gol a parità di tiri decreta la vittoria immediata.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Sintesi delle Norme IFAB',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Regola / Requisito', 'Standard Ufficiale IFAB'],
      rows: [
        ['Giocatori Idonei', 'Possono calciare solo i giocatori presenti in campo al momento del fischio finale.'],
        ['Posizione del Portiere', 'Deve mantenere almeno parte di un piede sulla linea di porta al momento del tiro.'],
        ['Finte nella Rincorsa', 'È consentito finta nella rincorsa; finta al termine della rincorsa è sanzionata.'],
        ['Parità Numerica', 'Se una squadra ha meno giocatori per espulsione, l\'avversario deve ridurre la rosa per pareggiare il numero.'],
      ],
    },
    {
      type: 'title',
      text: 'Pro e Contro dei Calci di Rigore',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Valutazione del Formato',
      items: [
        {
          pro: 'Garantisce un vincitore certo in un tempo ben definito.',
          con: 'L\'altissima pressione psicologica può oscurare la prestazione nei 120 minuti.',
        },
        {
          pro: 'Offre spettacolarità ed emozioni fortissime ai tifosi.',
          con: 'Un errore individuale rischia di attribuire colpe sproporzionate.',
        },
      ],
    },
  ],
  ui: {
    teamALabel: 'Squadra Casa',
    teamBLabel: 'Squadra Ospite',
    scoreGoal: 'GOL',
    scoreMiss: 'ERRORE',
    undo: 'Annulla',
    reset: 'Ripristina',
    suddenDeath: 'Ad Oltranza',
    regularRounds: 'Turno Regolare',
    roundLabel: 'Turno',
    turnLabel: 'Turno di Tiro',
    winnerTitle: 'Vincitore Proclamato',
    unreachableLead: 'Vantaggio incolmabile nella fase regolare',
    regularRoundsWin: 'Vittoria dopo 5 rigori regolari',
    suddenDeathWin: 'Vittoria ad oltranza',
    statusPending: 'In attesa',
    statusScored: 'Segnato',
    statusMissed: 'Sbagliato',
  },
};
