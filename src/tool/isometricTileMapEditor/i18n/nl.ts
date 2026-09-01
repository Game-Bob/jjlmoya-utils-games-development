import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'Editor voor isometrische tegelkaarten';
const description = 'Teken gelaagde ruitkaarten, stel de tegelgeometrie af en exporteer een isometrische levelschets als JSON of SVG.';
const faq = [
  { question: 'Wat is een isometrische tegelkaart?', answer: 'Een isometrische tegelkaart gebruikt een ruitvormig raster om driedimensionale ruimte in een tweedimensionale scène te suggereren. Kolommen en rijen beschrijven het grondvlak, terwijl lagen een hoogteverschuiving toevoegen.' },
  { question: 'Hoe plaats ik een tegel?', answer: 'Kies een tegel uit het palet, laat Tekenen actief, kies de actieve laag en klik op een ruit. Met de rechtermuisknop wis je een cel ook wanneer Tekenen actief is.' },
  { question: 'Wat verandert de laagdiepte?', answer: 'De laagdiepte is de verticale verschuiving op het scherm tussen gestapelde lagen. Verhoog haar voor een hogere trede en verlaag haar wanneer lagen dicht bij elkaar moeten blijven.' },
  { question: 'Kan ik de geëxporteerde SVG in een game-engine gebruiken?', answer: 'De SVG is een visuele referentie met de huidige ruiten en kleuren. JSON is beter om het logische raster in een engine opnieuw op te bouwen, omdat rijen, kolommen, lagen en tegelwaarden behouden blijven.' },
  { question: 'Maakt deze editor een productieklaar tileset?', answer: 'Nee. Hij plant een raster met lagen en exporteert een compacte kaartbeschrijving. Hij snijdt geen texturen, stelt geen botsingen in, kiest geen engine-sortering en garandeert geen eindweergave.' },
];
const howTo = [
  { name: 'Rastergeometrie instellen', text: 'Kies de breedte en hoogte van een tegel en stel daarna kolommen, rijen en lagen in. Gebruik de laagdiepte voor de verticale stap tussen niveaus.' },
  { name: 'Een tekenlaag kiezen', text: 'Selecteer een laag voordat je tekent. De actieve laag heeft een sterkere rand en andere zichtbare lagen blijven halftransparant voor ruimtelijke context.' },
  { name: 'De grond of structuur tekenen', text: 'Kies Gras, Steen, Water of Pad en klik op cellen. Wissel van palet wanneer de volgende cel een ander materiaal nodig heeft.' },
  { name: 'De kaart lokaal corrigeren', text: 'Gebruik Wissen of de rechtermuisknop om een tegel te verwijderen. Bij een wijziging van de afmetingen blijven cellen binnen de nieuwe grenzen behouden.' },
  { name: 'Het ontwerp exporteren', text: 'Gebruik JSON wanneer een ander hulpmiddel het raster opnieuw opbouwt. Gebruik SVG als snelle visuele referentie voor een ontwerpbespreking of levelschets.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'isometrische-tegelkaart-editor', title, description,
  ui: {
    controlsTitle: 'Kaartbediening', geometryTitle: 'Rastergeometrie', tileWidthLabel: 'Tegelbreedte', tileHeightLabel: 'Tegelhoogte', columnsLabel: 'Kolommen', rowsLabel: 'Rijen', layersLabel: 'Lagen', layerDepthLabel: 'Laagdiepte', toolsTitle: 'Tekenmodus', paintLabel: 'Tekenen', eraseLabel: 'Wissen', paletteTitle: 'Tegelpallet', grassLabel: 'Gras', stoneLabel: 'Steen', waterLabel: 'Water', pathLabel: 'Pad', layersTitle: 'Actieve laag', layerLabel: 'Laag', hideLayerLabel: 'Verbergen', showLayerLabel: 'Tonen', mapTitle: 'Isometrische kaart', mapHelp: 'Kies een tegel en laag en klik daarna op de ruiten. Met de rechtermuisknop wis je elke cel.', mapAriaLabel: 'Bewerkbare isometrische tegelkaart', summaryTitle: 'Kaartoverzicht', filledLabel: 'Gevulde cellen', coverageLabel: 'Dekking', activeLayerLabel: 'Actieve laag', selectedLabel: 'Geselecteerde tegel', emptyCellLabel: 'Leeg', cellLabel: 'Cel', clearLabel: 'Kaart wissen', resetLabel: 'Geometrie resetten', exportJsonLabel: 'JSON exporteren', exportSvgLabel: 'SVG exporteren', statusReady: 'Klaar om te tekenen', statusSaved: 'Lokaal opgeslagen', statusCleared: 'Kaart gewist', statusReset: 'Geometrie gereset', statusExported: 'Bestand geëxporteerd', statusPainted: 'Tegel geplaatst', statusErased: 'Tegel gewist', statusLayerHidden: 'Laag verborgen', statusLayerShown: 'Laag getoond', legendTitle: 'Kaartsleutel', legendEmpty: 'Lege cel', legendFilled: 'Getekende cel', modelNote: 'Deze editor beschrijft een logisch raster met lagen. Hij importeert geen tileset, berekent geen botsingen, configureert geen engine-specifieke sortering en garandeert geen uiteindelijke pixelpositie.', privacyDisclosure: 'Je kaart blijft in deze browser. Er worden geen kaartgegevens of telemetrie geüpload.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Plan ruimte en hoogte met een isometrisch raster' },
    { type: 'paragraph', html: 'Een isometrische kaart is nuttig wanneer een level leesbare grondposities en een gevoel van hoogte nodig heeft zonder een volledige 3D-scène te worden. Het ruitraster maakt beweging over rijen en kolommen zichtbaar, terwijl lagen bruggen, platforms, daken of gestapelde kamers kunnen schetsen.' },
    { type: 'paragraph', html: 'Deze editor houdt de geometrie expliciet. Tegelbreedte en -hoogte bepalen de ruit, kolommen en rijen bepalen het grondvlak en laagdiepte bepaalt hoe ver elk volgend niveau omhoog gaat. Cellen binnen de nieuwe kaartgrenzen blijven behouden wanneer je de afmetingen wijzigt.' },
    { type: 'title', level: 2, text: 'Maak in vijf stappen een bruikbare blockout' },
    { type: 'list', items: ['Stem de tegelverhoudingen af op de beeldtaal van het project.', 'Teken eerst een grondmateriaal zodat loopbare gebieden leesbaar blijven.', 'Gebruik lagen voor bruggen, daken en verhoogde platforms in plaats van hoogte alleen met kleur aan te geven.', 'Verberg bovenliggende lagen of schakel Wissen in om cellen eronder veilig te corrigeren.', 'Exporteer JSON voor reconstructie en SVG voor een visuele bespreking.'] },
    { type: 'title', level: 2, text: 'Lees rijen, kolommen en lagen afzonderlijk' },
    { type: 'paragraph', html: 'Rijen en kolommen geven de positie van een cel op het logische vlak aan en horen stabiel te blijven wanneer de visuele ruit verandert. Lagen vormen een tweede coördinaat: twee cellen kunnen dezelfde rij en kolom delen, maar op een andere hoogte liggen. Door die begrippen te scheiden wordt reconstructie in een engine eenvoudiger.' },
    { type: 'table', headers: ['Signaal', 'Betekenis', 'Volgende beslissing'], rows: [['Lage dekking', 'De meeste cellen zijn nog leeg.', 'Blokkeer eerst het speelbare oppervlak voordat je decoreert.'], ['Meerdere lagen in één kolom', 'De kaart bevat gestapelde ruimte.', 'Controleer of sortering en botsingen hoogtes onderscheiden.'], ['Zeer brede ruit', 'Horizontale verplaatsing overheerst.', 'Verklein de tegelbreedte of vergroot de referentieviewport.'], ['Zeer diepe laagstap', 'Hoogteverschillen vallen sterk op.', 'Gebruik minder lagen of controleer de game-assets.']] },
    { type: 'title', level: 2, text: 'Kies de juiste export voor de volgende taak' },
    { type: 'paragraph', html: 'JSON is de gestructureerde overdracht: geometrie, aantal lagen, tekenstatus en elke tegelwaarde blijven behouden. SVG is de visuele overdracht: gekleurde ruiten zijn bruikbaar in een ontwerpbespreking, taak of leveldocument. Geen van beide bevat een brontegelsysteem of enginemetadata.' },
    { type: 'tip', title: 'Wat deze blockout niet kan bewijzen', html: 'Een overtuigende ruitkaart bewijst niet dat sprites correct sorteren, personages tussen hoogtes kunnen bewegen of tegels naadloos aansluiten. Test echte assets, botsingen, de sorteeras en de camera in de doel-engine.' },
  ],
  faqTitle: 'Vragen over isometrische tegelkaarten', faq, bibliographyTitle: 'Referenties voor tegelkaarten', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
