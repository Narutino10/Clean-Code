# # Utiliser l'image officielle de Node.js
# FROM node:lts-alpine

# # Définir le répertoire de travail
# WORKDIR /app

# # Copier les fichiers package.json et package-lock.json
# COPY package*.json ./

# # Installer les dépendances
# RUN npm install --legacy-peer-deps

# # Copier tout le projet
# COPY . .

# # Exposer le port 8080
# EXPOSE 8080

# # Lancer l'application React en mode développement
# CMD ["npm", "start"]



# Étape 1 : Construction de l'application React
FROM node:18-alpine AS build

WORKDIR /app

# Copier package.json et package-lock.json AVANT d'installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install --legacy-peer-deps

# Copier le reste de l'application
COPY . .

# Build de l'application React
RUN npm run build

# Étape 2 : Serveur Web pour héberger l'application React
FROM node:18-alpine

WORKDIR /app

# Installer un serveur léger
RUN npm install -g serve

# Copier les fichiers de build
COPY --from=build /app/build /app/build

# Exposer le port
EXPOSE 8080

# Lancer l'application
CMD ["serve", "-s", "build", "-l", "8080"]
