import React, { useEffect, useState } from 'react';
import { PostCardWrapper } from '../../ui/wrappers/PostCardWrapper';
import {
    useCountAllPublishedQuery,
    useGetPopularTagsQuery,
    useSearchQuery
} from '../../generated/apolloComponents';
import { SearchInput } from '../../ui/SearchInput';

export interface Post {
    imageId: number;
    userName: string;
    title: string;
    prettyTitle: string;
    creationDate: string;
    readingTime: number;
    userIcon: string;
    comments: number;
    likes: number;
    description: string;
    tags: string[];
}

export const LandingPostsPage: React.FC = () => {
    const { data: postCount } = useCountAllPublishedQuery();
    const { data: tagsData } = useGetPopularTagsQuery({
        variables: {
            pageSize: 4
        }
    });

    const [posts, setPosts] = useState<Post[]>([]);
    const { error, data, loading } = useSearchQuery({
        variables: {
            searchInput: {
                pageSize: 15,
                page: 0,
                sortBy: 'creationDate',
                sortDirection: 'desc',
                startDate: '',
                endDate: ''
            }
        }
    });

    useEffect(() => {
        if (!loading && !error && data) {
            setPosts(
                data.search.map((elem) => {
                    return {
                        userName: elem.userName,
                        imageId: elem.mainImageId,
                        title: elem.title,
                        prettyTitle: elem.prettyTitle,
                        creationDate: elem.creationDate,
                        readingTime: elem.readingTime,
                        userIcon: elem.userIcon,
                        comments: elem.comments,
                        likes: elem.likes,
                        description: elem.description,
                        tags: elem.tags
                    };
                })
            );
        }
    }, [loading, error]);

    return (
        <div id='posts' className='min-h-full pt-6 pb-12 mx-2'>
            <div className='flex justify-center items-center flex-wrap mb-2'>
                {tagsData &&
                    tagsData.getPopularTags.map((tag, index) => (
                        <button
                            key={index}
                            type='button'
                            className='text-indigo-600 bg-indigo-100 hover:bg-indigo-500 hover:text-white focus:border-indigo-300 px-2 py-1 text-sm  inline-flex items-center border border-transparent leading-6 font-medium rounded-md focus:outline-none  focus:ring focus:ring-indigo-300 focus:ring-opacity-50 transition ease-in-out duration-150 px-0 py-0 mt-2 mr-1'>
                            {tag}
                        </button>
                    ))}
            </div>

            <SearchInput
                leftPlaceholder={'Search'}
                rightPlaceholder={String(postCount?.countAllPublished)}
                className='mx-4 mb-6'
            />

            <div
                // data-aos='fade-up'
                className='max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {posts.map((post, index) => (
                    <PostCardWrapper
                        key={index}
                        title={post.title}
                        prettyTitle={post.prettyTitle}
                        imageId={post.imageId}
                        userIcon={post.userIcon}
                        readingTime={post.readingTime}
                        creationDate={post.creationDate}
                        userName={post.userName}
                        tags={post.tags}
                        className={'mx-2'}
                        showEskeleton={false}
                    />
                ))}
            </div>
        </div>
    );
};
