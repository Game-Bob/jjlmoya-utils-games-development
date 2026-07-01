import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { BaseballScoreKeeperLocaleContent } from '../entry';

const slug = 'marqueur-baseball';
const title = 'Marqueur de Baseball et Softball avec Suivi des Coureurs';
const description = 'Suivez les scores de baseball en direct avec les points, les coups sûrs et les erreurs. Diamant visuel avec positions des coureurs, compteur de balles et de prises, et historique manche par manche.';

const faqData = [
  {
    question: 'Comment fonctionne le compteur de lancers au baseball?',
    answer: 'Le compteur indique le nombre de balles et de prises sur le frappeur actuel. Les balles vont jusqu\'à 4 pour un but sur balles. Les prises vont jusqu\'à 3 pour un retrait sur des prises. Limites réglables pour les ligues de jeunes.',
  },
  {
    question: 'Que montre le diamant de baseball interactif?',
    answer: 'Le diamant montre les premières, deuxième et troisième bases. Toucher une base la surligne en orange pour indiquer qu\'un coureur est sur cette base. Les coureurs avancent automatiquement sur les coups sûrs.',
  },
  {
    question: 'Comment les points, les coups sûrs et les erreurs sont-ils suivis?',
    answer: 'La matrice P C E affiche les points, les coups sûrs et les erreurs pour les deux équipes. L\'historique manche par manche montre comment le score s\'est construit au fil des manches.',
  },
];

const howToData = [
  {
    name: 'Enregistrer Chaque Lancer',
    text: 'Touchez Prise, Balle, Fausse, Coup sûr ou Retrait pour enregistrer chaque lancer. Le compteur se met à jour automatiquement selon le résultat.',
  },
  {
    name: 'Gérer les Coureurs',
    text: 'Touchez les bases sur le diamant pour placer ou retirer des coureurs. Sur un coup sûr, les coureurs avancent automatiquement.',
  },
  {
    name: 'Suivre la Progression des Manches',
    text: 'L\'affichage de la manche montre la demi-manche en cours. Après trois retraits, le jeu bascule automatiquement entre les moitiés haute et basse.',
  },
  {
    name: 'Consulter la Feuille de Match',
    text: 'Vérifiez le résumé P C E et la grille d\'historique des manches pour voir la progression complète du score.',
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

export const content: BaseballScoreKeeperLocaleContent = {
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
      text: 'Marqueur de Baseball Gratuit en Ligne: Suivez les Points les Coups Sûrs et les Erreurs avec un Diamant en Direct',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Besoin d\'un marqueur de baseball fiable pour votre prochain match? Cet outil gratuit en ligne suit les points, les coups sûrs et les erreurs tout en affichant un diamant interactif en direct avec les positions des coureurs en temps réel. Chaque lancer compte et notre tableau de bord numérique vous garantit de ne jamais perdre la trace du compteur, des retraits ou de la manche. Que vous entraîniez une ligue de jeunes, que vous teniez le score pour un tournoi de softball ou que vous dirigiez un match de lycée, cet outil gère automatiquement toute la feuille de match pour que vous puissiez vous concentrer sur l\'action sur le terrain.',
    },
    {
      type: 'title',
      text: 'Comment Ce Tableau de Bord de Baseball Vous Fait Gagner du Temps et Évite les Erreurs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tenue manuelle du score est sujette aux erreurs, surtout pendant les matchs rapides. Une prise manquée ou un coureur oublié peut fausser toute la feuille de match. Ce marqueur numérique automatise les parties fastidieuses. Touchez Prise, Balle, Fausse, Coup sûr ou Retrait et le tableau met à jour le compteur instantanément. Quand un frappeur obtient un but sur balles ou est retiré sur des prises, l\'outil remet le compteur à zéro automatiquement. Après trois retraits, il bascule la manche de haute à basse et enregistre les points. La matrice P C E et la grille d\'historique manche par manche vous donnent une image complète du match en un coup d\'œil.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Compteur de Lancers en Direct',
          description: 'Suivi automatisé des balles et des prises avec détection des buts sur balles et des retraits sur des prises pour chaque présence au bâton.',
          icon: 'mdi:baseball',
          points: ['Balles comptées jusqu\'à 4', 'Prises comptées jusqu\'à 3', 'Remise à zéro automatique sur décision'],
        },
        {
          title: 'Gestion des Coureurs',
          description: 'Diamant interactif montrant exactement qui est sur la première, deuxième ou troisième base.',
          icon: 'mdi:diamond-stone',
          points: ['Touchez les bases pour placer les coureurs', 'Surlignage visuel quand occupée', 'Vidage au changement de manche'],
        },
        {
          title: 'Feuille de Match Complète',
          description: 'Statistiques P C E complètes avec historique des scores manche par manche.',
          icon: 'mdi:scoreboard-outline',
          points: ['Points coups sûrs et erreurs', 'Grille manche par manche', 'Totaux cumulés pour les deux équipes'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Qui a Besoin de Ce Suivi de Baseball',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cet outil est conçu pour tous ceux qui ont besoin de tenir le score: les entraîneurs de baseball juniors qui veulent un affichage numérique clair pour leurs joueurs, les bénévoles de ligues de softball qui gèrent des matchs sans marqueur dédié, les parents qui suivent les matchs de leurs enfants depuis les tribunes et les arbitres qui veulent un système de vérification secondaire. L\'interface fonctionne sur tous les appareils, des smartphones dans l\'abri des joueurs aux tablettes montées sur la clôture ou aux ordinateurs portables sur le banc. Aucune installation requise, ouvrez simplement le navigateur et commencez à marquer.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gestion Automatique du Compteur:</strong> Les balles et les prises se remettent à zéro automatiquement après les buts sur balles, les retraits sur des prises, les coups sûrs et les retraits. Aucune remise à zéro manuelle nécessaire.',
        '<strong>Diamant Tactile:</strong> Touchez la première, deuxième ou troisième base pour placer ou retirer des coureurs. Le diamant s\'allume en or pour montrer les bases occupées.',
        '<strong>Scores Manche par Manche:</strong> Chaque demi-manche est enregistrée dans la grille. Voyez exactement comment chaque équipe a marqué sur les neuf manches.',
        '<strong>Aucune Configuration Requise:</strong> Ouvrez la page et commencez à marquer immédiatement. Personnalisez les noms des équipes en touchant les étiquettes au-dessus des scores.',
      ],
    },
    {
      type: 'title',
      text: 'Marquage de Baseball Simplifié: Compteur Diamant et Feuille de Match en Un Seul Endroit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenir le score au baseball nécessite de suivre plusieurs choses à la fois: le compteur de balles et de prises, le nombre de retraits, les bases avec des coureurs, les points de chaque équipe et la manche en cours. Perdre la trace de l\'un d\'entre eux crée de la confusion et des relevés inexacts. Cet outil consolide tout en un seul écran. Les points du compteur montrent les balles et les prises en un coup d\'œil. Le diamant montre les positions des coureurs. Le tableau P C E affiche la feuille de match complète. Et la grille des manches défile horizontalement pour montrer l\'historique complet des scores. Tout se met à jour en temps réel à chaque toucher.',
    },
    {
      type: 'grid',
      columns: [
        { type: 'card', title: 'Entraîneurs', html: '<p>Gardez un tableau de bord numérique clair visible pour toute votre équipe depuis l\'abri.</p>' },
        { type: 'card', title: 'Bénévoles', html: '<p>Aucune expérience de marquage requise. L\'outil gère tout le suivi complexe automatiquement.</p>' },
        { type: 'card', title: 'Parents', html: '<p>Suivez le match depuis les tribunes avec un affichage des scores fiable en temps réel sur votre téléphone.</p>' },
        { type: 'card', title: 'Joueurs', html: '<p>Consultez les scores manche par manche après le match pour analyser les performances.</p>' },
      ],
    },
  ],
  ui: {
    title: 'Marqueur de Baseball',
    description: 'Suivez les points, les coups sûrs et les erreurs avec vue diamant.',
    away: 'Extérieur',
    home: 'Domicile',
    runs: 'P',
    hits: 'C',
    errors: 'E',
    inning: 'Manche',
    topInning: 'Haute',
    bottomInning: 'Basse',
    balls: 'Balles',
    strikes: 'Prises',
    outs: 'Retraits',
    strikeBtn: 'Prise',
    ballBtn: 'Balle',
    foulBtn: 'Fausse',
    hitBtn: 'Coup sûr',
    outBtn: 'Retrait',
    walkBtn: 'But sur balles',
    runBtn: '+1 Point',
    errorBtn: 'Erreur',
    newBatter: 'Nouveau Frappeur',
    resetMatch: 'Réinitialiser le Match',
    resetConfirm: 'Réinitialiser le match en cours? Tous les scores seront perdus.',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    total: 'Total',
    fullscreen: 'Plein Écran',
    toggleSound: 'Activer le Son',
  },
};
