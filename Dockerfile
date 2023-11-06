
# Мы берем готовый образ nodejs
FROM node:20-alpine

# Указываем папку в которой мы будем работать внутри образа.
WORKDIR /usr/src/app

# Копирируем package*.json
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# Копируем уже исходники
COPY jest.config.js jest.config.js
COPY babel.config.json babel.config.json
COPY src ./src

# Команда которая будет выполнятся при запуске контейнера
CMD [ "npm", "test" ]
