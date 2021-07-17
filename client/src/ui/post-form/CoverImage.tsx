import { useCallback, useEffect } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { useFormStore } from './useFormStore';
import { useS3ImageUpload } from '../../modules/s3-service/useS3ImageUpload';
import { useS3ImageDownload } from '../../modules/s3-service/useS3ImageDownload';

const ImageUploader: React.FC = ({ children }) => {
    const { uploadImage, metadata } = useS3ImageUpload();
    const { setUploadImage, setImageId, setImagesIds, imagesIds } = useFormStore((state) => state);

    useEffect(() => {
        if (metadata && metadata.status === 'complete') {
            setImageId(metadata.imageId);
            setImagesIds(new Set([...imagesIds, metadata.imageId]));
            setUploadImage(false);
        }
    }, [metadata]);

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file: FileWithPath) => {
            const reader = new FileReader();
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                const binaryStr = reader.result;
                if (binaryStr !== null) {
                    uploadImage(binaryStr, file.name);
                }
            };
            reader.readAsArrayBuffer(file);
        });
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
    });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {children}
        </div>
    );
};

const MainImage = () => {
    const { imageId, setUploadImage, setMainImage, setMainImageUrl, mainImageUrl } = useFormStore(
        (state) => state
    );
    if (!imageId) return null;

    const { downloadMetadata } = useS3ImageDownload(imageId);

    useEffect(() => {
        setMainImage(imageId);
    }, []);

    useEffect(() => {
        if (downloadMetadata.imageUrl) {
            setMainImageUrl(downloadMetadata.imageUrl);
        }
    }, [downloadMetadata]);

    return (
        <div className='flex items-center'>
            {console.log(mainImageUrl)}
            <img
                src={mainImageUrl}
                className='object-cover mr-8'
                style={{ width: 250, height: 105 }}
                alt='Post cover image'
            />

            <div className='flex items-center'>
                <ImageUploader>
                    <button
                        className='bg-white hover:bg-gray-100 text-gray-800 mr-2 hover:border-gray-400
                     font-semibold py-1.5 px-4 border-2 border-gray-300 rounded shadow'>
                        Change
                    </button>
                </ImageUploader>

                <button
                    onClick={() => {
                        setUploadImage(true);
                    }}
                    className='hover:bg-gray-100 text-red-600 font-semibold py-1.5 px-4 rounded'>
                    Remove
                </button>
            </div>
        </div>
    );
};

export const CoverImage = () => {
    const { uploadImage } = useFormStore((state) => state);

    return (
        <div>
            {uploadImage && (
                <ImageUploader>
                    <button
                        className='bg-white hover:bg-gray-100 text-gray-800 font-medium
                             py-1.5 px-4 border-2 border-gray-300 rounded shadow'>
                        Add a cover image
                    </button>
                </ImageUploader>
            )}

            {!uploadImage && <MainImage />}
        </div>
    );
};
