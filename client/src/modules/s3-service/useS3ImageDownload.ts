import { useEffect, useState } from 'react';
import { useGetImageByIdQuery } from '../../generated/apolloComponents';

export interface DownloadMetadata {
    imageUrl: string;
    status: string;
    message: string;
}

export const useS3ImageDownload = (imageId: number) => {
    const [downloadMetadata, setMetadata] = useState<DownloadMetadata | null>(null);
    const { data, loading, error } = useGetImageByIdQuery({
        variables: {
            imageId: imageId
        }
    });

    useEffect(() => {
        if (!loading && !error && data?.getImageById) {
            setMetadata({
                status: 'complete',
                message: '',
                imageUrl: data.getImageById.presignedUrl
            });
        }
        console.log(error);
    }, [loading, error]);

    return { downloadMetadata };
};
