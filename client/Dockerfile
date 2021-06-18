# pull the base image
FROM node:16

# set the working direction
WORKDIR /usr/src/app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

EXPOSE 3000

