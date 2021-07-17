import moment from 'moment';
import { useS3PostUpload } from '../../modules/s3-service/useS3PostUpload';
import { useFormStore } from './useFormStore';

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
    creationDate: string
}

const validData = (post: UploadPost) => {
    return !Object.values(post).some((value) => value === null);
};

export const EditorActions = () => {
    const { uploadPost } = useS3PostUpload();
    const { mainImage, imagesIds, title, description, mainBody } = useFormStore((state) => state);

    const handlePublish = async () => {
        const post = {
            title: title,
            description: description,
            imagesNumber: imagesIds.size,
            imagesIds: [...imagesIds],
            paragraphsNumber: 0,
            wordsNumber: title.length + mainBody.length,
            readingTime: Math.round((title.length + mainBody.length) / 200),
            publish: false,
            mainImage: Number(mainImage),
            mainBody: mainBody,
            creationDate: moment().format("MMMM Do YYYY"),
        };

        if (validData(post)) {
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
                creationDate: post.creationDate
            });
        }
    };

    return (
        <div className='flex my-4'>
            <button
                onClick={handlePublish}
                className='bg-indigo-600 hover:bg-indigo-700 text-white
             font-medium py-2 px-4 rounded-md mr-2'>
                Publish
            </button>
            <button
                className='bg-gray-300 hover:bg-gray-400 text-gray-800
             font-medium  rounded-md  py-2 px-4'>
                Save draft
            </button>
        </div>
    );
};
