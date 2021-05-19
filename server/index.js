const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { readFileSync } = require('fs')

const resolvers = require('./graphql/resolvers');
const typeDefs = gql(readFileSync('./graphql/types.graphql').toString('utf-8'));
 
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 5000 }, () =>
  console.log('Now browse to http://localhost:5000' + server.graphqlPath)
);