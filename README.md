# Kasa

Application de location d'appartements réalisée dans le cadre de la formation OpenClassrooms.

## Stack technique

- React (Vite)
- React Router (routage)
- Sass (styles)

## Installation

```bash
npm install
npm run dev
```

L'application est disponible sur `http://localhost:5173`.

## Fonctionnalités

- Page d'accueil listant les logements disponibles
- Page à propos avec des sections dépliables (Collapse)
- Page détail d'un logement : galerie photo avec navigation circulaire, description, équipements
- Page d'erreur 404 (route inexistante ou identifiant de logement invalide)

## Structure du projet

```
src/
  components/   Composants réutilisables (Header, Footer, Banner, Card, Collapse, Slideshow)
  layouts/       Layout général de l'application (Header + contenu + Footer)
  pages/         Pages de l'application (Home, About, Housing, Error)
  router/        Logique de routage (Router.jsx)
  data/          Données des logements (logements.json)
  styles/        Variables Sass partagées
```

## Documentation

Le cahier des charges et les contraintes fonctionnelles du projet sont dans le dossier [`docs/`](docs/).
