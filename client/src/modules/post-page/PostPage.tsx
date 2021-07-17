import { useEffect, useState } from 'react';
import { SinglePublicLayout } from '../../layouts/single-public';
import { useRouter } from 'next/router';
import { useS3PostDownload } from '../s3-service/useS3PostDownload';
import { Article } from '../../ui/article/Article';
import { Sidebar } from '../../ui/article/Sidebar';
import { useS3ImageDownload } from '../s3-service/useS3ImageDownload';
import { useGetUserQuery } from '../../generated/apolloComponents';
import { ProfileCard } from '../../ui/ProfileCard';

export interface ValidPageProps {
    userName: string;
    title: string;
}

export const PostPage: React.FC = () => {
    const router = useRouter();
    const { userName, title } = router.query;

    if (typeof userName !== 'string' || typeof title !== 'string') return null;

    return <ValidPost userName={userName} title={title} />;
};
(PostPage as any).layout = SinglePublicLayout;

export const ValidPost: React.FC<ValidPageProps> = ({ userName, title }) => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const postMetadata = useS3PostDownload(userName, title).downloadMetadata;
    const imageMetadata = useS3ImageDownload(postMetadata.data?.mainImageId).downloadMetadata;
    const { data } = useGetUserQuery();

    useEffect(() => {
        setTimeout(() => setShowSkeleton(false), 1000);
    }, []);

    return (
        <div className="flex max-w-7xl m-auto">
                <Sidebar />
                <div className='grid grid-cols-12 gap-4 flex-1'>
                    <Article
                        title={showSkeleton ? undefined : postMetadata.data?.title}
                        userIcon={showSkeleton ? undefined : data?.getUser.picture}
                        coverImage={showSkeleton ? null : imageMetadata.imageUrl}
                        userName={showSkeleton ? undefined : data?.getUser.userName}
                        creationDate={showSkeleton ? undefined : postMetadata.data?.creationDate}
                        readingTime={showSkeleton ? undefined : postMetadata.data?.readingTime}
                        wordsNumber={showSkeleton ? undefined : postMetadata.data?.wordsNumber}
                        articleBody={showSkeleton ? undefined : postMetadata.data?.mainBody}
                        tags={[
                            {color: 'green', label: 'code'},
                            {color: 'red', label: 'dev'},
                            {color: 'blue', label: 'react'},
                            {color: 'indigo', label: 'vizualisation'}
                        ]}
                        className='w-full col-span-8 max-w-3xl mt-8'
                    />

                        <ProfileCard
                        userName={showSkeleton ? undefined : data?.getUser.userName}
                        userIcon={showSkeleton ? undefined : data?.getUser.picture}
                        className='col-span-4 h-96 w-80 mx-auto mt-12'

                    />
                </div>

        </div>
    );
};
