import { DashboardLayout } from '../../layouts/dash-auth';
import { ProfileCard } from '../../ui/LightProfileCard';
import { NotificationCardWrapper } from '../../ui/wrappers/NotificationCardWrapper';
import { useGetUserQuery, useSearchQuery } from '../../generated/apolloComponents';
import { useEffect, useState } from 'react';
import moment from 'moment';

export interface Post {
    imageId: number;
    userName: string;
    title: string;
    prettyTitle: string;
    creationDate: string;
    readingTime: number;
    userIcon: string;
    comments: number;
    reactions: number;
    tags: string[];
}

export const HomePage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const user = useGetUserQuery().data?.getUser;
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
                        creationDate: moment(Number(elem.creationDate)).format('MMMM Do YYYY'),
                        readingTime: elem.readingTime,
                        userIcon: elem.userIcon,
                        comments: elem.comments,
                        reactions: elem.reactions,
                        tags: elem.tags
                    };
                })
            );
        }
    }, [loading, error]);

    return (
        <div className='grid grid-cols-12 pt-4 flex-1'>
            <div className='lg:col-span-8 col-span-12'>
                <div className='flex mx-8 items-center'>
                    <div>
                        <h1 className='text-xl text-gray-900 tracking-tight font-semibold'>
                            Posts
                        </h1>
                    </div>

                    <div className='hidden md:flex ml-auto'>
                        <button
                            className={`flex justify-items-center hover:bg-gray-200
                            mb-2 mr-2 px-2 py-2 rounded-md hover:text-indigo-600
                            hover:bg-indigo-50 ${
                                true && 'border-b-2 border-indigo-500 font-semibold'
                            }`}>
                            Feed
                        </button>
                        <button
                            className={`flex justify-items-center hover:bg-gray-200
                            mb-2 mr-2 px-2 py-2 rounded-md hover:text-indigo-600
                            hover:bg-indigo-50 ${
                                false && 'border-b-2 border-indigo-500 font-semibold'
                            }`}>
                            Week
                        </button>
                        <button
                            className={`flex justify-items-center hover:bg-gray-200
                            mb-2 mr-2 px-2 py-2 rounded-md hover:text-indigo-600
                            hover:bg-indigo-50 ${
                                false && 'border-b-2 border-indigo-500 font-semibold'
                            }`}>
                            Month
                        </button>
                        <button
                            className={`flex justify-items-center hover:bg-gray-200
                            mb-2 mr-2 px-2 py-2 rounded-md hover:text-indigo-600
                            hover:bg-indigo-50 ${
                                false && 'border-b-2 border-indigo-500 font-semibold'
                            }`}>
                            Year
                        </button>
                        <button
                            className={`flex justify-items-center hover:bg-gray-200
                            mb-2 mr-2 px-2 py-2 rounded-md hover:text-indigo-600
                            hover:bg-indigo-50 ${
                                false && 'border-b-2 border-indigo-500 font-semibold'
                            }`}>
                            Infinity
                        </button>
                        <button
                            className={`flex justify-items-center hover:bg-gray-200
                            mb-2 mr-2 px-2 py-2 rounded-md hover:text-indigo-600
                            hover:bg-indigo-50 ${
                                false && 'border-b-2 border-indigo-500 font-semibold'
                            }`}>
                            Latest
                        </button>
                    </div>
                </div>

                {posts.map((post, index) => (
                    <NotificationCardWrapper
                        key={index}
                        title={post.title}
                        prettyTitle={post.prettyTitle}
                        imageId={post.imageId}
                        userIcon={post.userIcon}
                        showCoverImage={index === 0}
                        readingTime={post.readingTime}
                        creationDate={post.creationDate}
                        comments={post.comments}
                        reactions={post.reactions}
                        userName={post.userName}
                        tags={post.tags}
                        className={'mx-2 md:mx-8 mb-4'}
                    />
                ))}
            </div>
            <div className='col-span-4 hidden lg:block mx-2'>
                <ProfileCard
                    userName={user?.userName}
                    userIcon={user?.userIcon}
                    className='col-span-4 w-80 mx-auto mt-8'
                />
            </div>
        </div>
    );
};

(HomePage as any).layout = DashboardLayout;
