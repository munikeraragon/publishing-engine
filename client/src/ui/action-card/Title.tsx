export interface TitleProps {
    title: string | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Title: React.FC<TitleProps> = ({ title, className = '' }) => {
    if (!title) return <TitleEskeleton className={className} />;

    return <h2 className={`${className} text-lg mb-2 break-words`}>{title}</h2>;
};

export const TitleEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return <div className={`${className} bg-gray-300 animate-pulse rounded-md h-4 my-2`}></div>;
};
