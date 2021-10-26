import { Edit } from './Edit';

export interface MetaDataProps {
    postId: number | undefined;
    prettyTitle: string | undefined;
    userIcon: string | undefined;
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    wordsNumber: number | undefined;
    isOwner: boolean | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
    postId: number | undefined;
    prettyTitle: string | undefined;
    userName: string | undefined;
    isOwner: boolean | undefined;
}

export const Metadata: React.FC<MetaDataProps> = ({
    postId,
    prettyTitle,
    userIcon,
    userName,
    creationDate,
    readingTime,
    wordsNumber,
    isOwner,
    className = ''
}) => {
    if (!userIcon && !userName && !creationDate && !readingTime && !wordsNumber)
        return (
            <MetadataEskeleton
                className={className}
                isOwner={isOwner}
                postId={postId}
                prettyTitle={prettyTitle}
                userName={userName}
            />
        );

    return (
        <div className={`${className} flex text-gray-500`}>
            <p>{userName}</p>
            <span className='hidden mx-2 sm:inline'>·</span>
            <p>{creationDate}</p>
            <span className='hidden mx-2 sm:inline'>·</span>
            <p>{readingTime} min read</p>
        </div>
    );
};

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
