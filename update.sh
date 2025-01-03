#!/bin/bash

# Detener el contenedor
docker-compose down

# Actualizar el repositorio
git pull

# Construir nuevamente
docker-compose build

# Iniciar el contenedor
docker-compose up -d