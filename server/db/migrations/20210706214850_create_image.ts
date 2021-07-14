import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('Image', (t) => {
            t.increments('id').primary().unsigned();
            t.string('label', 255);
            t.string('objectKey', 1000).unique();
        })
        .createTable('UserImage', (t) => {
            t.integer('userId').unsigned().references('id').inTable('User');
            t.integer('imageId').unsigned().references('id').inTable('Image');
            t.primary(['userId', 'imageId']);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('UserImage').dropTable('Image');
}
