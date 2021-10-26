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
                <p key={index} className={`${tagSize[size]} inline-flex mr-1 leading-4`}>
                    {tag}
                    {index !== tags.length - 1 && ','}
                </p>
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
