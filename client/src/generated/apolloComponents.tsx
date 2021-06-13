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
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export type ContactMessage = {
    __typename?: 'ContactMessage';
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    email: Scalars['String'];
    company: Scalars['String'];
    phone: Scalars['String'];
    message: Scalars['String'];
    country: Scalars['String'];
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
    createContactMessage?: Maybe<Scalars['String']>;
};

export type MutationCreateContactMessageArgs = {
    contactMessage?: Maybe<ContactMessageInput>;
};

export type Query = {
    __typename?: 'Query';
    hello?: Maybe<Scalars['String']>;
    getContactMessages?: Maybe<Maybe<ContactMessage>[]>;
};

export type CreateContactMessageMutationVariables = Exact<{
    contactMessage: ContactMessageInput;
}>;

export type CreateContactMessageMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'createContactMessage'
>;

export const CreateContactMessageDocument = gql`
    mutation CreateContactMessage($contactMessage: ContactMessageInput!) {
        createContactMessage(contactMessage: $contactMessage)
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
