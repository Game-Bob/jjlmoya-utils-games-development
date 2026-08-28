import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DamageFormulaLabUI } from '../ui';
import { bibliographyEntries } from '../bibliography';

const slug = 'calculateur-formules-degats-jeux-ttk';
const title = 'Laboratoire de Formules de Dégâts et Graphiques TTK';
const description = 'Comparez des formules de dégâts pour jeux vidéo avec des courbes en direct, cartes thermiques, arrondis, coups critiques et temps pour éliminer (TTK).';

const faq = [
  {
    question: 'Que permet de comparer ce calculateur de dégâts ?',
    answer: 'Il évalue deux expressions mathématiques sécurisées face aux mêmes variables de combat. Vous pouvez comparer les courbes de dégâts, les seuils de coups, le temps pour éliminer (TTK), le comportement de l arrondi et l ordre d application des résistances.',
  },
  {
    question: 'Quelles variables et fonctions sont disponibles ?',
    answer: 'Les variables disponibles sont attack, defense, level, power, resistance, flat, criticalChance et criticalMultiplier. Les fonctions sécurisées sont min, max, clamp, abs, sqrt, pow, floor, round et ceil.',
  },
  {
    question: 'Comment le temps pour éliminer (TTK) est-il calculé ?',
    answer: 'Le nombre de coups nécessaires est la santé de la cible divisée par les dégâts attendus arrondis (arrondi au supérieur). Le TTK mesure l intervalle entre le premier et le dernier coup: (coups - 1) / attaques par seconde.',
  },
  {
    question: 'Pourquoi l ordre d application de la résistance est-il important ?',
    answer: 'Appliquer un modificateur plat avant la résistance en pourcentage réduit également ce montant plat. Appliquer la résistance en premier laisse le modificateur plat intact. Le laboratoire permet de tester les deux configurations.',
  },
  {
    question: 'Une courbe régulière garantit-elle un équilibre parfait ?',
    answer: 'Non. Une courbe permet de détecter des seuils et des zones à dégâts nuls, mais l équilibrage dépend du contexte de jeu, des rôles et des tests utilisateurs.',
  },
];

const howTo = [
  { name: 'Choisir deux formules', text: 'Partez d un modèle prédéfini (linéaire, ratio ou niveau) ou saisissez vos propres formules A et B.' },
  { name: 'Régler l état de combat', text: 'Ajustez les valeurs d attaque, défense, niveau, puissance, résistance, dégâts plats, critiques, santé et cadence.' },
  { name: 'Définir les règles du moteur', text: 'Choisissez le mode d arrondi et précisez si la résistance s applique avant ou après le modificateur plat.' },
  { name: 'Analyser les courbes et seuils', text: 'Observez la trajectoire de l attaque, la carte thermique, les coups nécessaires et les alertes de diagnostic.' },
  { name: 'Exporter l expérience', text: 'Copiez un lien de partage ou téléchargez la configuration en JSON, le tableau CSV ou l image PNG du graphique.' },
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

export const content: ToolLocaleContent<DamageFormulaLabUI> = {
  slug,
  title,
  description,
  ui: {
    onboarding: 'Saisissez votre formule actuelle, placez une alternative en regard et ajustez les paramètres de combat.',
    localNote: 'Modèle privé. Les formules restent dans votre navigateur.',
    formulaDeck: 'Espace des formules',
    formulaALabel: 'Formule A (Modèle actuel)',
    formulaBLabel: 'Formule B (Alternative)',
    formulaHint: 'Variables: attack, defense, level, power, resistance, flat, criticalChance, criticalMultiplier',
    formulaFunctions: 'Fonctions: min, max, clamp, abs, sqrt, pow, floor, round, ceil',
    presetLinear: 'Protection linéaire',
    presetRatio: 'Armure par ratio',
    presetLevel: 'Échelle de niveau',
    combatInputs: 'Paramètres de combat',
    attackLabel: 'Attaque',
    defenseLabel: 'Défense',
    levelLabel: 'Niveau',
    powerLabel: 'Coefficient de puissance',
    resistanceLabel: 'Résistance (%)',
    flatLabel: 'Modificateur plat',
    criticalChanceLabel: 'Chances de coup critique (%)',
    criticalMultiplierLabel: 'Multiplicateur critique',
    healthLabel: 'Santé de la cible',
    cadenceLabel: 'Attaques par seconde',
    roundingLabel: 'Arrondi des dégâts',
    roundingNone: 'Conserver les décimales',
    roundingFloor: 'Arrondi inférieur (Floor)',
    roundingRound: 'Entier le plus proche',
    roundingCeil: 'Arrondi supérieur (Ceil)',
    orderLabel: 'Ordre des modificateurs',
    resistanceFirst: 'Résistance puis plat',
    flatFirst: 'Plat puis résistance',
    runLabel: 'Comparaison en direct',
    resultDamage: 'Dégâts attendus',
    resultHits: 'Coups nécessaires',
    resultTtk: 'Temps pour éliminer (TTK)',
    resultDifference: 'Écart de dégâts',
    formulaAName: 'Actuel',
    formulaBName: 'Alternative',
    curveTitle: 'Trajectoire de l attaque',
    curveCaption: 'L attaque varie de la moitié au double de sa valeur pendant que la défense reste fixe.',
    heatmapTitle: 'Carte thermique de pression',
    heatmapCaption: 'Chaque case montre les dégâts attendus de la Formule A selon l attaque et la défense.',
    attackAxis: 'L attaque augmente vers la droite',
    defenseAxis: 'La défense augmente vers le bas',
    scenariosTitle: 'Profils de combat',
    scenarioSkirmisher: 'Escrimeur',
    scenarioGuardian: 'Gardien',
    scenarioBoss: 'Boss',
    scenarioCustom: 'Configuration actuelle',
    diagnosticsTitle: 'Points de rupture',
    statusBalanced: 'Aucune anomalie mathématique détectée sur cette plage d essai.',
    exportTitle: 'Exporter le projet',
    copyLink: 'Copier le lien',
    exportCsv: 'Télécharger le CSV',
    exportJson: 'Télécharger le JSON',
    importJson: 'Importer un JSON',
    exportPng: 'Télécharger le PNG du graphique',
    reset: 'Réinitialiser le modèle',
    privacyDisclosure: 'Le lien de partage enregistre la configuration dans le fragment d URL sans envoi vers un serveur.',
    limitationDisclosure: 'Les dégâts critiques attendus sont une moyenne et non une simulation aléatoire.',
    importError: 'Ce fichier n est pas une configuration valide.',
    copiedStatus: 'Lien copié dans le presse-papier.',
  },
  seo: [
    {
      type: 'title',
      level: 2,
      text: 'Tester les formules de dégâts avant de les intégrer au moteur',
    },
    {
      type: 'paragraph',
      html: 'Une formule de dégâts peut sembler équilibrée sur quelques valeurs moyennes mais générer des absurdités aux extrêmes. Ce laboratoire permet de détecter rapidement les zones mortes et les décalages de puissance.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Un langage d évaluation sécurisé et restreint',
    },
    {
      type: 'paragraph',
      html: 'Le champ de saisie accepte uniquement des variables prédéfinies et des fonctions mathématiques sûres sans exécuter de code arbitraire.',
    },
    {
      type: 'table',
      headers: ['Indicateur', 'Calcul effectué', 'Question de design'],
      rows: [
        ['Dégâts attendus', 'Formule de base incluant le facteur critique et l ordre de résistance', 'La formule reste-t-elle cohérente sur des personnages faibles et puissants ?'],
        ['Coups nécessaires', 'Santé de la cible divisée par les dégâts arrondis', 'Un point de stat supplémentaire fait-il disparaître un coup entier ?'],
        ['Temps pour éliminer (TTK)', 'Intervalle entre les coups divisé par la cadence d attaque', 'La cadence crée-t-elle le rythme de jeu souhaité ?'],
        ['Carte thermique', 'Échantillonnage de la Formule A sur l attaque et la défense', 'Existe-t-il des seuils ou des ruptures anormales ?'],
      ],
    },
    {
      type: 'title',
      level: 2,
      text: 'Séparer la logique mathématique des choix d équilibrage',
    },
    {
      type: 'paragraph',
      html: 'Une courbe fluide n est pas une preuve de plaisir de jeu. Utilisez ce laboratoire pour identifier les valeurs à tester lors des sessions de playtest.',
    },
    {
      type: 'tip',
      title: 'Observer conjointement les dégâts et le nombre de coups',
      html: 'Une légère variation de dégâts peut franchir un seuil de santé et supprimer un coup complet. Comparez toujours les dégâts avec le nombre de coups et le TTK.',
    },
    {
      type: 'title',
      level: 2,
      text: 'Rendre visibles l arrondi et l ordre des résistances',
    },
    {
      type: 'paragraph',
      html: 'Une même formule peut produire un combat différent selon l arrondi et l ordre des modificateurs. Examinez donc la zone centrale de la courbe, mais aussi les petits dégâts, la défense élevée et le seuil qui ajoute une attaque nécessaire.',
    },
    {
      type: 'paragraph',
      html: 'L affichage du TTK est une projection mathématique fondée sur la cadence saisie. Il ne modélise ni esquive, ni temps de recharge, ni suite aléatoire, ni interruption: utilisez les courbes pour guider le design puis vérifiez la règle en jeu.',
    },
  ],
  faq,
  bibliographyTitle: 'Références sur la modélisation des dégâts',
  bibliography: bibliographyEntries,
  howTo,
  schemas: [softwareApplication, faqPage, howToSchema],
};
