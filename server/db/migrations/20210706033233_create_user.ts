import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('User', (t) => {
        t.increments('id').primary().unsigned();
        t.string('firstName', 255).unique().index();
        t.string('lastName', 255);
        t.string('email', 255).unique().index();
        t.string('locale', 255);
        t.string('provider', 255);
        t.string('picture', 255);
        t.string('role', 255);
        t.timestamp('creationDate').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('User');
}
