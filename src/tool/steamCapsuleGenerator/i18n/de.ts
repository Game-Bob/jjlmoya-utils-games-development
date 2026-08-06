import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'steam-kapsel-generator',
  title: 'Steam Kapsel Generator',
  description: 'Erstelle vier Steam Vorschauen aus einem Masterbild, verschiebe den Fokuspunkt, prüfe Sicherheitszonen und lade lokale PNG Dateien oder ein ZIP Archiv herunter.',
  ui: {
    uploadTitle: 'Mastergrafik ablegen', uploadHint: 'Ein hochauflösendes Bild wird direkt im Browser zu einem vollständigen Steam Vorschau Set.', chooseFile: 'Grafik auswählen', minimumSize: 'Mindestgröße', supportedFormats: 'PNG, JPEG oder WebP', invalidImage: 'Wähle ein Bild mit mindestens 1920 mal 1080 Pixeln.', sourcePreview: 'Mastergrafik', focalPoint: 'Fokuspunkt', focalHint: 'Klicke auf die Grafik oder nutze die Regler, damit das wichtige Motiv in jedem Zuschnitt bleibt.', horizontalFocus: 'Horizontal', verticalFocus: 'Vertikal', resetFocus: 'Fokus zentrieren', outputPreview: 'Steam Ausgabe Set', safeZone: 'Sicherheitszone', dimensions: 'Pixel', downloadPng: 'PNG', downloadZip: 'ZIP herunterladen', buildingZip: 'Lokales ZIP Archiv wird erstellt...', zipReady: 'Steam Kapsel Set bereit', localOnly: 'Privatsphäre zuerst. Deine Grafik bleibt in diesem Browser.', headerCapsule: 'Header Kapsel', mainCapsule: 'Hauptkapsel', verticalCapsule: 'Vertikale Kapsel', communityIcon: 'Community Symbol', ready: 'Bereit', downloadError: 'Das Archiv konnte nicht erstellt werden. Nutze stattdessen die PNG Schaltflächen.',
  },
  seo: [
    { type: 'title', text: 'Ein stimmiges Steam Kapsel Set aus einer Grafik', level: 2 },
    { type: 'paragraph', html: 'Eine Illustration kann im breiten Format funktionieren und im vertikalen Zuschnitt das wichtigste Motiv verlieren. Dieses Werkzeug zeigt vier Zuschnitte aus einer Mastergrafik: Header mit 460 mal 215, Hauptkapsel mit 616 mal 353, vertikale Kapsel mit 374 mal 448 und quadratisches Community Symbol mit 184 mal 184 Pixeln. Der Fokuspunkt bestimmt, welcher Teil der Komposition sichtbar bleibt.' },
    { type: 'paragraph', html: 'Die Datei wird lokal mit Canvas verarbeitet. Sie wird nicht hochgeladen und benötigt kein Konto. Jede Bewegung des Markers aktualisiert alle Vorschauen, damit Logos, Gesichter und Spielfiguren vor dem Export geprüft werden können.' },
    { type: 'title', text: 'Praktischer Ablauf für Spielgrafik', level: 2 },
    { type: 'list', items: ['Beginne mit einer Mastergrafik von mindestens 1920 mal 1080 Pixeln.', 'Setze den Marker auf das Motiv, nicht zwingend auf die geometrische Mitte.', 'Prüfe zuerst die vertikale und quadratische Vorschau.', 'Nutze die Sicherheitszonen als visuellen Rand und vergleiche die aktuellen Steamworks Vorlagen.'] },
    { type: 'paragraph', html: 'Sicherheitszonen sind Kompositionshilfen und keine Garantie für jede Steam Oberfläche. Halte Logos und Titel von überfüllten Rändern fern und beachte Valves Regeln für Text auf Kapselgrafiken.' },
    { type: 'tip', html: 'Bewahre eine Masterdatei mit Rand um das Motiv auf. Wenn ein Zuschnitt eine andere Logoposition braucht, ändere die Quelle und erzeuge das Set erneut.' },
  ],
  faq: [
    { question: 'Verlässt mein Bild das Gerät?', answer: 'Nein. Es wird im Browser gelesen und gezeichnet. Es gibt keinen Upload und kein Konto.' },
    { question: 'Welche Mastergrafik ist geeignet?', answer: 'PNG, JPEG oder WebP mit mindestens 1920 mal 1080 Pixeln bietet genügend Spielraum.' },
    { question: 'Was ändert der Fokuspunkt?', answer: 'Er verschiebt den Quellzuschnitt für alle Ausgaben und schützt das wichtige Motiv.' },
    { question: 'Sind die Sicherheitszonen offiziell?', answer: 'Sie sind praktische Hinweise. Vergleiche die Dateien vor der Veröffentlichung mit aktuellen Steamworks Vorlagen.' },
  ],
  howTo: [
    { name: 'Mastergrafik wählen', text: 'Lege eine PNG, JPEG oder WebP Datei ab, die mindestens 1920 mal 1080 Pixel hat.' },
    { name: 'Fokus setzen', text: 'Klicke in die Vorschau oder bewege die beiden Fokusregler.' },
    { name: 'Vier Zuschnitte prüfen', text: 'Kontrolliere Header, Hauptkapsel, vertikale Kapsel und Community Symbol.' },
    { name: 'Set herunterladen', text: 'Lade einzelne PNGs oder ein lokal erzeugtes ZIP Archiv herunter.' },
  ],
});
