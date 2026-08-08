import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'pixel-art-palett-bytare',
  title: 'Pixel Art Palettbytare',
  description: 'Minska sprites och spritesheets till klassiska konsolpaletter eller egna hex-färger direkt i webbläsaren.',
  ui: {
    uploadTitle: 'Släpp en sprite eller spritesheet',
    uploadHint: 'PNG, JPEG eller WebP bearbetas lokalt på din enhet',
    chooseImage: 'Välj bild',
    replaceImage: 'Ersätt bild',
    paletteTitle: 'Välj palett',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'NES-inspirerad',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Anpassade färger',
    customPaletteHint: 'Separera hex-värden med kommatecken, blanksteg eller radbrytningar.',
    applyCustomPalette: 'Använd palett',
    resetCustomPalette: 'Återställ',
    sourcePreview: 'Original',
    resultPreview: 'Minskat resultat',
    waitingForImage: 'Väntar på en bild',
    uploadToPreview: 'Ladda upp en bild för att förhandsgranska',
    resultEmpty: 'Dina original- och reducerade versioner visas sida vid sida.',
    downloadPng: 'Ladda ner PNG',
    downloadDisabled: 'Ladda upp en bild för att aktivera export.',
    colorCount: 'Källfärger',
    mappedCount: 'Använda färger',
    imageSize: 'Bildstorlek',
    paletteCount: 'palettfärger',
    preserveAlpha: 'Bevara transparens',
    zoomLabel: 'Zoom',
    processing: 'Mappar pixlar',
    invalidPalette: 'Lägg till minst en giltig hex-färg',
    invalidImage: 'Välj en PNG-, JPEG- eller WebP-bild',
    readyStatus: 'Klar',
    dropActive: 'Släpp för att ladda',
    mappedSummary: 'Mappade {source} källfärger till {mapped} palettfärger',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Omvandla en Fullfärgs Sprite till en Genomtänkt Retropalett',
    },
    {
      type: 'paragraph',
      html: 'En begränsad palett är mer än bara en teknisk begränsning. Den ger din sprite ett enhetligt färgspråk, gör att element i en scen hör ihop och för tankarna till den visuella karaktären hos en specifik konsol eller klassisk hårdvara. Denna webbläsarbaserade palettbytare låter dig jämföra originalbilden med en reducerad version medan du experimenterar med Game Boy, NES-inspirerade, PICO-8, Commodore 64, DawnBringer 16 och anpassade paletter.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Hur Färgomvandling till Närmaste Färg Fungerar',
    },
    {
      type: 'paragraph',
      html: 'Verktyget läser av de röda, gröna och blå kanalerna för varje synlig pixel och jämför färgen med varje färg i den valda paletten. Det väljer palettfärgen med det minsta kvadratiska RGB-avståndet och skriver ersättningsfärgen till en ny canvas-buffert. Alfakanalen hålls separat så att transparenta pixlar förblir transparenta och halvtransparenta kanter behåller sin ursprungliga opacitet när Bevara transparens är aktiverat.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Palettbegränsning',
          description: 'Varje källfärg ersätts med det närmaste tillgängliga färgprovet.',
          points: [
            'Snabbt och förutsägbart för sprites, ikoner, tiles och gränssnittselement',
            'Behåller ursprungliga mått och pixelpositioner exakt',
            'Gör det enkelt att kontrollera och granska en fastställd färgbudget',
          ],
        },
        {
          title: 'Palette Swapping',
          description: 'Samma bild kan mappas om till en annan noggrant utvald uppsättning färger.',
          points: [
            'Användbart för alternativa dräkter, miljöer och skadestatusar',
            'Anpassade hex-listor gör att du kan matcha din egen konstnärliga riktning',
            'Den nedladdade PNG-filen är redo att importeras direkt till din redigerare',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Välja Palett för Pixel Art',
    },
    {
      type: 'table',
      headers: ['Palett', 'Färger', 'Passar till', 'Att tänka på'],
      rows: [
        ['Game Boy', '4', 'Monokrom bärbar känsla och tydliga valörstudier', 'Litet valörindex kan smälta samman närliggande material'],
        ['NES-inspirerad', '16', 'Klassiska arkadsprites, karaktärer och tiles', 'Mycket ljusa färger kan dominera små detaljer'],
        ['PICO-8', '16', 'Modern pixel art med mättade färgaccentuer', 'Starkt mättade tonfall kräver medveten kontrast'],
        ['Commodore 64', '16', 'Mjuka retro-scener och klassisk datorgrafikestetik', 'Låg kontrast drar nytta av tydliga silhuetter'],
        ['DawnBringer 16', '16', 'Mångsidig handplockad palett för allmän pixel art', 'Färgramper kräver fortfarande en medveten ljusriktning'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktiskt Arbetsflöde för Spritesheets',
    },
    {
      type: 'paragraph',
      html: 'Börja med den största källbilden du kan redigera bekvämt och ladda upp den exporterade spriten eller spritesheetet här. Välj en förinställning för att bestämma en riktning eller klistra in en anpassad hex-lista. Granska båda ytorna med högre zoom för att leta efter förlorade ansiktsdrag, sammansmälta konturer eller dagrar. Om resultatet ser otydligt ut, prova en palett med större valörsteg eller lägg till en medveten accentfärg.',
    },
    {
      type: 'tip',
      title: 'Håll Paletten Medveten',
      html: 'En större färglista är inte automatiskt bättre. Börja med 4 till 16 färger, ge varje färg en bestämd uppgift och reservera de ljusaste värdena för fokuspunkter eller tydliga dagrar. Algoritmen för närmaste färg behåller pixelpositionerna, men kan inte avgöra vilka färger som ska bära upp den visuella hierarkin i din sprite.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Checklista för Export av Pixel Art',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Före Import av den Reducerade PNG filen',
      html: 'Kontrollera resultatet i 100 procent samt i spelets slutliga skala, se till att genomskinliga kanter förblir rena, kontrollera att viktiga silhuetter är läsbara och spara den ursprungliga källfilen bredvid exporten så att du kan justera paletten utan att börja om från början.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Färgkvantisering',
          definition: 'Processen att minska en stor mängd källfärger till en mindre, bestämd uppsättning.',
        },
        {
          term: 'Färgramp',
          definition: 'En ordnad sekvens av mörka, mellantoner och ljusa färger som används för att skugga en yta.',
        },
        {
          term: 'Indexerad palett',
          definition: 'En kompakt färgtabell där bildpixlar pekar på index i en gemensam lista istället för att lagra fullständiga färger upprepade gånger.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Laddas mina bilder upp till en server?',
      answer: 'Nej. Bilden avkodas på en canvas i din webbläsare, mappas lokalt med JavaScript och exporteras direkt som PNG. Verktyget har inget uppladdningssteg.',
    },
    {
      question: 'Kan jag använda min egen anpassade palett?',
      answer: 'Ja. Klistra in 6-siffriga eller 3-siffriga hex-koder i fältet Anpassade färger, separerade med kommatecken, blanksteg eller radbrytningar, och välj Använd palett.',
    },
    {
      question: 'Ändras storleken på min sprite eller mitt spritesheet?',
      answer: 'Nej. Utfilen behåller ursprunglig bredd, höjd, pixelpositioner och alfavärden när Bevara transparens är aktiverat.',
    },
    {
      question: 'Vilken algoritm används?',
      answer: 'Varje synlig pixel tilldelas den närmaste färgen i den valda paletten med hjälp av kvadratiskt euklidiskt avstånd i RGB-rummet. Det är snabbt, deterministiskt och enkelt att förhandsgranska, men använder inte dithering eller perceptuell Lab-färgkorrigering.',
    },
  ],
  howTo: [
    {
      name: 'Ladda sprite',
      text: 'Släpp en PNG-, JPEG- eller WebP-sprite eller spritesheet i arbetsområdet eller använd Välj bild.',
    },
    {
      name: 'Välj palett',
      text: 'Välj en klassisk förinställning eller ange dina egna hex-färger. Resultatet uppdateras omedelbart.',
    },
    {
      name: 'Jämför och exportera',
      text: 'Granska originalet och den reducerade bilden, justera zoomen och ladda ner resultatet som PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pixel Art Palettbytare',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Laddas mina bilder upp till en server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nej. Bilden bearbetas lokalt i webbläsaren och exporteras direkt som PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kan jag använda min egen anpassade palett?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Klistra in hex-koder i fältet Anpassade färger och välj Använd palett.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hur du minskar en sprite till en retropalett',
      step: [
        { '@type': 'HowToStep', name: 'Ladda sprite', text: 'Släpp en fil i arbetsområdet.' },
        { '@type': 'HowToStep', name: 'Välj palett', text: 'Välj förinställning eller ange hex-färger.' },
        { '@type': 'HowToStep', name: 'Jämför och exportera', text: 'Granska resultatet och ladda ner PNG.' },
      ],
    },
  ],
  bibliography: [
    {
      name: 'MDN Canvas API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API',
    },
    {
      name: 'Lospec Palette List',
      url: 'https://lospec.com/palette-list',
    },
    {
      name: 'W3C Portable Network Graphics Specification',
      url: 'https://www.w3.org/TR/png-3/',
    },
  ],
};
