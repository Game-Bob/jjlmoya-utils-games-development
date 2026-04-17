import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'toernooi-schema';
const title = 'Gratis Online Toernooi Generator en Schema Maker';
const description = 'Organiseer toernooien en maak gratis knock-out schema\'s zonder registratie. Perfect voor FIFA, Padel, eSports en bordspellen. 100% mobielvriendelijk.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Toernooi Bezig',
  nextMatch: 'Volgende Wedstrijd',
  share: 'Delen',
  backNew: 'Terug / Nieuw',
  back: 'Terug',
  newTournament: 'Nieuw Toernooi',
  setupSubtitle: 'Stel je competitie schema in en genereer het.',
  tournamentNameLabel: 'Toernooinaam',
  tournamentNamePlaceholder: 'Bijv. Zomertoernooi',
  addPlayersLabel: 'Deelnemers Toevoegen',
  addPlayerPlaceholder: 'Naam... of meerdere gescheiden door komma\'s',
  playersLabel: 'Spelers',
  clearAll: 'Alles Wissen',
  emptyList: 'De lijst is leeg',
  howItWorks: 'Hoe werkt het?',
  howItWorksText: 'Voeg deelnemers toe, geef het een naam en genereer. Het systeem maakt automatisch matches en regelt "Byes" (direct doorgaan) als er een oneven aantal is.',
  historyLabel: 'Geschiedenis',
  noHistory: 'Geen toernooien opgeslagen',
  noOldTournaments: 'Geen eerdere toernooien',
  generateBtn: 'Genereer Schema',
  shuffleLabel: 'Matches husselen',
  scoreLabel: 'Scores Inschakelen (Optioneel)',
  dragHint: 'Sleep om te verplaatsen',
  roundFinal: 'Finale',
  roundSemifinal: 'Halve finales',
  roundQuarter: 'Kwartfinales',
  roundPrefix: 'Ronde',
  byeLabel: 'Bye',
  waiting: 'Wachten...',
  emptyRound: 'Lege ronde',
  confirmClearPlayers: 'De hele spelerslijst wissen?',
  alertMinPlayers: 'Je hebt minimaal 2 spelers nodig.',
  alertLoadFailed: 'Kon het toernooi niet laden.',
  confirmDeleteTournament: 'Dit toernooi permanent verwijderen uit de geschiedenis?',
  toastShareLimit: 'Alleen toernooien met maximaal 32 spelers kunnen worden gedeeld',
  toastShareError: 'Fout bij het genereren van de link',
  toastShareCopied: 'Link gekopieerd naar klembord',
  toastShareFailed: 'Kon niet kopiëren. URL:',
  toastFinished: 'Toernooi Afgelopen!',
  defaultName: 'Toernooi',
};

const faqData = [
  { question: 'Hoe werkt directe uitschakeling (knock-out)?', answer: 'Het is een competitiesysteem waarbij de deelnemer die een wedstrijd verliest, automatisch is uitgeschakeld. Winnaars gaan door naar de volgende ronde (achtste finales, kwartfinales, halve finales) totdat er slechts twee overblijven voor de grote finale.' },
  { question: 'Wat gebeurt er als ik een oneven aantal spelers heb?', answer: 'Onze tool regelt automatisch "BYEs". Sommige spelers gaan direct door naar de tweede ronde zonder in de eerste te spelen, zodat het schema altijd eindigt in machten van twee (2, 4, 8, 16...).' },
  { question: 'Kan ik het toernooi-schema opslaan en delen?', answer: 'Ja, je kunt het schema delen via een unieke, direct gegenereerde link. Omdat het een registratievrije tool is, worden gegevens in je browser bewaard zolang het tabblad open is.' },
  { question: 'Werkt het voor eSports toernooien zoals FIFA of LoL?', answer: 'Absoluut. Het is ontworpen om snel en visueel te zijn, ideaal voor het beheren van snelle console-, pc-game- of zelfs bord- en kaartspel-toernooien.' },
  { question: 'Is het maken van toernooien gratis?', answer: 'Ja, volledig gratis en zonder beperkingen. Geen premium plannen, deelnemerslimieten, watermerken of opdringerige advertenties. Alles werkt offline in je browser.' },
  { question: 'Worden mijn gegevens verwijderd als ik de browser sluit?', answer: 'Nee. We gebruiken LocalStorage om al je toernooien automatisch op je apparaat op te slaan. Je kunt het tabblad sluiten, de computer uitzetten en dagen later terugkomen: je toernooi zal er nog steeds zijn.' },
  { question: 'Hoe werkt de "Volgende Wedstrijd" knop?', answer: 'Het systeem detecteert automatisch de volgende klaarliggende match (beide deelnemers bevestigd) maar nog zonder resultaat. Door op "Volgende Wedstrijd" te drukken, springt de weergave direct naar die wedstrijd.' },
];

const howTo = [
  { name: 'Voer deelnemers in', text: 'Schrijf de namen van de spelers of teams die deelnamen aan de competitie.' },
  { name: 'Genereer het schema', text: 'Klik op de genereerknop. Het systeem maakt automatisch de matches en de nodige rondes aan.' },
  { name: 'Resultaten bijwerken', text: 'Klik op de winnende deelnemer van elke wedstrijd zodat ze automatisch doorgaan naar de volgende fase van het schema.' },
  { name: 'Voltooien', text: 'Zodra het toernooi voltooid is, wordt de uiteindelijke kampioen getoond.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Gratis Online Toernooi Generator en Schema Maker',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Beheer je sport-, videogame- of bordspel-competities met de meest complete, gratis en registratievrije toernooi-organisator. Maak visuele en interactieve knock-out schema\'s in seconden, met een <strong>geïntegreerd scoresysteem</strong>, automatische geschiedenis en slimme wedstrijdnavigatie. Alles werkt offline, direct in je browser.',
  },
  {
    type: 'title' as const,
    text: 'Hoe maak je een toernooi met directe uitschakeling?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Geef je toernooi een naam</strong>, voeg deelnemers toe (één voor één of plak een door komma\'s gescheiden lijst), hussel de matches als je wilt, genereer het schema, beheer resultaten door op de winnaar van elke match te tikken en gebruik de "Volgende Wedstrijd" knop om te navigeren tussen onbesliste wedstrijden.',
  },
  {
    type: 'title' as const,
    text: 'Geavanceerde Functies',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Bulk invoer:</strong> Voeg meerdere deelnemers tegelijk toe gescheiden door komma\'s.',
      '<strong>Exacte scores:</strong> Scoresysteem met resultaten zoals 3-1 of 21-19.',
      '<strong>Slimme navigatie:</strong> De "Volgende Wedstrijd" knop springt naar de volgende openstaande match.',
      '<strong>Versleepbaar schema:</strong> Desktopweergave met vrij scrollen voor grote toernooien.',
      '<strong>Permanente geschiedenis:</strong> Alle toernooien worden automatisch opgeslagen in je browser.',
      '<strong>Auto Walkovers:</strong> Byes en direct doorgaan worden opgelost zonder handmatige invoer.',
      '<strong>Delen via URL:</strong> Genereer een gecomprimeerde link om het schema naar iedereen te sturen.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Perfect voor Elke Competitie',
    level: 2 as const,
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Videogames & eSports',
        description: 'Perfect voor FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros of Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Snelle matchups', 'Geen teamlimiet', 'Direct deelbaar'],
      },
      {
        title: 'Sport & Racketsporten',
        description: 'Beheer schema\'s voor Padel, Tennis, Pingpong, Badminton, Futsal of 3x3 Basketbal.',
        icon: 'mdi:trophy-outline',
        points: ['Geïntegreerde scores', 'Geoptimaliseerde mobiele weergave', 'Geen papier meer nodig'],
      },
      {
        title: 'Bord en Kaartspellen',
        description: 'Organiseer toernooien voor Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, Schaken of Domino.',
        icon: 'mdi:cards-playing-outline',
        points: ['Tot 64 spelers', 'Rondegeschiedenis', 'Bye beheer'],
      },
    ],
  },
  {
    type: 'title' as const,
    text: 'Wat zijn "Byes" of Directe Passages?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'In een ideaal knock-out toernooi moet het aantal deelnemers een macht van 2 zijn (4, 8, 16, 32...). Als je een oneven aantal hebt of geen macht van 2 — bijvoorbeeld 7, 10 of 13 spelers —, wijst het systeem automatisch <strong>"Byes"</strong> toe in de eerste ronde. Een "Bye" betekent dat een deelnemer direct doorgaat naar de volgende fase zonder te spelen. Ons algoritme berekent en wijst deze passages eerlijk und automatisch toe.',
  },
  {
    type: 'title' as const,
    text: 'Direct, Gratis en Geen Registratie Nodig',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Geen drempels. Geen accounts, geen installaties, niet wachten. Voeg deelnemers toe en genereer direct je toernooi. Alles wordt automatisch opgeslagen in je browser via <strong>LocalStorage</strong>: sluit het tabblad, zet de computer uit und kom dagen later terug. Je toernooi en volledige geschiedenis zullen er nog steeds zijn.',
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faqTitle: 'Veelgestelde Vragen', faq: faqData, bibliography: [], howTo, schemas };
