export interface TextInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeHolder?: string;
    required?: boolean;
    area?: boolean;
    className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    value,
    onChange,
    placeHolder = '',
    required = false,
    area = false,
    className = ''
}) => {
    return (
        <div className={`${className}`}>
            <label htmlFor={name} className='block text-sm font-medium text-gray-800'>
                {label}
                <span className='text-pink-500'>{required ? ' *' : ''}</span>
            </label>
            <div className='mt-2 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <span className='text-gray-500 sm:text-sm'></span>
                </div>
                {area ? (
                    <textarea
                        id={name}
                        placeholder={placeHolder}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className='mt-1 block w-full rounded-md border-gray-500 shadow-sm'
                    />
                ) : (
                    <input
                        type='text'
                        name={name}
                        id={name}
                        placeholder={placeHolder}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className='focus:ring-indigo-500 focus:border-indigo-500 block h-14
                                     w-full pl-4 pr-12 sm:text-sm border-gray-500 rounded-md'
                    />
                )}
            </div>
        </div>
    );
};
