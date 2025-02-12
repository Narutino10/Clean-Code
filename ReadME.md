# Gestion des Motos Triumph

Bienvenue dans le projet **Gestion des Motos Triumph**. Cette application vise à faciliter la gestion des entretiens, des pièces détachées et du suivi des essais pour les motos de la marque Triumph. Elle est développée en respectant les principes de la **Clean Architecture** et du **Clean Code**.

**Commande pour lancer la base de données dans le terminal**
```bash
docker exec -it clean-code-db-1 psql -U postgres -d triumph_db
```

## Table des Matières

- [Fonctionnalités](#fonctionnalités)
- [Architecture du Projet](#architecture-du-projet)
- [Technologies Utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## Fonctionnalités

### Gestion des Entretiens Préventifs et Curatifs

- **Planification des Entretiens** : Définissez des intervalles d'entretien en fonction du modèle de moto choisi par un client (ex. 10 000 km pour une Street Triple, 16 000 km pour une Tiger Sport 660, etc.).
- **Rappels Automatiques** : Envoyez des notifications aux gestionnaires et aux clients lorsqu'un entretien est dû, avec possibilité pour le client de renseigner manuellement le kilométrage.
- **Suivi des Entretiens Réalisés** : Consultez l'historique détaillé des entretiens effectués, incluant les pièces changées, les coûts associés et les recommandations des techniciens, accessible à la fois pour les gestionnaires et les clients.
- **Gestion des Pannes & Garanties** : Enregistrez les pannes et garanties, gérez les réparations et suivez les actions correctives avec historisation.

### Gestion des Pièces Détachées et des Stocks

- **Suivi des Pièces Détachées** : Gérez le stock de pièces détachées utilisées pour la maintenance (filtres à huile, pneus, freins, etc.).
- **Alerte de Stock Bas** : Recevez des notifications lorsque le stock d'une pièce atteint un seuil critique.
- **Historique des Commandes de Pièces** : Suivez les commandes de pièces, les coûts, les délais de livraison et les quantités restantes.

### Suivi des Essais

- **Profil des Conducteurs** : Gérez les conducteurs utilisant les motos, avec des informations sur leur permis, leur expérience et leur historique de conduite.
- **Essais Moto** : Gérez les motos assignées à chaque conducteur avec suivi des dates et de la durée de l'utilisation pour les essais moto.
- **Historique des Incidents** : Enregistrez les incidents liés à chaque conducteur (accidents, infractions, etc.).

---

## Architecture du Projet

Le projet est structuré selon les principes de la **Clean Architecture**, ce qui facilite la maintenance, les tests et l'évolutivité de l'application.

- **Domain** : Contient les entités métiers du projet.
- **Application** : Gère la logique métier via les cas d'utilisation.
- **Infrastructure** : Fournit les implémentations concrètes pour les interactions avec les bases de données et autres services externes.
- **Interface** : Gère l'interaction avec le monde extérieur (API REST, interfaces utilisateur, etc.).

---

## Technologies Utilisées

- **Backend** :
  - Node.js
  - TypeScript
  - Express.js
  - TypeORM
  - PostgreSQL
- **Frontend** :
  - React.js
  - TypeScript
- **Autres** :
  - Docker & Docker Compose
  - Node-cron (pour les tâches planifiées)

---

## Prérequis

- **Node.js** (version 14 ou supérieure)
- **npm** (version 6 ou supérieure)
- **Docker** (pour exécuter les conteneurs)
- **Docker Compose** (version 1.27 ou supérieure)