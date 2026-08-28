import type { ToolLocaleContent } from '../../../types';
import type { SpriteSheetPackerUI } from '../ui';

export const content: ToolLocaleContent<SpriteSheetPackerUI> = {
  slug: 'empaqueteur-et-extracteur-de-sprite-sheets',
  title: 'Empaqueteur et Extracteur de Sprite Sheets',
  description:
    'Optimisez les performances de vos jeux 2D en regroupant vos images d animation en atlases de textures ou en extrayant des sprites individuels.',
  ui: {
    packerTab: 'Studio d Empaquetage',
    extractorTab: 'Extracteur de Sprites',
    dropZoneTitle: 'Glisser et Déposer vos Images',
    dropZoneSubtitle: 'Téléchargez vos fichiers PNG ou WebP pour générer un atlas de textures optimisé',
    selectFilesButton: 'Sélectionner des Images',
    clearAllButton: 'Vider l Espace de Travail',
    downloadZipButton: 'Télécharger le Paquet (ZIP)',
    copyJsonButton: 'Copier le JSON d Atlas',
    downloadSheetPngButton: 'Télécharger la Texture PNG',
    paddingLabel: 'Espacement entre Frames (px)',
    borderExtrusionLabel: 'Extrusion des Bords (px)',
    maxTextureSizeLabel: 'Dimension Maximale',
    powerOfTwoLabel: 'Forcer la Puissance de 2 (POT)',
    trimTransparencyLabel: 'Rogner la Transparence',
    exportFormatLabel: 'Format du Moteur Cible',
    presetPixelArt: 'Préréglage Pixel Art 16x16',
    presetHdUi: 'Préréglage Atlas HD UI 1024',
    presetMobile: 'Préréglage Mobile WebGL 2048',
    formatGenericHash: 'JSON Générique (Hash)',
    formatGenericArray: 'JSON Générique (Array)',
    formatUnity: 'Moteur Unity 2D',
    formatGodot: 'Moteur Godot 2D',
    formatPhaser: 'Moteur Phaser / PixiJS',
    formatCss: 'CSS Web Frontend',
    previewTitle: 'Aperçu de l Atlas de Texture',
    efficiencyBadge: 'Efficacité de Texture',
    drawCallsBadge: 'Appels de Rendu Réduits',
    totalFramesBadge: 'Frames Empaquetées',
    textureSizeBadge: 'Dimension d Atlas',
    flipbookTitle: 'Lecteur d Animation Flipbook',
    flipbookFpsLabel: 'Vitesse d Animation (FPS)',
    playAnimation: 'Jouer la Séquence',
    pauseAnimation: 'Mettre en Pause',
    extractorModeGrid: 'Découpage par Grille Fixe',
    extractorModeAlpha: 'Découpage Automatique par Canal Alpha',
    frameWidthLabel: 'Largeur de Frame (px)',
    frameHeightLabel: 'Hauteur de Frame (px)',
    marginLabel: 'Marge Extérieure (px)',
    spacingLabel: 'Espacement de Grille (px)',
    extractFramesButton: 'Extraire les Images',
    extractedCountLabel: 'Sprites Extraits',
    codeSnippetTitle: 'Code d Intégration du Moteur',
    copySnippetButton: 'Copier le Code',
    copiedToast: 'Copié dans le Presse-papier',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Comprendre le Batching GPU et l Optimisation des Appels de Rendu',
    },
    {
      type: 'paragraph',
      html: 'Dans les moteurs de jeu 2D modernes, chaque image affichée nécessite une commande envoyée par le processeur à la carte graphique GPU.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '95%', label: 'Réduction des Appels de Rendu' },
        { value: '4x', label: 'Traitement GPU Plus Rapide' },
        { value: '60 FPS', label: 'Objectif Stable sur Mobile' },
        { value: '100%', label: 'Traitement Local Navigateur' },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comparaison entre Fichiers Séparés et Atlas de Textures',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fichiers d Images Séparés',
          description: 'Fichiers PNG ou WebP stockés individuellement',
          points: [
            'Génère un appel de rendu distinct pour chaque frame à l écran',
            'Entraîne des changements de contexte fréquents sur la carte graphique',
            'Augmente le nombre de requêtes HTTP pour les jeux web',
            'Vitesse d affichage réduite sur les appareils mobiles',
          ],
        },
        {
          title: 'Atlas de Texture Empaqueté',
          description: 'Image composite unique liée à un fichier JSON',
          points: [
            'Regroupe des centaines de sprites en un seul appel de rendu GPU',
            'Maximise la bande passante mémoire et le débit de rendu graphique',
            'Réduit les requêtes de fichiers en regroupant image et métadonnées',
            'Garantit une animation fluide sur toutes les plateformes',
          ],
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Mathematiques du Mouvement Subpixel et Extrusion des Bords',
    },
    {
      type: 'paragraph',
      html: 'Lors du rendu de sprites avec un mouvement de caméra fluide, les bords des images peuvent bavarder les uns sur les autres.',
    },
    {
      type: 'tip',
      title: 'Stratégie d Extrusion des Bords',
      html: 'Ajoutez 1 à 2 pixels d extrusion de bord pour éliminer tout artefact lors du mouvement de caméra.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Directives de Tailles de Textures pour Mobiles et PC',
    },
    {
      type: 'table',
      headers: ['Plateforme Cible', 'Taille Maximale Recommandée', 'Exigence Puissance de 2', 'Profil Mémoire'],
      rows: [
        ['Navigateurs Mobiles', '2048 x 2048 px', 'Recommandé', 'Bande Passante Basse'],
        ['PC / Console de Jeu', '4096 x 4096 px', 'Optionnel', 'Capacité GPU Élevée'],
        ['Consoles Portables Retro', '1024 x 1024 px', 'Obligatoire', 'Limites VRAM Strictes'],
      ],
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Garantit une compatibilité totale avec les anciens pilotes et WebGL 1.0',
          con: 'Peut laisser un espace transparent inutilisé avec peu de sprites',
        },
        {
          pro: 'Permet la prise en charge automatique du mipmapping',
          con: 'Nécessite un réglage fin des marges pour les formes irregulars',
        },
        {
          pro: 'Optimise l allocation de la mémoire VRAM du GPU',
          con: 'Augmente légèrement la surface initiale de texture',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Termes Clés de l Empaquetage de Sprites',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Draw Call',
          definition: 'Commande envoyée par le processeur à la carte graphique pour afficher de la géométrie et des textures.',
        },
        {
          term: 'Bin Packing',
          definition: 'Algorithme d aménagement de rectangles de différentes tailles dans un espace minimal.',
        },
        {
          term: 'Border Extrusion',
          definition: 'Duplication des pixels de bordure vers l extérieur pour éviter les décalages visuels.',
        },
        {
          term: 'Flipbook Animation',
          definition: 'Lecture séquentielle rapide d images pour simular un mouvement continu en 2D.',
        },
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Liste de Contrôle pour Développeurs',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Règles de Production',
      html: 'Regroupez les animations dans des atlases partagés et roguez la transparence.',
    },
    {
      type: 'paragraph',
      html: "Cette section rassemble les contrôles essentiels pour obtenir un export propre et une prévisualisation fiable. 1.",
    },
    {
      type: 'paragraph',
      html: "Cette section rassemble les contrôles essentiels pour obtenir un export propre et une prévisualisation fiable. 2.",
    },
    {
      type: 'title',
      level: 2,
      text: 'Accorder le padding, l extrusion et les données exportées',
    },
    {
      type: 'paragraph',
      html: 'Le padding sépare les frames voisines, tandis que l extrusion répète leurs pixels de bord. Ces valeurs interagissent avec le filtrage, les mipmaps et les mouvements de caméra: trop peu d espace crée des coutures, trop d espace gaspille la texture.',
    },
    {
      type: 'paragraph',
      html: 'Après le packing, vérifiez les coordonnées JSON dans le moteur cible. Un atlas est fiable seulement si la taille, l origine, la rotation et la transparence sont interprétées comme dans le fichier exporté.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Accorder le padding, l extrusion et les données exportées',
    },
    {
      type: 'paragraph',
      html: 'Le padding sépare les frames voisines, tandis que l extrusion répète leurs pixels de bord. Ces valeurs interagissent avec le filtrage, les mipmaps et les mouvements de caméra: trop peu d espace crée des coutures, trop d espace gaspille la texture.',
    },
    {
      type: 'paragraph',
      html: 'Après le packing, vérifiez les coordonnées JSON dans le moteur cible. Un atlas est fiable seulement si la taille, l origine, la rotation et la transparence sont interprétées comme dans le fichier exporté.',
    },
  ],
  faq: [
    {
      question: 'Qu est-ce qu un sprite sheet et pourquoi est-ce essentiel en 2D?',
      answer:
        'Un sprite sheet est un fichier image composite regroupant plusieurs animations.',
    },
    {
      question: 'Comment fonctionne le traitement local dans cet outil?',
      answer:
        'Vos fichiers sont traités localement dans votre navigateur via l API Canvas HTML5.',
    },
    {
      question: 'Puis-je découper une planche de sprites existante?',
      answer:
        'Oui. Passez en mode Extracteur, déposez votre planche et configurez la grille de découpage.',
    },
  ],
  howTo: [
    {
      name: 'Importer des Images',
      text: 'Faites glisser vos fichiers PNG ou WebP dans la zone de dépôt.',
    },
    {
      name: 'Régler les Paramètres',
      text: 'Ajustez l espacement, l extrusion et la taille maximale de texture.',
    },
    {
      name: 'Prévisualiser et Télécharger',
      text: 'Testez l animation dans le lecteur et téléchargez votre archive ZIP.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Empaqueteur et Extracteur de Sprite Sheets',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu est-ce qu un sprite sheet et pourquoi est-ce essentiel en 2D?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un sprite sheet est un fichier image composite regroupant plusieurs animations.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment empaqueter et extraire des sprite sheets',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Importer des Images',
          text: 'Faites glisser vos fichiers PNG ou WebP dans la zone de dépôt.',
        },
      ],
    },
  ],
  bibliography: [
    {
      name: 'Godot Engine 2D Sprite Sheets Documentation',
      url: 'https://docs.godotengine.org/en/stable/tutorials/2d/2d_sprite_animation.html',
    },
    {
      name: 'Unity Sprite Atlas Manual',
      url: 'https://docs.unity3d.com/Manual/class-SpriteAtlas.html',
    },
  ],
};
