import dotenv from 'dotenv';
import https from 'https';
import express from 'express';
import passport from 'passport';
import { ApolloServer, gql } from 'apollo-server-express';
import { Sequelize } from 'sequelize';
import { readFileSync } from 'fs';

import authRoutes from './routes/auth-routes';
import { resolvers } from './graphql/resolvers';
import { initModels } from './models/init-models';
import { dbConfig } from './config/config';

const typeDefs = gql(readFileSync('src/graphql/types.graphql').toString('utf-8'));
const port = 5000;

export const server = async () => {
    dotenv.config();

    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    const config = dbConfig();

    initModels(new Sequelize(config.database, config.username, config.password, config));
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
