import Image from 'next/image';

export interface CoverImageProps {
    alt: string;
    src: string | null | undefined;
}

export interface EskeletonProps {
    className?: string;
}

export const CoverImage: React.FC<CoverImageProps> = ({ alt, src }) => {
    if (!src) return <CoverImageEskeleton />;
    return (
        <div className='relative' style={{ paddingBottom: '56.25%', height: 220 }}>
            <div className='absolute inset-0'>
                {/*<img className='w-full h-full object-cover' src={src} alt={alt} />*/}

                <div className='w-full h-full relative'>
                    <Image
                        placeholder='blur'
                        src={src || ''}
                        alt={alt}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
        </div>
    );
};

export const CoverImageEskeleton: React.FC = () => {
    return <div className='bg-gray-300 animate-pulse rounded-md h-52' style={{ maxHeight: 260 }} />;
};
