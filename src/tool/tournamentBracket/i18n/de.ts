import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'turnier-planer';
const title = 'Kostenloser Online Turnier Generator und Bracket Ersteller';
const description = 'Organisieren Sie Turniere und erstellen Sie kostenlos K.-o.-System-Brackets ohne Registrierung. Perfekt für FIFA, Padel, eSports und Brettspiele. 100 % mobilfreundlich.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Turnier läuft',
  nextMatch: 'Nächstes Spiel',
  share: 'Teilen',
  backNew: 'Zurück / Neu',
  back: 'Zurück',
  newTournament: 'Neues Turnier',
  setupSubtitle: 'Richten Sie Ihr Wettbewerbs Bracket ein und generieren Sie es.',
  tournamentNameLabel: 'Turniername',
  tournamentNamePlaceholder: 'Z. B. Sommerturnier',
  addPlayersLabel: 'Teilnehmer hinzufügen',
  addPlayerPlaceholder: 'Name... oder mehrere durch Kommas getrennt',
  playersLabel: 'Spieler',
  clearAll: 'Alle löschen',
  emptyList: 'Die Liste ist leer',
  howItWorks: 'Wie funktioniert es?',
  howItWorksText: 'Fügen Sie Teilnehmer hinzu, geben Sie einen Namen ein und generieren Sie das Bracket. Das System erstellt automatisch Paarungen und handhabt "Freilose" (direktes Weiterkommen) bei ungerader Teilnehmerzahl.',
  historyLabel: 'Verlauf',
  noHistory: 'Keine Turniere gespeichert',
  noOldTournaments: 'Keine vorherigen Turniere',
  generateBtn: 'Bracket generieren',
  shuffleLabel: 'Paarungen mischen',
  scoreLabel: 'Ergebnisse aktivieren (Optional)',
  dragHint: 'Zum Verschieben ziehen',
  roundFinal: 'Finale',
  roundSemifinal: 'Halbfinale',
  roundQuarter: 'Viertelfinale',
  roundPrefix: 'Runde',
  byeLabel: 'Freilos',
  waiting: 'Warten...',
  emptyRound: 'Leere Runde',
  confirmClearPlayers: 'Gesamte Spielerliste löschen?',
  alertMinPlayers: 'Sie benötigen mindestens 2 Spieler.',
  alertLoadFailed: 'Turnier konnte nicht geladen werden.',
  confirmDeleteTournament: 'Dieses Turnier dauerhaft aus dem Verlauf löschen?',
  toastShareLimit: 'Nur Turniere mit bis zu 32 Spielern können geteilt werden',
  toastShareError: 'Fehler beim Generieren des Links',
  toastShareCopied: 'Link in die Zwischenablage kopiert',
  toastShareFailed: 'Kopieren fehlgeschlagen. URL:',
  toastFinished: 'Turnier beendet!',
  defaultName: 'Turnier'
};

const faqData = [
  { question: 'Wie funktioniert das Einzeleliminationssystem (K.-o.-System)?', answer: 'Es ist ein Wettbewerbssystem, bei dem der Teilnehmer, der ein Spiel verliert, automatisch aus dem Turnier ausscheidet. Die Gewinner rücken in die nächste Runde vor (Achtelfinale, Viertelfinale, Halbfinale), bis nur noch zwei für das große Finale übrig bleiben.' },
  { question: 'Was passiert bei einer ungeraden Anzahl von Spielern?', answer: 'Unser Tool handhabt automatisch "Freilose" (BYEs). Einige Spieler rücken direkt in die zweite Runde vor, ohne in der ersten zu spielen, damit das Bracket immer in Zweierpotenzen endet (2, 4, 8, 16...).' },
  { question: 'Kann ich das Turnier-Bracket speichern und teilen?', answer: 'Ja, Sie können das Bracket über einen einzigartigen, sofort generierten Link teilen. Da es sich um ein registrierungsfreies Tool handelt, werden die Daten in Ihrem Browser gespeichert, solange der Tab offen ist.' },
  { question: 'Funktioniert es für eSports-Turniere wie FIFA oder LoL?', answer: 'Absolut. Es ist auf Schnelligkeit und visuelle Klarheit ausgelegt, ideal für die Verwaltung von Konsolen-, PC- oder sogar Brett- und Kartenspielturnieren.' },
  { question: 'Ist das Erstellen von Turnieren kostenlos?', answer: 'Ja, komplett kostenlos und ohne Einschränkungen. Keine Pläne, Teilnehmerlimits, Wasserzeichen oder aufdringliche Werbung. Alles funktioniert offline in Ihrem Browser.' },
  { question: 'Werden meine Daten gelöscht, wenn ich den Browser schließe?', answer: 'Nein. Wir verwenden LocalStorage, um alle Ihre Turniere automatisch auf Ihrem Gerät zu speichern. Sie können den Tab schließen, den Computer ausschalten und Tage später wiederkommen: Ihr Turnier wird immer noch da sein.' },
  { question: 'Wie funktioniert die Taste "Nächstes Spiel"?', answer: 'Das System erkennt automatisch die nächste bereite Paarung (beide Teilnehmer bestätigt), aber noch ohne Ergebnis. Durch Drücken von "Nächstes Spiel" springt die Ansicht direkt zu diesem Spiel.' },
];

const howTo = [
  { name: 'Teilnehmer eingeben', text: 'Geben Sie die Namen der Spieler oder Teams ein, die am Wettbewerb teilnehmen.' },
  { name: 'Bracket generieren', text: 'Klicken Sie auf den Button zum Generieren. Das System erstellt automatisch die Paarungen und notwendigen Runden.' },
  { name: 'Ergebnisse aktualisieren', text: 'Klicken Sie auf den gewinnenden Teilnehmer jedes Spiels, damit er automatisch in die nächste Stufe des Brackets vorrückt.' },
  { name: 'Beenden', text: 'Sobald das Turnier abgeschlossen ist, wird der Gesamtsieger angezeigt.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Kostenloser Online-Turnier-Generator und Bracket-Ersteller',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Verwalten Sie Ihre Sport-, Videospiel- oder Brettspielwettbewerbe mit dem umfassendsten, kostenlosen und registrierungsfreien Turnierorganisator. Erstellen Sie in Sekundenschnelle visuelle und interaktive K.-o.-System-Brackets mit einem <strong>integrierten Punktesystem</strong>, automatischem Verlauf und intelligenter Spielnavigation. Alles funktioniert offline, direkt in Ihrem Browser.'
  },
  {
    type: 'title' as const,
    text: 'Wie erstelle ich ein K.-o.-Runden-Turnier?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Benennen Sie Ihr Turnier</strong>, fügen Sie Teilnehmer hinzu (einzeln oder als kommagetrennte Liste), mischen Sie die Paarungen nach Belieben, generieren Sie das Bracket, verwalten Sie die Ergebnisse durch Antippen des Gewinners und nutzen Sie die Taste "Nächstes Spiel", um zwischen offenen Spielen zu navigieren.'
  },
  {
    type: 'title' as const,
    text: 'Erweiterte Funktionen',
    level: 2 as const
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Masseneingabe:</strong> Fügen Sie mehrere Teilnehmer gleichzeitig durch Kommas getrennt hinzu.',
      '<strong>Genaue Ergebnisse:</strong> Punktesystem mit Ergebnissen wie 3-1 oder 21-19.',
      '<strong>Intelligente Navigation:</strong> Die Taste "Nächstes Spiel" springt zur nächsten ausstehenden Paarung.',
      '<strong>Verschiebbares Bracket:</strong> Desktop-Ansicht mit freiem Scrollen für große Turniere.',
      '<strong>Permanenter Verlauf:</strong> Alle Turniere werden automatisch in Ihrem Browser gespeichert.',
      '<strong>Auto-Walkovers:</strong> Freilose und direktes Weiterkommen werden ohne manuelle Eingabe gelöst.',
      '<strong>Per URL teilen:</strong> Generieren Sie einen komprimierten Link, um das Bracket an jeden zu senden.',
    ]
  },
  {
    type: 'title' as const,
    text: 'Perfekt für jeden Wettbewerb',
    level: 2 as const
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Videospiele & eSports',
        description: 'Perfekt für FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros oder Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Schnelle Paarungen', 'Kein Teamlimit', 'Sofort teilbar']
      },
      {
        title: 'Sport & Rückschlagspiele',
        description: 'Verwalten Sie Brackets für Padel, Tennis, Tischtennis, Badminton, Futsal oder 3x3-Basketball.',
        icon: 'mdi:trophy-outline',
        points: ['Integrierte Ergebnisse', 'Optimierte Mobilansicht', 'Kein Papier nötig']
      },
      {
        title: 'Brett und Kartenspiele',
        description: 'Organisieren Sie Turniere für Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Schach oder Domino.',
        icon: 'mdi:cards-playing-outline',
        points: ['Bis zu 64 Spieler', 'Rundenverlauf', 'Freilos-Management']
      },
    ]
  },
  {
    type: 'title' as const,
    text: 'Was sind "Freilose" oder Direktpass-Regeln?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'In einem idealen K.-o.-Turnier muss die Teilnehmerzahl eine Zweierpotenz sein (4, 8, 16, 32...). Wenn Sie eine ungerade oder keine Zweierpotenz-Zahl haben , zum Beispiel 7, 10 oder 13 Spieler, weist das System in der ersten Runde automatisch <strong>"Freilose"</strong> (Byes) zu. Ein Freilos bedeutet, dass ein Teilnehmer direkt in die nächste Phase vorrückt, ohne zu spielen. Unser Algorithmus berechnet und weist diese Pässe fair und automatisch zu.'
  },
  {
    type: 'title' as const,
    text: 'Sofort, kostenlos und keine Anmeldung erforderlich',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Keine Hürden. Keine Konten, keine Installationen, kein Warten. Fügen Sie Teilnehmer hinzu und generieren Sie Ihr Turnier sofort. Alles wird automatisch in Ihrem Browser über <strong>LocalStorage</strong> gespeichert: Schließen Sie den Tab, schalten Sie den Computer aus und kommen Sie Tage später wieder. Ihr Turnier und der vollständige Verlauf werden immer noch da sein.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
