import { Knex } from 'knex';
import { User } from '../graphql/entities/User';
import { getKnex } from './utils';

export interface UserAttributes {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    locale?: string;
    provider?: string;
    picture?: string;
    role?: string;
    dateCreated?: Date;
}

const knex: Knex = getKnex();

export class UserService {
    static async findOrCreate(user: UserAttributes): Promise<User> {
        return knex.transaction(async (trx) => {
            try {
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
                        picture: user.picture,
                        role: user.role
                    });
                    res = await trx('User').where({
                        email: user.email,
                        firstName: user.firstName
                    });
                }

                return res[0];
            } catch (err) {
                console.log(err);
                return null;
            }
        });
    }

    static async findById(userId: number): Promise<User> {
        return knex.transaction(async (trx) => {
            try {
                const res = await trx('User').where({
                    id: userId
                });
                return res[0];
            } catch (err) {
                console.log(err);
                return null;
            }
        });
    }
}
