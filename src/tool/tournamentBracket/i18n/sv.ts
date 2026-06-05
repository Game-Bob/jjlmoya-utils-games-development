import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'turnering';
const title = 'Gratis turneringsgenerator och skapare av slutspelsträd online';
const description = 'Organisera turneringar och skapa slutspelsträd gratis utan registrering. Perfekt för FIFA, Padel, e-sport och brädspel. 100 % mobilvänlig.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Turnering pågår',
  nextMatch: 'Nästa match',
  share: 'Dela',
  backNew: 'Tillbaka / Ny',
  back: 'Tillbaka',
  newTournament: 'Ny turnering',
  setupSubtitle: 'Ställ in och generera ditt slutspelsträd.',
  tournamentNameLabel: 'Turneringsnamn',
  tournamentNamePlaceholder: 'T.ex. Sommarturneringen',
  addPlayersLabel: 'Lägg till deltagare',
  addPlayerPlaceholder: 'Namn... eller flera separerade med kommatecken',
  playersLabel: 'Spelare',
  clearAll: 'Rensa alla',
  emptyList: 'Listan är tom',
  howItWorks: 'Hur fungerar det?',
  howItWorksText: 'Lägg till deltagare, ge den ett namn och generera. Systemet skapar automatiskt matchningar och hanterar "Byes" (direktavancemang) om det är ett ojämnt antal.',
  historyLabel: 'Historik',
  noHistory: 'Inga sparade turneringar',
  noOldTournaments: 'Inga tidigare turneringar',
  generateBtn: 'Generera träd',
  shuffleLabel: 'Slumpa matchningar',
  scoreLabel: 'Aktivera poäng (valfritt)',
  dragHint: 'Dra för att flytta',
  roundFinal: 'Final',
  roundSemifinal: 'Semifinaler',
  roundQuarter: 'Kvartsfinaler',
  roundPrefix: 'Omgång',
  byeLabel: 'Bye',
  waiting: 'Väntar...',
  emptyRound: 'Tom omgång',
  confirmClearPlayers: 'Rensa hela spelarlistan?',
  alertMinPlayers: 'Du behöver minst 2 spelare.',
  alertLoadFailed: 'Kunde inte ladda turneringen.',
  confirmDeleteTournament: 'Ta bort denna turnering permanent från historiken?',
  toastShareLimit: 'Endast turneringar med upp till 32 spelare kan delas',
  toastShareError: 'Fel vid generering av länk',
  toastShareCopied: 'Länk kopierad till urklipp',
  toastShareFailed: 'Kunde inte kopiera. URL:',
  toastFinished: 'Turneringen avslutad!',
  defaultName: 'Turnering'
};

const faqData = [
  { question: 'Hur fungerar direktutslagning?', answer: 'Det är ett tävlingssystem där den deltagare som förlorar en match automatiskt elimineras från turneringen. Vinnarna går vidare till nästa omgång (åttondelsfinaler, kvartsfinaler, semifinaler) tills bara två återstår för den stora finalen.' },
  { question: 'Vad händer om jag har ett ojämnt antal spelare?', answer: 'Vårt verktyg hanterar automatiskt "BYEs". Vissa spelare går direkt vidare till andra omgången utan att spela i den första så att trädet alltid slutar i potenser av två (2, 4, 8, 16...).' },
  { question: 'Kan jag spara och dela turneringsschemat?', answer: 'Ja, du kan dela trädet via en unik länk som genereras direkt. Eftersom det är ett verktyg utan registrering sparas data i din webbläsare så länge fliken är öppen.' },
  { question: 'Fungerar det för e-sportturneringar som FIFA eller LoL?', answer: 'Absolut. Det är utformat för att vara snabbt och visuellt, perfekt för att hantera snabba konsol-, PC-spels- eller till och med bräd- och kortspelsturneringar.' },
  { question: 'Är det gratis att skapa turneringar?', answer: 'Ja, helt gratis och utan begränsningar. Inga premiumabonnemang, deltagargränser, vattenstämplar eller påträngande annonser. Allt fungerar offline i din webbläsare.' },
  { question: 'Raderas min data om jag stänger webbläsaren?', answer: 'Nej. Vi använder LocalStorage för att automatiskt spara alla dina turneringar på din enhet. Du kan stänga fliken, stänga av datorn och komma tillbaka dagar senare: din turnering kommer fortfarande att finnas kvar.' },
  { question: 'Hur fungerar knappen "Nästa match"?', answer: 'Systemet känner automatiskt av nästa klara matchning (båda deltagarna bekräftade) men utan ett resultat än. Genom att trycka på "Nästa match" hoppar vyn direkt till den matchen.' },
];

const howTo = [
  { name: 'Ange deltagare', text: 'Skriv namnen på de spelare eller lag som ska delta i tävlingen.' },
  { name: 'Generera trädet', text: 'Klicka på genereringsknappen. Systemet skapar automatiskt matchningarna och de nödvändiga omgångarna.' },
  { name: 'Uppdatera resultat', text: 'Klicka på den vinnande deltagaren i varje match så att de automatiskt går vidare till nästa steg i trädet.' },
  { name: 'Avsluta', text: 'När turneringen är klar visas den slutliga mästaren.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Gratis turneringsgenerator och skapare av slutspelsträd online',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Hantera dina sport-, videospels- eller brädspelstävlingar med den mest kompletta, kostnadsfria och registreringsfria turneringsorganisatören. Skapa visuella och interaktiva slutspelsträd på några sekunder, med ett <strong>integrerat poängsystem</strong>, automatisk historik och smart matchnavigering. Allt fungerar offline, direkt i din webbläsare.'
  },
  {
    type: 'title' as const,
    text: 'Hur skapar man en utslagsturnering?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Ge din turnering ett namn</strong>, lägg till deltagare (en och en eller klistra in en kommaseparerad lista), slumpa matchningar om du vill, generera trädet, hantera resultat genom att trycka på vinnaren i varje match och använd knappen "Nästa match" för att navigera mellan oavgjorda matcher.'
  },
  {
    type: 'title' as const,
    text: 'Avancerade funktioner',
    level: 2 as const
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Massinmatning:</strong> Lägg till flera deltagare samtidigt separerade med kommatecken.',
      '<strong>Exakta poäng:</strong> Poängsystem med resultat som 3-1 eller 21-19.',
      '<strong>Smart navigering:</strong> Knappen "Nästa match" hoppar till nästa väntande matchning.',
      '<strong>Dragbart träd:</strong> Skrivbordsvy med fri scroll för stora turneringar.',
      '<strong>Beständig historik:</strong> Alla turneringar sparas automatiskt i din webbläsare.',
      '<strong>Automatiska walkovers:</strong> Byes och direktavancemang löses utan manuell inmatning.',
      '<strong>Dela via URL:</strong> Generera en komprimerad länk för att skicka trädet till vem som helst.',
    ]
  },
  {
    type: 'title' as const,
    text: 'Perfekt för alla tävlingar',
    level: 2 as const
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Videospel & esport',
        description: 'Perfekt för FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken, Super Smash Bros eller Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Snabba matchningar', 'Ingen laggräns', 'Omedelbart delbar']
      },
      {
        title: 'Sport & racketsport',
        description: 'Hantera träd för padel, tennis, pingis, badminton, futsal eller 3x3 basket.',
        icon: 'mdi:trophy-outline',
        points: ['Integrerade poäng', 'Optimerad mobilvy', 'Inget mer papper']
      },
      {
        title: 'Bräd  & kortspel',
        description: 'Organisera turneringar för Magic: The Gathering, Pokémon TCG, Yu-Gi-Oh!, Catan, schack eller domino.',
        icon: 'mdi:cards-playing-outline',
        points: ['Upp till 64 spelare', 'Omgångshistorik', 'Hantering av byes']
      },
    ]
  },
  {
    type: 'title' as const,
    text: 'Vad är "Byes" eller direktavancemang?',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'I en idealisk utslagsturnering måste antalet deltagare vara en potens av 2 (4, 8, 16, 32...). När du har ett ojämnt antal eller ett antal som inte är en potens av 2 , till exempel 7, 10 eller 13 spelare, tilldelar systemet automatiskt <strong>"Byes"</strong> i den första omgången. En "Bye" innebär att en deltagare går direkt till nästa fas utan att spela. Vår algoritm beräknar och tilldelar dessa avancemang rättvist och automatiskt.'
  },
  {
    type: 'title' as const,
    text: 'Omedelbart, gratis och ingen registrering krävs',
    level: 2 as const
  },
  {
    type: 'paragraph' as const,
    html: 'Noll friktion. Inga konton, inga installationer, ingen väntan. Lägg till deltagare och generera din turnering direkt. Allt sparas automatiskt i din webbläsare via <strong>LocalStorage</strong>: stäng fliken, stäng av datorn och kom tillbaka dagar senare. Din turnering och fullständiga historik kommer fortfarande att finnas kvar.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
