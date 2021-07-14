import create from 'zustand';

export interface MainImage {
    id: number;
    presignedUrl: string;
}
export interface FormState {
    previewShowing: boolean;
    setPreviewShowing: (_: boolean) => void;

    imageId: number | null;
    setImageId: (_: number | null) => void;
    imagesIds: Set<number>;
    setImagesIds: (_: Set<number>) => void;
    mainImage: number | null;
    setMainImage: (_: number | null) => void;
    uploadImage: boolean;
    setUploadImage: (_: boolean) => void;

    title: string;
    setTitle: (_: string) => void;

    description: string;
    setDescription: (_: string) => void;

    mainBody: string;
    setMainBody: (_: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
    previewShowing: false,
    setPreviewShowing: (arg: boolean) => set((state) => ({ previewShowing: arg })),

    imageId: null,
    setImageId: (arg: number | null) => set((state) => ({ imageId: arg })),
    mainImage: null,
    setMainImage: (arg: number | null) => set((state) => ({ mainImage: arg })),
    uploadImage: true,
    setUploadImage: (arg: boolean) => set((state) => ({ uploadImage: arg })),
    imagesIds: new Set(),
    setImagesIds: (arg: Set<number>) => set((state) => ({ imagesIds: arg })),

    title: '',
    setTitle: (arg: string) => set((state) => ({ title: arg })),

    description: '',
    setDescription: (arg: string) => set((state) => ({ description: arg })),

    mainBody: '',
    setMainBody: (arg: string) => set((state) => ({ mainBody: arg }))
}));
