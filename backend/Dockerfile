# Etapa de dependencias de desarrollo
FROM node:22-alpine3.19 as dev-dep
ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

WORKDIR /backend-cobre
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Etapa principal
FROM node:22-alpine3.19
ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

WORKDIR /backend-cobre
COPY --from=dev-dep /backend-cobre/node_modules ./node_modules
COPY package.json yarn.lock ./
COPY src ./src

EXPOSE 3000

CMD if [ "$NODE_ENV" = "development" ]; then yarn start; else node src/index.js; fi
