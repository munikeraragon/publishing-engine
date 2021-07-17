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
    if (!src && !title && !description) return ActionCardEskeleton(className);

    return (
        <div
            data-aos='fade-up'
            className={`flex flex-col transition transform hover:-translate-y-1.5 shadow-md font-semibold
                            hover:shadow-2xl duration-500 rounded-t-lg bg-white ${className}`}>
            <img
                alt=''
                className='object-cover w-full block bg-cover bg-no-repeat bg-center'
                style={{ height: 200 }}
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
                         text-gray-800 border-gray-800 hover:border-indigo-600 hover:text-indigo-600 px-4 py-1.5'>
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
    );
};

const ActionCardEskeleton = (className: string) => {
    return (
        <div
            data-aos='fade-up'
            className={`flex flex-col transition transform hover:-translate-y-1.5 shadow-md font-semibold
                            hover:shadow-2xl duration-500 rounded-t-lg bg-white ${className}`}>
            <div
                className='bg-gray-300 animate-pulse'
                style={{ height: 200 }}
            />

            <div className='flex flex-1 flex-col m-3'>
                <h2 className='bg-gray-300 animate-pulse rounded-md h-4 my-2'></h2>
                
                <div className='border border-gray-200 shadow rounded-md p-2 my-2'>
                <div className='animate-pulse flex space-x-4'>
                        <div className='flex-1 space-y-2 py-1'>
                            <div className='h-2 bg-gray-300 rounded w-3/4' />
                            <div className='h-2 bg-gray-300 rounded' />
                            <div className='h-2 bg-gray-300 rounded w-5/6' />
                                <div className='h-2 bg-gray-300 rounded w-4/6'/>
                                <div className='h-2 bg-gray-300 rounded w-2/4'/>
                        </div>
                    </div>
                </div>

                <div className='flex items-center items-baseline mt-2'>
                   
                <button
                        className='bg-gray-300 animate-pulse flex justify-center w-32 h-1.5
                         items-center ml-auto mb-2 mr-2 border rounded-md '>
                    </button>

                    <button
                        className='bg-gray-300 animate-pulse flex justify-center w-32 h-10
                         items-center ml-auto mb-2 mr-2 border rounded-md  px-4 py-1.5'>
                    </button>
                </div>
            </div>
        </div>
    );
};
