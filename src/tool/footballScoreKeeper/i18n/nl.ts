import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'voetbal-score';
const title = 'Voetbal Score Bijhouden Online: Gratis Wedstrijdscore Volger';
const description =
  'Volg voetbaluitslagen gratis online. Eenvoudige doelpunten teller voor vriendschappelijke wedstrijden, competities en toernooien. Geen registratie nodig.';

const faqData = [
  {
    question: 'Hoe gebruik ik deze voetbalscore?',
    answer:
      'Tik op de + knop onder elk team om een doelpunt toe te voegen. De score wordt direct bijgewerkt met een feestelijke animatie. Gebruik de min-knop om een fout ongedaan te maken. Teamnamen kun je aanpassen door op de standaardnaam te tikken en je eigen naam in te typen. Alles wordt automatisch opgeslagen in je browser, zodat je de pagina kunt sluiten en later verder kunt gaan.',
  },
  {
    question: 'Kan ik het gebruiken op mijn telefoon tijdens een wedstrijd?',
    answer:
      'Ja. De interface is ontworpen voor mobiel gebruik met grote knoppen die je kunt indrukken zonder te kijken. De volledige schermmodus verbergt de browser en houdt je telefoonscherm aan tijdens de hele wedstrijd. De verticale lay-out zorgt ervoor dat je beide teamgedeelten gemakkelijk met je duim kunt bereiken.',
  },
  {
    question: 'Worden mijn wedstrijdgegevens opgeslagen?',
    answer:
      'Ja. De huidige score en teamnamen worden automatisch opgeslagen in je browser. Je kunt de pagina verversen, de browser sluiten of de volgende dag terugkomen en je wedstrijdgegevens zijn er nog steeds.',
  },
  {
    question: 'Kan ik verlenging of strafschoppen bijhouden?',
    answer:
      'Ja. De scoreteller werkt hetzelfde voor elk wedstrijdformaat. Blijf de + knoppen gebruiken tijdens verlenging of strafschoppen. Tik op "Wedstrijd beëindigen" wanneer de wedstrijd voorbij is om de eindstand te zien.',
  },
  {
    question: 'Is het echt gratis zonder verborgen limieten?',
    answer:
      'Ja, volledig gratis zonder beperkingen. Geen premium-abonnementen, geen deelnemerslimieten, geen watermerken, geen advertenties. Alles werkt offline in je browser. Geen account of e-mail vereist.',
  },
];

const howToData = [
  {
    name: 'Teams een naam geven',
    text: 'Tik op de standaard teamnaam en typ je eigen naam. De nieuwe naam wordt automatisch opgeslagen in je browser.',
  },
  {
    name: 'Doelpunt toevoegen',
    text: 'Tik op de grote ronde + knop voor het team dat scoorde. Het scorenummer springt omhoog met een feestelijke animatie.',
  },
  {
    name: 'Doelpunt verwijderen',
    text: 'Tik op de min-knop onder de + knop als je per ongeluk een doelpunt hebt toegevoegd. De score wordt direct aangepast.',
  },
  {
    name: 'Wedstrijd beëindigen',
    text: 'Tik onderaan op "Wedstrijd beëindigen" om de winnaar te zien met een trofee en confetti. Sluit de viering door buiten het venster te tikken.',
  },
  {
    name: 'Wedstrijd resetten',
    text: 'Tik op het resetpictogram in de bovenste balk en bevestig om beide scores te wissen. Teamnamen blijven behouden.',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: 'Gratis Online Voetbalscore Bijhouden: Live Wedstrijdscore Volger',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De score bijhouden tijdens een voetbalwedstrijd zou het makkelijkste deel van het spel moeten zijn. Deze online voetbalscore laat je in realtime doelpunten bijhouden voor twee teams met slechts een tik. Geen aanmelding, geen downloads, geen ingewikkelde menu\'s. Open de pagina, geef je teams een naam en begin met tellen. Of je nu aan de zijlijn staat bij jeugdvoetbal, een vriendschappelijke wedstrijd leidt tussen vrienden of de score bijhoudt tijdens een lokale competitiewedstrijd, deze tool is gebouwd voor snelheid en eenvoud. Elk team krijgt een eigen kleurgecodeerd gedeelte met een grote scoreweergave en een speciale +1 knop. Tik om een doelpunt toe te voegen, tik op de min-knop om een fout ongedaan te maken. De volledige wedstrijdgeschiedenis blijft zichtbaar op het scherm, zodat je altijd precies weet wat er is gebeurd.',
    },
    {
      type: 'title',
      text: 'Waarom je een speciale voetbalscore nodig hebt in plaats van een generieke teller',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een generieke teller werkt voor alles tellen, maar een speciale voetbalscore begrijpt hoe het spel werkt. Het scheidt de twee teams visueel met duidelijke kleuren, zodat je nooit op de verkeerde kant tikt. De doelpuntknop is groot en bevredigend om in te drukken, zelfs als je een telefoon in één hand vasthoudt. Met de min-knop kun je fouten direct corrigeren zonder de hele wedstrijd te resetten. En wanneer de wedstrijd voorbij is, activeert de knop "Wedstrijd beëindigen" een feestelijk scherm dat de eindstand toont met confetti en een trofee. Generieke tellers kunnen dat allemaal niet. Ze behandelen elk punt hetzelfde. Voetbal is niet generiek en jouw scoreteller zou dat ook niet moeten zijn.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vriendschappelijke & Trainingswedstrijden',
          description: 'Snel doelpunten bijhouden voor oefenwedstrijden en trainingen. Reset tussen wedstrijden in één tik. Werkt offline, dus je kunt het op elk veld gebruiken.',
          icon: 'mdi:soccer',
          points: ['Doelpunt invoeren in één tik', 'Werkt volledig offline', 'Geen account of e-mail nodig', 'Direct resetten tussen wedstrijden'],
        },
        {
          title: 'Lokale Competities & Toernooien',
          description: 'Houd een nette score bij voor competitiewedstrijden waar elk doelpunt telt. Groot display leesbaar vanaf de overkant van het veld. Teamkleuren helpen verwarring te voorkomen.',
          icon: 'mdi:trophy-outline',
          points: ['Kleurgecodeerde teamgedeelten', 'Aanpasbare teamnamen', 'Wedstrijd beëindigen met viering', 'Grote score leesbaar van afstand'],
        },
        {
          title: 'Jeugd en Schoolvoetbal',
          description: 'Eenvoudig genoeg voor jonge spelers om zelf te bedienen. Coaches kunnen doelpunten bijhouden terwijl ze zich op het spel concentreren. Volledige schermmodus houdt het scherm aan.',
          icon: 'mdi:school',
          points: ['Makkelijk genoeg voor kinderen', 'Volledig scherm houdt scherm aan', 'Aanpasbare teamnamen', 'Geen afleidende functies'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe je een voetbalwedstrijd live volgt met deze online scoreteller',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het gebruik van deze voetbalscore is eenvoudig. Wanneer je de pagina opent, zie je twee teamgedeelten. Het thuis team wordt in rood weergegeven en het uitteam in blauw. Elk gedeelte heeft een groot scorenummer in het midden, een teamnaamveld bovenaan en twee knoppen eronder. Tik op de grote ronde + knop om een doelpunt voor dat team toe te voegen. Het scorenummer animeert elke keer met een feestelijk effect. Acht verschillende doelpuntanimaties wisselen willekeurig, zodat elk doelpunt uniek aanvoelt. Zwevende deeltjes barsten los uit het knopgebied met tekst zoals GOAL en SIUUU. Het scherm flitst kort om het moment te markeren. Als je een fout maakt, tik dan op de kleine min-knop om het laatste doelpunt te verwijderen. De teamnaamvelden zijn bewerkbaar. Tik op de standaardnaam om je eigen teamnaam in te typen. Namen worden automatisch opgeslagen in je browser, samen met de huidige score. Dit betekent dat je de pagina kunt sluiten, later terug kunt komen en je wedstrijdgegevens zijn er nog steeds. Aan het einde van de wedstrijd tik je op "Wedstrijd beëindigen" om de winnaar te zien met een trofee-animatie en vallende confetti. Je kunt de viering sluiten en de score blijft zichtbaar.',
    },
    {
      type: 'title',
      text: 'Mobielvriendelijke voetbalscore ontworpen voor de zijlijn',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze tool is mobile first gebouwd. De verticale lay-out plaatst het ene team boven het andere, zodat je beide gedeelten gemakkelijk met je duim kunt bereiken terwijl je je telefoon vasthoudt. Knoppen zijn groot genoeg om in te drukken zonder naar het scherm te kijken. De volledige schermmodus verwijdert browserwerkbalken en houdt je telefoonscherm aan tijdens de hele wedstrijd. Niet meer elke paar minuten op het scherm tikken om te voorkomen dat het donker wordt. De interface werkt in liggende en staande stand. Het werkt ook offline na de eerste paginalading, dus je hebt geen internetverbinding nodig op het veld. Er zijn geen advertenties, geen trackers en geen gegevensverzameling. Je wedstrijdgegevens verlaten nooit je apparaat.',
    },
    {
      type: 'title',
      text: 'Wat deze voetbalscore bijzonder maakt',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Kleurgecodeerde teams</strong> rood voor thuis en blauw voor uit. Je ziet direct welke kant welke is zonder tekst te lezen.',
        '<strong>Doelpunt vieringsanimaties</strong> elk doelpunt activeert een willekeurige viering. Acht verschillende animaties waaronder boom, rise, glow en ball bounce.',
        '<strong>Zwevende deeltjes</strong> elk doelpunt produceert zwevende tekst met berichten zoals GOAL en SIUUU. Elke viering voelt uniek.',
        '<strong>Wedstrijdbeëindigingsceremonie</strong> tik op "Wedstrijd beëindigen" voor een winnaarsaankondiging met trofee-animatie, teamnaam en confettiregen.',
        '<strong>Bewerkbare teamnamen</strong> tik op het naamveld om je teams een andere naam te geven. Namen worden lokaal opgeslagen in je browser.',
        '<strong>Scherm vergrendeling</strong> volledige schermmodus voorkomt dat je telefoonscherm uitgaat tijdens de wedstrijd.',
        '<strong>Volledige schermmodus</strong> verbergt de browserinterface zodat de score het hele scherm vult zonder afleiding.',
        '<strong>Offline first</strong> werkt zonder internet na het eerste bezoek. Geen advertenties, geen tracking, geen gegevensverzameling.',
        '<strong>Directe gegevensopslag</strong> scores en teamnamen worden automatisch opgeslagen. Ververs de pagina of sluit de browser en je wedstrijdgegevens komen terug.',
        '<strong>Resetten met bevestiging</strong> de resetknop vraagt om bevestiging voordat scores worden gewist. Voorkomt per ongeluk gegevensverlies.',
      ],
    },
    {
      type: 'title',
      text: 'Voetbalscore vs. Papieren Scoresheet: waarom digitaal beter is',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Papieren scoresheets worden al tientallen jaren gebruikt, maar ze hebben echte problemen. Je hebt een werkende pen nodig, een plat oppervlak om op te schrijven en genoeg aandacht om te schrijven terwijl je naar het spel kijkt. Een enkele afleiding kan ervoor zorgen dat je een doelpunt mist of het verkeerde getal opschrijft. Eenmaal op papier geschreven, kan de score niet netjes worden gecorrigeerd. Doorgestreepte getallen maken het blad moeilijk leesbaar. Papier kan nat worden in de regen, wegwaaien in de wind of verloren raken tussen wedstrijden. Een digitale voetbalscore lost al deze problemen op. Knoppen zijn groot genoeg om blind in te drukken zonder te kijken. Getallen worden duidelijk weergegeven in een groot lettertype dat leesbaar is vanaf de overkant van het veld. Fouten worden direct hersteld met de min-knop. De score wordt automatisch opgeslagen en gaat nooit verloren. En in tegenstelling tot papier voegt de scoreteller vieringsanimaties en visuele feedback toe die het bijhouden van de score leuker maken. Of je nu een jeugdteam coacht, een zondagcompetitie leidt of gewoon met vrienden speelt, deze gratis online voetbalscore geeft je alles wat je nodig hebt en niets wat je niet nodig hebt.',
    },
    {
      type: 'title',
      text: 'Gratis voetbalscore voor elk niveau van het spel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze tool is volledig gratis te gebruiken zonder beperkingen. Er zijn geen premium-niveaus, geen verborgen functies achter een betaalmuur en geen watermerken op het scherm. Het werkt voor elk niveau van voetbal, van casual potjes met vrienden tot georganiseerde competitiewedstrijden. De eenvoudige interface betekent dat iedereen het kan gebruiken, van jonge spelers die het spel leren tot ervaren coaches die een toernooi leiden. Geen registratie vereist. Geen e-mailadres. Geen persoonlijke gegevens verzameld. Open de pagina, start de wedstrijd, tik de doelpunten. Dat is alles.',
    },
  ],
  ui: {
    playerA: 'Thuis',
    playerB: 'Uit',
    winnerLabel: 'KAMPIOEN',
    finishMatch: 'Wedstrijd beëindigen',
    reset: 'Resetten',
    resetConfirm: 'Wedstrijd resetten? Alle gegevens gaan verloren.',
    cancel: 'Annuleren',
    fullscreen: 'Volledig scherm',
    exitFullscreen: 'Volledig scherm verlaten',
  },
};
