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
        <span className='block text-gray-900 hover:text-indigo-600'>
            <h3 className='text-lg font-semibold leading-7  md:text-xl'>{title}</h3>
        </span>
    );
};

export const TitleEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return <div className={`${className} bg-gray-300 animate-pulse rounded-md h-4 my-2`}></div>;
};
