import knex from 'knex';
import { dbConfig } from '../config';

export const getKnex = () => {
    return knex(dbConfig());
};
