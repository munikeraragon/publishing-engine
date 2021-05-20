import { gql } from '@apollo/client';

export const CreateContactMessage = gql`
    mutation CreateContactMessage($contactMessage: ContactMessageInput!) {
        createContactMessage(contactMessage: $contactMessage)
    }
`;
