import { Knex } from 'knex';
import { PostInput } from '../graphql/entities/Post';
import { getKnex } from './utils';
import { TagService } from './Tag';
import { SearchInput } from '../graphql/entities/Search';
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

    static async _search(trx: Knex.Transaction, searchInput: SearchInput) {
        const postsIds = await trx('Post')
            .leftJoin('User', 'User.id', 'Post.userId')
            .select('Post.id')
            .orderBy(`Post.${searchInput.sortBy}`, searchInput.sortDirection)
            .limit(searchInput.pageSize)
            .offset(searchInput.pageSize * searchInput.page)
            
        
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
            .leftJoin('User', 'User.id', 'Post.userId')
            .where({ 'User.id': userId })
            .select('Post.id');

        return await Promise.all(
            _.map(postsIds, async (post) => {
                return await this._findById(trx, post.id);
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
                reactions: 'Post.reactions',
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
            title: postAndImages[0].title,
            description: postAndImages[0].description,
            prettyTitle: postAndImages[0].prettyTitle,
            mainImageId: postAndImages[0].mainImageId,
            images: postAndImages[0].images,
            paragraphs: postAndImages[0].paragraphs,
            words: postAndImages[0].words,
            readingTime: postAndImages[0].readingTime,
            reactions: postAndImages[0].reactions,
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
                prettyTitle: postInput.title.toLowerCase().replace(/ /g, '-'),
                description: postInput.description,
                images: postInput.images,
                paragraphs: postInput.paragraphs,
                words: postInput.words,
                readingTime: postInput.readingTime
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
}
