export default {
    development: {
        client: 'mysql2',
        connection: {
            host: 'db',
            user: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine_dev'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `./db/migrations`
        },
        seeds: {
            directory: `./db/seeds`
        }
    },
    staging: {
        client: 'mysql2',
        connection: {
            host: 'db',
            user: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine_stage'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `./db/migrations`
        },
        seeds: {
            directory: `./db/seeds`
        }
    },
    production: {
        client: 'mysql2',
        connection: {
            host: 'db',
            user: 'root',
            password: 'SuperSecretPassword',
            database: 'publishing_engine_prod'
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `./db/migrations`
        },
        seeds: {
            directory: `./db/seeds`
        }
    }
};
