import 'reflect-metadata';
import * as dotenv from 'dotenv';
/* eslint-disable import/first */
dotenv.config();

import https from 'https';
import express from 'express';
import jwt from 'express-jwt';
import passport from 'passport';
import { ApolloServer } from 'apollo-server-express';
import { readFileSync } from 'fs';

import buildSchema from './graphql';
import authRoutes from './routes/auth-routes';

export const server = async () => {
    const port = process.env.PORT || 4000;
    const schema = await buildSchema();

    const app = express();
    const apolloServer = new ApolloServer({
        schema,
        context: ({ req }) => {
            const context = {
                req,
                user: req.user // `req.user` comes from `express-jwt`
            };
            return context;
        }
    });

    const cors = {
        credentials: true,
        origin: process.env.MODE === 'development' ? '*' : 'https://codegrow.org',
        optionsSuccessStatus: 200
    };

    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/auth', authRoutes);
    app.use(
        '/graphql',
        jwt({
            secret: process.env.JWT_SERVER_SECRET,
            credentialsRequired: false,
            algorithms: ['HS256']
        })
    );
    apolloServer.applyMiddleware({ app, cors });

    if (process.env.MODE === 'production') {
        // create https server when running in production mode
        //
        const credentials = {
            key: readFileSync('/etc/letsencrypt/live/codegrow.org/privkey.pem', 'utf8'),
            cert: readFileSync('/etc/letsencrypt/live/codegrow.org/cert.pem', 'utf8'),
            ca: readFileSync('/etc/letsencrypt/live/codegrow.org/chain.pem', 'utf8')
        };

        https.createServer(credentials, app).listen(port, () => {
            console.log(`Now browse to https://codegrow.org:${port}` + apolloServer.graphqlPath);
        });
    } else {
        // create http server when running in development mode
        //
        app.listen(port, () =>
            console.log(`Now browse to http://localhost:${port}` + apolloServer.graphqlPath)
        );
    }
};
