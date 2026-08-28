import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'hitbox-en-hurtbox-animator-sprites';
const title = 'Hitbox en Hurtbox Animator voor Sprites';
const description = 'Teken botsingslagen op elk sprite-frame, bekijk animaties met uienvellen, bewerk exacte pixelcoördinaten en exporteer een motorneutraal JSON-bestand.';

const faq = [
  {
    question: 'Wat is het verschil tussen een hitbox en een hurtbox?',
    answer: 'Een hitbox markeert het aanvalsgebied, terwijl een hurtbox het kwetsbare gebied aangeeft dat de aanval ontvangt. Pushboxes houden personages op afstand en grabboxes bepalen het bereik van een worp.',
  },
  {
    question: 'Verlaten mijn sprite-bestanden de browser?',
    answer: 'Nee. Afbeeldingen worden volledig binnen uw browser verwerkt en geëxporteerd. Alleen uw bewerkingsvoorkeuren worden lokaal opgeslagen.',
  },
  {
    question: 'Welk coördinatensysteem gebruikt de JSON-export?',
    answer: 'Elk frame meet de pixelcoördinaten vanaf de linkerbovenhoek van de uitsnede. De breedte en hoogte worden opgeslagen als positieve waarden met een eigen draaipunt.',
  },
  {
    question: 'Kan ik een spritesheet en losse frame-afbeeldingen bewerken?',
    answer: 'Ja. U kunt een PNG- of WebP-spritesheet laden door rijen en kolommen op te geven, of meerdere geordende afbeeldingen selecteren.',
  },
  {
    question: 'Werkt de export direct in elke game-engine?',
    answer: 'Het JSON-formaat is neutraal. Het slaat frame-rechthoeken, draaipunten en geometrische lagen op zonder een specifieke engine af te dwingen.',
  },
];

const howTo = [
  { name: 'Sprite-afbeeldingen laden', text: 'Selecteer een PNG/WebP-spritesheet of geordende afbeeldingen. De verwerking blijft lokaal op uw apparaat.' },
  { name: 'Frames instellen', text: 'Geef het aantal rijen en kolommen op en controleer de uitsnede op de animatiestrip.' },
  { name: 'Botsingslagen tekenen', text: 'Kies een hitbox-, hurtbox-, pushbox- of sensorlaag en teken een rechthoek of cirkel.' },
  { name: 'Beweging aanpassen', text: 'Bewerk exacte coördinaten, kopieer vormen naar naburige frames en gebruik uienvellen om de beweging te vergelijken.' },
  { name: 'Project exporteren', text: 'Download het neutrale JSON-bestand en een PNG-contactblad. Bewaar de originele afbeeldingen bij het JSON-bestand.' },
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
    onboarding: 'Laad een animatie, controleer de frame-uitsneden en teken de gebieden voor aanval, schade, fysieke botsing of detectie.',
    privacyNote: 'Lokale animatietafel. Afbeeldingen worden niet geüpload.',
    loadSprite: 'Afbeeldingen op de werkbank plaatsen',
    loadHint: 'Kies een spritesheet of een reeks geordende PNG/WebP-afbeeldingen.',
    chooseImages: 'Afbeeldingen kiezen',
    slicingTitle: 'Frame-uitsnede',
    rowsLabel: 'Rijen',
    columnsLabel: 'Kolommen',
    applySlicing: 'Uitsnijden',
    playbackTitle: 'Bewegingsvoorbeeld',
    previousFrame: 'Vorig frame',
    play: 'Afspelen',
    pause: 'Pauze',
    nextFrame: 'Volgend frame',
    fpsLabel: 'Frames per seconde',
    onionPrevious: 'Vorig uienvel',
    onionNext: 'Volgend uienvel',
    layerTitle: 'Botsingslagen',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Sensor',
    typeCustom: 'Aangepast',
    shapeRectangle: 'Rechthoek',
    shapeCircle: 'Cirkel',
    drawShape: 'Tekenen',
    selectShape: 'Selecteren',
    stageLabel: 'Werkgebied',
    emptyStage: 'Laad afbeeldingen om te beginnen met het tekenen van botsingslagen.',
    frameReadout: 'Frame {current} van {total}',
    timelineTitle: 'Animatiestrip',
    inspectorTitle: 'Vorminspecteur',
    noSelection: 'Selecteer een vorm om de exacte coördinaten te bewerken.',
    nameLabel: 'Laagnaam',
    xLabel: 'X in pixels',
    yLabel: 'Y in pixels',
    widthLabel: 'Breedte in pixels',
    heightLabel: 'Hoogte in pixels',
    radiusLabel: 'Radius in pixels',
    duplicateShape: 'Dupliceren',
    mirrorShape: 'Horizontaal spiegelen',
    deleteShape: 'Vorm verwijderen',
    copyPrevious: 'Vorig frame hierheen kopiëren',
    copyAll: 'Dit frame naar alles kopiëren',
    pivotTitle: 'Draaipunt',
    pivotXLabel: 'Draaipunt X',
    pivotYLabel: 'Draaipunt Y',
    exportTitle: 'Project exporteren',
    exportJson: 'JSON downloaden',
    importJson: 'JSON importeren',
    exportContactSheet: 'Contactblad downloaden',
    resetProject: 'Lagen herstellen',
    undo: 'Ongedaan maken',
    redo: 'Opnieuw uitvoeren',
    statusReady: 'De animatietafel is gereed.',
    statusImageLoaded: '{count} afbeeldingsbestanden geladen.',
    statusShapeCreated: 'Nieuwe botsingsvorm toegevoegd.',
    statusShapeUpdated: 'Vorm bijgewerkt.',
    statusImported: 'Project geïmporteerd.',
    statusExported: 'Export gereed.',
    statusError: 'Kan het gekozen bestand niet lezen.',
    framesBadge: '{count} frames',
    shapesBadge: '{count} vormen',
    coverageBadge: '{percent}% gedekt',
    coordinatesNote: 'Coördinaten gebruiken de linkerbovenhoek van elk frame als oorsprong (0,0).',
    localOnlyDisclosure: 'Het JSON-bestand slaat afbeeldingsnamen, draaipunten en vormen op zonder de pixels te bevatten.',
    limitationDisclosure: 'Lagen definiëren geometrische ontwerpzones. Test het gedrag direct in uw game-engine.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Ontwerp hitboxes en hurtboxes afgestemd op de beweging van de sprite',
    },
    {
      type: 'paragraph',
      html: 'Botsingen instellen wordt lastig wanneer elk frame afzonderlijk wordt beoordeeld. Deze editor brengt de afbeelding, botsingslagen, uienvellen en de tijdlijn samen voor een vloeiende beweging.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Kies elke botsingslaag op basis van de spelfunctie',
    },
    {
      type: 'table',
      headers: ['Laag', 'Hoofdfunctie', 'Controlepunt'],
      rows: [
        ['Hitbox', 'Gebied dat een aanval of effect veroorzaakt', 'Verschijnt deze alleen tijdens de actieve frames?'],
        ['Hurtbox', 'Gebied dat schade of aanvallen ontvangt', 'Volgt deze het personage zonder onnatuurlijke gaten?'],
        ['Pushbox', 'Fysieke botsingslaag tussen personages', 'Blijft deze stabiel om schokken te voorkomen?'],
        ['Grabbox', 'Bereik voor het starten van een worp', 'Komt de timing overeen met de visuele animatie?'],
        ['Sensor', 'Detectiegebied voor interacties', 'Is de naam duidelijk genoeg gedefinieerd?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Het coördinatensysteem begrijpen en toepassen',
    },
    {
      type: 'paragraph',
      html: 'Het geëxporteerde project meet X en Y vanaf de linkerbovenhoek van elk uitgesneden frame. De afmetingen zijn positieve waarden in pixels.',
    },
    {
      type: 'tip',
      title: 'Controleer de gehele animatiereeks',
      html: 'Speel de volledige animatie af na het aanpassen van een frame om een vloeiende overgang te waarborgen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Gebruik het contactblad voor overleg in het team',
    },
    {
      type: 'paragraph',
      html: 'Het PNG-contactblad toont alle frames en hun kleurlagen op één afbeelding, ideaal voor overleg tussen ontwikkelaars en vormgevers.',
    },
    { type: 'paragraph', html: 'Een collisionvorm moet zowel de omtrek als het actiemoment volgen. Controleer start, actieve fase en herstel afzonderlijk en test bereik, prioriteit, terugslag en netwerkgedrag in het werkelijk geïntegreerde project.' },
  ],
  faq,
  bibliographyTitle: 'Referenties voor botsingsontwerp',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
