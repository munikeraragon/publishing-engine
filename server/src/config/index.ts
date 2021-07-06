import knexConfig from '../../knexfile';

export const dbConfig = () => {
    if (process.env.MODE === 'development') {
        return knexConfig.development;
    } else if (process.env.MODE === 'staging') {
        return knexConfig.staging;
    } else if (process.env.MODE === 'production') {
        return knexConfig.production;
    }
};
