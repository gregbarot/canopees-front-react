# Site Web Canopées

## Prérequis

Avant d’installer le projet, il faut avoir :

Node.js installé ;
npm installé ;
le back Symfony lancé ou accessible ;

## Installation
npm install

## Configuration de l’environnement local

Créer un fichier .env.local à la racine du projet front.

VITE_API_URL=http://127.0.0.1:8000/api
VITE_BACK_URL=http://127.0.0.1:8000

Si l’API est utilisée en ligne, utiliser par exemple :

VITE_API_URL sert aux appels API.

VITE_BACK_URL sert à afficher les images servies par le back Symfony.

## Lancer le projet
npm run dev

Vite affiche ensuite une URL locale, généralement :

http://localhost:5173