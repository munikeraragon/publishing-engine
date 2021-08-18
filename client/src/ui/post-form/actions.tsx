import { useFormStore } from './useFormStore';
import moment from 'moment';
import { useS3PostUpload } from '../../modules/s3-service/useS3PostUpload';

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

const validData = (post: UploadPost) => {
    return !Object.values(post).some((value) => value === null);
};

export async function publishArticle() {
    const { ...articleStore } = useFormStore((state) => state);
    const { uploadPost, metadata } = useS3PostUpload();

    const article = {
        title: articleStore.title,
        description: articleStore.description,
        images: articleStore.imagesIds.size,
        imagesIds: [...articleStore.imagesIds],
        paragraphs: 0,
        words: Math.round(
            articleStore.mainBody.split(' ').length + articleStore.title.split(' ').length
        ),
        readingTime: Math.round(articleStore.mainBody.split(' ').length / 250),
        publish: true,
        mainImage: Number(articleStore.mainImage),
        mainImageId: Number(articleStore.mainImage),
        mainBody: articleStore.mainBody,
        tags: articleStore.tagsString
            .split(',')
            .map((tag) => tag.trim())
            .filter((tag) => tag),
        creationDate: moment().format('MMMM Do YYYY')
    };

    if (validData(article)) {
        articleStore.setPublishing(true);
        await uploadPost(article);
    }
}
