export interface MetaDataProps {
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Metadata: React.FC<MetaDataProps> = ({
    userName,
    creationDate,
    readingTime,
    className = ''
}) => {
    if (userName === undefined || creationDate === undefined || readingTime === undefined)
        return <MetadataEskeleton className={className} />;

    return (
        <div className={`${className} flex text-gray-500`}>
            <p>{userName}</p>
            <span className='mx-2 inline'>·</span>
            <p>{creationDate}</p>
            <span className='hidden mx-2 md:inline'>·</span>
            <p className='hidden md:inline'>{readingTime} min read</p>
        </div>
    );
};

export const MetadataEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className={`${className} flex items-center`}>
            <span className='inline-block h-3 w-24 rounded bg-gray-300 animate-pulse' />
            <span className='hidden mx-2 sm:inline animate-pulse text-gray-400'>·</span>
            <span className='inline-block h-3 w-24 rounded-full bg-gray-300 animate-pulse' />
            <span className='hidden mx-2 sm:inline animate-pulse text-gray-400'>·</span>
            <span className='inline-block h-3 w-24 rounded-full bg-gray-300 animate-pulse' />
        </div>
    );
};

/*
export const MetadataEskeleton: React.FC<EskeletonProps> = ({
    isOwner,
    postId,
    prettyTitle,
    userName,
    className = ''
}) => {
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
                {isOwner && <Edit postId={postId} prettyTitle={prettyTitle} userName={userName} />}
            </div>
        </div>
    );
};
*/
