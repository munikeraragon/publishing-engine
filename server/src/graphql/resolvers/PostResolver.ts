import { Query, Resolver, Authorized, Arg, Mutation } from 'type-graphql';
import { CurrentUser } from '../../logic/auth/current-user';
import { Post, PostInput, SignedPost } from '../entities/Post';
import { PostService } from '../../sql-dal/Post';
import { S3PostService } from '../../s3-dal/Post';
import { UserService } from '../../sql-dal/User';
import { SearchInput } from '../entities/Search';
import { ImageService } from '../../sql-dal/Image';
import { S3ImageService } from '../../s3-dal/Image';
import _ from 'lodash';

@Resolver()
export class PostResolver {
    @Authorized()
    @Query((returns) => SignedPost)
    async getPostById(@Arg('postId') postId: number): Promise<SignedPost> {
        const post = await PostService.findById(postId);
        const presignedUrl = await S3PostService.createDownloadUrl(post.objectKey);
        return { ...post, presignedUrl };
    }

    @Authorized()
    @Query((returns) => [Post])
    async getUserPosts(@CurrentUser() userId: number): Promise<Post[]> {
        return await PostService.findUserPosts(userId);
    }

    @Query((returns) => [Post])
    async search(@Arg('searchInput') searchInput: SearchInput): Promise<Post[]> {
        return await PostService.search(searchInput);
    }

    @Authorized()
    @Mutation((returns) => SignedPost)
    async createPost(
        @CurrentUser() userId: number,
        @Arg('postInput') postInput: PostInput
    ): Promise<SignedPost> {
        const { userName } = await UserService.findById(userId);
        const prettyTitle = postInput.title.toLowerCase().replace(/ /g, '-');
        const objectKey = `${userName}/${prettyTitle}`;
        const post = await PostService.findOrCreate(userId, postInput, objectKey);
        const presignedUrl = await S3PostService.createUploadUrl(post.objectKey);
        return { ...post, presignedUrl };
    }

    @Authorized()
    @Mutation((returns) => SignedPost)
    async updatePost(
        @CurrentUser() userId: number,
        @Arg('postInput') postInput: PostInput,
        @Arg('postId') postId: number
    ): Promise<SignedPost> {
        const { userName } = await UserService.findById(userId);
        const prettyTitle = postInput.title.toLowerCase().replace(/ /g, '-');
        const objectKey = `${userName}/${prettyTitle}`;
        const presignedUrl = await S3PostService.createUploadUrl(objectKey);
        await PostService.update(postId, postInput, objectKey);
        return { ...(await PostService.findById(postId)), presignedUrl };
    }

    @Authorized()
    @Query((returns) => String)
    async deletePost(@Arg('postId') postId: number): Promise<string> {
        const imagesToDelete = await ImageService.findByPostId(postId);
        const postToDelete = await PostService.findById(postId);
        await PostService.delete(postId);
        await S3PostService.delete(postToDelete.objectKey);
        await Promise.all(
            _.map(imagesToDelete, async (image) => {
                S3ImageService.delete(image.objectKey);
            })
        );
        return '';
    }

    @Query((returns) => SignedPost)
    async getPostByUserNameAndTitle(
        @Arg('userName') userName: string,
        @Arg('title') title: string
    ): Promise<SignedPost> {
        const post = await PostService.findByUserNameAndTitle(userName, title);
        const presignedUrl = await S3PostService.createDownloadUrl(post.objectKey);
        return { ...post, presignedUrl };
    }
}
