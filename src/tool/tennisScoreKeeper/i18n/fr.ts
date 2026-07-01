import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TennisScoreKeeperUI } from '../ui';

const slug = 'scoreur-de-tennis';
const title = 'Scoreur de Tennis en Ligne: Suivi de Matchs Gratuit';
const description = 'Suivez les matchs de tennis avec le score des sets et des jeux. Scoreur de tennis en ligne gratuit pour les matchs et les tournois. Aucune inscription requise.';

const faqData = [
  {
    question: 'Comment fonctionne le score au tennis ?',
    answer: 'Les matchs de tennis se jouent en jeux et en sets. Un jeu est compté Love, 15, 30, 40. Un score de 40-40 est appelé Deuce, ce qui exige qu\'un joueur gagne 2 points consécutifs. Un set est gagné par le premier joueur qui remporte 6 jeux avec une avance de 2 jeux. Si le score atteint 6-6, un tiebreak est joué.',
  },
  {
    question: 'Comment utiliser ce scoreur de tennis ?',
    answer: 'Appuyez sur le bouton plus pour un joueur quand il marque. Le score se met à jour automatiquement. Le scoreur suit l\'ordre du service, les scores des jeux, les sets en cours et l\'historique des sets terminés.',
  },
  {
    question: 'Quand les joueurs de tennis changent-ils de côté ?',
    answer: 'Les joueurs de tennis changent de côté après le premier, le troisième et chaque jeu impair suivant de chaque set. Ils changent également à la fin d\'un set sauf si le nombre total de jeux est pair. Dans un tiebreak, les joueurs changent de côté tous les 6 points.',
  },
  {
    question: 'Ce scoreur prend-il en charge les tiebreaks ?',
    answer: 'Oui, quand un set atteint 6-6, le scoreur passe automatiquement en mode tiebreak où les points sont comptés numériquement jusqu\'à 7. Un joueur doit gagner par 2 points d\'écart pour conclure le tiebreak et le set.',
  },
  {
    question: 'Puis-je l\'utiliser sur mon téléphone mobile ?',
    answer: 'Oui, l\'interface est optimisée pour les appareils mobiles avec de gros boutons. Vous pouvez également passer en mode plein écran pour garder l\'écran allumé pendant le match.',
  },
];

const howToData = [
  {
    name: 'Définir les noms des joueurs',
    text: 'Appuyez sur les champs de saisie des noms pour saisir des noms personnalisés. Ils sont sauvegardés dans votre navigateur.',
  },
  {
    name: 'Ajouter des points',
    text: 'Cliquez sur le bouton plus du joueur qui a gagné l\'échange. Le score se mettra à jour automatiquement.',
  },
  {
    name: 'Gérer les résultats des sets',
    text: 'Le tracker conclut automatiquement les jeux et les sets. Il archive les sets terminés et passe au set suivant.',
  },
  {
    name: 'Changer de côté',
    text: 'Le scoreur vous alerte quand les joueurs doivent changer de côté. Appuyez sur le bouton d\'échange pour permuter les côtés visuels.',
  },
  {
    name: 'Conclusion du match',
    text: 'Le tracker conclut automatiquement le match selon les règles du tennis et annonce le gagnant.',
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
  applicationCategory: 'SportsApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<TennisScoreKeeperUI> = {
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
      text: 'Scoreur de Tennis en Ligne Gratuit et Suivi de Matchs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Compter les points au tennis peut être difficile avec des termes comme deuce, avantage et tiebreak. Ce scoreur de tennis en ligne gratuit automatise entièrement le processus. Vous n\'avez qu\'à appuyer sur le bouton plus quand un joueur marque. L\'outil gère les points, les jeux, les sets et les changements de côté automatiquement en temps réel.',
    },
    {
      type: 'title',
      text: 'Comment le score du tennis fonctionne dans ce scoreur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le tennis utilise une structure de score unique. Un jeu standard progresse à travers Love, 15, 30, 40 et Jeu. Quand les deux joueurs atteignent 40, le score est Deuce. Depuis Deuce, un joueur doit marquer deux points consécutifs pour gagner le jeu. Le premier point est appelé Avantage, et le point suivant sécurise le jeu. Si le joueur adverse gagne le point suivant, le score revient à Deuce. Les sets sont gagnés par le premier joueur à remporter 6 jeux avec une marge de 2. Quand le set atteint 6-6, un tiebreak est joué jusqu\'à 7 points.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Matchs Amicaux',
          description: 'Score rapide et facile pour les matchs de tennis décontractés entre amis.',
          icon: 'mdi:tennis',
          points: ['Score en un clic', 'Indicateur de changement de côté', 'Fonctionne hors ligne'],
        },
        {
          title: 'Club',
          description: 'Suivi parfait pour les matchs de club et les tournois.',
          icon: 'mdi:trophy-outline',
          points: ['Archive historique des sets', 'Meilleur de 3 ou 5 sets', 'Adapté aux mobiles'],
        },
        {
          title: 'Tournois',
          description: 'Conçu pour le suivi officiel des matchs et l\'utilisation arbitrale.',
          icon: 'mdi:school',
          points: ['Support des tiebreaks', 'Tableau de bord plein écran', 'Sécurité des données locales'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fonctionnalités spéciales du scoreur',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Logique automatique des règles du tennis</strong> calcule Love, 15, 30, 40, deuce, avantage et tiebreak automatiquement.',
        '<strong>Archive historique des sets</strong> montre le score des sets précédents en un coup d\'œil.',
        '<strong>Aide au changement de côté</strong> invite les joueurs à changer de côté.',
        '<strong>Célébrations de points vibrantes</strong> affiche des particules flottantes pour les points gagnés.',
        '<strong>Meilleur de 3 ou 5 sets</strong> paramètres de format de match configurables.',
        '<strong>Noms sauvegardés localement</strong> conserve les noms personnalisés entre les visites.',
      ],
    },
    {
      type: 'title',
      text: 'Score numérique vs Suivi manuel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les tableaux de bord manuels exigent une concentration constante pour mettre à jour les chiffres, se souvenir de la rotation du service, vérifier les tiebreaks et calculer les changements de côté. Ce scoreur de tennis numérique gère chaque règle du tennis automatiquement. Vous pouvez vous concentrer entièrement sur le match pendant que l\'outil met à jour les historiques de sets et annonce le gagnant avec une cérémonie de célébration.',
    },
  ],
  ui: {
    playerA: 'Joueur 1',
    playerB: 'Joueur 2',
    winnerLabel: 'CHAMPION',
    finishMatch: 'Terminer le match',
    newGame: 'Nouveau set',
    serving: 'Service',
    changeSide: 'Changer de côté',
    swapHint: 'Appuyer pour changer de côté',
    game: 'Jeu',
    set: 'Set',
    gamePoint: 'Point de jeu',
    setPoint: 'Point de set',
    matchPoint: 'Point de match',
    mode: 'Sets',
    bo3: 'BO3',
    bo5: 'BO5',
    points: 'Points',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser le match ? Toutes les données seront perdues.',
    cancel: 'Annuler',
    fullscreen: 'Plein écran',
    exitFullscreen: 'Quitter le plein écran',
    deuce: 'Deuce',
    advantage: 'Avantage',
    tiebreak: 'Tiebreak',
  },
};
