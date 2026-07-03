import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'elo-rechner';
const title = 'ELO Bewertungsrechner für Schach, Esports und Sport';
const description = 'Kostenloser ELO-Rechner für Siege, Unentschieden und Niederlagen. Geben Sie beide Bewertungen ein, wählen Sie einen K-Faktor und sehen Sie die genaue Punktänderung, erwartete Punktzahl, neues ELO und Gegner-ELO.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Spielerbewertung',
  opponentLabel: 'Gegnerbewertung',
  kFactorLabel: 'K-Faktor',
  resultLabel: 'Spielergebnis',
  winLabel: 'Sieg',
  drawLabel: 'Unentschieden',
  lossLabel: 'Niederlage',
  calculateLabel: 'Berechnen',
  resetLabel: 'Zurücksetzen',
  expectedLabel: 'Erwartet',
  deltaLabel: 'Änderung',
  newRatingLabel: 'Neue Bewertung',
  opponentNewRatingLabel: 'Neues Gegner-ELO',
  kFactorHelpTitle: 'Was ist der K-Faktor?',
  kFactorHelpText: 'K steuert, wie aggressiv die Aktualisierung ist. Ein niedriger K-Wert bedeutet stabile Ranglisten. Ein hoher K-Wert bedeutet, dass jedes Ergebnis die Bewertungen schneller verschiebt.',
  kFactorLowText: 'Stabil',
  kFactorHighText: 'Volatil',
  resultSummaryLabel: 'Spielauswirkung',
  initialImpactText: 'Unentschieden hält die Tabelle eng',
  historyVersusLabel: 'gg',
  historyToLabel: 'zu',
  playerPointsLabel: 'Spielerpunkte',
  opponentEloLabel: 'Gegner-ELO',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'WERTUNG',
  upsetLabel: 'Überraschungschance',
  favoriteLabel: 'Favoritendruck',
  balancedLabel: 'Ausgeglichenes Spiel',
  historyLabel: 'Lokale Berechnungen',
  noHistoryLabel: 'Führen Sie eine Berechnung aus, um sie hier zu speichern',
  copiedLabel: 'Kopiert',
  copyLabel: 'Kopieren',
  clearLabel: 'Löschen',
  kBeginner: 'Anfänger',
  kClub: 'Verein',
  kTournament: 'Turnier',
  kElite: 'Elite',
};

const faqData = [
  { question: 'Wie berechne ich die ELO-Änderung nach einem Spiel?', answer: 'Geben Sie Ihr aktuelles ELO, das Gegner-ELO, das Spielergebnis und den K-Faktor ein. Der Rechner schätzt Ihre erwartete Punktzahl, vergleicht sie mit dem tatsächlichen Ergebnis und gibt die genauen gewonnenen oder verlorenen Punkte zurück.' },
  { question: 'Was bedeutet der K-Faktor im ELO-System?', answer: 'Der K-Faktor steuert die Empfindlichkeit der Bewertung. Ein niedriger K-Faktor macht Bewertungen stabil und langsam beweglich. Ein hoher K-Faktor lässt Bewertungen schneller reagieren, was für neue Spieler, kurze Saisons oder aktive lokale Leitern nützlich ist.' },
  { question: 'Warum gewinne ich weniger ELO-Punkte, wenn ich einen schwächeren Gegner schlage?', answer: 'Weil die Formel bereits erwartet hat, dass Sie gewinnen. Einen viel schwächeren Gegner zu schlagen bestätigt die Vorhersage, daher ist der Punktegewinn gering. Einen stärkeren Gegner zu schlagen ist überraschender, daher ist der Gewinn größer.' },
  { question: 'Verliert der Gegner die gleiche Anzahl an ELO-Punkten?', answer: 'Bei einem standardmäßigen Zwei-Spieler-ELO-Austausch, ja. Die von einer Seite gewonnenen Punkte werden von der anderen abgezogen, daher zeigt der Rechner sowohl das neue Spieler-ELO als auch das neue Gegner-ELO an.' },
  { question: 'Kann ich diesen ELO-Rechner außerhalb des Schachs verwenden?', answer: 'Ja. ELO funktioniert für jeden wiederholten Einzelwettkampf, bei dem stärkere Spieler wahrscheinlicher gewinnen sollten, einschließlich Esports, Tennisleitern, Padelgruppen, Tischtennis, Debattierclubs und Fantasy-Ligen.' },
];

const howTo = [
  { name: 'Spielerbewertung eingeben', text: 'Geben Sie die aktuelle Bewertung des Spielers ein, dessen Änderung Sie berechnen möchten.' },
  { name: 'Gegnerbewertung eingeben', text: 'Fügen Sie die Gegnerbewertung hinzu, damit der Rechner die erwartete Punktzahl schätzen kann.' },
  { name: 'K-Faktor und Ergebnis wählen', text: 'Verwenden Sie einen niedrigeren K-Faktor für stabile Ranglisten oder einen höheren K-Faktor, wenn sich Bewertungen schnell anpassen sollen, dann wählen Sie Sieg, Unentschieden oder Niederlage.' },
  { name: 'Neue Bewertungen ablesen', text: 'Der Rechner zeigt die erwartete Punktzahl, die Bewertungsänderung, Ihr neues ELO und das neue Gegner-ELO nach dem Punkteaustausch an.' },
];

const seo = [
  { type: 'title' as const, text: 'ELO-Punkte Nach Jedem Spiel Berechnen', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Verwenden Sie diesen ELO-Rechner, wenn Sie eine schnelle Antwort auf eine sehr praktische Frage benötigen: <strong>Wie viele ELO-Punkte gewinne oder verliere ich nach diesem Ergebnis?</strong> Geben Sie Ihre Bewertung, die Gegnerbewertung, das Spielergebnis und den K-Faktor ein. Das Tool berechnet die erwartete Punktzahl, die Bewertungsänderung, Ihr neues ELO und das neue Gegner-ELO in derselben Ergebniskarte.'
  },
  {
    type: 'summary' as const,
    title: 'Was dieser Rechner beantwortet',
    items: [
      'Wie viele ELO-Punkte Sie nach einem Sieg gegen einen stärkeren oder schwächeren Gegner gewinnen.',
      'Wie viele ELO-Punkte Sie nach einer überraschenden Niederlage verlieren.',
      'Ob ein Unentschieden Ihre Bewertung erhöhen oder senken sollte.',
      'Wie die Gegnerbewertung nach demselben Punkteaustausch aussieht.',
      'Wie die Änderung des K-Faktors die Bewertungsbewegung stabil oder volatil macht.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'Siegespunktzahl', description: 'Ein Sieg wird als voller Punkt gezählt, bevor er mit der erwarteten Punktzahl verglichen wird.' },
      { value: '0.5', label: 'Unentschieden-Punktzahl', description: 'Ein Unentschieden liegt genau zwischen Sieg und Niederlage und kann daher Punkte gegen einen stärkeren Gegner bringen.' },
      { value: '0.0', label: 'Niederlage-Punktzahl', description: 'Eine Niederlage gegen einen schwächeren Gegner kostet normalerweise mehr, weil sie unerwartet war.' },
    ]
  },
  { type: 'title' as const, text: 'Was die ELO-Formel Tut', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'Die drei Schritte hinter jedem Ergebnis',
    description: 'Der Rechner folgt der standardmäßigen ELO-Idee, ohne dass Sie die Formel manuell bearbeiten müssen.',
    items: [
      { label: 'Erwartete Punktzahl', value: 'Der Bewertungsabstand wird in eine wahrscheinlichkeitsbasierte Punktzahl umgewandelt. Von höher bewerteten Spielern wird erwartet, dass sie mehr Punkte erzielen.' },
      { label: 'Tatsächliche Punktzahl', value: 'Ein Sieg zählt als 1, ein Unentschieden als 0,5 und eine Niederlage als 0.' },
      { label: 'Bewertungsänderung', value: 'Die Differenz zwischen tatsächlicher und erwarteter Punktzahl wird mit dem K-Faktor multipliziert und auf Punkte gerundet.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situation', 'Was normalerweise passiert', 'Warum es passiert'],
    rows: [
      ['Sie schlagen einen stärkeren Gegner', 'Großer ELO-Gewinn', 'Ihre tatsächliche Punktzahl war viel höher als erwartet'],
      ['Sie schlagen einen schwächeren Gegner', 'Kleiner ELO-Gewinn', 'Die Formel erwartete bereits, dass Sie gewinnen'],
      ['Sie spielen unentschieden gegen einen Stärkeren', 'Kleiner ELO-Gewinn', 'Ein Unentschieden kann Ihre erwartete Punktzahl übertreffen'],
      ['Sie verlieren gegen einen schwächeren Gegner', 'Großer ELO-Verlust', 'Das Ergebnis war schlechter als erwartet'],
    ]
  },
  { type: 'title' as const, text: 'Den Richtigen K-Faktor für Ihr Bewertungssystem Wählen', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>Der K-Faktor ist der Empfindlichkeitsregler eines ELO-Systems.</strong> Er entscheidet nicht, wer den Sieg verdient hat. Er entscheidet, wie stark die Bewertungstabelle auf ein Ergebnis reagiert. Wenn Ihre Liga viele Spiele und ausgereifte Bewertungen hat, hält ein niedrigerer K-Wert die Tabelle ruhig. Wenn Spieler neu sind oder die Saisons kurz sind, hilft ein höherer K-Wert, dass die Bewertungen schneller aufholen.'
  },
  {
    type: 'table' as const,
    headers: ['K-Faktor', 'Verwenden für', 'Was der Benutzer erwarten sollte'],
    rows: [
      ['10 bis 16', 'Etablierte Schachclubs, Expertengruppen, langlaufende Ranglisten', 'Sehr stabile Bewertungen mit kleinen Änderungen nach jedem Spiel'],
      ['20 bis 32', 'Lokale Ligen, Vereinsleitern, wiederkehrende Turniere', 'Ausgewogene Bewegung, die reaktionsfähig wirkt, ohne zu überreagieren'],
      ['40 bis 60', 'Neue Spieler, kurze Saisons, Esports-Leitern, informelle Gruppen', 'Schnelle Korrektur, wenn die aktuelle Bewertung möglicherweise ungenau ist'],
      ['60 und mehr', 'Nur experimentelle Formate oder vorläufige Bewertungen', 'Sehr volatile Bewertungen, bei denen ein Spiel die Tabelle stark verschieben kann'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Bester Standardwert für die meisten Benutzer',
    html: 'Wenn Sie keiner offiziellen Verbandsregel folgen, beginnen Sie mit <strong>K 32</strong>. Es ist reaktionsfähig genug für aktive Leitern und dennoch stabil genug, dass ein glückliches Ergebnis die Rangliste nicht komplett umschreibt.'
  },
  { type: 'title' as const, text: 'So Lesen Sie Ihr ELO-Rechner-Ergebnis', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Erwartet:</strong> die Punktzahl, die die Formel vor dem Spiel vorhergesagt hat. Eine höhere erwartete Punktzahl bedeutet, dass Sie favorisiert waren.',
      '<strong>Änderung:</strong> die genauen ELO-Punkte, die zur Spielerbewertung hinzugefügt oder davon abgezogen wurden.',
      '<strong>Neue Bewertung:</strong> die Spielerbewertung nach Anwendung des Ergebnisses.',
      '<strong>Neues Gegner-ELO:</strong> die Gegnerbewertung nach der entgegengesetzten Punktbewegung.',
      '<strong>Spielauswirkung:</strong> eine klare Zusammenfassung, wie stark das Ergebnis die Tabelle verschoben hat.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Schach und Brettspiele',
        description: 'Berechnen Sie Bewertungen nach dem Spiel für Clubabende, Online-Events und private Bewertungsgruppen.',
        icon: 'mdi:chess-knight',
        points: ['Sieg-Unentschieden-Niederlage-Unterstützung', 'Gegner-ELO angezeigt', 'Gut für langfristige Ranglisten']
      },
      {
        title: 'Esports Leitern',
        description: 'Aktualisieren Sie Spieler- oder Teambewertungen nach wiederholten Einzelduellen, bei denen sich die Fähigkeiten schnell ändern können.',
        icon: 'mdi:gamepad-variant',
        points: ['Höhere K-Faktor-Optionen', 'Schnelle Bewertungskorrektur', 'Klare Überraschungsbelohnungen']
      },
      {
        title: 'Sportleitern',
        description: 'Pflegen Sie faire Ranglisten für Tennis, Padel, Squash, Tischtennis, Badminton und lokale Ligen.',
        icon: 'mdi:tennis',
        points: ['Einfache manuelle Aktualisierungen', 'Funktioniert für Vereine', 'Einfach für Organisatoren']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'Wann ELO eine gute Bewertungswahl ist',
    items: [
      {
        pro: 'Hervorragend für wiederholte Einzelduelle, bei denen stärkere Spieler häufiger gewinnen sollten.',
        con: 'Weniger ideal für Mannschaftssportarten, bei denen der individuelle Beitrag schwer zu isolieren ist.'
      },
      {
        pro: 'Leicht zu erklären, weil Siege gegen stärkere Gegner mehr Punkte wert sind.',
        con: 'Benötigt genügend Spiele, bevor sich Bewertungen für brandneue Spieler genau anfühlen.'
      },
      {
        pro: 'Einfach genug, um in einer Tabellenkalkulation, Vereinsleiter oder Ligatabelle gepflegt zu werden.',
        con: 'K-Faktor-Regeln müssen konsistent sein, sonst werden Ranglisten schwer vertrauenswürdig.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Wichtig für Ligaorganisatoren',
    html: 'Wählen Sie Ihren K-Faktor vor Saisonbeginn und veröffentlichen Sie ihn. Spieler vertrauen ELO-Tabellen mehr, wenn jeder weiß, wie Bewertungen berechnet werden, bevor Ergebnisse eingegeben werden.'
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
