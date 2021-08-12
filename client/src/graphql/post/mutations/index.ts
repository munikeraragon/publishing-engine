import { gql } from '@apollo/client';

export const CreatePost = gql`
    mutation CreatePost($postInput: PostInput!) {
        createPost(postInput: $postInput) {
            id
            title
            userName
            userPicture
            userLocale
            userCreationDate
            mainImageId
            prettyTitle
            images
            paragraphs
            words
            imagesMapping {
                id
                label
            }
            readingTime
            presignedUrl
            creationDate
        }
    }
`;

export const UpdatePost = gql`
    mutation UpdatePost($postId: Float!, $postInput: PostInput!) {
        updatePost(postId: $postId, postInput: $postInput) {
            id
            title
            userName
            userPicture
            userLocale
            userCreationDate
            mainImageId
            prettyTitle
            images
            paragraphs
            words
            imagesMapping {
                id
                label
            }
            readingTime
            presignedUrl
            creationDate
        }
    }
`;
