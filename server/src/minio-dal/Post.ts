import { minioClient } from './utils';


export class S3PostService {
    static async createUploadUrl(postKey: string) {
        return minioClient.presignedPutObject(process.env.S3_POST_BUCKET, postKey, 100);
    }

    static async createDownloadUrl(postKey: string) {
        return minioClient.presignedGetObject(process.env.S3_POST_BUCKET, postKey, 100);
    }

    static async delete(postKey: string) {
        return minioClient.removeObject(process.env.S3_POST_BUCKET, postKey);
    }
}
