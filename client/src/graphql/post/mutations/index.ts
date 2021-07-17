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
            imagesNumber
            paragraphsNumber
            wordsNumber
            images {
                id
                label
            }
            readingTime
            presignedUrl
            creationDate
        }
    }
`;
