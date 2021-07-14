import { useEffect, useState } from 'react';
import { useGetPostByUserNameAndTitleQuery } from '../../generated/apolloComponents';

export interface DownloadMetadata {
    data: string;
    status: string;
    message: string;
}

export const useS3PostDownload = (userName: string, title: string) => {
    const [downloadMetadata, setMetadata] = useState<DownloadMetadata | null>(null);
    const { data, loading, error } = useGetPostByUserNameAndTitleQuery({
        variables: {
            userName,
            title
        }
    });

    useEffect(() => {
        if (!loading && !error && data?.getPostByUserNameAndTitle) {
            fetch(data.getPostByUserNameAndTitle.presignedUrl, {
                method: 'GET'
            })
                .then(async (response) => {
                    const data = await response.json();
                    setMetadata({ status: 'complete', data: data, message: '' });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [loading, error]);

    return { downloadMetadata };
};
