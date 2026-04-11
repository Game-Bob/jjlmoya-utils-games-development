import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TournamentBracketUI } from '../ui';

const slug = 'tournoi';
const title = 'Générateur de Brackets et Organisateur de Tournois Gratuit';
const description = 'Organisez des tournois et créez des brackets à élimination directe gratuitement et sans inscription. Idéal pour FIFA, Padel, eSports et jeux de société. 100% Mobile Friendly.';

const ui: TournamentBracketUI = {
  tournamentInProgress: 'Tournoi en cours',
  nextMatch: 'Match suivant',
  share: 'Partager',
  backNew: 'Retour / Nouveau',
  back: 'Retour',
  newTournament: 'Nouveau tournoi',
  setupSubtitle: 'Configurez et générez votre tableau de compétition.',
  tournamentNameLabel: 'Nom du tournoi',
  tournamentNamePlaceholder: 'Ex. Tournoi d\'été',
  addPlayersLabel: 'Ajouter des participants',
  addPlayerPlaceholder: 'Nom... ou plusieurs séparés par des virgules',
  playersLabel: 'Joueurs',
  clearAll: 'Tout effacer',
  emptyList: 'La liste est vide',
  howItWorks: 'Comment ça marche ?',
  howItWorksText: 'Ajoutez des participants, donnez un nom et générez. Le système créera automatiquement les confrontations et gérera les "Byes" (passages directs) si le nombre est impair.',
  historyLabel: 'Historique',
  noHistory: 'Aucun tournoi sauvegardé',
  noOldTournaments: 'Aucun tournoi précédent',
  generateBtn: 'Générer le tableau',
  shuffleLabel: 'Mélanger les confrontations',
  scoreLabel: 'Activer les scores (Optionnel)',
  dragHint: 'Glisser pour déplacer',
  roundFinal: 'Finale',
  roundSemifinal: 'Demi-finales',
  roundQuarter: 'Quarts de finale',
  roundPrefix: 'Tour',
  byeLabel: 'Passage direct',
  waiting: 'En attente...',
  emptyRound: 'Tour vide',
  confirmClearPlayers: 'Effacer toute la liste des joueurs ?',
  alertMinPlayers: 'Vous avez besoin d\'au moins 2 joueurs.',
  alertLoadFailed: 'Impossible de charger le tournoi.',
  confirmDeleteTournament: 'Supprimer définitivement ce tournoi de l\'historique ?',
  toastShareLimit: 'Seuls les tournois de 32 joueurs maximum peuvent être partagés',
  toastShareError: 'Erreur lors de la génération du lien',
  toastShareCopied: 'Lien copié dans le presse-papiers',
  toastShareFailed: 'Impossible de copier. URL :',
  toastFinished: 'Tournoi terminé !',
  defaultName: 'Tournoi',
};

const faqData = [
  { question: 'Comment fonctionne l\'élimination directe ?', answer: 'C\'est un système de compétition où le participant qui perd un match est automatiquement éliminé du tournoi. Les gagnants avancent au tour suivant (huitièmes, quarts, demi-finales) jusqu\'à ce qu\'il n\'en reste que deux pour la grande finale.' },
  { question: 'Que se passe-t-il si j\'ai un nombre impair de joueurs ?', answer: 'Notre outil gère automatiquement les "BYEs". Certains joueurs passeront directement au deuxième tour sans jouer au premier pour que le tableau se termine toujours en puissances de deux (2, 4, 8, 16...).' },
  { question: 'Puis-je sauvegarder et partager le tableau du tournoi ?', answer: 'Oui, vous pouvez partager le bracket via un lien unique généré instantanément. En tant qu\'outil sans inscription, les données sont conservées dans votre navigateur tant que l\'onglet est ouvert.' },
  { question: 'Ça marche pour des tournois eSports comme FIFA ou LoL ?', answer: 'Absolument. Il est conçu pour être rapide et visuel, idéal pour gérer des tournois rapides de console, jeux PC ou même des compétitions de jeux de société et de cartes.' },
  { question: 'La création de tournois est-elle gratuite ?', answer: 'Oui, complètement gratuit et sans restrictions. Pas de plans premium, de limites de participants, de filigranes, ni de publicités intrusives. Tout fonctionne hors ligne dans votre navigateur.' },
  { question: 'Mes données sont-elles supprimées si je ferme le navigateur ?', answer: 'Non. Nous utilisons le LocalStorage pour sauvegarder automatiquement tous vos tournois sur votre appareil. Vous pouvez fermer l\'onglet, éteindre l\'ordinateur et revenir des jours plus tard : votre tournoi sera toujours là.' },
  { question: 'Comment fonctionne le bouton "Match suivant" ?', answer: 'Le système détecte automatiquement la prochaine confrontation prête à être jouée (les deux participants confirmés) mais sans résultat. En appuyant sur "Match suivant", la vue saute directement à ce match.' },
];

const howTo = [
  { name: 'Saisir les participants', text: 'Écrivez les noms des joueurs ou équipes qui vont participer à la compétition.' },
  { name: 'Générer le tableau', text: 'Cliquez sur le bouton générer. Le système créera automatiquement les confrontations et les tours nécessaires.' },
  { name: 'Mettre à jour les résultats', text: 'Cliquez sur le participant gagnant de chaque match pour qu\'il avance automatiquement à la phase suivante du bracket.' },
  { name: 'Terminer', text: 'Une fois le tournoi terminé, le champion final est affiché.' },
];

const seo = [
  {
    type: 'title' as const,
    text: 'Générateur de Brackets et Organisateur de Tournois en Ligne',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Gérez vos compétitions sportives, de jeux vidéo ou de société avec l\'organisateur de tournois le plus complet, gratuit et sans inscription. Créez des tableaux d\'élimination directe visuels et interactifs en quelques secondes, avec un <strong>système de score intégré</strong>, un historique automatique et une navigation intelligente entre les matchs. Tout fonctionne hors ligne, directement dans votre navigateur.',
  },
  {
    type: 'title' as const,
    text: 'Comment créer un tournoi à élimination directe ?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: '<strong>Nommez votre tournoi</strong>, ajoutez des participants (un par un ou en collant une liste séparée par des virgules), mélangez si vous voulez, générez le tableau, gérez les résultats en appuyant sur le gagnant de chaque match et utilisez le bouton "Match suivant" pour naviguer entre les matchs non résolus.',
  },
  {
    type: 'title' as const,
    text: 'Fonctionnalités Avancées',
    level: 2 as const,
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Saisie massive :</strong> Ajoutez plusieurs participants à la fois séparés par des virgules.',
      '<strong>Scores exacts :</strong> Système de score avec résultats type 3-1 ou 21-19.',
      '<strong>Navigation intelligente :</strong> Le bouton "Match suivant" saute au prochain match en attente.',
      '<strong>Bracket déplaçable :</strong> Vue bureau avec défilement libre pour les grands tournois.',
      '<strong>Historique persistant :</strong> Tous les tournois sauvegardés automatiquement dans votre navigateur.',
      '<strong>Walkovers automatiques :</strong> Byes et passages directs résolus sans intervention manuelle.',
      '<strong>Partage par URL :</strong> Générez un lien compressé pour envoyer le bracket à tout le monde.',
    ],
  },
  {
    type: 'title' as const,
    text: 'Idéal pour tout type de compétition',
    level: 2 as const,
  },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Jeux vidéo & eSports',
        description: 'Parfait pour FIFA, FC25, Valorant, League of Legends, Street Fighter, Tekken ou Rocket League.',
        icon: 'mdi:controller-classic',
        points: ['Matchs rapides', 'Sans limite d\'équipes', 'Partageable instantanément'],
      },
      {
        title: 'Sports & Raquettes',
        description: 'Gérez des tableaux de Padel, Tennis, Ping Pong, Badminton, Futsal ou Basket 3x3.',
        icon: 'mdi:trophy-outline',
        points: ['Scores intégrés', 'Vue mobile optimisée', 'Sans papier ni tableau'],
      },
      {
        title: 'Jeux de société & Cartes',
        description: 'Organisez des parties de Magic, Pokémon TCG, Yu-Gi-Oh!, Catan, Échecs ou Dominos.',
        icon: 'mdi:cards-playing-outline',
        points: ['Jusqu\'à 64 joueurs', 'Historique des tours', 'Gestion des Byes'],
      },
    ],
  },
  {
    type: 'title' as const,
    text: 'Que sont les "Byes" ou passages directs ?',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Dans un tournoi à élimination directe idéal, le nombre de participants doit être une puissance de 2 (4, 8, 16, 32...). Quand vous avez un nombre impair ou non puissance de 2 —par exemple 7, 10 ou 13 joueurs—, le système assigne automatiquement des <strong>"Byes"</strong> au premier tour. Un "Bye" signifie qu\'un participant passe directement à la phase suivante sans jouer. Notre algorithme calcule et assigne ces passages de façon juste et automatique.',
  },
  {
    type: 'title' as const,
    text: 'Instantané, Gratuit et Sans Inscription',
    level: 2 as const,
  },
  {
    type: 'paragraph' as const,
    html: 'Zéro friction. Sans comptes, sans installations, sans attente. Ajoutez des participants et générez votre tournoi instantanément. Tout est sauvegardé automatiquement dans votre navigateur via <strong>LocalStorage</strong> : fermez l\'onglet, éteignez l\'ordinateur et revenez des jours plus tard. Votre tournoi et l\'historique complet seront toujours là.',
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
  { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })) },
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'SportsApplication', operatingSystem: 'Web', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } },
];

export const content: ToolLocaleContent<TournamentBracketUI> = { slug, title, description, ui, seo, faqTitle: 'Questions fréquentes', faq: faqData, bibliography: [], howTo, schemas };
