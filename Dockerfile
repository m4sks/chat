FROM node:8.9.4

COPY package*.json ./

RUN yarn install

WORKDIR usr/app/chat

EXPOSE 8080
CMD [ "yarn", "start" ]
