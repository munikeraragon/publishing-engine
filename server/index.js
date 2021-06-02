require('dotenv').config()
const https = require('https');
const express = require('express');
const passport = require("passport");
const { ApolloServer, gql } = require('apollo-server-express');
const { readFileSync } = require('fs')
const authRoutes = require('./routes/auth-routes');

const port = 5000;

const resolvers = require('./graphql/resolvers');
const typeDefs = gql(readFileSync('./graphql/types.graphql').toString('utf-8'));

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

if (process.env.MODE === 'production') {
  const credentials = {
    key: readFileSync(
      '/etc/letsencrypt/live/codegrow.org/privkey.pem',
      'utf8'
    ),
    cert: readFileSync(
      '/etc/letsencrypt/live/codegrow.org/cert.pem',
      'utf8'
    ),
    ca: readFileSync(
      '/etc/letsencrypt/live/codegrow.org/chain.pem',
      'utf8'
    ),
  };

  https.createServer(credentials, app).listen(port, () => {
    console.log(`CORS-enabled web server is running on port ${port}`);
  });
} else {

  app.listen(port, () =>
    console.log('Now browse to http://localhost:5000' + server.graphqlPath)
  );

}