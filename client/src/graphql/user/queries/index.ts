import { gql } from '@apollo/client';

export const GetUser = gql`
    query GetUser {
        getUser {
            firstName
            email
        }
    }
`;