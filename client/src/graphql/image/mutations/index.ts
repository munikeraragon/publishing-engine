import { gql } from '@apollo/client';

export const CreateImage = gql`
    mutation CreateImage($image: ImageInput!) {
        createImage(imageInput: $image) {
            id
            label
            presignedUrl
        }
    }
`;
