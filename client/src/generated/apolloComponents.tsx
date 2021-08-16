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
    likePost: Scalars['String'];
    unlikePost: Scalars['String'];
    savePost: Scalars['String'];
    unsavePost: Scalars['String'];
    deletePost: Scalars['String'];
    createContactMessage: Scalars['String'];
    follow: Scalars['String'];
    createImage: Image;
};

export type MutationCreatePostArgs = {
    postInput: PostInput;
};

export type MutationUpdatePostArgs = {
    postId: Scalars['Float'];
    postInput: PostInput;
};

export type MutationLikePostArgs = {
    postId: Scalars['Float'];
};

export type MutationUnlikePostArgs = {
    postId: Scalars['Float'];
};

export type MutationSavePostArgs = {
    postId: Scalars['Float'];
};

export type MutationUnsavePostArgs = {
    postId: Scalars['Float'];
};

export type MutationDeletePostArgs = {
    postId: Scalars['Float'];
};

export type MutationCreateContactMessageArgs = {
    contactMessageInput: ContactMessageInput;
};

export type MutationFollowArgs = {
    creatorId: Scalars['Float'];
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
    likes: Scalars['Float'];
    saved: Scalars['Float'];
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
    getPostByUserNameAndTitle: SignedPost;
    getUserPosts: Array<Post>;
    getUserSavedPosts: Array<Post>;
    isPostSaved: Scalars['Boolean'];
    isPostLiked: Scalars['Boolean'];
    search: Array<Post>;
    getContactMessages: Array<ContactMessage>;
    getUser: User;
    getImageById: Image;
    getAdminInsight: AdminInsight;
};

export type QueryGetPostByIdArgs = {
    postId: Scalars['Float'];
};

export type QueryGetPostByUserNameAndTitleArgs = {
    title: Scalars['String'];
    userName: Scalars['String'];
};

export type QueryIsPostSavedArgs = {
    postId: Scalars['Float'];
};

export type QueryIsPostLikedArgs = {
    postId: Scalars['Float'];
};

export type QuerySearchArgs = {
    searchInput: SearchInput;
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
    likes: Scalars['Float'];
    saved: Scalars['Float'];
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

export type DeletePostMutationVariables = Exact<{
    postId: Scalars['Float'];
}>;

export type DeletePostMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deletePost'>;

export type LikePostMutationVariables = Exact<{
    postId: Scalars['Float'];
}>;

export type LikePostMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'likePost'>;

export type UnlikePostMutationVariables = Exact<{
    postId: Scalars['Float'];
}>;

export type UnlikePostMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'unlikePost'>;

export type SavePostMutationVariables = Exact<{
    postId: Scalars['Float'];
}>;

export type SavePostMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'savePost'>;

export type UnsavePostMutationVariables = Exact<{
    postId: Scalars['Float'];
}>;

export type UnsavePostMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'unsavePost'>;

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
            | 'likes'
            | 'saved'
            | 'words'
            | 'paragraphs'
            | 'readingTime'
            | 'creationDate'
        >
    >;
};

export type GetUserSavedPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserSavedPostsQuery = { __typename?: 'Query' } & {
    getUserSavedPosts: Array<
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
            | 'likes'
            | 'saved'
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
        | 'likes'
        | 'saved'
        | 'presignedUrl'
        | 'readingTime'
    > & {
            imagesMapping: Array<
                { __typename?: 'ImageMapping' } & Pick<ImageMapping, 'id' | 'label'>
            >;
        };
};

export type IsPostSavedQueryVariables = Exact<{
    postId: Scalars['Float'];
}>;

export type IsPostSavedQuery = { __typename?: 'Query' } & Pick<Query, 'isPostSaved'>;

export type IsPostLikedQueryVariables = Exact<{
    postId: Scalars['Float'];
}>;

export type IsPostLikedQuery = { __typename?: 'Query' } & Pick<Query, 'isPostLiked'>;

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
            | 'likes'
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
export const DeletePostDocument = gql`
    mutation DeletePost($postId: Float!) {
        deletePost(postId: $postId)
    }
`;
export type DeletePostMutationFn = Apollo.MutationFunction<
    DeletePostMutation,
    DeletePostMutationVariables
>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(
    baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
        DeletePostDocument,
        options
    );
}
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
    DeletePostMutation,
    DeletePostMutationVariables
>;
export const LikePostDocument = gql`
    mutation LikePost($postId: Float!) {
        likePost(postId: $postId)
    }
`;
export type LikePostMutationFn = Apollo.MutationFunction<
    LikePostMutation,
    LikePostMutationVariables
>;

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useLikePostMutation(
    baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(
        LikePostDocument,
        options
    );
}
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = Apollo.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = Apollo.BaseMutationOptions<
    LikePostMutation,
    LikePostMutationVariables
>;
export const UnlikePostDocument = gql`
    mutation UnlikePost($postId: Float!) {
        unlikePost(postId: $postId)
    }
`;
export type UnlikePostMutationFn = Apollo.MutationFunction<
    UnlikePostMutation,
    UnlikePostMutationVariables
>;

/**
 * __useUnlikePostMutation__
 *
 * To run a mutation, you first call `useUnlikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikePostMutation, { data, loading, error }] = useUnlikePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useUnlikePostMutation(
    baseOptions?: Apollo.MutationHookOptions<UnlikePostMutation, UnlikePostMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UnlikePostMutation, UnlikePostMutationVariables>(
        UnlikePostDocument,
        options
    );
}
export type UnlikePostMutationHookResult = ReturnType<typeof useUnlikePostMutation>;
export type UnlikePostMutationResult = Apollo.MutationResult<UnlikePostMutation>;
export type UnlikePostMutationOptions = Apollo.BaseMutationOptions<
    UnlikePostMutation,
    UnlikePostMutationVariables
>;
export const SavePostDocument = gql`
    mutation SavePost($postId: Float!) {
        savePost(postId: $postId)
    }
`;
export type SavePostMutationFn = Apollo.MutationFunction<
    SavePostMutation,
    SavePostMutationVariables
>;

/**
 * __useSavePostMutation__
 *
 * To run a mutation, you first call `useSavePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePostMutation, { data, loading, error }] = useSavePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useSavePostMutation(
    baseOptions?: Apollo.MutationHookOptions<SavePostMutation, SavePostMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<SavePostMutation, SavePostMutationVariables>(
        SavePostDocument,
        options
    );
}
export type SavePostMutationHookResult = ReturnType<typeof useSavePostMutation>;
export type SavePostMutationResult = Apollo.MutationResult<SavePostMutation>;
export type SavePostMutationOptions = Apollo.BaseMutationOptions<
    SavePostMutation,
    SavePostMutationVariables
>;
export const UnsavePostDocument = gql`
    mutation UnsavePost($postId: Float!) {
        unsavePost(postId: $postId)
    }
`;
export type UnsavePostMutationFn = Apollo.MutationFunction<
    UnsavePostMutation,
    UnsavePostMutationVariables
>;

/**
 * __useUnsavePostMutation__
 *
 * To run a mutation, you first call `useUnsavePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsavePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsavePostMutation, { data, loading, error }] = useUnsavePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useUnsavePostMutation(
    baseOptions?: Apollo.MutationHookOptions<UnsavePostMutation, UnsavePostMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UnsavePostMutation, UnsavePostMutationVariables>(
        UnsavePostDocument,
        options
    );
}
export type UnsavePostMutationHookResult = ReturnType<typeof useUnsavePostMutation>;
export type UnsavePostMutationResult = Apollo.MutationResult<UnsavePostMutation>;
export type UnsavePostMutationOptions = Apollo.BaseMutationOptions<
    UnsavePostMutation,
    UnsavePostMutationVariables
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
            likes
            saved
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
export const GetUserSavedPostsDocument = gql`
    query GetUserSavedPosts {
        getUserSavedPosts {
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
            likes
            saved
            words
            paragraphs
            readingTime
            creationDate
        }
    }
`;

/**
 * __useGetUserSavedPostsQuery__
 *
 * To run a query within a React component, call `useGetUserSavedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserSavedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserSavedPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserSavedPostsQuery(
    baseOptions?: Apollo.QueryHookOptions<GetUserSavedPostsQuery, GetUserSavedPostsQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetUserSavedPostsQuery, GetUserSavedPostsQueryVariables>(
        GetUserSavedPostsDocument,
        options
    );
}
export function useGetUserSavedPostsLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetUserSavedPostsQuery,
        GetUserSavedPostsQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetUserSavedPostsQuery, GetUserSavedPostsQueryVariables>(
        GetUserSavedPostsDocument,
        options
    );
}
export type GetUserSavedPostsQueryHookResult = ReturnType<typeof useGetUserSavedPostsQuery>;
export type GetUserSavedPostsLazyQueryHookResult = ReturnType<typeof useGetUserSavedPostsLazyQuery>;
export type GetUserSavedPostsQueryResult = Apollo.QueryResult<
    GetUserSavedPostsQuery,
    GetUserSavedPostsQueryVariables
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
            likes
            saved
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
export const IsPostSavedDocument = gql`
    query IsPostSaved($postId: Float!) {
        isPostSaved(postId: $postId)
    }
`;

/**
 * __useIsPostSavedQuery__
 *
 * To run a query within a React component, call `useIsPostSavedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsPostSavedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsPostSavedQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useIsPostSavedQuery(
    baseOptions: Apollo.QueryHookOptions<IsPostSavedQuery, IsPostSavedQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<IsPostSavedQuery, IsPostSavedQueryVariables>(
        IsPostSavedDocument,
        options
    );
}
export function useIsPostSavedLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<IsPostSavedQuery, IsPostSavedQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<IsPostSavedQuery, IsPostSavedQueryVariables>(
        IsPostSavedDocument,
        options
    );
}
export type IsPostSavedQueryHookResult = ReturnType<typeof useIsPostSavedQuery>;
export type IsPostSavedLazyQueryHookResult = ReturnType<typeof useIsPostSavedLazyQuery>;
export type IsPostSavedQueryResult = Apollo.QueryResult<
    IsPostSavedQuery,
    IsPostSavedQueryVariables
>;
export const IsPostLikedDocument = gql`
    query IsPostLiked($postId: Float!) {
        isPostLiked(postId: $postId)
    }
`;

/**
 * __useIsPostLikedQuery__
 *
 * To run a query within a React component, call `useIsPostLikedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsPostLikedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsPostLikedQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useIsPostLikedQuery(
    baseOptions: Apollo.QueryHookOptions<IsPostLikedQuery, IsPostLikedQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<IsPostLikedQuery, IsPostLikedQueryVariables>(
        IsPostLikedDocument,
        options
    );
}
export function useIsPostLikedLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<IsPostLikedQuery, IsPostLikedQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<IsPostLikedQuery, IsPostLikedQueryVariables>(
        IsPostLikedDocument,
        options
    );
}
export type IsPostLikedQueryHookResult = ReturnType<typeof useIsPostLikedQuery>;
export type IsPostLikedLazyQueryHookResult = ReturnType<typeof useIsPostLikedLazyQuery>;
export type IsPostLikedQueryResult = Apollo.QueryResult<
    IsPostLikedQuery,
    IsPostLikedQueryVariables
>;
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
            likes
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
