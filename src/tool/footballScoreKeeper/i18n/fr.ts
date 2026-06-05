import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FootballScoreKeeperUI } from '../ui';

const slug = 'score-football';
const title = 'Scoreur de Football en Ligne Gratuit : Suivez les Buts en Direct';
const description =
  'Suivez le score de vos matchs de football en ligne gratuitement. Compteur de buts simple pour rencontres amicales et tournois. Sans inscription.';

const faqData = [
  {
    question: 'Comment utiliser ce scoreur de football ?',
    answer:
      'Appuyez sur le bouton + sous chaque équipe pour ajouter un but. Le score se met à jour instantanément avec une animation de célébration. Utilisez le bouton moins pour annuler une erreur. Les noms des équipes sont modifiables : appuyez sur le nom par défaut et saisissez le vôtre. Tout est sauvegardé automatiquement dans votre navigateur pour que vous puissiez fermer la page et revenir plus tard.',
  },
  {
    question: 'Puis-je l\'utiliser sur mon téléphone pendant un match ?',
    answer:
      'Oui. L\'interface est conçue pour une utilisation mobile avec de gros boutons que vous pouvez taper sans regarder. Le mode plein écran cache le navigateur et maintient l\'écran de votre téléphone allumé pendant tout le match. La disposition verticale vous permet d\'atteindre facilement les deux sections avec votre pouce.',
  },
  {
    question: 'Est-ce que les données du match sont sauvegardées ?',
    answer:
      'Oui. Le score actuel et les noms des équipes sont sauvegardés automatiquement dans votre navigateur. Vous pouvez recharger la page, fermer le navigateur ou revenir le lendemain, vos données de match seront toujours là.',
  },
  {
    question: 'Puis-je suivre les prolongations ou les tirs au but ?',
    answer:
      'Oui. Le scoreur fonctionne de la même manière pour tout format de match. Continuez simplement à utiliser les boutons + pendant les prolongations ou les tirs au but. Quand le match est terminé, appuyez sur Terminer le Match pour voir le résultat final.',
  },
  {
    question: 'Est-ce vraiment gratuit, sans limites cachées ?',
    answer:
      'Oui, complètement gratuit sans aucune restriction. Pas d\'abonnement premium, pas de limite de participants, pas de filigrane, pas de publicité. Tout fonctionne hors ligne dans votre navigateur. Aucun compte ni email requis.',
  },
];

const howToData = [
  {
    name: 'Nommez les équipes',
    text: 'Appuyez sur le nom d\'équipe par défaut et saisissez le vôtre. Le nouveau nom est sauvegardé automatiquement dans votre navigateur.',
  },
  {
    name: 'Ajoutez un but',
    text: 'Appuyez sur le grand bouton circulaire + de l\'équipe qui a marqué. Le chiffre du score s\'anime avec un effet de célébration.',
  },
  {
    name: 'Supprimez un but',
    text: 'Appuyez sur le bouton moins sous le + si vous avez ajouté un but par erreur. Le score s\'ajuste immédiatement.',
  },
  {
    name: 'Terminez le match',
    text: 'Appuyez sur Terminer le Match en bas pour voir le vainqueur annoncé avec un trophée et des confettis. Fermez la célébration en appuyant à l\'extérieur.',
  },
  {
    name: 'Réinitialisez le match',
    text: 'Appuyez sur l\'icône de réinitialisation dans la barre supérieure et confirmez pour effacer les deux scores. Les noms des équipes sont conservés pour ne pas avoir à les ressaisir.',
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

export const content: ToolLocaleContent<FootballScoreKeeperUI> = {
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
      text: 'Scoreur de Football en Ligne Gratuit : Compteur de Buts en Direct',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tenir le score pendant un match de football devrait être la partie la plus simple du jeu. Ce scoreur de football en ligne vous permet de suivre les buts de deux équipes en temps réel d\'une simple pression. Pas d\'inscription, pas de téléchargement, pas de menus compliqués. Ouvrez la page, nommez vos équipes et commencez à compter les buts. Que vous soyez sur le bord du terrain à entraîner une équipe de jeunes, à organiser un match amical entre amis ou à tenir le score lors d\'un match de ligue locale, cet outil est conçu pour la rapidité et la simplicité. Chaque équipe a sa propre section avec un code couleur distinct, un grand affichage du score et un bouton +1 dédié. Tapez pour ajouter un but, tapez le bouton moins pour annuler une erreur. Tout l\'historique du match reste visible à l\'écran pour que vous sachiez toujours exactement ce qui s\'est passé et quand.',
    },
    {
      type: 'title',
      text: 'Pourquoi vous avez besoin d\'un scoreur de football dédié plutôt qu\'un compteur générique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un compteur numérique générique sert à compter n\'importe quoi, mais un scoreur de football dédié comprend comment fonctionne le jeu. Il sépare visuellement les deux équipes avec des couleurs distinctes pour ne jamais appuyer sur le mauvais côté. Le bouton de but est grand et agréable à presser, même quand vous tenez un téléphone d\'une main sur le bord du terrain. Le bouton moins vous permet de corriger les erreurs instantanément sans avoir à réinitialiser tout le match. Et quand le match est terminé, le bouton Terminer le Match déclenche un écran de célébration qui affiche le résultat final avec des confettis et un trophée. Les compteurs génériques ne peuvent rien faire de tout cela. Ils traitent tous les points de la même manière. Le football n\'est pas générique, et votre scoreur ne devrait pas l\'être non plus.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Matches Amicaux et Entraînements',
          description: 'Suivi rapide des buts pour les matchs d\'entraînement. Réinitialisation entre les matchs en un tap. Fonctionne hors ligne pour une utilisation sur tout terrain.',
          icon: 'mdi:soccer',
          points: ['Saisie des buts en un tap', 'Fonctionne entièrement hors ligne', 'Aucun compte ou email requis', 'Réinitialisation instantanée entre les matchs'],
        },
        {
          title: 'Ligues Locales et Tournois',
          description: 'Gardez un score propre pour les matchs de ligue où chaque but compte. Grand affichage lisible depuis l\'autre côté du terrain. Les couleurs des équipes évitent toute confusion.',
          icon: 'mdi:trophy-outline',
          points: ['Sections d\'équipe colorées', 'Noms d\'équipe modifiables', 'Fin de match avec célébration', 'Grand score lisible à distance'],
        },
        {
          title: 'Football Jeunes et Scolaire',
          description: 'Assez simple pour que les jeunes joueurs l\'utilisent eux-mêmes. Les entraîneurs peuvent suivre les buts tout en se concentrant sur le match. Le mode plein écran maintient l\'écran allumé.',
          icon: 'mdi:school',
          points: ['Assez facile pour les enfants', 'Plein écran maintient l\'écran allumé', 'Noms d\'équipe modifiables', 'Aucune fonction distrayante'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment suivre un match de football en direct avec ce scoreur en ligne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utiliser ce tableau d\'affichage de football est très simple. Quand vous ouvrez la page, vous voyez deux sections d\'équipe. L\'équipe locale apparaît en rouge et l\'équipe visiteuse en bleu. Chaque section a un grand numéro de score au milieu, un champ de nom d\'équipe en haut et deux boutons en dessous. Appuyez sur le grand bouton circulaire + pour ajouter un but à cette équipe. Le chiffre du score s\'anime avec un effet de célébration chaque fois qu\'un but est enregistré. Huit animations de but différentes tournent aléatoirement, pour que chaque but soit unique. Des particules flottantes jaillissent de la zone du bouton avec des textes comme GOAL et SIUUU. L\'écran clignote brièvement pour marquer l\'instant. Si vous faites une erreur, appuyez sur le petit bouton moins pour supprimer le dernier but. Les champs de nom d\'équipe sont modifiables. Appuyez sur le nom par défaut pour saisir votre propre nom. Les noms sont sauvegardés automatiquement dans votre navigateur avec le score actuel. Cela signifie que vous pouvez fermer la page, revenir plus tard, et vos données de match seront toujours là. À la fin du match, appuyez sur Terminer le Match pour voir le vainqueur annoncé avec une animation de trophée et des confettis. Vous pouvez fermer la célébration et garder le score affiché.',
    },
    {
      type: 'title',
      text: 'Scoreur de football adapté au mobile, conçu pour le bord du terrain',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cet outil est conçu d\'abord pour le mobile. La disposition verticale place une équipe au-dessus de l\'autre pour que vous puissiez atteindre facilement les deux sections avec votre pouce tout en tenant votre téléphone. Les boutons sont assez grands pour être tapés sans regarder l\'écran. Le mode plein écran supprime les barres du navigateur et maintient l\'écran de votre téléphone allumé pendant tout le match. Fini de taper sur l\'écran toutes les minutes pour l\'empêcher de s\'éteindre. L\'interface fonctionne en orientation paysage et portrait. Elle fonctionne aussi hors ligne après le premier chargement, vous n\'avez donc pas besoin de connexion internet sur le terrain. Il n\'y a pas de publicité, pas de traqueurs, pas de collecte de données. Les données de votre match ne quittent jamais votre appareil.',
    },
    {
      type: 'title',
      text: 'Ce qui rend ce scoreur de football spécial',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Équipes colorées</strong> rouge pour les locaux, bleu pour les visiteurs. Vous savez immédiatement quelle équipe est laquelle sans lire de texte.',
        '<strong>Animations de célébration</strong> chaque but déclenche une célébration aléatoire. Huit animations différentes : boom, rise, glow, ball bounce et plus.',
        '<strong>Particules flottantes</strong> chaque but génère du texte flottant avec des messages comme GOAL et SIUUU. Chaque célébration est unique.',
        '<strong>Cérémonie de fin de match</strong> appuyez sur Terminer le Match pour déclencher l\'annonce du vainqueur avec animation de trophée, nom d\'équipe et pluie de confettis.',
        '<strong>Noms d\'équipe modifiables</strong> appuyez sur le champ du nom pour renommer vos équipes. Les noms sont sauvegardés localement dans votre navigateur.',
        '<strong>Verrouillage d\'écran</strong> le mode plein écran empêche l\'écran de votre téléphone de s\'éteindre pendant le match.',
        '<strong>Mode plein écran</strong> cache l\'interface du navigateur pour que le tableau occupe tout l\'écran sans distractions.',
        '<strong>Hors ligne</strong> fonctionne sans internet après la première visite. Pas de pub, pas de traçage, pas de collecte de données.',
        '<strong>Persistance instantanée</strong> les scores et les noms sont sauvegardés automatiquement. Rechargez la page ou fermez le navigateur et vos données de match reviennent.',
        '<strong>Réinitialisation avec confirmation</strong> le bouton de réinitialisation demande une confirmation avant d\'effacer les scores. Empêche la perte accidentelle de données.',
      ],
    },
    {
      type: 'title',
      text: 'Scoreur de Football vs Feuille de Papier : pourquoi le numérique est meilleur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les feuilles de score en papier sont utilisées depuis des décennies, mais elles ont de vrais problèmes. Il vous faut un stylo qui fonctionne, une surface plane pour écrire et assez d\'attention pour noter tout en regardant le match. Une seule distraction peut vous faire rater un but ou écrire le mauvais nombre. Une fois écrit sur papier, le score ne peut pas être corrigé proprement. Les nombres barrés rendent la feuille difficile à lire. Le papier peut être mouillé par la pluie, emporté par le vent ou perdu entre les matchs. Un scoreur de football numérique résolve tous ces problèmes. Les boutons sont assez grands pour être tapés au toucher sans regarder. Les nombres sont affichés clairement dans une grande police lisible depuis n\'importe quel point du terrain. Les erreurs sont corrigées instantanément avec le bouton moins. Le score est sauvegardé automatiquement et ne se perd jamais. Et contrairement au papier, le scoreur ajoute des animations de célébration et un retour visuel qui rendent le suivi du score plus agréable. Que vous entraîniez une équipe de jeunes, que vous dirigiez une ligue du dimanche ou que vous jouiez simplement entre amis, ce scoreur de football en ligne gratuit vous donne tout ce dont vous avez besoin et rien de superflu.',
    },
    {
      type: 'title',
      text: 'Scoreur de football gratuit pour tous les niveaux de jeu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cet outil est complètement gratuit à utiliser, sans aucune limitation. Il n\'y a pas de niveaux premium, pas de fonctions cachées derrière un paywall, pas de filigrane sur l\'écran. Il fonctionne pour tous les niveaux de football, des simples rencontres entre amis aux matchs de ligue organisés. L\'interface simple permet à tout le monde de l\'utiliser, des jeunes joueurs qui apprennent le jeu aux entraîneurs expérimentés qui gèrent un tournoi. Aucune inscription n\'est requise. Pas d\'adresse email. Aucune donnée personnelle collectée. Ouvrez la page, commencez le match, tapez les buts. C\'est tout.',
    },
  ],
  ui: {
    playerA: 'Domicile',
    playerB: 'Visiteur',
    winnerLabel: 'CHAMPION',
    finishMatch: 'Terminer le Match',
    reset: 'Réinitialiser',
    resetConfirm: 'Réinitialiser le match ? Toutes les données seront perdues.',
    cancel: 'Annuler',
    fullscreen: 'Plein Écran',
    exitFullscreen: 'Quitter le Plein Écran',
  },
};
