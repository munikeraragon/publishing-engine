import { useEffect, useState } from 'react';
import { useGetImageByIdQuery, useGetImageByIdLazyQuery } from '../../generated/apolloComponents';

export interface DownloadMetadata {
    imageUrl: string | null;
    status: string;
    message: string;
}

export const useS3ImageDownload = (imageId: number | undefined) => {
    const [downloadMetadata, setMetadata] = useState<DownloadMetadata>({
        status: 'start',
        message: '',
        imageUrl: null
    });

    const [useGetImageById, { data, loading, error }] = useGetImageByIdLazyQuery();

    useEffect(() => {
        if (imageId) {
            useGetImageById({
                variables: {
                    imageId: imageId
                }
            });
        }
    }, [imageId]);

    useEffect(() => {
        if (!loading && !error && data?.getImageById) {
            setMetadata({
                status: 'complete',
                message: '',
                imageUrl: data.getImageById.presignedUrl
            });
        }
    }, [loading, error]);

    return { downloadMetadata };
};
