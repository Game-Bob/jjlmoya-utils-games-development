import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'Editor für isometrische Kachelkarten';
const description = 'Zeichnen Sie geschichtete Diamant-Raster, stimmen Sie die Tile-Geometrie ab und exportieren Sie eine isometrische Level-Skizze als JSON oder SVG.';
const faq = [
  { question: 'Was ist eine isometrische Tile-Map?', answer: 'Eine isometrische Tile-Map nutzt ein rautenförmiges Raster, um dreidimensionalen Raum in einer zweidimensionalen Szene anzudeuten. Spalten und Zeilen beschreiben die Grundfläche, während Ebenen einen einfachen Höhenversatz hinzufügen.' },
  { question: 'Wie platziere ich ein Tile?', answer: 'Wählen Sie ein Tile aus der Palette, lassen Sie Malen aktiviert, wählen Sie die aktive Ebene und klicken Sie auf eine Raute. Mit einem Rechtsklick wird eine Zelle auch im Malmodus gelöscht.' },
  { question: 'Was verändert die Ebenentiefe?', answer: 'Die Ebenentiefe ist der vertikale Bildschirmversatz zwischen gestapelten Ebenen. Erhöhen Sie sie für deutlich höhere Stufen und verringern Sie sie, wenn die Ebenen eng beieinander liegen sollen.' },
  { question: 'Kann ich die exportierte SVG in einer Game-Engine verwenden?', answer: 'Die SVG ist eine visuelle Referenz mit den aktuellen Rauten und Tile-Farben. JSON eignet sich besser zum Wiederaufbau des logischen Rasters, weil Zeilen, Spalten, Ebenen und Tile-Werte erhalten bleiben.' },
  { question: 'Erstellt dieser Editor ein produktionsfertiges Tileset?', answer: 'Nein. Er plant ein geschichtetes Raster und exportiert eine kompakte Kartenbeschreibung. Texturen, Kollisionen, Sortiereinstellungen und die korrekte Darstellung in einer bestimmten Engine werden nicht eingerichtet.' },
];
const howTo = [
  { name: 'Rastergeometrie festlegen', text: 'Wählen Sie Breite und Höhe eines Tiles sowie Spalten, Zeilen und Ebenen. Mit der Ebenentiefe beschreiben Sie den vertikalen Schritt zwischen den Stufen.' },
  { name: 'Zeichenebene wählen', text: 'Wählen Sie vor dem Malen eine Ebene. Die aktive Ebene ist stärker umrandet, während andere sichtbare Ebenen mit geringerer Deckkraft räumlichen Kontext geben.' },
  { name: 'Boden oder Struktur malen', text: 'Wählen Sie Gras, Stein, Wasser oder Weg und klicken Sie auf Zellen. Wechseln Sie die Palette, wenn die nächste Zelle ein anderes Material erhalten soll.' },
  { name: 'Karte lokal korrigieren', text: 'Verwenden Sie Löschen oder einen Rechtsklick, um ein Tile zu entfernen. Bei einer Größenänderung bleiben passende Zellen erhalten.' },
  { name: 'Planungsergebnis exportieren', text: 'Verwenden Sie JSON für den Wiederaufbau in einem anderen Tool und SVG als schnelle visuelle Referenz für Review oder Level-Skizze.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'isometrischer-kachelkarten-editor', title, description,
  ui: {
    controlsTitle: 'Kartensteuerung', geometryTitle: 'Rastergeometrie', tileWidthLabel: 'Tile-Breite', tileHeightLabel: 'Tile-Höhe', columnsLabel: 'Spalten', rowsLabel: 'Zeilen', layersLabel: 'Ebenen', layerDepthLabel: 'Ebenentiefe', toolsTitle: 'Zeichenmodus', paintLabel: 'Malen', eraseLabel: 'Löschen', paletteTitle: 'Tile-Palette', grassLabel: 'Gras', stoneLabel: 'Stein', waterLabel: 'Wasser', pathLabel: 'Weg', layersTitle: 'Aktive Ebene', layerLabel: 'Ebene', hideLayerLabel: 'Ausblenden', showLayerLabel: 'Einblenden', mapTitle: 'Isometrische Karte', mapHelp: 'Wählen Sie ein Tile und eine Ebene, dann klicken Sie auf die Rauten. Mit Rechtsklick löschen Sie jede Zelle.', mapAriaLabel: 'Bearbeitbare isometrische Tile-Map', summaryTitle: 'Kartenwerte', filledLabel: 'Belegte Zellen', coverageLabel: 'Abdeckung', activeLayerLabel: 'Aktive Ebene', selectedLabel: 'Ausgewähltes Tile', emptyCellLabel: 'Leer', cellLabel: 'Zelle', clearLabel: 'Karte leeren', resetLabel: 'Geometrie zurücksetzen', exportJsonLabel: 'JSON exportieren', exportSvgLabel: 'SVG exportieren', statusReady: 'Bereit zum Zeichnen', statusSaved: 'Lokal gespeichert', statusCleared: 'Karte geleert', statusReset: 'Geometrie zurückgesetzt', statusExported: 'Datei exportiert', statusPainted: 'Tile platziert', statusErased: 'Tile gelöscht', statusLayerHidden: 'Ebene ausgeblendet', statusLayerShown: 'Ebene eingeblendet', legendTitle: 'Kartenschlüssel', legendEmpty: 'Leere Zelle', legendFilled: 'Belegte Zelle', modelNote: 'Dieser Editor beschreibt ein logisches Raster mit Ebenen. Er importiert kein Tileset, berechnet keine Kollision, richtet kein engine-spezifisches Sortieren ein und garantiert keine finale Pixelposition.', privacyDisclosure: 'Ihre Karte bleibt in diesem Browser. Es werden keine Kartendaten und keine Telemetrie hochgeladen.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Mit einem isometrischen Raster Raum und Höhe planen' },
    { type: 'paragraph', html: 'Eine isometrische Karte hilft, wenn ein Level lesbare Bodenpositionen und ein Gefühl für Höhe braucht, ohne zu einer vollständigen 3D-Szene zu werden. Das Rautenraster macht Bewegungen über Zeilen und Spalten sichtbar, während Ebenen Brücken, Plattformen, Dächer oder gestapelte Räume skizzieren.' },
    { type: 'paragraph', html: 'Dieser Editor hält die Geometrie sichtbar. Tile-Breite und Tile-Höhe steuern die Raute, Spalten und Zeilen die Grundfläche und die Ebenentiefe den Aufwärtsversatz jeder weiteren Stufe. Beim Ändern der Maße bleiben passende Zellen erhalten.' },
    { type: 'title', level: 2, text: 'Ein brauchbares Blockout in fünf Durchgängen erstellen' },
    { type: 'list', items: ['Passen Sie die Tile-Proportionen an die Bildsprache des Projekts an.', 'Malen Sie zuerst ein Bodenmaterial, damit begehbare Bereiche lesbar bleiben.', 'Nutzen Sie Ebenen für Brücken, Dächer und erhöhte Plattformen statt Höhe nur über Farbe zu kodieren.', 'Blenden Sie obere Ebenen aus oder wechseln Sie zu Löschen, um darunterliegende Zellen sicher zu bearbeiten.', 'Exportieren Sie JSON für den Wiederaufbau und SVG für eine visuelle Besprechung.'] },
    { type: 'title', level: 2, text: 'Zeilen, Spalten und Ebenen getrennt lesen' },
    { type: 'paragraph', html: 'Zeilen und Spalten beschreiben die Position auf der logischen Fläche und bleiben auch bei anderer Rautengröße stabil. Ebenen bilden eine zweite Koordinate: Zwei Zellen können dieselbe Zeile und Spalte, aber unterschiedliche Höhen haben. Diese Trennung erleichtert den Wiederaufbau in einer Engine.' },
    { type: 'table', headers: ['Signal', 'Bedeutung', 'Nächste sinnvolle Entscheidung'], rows: [['Geringe Abdeckung', 'Viele Zellen sind noch leer.', 'Legen Sie zuerst die Spielfläche fest, bevor Sie dekorieren.'], ['Mehrere Ebenen in einer Spalte', 'Die Karte enthält gestapelten Raum.', 'Prüfen Sie Sortierung und Kollision für diese Höhen.'], ['Sehr breite Raute', 'Horizontale Bewegung dominiert.', 'Reduzieren Sie die Tile-Breite oder vergrößern Sie den Referenzbereich.'], ['Sehr großer Ebenenschritt', 'Höhenänderungen sind stark sichtbar.', 'Verwenden Sie weniger Ebenen oder prüfen Sie die Assets.']] },
    { type: 'title', level: 2, text: 'Den passenden Export für die nächste Aufgabe wählen' },
    { type: 'paragraph', html: 'JSON ist die strukturierte Übergabe: Es bewahrt Geometrie, Ebenenzahl, Zeichenstatus und jeden Tile-Wert. SVG ist die Präsentationsübergabe mit farbigen Rauten für Review, Ticket oder Levelplanung. Kein Export enthält ein Quell-Tileset oder Engine-Metadaten.' },
    { type: 'tip', title: 'Was diese Rohkarte nicht beweisen kann', html: 'Eine überzeugende Rautenkarte beweist nicht, dass Sprites korrekt sortiert werden, Figuren zwischen Höhen navigieren können oder ein Tileset ohne Nähte verbindet. Testen Sie echte Assets, Kollisionen, Sortierachse und Kamera in der Ziel-Engine.' },
  ],
  faqTitle: 'Fragen zu isometrischen Tile-Maps', faq, bibliographyTitle: 'Referenzen zu Tile-Maps', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
