import { gql } from '@apollo/client';

export const CreatePost = gql`
    mutation CreatePost($postInput: PostInput!) {
        createPost(postInput: $postInput) {
            id
            title
            imagesNumber
            paragraphsNumber
            wordsNumber
            images {
                id
                label
            }
            readingTime
            presignedUrl
        }
    }
`;
