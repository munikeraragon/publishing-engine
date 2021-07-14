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
