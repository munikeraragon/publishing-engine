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

export type Image = {
    __typename?: 'Image';
    id: Scalars['ID'];
    label: Scalars['String'];
    presignedUrl: Scalars['String'];
};

export type ImageInput = {
    label: Scalars['String'];
};

export type ImageMapping = {
    __typename?: 'ImageMapping';
    id: Scalars['ID'];
    label: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createPost: SignedPost;
    createContactMessage: Scalars['String'];
    createImage: Image;
};

export type MutationCreatePostArgs = {
    postInput: PostInput;
};

export type MutationCreateContactMessageArgs = {
    contactMessageInput: ContactMessageInput;
};

export type MutationCreateImageArgs = {
    imageInput: ImageInput;
};

export type Post = {
    __typename?: 'Post';
    id: Scalars['ID'];
    userName: Scalars['String'];
    title: Scalars['String'];
    prettyTitle: Scalars['String'];
    description: Scalars['String'];
    mainImageId: Scalars['Float'];
    imagesNumber: Scalars['Float'];
    paragraphsNumber: Scalars['Float'];
    wordsNumber: Scalars['Float'];
    images: Array<ImageMapping>;
    readingTime: Scalars['Float'];
    creationDate: Scalars['String'];
};

export type PostInput = {
    title: Scalars['String'];
    mainImageId: Scalars['Float'];
    description: Scalars['String'];
    imagesNumber: Scalars['Float'];
    imagesIds: Array<Scalars['Float']>;
    paragraphsNumber: Scalars['Float'];
    wordsNumber: Scalars['Float'];
    readingTime: Scalars['Float'];
    publish: Scalars['Boolean'];
};

export type Query = {
    __typename?: 'Query';
    getPostById: SignedPost;
    getUserPosts: Array<Post>;
    getAllPosts: User;
    deletePost: User;
    updatePost: User;
    getPostByUserNameAndTitle: SignedPost;
    getContactMessages: Array<ContactMessage>;
    getUser: User;
    getImageById: Image;
};

export type QueryGetPostByIdArgs = {
    postId: Scalars['Float'];
};

export type QueryGetPostByUserNameAndTitleArgs = {
    title: Scalars['String'];
    userName: Scalars['String'];
};

export type QueryGetImageByIdArgs = {
    imageId: Scalars['Float'];
};

export type SignedPost = {
    __typename?: 'SignedPost';
    id: Scalars['ID'];
    userName: Scalars['String'];
    title: Scalars['String'];
    prettyTitle: Scalars['String'];
    mainImageId: Scalars['Float'];
    imagesNumber: Scalars['Float'];
    paragraphsNumber: Scalars['Float'];
    wordsNumber: Scalars['Float'];
    images: Array<ImageMapping>;
    readingTime: Scalars['Float'];
    creationDate: Scalars['String'];
    presignedUrl: Scalars['String'];
};

export type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    userName: Scalars['String'];
    email: Scalars['String'];
    locale: Scalars['String'];
    provider: Scalars['String'];
    picture: Scalars['String'];
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

export type CreateImageMutationVariables = Exact<{
    image: ImageInput;
}>;

export type CreateImageMutation = { __typename?: 'Mutation' } & {
    createImage: { __typename?: 'Image' } & Pick<Image, 'id' | 'label' | 'presignedUrl'>;
};

export type GetImageByIdQueryVariables = Exact<{
    imageId: Scalars['Float'];
}>;

export type GetImageByIdQuery = { __typename?: 'Query' } & {
    getImageById: { __typename?: 'Image' } & Pick<Image, 'id' | 'label' | 'presignedUrl'>;
};

export type CreatePostMutationVariables = Exact<{
    postInput: PostInput;
}>;

export type CreatePostMutation = { __typename?: 'Mutation' } & {
    createPost: { __typename?: 'SignedPost' } & Pick<
        SignedPost,
        | 'id'
        | 'title'
        | 'imagesNumber'
        | 'paragraphsNumber'
        | 'wordsNumber'
        | 'readingTime'
        | 'presignedUrl'
    > & { images: Array<{ __typename?: 'ImageMapping' } & Pick<ImageMapping, 'id' | 'label'>> };
};

export type GetUserPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserPostsQuery = { __typename?: 'Query' } & {
    getUserPosts: Array<
        { __typename?: 'Post' } & Pick<
            Post,
            | 'id'
            | 'title'
            | 'prettyTitle'
            | 'userName'
            | 'description'
            | 'mainImageId'
            | 'wordsNumber'
            | 'paragraphsNumber'
            | 'readingTime'
            | 'creationDate'
        >
    >;
};

export type GetPostByUserNameAndTitleQueryVariables = Exact<{
    userName: Scalars['String'];
    title: Scalars['String'];
}>;

export type GetPostByUserNameAndTitleQuery = { __typename?: 'Query' } & {
    getPostByUserNameAndTitle: { __typename?: 'SignedPost' } & Pick<
        SignedPost,
        | 'id'
        | 'title'
        | 'prettyTitle'
        | 'userName'
        | 'mainImageId'
        | 'imagesNumber'
        | 'paragraphsNumber'
        | 'wordsNumber'
        | 'presignedUrl'
        | 'readingTime'
    > & { images: Array<{ __typename?: 'ImageMapping' } & Pick<ImageMapping, 'id' | 'label'>> };
};

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
export const CreateImageDocument = gql`
    mutation CreateImage($image: ImageInput!) {
        createImage(imageInput: $image) {
            id
            label
            presignedUrl
        }
    }
`;
export type CreateImageMutationFn = Apollo.MutationFunction<
    CreateImageMutation,
    CreateImageMutationVariables
>;

/**
 * __useCreateImageMutation__
 *
 * To run a mutation, you first call `useCreateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImageMutation, { data, loading, error }] = useCreateImageMutation({
 *   variables: {
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateImageMutation(
    baseOptions?: Apollo.MutationHookOptions<CreateImageMutation, CreateImageMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateImageMutation, CreateImageMutationVariables>(
        CreateImageDocument,
        options
    );
}
export type CreateImageMutationHookResult = ReturnType<typeof useCreateImageMutation>;
export type CreateImageMutationResult = Apollo.MutationResult<CreateImageMutation>;
export type CreateImageMutationOptions = Apollo.BaseMutationOptions<
    CreateImageMutation,
    CreateImageMutationVariables
>;
export const GetImageByIdDocument = gql`
    query GetImageById($imageId: Float!) {
        getImageById(imageId: $imageId) {
            id
            label
            presignedUrl
        }
    }
`;

/**
 * __useGetImageByIdQuery__
 *
 * To run a query within a React component, call `useGetImageByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImageByIdQuery({
 *   variables: {
 *      imageId: // value for 'imageId'
 *   },
 * });
 */
export function useGetImageByIdQuery(
    baseOptions: Apollo.QueryHookOptions<GetImageByIdQuery, GetImageByIdQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetImageByIdQuery, GetImageByIdQueryVariables>(
        GetImageByIdDocument,
        options
    );
}
export function useGetImageByIdLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetImageByIdQuery, GetImageByIdQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetImageByIdQuery, GetImageByIdQueryVariables>(
        GetImageByIdDocument,
        options
    );
}
export type GetImageByIdQueryHookResult = ReturnType<typeof useGetImageByIdQuery>;
export type GetImageByIdLazyQueryHookResult = ReturnType<typeof useGetImageByIdLazyQuery>;
export type GetImageByIdQueryResult = Apollo.QueryResult<
    GetImageByIdQuery,
    GetImageByIdQueryVariables
>;
export const CreatePostDocument = gql`
    mutation CreatePost($postInput: PostInput!) {
        createPost(postInput: $postInput) {
            id
            title
            imagesNumber
            paragraphsNumber
            wordsNumber
            images {
                id
                label
            }
            readingTime
            presignedUrl
        }
    }
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
    CreatePostMutation,
    CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      postInput: // value for 'postInput'
 *   },
 * });
 */
export function useCreatePostMutation(
    baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
        CreatePostDocument,
        options
    );
}
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
    CreatePostMutation,
    CreatePostMutationVariables
>;
export const GetUserPostsDocument = gql`
    query GetUserPosts {
        getUserPosts {
            id
            title
            prettyTitle
            userName
            description
            mainImageId
            wordsNumber
            paragraphsNumber
            readingTime
            creationDate
        }
    }
`;

/**
 * __useGetUserPostsQuery__
 *
 * To run a query within a React component, call `useGetUserPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserPostsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetUserPostsQuery, GetUserPostsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
        GetUserPostsDocument,
        options
    );
}
export function useGetUserPostsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetUserPostsQuery, GetUserPostsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetUserPostsQuery, GetUserPostsQueryVariables>(
        GetUserPostsDocument,
        options
    );
}
export type GetUserPostsQueryHookResult = ReturnType<typeof useGetUserPostsQuery>;
export type GetUserPostsLazyQueryHookResult = ReturnType<typeof useGetUserPostsLazyQuery>;
export type GetUserPostsQueryResult = Apollo.QueryResult<
    GetUserPostsQuery,
    GetUserPostsQueryVariables
>;
export const GetPostByUserNameAndTitleDocument = gql`
    query GetPostByUserNameAndTitle($userName: String!, $title: String!) {
        getPostByUserNameAndTitle(userName: $userName, title: $title) {
            id
            title
            prettyTitle
            userName
            mainImageId
            imagesNumber
            paragraphsNumber
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

/**
 * __useGetPostByUserNameAndTitleQuery__
 *
 * To run a query within a React component, call `useGetPostByUserNameAndTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByUserNameAndTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByUserNameAndTitleQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useGetPostByUserNameAndTitleQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetPostByUserNameAndTitleQuery,
        GetPostByUserNameAndTitleQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetPostByUserNameAndTitleQuery, GetPostByUserNameAndTitleQueryVariables>(
        GetPostByUserNameAndTitleDocument,
        options
    );
}
export function useGetPostByUserNameAndTitleLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetPostByUserNameAndTitleQuery,
        GetPostByUserNameAndTitleQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetPostByUserNameAndTitleQuery,
        GetPostByUserNameAndTitleQueryVariables
    >(GetPostByUserNameAndTitleDocument, options);
}
export type GetPostByUserNameAndTitleQueryHookResult = ReturnType<
    typeof useGetPostByUserNameAndTitleQuery
>;
export type GetPostByUserNameAndTitleLazyQueryHookResult = ReturnType<
    typeof useGetPostByUserNameAndTitleLazyQuery
>;
export type GetPostByUserNameAndTitleQueryResult = Apollo.QueryResult<
    GetPostByUserNameAndTitleQuery,
    GetPostByUserNameAndTitleQueryVariables
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
