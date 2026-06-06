import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SnookerScoreKeeperLocaleContent } from '../entry';

const slug = 'marqueur-de-snooker-calculateur-de-break';
const title = 'Marqueur de Snooker Premium et Calculateur de Break';
const description = 'Suivez les scores des frames de snooker en direct, calculez les valeurs de break actuelles, affichez les points restants sur la table et obtenez l\'état du déficit en temps réel, y compris le besoin de snookers.';

const faqData = [
  {
    question: 'Comment sont calculés les points maximum restants sur la table de snooker ?',
    answer: 'Chaque boule rouge restante vaut 8 points (1 point pour la rouge elle-même plus 7 points pour l\'empochage d\'une boule noire). Une fois toutes les rouges empochées, les boules de couleur restantes totalisent 27 points.',
  },
  {
    question: 'Que signifie avoir besoin de snookers dans ce calculateur ?',
    answer: 'Cela signifie que l\'écart de score est supérieur au total des points restants sur la table, ce qui oblige un joueur à forcer des fautes de son adversaire pour rattraper son retard.',
  },
  {
    question: 'Qu\'est-ce qu\'une situation de noire décisive ?',
    answer: 'Un scénario de noire décisive se produit lorsque toutes les boules sont empochées et que les scores de la frame sont à égalité, nécessitant de replacer la boule noire sur son emplacement d\'origine pour déterminer le vainqueur.',
  },
];

const howToData = [
  {
    name: 'Configurer les Noms des Joueurs',
    text: 'Saisissez des noms personnalisés pour les deux joueurs de snooker afin de personnaliser l\'affichage du marqueur.',
  },
  {
    name: 'Empocher des Boules et Construire des Breaks',
    text: 'Touchez les boules de feutre illuminées pour enregistrer les boules empochées en séquence. Le calculateur verrouille les couleurs non éligibles selon les règles.',
  },
  {
    name: 'Vérifier l\'État du Déficit',
    text: 'Surveillez la barre d\'état en direct pour voir si un joueur est en sécurité, a besoin de snookers, ou si la frame est encore ouverte.',
  },
  {
    name: 'Enregistrer les Pénalités de Faute',
    text: 'Ouvrez le menu des fautes pour attribuer des points de pénalité directement à l\'adversaire et changer le tour du joueur actif.',
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
    image: undefined,
    url: undefined,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: SnookerScoreKeeperLocaleContent = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Marqueur de Snooker en Ligne Gratuit et Compteur de Break',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simplifiez vos frames de snooker avec notre marqueur numérique. L\'outil calcule les points de break actifs, les points restants sur la table et affiche la différence de score exacte. L\'interface feutrée fournit des indicateurs interactifs qui s\'illuminent dynamiquement en fonction des séquences de règles du snooker. Que vous arbitriez un tournoi de club local ou que vous suiviez des parties amicales à la maison, cette application gère tous les calculs automatiquement.',
    },
    {
      type: 'title',
      text: 'Comprendre le Score au Snooker et les Calculs de Déficit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une partie standard de snooker commence avec quinze boules rouges valant un point chacune. Les joueurs doivent alterner entre une boule rouge et une boule de couleur. Chaque boule de couleur empochée est replacée sur son emplacement jusqu\'à ce qu\'il ne reste plus de rouges. Ensuite, les couleurs doivent être empochées dans leur ordre numérique, de la jaune à la noire. Ce calculateur assure le suivi de la séquence et avertit lorsque des snookers sont nécessaires. En calculant l\'écart de score et les points maximum restants sur la table, il détermine exactement quand une frame a atteint son seuil de victoire.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tableau de Score',
          description: 'Gardez une trace des scores des frames et des tours des joueurs sur un affichage à haut contraste.',
          icon: 'mdi:scoreboard-outline',
          points: ['Surbrillance claire du joueur actif', 'Saisie de nom personnalisée', 'Annulation en un clic'],
        },
        {
          title: 'Calculateur de Break',
          description: 'Suivi en temps réel des breaks actifs avec journal des couleurs empochées.',
          icon: 'mdi:billiards',
          points: ['Chronologie des boules empochées', 'Verrouillage automatique des boules par règle', 'Statut du break codé par couleur'],
        },
        {
          title: 'Indicateurs de Points Restants',
          description: 'Suivez les points maximum restants sur le tapis vert.',
          icon: 'mdi:percent-outline',
          points: ['Suivi de la différence de score', 'Avertissements dynamiques de besoin de snookers', 'Détection de la noire décisive'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Contrôles Interactifs et Retour Sonore',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>HUD Tactile en Feutre</strong> permet de toucher les boules pour ajouter des points et les enregistre sur la chronologie du break.',
        '<strong>Boutons d\'Action de Faute</strong> appliquent de quatre à sept points de pénalité au score de l\'adversaire et terminent le tour actif.',
        '<strong>Voyant d\'État Dynamique</strong> se met à jour pour indiquer un jeu normal, une marge de sécurité ou un besoin de snookers.',
        '<strong>Synthèse Audio</strong> déclenche un son d\'empochage sur les boules rentrées et un buzzer sur les fautes.',
      ],
    },
    {
      type: 'title',
      text: 'Règles de Fautes au Snooker et Système de Pénalités Expliqués',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les fautes au snooker attribuent des points à l\'adversaire. La valeur de la pénalité est déterminée par la valeur de la boule ciblée ou de la boule impliquée dans la faute, avec un minimum de quatre points. Par exemple, empocher la boule blanche, toucher une couleur avant une rouge, ou ne toucher aucune boule entraîne une pénalité. Si une faute est commise en visant la bleue, la rose ou la noire, la pénalité est respectivement de cinq, six ou sept points. Ce marqueur numérique dispose d\'un panneau de fautes rapide pour ajouter facilement les valeurs de pénalité et transférer automatiquement les tours au joueur suivant.',
    },
    {
      type: 'title',
      text: 'Que se Passe-t-il lors d\'un Scénario de Noire Décisive ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lorsque toutes les boules ont été empochées et que les scores de la frame sont à égalité, la boule noire est replacée sur sa position d\'origine. Les joueurs tirent au sort pour déterminer qui jouera en premier, et le premier joueur à empocher la noire ou à commettre une faute perd la frame. Cette règle de la noire décisive garantit une résolution équitable des parties serrées sans nécessiter de frames supplémentaires, et notre marqueur détecte automatiquement cet état d\'égalité finale pour en informer les deux joueurs.',
    },
    {
      type: 'title',
      text: 'Pourquoi Utiliser un Marqueur de Snooker Numérique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le calcul manuel des points restants et des marges de déficit pendant les frames serrées est sujet aux erreurs humaines. Cet outil navigateur fournit des statistiques précises en temps réel, permettant aux joueurs de se concentrer sur leur technique et leur stratégie. En maintenant une chronologie interactive des boules empochées, les arbitres peuvent facilement vérifier les breaks controversés et assurer la continuité officielle du match.',
    },
  ],
  ui: {
    title: 'Marqueur de Snooker',
    description: 'Suivez les scores des frames et les breaks.',
    player1: 'Joueur 1',
    player2: 'Joueur 2',
    score: 'Score',
    currentBreak: 'Break',
    remainingPoints: 'Restants',
    deficit: 'Écart',
    statusSafe: 'Sûr',
    statusNeedSnookers: 'Snookers Requis',
    statusDecidingBlack: 'Noire Décisive',
    statusNormal: 'Normal',
    foul: 'Faute',
    foulTitle: 'Pénalité de Faute',
    foulPoints: 'Pénalité',
    foulOnRed: 'Rouge/Jaune/Vert/Marron',
    foulOnYellow: 'Jaune',
    foulOnGreen: 'Vert',
    foulOnBrown: 'Marron',
    foulOnBlue: 'Bleu',
    foulOnPink: 'Rose',
    foulOnBlack: 'Noire',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser la frame actuelle ? Tous les scores seront perdus.',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    endTurn: 'Fin de Tour',
    miss: 'Raté',
    redsRemaining: 'Rouges',
    pocketedBalls: 'Empochées',
    toggleSound: 'Activer le Son',
    fullscreen: 'Plein Écran',
  },
};
