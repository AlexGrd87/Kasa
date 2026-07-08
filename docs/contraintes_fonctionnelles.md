# Contraintes fonctionnelles

## Galerie (composant Gallery)
- Navigation circulaire : depuis la première image, clic sur "précédent" -> affiche la dernière image. Depuis la dernière image, clic sur "suivant" -> affiche la première image.
- S'il n'y a qu'une seule image : pas de flèches, pas de numérotation.
- La galerie garde toujours la même hauteur (celle de la maquette Figma) : les images sont coupées et centrées dans le cadre (object-fit: cover).

## Collapse
- Fermé par défaut à l'initialisation.
- Clic sur un Collapse ouvert -> le ferme.
- Clic sur un Collapse fermé -> l'ouvre.

## Liens de référence
- Maquette Figma (design) : https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f
- Maquette Figma (prototype interactif) : https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1

Note : accès MCP Figma en lecture seule refusé (pas de droits éditeur sur ce fichier) — se référer visuellement au lien ci-dessus pendant le développement.

## Guidelines techniques (rappel)
- Vite, React Router, Sass obligatoires ; pas de librairie React externe.
- Composants modulaires et réutilisables, un composant par fichier, structure logique.
- Props, state utilisé quand nécessaire, gestion des événements, listes via map.
- Composants fonctionnels recommandés.
- Une page par route, params gérés par React Router pour l'id du logement, page 404 pour route inexistante ou id invalide.
- Toute la logique du routeur regroupée dans un seul fichier.
- Zéro erreur/warning dans la console.
