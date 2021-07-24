import { Tags } from '../article/Tags';
import { Title } from './Title';

export interface MetaDataProps {
    title: string;
    userIcon: string | undefined;
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
    reactions: number | undefined;
    comments: number | undefined;
    tags: string[] | null;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Metadata: React.FC<MetaDataProps> = ({
    title,
    userIcon,
    userName,
    creationDate,
    readingTime,
    tags,
    reactions,
    comments,
    className = ''
}) => {
    if (!userIcon && !userName && !creationDate && !readingTime)
        return <MetadataEskeleton className={className} />;

    return (
        <div className='pt-4 px-4 pb-4'>
            <div className='flex items-center justify-start my-2'>
                <img className='inline-block h-8 w-8 rounded-full' src={userIcon} alt='' />
                <div className='flex flex-col ml-2 text-sm font-medium leading-5'>
                    <p className='text-gray-900'>{userName}</p>
                    <p className='text-gray-500 text-xs'>
                        {creationDate}
                        <span className='mx-2'>·</span>
                        {readingTime} min read
                    </p>
                </div>
            </div>

            <Title title={title} className='lg:ml-10' />

            <Tags tags={tags} size='sm' className='lg:ml-10 my-4' />

            <div className='flex lg:ml-5 mt-4'>
                <button className='flex justify-items-center text-sm hover:bg-gray-50 px-4 py-2 rounded-md'>
                    <span className='px-2 rounded-full'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                            />
                        </svg>
                    </span>
                    <span>{reactions}</span>
                    <span className='hidden md:flex ml-1'>reactions</span>
                </button>

                <button className='flex justify-items-center text-sm hover:bg-gray-50 px-4 py-2 rounded-md'>
                    <span className='px-2 rounded-full'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                            />
                        </svg>
                    </span>
                    <span>{comments}</span>
                    <span className='hidden md:flex ml-1'>comments</span>
                </button>
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
