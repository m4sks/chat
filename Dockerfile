FROM node:8.11.1

COPY package*.json ./

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]

WORKDIR usr/app/chat
