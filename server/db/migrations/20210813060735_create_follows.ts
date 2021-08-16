import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Follows', (t) => {
        t.integer('userId')
            .unsigned()
            .references('id')
            .inTable('User')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        t.integer('creatorId')
            .unsigned()
            .references('id')
            .inTable('User')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Follows');
}
