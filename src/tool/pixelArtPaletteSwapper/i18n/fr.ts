import type { ToolLocaleContent } from '../../../types';
import type { PixelArtPaletteSwapperUI } from '../ui';

export const content: ToolLocaleContent<PixelArtPaletteSwapperUI> = {
  slug: 'changeur-palette-pixel-art',
  title: 'Changeur de Palette Pixel Art',
  description: 'Réduisez vos sprites et feuilles de sprites aux palettes de consoles classiques ou à un ensemble personnalisé de couleurs hexadécimales directement dans votre navigateur.',
  ui: {
    uploadTitle: 'Déposez un sprite ou une feuille de sprites',
    uploadHint: 'PNG, JPEG ou WebP traités directement sur votre appareil',
    chooseImage: 'Choisir une image',
    replaceImage: 'Remplacer l image',
    paletteTitle: 'Choisir une palette',
    gameBoyPalette: 'Game Boy',
    nesPalette: 'Inspirée de la NES',
    pico8Palette: 'PICO-8',
    commodore64Palette: 'Commodore 64',
    dawnBringerPalette: 'DawnBringer 16',
    customPalette: 'Couleurs personnalisées',
    customPaletteHint: 'Séparez les valeurs hexadécimales par des virgules, espaces ou sauts de ligne.',
    applyCustomPalette: 'Appliquer la palette',
    resetCustomPalette: 'Réinitialiser',
    sourcePreview: 'Original',
    resultPreview: 'Résultat réduit',
    waitingForImage: 'En attente d une image',
    uploadToPreview: 'Importez une image pour l afficher',
    resultEmpty: 'Vos versions originale et réduite s afficheront côte à côte.',
    downloadPng: 'Télécharger le PNG',
    downloadDisabled: 'Importez une image pour activer l exportation.',
    colorCount: 'Couleurs d origine',
    mappedCount: 'Couleurs utilisées',
    imageSize: 'Taille de l image',
    paletteCount: 'couleurs de palette',
    preserveAlpha: 'Conserver la transparence',
    zoomLabel: 'Zoom',
    processing: 'Conversion des pixels',
    invalidPalette: 'Ajoutez au moins une couleur hexadécimale valide',
    invalidImage: 'Choisissez une image PNG, JPEG ou WebP',
    readyStatus: 'Prêt',
    dropActive: 'Relâchez pour charger',
    mappedSummary: '{source} couleurs d origine réduites à {mapped} couleurs de palette',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Transformez un Sprite Couleur en une Palette Retro Délibérée',
    },
    {
      type: 'paragraph',
      html: 'Une palette limitée est bien plus qu une contrainte technique. Elle donne au sprite un vocabulaire de couleurs cohérent, permet aux éléments d une scène de former un tout harmonieux et évoque le caractère visuel d une console ou d une plate-forme rétro spécifique. Ce sélecteur de palette en ligne vous permet de comparer l image d origine avec sa version réduite tout en expérimentant les palettes Game Boy, NES, PICO-8, Commodore 64, DawnBringer 16 ou vos propres sélections.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Fonctionnement de la Réduction par Couleur la Plus Proche',
    },
    {
      type: 'paragraph',
      html: 'L outil analyse les canaux rouge, vert et bleu de chaque pixel visible et compare cette couleur avec chaque entrée de la palette sélectionnée. Il choisit la teinte ayant la plus petite distance RGB au carré, puis écrit la couleur de remplacement dans un nouveau tampon de canevas. Le canal alpha est traité séparément afin que les pixels transparents le restent et que les bords semi-transparents conservent leur opacité d origine lorsque l option Conserver la transparence est activée.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Réduction de palette',
          description: 'Chaque couleur d origine est remplacée par la nuance disponible la plus proche.',
          points: [
            'Rapide et prévisible pour les sprites, icônes, tuiles et éléments d interface',
            'Conserve scrupuleusement les dimensions et les positions des pixels d origine',
            'Facilite le contrôle et la révision d un budget de couleurs prédéfini',
          ],
        },
        {
          title: 'Palette Swapping',
          description: 'Le même visuel peut être réattribué à un autre ensemble de couleurs soigneusement choisi.',
          points: [
            'Utile pour créer des tenues alternatives, des variations de biomes ou des états de dégâts',
            'Les listes hex personnalisées s adaptent parfaitement à votre propre direction artistique',
            'Le PNG téléchargé est immédiatement prêt à être réimporté dans votre éditeur',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Choisir une Palette pour le Pixel Art',
    },
    {
      type: 'table',
      headers: ['Palette', 'Couleurs', 'Utilisation recommandée', 'Points d attention'],
      rows: [
        ['Game Boy', '4', 'Style monochrome console portable et études de valeurs', 'La faible plage de valeurs peut fusionner des matériaux proches'],
        ['Inspirée de la NES', '16', 'Sprites arcade expressifs, personnages et tuiles', 'Les couleurs très vives peuvent écraser les détails fins'],
        ['PICO-8', '16', 'Pixel art moderne avec des accents saturés', 'Les teintes très saturées nécessitent un contraste délibéré'],
        ['Commodore 64', '16', 'Scènes rétro douces et esthétique micro-ordinateur', 'Le faible contraste gagne à utiliser des silhouettes claires'],
        ['DawnBringer 16', '16', 'Palette polyvalente sélectionnée pour le pixel art général', 'Les rampes de couleurs nécessitent toujours une direction de lumière claire'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Flux de Travail Pratique pour Feuilles de Sprites',
    },
    {
      type: 'paragraph',
      html: 'Commencez par le visuel le plus grand que vous pouvez éditer confortablement, puis importez ici le sprite ou la feuille de sprites exportée. Choisissez un préréglage pour définir une direction visuelle ou collez une liste hex personnalisée. Inspectez les deux canevas à un niveau de zoom élevé pour repérer la perte de traits du visage, les contours fusionnés ou les éclats de lumière qui ne se détachent plus. Si le résultat manque de clarté, essayez une palette avec des écarts de valeur plus marqués ou ajoutez une couleur d accentuation ciblée.',
    },
    {
      type: 'tip',
      title: 'Garder une Palette Intentionnelle',
      html: 'Une liste de couleurs plus vaste n est pas automatiquement meilleure. Commencez avec 4 à 16 couleurs, attribuez un rôle précis à chaque teinte et réservez les valeurs les plus lumineuses aux points d intérêt ou aux reflets lisibles. L algorithme de la couleur la plus proche préserve la position des pixels, mais ne peut pas décider des couleurs qui doivent structurer la hiérarchie visuelle de votre sprite.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Liste de Contrôle pour l Exportation en Pixel Art',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Avant d Importer le Fichier PNG Réduit',
      html: 'Vérifiez le résultat à l échelle 100% ainsi qu à l échelle finale du jeu, confirmez que les contours transparents restent nets, assurez-vous de la lisibilité des silhouettes importantes et conservez le fichier source d origine à côté de l export pour ajuster la palette sans repartir de zéro.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Quantification de couleur',
          definition: 'Le processus consistant à réduire un large ensemble de couleurs d origine à un jeu restreint et défini.',
        },
        {
          term: 'Rampe de couleur',
          definition: 'Une suite dégradée et ordonnée de teintes sombres, moyennes et claires servant à ombrer un volume ou une surface.',
        },
        {
          term: 'Palette indexée',
          definition: 'Une table de couleurs compacte dans laquelle les pixels font référence aux entrées d une liste partagée au lieu de stocker des valeurs complètes.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Mes images sont-elles envoyées sur un serveur ?',
      answer: 'Non. L image est décodée dans votre navigateur sur un canevas, convertie localement en JavaScript et exportée directement en PNG. L outil ne comporte aucune étape de téléversement.',
    },
    {
      question: 'Puis-je utiliser ma propre palette ?',
      answer: 'Oui. Collez des codes hexadécimaux à 6 ou 3 chiffres dans le champ Couleurs personnalisées, séparés par des virgules, des espaces ou des sauts de ligne, puis choisissez Appliquer la palette.',
    },
    {
      question: 'La taille de mon sprite est-elle modifiée ?',
      answer: 'Non. Le fichier généré conserve la largeur, la hauteur, la position des pixels et les valeurs alpha d origine lorsque l option Conserver la transparence est active.',
    },
    {
      question: 'Quel algorithme est utilisé ?',
      answer: 'Chaque pixel visible est attribué à la couleur la plus proche de la palette sélectionnée selon la distance euclidienne au carré dans l espace RGB. C est une méthode rapide, déterministe et facile à prévisualiser, qui n applique aucun tramage ni correction perceptuelle Lab.',
    },
  ],
  howTo: [
    {
      name: 'Charger un sprite',
      text: 'Déposez un sprite ou une feuille de sprites au format PNG, JPEG ou WebP dans l espace de travail ou cliquez sur Choisir une image.',
    },
    {
      name: 'Sélectionner une palette',
      text: 'Choisissez un préréglage classique ou saisissez vos propres couleurs hexadécimales. Le résultat se met à jour immédiatement.',
    },
    {
      name: 'Comparer et exporter',
      text: 'Inspectez les canevas original et réduit, ajustez le zoom de prévisualisation et téléchargez le résultat au format PNG.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Changeur de Palette Pixel Art',
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
          name: 'Mes images sont-elles envoyées sur un serveur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. L image est traitée localement dans le navigateur et exportée directement au format PNG.',
          },
        },
        {
          '@type': 'Question',
          name: 'Puis-je utiliser ma propre palette ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Saisissez vos codes hexadécimaux et appliquez la palette.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment réduire un sprite à une palette rétro',
      step: [
        { '@type': 'HowToStep', name: 'Charger un sprite', text: 'Déposez un fichier dans l espace de travail.' },
        { '@type': 'HowToStep', name: 'Sélectionner une palette', text: 'Choisissez un préréglage ou saisissez vos couleurs.' },
        { '@type': 'HowToStep', name: 'Comparer et exporter', text: 'Inspectez le résultat et téléchargez le fichier PNG.' },
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
