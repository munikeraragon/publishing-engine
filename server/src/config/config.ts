import { Dialect } from 'sequelize/types';

export interface Options {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
}

export const dbConfig = (): Options => {
    let options;
    const dialect: Dialect = 'mysql';

    if (process.env.MODE === 'production') {
        options = {
            username: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine',
            host: 'db',
            dialect
        };
    } else if (process.env.MODE === 'production') {
        options = {
            username: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine',
            host: 'db',
            dialect
        };
    } else {
        options = {
            username: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine',
            host: 'db',
            dialect
        };
    }

    return options;
};
