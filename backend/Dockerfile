# Utiliser une image Node.js officielle comme image de base
FROM node:14-alpine

# Installer nodemon globalement
RUN npm install -g nodemon

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Exposer le port sur lequel l'application écoute (par exemple, 3000)
EXPOSE 3000

# Démarrer l'application avec nodemon
CMD ["nodemon", "-L", "--watch", "src", "--exec", "ts-node", "src/interface/server.ts"]
