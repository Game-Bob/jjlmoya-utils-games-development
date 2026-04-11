import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GymTrackerUI } from '../ui';

const slug = 'suivi-entrainement-gym';
const title = 'Suivi d’Entraînement Gym : Graphiques de Progrès et Force';
const description =
  'Enregistrez vos levées, sélectionnez l’exercice et visualisez votre progression avec des graphiques de force. Optimisez votre surcharge progressive à la salle.';

const faqData = [
  {
    question: 'À quoi sert le suivi d’entraînement ?',
    answer:
      'Il sert à appliquer la surcharge progressive de manière scientifique. En sachant exactement ce que vous avez soulevé lors de la séance précédente, vous pouvez essayer de battre cette marque, ce qui garantit la croissance musculaire et les gains de force à long terme.',
  },
  {
    question: 'Quelles données dois-je enregistrer ?',
    answer:
      'Le plus important est le poids maximum (top set) que vous avez réussi à déplacer avec une bonne technique pour un nombre déterminé de répétitions. Notre outil se concentre sur l’enregistrement du poids par séance pour générer votre graphique de progrès.',
  },
  {
    question: 'Comment interpréter les graphiques ?',
    answer:
      'Une ligne ascendante indique que vous progressez. Une ligne plate (stagnation) suggère que vous devez ajuster votre volume, votre intensité ou votre récupération. Une ligne descendante persistante peut être le signe d’un surentraînement.',
  },
  {
    question: 'Où sont stockées mes données ?',
    answer:
      'Les données sont stockées localement dans votre navigateur (Local Storage). Cela signifie que votre vie privée est totale et que vous n’avez pas besoin de créer de compte, mais si vous effacez les données du navigateur, l’historique sera perdu.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez l’exercice',
    text: 'Choisissez parmi les mouvements fondamentaux comme le Squat, le Développé Couché ou le Soulevé de Terre dans le menu déroulant.',
  },
  {
    name: 'Entrez le poids',
    text: 'Après votre série la plus lourde, entrez les kilogrammes soulevés dans le champ correspondant.',
  },
  {
    name: 'Appuyez sur Ajouter',
    text: 'Enregistrez votre marque. Le système mettra automatiquement à jour votre historique et votre graphique de progression.',
  },
  {
    name: 'Analysez votre évolution',
    text: 'Consultez le graphique périodiquement pour identifier les stagnations et vous motiver en voyant votre croissance réelle en force.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<GymTrackerUI & Record<string, string>> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Scientifiques',
  bibliography: [
    {
      name: 'Journal of Strength and Conditioning Research - Progressive Overload Study',
      url: 'https://journals.lww.com/nsca-jscr/Fulltext/2010/10000/The_Mechanisms_of_Muscle_Hypertrophy_and_Their.40.aspx',
    },
    {
      name: 'National Academy of Sports Medicine - Progressive Overload Explained',
      url: 'https://blog.nasm.org/progressive-overload-explained',
    },
    {
      name: 'Science of Strength - Data Tracking in Resistance Training',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30558493/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Suivi d’Entraînement à la Salle : La Clé d’une Progression Réelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dans le monde du fitness et du bodybuilding, il existe un principe fondamental qui sépare ceux qui obtiennent des résultats étonnants de ceux qui stagnent rapidement : la <strong>surcharge progressive</strong>. Cependant, il est impossible d’appliquer ce principe efficacement si vous ne tenez pas un registre détaillé de vos levées. Dans ce guide, nous explorerons pourquoi le suivi de votre entraînement est vital, comment utiliser notre <strong>suivi d’entraînement gym</strong> pour maximiser vos gains, et les fondements scientifiques qui soutiennent cette pratique.',
    },
    {
      type: 'title',
      text: 'Qu’est-ce que la Surcharge Progressive ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La surcharge progressive est l’augmentation graduelle du stress appliqué au corps pendant l’exercice physique. Pour qu’un muscle se développe ou se renforce, il doit être soumis à un stimulus plus important que celui auquel il est habitué. Si vous allez à la salle et que vous soulevez toujours le même poids, avec les mêmes répétitions et le même temps de repos, votre corps n’aura aucune raison biologique de s’adapter et de se développer.',
    },
    {
      type: 'list',
      items: [
        'Augmentation du poids : Soulever plus lourd que la séance précédente.',
        'Augmentation des répétitions : Faire plus de répétitions avec le même poids.',
        'Augmentation du volume : Réaliser plus de séries totales par groupe musculaire.',
        'Réduction du repos : Faire le même effort en moins de temps.',
        'Amélioration de la technique : Réaliser l’exercice avec un contrôle accru et une plus grande amplitude de mouvement.',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi le Journal de Bord Manuel est Supérieur à la Mémoire',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De nombreux athlètes font l’erreur de confier à leur mémoire le soin de se rappeler ce qu’ils ont soulevé la semaine dernière. Pourtant, dans un entraînement typique comprenant 5 à 10 exercices différents, il est très facile d’oublier si vous avez fait 80 kg o 82.5 kg à la presse, ou si vous avez réussi 10 répétitions ou 12. Ce manque de précision mène à la médiocrité.',
    },
    {
      type: 'tip',
      title: 'Le Pouvoir de Visualiser le Progrès',
      html: 'Voir une ligne ascendante sur un graphique vous donne l’élan nécessaire pour tenter cette répétition supplémentaire qui fait la différence entre la stagnation et une croissance musculaire constante.',
    },
    {
      type: 'title',
      text: 'Les Exercices Fondamentaux pour le Suivi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bien que tous les exercices soient précieux, certains mouvements polyarticulaires offrent la meilleure vision de votre force globale et de votre développement physique. Voici ceux que vous devriez prioriser dans votre suivi : <strong>Développé Couché</strong> pour la poussée horizontale, <strong>Développé Militaire</strong> pour la poussée verticale, <strong>Tractions</strong> pour le tirage et <strong>Hip Thrust</strong> pour les fessiers.',
    },
    {
      type: 'title',
      text: 'Comment Analyser vos Graphiques de Progression',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une fois que vous aurez enregistré plusieurs séances, vous commencerez à voir des modèles : une <strong>ligne ascendante constante</strong> indique que vous êtes sur la bonne voie, une <strong>ligne plate</strong> suggère que vous devez ajuster votre volume ou votre repos, et une <strong>tendance à la baisse</strong> peut être un signe de fatigue accumulée.',
    },
    {
      type: 'title',
      text: 'La Psychologie du Succès à la Salle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'S’entraîner est autant un défi mental que physique. En utilisant un outil visuel qui vous montre qu’aujourd’hui vous êtes 1% plus fort qu’il y a quinze jours, vous alimentez votre système de récompense par la dopamine. Cela crée une boucle de rétroaction positive qui transforme l’entraînement en une habitude durable.',
    },
  ],
  ui: {
    exerciseLabel: 'Exercice',
    pushCategory: 'Poussée',
    pullCategory: 'Tirage',
    gluteCategory: 'Fessiers',
    customExerciseCategory: 'Personnalisés',
    addCustomExerciseTitle: 'Ajouter un exercice personnalisé',
    newExerciseLabel: 'Nouvel exercice',
    exercisePlaceholder: 'Nom de l’exercice...',
    addBtn: 'Ajouter',
    registerWeightLabel: 'Enregistrer le Poids',
    weightPlaceholder: '00.0',
    startBtn: 'Démarrer',
    resetBtn: 'Réinitialiser',
    okBtn: 'OK',
    noData: 'Pas de données',
    recordLabel: 'Record',
    lastLabel: 'Dernier',
    historyTitle: 'Logs',
    exportBtn: 'Exporter',
    confirmDeleteTitle: 'Effacer l’historique ?',
    confirmDeleteText: 'Cette action ne peut pas être annulée. Tous les enregistrements de l’exercice sélectionné seront supprimés.',
    deleteBtn: 'Supprimer',
    cancelBtn: 'Annuler',
    units: 'kg',

    benchPress: 'Développé Couché',
    overheadPress: 'Développé Militaire',
    pushPress: 'Push Press',
    inclineDbPress: 'Développé Incliné Haltères',
    dipsTriceps: 'Dips Triceps',
    tricepsExtensions: 'Extensions Triceps Poulie',
    pullUp: 'Tractions',
    barbellRow: 'Tirage Buste Penché',
    latPulldown: 'Tirage Vertical',
    dbRow: 'Tirage Haltère',
    facePulls: 'Face Pulls',
    bicepsCurl: 'Curl Biceps Barre',
    hipThrust: 'Hip Thrust',
    rdl: 'Soulevé de Terre Roumain',
    lunges: 'Fentes',
    gluteKick: 'Kickback Fessier Poulie',
    hipAbduction: 'Abduction Hanche Machine',
    stepUp: 'Step Up',
  },
};
