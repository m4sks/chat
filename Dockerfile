FROM node:8.9.4

# RUN useradd -ms /bin/bash me

# USER me

# Install app dependencies
COPY package*.json ./

# Install yarn
RUN yarn install

WORKDIR usr/app/chat

# Bundle app source
# COPY . .

EXPOSE 8080
CMD [ "yarn", "start" ]
