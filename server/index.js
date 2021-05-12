const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { readFileSync } = require('fs')
 
const typeDefs = readFileSync('./model/type-defs.graphql').toString('utf-8');
 
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
  Mutation: {
    createContactMessage: async (_, { contactMessage }) => {
      console.log(contactMessage)
      return contactMessage
    }
  }
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 5000 }, () =>
  console.log('Now browse to http://localhost:5000' + server.graphqlPath)
);