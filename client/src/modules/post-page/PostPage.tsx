import { useEffect, useState } from 'react';
import { SinglePublicLayout } from '../../layouts/single-public';
import { useRouter } from 'next/router';
import { useS3PostDownload } from '../s3-service/useS3PostDownload';
import { Article } from '../../ui/article/Article';
import { Sidebar } from '../../ui/article/Sidebar';
import { Actions } from '../../ui/article/Actions';
import { useS3ImageDownload } from '../s3-service/useS3ImageDownload';
import { ProfileCard } from '../../ui/LightProfileCard';
import {
    useGetUserQuery,
    useIsPostLikedLazyQuery,
    useIsPostSavedLazyQuery
} from '../../generated/apolloComponents';
import moment from 'moment';

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
        <div className='flex max-w-7xl m-auto'>
            <div className='lg:flex hidden'>
                <Sidebar>
                    <Actions
                        postId={postMetadata.data?.id}
                        likes={showSkeleton ? undefined : postMetadata.data?.likes}
                        comments={showSkeleton ? undefined : postMetadata.data?.comments}
                        saved={showSkeleton ? undefined : postMetadata.data?.saved}
                        isSaved={showSkeleton ? undefined : savedStatus?.isPostSaved}
                        isLiked={showSkeleton ? undefined : likedStatus?.isPostLiked}
                    />
                </Sidebar>
            </div>

            <div className='grid grid-cols-12 gap-4 flex-1 mx-4 lg:mx-0'>
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
                    isOwner={postMetadata.data?.userName === userData?.getUser.userName}
                    className='w-full col-span-12 lg:col-span-8 max-w-3xl mt-8 mx-auto'
                />
                <div className='col-span-4 hidden lg:block'>
                    <ProfileCard
                        userName={showSkeleton ? undefined : postMetadata.data?.userName}
                        userIcon={showSkeleton ? undefined : postMetadata.data?.userIcon}
                        creationDate={
                            showSkeleton
                                ? undefined
                                : moment(Number(postMetadata.data?.userCreationDate)).format(
                                      'MMMM Do YYYY'
                                  )
                        }
                        location={showSkeleton ? undefined : postMetadata.data?.userLocale}
                        className='col-span-4 w-72 mx-auto mt-12'
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
