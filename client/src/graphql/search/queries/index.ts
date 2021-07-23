import { gql } from '@apollo/client';

export const GetUser = gql`
    query Search($searchInput: SearchInput!) {
        search(searchInput: $searchInput) {
            id
            title
            prettyTitle
            tags
            userName
            description
            userPicture
            userIcon
            reactions
            comments
            mainImageId
            readingTime
            creationDate
        }
    }
`;
