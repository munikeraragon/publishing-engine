import { Tags } from '../article/Tags';
import { Title } from './Title';

export interface MetaDataProps {
    title: string;
    userIcon: string | undefined;
    userName: string | undefined;
    creationDate: string | undefined;
    readingTime: number | undefined;
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
    className = ''
}) => {
    if (!userIcon && !userName && !creationDate && !readingTime)
        return <MetadataEskeleton className={className} />;

    return (
        <div className='pt-4 px-4 pb-4'>
            <div className='flex items-center justify-start my-2'>
                <img
                    className='inline-block h-8 w-8 rounded-full'
                    src={
                        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoNTAsMzgsMjE3LDEpOyBzdHJva2U6cmdiYSg1MCwzOCwyMTcsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMzcnIHk9JzQ3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nMzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4='
                    }
                    alt=''
                />
                <div className='flex flex-col ml-3 text-sm font-medium leading-5'>
                    <p className='text-gray-900'>{userName}</p>
                    <p className='text-gray-500 text-xs'>
                        {creationDate}
                        <span className='hidden mx-2 sm:inline'>·</span>
                        <span className='block sm:inline'>{readingTime} min read</span>
                    </p>
                </div>
            </div>

            <Title title={title} />

            <Tags tags={['code', 'dev', 'nginx']} size='sm' className='ml-8 my-4' />

            <div className='flex ml-8 mt-8'>
                <button className='flex items-center text-sm'>
                    <span className='px-2 hover:bg-purple-200 rounded-full'>
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
                    <span>54 reactions</span>
                </button>

                <button className='flex justify-items-center text-sm'>
                    <span className='px-2 hover:bg-purple-200 rounded-full'>
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
                    <span>32 comments</span>
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
