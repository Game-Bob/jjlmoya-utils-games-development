import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GameUiAccessibilityTesterUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'testeur-stress-accessibilite-ui-jeu';
const title = 'Testeur de Stress Accessibilité UI de Jeu';
const description = 'Inspectez une capture d écran de jeu localement avec des simulations de daltonisme, des sondes de contraste HUD, du flou, du sous-échantillonnage et des cartes thermiques.';

const faq = [
  {
    question: 'Ce outil certifie-t-il l accessibilité de mon jeu?',
    answer: 'Non. Il combine des simulations de vision des couleurs, des mesures de contraste, des tests de stress visuel et des guides de révision. Utilisez ces résultats pour guider vos tests, pas comme certificat.',
  },
  {
    question: 'Ma capture d écran quitte-t-elle le navigateur?',
    answer: 'Non. L image est décodée, échantillonnée et transformée entièrement dans votre navigateur. Seuls les réglages d affichage sont stockés localement.',
  },
  {
    question: 'Que dois-je mesurer avec les deux sondes de couleur?',
    answer: 'Choisissez deux couleurs devant transmettre des significations distinctes, comme un allié et un ennemi, un état actif et désactivé, ou deux niveaux de rareté.',
  },
  {
    question: 'Pourquoi un bon contraste peut-il nécessiter une révision manuelle?',
    answer: 'Une paire peut mesurer un bon contraste alors qu une petite icône, un texte fin ou un fond animé restent difficiles à identifier dans le jeu.',
  },
  {
    question: 'Que montre la carte thermique?',
    answer: 'La carte thermique met en évidence les zones où la séparation des couleurs diminue fortement après la simulation sélectionnée.',
  },
];

const howTo = [
  { name: 'Charger une capture', text: 'Sélectionnez une capture d écran au format PNG, JPEG ou WebP. L image reste dans la mémoire locale de votre navigateur.' },
  { name: 'Choisir une lentille de simulation', text: 'Comparez l image originale avec une simulation de daltonisme, d échelle de gris ou de contraste réduit.' },
  { name: 'Appliquer du stress visuel', text: 'Ajoutez du flou, réduisez l échelle d affichage, zoomez sur les pixels ou activez la carte thermique.' },
  { name: 'Mesurer deux signaux clés', text: 'Sélectionnez la sonde A ou B puis cliquez sur l image originale pour comparer deux couleurs.' },
  { name: 'Exporter les observations', text: 'Consultez les questions de révision, notez vos observations et téléchargez un rapport d analyse.' },
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

export const content: ToolLocaleContent<GameUiAccessibilityTesterUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Chargez une capture d écran de jeu, choisissez une lentille de simulation et comparez deux signaux essentiels que les joueurs doivent distinguer.',
    privacyNote: 'Analyse locale. Vos images ne sont pas envoyées sur un serveur.',
    dropTitle: 'Déposez une capture d écran du jeu sur la table d analyse',
    dropHint: 'Glissez une image ici ou sélectionnez-la depuis votre appareil. Utilisez un moment représentatif avec des éléments visuels réels.',
    chooseImage: 'Choisir une capture',
    replaceImage: 'Remplacer la capture',
    supportedFiles: 'PNG, JPEG ou WebP jusqu à 16 Mo. Les images plus grandes sont réduites à 1600 px.',
    lensLabel: 'Lentille de simulation',
    lensOriginal: 'Original',
    lensProtanopia: 'Protanopie',
    lensDeuteranopia: 'Deutéranopie',
    lensTritanopia: 'Tritanopie',
    lensAchromatopsia: 'Échelle de gris',
    lensReducedContrast: 'Contraste réduit',
    lensDesaturation: 'Désaturation',
    compareLabel: 'Mode de comparaison',
    compareSideBySide: 'Côte à côte',
    compareSplit: 'Lentille séparée',
    comparePress: 'Maintenir pour révéler',
    holdOriginal: 'Maintenir pour l original',
    splitPosition: 'Position de séparation',
    stressLabel: 'Contrôles de stress visuel',
    blurLabel: 'Flou en pixels',
    downscaleLabel: 'Aperçu petit écran',
    downscaleFull: 'Plein',
    downscaleHalf: 'Moitié',
    downscaleQuarter: 'Quart',
    downscaleEighth: 'Huitième',
    zoomLabel: 'Zoom d inspection',
    heatmapLabel: 'Carte thermique de bordures',
    heatmapHint: 'Met en évidence les pertes de séparation visuelle sous la lentille active.',
    originalView: 'Signal original',
    simulatedView: 'Signal simulé',
    emptyCanvas: 'Sélectionnez une capture d écran pour commencer. Votre fichier reste sur cet appareil.',
    sampleTitle: 'Sondes de signal critique',
    sampleInstructions: 'Sélectionnez A ou B puis cliquez sur l image originale pour échantillonner des couleurs clés.',
    sampleA: 'Sonde A',
    sampleB: 'Sonde B',
    sampleAName: 'Signification sonde A',
    sampleBName: 'Signification sonde B',
    manualColor: 'Définir la couleur',
    sampleAInitial: 'Marqueur allié',
    sampleBInitial: 'Marqueur ennemi',
    noSample: 'En attente de capture',
    originalContrast: 'Contraste original',
    simulatedContrast: 'Contraste simulé',
    separationRetained: 'Séparation conservée',
    statusStrong: 'Signal très distinct',
    statusWatch: 'À vérifier en contexte',
    statusReview: 'Révision conseillée',
    statusPending: 'Pas encore d analyse',
    measurementLabel: 'Mesure',
    heuristicLabel: 'Heuristique',
    manualReviewLabel: 'Révision manuelle',
    measurementHint: 'Le contraste utilise la formule de luminance relative WCAG entre les deux couleurs sRGB sélectionnées.',
    heuristicHint: 'La séparation conservée compare la distance de couleur avant et après la simulation visuelle.',
    promptTitle: 'Guide de révision d interface',
    promptColorOnly: 'Les joueurs peuvent-ils identifier les éléments sans se fier uniquement à la couleur?',
    promptChangingBackground: 'Le texte reste-t-il lisible sur des fonds clairs, sombres ou animés?',
    promptMinimap: 'Les icônes de la carte se distinguent-elles par la forme, la taille ou un motif?',
    promptStates: 'Les états sélectionné, désactivé ou rechargement sont-ils évidents?',
    promptShape: 'Un symbole, un texte ou un son renforce-t-il chaque signal de couleur?',
    findingLabel: 'Remarque de l équipe',
    findingPlaceholder: 'Exemple: Le contour de l ennemi s efface sur le fond rouge',
    addFinding: 'Ajouter une remarque',
    findingsEmpty: 'Aucune remarque enregistrée pour le moment.',
    exportSheet: 'Télécharger le visuel comparatif',
    exportReport: 'Télécharger le rapport JSON',
    resetTool: 'Réinitialiser',
    uploadError: 'Fichier non valide. Veuillez choisir une image PNG, JPEG ou WebP.',
    fileTooLarge: 'Fichier supérieur à 16 Mo. Veuillez utiliser une capture plus petite.',
    imageReady: 'Capture chargée. Échantillonnez deux couleurs pour lancer l analyse.',
    reportDownloaded: 'Rapport JSON téléchargé.',
    sheetDownloaded: 'Visuel comparatif téléchargé.',
    localOnlyDisclosure: 'Traitement 100% local dans votre navigateur. Aucune image n est transmise.',
    limitationDisclosure: 'Cet outil aide à la révision de design mais ne remplace pas les tests avec des joueurs.',
    reportTitle: 'Rapport de révision d accessibilité UI de jeu',
    reportFindingReview: 'La paire de couleurs perd une part importante de contraste sous la simulation.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Évaluer l accessibilité de l interface de votre jeu sans envoi de fichiers',
    },
    {
      type: 'paragraph',
      html: 'Les interfaces de jeux vidéo doivent rester lisibles dans des conditions visuelles complexes et changeantes. Cet outil d analyse locale vous permet d inspecter vos captures d écran à travers des simulations de daltonisme et des tests de stress visuel.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Mesures, heuristiques et analyse humaine',
    },
    {
      type: 'table',
      headers: ['Type d analyse', 'Ce que fournit cet outil', 'Ce qu il ne peut pas garantir'],
      rows: [
        ['Mesure', 'Rapport de contraste et luminance relative entre deux couleurs sRGB', 'Conformité totale de l ensemble du jeu'],
        ['Simulation', 'Transformations scientifiques pour la protanopie, deutéranopie et tritanopie', 'Perception exacte de chaque joueur individuel'],
        ['Heuristique', 'Flou, réduction d échelle et détection de perte de contours', 'Évaluation automatique du gameplay'],
        ['Révision manuelle', 'Guide de questions et exportation de rapports d équipe', 'Remplacement de tests utilisateurs réels'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Échantillonner des éléments décisifs pour le joueur',
    },
    {
      type: 'paragraph',
      html: 'Concentrez vos mesures sur des paires de couleurs qui influencent les décisions du joueur: allié et ennemi, danger et sécurité, ou disponible et indisponible. Si la lisibilité diminue, ajoutez une forme ou une icône distinctive.',
    },
    {
      type: 'tip',
      title: 'Tester les scènes les plus chargées',
      html: 'Privilégiez des captures en pleine action plutôt que des maquettes épurées afin d obtenir un diagnostic représentatif.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Intégrer les rapports d analyse dans votre flux de travail',
    },
    {
      type: 'paragraph',
      html: 'Le rapport JSON et le visuel comparatif PNG peuvent être directement joints à vos tickets de développement pour faciliter les corrections de design UI.',
    },
  ],
  faq,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
  bibliography: bibliographyEntries,
};
