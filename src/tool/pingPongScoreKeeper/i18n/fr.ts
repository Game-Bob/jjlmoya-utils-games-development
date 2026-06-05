import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PingPongScoreKeeperUI } from '../ui';

const slug = 'scoreur-de-ping-pong';
const title = 'Scoreur de Ping Pong en Ligne : Compteur de Tennis de Table Gratuit';
const description =
  'Suivez les matchs de tennis de table avec le décompte des jeux et des sets. Scoreur de ping pong en ligne gratuit pour les parties amicales et les tournois. Aucune inscription requise.';

const faqData = [
  {
    question: 'Comment fonctionne le score au ping pong ?',
    answer:
      'Un jeu de ping pong standard se joue en 11 points. Il faut gagner avec 2 points d\'écart. Si le score atteint 10-10, le jeu continue jusqu\'à ce qu\'un joueur mène de 2 points. Le service change tous les 2 points. Ce scoreur gère tout cela automatiquement.',
  },
  {
    question: 'Comment utiliser ce scoreur ?',
    answer:
      'Appuyez sur le bouton + sous chaque joueur pour ajouter un point. Le score se met à jour automatiquement. Quand un joueur atteint 11 avec 2 points d\'avance, le jeu se termine et un nouveau commence. Le compteur de jeux gagnés indique combien de jeux chaque joueur a remportés. Appuyez sur Terminer le match quand la partie est finie.',
  },
  {
    question: 'Comment fonctionne l\'indicateur de service ?',
    answer:
      'Le service change tous les 2 points. Un point apparaît à côté du joueur qui sert. Cela suit les règles officielles du tennis de table. Vous pouvez savoir à tout moment qui doit servir pendant le match.',
  },
  {
    question: 'Puis-je l\'utiliser sur mon téléphone pendant un match ?',
    answer:
      'Oui. L\'interface est adaptée aux mobiles avec de gros boutons. Le mode plein écran cache le navigateur et maintient l\'écran allumé.',
  },
  {
    question: 'Est-ce que ça sauvegarde les données du match ?',
    answer:
      'Oui. Le score actuel, les jeux gagnés et les noms des joueurs sont sauvegardés automatiquement dans votre navigateur.',
  },
];

const howToData = [
  {
    name: 'Nommer les joueurs',
    text: 'Appuyez sur le nom de joueur par défaut et saisissez le vôtre. Les noms sont sauvegardés automatiquement.',
  },
  {
    name: 'Ajouter un point',
    text: 'Appuyez sur le grand bouton circulaire + du joueur qui a marqué. Le score se met à jour avec une animation de célébration.',
  },
  {
    name: 'Retirer un point',
    text: 'Appuyez sur le bouton moins si vous avez ajouté un point par erreur.',
  },
  {
    name: 'Commencer un nouveau jeu',
    text: 'Quand un jeu se termine, appuyez sur Nouveau jeu pour commencer le suivant. Ou appuyez sur Terminer le match pour finir la rencontre.',
  },
  {
    name: 'Terminer le match',
    text: 'Appuyez sur Terminer le match pour voir le gagnant annoncé avec un trophée et des confettis.',
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

export const content: ToolLocaleContent<PingPongScoreKeeperUI> = {
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
      text: 'Scoreur de Ping Pong en Ligne Gratuit : Suivi de Matchs de Tennis de Table',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Compter les points au ping pong devrait être simple, mais les règles peuvent prêter à confusion. Qui sert ensuite ? Est-ce 10-10 ou 11-9 ? Combien de jeux chaque joueur a-t-il gagnés ? Ce scoreur de ping pong en ligne gratuit s\'occupe de tout automatiquement. Vous appuyez simplement sur le bouton + quand quelqu\'un marque. Le scoreur suit les points par jeu, les jeux gagnés dans le match et qui sert. Tout se met à jour en temps réel avec des animations de célébration qui donnent de l\'importance à chaque point. Pas d\'inscription, pas de téléchargement, pas de menus compliqués.',
    },
    {
      type: 'title',
      text: 'Comment le score du ping pong fonctionne dans ce scoreur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le tennis de table suit un système de score standard. Chaque jeu se joue en 11 points. Un joueur doit gagner par 2 points d\'écart, donc si le score atteint 10-10, le jeu continue jusqu\'à ce qu\'un joueur mène de 2 points. Le service change tous les 2 points pendant un jeu. Ce scoreur suit toutes ces règles automatiquement. Vous n\'avez pas besoin de vous rappeler qui sert ou quand changer. L\'indicateur de service montre un point à côté du serveur actuel. Quand un joueur gagne un jeu, le scoreur passe automatiquement au jeu suivant. Le compteur de jeux gagnés augmente pour le gagnant. Un match peut comporter n\'importe quel nombre de jeux, mais il est généralement au meilleur de 5 ou 7. Appuyez sur Terminer le match quand la partie est terminée et le gagnant est annoncé avec une célébration.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Parties Amicales',
          description: 'Comptage rapide et facile pour le ping pong décontracté entre amis. Suivi automatique des jeux et des matchs.',
          icon: 'mdi:table-tennis',
          points: ['Un clic par point', 'Suivi automatique du service', 'Fonctionne hors ligne'],
        },
        {
          title: 'Club & Ligue',
          description: 'Gardez un registre propre des jeux et des résultats. Parfait pour les tournois de club et les matchs de ligue.',
          icon: 'mdi:trophy-outline',
          points: ['Suivi des jeux gagnés', 'Support meilleur de 5 ou 7', 'Adapté aux mobiles'],
        },
        {
          title: 'Tournois',
          description: 'Suivez plusieurs matchs dans un cadre de tournoi. Réinitialisation rapide entre les rencontres.',
          icon: 'mdi:school',
          points: ['Réinitialisation rapide', 'Score persistant', 'Mode plein écran'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Ce qui rend ce scoreur de ping pong spécial',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Score automatique</strong> le scoreur connaît les règles du ping pong. Jeux à 11, gagner par 2, changements de service automatiques.',
        '<strong>Suivi des jeux gagnés</strong> chaque jeu gagné est enregistré. Voyez d\'un coup d\'œil combien de jeux chaque joueur a remportés dans le match.',
        '<strong>Indicateur de service</strong> un point visible montre quel joueur sert, suivant la règle de rotation tous les 2 points.',
        '<strong>Animations de célébration</strong> chaque point déclenche une animation aléatoire. Huit effets différents rendent chaque point excitant.',
        '<strong>Particules flottantes</strong> chaque point marqué génère du texte flottant célébrant le moment.',
        '<strong>Cérémonie de fin de match</strong> appuyez sur Terminer le match pour déclencher l\'annonce du gagnant avec trophée et confettis.',
        '<strong>Noms modifiables</strong> appuyez sur le champ du nom pour renommer les joueurs. Les noms sont sauvegardés dans votre navigateur.',
        '<strong>Mode plein écran</strong> cache l\'interface du navigateur pour que le scoreur remplisse l\'écran et le maintienne éveillé.',
        '<strong>Priorité hors ligne</strong> fonctionne sans internet. Pas de publicité, pas de pistage, pas de collecte de données.',
      ],
    },
    {
      type: 'title',
      text: 'Scoreur de Ping Pong vs Comptage Manuel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le comptage manuel au ping pong nécessite de suivre le score, de se rappeler qui sert, de savoir quand changer de serveur et de compter les jeux gagnés. Il est facile de perdre le fil, surtout dans un jeu rapide. Ce scoreur numérique gère tout automatiquement. Vous n\'avez qu\'à appuyer sur un bouton quand un point est marqué. Le scoreur suit le score du jeu, détecte quand un jeu est gagné, enregistre les jeux gagnés dans le match et montre qui sert. Chaque point est célébré avec des animations et des particules. Le score ne se trompe jamais et vous ne ratez jamais un changement de service. Que vous jouiez une partie décontractée entre amis ou que vous participiez à un tournoi, ce scoreur de ping pong en ligne gratuit vous donne tout ce dont vous avez besoin.',
    },
  ],
  ui: {
    playerA: 'Joueur 1',
    playerB: 'Joueur 2',
    winnerLabel: 'CHAMPION',
    finishMatch: 'Terminer le match',
    newGame: 'Nouveau jeu',
    serving: 'Service',
    changeSide: 'Changer de côté',
    swapHint: 'Appuyer pour permuter',
    game: 'Jeu',
    set: 'Set',
    gamePoint: 'Point de jeu',
    matchPoint: 'Point de match',
    mode: 'Format',
    bo1: 'BO1',
    bo3: 'BO3',
    bo5: 'BO5',
    bo7: 'BO7',
    points: 'Points',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser le match ? Toutes les données seront perdues.',
    cancel: 'Annuler',
    fullscreen: 'Plein écran',
    exitFullscreen: 'Quitter le plein écran',
  },
};
