import { Knex } from 'knex';
import Identicon from 'identicon.js';
import sha256 from 'crypto-js/sha256';

export async function up(knex: Knex): Promise<void> {
    const res = await knex('User').where({
        email: 'munikeraragon@gmail.com',
        firstName: 'Muniker'
    });

    if (res.length === 0) {
        const userIconhash = sha256('munikeraragon').toString();
        const userIcon =
            'data:image/svg+xml;base64,' +
            new Identicon(userIconhash, { format: 'svg' }).toString();

        return knex('User').insert({
            firstName: 'Muniker',
            lastName: 'Aragon',
            userName: 'munikeraragon',
            email: 'munikeraragon@gmail.com',
            locale: 'en',
            provider: 'google',
            picture: '',
            userIcon: userIcon,
            role: 'ADMIN'
        });
    }
}

export async function down(knex: Knex): Promise<void> {
    return knex('User')
        .where({
            email: 'munikeraragon@gmail.com',
            firstName: 'Muniker'
        })
        .del();
}
