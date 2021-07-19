import { Knex } from 'knex';
import { User, UserInput } from '../graphql/entities/User';
import { getKnex } from './utils';
import { S3ImageService } from '../s3-dal/Image';
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
                    const hash = sha256(user.userName).toString();
                    console.log(hash);
                    const data = new Identicon(hash, { format: 'svg' }).toString();
                    const result = await S3ImageService.uploadUserIcon(data, hash);
                    console.log(result);
                    await trx('User').insert({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        userName: user.userName,
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
