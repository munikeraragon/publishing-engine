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
            likes
            saved
            words
            paragraphs
            readingTime
            creationDate
        }
    }
`;

export const GetUserSavedPosts = gql`
    query GetUserSavedPosts {
        getUserSavedPosts {
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
            likes
            saved
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
            likes
            saved
            presignedUrl
            imagesMapping {
                id
                label
            }
            readingTime
        }
    }
`;

export const isPostSaved = gql`
    query IsPostSaved($postId: Float!) {
        isPostSaved(postId: $postId)
    }
`;

export const isPostLiked = gql`
    query IsPostLiked($postId: Float!) {
        isPostLiked(postId: $postId)
    }
`;
