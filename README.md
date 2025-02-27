# Fattouma Sana ToDo React App

Ce projet est une application de liste de tâches simple et intuitive, construite avec React, Redux pour la gestion d'état, et Material UI pour une interface utilisateur élégante. Elle permet aux utilisateurs de gérer facilement leurs tâches, améliorant ainsi la productivité et l'organisation.

## ✨ Fonctionnalités

- **Ajouter des tâches** : Ajoutez facilement de nouvelles tâches avec une description.
- **Lister les tâches** : Visualisez toutes les tâches, avec des options de filtrage.
- **Marquer comme terminée** : Basculez le statut d'achèvement des tâches.
- **Modifier les tâches** : Modifiez la description des tâches existantes.
- **Filtrer les tâches** : Filtrez les tâches par statut (Toutes, Terminées, En cours).
- **Effacer les tâches terminées** : Supprimez toutes les tâches marquées comme terminées.
- **Effacer toutes les tâches** : Supprimez toutes les tâches de la liste.
- **Persistance** : Les tâches sont persistées dans le stockage local, garantissant que les données sont enregistrées d'une session à l'autre.
- **Interface conviviale** : Utilise les composants Material UI pour une conception propre et réactive.
- **Liste de tâches animée** : Utilise `react-spring` pour des animations fluides lorsque des tâches sont ajoutées ou supprimées.
- **Thème personnalisé** : Stylisé avec un thème personnalisé utilisant les capacités de thématisation de Material UI.

## 🛠 Technologies utilisées

- **React** : Une bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **Redux** : Un conteneur d'état prévisible pour les applications JavaScript, utilisé pour gérer l'état de l'application.
- **Redux Persist** : Pour persister et réhydrater un store Redux.
- **Material UI (MUI)** : Un framework UI React pour un développement web plus rapide et plus facile.
- **Create React App** : Un environnement confortable pour apprendre React, et la meilleure façon de commencer à construire une nouvelle application monopage en React.
- **react-spring** : Pour l'animation de la liste de tâches.

## 🚀 Démarrage rapide

Suivez ces étapes pour exécuter le projet sur votre machine locale.

### Prérequis

Assurez-vous que Node.js et npm (ou yarn) sont installés sur votre machine.

### Installation

1.  **Cloner le dépôt :**

    ```bash
    git clone [https://github.com/FattoumaSana/ToDoReact/]
    cd fattoumasana-todoreact
    ```

2.  **Installer les dépendances :**

    ```bash
    npm install
    ```

### Exécuter l'application

1.  **Démarrer le serveur de développement :**

    ```bash
    npm start
    ```

    Cette commande démarrera l'application en mode développement et l'ouvrira dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000). La page se rechargera automatiquement lors des modifications du code.

### Lancer les tests

Pour exécuter la suite de tests, utilisez la commande suivante :

```bash
npm test
## 📂 Structure du projet
fattoumasana-todoreact/
├── README.md          // Documentation du projet
├── package.json       // Dépendances et scripts du projet
├── public/            // Assets publics
│   ├── index.html     // Fichier HTML principal
│   ├── manifest.json  // Fichier manifeste PWA
│   └── robots.txt     // Configuration des robots
└── src/               // Code source
    ├── App.css        // Styles globaux pour le composant App
    ├── App.js         // Composant principal de l'application
    ├── App.test.js    // Tests pour le composant App
    ├── index.css      // Styles globaux
    ├── index.js       // Point d'entrée de l'application
    ├── reportWebVitals.js // Rapport sur les performances web
    ├── setupTests.js  // Configuration pour les tests
    ├── Components/    // Composants React
    │   ├── AddTask.js         // Composant pour ajouter de nouvelles tâches
    │   ├── CompletionMessage.js // Composant pour les messages d'achèvement de tâches
    │   ├── ListTask.js        // Composant pour lister et filtrer les tâches
    │   └── Task.js            // Composant pour afficher les tâches individuelles
    ├── Redux/           // Store, reducers et actions Redux
    │   ├── actions.js     // Créateurs d'actions Redux
    │   ├── reducers.js    // Reducers Redux
    │   └── store.js       // Configuration du store Redux
    └── theme/           // Thème personnalisé Material UI
        └── theme.js       // Définition du thème
```
Merci !