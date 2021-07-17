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
    postId: number;
    status: string;
    message: string;
}

export interface UploadPost {
    title: string;
    description: string;
    mainImageId: number;
    imagesNumber: number;
    imagesIds: number[];
    paragraphsNumber: number;
    wordsNumber: number;
    readingTime: number;
    publish: boolean;
    mainImage: number;
    mainBody: string;
    creationDate: string;
}

export const useS3PostUpload = () => {
    const [createPost] = useCreatePostMutation();
    const [metadata, setMetadata] = useState<UploadMetadata | null>(null);

    async function uploadPost(postInput: UploadPost) {
        const postMetadata = await generatePost(
            {
                title: postInput.title,
                description: postInput.description,
                mainImageId: postInput.mainImageId,
                imagesNumber: postInput.imagesNumber,
                imagesIds: postInput.imagesIds,
                paragraphsNumber: postInput.paragraphsNumber,
                wordsNumber: postInput.wordsNumber,
                readingTime: postInput.readingTime,
                publish: postInput.publish
            },
            createPost
        );

        fetch(postMetadata.presignedUrl, {
            method: 'PUT',
            body: JSON.stringify(postInput)
        })
            .then((response) => {
                console.log(response);
                setMetadata({ postId: Number(postMetadata.id), status: 'complete', message: '' });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return { uploadPost, metadata };
};
