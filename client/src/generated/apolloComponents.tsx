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

export type AdminInsight = {
    __typename?: 'AdminInsight';
    userInsight: UserInsight;
    postInsight: PostInsight;
    contactMessageInsight: ContactMessageInsight;
};

export type ContactMessage = {
    __typename?: 'ContactMessage';
    id: Scalars['ID'];
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

export type ContactMessageInsight = {
    __typename?: 'ContactMessageInsight';
    totalMessages: Scalars['Float'];
    contactMessages: Array<ContactMessage>;
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
    updatePost: SignedPost;
    createContactMessage: Scalars['String'];
    createImage: Image;
};

export type MutationCreatePostArgs = {
    postInput: PostInput;
};

export type MutationUpdatePostArgs = {
    postId: Scalars['Float'];
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
    userIcon: Scalars['String'];
    userLocale: Scalars['String'];
    userCreationDate: Scalars['String'];
    userPicture: Scalars['String'];
    title: Scalars['String'];
    tags: Array<Scalars['String']>;
    prettyTitle: Scalars['String'];
    description: Scalars['String'];
    mainImageId: Scalars['Float'];
    images: Scalars['Float'];
    paragraphs: Scalars['Float'];
    reactions: Scalars['Float'];
    comments: Scalars['Float'];
    words: Scalars['Float'];
    imagesMapping: Array<ImageMapping>;
    readingTime: Scalars['Float'];
    creationDate: Scalars['String'];
};

export type PostInput = {
    title: Scalars['String'];
    mainImageId: Scalars['Float'];
    description: Scalars['String'];
    images: Scalars['Float'];
    imagesIds: Array<Scalars['Float']>;
    tags: Array<Scalars['String']>;
    paragraphs: Scalars['Float'];
    words: Scalars['Float'];
    readingTime: Scalars['Float'];
    publish: Scalars['Boolean'];
};

export type PostInsight = {
    __typename?: 'PostInsight';
    totalPosts: Scalars['Float'];
};

export type Query = {
    __typename?: 'Query';
    getPostById: SignedPost;
    getUserPosts: Array<Post>;
    search: Array<Post>;
    deletePost: Scalars['String'];
    getPostByUserNameAndTitle: SignedPost;
    getContactMessages: Array<ContactMessage>;
    getUser: User;
    getImageById: Image;
    getAdminInsight: AdminInsight;
};

export type QueryGetPostByIdArgs = {
    postId: Scalars['Float'];
};

export type QuerySearchArgs = {
    searchInput: SearchInput;
};

export type QueryDeletePostArgs = {
    postId: Scalars['Float'];
};

export type QueryGetPostByUserNameAndTitleArgs = {
    title: Scalars['String'];
    userName: Scalars['String'];
};

export type QueryGetImageByIdArgs = {
    imageId: Scalars['Float'];
};

export type SearchInput = {
    pageSize: Scalars['Float'];
    page: Scalars['Float'];
    sortBy: Scalars['String'];
    sortDirection: Scalars['String'];
    startDate: Scalars['String'];
    endDate: Scalars['String'];
};

export type SignedPost = {
    __typename?: 'SignedPost';
    id: Scalars['ID'];
    userName: Scalars['String'];
    userIcon: Scalars['String'];
    userLocale: Scalars['String'];
    userCreationDate: Scalars['String'];
    userPicture: Scalars['String'];
    title: Scalars['String'];
    tags: Array<Scalars['String']>;
    prettyTitle: Scalars['String'];
    mainImageId: Scalars['Float'];
    images: Scalars['Float'];
    paragraphs: Scalars['Float'];
    words: Scalars['Float'];
    imagesMapping: Array<ImageMapping>;
    readingTime: Scalars['Float'];
    reactions: Scalars['Float'];
    comments: Scalars['Float'];
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
    userIcon: Scalars['String'];
    role: Scalars['String'];
    creationDate: Scalars['DateTime'];
};

export type UserInsight = {
    __typename?: 'UserInsight';
    totalUsers: Scalars['Float'];
    users: Array<User>;
};

export type GetAdminInsightQueryVariables = Exact<{ [key: string]: never }>;

export type GetAdminInsightQuery = { __typename?: 'Query' } & {
    getAdminInsight: { __typename?: 'AdminInsight' } & {
        userInsight: { __typename?: 'UserInsight' } & Pick<UserInsight, 'totalUsers'> & {
                users: Array<
                    { __typename?: 'User' } & Pick<
                        User,
                        'id' | 'userName' | 'locale' | 'email' | 'creationDate'
                    >
                >;
            };
        contactMessageInsight: { __typename?: 'ContactMessageInsight' } & Pick<
            ContactMessageInsight,
            'totalMessages'
        > & {
                contactMessages: Array<
                    { __typename?: 'ContactMessage' } & Pick<
                        ContactMessage,
                        | 'id'
                        | 'firstName'
                        | 'lastName'
                        | 'email'
                        | 'company'
                        | 'country'
                        | 'creationDate'
                        | 'phone'
                    >
                >;
            };
        postInsight: { __typename?: 'PostInsight' } & Pick<PostInsight, 'totalPosts'>;
    };
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
        | 'userName'
        | 'userPicture'
        | 'userLocale'
        | 'userCreationDate'
        | 'mainImageId'
        | 'prettyTitle'
        | 'images'
        | 'paragraphs'
        | 'words'
        | 'readingTime'
        | 'presignedUrl'
        | 'creationDate'
    > & {
            imagesMapping: Array<
                { __typename?: 'ImageMapping' } & Pick<ImageMapping, 'id' | 'label'>
            >;
        };
};

export type UpdatePostMutationVariables = Exact<{
    postId: Scalars['Float'];
    postInput: PostInput;
}>;

export type UpdatePostMutation = { __typename?: 'Mutation' } & {
    updatePost: { __typename?: 'SignedPost' } & Pick<
        SignedPost,
        | 'id'
        | 'title'
        | 'userName'
        | 'userPicture'
        | 'userLocale'
        | 'userCreationDate'
        | 'mainImageId'
        | 'prettyTitle'
        | 'images'
        | 'paragraphs'
        | 'words'
        | 'readingTime'
        | 'presignedUrl'
        | 'creationDate'
    > & {
            imagesMapping: Array<
                { __typename?: 'ImageMapping' } & Pick<ImageMapping, 'id' | 'label'>
            >;
        };
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
            | 'userIcon'
            | 'tags'
            | 'userPicture'
            | 'description'
            | 'mainImageId'
            | 'comments'
            | 'reactions'
            | 'words'
            | 'paragraphs'
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
        | 'userLocale'
        | 'userCreationDate'
        | 'tags'
        | 'userPicture'
        | 'mainImageId'
        | 'images'
        | 'paragraphs'
        | 'userIcon'
        | 'words'
        | 'comments'
        | 'reactions'
        | 'presignedUrl'
        | 'readingTime'
    > & {
            imagesMapping: Array<
                { __typename?: 'ImageMapping' } & Pick<ImageMapping, 'id' | 'label'>
            >;
        };
};

export type DeletePostQueryVariables = Exact<{
    postId: Scalars['Float'];
}>;

export type DeletePostQuery = { __typename?: 'Query' } & Pick<Query, 'deletePost'>;

export type SearchQueryVariables = Exact<{
    searchInput: SearchInput;
}>;

export type SearchQuery = { __typename?: 'Query' } & {
    search: Array<
        { __typename?: 'Post' } & Pick<
            Post,
            | 'id'
            | 'title'
            | 'prettyTitle'
            | 'tags'
            | 'userName'
            | 'description'
            | 'userPicture'
            | 'userIcon'
            | 'reactions'
            | 'comments'
            | 'mainImageId'
            | 'readingTime'
            | 'creationDate'
        >
    >;
};

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = { __typename?: 'Query' } & {
    getUser: { __typename?: 'User' } & Pick<
        User,
        'userIcon' | 'userName' | 'locale' | 'creationDate'
    >;
};

export const GetAdminInsightDocument = gql`
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

/**
 * __useGetAdminInsightQuery__
 *
 * To run a query within a React component, call `useGetAdminInsightQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminInsightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminInsightQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminInsightQuery(
    baseOptions?: Apollo.QueryHookOptions<GetAdminInsightQuery, GetAdminInsightQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAdminInsightQuery, GetAdminInsightQueryVariables>(
        GetAdminInsightDocument,
        options
    );
}
export function useGetAdminInsightLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetAdminInsightQuery, GetAdminInsightQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetAdminInsightQuery, GetAdminInsightQueryVariables>(
        GetAdminInsightDocument,
        options
    );
}
export type GetAdminInsightQueryHookResult = ReturnType<typeof useGetAdminInsightQuery>;
export type GetAdminInsightLazyQueryHookResult = ReturnType<typeof useGetAdminInsightLazyQuery>;
export type GetAdminInsightQueryResult = Apollo.QueryResult<
    GetAdminInsightQuery,
    GetAdminInsightQueryVariables
>;
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
export const UpdatePostDocument = gql`
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
export type UpdatePostMutationFn = Apollo.MutationFunction<
    UpdatePostMutation,
    UpdatePostMutationVariables
>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      postInput: // value for 'postInput'
 *   },
 * });
 */
export function useUpdatePostMutation(
    baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(
        UpdatePostDocument,
        options
    );
}
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<
    UpdatePostMutation,
    UpdatePostMutationVariables
>;
export const GetUserPostsDocument = gql`
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
            comments
            reactions
            words
            paragraphs
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
            userLocale
            userCreationDate
            tags
            userPicture
            mainImageId
            images
            paragraphs
            userIcon
            words
            comments
            reactions
            presignedUrl
            imagesMapping {
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
export const DeletePostDocument = gql`
    query DeletePost($postId: Float!) {
        deletePost(postId: $postId)
    }
`;

/**
 * __useDeletePostQuery__
 *
 * To run a query within a React component, call `useDeletePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeletePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletePostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostQuery(
    baseOptions: Apollo.QueryHookOptions<DeletePostQuery, DeletePostQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<DeletePostQuery, DeletePostQueryVariables>(DeletePostDocument, options);
}
export function useDeletePostLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<DeletePostQuery, DeletePostQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<DeletePostQuery, DeletePostQueryVariables>(
        DeletePostDocument,
        options
    );
}
export type DeletePostQueryHookResult = ReturnType<typeof useDeletePostQuery>;
export type DeletePostLazyQueryHookResult = ReturnType<typeof useDeletePostLazyQuery>;
export type DeletePostQueryResult = Apollo.QueryResult<DeletePostQuery, DeletePostQueryVariables>;
export const SearchDocument = gql`
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

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      searchInput: // value for 'searchInput'
 *   },
 * });
 */
export function useSearchQuery(
    baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
}
export function useSearchLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
}
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
export const GetUserDocument = gql`
    query GetUser {
        getUser {
            userIcon
            userName
            locale
            creationDate
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
