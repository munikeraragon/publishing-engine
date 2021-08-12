import { MutationFunctionOptions } from '@apollo/client';
import { useState } from 'react';
import {
    CreateImageMutation,
    Exact,
    ImageInput,
    useCreateImageMutation
} from '../../generated/apolloComponents';

const generateImage = async (
    label: string,
    createImage: (
        options?:
            | MutationFunctionOptions<CreateImageMutation, Exact<{ image: ImageInput }>>
            | undefined
    ) => any
) => {
    try {
        return (
            await createImage({
                variables: {
                    image: {
                        label
                    }
                }
            })
        ).data.createImage;
    } catch (err) {
        console.log(err);
        return '';
    }
};

export interface UploadMetadata {
    imageId: number;
    status: string;
    message: string;
}

export const useS3ImageUpload = () => {
    const [createImage] = useCreateImageMutation();
    const [metadata, setMetadata] = useState<UploadMetadata | null>(null);

    async function uploadImage(image: any, label: string) {
        const imageMetadata = await generateImage(label, createImage);
        fetch(imageMetadata.presignedUrl, {
            method: 'PUT',
            body: image
        })
            .then((response) => {
                console.log(response);
                setMetadata({ imageId: Number(imageMetadata.id), status: 'complete', message: '' });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return { uploadImage, metadata };
};
