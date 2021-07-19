import { CreateBucketCommand, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client } from './utils'; // Helper function that creates Amazon S3 service client module.

export class S3ImageService {
    static async createUploadUrl(imageKey: string) {
        const command = new PutObjectCommand({
            Bucket: 'aws-image-uploads',
            Key: imageKey
        });
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 60 * 60 * 24
        });
        return signedUrl;
    }

    static async createDownloadUrl(imageKey: string) {
        const command = new GetObjectCommand({
            Bucket: 'aws-image-uploads',
            Key: imageKey
        });
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: 60 * 60 * 24
        });
        return signedUrl;
    }

    static async uploadUserIcon(data: string, key: string) {
        const command = new PutObjectCommand({
            Bucket: 'aws-user-icon-uploads',
            Key: key,
            Body: 'data:image/svg+xml;base64,' + data
        });
        return s3Client.send(command);
    }

    static async downloadUserIcon(imageKey: string) {
        const streamToString = (stream: any): any =>
            new Promise((resolve, reject) => {
                const chunks: any = [];
                stream.on('data', (chunk: any) => chunks.push(chunk));
                stream.on('error', reject);
                stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
            });

        const command = new GetObjectCommand({
            Bucket: 'aws-user-icon-uploads',
            Key: imageKey
        });
        const data = await s3Client.send(command);
        const bodyContents = await streamToString(data.Body);
        return bodyContents;
    }

    static async createBucket() {
        try {
            const articleImagesBucket = await s3Client.send(
                new CreateBucketCommand({ Bucket: 'aws-image-uploads' })
            );
            console.log('Success', articleImagesBucket.Location);
            return articleImagesBucket;
        } catch (err) {
            console.log('Error', err);
        }
    }
}
