export interface SidebarProps {
    reactions: number;
    comments: number;
    saved: number;
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className, reactions, comments, saved }) => {
    return (
        <div className={`${className} flex w-20 justify-center mt-12 ml-2 mr-6 text-gray-600`}>
            <div className='fixed'>
                <div className='flex flex-col text-sm'>
                    <button className='flex flex-col mb-6 items-center'>
                        <span className='p-2 hover:bg-red-50 rounded-full hover:text-red-500'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
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
                    </button>

                    <button className='flex flex-col mb-6 items-center'>
                        <span className='p-2 hover:bg-teal-50 hover:text-teal-400 rounded-full'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                                />
                            </svg>
                        </span>
                        <span>{comments}</span>
                    </button>

                    <button className='flex flex-col mb-6 items-center'>
                        <span className='p-2 hover:bg-indigo-50 hover:text-indigo-500 rounded-full'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
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
                        <span>{saved}</span>
                    </button>

                    <button className='flex flex-col mb-6 p-2 items-center hover:bg-gray-100 rounded-full'>
                        <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
