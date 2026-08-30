import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'spieleentwicklung',
  title: 'Werkzeuge für Spieleentwicklung',
  description: 'Praktische Browserwerkzeuge für Indie Entwickler, von Storegrafik bis zur Produktionsübergabe.',
  seo: [
    { type: 'title', text: 'Werkzeuge für die Entwicklung eigener Spiele', level: 2 },
    { type: 'paragraph', html: 'Spieleentwicklung besteht aus vielen kleinen Entscheidungen: Eine Komposition muss mehrere Storeformate überstehen, ein Symbol muss sofort lesbar bleiben und ein Produktionsschritt sollte wiederholbar sein. Diese Kategorie bündelt fokussierte Werkzeuge für Menschen, die Spiele bauen, veröffentlichen und präsentieren.' },
    { type: 'title', text: 'Für unabhängige Teams gemacht', level: 2 },
    { type: 'paragraph', html: 'Indie Teams wechseln oft zwischen Grafiksoftware, Veröffentlichungsseiten und Review Ordnern. Eine gute Utility verkürzt diese Übergabe, macht wichtige Entscheidungen sichtbar und lässt die Kontrolle über Quelldateien beim Ersteller.' },
    { type: 'list', items: ['Konkrete Abläufe mit sichtbaren Ergebnissen', 'Lokale Verarbeitung im Browser, wenn sinnvoll', 'Klare Maße und Exportzustände', 'Hinweise ergänzend zur offiziellen Dokumentation'] },
    { type: 'tip', html: 'Nutze die Werkzeuge als Preflight Ebene. Bewahre die Projektdateien auf und vergleiche den kleinsten Export mit den aktuellen Plattformvorgaben.' },
  ],
};
