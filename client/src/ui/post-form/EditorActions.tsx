import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useS3PostUpload } from '../../modules/s3-service/useS3PostUpload';
import { useS3PostUpdate } from '../../modules/s3-service/useS3PostUpdate';
import { useFormStore } from './useFormStore';
import moment from 'moment';

export interface UploadPost {
    title: string;
    description: string;
    images: number;
    imagesIds: number[];
    paragraphs: number;
    words: number;
    readingTime: number;
    publish: boolean;
    mainImage: number;
    mainBody: string;
    tags: string[];
    creationDate: string;
}

export interface EditorActionsProps {
    className?: string;
}
const validData = (post: UploadPost) => {
    return !Object.values(post).some((value) => value === null);
};

export const EditorActions: React.FC<EditorActionsProps> = ({ className = '' }) => {
    const router = useRouter();
    const { ...article } = useFormStore((state) => state);
    const { uploadPost, metadata: uploadMetadata } = useS3PostUpload();
    const { updatePost, metadata: updateMetadata } = useS3PostUpdate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (uploadMetadata?.status === 'complete') {
            router.push(`/post/${uploadMetadata.data.userName}/${uploadMetadata.data.prettyTitle}`);
        }
    }, [uploadMetadata]);

    useEffect(() => {
        if (updateMetadata?.status === 'complete') {
            router.push(`/post/${updateMetadata.data.userName}/${updateMetadata.data.prettyTitle}`);
        }
    }, [updateMetadata]);

    const handlePublish = async () => {
        const post = {
            title: article.title,
            description: article.description,
            images: article.imagesIds.size,
            imagesIds: [...article.imagesIds],
            paragraphs: 0,
            words: Math.round(article.mainBody.split(' ').length + article.title.split(' ').length),
            readingTime: Math.round(article.mainBody.split(' ').length / 250),
            publish: true,
            mainImage: Number(article.mainImage),
            mainImageId: Number(article.mainImage),
            mainBody: article.mainBody,
            tags: article.tagsString
                .split(',')
                .map((tag) => tag.trim())
                .filter((tag) => tag),
            creationDate: moment().format('MMMM Do YYYY')
        };

        if (validData(post)) {
            setLoading(true);
            article.setPublishing(true);
            await uploadPost(post);
        }
    };

    const handleUpdate = async () => {
        const post = {
            title: article.title,
            description: article.description,
            images: article.imagesIds.size,
            imagesIds: [...article.imagesIds],
            paragraphs: 0,
            words: Math.round(article.mainBody.split(' ').length + article.title.split(' ').length),
            readingTime: Math.round(article.mainBody.split(' ').length / 250),
            publish: false,
            mainImage: Number(article.mainImage),
            mainImageId: Number(article.mainImage),
            mainBody: article.mainBody,
            tags: article.tagsString
                .split(',')
                .map((tag) => tag.trim())
                .filter((tag) => tag),
            creationDate: moment().format('MMMM Do YYYY')
        };

        if (validData(post)) {
            setLoading(true);
            await updatePost(post, article.postId);
        }
    };

    return (
        <div className={`${className} flex py-4`}>
            {article.publishing && (
                <>
                    <button
                        onClick={handlePublish}
                        className={`${loading ? 'opacity-60' : ''}
                        bg-indigo-600 hover:bg-indigo-700 text-white
                        font-medium py-2 px-4 rounded-md mr-2`}>
                        {loading ? 'Publishing...' : 'Publish'}
                    </button>
                    <button
                        className='bg-gray-300 hover:bg-gray-400 text-gray-800
                        font-medium  rounded-md  py-2 px-4'>
                        Save draft
                    </button>
                </>
            )}
            {article.updating && (
                <>
                    <button
                        onClick={handleUpdate}
                        className={`${loading ? 'opacity-60' : ''}
                        bg-indigo-600 hover:bg-indigo-700 text-white
                        font-medium py-2 px-4 rounded-md mr-2`}>
                        {loading ? 'Saving changes...' : 'Save changes'}
                    </button>
                </>
            )}
        </div>
    );
};
