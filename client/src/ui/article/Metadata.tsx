export interface MetaDataProps {
    userIcon: string | undefined;
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    wordsNumber: number | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Metadata: React.FC<MetaDataProps> = ({
    userIcon,
    userName,
    creationDate,
    readingTime,
    wordsNumber,
    className = ''
}) => {
    if (!userIcon && !userName && !creationDate && !readingTime && !wordsNumber)
        return <MetadataEskeleton className={className} />;

    return (
        <div className={`${className}`}>
            <div className='flex items-center justify-start'>
                <img className='inline-block h-10 w-10 rounded-full' src={userIcon} alt='' />
                <div className='flex flex-col ml-3 text-sm font-medium leading-5'>
                    <p className='text-gray-700'>{userName}</p>
                    <p className='text-gray-500 '>
                        {creationDate}
                        <span className='hidden mx-2 sm:inline'>·</span>
                        <span className='block sm:inline'>{readingTime} min read</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export const MetadataEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className={`${className}`}>
            <div className='flex items-center justify-start'>
                <span className='inline-block h-10 w-10 rounded-full bg-gray-300 animate-pulse' />
                <div className='flex flex-col ml-3'>
                    <span className='h-4 w-24 my-1 bg-gray-300 rounded animate-pulse' />
                    <div className='flex'>
                        <span className='h-4 w-16 my-1 bg-gray-300 rounded mr-4 animate-pulse' />
                        <span className='h-4 w-28 my-1 bg-gray-300 rounded animate-pulse' />
                    </div>
                </div>
            </div>
        </div>
    );
};
