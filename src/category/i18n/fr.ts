import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'developpement-de-jeux-video',
  title: 'Outils pour le développement de jeux vidéo',
  description: 'Des outils pratiques dans le navigateur pour les créateurs indépendants, de l\'image de boutique aux livrables de production.',
  seo: [
    { type: 'title', text: 'Des outils pour fabriquer ses jeux vidéo', level: 2 },
    { type: 'paragraph', html: 'Le développement d\'un jeu repose sur de nombreuses petites décisions: une composition doit résister à plusieurs formats de boutique, une icône doit rester lisible immédiatement et une tâche de production doit pouvoir être répétée. Cette catégorie rassemble des outils ciblés pour concevoir, publier et présenter des jeux.' },
    { type: 'title', text: 'Pensé pour les créateurs indépendants', level: 2 },
    { type: 'paragraph', html: 'Les équipes indépendantes passent souvent d\'un logiciel graphique à un tableau de publication puis à un dossier de validation. Un bon outil raccourcit ce passage, rend les choix importants visibles et laisse les fichiers source sous le contrôle du créateur.' },
    { type: 'list', items: ['Des parcours précis avec des résultats visibles', 'Un traitement local lorsque cela est pertinent', 'Des dimensions et états d\'export clairs', 'Des conseils complémentaires aux documents officiels'] },
    { type: 'tip', html: 'Utilisez ces outils comme une étape de vérification. Conservez les sources et comparez chaque export aux exigences actuelles de la plateforme.' },
  ],
};
