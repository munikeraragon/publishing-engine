import { MutationFunctionOptions } from '@apollo/client';
import { useState } from 'react';
import {
    useCreatePostMutation,
    CreatePostMutation,
    Exact,
    PostInput
} from '../../generated/apolloComponents';

const generatePost = async (
    postInput: PostInput,
    createPost: (
        options?:
            | MutationFunctionOptions<CreatePostMutation, Exact<{ postInput: PostInput }>>
            | undefined
    ) => any
) => {
    try {
        return (
            await createPost({
                variables: {
                    postInput: postInput
                }
            })
        ).data.createPost;
    } catch (err) {
        console.log(err);
        return '';
    }
};

export interface UploadMetadata {
    data: any;
    status: string;
    message: string;
}

export interface UploadPost {
    title: string;
    description: string;
    mainImageId: number;
    images: number;
    imagesIds: number[];
    paragraphs: number;
    words: number;
    readingTime: number;
    publish: boolean;
    mainImage: number;
    mainBody: string;
    tags: string[];
    creationDate: string;
}

const mergeObjects = (primary: any, secondary: any) => {
    Object.keys(secondary).forEach((key) => {
        if (!(key in primary)) {
            primary[key] = secondary[key];
        }
    });
    return primary;
};

export const useS3PostUpload = () => {
    const [createPost] = useCreatePostMutation();
    const [metadata, setMetadata] = useState<UploadMetadata | null>(null);

    async function uploadPost(postInput: UploadPost) {
        const postMetadata = await generatePost(
            {
                title: postInput.title,
                description: postInput.description,
                mainImageId: postInput.mainImageId,
                images: postInput.images,
                imagesIds: postInput.imagesIds,
                paragraphs: postInput.paragraphs,
                words: postInput.words,
                readingTime: postInput.readingTime,
                publish: postInput.publish,
                tags: postInput.tags
            },
            createPost
        );

        fetch(postMetadata.presignedUrl, {
            method: 'PUT',
            body: JSON.stringify(postInput)
        })
            .then((response) => {
                console.log(response);
                setMetadata({
                    data: mergeObjects(postInput, postMetadata),
                    status: 'complete',
                    message: ''
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return { uploadPost, metadata };
};
