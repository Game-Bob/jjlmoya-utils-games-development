import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BasketScoreKeeperUI } from '../ui';

const slug = 'basketbal-scorebord';
const title = 'Online Basketbalscorebord: Gratis Score Bijhouder';
const description =
  'Gratis online basketbalscorebord met +1, +2 en +3 knoppen. Houd de score bij voor potjes basketballen, straatbasketbal, middelbare school en lokale competitiewedstrijden. Geen aanmelding, geen download, werkt offline.';

const faqData = [
  {
    question: 'Hoe houd je de score bij in een basketbalwedstrijd?',
    answer:
      'Basketbal kent drie scoringswaarden: vrije worp (+1 punt), velddoelpunt (+2 punten) en driepunter (+3 punten). Tik op de juiste knop telkens wanneer een team scoort. Het scorebord houdt automatisch het totaal bij. Om een fout te corrigeren, gebruik je de minknop naast de score.',
  },
  {
    question: 'Wat is het verschil tussen +1, +2 en +3 in basketbal?',
    answer:
      '+1 is voor vrije worpen die worden toegekend na een overtreding. +2 is voor een regulier velddoelpunt van binnen de driepuntslijn. +3 is voor schoten van buiten de driepuntslijn. Door aparte knoppen voor elke waarde kun je sneller scoren en verklein je de kans op fouten in vergelijking met een simpele teller.',
  },
  {
    question: 'Kan ik dit scorebord gebruiken voor een echte basketbalwedstrijd?',
    answer:
      'Ja. Het scorebord is ontworpen voor echte wedstrijden: potjes basketballen, straatbasketbal, middelbare schoolwedstrijden, lokale competities en oefenscrimmages. Het slaat de score op in je browser, zodat je de pagina opnieuw kunt laden zonder de wedstrijdstatus kwijt te raken.',
  },
  {
    question: 'Hoe houd ik de score bij voor straatbasketbal of potjes basketballen?',
    answer:
      'Straatbasketbal speelt meestal tot een streefscore (zoals 21 of 16) met 1-en en 2-en (of alleen 1-en). Dit scorebord werkt voor elke vorm. Gebruik +1 voor reguliere manden, +2 voor schoten van achter de driepuntslijn. Stel je eigen winvoorwaarde in en gebruik de minknop als je een fout maakt.',
  },
  {
    question: 'Werkt het offline op mobiel?',
    answer:
      'Ja. Zodra de pagina is geladen, werkt het scorebord volledig offline. Perfect voor buitenvelden, sportscholen zonder wifi, of overal waar het signaal slecht is. Je kunt ook volledig scherm gebruiken en het scherm blijft aan, zodat het niet vergrendelt tijdens de wedstrijd.',
  },
  {
    question: 'Hoe houd ik teamfouten en de bonus bij?',
    answer:
      'Dit scorebord richt zich op het scorebord zelf. Voor teamfouten kun je de teamnaamvelden gebruiken om handmatig fouten bij te houden (bijv. hernoem "THUIS" naar "THUIS 3F"). We raden aan om deze tool te combineren met een aparte foutentracker voor officiële wedstrijden.',
  },
  {
    question: 'Kan ik deze basketbalscore bijhouder op mijn telefoon gebruiken?',
    answer:
      'Ja. De interface is mobiel-eerst ontworpen. De +1, +2 en +3 knoppen zijn groot en gemakkelijk aan te tikken met je duim. De volledig-schermmodus verbergt de browserinterface, zodat het scorebord het hele scherm vult, en de schermvergrendeling voorkomt dat je telefoon uitgaat.',
  },
];

const howToData = [
  {
    name: 'Geef je teams een naam',
    text: 'Tik op THUIS of UIT om je teamnamen in te voeren. De namen worden automatisch opgeslagen in je browser, zodat ze blijven staan, zelfs als je de pagina opnieuw laadt.',
  },
  {
    name: 'Scor een vrije worp (+1)',
    text: 'Tik op de +1 knop wanneer een speler een vrije worp maakt. Elke vrije worp is één punt waard en wordt meestal toegekend na een overtreding.',
  },
  {
    name: 'Scor een velddoelpunt (+2)',
    text: 'Tik op de +2 knop voor een reguliere mand binnen de driepuntslijn. Dit is de meest voorkomende scorende actie in basketbal.',
  },
  {
    name: 'Scor een driepunter (+3)',
    text: 'Tik op de +3 knop wanneer een speler van buiten de driepuntslijn scoort. Een driepunter wordt gemarkeerd met een rode knop en zorgt voor een extra feesteffect.',
  },
  {
    name: 'Corrigeer een scorefout',
    text: 'Als je per ongeluk punten toevoegt, tik dan op de minknop om ze af te trekken. Het gaat niet onder nul. Het is niet nodig om de hele wedstrijd opnieuw te starten voor een kleine fout.',
  },
  {
    name: 'Wissel van kant tijdens de rust',
    text: 'Gebruik de wisselknop om de THUIS en UIT posities tijdens de rust om te draaien. Zowel scores als teamnamen worden gewisseld, zodat je geen gegevens verliest.',
  },
  {
    name: 'Begin een nieuwe wedstrijd',
    text: 'Tik op de resetknop en bevestig om alle scores te wissen en een nieuwe wedstrijd te starten. De teamnamen blijven behouden, zodat je ze niet opnieuw hoeft in te typen.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<BasketScoreKeeperUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Gratis Online Basketbalscorebord: Geen Aanmelding, Geen Download',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Score bijhouden in basketbal moet simpel zijn. Een vrije worp is +1. Een velddoelpunt is +2. Een driepunter is +3. Dit scorebord geeft je een speciale knop voor elke waarde, zodat je kunt tikken en doorspelen. Geen menu\'s, geen modi, geen configuratie. Geef je teams een naam en begin met scoren. De score wordt automatisch opgeslagen in je browser, zodat je de pagina opnieuw kunt laden, je telefoon kunt sluiten of later terug kunt komen zonder de wedstrijd kwijt te raken.',
    },
    {
      type: 'title',
      text: 'Waarom een Speciale Basketbalscore Bijhouder Beter is dan een Generieke Teller',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De meeste scorebord-apps dwingen je om meerdere keren op dezelfde knop te tikken om twee of drie punten toe te voegen. Dat extra tikken stapelt zich op tijdens een wedstrijd van 40 minuten en vergroot de kans dat je de tel kwijtraakt tijdens een snelle aanval of wissel. Dit scorebord heeft <strong>drie aparte knoppen</strong>: één voor elke scoringswaarde: zodat je precies één keer tikt per scorende actie. De +3 knop licht rood op en geeft een explosieve animatie die past bij de opwinding van een driepunter.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Potjes & Straatbasketbal',
          description:
            'Wedstrijden tot 16 of 21 met 1-en en 2-en. Dit scorebord kan beide waarden aan. Gebruik gewoon +1 en +2 en negeer de +3 als je volgens straatregels speelt.',
          icon: 'mdi:basketball',
          points: ['Geen installatie nodig', 'Werkt voor elk winstdoel', 'Scherm blijft aan'],
        },
        {
          title: 'Middelbare School & Lokale Competitie',
          description:
            'Standaard FIBA- of NFHS-regels met vrije worpen, velddoelpunten en driepunters. Speciale knoppen maken het snel genoeg voor een officiële scorer.',
          icon: 'mdi:school',
          points: ['Alle drie scoringswaarden', 'Bewerkbare teamnamen', 'Volledig scherm houdt telefoon aan'],
        },
        {
          title: 'Oefening & Training',
          description:
            'Houd gemaakte schoten bij tijdens schietoefeningen, scrimmages of 1-tegen-1 potjes. De geschiedenis wordt niet opgeslagen, dus elke sessie begint fris.',
          icon: 'mdi:whistle',
          points: ['Snelle reset tussen oefeningen', 'Werkt offline in de sportschool', 'Geen account nodig'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe Basketbalscoring Werkt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketbal kent drie scoringswaarden. Een <strong>vrije worp</strong> is 1 punt waard en wordt genomen vanaf de vrije worplijn na een overtreding. Een <strong>velddoelpunt</strong> is 2 punten waard en telt voor elke mand van binnen de driepuntslijn tijdens normaal spel. Een <strong>driepuntsvelddoelpunt</strong> is 3 punten waard voor schoten van buiten de driepuntslijn. De meeste professionele en universiteitswedstrijden gebruiken alle drie de waarden. Straatbasketbal gebruikt vaak alleen 1-en en 2-en, of alleen 1-en. Dit scorebord past zich aan elke vorm aan.',
    },
    {
      type: 'title',
      text: 'Speel Elke Vorm: Winnen op Score, Winnen op Tijd, of Eerst naar Doel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basketbal heeft geen vaste scorelimiet: de wedstrijd eindigt wanneer de klok op nul staat. Maar potjes basketballen gebruiken vaak streefscores zoals eerste aan 16, 21 of 11 (winst met 2 verschil). Dit scorebord dwingt geen winvoorwaarde af, omdat basketbal niet eindigt op een score. Jij bepaalt wanneer de wedstrijd voorbij is en met de resetknop wis je het bord voor de volgende wedstrijd. De teamnamen blijven behouden, zodat je opeenvolgende wedstrijden kunt spelen zonder opnieuw te typen.',
    },
    {
      type: 'title',
      text: 'Wat Dit Scorebord Anders Maakt',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Drie speciale knoppen</strong>: +1, +2 en +3. Geen doorlussen van waarden, geen lang indrukken, geen extra tikken.',
        '<strong>Bewerkbare teamnamen</strong>: tik op de naam om deze te wijzigen. Namen worden opgeslagen in je browser en blijven behouden bij het herladen van de pagina.',
        '<strong>Schermvergrendeling</strong>: wanneer je volledig scherm gebruikt, voorkomt het scorebord dat je telefoonscherm uitgaat. Niet meer tikken om het scherm aan te houden.',
        '<strong>Volledig-schermmodus</strong>: verbergt browsertabbladen en adresbalk, zodat het scorebord het hele scherm vult. Tik één keer op de volledig-schermknop en de tool wordt groter.',
        '<strong>Offline eerst</strong>: het hele scorebord werkt zonder internetverbinding na de eerste keer laden. Geen advertenties, geen trackers, geen gegevensverzameling.',
        '<strong>Bevredigende feedback</strong>: elke tik activeert een score-animatie, zwevende deeltjes en een subtiele trilling op ondersteunde apparaten. De +3 krijgt een extra explosie-effect.',
        '<strong>Wedstrijdstatus wordt opgeslagen</strong>: herlaad de pagina, sluit de browser of kom morgen terug. De scores en teamnamen worden lokaal opgeslagen.',
      ],
    },
    {
      type: 'title',
      text: 'Basketbalscorebord vs. Papieren Scoreformulier',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een papieren scoreformulier werkt, maar vereist een pen, een vlakke ondergrond en iemand die kan schrijven en tegelijk naar de wedstrijd kan kijken. Een digitaal scorebord lost alle drie de problemen op. De knoppen zijn groot genoeg om te tikken zonder te kijken. De cijfers zijn leesbaar van de andere kant van het veld. De score wordt nooit vlekkerig, raakt niet kwijt en wordt niet per ongeluk gewist. En in tegenstelling tot papier slaat dit scorebord je wedstrijdstatus op, zodat je het tijdens de rust kunt sluiten en later terug kunt komen.',
    },
  ],
  ui: {
    playerA: 'THUIS',
    playerB: 'UIT',
    swapSides: 'Wissel van Kant',
    reset: 'Reset',
    resetConfirm: 'De wedstrijd resetten? Alle punten gaan verloren.',
    cancel: 'Annuleren',
    fullscreen: 'Volledig Scherm',
    exitFullscreen: 'Volledig Scherm Afsluiten',
    winnerLabel: 'WINNAAR',
  },
};
