import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useS3PostDownload } from '../s3-service/useS3PostDownload';
import { SingleAuthLayout } from '../../layouts/single-auth';
import { PostForm } from '../../ui/post-form/PostForm';
import { useFormStore } from '../../ui/post-form/useFormStore';

export interface ValidPageProps {
    userName: string;
    title: string;
}

export const ValidEdit: React.FC<ValidPageProps> = ({ userName, title }) => {
    const { downloadMetadata: postMetadata } = useS3PostDownload(userName, title);
    const {
        setPostId,
        setMainImage,
        setUploadImage,
        setTitle,
        setTagsString,
        setDescription,
        setMainBody,
        setUpdating,
        setPublishing,
        setImageId
    } = useFormStore();

    useEffect(() => {
        if (postMetadata) {
            setPostId(Number(postMetadata.data?.id));
            setTitle(postMetadata.data?.title);
            setDescription(postMetadata.data?.description);
            setMainImage(postMetadata.data?.mainImageId);
            setImageId(postMetadata.data?.mainImageId);
            setMainBody(postMetadata.data?.mainBody);
            setTagsString(postMetadata.data?.tags.join(', '));
            setPublishing(false);
            setUpdating(true);
            setUploadImage(false);
        }
    }, [postMetadata]);

    return <PostForm />;
};

export const EditPage: React.FC = () => {
    const router = useRouter();
    const { userName, title } = router.query;

    if (typeof userName !== 'string' || typeof title !== 'string') return null;

    return <ValidEdit userName={userName} title={title} />;
};

(EditPage as any).layout = SingleAuthLayout;
