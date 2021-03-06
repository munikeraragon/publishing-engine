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
        <div className={className}>
            <h1 className='text-lg md:text-2xl font-bold'>{title}</h1>
        </div>
    );
};

export const TitleEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return <div className={`${className} h-12 bg-gray-300 animate-pulse rounded-md`}></div>;
};
