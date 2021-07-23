import { Query, Resolver, Authorized, Arg, Mutation } from 'type-graphql';
import { User } from '../entities/User';
import { CurrentUser } from '../../logic/auth/current-user';
import { Post, PostInput, SignedPost } from '../entities/Post';
import { PostService } from '../../sql-dal/Post';
import { S3PostService } from '../../s3-dal/Post';
import { UserService } from '../../sql-dal/User';
import { SearchInput } from '../entities/Search';

@Resolver()
export class PostResolver {
    @Authorized()
    @Query((returns) => SignedPost)
    async getPostById(
        @CurrentUser() userId: number,
        @Arg('postId') postId: number
    ): Promise<SignedPost> {
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
    @Query((returns) => User)
    async deletePost(@CurrentUser() userId: number): Promise<string> {
        return '';
    }

    @Authorized()
    @Query((returns) => User)
    async updatePost(@CurrentUser() userId: number): Promise<string> {
        return '';
    }

    @Authorized()
    @Mutation((returns) => SignedPost)
    async createPost(
        @CurrentUser() userId: number,
        @Arg('postInput') postInput: PostInput
    ): Promise<SignedPost> {
        const { userName } = await UserService.findById(userId);
        const prettyTitle = postInput.title.toLowerCase().replace(/ /g, '-');
        const objectKey = `${userName}-${prettyTitle}`;
        const post = await PostService.findOrCreate(userId, postInput, objectKey);
        const presignedUrl = await S3PostService.createUploadUrl(objectKey);
        return { ...post, userName, presignedUrl };
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
