export interface TitleProps {
    title: string | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Title: React.FC<TitleProps> = ({ title, className = '' }) => {
    if (!title) return <TitleEskeleton className={className} />;

    return (
        <span className='block hover:underline'>
            <h3 className='text-lg font-semibold leading-7 text-gray-900 md:text-xl'>{title}</h3>
        </span>
    );
};

export const TitleEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return <div className={`${className} bg-gray-300 animate-pulse rounded-md h-4 my-2`}></div>;
};
