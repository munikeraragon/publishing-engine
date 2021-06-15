export interface TextInputProps {
    label: string;
    name: string;
    value: string;
    options: string[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    className?: string;
}

export const SelectInput: React.FC<TextInputProps> = ({
    label,
    name,
    value,
    options,
    onChange,
    required = false,
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

                <select
                    value={value}
                    onBlur={onChange}
                    className='focus:ring-indigo-500 focus:border-indigo-500 block h-14
                            w-full pl-4 pr-12 sm:text-sm border-gray-500 rounded-md'>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
