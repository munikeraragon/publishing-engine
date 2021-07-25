import { gql } from '@apollo/client';

export const GetTotalUsers = gql`
    query GetTotalUsers {
        getTotalUsers
    }
`;

export const GetTotalPosts = gql`
    query GetTotalPosts {
        getTotalPosts
    }
`;
