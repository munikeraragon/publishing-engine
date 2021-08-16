import { useEffect, useState } from 'react';
import { useGetPostByUserNameAndTitleQuery } from '../../generated/apolloComponents';

export interface DownloadMetadata {
    data: any;
    status: string;
    message: string;
}

const mergeObjects = (primary: any, secondary: any) => {
    Object.keys(secondary).forEach((key) => {
        if (!(key in primary)) {
            primary[key] = secondary[key];
        }
    });
    return primary;
};

export const useS3PostDownload = (userName: string, title: string) => {
    const [downloadMetadata, setMetadata] = useState<DownloadMetadata>({
        data: null,
        status: 'start',
        message: ''
    });

    const { data, loading, error } = useGetPostByUserNameAndTitleQuery({
        variables: {
            userName,
            title
        }
    });

    useEffect(() => {
        if (!loading && !error && data?.getPostByUserNameAndTitle) {
            console.log(data.getPostByUserNameAndTitle);
            fetch(data.getPostByUserNameAndTitle.presignedUrl, {
                method: 'GET'
            })
                .then(async (response) => {
                    const post = await response.json();
                    setMetadata({
                        status: 'complete',
                        data: mergeObjects(post, data.getPostByUserNameAndTitle),
                        message: ''
                    });
                })
                .catch((err) => {
                    setMetadata({
                        status: 'error',
                        data: data.getPostByUserNameAndTitle,
                        message: err
                    });
                });
        }
    }, [loading, error]);

    return { downloadMetadata };
};
