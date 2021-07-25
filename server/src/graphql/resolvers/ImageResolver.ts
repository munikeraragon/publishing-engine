import { Query, Resolver, Authorized, Arg, Mutation } from 'type-graphql';
import { CurrentUser } from '../../logic/auth/current-user';
import { Image, ImageInput } from '../entities/Image';
import { ImageService } from '../../sql-dal/Image';
import { S3ImageService } from '../../s3-dal/Image';
import { UserService } from '../../sql-dal/User';

@Resolver()
export class ImageResolver {
    @Query((returns) => Image)
    async getImageById(@Arg('imageId') imageId: number): Promise<Image> {
        const image = await ImageService.findById(imageId);
        const presignedUrl = await S3ImageService.createDownloadUrl(image.objectKey);
        return { id: image.id, label: image.label, presignedUrl: presignedUrl };
    }

    @Authorized()
    @Mutation((returns) => Image)
    async createImage(
        @CurrentUser() userId: number,
        @Arg('imageInput') imageInput: ImageInput
    ): Promise<Image> {
        const userEmail = (await UserService.findById(userId)).email;
        const objectKey = userEmail + imageInput.label + new Date().toISOString();
        const image = await ImageService.findOrCreate(userId, imageInput, objectKey);
        const presignedUrl = await S3ImageService.createUploadUrl(objectKey);
        return { id: image.id, label: image.label, presignedUrl: presignedUrl };
    }
}
