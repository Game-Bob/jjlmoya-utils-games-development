import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IsometricTileMapEditorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const title = 'Editor för isometriska brickkartor';
const description = 'Rita lagerindelade kartor med diamantgrid, justera brickornas geometri och exportera en isometrisk nivåskiss som JSON eller SVG.';
const faq = [
  { question: 'Vad är en isometrisk brickkarta?', answer: 'En isometrisk brickkarta använder ett diamantformat rutnät för att antyda tredimensionellt utrymme i en tvådimensionell scen. Kolumner och rader beskriver markplanet, medan lager lägger till en höjdförskjutning.' },
  { question: 'Hur placerar jag en bricka?', answer: 'Välj en bricka i paletten, låt Rita vara valt, välj det aktiva lagret och klicka på en diamant. Högerklick tar bort en cell även när Rita är valt.' },
  { question: 'Vad ändrar lagerdjupet?', answer: 'Lagerdjupet är den vertikala förskjutningen på skärmen mellan staplade lager. Öka det för högre steg och minska det när lagren ska ligga närmare varandra.' },
  { question: 'Kan jag använda den exporterade SVG-filen i en spelmotor?', answer: 'SVG är en visuell referens med de aktuella diamanterna och färgerna. JSON passar bättre för att bygga upp det logiska rutnätet i en motor eftersom rader, kolumner, lager och brickvärden bevaras.' },
  { question: 'Skapar editorn ett produktionsklart tileset?', answer: 'Nej. Den planerar ett lagerindelat rutnät och exporterar en kompakt kartbeskrivning. Den skär inte texturer, ställer inte in kollisioner eller sortering och garanterar inte den slutliga renderingen.' },
];
const howTo = [
  { name: 'Ställ in rutnätets geometri', text: 'Välj brickans bredd och höjd och ange sedan antal kolumner, rader och lager. Använd lagerdjupet för det vertikala steget mellan nivåerna.' },
  { name: 'Välj ett ritlager', text: 'Välj ett lager innan du ritar. Det aktiva lagret har en tydligare ram och övriga synliga lager är genomskinliga så att rummet förblir begripligt.' },
  { name: 'Rita mark eller struktur', text: 'Välj Gräs, Sten, Vatten eller Väg och klicka på cellerna. Byt palett när nästa cell behöver ett annat material.' },
  { name: 'Korrigera kartan lokalt', text: 'Använd Radera eller högerklicka för att ta bort en bricka. Celler som fortfarande ryms i de nya gränserna bevaras när storleken ändras.' },
  { name: 'Exportera planeringsresultatet', text: 'Använd JSON när ett annat verktyg ska bygga upp rutnätet. Använd SVG som snabb visuell referens för designgranskning eller nivåskiss.' },
];
const softwareApplication: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any' };
const faqPage: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };

export const content: ToolLocaleContent<IsometricTileMapEditorUI> = {
  slug: 'isometrisk-rutkarta-editor', title, description,
  ui: {
    controlsTitle: 'Kartkontroller', geometryTitle: 'Rutnätets geometri', tileWidthLabel: 'Brickbredd', tileHeightLabel: 'Brickhöjd', columnsLabel: 'Kolumner', rowsLabel: 'Rader', layersLabel: 'Lager', layerDepthLabel: 'Lagerdjup', toolsTitle: 'Ritläge', paintLabel: 'Rita', eraseLabel: 'Radera', paletteTitle: 'Brickpalett', grassLabel: 'Gräs', stoneLabel: 'Sten', waterLabel: 'Vatten', pathLabel: 'Väg', layersTitle: 'Aktivt lager', layerLabel: 'Lager', hideLayerLabel: 'Dölj', showLayerLabel: 'Visa', mapTitle: 'Isometrisk karta', mapHelp: 'Välj en bricka och ett lager och klicka sedan på diamanterna. Högerklick tar bort en cell.', mapAriaLabel: 'Redigerbar isometrisk brickkarta', summaryTitle: 'Kartöversikt', filledLabel: 'Fyllda celler', coverageLabel: 'Täckning', activeLayerLabel: 'Aktivt lager', selectedLabel: 'Vald bricka', emptyCellLabel: 'Tom', cellLabel: 'Cell', clearLabel: 'Rensa karta', resetLabel: 'Återställ geometri', exportJsonLabel: 'Exportera JSON', exportSvgLabel: 'Exportera SVG', statusReady: 'Klar att rita', statusSaved: 'Sparad lokalt', statusCleared: 'Kartan rensad', statusReset: 'Geometrin återställd', statusExported: 'Filen exporterad', statusPainted: 'Bricka placerad', statusErased: 'Bricka raderad', statusLayerHidden: 'Lagret dolt', statusLayerShown: 'Lagret visas', legendTitle: 'Kartförklaring', legendEmpty: 'Tom cell', legendFilled: 'Ritad cell', modelNote: 'Editorn beskriver ett logiskt lagerindelat rutnät. Den importerar inget tileset, beräknar inga kollisioner, ställer inte in motorspecifik sortering och garanterar inte slutlig pixelplacering.', privacyDisclosure: 'Din karta stannar i den här webbläsaren. Inga kartdata eller telemetri laddas upp.',
  },
  seo: [
    { type: 'title', level: 2, text: 'Planera utrymme och höjd med ett isometriskt rutnät' },
    { type: 'paragraph', html: 'En isometrisk karta är användbar när en nivå behöver tydliga markpositioner och en känsla av höjd utan att bli en fullständig 3D-scen. Diamantrutnätet gör rörelse över rader och kolumner synlig, medan lager kan skissa broar, plattformar, tak eller staplade rum.' },
    { type: 'paragraph', html: 'Den här editorn håller geometrin tydlig. Brickans bredd och höjd styr diamanten, kolumner och rader styr markytan och lagerdjupet styr hur långt varje nivå flyttas uppåt på skärmen. Celler inom de nya gränserna bevaras när måtten ändras.' },
    { type: 'title', level: 2, text: 'Bygg en användbar blockout i fem steg' },
    { type: 'list', items: ['Anpassa brickornas proportioner till projektets visuella språk.', 'Rita ett markmaterial först så att gångbara områden förblir tydliga.', 'Använd lager för broar, tak och upphöjda plattformar i stället för att visa höjd enbart med färg.', 'Dölj de övre lagren eller byt till Radera för att säkert korrigera celler under dem.', 'Exportera JSON för återuppbyggnad och SVG för visuell granskning.'] },
    { type: 'title', level: 2, text: 'Läs rader, kolumner och lager var för sig' },
    { type: 'paragraph', html: 'Rader och kolumner beskriver var en cell finns på det logiska planet och bör förbli stabila när diamantens storlek ändras. Lager är en andra koordinat: två celler kan dela rad och kolumn men ligga på olika höjd. Den uppdelningen gör kartan enklare att återskapa i en motor.' },
    { type: 'table', headers: ['Signal', 'Betydelse', 'Nästa beslut'], rows: [['Låg täckning', 'De flesta celler är fortfarande tomma.', 'Bestäm den spelbara ytan innan du dekorerar.'], ['Flera lager i samma kolumn', 'Kartan innehåller staplat utrymme.', 'Kontrollera att sortering och kollisioner skiljer höjderna åt.'], ['Mycket bred diamant', 'Horisontell förflyttning dominerar rutnätet.', 'Minska brickbredden eller öka referensvyn.'], ['Mycket djupt lagersteg', 'Höjdskillnaderna syns kraftigt.', 'Använd färre lager eller kontrollera spelgrafiken.']] },
    { type: 'title', level: 2, text: 'Välj rätt export för nästa uppgift' },
    { type: 'paragraph', html: 'JSON är den strukturerade överlämningen: den bevarar geometrin, antalet lager, ritläget och varje brickvärde. SVG är den visuella överlämningen: färgade diamanter passar i en designgranskning, uppgift eller nivåskiss. Ingen export innehåller ett källtileset eller motormetadata.' },
    { type: 'tip', title: 'Det här kan blockouten inte bevisa', html: 'En övertygande diamantkarta bevisar inte att sprites sorteras rätt, att figurer kan röra sig mellan höjder eller att ett tileset ansluter utan skarvar. Testa riktiga assets, kollisioner, sorteringsaxel och kamera i målmotorn.' },
  ],
  faqTitle: 'Frågor om isometriska brickkartor', faq, bibliographyTitle: 'Referenser för brickkartor', bibliography: bibliographyEntries, howTo, schemas: [softwareApplication, faqPage, howToSchema],
};
