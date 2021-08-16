import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('Likes', (t) => {
        t.integer('userId')
            .unsigned()
            .references('id')
            .inTable('User')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        t.integer('postId')
            .unsigned()
            .references('id')
            .inTable('Post')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('Likes');
}
