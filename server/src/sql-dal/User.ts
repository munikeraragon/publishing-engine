import { Knex } from 'knex';
import { User, UserInput } from '../graphql/entities/User';
import { getKnex } from './utils';
import Identicon from 'identicon.js';
import sha256 from 'crypto-js/sha256';

const knex: Knex = getKnex();

export class UserService {
    static async findOrCreate(user: UserInput): Promise<User> {
        return knex.transaction(async (trx) => {
            try {
                let res = await trx('User').where({
                    email: user.email,
                    firstName: user.firstName
                });

                if (res.length === 0) {
                    const userIconhash = sha256(user.userName).toString();
                    const userIcon =
                        'data:image/svg+xml;base64,' +
                        new Identicon(userIconhash, { format: 'svg' }).toString();

                    await trx('User').insert({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        userName: user.userName,
                        email: user.email,
                        locale: user.locale,
                        provider: user.provider,
                        picture: user.picture,
                        userIcon: userIcon,
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

    static async findByUserName(userName: string): Promise<User> {
        return knex.transaction(async (trx) => {
            try {
                return (
                    await trx('User').where({
                        id: userName
                    })
                )[0];
            } catch (err) {
                console.log(err);
                return null;
            }
        });
    }

    static async countAll() {
        return knex.transaction(async (trx) => {
            try {
                return Number((await trx('User').count('id as count'))[0].count);
            } catch (err) {
                console.log(err);
                return null;
            }
        });
    }

    static async findAll() {
        return knex.transaction(async (trx) => {
            try {
                const users = await trx.select().table('User');
                return users;
            } catch (err) {
                console.log(err);
                return [];
            }
        });
    }

    static async follow(userId: number, creatorId: Number) {
        return knex.transaction(async (trx) => {
            try {
                const res = await trx('Follows').where({ userId, creatorId });

                if (res.length === 0) {
                    await trx('Follows').insert({ userId, creatorId });
                }
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }
}
