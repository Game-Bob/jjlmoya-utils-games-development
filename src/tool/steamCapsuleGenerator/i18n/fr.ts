import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'generateur-de-capsules-steam',
  title: 'Générateur de capsules Steam',
  description: 'Créez quatre aperçus Steam à partir d\'une image maître, déplacez le point focal, vérifiez les zones sures et téléchargez un ensemble PNG ou ZIP local.',
  ui: {
    uploadTitle: 'Déposez votre illustration maître', uploadHint: 'Une image haute résolution devient un ensemble de prévisualisations directement dans le navigateur.', chooseFile: 'Choisir une image', minimumSize: 'Taille minimale', supportedFormats: 'PNG, JPEG ou WebP', invalidImage: 'Choisissez une image d\'au moins 1920 par 1080 pixels.', sourcePreview: 'Illustration maître', focalPoint: 'Point focal', focalHint: 'Cliquez sur l\'image ou utilisez les curseurs pour garder le sujet important dans chaque recadrage.', horizontalFocus: 'Horizontal', verticalFocus: 'Vertical', resetFocus: 'Centrer le point focal', outputPreview: 'Ensemble des sorties Steam', safeZone: 'Zone sure', dimensions: 'pixels', downloadPng: 'PNG', downloadZip: 'Télécharger le ZIP', buildingZip: 'Création de votre archive locale...', zipReady: 'Ensemble de capsules prêt', localOnly: 'Confidentialité intégrée. Votre image reste dans ce navigateur.', headerCapsule: 'Capsule d\'en-tête', mainCapsule: 'Capsule principale', verticalCapsule: 'Capsule verticale', communityIcon: 'Icône de communauté', ready: 'Prêt', downloadError: 'L\'archive n\'a pas pu être créée. Essayez les boutons PNG.',
  },
  seo: [
    { type: 'title', text: 'Préparez un ensemble cohérent de capsules Steam', level: 2 },
    { type: 'paragraph', html: 'Une illustration peut être convaincante en format large et perdre son personnage dans une version verticale. Cet outil affiche quatre recadrages à partir d\'une seule image maître: en-tête 460 par 215, principale 616 par 353, verticale 374 par 448 et icône carrée 184 par 184 pixels. Le point focal permet de choisir la partie de la composition qui doit rester visible quand le ratio change.' },
    { type: 'paragraph', html: 'Le fichier est traité localement avec canvas. Il n\'est pas envoyé à un serveur et aucun compte n\'est nécessaire. Le déplacement du marqueur met à jour les quatre aperçus afin de vérifier les logos, les visages et les silhouettes avant l\'export.' },
    { type: 'title', text: 'Une méthode simple pour l\'art de jeu vidéo', level: 2 },
    { type: 'list', items: ['Commencez avec une image maître d\'au moins 1920 par 1080 pixels.', 'Placez le marqueur sur le sujet visuel, pas toujours au centre mathématique.', 'Contrôlez d\'abord les aperçus vertical et carré, car ils retirent le plus de contexte.', 'Utilisez les zones sures comme marge et vérifiez les modèles Steamworks actuels.'] },
    { type: 'paragraph', html: 'Les zones sures sont des repères de composition, pas une promesse sur chaque interface Steam. Gardez les logos et les titres loin des bords chargés et relisez les règles de Valve concernant le texte présent sur les capsules.' },
    { type: 'tip', html: 'Conservez une image maître avec de l\'espace autour du sujet. Si un recadrage exige une autre position du logo, modifiez la source puis générez à nouveau l\'ensemble plutôt que d\'étirer une capsule finale.' },
  ],
  faq: [
    { question: 'Mon image quitte-t-elle mon appareil ?', answer: 'Non. Elle est décodée et dessinée dans votre navigateur. Aucun envoi ni compte ne sont nécessaires.' },
    { question: 'Quelle image maître utiliser ?', answer: 'Utilisez un PNG, JPEG ou WebP d\'au moins 1920 par 1080 pixels pour conserver de la marge.' },
    { question: 'Que change le point focal ?', answer: 'Il déplace le recadrage source pour toutes les sorties et protège le sujet important.' },
    { question: 'Les zones sures sont-elles officielles ?', answer: 'Ce sont des guides pratiques. Comparez toujours avec les modèles Steamworks actuels.' },
  ],
  howTo: [
    { name: 'Choisir une image maître', text: 'Déposez un fichier PNG, JPEG ou WebP d\'au moins 1920 par 1080 pixels.' },
    { name: 'Régler le point focal', text: 'Cliquez sur l\'aperçu ou déplacez les curseurs horizontal et vertical.' },
    { name: 'Vérifier les quatre recadrages', text: 'Inspectez l\'en-tête, la principale, la verticale et l\'icône carrée.' },
    { name: 'Télécharger l\'ensemble', text: 'Téléchargez des PNG séparés ou créez une archive ZIP locale.' },
  ],
});
