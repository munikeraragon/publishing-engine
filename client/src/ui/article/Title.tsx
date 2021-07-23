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
            <h1
                className='text-2xl md:text-4xl font-bold tracking-tight
                text-gray-800 '>
                {title}
            </h1>
        </div>
    );
};

export const TitleEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return <div className={`${className} h-12 bg-gray-300 animate-pulse rounded-md`}></div>;
};
