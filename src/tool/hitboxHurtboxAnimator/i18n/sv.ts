import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'animera-hitbox-och-hurtbox-sprites';
const title = 'Animera Hitbox och Hurtbox för Sprites';
const description = 'Rita kollisionslager på varje bildruta av din sprite, förhandsgranska rörelser med lökpapper (onion skin), redigera exakta pixelkoordinater och exportera JSON.';

const faq = [
  {
    question: 'Vad är skillnaden mellan en hitbox och en hurtbox?',
    answer: 'En hitbox definierar det område som utdelar en attack, medan en hurtbox definierar det område som kan ta emot skada. Pushboxes håller karaktärer på avstånd och grabboxes sätter räckvidden för grepp.',
  },
  {
    question: 'Lämnar mina spritefiler webbläsaren?',
    answer: 'Nej. Bilderna bearbetas och exporteras helt i din webbläsare. Endast redigeringsinställningar sparas lokalt.',
  },
  {
    question: 'Vilket koordinatsystem använder JSON-exporten?',
    answer: 'Varje bildruta mäter sina pixelkoordinater från det övre vänstra hörnet. Måtten för bredd och höjd lagrar positiva värden tillsammans med sin egen fästpunkt (pivot).',
  },
  {
    question: 'Kan jag redigera både spritesheets och enskilda bildrutor?',
    answer: 'Ja. Du kan ladda ett PNG- eller WebP-spritesheet genom att ange rader och kolumner, eller välja flera sorterade filer.',
  },
  {
    question: 'Fungerar exporten direkt i alla spelmotorer?',
    answer: 'JSON-formatet är neutralt. Det sparar bildruteramarna, fästpunkter och geometriska lager utan att tvinga fram en specifik spelmotorstruktur.',
  },
];

const howTo = [
  { name: 'Ladda grafik', text: 'Välj ett PNG/WebP-spritesheet eller sorterade bildfiler. Bearbetningen sker lokalt på din enhet.' },
  { name: 'Ställ in bildrutor', text: 'Ange antal rader och kolumner och kontrollera beskärningen i tidslinjen.' },
  { name: 'Rita kollisionslager', text: 'Välj ett hitbox-, hurtbox-, pushbox- eller sensorlager och rita en rektangel eller cirkel.' },
  { name: 'Finjustera rörelse', text: 'Redigera exakta koordinater, kopiera former till närliggande bildrutor och använd lökpapper för att jämföra.' },
  { name: 'Exportera projektet', text: 'Ladda ner den neutrala JSON-filen och en PNG-kontaktkarta. Spara originalbilderna tillsammans med JSON-filen.' },
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
    onboarding: 'Ladda en animering, bekräfta bildrutebeskärningen och rita områden för attack, skada eller fysikkollision.',
    privacyNote: 'Lokal animeringsarbetsbänk. Bilder laddas inte upp.',
    loadSprite: 'Placera grafik på arbetsbänken',
    loadHint: 'Välj ett spritesheet eller flera sorterade PNG/WebP-bilder.',
    chooseImages: 'Välj bildfiler',
    slicingTitle: 'Bildrutebeskärning',
    rowsLabel: 'Rader',
    columnsLabel: 'Kolumner',
    applySlicing: 'Beskär',
    playbackTitle: 'Rörelsevisning',
    previousFrame: 'Föregående bildruta',
    play: 'Spela upp',
    pause: 'Pausa',
    nextFrame: 'Nästa bildruta',
    fpsLabel: 'Bildrutor per sekund',
    onionPrevious: 'Föregående lökpapper',
    onionNext: 'Nästa lökpapper',
    layerTitle: 'Kollisionslager',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Sensor',
    typeCustom: 'Anpassad',
    shapeRectangle: 'Rektangel',
    shapeCircle: 'Cirkel',
    drawShape: 'Rita',
    selectShape: 'Välj',
    stageLabel: 'Arbetsyta',
    emptyStage: 'Ladda bilder för att börja rita kollisionslager.',
    frameReadout: 'Bildruta {current} av {total}',
    timelineTitle: 'Bildruterad',
    inspectorTitle: 'Forminspektör',
    noSelection: 'Välj en form för att redigera dess exakta koordinater.',
    nameLabel: 'Lagernamn',
    xLabel: 'X i pixlar',
    yLabel: 'Y i pixlar',
    widthLabel: 'Bredd i pixlar',
    heightLabel: 'Höjd i pixlar',
    radiusLabel: 'Radie i pixlar',
    duplicateShape: 'Duplicera',
    mirrorShape: 'Spegelvänd horisontellt',
    deleteShape: 'Ta bort form',
    copyPrevious: 'Kopiera föregående bildruta hit',
    copyAll: 'Kopiera denna bildruta till alla',
    pivotTitle: 'Bildrutefästpunkt (Pivot)',
    pivotXLabel: 'Fästpunkt X',
    pivotYLabel: 'Fästpunkt Y',
    exportTitle: 'Exportera projekt',
    exportJson: 'Ladda ner JSON',
    importJson: 'Importera JSON',
    exportContactSheet: 'Ladda ner kontaktkarta',
    resetProject: 'Rensa lager',
    undo: 'Ångra',
    redo: 'Gör om',
    statusReady: 'Arbetsbänken är redo.',
    statusImageLoaded: '{count} bildfiler laddade.',
    statusShapeCreated: 'Ny kollisionsform tillagd.',
    statusShapeUpdated: 'Form uppdaterad.',
    statusImported: 'Projekt importerat.',
    statusExported: 'Export redo.',
    statusError: 'Kunde inte läsa filen.',
    framesBadge: '{count} bildrutor',
    shapesBadge: '{count} former',
    coverageBadge: '{percent}% täckt',
    coordinatesNote: 'Koordinater mäter från det övre vänstra hörnet av varje bildruta (0,0).',
    localOnlyDisclosure: 'JSON-filen sparar bildnamn, fästpunkter och former utan att innehålla bildpixlar.',
    limitationDisclosure: 'Lagren definierar geometriska designområden. Testa beteendet i din spelmotor.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Designa hitboxes och hurtboxes anpassade efter rörelsen',
    },
    {
      type: 'paragraph',
      html: 'Att ställa in kollisioner blir svårt när varje bildruta analyseras separat. Denna redigerare samlar spritens bild, kollisionslager, lökpapper och tidslinjen för att säkerställa att rörelsen flyter jämnt.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Välj varje kollisionslager utefter dess funktion i spelet',
    },
    {
      type: 'table',
      headers: ['Lager', 'Huvudfunktion', 'Att kontrollera'],
      rows: [
        ['Hitbox', 'Område som utdelar en attack eller effekt', 'Visas den endast under de aktiva bildrutorna?'],
        ['Hurtbox', 'Område som tar emot skada', 'Följer den karaktärens kropp utan onödiga luckor?'],
        ['Pushbox', 'Fysisk kollisionsyta mellan karaktärer', 'Håller den sig stabil för att undvika hack i rörelsen?'],
        ['Grabbox', 'Räckvidd för att påbörja ett grepp', 'Stämmer tajmingen med den visuella animeringen?'],
        ['Sensor', 'Detekteringsyta för interaktioner', 'Är lagernamnet tillräckligt tydligt?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Förstå och tillämpa koordinatsystemet',
    },
    {
      type: 'paragraph',
      html: 'Det exporterade projektet mäter X och Y från det övre vänstra hörnet av varje beskuren bildruta. Bredden och höjden anges i positiva pixelvärden.',
    },
    {
      type: 'tip',
      title: 'Kontrollera hela animeringssekvensen',
      html: 'Spela upp hela animeringen efter att ha ändrat en bildruta för att säkerställa att rörelsen känns prirodlig.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Använd kontaktkartan i teamets arbete',
    },
    {
      type: 'paragraph',
      html: 'PNG-kontaktkartan visar alla bildrutor och deras färglager på en och samma bild, vilket underlättar kommunikationen mellan grafiker och programmerare.',
    },
  ],
  faq,
  bibliographyTitle: 'Referenser för kollisionsdesign',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
