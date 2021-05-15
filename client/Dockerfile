FROM node:15-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install

EXPOSE 3000


CMD "npm" "run" "dev"


# docker build command
#   docker build -t client .

# docker run command
#   docker run -p 3000:3000 -v "$(pwd)":/usr/src/app -it client