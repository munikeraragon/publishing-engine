export const dbConfig = () => {
    if (process.env.MODE === 'production') {
        return {
            client: 'mysql2',
            connection: {
                host: 'db',
                user: 'root',
                password: 'SuperSecretPassword',
                database: 'publishing_engine'
            }
        };
    } else if (process.env.MODE === 'production') {
        return {
            client: 'mysql2',
            connection: {
                host: 'db',
                user: 'root',
                password: 'SuperSecretPassword',
                database: 'publishing_engine'
            }
        };
    } else {
        return {
            client: 'mysql2',
            connection: {
                host: 'db',
                user: 'root',
                password: 'SuperSecretPassword',
                database: 'publishing_engine'
            }
        };
    }
};
