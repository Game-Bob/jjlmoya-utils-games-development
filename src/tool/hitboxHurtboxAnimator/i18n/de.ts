import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'hitbox-und-hurtbox-animator-sprites';
const title = 'Hitbox und Hurtbox Animator für Sprites';
const description = 'Zeichnen Sie Kollisions-Ebenen auf jedes Sprite-Frame, nutzen Sie Zwiebelschalen-Vorschauen, bearbeiten Sie exakte Pixel-Koordinaten und exportieren Sie ein motorneutrales JSON.';

const faq = [
  {
    question: 'Was ist der Unterschied zwischen einer Hitbox und einer Hurtbox?',
    answer: 'Eine Hitbox markiert einen angreifenden Bereich, während eine Hurtbox den Bereich definiert, der Schaden empfangen kann. Pushboxes halten Charaktere auf Abstand, Grabboxes definieren die Griffreichweite und Sensoren dienen als Erkennungszonen.',
  },
  {
    question: 'Verlassen meine Sprite-Dateien den Browser?',
    answer: 'Nein. Bilder werden vollständig im Browser verarbeitet und exportiert. Das Werkzeug speichert lediglich Einstellungen wie die Abspielgeschwindigkeit im lokalen Speicher.',
  },
  {
    question: 'Welches Koordinatensystem nutzt der JSON-Export?',
    answer: 'Jedes Frame misst Pixel ausgehend von der oberen linken Ecke. Die Abmessungen von Rechtecken und Kreisen speichern positive Werte für x, y, Breite und Höhe inklusive des eigenen Drehpunktes.',
  },
  {
    question: 'Kann ich Spritesheets und einzelne Frame-Bilder bearbeiten?',
    answer: 'Ja. Sie können ein PNG- oder WebP-Spritesheet mit Zeilen- und Spaltenanzahl laden oder mehrere geordnete Einzelbilder auswählen.',
  },
  {
    question: 'Funktioniert der Export direkt in jeder Game-Engine?',
    answer: 'Das JSON ist bewusst engine-neutral gestaltet. Es speichert Frame-Rechtecke, Drehpunkte, Ebenennamen und geometrische Formen ohne Bindung an eine bestimmte Engine.',
  },
];

const howTo = [
  { name: 'Grafikmaterial laden', text: 'Wählen Sie ein PNG/WebP-Spritesheet oder eine Sequenz geordneter Einzelbilder aus. Die Bearbeitung erfolgt lokal.' },
  { name: 'Frames definieren', text: 'Geben Sie bei einem Spritesheet die Anzahl der Zeilen und Spalten an und überprüfen Sie die Einzelbilder in der Leiste.' },
  { name: 'Kollisions-Ebenen zeichnen', text: 'Wählen Sie Hitbox, Hurtbox, Pushbox, Grabbox oder Sensor und ziehen Sie Rechtecke oder Kreise über das aktive Frame.' },
  { name: 'Bewegung im Zeitverlauf anpassen', text: 'Bearbeiten Sie Koordinaten exakt, kopieren Sie Formen auf benachbarte Frames und nutzen Sie die Zwiebelschalenansicht.' },
  { name: 'JSON-Projekt exportieren', text: 'Laden Sie das neutrale JSON-Projekt und ein Übersichts-PNG herunter. Bewahren Sie die Quellbilder zusammen mit dem JSON auf.' },
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

export const content: ToolLocaleContent<HitboxHurtboxAnimatorUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Laden Sie eine Animation, überprüfen Sie die Frame-Zuschnitte und zeichnen Sie Bereiche für Angriff, Treffer, Physik oder Erkennung.',
    privacyNote: 'Lokale Bearbeitung. Bilder werden nicht hochgeladen.',
    loadSprite: 'Grafikmaterial laden',
    loadHint: 'Wählen Sie ein Spritesheet oder eine Reihe geordneter PNG/WebP-Bilder.',
    chooseImages: 'Bilder auswählen',
    slicingTitle: 'Frame-Zuschnitt',
    rowsLabel: 'Zeilen',
    columnsLabel: 'Spalten',
    applySlicing: 'Zuschneiden',
    playbackTitle: 'Vorschau',
    previousFrame: 'Vorheriges Frame',
    play: 'Abspielen',
    pause: 'Pause',
    nextFrame: 'Nächstes Frame',
    fpsLabel: 'Bilder pro Sekunde',
    onionPrevious: 'Vorherige Folie',
    onionNext: 'Nächste Folie',
    layerTitle: 'Kollisions-Ebenen',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Sensor',
    typeCustom: 'Benutzerdefiniert',
    shapeRectangle: 'Rechteck',
    shapeCircle: 'Kreis',
    drawShape: 'Zeichnen',
    selectShape: 'Auswählen',
    stageLabel: 'Arbeitsfläche',
    emptyStage: 'Laden Sie Grafiken, um mit dem Zeichnen von Kollisions-Ebenen zu beginnen.',
    frameReadout: 'Frame {current} von {total}',
    timelineTitle: 'Frame-Leiste',
    inspectorTitle: 'Form-Inspektor',
    noSelection: 'Wählen Sie eine Form aus, um deren Koordinaten zu bearbeiten.',
    nameLabel: 'Ebenenname',
    xLabel: 'X in Pixeln',
    yLabel: 'Y in Pixeln',
    widthLabel: 'Breite in Pixeln',
    heightLabel: 'Höhe in Pixeln',
    radiusLabel: 'Radius in Pixeln',
    duplicateShape: 'Duplizieren',
    mirrorShape: 'Horizontal spiegeln',
    deleteShape: 'Form löschen',
    copyPrevious: 'Vorheriges Frame hierher kopieren',
    copyAll: 'Auf alle Frames kopieren',
    pivotTitle: 'Drehpunkt',
    pivotXLabel: 'Drehpunkt X',
    pivotYLabel: 'Drehpunkt Y',
    exportTitle: 'Projekt exportieren',
    exportJson: 'JSON herunterladen',
    importJson: 'JSON importieren',
    exportContactSheet: 'Übersichtsbild herunterladen',
    resetTool: 'Ebenen zurücksetzen',
    resetProject: 'Kollisionsebenen löschen',
    undo: 'Rückgängig',
    redo: 'Wiederholen',
    statusReady: 'Arbeitsfläche bereit.',
    statusImageLoaded: '{count} Bilddateien geladen.',
    statusShapeCreated: 'Neue Form hinzugefügt.',
    statusShapeUpdated: 'Form angepasst.',
    statusImported: 'Projekt importiert.',
    statusExported: 'Export vorbereitet.',
    statusError: 'Datei konnte nicht gelesen werden.',
    framesBadge: '{count} Frames',
    shapesBadge: '{count} Formen',
    coverageBadge: '{percent}% Abdeckung',
    coordinatesNote: 'Koordinaten nutzen die obere linke Ecke des Frames als Ursprung (0,0).',
    localOnlyDisclosure: 'Die JSON-Datei speichert Bildnamen, Drehpunkte und Geometrien. Sie enthält keine Bilddaten.',
    limitationDisclosure: 'Die Ebenen beschreiben gezeichnete Bereiche. Prüfen Sie das Verhalten in Ihrer Game-Engine.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Hitboxes und Hurtboxes direkt am Sprite-Bewegungsablauf ausrichten',
    },
    {
      type: 'paragraph',
      html: 'Die Festlegung von Kollisionen wird schwierig, wenn jedes Einzelbild isoliert betrachtet wird. Dieser Editor vereint Sprite-Grafik, Kollisions-Ebenen, Zwiebelschalenansicht und Frame-Leiste. So sehen Sie genau, wann ein Angriff startet und wie die Trefferfläche der Bewegung folgt.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Kollisions-Ebenen nach ihrer Spiellogik wählen',
    },
    {
      type: 'table',
      headers: ['Ebene', 'Typische Funktion', 'Prüffrage'],
      rows: [
        ['Hitbox', 'Bereich, der einen Angriff auslöst', 'Erscheint sie nur in den aktiven Frames?'],
        ['Hurtbox', 'Bereich, der Treffer empfängt', 'Folgt sie dem Körper ohne unnatürliche Lücken?'],
        ['Pushbox', 'Physikalischer Bereich zur Abstandshaltung', 'Bleibt sie stabil, um Ruckeln zu vermeiden?'],
        ['Grabbox', 'Reichweite für Würfe oder Griffe', 'Passt das Timing zur visuellen Animation?'],
        ['Sensor', 'Erkennungszone für Interaktionen', 'Ist die Bezeichnung eindeutig?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Das Koordinatensystem verstehen und nutzen',
    },
    {
      type: 'paragraph',
      html: 'Das exportierte Projekt misst X und Y ausgehend von der oberen linken Ecke des zugeschnittenen Frames. Breite und Höhe sind Pixelwerte, und der Drehpunkt nutzt dieselben lokalen Koordinaten.',
    },
    {
      type: 'tip',
      title: 'Ablauf von Angriff, Treffer und Erholung gemeinsam prüfen',
      html: 'Spielen Sie die Gesamtanimation nach jeder Anpassung ab, um flüssige Übergänge ohne abrupte Sprünge sicherzustellen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Die Kontaktbogen-Übersicht im Entwicklerteam nutzen',
    },
    {
      type: 'paragraph',
      html: 'Das Übersichts-PNG zeigt alle Frames mit ihren eingezeichneten Ebenen auf einer Fläche. Nutzen Sie es zusammen mit dem JSON-Export für die Abstimmung zwischen Grafik, Design und Programmierung.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Aktive Frames und Koordinaten gemeinsam testen',
    },
    {
      type: 'paragraph',
      html: 'Eine gute Kollisionsform folgt nicht nur der Silhouette, sondern auch dem Zeitpunkt der Aktion. Prüfen Sie Start, aktive Phase und Erholung getrennt und vergleichen Sie die Boxen mit dem Export, damit ein Treffer nicht vor der sichtbaren Bewegung oder nach ihrem Ende auslöst.',
    },
    {
      type: 'paragraph',
      html: 'Die Vorschau dokumentiert Geometrie und Layer, nicht die vollständige Kollisionslogik Ihrer Engine. Testen Sie Reichweite, Priorität, Pushback und Netzwerkverhalten anschließend mit dem tatsächlich eingebundenen Projekt.',
    },
  ],
  faq,
  bibliographyTitle: 'Referenzen zur Kollisionsentwicklung',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
