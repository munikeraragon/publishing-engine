import Link from 'next/link';

export interface ActionCardProps {
    src: string;
    title: string;
    description: string;
    className?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
    src,
    title,
    description,
    className = ''
}) => {
    return (
        <Link href='/article-page'>
            <div
                className={`flex flex-col transition transform hover:-translate-y-1.5 shadow-md font-semibold
                            hover:shadow-2xl duration-500 rounded-t-lg bg-white ${className}`}>
                <img
                    className='object-cover w-full block bg-cover bg-no-repeat bg-center'
                    src={src}
                />

                <div className='flex flex-1 flex-col m-3'>
                    <h2 className='text-lg mb-2 break-words'>{title}</h2>
                    <p className='font-normal text-gray-700'>{description}</p>

                    <div className='flex items-center justify-between mt-auto'>
                        <div className='m-2 text-sm font-normal'>
                            <div className='w-full'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex'>
                                        <span className='white-space pre-wrap'>
                                            <span>100% </span>
                                            completed{' '}
                                        </span>
                                    </div>
                                </div>

                                <div className='h-1.5 mb-0 bg-gray-200 rounded shadow-none'>
                                    <div className='bg-green-500 h-full w-full' />
                                </div>
                            </div>
                        </div>

                        <button
                            className='flex justify-center items-center ml-auto mb-2 mr-2 border rounded-md
                         text-gray-800 border-gray-800 hover:border-indigo-600 hover:text-indigo-600 px-4 py-2'>
                            View
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M9 5l7 7-7 7'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};
