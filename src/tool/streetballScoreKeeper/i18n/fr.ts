import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { StreetballLocaleContent } from '../entry';

const slug = 'scoreur-streetball-3x3';
const title = 'Scoreur Streetball 3x3 avec Chronomètre de Tir';
const description = 'Suivez les scores du streetball FIBA 3x3 avec un chronomètre de tir de 12 secondes intégré, les fautes d\'équipe, les points de mort subite et des indicateurs visuels de demi-terrain dynamiques.';

const faq = [
  {
    question: 'Comment fonctionne le chronomètre de tir de 12 secondes en streetball 3x3 ?',
    answer: 'En FIBA 3x3, les équipes n\'ont que 12 secondes pour tenter un tir après avoir obtenu la possession. Le chronomètre se réinitialise à 12 sur un changement de possession ou à 14 secondes sur les rebonds offensifs et les fautes dans certaines conditions.',
  },
  {
    question: 'Quelle est la limite de score pour la mort subite en basket 3x3 ?',
    answer: 'La première équipe qui marque 21 points remporte le match immédiatement, quel que soit le temps restant au chronomètre. C\'est la règle de la mort subite.',
  },
  {
    question: 'Comment les fautes d\'équipe affectent-elles le match ?',
    answer: 'À partir de la 7e faute d\'équipe, les adversaires obtiennent 2 lancers francs. À la 10e faute et au-delà, ils reçoivent 2 lancers francs plus la possession du ballon, déclenchant l\'état de pénalité.',
  },
];

const howTo = [
  {
    name: 'Configurer les noms d\'équipe',
    text: 'Saisissez des noms personnalisés pour les deux équipes de streetball afin de personnaliser l\'affichage.',
  },
  {
    name: 'Enregistrer les points et la possession',
    text: 'Tapez sur le terrain en asphalte interactif pour ajouter 1 point (à l\'intérieur de l\'arc) ou 2 points (à l\'extérieur de l\'arc) et basculez l\'indicateur de possession.',
  },
  {
    name: 'Contrôler le chronomètre de tir',
    text: 'Tapez sur le chronomètre pour le remettre à 12, cliquez sur la remise à zéro secondaire pour 14, ou double-cliquez pour mettre le décompte en pause.',
  },
  {
    name: 'Gérer les fautes d\'équipe',
    text: 'Suivez les fautes d\'équipe à l\'aide du compteur, qui passe au rouge une fois en état de pénalité (7 fautes et plus).',
  },
];

const faqSchema: WithContext<FAQPage> = {
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
  description,
  step: howTo.map((step, i) => ({
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
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: StreetballLocaleContent = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Tableau d\'affichage streetball 3x3 gratuit en ligne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Garder le score dans des matchs de basket 3x3 rapides peut être difficile tout en gérant un chronomètre de tir court et en suivant les fautes d\'équipe. Ce tableau d\'affichage de streetball 3x3 gratuit en ligne offre un thème asphalte industriel avec un style néon à fort contraste. Il gère automatiquement le chronomètre de tir de 12 secondes, l\'horloge de match, le système de pénalité pour fautes et les indicateurs de possession.',
    },
    {
      type: 'title',
      text: 'Règles de score et chronomètre de tir FIBA 3x3 Streetball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le streetball FIBA 3x3 diffère du basket-ball traditionnel 5x5. Les matchs durent une période de 10 minutes ou se terminent immédiatement quand une équipe atteint 21 points (mort subite). Les tirs à l\'intérieur de l\'arc et les lancers francs comptent pour 1 point, tandis que les tirs effectués derrière l\'arc à 6,75 m comptent pour 2 points. Le chronomètre de tir de 12 secondes impose des actions offensives rapides, et les joueurs doivent dégager le ballon derrière l\'arc lors d\'un changement de possession.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Matchs informels',
          description: 'Comptage rapide des points pour le basket de rue entre amis sur les terrains locaux.',
          icon: 'mdi:basketball',
          points: ['Déclencheurs simples', 'Disposition adaptative', 'Fonctionne hors ligne'],
        },
        {
          title: 'Tournois officiels',
          description: 'Parfait pour les tournois officiels 3x3 et les ligues de streetball.',
          icon: 'mdi:trophy-outline',
          points: ['Compte à rebours 10 min', 'Mort subite à 21 pts', 'États de pénalité'],
        },
        {
          title: 'Tableau de l\'arbitre',
          description: 'Conçu pour les arbitres afin de gérer les réinitialisations rapides du chronomètre de tir et la possession.',
          icon: 'mdi:school',
          points: ['Remises à zéro 12s et 14s', 'Son de buzzer', 'Gestes tactiles'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Contrôles interactifs et animations tactiles',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Chronomètre de tir 12 secondes</strong> clignote en rouge et affiche les décimales sous 4 secondes, suivi d\'un buzzer simulé.',
        '<strong>Demi-terrain en béton interactif</strong> permet de taper les zones à 1 et 2 points pour enregistrer les scores directement sur le schéma.',
        '<strong>Avertissement de fautes</strong> devient rouge et tremble pour indiquer les pénalités d\'équipe (7+ et 10+ fautes).',
        '<strong>Indicateur de dégagement</strong> affiche un rappel lors d\'un changement de possession jusqu\'à ce que le ballon soit dégagé derrière l\'arc.',
        '<strong>Gestion des temps morts</strong> déclenche un décompte de 30 secondes avec des alertes sonores personnalisées.',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi utiliser un tracker de streetball numérique ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un tableau d\'affichage numérique élimine les désaccords sur les scores, les fautes ou les violations du chronomètre de tir sur le terrain. Les chiffres néon lumineux sont faciles à lire à distance, et les rappels automatiques de possession et de dégagement garantissent un déroulement fluide du match sans interruptions.',
    },
  ],
  ui: {
    teamA: 'Équipe 1',
    teamB: 'Équipe 2',
    points: 'Points',
    fouls: 'Fautes',
    timeouts: 'Temps morts',
    shotClock: 'Chrono de tir',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser le match ? Toutes les données seront perdues.',
    cancel: 'Annuler',
    gameTime: 'Temps',
    possession: 'Possession',
    clearBall: 'Dégager le ballon',
    matchWon: 'Match gagné',
    timeoutActive: 'Temps mort',
    penalty: 'Pénalité',
    fullscreen: 'Plein écran',
    exitFullscreen: 'Quitter le plein écran',
    overtime: 'Prolongation',
    ptsInside: '+1 Point',
    ptsOutside: '+2 Points',
    toggleSound: 'Activer le son',
    soundOn: 'Son activé',
    soundOff: 'Son désactivé',
  },
};
