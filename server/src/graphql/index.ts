import { buildSchema } from 'type-graphql';
import { authChecker } from '../logic/auth/auth-checker';
import resolvers from './resolvers';

export default () =>
    buildSchema({
        resolvers,
        authChecker
    });
