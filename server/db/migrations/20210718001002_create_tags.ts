import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('Tag', (t) => {
            t.increments('id').primary().unsigned();
            t.string('name', 255).unique();
        })
        .createTable('PostTag', (t) => {
            t.integer('postId')
                .unsigned()
                .references('id')
                .inTable('Post')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            t.integer('tagId')
                .unsigned()
                .references('id')
                .inTable('Tag')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            t.primary(['postId', 'tagId']);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('PostTag').dropTable('Tag');
}
