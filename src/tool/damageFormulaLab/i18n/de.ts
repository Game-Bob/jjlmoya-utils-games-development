import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'spiel-schadensformel-rechner-ttk';
const title = 'Damage Formula Lab mit TTK Diagrammen';
const description = 'Vergleichen Sie sichere Schadensformeln für Spiele mit Echtzeit-Kurven, Heatmaps, Rundungs-Breakpoints, Trefferanzahl und Time-to-Kill (TTK).';

const faq = [
  {
    question: 'Was vergleicht der Schadensformel-Rechner?',
    answer: 'Er führt zwei mathematische Formeln sicher gegen dieselben Kampfwerte aus. Sie können Schadenskurven, Trefferschwellen, Time to Kill (TTK), Rundungsregeln und Rüstungs-Heatmaps ohne JavaScript-Ausführung vergleichen.',
  },
  {
    question: 'Welche Variablen und Funktionen stehen zur Verfügung?',
    answer: 'Verfügbare Variablen sind attack, defense, level, power, resistance, flat, criticalChance und criticalMultiplier. Sichere Funktionen sind min, max, clamp, abs, sqrt, pow, floor, round und ceil.',
  },
  {
    question: 'Wie wird die Time to Kill (TTK) berechnet?',
    answer: 'Erforderliche Treffer sind die Ziel-Gesundheit geteilt durch den gerundeten Erwartungsschaden (aufgerundet). TTK misst das Intervall zwischen erstem und letztem Treffer: (Treffer - 1) / Angriffe pro Sekunde.',
  },
  {
    question: 'Warum spielt die Reihenfolge der Widerstände eine Rolle?',
    answer: 'Wird ein flacher Modifikator vor der prozentualen Resistenz angewendet, reduziert die Resistenz auch diesen Wert. Wird die Resistenz zuerst angewendet, bleibt der flache Modifikator unberührt.',
  },
  {
    question: 'Bedeutet eine glatte Schadenskurve ein ausbalanciertes Spiel?',
    answer: 'Nein. Eine Kurve zeigt Schwellenwerte und Nullschadenszonen, aber Balance hängt vom Spielkontext, Feedback und Spieltests ab.',
  },
];

const howTo = [
  { name: 'Zwei Formeln wählen', text: 'Starten Sie mit einer Vorlage (linear, Verhältnis, Level-Skalierung) oder geben Sie zwei eigene Formeln ein.' },
  { name: 'Kampfzustand einstellen', text: 'Geben Sie Werte für Angriff, Verteidigung, Level, Kraftkoeffizient, Resistenz, flachen Modifikator, Krit-Werte, Gesundheit und Kadenz ein.' },
  { name: 'Engine-Regeln festlegen', text: 'Bestimmen Sie, wie der Schaden gerundet wird und ob Resistenzen vor oder nach dem flachen Modifikator wirken.' },
  { name: 'Kurven und Schwellen analysieren', text: 'Vergleichen Sie Schadensverlauf, Angriffs-Sweep, Verteidigungs-Heatmap, Trefferanzahl und Warnhinweise.' },
  { name: 'Experiment speichern', text: 'Kopieren Sie einen Freigabelink oder laden Sie die Konfiguration als JSON, CSV oder Diagramm-PNG herunter.' },
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
    onboarding: 'Geben Sie Ihre aktuelle Schadensregel ein, stellen Sie eine Alternative gegenüber und passen Sie die Kampfwerte an.',
    localNote: 'Privates Modell. Formeln und Daten verbleiben in diesem Browser.',
    formulaDeck: 'Formelkammer',
    formulaALabel: 'Formel A (Aktuelles Modell)',
    formulaBLabel: 'Formel B (Herausforderer)',
    formulaHint: 'Variablen: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Funktionen: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Linearer Schutz',
    presetRatio: 'Verhältnis-Rüstung',
    presetLevel: 'Level-Skalierung',
    combatInputs: 'Kampfzustand',
    attackLabel: 'Angriff',
    defenseLabel: 'Verteidigung',
    levelLabel: 'Level',
    powerLabel: 'Kraftkoeffizient',
    resistanceLabel: 'Resistenz (%)',
    flatLabel: 'Flacher Modifikator',
    criticalChanceLabel: 'Kritische Chance (%)',
    criticalMultiplierLabel: 'Kritischer Multiplikator',
    healthLabel: 'Ziel-Gesundheit',
    cadenceLabel: 'Angriffe pro Sekunde',
    roundingLabel: 'Schadensrundung',
    roundingNone: 'Dezimalstellen behalten',
    roundingFloor: 'Abrunden (Floor)',
    roundingRound: 'Nächste Ganzzahl',
    roundingCeil: 'Aufrunden (Ceil)',
    orderLabel: 'Modifikator-Reihenfolge',
    resistanceFirst: 'Resistenz dann Flach',
    flatFirst: 'Flach dann Resistenz',
    runLabel: 'Vergleich im Live-Modell',
    resultDamage: 'Erwarteter Schaden',
    resultHits: 'Treffer bis Besiegung',
    resultTtk: 'Time to Kill (TTK)',
    resultDifference: 'Schadensdifferenz',
    formulaAName: 'Aktuell',
    formulaBName: 'Herausforderer',
    curveTitle: 'Angriffs-Verlaufskurve',
    curveCaption: 'Der Angriffswert wird von der Hälfte bis zum Doppelten variiert, während die Verteidigung fest bleibt.',
    heatmapTitle: 'Druckfeld-Heatmap',
    heatmapCaption: 'Zeigt den Erwartungsschaden von Formel A über verschiedene Angriff- und Verteidigungskombinationen.',
    attackAxis: 'Angriff steigt nach rechts',
    defenseAxis: 'Verteidigung steigt nach unten',
    scenariosTitle: 'Kampfszenarien',
    scenarioSkirmisher: 'Plänkler',
    scenarioGuardian: 'Wächter',
    scenarioBoss: 'Boss',
    scenarioCustom: 'Aktuelles Setup',
    diagnosticsTitle: 'Schwellenwerte & Warnungen',
    statusBalanced: 'Keine auffälligen mathematischen Sprünge im Testbereich erkannt.',
    exportTitle: 'Experiment exportieren',
    copyLink: 'Freigabelink kopieren',
    exportCsv: 'CSV herunterladen',
    exportJson: 'JSON herunterladen',
    importJson: 'JSON importieren',
    exportPng: 'Diagramm PNG herunterladen',
    reset: 'Modell zurücksetzen',
    privacyDisclosure: 'Der Freigabelink speichert die Konfiguration in der URL-Hash und sendet sie nicht an Server.',
    limitationDisclosure: 'Der kritische Erwartungsschaden ist ein Durchschnitt und keine stochastische Simulation.',
    importError: 'Die Datei ist keine gültige Konfiguration.',
    copiedStatus: 'Freigabelink in die Zwischenablage kopiert.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Schadensformeln vor der Implementierung in der Spiel-Engine testen',
    },
    {
      type: 'paragraph',
      html: 'Eine Schadensformel kann bei einzelnen Beispielwerten gut funktionieren, aber bei extremen Fortschrittswerten zusammenbrechen. Dieses Labor zeigt Schwellenwerte und Nullschadenszonen frühzeitig auf.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Sichere mathematische Auswertung ohne Code-Risiken',
    },
    {
      type: 'paragraph',
      html: 'Das Formelfeld akzeptiert vordefinierte Variablen und mathematische Funktionen ohne Ausführung von ungesichertem Code.',
    },
    {
      type: 'table',
      headers: ['Messwert', 'Berechnung', 'Designfrage'],
      rows: [
        ['Erwarteter Schaden', 'Grundformel inklusive Krit-Faktor und Widerstand', 'Verhält sich die Regel bei schwachen und starken Einheiten sinnvoll?'],
        ['Treffer bis Besiegung', 'Ziel-Gesundheit geteilt durch gerundeten Schaden', 'Führt ein einziger Statuspunkt zum Wegfall eines kompletten Treffers?'],
        ['Time to Kill (TTK)', 'Intervalle zwischen Treffern geteilt durch Kadenz', 'Erzeugt die Frequenz den gewünschten Kampfrhythmus?'],
        ['Druckfeld', 'Rasteranalyse von Formel A über Angriff und Verteidigung', 'Gibt es abrupte Schwellen oder tote Zonen?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Mathematische Daten von Game-Design-Entscheidungen trennen',
    },
    {
      type: 'paragraph',
      html: 'Ein mathematisch sauberer Graph garantiert noch kein unterhaltsames Spiel. Nutzen Sie das Labor, um Annahmen gezielt in Spieltests zu überprüfen.',
    },
    {
      type: 'tip',
      title: 'Schaden und Trefferanzahl stets gemeinsam betrachten',
      html: 'Eine kleine Schadensänderung kann eine gesundheitsbezogene Schwelle überschreiten und einen Treffer einsparen. Vergleichen Sie Schadenswerte immer mit Treffern und TTK.',
    },
  ],
  faq,
  bibliographyTitle: 'Referenzen zur Schadensberechnung in Spielen',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
