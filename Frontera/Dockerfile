# Usar node:21-alpine como base
FROM node:21-alpine

# Establecer el directorio de trabajo
WORKDIR /frontend-frontera

# Copiar archivos de dependencias
COPY package.json yarn.lock ./

# Instalar dependencias
RUN yarn install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto (ajusta según tu configuración)
EXPOSE 8080

# Comando para ejecutar en modo desarrollo
CMD ["yarn", "serve"]