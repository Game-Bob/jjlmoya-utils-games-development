import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = { slug: 'spelutveckling', title: 'Verktyg för spelutveckling', description: 'Praktiska webbläsarverktyg för indieskapare, från butiksgrafik till produktionsleveranser.', seo: [
  { type: 'title', text: 'Verktyg för att skapa egna spel', level: 2 },
  { type: 'paragraph', html: 'Spelutveckling består av många små beslut: en komposition ska fungera i flera format, en ikon ska vara lätt att läsa och en produktionsuppgift ska gå att upprepa. Den här kategorin samlar fokuserade verktyg för personer som bygger, publicerar och presenterar spel.' },
  { type: 'title', text: 'För oberoende skapare', level: 2 },
  { type: 'paragraph', html: 'Indieteam växlar ofta mellan grafikprogram, publiceringspaneler och granskningsmappar. Ett bra verktyg kortar överlämningen, visar viktiga beslut och låter skaparen behålla kontrollen över källfilerna.' },
  { type: 'list', items: ['Fokuserade flöden med synliga resultat', 'Lokal behandling när det passar', 'Tydliga mått och exportlägen', 'Råd som kompletterar officiell dokumentation'] },
  { type: 'tip', html: 'Använd verktygen som en förkontroll. Spara källorna och jämför exporten med plattformens aktuella krav.' },
] };
