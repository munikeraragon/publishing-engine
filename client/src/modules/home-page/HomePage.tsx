import { DashboardLayout } from '../../layouts/dash-auth';
import { useSearchQuery } from '../../generated/apolloComponents';
import { useEffect, useState } from 'react';
import { PostCardWrapper } from '../../ui/wrappers/PostCardWrapper';

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
                        reactions: elem.likes,
                        tags: elem.tags
                    };
                })
            );
        }
    }, [loading, error]);

    return (
        <div className='grid grid-cols-12 pt-4 flex-1'>
            <div className='col-span-12'>
                <div className='flex mx-8 items-center mb-4'>
                    <div className='hidden md:flex m-auto'>
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

                <div
                    data-aos='fade-up'
                    className='max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16'>
                    {posts.map((post, index) => (
                        <PostCardWrapper
                            key={index}
                            title={post.title}
                            prettyTitle={post.prettyTitle}
                            imageId={post.imageId}
                            userIcon={post.userIcon}
                            readingTime={post.readingTime}
                            creationDate={post.creationDate}
                            // comments={post.comments}
                            // reactions={post.reactions}
                            userName={post.userName}
                            tags={post.tags}
                            showEskeleton={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

(HomePage as any).layout = DashboardLayout;
