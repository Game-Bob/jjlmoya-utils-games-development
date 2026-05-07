import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReactionTesterUI } from '../ui';

const slug = 'test-reflexes';
const title = 'Test de Vitesse de Réaction (Réflexes): Benchmark en Ligne';
const description = 'Mesurez vos réflexes en millisecondes avec notre test de réaction professionnel. Compétez pour des rangs de \'Tortue\' à \'Cyberathlète\' et analysez vos performances.';

const ui: ReactionTesterUI = {
  title: 'Test de Réflexes',
  subtitle: 'Mesurez votre vitesse de réaction en millisecondes. Moyenne de 5 tentatives.',
  startBtn: 'Cliquez pour commencer',
  goTitle: 'ALLEZ!',
  goSubtitle: 'CLIQUEZ MAINTENANT!',
  earlyTitle: 'Trop tôt !',
  earlySubtitle: 'Attendez le vert.',
  earlyRetry: 'Cliquez pour réessayer',
  promptNext: 'Clic pour tentative',
  promptFinal: 'Voir les résultats finaux',
  avgLabel: 'Moyenne finale',
  copyBtn: 'Copier',
  tweetBtn: 'Tweeter',
  retryBtn: 'Réessayer',
  inputMouse: 'Souris',
  inputTouch: 'Tactile',
  inputSpace: 'Espace',
  historyTitle: 'Historique local',
  historyBest: 'Top 5 Meilleurs',
  historyWorst: 'Top 5 Pires',
  historyEmpty: 'Jouez pour enregistrer votre premier score',
  copySuccess: 'Copié !',
  shareText: 'J\'ai obtenu {ms}ms au Test de Réflexes !\nRang : {rank}\n\nPeux-tu me battre ?\n{url}',
  rankCiberatleta: 'Cyberathlète',
  rankTigre: 'Tigre',
  rankHumano: 'Humain',
  rankTortuga: 'Tortue',
  rankDormido: 'Endormi',
  f150: 'ES-TU UN ROBOT ?!',
  f180: 'INCROYABLE !',
  f210: 'Très rapide !',
  f250: 'Bonne réaction',
  f300: 'Pas mal...',
  f400: 'Un peu lent...',
  f600: 'Tu t\'es endormi',
  fSlow: 'Réveille-toi...',
  wp0t: 'ATTENDS...', wp0s: 'Retiens ta respiration...',
  wp1t: 'IMMOBILE...', wp1s: 'Ne cligne pas des yeux',
  wp2t: 'PRÊT...', wp2s: 'Doigts prêts...',
  wp3t: 'HOLD...', wp3s: 'Patience, sauterelle',
  wp4t: 'FOCUS...', wp4s: 'Ça arrive...'
};

const faqData = [
  { question: 'Quel est le temps de réaction moyen d\'un humain ?', answer: 'Le temps de réaction moyen d\'un humain à un stimulus visuel est d\'environ 250 à 270 millisecondes. Les athlètes de haut niveau et les pro-gamers sont généralement en dessous de 200ms.' },
  { question: 'Comment puis-je améliorer mes réflexes ?', answer: 'La clé est la pratique constante et le repos. Jouer à des jeux vidéo d\'action (FPS), pratiquer des sports rapides comme le ping-pong et rester bien hydraté aide à maintenir le système nerveux alerte.' },
  { question: 'L\'écran affecte-t-il mon résultat ?', answer: 'Oui. Il y a quelque chose appelé \'input lag\'. Les écrans à faible taux de rafraîchissement (60Hz) ou les vieilles souris sans fil peuvent ajouter 15 à 50ms à votre temps de réaction réel.' },
  { question: 'À quel âge commence-t-on à perdre des réflexes ?', answer: 'Physiologiquement, les réflexes humains atteignent leur pic entre 20 et 24 ans. Ensuite, il y a un déclin très lent (environ 2-6ms par décennie) si on ne s\'entraîne pas.' },
];

const howTo = [
  { name: 'Attendre le rouge', text: 'Cliquez sur la zone de départ et attendez patiemment que l\'écran change de couleur.' },
  { name: 'Réagir au vert', text: 'Dès que vous voyez le vert, cliquez ou touchez l\'écran le plus vite possible.' },
  { name: 'Voir le résultat', text: 'Le système calculera la différence exacte en millisecondes entre le changement de couleur et votre pression.' },
  { name: 'Analyser votre rang', text: 'Répétez le test 5 fois pour obtenir une moyenne fiable et découvrir si vous êtes une \'Tortue\' ou un \'Cyberathlète\'.' },
];

const seo = [
  { type: 'title' as const, text: 'Comment fonctionne ce Test de Réflexes ?', level: 2 as const },
  {
    type: 'paragraph' as const,
    html: 'Cet outil mesure votre <strong>temps de réaction visuelle</strong> avec une précision chirurgicale. Nous calculons l\'intervalle exact depuis que l\'écran s\'illumine jusqu\'à ce que le signal voyage de vos yeux au cerveau, puis à vos doigts. Le test exige <strong>5 tentatives consécutives</strong> pour calculer votre vraie moyenne, éliminant le facteur chance.'
  },
  {
    type: 'list' as const,
    items: [
      '<strong>Moyenne de 5 tentatives :</strong> Nous éliminons le facteur "chance" en exigeant la consistance. Un seul clic chanceux ne fera pas de vous un Cyberathlète.',
      '<strong>Système anti-triche :</strong> Temps d\'attente aléatoires (1,5s - 4,5s) et détection des clics anticipés pour éviter les prédictions.',
      '<strong>Science réelle :</strong> Traitement cérébral ~180-200ms + réponse motrice +20-40ms = votre temps de réaction total.',
    ]
  },
  { type: 'title' as const, text: 'Tableau de Classement Mondial', level: 2 as const },
  {
    type: 'table' as const,
    headers: ['Temps', 'Rang', 'Description'],
    rows: [
      ['&lt; 180 ms', 'Cyberathlète', 'Niveau surhumain typique des pros d\'eSports ou pilotes de chasse.'],
      ['180 - 230 ms', 'Tigre', 'Réflexes aiguisés. Vous êtes probablement très bon aux shooters.'],
      ['230 - 280 ms', 'Humain', 'La moyenne saine. Vous êtes éveillé et fonctionnez correctement.'],
      ['280 - 350 ms', 'Tortue', 'En dessous de la moyenne. Reposez-vous ou entraînez-vous plus.'],
      ['&gt; 350 ms', 'Endormi', 'Fatigue possible, sommeil ou matériel lent (input lag).'],
    ]
  },
  { type: 'title' as const, text: 'Pourquoi êtes-vous lent ? La faute au matériel', level: 2 as const },
  {
    type: 'comparative' as const,
    columns: 3 as const,
    items: [
      {
        title: 'Moniteur (Hz)',
        description: 'Un moniteur 60Hz met ~16ms à afficher une image. Un 144Hz seulement 7ms. Cette différence de 10ms compte dans votre score final.',
        icon: 'mdi:monitor',
        points: ['60Hz = ~16ms par image', '144Hz = ~7ms par image', 'Différence visible au test']
      },
      {
        title: 'Souris sans fil',
        description: 'Les souris Bluetooth bon marché ont des latences élevées. Pour ce test, utilisez un câble ou la technologie sans fil 2,4GHz à faible latence.',
        icon: 'mdi:mouse-variant',
        points: ['Bluetooth bas de gamme: +15-50ms', '2,4GHz gaming: <1ms extra', 'Câble USB: référence']
      },
      {
        title: 'Navigateur',
        description: 'Les extensions qui bloquent les publicités ou les scripts lourds peuvent causer du "stuttering". Essayez en mode incognito pour votre vrai record.',
        icon: 'mdi:web',
        points: ['Fermez les extensions lourdes', 'Incognito = plus propre', 'Chrome/Firefox recommandé']
      },
    ]
  },
];

const schemas: [WithContext<FAQPage>, WithContext<HowTo>, WithContext<SoftwareApplication>] = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: howTo.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    applicationCategory: 'SportsApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
  },
];

export const content: ToolLocaleContent<ReactionTesterUI> = { slug, title, description, ui, seo, faq: faqData, bibliography, howTo, schemas };
