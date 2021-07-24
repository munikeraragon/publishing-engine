import { CreateBucketCommand, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client } from './utils'; // Helper function that creates Amazon S3 service client module.

export class S3ImageService {
    static async createUploadUrl(imageKey: string) {
        const command = new PutObjectCommand({
            Bucket: process.env.S3_IMAGE_BUCKET,
            Key: imageKey
        });
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 100
        });
        return signedUrl;
    }

    static async createDownloadUrl(imageKey: string) {
        const command = new GetObjectCommand({
            Bucket: process.env.S3_IMAGE_BUCKET,
            Key: imageKey
        });
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 100
        });
        return signedUrl;
    }

    static async createBucket() {
        try {
            const articleImagesBucket = await s3Client.send(
                new CreateBucketCommand({ Bucket: process.env.S3_IMAGE_BUCKET })
            );
            console.log('Success', articleImagesBucket.Location);
            return articleImagesBucket;
        } catch (err) {
            console.log('Error', err);
        }
    }
}
