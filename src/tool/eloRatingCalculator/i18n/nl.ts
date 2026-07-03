import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EloRatingCalculatorUI } from '../ui';

const slug = 'elo-calculator';
const title = 'ELO Rating Calculator voor Schaken, Esports en Sport';
const description = 'Gratis ELO rating calculator voor overwinningen, gelijke spelen en verliezen. Voer beide ratings in, kies een K-factor en zie de exacte puntenwijziging, verwachte score, nieuwe ELO en ELO van de tegenstander.';

const ui: EloRatingCalculatorUI = {
  playerLabel: 'Speler rating',
  opponentLabel: 'Tegenstander rating',
  kFactorLabel: 'K-factor',
  resultLabel: 'Wedstrijdresultaat',
  winLabel: 'Winst',
  drawLabel: 'Gelijk',
  lossLabel: 'Verlies',
  calculateLabel: 'Berekenen',
  resetLabel: 'Resetten',
  expectedLabel: 'Verwacht',
  deltaLabel: 'Wijziging',
  newRatingLabel: 'Nieuwe rating',
  opponentNewRatingLabel: 'Nieuwe ELO tegenstander',
  kFactorHelpTitle: 'Wat is de K-factor?',
  kFactorHelpText: 'K bepaalt hoe agressief de update is. Een lage K betekent stabiele ranglijsten. Een hoge K betekent dat elk resultaat de ratings sneller verplaatst.',
  kFactorLowText: 'Stabiel',
  kFactorHighText: 'Volatiel',
  resultSummaryLabel: 'Wedstrijdimpact',
  initialImpactText: 'Gelijkspel houdt de tabel spannend',
  historyVersusLabel: 'vs',
  historyToLabel: 'naar',
  playerPointsLabel: 'spelerpunten',
  opponentEloLabel: 'ELO tegenstander',
  particleEloLabel: 'ELO',
  particleRatingLabel: 'RATING',
  upsetLabel: 'Verrassingskans',
  favoriteLabel: 'Favorietendruk',
  balancedLabel: 'Evenwichtige wedstrijd',
  historyLabel: 'Lokale berekeningen',
  noHistoryLabel: 'Voer een berekening uit om deze hier op te slaan',
  copiedLabel: 'Gekopieerd',
  copyLabel: 'Kopiëren',
  clearLabel: 'Wissen',
  kBeginner: 'Beginner',
  kClub: 'Club',
  kTournament: 'Toernooi',
  kElite: 'Elite',
};

const faqData = [
  { question: 'Hoe bereken ik de ELO ratingwijziging na een wedstrijd?', answer: 'Voer je huidige ELO, de ELO van de tegenstander, het wedstrijdresultaat en de K-factor in. De calculator schat je verwachte score, vergelijkt deze met het echte resultaat en geeft de exacte gewonnen of verloren punten terug.' },
  { question: 'Wat betekent de K-factor in ELO?', answer: 'De K-factor bepaalt de gevoeligheid van de rating. Een lage K-factor maakt ratings stabiel en traag bewegend. Een hoge K-factor laat ratings sneller reageren, wat handig is voor nieuwe spelers, korte seizoenen of actieve lokale ladders.' },
  { question: 'Waarom win ik minder ELO-punten als ik een lager gerangschikte tegenstander versla?', answer: 'Omdat de formule al verwachtte dat je zou winnen. Een veel lager gerangschikte tegenstander verslaan bevestigt de voorspelling, dus de ratingwinst is klein. Een sterkere tegenstander verslaan is verrassender, dus de winst is groter.' },
  { question: 'Verliest de tegenstander hetzelfde aantal ELO-punten?', answer: 'Bij een standaard ELO-uitwisseling tussen twee spelers, ja. De door de ene partij gewonnen punten worden van de andere afgetrokken, dus de calculator toont zowel de nieuwe ELO van de speler als de nieuwe ELO van de tegenstander.' },
  { question: 'Kan ik deze ELO calculator buiten schaken gebruiken?', answer: 'Ja. ELO werkt voor elke herhaalde één-op-één competitie waarbij sterkere spelers vaker zouden moeten winnen, inclusief esports, tennisladders, padelgroepen, tafeltennis, debatclubs en fantasy leagues.' },
];

const howTo = [
  { name: 'Voer de spelerrating in', text: 'Typ de huidige rating van de speler waarvan je de wijziging wilt berekenen.' },
  { name: 'Voer de tegenstanderrating in', text: 'Voeg de rating van de tegenstander toe zodat de calculator de verwachte score kan schatten.' },
  { name: 'Kies K-factor en resultaat', text: 'Gebruik een lagere K-factor voor stabiele ranglijsten of een hogere K-factor wanneer ratings snel moeten worden aangepast, kies vervolgens winst, gelijk of verlies.' },
  { name: 'Lees de nieuwe ratings', text: 'De calculator toont de verwachte score, ratingwijziging, je nieuwe ELO en de nieuwe ELO van de tegenstander na de puntenuitwisseling.' },
];

const seo = [
  { type: 'title' as const, text: 'Bereken ELO-punten Na Elke Wedstrijd', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Gebruik deze ELO rating calculator wanneer je een snel antwoord nodig hebt op een zeer praktische vraag: <strong>hoeveel ELO-punten win of verlies ik na dit resultaat?</strong> Voer je rating, de rating van de tegenstander, het wedstrijdresultaat en de K-factor in. De tool berekent de verwachte score, ratingvariatie, je nieuwe ELO en de nieuwe ELO van de tegenstander in dezelfde resultaatkaart.'
  },
  {
    type: 'summary' as const,
    title: 'Wat deze calculator beantwoordt',
    items: [
      'Hoeveel ELO-punten je wint na een overwinning op een sterkere of zwakkere tegenstander.',
      'Hoeveel ELO-punten je verliest na een verrassende nederlaag.',
      'Of een gelijkspel je rating zou moeten verhogen of verlagen.',
      'Wat de rating van de tegenstander wordt na dezelfde puntenuitwisseling.',
      'Hoe het wijzigen van de K-factor de ratingbeweging stabiel of volatiel maakt.',
    ]
  },
  {
    type: 'stats' as const,
    items: [
      { value: '1.0', label: 'winstscore', description: 'Een overwinning wordt als volledig punt behandeld voordat deze met de verwachte score wordt vergeleken.' },
      { value: '0.5', label: 'gelijkspelscore', description: 'Een gelijkspel zit precies tussen winst en verlies in, dus het kan punten opleveren tegen een sterkere tegenstander.' },
      { value: '0.0', label: 'verliesscore', description: 'Een verlies tegen een lager gerangschikte tegenstander kost meestal meer omdat het onverwacht was.' },
    ]
  },
  { type: 'title' as const, text: 'Wat de ELO-formule Doet', level: 2 as const },
  {
    type: 'diagnostic' as const,
    title: 'De drie stappen achter elk resultaat',
    description: 'De calculator volgt het standaard ELO-idee zonder dat je handmatig met de formule hoeft te werken.',
    items: [
      { label: 'Verwachte score', value: 'Het ratingverschil wordt omgezet in een probabilistische score. Van hoger gerangschikte spelers wordt verwacht dat ze meer punten scoren.' },
      { label: 'Daadwerkelijke score', value: 'Een overwinning telt als 1, een gelijkspel als 0.5 en verlies als 0.' },
      { label: 'Ratingwijziging', value: 'Het verschil tussen daadwerkelijke en verwachte score wordt vermenigvuldigd met de K-factor en afgerond op punten.' },
    ]
  },
  {
    type: 'table' as const,
    headers: ['Situatie', 'Wat gebeurt er meestal', 'Waarom het gebeurt'],
    rows: [
      ['Je verslaat een sterkere tegenstander', 'Grote ELO-winst', 'Je daadwerkelijke score was veel hoger dan verwacht'],
      ['Je verslaat een zwakkere tegenstander', 'Kleine ELO-winst', 'De formule verwachtte al dat je zou winnen'],
      ['Je speelt gelijk tegen een sterkere', 'Kleine ELO-winst', 'Een gelijkspel kan je verwachte score overtreffen'],
      ['Je verliest van een zwakkere tegenstander', 'Groot ELO-verlies', 'Het resultaat was slechter dan verwacht'],
    ]
  },
  { type: 'title' as const, text: 'De Juiste K-factor Kiezen voor Je Ratingsysteem', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: '<strong>De K-factor is de gevoeligheidsknop van een ELO-systeem.</strong> Het beslist niet wie verdiende te winnen. Het beslist hoe sterk de ratingtabel reageert op een resultaat. Als je competitie veel wedstrijden en volwassen ratings heeft, houdt een lagere K de tabel rustig. Als spelers nieuw zijn of seizoenen kort zijn, helpt een hogere K ratings sneller bij te benen.'
  },
  {
    type: 'table' as const,
    headers: ['K-factor', 'Gebruiken voor', 'Wat de gebruiker moet verwachten'],
    rows: [
      ['10 tot 16', 'Gevestigde schaakclubs, expertgroepen, langlopende ranglijsten', 'Zeer stabiele ratings met kleine veranderingen na elke wedstrijd'],
      ['20 tot 32', 'Lokale competities, clubladders, terugkerende toernooien', 'Evenwichtige beweging die responsief aanvoelt zonder te overdrijven'],
      ['40 tot 60', 'Nieuwe spelers, korte seizoenen, esportsladders, informele groepen', 'Snelle correctie wanneer de huidige rating mogelijk onnauwkeurig is'],
      ['60 en meer', 'Alleen experimentele formats of voorlopige ratings', 'Zeer volatiele ratings waarbij één wedstrijd de tabel sterk kan verschuiven'],
    ]
  },
  {
    type: 'tip' as const,
    title: 'Beste standaardwaarde voor de meeste gebruikers',
    html: 'Als je geen officiële federatieregel volgt, begin dan met <strong>K 32</strong>. Het is responsief genoeg voor actieve ladders en toch stabiel genoeg zodat één gelukkig resultaat de ranglijst niet volledig herschrijft.'
  },
  { type: 'title' as const, text: 'Hoe Lees Je Je ELO Calculator Resultaat', level: 2 as const },
  {
    type: 'list' as const,
    items: [
      '<strong>Verwacht:</strong> de score die de formule vóór de wedstrijd voorspelde. Een hogere verwachte score betekent dat je favoriet was.',
      '<strong>Wijziging:</strong> de exacte ELO-punten toegevoegd aan of verwijderd uit de rating van de speler.',
      '<strong>Nieuwe rating:</strong> de rating van de speler na toepassing van het resultaat.',
      '<strong>Nieuwe ELO tegenstander:</strong> de rating van de tegenstander na de tegengestelde puntenbeweging.',
      '<strong>Wedstrijdimpact:</strong> een duidelijke samenvatting van hoe sterk het resultaat de tabel heeft verplaatst.',
    ]
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Schaken en bordspellen',
        description: 'Bereken ratings na de wedstrijd voor clubavonden, online evenementen en privé ratinggroepen.',
        icon: 'mdi:chess-knight',
        points: ['Winst-gelijk-verlies ondersteuning', 'ELO tegenstander getoond', 'Goed voor langetermijnranglijsten']
      },
      {
        title: 'Esports ladders',
        description: 'Werk speler- of teamratings bij na herhaalde één-op-één wedstrijden waar vaardigheden snel kunnen veranderen.',
        icon: 'mdi:gamepad-variant',
        points: ['Hogere K-factor opties', 'Snelle ratingcorrectie', 'Duidelijke verrassingsbeloningen']
      },
      {
        title: 'Sportladders',
        description: 'Beheer eerlijke ranglijsten voor tennis, padel, squash, tafeltennis, badminton en lokale competities.',
        icon: 'mdi:tennis',
        points: ['Eenvoudige handmatige updates', 'Werkt voor clubs', 'Makkelijk voor organisatoren']
      },
    ]
  },
  {
    type: 'proscons' as const,
    title: 'Wanneer ELO een goede ratingkeuze is',
    items: [
      {
        pro: 'Uitstekend voor herhaalde één-op-één wedstrijden waar sterkere spelers vaker zouden moeten winnen.',
        con: 'Minder ideaal voor teamsporten waar individuele bijdrage moeilijk te isoleren is.'
      },
      {
        pro: 'Makkelijk uit te leggen omdat overwinningen op sterkere tegenstanders meer punten waard zijn.',
        con: 'Heeft genoeg wedstrijden nodig voordat ratings nauwkeurig aanvoelen voor gloednieuwe spelers.'
      },
      {
        pro: 'Eenvoudig genoeg om bij te houden in een spreadsheet, clubladder of competitietabel.',
        con: 'K-factor regels moeten consistent zijn, anders worden ranglijsten moeilijk te vertrouwen.'
      },
    ]
  },
  {
    type: 'message' as const,
    title: 'Belangrijk voor competitie organisatoren',
    html: 'Kies je K-factor vóór het begin van het seizoen en publiceer deze. Spelers vertrouwen ELO-tabellen meer wanneer iedereen weet hoe ratings worden berekend voordat resultaten worden ingevoerd.'
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<EloRatingCalculatorUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
