import { useState } from 'react';
import { useUpdatePostMutation } from '../../generated/apolloComponents';
import { UploadPost } from './interfaces';

export interface UploadMetadata {
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

export const useS3PostUpdate = () => {
    const [updatePostMutation] = useUpdatePostMutation();
    const [metadata, setMetadata] = useState<UploadMetadata | null>(null);

    async function updatePost(post: UploadPost, postId: number | null) {
        if (!postId) return;

        const postMetadata = (
            await updatePostMutation({
                variables: {
                    postInput: {
                        title: post.title,
                        description: post.description,
                        mainImageId: post.mainImageId,
                        images: post.images,
                        imagesIds: post.imagesIds,
                        paragraphs: post.paragraphs,
                        words: post.words,
                        readingTime: post.readingTime,
                        publish: post.publish,
                        tags: post.tags
                    },
                    postId: postId
                }
            })
        ).data?.updatePost;

        if (postMetadata) {
            fetch(postMetadata.presignedUrl, {
                method: 'PUT',
                body: JSON.stringify(post)
            })
                .then((response) => {
                    console.log(response);
                    setMetadata({
                        data: mergeObjects(post, postMetadata),
                        status: 'complete',
                        message: ''
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    return { updatePost, metadata };
};
