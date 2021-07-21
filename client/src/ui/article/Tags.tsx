export interface TagsProps {
    tags: string[] | null;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export interface Tag {
    color: string;
    label: string;
}

export interface EskeletonProps {
    className?: string;
}

const colors = ['green', 'red', 'blue', 'indigo', 'gray'];
const tagSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-md'
};

export const Tags: React.FC<TagsProps> = ({ tags, size = 'md', className = '' }) => {
    if (!tags) return <TagsEskeleton className={className} />;

    return (
        <div className={`${className} flex`}>
            {tags.map((tag, index) => (
                <button
                    key={index}
                    className={`${tagSize[size]} inline-flex mr-1 leading-4 bg-${colors[index]}-100 px-2.5 py-0.5
                    font-medium rounded-full text-gray-800 align-middle`}>
                    {tag}
                </button>
            ))}
        </div>
    );
};

export const TagsEskeleton: React.FC<EskeletonProps> = ({ className = '' }) => {
    return (
        <div className={className}>
            <button className={`mr-1 bg-gray-300 h-5 w-16 rounded-md animate-pulse`} />
            <button className={`mr-1 bg-gray-300 h-5 w-20 rounded-md animate-pulse`} />
            <button className={`mr-1 bg-gray-300 h-5 w-16 rounded-md animate-pulse`} />
            <button className={`mr-1 bg-gray-300 h-5 w-20 rounded-md animate-pulse`} />
        </div>
    );
};
