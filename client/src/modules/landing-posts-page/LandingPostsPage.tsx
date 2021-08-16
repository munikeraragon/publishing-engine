import { useEffect, useState } from 'react';
import { PostCardWrapper } from '../../ui/wrappers/PostCardWrapper';
import { useSearchQuery } from '../../generated/apolloComponents';
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
    likes: number;
    description: string;
    tags: string[];
}

export const LandingPostsPage: React.FC = () => {
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
                        creationDate: moment(Number(elem.creationDate)).format('MMMM Do YYYY'),
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
        <div
            id='posts'
            className='min-h-full pt-8 pb-8 mx-2'
            style={{ background: 'rgb(43 49 77)' }}>
            <div className='text-center pb-8'>
                <h1 className='text-2xl md:text-3xl tracking-tight font-semibold text-white'>
                    Top Posts
                </h1>
            </div>

            <div className='max-w-6xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
                        description={post.description}
                        className={'mx-2'}
                        showEskeleton={false}
                    />
                ))}
            </div>
        </div>
    );
};
