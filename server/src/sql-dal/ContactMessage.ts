import { Knex } from 'knex';
import { getKnex } from './utils';
import { ContactMessage, ContactMessageInput } from '../graphql/entities/ContactMessage';

const knex: Knex = getKnex();

export class ContactMessageService {
    static async findOrCreate(contactMessage: ContactMessageInput): Promise<ContactMessage | null> {
        try {
            knex.transaction(async function (trx) {
                let res = await trx('ContactMessage').where({
                    firstName: contactMessage.firstName,
                    lastName: contactMessage.lastName,
                    email: contactMessage.email,
                    company: contactMessage.company,
                    phone: contactMessage.phone,
                    country: contactMessage.country,
                    message: contactMessage.message
                });

                if (res.length === 0) {
                    await trx('ContactMessage').insert({
                        firstName: contactMessage.firstName,
                        lastName: contactMessage.lastName,
                        email: contactMessage.email,
                        company: contactMessage.company,
                        phone: contactMessage.phone,
                        country: contactMessage.country,
                        message: contactMessage.message
                    });
                    res = await trx('ContactMessage').where({
                        firstName: contactMessage.firstName,
                        lastName: contactMessage.lastName,
                        email: contactMessage.email,
                        company: contactMessage.company,
                        phone: contactMessage.phone,
                        country: contactMessage.country,
                        message: contactMessage.message
                    });
                }

                return res;
            });
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async create(contactMessage: ContactMessageInput): Promise<string | null> {
        return knex.transaction(async function (trx) {
            try {
                await trx('ContactMessage').insert({
                    firstName: contactMessage.firstName,
                    lastName: contactMessage.lastName,
                    email: contactMessage.email,
                    company: contactMessage.company,
                    phone: contactMessage.phone,
                    country: contactMessage.country,
                    message: contactMessage.message
                });
                return 'Contact message has been saved';
            } catch (err) {
                console.log(err);
                return err;
            }
        });
    }

    static async countAll() {
        return knex.transaction(async (trx) => {
            try {
                return Number((await trx('ContactMessage').count('id as count'))[0].count);
            } catch (err) {
                console.log(err);
                return null;
            }
        });
    }

    static async findAll() {
        return knex.transaction(async (trx) => {
            try {
                const contactMessages = await trx.select().table('ContactMessage');
                return contactMessages;
            } catch (err) {
                console.log(err);
                return [];
            }
        });
    }
}
