import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'calcolatore-elo';
const title = 'Calcolatore di Punteggio ELO per Scacchi, Esports e Sport';
const description = 'Calcolatore ELO gratuito per vittorie, pareggi e sconfitte. Inserisci entrambi i punteggi, scegli un fattore K e ottieni l\'esatta variazione di punti, punteggio atteso, nuovo ELO ed ELO dell\'avversario.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Punteggio giocatore',
  opponentLabel: 'Punteggio avversario',
  kFactorLabel: 'Fattore K',
  resultLabel: 'Risultato partita',
  winLabel: 'Vittoria',
  drawLabel: 'Pareggio',
  lossLabel: 'Sconfitta',
  calculateLabel: 'Calcola',
  resetLabel: 'Reimposta',
  expectedLabel: 'Atteso',
  deltaLabel: 'Variazione',
  newRatingLabel: 'Nuovo punteggio',
  opponentNewRatingLabel: 'Nuovo ELO avversario',
  kFactorHelpTitle: 'Cos\'è il fattore K?',
  kFactorHelpText: 'K controlla quanto è aggressivo l\'aggiornamento. Un K basso significa classifiche stabili. Un K alto fa sì che ogni risultato sposti i punteggi più velocemente.',
  kFactorLowText: 'Stabile',
  kFactorHighText: 'Volatile',
  resultSummaryLabel: 'Impatto della partita',
  initialImpactText: 'Il pareggio mantiene la classifica compatta',
  historyVersusLabel: 'vs',
  historyToLabel: 'a',
  playerPointsLabel: 'punti giocatore',
  opponentEloLabel: 'ELO avversario',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'PUNTEGGIO',
  upsetLabel: 'Probabilità di sorpresa',
  favoriteLabel: 'Pressione del favorito',
  balancedLabel: 'Partita equilibrata',
  historyLabel: 'Calcoli locali',
  noHistoryLabel: 'Esegui un calcolo per salvarlo qui',
  copiedLabel: 'Copiato',
  copyLabel: 'Copia',
  clearLabel: 'Cancella',
  kBeginner: 'Principiante',
  kClub: 'Club',
  kTournament: 'Torneo',
  kElite: 'Élite',
};

const faqData = [
  { question: 'Come calcolo la variazione del punteggio ELO dopo una partita?', answer: 'Inserisci il tuo ELO attuale, l\'ELO dell\'avversario, il risultato della partita e il fattore K. Il calcolatore stima il tuo punteggio atteso, lo confronta con il risultato reale e restituisce i punti esatti guadagnati o persi.' },
  { question: 'Cosa significa il fattore K nell\'ELO?', answer: 'Il fattore K controlla la sensibilità del punteggio. Un fattore K basso rende i punteggi stabili e lenti a muoversi. Un fattore K alto fa reagire i punteggi più velocemente, utile per nuovi giocatori, stagioni brevi o scale locali attive.' },
  { question: 'Perché guadagno meno punti ELO quando batto un avversario con punteggio inferiore?', answer: 'Perché la formula si aspettava già che tu vincessi. Battere un avversario con punteggio molto più basso conferma la previsione, quindi il guadagno di punti è piccolo. Battere un avversario più forte è più sorprendente, quindi il guadagno è maggiore.' },
  { question: 'L\'avversario perde lo stesso numero di punti ELO?', answer: 'In uno scambio ELO standard a due giocatori, sì. I punti guadagnati da una parte vengono sottratti dall\'altra, quindi il calcolatore mostra sia il nuovo ELO del giocatore che il nuovo ELO dell\'avversario.' },
  { question: 'Posso usare questo calcolatore ELO al di fuori degli scacchi?', answer: 'Sì. L\'ELO funziona per qualsiasi competizione ripetuta testa a testa dove i giocatori più forti dovrebbero essere più propensi a vincere, inclusi esports, scale di tennis, gruppi di padel, tennis da tavolo, club di dibattito e leghe fantasy.' },
];

const howTo = [
  { name: 'Inserisci il punteggio del giocatore', text: 'Digita il punteggio attuale del giocatore di cui vuoi calcolare la variazione.' },
  { name: 'Inserisci il punteggio dell\'avversario', text: 'Aggiungi il punteggio dell\'avversario in modo che il calcolatore possa stimare il punteggio atteso.' },
  { name: 'Scegli il fattore K e il risultato', text: 'Usa un fattore K più basso per classifiche stabili o un fattore K più alto quando i punteggi devono adattarsi rapidamente, poi scegli vittoria, pareggio o sconfitta.' },
  { name: 'Leggi i nuovi punteggi', text: 'Il calcolatore mostra il punteggio atteso, la variazione di punteggio, il tuo nuovo ELO e il nuovo ELO dell\'avversario dopo lo scambio di punti.' },
];

const seo = [
  { type: 'title' as const, text: 'Calcola i Punti ELO Dopo Qualsiasi Partita', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Usa questo calcolatore di punteggio ELO quando hai bisogno di una risposta rapida a una domanda molto pratica: <strong>quanti punti ELO guadagno o perdo dopo questo risultato?</strong> Inserisci il tuo punteggio, il punteggio dell\'avversario, il risultato della partita e il fattore K. Lo strumento calcola il punteggio atteso, la variazione di punteggio, il tuo nuovo ELO e il nuovo ELO dell\'avversario nella stessa scheda risultati.'
  },
  {
    type: 'summary' as const,
    title: 'Cosa risponde questo calcolatore',
    items: [
      'Quanti punti ELO guadagni dopo una vittoria contro un avversario più forte o più debole.',
      'Quanti punti ELO perdi dopo una sconfitta a sorpresa.',
      'Se un pareggio dovrebbe aumentare o diminuire il tuo punteggio.',
      'Qual è il punteggio dell\'avversario dopo lo stesso scambio di punti.',
      'Come cambiare il fattore K rende il movimento del punteggio stabile o volatile.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'punteggio vittoria', description: 'Una vittoria viene trattata come un punto pieno prima di essere confrontata con il punteggio atteso.' },
      { value: '0.5', label: 'punteggio pareggio', description: 'Un pareggio è esattamente tra una vittoria e una sconfitta, quindi può far guadagnare punti contro un avversario più forte.' },
      { value: '0.0', label: 'punteggio sconfitta', description: 'Una sconfitta contro un avversario con punteggio inferiore di solito costa di più perché era inaspettata.' },
    ]
  },
  { type: 'title' as const, text: 'Cosa Fa la Formula ELO', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'I tre passaggi dietro ogni risultato',
    description: 'Il calcolatore segue l\'idea standard ELO senza farti lavorare manualmente con la formula.',
    items: [
      { label: 'Punteggio atteso', value: 'La differenza di punteggio viene convertita in un punteggio di tipo probabilistico. Ci si aspetta che i giocatori con punteggio più alto ottengano più punti.' },
      { label: 'Punteggio reale', value: 'Una vittoria conta come 1, un pareggio come 0.5 e una sconfitta come 0.' },
      { label: 'Variazione punteggio', value: 'La differenza tra punteggio reale e atteso viene moltiplicata per il fattore K e arrotondata in punti.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situazione', 'Cosa succede di solito', 'Perché succede'],
    rows: [
      ['Batti un avversario più forte', 'Grande guadagno ELO', 'Il tuo punteggio reale era molto più alto del previsto'],
      ['Batti un avversario più debole', 'Piccolo guadagno ELO', 'La formula si aspettava già che tu vincessi'],
      ['Pareggi contro un avversario più forte', 'Piccolo guadagno ELO', 'Un pareggio può superare il tuo punteggio atteso'],
      ['Perdi contro un avversario più debole', 'Grande perdita ELO', 'Il risultato è stato peggiore del previsto'],
    ]
  },
  { type: 'title' as const, text: 'Scegliere il Fattore K Giusto per il Tuo Sistema di Punteggio', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>Il fattore K è la manopola della sensibilità di un sistema ELO.</strong> Non decide chi meritava di vincere. Decide quanto fortemente la classifica reagisce a un risultato. Se la tua lega ha molte partite e punteggi maturi, un K più basso mantiene la classifica calma. Se i giocatori sono nuovi o le stagioni sono brevi, un K più alto aiuta i punteggi a recuperare più velocemente.'
  },
  {
    type: 'table' as const,
    headers: ['Fattore K', 'Usalo per', 'Cosa dovrebbe aspettarsi l\'utente'],
    rows: [
      ['10 a 16', 'Club di scacchi affermati, gruppi di esperti, classifiche di lunga durata', 'Punteggi molto stabili con piccole variazioni dopo ogni partita'],
      ['20 a 32', 'Leghe locali, scale di club, tornei ricorrenti', 'Movimento equilibrato che sembra reattivo senza esagerare'],
      ['40 a 60', 'Nuovi giocatori, stagioni brevi, scale esports, gruppi informali', 'Correzione rapida quando il punteggio attuale potrebbe essere inaccurato'],
      ['60 e oltre', 'Solo formati sperimentali o punteggi provvisori', 'Punteggi molto volatili dove una partita può cambiare drasticamente la classifica'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Miglior valore predefinito per la maggior parte degli utenti',
    html: 'Se non segui una regola ufficiale di federazione, inizia con <strong>K 32</strong>. È abbastanza reattivo per le scale attive e comunque abbastanza stabile che un risultato fortunato non riscriva completamente la classifica.'
  },
  { type: 'title' as const, text: 'Come Leggere il Risultato del Tuo Calcolatore ELO', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Atteso:</strong> il punteggio che la formula aveva previsto prima della partita. Un punteggio atteso più alto significa che eri favorito.',
      '<strong>Variazione:</strong> i punti ELO esatti aggiunti o rimossi dal punteggio del giocatore.',
      '<strong>Nuovo punteggio:</strong> il punteggio del giocatore dopo l\'applicazione del risultato.',
      '<strong>Nuovo ELO avversario:</strong> il punteggio dell\'avversario dopo il movimento opposto dei punti.',
      '<strong>Impatto partita:</strong> un riepilogo in linguaggio chiaro di quanto fortemente il risultato ha spostato la classifica.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Scacchi e giochi da tavolo',
        description: 'Calcola i punteggi post-partita per serate di club, eventi online e gruppi di punteggio privati.',
        icon: 'mdi:chess-knight',
        points: ['Supporto vittoria-pareggio-sconfitta', 'ELO avversario mostrato', 'Ideale per classifiche a lungo termine']
      },
      {
        title: 'Scale esports',
        description: 'Aggiorna i punteggi di giocatori o squadre dopo partite ripetute testa a testa dove l\'abilità può cambiare rapidamente.',
        icon: 'mdi:gamepad-variant',
        points: ['Opzioni fattore K più alto', 'Correzione rapida del punteggio', 'Ricompense chiare per sorprese']
      },
      {
        title: 'Scale sportive',
        description: 'Mantieni classifiche eque per tennis, padel, squash, tennis da tavolo, badminton e leghe locali.',
        icon: 'mdi:tennis',
        points: ['Aggiornamenti manuali semplici', 'Funziona per i club', 'Facile per gli organizzatori']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'Quando l\'ELO è una buona scelta di punteggio',
    items: [
      {
        pro: 'Eccellente per partite ripetute testa a testa dove i giocatori più forti dovrebbero vincere più spesso.',
        con: 'Meno ideale per sport di squadra dove il contributo individuale è difficile da isolare.'
      },
      {
        pro: 'Facile da spiegare perché le vittorie contro avversari più forti valgono più punti.',
        con: 'Necessita di abbastanza partite prima che i punteggi sembrino accurati per giocatori completamente nuovi.'
      },
      {
        pro: 'Abbastanza semplice da mantenere in un foglio di calcolo, scala di club o tabella di lega.',
        con: 'Le regole del fattore K devono essere coerenti o le classifiche diventano difficili da fidarsi.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Importante per gli organizzatori di leghe',
    html: 'Scegli il tuo fattore K prima dell\'inizio della stagione e pubblicalo. I giocatori si fidano di più delle tabelle ELO quando tutti sanno come vengono calcolati i punteggi prima che i risultati vengano inseriti.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
