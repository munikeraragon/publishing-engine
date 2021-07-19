export interface DescriptionProps {
    description: string | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Description: React.FC<DescriptionProps> = ({ description, className = '' }) => {
    if (!description) return <DescriptionEskeleton className={className} />;

    return <p className={`${className} font-normal text-gray-700`}>{description}</p>;
};

export const DescriptionEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className={`${className} border border-gray-200 shadow rounded-md p-2 my-1 mb-4`}>
            <div className='animate-pulse flex space-x-4'>
                <div className='flex-1 space-y-2 py-1'>
                    <div className='h-2 bg-gray-300 rounded w-3/4' />
                    <div className='h-2 bg-gray-300 rounded' />
                    <div className='h-2 bg-gray-300 rounded w-5/6' />
                    <div className='h-2 bg-gray-300 rounded w-4/6' />
                    <div className='h-2 bg-gray-300 rounded w-2/4' />
                </div>
            </div>
        </div>
    );
};
