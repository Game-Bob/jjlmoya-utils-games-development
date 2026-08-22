import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'game-ui-barrierefreiheit-stresstest';
const title = 'Game UI Barrierefreiheit Stresstest';
const description = 'Prüfen Sie Spiel-Screenshots lokal mit Farbsehschwächen-Simulationen, Kontrastmessungen im HUD, Unschärfe, Skalierung und Kanten-Heatmaps.';

const faq = [
  {
    question: 'Zertifiziert dieses Werkzeug die Barrierefreiheit meines Spiels?',
    answer: 'Nein. Es kombiniert dokumentierte Farbsimulationen, mathematische Kontrastmessungen und visuelle Belastungstests. Nutzen Sie die Ergebnisse für Ihre Design-Reviews und Nutzertests, nicht als Prüfsiegel.',
  },
  {
    question: 'Verlässt mein Screenshot den Browser?',
    answer: 'Nein. Das Bild wird vollständig lokal im Browser verarbeitet und analysiert. Es werden lediglich Anzeigeeinstellungen wie die gewählte Linse im lokalen Speicher gesichert.',
  },
  {
    question: 'Was sollte ich mit den zwei Farbsonden messen?',
    answer: 'Wählen Sie zwei Farben mit unterschiedlicher Bedeutung, etwa Verbündeter und Feind, aktiv und inaktiv oder zwei Seltenheitsstufen. Messen Sie repräsentative Pixel desselben Spielkontexts.',
  },
  {
    question: 'Warum kann trotz gutem Kontrast eine manuelle Prüfung nötig sein?',
    answer: 'Kleine Symbole, dünne Schriften, bewegte Hintergründe oder rein farbbasierte Kodierungen bleiben oft schwer erkennbar, selbst wenn der punktuelle Farbkontrast hoch ist.',
  },
  {
    question: 'Was zeigt die Heatmap an?',
    answer: 'Die Heatmap hebt Stellen hervor, an denen der lokale Farbabstand nach der gewählten Simulation stark einbricht. Sie weist auf kritische Stellen hin, analysiert jedoch keine Spiellogik.',
  },
];

const howTo = [
  { name: 'Screenshot laden', text: 'Wählen Sie einen Screenshot Ihres Spiels oder Menüs aus. Das Bild verbleibt lokal im Arbeitsspeicher Ihres Browsers.' },
  { name: 'Simulationslinse wählen', text: 'Vergleichen Sie das Original mit Simulationen für Rot-Grün-Schwäche, Blau-Gelb-Schwäche, Graustufen oder verringertem Kontrast.' },
  { name: 'Visuellen Stress anwenden', text: 'Fügen Sie Unschärfe hinzu, verringern Sie die Auflösung, zoomen Sie an Details heran oder aktivieren Sie die Kanten-Heatmap.' },
  { name: 'Zwei Signale prüfen', text: 'Wählen Sie Sonde A oder B und klicken Sie auf das Originalbild, um zwei wichtige Elemente direkt miteinander zu vergleichen.' },
  { name: 'Ergebnisse exportieren', text: 'Nutzen Sie die Prüffragen, erfassen Sie Befunde und laden Sie ein Vergleichsbild sowie einen strukturierten JSON-Bericht herunter.' },
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

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Laden Sie einen Spiel-Screenshot, wählen Sie eine Simulationslinse und vergleichen Sie zwei Farben, die Spieler klar unterscheiden müssen. Beginnen Sie mit Feind- und Freundmarkierungen, Lebensbalken oder Minimap-Symbolen.',
    privacyNote: 'Lokale Analyse. Screenshots werden nicht hochgeladen.',
    dropTitle: 'Screenshot auf die Prüffläche ziehen',
    dropHint: 'Ziehen Sie ein Bild hierher oder wählen Sie es von Ihrem Gerät. Nutzen Sie echte Spielszenen mit komplexen Hintergründen.',
    chooseImage: 'Screenshot wählen',
    replaceImage: 'Screenshot ersetzen',
    supportedFiles: 'PNG, JPEG oder WebP bis 16 MB. Große Bilder werden für die Analyse auf 1600 px skaliert.',
    lensLabel: 'Simulationslinse',
    lensOriginal: 'Original',
    lensProtanopia: 'Protanopie',
    lensDeuteranopia: 'Deuteranopie',
    lensTritanopia: 'Tritanopie',
    lensAchromatopsia: 'Graustufen',
    lensReducedContrast: 'Reduzierter Kontrast',
    lensDesaturation: 'Entsättigung',
    compareLabel: 'Vergleichsansicht',
    compareSideBySide: 'Nebeneinander',
    compareSplit: 'Geteilte Linse',
    comparePress: 'Halten zum Aufdecken',
    holdOriginal: 'Gedrückt halten für Original',
    splitPosition: 'Linsenposition',
    stressLabel: 'Belastungstests',
    blurLabel: 'Unschärfe in Pixeln',
    downscaleLabel: 'Vorschau kleiner Bildschirm',
    downscaleFull: 'Voll',
    downscaleHalf: 'Hälfte',
    downscaleQuarter: 'Viertel',
    downscaleEighth: 'Achtel',
    zoomLabel: 'Detail-Zoom',
    heatmapLabel: 'Kanten-Heatmap',
    heatmapHint: 'Hebt Bereiche hervor, deren Farbabstand unter der gewählten Linse stark einbricht.',
    originalView: 'Originales Signal',
    simulatedView: 'Simuliertes Signal',
    emptyCanvas: 'Wählen Sie einen Screenshot aus. Ihr Bild verbleibt vollständig auf Ihrem Gerät.',
    sampleTitle: 'Farbsonden für Signale',
    sampleInstructions: 'Wählen Sie Sonde A oder B und klicken Sie auf das Originalbild, um zwei wichtige Elemente direkt miteinander zu vergleichen.',
    sampleA: 'Sonde A',
    sampleB: 'Sonde B',
    sampleAName: 'Bedeutung von Sonde A',
    sampleBName: 'Bedeutung von Sonde B',
    manualColor: 'Farbe direkt eingeben',
    sampleAInitial: 'Verbündeter',
    sampleBInitial: 'Gegner',
    noSample: 'Warte auf Screenshot',
    originalContrast: 'Originalkontrast',
    simulatedContrast: 'Simulierter Kontrast',
    separationRetained: 'Erhaltene Unterscheidbarkeit',
    statusStrong: 'Signal bleibt klar unterscheidbar',
    statusWatch: 'Im Spielkontext prüfen',
    statusReview: 'Signaldesign überarbeiten',
    statusPending: 'Noch keine Analyse',
    measurementLabel: 'Messung',
    heuristicLabel: 'Heuristik',
    manualReviewLabel: 'Manuelle Prüfung',
    measurementHint: 'Der Kontrast berechnet sich nach der WCAG-Formel für relative Luminanz. Er gilt punktuell für die zwei gewählten sRGB-Farben.',
    heuristicHint: 'Die erhaltene Unterscheidbarkeit vergleicht den Farbabstand vor und nach der Simulation. Sie ist ein Orientierungswert.',
    promptTitle: 'Prüffragen für das Interface-Design',
    promptColorOnly: 'Können Spieler Freund, Feind, Warnung und Erfolg auch ohne reine Farbtonunterschiede erkennen?',
    promptChangingBackground: 'Bleibt Text vor hellen, dunklen und bewegten Spielhintergründen gut lesbar?',
    promptMinimap: 'Unterscheiden sich Symbole auf der Minimap zusätzlich durch Form, Beschriftung oder Muster?',
    promptStates: 'Sind ausgewählte, deaktivierte oder verbrauchte Zustände eindeutig erkennbar?',
    promptShape: 'Unterstützen Symbole, Animationen, Positionen oder Töne die farblichen Signale?',
    findingLabel: 'Befund erfassen',
    findingPlaceholder: 'Beispiel: Umrisslinie des Gegners verschwimmt bei Rotlicht-Effekten',
    addFinding: 'Befund hinzufügen',
    findingsEmpty: 'Noch keine schriftlichen Befunde erfasst.',
    exportSheet: 'Vergleichsbild herunterladen',
    exportReport: 'JSON-Bericht herunterladen',
    resetTool: 'Prüfung zurücksetzen',
    uploadError: 'Das Bild konnte nicht gelesen werden. Bitte PNG, JPEG oder WebP wählen.',
    fileTooLarge: 'Das Bild ist größer als 16 MB. Bitte wählen Sie ein kleineres Bild.',
    imageReady: 'Screenshot geladen. Wählen Sie zwei Farbsonden zur Prüfung aus.',
    reportDownloaded: 'Strukturierter Bericht heruntergeladen.',
    sheetDownloaded: 'Vergleichsbild herunterladen.',
    localOnlyDisclosure: 'Alle Berechnungen, Simulationen und Bildverarbeitungen erfolgen lokal im Browser.',
    limitationDisclosure: 'Dieses Werkzeug unterstützt das Design-Review. Simulationen sind Modelle und ersetzen keine Tests mit betroffenen Spielern.',
    reportTitle: 'Prüfbericht Game UI Barrierefreiheit',
    reportFindingReview: 'Das geprüfte Signalpaar verliert unter der gewählten Simulation deutlich an Kontrast oder Unterscheidbarkeit.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Game UI auf Barrierefreiheit prüfen ohne Bild-Upload',
    },
    {
      type: 'paragraph',
      html: 'Spiele-Interfaces müssen unter dynamischen Bedingungen funktionieren: Kamerafahrten, Partikeleffekte und wechselnde Hintergründe erschweren die Lesbarkeit. Dieser Tester analysiert Ihre Screenshots lokal im Browser mit bewährten Simulationsmatrizen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Messungen, Heuristiken und menschliche Prüfung',
    },
    {
      type: 'table',
      headers: ['Nachweistyp', 'Was dieses Werkzeug liefert', 'Was es nicht leisten kann'],
      rows: [
        ['Messung', 'Relativer Kontrast zweier sRGB-Farben nach WCAG', 'Automatisches Bestätigen der Konformität des gesamten Spiels'],
        ['Simulation', 'Transformationen für Protanopie, Deuteranopie und Tritanopie', 'Das exakte visuelle Empfinden einzelner Personen abbilden'],
        ['Heuristik', 'Unschärfe, Verkleinerung und Kanten-Heatmaps', 'Automatische Bewertung der Spielmechanik'],
        ['Manuelle Prüfung', 'Strukturierte Leitfragen und Export-Funktion', 'Ersetzen von Tests mit Menschen mit Behinderungen'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Wählen Sie Farbsonden mit spielrelevanter Bedeutung',
    },
    {
      type: 'paragraph',
      html: 'Testen Sie gezielt Paare, die spielrelevante Entscheidungen beeinflussen: Freund und Feind, Gefahr und Sicherheit oder wählbar und gesperrt. Ergänzen Sie Farbsignale bei Bedarf durch Symbole, Formen oder akustische Hinweise.',
    },
    {
      type: 'tip',
      title: 'Prüfen Sie komplexe Spielszenen',
      html: 'Verwenden Sie Screenshots aus hektischen Spielsituationen statt isolierter Menü-Drafts, um realistische Ergebnisse zu erhalten.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Den exportierten Bericht im Team nutzen',
    },
    {
      type: 'paragraph',
      html: 'Der herunterladbare JSON-Bericht sowie das Vergleichsbild lassen sich direkt in Issue-Tracker einbinden, um konkrete Verbesserungen an der Benutzeroberfläche zu dokumentieren.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
