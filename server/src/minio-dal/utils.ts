import * as Minio from 'minio';

export const minioClient = new Minio.Client({
    endPoint: '192.168.1.198',
    port: 9000,
    useSSL: false,
    accessKey: process.env.S3_ACCESS_KEY,
    secretKey: process.env.S3_SECRET_KEY
});