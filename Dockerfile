# Usar la imagen de Node.js
FROM node:21-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto al contenedor
COPY . .

# Construir el proyecto
RUN npm run build

# Exponer el puerto en el que la aplicación escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]