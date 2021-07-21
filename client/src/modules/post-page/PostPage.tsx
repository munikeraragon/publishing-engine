import { useEffect, useState } from 'react';
import { SinglePublicLayout } from '../../layouts/single-public';
import { useRouter } from 'next/router';
import { useS3PostDownload } from '../s3-service/useS3PostDownload';
import { Article } from '../../ui/article/Article';
import { Sidebar } from '../../ui/article/Sidebar';
import { useS3ImageDownload } from '../s3-service/useS3ImageDownload';
import { ProfileCard } from '../../ui/LightProfileCard';

export interface ValidPageProps {
    userName: string;
    title: string;
}

export const ValidPost: React.FC<ValidPageProps> = ({ userName, title }) => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const postMetadata = useS3PostDownload(userName, title).downloadMetadata;
    const imageMetadata = useS3ImageDownload(postMetadata.data?.mainImageId).downloadMetadata;

    useEffect(() => {
        setTimeout(() => setShowSkeleton(false), 1000);
    }, []);

    return (
        <div className='flex max-w-7xl m-auto'>
            <div className={'hidden md-flex'}>
                <Sidebar />
            </div>

            <div className='grid grid-cols-12 gap-4 flex-1'>
                <Article
                    coverImage={showSkeleton ? null : imageMetadata.imageUrl}
                    title={showSkeleton ? undefined : postMetadata.data.title}
                    userIcon={showSkeleton ? null : postMetadata.data.userIcon}
                    userName={showSkeleton ? undefined : postMetadata.data.userName}
                    creationDate={showSkeleton ? undefined : postMetadata.data.creationDate}
                    readingTime={showSkeleton ? undefined : postMetadata.data.readingTime}
                    wordsNumber={showSkeleton ? undefined : postMetadata.data.wordsNumber}
                    articleBody={showSkeleton ? undefined : postMetadata.data.mainBody}
                    tags={showSkeleton ? undefined : postMetadata.data.tags}
                    className='w-full col-span-12 lg:col-span-8 max-w-3xl mt-8'
                />
                <div className='col-span-4 invisible lg:visible'>
                    <ProfileCard
                        userName={showSkeleton ? undefined : postMetadata.data.userName}
                        userIcon={showSkeleton ? undefined : postMetadata.data.userIcon}
                        className='col-span-4 w-80 mx-auto mt-12'
                    />
                </div>
            </div>
        </div>
    );
};

export const PostPage: React.FC = () => {
    const router = useRouter();
    const { userName, title } = router.query;

    if (typeof userName !== 'string' || typeof title !== 'string') return null;

    return <ValidPost userName={userName} title={title} />;
};
(PostPage as any).layout = SinglePublicLayout;
