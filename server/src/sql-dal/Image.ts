import { Knex } from 'knex';
import { getKnex } from './utils';
import { ImageInput } from '../graphql/entities/Image';

// every 24 hours I would want to check images that are
// associated to users but not to articles and delete them.

const knex: Knex = getKnex();

export class ImageService {
    static async findOrCreate(userId: number, imageInput: ImageInput, objectKey: string) {
        return knex.transaction(async (trx) => {
            try {
                const imageId = await this._insertImage(trx, userId, imageInput.label, objectKey);
                return await this._findById(trx, imageId);
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async findById(imageId: number) {
        return knex.transaction(async (trx) => {
            try {
                return this._findById(trx, imageId);
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async _findById(trx: Knex.Transaction, imageId: number) {
        return (await trx('Image').where({ id: imageId }))[0];
    }

    static async _insertImage(
        trx: Knex.Transaction,
        userId: number,
        label: string,
        objectKey: string
    ) {
        const imageId = (await trx('Image').insert({ label: label, objectKey: objectKey }))[0];
        await trx('UserImage').insert({ userId: userId, imageId: imageId });
        return imageId;
    }
}
