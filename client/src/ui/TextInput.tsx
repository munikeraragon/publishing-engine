export interface TextInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeHolder?: string;
    area?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    value,
    onChange,
    placeHolder = '',
    area
}) => {
    return (
        <div>
            <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
                {label}
            </label>
            <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <span className='text-gray-500 sm:text-sm'></span>
                </div>
                {area ? (
                    <textarea
                        id={name}
                        placeholder={placeHolder}
                        value={value}
                        onChange={onChange}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm'
                    />
                ) : (
                    <input
                        type='text'
                        name={name}
                        id={name}
                        placeholder={placeHolder}
                        value={value}
                        onChange={onChange}
                        className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                    />
                )}
            </div>
        </div>
    );
};
