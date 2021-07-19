export interface CoverImageProps {
    src: string | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const CoverImage: React.FC<CoverImageProps> = ({ src, className = '' }) => {
    if (!src) return <CoverImageEskeleton className={className} />;

    return (
        <img
            alt=''
            className='object-cover w-full block bg-cover bg-no-repeat bg-center'
            style={{ height: 200 }}
            src={src}
        />
    );
};

export const CoverImageEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return <div className={`${className} bg-gray-300 animate-pulse`} style={{ height: 200 }} />;
};
