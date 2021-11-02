export interface SearchInputProps {
    label?: string;
    leftPlaceholder?: string;
    rightPlaceholder?: string;
    className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
    className,
    label = '',
    leftPlaceholder = '',
    rightPlaceholder = ''
}) => {
    return (
        <div className={`${className} flex justify-center items-center flex-col`}>
            <div>
                <label className='block text-sm font-medium leading-5 text-indigo-200'>
                    {label}
                </label>
            </div>
            <div className='relative items-center w-full max-w-lg mt-3 rounded-md sm:w-2/3'>
                <div className='relative mt-1 rounded-md shadow-sm'>
                    <div
                        className='flex absolute inset-y-0 left-0 items-center
                        pl-3 pointer-events-none'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            version='1'
                            viewBox='0 0 48 48'
                            enableBackground='new 0 0 48 48'
                            className='w-4 h-4'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <g fill='#616161'>
                                <rect
                                    x='34.6'
                                    y='28.1'
                                    transform='matrix(.707 -.707 .707 .707 -15.154 36.586)'
                                    width='4'
                                    height='17'></rect>
                                <circle cx='20' cy='20' r='16'></circle>
                            </g>
                            <rect
                                x='36.2'
                                y='32.1'
                                transform='matrix(.707 -.707 .707 .707 -15.839 38.239)'
                                fill='#37474F'
                                width='4'
                                height='12.3'></rect>
                            <circle fill='#64B5F6' cx='20' cy='20' r='13'></circle>
                            <path
                                fill='#BBDEFB'
                                d='M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z'></path>
                        </svg>
                    </div>
                    <input
                        type='text'
                        id='filter'
                        name='filter'
                        placeholder={leftPlaceholder}
                        data-testid='filter'
                        className='pl-10 block w-full py-3 border border-gray-500
                        rounded-md shadow-sm appearance-none
                        focus:outline-none focus:ring-indigo-500
                        focus:border-indigo-500 sm:text-sm'
                        autoComplete='off'
                        autoCorrect='off'
                        autoCapitalize='none'
                        spellCheck='false'
                    />
                </div>
                <p className='h-5 mt-1 text-sm text-red-600'></p>
                <div className='flex absolute inset-y-0 right-0 items-center pr-3 text-gray-500 pointer-events-none bottom-5'>
                    {rightPlaceholder}
                </div>
            </div>
        </div>
    );
};
