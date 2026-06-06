import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PadelScoreKeeperLocaleContent } from '../entry';

const slug = 'scoreur-de-padel';
const title = 'Scoreur de Padel : Point d\'Or et Rotation du Service';
const description = 'Suivez les scores au padel avec la règle officielle du Point d\'Or (Punto de Oro), les alertes de rotation du service, les tie-breaks et une animation dynamique de changement de côté.';

const faq = [
  {
    question: 'Qu\'est-ce que le Point d\'Or (Punto de Oro) au Padel ?',
    answer: 'Le Point d\'Or est un point décisif joué lorsque le score atteint 40-40 (Deuce). Il n\'y a pas d\'avantage. L\'équipe qui reçoit choisit de recevoir le service à gauche ou à droite, et celui qui remporte ce seul point gagne tout le jeu.',
  },
  {
    question: 'Comment fonctionnent les formats de set au Padel ?',
    answer: 'Les matchs standards se jouent au meilleur de 3 sets, chaque set étant remporté par la première équipe à atteindre 6 jeux (avec une avance de 2). Si le score atteint 6-6, un tie-break en 7 points est joué. Un format Golden Set optionnel se termine à 4 jeux avec un tie-break à 4-4.',
  },
  {
    question: 'Quand les joueurs changent-ils de côté au Padel ?',
    answer: 'Les joueurs changent de côté après le premier jeu, puis tous les 2 jeux (lorsque la somme des jeux du set en cours est impaire, ex. 1, 3, 5). Pendant les tie-breaks, les joueurs changent de côté tous les 6 points.',
  },
];

const howTo = [
  {
    name: 'Configurer le format du match',
    text: 'Sélectionnez le format standard (premier à 6 jeux) ou le format plus court Golden Set (premier à 4 jeux).',
  },
  {
    name: 'Saisir les noms des joueurs',
    text: 'Entrez les noms des équipes pour personnaliser le tableau d\'affichage. Vos configurations sont sauvegardées automatiquement.',
  },
  {
    name: 'Enregistrer les points sur le terrain',
    text: 'Tapez sur l\'un ou l\'autre côté du terrain de padel isométrique pour marquer des points. Les indicateurs de service vous guideront sur les rotations diagonales.',
  },
  {
    name: 'Décider les Points d\'Or',
    text: 'Lorsque le deuce est atteint, sélectionnez le côté de retour (récepteur gauche ou droit) et cliquez sur l\'équipe gagnante pour conclure le jeu.',
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

export const content: PadelScoreKeeperLocaleContent = {
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
      text: 'Tableau d\'Affichage de Padel en Ligne Gratuit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Suivre les scores au padel peut devenir compliqué avec les échanges rapides, les tie-breaks, les changements de côté et la règle officielle du Point d\'Or (Punto de Oro). Ce tableau d\'affichage de padel en ligne gratuit simplifie la gestion des scores. Tapez simplement sur le terrain visuel pour enregistrer les points, et laissez l\'outil gérer automatiquement les rotations du serveur, les côtés du receveur, l\'historique des sets et les changements de terrain en temps réel.',
    },
    {
      type: 'title',
      text: 'Comprendre le Score au Padel, les Points d\'Or et les Rotations',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le padel suit un système de score similaire au tennis (15, 30, 40, Jeu) mais introduit des règles spécifiques pour un jeu plus rapide. Selon les règles professionnelles de la FIP, lorsque le score atteint 40-40, un Point d\'Or (Punto de Oro) décisif est joué. L\'équipe qui reçoit choisit quel côté (gauche ou droit) recevra le service, et le gagnant de ce seul point remporte le jeu. De plus, les équipes doivent changer de côté chaque fois que le nombre total de jeux dans un set est impair, et tous les 6 points pendant un tie-break.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Matchs Amicaux',
          description: 'Gestion rapide et propre des scores pour les matchs amicaux avec vos partenaires de padel.',
          icon: 'mdi:tennis',
          points: ['Ajout de points en un clic', 'Interface adaptée au mobile', 'Fonctionne hors ligne'],
        },
        {
          title: 'Club et Ligue',
          description: 'Suivez les matchs de club compétitifs et les tournois locaux en toute simplicité.',
          icon: 'mdi:trophy-outline',
          points: ['Archivage de l\'historique des sets', 'Sets de 6 ou 4 jeux', 'Support du Point d\'Or'],
        },
        {
          title: 'Mode Arbitre',
          description: 'Outil complet pour arbitrer des matchs officiels ou des séances d\'entraînement.',
          icon: 'mdi:school',
          points: ['Marqueurs service et réception', 'Rotation interactive du terrain', 'Mode console plein écran'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fonctionnalités Numériques Avancées pour les Joueurs de Padel',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Logique Officielle du Point d\'Or</strong> permet à l\'équipe qui reçoit de choisir le côté du receveur à égalité, en affichant la trajectoire du service.',
        '<strong>Indicateur Visuel du Terrain</strong> montre les positions du serveur (S) et du receveur (R) dynamiquement pour éviter les erreurs de rotation.',
        '<strong>Changement Automatique des Côtés</strong> fait pivoter la disposition du terrain sur les jeux impairs ou les intervalles de tie-break pour qu\'elle corresponde toujours à votre vue physique.',
        '<strong>Formats de Set Personnalisables</strong> prend en charge les sets standard de 6 jeux ou les Golden Sets rapides de 4 jeux.',
        '<strong>Auto-Sauvegarde dans le Navigateur</strong> conserve les noms des joueurs et les scores du match même si vous rafraîchissez la page.',
      ],
    },
    {
      type: 'title',
      text: 'Règles du Tie-Break au Padel : Standard vs Super Tie-Break',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dans les sets standard de padel, si le score atteint 6-6 dans les jeux, un tie-break en 7 points est joué. Dans un tie-break, les points sont comptés numériquement (1, 2, 3, etc.). La première équipe à atteindre 7 points avec un écart de 2 remporte le set. Le joueur dont c\'est le tour de servir sert le premier point depuis le côté droit (deuce). Ensuite, chaque joueur sert deux points consécutifs, en commençant par le côté gauche (avantage). Dans certains formats de tournoi, si le match est à 1-1 dans les sets, un Super Tie-Break en 10 points est joué au lieu d\'un troisième set complet pour décider du match.',
    },
    {
      type: 'title',
      text: 'Changement de Côté et Rotations : Pour l\'Équité au Padel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le changement de côté est essentiel au padel pour garantir que les facteurs environnementaux tels que le soleil, le vent ou les imperfections du terrain ne favorisent pas une équipe par rapport à une autre. Les joueurs doivent échanger les côtés après le premier jeu de chaque set, puis tous les deux jeux (ex. à 1-0, 2-1, 3-2, 4-3, 5-4). Notre tableau d\'affichage numérique de padel propose une animation dynamique de changement de côté qui fait automatiquement pivoter la disposition visuelle du terrain de 180 degrés lorsque les joueurs doivent changer de côté physiquement. Cela garantit que l\'équipe affichée en haut de votre écran correspond toujours à l\'équipe jouant à l\'autre extrémité du terrain physique.',
    },
    {
      type: 'title',
      text: 'Format Standard vs Golden Set',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alors que les matchs standards se jouent en 6 jeux par set, de nombreuses ligues récréatives et tournois rapides adoptent le format "Golden Set" où les sets se jouent seulement en 4 jeux (avec un tie-break à 4-4). Ce tableau d\'affichage vous permet de passer d\'un format à l\'autre d\'une simple tape dans la barre d\'outils. Quel que soit le format sélectionné, le tableau gère automatiquement tous les tie-breaks, les rotations de service et les calculs de score.',
    },
    {
      type: 'title',
      text: 'Conseils pour un Suivi Efficace des Scores sur le Terrain',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Utilisez un Support de Terrain ou un Support Téléphone :</strong> Montez votre téléphone ou tablette sur le grillage du terrain de padel à hauteur de filet. Cela permet aux joueurs des deux côtés de voir facilement le score actif et les indicateurs de service.',
        '<strong>Personnalisez les Noms Avant de Commencer :</strong> Prenez 10 secondes pour saisir les vrais noms des joueurs ou des équipes. Cela rend les annonces vocales (si activées) et le tableau d\'affichage visuel beaucoup plus attrayants et officiels.',
        '<strong>Activez le Mode Plein Écran :</strong> Cliquez sur le bouton plein écran dans le panneau d\'en-tête. Cela maximise l\'interface du tableau d\'affichage et empêche l\'écran de s\'éteindre automatiquement pendant les longs échanges.',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi Utiliser un Scoreur Numérique de Padel ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Au lieu de discuter constamment pour savoir qui sert, à qui le tour de recevoir ou quel est le score du jeu, un suivi numérique maintient tout le monde aligné. En affichant visuellement les positions du serveur et du receveur directement sur l\'écran, les joueurs peuvent jeter un coup d\'œil rapide au téléphone sur le banc et savoir exactement où se placer. Cela améliore le rythme de jeu et évite les erreurs de rotation.',
    },
  ],
  ui: {
    playerA: 'Équipe 1',
    playerB: 'Équipe 2',
    game: 'Jeu',
    set: 'Set',
    tiebreak: 'Tie-Break',
    goldPoint: 'Point d\'Or',
    selectReceiver: 'Choisir le Receveur',
    leftReceiver: 'Receveur Gauche',
    rightReceiver: 'Receveur Droit',
    server: 'Serveur',
    receiver: 'Receveur',
    changeEnds: 'Changer de Côté',
    matchWon: 'Match Gagné',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser le match ? Toutes les données seront perdues.',
    cancel: 'Annuler',
    fullscreen: 'Plein Écran',
    exitFullscreen: 'Quitter le Plein Écran',
    deuce: 'Égalité',
    advantage: 'Avantage',
    formatStandard: '6 Jeux',
    formatGoldenSet: '4 Jeux',
    goldenSet: 'Golden Set',
    goldPointTitle: 'Point d\'Or Décisif',
  },
};
