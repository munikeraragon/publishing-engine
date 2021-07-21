import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useS3PostUpload } from '../../modules/s3-service/useS3PostUpload';
import { useFormStore } from './useFormStore';
import moment from 'moment';

export interface UploadPost {
    title: string;
    description: string;
    imagesNumber: number;
    imagesIds: number[];
    paragraphsNumber: number;
    wordsNumber: number;
    readingTime: number;
    publish: boolean;
    mainImage: number;
    mainBody: string;
    tags: string[];
    creationDate: string;
}

const validData = (post: UploadPost) => {
    return !Object.values(post).some((value) => value === null);
};

export const EditorActions = () => {
    const router = useRouter();
    const { uploadPost, metadata } = useS3PostUpload();
    const {
        mainImage,
        imagesIds,
        title,
        description,
        mainBody,
        tagsString,
        publishing,
        setPublishing
    } = useFormStore((state) => state);

    useEffect(() => {
        if (metadata?.status === 'complete') {
            router.push(`/post/${metadata.data.userName}/${metadata.data.prettyTitle}`);
        }
    }, [metadata]);

    const handlePublish = async () => {
        const post = {
            title: title,
            description: description,
            imagesNumber: imagesIds.size,
            imagesIds: [...imagesIds],
            paragraphsNumber: 0,
            wordsNumber: Math.round(mainBody.split(' ').length + title.split(' ').length),
            readingTime: Math.round(mainBody.split(' ').length / 250),
            publish: false,
            mainImage: Number(mainImage),
            mainBody: mainBody,
            tags: tagsString
                .split(',')
                .map((tag) => tag.trim())
                .filter((tag) => tag),
            creationDate: moment().format('MMMM Do YYYY')
        };

        if (validData(post)) {
            setPublishing(true);
            await uploadPost({
                title: post.title,
                description: post.description,
                mainImageId: post.mainImage,
                imagesNumber: post.imagesNumber,
                imagesIds: post.imagesIds,
                paragraphsNumber: post.paragraphsNumber,
                wordsNumber: post.paragraphsNumber,
                readingTime: post.readingTime,
                publish: post.publish,
                mainImage: post.mainImage,
                mainBody: post.mainBody,
                tags: post.tags,
                creationDate: post.creationDate
            });
        }
    };

    return (
        <div className='flex py-4'>
            <button
                onClick={handlePublish}
                className={`${publishing ? 'opacity-60' : ''}
                bg-indigo-600 hover:bg-indigo-700 text-white
                font-medium py-2 px-4 rounded-md mr-2`}>
                {publishing ? 'Publishing...' : 'Publish'}
            </button>
            <button
                className='bg-gray-300 hover:bg-gray-400 text-gray-800
                font-medium  rounded-md  py-2 px-4'>
                Save draft
            </button>
        </div>
    );
};
