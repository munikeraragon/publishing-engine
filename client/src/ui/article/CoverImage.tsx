export interface CoverImageProps {
    alt: string;
    src: string | null;
}

export interface EskeletonProps {
    className?: string;
}

export const CoverImage: React.FC<CoverImageProps> = ({ alt, src }) => {
    if (!src) return <CoverImageEskeleton />;
    return (
        <img
            alt={alt}
            className='object-cover w-full block bg-cover bg-no-repeat bg-center'
            src={src}
            style={{ maxHeight: 565 }}
        />
    );
};

export const CoverImageEskeleton: React.FC = () => {
    return <div className='bg-gray-300 animate-pulse rounded-md h-72' style={{ maxHeight: 565 }} />;
};
