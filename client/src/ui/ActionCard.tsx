export interface ActionCardProps {
    src: string;
    title: string;
    description: string;
    className?: string;
    github?: string;
    live?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({
    src,
    title,
    description,
    className = '',
    github,
    live
}) => {
    return (
        <div className={`border border-gray-300 rounded-lg ${className}`}>
            <div className='flex bg-blue-100 rounded-lg'>
                <img className='mx-auto object-cover rounded-lg' src={src} />
            </div>

            <div className='m-3'>
                <div className='flex'>
                    <h2 className='text-lg mb-2'>{title}</h2>
                    <div className='flex-grow' />

                    {github && (
                        <a href={github} data-testid='github-link'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='mx-1 h-5 w-5'
                                viewBox='0 0 24 24'>
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                            </svg>
                        </a>
                    )}
                    {live && (
                        <a href={live} data-testid='live-link'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='mx-1 h-5 w-5'
                                viewBox='0 0 20 20'
                                fill='currentColor'>
                                <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                                <path
                                    fillRule='evenodd'
                                    d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </a>
                    )}
                </div>

                <p className='font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200'>
                    {description}
                </p>
            </div>
        </div>
    );
};
