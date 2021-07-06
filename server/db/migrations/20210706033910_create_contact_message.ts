import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ContactMessage', (t) => {
        t.increments('id').primary().unsigned();
        t.string('firstName', 255).unique().index();
        t.string('lastName', 255).unique().index();
        t.string('email', 255).unique().index();
        t.string('company', 255).unique().index();
        t.string('phone', 255).unique().index();
        t.string('country', 255).unique().index();
        t.string('message', 1000).unique().index();
        t.timestamp('creationDate').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('ContactMessage');
}
