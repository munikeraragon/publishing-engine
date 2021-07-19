export interface TagsProps {
    tags: string[] | null;
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
export const Tags: React.FC<TagsProps> = ({ tags, className = '' }) => {
    if (!tags) return <TagsEskeleton className={className} />;

    return (
        <div className={`${className} flex`}>
            {tags.map((tag, index) => (
                <button
                    key={index}
                    className={`text-sm mr-1 bg-${colors[index]}-300 py-0.5 px-2 font-medium rounded-md text-gray-800 align-middle`}>
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
