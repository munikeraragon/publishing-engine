import { gql } from '@apollo/client';

export const GetAdminInsight = gql`
    query GetAdminInsight {
        getAdminInsight {
            userInsight {
                users {
                    id
                    userName
                    locale
                    email
                    creationDate
                }
                totalUsers
            }
            contactMessageInsight {
                contactMessages {
                    id
                    firstName
                    lastName
                    email
                    company
                    country
                    creationDate
                    phone
                }
                totalMessages
            }
            postInsight {
                totalPosts
            }
        }
    }
`;
