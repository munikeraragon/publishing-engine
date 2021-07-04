import { Knex } from 'knex';
import { getKnex } from './utils';

export interface ContactMessageAttributes {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    phone: string;
    country: string;
    message: string;
    dateCreated?: Date;
}

const knex: Knex = getKnex();

export class ContactMessage {
    static async findOrCreate(
        contactMessage: ContactMessageAttributes
    ): Promise<ContactMessageAttributes | null> {
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

    static async findById() {
        return knex('ContactMessage');
    }

    static async findAll(): Promise<ContactMessageAttributes[]> {
        try {
            knex.transaction(async function (trx) {
                return trx('ContactMessage');
            });
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}
