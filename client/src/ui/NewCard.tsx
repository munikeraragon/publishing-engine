import { Tags } from './article/Tags';

export interface Props {
    src: string | undefined | null;
    title: string | undefined;
    description: string | undefined;
    userName: string | undefined;
    userIcon: string | undefined;
    creationDate: string;
    readingTime: number;
    tags: string[];
    className?: string;
}

export const NewCard: React.FC<Props> = ({
    src,
    title,
    description,
    userIcon,
    userName,
    creationDate,
    readingTime,
    tags,
    className = ''
}) => {
    return (
        <div
            className='flex flex-col overflow-hidden rounded-lg shadow-lg
            transition transform hover:-translate-y-1.5 hover:shadow-2xl'
            style={{ height: 480 }}>
            <div className='flex-shrink-0'>
                <a href=''>
                    <div className='relative' style={{ paddingBottom: '56.25%' }}>
                        <div className='absolute inset-0'>
                            <img className=' w-full h-full object-cover' src={src} />
                        </div>
                    </div>
                </a>
            </div>

            <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
                <div className='flex flex-col flex-1'>
                    <a className='block hover:underline'>
                        <h3 className='mt-2 text-lg font-semibold leading-7 text-gray-900 md:text-xl'>
                            {title}
                        </h3>
                    </a>
                    <p className='my-3 text-base leading-5 text-gray-700 sm:text-base'>
                        {description}
                    </p>

                    <div className='mt-auto'>
                        <Tags tags={tags} size='sm' />
                    </div>
                </div>
                <div className='flex items-center mt-6'>
                    <div className='flex-shrink-0'>
                        <img src={userIcon} className='inline-block h-10 w-10 rounded-full' />
                    </div>
                    <div className='flex flex-col ml-3 text-sm font-medium leading-5'>
                        <p className='text-gray-700'>{userName}</p>
                        <p className='text-gray-500'>
                            {creationDate}
                            <span className='hidden mx-2 sm:inline'>·</span>
                            <span className='block sm:inline'>{readingTime} min read</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
