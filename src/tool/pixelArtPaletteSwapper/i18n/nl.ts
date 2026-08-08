import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'pixel-art-palet-wisselaar',
  title: 'Pixel Art Palet Wisselaar',
  description: 'Reduceer sprites en spritesheets tot klassieke consolepaletten of een aangepaste lijst hex-kleuren direct in je browser.',
  ui: {
    uploadTitle: 'Sleep een sprite of spritesheet',
    uploadHint: 'PNG, JPEG of WebP worden lokaal verwerkt',
    chooseImage: 'Afbeelding kiezen',
    replaceImage: 'Afbeelding vervangen',
    paletteTitle: 'Kies palet',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'Geïnspireerd op NES',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Aangepaste kleuren',
    customPaletteHint: 'Scheid hex-waarden met komma s, spaties of nieuwe regels.',
    applyCustomPalette: 'Palet toepassen',
    resetCustomPalette: 'Herstellen',
    sourcePreview: 'Origineel',
    resultPreview: 'Gereduceerd resultaat',
    waitingForImage: 'Wachten op een afbeelding',
    uploadToPreview: 'Upload een afbeelding voor een voorbeeld',
    resultEmpty: 'Originele en gereduceerde versie verschijnen naast elkaar.',
    downloadPng: 'PNG downloaden',
    downloadDisabled: 'Upload een afbeelding om te exporteren.',
    colorCount: 'Bronkleuren',
    mappedCount: 'Gebruikte kleuren',
    imageSize: 'Afbeeldingsgrootte',
    paletteCount: 'paletkleuren',
    preserveAlpha: 'Transparantie behouden',
    zoomLabel: 'Zoom',
    processing: 'Pixels toewijzen',
    invalidPalette: 'Voeg minimaal één geldige hex-kleur toe',
    invalidImage: 'Kies een PNG-, JPEG- of WebP-afbeelding',
    readyStatus: 'Klaar',
    dropActive: 'Loslaten om te laden',
    mappedSummary: '{source} bronkleuren omgezet naar {mapped} paletkleuren',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Zet een Volledig Gekleurde Sprite om naar een Doordacht Retropalet',
    },
    {
      type: 'paragraph',
      html: 'Een beperkt kleurenpalet is meer dan een technische beperking. Het geeft een sprite een herkenbare kleurentaal, zorgt ervoor dat elementen in een scène als één geheel voelen en roept het visuele karakter van een specifieke console of retro-hardware op. Met deze online paletwisselaar kun je het originele beeld vergelijken met de gereduceerde versie terwijl je experimenteert met Game Boy, NES-geïnspireerde, PICO-8, Commodore 64, DawnBringer 16 en eigen paletten.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Hoe Conversie via Dichtstbijzijnde Kleur Werkt',
    },
    {
      type: 'paragraph',
      html: 'De tool leest de rood-, groen- en blauwkanalen voor elke zichtbare pixel en vergelijkt die kleur met elke kleur in het gekozen palet. Het kiest de paletwaarde met de kleinste kwadratische RGB-afstand en schrijft de vervangende kleur naar een nieuwe canvasbuffer. Het alfakanaal blijft gescheiden, zodat transparante pixels transparant blijven en half-transparante randen hun originele dekking behouden wanneer Transparantie behouden is ingeschakeld.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Paletbeperking',
          description: 'Elke bronkleur wordt vervangen door de dichtstbijzijnde beschikbare kleurwaarde.',
          points: [
            'Snel en voorspelbaar voor sprites, iconen, tegels en interface-elementen',
            'Behoudt de originele afmetingen en pixelposities exact',
            'Maakt het eenvoudig om een vastgesteld kleurenbudget te controleren',
          ],
        },
        {
          title: 'Palette Swapping',
          description: 'Hetzelfde artwork kan worden omgezet naar een andere zorgvuldig gekozen set kleuren.',
          points: [
            'Handig voor alternatieve outfits, omgevingen en schade-statussen',
            'Aangepaste hex-lijsten sluiten naadloos aan op je eigen artistieke richting',
            'Het gedownloade PNG-bestand kan direct weer in je editor worden geïmporteerd',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Een Palet Kiezen voor Pixel Art',
    },
    {
      type: 'table',
      headers: ['Palet', 'Kleuren', 'Geschikt voor', 'Let op'],
      rows: [
        ['Game Boy', '4', 'Monochroom handheld-gevoel en duidelijke contraststudies', 'Een klein bereik kan nabijgelegen materialen samenvoegen'],
        ['Geïnspireerd op NES', '16', 'Karakteristieke arcade-sprites, personages en tegels', 'Zeer felle kleuren kunnen kleine details overheersen'],
        ['PICO-8', '16', 'Moderne pixel art met volle, verzadigde accenten', 'Sterk verzadigde tinten vragen om bewust contrast'],
        ['Commodore 64', '16', 'Zachte retro-scènes en klassieke computergame-esthetiek', 'Laag contrast werkt het beste met duidelijke silhouetten'],
        ['DawnBringer 16', '16', 'Veelzijdig handgekozen palet voor algemene pixel art', 'Kleurverlopen hebben nog steeds een duidelijke lichtrichting nodig'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Praktische Werkwijze voor Spritesheets',
    },
    {
      type: 'paragraph',
      html: 'Begin met het grootste bronbestand dat je prettig kunt bewerken en upload de geëxporteerde sprite of spritesheet hier. Kies een preset om een richting te bepalen of plak een eigen hex-lijst. Inspecteer beide schermen op een hogere zoom om te controleren op verloren gelaatstrekken, samengevoegde omtrekken of highlights. Als het resultaat wazig oogt, probeer dan een palet met grotere contraststappen of voeg één bewuste accentkleur toe.',
    },
    {
      type: 'tip',
      title: 'Houd het Palet Doordacht',
      html: 'Een grotere kleurenlijst is niet automatisch beter. Begin met 4 tot 16 kleuren, geef elke kleur een duidelijke functie en bewaar de brightste waarden voor focuspunten of goed leesbare accenten. Het algoritme behoudt de pixelposities, maar kan niet bepalen welke kleuren de visuele hiërarchie van je sprite moeten dragen.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Export-Checklist voor Pixel Art',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Vóór het Importeren van het Gereduceerde PNG bestand',
      html: 'Controleer het resultaat op 100 procent en op de uiteindelijke schaal in de game, zorg dat transparante randen schoon blijven, controleer of belangrijke silhouetten goed leesbaar blijven en bewaar het originele bronbestand naast de export om het palet aan te passen zonder opnieuw te hoeven beginnen.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Kleurkwantisatie',
          definition: 'Het proces van het reduceren van een grote set bronkleuren tot een kleinere, vastgestelde set.',
        },
        {
          term: 'Kleurgradiënt (Ramp)',
          definition: 'Een geordende reeks van donkere, middelste en lichte tinten om een oppervlak te schaduwen.',
        },
        {
          term: 'Geïndexeerd palet',
          definition: 'Een compacte kleurentabel waarin pixels verwijzen naar indexen in een lijst in plaats van volledige kleurwaarden op te slaan.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Worden mijn afbeeldingen geüpload naar een server?',
      answer: 'Nee. De afbeelding wordt in je browser op een canvas gedecodeerd, lokaal verwerkt met JavaScript en direct geëxporteerd als PNG. De tool heeft geen uploadstap.',
    },
    {
      question: 'Kan ik mijn eigen palet gebruiken?',
      answer: 'Ja. Plak 6-cijferige of 3-cijferige hex-kleuren in het veld Aangepaste kleuren, gescheiden door komma s, spaties of nieuwe regels, en kies Palet toepassen.',
    },
    {
      question: 'Wordt de grootte van mijn sprite aangepast?',
      answer: 'Nee. De uitvoer behoudt de originele breedte, hoogte, pixelposities en alfawaarden wanneer Transparantie behouden is ingeschakeld.',
    },
    {
      question: 'Welk algoritme wordt er gebruikt?',
      answer: 'Elke zichtbare pixel wordt toegewezen aan de dichtstbijzijnde kleur in het gekozen palet via kwadratische euclidische afstand in RGB-ruimte. Het is snel, deterministisch en eenvoudig te bekijken, maar gebruikt geen dithering of perceptuele Lab-kleurcorrectie.',
    },
  ],
  howTo: [
    {
      name: 'Sprite laden',
      text: 'Sleep een PNG-, JPEG- of WebP-sprite of spritesheet naar het werkgebied of gebruik Afbeelding kiezen.',
    },
    {
      name: 'Palet kiezen',
      text: 'Kies een klassieke preset of voer je eigen hex-kleuren in. Het resultaat wordt direct bijgewerkt.',
    },
    {
      name: 'Vergelijken en exporteren',
      text: 'Inspecteer het originele en het gereduceerde scherm, pas de zoom aan en download het resultaat als PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pixel Art Palet Wisselaar',
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
          name: 'Worden mijn afbeeldingen geüpload naar een server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nee. De afbeelding wordt lokaal verwerkt in de browser en direct als PNG geëxporteerd.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kan ik mijn eigen palet gebruiken?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Plak hex-kleuren in het veld Aangepaste kleuren en kies Palet toepassen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe reduceer je een sprite naar een retropalet',
      step: [
        { '@type': 'HowToStep', name: 'Sprite laden', text: 'Sleep een bestand naar het werkgebied.' },
        { '@type': 'HowToStep', name: 'Palet kiezen', text: 'Kies een preset of voer hex-kleuren in.' },
        { '@type': 'HowToStep', name: 'Vergelijken en exporteren', text: 'Inspecteer het resultaat en download de PNG.' },
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
