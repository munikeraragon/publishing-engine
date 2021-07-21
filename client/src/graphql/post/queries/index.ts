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
            wordsNumber
            paragraphsNumber
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
            tags
            userPicture
            mainImageId
            imagesNumber
            paragraphsNumber
            userIcon
            wordsNumber
            presignedUrl
            images {
                id
                label
            }
            readingTime
        }
    }
`;
