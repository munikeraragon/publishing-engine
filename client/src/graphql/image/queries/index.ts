import { gql } from '@apollo/client';

export const GetUser = gql`
    query GetImageById($imageId: Float!) {
        getImageById(imageId: $imageId) {
            id
            label
            presignedUrl
        }
    }
`;
