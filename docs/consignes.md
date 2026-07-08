# Consignes du projet Kasa — 10 étapes

## Étape 1 : Initialiser le projet
- Prérequis : cours React de base + React Router suivis, consignes lues.
- Livrables : app React installée (Vite), repo GitHub initialisé, fichier JSON de données ajouté, `npm run dev` fonctionnel.

## Étape 2 : Ajouter React Router
- Prérequis : app initialisée.
- Livrable : React Router et ses dépendances installés.

## Étape 3 : Créer le router et les pages
- Prérequis : React Router installé.
- Livrable : routage fonctionnel.
- Recommandations : composant dédié pour le router ; Layout via `props.children` ou Header/Footer ; mise en page Sass du layout principal.
- Point de vigilance : créer un composant à part pour le routeur.

## Étape 4 : Créer la page d'accueil
- Prérequis : routage fonctionnel.
- Livrables : composants Banner et Card créés, liste des propriétés disponibles.
- Point de vigilance : pas de warning console sur les listes (clés).

## Étape 5 : Créer la page à propos
- Prérequis : routage fonctionnel.
- Livrable : composant Collapse créé (deux états : ouvert/fermé, animation au clic).

## Étape 6 : Créer la page d'erreur
- Prérequis : routage fonctionnel.
- Livrable : page d'erreur (404) fonctionnelle, suit la maquette. Toute route inexistante y mène.

## Étape 7 : Créer le carrousel et la page de logement
- Prérequis : routage fonctionnel, clic sur les cartes de la Home fonctionnel.
- Livrable : composant Slideshow créé.
- Recommandations : flèches + numérotation dynamiques (absentes si une seule image), event listeners pour le changement d'image, navigation circulaire aux extrémités.

## Étape 8 : Finaliser la page logement
- Prérequis : carrousel fonctionnel, clic depuis la Home fonctionnel.
- Livrable : page de propriété fonctionnelle, réutilise le composant Collapse.

## Étape 9 : Gérer l'erreur sur l'id d'une propriété
- Prérequis : page de propriété fonctionnelle.
- Livrable : redirection vers la page d'erreur si id incorrect (Navigate ou useNavigate).

## Étape 10 : Vérifier l'ensemble
- Prérequis : projet réalisé.
- Livrable : projet finalisé et vérifié (check-list, respect maquette + responsive, gestion des erreurs, composants à état qui fonctionnent).
