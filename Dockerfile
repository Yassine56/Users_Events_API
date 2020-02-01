FROM node:10.14.1

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

ENV NODE_ENV developement

ENV POSTGRES_HOST ns8
ENV POSTGRES_DB ns8
ENV POSTGRES_USER yassine
ENV POSTGRES_PASSWORD password123
ENV POSTGRES_PORT 5432
ENV NODE_PORT=5000

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 5000
CMD [ "node", "./build/server.js" ]