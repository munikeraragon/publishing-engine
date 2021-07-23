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
        <a
            style={{
                backgroundImage: `url("${src}")`,
                display: 'block',
                width: '100%',
                height: 'auto',
                paddingBottom: '42%',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        />
    );
};

export const CoverImageEskeleton: React.FC = () => {
    return <div className='bg-gray-300 animate-pulse rounded-md h-72' style={{ maxHeight: 360 }} />;
};
