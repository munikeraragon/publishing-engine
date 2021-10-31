import { Knex } from 'knex';
import { PostInput } from '../graphql/entities/Post';
import { getKnex } from './utils';
import { TagService } from './Tag';
import { SearchInput } from '../graphql/entities/Search';
import { S3PostService } from '../minio-dal/Post';
import _ from 'lodash';

const knex: Knex = getKnex();

export class PostService {
    static async findOrCreate(userId: number, postInput: PostInput, objectKey: string) {
        return knex.transaction(async (trx) => {
            try {
                const postId = await this._insertMetadata(trx, userId, objectKey, postInput);
                await this._insertImagesIds(trx, postId, postInput.imagesIds);
                await this._insertTags(trx, postId, postInput.tags);
                return await this._findById(trx, postId);
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async findById(postId: number) {
        return knex.transaction(async (trx) => {
            try {
                return await this._findById(trx, postId);
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async findUserPosts(userId: number) {
        return knex.transaction(async (trx) => {
            try {
                return await this._findUserPosts(trx, userId);
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async findUserSavedPosts(userId: number) {
        return knex.transaction(async (trx) => {
            try {
                return await this._findUserSavedPosts(trx, userId);
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async search(searchInput: SearchInput) {
        return knex.transaction(async (trx) => {
            try {
                return await this._search(trx, searchInput);
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async findAll() {
        return knex.transaction(async (trx) => {
            try {
                const postsIds = await trx('Post').orderBy('creationDate', 'desc').select('id');

                return await Promise.all(
                    _.map(postsIds, async (post) => {
                        return await this._findById(trx, post.id);
                    })
                );
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async delete(postId: Number) {
        return knex.transaction(async (trx) => {
            try {
                await trx('PostImage').where({ postId: postId }).del();
                await trx('PostTag').where({ postId: postId }).del();
                await trx('Post').where({ id: postId }).del();
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async like(userId: number, postId: Number) {
        return knex.transaction(async (trx) => {
            try {
                const res = await trx('Likes').where({ userId, postId });
                if (res.length === 0) {
                    await trx('Likes').insert({ userId, postId });
                    await trx('Post').increment('likes').where({ id: postId });
                    return 'success';
                }
                return 'post has already been liked';
            } catch (err) {
                console.log(err);
                trx.rollback();
                return err;
            }
        });
    }

    static async unlike(userId: number, postId: Number) {
        return knex.transaction(async (trx) => {
            try {
                const res = await trx('Likes').where({ userId, postId });
                if (res.length === 1) {
                    await trx('Likes').where({ userId, postId }).delete();
                    await trx('Post').decrement('likes').where({ id: postId });
                    return 'success';
                }
                return 'post has already been unliked';
            } catch (err) {
                console.log(err);
                trx.rollback();
                return err;
            }
        });
    }

    static async save(userId: number, postId: Number) {
        return knex.transaction(async (trx) => {
            try {
                const res = await trx('Saved').where({ userId, postId });
                if (res.length === 0) {
                    await trx('Saved').insert({ userId, postId });
                    await trx('Post').increment('saved').where({ id: postId });
                    return 'success';
                }
                return 'post has already been saved';
            } catch (err) {
                console.log(err);
                trx.rollback();
                return err;
            }
        });
    }

    static async unsave(userId: number, postId: Number) {
        return knex.transaction(async (trx) => {
            try {
                const res = await trx('Saved').where({ userId, postId });
                if (res.length === 1) {
                    await trx('Saved').where({ userId, postId }).delete();
                    await trx('Post').decrement('saved').where({ id: postId });
                    return 'success';
                }
                return 'post has already been unsaved';
            } catch (err) {
                console.log(err);
                trx.rollback();
                return err;
            }
        });
    }

    static async update(postId: number, postInput: PostInput, objectKey: string) {
        return knex.transaction(async (trx) => {
            try {
                const post = await this.findById(postId);

                if (post.objectKey !== objectKey) {
                    S3PostService.delete(objectKey);
                }

                if (postInput.tags !== post.tags) {
                    await this._insertTags(trx, post.id, _.difference(postInput.tags, post.tags));
                    await this._deleteTags(trx, post.id, _.difference(post.tags, postInput.tags));
                }

                await trx('Post')
                    .where({ id: post.id })
                    .update({
                        objectKey: objectKey,
                        mainImageId: postInput.mainImageId,
                        title: postInput.title,
                        prettyTitle: postInput.title
                            .toLowerCase()
                            .replaceAll(' ', '-')
                            .replaceAll('?', '>'),
                        description: postInput.description,
                        images: postInput.images,
                        paragraphs: postInput.paragraphs,
                        words: postInput.words,
                        readingTime: postInput.readingTime,
                        publish: postInput.publish
                    });
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async countAll() {
        return knex.transaction(async (trx) => {
            try {
                return Number((await trx('Post').count('id as count'))[0].count);
            } catch (err) {
                console.log(err);
                trx.rollback();
                return null;
            }
        });
    }

    static async countAllPublished() {
        return knex.transaction(async (trx) => {
            try {
                return Number(
                    (await trx('Post').count('id as count').where({ publish: true }))[0].count
                );
            } catch (err) {
                console.log(err);
                trx.rollback();
                return null;
            }
        });
    }

    static async getPopularTags(pageSize: number) {
        return knex.transaction(async (trx) => {
            try {
                return (
                    await trx('PostTag')
                        .join('Post', 'Post.id', 'PostTag.postId')
                        .join('Tag', 'Tag.id', 'PostTag.tagId')
                        .count('Tag.name as frequency')
                        .groupBy('Tag.name')
                        .orderBy('frequency', 'desc')
                        .select('Tag.name')
                        .limit(pageSize)
                ).map((tag) => tag.name);
            } catch (err) {
                console.log(err);
                trx.rollback();
                return null;
            }
        });
    }

    static async findByUserNameAndTitle(userName: string, title: string) {
        return knex.transaction(async (trx) => {
            try {
                return await this._findByUserNameAndTitle(trx, userName, title);
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async isPostSaved(userId: number, postId: number) {
        return knex.transaction(async (trx) => {
            try {
                return (await trx('Saved').where({ userId, postId })).length === 1;
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async isPostLiked(userId: number, postId: number) {
        return knex.transaction(async (trx) => {
            try {
                return (await trx('Likes').where({ userId, postId })).length === 1;
            } catch (err) {
                console.log(err);
                trx.rollback();
            }
        });
    }

    static async _search(trx: Knex.Transaction, searchInput: SearchInput) {
        const postsIds = await trx('Post')
            .leftJoin('User', 'User.id', 'Post.userId')
            .select('Post.id')
            .where({ publish: true })
            .orderBy(`Post.${searchInput.sortBy}`, searchInput.sortDirection)
            .limit(searchInput.pageSize)
            .offset(searchInput.pageSize * searchInput.page);

        return await Promise.all(
            _.map(postsIds, async (post) => {
                return await this._findById(trx, post.id);
            })
        );
    }

    static async _findByUserNameAndTitle(trx: Knex.Transaction, userName: string, title: string) {
        const postId = (
            await trx('Post')
                .leftJoin('User', 'Post.userId', 'User.id')
                .where({ 'User.username': userName, 'Post.prettyTitle': title })
                .select({ postId: 'Post.id' })
        )[0].postId;

        return this._findById(trx, postId);
    }

    static async _findUserPosts(trx: Knex.Transaction, userId: number) {
        const postsIds = await trx('Post')
            .join('User', 'User.id', 'Post.userId')
            .where({ 'User.id': userId })
            .select('Post.id');

        return await Promise.all(
            _.map(postsIds, async (post) => {
                return await this._findById(trx, post.id);
            })
        );
    }

    static async _findUserSavedPosts(trx: Knex.Transaction, userId: number) {
        const postsIds = await trx('User')
            .join('Saved', 'User.id', 'Saved.userId')
            .where({ 'User.id': userId })
            .select('Saved.postId');

        console.log(postsIds);

        return await Promise.all(
            _.map(postsIds, async (post) => {
                return await this._findById(trx, post.postId);
            })
        );
    }

    static async _findById(trx: Knex.Transaction, postId: number) {
        const postAndImages = await trx('Post')
            .leftJoin('PostImage', 'Post.id', 'PostImage.postId')
            .leftJoin('Image', 'Image.id', 'PostImage.imageId')
            .leftJoin('PostTag', 'Post.id', 'PostTag.postId')
            .leftJoin('Tag', 'Tag.id', 'PostTag.tagId')
            .leftJoin('User', 'User.id', 'Post.userId')
            .where({ 'Post.id': postId })
            .select({
                id: 'Post.id',
                userName: 'User.userName',
                userLocale: 'User.locale',
                userCreationDate: 'User.creationDate',
                userIcon: 'User.userIcon',
                userPicture: 'User.picture',
                title: 'Post.title',
                tagName: 'Tag.name',
                description: 'Post.description',
                prettyTitle: 'Post.prettyTitle',
                mainImageId: 'Post.mainImageId',
                images: 'Post.images',
                paragraphs: 'Post.paragraphs',
                words: 'Post.words',
                likes: 'Post.likes',
                saved: 'Post.saved',
                readingTime: 'Post.readingTime',
                creationDate: 'Post.creationDate',
                objectKey: 'Post.objectKey',
                comments: 'Post.comments',
                imageId: 'Image.id',
                label: 'Image.label'
            });

        const imagesMapping = _.map(
            _.filter(postAndImages, (elem) => elem.imageId && elem.label),
            (elem: any) => {
                return { id: elem.imageId, label: elem.label };
            }
        );

        const tags = _.map(
            _.filter(postAndImages, (elem) => elem.tagName),
            (elem: any) => {
                return elem.tagName;
            }
        );

        return {
            id: postId,
            userName: postAndImages[0].userName,
            userIcon: postAndImages[0].userIcon,
            userPicture: postAndImages[0].userPicture,
            userLocale: postAndImages[0].userLocale,
            userCreationDate: postAndImages[0].creationDate,
            title: postAndImages[0].title,
            description: postAndImages[0].description,
            prettyTitle: postAndImages[0].prettyTitle,
            mainImageId: postAndImages[0].mainImageId,
            images: postAndImages[0].images,
            paragraphs: postAndImages[0].paragraphs,
            words: postAndImages[0].words,
            readingTime: postAndImages[0].readingTime,
            likes: postAndImages[0].likes,
            saved: postAndImages[0].saved,
            comments: postAndImages[0].comments,
            creationDate: postAndImages[0].creationDate,
            objectKey: postAndImages[0].objectKey,
            imagesMapping: imagesMapping,
            tags: tags
        };
    }

    static async _insertMetadata(
        trx: Knex.Transaction,
        userId: number,
        objectKey: string,
        postInput: PostInput
    ) {
        return (
            await trx('Post').insert({
                userId: userId,
                objectKey: objectKey,
                mainImageId: postInput.mainImageId,
                title: postInput.title,
                prettyTitle: postInput.title
                    .toLowerCase()
                    .replaceAll(' ', '-')
                    .replaceAll('?', '>'),
                description: postInput.description,
                images: postInput.images,
                paragraphs: postInput.paragraphs,
                words: postInput.words,
                readingTime: postInput.readingTime,
                publish: postInput.publish
            })
        )[0];
    }

    static async _insertImagesIds(trx: Knex.Transaction, postId: number, imagesIds: number[]) {
        if (imagesIds.length === 0) return;
        const imagesToInsert = imagesIds.map((id) => ({
            postId: postId,
            imageId: id
        }));
        await trx('PostImage').insert(imagesToInsert);
    }

    static async _insertTags(trx: Knex.Transaction, postId: number, tags: string[]) {
        if (tags.length === 0) return;

        await Promise.all(
            _.map(tags, async (name) => {
                await trx('PostTag').insert({
                    postId: postId,
                    tagId: (await TagService.findOrCreate(name)).id
                });
            })
        );
    }

    static async _deleteTags(trx: Knex.Transaction, postId: number, tags: string[]) {
        if (tags.length === 0) return;

        await Promise.all(
            _.map(tags, async (name) => {
                await trx('PostTag')
                    .where({
                        postId: postId,
                        tagId: (await TagService.findOrCreate(name)).id
                    })
                    .delete();
            })
        );
    }
}
