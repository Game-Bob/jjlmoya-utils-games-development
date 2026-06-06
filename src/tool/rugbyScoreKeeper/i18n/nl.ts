import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'rugby-scorebord-timer';
const title = 'Rugbyscorebord met Sin Bin Timers en Wedstrijdklok';
const description = 'Volg live rugbyscores met registers voor try, conversie, strafschop en dropgoal. Beheer sin bin aftelklokken en wedstrijdhelften met een interactief stadionscorebord.';

const faqData = [
  {
    question: 'Hoe worden punten gescoord in een rugby union wedstrijd?',
    answer: 'Een try is 5 punten waard en wordt toegekend wanneer een speler de bal in het doelgebied van de tegenstander drukt. Een conversieschop na een try is 2 punten waard. Strafschoppen en dropgoals zijn elk 3 punten waard.',
  },
  {
    question: 'Wat gebeurt er als een speler een gele kaart krijgt in rugby?',
    answer: 'Een gele kaart leidt tot een sin bin schorsing. De speler moet het veld verlaten gedurende 10 minuten actieve speeltijd. Zijn team speelt met één speler minder tijdens deze periode. De sin bin timer loopt alleen af terwijl de wedstrijdklok loopt.',
  },
  {
    question: 'Hoe lang duurt een rugby union wedstrijd?',
    answer: 'Een standaard rugby union wedstrijd bestaat uit twee helften van 40 minuten met een rustpauze van 10 minuten. De wedstrijdklok wordt gestopt tijdens blessures en ernstige incidenten. Er kan extra tijd worden toegevoegd voor onderbrekingen.',
  },
];

const howToData = [
  {
    name: 'Log scorende acties',
    text: 'Tik op de Try, Conversie, Strafschop of Dropgoal knoppen om punten te registreren. Na het tikken van Try licht de Conversie knop automatisch op.',
  },
  {
    name: 'Beheer sin bin straffen',
    text: 'Tik op Gele Kaart om een speler naar de sin bin te sturen. Voer zijn naam of nummer in en een aftelling van 10 minuten start automatisch.',
  },
  {
    name: 'Beheer wedstrijdtiming',
    text: 'Gebruik de wedstrijdklok om twee helften van 40 minuten bij te houden. Pauzeer de klok tijdens blessures en hervat wanneer het spel hervat.',
  },
  {
    name: 'Volg scoreverloop',
    text: 'Bekijk het live scorebord met thuis- en uitpunten. Raadpleeg het scoreoverzicht voor een uitsplitsing van tries, conversies, strafschoppen en dropgoals.',
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
    image: undefined,
    url: undefined,
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Gratis Online Rugbyscorebord met Live Wedstrijdvolging',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Neem de controle over de score van uw rugbymatch met ons interactieve digitale scorebord. Volg tries, conversies, strafschoppen en dropgoals in realtime. Het sin bin beheersysteem telt automatisch speler schorsingen af en de wedstrijdklok houdt beide helften perfect bij. Of u nu een lokale clubwedstrijd fluit of een jeugdteam coacht, deze tool handelt alle score- en timingdetails automatisch af.',
    },
    {
      type: 'title',
      text: 'Rugby Union Score Systeem Uitgelegd',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rugby union biedt vier manieren om punten te scoren, elk met verschillende vaardigheden en strategieën. De try is de meest waardevolle aanvalsactie, die teams beloont voor het doorbreken van de verdedigingslijn en het drukken van de bal in de tryzone. Na een try probeert het scorende team een conversieschop voor twee extra punten. Strafschoppen en dropgoals voegen tactische diepte toe, waardoor teams kunnen scoren vanuit open spel of na overtredingen van de tegenstander.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Try',
          description: 'Druk de bal in de tryzone voor vijf punten.',
          icon: 'mdi:rugby',
          points: ['Vijf punten toegekend', 'Zet conversiepoging op', 'Vereist bal indrukken'],
        },
        {
          title: 'Conversie',
          description: 'Schop tussen de palen na een try voor twee punten.',
          icon: 'mdi:goal',
          points: ['Twee punten bij succes', 'Geschopt vanaf try positie', 'Moet over de lat'],
        },
        {
          title: 'Strafschop',
          description: 'Schop op doel na overtreding tegenstander voor drie punten.',
          icon: 'mdi:alert-octagon',
          points: ['Drie punten toegekend', 'Kan worden geschopt of getikt', 'Beslist vaak gelijke wedstrijden'],
        },
        {
          title: 'Dropgoal',
          description: 'Laat de bal stuiteren en trap hem door de palen tijdens open spel voor drie punten.',
          icon: 'mdi:circle-outline',
          points: ['Drie punten toegekend', 'Bal moet eerst de grond raken', 'Hoogspanning wedstrijdwinnaar'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Het Sin Bin Systeem Begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De sin bin is een tijdelijk schorsingssysteem voor gevaarlijke of herhaalde overtredingen. Wanneer een scheidsrechter een gele kaart toont, moet de speler het veld verlaten voor tien minuten actieve speeltijd. Gedurende deze tijd speelt zijn team met één speler minder, wat een numeriek voordeel creëert voor de tegenpartij. De sin bin timer loopt alleen af terwijl de wedstrijdklok loopt, wat een eerlijke handhaving garandeert ongeacht onderbrekingen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gele Kaart Straf:</strong> Tien minuten in de sin bin voor gevaarlijk spel of herhaalde team overtredingen.',
        '<strong>Numeriek Nadeel:</strong> Het bestrafte team speelt met 14 spelers in plaats van 15 tijdens de schorsingsperiode.',
        '<strong>Automatische Terugkeer:</strong> Wanneer de timer afloopt, keert de speler automatisch terug vanaf de middenlijn.',
        '<strong>Rode Kaart Opschaling:</strong> Een tweede gele kaart of een enkel ernstig vergrijp resulteert in een rode kaart en definitieve verwijdering.',
      ],
    },
    {
      type: 'title',
      text: 'Wedstrijdtiming en Helftbeheer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een standaard rugby union wedstrijd is verdeeld in twee helften van 40 minuten met een rustpauze van 10 minuten. De wedstrijdklok loopt continu tijdens actief spel, maar kan door de scheidsrechter worden gepauzeerd voor blessures, ernstige overtredingsbeoordelingen of andere onderbrekingen. Deze digitale scorebord bevat een nauwkeurige wedstrijdklok met pauze- en hervatbediening, automatische helftregistratie en duidelijke visuele indicatoren voor elke speelperiode.',
    },
    {
      type: 'title',
      text: 'Waarom een Digitaal Rugbyscorebord Gebruiken',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Handmatig score bijhouden in rugby is uitdagend vanwege de verscheidenheid aan scoringsmethoden, sin bin timing vereisten en helftbeheer. Deze browsertool biedt nauwkeurige realtime scoring, automatische sin bin aftellingen en precieze wedstrijdtiming. Coaches kunnen zich concentreren op spelstrategie in plaats van rekenwerk, scheidsrechters hebben een betrouwbaar back-upscoresysteem en spelers kunnen de wedrijfsstatus in één oogopslag verifiëren.',
    },
  ],
  ui: {
    title: 'Rugbyscorebord',
    description: 'Volg wedstrijdscores en sin bin timers.',
    home: 'Thuis',
    away: 'Uit',
    score: 'Score',
    tryLabel: 'Try +5',
    conversion: 'Conversie +2',
    penalty: 'Strafschop +3',
    dropGoal: 'Dropgoal +3',
    conversionYes: 'Ja',
    conversionNo: 'Nee',
    sinBin: 'Gele Kaart',
    sinBinTitle: 'Sin Bin Schorsing',
    sinBinPlayer: 'Naam of nummer van speler:',
    sinBinAdd: 'Start Schorsing',
    sinBinEmpty: 'Geen actieve schorsingen',
    sinBinReturn: 'Teruggekeerd',
    matchClock: 'Wedstrijdklok',
    half: 'Helft',
    half1: 'Eerste Helft',
    half2: 'Tweede Helft',
    startMatch: 'Afrap',
    pauseMatch: 'Pauze',
    resumeMatch: 'Hervat',
    resetMatch: 'Reset Wedstrijd',
    resetConfirm: 'De huidige wedstrijd resetten? Alle scores en timers gaan verloren.',
    cancel: 'Annuleren',
    confirm: 'Bevestig Reset',
    period: 'Periode',
    scoringSummary: 'Scoreoverzicht',
    tryScored: 'Tries',
    conversionSuccess: 'Conversies',
    conversionMiss: 'Gemiste Conversies',
    penaltyScored: 'Strafschoppen',
    dropGoalScored: 'Dropgoals',
    totalPoints: 'Totaal',
    fullscreen: 'Volledig Scherm',
    toggleSound: 'Geluid Aan Uit',
    eventLog: 'Gebeurtenissenlog',
    eventEmpty: 'Nog geen gebeurtenissen',
    undoBtn: 'Ongedaan Maken Laatste',
    timeOff: 'Tijd Stil',
    timeOn: 'Tijd Loopt',
  },
};
