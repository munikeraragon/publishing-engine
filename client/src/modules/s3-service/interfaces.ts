export interface ImageMapping {
    label: string;
    presignedUrl: string;
}

export interface Article {
    id: number;
    presignedUrl: string;
    imagesPresignedUrl: ImageMapping[];
    title: string;
    imagesNumber: number;
    paragraphsNumber: number;
    wordsNumber: number;
    readingTime: number;
}

export interface UploadPost {
    title: string;
    description: string;
    mainImageId: number;
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
