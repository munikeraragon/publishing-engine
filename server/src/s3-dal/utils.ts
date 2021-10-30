import { S3Client } from '@aws-sdk/client-s3';

// Create an Amazon S3 service client object.
const s3Client = new S3Client({
    region: 'us-west-2',
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY
    }
});
export { s3Client };