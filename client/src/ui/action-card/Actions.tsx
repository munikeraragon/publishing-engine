export interface ActionsProps {
    completed: number | undefined;
    className?: string;
}

export interface EskeletonProps {
    className?: string;
}

export const Actions: React.FC<ActionsProps> = ({ completed, className = '' }) => {
    if (completed === undefined) return <ActionsEskeleton className={className} />;

    return (
        <div className='flex items-center justify-between mt-auto'>
            <div className='m-2 text-sm font-normal'>
                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <span className='white-space pre-wrap'>
                                <span>{completed}% </span>
                                completed
                            </span>
                        </div>
                    </div>

                    <div className='h-1.5 mb-0 bg-gray-200 rounded shadow-none'>
                        <div className='bg-green-500 h-full w-1 rounded-sm' />
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
    );
};

export const ActionsEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className={`${className} flex items-center items-baseline mt-2`}>
            <button
                className='bg-gray-300 animate-pulse flex justify-center w-32 h-1.5
             items-center ml-auto mb-2 mr-2 border rounded-md '></button>

            <button
                className='bg-gray-300 animate-pulse flex justify-center w-32 h-10
             items-center ml-auto mb-2 mr-2 border rounded-md  px-4 py-1.5'></button>
        </div>
    );
};
