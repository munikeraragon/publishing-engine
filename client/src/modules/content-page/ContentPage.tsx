import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../layouts/dash-auth';
import { useGetUserPostsQuery } from '../../generated/apolloComponents';
import { PostCardWrapper } from '../../ui/wrappers/PostCardWrapper';

export interface SimplePost {
    userName: string;
    imageId: number;
    title: string;
    prettyTitle: string;
    description: string;
    creationDate: string;
    userIcon: string;
    tags: string[];
    readingTime: number;
}

export const ContentPage: React.FC = () => {
    const [showSkeleton, setShowSkeleton] = useState(false);
    const { data, loading, error } = useGetUserPostsQuery();
    const [posts, setPosts] = useState<SimplePost[]>([]);

    useEffect(() => {
        if (!loading && !error && data) {
            setPosts(
                data.getUserPosts.map((elem) => {
                    return {
                        userName: elem.userName,
                        imageId: elem.mainImageId,
                        title: elem.title,
                        prettyTitle: elem.prettyTitle,
                        description: elem.description,
                        creationDate: elem.creationDate,
                        readingTime: elem.readingTime,
                        userIcon: elem.userIcon,
                        tags: elem.tags
                    };
                })
            );
        }
    }, [loading, error]);

    useEffect(() => {
        setTimeout(() => setShowSkeleton(false), 1000);
    }, []);

    return (
        <div className='min-h-full mx-8 my-4 w-full'>
            <div className='pb-6 text-center'>
                <h1 className='text-lg text-indigo-600 tracking-tight font-medium'>My Content</h1>
            </div>

            <div
                data-aos='fade-up'
                className='m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {posts.map((post, index) => (
                    <PostCardWrapper
                        key={index}
                        imageId={post.imageId}
                        userName={post.userName}
                        title={post.title}
                        prettyTitle={post.prettyTitle}
                        creationDate={post.creationDate}
                        readingTime={post.readingTime}
                        userIcon={post.userIcon}
                        tags={post.tags}
                        showEskeleton={showSkeleton}
                        className='border border-gray-200'
                    />
                ))}
            </div>
        </div>
    );
};

(ContentPage as any).layout = DashboardLayout;
