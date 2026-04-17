import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'torneo-online';
const title = 'Generatore di Tabelloni Online Gratis e Organizzatore di Tornei';
const description = 'Organizza tornei e crea tabelloni a eliminazione diretta gratuitamente senza registrazione. Perfetto per FIFA, Padel, eSports e giochi da tavolo. 100% Mobile Friendly.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Torneo in Corso',
  nextMatch: 'Prossimo Incontro',
  share: 'Condividi',
  backNew: 'Indietro / Nuovo',
  back: 'Indietro',
  newTournament: 'Nuovo Torneo',
  setupSubtitle: 'Configura e genera il tuo tabellone di gara.',
  tournamentNameLabel: 'Nome del Torneo',
  tournamentNamePlaceholder: 'Es. Torneo Estivo',
  addPlayersLabel: 'Aggiungi Partecipanti',
  addPlayerPlaceholder: 'Nome... o più nomi separati da virgole',
  playersLabel: 'Giocatori',
  clearAll: 'Cancella Tutto',
  emptyList: 'La lista è vuota',
  howItWorks: 'Come funziona?',
  howItWorksText: 'Aggiungi i partecipanti, dai un nome e genera. Il sistema creerà automaticamente gli accoppiamenti e gestirà i "Bye" (passaggi diretti) in caso di numero dispari.',
  historyLabel: 'Cronologia',
  noHistory: 'Nessun torneo salvato',
  noOldTournaments: 'Nessun torneo precedente',
  generateBtn: 'Genera Tabellone',
  shuffleLabel: 'Mischia accoppiamenti',
  scoreLabel: 'Abilita Punteggi (Opzionale)',
  dragHint: 'Trascina per spostare',
  roundFinal: 'Finale',
  roundSemifinal: 'Semifinali',
  roundQuarter: 'Quarti di finale',
  roundPrefix: 'Turno',
  byeLabel: 'Bye',
  waiting: 'In attesa...',
  emptyRound: 'Turno vuoto',
  confirmClearPlayers: 'Cancellare l\'intera lista giocatori?',
  alertMinPlayers: 'Servono almeno 2 giocatori.',
  alertLoadFailed: 'Impossibile caricare il torneo.',
  confirmDeleteTournament: 'Eliminare permanentemente questo torneo dalla cronologia?',
  toastShareLimit: 'Solo i tornei fino a 32 giocatori possono essere condivisi',
  toastShareError: 'Errore durante la generazione del link',
  toastShareCopied: 'Link copiato negli appunti',
  toastShareFailed: 'Impossibile copiare. URL:',
  toastFinished: 'Torneo Terminato!',
  defaultName: 'Torneo',
};

const faqData = [
  { question: 'Come funziona l\'eliminazione diretta?', answer: 'È un sistema di competizione in cui il partecipante che perde un incontro viene automaticamente eliminato dal torneo. I vincitori avanzano al turno successivo (ottavi, quarti, semifinali) fino a quando ne rimangono solo due per la finalissima.' },
  { question: 'Cosa succede se ho un numero dispari di giocatori?', answer: 'Il nostro strumento gestisce automaticamente i "BYE". Alcuni giocatori avanzeranno direttamente al secondo turno senza giocare nel primo, in modo che il tabellone termini sempre in potenze di due (2, 4, 8, 16...).' },
  { question: 'Posso salvare e condividere il tabellone del torneo?', answer: 'Sì, puoi condividere il tabellone tramite un link unico generato istantaneamente. Essendo uno strumento senza registrazione, i dati vengono mantenuti nel tuo browser finché la scheda è aperta.' },
  { question: 'Funziona per i tornei di eSports come FIFA o LoL?', answer: 'Assolutamente sì. È progettato per essere veloce e visivo, ideale per gestire rapidi tornei su console, PC o anche giochi da tavolo e di carte.' },
  { question: 'La creazione dei tornei è gratuita?', answer: 'Sì, completamente gratuita e senza restrizioni. Nessun piano premium, limiti di partecipanti, filigrane o pubblicità invasiva. Tutto funziona offline nel tuo browser.' },
  { question: 'I miei dati vengono cancellati se chiudo il browser?', answer: 'No. Usiamo il LocalStorage per salvare automaticamente tutti i tuoi tornei sul tuo dispositivo. Puoi chiudere la scheda, spegnere il computer e tornare giorni dopo: il tuo torneo sarà ancora lì.' },
  { question: 'Come funziona il pulsante "Prossimo Incontro"?', answer: 'Il sistema rileva automaticamente il prossimo accoppiamento pronto (entrambi i partecipanti confermati) ma senza ancora un risultato. Premendo "Prossimo Incontro" la visualizzazione salta direttamente a quell\'incontro.' },
];

const howTo = [
  { name: 'Inserisci i partecipanti', text: 'Scrivi i nomi dei giocatori o delle squadre che prenderanno parte alla competizione.' },
  { name: 'Genera il tabellone', text: 'Clicca sul pulsante genera. Il sistema creerà automaticamente gli accoppiamenti e i turni necessari.' },
  { name: 'Aggiorna i risultati', text: 'Clicca sul partecipante vincitore di ogni incontro affinché avanzi automaticamente alla fase successiva del tabellone.' },
  { name: 'Termina', text: 'Una volta completato il torneo, viene mostrato il campione finale.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Generatore di Tabelloni Online Gratis e Organizzatore di Tornei',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Gestisci le tue competizioni sportive, di videogiochi o di giochi da tavolo con l\'organizzatore di tornei più completo, gratuito e senza registrazione. Crea tabelloni a eliminazione diretta visivi e interattivi in pochi secondi, con un <strong>sistema di punteggio integrato</strong>, cronologia automatica e navigazione intelligente tra gli incontri. Tutto funziona offline, direttamente nel tuo browser.',
  },
  {
    type: 'title' as const,
    text: 'Come Creare un Torneo a Eliminazione Diretta?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Dai un nome al tuo torneo</strong>, aggiungi i partecipanti (uno per uno o incollando una lista separata da virgole), mischia gli accoppiamenti se vuoi, genera il tabellone, gestisci i risultati toccando il vincitore di ogni incontro e usa il pulsante "Prossimo Incontro" per navigare tra gli incontri non risolti.',
  },
  {
    type: 'title' as const,
    text: 'Funzionalità Avanzate',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Inserimento multiplo:</strong> Aggiungi più partecipanti contemporaneamente separati da virgole.',
      '<strong>Punteggi esatti:</strong> Sistema di punteggio con risultati come 3-1 o 21-19.',
      '<strong>Navigazione intelligente:</strong> Il pulsante "Prossimo Incontro" salta al prossimo accoppiamento in sospeso.',
      '<strong>Tabellone trascinabile:</strong> Vista desktop con scorrimento libero per grandi tornei.',
      '<strong>Cronologia persistente:</strong> Tutti i tornei salvati automaticamente nel tuo browser.',
      '<strong>Walkover Automatici:</strong> Bye e passaggi diretti risolti senza input manuale.',
      '<strong>Condividi tramite URL:</strong> Genera un link compresso per inviare il tabellone a chiunque.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Perfetto per Qualsiasi Competizione',
    level: 2 as const,
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Videogiochi & eSports',
        description: 'Perfetto per FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros o Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Accoppiamenti veloci', 'Nessun limite di squadre', 'Condivisibile istantaneamente'],
      },
      {
        title: 'Sport & Sport di Racchetta',
        description: 'Gestisci tabelloni di Padel, Tennis, Ping Pong, Badminton, Calcio a 5 o Basket 3x3.',
        icon: 'mdi:trophy-outline',
        points: ['Punteggi integrati', 'Vista mobile ottimizzata', 'Niente più carta'],
      },
      {
        title: 'Giochi da Tavolo & di Carte',
        description: 'Organizza tornei di Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Scacchi o Domino.',
        icon: 'mdi:cards-playing-outline',
        points: ['Fino a 64 giocatori', 'Cronologia dei turni', 'Gestione dei bye'],
      },
    ],
  },
  {
    type: 'title' as const,
    text: 'Cosa sono i "Bye" o i Passaggi Diretti?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'In un torneo ideale a eliminazione diretta, il numero di partecipanti deve essere una potenza di 2 (4, 8, 16, 32...). Quando hai un numero dispari o non potenza di 2 — per esempio 7, 10 o 13 giocatori —, il sistema assegna automaticamente i <strong>"Bye"</strong> nel primo turno. Un "Bye" significa che un partecipante avanza direttamente alla fase successiva senza giocare. Il nostro algoritmo calcola e assegna questi passaggi in modo equo e automatico.',
  },
  {
    type: 'title' as const,
    text: 'Istantaneo, Gratuito e Senza Registrazione',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Zero attrito. Niente account, niente installazioni, niente attese. Aggiungi i partecipanti e genera istantaneamente il tuo torneo. Tutto viene salvato automaticamente nel tuo browser tramite <strong>LocalStorage</strong>: chiudi la scheda, spegni il computer e torna giorni dopo. Il tuo torneo e la cronologia completa saranno ancora lì.',
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faqTitle: 'Domande Frequenti', faq: faqData, bibliography: [], howTo, schemas };
