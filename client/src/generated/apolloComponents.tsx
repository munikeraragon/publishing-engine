import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
    DateTime: any;
};

export type ContactMessage = {
    __typename?: 'ContactMessage';
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    company: Scalars['String'];
    phone: Scalars['String'];
    message: Scalars['String'];
    country: Scalars['String'];
    creationDate: Scalars['DateTime'];
};

export type ContactMessageInput = {
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    company: Scalars['String'];
    phone: Scalars['String'];
    message: Scalars['String'];
    country: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createContactMessage: Scalars['String'];
};

export type MutationCreateContactMessageArgs = {
    contactMessageInput: ContactMessageInput;
};

export type Query = {
    __typename?: 'Query';
    getContactMessages: Array<ContactMessage>;
    getUser: User;
};

export type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    locale: Scalars['String'];
    provider: Scalars['String'];
    picture: Scalars['String'];
    country: Scalars['String'];
    roles: Array<Scalars['String']>;
    creationDate: Scalars['DateTime'];
};

export type CreateContactMessageMutationVariables = Exact<{
    contactMessage: ContactMessageInput;
}>;

export type CreateContactMessageMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'createContactMessage'
>;

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = { __typename?: 'Query' } & {
    getUser: { __typename?: 'User' } & Pick<User, 'firstName' | 'email'>;
};

export const CreateContactMessageDocument = gql`
    mutation CreateContactMessage($contactMessage: ContactMessageInput!) {
        createContactMessage(contactMessageInput: $contactMessage)
    }
`;
export type CreateContactMessageMutationFn = Apollo.MutationFunction<
    CreateContactMessageMutation,
    CreateContactMessageMutationVariables
>;

/**
 * __useCreateContactMessageMutation__
 *
 * To run a mutation, you first call `useCreateContactMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactMessageMutation, { data, loading, error }] = useCreateContactMessageMutation({
 *   variables: {
 *      contactMessage: // value for 'contactMessage'
 *   },
 * });
 */
export function useCreateContactMessageMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateContactMessageMutation,
        CreateContactMessageMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateContactMessageMutation, CreateContactMessageMutationVariables>(
        CreateContactMessageDocument,
        options
    );
}
export type CreateContactMessageMutationHookResult = ReturnType<
    typeof useCreateContactMessageMutation
>;
export type CreateContactMessageMutationResult =
    Apollo.MutationResult<CreateContactMessageMutation>;
export type CreateContactMessageMutationOptions = Apollo.BaseMutationOptions<
    CreateContactMessageMutation,
    CreateContactMessageMutationVariables
>;
export const GetUserDocument = gql`
    query GetUser {
        getUser {
            firstName
            email
        }
    }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(
    baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
