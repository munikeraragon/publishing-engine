import { useEffect, useState } from 'react';
import { SinglePublicLayout } from '../../layouts/single-public';
import { useRouter } from 'next/router';
import { useS3PostDownload } from '../s3-service/useS3PostDownload';
import { Article } from '../../ui/article/Article';
import { useS3ImageDownload } from '../s3-service/useS3ImageDownload';
import {
    useGetUserQuery,
    useIsPostLikedLazyQuery,
    useIsPostSavedLazyQuery
} from '../../generated/apolloComponents';

export interface ValidPageProps {
    userName: string;
    title: string;
}

export const ValidPost: React.FC<ValidPageProps> = ({ userName, title }) => {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const { downloadMetadata: postMetadata } = useS3PostDownload(userName, title);
    const { downloadMetadata: imageMetadata } = useS3ImageDownload(postMetadata.data?.mainImageId);
    const { data: userData } = useGetUserQuery();

    const [isPostSaved, { data: savedStatus }] = useIsPostSavedLazyQuery();
    const [isPostLiked, { data: likedStatus }] = useIsPostLikedLazyQuery();

    useEffect(() => {
        setTimeout(() => setShowSkeleton(false), 1000);
    }, []);

    useEffect(() => {
        if (postMetadata.data) {
            isPostSaved({ variables: { postId: Number(postMetadata.data.id) } });
            isPostLiked({ variables: { postId: Number(postMetadata.data.id) } });
        }
    }, [postMetadata]);

    return (
        <div className='flex'>
            <div className='flex gap-4 flex-1'>
                <Article
                    coverImage={showSkeleton ? null : imageMetadata.imageUrl}
                    postId={Number(postMetadata.data?.id)}
                    title={showSkeleton ? undefined : postMetadata.data?.title}
                    prettyTitle={showSkeleton ? undefined : postMetadata.data?.prettyTitle}
                    userIcon={showSkeleton ? null : postMetadata.data?.userIcon}
                    userName={showSkeleton ? undefined : postMetadata.data?.userName}
                    creationDate={showSkeleton ? undefined : postMetadata.data?.creationDate}
                    readingTime={showSkeleton ? undefined : postMetadata.data?.readingTime}
                    wordsNumber={showSkeleton ? undefined : postMetadata.data?.wordsNumber}
                    articleBody={showSkeleton ? undefined : postMetadata.data?.mainBody}
                    tags={showSkeleton ? undefined : postMetadata.data?.tags}
                    likes={showSkeleton ? undefined : postMetadata.data?.likes}
                    comments={showSkeleton ? undefined : postMetadata.data?.comments}
                    saved={showSkeleton ? undefined : postMetadata.data?.saved}
                    isSaved={showSkeleton ? undefined : savedStatus?.isPostSaved}
                    isLiked={showSkeleton ? undefined : likedStatus?.isPostLiked}
                    isOwner={
                        postMetadata.data?.userName &&
                        userData?.getUser.userName &&
                        postMetadata.data?.userName === userData?.getUser.userName
                    }
                    showSidebar={true}
                    className='w-full'
                />
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
