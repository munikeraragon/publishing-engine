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

export const DeletePost = gql`
    mutation DeletePost($postId: Float!) {
        deletePost(postId: $postId)
    }
`;

export const LikePost = gql`
    mutation LikePost($postId: Float!) {
        likePost(postId: $postId)
    }
`;

export const UnlikePost = gql`
    mutation UnlikePost($postId: Float!) {
        unlikePost(postId: $postId)
    }
`;

export const SavePost = gql`
    mutation SavePost($postId: Float!) {
        savePost(postId: $postId)
    }
`;

export const UnsavePost = gql`
    mutation UnsavePost($postId: Float!) {
        unsavePost(postId: $postId)
    }
`;
