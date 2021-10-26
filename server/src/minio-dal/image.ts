import { minioClient } from './utils';

export class S3ImageService {
    static async createUploadUrl(imageKey: string) {
        return minioClient.presignedPutObject(process.env.S3_IMAGE_BUCKET, imageKey, 100);
    }

    static async createDownloadUrl(imageKey: string) {
        return minioClient.presignedGetObject(process.env.S3_IMAGE_BUCKET, imageKey, 100);
    }

    static async delete(imageKey: string) {
        return minioClient.removeObject(process.env.S3_IMAGE_BUCKET, imageKey);
    }
}
