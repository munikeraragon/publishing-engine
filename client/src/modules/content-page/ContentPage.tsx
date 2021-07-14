import { useEffect, useState } from 'react';
import { DashboardLayout } from '../../layouts/dash-auth';
import { useGetUserPostsQuery } from '../../generated/apolloComponents';
import { ActionCardWrapper } from '../../ui/wrappers/ActionCardWrapper';

export interface SimplePost {
    userName: string;
    imageId: number;
    title: string;
    prettyTitle: string;
    description: string;
}

export const ContentPage: React.FC = () => {
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
                        description: elem.description
                    };
                })
            );
        }
    }, [loading, error]);

    return (
        <div className='min-h-full mx-8 my-4 w-full'>
            <div className='pb-8'>
                <h1 className='text-2xl text-gray-700 tracking-tight font-medium'>My Posts</h1>
            </div>

            <div className='m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {posts.map((post, index) => (
                    <ActionCardWrapper
                        key={index}
                        userName={post.userName}
                        imageId={post.imageId}
                        title={post.title}
                        prettyTitle={post.prettyTitle}
                        description={post.description}
                    />
                ))}
            </div>
        </div>
    );
};

(ContentPage as any).layout = DashboardLayout;
