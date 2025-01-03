# Usar una imagen de Node.js
FROM node:21-alpine

# Crear directorio de la app
WORKDIR /app

# Copiar los archivos de la app
COPY package*.json ./
COPY . .

# Instalar dependencias
RUN npm install

# Construir el proyecto
RUN npm run build

# Exponer el puerto 3000
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "start"]