import React, { useEffect, useState } from 'react';
import { PostCardWrapper } from '../../ui/wrappers/PostCardWrapper';
import {
    useCountAllPublishedQuery,
    useGetPopularTagsQuery,
    useSearchQuery
} from '../../generated/apolloComponents';
import { SearchInput } from '../../ui/SearchInput';
import { PostCard } from '../../ui/post-card/PostCard';

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

                <PostCard
                    src='https://images.unsplash.com/photo-1611328857214-a5aae689f21a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDV8fGVib29rfGVufDB8fHx8MTYzNDgyNTY4MA&ixlib=rb-1.2.1&q=80&w=2000'
                    title={'A Very Quick Guide to SaaS'}
                    userName={'Muniker'}
                    creationDate={'Jul 12, 2021'}
                    readingTime={5}
                    userIcon={''}
                    tags={['ebooks', 'golang']}
                    className={''}
                />

                <PostCard
                    src='https://images.unsplash.com/photo-1632633173874-ac62ae290fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE4fHxpcGhvbmUlMjAxM3xlbnwwfHx8fDE2MzM5OTUxNDY&ixlib=rb-1.2.1&q=80&w=2000'
                    title={'A Very Quick Guide to SaaS'}
                    userName={'Muniker'}
                    creationDate={'Jul 12, 2021'}
                    readingTime={5}
                    userIcon={''}
                    tags={['docker', 'kubernetes']}
                    className={''}
                />

                <PostCard
                    src='https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDd8fHNvZnR3YXJlfGVufDB8fHx8MTYyNjEzMzk4NA&ixlib=rb-1.2.1&q=80&w=2000'
                    title={'A Very Quick Guide to SaaS'}
                    userName={'Muniker'}
                    creationDate={'Jul 12, 2021'}
                    readingTime={5}
                    userIcon={''}
                    tags={['code', 'dev']}
                    className={''}
                />

                <PostCard
                    src='https://blog.helloguru.io/content/images/size/w600/2021/09/Slide-16_9---9--5-.png'
                    title={'A Very Quick Guide to SaaS'}
                    userName={'Muniker'}
                    creationDate={'Jul 12, 2021'}
                    readingTime={5}
                    userIcon={''}
                    tags={['code', 'dev']}
                    className={''}
                />

                <PostCard
                    src='https://blog.helloguru.io/content/images/size/w600/2021/09/Blog.png'
                    title={'A Very Quick Guide to SaaS'}
                    userName={'Muniker'}
                    creationDate={'Jul 12, 2021'}
                    readingTime={5}
                    userIcon={''}
                    tags={['code', 'dev']}
                    className={''}
                />

                <PostCard
                    src='https://blog.helloguru.io/content/images/size/w600/2021/09/Slide-16_9---3.png'
                    title={'A Very Quick Guide to SaaS'}
                    userName={'Muniker'}
                    creationDate={'Jul 12, 2021'}
                    readingTime={5}
                    userIcon={''}
                    tags={['code', 'dev']}
                    className={''}
                />
            </div>
        </div>
    );
};
