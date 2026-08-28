import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HitboxHurtboxAnimatorUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'animateur-hitbox-hurtbox-sprites';
const title = 'Animateur de Hitbox et Hurtbox pour Sprites';
const description = 'Dessinez des calques de collision sur chaque image de sprite, prévisualisez les mouvements avec la pelure d\'oignon et exportez un fichier JSON neutre.';

const faq = [
  {
    question: 'Quelle est la différence entre une hitbox et une hurtbox ?',
    answer: 'Une hitbox définit la zone qui inflige une attaque, tandis qu\'une hurtbox définit la zone vulnérable qui la reçoit. Les pushboxes maintiennent les personnages à distance et les grabboxes définissent la portée des prises.',
  },
  {
    question: 'Mes fichiers de sprites quittent-ils le navigateur ?',
    answer: 'Non. Les images sont traitées et exportées entièrement dans votre navigateur. Seules les préférences d\'édition sont conservées localement.',
  },
  {
    question: 'Quel système de coordonnées l\'export JSON utilise-t-il ?',
    answer: 'Chaque image mesure ses coordonnées en pixels depuis le coin supérieur gauche du découpage. Les dimensions de largeur et hauteur stockent des valeurs positives avec leur propre pivot.',
  },
  {
    question: 'Puis-je éditer une planche de sprites ou des images séparées ?',
    answer: 'Oui. Vous pouvez charger une planche PNG ou WebP en indiquant les lignes et colonnes, ou sélectionner plusieurs images ordonnées.',
  },
  {
    question: 'L\'export fonctionne-t-il directement dans tous les moteurs ?',
    answer: 'Le format JSON est neutre. Il enregistre les rectangles d\'images, les pivots et les calques géométriques sans imposer un moteur spécifique.',
  },
];

const howTo = [
  { name: 'Charger les sprites', text: 'Sélectionnez une planche de sprites PNG/WebP ou des images ordonnées. Le traitement reste local.' },
  { name: 'Définir les images', text: 'Indiquez le nombre de lignes et colonnes pour une planche et vérifiez le découpage sur le film d\'animation.' },
  { name: 'Dessiner les calques de collision', text: 'Choisissez un calque hitbox, hurtbox, pushbox ou sensor, puis tracez un rectangle ou un cercle.' },
  { name: 'Ajuster le mouvement', text: 'Modifiez les coordonnées exactes, copiez les formes sur les images voisines et utilisez la pelure d\'oignon.' },
  { name: 'Exporter le projet', text: 'Téléchargez le fichier JSON neutre et une planche de contact PNG. Conservez les images d\'origine.' },
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
    onboarding: 'Chargez une animation, confirmez le découpage et dessinez les zones d\'attaque, de dégâts ou de collision.',
    privacyNote: 'Table d\'animation locale. Les images ne sont pas envoyées sur un serveur.',
    loadSprite: 'Placer l\'image sur la table d\'animation',
    loadHint: 'Choisissez une planche de sprites ou des images PNG/WebP ordonnées.',
    chooseImages: 'Choisir les images',
    slicingTitle: 'Découpage des images',
    rowsLabel: 'Lignes',
    columnsLabel: 'Colonnes',
    applySlicing: 'Découper',
    playbackTitle: 'Aperçu du mouvement',
    previousFrame: 'Image précédente',
    play: 'Lecture',
    pause: 'Pause',
    nextFrame: 'Image suivante',
    fpsLabel: 'Images par seconde',
    onionPrevious: 'Calque précédent',
    onionNext: 'Calque suivant',
    layerTitle: 'Calques de collision',
    typeHitbox: 'Hitbox',
    typeHurtbox: 'Hurtbox',
    typePushbox: 'Pushbox',
    typeGrabbox: 'Grabbox',
    typeSensor: 'Capteur',
    typeCustom: 'Personnalisé',
    shapeRectangle: 'Rectangle',
    shapeCircle: 'Cercle',
    drawShape: 'Dessiner',
    selectShape: 'Sélectionner',
    stageLabel: 'Zone de travail',
    emptyStage: 'Chargez des images pour commencer à dessiner les calques de collision.',
    frameReadout: 'Image {current} sur {total}',
    timelineTitle: 'Bande d\'animation',
    inspectorTitle: 'Inspecteur de forme',
    noSelection: 'Sélectionnez une forme pour modifier ses coordonnées exactes.',
    nameLabel: 'Nom du calque',
    xLabel: 'X en pixels',
    yLabel: 'Y en pixels',
    widthLabel: 'Largeur en pixels',
    heightLabel: 'Hauteur en pixels',
    radiusLabel: 'Rayon en pixels',
    duplicateShape: 'Dupliquer',
    mirrorShape: 'Miroir horizontal',
    deleteShape: 'Supprimer la forme',
    copyPrevious: 'Copier l\'image précédente ici',
    copyAll: 'Copier sur toutes les images',
    pivotTitle: 'Pivot d\'image',
    pivotXLabel: 'Pivot X',
    pivotYLabel: 'Pivot Y',
    exportTitle: 'Exporter le projet',
    exportJson: 'Télécharger le JSON',
    importJson: 'Importer un JSON',
    exportContactSheet: 'Télécharger la planche de contact',
    resetProject: 'Réinitialiser les calques',
    undo: 'Annuler',
    redo: 'Rétablir',
    statusReady: 'La table d\'animation est prête.',
    statusImageLoaded: '{count} fichiers d\'image chargés.',
    statusShapeCreated: 'Forme de collision ajoutée.',
    statusShapeUpdated: 'Forme mise à jour.',
    statusImported: 'Projet importé.',
    statusExported: 'Exportation prête.',
    statusError: 'Impossible de lire le fichier sélectionné.',
    framesBadge: '{count} images',
    shapesBadge: '{count} formes',
    coverageBadge: '{percent}% couvert',
    coordinatesNote: 'Les coordonnées utilisent le coin supérieur gauche de chaque image comme origine (0,0).',
    localOnlyDisclosure: 'Le fichier JSON stocke les noms d\'images, pivots et formes sans inclure les pixels.',
    limitationDisclosure: 'Les calques définissent des zones géométriques. Testez-les directement dans votre moteur de jeu.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Concevoir des hitboxes et hurtboxes adaptées au mouvement réel',
    },
    {
      type: 'paragraph',
      html: 'Régler les collisions devient complexe quand chaque image est analysée séparément. Cet éditeur rassemble l\'image du sprite, les calques de collision, la pelure d\'oignon et la chronologie pour garantir la continuité du mouvement.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Choisir chaque calque selon sa fonction dans le jeu',
    },
    {
      type: 'table',
      headers: ['Calque', 'Rôle principal', 'Question à vérifier'],
      rows: [
        ['Hitbox', 'Zone qui inflige une attaque ou un effet', 'Apparaît-elle uniquement pendant les images actives ?'],
        ['Hurtbox', 'Zone qui reçoit une attaque', 'Suit-elle la silhouette sans écarts inutiles ?'],
        ['Pushbox', 'Zone de collision physique entre personnages', 'Reste-t-elle stable pour éviter les secousses ?'],
        ['Grabbox', 'Portée pour déclencher une prise', 'Le timing correspond-il à l\'animation visuelle ?'],
        ['Sensor', 'Zone de détection pour les interactions', 'Le nom est-il suffisamment explicite ?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Comprendre et appliquer le système de coordonnées',
    },
    {
      type: 'paragraph',
      html: 'Le projet exporté mesure X et Y depuis le coin supérieur gauche de chaque image découpée. Les dimensions sont positives et exprimées en pixels, facilitant la réutilisation dans votre moteur.',
    },
    {
      type: 'tip',
      title: 'Vérifier l\'ensemble de la séquence d\'attaque',
      html: 'Relancez l\'animation complète après chaque modification pour valider la fluidité du geste.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Utiliser la planche de contact pour les revues d\'équipe',
    },
    {
      type: 'paragraph',
      html: 'La planche de contact PNG affiche toutes les images et leurs calques sur un seul visuel, idéal pour échanger entre graphistes et développeurs.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Tester les frames actives et les coordonnées ensemble',
    },
    {
      type: 'paragraph',
      html: 'Une bonne forme de collision suit la silhouette mais aussi le moment de l action. Vérifiez séparément le début, la phase active et la récupération, puis comparez les boîtes exportées afin qu un coup ne se déclenche pas avant le mouvement visible ni après sa fin.',
    },
    {
      type: 'paragraph',
      html: 'La prévisualisation documente la géométrie et les calques, pas toute la logique de collision du moteur. Testez ensuite la portée, la priorité, le recul et le comportement réseau dans le projet réellement intégré.',
    },
  ],
  faq,
  bibliographyTitle: 'Références sur la gestion des collisions',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
