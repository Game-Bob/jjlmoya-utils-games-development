import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RugbyScoreKeeperLocaleContent } from '../entry';

const slug = 'tableau-de-score-rugby';
const title = 'Tableau de Score Rugby avec Chronomètres d Exclusion et Horloge de Match';
const description = 'Suivez les scores en direct d un match de rugby avec comptabilisation des essais, transformations, pénalités et drops. Gérez les chronomètres d exclusion et les mi-temps avec un tableau de bord interactif.';

const faqData = [
  {
    question: 'Comment marque-t-on des points dans un match de rugby à XV ?',
    answer: 'Un essai vaut 5 points et est accordé quand un joueur aplatit le ballon dans l en-but adverse. Une transformation après un essai vaut 2 points. Les pénalités et les drops valent chacun 3 points.',
  },
  {
    question: 'Que se passe-t-il quand un joueur reçoit un carton jaune au rugby ?',
    answer: 'Un carton jaune entraîne une exclusion temporaire. Le joueur doit quitter le terrain pendant 10 minutes de temps de jeu actif. Son équipe évolue à un joueur de moins durant cette période. Le chronomètre d exclusion ne décompte que lorsque l horloge de match tourne.',
  },
  {
    question: 'Combien de temps dure un match de rugby à XV ?',
    answer: 'Un match standard de rugby à XV se compose de deux mi-temps de 40 minutes avec une pause de 10 minutes. L horloge est arrêtée pendant les blessures et les incidents graves. Du temps additionnel peut être ajouté pour les arrêts de jeu.',
  },
];

const howToData = [
  {
    name: 'Enregistrer les Événements de Score',
    text: 'Appuyez sur les boutons Essai, Transformation, Pénalité ou Drop pour comptabiliser les points. Après un essai, le bouton Transformation s allume automatiquement.',
  },
  {
    name: 'Gérer les Exclusions Temporaires',
    text: 'Appuyez sur Carton Jaune pour envoyer un joueur en exclusion. Saisissez son nom ou son numéro et un chronomètre de 10 minutes démarre automatiquement.',
  },
  {
    name: 'Contrôler le Temps de Match',
    text: 'Utilisez l horloge de match pour gérer deux mi-temps de 40 minutes. Mettez en pause pendant les blessures et reprenez quand le jeu redémarre.',
  },
  {
    name: 'Suivre l Évolution du Score',
    text: 'Surveillez le tableau d affichage en direct avec les points des équipes domicile et extérieur. Consultez le résumé des scores pour voir le détail des essais, transformations, pénalités et drops.',
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

export const content: RugbyScoreKeeperLocaleContent = {
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
      text: 'Tableau de Score Rugby Gratuit en Ligne avec Suivi en Direct',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prenez le contrôle du score de votre match de rugby avec notre tableau d affichage numérique interactif. Suivez les essais, transformations, pénalités et drops en temps réel. Le système de gestion des exclusions décompte automatiquement les suspensions des joueurs et l horloge de match garde les deux mi-temps parfaitement synchronisées. Que vous arbitriez un match de club local ou entraîniez une équipe junior, cet outil gère tous les détails du score et du chronométrage automatiquement.',
    },
    {
      type: 'title',
      text: 'Le Système de Score au Rugby à XV Expliqué',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le rugby à XV offre quatre façons de marquer des points, chacune nécessitant des compétences et des stratégies différentes. L essai est l action offensive la plus valorisée, récompensant les équipes qui percent la ligne défensive et aplatissent le ballon dans l en-but. Après un essai, l équipe qui a marqué tente une transformation pour deux points supplémentaires. Les pénalités et les drops ajoutent une profondeur tactique, permettant aux équipes de marquer depuis le jeu ouvert ou après des infractions adverses.',
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Essai',
          description: 'Aplatissez le ballon dans l en-but pour cinq points.',
          icon: 'mdi:rugby',
          points: ['Cinq points attribués', 'Permet une transformation', 'Nécessite d aplatir le ballon'],
        },
        {
          title: 'Transformation',
          description: 'Tirez entre les poteaux après un essai pour deux points.',
          icon: 'mdi:goal',
          points: ['Deux points si réussie', 'Tirée depuis la position de l essai', 'Doit passer entre les poteaux'],
        },
        {
          title: 'Pénalité',
          description: 'Tirez au but après une infraction adverse pour trois points.',
          icon: 'mdi:alert-octagon',
          points: ['Trois points attribués', 'Peut être tirée ou jouée à la main', 'Décide souvent des matchs serrés'],
        },
        {
          title: 'Drop',
          description: 'Tirez du rebond entre les poteaux en jeu ouvert pour trois points.',
          icon: 'mdi:circle-outline',
          points: ['Trois points attribués', 'Le ballon doit toucher le sol', 'Coup gagnant sous pression'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comprendre le Système d Exclusion Temporaire',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L exclusion temporaire est un système de suspension pour les infractions dangereuses ou répétées. Quand un arbitre montre un carton jaune, le joueur doit quitter le terrain pendant dix minutes de jeu actif. Pendant ce temps, son équipe évolue à un joueur de moins, créant un avantage numérique pour l équipe adverse. Le chronomètre d exclusion ne décompte que lorsque l horloge de match tourne, garantissant une application équitable quels que soient les arrêts de jeu.',
    },
    {
      type: 'list',
      items: [
        '<strong>Sanction Carton Jaune :</strong> Dix minutes d exclusion pour jeu dangereux ou infractions répétées de l équipe.',
        '<strong>Infériorité Numérique :</strong> L équipe fautive joue avec 14 joueurs au lieu de 15 pendant la suspension.',
        '<strong>Retour Automatique :</strong> Quand le chronomètre expire, le joueur réintègre automatiquement le match depuis la ligne médiane.',
        '<strong>Carton Rouge :</strong> Un deuxième carton jaune ou une faute grave entraîne un carton rouge et une exclusion définitive.',
      ],
    },
    {
      type: 'title',
      text: 'Gestion du Temps de Match et des Mi-temps',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un match standard de rugby à XV se divise en deux mi-temps de 40 minutes avec une pause de 10 minutes. L horloge de match tourne en continu pendant le jeu actif mais peut être arrêtée par l arbitre pour les blessures, les revues de jeu dangereux ou autres interruptions. Ce tableau de score numérique comprend une horloge précise avec des commandes de pause et de reprise, un suivi automatique des mi-temps et des indicateurs visuels clairs pour chaque période de jeu.',
    },
    {
      type: 'title',
      text: 'Pourquoi Utiliser un Tableau de Score Numérique pour le Rugby',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tenue manuelle du score au rugby est difficile en raison de la variété des méthodes de marque, de la gestion des temps d exclusion et du contrôle des mi-temps. Cet outil navigateur fournit un score précis en temps réel, des décomptes automatiques d exclusion et un chronométrage exact du match. Les entraîneurs peuvent se concentrer sur la stratégie de jeu plutôt que sur les calculs, les arbitres disposent d un système de secours fiable et les joueurs peuvent vérifier l état du match d un coup d œil.',
    },
  ],
  ui: {
    title: 'Tableau de Score Rugby',
    description: 'Suivez les scores et les chronomètres d exclusion.',
    home: 'Domicile',
    away: 'Extérieur',
    score: 'Score',
    tryLabel: 'Essai +5',
    conversion: 'Transformation +2',
    penalty: 'Pénalité +3',
    dropGoal: 'Drop +3',
    conversionYes: 'Oui',
    conversionNo: 'Non',
    sinBin: 'Carton Jaune',
    sinBinTitle: 'Exclusion Temporaire',
    sinBinPlayer: 'Nom ou numéro du joueur :',
    sinBinAdd: 'Démarrer l Exclusion',
    sinBinEmpty: 'Aucune exclusion en cours',
    sinBinReturn: 'De retour',
    matchClock: 'Horloge de Match',
    half: 'Mi-temps',
    half1: 'Première Mi-temps',
    half2: 'Deuxième Mi-temps',
    startMatch: 'Coup d Envoi',
    pauseMatch: 'Pause',
    resumeMatch: 'Reprendre',
    resetMatch: 'Réinitialiser le Match',
    resetConfirm: 'Réinitialiser le match en cours ? Tous les scores et chronomètres seront perdus.',
    cancel: 'Annuler',
    confirm: 'Confirmer la Réinitialisation',
    period: 'Période',
    scoringSummary: 'Résumé des Scores',
    tryScored: 'Essais',
    conversionSuccess: 'Transformations',
    conversionMiss: 'Transformations Manquées',
    penaltyScored: 'Pénalités',
    dropGoalScored: 'Drops',
    totalPoints: 'Total',
    fullscreen: 'Plein Écran',
    toggleSound: 'Activer le Son',
    eventLog: 'Journal des Événements',
    eventEmpty: 'Aucun événement pour le moment',
    undoBtn: 'Annuler le Dernier',
    timeOff: 'Temps Arrêté',
    timeOn: 'Temps en Marche',
  },
};
