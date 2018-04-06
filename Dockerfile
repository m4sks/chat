FROM node:8.11.1

COPY package*.json ./

RUN yarn install

EXPOSE 8080
CMD [ "yarn", "start" ]

WORKDIR usr/app/chat
