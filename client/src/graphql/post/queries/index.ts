import { gql } from '@apollo/client';

export const GetUserPosts = gql`
    query GetUserPosts {
        getUserPosts {
            id
            title
            prettyTitle
            userName
            userIcon
            tags
            userPicture
            description
            mainImageId
            comments
            reactions
            words
            paragraphs
            readingTime
            creationDate
        }
    }
`;

export const GetPostByUserNameAndTitle = gql`
    query GetPostByUserNameAndTitle($userName: String!, $title: String!) {
        getPostByUserNameAndTitle(userName: $userName, title: $title) {
            id
            title
            prettyTitle
            userName
            userLocale
            userCreationDate
            tags
            userPicture
            mainImageId
            images
            paragraphs
            userIcon
            words
            comments
            reactions
            presignedUrl
            imagesMapping {
                id
                label
            }
            readingTime
        }
    }
`;

export const DeletePost = gql`
    query DeletePost($postId: Float!) {
        deletePost(postId: $postId)
    }
`;
