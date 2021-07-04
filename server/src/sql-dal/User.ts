import { Knex } from 'knex';
import { getKnex } from './utils';

export interface UserAttributes {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    locale?: string;
    provider?: string;
    picture?: string;
    dateCreated?: Date;
}

const knex: Knex = getKnex();

export class User {
    static async findOrCreate(user: UserAttributes): Promise<UserAttributes | null> {
        try {
            knex.transaction(async function (trx) {
                let res = await trx('User').where({
                    email: user.email,
                    firstName: user.firstName
                });

                if (res.length === 0) {
                    await trx('User').insert({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        locale: user.locale,
                        provider: user.provider,
                        picture: user.picture
                    });
                    res = await trx('User').where({
                        email: user.email,
                        firstName: user.firstName
                    });
                }

                return res;
            });
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async findById() {
        return knex('User');
    }
}
