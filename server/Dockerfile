from node:15

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install

EXPOSE 5000

CMD ["node", "index"]

# docker build command
#   docker build -t server .

# docker run command
#   docker run -p 5000:5000 -v "$(pwd)":/usr/src/app -it server