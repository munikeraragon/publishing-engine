import Image from 'next/image';

export interface LandingImageProps {
    className?: string;
    src?: string;
    alt?: string;
}

export const LandingImage: React.FC<LandingImageProps> = ({ className = '', src, alt }) => {
    return (
        <div
            className={`flex flex-col justify-center ${className}`}
            style={{ position: 'relative', height: '400px' }}>
            <Image placeholder='blur' src={src || ''} alt={alt} layout='fill' objectFit='contain' />
        </div>
    );
};
