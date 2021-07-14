import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ContactMessage', (t) => {
        t.increments('id').primary().unsigned();
        t.string('firstName', 255);
        t.string('lastName', 255);
        t.string('email', 255);
        t.string('company', 255);
        t.string('phone', 255);
        t.string('country', 255);
        t.string('message', 1000);
        t.timestamp('creationDate').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('ContactMessage');
}
