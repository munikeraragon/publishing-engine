import { S3Client } from '@aws-sdk/client-s3';

// Create an Amazon S3 service client object.
const s3Client = new S3Client({
    region: 'us-west-2',
    credentials: {
        accessKeyId: 'AKIA3FIAQTGKTFEBL22N',
        secretAccessKey: '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'
    }
});
export { s3Client };
