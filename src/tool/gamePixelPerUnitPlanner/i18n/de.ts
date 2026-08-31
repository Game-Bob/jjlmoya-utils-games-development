import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamePixelPerUnitPlannerUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const faq = [
  { question: 'Was bedeutet Pixel pro Einheit in einem Spiel?', answer: 'Pixel pro Einheit oder PPU beschreibt, wie viele Texturpixel eine Welteinheit darstellen. Eine einheitliche Dichte hält Sprites, Kacheln und Kamera auf einer vorhersehbaren Skala.' },
  { question: 'Warum sind ganzzahlige Skalierungen wichtig?', answer: 'Eine ganzzahlige Skalierung weist jedem Quellpixel dieselbe ganze Zahl an Bildschirmpixeln zu. Bruchteile können ungleichmäßige Kanten oder Weichzeichnung erzeugen.' },
  { question: 'Was ist Pixel Bleeding?', answer: 'Pixel Bleeding ist eine unerwünschte Farbe aus einem benachbarten Texel oder Atlasbereich. Filterung, Ränder, Subpixel-Bewegung und fehlendes Padding können es verursachen.' },
  { question: 'Wie verwende ich die empfohlene Skalierung?', answer: 'Nutze sie als Kandidaten, der in die Auflösung passt und nahe an deinem Ziel liegt. Prüfe danach im Spiel die Nearest-Filterung, die Kameraausrichtung und das Atlas-Padding.' },
  { question: 'Wählt der Planer den richtigen PPU für jede Engine?', answer: 'Nein. Er ist eine transparente Rechenhilfe. Kamera, Import, Mipmaps, Rundung und Pixel-Snapping unterscheiden sich je nach Engine und brauchen einen echten Test.' },
];

const howTo = [
  { name: 'Zielbildschirm wählen', text: 'Gib Breite und Höhe des Spielbildes oder Referenzfensters in Pixeln an.' },
  { name: 'Sprite laden', text: 'Wähle ein Bild und lasse seine nativen Abmessungen erkennen. Alternativ kannst du das Bob-Beispiel nutzen.' },
  { name: 'Skalierung wählen', text: 'Bewege den Skalierungsregler oder wähle ein Preset. Ganze Multiplikatoren sind die schärfsten Kandidaten.' },
  { name: 'Preview lesen', text: 'Prüfe Sprite-Footprint, horizontalen und vertikalen PPU, sichtbare Welt und Bleeding-Hinweis.' },
  { name: 'In der Engine testen', text: 'Prüfe die Wahl mit Nearest-Filterung, ausgerichteter Kamera, Atlas-Padding und echten Spielauflösungen.' },
];

const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Planer für Pixel pro Einheit in Spielen', applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Pixel-Art-Sprite-Skalierung prüfen', step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<GamePixelPerUnitPlannerUI> = {
  slug: 'pixel-pro-einheit-sprite-planer-spiele', title: 'Planer für Pixel pro Einheit bei Spielsprites', description: 'Lade ein Sprite oder nutze das Bob-Beispiel, um Footprints bei ganzen Skalierungen zu prüfen, PPU zu vergleichen und Pixel Bleeding früh zu erkennen.',
  ui: {
    inputsTitle: 'Sprite laden und prüfen', uploadTitle: 'Dein Quellbild', uploadHint: 'Wähle PNG, GIF, WebP oder JPEG. Die nativen Abmessungen steuern jede Preview.', chooseSpriteLabel: 'Sprite wählen', noSpriteLabel: 'Noch kein Sprite geladen', defaultSpriteLabel: 'Bob-Sprite als Beispiel', loadedSpriteLabel: 'Geladen', clearSpriteLabel: 'Sprite entfernen', displayWidthLabel: 'Bildschirmbreite px', displayHeightLabel: 'Bildschirmhöhe px', spriteWidthLabel: 'Spritebreite px', spriteHeightLabel: 'Spritehöhe px', worldWidthLabel: 'Spritebreite in Einheiten', worldHeightLabel: 'Spritehöhe in Einheiten', targetScaleLabel: 'Zielskalierung auf dem Bildschirm', targetScaleHint: 'Bildschirmpixel pro Pixel der Quelltextur.', resolutionPresetsLabel: 'Referenzauflösungen', preset320: '320 x 180', preset384: '384 x 216', preset640: '640 x 360', scalePresetsLabel: 'Schnelle Skalierungen', scale1: '1x', scale2: '2x', scale3: '3x', scale4: '4x', scale6: '6x', resetLabel: 'Werte zurücksetzen', fieldTitle: 'In verschiedenen Größen ansehen', fieldCaption: 'Das geladene Bild wird mit Nearest-Skalierung gerendert, damit du seinen echten Footprint bei ganzen Multiplikatoren beurteilen kannst.', previewPlaceholder: 'Lade ein Sprite für den visuellen Test', previewScaleLabel: 'Preview-Skalierung', sourceImageAlt: 'Preview des geladenen Sprites', viewportLabel: 'Bildschirm', spriteLabel: 'Gerendertes Sprite', crispTitle: 'Scharfe Skalierungen', crispCaption: 'Ganze Multiplikatoren halten Quellpixel gleich groß. Graue Schritte überschreiten den angegebenen Bildschirm.', fitLabel: 'Passt auf den Bildschirm:', yesLabel: 'ja', noLabel: 'nein', recommendedLabel: 'nächster Treffer', summaryTitle: 'Plan-Zusammenfassung', ppuXLabel: 'PPU horizontal', ppuYLabel: 'PPU vertikal', viewportWorldLabel: 'Sichtbare Welt', fitScaleLabel: 'Größte passende Skalierung', bleedingRiskLabel: 'Bleeding-Risiko', lowRisk: 'Niedrig', mediumRisk: 'Mittel', highRisk: 'Hoch', riskLowMessage: 'Die Achsen sind ausgerichtet und die Zielskalierung ist ganzzahlig und passt. Prüfe trotzdem Filterung und Atlas-Padding.', riskMediumMessage: 'Das Ziel passt nur teilweise. Prüfe Achsenabweichung und die hervorgehobenen Skalierungen.', riskHighMessage: 'Die Skalierung kann ungleichmäßige Abtastung erzeugen. Bevorzuge einen ganzen Multiplikator und prüfe die Sprite-Abmessungen.', alignmentLabel: 'Abtastungshinweis', tableTitle: 'Zugängliches Skalierungsprotokoll', tableScale: 'Skalierung', tableWidth: 'Gerenderte Breite', tableHeight: 'Gerenderte Höhe', tableFits: 'Passt auf Bildschirm', modelNote: 'PPU wird als gerenderte Spritepixel geteilt durch die Spritegröße in Welteinheiten je Achse berechnet. Das Bleeding-Risiko ist eine Heuristik und keine Texturprüfung oder Engine-Garantie.', privacyDisclosure: 'Die Datei wird in diesem Browser verarbeitet. Sprites, Projektdateien und Telemetrie werden nicht hochgeladen.', statusReady: 'Preview aktualisiert', unitPixels: 'px', unitUnits: 'Einheiten',
  },
  seo: [
    { type: 'title', level: 2, text: 'Aus Spritegröße eine Skalierungsentscheidung machen' },
    { type: 'paragraph', html: 'Ein Sprite hat die Größe seines Bitmaps und die Größe, die es in der Spielwelt einnimmt. PPU verbindet beide Maße. Die Preview zeigt die visuelle Folge statt nur eine Zahl zu liefern.' },
    { type: 'paragraph', html: 'Lade ein echtes Bild, damit die nativen Maße übernommen werden. Danach multipliziert das Tool beide Achsen mit der gewählten Skalierung und berechnet die sichtbare Welt für die angegebene Auflösung.' },
    { type: 'title', level: 2, text: 'Worauf du in der Preview achten solltest' },
    { type: 'list', items: ['Vergleiche den Footprint mit dem Referenzbildschirm.', 'Teste zuerst ganze Skalierungen für gleichmäßige Pixel.', 'Nutze beide PPU-Werte, um unbeabsichtigte Streckung zu finden.', 'Behandle die Bleeding-Warnung als Anlass für einen Engine-Test.'] },
    { type: 'title', level: 2, text: 'Warum ganze Skalierungen oft sauberer sind' },
    { type: 'paragraph', html: 'Bei 3x belegt jeder Quellpixel drei Bildschirmpixel. Bei 2,5x muss der Renderer unterschiedliche Breiten verteilen. Nearest verhindert Farbmischung, korrigiert aber keine Kamera zwischen Pixelpositionen.' },
    { type: 'table', headers: ['Signal', 'Bedeutung', 'Nächste Entscheidung'], rows: [['Gleicher PPU', 'Beide Achsen haben dieselbe Dichte.', 'Mit Tiles und Projektraster vergleichen.'], ['Bruch-Skalierung', 'Der Footprint nutzt keinen ganzen Multiplikator.', 'Die nächste ganze Skalierung testen.'], ['Passt nicht', 'Das Sprite überschreitet den Bildschirm.', 'Skalierung reduzieren oder Referenzauflösung erhöhen.']] },
    { type: 'title', level: 2, text: 'Bleeding von reiner Spritegröße unterscheiden' },
    { type: 'paragraph', html: 'Pixel Bleeding entsteht oft durch Nachbartexel im Atlas, Filterung an Rändern oder nicht ausgerichtete Kamerakoordinaten. Bei Weichzeichnung zuerst die Filterung prüfen, bei Nähten zusätzlich Padding, Clamp und Atlasgrenzen.' },
    { type: 'title', level: 2, text: 'Mit dem Beispiel-Sprite den Ablauf lernen' },
    { type: 'paragraph', html: 'Das Bob-Beispiel zeigt die Figur mit rosa Schleife sofort. Ändere Auflösung und Skalierung und beobachte, wann Körper oder Schleife nicht mehr passen oder Pixel ihre Gleichmäßigkeit verlieren.' },
    { type: 'title', level: 2, text: 'Was dieses Tool prüft und was nicht' },
    { type: 'paragraph', html: 'Das Tool vergleicht Abmessungen und Footprints in einer kontrollierten Ansicht. Es öffnet kein Engine-Projekt, untersucht keinen Atlas, misst kein Gerät und garantiert keine pixelgenaue Bewegung.' },
    { type: 'title', level: 2, text: 'Ein kurzer Ablauf für die Skalierungswahl' },
    { type: 'paragraph', html: 'Sprite laden, Referenzauflösung wählen, 1x bis 4x prüfen und die größte ganze Skalierung mit genügend Luft wählen. Danach die echten Zielauflösungen des Spiels wiederholen.' },
    { type: 'tip', title: 'Die letzte Prüfung findet in der Engine statt', html: 'Nutze die Preview, um die Entscheidung einzugrenzen. Aktiviere danach Nearest-Filterung, prüfe Atlas-Padding und Kameraausrichtung und teste Bewegung bei mehreren Auflösungen.' },
  ],
  faqTitle: 'Fragen zur Sprite-Skalierung', faq, bibliographyTitle: 'Referenzen zur Pixelgrafik', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
