# Étape 1 : Construction de l'application (Build)
FROM node:20-alpine AS build
WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm install

# Copie du reste des fichiers et compilation
COPY . .
RUN npm run build

# Étape 2 : Serveur de production pour distribuer les fichiers
FROM nginx:stable-alpine
# Vite place les fichiers compilés dans le dossier 'dist'
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]