// Import required AWS SDK clients and commands for Node.js
import { ListBucketsCommand } from '@aws-sdk/client-s3';
import { s3Client } from './utils'; // Helper function that creates Amazon S3 service client module.

export const listBuckets = async () => {
    try {
        const data = await s3Client.send(new ListBucketsCommand({}));
        console.log('Success', data.Buckets);
        return data; // For unit tests.
    } catch (err) {
        console.log('Error', err);
    }
};
