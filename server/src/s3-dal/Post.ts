import { GetObjectCommand, CreateBucketCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client } from './utils';

/*
const example_payload = {
    title: '',
    imagesNumber: 2,
    imagesLabels: ['image1', 'Image2'],
    paragraphsNumber: 5,
    wordsNumber: 3211,
    readingTime: 10
};
*/

export class S3PostService {
    static async createUploadUrl(postKey: string) {
        const command = new PutObjectCommand({
            Bucket: 'aws-post-uploads',
            Key: postKey
        });
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 100
        });
        return signedUrl;
    }

    static async createDownloadUrl(postKey: string) {
        const command = new GetObjectCommand({
            Bucket: 'aws-post-uploads',
            Key: postKey
        });
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 100
        });
        return signedUrl;
    }

    static async createBucket() {
        try {
            const articlesBucket = await s3Client.send(
                new CreateBucketCommand({ Bucket: 'aws-post-uploads' })
            );
            console.log('Success', articlesBucket.Location);
            return articlesBucket;
        } catch (err) {
            console.log('Error', err);
        }
    }
}
