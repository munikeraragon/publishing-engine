import { gql } from '@apollo/client';

export const CreatePost = gql`
    mutation CreatePost($postInput: PostInput!) {
        createPost(postInput: $postInput) {
            id
            title
            userName
            mainImageId
            userPicture
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
