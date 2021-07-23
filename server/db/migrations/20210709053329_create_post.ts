import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('Post', (t) => {
            t.increments('id').primary().unsigned();
            t.integer('userId').unsigned().references('id').inTable('User');
            t.integer('mainImageId').unsigned().references('id').inTable('Image');
            t.string('objectKey', 1000).unique();
            t.string('title', 255);
            t.string('prettyTitle', 255);
            t.string('description', 255);
            t.integer('images');
            t.integer('paragraphs');
            t.integer('words');
            t.integer('readingTime');
            t.integer('reactions').defaultTo(0);
            t.integer('comments').defaultTo(0);
            t.boolean('publish').defaultTo(false);
            t.timestamp('creationDate').defaultTo(knex.fn.now());
            t.unique(['userId', 'title']);
        })
        .createTable('PostImage', (t) => {
            t.integer('postId').unsigned().references('id').inTable('Post');
            t.integer('imageId').unsigned().references('id').inTable('Image');
            t.primary(['postId', 'imageId']);
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('PostImage').dropTable('Post');
}
