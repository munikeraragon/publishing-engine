import { Knex } from 'knex';
import { Tag } from '../graphql/entities/Tag';
import { getKnex } from './utils';

const knex: Knex = getKnex();

export class TagService {
    static async findOrCreate(name: string): Promise<Tag> {
        return knex.transaction(async (trx) => {
            try {
                const result = await trx('Tag').where({ name });
                if (result.length === 0) {
                    await trx('Tag').insert({ name });
                    return (await trx('Tag').where({ name }))[0];
                }
                return result[0];
            } catch (err) {
                console.log(err);
                return null;
            }
        });
    }

    static async findByName(name: string): Promise<Tag> {
        return knex.transaction(async (trx) => {
            try {
                return (await trx('User').where({ name }))[0];
            } catch (err) {
                console.log(err);
                return null;
            }
        });
    }
}
