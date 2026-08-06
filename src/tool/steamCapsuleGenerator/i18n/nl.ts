import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'steam-capsule-maken',
  title: 'Steam capsulegenerator',
  description: 'Maak vier Steam voorbeelden vanuit één masterafbeelding, stel het brandpunt in, controleer veilige zones en download lokaal PNG of ZIP.',
  ui: { uploadTitle: 'Zet je masterillustratie neer', uploadHint: 'Eén afbeelding met hoge resolutie wordt direct in de browser een complete set Steam voorbeelden.', chooseFile: 'Illustratie kiezen', minimumSize: 'Minimale grootte', supportedFormats: 'PNG, JPEG of WebP', invalidImage: 'Kies een afbeelding van minstens 1920 bij 1080 pixels.', sourcePreview: 'Masterillustratie', focalPoint: 'Brandpunt', focalHint: 'Klik op de illustratie of gebruik de schuiven zodat het belangrijkste onderwerp in elke uitsnede blijft.', horizontalFocus: 'Horizontaal', verticalFocus: 'Verticaal', resetFocus: 'Brandpunt centreren', outputPreview: 'Steam uitvoerset', safeZone: 'Veilige zone', dimensions: 'pixels', downloadPng: 'PNG', downloadZip: 'ZIP downloaden', buildingZip: 'Lokale ZIP wordt gemaakt...', zipReady: 'Steam capsules klaar', localOnly: 'Privacy voorop. Je illustratie blijft in deze browser.', headerCapsule: 'Header capsule', mainCapsule: 'Hoofdcapsule', verticalCapsule: 'Verticale capsule', communityIcon: 'Community pictogram', ready: 'Klaar', downloadError: 'Het archief kon niet worden gemaakt. Probeer de PNG knoppen.', },
  seo: [
    { type: 'title', text: 'Maak een samenhangende Steam capsuleset uit één afbeelding', level: 2 },
    { type: 'paragraph', html: 'Een illustratie kan breed sterk zijn en in een verticale uitsnede het personage verliezen. Deze tool toont vier uitsneden uit dezelfde master: header 460 bij 215, hoofdbeeld 616 bij 353, verticaal 374 bij 448 en een vierkant community pictogram van 184 bij 184 pixels. Met het brandpunt bepaal je welk deel van de compositie zichtbaar blijft.' },
    { type: 'paragraph', html: 'De afbeelding wordt lokaal met canvas verwerkt. Er wordt niets geüpload en een account is niet nodig. Verplaats de markering en alle voorbeelden worden bijgewerkt, zodat logo, gezicht, personage en contrast vóór export gecontroleerd kunnen worden.' },
    { type: 'title', text: 'Een praktische werkwijze voor gamekunst', level: 2 },
    { type: 'list', items: ['Begin met een master van minimaal 1920 bij 1080 pixels.', 'Plaats de markering op het onderwerp, niet altijd in het geometrische midden.', 'Bekijk eerst de verticale en vierkante voorbeelden.', 'Gebruik de veilige zones als marge en controleer de actuele Steamworks sjablonen.'] },
    { type: 'paragraph', html: 'Veilige zones zijn compositierichtlijnen en geen garantie voor elke Steam interface. Houd logo\'s en titels weg van drukke randen en lees de Valve regels voor tekst op capsules na.' },
    { type: 'tip', html: 'Bewaar een master met ruimte rond het onderwerp. Als een uitsnede een andere logopositie nodig heeft, pas dan de bron aan en genereer de set opnieuw.' },
  ],
  faq: [
    { question: 'Verlaat mijn afbeelding mijn apparaat?', answer: 'Nee. De afbeelding wordt in de browser gelezen en getekend. Er is geen upload of account.' },
    { question: 'Welke masterafbeelding gebruik ik?', answer: 'PNG, JPEG of WebP van minimaal 1920 bij 1080 pixels geeft voldoende ruimte.' },
    { question: 'Wat verandert het brandpunt?', answer: 'Het verschuift de bronuitsnede voor alle uitvoer en beschermt het belangrijkste onderwerp.' },
    { question: 'Zijn de veilige zones officieel?', answer: 'Het zijn praktische hulplijnen. Vergelijk de bestanden altijd met de huidige Steamworks sjablonen.' },
  ],
  howTo: [
    { name: 'Kies een master', text: 'Zet een PNG, JPEG of WebP van minimaal 1920 bij 1080 pixels neer.' },
    { name: 'Stel het brandpunt in', text: 'Klik in het voorbeeld of beweeg de horizontale en verticale schuif.' },
    { name: 'Controleer vier uitsneden', text: 'Bekijk header, hoofdbeeld, verticaal en vierkant pictogram.' },
    { name: 'Download de set', text: 'Download losse PNG\'s of maak lokaal een ZIP.' },
  ],
});
