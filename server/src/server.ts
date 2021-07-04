/* eslint-disable import/first */
import * as dotenv from 'dotenv';
dotenv.config();

import https from 'https';
import express from 'express';
import passport from 'passport';
import { ApolloServer, gql } from 'apollo-server-express';
import { readFileSync } from 'fs';

import authRoutes from './routes/auth-routes';
import { resolvers } from './graphql/resolvers/resolvers';

const typeDefs = gql(readFileSync('src/graphql/entities/types.graphql').toString('utf-8'));
const port = 5000;

export const server = async () => {
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    const app = express();

    apolloServer.applyMiddleware({ app });
    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/auth', authRoutes);

    if (process.env.MODE === 'production') {
        // create https server when running in production mode
        //
        const credentials = {
            key: readFileSync('/etc/letsencrypt/live/codegrow.org/privkey.pem', 'utf8'),
            cert: readFileSync('/etc/letsencrypt/live/codegrow.org/cert.pem', 'utf8'),
            ca: readFileSync('/etc/letsencrypt/live/codegrow.org/chain.pem', 'utf8')
        };

        https.createServer(credentials, app).listen(port, () => {
            console.log(`Now browse to https://codegrow:${port}` + apolloServer.graphqlPath);
        });
    } else {
        // create http server when running in development mode
        //
        app.listen(port, () =>
            console.log(`Now browse to http://localhost:${port}` + apolloServer.graphqlPath)
        );
    }
};
