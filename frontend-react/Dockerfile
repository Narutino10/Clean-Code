# Utiliser l'image Node.js pour la construction
FROM node:16-alpine as build

WORKDIR /app

# Copier package.json et package-lock.json pour l'installation des dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier le reste de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Utiliser l'image Nginx pour servir l'application construite
FROM nginx:stable-alpine

# Copier les fichiers de build vers le dossier de service Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour le conteneur
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
